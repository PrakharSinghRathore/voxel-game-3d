import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { BlockID, BLOCK_DEFS, isBlockSolid } from '../types/blocks';
import { ddaRaycast, RaycastResult } from '../utils/math';
import { BREAK_REACH } from '../world/constants';
import { WorldManager } from '../world/WorldManager';
import { SurvivalStats } from './SurvivalStats';

export class BlockInteraction {
  private player: Player;
  private input: InputManager;
  private worldManager: WorldManager;
  private survivalStats: SurvivalStats | null = null;
  private breakProgress = 0;
  private targetBlock: RaycastResult | null = null;

  constructor(player: Player, input: InputManager, worldManager: WorldManager) {
    this.player = player; this.input = input; this.worldManager = worldManager;
  }

  setSurvivalStats(stats: SurvivalStats): void { this.survivalStats = stats; }

  update(dt: number): void {
    if (!this.input.isPointerLocked()) return;
    const eye = this.player.getEyePosition();
    const dir = this.player.getLookDirection();
    this.targetBlock = ddaRaycast(eye, dir, BREAK_REACH, (x, y, z) => isBlockSolid(this.worldManager.getBlock(x, y, z) as BlockID));
    if (this.input.isMouseButtonDown(0) && this.targetBlock.hit) {
      const blockId = this.worldManager.getBlock(this.targetBlock.blockX, this.targetBlock.blockY, this.targetBlock.blockZ);
      const def = BLOCK_DEFS[blockId as BlockID];
      if (def && def.hardness > 0) {
        this.breakProgress += dt / def.hardness;
        if (this.breakProgress >= 1.0) {
          this.worldManager.setBlock(this.targetBlock.blockX, this.targetBlock.blockY, this.targetBlock.blockZ, BlockID.AIR);
          this.breakProgress = 0;
        }
      }
    } else { this.breakProgress = 0; }
    // Place on RMB (simulated via 'KeyE' since Mouse2 is unreliable in pointer lock)
    if (this.input.isKeyJustPressed('KeyE') && this.targetBlock.hit) {
      const px = this.targetBlock.prevX; const py = this.targetBlock.prevY; const pz = this.targetBlock.prevZ;
      const playerAABB = this.player.getAABB();
      const blockAABB = { minX: px, minY: py, minZ: pz, maxX: px + 1, maxY: py + 1, maxZ: pz + 1 };
      const overlap = !(playerAABB.maxX < blockAABB.minX || playerAABB.minX > blockAABB.maxX || playerAABB.maxY < blockAABB.minY || playerAABB.minY > blockAABB.maxY || playerAABB.maxZ < blockAABB.minZ || playerAABB.minZ > blockAABB.maxZ);
      if (!overlap) this.worldManager.setBlock(px, py, pz, BlockID.STONE);
    }
    if (this.input.isKeyJustPressed('KeyF') && this.targetBlock.hit) {
      const blockId = this.worldManager.getBlock(this.targetBlock.blockX, this.targetBlock.blockY, this.targetBlock.blockZ);
      if (blockId === BlockID.WATER && this.survivalStats) this.survivalStats.addThirst(15);
    }
  }

  getBreakProgress(): number { return this.breakProgress; }
  getTargetBlock(): RaycastResult | null { return this.targetBlock; }
}
