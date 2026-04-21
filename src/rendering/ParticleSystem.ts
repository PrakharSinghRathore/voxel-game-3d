import * as THREE from 'three';
import { MAX_PARTICLES } from '../world/constants';

interface Particle {
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  life: number; maxLife: number;
  r: number; g: number; b: number;
  size: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private geometry: THREE.BufferGeometry;
  private material: THREE.PointsMaterial;
  private points: THREE.Points;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;

  constructor(scene: THREE.Scene) {
    this.positions = new Float32Array(MAX_PARTICLES * 3);
    this.colors = new Float32Array(MAX_PARTICLES * 3);
    this.sizes = new Float32Array(MAX_PARTICLES);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));
    this.material = new THREE.PointsMaterial({
      size: 0.15, vertexColors: true, transparent: true,
      opacity: 0.8, depthWrite: false, sizeAttenuation: true,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  emit(x: number, y: number, z: number, count: number, config: {
    speed?: number; color?: [number, number, number];
    life?: number; size?: number; spread?: number;
  } = {}): void {
    const { speed = 2, color = [1, 1, 1], life = 1.0, size = 0.15, spread = 1 } = config;
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= MAX_PARTICLES) break;
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI;
      const spd = speed * (0.5 + Math.random() * 0.5);
      this.particles.push({
        x: x + (Math.random() - 0.5) * spread,
        y: y + (Math.random() - 0.5) * spread,
        z: z + (Math.random() - 0.5) * spread,
        vx: Math.cos(angle) * Math.cos(elevation) * spd,
        vy: Math.sin(elevation) * spd,
        vz: Math.sin(angle) * Math.cos(elevation) * spd,
        life, maxLife: life,
        r: color[0], g: color[1], b: color[2],
        size,
      });
    }
  }

  update(dt: number): void {
    let activeCount = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) { this.particles.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.vy -= 5 * dt;
      const lifeRatio = p.life / p.maxLife;
      this.positions[activeCount * 3] = p.x;
      this.positions[activeCount * 3 + 1] = p.y;
      this.positions[activeCount * 3 + 2] = p.z;
      this.colors[activeCount * 3] = p.r * lifeRatio;
      this.colors[activeCount * 3 + 1] = p.g * lifeRatio;
      this.colors[activeCount * 3 + 2] = p.b * lifeRatio;
      this.sizes[activeCount] = p.size * lifeRatio;
      activeCount++;
    }
    for (let i = activeCount; i < MAX_PARTICLES; i++) {
      this.positions[i * 3 + 1] = -1000;
      this.sizes[i] = 0;
    }
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.color.needsUpdate = true;
    this.geometry.attributes.size.needsUpdate = true;
    this.geometry.setDrawRange(0, activeCount);
  }
}
