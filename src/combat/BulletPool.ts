import * as THREE from 'three';
import { BULLET_POOL_SIZE } from '../world/constants';
import { Vec3 } from '../utils/math';

interface Bullet {
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  alive: boolean;
  life: number;
}

export class BulletPool {
  private bullets: Bullet[] = [];
  private mesh: THREE.InstancedMesh;
  private ringIndex = 0;

  constructor(scene: THREE.Scene) {
    const geo = new THREE.SphereGeometry(0.05, 4, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xFF6D00 });
    this.mesh = new THREE.InstancedMesh(geo, mat, BULLET_POOL_SIZE);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    for (let i = 0; i < BULLET_POOL_SIZE; i++) {
      this.bullets.push({ x: 0, y: -1000, z: 0, vx: 0, vy: 0, vz: 0, alive: false, life: 0 });
    }
  }

  fire(origin: Vec3, direction: Vec3, speed: number = 80): void {
    const bullet = this.bullets[this.ringIndex];
    bullet.x = origin.x; bullet.y = origin.y; bullet.z = origin.z;
    bullet.vx = direction.x * speed; bullet.vy = direction.y * speed; bullet.vz = direction.z * speed;
    bullet.alive = true; bullet.life = 3.0;
    this.ringIndex = (this.ringIndex + 1) % BULLET_POOL_SIZE;
  }

  update(dt: number, checkHit: (x: number, y: number, z: number) => boolean): void {
    const dummy = new THREE.Object3D();
    let activeCount = 0;

    for (const b of this.bullets) {
      if (!b.alive) continue;
      b.life -= dt;
      if (b.life <= 0) { b.alive = false; continue; }
      b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
      if (checkHit(b.x, b.y, b.z)) { b.alive = false; continue; }
      dummy.position.set(b.x, b.y, b.z);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(activeCount, dummy.matrix);
      activeCount++;
    }

    this.mesh.count = activeCount;
    if (activeCount > 0) this.mesh.instanceMatrix.needsUpdate = true;
  }

  getActiveBullets(): Bullet[] { return this.bullets.filter(b => b.alive); }
}
