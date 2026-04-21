import { ChunkData } from './ChunkData';
import { CHUNK_SIZE, CHUNK_HEIGHT, SEA_LEVEL } from './constants';
import { BlockID } from '../types/blocks';
import { BiomeID } from '../types/biomes';
import { getNoise2D } from '../utils/noise';

// ═══════════════════════════════
// STRUCTURE GENERATOR
// Trees, crystals, cacti
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

        const placeNoise = noise2D(wx * 0.5, wz * 0.5);
        const density = this.getTreeDensity(biome);

        if (placeNoise > (1.0 - density * 2)) {
          switch (biome) {
            case BiomeID.PLAINS:
              this.placeOakTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.DESERT:
              this.placeCactus(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.TUNDRA:
              this.placeSpruceTree(chunk, lx, surfaceY + 1, lz);
              break;
            case BiomeID.CRYSTAL_CAVERNS:
              this.placeCrystalPillar(chunk, lx, surfaceY + 1, lz);
              break;
          }
        }
      }
    }
  }

  private getTreeDensity(biome: BiomeID): number {
    switch (biome) {
      case BiomeID.PLAINS: return 0.02;
      case BiomeID.DESERT: return 0.008;
      case BiomeID.TUNDRA: return 0.01;
      case BiomeID.MARSH: return 0;
      case BiomeID.CRYSTAL_CAVERNS: return 0.012;
      default: return 0;
    }
  }

  // ═══════════════════════════════
  // OAK TREE (Plains)
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
          if (dx === 0 && dz === 0 && dy < height) continue; // trunk space
          if (Math.abs(dx) + Math.abs(dz) > radius + 1) continue; // corners
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
  // SPRUCE TREE (Tundra)
  // ═══════════════════════════════
  private placeSpruceTree(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 6 + Math.floor(Math.random() * 3); // 6-8

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

  // ═══════════════════════════════
  // CRYSTAL PILLAR (Crystal Caverns)
  // ═══════════════════════════════
  private placeCrystalPillar(chunk: ChunkData, x: number, y: number, z: number): void {
    const height = 3 + Math.floor(Math.random() * 6); // 3-8

    for (let i = 0; i < height; i++) {
      if (y + i < CHUNK_HEIGHT) {
        chunk.setBlock(x, y + i, z, BlockID.CRYSTAL);
      }
    }
  }
}
