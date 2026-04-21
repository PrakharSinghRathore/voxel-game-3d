import * as THREE from 'three';
import { BlockID } from '../types/blocks';
import { WorldManager } from '../world/WorldManager';
import { PortalParticles } from './PortalParticles';
import { PostProcess } from '../rendering/PostProcess';
import { VoidRealm } from './VoidRealm';
import { Player } from '../player/Player';
import { Vec3 } from '../utils/math';

export class PortalManager {
  private worldManager: WorldManager;
  private portalParticles: PortalParticles;
  private postProcess: PostProcess;
  private voidRealm: VoidRealm | null = null;
  private player: Player;
  private activePortals: Map<string, Vec3> = new Map();
  private currentDimension: 'overworld' | 'void' = 'overworld';

  constructor(scene: THREE.Scene, worldManager: WorldManager, player: Player, postProcess: PostProcess) {
    this.worldManager = worldManager;
    this.player = player;
    this.postProcess = postProcess;
    this.portalParticles = new PortalParticles(scene);
  }

  checkPortalActivation(x: number, y: number, z: number): void {
    // Check if a portal frame pattern exists around the given position
    // Simplified: check if 5 portal_frame blocks in vertical frame
    const frameCount = this.countAdjacentFrames(x, y, z);
    if (frameCount >= 4) {
      // Activate portal
      this.activePortals.set(`${x},${y},${z}`, { x, y, z });
      this.portalParticles.show(x + 0.5, y, z + 0.5);
      // Replace interior with portal_active
      this.worldManager.setBlock(x, y + 1, z, BlockID.PORTAL_ACTIVE);
      this.worldManager.setBlock(x, y + 2, z, BlockID.PORTAL_ACTIVE);
    }
  }

  private countAdjacentFrames(x: number, y: number, z: number): number {
    let count = 0;
    const offsets = [
      [0, 0, 0], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0],
    ];
    for (const [dx, dy, dz] of offsets) {
      if (this.worldManager.getBlock(x + dx, y + dy, z + dz) === BlockID.PORTAL_FRAME) {
        count++;
      }
    }
    return count;
  }

  update(dt: number): void {
    this.portalParticles.update(dt);

    // Check if player is inside an active portal
    if (this.currentDimension === 'overworld') {
      const px = Math.floor(this.player.position.x);
      const py = Math.floor(this.player.position.y);
      const pz = Math.floor(this.player.position.z);
      if (this.worldManager.getBlock(px, py, pz) === BlockID.PORTAL_ACTIVE) {
        this.transitionToVoid();
      }
    }
  }

  private transitionToVoid(): void {
    this.postProcess.fadeIn(500, () => {
      this.currentDimension = 'void';
      // Transition logic would be handled by GameEngine
      this.postProcess.fadeOut(500);
    });
  }

  isInVoid(): boolean { return this.currentDimension === 'void'; }
  getDimension(): string { return this.currentDimension; }
}
