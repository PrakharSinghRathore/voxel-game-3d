import { ChunkData } from './ChunkData';
import { CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL } from './constants';
import { BlockID } from '../types/blocks';
import { BiomeID, BIOME_DEFS } from '../types/biomes';
import { getNoise2D, getNoise3D, getCaveNoise3D } from '../utils/noise';

// ═══════════════════════════════
// TERRAIN GENERATOR
// Heightmap + cave + ore placement
// Supports 10 biomes with distinct terrain
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
        const biomeDef = BIOME_DEFS[biome];

        // Get height from noise — biome-specific amplitude and base height
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
                block = biomeDef.surfaceBlock;
                // Mountain snow cap: if surfaceY is high and biome is mountains, use snow
                if (biome === BiomeID.MOUNTAINS && surfaceY > SEA_LEVEL + 22) {
                  block = BlockID.SNOW;
                }
              } else if (y > surfaceY - 4) {
                block = biomeDef.subSurfaceBlock;
              }

              // Ore placement
              if (block === BlockID.STONE) {
                block = this.getOre(wx, y, wz);
              }
            }
          } else if (y <= SEA_LEVEL && y > surfaceY) {
            // Water fill above surface to sea level
            if (biome === BiomeID.SNOWY_PLAINS && y === SEA_LEVEL) {
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
    const biomeDef = BIOME_DEFS[biome];
    const baseHeight = SEA_LEVEL + biomeDef.baseHeight;
    const amplitude = biomeDef.amplitude;

    // Multi-octave noise for natural terrain
    const h1 = noise2D(wx * 0.003, wz * 0.003) * amplitude;
    const h2 = noise2D(wx * 0.012, wz * 0.012) * amplitude * 0.35;
    const h3 = noise2D(wx * 0.035, wz * 0.035) * amplitude * 0.12;
    const h4 = noise2D(wx * 0.08, wz * 0.08) * amplitude * 0.04;

    // Special terrain shaping per biome
    let height = baseHeight + h1 + h2 + h3 + h4;

    switch (biome) {
      case BiomeID.OCEAN:
        // Flat ocean floor with occasional ridges
        height = SEA_LEVEL - 6 + noise2D(wx * 0.008, wz * 0.008) * 3;
        break;

      case BiomeID.BEACH:
        // Gentle slope near sea level
        height = SEA_LEVEL - 1 + noise2D(wx * 0.005, wz * 0.005) * 3;
        break;

      case BiomeID.MOUNTAINS:
        // Dramatic peaks with ridges
        const ridge = Math.abs(noise2D(wx * 0.005, wz * 0.005));
        height = baseHeight + ridge * amplitude * 0.8
          + noise2D(wx * 0.01, wz * 0.01) * amplitude * 0.3
          + noise2D(wx * 0.04, wz * 0.04) * amplitude * 0.1;
        break;

      case BiomeID.JUNGLE:
        // Hilly with plateaus
        const plateau = noise2D(wx * 0.004, wz * 0.004);
        height = baseHeight + plateau * amplitude * 0.7
          + Math.abs(noise2D(wx * 0.015, wz * 0.015)) * amplitude * 0.3;
        break;

      case BiomeID.DESERT:
        // Dunes — smooth rolling sand
        const dune = noise2D(wx * 0.006, wz * 0.006);
        height = baseHeight + dune * amplitude * 0.6
          + Math.sin(wx * 0.03 + dune * 3) * 1.5; // Sand dune ripple
        break;

      case BiomeID.SNOWY_PLAINS:
        // Flat and cold
        height = baseHeight + noise2D(wx * 0.004, wz * 0.004) * amplitude * 0.5
          + noise2D(wx * 0.02, wz * 0.02) * amplitude * 0.15;
        break;

      case BiomeID.DARK_FOREST:
        // Uneven terrain with dips
        height = baseHeight + h1 * 0.8
          + Math.abs(noise2D(wx * 0.02, wz * 0.02)) * amplitude * 0.2;
        break;

      case BiomeID.SAVANNA:
        // Flat with occasional mesa-like bumps
        const mesa = noise2D(wx * 0.003, wz * 0.003);
        height = baseHeight + mesa * amplitude * 0.5
          + (mesa > 0.3 ? (mesa - 0.3) * amplitude * 1.5 : 0);
        break;
    }

    return height;
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

    // No caves in ocean floor
    if (y < SEA_LEVEL - 4) {
      isCave = false;
    }

    return isCave;
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

    // Crystal ore in mountains/jungle (rare)
    if (y < 35 && y > 10) {
      const crystalNoise = noise3D(wx * 0.12 + 5000, y * 0.12, wz * 0.12 + 5000);
      if (crystalNoise > 0.94) return BlockID.CRYSTAL;
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
