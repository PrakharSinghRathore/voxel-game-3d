import * as THREE from 'three';
import { CreatureBase } from './CreatureBase';
import { Crawler } from './creatures/Crawler';
import { Slime } from './creatures/Slime';
import { AshWraith } from './creatures/AshWraith';
import { CrystalGolem } from './creatures/CrystalGolem';
import { FrostWolf } from './creatures/FrostWolf';
import { CreatureType, FSMState, CREATURE_SPAWNS } from '../types/entities';
import { BiomeID } from '../types/biomes';
import { Vec3, ddaRaycast } from '../utils/math';
import { isBlockSolid } from '../types/blocks';
import { BlockID } from '../types/blocks';
import { CREATURE_MAX_INSTANCES, FSM_UPDATE_INTERVAL } from '../world/constants';
import { LootTable } from './LootTable';

export class EntityManager {
  private creatures: CreatureBase[] = [];
  private frameCount = 0;
  private instancedMeshes: Map<CreatureType, THREE.InstancedMesh> = new Map();
  private getBlock: (wx: number, wy: number, wz: number) => number;
  private playerPos: Vec3 = { x: 0, y: 0, z: 0 };
  private onLootDrop: ((itemId: number, count: number) => void) | null = null;

  constructor(scene: THREE.Scene, getBlock: (wx: number, wy: number, wz: number) => number) {
    this.getBlock = getBlock;
    // Create instanced meshes for each creature type
    const colors: Record<CreatureType, number> = {
      [CreatureType.CRAWLER]: 0x4CAF50,
      [CreatureType.SLIME]: 0x76FF03,
      [CreatureType.ASH_WRAITH]: 0xFF5722,
      [CreatureType.CRYSTAL_GOLEM]: 0x9C27B0,
      [CreatureType.FROST_WOLF]: 0x90CAF9,
    };
    for (const type of [CreatureType.CRAWLER, CreatureType.SLIME, CreatureType.ASH_WRAITH, CreatureType.CRYSTAL_GOLEM, CreatureType.FROST_WOLF]) {
      const geo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
      const mat = new THREE.MeshLambertMaterial({ color: colors[type] });
      const mesh = new THREE.InstancedMesh(geo, mat, CREATURE_MAX_INSTANCES);
      mesh.count = 0;
      mesh.frustumCulled = false;
      scene.add(mesh);
      this.instancedMeshes.set(type, mesh);
    }
  }

  setPlayerPosition(pos: Vec3): void { this.playerPos = pos; }
  setOnLootDrop(callback: (itemId: number, count: number) => void): void { this.onLootDrop = callback; }

  spawnCreature(type: CreatureType, position: Vec3): void {
    if (this.creatures.length >= CREATURE_MAX_INSTANCES * 5) return;
    let creature: CreatureBase;
    switch (type) {
      case CreatureType.CRAWLER: creature = new Crawler(position); break;
      case CreatureType.SLIME: creature = new Slime(position); break;
      case CreatureType.ASH_WRAITH: creature = new AshWraith(position); break;
      case CreatureType.CRYSTAL_GOLEM: creature = new CrystalGolem(position); break;
      case CreatureType.FROST_WOLF: creature = new FrostWolf(position); break;
      default: return;
    }
    this.creatures.push(creature);
  }

  update(dt: number): void {
    this.frameCount++;
    const doFSM = this.frameCount % FSM_UPDATE_INTERVAL === 0;

    const isPlayerVisible = (from: Vec3, to: Vec3): boolean => {
      const dir = { x: to.x - from.x, y: to.y - from.y, z: to.z - from.z };
      const len = Math.sqrt(dir.x * dir.x + dir.y * dir.y + dir.z * dir.z);
      if (len === 0) return true;
      dir.x /= len; dir.y /= len; dir.z /= len;
      const result = ddaRaycast(from, dir, len, (x, y, z) => isBlockSolid(this.getBlock(x, y, z) as BlockID));
      return !result.hit;
    };

    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const c = this.creatures[i];
      if (doFSM) c.updateFSM(dt, this.playerPos, isPlayerVisible);

      // Move toward target
      const speed = c.getSpeed() * dt;
      if (speed > 0 && c.state !== FSMState.DEAD && c.state !== FSMState.IDLE) {
        const dx = c.target.x - c.position.x;
        const dz = c.target.z - c.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.5) {
          c.position.x += (dx / dist) * speed;
          c.position.z += (dz / dist) * speed;
        }
      }

      // Handle dead
      if (c.state === FSMState.DEAD && c.deadTimer > 0.5) {
        const loot = LootTable.rollLoot(c.type);
        if (this.onLootDrop) {
          for (const item of loot) this.onLootDrop(item.itemId, item.count);
        }
        c.onDeath();
        this.creatures.splice(i, 1);
      }
    }

    this.updateInstancedMeshes();
  }

  private updateInstancedMeshes(): void {
    const dummy = new THREE.Object3D();
    for (const [type, mesh] of this.instancedMeshes) {
      const creatures = this.creatures.filter(c => c.type === type && c.state !== FSMState.DEAD);
      mesh.count = creatures.length;
      for (let i = 0; i < creatures.length; i++) {
        const c = creatures[i];
        dummy.position.set(c.position.x, c.position.y, c.position.z);
        if (c.state === FSMState.DEAD) {
          const scale = Math.max(0, 1 - c.deadTimer * 2);
          dummy.scale.set(1, scale, 1);
        } else {
          dummy.scale.set(1, 1, 1);
        }
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  getCreatures(): CreatureBase[] { return this.creatures; }

  getCreatureAt(worldX: number, worldZ: number, radius: number): CreatureBase | null {
    for (const c of this.creatures) {
      const dx = c.position.x - worldX;
      const dz = c.position.z - worldZ;
      if (dx * dx + dz * dz < radius * radius) return c;
    }
    return null;
  }
}
