import localforage from 'localforage';
import { SaveData, BlockDelta } from './schema';
import { Player } from '../player/Player';
import { SurvivalStats } from '../player/SurvivalStats';
import { useInventoryStore } from '../inventory/InventoryStore';
import { AUTO_SAVE_INTERVAL_MS } from '../world/constants';
import { ChunkData } from '../world/ChunkData';
import { TerrainGenerator } from '../world/TerrainGenerator';
import { BiomeGenerator } from '../world/BiomeGenerator';
import { CHUNK_SIZE, CHUNK_HEIGHT } from '../world/constants';
import { BlockID } from '../types/blocks';

const SAVE_KEY = 'voxel_survival_save';

export class SaveManager {
  private player: Player | null = null;
  private survivalStats: SurvivalStats | null = null;
  private terrainGenerator: TerrainGenerator | null = null;
  private biomeGenerator: BiomeGenerator | null = null;
  private chunks: Map<string, ChunkData> | null = null;
  private lastAutoSave = 0;
  private seed = 0;

  init(player: Player, survivalStats: SurvivalStats, terrainGen: TerrainGenerator, biomeGen: BiomeGenerator, chunks: Map<string, ChunkData>, seed: number): void {
    this.player = player;
    this.survivalStats = survivalStats;
    this.terrainGenerator = terrainGen;
    this.biomeGenerator = biomeGen;
    this.chunks = chunks;
    this.seed = seed;
    localforage.config({ name: 'voxel_survival' });
  }

  async save(): Promise<void> {
    if (!this.player || !this.survivalStats || !this.terrainGenerator || !this.biomeGenerator || !this.chunks) return;

    const deltas: Record<string, BlockDelta[]> = {};

    // Delta encoding: only store blocks that differ from generated terrain
    this.chunks.forEach((chunk, key) => {
      const originalBiomeMap = this.biomeGenerator!.generateBiomeMap(chunk.chunkX, chunk.chunkZ);
      const original = new ChunkData(chunk.chunkX, chunk.chunkZ);
      this.terrainGenerator!.generateChunk(original, originalBiomeMap);

      const chunkDeltas: BlockDelta[] = [];
      for (let y = 0; y < CHUNK_HEIGHT; y++) {
        for (let z = 0; z < CHUNK_SIZE; z++) {
          for (let x = 0; x < CHUNK_SIZE; x++) {
            const current = chunk.getBlock(x, y, z);
            const orig = original.getBlock(x, y, z);
            if (current !== orig) {
              chunkDeltas.push({ x: chunk.worldX + x, y, z: chunk.worldZ + z, newBlock: current });
            }
          }
        }
      }
      if (chunkDeltas.length > 0) {
        deltas[key] = chunkDeltas;
      }
    });

    const inventoryState = useInventoryStore.getState();
    const saveData: SaveData = {
      version: 2,
      seed: this.seed,
      timestamp: Date.now(),
      player: {
        position: [this.player.position.x, this.player.position.y, this.player.position.z],
        rotation: [this.player.yaw, this.player.pitch],
        stats: {
          health: this.survivalStats.health,
          hunger: this.survivalStats.hunger,
          thirst: this.survivalStats.thirst,
          stamina: this.survivalStats.stamina,
          temperature: this.survivalStats.temperature,
          mana: this.survivalStats.mana,
        },
        dimension: 'overworld',
      },
      inventory: inventoryState.slots,
      deltas,
      creatures: [],
    };

    await localforage.setItem(SAVE_KEY, saveData);
  }

  async load(): Promise<SaveData | null> {
    const data = await localforage.getItem<SaveData>(SAVE_KEY);
    return data;
  }

  async hasSave(): Promise<boolean> {
    const data = await localforage.getItem(SAVE_KEY);
    return data !== null;
  }

  async deleteSave(): Promise<void> {
    await localforage.removeItem(SAVE_KEY);
  }

  checkAutosave(elapsed: number): void {
    if ((elapsed - this.lastAutoSave) * 1000 > AUTO_SAVE_INTERVAL_MS) {
      this.lastAutoSave = elapsed;
      this.save().catch(console.error);
    }
  }
}
