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
let biomeNoise2D: ReturnType<typeof createNoise2D>;

export function initNoise(): void {
  const prng = seededRandom();
  noise2D = createNoise2D(prng);
  noise3D = createNoise3D(prng);
  caveNoise3D = createNoise3D(prng);
  biomeNoise2D = createNoise2D(prng);
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

export function getBiomeNoise2D(): ReturnType<typeof createNoise2D> {
  return biomeNoise2D;
}
