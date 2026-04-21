import { Vec3, AABB, aabbFromCenter, aabbIntersects } from '../utils/math';
import { PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_EYE_HEIGHT, GRAVITY, SEA_LEVEL } from '../world/constants';
import { BlockID, isBlockSolid } from '../types/blocks';

// ═══════════════════════════════
// PLAYER — State, physics, collision
// ═══════════════════════════════

export class Player {
  position: Vec3 = { x: 0, y: 40, z: 0 };
  velocity: Vec3 = { x: 0, y: 0, z: 0 };
  yaw: number = 0;
  pitch: number = 0;
  onGround: boolean = false;
  isSwimming: boolean = false;
  isSprinting: boolean = false;
  isDiving: boolean = false;
  // Input from controller — acceleration direction for swimming
  inputAccel: Vec3 = { x: 0, y: 0, z: 0 };
  private getBlock: (wx: number, wy: number, wz: number) => number;

  constructor(getBlock: (wx: number, wy: number, wz: number) => number) {
    this.getBlock = getBlock;
  }

  getAABB(): AABB {
    return aabbFromCenter(this.position.x, this.position.y + PLAYER_HEIGHT / 2, this.position.z, PLAYER_WIDTH / 2, PLAYER_HEIGHT / 2, PLAYER_WIDTH / 2);
  }

  getEyePosition(): Vec3 {
    return { x: this.position.x, y: this.position.y + PLAYER_EYE_HEIGHT, z: this.position.z };
  }

  getLookDirection(): Vec3 {
    return { x: -Math.sin(this.yaw) * Math.cos(this.pitch), y: Math.sin(this.pitch), z: -Math.cos(this.yaw) * Math.cos(this.pitch) };
  }

  /**
   * Find the best spawn position — searches nearby positions for land above SEA_LEVEL.
   * If none found, spawns on top of the water surface.
   */
  static findSurfaceY(getBlock: (wx: number, wy: number, wz: number) => number, wx: number, wz: number): number {
    // First, try to find land above SEA_LEVEL at nearby positions
    const searchRadius = 16;
    for (let r = 0; r <= searchRadius; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r && r > 0) continue; // Only check perimeter
          const sx = Math.floor(wx) + dx;
          const sz = Math.floor(wz) + dz;

          // Scan from SEA_LEVEL upward to find land
          for (let y = SEA_LEVEL + 1; y < 64; y++) {
            const block = getBlock(sx, y, sz);
            if (isBlockSolid(block as BlockID)) {
              // Found land above sea level — return the top of this block + 1
              // But also check there's space above for the player
              const blockAbove = getBlock(sx, y + 1, sz);
              const blockAbove2 = getBlock(sx, y + 2, sz);
              if (!isBlockSolid(blockAbove as BlockID) && !isBlockSolid(blockAbove2 as BlockID)) {
                return y + 1;
              }
            }
          }
        }
      }
    }

    // Fallback: find the highest solid block at the exact position, even if underwater
    for (let y = 63; y >= 0; y--) {
      const block = getBlock(Math.floor(wx), y, Math.floor(wz));
      if (isBlockSolid(block as BlockID)) {
        return Math.max(y + 1, SEA_LEVEL + 1); // At minimum, spawn above water
      }
    }

    return SEA_LEVEL + 2; // Ultimate fallback
  }

  /**
   * Find the X/Z coordinates of the nearest land above SEA_LEVEL.
   * Returns adjusted spawn coordinates.
   */
  static findLandSpawn(getBlock: (wx: number, wy: number, wz: number) => number, wx: number, wz: number): { x: number; y: number; z: number } {
    const searchRadius = 32;
    for (let r = 0; r <= searchRadius; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          if (Math.abs(dx) !== r && Math.abs(dz) !== r && r > 0) continue;
          const sx = Math.floor(wx) + dx;
          const sz = Math.floor(wz) + dz;

          // Check if this column has land above SEA_LEVEL
          for (let y = SEA_LEVEL + 1; y < 64; y++) {
            const block = getBlock(sx, y, sz);
            if (isBlockSolid(block as BlockID)) {
              const blockAbove = getBlock(sx, y + 1, sz);
              const blockAbove2 = getBlock(sx, y + 2, sz);
              if (!isBlockSolid(blockAbove as BlockID) && !isBlockSolid(blockAbove2 as BlockID)) {
                return { x: sx + 0.5, y: y + 1, z: sz + 0.5 };
              }
            }
          }
        }
      }
    }

    // Fallback: spawn above water
    return { x: wx + 0.5, y: SEA_LEVEL + 2, z: wz + 0.5 };
  }

  /** Check if a world position is inside a water block */
  isInWater(wx: number, wy: number, wz: number): boolean {
    return this.getBlock(Math.floor(wx), Math.floor(wy), Math.floor(wz)) === BlockID.WATER;
  }

  /** Get the water surface Y at current X/Z (SEA_LEVEL if water exists, else -Infinity) */
  getWaterSurfaceY(): number {
    // Scan down from above to find the top of the water
    for (let y = 63; y >= 0; y--) {
      const block = this.getBlock(Math.floor(this.position.x), y, Math.floor(this.position.z));
      if (block === BlockID.WATER) {
        // Check if block above is not water (this is the surface)
        const above = this.getBlock(Math.floor(this.position.x), y + 1, Math.floor(this.position.z));
        if (above !== BlockID.WATER) {
          return y + 1; // Top of the water block
        }
      }
    }
    return -Infinity;
  }

  update(dt: number): void {
    // Check water level at different body parts
    const feetY = this.position.y + 0.1;
    const torsoY = this.position.y + 1.0;
    const headY = this.position.y + PLAYER_EYE_HEIGHT;

    const feetInWater = this.isInWater(this.position.x, feetY, this.position.z);
    const torsoInWater = this.isInWater(this.position.x, torsoY, this.position.z);
    const headInWater = this.isInWater(this.position.x, headY, this.position.z);

    // Swimming = torso or head submerged
    this.isSwimming = torsoInWater || headInWater;

    if (this.isSwimming) {
      this.updateSwimming(dt, headInWater);
    } else if (feetInWater) {
      // Wading in shallow water — walk normally but slower
      this.velocity.y += GRAVITY * dt;
      this.velocity.y = Math.max(this.velocity.y, -50);
      // Slight drag on horizontal movement in shallow water
      this.velocity.x *= Math.max(0, 1 - 1.5 * dt);
      this.velocity.z *= Math.max(0, 1 - 1.5 * dt);
    } else {
      // Normal gravity
      this.velocity.y += GRAVITY * dt;
      this.velocity.y = Math.max(this.velocity.y, -50);
    }

    this.moveWithCollision(dt);
  }

  private updateSwimming(dt: number, headInWater: boolean): void {
    const waterSurfaceY = this.getWaterSurfaceY();

    // Water drag — strong resistance to movement
    const waterDrag = 4.0;
    this.velocity.x *= Math.max(0, 1 - waterDrag * dt);
    this.velocity.y *= Math.max(0, 1 - waterDrag * dt);
    this.velocity.z *= Math.max(0, 1 - waterDrag * dt);

    // Apply input acceleration (set by PlayerController)
    this.velocity.x += this.inputAccel.x * dt;
    this.velocity.y += this.inputAccel.y * dt;
    this.velocity.z += this.inputAccel.z * dt;

    // Buoyancy — float toward surface
    // Stronger buoyancy when deeper, gentle at surface
    const depthBelowSurface = waterSurfaceY - this.position.y;
    if (depthBelowSurface > 0) {
      // Buoyancy force proportional to how deep we are
      const buoyancyForce = Math.min(12.0, 4.0 + depthBelowSurface * 2.0);
      this.velocity.y += buoyancyForce * dt;
    }

    // Dampen vertical velocity at surface to prevent bobbing
    if (this.position.y >= waterSurfaceY - 0.5 && this.velocity.y > 0 && !headInWater) {
      // At the surface and moving up — slow down to prevent launching out
      this.velocity.y *= 0.8;
      // Clamp to just below surface
      if (this.position.y + this.velocity.y * dt > waterSurfaceY) {
        this.velocity.y = Math.min(this.velocity.y, 1.0);
      }
    }

    // Clamp speeds
    const maxHSpeed = 3.5;
    const hSpeed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z);
    if (hSpeed > maxHSpeed) {
      this.velocity.x *= maxHSpeed / hSpeed;
      this.velocity.z *= maxHSpeed / hSpeed;
    }
    this.velocity.y = Math.max(-5.0, Math.min(this.velocity.y, 4.0));

    this.onGround = false;
  }

  private moveWithCollision(dt: number): void {
    const dx = this.velocity.x * dt;
    const dy = this.velocity.y * dt;
    const dz = this.velocity.z * dt;

    // Move X
    this.position.x += dx;
    if (this.checkCollision()) {
      // Try step-up: if in/near water, try stepping up 1 block
      if (this.tryStepUp(dx, 0, 0)) {
        // Successfully stepped up
      } else {
        this.position.x -= dx;
        this.velocity.x = 0;
      }
    }

    // Move Y
    this.position.y += dy;
    if (this.checkCollision()) {
      this.position.y -= dy;
      if (dy < 0) {
        this.onGround = true;
      }
      this.velocity.y = 0;
    } else if (!this.isSwimming) {
      this.onGround = false;
    }

    // Move Z
    this.position.z += dz;
    if (this.checkCollision()) {
      // Try step-up: if in/near water, try stepping up 1 block
      if (this.tryStepUp(0, 0, dz)) {
        // Successfully stepped up
      } else {
        this.position.z -= dz;
        this.velocity.z = 0;
      }
    }
  }

  /**
   * Try stepping up 1 block when horizontal movement is blocked.
   * This allows exiting water onto land.
   */
  private tryStepUp(moveX: number, moveY: number, moveZ: number): boolean {
    // Only attempt step-up if:
    // 1. Player is swimming or near water surface
    // 2. Player is moving (has horizontal velocity)
    const speed = Math.sqrt(moveX * moveX + moveZ * moveZ);
    if (speed < 0.001) return false;

    // Check if we're in/near water (within 2 blocks of water)
    const nearWater = this.isInWater(this.position.x, this.position.y + 0.5, this.position.z) ||
                      this.isInWater(this.position.x, this.position.y + 1.5, this.position.z) ||
                      this.isInWater(this.position.x, this.position.y - 0.5, this.position.z);

    // Also allow step-up when on ground near a ledge (normal gameplay)
    // Step-up height: 0.6 blocks (enough for 1-block ledge)
    const stepHeight = nearWater ? 1.1 : 0.6;

    // Save position
    const savedY = this.position.y;

    // Try stepping up
    this.position.y += stepHeight;

    // Check if the position at step-up height is clear
    if (this.checkCollision()) {
      // Still colliding at step height — can't step up
      this.position.y = savedY;
      return false;
    }

    // Check if we can stand here (ground below within step height)
    // The step-up position is valid if we won't fall too far
    // This is valid — we stepped up successfully
    return true;
  }

  private checkCollision(): boolean {
    const aabb = this.getAABB();
    const minX = Math.floor(aabb.minX);
    const maxX = Math.floor(aabb.maxX);
    const minY = Math.floor(aabb.minY);
    const maxY = Math.floor(aabb.maxY);
    const minZ = Math.floor(aabb.minZ);
    const maxZ = Math.floor(aabb.maxZ);
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        for (let z = minZ; z <= maxZ; z++) {
          if (isBlockSolid(this.getBlock(x, y, z) as BlockID)) {
            const blockAABB = aabbFromCenter(x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5);
            if (aabbIntersects(aabb, blockAABB)) return true;
          }
        }
      }
    }
    return false;
  }

  jump(): void {
    if (this.isSwimming) {
      // Swim upward impulse
      this.velocity.y = 3.5;
    } else if (this.onGround) {
      this.velocity.y = 8.5;
      this.onGround = false;
    }
  }

  dive(): void {
    if (this.isSwimming) {
      this.velocity.y = -3.5;
    }
  }
}
