import * as THREE from 'three';
import { AssetManager } from '../engine/AssetManager';

interface ChunkMeshEntry {
  solid: THREE.Mesh;
  water: THREE.Mesh | null;
  lastAccessed: number;
  key: string;
}

export class ChunkRenderer {
  private scene: THREE.Scene;
  private assetManager: AssetManager;
  private chunks: Map<string, ChunkMeshEntry> = new Map();
  private material: THREE.MeshLambertMaterial;
  private maxChunks: number = 200;

  constructor(scene: THREE.Scene, assetManager: AssetManager) {
    this.scene = scene;
    this.assetManager = assetManager;
    this.material = new THREE.MeshLambertMaterial({
      map: assetManager.getTexture(),
      vertexColors: true,
      side: THREE.FrontSide,
    });
  }

  uploadChunk(key: string, data: {
    positions: Float32Array; normals: Float32Array; uvs: Float32Array;
    colors: Float32Array; indices: Uint32Array;
    waterPositions: Float32Array; waterNormals: Float32Array;
    waterUvs: Float32Array; waterIndices: Uint32Array;
  }, waterMaterial: THREE.ShaderMaterial): void {
    this.removeChunk(key);
    if (this.chunks.size >= this.maxChunks) {
      let oldest = ''; let oldestTime = Infinity;
      this.chunks.forEach((entry, k) => {
        if (entry.lastAccessed < oldestTime) { oldestTime = entry.lastAccessed; oldest = k; }
      });
      if (oldest) this.removeChunk(oldest);
    }
    const solidGeo = new THREE.BufferGeometry();
    solidGeo.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    solidGeo.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
    solidGeo.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    solidGeo.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    solidGeo.setIndex(new THREE.BufferAttribute(data.indices, 1));
    solidGeo.computeBoundingSphere();
    const solidMesh = new THREE.Mesh(solidGeo, this.material);
    solidMesh.frustumCulled = true;
    this.scene.add(solidMesh);
    let waterMesh: THREE.Mesh | null = null;
    if (data.waterIndices.length > 0) {
      const waterGeo = new THREE.BufferGeometry();
      waterGeo.setAttribute('position', new THREE.BufferAttribute(data.waterPositions, 3));
      waterGeo.setAttribute('normal', new THREE.BufferAttribute(data.waterNormals, 3));
      waterGeo.setAttribute('uv', new THREE.BufferAttribute(data.waterUvs, 2));
      waterGeo.setIndex(new THREE.BufferAttribute(data.waterIndices, 1));
      waterGeo.computeBoundingSphere();
      waterMesh = new THREE.Mesh(waterGeo, waterMaterial);
      waterMesh.frustumCulled = true;
      waterMesh.renderOrder = 100;
      this.scene.add(waterMesh);
    }
    this.chunks.set(key, { solid: solidMesh, water: waterMesh, lastAccessed: performance.now(), key });
  }

  removeChunk(key: string): void {
    const entry = this.chunks.get(key);
    if (entry) {
      this.scene.remove(entry.solid); entry.solid.geometry.dispose();
      if (entry.water) { this.scene.remove(entry.water); entry.water.geometry.dispose(); }
      this.chunks.delete(key);
    }
  }

  hasChunk(key: string): boolean { return this.chunks.has(key); }
  getChunkCount(): number { return this.chunks.size; }
  clear(): void { this.chunks.forEach((_, key) => this.removeChunk(key)); }
}
