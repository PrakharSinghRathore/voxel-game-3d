// ═══════════════════════════════
// CHUNK WORKER — Web Worker for mesh generation
// Runs off main thread, receives plain arrays
// ═══════════════════════════════

// This file is loaded as a Web Worker
// We inline the worker code as a blob URL since Vite worker imports can be tricky

const workerCode = `
// Since this is a worker, we need to inline the logic

const CHUNK_SIZE = 16;
const CHUNK_HEIGHT = 64;
const ATLAS_TILES = 16;

const FACE_DIRS = [
  { x: 1, y: 0, z: 0 },
  { x: -1, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 0, z: -1 },
];

const FACE_VERTICES = [
  [[1,0,0],[1,1,0],[1,1,1],[1,0,1]],
  [[0,0,1],[0,1,1],[0,1,0],[0,0,0]],
  [[0,1,0],[0,1,1],[1,1,1],[1,1,0]],
  [[0,0,1],[0,0,0],[1,0,0],[1,0,1]],
  [[1,0,1],[1,1,1],[0,1,1],[0,0,1]],
  [[0,0,0],[0,1,0],[1,1,0],[1,0,0]],
];

const FACE_NORMALS = [
  [1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1],
];

const BASE_UVS = [[0,0],[0,1],[1,1],[1,0]];

// Block properties (simplified for worker)
// Transparent: AIR(0), ICE(7), LAVA(11), WATER(12), LEAVES(13), PORTAL_ACTIVE(21), LILY_PAD(22), SPRUCE_LEAVES(24)
const TRANSPARENT_BLOCKS = new Set([0, 7, 11, 12, 13, 21, 22, 24]);
// Solid: everything except AIR, WATER, LAVA, PORTAL_ACTIVE, LILY_PAD
const SOLID_BLOCKS = new Set([1,2,3,4,5,6,7,8,9,10,14,15,16,17,18,19,20,23,25,26]);

function isTransparent(id) { return TRANSPARENT_BLOCKS.has(id); }
function isSolid(id) { return SOLID_BLOCKS.has(id); }

function getVoxel(voxels, x, y, z) {
  if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) return 0;
  return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}

function getVoxelSafe(voxels, neighbors, x, y, z) {
  if (y < 0 || y >= CHUNK_HEIGHT) return 0;
  if (x >= 0 && x < CHUNK_SIZE && z >= 0 && z < CHUNK_SIZE) {
    return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
  }
  const nIdx = x < 0 ? 1 : x >= CHUNK_SIZE ? 0 : z < 0 ? 3 : 2;
  const nVoxels = neighbors[nIdx];
  if (!nVoxels) return 0;
  const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  return nVoxels[lx + lz * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}

// Atlas tile mapping — must match BLOCK_DEFS in types/blocks.ts exactly
// BlockID enum: AIR=0, GRASS=1, DIRT=2, STONE=3, SAND=4, SANDSTONE=5, SNOW=6,
//   ICE=7, MUD=8, CRYSTAL=9, GLOWSTONE=10, LAVA=11, WATER=12, WOOD=13,
//   LEAVES=14, CACTUS=15, BEDROCK=16, COAL_ORE=17, IRON_ORE=18, GOLD_ORE=19,
//   DIAMOND_ORE=20, PORTAL_FRAME=21, PORTAL_ACTIVE=22, LILY_PAD=23,
//   SPRUCE_WOOD=24, SPRUCE_LEAVES=25, PACKED_ICE=26
const ATLAS_MAP = {
  0: [0,0],   // AIR (unused)
  1: [0,0],   // GRASS top
  2: [2,0],   // DIRT
  3: [3,0],   // STONE
  4: [4,0],   // SAND
  5: [5,0],   // SANDSTONE
  6: [6,0],   // SNOW
  7: [7,0],   // ICE
  8: [8,0],   // MUD
  9: [9,0],   // CRYSTAL
  10: [10,0],  // GLOWSTONE
  11: [11,0],  // LAVA
  12: [0,0],   // WATER (rendered separately)
  13: [12,0],  // WOOD
  14: [13,0],  // LEAVES
  15: [14,0],  // CACTUS
  16: [15,0],  // BEDROCK
  17: [0,1],   // COAL_ORE
  18: [1,1],   // IRON_ORE
  19: [2,1],   // GOLD_ORE
  20: [3,1],   // DIAMOND_ORE
  21: [4,1],   // PORTAL_FRAME
  22: [5,1],   // PORTAL_ACTIVE
  23: [6,1],   // LILY_PAD
  24: [7,1],   // SPRUCE_WOOD
  25: [8,1],   // SPRUCE_LEAVES
  26: [9,1],   // PACKED_ICE
};
// Side face textures (for blocks with different side texture)
const SIDE_MAP = {
  1: [1,0],   // GRASS side → grass_side tile at [1,0]
};
// Bottom face textures
const BOTTOM_MAP = {
  1: [2,0],   // GRASS bottom → dirt tile at [2,0]
};

self.onmessage = function(e) {
  const { chunkX, chunkZ, voxels, neighbors } = e.data;

  const positions = [];
  const normals = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  const waterPositions = [];
  const waterNormals = [];
  const waterUvs = [];
  const waterIndices = [];
  let vc = 0;
  let wvc = 0;

  for (let y = 0; y < CHUNK_HEIGHT; y++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const block = getVoxel(voxels, x, y, z);
        if (block === 0) continue; // AIR

        const isWater = block === 12; // WATER

        for (let fi = 0; fi < 6; fi++) {
          const dir = FACE_DIRS[fi];
          const nx = x + dir.x;
          const ny = y + dir.y;
          const nz = z + dir.z;

          let neighbor;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) {
            const nIdx = nx < 0 ? 1 : nx >= CHUNK_SIZE ? 0 : nz < 0 ? 3 : 2;
            const nV = neighbors[nIdx];
            if (nV) {
              const lnx = ((nx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              const lnz = ((nz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              neighbor = getVoxel(nV, lnx, ny, lnz);
            } else {
              neighbor = 0;
            }
          } else if (ny < 0 || ny >= CHUNK_HEIGHT) {
            neighbor = 0;
          } else {
            neighbor = getVoxel(voxels, nx, ny, nz);
          }

          if (isWater) {
            if (fi !== 2) continue;
            if (neighbor !== 0) continue;
          } else {
            if (isSolid(neighbor) && !isTransparent(neighbor)) continue;
            if (neighbor === block) continue;
          }

          // AO
          const ao = [1.0, 1.0, 1.0, 1.0];
          for (let v = 0; v < 4; v++) {
            const verts = FACE_VERTICES[fi];
            const vx = x + verts[v][0];
            const vy = y + verts[v][1];
            const vz = z + verts[v][2];
            const s1 = isSolid(getVoxelSafe(voxels, neighbors, vx + dir.x, vy, vz)) ? 1 : 0;
            const s2 = isSolid(getVoxelSafe(voxels, neighbors, vx, vy + dir.y, vz)) ? 1 : 0;
            const cn = isSolid(getVoxelSafe(voxels, neighbors, vx + dir.x, vy + dir.y, vz)) ? 1 : 0;
            ao[v] = 1.0 - (s1 + s2 + cn) * 0.2;
          }

          // UV — select atlas tile based on face direction
          let atlasInfo = ATLAS_MAP[block] || [0, 0];
          // Side faces: +X(0), -X(1), +Z(4), -Z(5)
          if ((fi === 0 || fi === 1 || fi === 4 || fi === 5) && SIDE_MAP[block]) {
            atlasInfo = SIDE_MAP[block];
          }
          // Bottom face: -Y(3)
          if (fi === 3 && BOTTOM_MAP[block]) {
            atlasInfo = BOTTOM_MAP[block];
          }
          const uvOffX = atlasInfo[0] / ATLAS_TILES;
          const uvOffY = atlasInfo[1] / ATLAS_TILES;
          const uvSz = 1 / ATLAS_TILES;

          const tPos = isWater ? waterPositions : positions;
          const tNorm = isWater ? waterNormals : normals;
          const tUv = isWater ? waterUvs : uvs;
          const tIdx = isWater ? waterIndices : indices;
          const cvc = isWater ? wvc : vc;

          const verts = FACE_VERTICES[fi];
          const normal = FACE_NORMALS[fi];

          for (let v = 0; v < 4; v++) {
            let vx = chunkX * CHUNK_SIZE + x + verts[v][0];
            let vy = y + verts[v][1];
            if (isWater) vy = y + 0.93;
            let vz = chunkZ * CHUNK_SIZE + z + verts[v][2];
            tPos.push(vx, vy, vz);
            tNorm.push(normal[0], normal[1], normal[2]);
            tUv.push(uvOffX + BASE_UVS[v][0] * uvSz, uvOffY + BASE_UVS[v][1] * uvSz);
            if (!isWater) colors.push(ao[v], ao[v], ao[v]);
          }

          tIdx.push(cvc, cvc + 1, cvc + 2);
          tIdx.push(cvc, cvc + 2, cvc + 3);

          if (isWater) wvc += 4; else vc += 4;
        }
      }
    }
  }

  // Create typed arrays FIRST, then transfer their buffers
  const posArr = new Float32Array(positions);
  const normArr = new Float32Array(normals);
  const uvArr = new Float32Array(uvs);
  const colorArr = new Float32Array(colors);
  const idxArr = new Uint32Array(indices);
  const wPosArr = new Float32Array(waterPositions);
  const wNormArr = new Float32Array(waterNormals);
  const wUvArr = new Float32Array(waterUvs);
  const wIdxArr = new Uint32Array(waterIndices);

  self.postMessage({
    chunkX: chunkX,
    chunkZ: chunkZ,
    positions: posArr,
    normals: normArr,
    uvs: uvArr,
    colors: colorArr,
    indices: idxArr,
    waterPositions: wPosArr,
    waterNormals: wNormArr,
    waterUvs: wUvArr,
    waterIndices: wIdxArr,
  }, [
    posArr.buffer, normArr.buffer, uvArr.buffer, colorArr.buffer, idxArr.buffer,
    wPosArr.buffer, wNormArr.buffer, wUvArr.buffer, wIdxArr.buffer,
  ]);
};
`;

let workerBlob: Blob | null = null;
let workerUrl: string | null = null;

export function createChunkWorker(): Worker {
  if (!workerUrl) {
    workerBlob = new Blob([workerCode], { type: 'application/javascript' });
    workerUrl = URL.createObjectURL(workerBlob);
  }
  return new Worker(workerUrl);
}
