// ═══════════════════════════════
// CHUNK WORKER — Web Worker for mesh generation
// Runs off main thread, receives plain arrays
// ═══════════════════════════════

// This file is loaded as a Web Worker
// We inline the worker code as a blob URL since Vite worker imports can be tricky

const workerCode = `
import { CHUNK_SIZE, CHUNK_HEIGHT, ATLAS_TILES } from '../world/constants';
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
const TRANSPARENT_BLOCKS = new Set([0, 7, 12, 13, 22, 23, 25]);
const SOLID_BLOCKS = new Set([1,2,3,4,5,6,8,9,10,14,15,16,17,18,19,20,21,24,26]);

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

// Atlas tile mapping
const ATLAS_MAP = {
  0: [0,0], 1: [0,0], 2: [2,0], 3: [3,0], 4: [4,0], 5: [5,0],
  6: [6,0], 7: [7,0], 8: [8,0], 9: [9,0], 10: [10,0], 11: [11,0],
  12: [0,0], 13: [13,0], 14: [14,0], 15: [15,0], 16: [0,1],
  17: [1,1], 18: [2,1], 19: [3,1], 20: [4,1], 21: [5,1], 22: [6,1],
  23: [7,1], 24: [8,1], 25: [9,1],
};
const SIDE_MAP = { 1: [1,0] }; // grass side
const BOTTOM_MAP = { 1: [2,0] }; // grass bottom

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

          // UV
          let atlasInfo = ATLAS_MAP[block] || [0, 0];
          if (fi >= 1 && fi <= 4 && SIDE_MAP[block]) atlasInfo = SIDE_MAP[block];
          if (fi === 3 && BOTTOM_MAP[block]) atlasInfo = BOTTOM_MAP[block];
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

  self.postMessage({
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    uvs: new Float32Array(uvs),
    colors: new Float32Array(colors),
    indices: new Uint32Array(indices),
    waterPositions: new Float32Array(waterPositions),
    waterNormals: new Float32Array(waterNormals),
    waterUvs: new Float32Array(waterUvs),
    waterIndices: new Uint32Array(waterIndices),
  }, [
    positions.buffer, normals.buffer, uvs.buffer, colors.buffer, indices.buffer,
    waterPositions.buffer, waterNormals.buffer, waterUvs.buffer, waterIndices.buffer,
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
