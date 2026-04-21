import { WeaponDef, FIST_DEF } from './weapons/Fist';
import { InputManager } from '../engine/InputManager';
import { Player } from '../player/Player';
import { BulletPool } from './BulletPool';
import { ParticleSystem } from '../rendering/ParticleSystem';
import { Renderer } from '../rendering/Renderer';
import { isBlockSolid } from '../types/blocks';
import { BlockID } from '../types/blocks';
import { ddaRaycast } from '../utils/math';

export class WeaponManager {
  private currentWeapon: WeaponDef = FIST_DEF;
  private cooldownTimer = 0;
  private input: InputManager;
  private player: Player;
  private bulletPool: BulletPool;
  private particleSystem: ParticleSystem;
  private renderer: Renderer;
  private weaponBobPhase = 0;
  private weaponMesh: THREE.Mesh | null = null;

  constructor(input: InputManager, player: Player, bulletPool: BulletPool, particleSystem: ParticleSystem, renderer: Renderer) {
    this.input = input;
    this.player = player;
    this.bulletPool = bulletPool;
    this.particleSystem = particleSystem;
    this.renderer = renderer;
  }

  equip(weapon: WeaponDef): void { this.currentWeapon = weapon; }

  update(dt: number, getBlock: (x: number, y: number, z: number) => number): void {
    this.cooldownTimer = Math.max(0, this.cooldownTimer - dt);

    // Left click to attack
    if (this.input.isMouseButtonDown(0) && this.cooldownTimer <= 0) {
      this.attack(getBlock);
    }

    // Weapon bob while moving
    const v = this.player.velocity;
    const speed = Math.sqrt(v.x * v.x + v.z * v.z);
    if (speed > 0.5 && this.player.onGround) {
      this.weaponBobPhase += dt * 8;
      const bobY = Math.sin(this.weaponBobPhase) * 0.03;
      const bobZ = Math.cos(this.weaponBobPhase * 0.5) * 0.02;
      this.renderer.weaponCamera.position.set(0.3 + bobZ, -0.3 + bobY, -0.5);
    } else {
      this.renderer.weaponCamera.position.set(0.3, -0.3, -0.5);
    }
  }

  private attack(getBlock: (x: number, y: number, z: number) => number): void {
    this.cooldownTimer = this.currentWeapon.cooldown;
    const eye = this.player.getEyePosition();
    const dir = this.player.getLookDirection();

    switch (this.currentWeapon.type) {
      case 'melee':
        this.meleeAttack(eye, dir, getBlock);
        break;
      case 'hitscan':
        this.hitscanAttack(eye, dir, getBlock);
        break;
      case 'magic':
        this.magicAttack(eye, dir);
        break;
    }
  }

  private meleeAttack(eye: {x:number;y:number;z:number}, dir: {x:number;y:number;z:number}, getBlock: (x:number,y:number,z:number)=>number): void {
    const result = ddaRaycast(eye, dir, this.currentWeapon.range, (x, y, z) => isBlockSolid(getBlock(x, y, z) as BlockID));
    // Visual feedback
    if (result.hit) {
      this.particleSystem.emit(result.blockX + 0.5, result.blockY + 0.5, result.blockZ + 0.5, 5, { speed: 1, color: [0.7, 0.7, 0.7], life: 0.3 });
    }
  }

  private hitscanAttack(eye: {x:number;y:number;z:number}, dir: {x:number;y:number;z:number}, getBlock: (x:number,y:number,z:number)=>number): void {
    this.bulletPool.fire(eye, dir);
    this.particleSystem.emit(eye.x, eye.y, eye.z, 3, { speed: 0.5, color: [1, 0.5, 0], life: 0.1, size: 0.05 });
  }

  private magicAttack(eye: {x:number;y:number;z:number}, dir: {x:number;y:number;z:number}): void {
    this.particleSystem.emit(eye.x + dir.x, eye.y + dir.y, eye.z + dir.z, 40, { speed: 5, color: [0.6, 0.2, 1], life: 1.5, size: 0.1, spread: 0.3 });
  }

  getCurrentWeapon(): WeaponDef { return this.currentWeapon; }
  getCooldownProgress(): number { return 1 - this.cooldownTimer / this.currentWeapon.cooldown; }
}
