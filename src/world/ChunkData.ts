import { CHUNK_SIZE, CHUNK_HEIGHT } from './constants';

export class ChunkData {
  readonly chunkX: number;
  readonly chunkZ: number;
  readonly voxels: Uint8Array;
  dirty: boolean = true;

  constructor(chunkX: number, chunkZ: number) {
    this.chunkX = chunkX;
    this.chunkZ = chunkZ;
    this.voxels = new Uint8Array(CHUNK_SIZE * CHUNK_HEIGHT * CHUNK_SIZE);
  }

  // ═══════════════════════════════
  // VOXEL INDEX HELPERS
  // ═══════════════════════════════

  private index(x: number, y: number, z: number): number {
    return x + z * CHUNK_SIZE + y * CHUNK_SIZE * CHUNK_SIZE;
  }

  getBlock(x: number, y: number, z: number): number {
    if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
      return 0; // AIR
    }
    return this.voxels[this.index(x, y, z)];
  }

  setBlock(x: number, y: number, z: number, blockId: number): void {
    if (x < 0 || x >= CHUNK_SIZE || y < 0 || y >= CHUNK_HEIGHT || z < 0 || z >= CHUNK_SIZE) {
      return;
    }
    this.voxels[this.index(x, y, z)] = blockId;
    this.dirty = true;
  }

  // Get block at world coordinates (within this chunk)
  getBlockWorld(wx: number, wy: number, wz: number): number {
    const lx = wx - this.chunkX * CHUNK_SIZE;
    const lz = wz - this.chunkZ * CHUNK_SIZE;
    return this.getBlock(lx, wy, lz);
  }

  setBlockWorld(wx: number, wy: number, wz: number, blockId: number): void {
    const lx = wx - this.chunkX * CHUNK_SIZE;
    const lz = wz - this.chunkZ * CHUNK_SIZE;
    this.setBlock(lx, wy, lz, blockId);
  }

  // Check if block is on chunk edge
  isOnEdge(x: number, z: number): boolean {
    return x === 0 || x === CHUNK_SIZE - 1 || z === 0 || z === CHUNK_SIZE - 1;
  }

  // Get world position of chunk origin
  get worldX(): number {
    return this.chunkX * CHUNK_SIZE;
  }

  get worldZ(): number {
    return this.chunkZ * CHUNK_SIZE;
  }

  // Fill entire chunk with a single block type
  fill(blockId: number): void {
    this.voxels.fill(blockId);
  }
}
