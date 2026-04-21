import * as THREE from 'three';
import { BlockID } from '../types/blocks';

// ═══════════════════════════════
// ITEM DROP — Floating collectible items in the world
// ═══════════════════════════════

export interface DroppedItem {
  id: number;           // Item/Block ID
  count: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  spawnTime: number;    // For pickup delay & bob animation
  life: number;         // Time alive
  collected: boolean;   // Marked for removal
}

// Colors for each block/item type (for the 3D representation)
const ITEM_COLORS: Record<number, number> = {
  [BlockID.GRASS]: 0x4CAF50,
  [BlockID.DIRT]: 0x795548,
  [BlockID.STONE]: 0x9E9E9E,
  [BlockID.SAND]: 0xFDD835,
  [BlockID.SANDSTONE]: 0xE8C86A,
  [BlockID.SNOW]: 0xFAFAFA,
  [BlockID.ICE]: 0xB3E5FC,
  [BlockID.MUD]: 0x4E342E,
  [BlockID.CRYSTAL]: 0x7B1FA2,
  [BlockID.GLOWSTONE]: 0xFF8F00,
  [BlockID.WOOD]: 0x6D4C41,
  [BlockID.LEAVES]: 0x2E7D32,
  [BlockID.CACTUS]: 0x2E7D32,
  [BlockID.BEDROCK]: 0x212121,
  [BlockID.COAL_ORE]: 0x424242,
  [BlockID.IRON_ORE]: 0xE8C86A,
  [BlockID.GOLD_ORE]: 0xFFD700,
  [BlockID.DIAMOND_ORE]: 0x00BCD4,
  [BlockID.SPRUCE_WOOD]: 0x4E342E,
  [BlockID.SPRUCE_LEAVES]: 0x1B5E20,
  [BlockID.PACKED_ICE]: 0x81D4FA,
  // Crafted items
  100: 0xC0C0C0, // Sword
  101: 0x888888, // Pistol
  102: 0x555555, // Rifle
  103: 0x9C27B0, // Magic Staff
  104: 0x7B1FA2, // Crystal (item)
  105: 0x00BCD4, // Diamond (item)
  106: 0xFFD700, // Ammo
  113: 0x8D6E63, // Plank
  114: 0x6D4C41, // Stick
  115: 0xFF6D00, // Igniter
  116: 0x6D4C41, // Iron ingot
  117: 0x424242, // Coal (item)
  118: 0xFF6D00, // Raw Meat
  119: 0x8D6E63, // Leather/Fur
  120: 0x76FF03, // Slime Ball
  121: 0xFF5722, // Ash
  122: 0x9C27B0, // Crystal Shard
};

export class ItemDropManager {
  private items: DroppedItem[] = [];
  private scene: THREE.Scene;
  private instancedMesh: THREE.InstancedMesh;
  private dummy: THREE.Object3D;
  private maxItems = 200;
  private pickupRadius = 1.8;
  private pickupDelay = 0.5; // seconds before can pick up
  private maxLife = 300; // 5 minutes before despawn
  private onItemPickup: ((id: number, count: number) => void) | null = null;
  private getBlock: (wx: number, wy: number, wz: number) => number;

  constructor(scene: THREE.Scene, getBlock: (wx: number, wy: number, wz: number) => number) {
    this.scene = scene;
    this.getBlock = getBlock;
    this.dummy = new THREE.Object3D();

    // Create instanced mesh for item drops — small cubes
    const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.instancedMesh = new THREE.InstancedMesh(geo, mat, this.maxItems);
    this.instancedMesh.count = 0;
    this.instancedMesh.frustumCulled = false;
    // Store color attribute per instance
    this.instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(this.maxItems * 3), 3
    );
    scene.add(this.instancedMesh);
  }

  setOnItemPickup(callback: (id: number, count: number) => void): void {
    this.onItemPickup = callback;
  }

  /**
   * Drop an item at a world position with optional initial velocity
   */
  dropItem(id: number, count: number, x: number, y: number, z: number, vx = 0, vy = 0, vz = 0): void {
    if (this.items.length >= this.maxItems) {
      // Remove oldest item
      this.items.shift();
    }

    // Add random spread to velocity
    const spread = 1.5;
    const randomVx = vx + (Math.random() - 0.5) * spread;
    const randomVy = vy + Math.random() * 2 + 1; // Always pop up a bit
    const randomVz = vz + (Math.random() - 0.5) * spread;

    this.items.push({
      id,
      count,
      position: new THREE.Vector3(x, y, z),
      velocity: new THREE.Vector3(randomVx, randomVy, randomVz),
      spawnTime: performance.now() / 1000,
      life: 0,
      collected: false,
    });
  }

  /**
   * Drop multiple items (e.g., from block break)
   */
  dropItems(drops: { id: number; count: number }[], x: number, y: number, z: number): void {
    for (const drop of drops) {
      this.dropItem(drop.id, drop.count, x + 0.5, y + 0.5, z + 0.5);
    }
  }

  update(dt: number, playerX: number, playerY: number, playerZ: number): void {
    const gravity = -18;
    let activeCount = 0;

    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.life += dt;

      // Despawn old items
      if (item.life > this.maxLife) {
        this.items.splice(i, 1);
        continue;
      }

      // Physics — gravity + ground collision
      item.velocity.y += gravity * dt;
      item.position.x += item.velocity.x * dt;
      item.position.y += item.velocity.y * dt;
      item.position.z += item.velocity.z * dt;

      // Ground collision
      const groundY = this.getGroundY(item.position.x, item.position.y, item.position.z);
      if (item.position.y < groundY + 0.15) {
        item.position.y = groundY + 0.15;
        item.velocity.y = 0;
        // Friction on ground
        item.velocity.x *= 0.9;
        item.velocity.z *= 0.9;
      }

      // Horizontal drag
      item.velocity.x *= (1 - 2.0 * dt);
      item.velocity.z *= (1 - 2.0 * dt);

      // Pickup detection
      if (item.life > this.pickupDelay && !item.collected) {
        const dx = item.position.x - playerX;
        const dy = item.position.y - playerY;
        const dz = item.position.z - playerZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < this.pickupRadius) {
          // Magnetic pull toward player
          if (dist > 0.3) {
            const pullSpeed = 8.0;
            item.position.x -= (dx / dist) * pullSpeed * dt;
            item.position.y -= (dy / dist) * pullSpeed * dt;
            item.position.z -= (dz / dist) * pullSpeed * dt;
          } else {
            // Collect!
            item.collected = true;
            if (this.onItemPickup) {
              this.onItemPickup(item.id, item.count);
            }
            this.items.splice(i, 1);
            continue;
          }
        }
      }
    }

    // Update instanced mesh
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      // Bob animation
      const bobOffset = Math.sin(item.life * 3 + i) * 0.05;
      const rotation = item.life * 2;

      this.dummy.position.set(item.position.x, item.position.y + bobOffset, item.position.z);
      this.dummy.rotation.set(0, rotation, 0);
      this.dummy.scale.set(1, 1, 1);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);

      // Set color per instance
      const color = new THREE.Color(ITEM_COLORS[item.id] ?? 0x666666);
      this.instancedMesh.instanceColor!.setXYZ(i, color.r, color.g, color.b);
    }

    this.instancedMesh.count = this.items.length;
    if (this.instancedMesh.count > 0) {
      this.instancedMesh.instanceMatrix.needsUpdate = true;
      this.instancedMesh.instanceColor!.needsUpdate = true;
    }
  }

  /**
   * Find the ground level at a position (highest solid block below)
   */
  private getGroundY(x: number, y: number, z: number): number {
    const bx = Math.floor(x);
    const bz = Math.floor(z);
    for (let by = Math.floor(y); by >= 0; by--) {
      const block = this.getBlock(bx, by, bz);
      if (block !== 0 && block !== BlockID.WATER && block !== BlockID.LAVA) {
        // Simple solid check — most non-air, non-liquid blocks are solid
        if (block !== BlockID.AIR && block !== BlockID.LILY_PAD && block !== BlockID.PORTAL_ACTIVE) {
          return by + 1;
        }
      }
    }
    return 0;
  }

  getItemCount(): number {
    return this.items.length;
  }
}
