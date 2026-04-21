import { CHUNK_SIZE } from './constants';
import { BiomeID } from '../types/biomes';
import { ClimateNoise } from '../systems/biomes/ClimateNoise';
import { BiomeSelector } from '../systems/biomes/BiomeSelector';

// ═══════════════════════════════
// BIOME GENERATOR
// 10 biomes with 3-layer climate selection
// Continentalness → Temperature → Humidity
// ═══════════════════════════════

export class BiomeGenerator {
  private cache: Map<string, BiomeID> = new Map();
  private climateCache: Map<string, { cont: number; temp: number; humid: number }> = new Map();
  private static CACHE_LIMIT = 8192;

  /**
   * Generate a biome map for an entire chunk (16×16).
   */
  generateBiomeMap(chunkX: number, chunkZ: number): BiomeID[] {
    const map: BiomeID[] = new Array(CHUNK_SIZE * CHUNK_SIZE);

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        const wx = chunkX * CHUNK_SIZE + lx;
        const wz = chunkZ * CHUNK_SIZE + lz;
        map[lx + lz * CHUNK_SIZE] = this.getBiomeAt(wx, wz);
      }
    }

    return map;
  }

  /**
   * Get the biome at a single world position.
   * Results are cached for performance.
   */
  getBiomeAt(wx: number, wz: number): BiomeID {
    const key = `${Math.floor(wx)},${Math.floor(wz)}`;

    // Check cache
    const cached = this.cache.get(key);
    if (cached !== undefined) return cached;

    // Calculate climate
    const climate = ClimateNoise.getClimate(wx, wz);

    // Select biome
    const biome = BiomeSelector.selectBiome(climate);

    // Cache result
    if (this.cache.size >= BiomeGenerator.CACHE_LIMIT) {
      // Evict oldest entries (simple approach: clear half)
      const keys = Array.from(this.cache.keys());
      for (let i = 0; i < keys.length / 2; i++) {
        this.cache.delete(keys[i]);
      }
    }
    this.cache.set(key, biome);

    return biome;
  }

  /**
   * Get raw climate values at a position (for terrain height blending).
   */
  getClimateAt(wx: number, wz: number): { cont: number; temp: number; humid: number } {
    const key = `${Math.floor(wx)},${Math.floor(wz)}`;
    const cached = this.climateCache.get(key);
    if (cached) return cached;

    const climate = ClimateNoise.getClimate(wx, wz);
    const result = { cont: climate.continentalness, temp: climate.temperature, humid: climate.humidity };

    if (this.climateCache.size >= BiomeGenerator.CACHE_LIMIT) {
      const keys = Array.from(this.climateCache.keys());
      for (let i = 0; i < keys.length / 2; i++) {
        this.climateCache.delete(keys[i]);
      }
    }
    this.climateCache.set(key, result);

    return result;
  }
}
