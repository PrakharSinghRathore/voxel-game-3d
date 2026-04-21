import { ChunkData } from './ChunkData';
import { CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL } from './constants';
import { BlockID } from '../types/blocks';
import { BiomeID, BIOME_DEFS } from '../types/biomes';
import { getNoise2D } from '../utils/noise';

// ═══════════════════════════════
// STRUCTURE GENERATOR
// Trees, cacti, and biome-specific features for 10 biomes
// ═══════════════════════════════

export class StructureGenerator {

  generateStructures(chunk: ChunkData, biomeMap: BiomeID[]): void {
    const noise2D = getNoise2D();
    const cx = chunk.chunkX;
    const cz = chunk.chunkZ;

    for (let lx = 2; lx < CHUNK_SIZE - 2; lx++) {
      for (let lz = 2; lz < CHUNK_SIZE - 2; lz++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wz = cz * CHUNK_SIZE + lz;
        const biome = biomeMap[lx + lz * CHUNK_SIZE];
        const biomeDef = BIOME_DEFS[biome];

        // Find surface
        let surfaceY = -1;
        for (let y = CHUNK_HEIGHT - 1; y >= 0; y--) {
          const block = chunk.getBlock(lx, y, lz);
          if (block !== BlockID.AIR && block !== BlockID.WATER && block !== BlockID.ICE) {
            surfaceY = y;
            break;
          }
        }

        if (surfaceY < 1 || surfaceY > CHUNK_HEIGHT - 10) continue;

        // Don't place structures underwater
        if (surfaceY < SEA_LEVEL && biome === BiomeID.OCEAN) continue;
        if (surfaceY < SEA_LEVEL - 1 && biome === BiomeID.BEACH) continue;

        const placeNoise = noise2D(wx * 0.5, wz * 0.5);
        const density = biomeDef.treeDensity;

        if (placeNoise > (1.0 - density * 2)) {
          switch (biome) {
            case BiomeID.PLAINS:
              this.placeOakTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.FOREST:
              if (Math.random() > 0.3) {
                this.placeOakTree(chunk, lx, surfaceY + 1, lz);
              } else {
                this.placeBirchTree(chunk, lx, surfaceY + 1, lz);
              }
              break;
            case BiomeID.DARK_FOREST:
              this.placeDarkOakTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.DESERT:
              this.placeCactus(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.SNOWY_PLAINS:
              this.placeSpruceTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.MOUNTAINS:
              if (surfaceY < SEA_LEVEL + 18) {
                this.placeSpruceTree(chunk, lx, surfaceY + 1, lz);
              }
              break;
            case BiomeID.JUNGLE:
              this.placeJungleTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.SAVANNA:
              this.placeAcaciaTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.BEACH:
              // Occasional palm-like tree (using wood+leaves)
              if (Math.random() < 0.15) {
                this.placeOakTree(chunk, lx, surfaceY + 1, lz);
              }
              break;
          }
        }

        // Extra jungle ground cover
        if (biome === BiomeID.JUNGLE && Math.random() < 0.05) {
          if (chunk.getBlock(lx, surfaceY, lz) === BlockID.AIR) {
            // Place leaf on ground for bush effect
            if (surfaceY + 1 < CHUNK_HEIGHT) {
              chunk.setBlock(lx, surfaceY + 1, lz, BlockID.LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // OAK TREE (Plains, Forest)
  // ═══════════════════════════════
  private placeOakTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 5 + Math.floor(Math.random() * 3); // 5-7

    // Trunk
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.WOOD);
      }
    }

    // Leaves - sphere around top
    const leafStart = height - 3;
    for (let dy = leafStart; dy <= height + 1; dy++) {
      const radius = dy <= height - 1 ? 2 : 1;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < height) continue;
          if (Math.abs(dx) + Math.abs(dz) > radius + 1) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // BIRCH TREE (Forest variant)
  // ═══════════════════════════════
  private placeBirchTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 6 + Math.floor(Math.random() * 3); // 6-8

    // Trunk (using regular wood — birch would need a separate block)
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.WOOD);
      }
    }

    // Lighter, rounder leaves
    const leafStart = height - 3;
    for (let dy = leafStart; dy <= height + 1; dy++) {
      const radius = dy === height + 1 ? 1 : 2;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < height) continue;
          if (Math.abs(dx) === radius && Math.abs(dz) === radius && Math.random() < 0.4) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // DARK OAK TREE (Dark Forest)
  // ═══════════════════════════════
  private placeDarkOakTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 7 + Math.floor(Math.random() * 4); // 7-10

    // Thick trunk (2×2)
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.SPRUCE_WOOD);
        if (x + 1 < CHUNK_SIZE) chunk.setBlock(x + 1, y + i, z, BlockID.SPRUCE_WOOD);
        if (z + 1 < CHUNK_SIZE) chunk.setBlock(x, y + i, z + 1, BlockID.SPRUCE_WOOD);
        if (x + 1 < CHUNK_SIZE && z + 1 < CHUNK_SIZE) chunk.setBlock(x + 1, y + i, z + 1, BlockID.SPRUCE_WOOD);
      }
    }

    // Dense, dark canopy
    const leafStart = height - 4;
    for (let dy = leafStart; dy <= height + 1; dy++) {
      const radius = dy <= height - 2 ? 3 : 2;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (Math.abs(dx) + Math.abs(dz) > radius + 2) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.SPRUCE_LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // SPRUCE TREE (Snowy Plains, Mountains)
  // ═══════════════════════════════
  private placeSpruceTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 6 + Math.floor(Math.random() * 4); // 6-9

    // Trunk
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.SPRUCE_WOOD);
      }
    }

    // Conical leaves
    for (let dy = 2; dy <= height; dy++) {
      const layerFromTop = height - dy;
      const radius = Math.min(Math.floor(layerFromTop / 2) + 1, 2);
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < height) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.SPRUCE_LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // JUNGLE TREE (Jungle) — Tall with vines
  // ═══════════════════════════════
  private placeJungleTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 8 + Math.floor(Math.random() * 7); // 8-14

    // Tall trunk
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.WOOD);
      }
    }

    // Large canopy at the top
    const leafStart = height - 4;
    for (let dy = leafStart; dy <= height + 2; dy++) {
      const radius = dy <= height - 1 ? 3 : (dy === height ? 2 : 1);
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < height) continue;
          // More organic shape
          if (Math.abs(dx) === radius && Math.abs(dz) === radius && Math.random() < 0.5) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.LEAVES);
            }
          }
        }
      }
    }

    // Vine-like leaves hanging down from canopy
    for (let i = 0; i < 3; i++) {
      const vx = x + (Math.random() > 0.5 ? 2 : -2);
      const vy = y + leafStart - Math.floor(Math.random() * 3);
      const vz = z + (Math.random() > 0.5 ? 2 : -2);
      if (vx >= 0 && vx < CHUNK_SIZE && vy >= 0 && vy < CHUNK_HEIGHT && vz >= 0 && vz < CHUNK_SIZE) {
        if (chunk.getBlock(vx, vy, vz) === BlockID.AIR) {
          chunk.setBlock(vx, vy, vz, BlockID.LEAVES);
        }
      }
    }
  }

  // ═══════════════════════════════
  // ACACIA TREE (Savanna) — Flat canopy
  // ═══════════════════════════════
  private placeAcaciaTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 5 + Math.floor(Math.random() * 3); // 5-7

    // Trunk
    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.WOOD);
      }
    }

    // Flat, wide canopy
    for (let dy = height - 1; dy <= height + 1; dy++) {
      const radius = dy === height ? 3 : 2;
      for (let dx = -radius; dx <= radius; dx++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx === 0 && dz === 0 && dy < height + 1) continue;
          // Make it flat — skip corners and some edges
          if (dy === height - 1 && Math.abs(dx) + Math.abs(dz) > 3) continue;
          if (dy === height + 1 && Math.abs(dx) + Math.abs(dz) > 2) continue;
          const lx = x + dx;
          const ly = y + dy;
          const lz = z + dz;
          if (lx >= 0 && lx < CHUNK_SIZE && ly >= 0 && ly < CHUNK_HEIGHT && lz >= 0 && lz < CHUNK_SIZE) {
            if (chunk.getBlock(lx, ly, lz) === BlockID.AIR) {
              chunk.setBlock(lx, ly, lz, BlockID.LEAVES);
            }
          }
        }
      }
    }
  }

  // ═══════════════════════════════
  // CACTUS (Desert)
  // ═══════════════════════════════
  private placeCactus(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 2 + Math.floor(Math.random() * 3); // 2-4

    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.CACTUS);
      }
    }
  }
}
