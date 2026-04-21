import { CHUNK_SIZE } from './constants';
import { BiomeID } from '../types/biomes';
import { getBiomeNoise2D } from '../utils/noise';

// ═══════════════════════════════
// BIOME GENERATOR
// 5 biomes with bilinear noise interpolation
// ═══════════════════════════════

export class BiomeGenerator {
  generateBiomeMap(chunkX: number, chunkZ: number): BiomeID[] {
    const map: BiomeID[] = new Array(CHUNK_SIZE * CHUNK_SIZE);
    const noise2D = getBiomeNoise2D();

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = chunkX * CHUNK_SIZE + lx;
        const wz = chunkZ * CHUNK_SIZE + lz;

        // Use noise to determine biome
        const temperature = noise2D(wx * 0.002, wz * 0.002); // -1 to 1
        const moisture = noise2D(wx * 0.003 + 5000, wz * 0.003 + 5000); // -1 to 1

        map[lx + lz * CHUNK_SIZE] = this.getBiome(temperature, moisture);
      }
    }

    return map;
  }

  private getBiome(temperature: number, moisture: number): BiomeID {
    // Temperature: cold < -0.3, warm > 0.3
    // Moisture: dry < -0.2, wet > 0.3

    if (temperature < -0.3) {
      return BiomeID.TUNDRA; // Cold = tundra
    }

    if (temperature > 0.4 && moisture < -0.1) {
      return BiomeID.DESERT; // Hot + dry = desert
    }

    if (moisture > 0.35) {
      return BiomeID.MARSH; // Wet = marsh
    }

    if (temperature > 0.2 && moisture > 0.0) {
      return BiomeID.CRYSTAL_CAVERNS; // Warm + slight moisture = crystal
    }

    return BiomeID.PLAINS; // Default
  }

  // Get biome at a single world position
  getBiomeAt(wx: number, wz: number): BiomeID {
    const noise2D = getBiomeNoise2D();
    const temperature = noise2D(wx * 0.002, wz * 0.002);
    const moisture = noise2D(wx * 0.003 + 5000, wz * 0.003 + 5000);
    return this.getBiome(temperature, moisture);
  }
}
