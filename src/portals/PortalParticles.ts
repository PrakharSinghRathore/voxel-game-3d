import * as THREE from 'three';
import { MAX_PARTICLES } from '../world/constants';

export class PortalParticles {
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private points: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;
  private count = 300;

  constructor(scene: THREE.Scene) {
    this.positions = new Float32Array(this.count * 3);
    this.velocities = new Float32Array(this.count * 3);

    for (let i = 0; i < this.count; i++) {
      this.positions[i * 3] = (Math.random() - 0.5) * 2;
      this.positions[i * 3 + 1] = Math.random() * 3;
      this.positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      this.velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      this.velocities[i * 3 + 1] = Math.random() * 2 + 0.5;
      this.velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    this.material = new THREE.PointsMaterial({
      color: 0xAA00FF,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.points.visible = false;
    scene.add(this.points);
  }

  show(x: number, y: number, z: number): void {
    this.points.position.set(x, y, z);
    this.points.visible = true;
  }

  hide(): void {
    this.points.visible = false;
  }

  update(dt: number): void {
    if (!this.points.visible) return;
    for (let i = 0; i < this.count; i++) {
      this.positions[i * 3 + 1] += this.velocities[i * 3 + 1] * dt;
      if (this.positions[i * 3 + 1] > 3) {
        this.positions[i * 3 + 1] = 0;
        this.positions[i * 3] = (Math.random() - 0.5) * 2;
        this.positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      }
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}
