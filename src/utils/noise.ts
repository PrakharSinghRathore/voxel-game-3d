import { createNoise2D, createNoise3D } from 'simplex-noise';

// ═══════════════════════════════
// CONFIGURED SIMPLEX INSTANCES
// ═══════════════════════════════

let seedValue = 0;

export function setSeed(s: number): void {
  seedValue = s;
}

export function getSeed(): number {
  return seedValue;
}

// Simple seed-based PRNG for simplex-noise
function seededRandom(): () => number {
  let s = seedValue;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

let noise2D: ReturnType<typeof createNoise2D>;
let noise3D: ReturnType<typeof createNoise3D>;
let caveNoise3D: ReturnType<typeof createNoise3D>;

// Climate noise layers — 3 independent simplex instances for biome selection
let continentalnessNoise: ReturnType<typeof createNoise2D>;
let temperatureNoise: ReturnType<typeof createNoise2D>;
let humidityNoise: ReturnType<typeof createNoise2D>;

// Extra noise for terrain detail within biomes
let detailNoise2D: ReturnType<typeof createNoise2D>;

export function initNoise(): void {
  const prng = seededRandom();
  noise2D = createNoise2D(prng);
  noise3D = createNoise3D(prng);
  caveNoise3D = createNoise3D(prng);

  // Climate layers — separate seeds for independent variation
  continentalnessNoise = createNoise2D(prng);
  temperatureNoise = createNoise2D(prng);
  humidityNoise = createNoise2D(prng);
  detailNoise2D = createNoise2D(prng);
}

export function getNoise2D(): ReturnType<typeof createNoise2D> {
  return noise2D;
}

export function getNoise3D(): ReturnType<typeof createNoise3D> {
  return noise3D;
}

export function getCaveNoise3D(): ReturnType<typeof createNoise3D> {
  return caveNoise3D;
}

export function getContinentalnessNoise(): ReturnType<typeof createNoise2D> {
  return continentalnessNoise;
}

export function getTemperatureNoise(): ReturnType<typeof createNoise2D> {
  return temperatureNoise;
}

export function getHumidityNoise(): ReturnType<typeof createNoise2D> {
  return humidityNoise;
}

export function getDetailNoise2D(): ReturnType<typeof createNoise2D> {
  return detailNoise2D;
}
