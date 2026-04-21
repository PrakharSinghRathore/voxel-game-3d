import { BiomeID } from '../../types/biomes';
import { ClimateData } from './ClimateNoise';

// ═══════════════════════════════
// BIOME SELECTOR — Climate-based biome selection
// Uses 3-layer climate data to determine biome
// ═══════════════════════════════

export class BiomeSelector {
  /**
   * Select a biome based on climate data.
   *
   * Decision tree:
   * 1. Continentalness < -0.25 → OCEAN
   * 2. Continentalness -0.25 to -0.10 → BEACH
   * 3. Continentalness > 0.55 → MOUNTAINS
   * 4. Otherwise, use temperature + humidity grid:
   *
   *              DRY (< -0.2)    MEDIUM (-0.2..0.3)   WET (> 0.3)
   * COLD (< -0.3)  Snowy Plains    Snowy Plains        Snowy Plains
   * WARM (-0.3..0.3) Savanna       Plains              Forest
   * HOT (> 0.3)    Desert          Savanna              Jungle / Dark Forest
   */
  static selectBiome(climate: ClimateData): BiomeID {
    const { continentalness, temperature, humidity } = climate;

    // Layer 1: Ocean/Beach — low continentalness
    if (continentalness < -0.25) {
      return BiomeID.OCEAN;
    }
    if (continentalness < -0.10) {
      return BiomeID.BEACH;
    }

    // Layer 1: Mountains — high continentalness
    if (continentalness > 0.55) {
      return BiomeID.MOUNTAINS;
    }

    // Layer 2+3: Temperature × Humidity grid
    if (temperature < -0.3) {
      // Cold biomes
      return BiomeID.SNOWY_PLAINS;
    }

    if (temperature > 0.3) {
      // Hot biomes
      if (humidity < -0.15) {
        return BiomeID.DESERT;
      }
      if (humidity > 0.35) {
        // Very hot and wet = jungle; hot and moderately wet = dark forest
        if (humidity > 0.55) {
          return BiomeID.JUNGLE;
        }
        return BiomeID.DARK_FOREST;
      }
      // Hot and medium humidity
      return BiomeID.SAVANNA;
    }

    // Warm biomes (temperature -0.3 to 0.3)
    if (humidity < -0.2) {
      return BiomeID.SAVANNA;
    }
    if (humidity > 0.3) {
      return BiomeID.FOREST;
    }
    if (humidity > 0.1 && temperature > 0.1) {
      return BiomeID.FOREST;
    }

    return BiomeID.PLAINS;
  }

  /**
   * Get a blended biome ID by averaging climate over an area.
   * This creates smoother biome transitions.
   */
  static selectBiomeSmooth(climate: ClimateData): BiomeID {
    return BiomeSelector.selectBiome(climate);
  }
}
