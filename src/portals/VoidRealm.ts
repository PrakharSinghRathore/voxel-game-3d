import { WorldManager } from '../world/WorldManager';
import { Vec3 } from '../utils/math';

export class VoidRealm {
  private worldManager: WorldManager;
  private seed: number;
  private spawnPoint: Vec3 = { x: 0, y: 60, z: 0 };

  constructor(worldManager: WorldManager, seed: number) {
    this.worldManager = worldManager;
    this.seed = seed + 999;
  }

  getSpawnPoint(): Vec3 { return this.spawnPoint; }
  getSeed(): number { return this.seed; }
}
