import { Player } from './Player';
import { InputManager } from '../engine/InputManager';
import { BlockID, BLOCK_DEFS, isBlockSolid } from '../types/blocks';
import { ddaRaycast, RaycastResult } from '../utils/math';
import { BREAK_REACH, SEA_LEVEL } from '../world/constants';
import { WorldManager } from '../world/WorldManager';
import { SurvivalStats } from './SurvivalStats';
import { ParticleSystem } from '../rendering/ParticleSystem';
import { getBlockDrops, getItemDef } from '../inventory/ItemDefs';
import { ItemDropManager } from '../entities/ItemDropManager';
import { useInventoryStore } from '../inventory/InventoryStore';

// Block colors for particles
const BLOCK_PARTICLE_COLORS: Record<number, [number, number, number]> = {
  [BlockID.GRASS]: [0.30, 0.69, 0.31],
  [BlockID.DIRT]: [0.47, 0.33, 0.28],
  [BlockID.STONE]: [0.62, 0.62, 0.62],
  [BlockID.SAND]: [0.99, 0.85, 0.21],
  [BlockID.SANDSTONE]: [0.91, 0.78, 0.42],
  [BlockID.SNOW]: [0.98, 0.98, 0.98],
  [BlockID.ICE]: [0.70, 0.90, 0.99],
  [BlockID.MUD]: [0.31, 0.20, 0.18],
  [BlockID.CRYSTAL]: [0.48, 0.12, 0.64],
  [BlockID.GLOWSTONE]: [1.0, 0.56, 0.0],
  [BlockID.WOOD]: [0.43, 0.30, 0.25],
  [BlockID.LEAVES]: [0.18, 0.49, 0.20],
  [BlockID.CACTUS]: [0.18, 0.49, 0.20],
  [BlockID.BEDROCK]: [0.13, 0.13, 0.13],
  [BlockID.COAL_ORE]: [0.26, 0.26, 0.26],
  [BlockID.IRON_ORE]: [0.62, 0.62, 0.62],
  [BlockID.GOLD_ORE]: [0.62, 0.62, 0.62],
  [BlockID.DIAMOND_ORE]: [0.62, 0.62, 0.62],
  [BlockID.SPRUCE_WOOD]: [0.31, 0.20, 0.18],
  [BlockID.SPRUCE_LEAVES]: [0.11, 0.37, 0.13],
  [BlockID.PACKED_ICE]: [0.51, 0.83, 0.98],
  [BlockID.PORTAL_FRAME]: [0.42, 0.11, 0.60],
};

export class BlockInteraction {
  private player: Player;
  private input: InputManager;
  private worldManager: WorldManager;
  private survivalStats: SurvivalStats | null = null;
  private particleSystem: ParticleSystem | null = null;
  private itemDropManager: ItemDropManager | null = null;
  private breakProgress = 0;
  private targetBlock: RaycastResult | null = null;
  private breakParticlesTimer = 0;
  private lastBreakBlockId: BlockID = BlockID.AIR;
  private lastPlaceTime = 0;

  constructor(player: Player, input: InputManager, worldManager: WorldManager) {
    this.player = player;
    this.input = input;
    this.worldManager = worldManager;
  }

  setSurvivalStats(stats: SurvivalStats): void { this.survivalStats = stats; }
  setParticleSystem(ps: ParticleSystem): void { this.particleSystem = ps; }
  setItemDropManager(idm: ItemDropManager): void { this.itemDropManager = idm; }

  update(dt: number): void {
    if (!this.input.isPointerLocked()) return;
    const eye = this.player.getEyePosition();
    const dir = this.player.getLookDirection();
    this.targetBlock = ddaRaycast(eye, dir, BREAK_REACH, (x, y, z) => isBlockSolid(this.worldManager.getBlock(x, y, z) as BlockID));

    // Left mouse button — break block
    if (this.input.isMouseButtonDown(0) && this.targetBlock.hit) {
      const blockId = this.worldManager.getBlock(this.targetBlock.blockX, this.targetBlock.blockY, this.targetBlock.blockZ) as BlockID;
      const def = BLOCK_DEFS[blockId];
      if (def && def.hardness > 0) {
        // Track which block we're breaking for particle color
        if (blockId !== this.lastBreakBlockId) {
          this.lastBreakBlockId = blockId;
        }

        this.breakProgress += dt / def.hardness;
        this.breakParticlesTimer += dt;

        // Emit break particles while mining
        if (this.particleSystem && this.breakParticlesTimer > 0.1) {
          this.breakParticlesTimer = 0;
          const color = BLOCK_PARTICLE_COLORS[blockId] ?? [0.5, 0.5, 0.5];
          this.particleSystem.emit(
            this.targetBlock.blockX + 0.5,
            this.targetBlock.blockY + 0.5,
            this.targetBlock.blockZ + 0.5,
            3,
            { speed: 1.5, color, life: 0.6, size: 0.08, spread: 0.8 }
          );
        }

        if (this.breakProgress >= 1.0) {
          this.breakBlock(blockId);
          this.breakProgress = 0;
        }
      }
    } else {
      this.breakProgress = 0;
      this.breakParticlesTimer = 0;
    }

    // Right mouse button — place block (use selected item)
    if (this.input.isMouseButtonDown(2) && this.targetBlock.hit) {
      const now = performance.now() / 1000;
      if (now - this.lastPlaceTime > 0.25) { // 250ms cooldown
        this.placeBlock();
        this.lastPlaceTime = now;
      }
    }

    // KeyE — place (fallback for pointer lock)
    if (this.input.isKeyJustPressed('KeyE') && this.targetBlock.hit) {
      this.placeBlock();
    }

    // KeyF — drink water
    if (this.input.isKeyJustPressed('KeyF') && this.targetBlock.hit) {
      const blockId = this.worldManager.getBlock(this.targetBlock.blockX, this.targetBlock.blockY, this.targetBlock.blockZ);
      if (blockId === BlockID.WATER && this.survivalStats) this.survivalStats.addThirst(15);
    }

    // KeyQ — drop item from selected hotbar slot
    if (this.input.isKeyJustPressed('KeyQ')) {
      const store = useInventoryStore.getState();
      const item = store.getSelectedItem();
      if (item && this.itemDropManager) {
        this.itemDropManager.dropItem(
          item.id, 1,
          this.player.position.x,
          this.player.position.y + 1.5,
          this.player.position.z,
          -Math.sin(this.player.yaw) * 3,
          2,
          -Math.cos(this.player.yaw) * 3
        );
        store.removeItem(store.selected, 1);
      }
    }
  }

  private breakBlock(blockId: BlockID): void {
    const bx = this.targetBlock!.blockX;
    const by = this.targetBlock!.blockY;
    const bz = this.targetBlock!.blockZ;

    // Emit break particles — burst on break
    if (this.particleSystem) {
      const color = BLOCK_PARTICLE_COLORS[blockId] ?? [0.5, 0.5, 0.5];
      this.particleSystem.emit(
        bx + 0.5, by + 0.5, bz + 0.5,
        20,
        { speed: 3, color, life: 0.8, size: 0.12, spread: 0.5 }
      );
    }

    // Drop items
    if (this.itemDropManager) {
      const drops = getBlockDrops(blockId);
      this.itemDropManager.dropItems(drops, bx, by, bz);
    }

    // Remove block
    this.worldManager.setBlock(bx, by, bz, BlockID.AIR);
  }

  private placeBlock(): void {
    const store = useInventoryStore.getState();
    const item = store.getSelectedItem();
    if (!item) return;

    // Check if the item is a placeable block
    const itemDef = getItemDef(item.id);
    if (!itemDef || !itemDef.isBlock || itemDef.blockId === undefined) return;

    const px = this.targetBlock!.prevX;
    const py = this.targetBlock!.prevY;
    const pz = this.targetBlock!.prevZ;

    // Check not placing inside player
    const playerAABB = this.player.getAABB();
    const blockAABB = { minX: px, minY: py, minZ: pz, maxX: px + 1, maxY: py + 1, maxZ: pz + 1 };
    const overlap = !(playerAABB.maxX < blockAABB.minX || playerAABB.minX > blockAABB.maxX ||
      playerAABB.maxY < blockAABB.minY || playerAABB.minY > blockAABB.maxY ||
      playerAABB.maxZ < blockAABB.minZ || playerAABB.minZ > blockAABB.maxZ);
    if (overlap) return;

    // Place the block
    this.worldManager.setBlock(px, py, pz, itemDef.blockId);
    store.removeItem(store.selected, 1);

    // Place particles
    if (this.particleSystem) {
      this.particleSystem.emit(
        px + 0.5, py + 0.5, pz + 0.5,
        8,
        { speed: 1, color: [0.8, 0.8, 0.8], life: 0.4, size: 0.06, spread: 0.6 }
      );
    }
  }

  getBreakProgress(): number { return this.breakProgress; }
  getTargetBlock(): RaycastResult | null { return this.targetBlock; }
}
