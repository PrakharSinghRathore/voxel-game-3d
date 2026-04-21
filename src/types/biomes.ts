export enum BiomeID {
  PLAINS = 0,
  DESERT,
  TUNDRA,
  MARSH,
  CRYSTAL_CAVERNS,
}

export interface BiomeDef {
  id: BiomeID;
  name: string;
  surfaceBlock: number; // BlockID for surface
  subSurfaceBlock: number; // BlockID for 1-3 blocks below surface
  underwaterBlock: number; // BlockID for underwater floor
  amplitude: number; // terrain height amplitude
  treeType: 'oak' | 'spruce' | 'cactus' | 'crystal' | 'none';
  treeDensity: number; // 0-1
  waterLevel: number; // sea level override or -1
  fogColor: [number, number, number];
  fogDensity: number;
  temperature: number; // -1 to 1 (cold to hot)
}

export const BIOME_DEFS: Record<BiomeID, BiomeDef> = {
  [BiomeID.PLAINS]: {
    id: BiomeID.PLAINS,
    name: 'Verdant Plains',
    surfaceBlock: 1,  // GRASS
    subSurfaceBlock: 2, // DIRT
    underwaterBlock: 2, // DIRT
    amplitude: 12,
    treeType: 'oak',
    treeDensity: 0.02,
    waterLevel: -1,
    fogColor: [0.784, 0.902, 0.788],
    fogDensity: 0.012,
    temperature: 0.2,
  },
  [BiomeID.DESERT]: {
    id: BiomeID.DESERT,
    name: 'Desert',
    surfaceBlock: 4, // SAND
    subSurfaceBlock: 5, // SANDSTONE
    underwaterBlock: 4,
    amplitude: 8,
    treeType: 'cactus',
    treeDensity: 0.008,
    waterLevel: -1,
    fogColor: [1.0, 0.976, 0.769],
    fogDensity: 0.010,
    temperature: 0.9,
  },
  [BiomeID.TUNDRA]: {
    id: BiomeID.TUNDRA,
    name: 'Frozen Tundra',
    surfaceBlock: 6, // SNOW
    subSurfaceBlock: 2, // DIRT
    underwaterBlock: 23, // PACKED_ICE
    amplitude: 4,
    treeType: 'spruce',
    treeDensity: 0.01,
    waterLevel: -1,
    fogColor: [0.89, 0.945, 0.992],
    fogDensity: 0.018,
    temperature: -0.8,
  },
  [BiomeID.MARSH]: {
    id: BiomeID.MARSH,
    name: 'Sunken Marsh',
    surfaceBlock: 8, // MUD
    subSurfaceBlock: 8, // MUD
    underwaterBlock: 8,
    amplitude: 3,
    treeType: 'none',
    treeDensity: 0,
    waterLevel: 22,
    fogColor: [0.306, 0.204, 0.180],
    fogDensity: 0.028,
    temperature: 0.1,
  },
  [BiomeID.CRYSTAL_CAVERNS]: {
    id: BiomeID.CRYSTAL_CAVERNS,
    name: 'Crystal Caverns',
    surfaceBlock: 9, // CRYSTAL
    subSurfaceBlock: 3, // STONE
    underwaterBlock: 3,
    amplitude: 10,
    treeType: 'crystal',
    treeDensity: 0.012,
    waterLevel: -1,
    fogColor: [0.290, 0.078, 0.549],
    fogDensity: 0.022,
    temperature: 0.0,
  },
};
