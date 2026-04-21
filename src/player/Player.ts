import { Vec3, AABB, aabbFromCenter, aabbIntersects } from '../utils/math';
import { PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_EYE_HEIGHT, GRAVITY } from '../world/constants';
import { BlockID, isBlockSolid } from '../types/blocks';

export class Player {
  position: Vec3 = { x: 0, y: 40, z: 0 };
  velocity: Vec3 = { x: 0, y: 0, z: 0 };
  yaw: number = 0;
  pitch: number = 0;
  onGround: boolean = false;
  isSwimming: boolean = false;
  isSprinting: boolean = false;
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

  update(dt: number): void {
    const headBlock = this.getBlock(Math.floor(this.position.x), Math.floor(this.position.y + PLAYER_EYE_HEIGHT), Math.floor(this.position.z));
    this.isSwimming = headBlock === BlockID.WATER;
    if (this.isSwimming) { this.velocity.y *= 0.9; this.velocity.y += 2 * dt; }
    else { this.velocity.y += GRAVITY * dt; }
    this.velocity.y = Math.max(this.velocity.y, -50);
    this.moveWithCollision(dt);
  }

  private moveWithCollision(dt: number): void {
    const dx = this.velocity.x * dt; const dy = this.velocity.y * dt; const dz = this.velocity.z * dt;
    this.position.x += dx; if (this.checkCollision()) { this.position.x -= dx; this.velocity.x = 0; }
    this.position.y += dy; if (this.checkCollision()) { this.position.y -= dy; if (dy < 0) this.onGround = true; this.velocity.y = 0; } else { this.onGround = false; }
    this.position.z += dz; if (this.checkCollision()) { this.position.z -= dz; this.velocity.z = 0; }
  }

  private checkCollision(): boolean {
    const aabb = this.getAABB();
    const minX = Math.floor(aabb.minX); const maxX = Math.floor(aabb.maxX);
    const minY = Math.floor(aabb.minY); const maxY = Math.floor(aabb.maxY);
    const minZ = Math.floor(aabb.minZ); const maxZ = Math.floor(aabb.maxZ);
    for (let x = minX; x <= maxX; x++) for (let y = minY; y <= maxY; y++) for (let z = minZ; z <= maxZ; z++) {
      if (isBlockSolid(this.getBlock(x, y, z) as BlockID)) {
        const blockAABB = aabbFromCenter(x + 0.5, y + 0.5, z + 0.5, 0.5, 0.5, 0.5);
        if (aabbIntersects(aabb, blockAABB)) return true;
      }
    }
    return false;
  }

  jump(): void { if (this.onGround) { this.velocity.y = 8; this.onGround = false; } else if (this.isSwimming) { this.velocity.y = 4; } }
}
