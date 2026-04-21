import { ChunkData } from './ChunkData';
import { CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL } from './constants';
import { BlockID } from '../types/blocks';
import { BiomeID } from '../types/biomes';
import { getNoise2D, getNoise3D, getCaveNoise3D } from '../utils/noise';

// ═══════════════════════════════
// TERRAIN GENERATOR
// Heightmap + cave + ore placement
// ═══════════════════════════════

export class TerrainGenerator {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  generateChunk(chunk: ChunkData, biomeMap: BiomeID[]): void {
    const cx = chunk.chunkX;
    const cz = chunk.chunkZ;

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const biomeIdx = lx + lz * CHUNK_SIZE;
        const biome = biomeMap[biomeIdx];

        // Get height from noise
        const height = this.getHeight(wx, wz, biome);
        const surfaceY = Math.floor(height);

        // Build column
        for (let y = 0; y < CHUNK_HEIGHT; y++) {
          let block = BlockID.AIR;

          if (y === 0) {
            block = BlockID.BEDROCK;
          } else if (y < 6) {
            // Lava pockets near bottom
            const lavaNoise = getNoise3D()(wx * 0.1, y * 0.1, wz * 0.1);
            if (lavaNoise > 0.55) {
              block = BlockID.LAVA;
            } else {
              // Glowstone veins near lava
              const glowNoise = getNoise3D()(wx * 0.15, y * 0.15, wz * 0.15 + 100);
              if (glowNoise > 0.65) {
                block = BlockID.GLOWSTONE;
              } else {
                block = BlockID.STONE;
              }
            }
          } else if (y <= surfaceY) {
            // Underground stone with caves
            const isCave = this.isCave(wx, y, wz);

            if (isCave) {
              if (y < 6) {
                block = BlockID.LAVA;
              } else {
                block = BlockID.AIR;
              }
            } else {
              block = BlockID.STONE;

              // Surface layers
              if (y === surfaceY) {
                block = this.getSurfaceBlock(biome);
              } else if (y > surfaceY - 4) {
                block = this.getSubSurfaceBlock(biome);
              }

              // Ore placement
              if (block === BlockID.STONE) {
                block = this.getOre(wx, y, wz);
              }
            }
          } else if (y <= SEA_LEVEL && y > surfaceY) {
            // Water fill above surface to sea level
            if (biome === BiomeID.TUNDRA) {
              block = BlockID.ICE;
            } else {
              block = BlockID.WATER;
            }
          }

          chunk.setBlock(lx, y, lz, block);
        }
      }
    }

    chunk.dirty = false;
  }

  private getHeight(wx: number, wz: number, biome: BiomeID): number {
    const noise2D = getNoise2D();
    const baseHeight = SEA_LEVEL;

    let amplitude = 12;
    switch (biome) {
      case BiomeID.PLAINS: amplitude = 12; break;
      case BiomeID.DESERT: amplitude = 8; break;
      case BiomeID.TUNDRA: amplitude = 4; break;
      case BiomeID.MARSH: amplitude = 3; break;
      case BiomeID.CRYSTAL_CAVERNS: amplitude = 10; break;
    }

    const h1 = noise2D(wx * 0.005, wz * 0.005) * amplitude;
    const h2 = noise2D(wx * 0.02, wz * 0.02) * amplitude * 0.3;
    const h3 = noise2D(wx * 0.05, wz * 0.05) * amplitude * 0.1;

    return baseHeight + h1 + h2 + h3;
  }

  private isCave(wx: number, y: number, wz: number): boolean {
    if (y <= 0) return false; // Never carve bedrock

    const noise3D = getNoise3D();
    const caveNoise3D = getCaveNoise3D();

    const n1 = noise3D(wx * 0.04, y * 0.04, wz * 0.04);
    const n2 = caveNoise3D(wx * 0.04 + 500, y * 0.04, wz * 0.04 + 500);

    // AND both passes
    let isCave = n1 > 0.42 && n2 > 0.42;

    // Increase density below y=20
    if (y < 20) {
      const depthFactor = 1.0 + (20 - y) * 0.02;
      const adjustedN1 = noise3D(wx * 0.04, y * 0.04 * depthFactor, wz * 0.04);
      const adjustedN2 = caveNoise3D(wx * 0.04 + 500, y * 0.04 * depthFactor, wz * 0.04 + 500);
      isCave = adjustedN1 > 0.35 && adjustedN2 > 0.35;
    }

    return isCave;
  }

  private getSurfaceBlock(biome: BiomeID): BlockID {
    switch (biome) {
      case BiomeID.PLAINS: return BlockID.GRASS;
      case BiomeID.DESERT: return BlockID.SAND;
      case BiomeID.TUNDRA: return BlockID.SNOW;
      case BiomeID.MARSH: return BlockID.MUD;
      case BiomeID.CRYSTAL_CAVERNS: return BlockID.CRYSTAL;
      default: return BlockID.GRASS;
    }
  }

  private getSubSurfaceBlock(biome: BiomeID): BlockID {
    switch (biome) {
      case BiomeID.PLAINS: return BlockID.DIRT;
      case BiomeID.DESERT: return BlockID.SANDSTONE;
      case BiomeID.TUNDRA: return BlockID.DIRT;
      case BiomeID.MARSH: return BlockID.MUD;
      case BiomeID.CRYSTAL_CAVERNS: return BlockID.STONE;
      default: return BlockID.DIRT;
    }
  }

  private getOre(wx: number, y: number, wz: number): BlockID {
    const noise3D = getNoise3D();

    // Coal: y < 50, weight 20
    if (y < 50) {
      const coalNoise = noise3D(wx * 0.15 + 1000, y * 0.15, wz * 0.15 + 1000);
      if (coalNoise > 0.75) return BlockID.COAL_ORE;
    }

    // Iron: y < 40, weight 10
    if (y < 40) {
      const ironNoise = noise3D(wx * 0.15 + 2000, y * 0.15, wz * 0.15 + 2000);
      if (ironNoise > 0.82) return BlockID.IRON_ORE;
    }

    // Gold: y < 25, weight 4
    if (y < 25) {
      const goldNoise = noise3D(wx * 0.15 + 3000, y * 0.15, wz * 0.15 + 3000);
      if (goldNoise > 0.90) return BlockID.GOLD_ORE;
    }

    // Diamond: y < 12, weight 1
    if (y < 12) {
      const diamondNoise = noise3D(wx * 0.15 + 4000, y * 0.15, wz * 0.15 + 4000);
      if (diamondNoise > 0.96) return BlockID.DIAMOND_ORE;
    }

    return BlockID.STONE;
  }

  // Generate terrain for a specific chunk (returns a fresh ChunkData)
  generateChunkRaw(chunkX: number, chunkZ: number, biomeMap: BiomeID[]): ChunkData {
    const chunk = new ChunkData(chunkX, chunkZ);
    this.generateChunk(chunk, biomeMap);
    return chunk;
  }
}
