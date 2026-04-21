import { ChunkData } from './ChunkData';
import { TerrainGenerator } from './TerrainGenerator';
import { BiomeGenerator } from './BiomeGenerator';
import { StructureGenerator } from './StructureGenerator';
import { CHUNK_SIZE, RENDER_DISTANCE, MAX_DIRTY_PER_FRAME } from './constants';
import { BiomeID } from '../types/biomes';

// ═══════════════════════════════
// WORLD MANAGER — Chunk load/unload, dirty queue
// Stores biome maps alongside chunks for worker tinting
// ═══════════════════════════════

interface ChunkEntry {
  chunk: ChunkData;
  biomeMap: BiomeID[]; // 16×16 = 256 entries per chunk
}

export class WorldManager {
  private chunks: Map<string, ChunkEntry> = new Map();
  private terrainGenerator: TerrainGenerator;
  private biomeGenerator: BiomeGenerator;
  private structureGenerator: StructureGenerator;
  private dirtyQueue: Set<string> = new Set();
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
    this.terrainGenerator = new TerrainGenerator(seed);
    this.biomeGenerator = new BiomeGenerator();
    this.structureGenerator = new StructureGenerator();
  }

  private chunkKey(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  getChunk(cx: number, cz: number): ChunkData | undefined {
    return this.chunks.get(this.chunkKey(cx, cz))?.chunk;
  }

  getBiomeMap(cx: number, cz: number): BiomeID[] | undefined {
    return this.chunks.get(this.chunkKey(cx, cz))?.biomeMap;
  }

  getBlock(wx: number, wy: number, wz: number): number {
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.chunks.get(this.chunkKey(cx, cz))?.chunk;
    if (!chunk) return 0;
    return chunk.getBlockWorld(wx, wy, wz);
  }

  setBlock(wx: number, wy: number, wz: number, blockId: number): void {
    const cx = Math.floor(wx / CHUNK_SIZE);
    const cz = Math.floor(wz / CHUNK_SIZE);
    const chunk = this.chunks.get(this.chunkKey(cx, cz))?.chunk;
    if (!chunk) return;
    chunk.setBlockWorld(wx, wy, wz, blockId);
    this.dirtyQueue.add(this.chunkKey(cx, cz));

    // Mark neighbor chunks dirty if on edge
    const lx = wx - cx * CHUNK_SIZE;
    const lz = wz - cz * CHUNK_SIZE;
    if (lx === 0) this.dirtyQueue.add(this.chunkKey(cx - 1, cz));
    if (lx === CHUNK_SIZE - 1) this.dirtyQueue.add(this.chunkKey(cx + 1, cz));
    if (lz === 0) this.dirtyQueue.add(this.chunkKey(cx, cz - 1));
    if (lz === CHUNK_SIZE - 1) this.dirtyQueue.add(this.chunkKey(cx, cz + 1));
  }

  getBiomeAt(wx: number, wz: number): BiomeID {
    return this.biomeGenerator.getBiomeAt(wx, wz);
  }

  update(playerX: number, playerZ: number): string[] {
    const pcx = Math.floor(playerX / CHUNK_SIZE);
    const pcz = Math.floor(playerZ / CHUNK_SIZE);
    const chunksToLoad: string[] = [];

    // Load chunks in render distance
    for (let dx = -RENDER_DISTANCE; dx <= RENDER_DISTANCE; dx++) {
      for (let dz = -RENDER_DISTANCE; dz <= RENDER_DISTANCE; dz++) {
        if (dx * dx + dz * dz > RENDER_DISTANCE * RENDER_DISTANCE) continue;
        const cx = pcx + dx;
        const cz = pcz + dz;
        const key = this.chunkKey(cx, cz);

        if (!this.chunks.has(key)) {
          const chunk = new ChunkData(cx, cz);
          const biomeMap = this.biomeGenerator.generateBiomeMap(cx, cz);
          this.terrainGenerator.generateChunk(chunk, biomeMap);
          this.structureGenerator.generateStructures(chunk, biomeMap);
          this.chunks.set(key, { chunk, biomeMap });
          this.dirtyQueue.add(key);
          chunksToLoad.push(key);
        }
      }
    }

    // Unload distant chunks
    const unloadDistance = RENDER_DISTANCE + 2;
    for (const [key, entry] of this.chunks) {
      const dx = entry.chunk.chunkX - pcx;
      const dz = entry.chunk.chunkZ - pcz;
      if (dx * dx + dz * dz > unloadDistance * unloadDistance) {
        this.chunks.delete(key);
        this.dirtyQueue.delete(key);
      }
    }

    // Process dirty queue (max N per frame)
    const processedChunks: string[] = [];
    let count = 0;
    for (const key of this.dirtyQueue) {
      if (count >= MAX_DIRTY_PER_FRAME) break;
      processedChunks.push(key);
      this.dirtyQueue.delete(key);
      count++;
    }

    return processedChunks;
  }

  getDirtyChunkKeys(): Set<string> {
    return this.dirtyQueue;
  }

  markDirty(cx: number, cz: number): void {
    this.dirtyQueue.add(this.chunkKey(cx, cz));
  }

  getAllChunks(): Map<string, ChunkData> {
    // Return just the ChunkData objects for compatibility
    const result = new Map<string, ChunkData>();
    for (const [key, entry] of this.chunks) {
      result.set(key, entry.chunk);
    }
    return result;
  }

  getTerrainGenerator(): TerrainGenerator {
    return this.terrainGenerator;
  }

  getBiomeGenerator(): BiomeGenerator {
    return this.biomeGenerator;
  }

  getSeed(): number {
    return this.seed;
  }

  // Get neighbor chunk voxel arrays for meshing
  getNeighborVoxels(cx: number, cz: number): (Uint8Array | null)[] {
    return [
      this.chunks.get(this.chunkKey(cx + 1, cz))?.chunk.voxels ?? null,  // +X
      this.chunks.get(this.chunkKey(cx - 1, cz))?.chunk.voxels ?? null,  // -X
      this.chunks.get(this.chunkKey(cx, cz + 1))?.chunk.voxels ?? null,  // +Z
      this.chunks.get(this.chunkKey(cx, cz - 1))?.chunk.voxels ?? null,  // -Z
    ];
  }

  // Get neighbor biome maps for meshing (for edge column tinting)
  getNeighborBiomeMaps(cx: number, cz: number): (BiomeID[] | null)[] {
    return [
      this.chunks.get(this.chunkKey(cx + 1, cz))?.biomeMap ?? null,  // +X
      this.chunks.get(this.chunkKey(cx - 1, cz))?.biomeMap ?? null,  // -X
      this.chunks.get(this.chunkKey(cx, cz + 1))?.biomeMap ?? null,  // +Z
      this.chunks.get(this.chunkKey(cx, cz - 1))?.biomeMap ?? null,  // -Z
    ];
  }
}
