import {
  getContinentalnessNoise,
  getTemperatureNoise,
  getHumidityNoise,
} from '../../utils/noise';

// ═══════════════════════════════
// CLIMATE NOISE — 3-layer system for biome selection
// Layer 1: Continentalness → Land vs Ocean vs Mountains
// Layer 2: Temperature → Cold vs Warm vs Hot
// Layer 3: Humidity → Dry vs Wet
// ═══════════════════════════════

export interface ClimateData {
  continentalness: number; // -1 to 1
  temperature: number;    // -1 to 1
  humidity: number;       // -1 to 1
}

export class ClimateNoise {
  /**
   * Calculate the 3 climate values at a world position.
   * Uses multi-octave noise with different scales for natural variation.
   */
  static getClimate(wx: number, wz: number): ClimateData {
    const contNoise = getContinentalnessNoise();
    const tempNoise = getTemperatureNoise();
    const humidNoise = getHumidityNoise();

    // Continentalness — large scale (determines landmass shapes)
    // Low frequency for big continents, high frequency for coastline detail
    let continentalness = contNoise(wx * 0.0015, wz * 0.0015) * 0.7
      + contNoise(wx * 0.004, wz * 0.004) * 0.25
      + contNoise(wx * 0.01, wz * 0.01) * 0.05;

    // Temperature — large scale with latitude-like banding
    let temperature = tempNoise(wx * 0.001, wz * 0.001) * 0.6
      + tempNoise(wx * 0.005, wz * 0.005) * 0.3
      + tempNoise(wx * 0.02, wz * 0.02) * 0.1;

    // Humidity — medium scale for regional variation
    let humidity = humidNoise(wx * 0.002, wz * 0.002) * 0.6
      + humidNoise(wx * 0.008, wz * 0.008) * 0.3
      + humidNoise(wx * 0.025, wz * 0.025) * 0.1;

    // Clamp to -1..1
    continentalness = Math.max(-1, Math.min(1, continentalness));
    temperature = Math.max(-1, Math.min(1, temperature));
    humidity = Math.max(-1, Math.min(1, humidity));

    return { continentalness, temperature, humidity };
  }
}
