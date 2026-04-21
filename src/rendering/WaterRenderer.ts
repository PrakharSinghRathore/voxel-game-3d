import * as THREE from 'three';
import waterVertexShader from '../shaders/water.vert.glsl?raw';
import waterFragmentShader from '../shaders/water.frag.glsl?raw';

// ═══════════════════════════════
// WATER RENDERER — Animated water mesh per chunk
// ═══════════════════════════════

export class WaterRenderer {
  private waterMaterial: THREE.ShaderMaterial;
  private waterMeshes: Map<string, THREE.Mesh> = new Map();

  constructor() {
    this.waterMaterial = new THREE.ShaderMaterial({
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uCamPos: { value: new THREE.Vector3() },
        uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      },
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }

  getMaterial(): THREE.ShaderMaterial {
    return this.waterMaterial;
  }

  addWaterMesh(key: string, geometry: THREE.BufferGeometry, scene: THREE.Scene): void {
    const mesh = new THREE.Mesh(geometry, this.waterMaterial);
    mesh.frustumCulled = true;
    mesh.renderOrder = 100; // Render after opaque
    this.waterMeshes.set(key, mesh);
    scene.add(mesh);
  }

  removeWaterMesh(key: string, scene: THREE.Scene): void {
    const mesh = this.waterMeshes.get(key);
    if (mesh) {
      scene.remove(mesh);
      mesh.geometry.dispose();
      this.waterMeshes.delete(key);
    }
  }

  updateUniforms(elapsed: number, cameraPos: THREE.Vector3, sunDir: THREE.Vector3): void {
    this.waterMaterial.uniforms.uTime.value = elapsed;
    this.waterMaterial.uniforms.uCamPos.value.copy(cameraPos);
    this.waterMaterial.uniforms.uSunDir.value.copy(sunDir);
  }
}
