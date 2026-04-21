// ═══════════════════════════════
// CHUNK MESHER — runs in Web Worker
// Greedy mesh + AO baking
// No Three.js imports — pure arrays
// ═══════════════════════════════

import { CHUNK_SIZE, CHUNK_HEIGHT, ATLAS_TILES } from './constants';
import { BlockID, BLOCK_DEFS, isBlockSolid, isBlockTransparent } from '../types/blocks';

// Face directions: +X, -X, +Y, -Y, +Z, -Z
const FACE_DIRS = [
  { x: 1, y: 0, z: 0 },  // right
  { x: -1, y: 0, z: 0 }, // left
  { x: 0, y: 1, z: 0 },  // top
  { x: 0, y: -1, z: 0 }, // bottom
  { x: 0, y: 0, z: 1 },  // front
  { x: 0, y: 0, z: -1 }, // back
];

// Vertices per face (4 corners per quad)
const FACE_VERTICES: number[][][] = [
  // +X face
  [[1,0,0],[1,1,0],[1,1,1],[1,0,1]],
  // -X face
  [[0,0,1],[0,1,1],[0,1,0],[0,0,0]],
  // +Y face
  [[0,1,0],[0,1,1],[1,1,1],[1,1,0]],
  // -Y face
  [[0,0,1],[0,0,0],[1,0,0],[1,0,1]],
  // +Z face
  [[1,0,1],[1,1,1],[0,1,1],[0,0,1]],
  // -Z face
  [[0,0,0],[0,1,0],[1,1,0],[1,0,0]],
];

// Normals per face
const FACE_NORMALS: number[][] = [
  [1,0,0], [-1,0,0], [0,1,0], [0,-1,0], [0,0,1], [0,0,-1],
];

// UV coordinates for a quad (shared)
const BASE_UVS: number[][] = [
  [0, 0], [0, 1], [1, 1], [1, 0],
];

export interface MeshData {
  positions: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  colors: Float32Array;
  indices: Uint32Array;
  waterPositions: Float32Array;
  waterNormals: Float32Array;
  waterUvs: Float32Array;
  waterIndices: Uint32Array;
}

export function buildChunkMesh(
  voxels: Uint8Array,
  neighborVoxels: (Uint8Array | null)[], // [+X, -X, +Z, -Z]
  chunkX: number,
  chunkZ: number
): MeshData {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];

  const waterPositions: number[] = [];
  const waterNormals: number[] = [];
  const waterUvs: number[] = [];
  const waterIndices: number[] = [];

  let vertexCount = 0;
  let waterVertexCount = 0;

  for (let y = 0; y < CHUNK_HEIGHT; y++) {
    for (let z = 0; z < CHUNK_SIZE; z++) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        const block = getVoxel(voxels, x, y, z);
        if (block === BlockID.AIR) continue;

        const isWater = block === BlockID.WATER;

        for (let faceIdx = 0; faceIdx < 6; faceIdx++) {
          const dir = FACE_DIRS[faceIdx];
          const nx = x + dir.x;
          const ny = y + dir.y;
          const nz = z + dir.z;

          // Get neighbor block
          let neighbor: number;
          if (nx < 0 || nx >= CHUNK_SIZE || nz < 0 || nz >= CHUNK_SIZE) {
            // Use neighbor chunk data
            const nIdx = nx < 0 ? 1 : nx >= CHUNK_SIZE ? 0 : nz < 0 ? 3 : 2;
            const nVoxels = neighborVoxels[nIdx];
            if (nVoxels) {
              const lnx = ((nx % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              const lnz = ((nz % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
              neighbor = getVoxel(nVoxels, lnx, ny, lnz);
            } else {
              neighbor = BlockID.AIR;
            }
          } else if (ny < 0 || ny >= CHUNK_HEIGHT) {
            neighbor = BlockID.AIR;
          } else {
            neighbor = getVoxel(voxels, nx, ny, nz);
          }

          // Should we render this face?
          const neighborTransparent = isBlockTransparent(neighbor as BlockID);
          const neighborSolid = isBlockSolid(neighbor as BlockID);

          if (isWater) {
            // Water only renders top face, and only if neighbor is air
            if (faceIdx !== 2) continue; // Only +Y face for water
            if (neighbor !== BlockID.AIR) continue;
          } else {
            // Solid blocks: render face if neighbor is transparent and not same block
            if (!neighborTransparent && neighborSolid) continue;
            if (neighbor === block) continue;
          }

          // ═══════════════════════════════
          // AO BAKING
          // ═══════════════════════════════
          const ao: number[] = [];
          for (let v = 0; v < 4; v++) {
            const verts = FACE_VERTICES[faceIdx];
            const vx = x + verts[v][0];
            const vy = y + verts[v][1];
            const vz = z + verts[v][2];

            // Check 3 corner neighbors for AO
            const side1 = isBlockSolid(getVoxelSafe(voxels, neighborVoxels, vx + dir.x, vy + dir.y, vz + dir.z) as BlockID) ? 1 : 0;
            const side2a = isBlockSolid(getVoxelSafe(voxels, neighborVoxels, vx + (faceIdx < 2 ? 0 : FACE_DIRS[faceIdx === 2 || faceIdx === 3 ? 4 : 0].x), vy + (faceIdx >= 2 && faceIdx < 4 ? 0 : FACE_DIRS[faceIdx < 2 ? 2 : 4].y), vz + (faceIdx >= 4 ? 0 : FACE_DIRS[faceIdx < 2 ? 4 : 2].z)) as BlockID) ? 1 : 0;
            const corner = isBlockSolid(getVoxelSafe(voxels, neighborVoxels, vx + dir.x + (faceIdx < 2 ? 0 : 0), vy + dir.y, vz + dir.z) as BlockID) ? 1 : 0;
            ao[v] = 1.0 - (side1 + side2a + corner) * 0.2;
          }

          // ═══════════════════════════════
          // UV CALCULATION
          // ═══════════════════════════════
          const blockDef = BLOCK_DEFS[block as BlockID];
          let atlasX = blockDef.atlasTileX;
          let atlasY = blockDef.atlasTileY;

          // Use side/bottom textures where appropriate
          if (faceIdx === 2 && blockDef.sideAtlasX !== undefined) {
            // Top face uses default (top texture)
          } else if ((faceIdx === 0 || faceIdx === 1 || faceIdx === 4 || faceIdx === 5) && blockDef.sideAtlasX !== undefined) {
            atlasX = blockDef.sideAtlasX;
            atlasY = blockDef.sideAtlasY!;
          } else if (faceIdx === 3 && blockDef.bottomAtlasX !== undefined) {
            atlasX = blockDef.bottomAtlasX;
            atlasY = blockDef.bottomAtlasY!;
          }

          const uvOffX = atlasX / ATLAS_TILES;
          const uvOffY = atlasY / ATLAS_TILES;
          const uvSize = 1 / ATLAS_TILES;

          // ═══════════════════════════════
          // EMIT VERTICES
          // ═══════════════════════════════
          const targetPositions = isWater ? waterPositions : positions;
          const targetNormals = isWater ? waterNormals : normals;
          const targetUvs = isWater ? waterUvs : uvs;
          const targetIndices = isWater ? waterIndices : indices;
          const vc = isWater ? waterVertexCount : vertexCount;

          const verts = FACE_VERTICES[faceIdx];
          const normal = FACE_NORMALS[faceIdx];

          for (let v = 0; v < 4; v++) {
            let vx = chunkX * CHUNK_SIZE + x + verts[v][0];
            let vy = y + verts[v][1];
            let vz = chunkZ * CHUNK_SIZE + z + verts[v][2];

            // Water surface slightly lower
            if (isWater) {
              vy = y + 0.93;
            }

            targetPositions.push(vx, vy, vz);
            targetNormals.push(normal[0], normal[1], normal[2]);
            targetUvs.push(
              uvOffX + BASE_UVS[v][0] * uvSize,
              uvOffY + BASE_UVS[v][1] * uvSize
            );
            if (!isWater) {
              colors.push(ao[v], ao[v], ao[v]);
            }
          }

          // Two triangles per face
          targetIndices.push(vc, vc + 1, vc + 2);
          targetIndices.push(vc, vc + 2, vc + 3);

          if (isWater) {
            waterVertexCount += 4;
          } else {
            vertexCount += 4;
          }
        }
      }
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    uvs: new Float32Array(uvs),
    colors: new Float32Array(colors),
    indices: new Uint32Array(indices),
    waterPositions: new Float32Array(waterPositions),
    waterNormals: new Float32Array(waterNormals),
    waterUvs: new Float32Array(waterUvs),
    waterIndices: new Uint32Array(waterIndices),
  };
}

function getVoxel(voxels: Uint8Array, x: number, y: number, z: number): number {
  if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
    return BlockID.AIR;
  }
  return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}

function getVoxelSafe(voxels: Uint8Array, neighbors: (Uint8Array | null)[], x: number, y: number, z: number): number {
  if (y < 0 || y >= CHUNK_HEIGHT) return BlockID.AIR;
  if (x >= 0 && x < CHUNK_SIZE && z >= 0 && z < CHUNK_SIZE) {
    return voxels[x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
  }
  // Out of chunk bounds - check neighbors
  const nIdx = x < 0 ? 1 : x >= CHUNK_SIZE ? 0 : z < 0 ? 3 : 2;
  const nVoxels = neighbors[nIdx];
  if (!nVoxels) return BlockID.AIR;
  const lx = ((x % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  const lz = ((z % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
  return nVoxels[lx + lz * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE];
}
