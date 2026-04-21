export const CHUNK_SIZE = 16;
export const CHUNK_HEIGHT = 64;
export const SEA_LEVEL = 22;
export const RENDER_DISTANCE = 6;
export const MAX_LOADED_CHUNKS = 200;
export const MAX_DIRTY_PER_FRAME = 2;
export const LOD_DISTANCE = 4;

// Gravity
export const GRAVITY = -28;

// Player dimensions
export const PLAYER_WIDTH = 0.6;
export const PLAYER_HEIGHT = 1.8;
export const PLAYER_EYE_HEIGHT = 1.6;
export const PLAYER_HALF_WIDTH = PLAYER_WIDTH / 2;

// Block interaction
export const BREAK_REACH = 5.0;
export const PLACE_REACH = 5.0;

// Day/night
export const DAY_CYCLE_MS = 1200000; // 20 minutes

// Creature FSM
export const FSM_UPDATE_INTERVAL = 6; // frames between FSM updates
export const CREATURE_MAX_INSTANCES = 32;

// Bullet pool
export const BULLET_POOL_SIZE = 200;

// Particle system
export const MAX_PARTICLES = 5000;

// Point light pool
export const POINT_LIGHT_POOL_SIZE = 8;

// Save interval
export const AUTO_SAVE_INTERVAL_MS = 30000;

// Atlas
export const ATLAS_SIZE = 512;
export const ATLAS_TILES = 16;
export const TILE_SIZE = ATLAS_SIZE / ATLAS_TILES; // 32
