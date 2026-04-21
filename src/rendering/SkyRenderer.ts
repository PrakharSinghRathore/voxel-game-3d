import * as THREE from 'three';
import skyVertexShader from '../shaders/sky.vert.glsl?raw';
import skyFragmentShader from '../shaders/sky.frag.glsl?raw';

// ═══════════════════════════════
// SKY RENDERER — Gradient sphere shader + stars
// ═══════════════════════════════

export class SkyRenderer {
  private skyMesh: THREE.Mesh;
  private starField: THREE.Points;
  private uniforms: {
    uTopColor: { value: THREE.Color };
    uHorizonColor: { value: THREE.Color };
    uSunDir: { value: THREE.Vector3 };
    uStarIntensity: { value: number };
    uTime: { value: number };
  };

  constructor(scene: THREE.Scene) {
    // Sky sphere
    const skyGeo = new THREE.SphereGeometry(380, 32, 32);
    this.uniforms = {
      uTopColor: { value: new THREE.Color(0x1a237e) },
      uHorizonColor: { value: new THREE.Color(0xff7043) },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uStarIntensity: { value: 0.0 },
      uTime: { value: 0.0 },
    };

    const skyMat = new THREE.ShaderMaterial({
      vertexShader: skyVertexShader,
      fragmentShader: skyFragmentShader,
      uniforms: this.uniforms,
      side: THREE.BackSide,
      depthWrite: false,
    });

    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.skyMesh.renderOrder = -1000;
    scene.add(this.skyMesh);

    // Stars
    const starCount = 2000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 370;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    this.starField = new THREE.Points(starGeo, starMat);
    this.starField.renderOrder = -999;
    scene.add(this.starField);
  }

  update(elapsed: number, sunDir: THREE.Vector3, dayProgress: number): void {
    this.uniforms.uTime.value = elapsed;
    this.uniforms.uSunDir.value.copy(sunDir);

    // Adjust sky colors based on time of day
    const sunHeight = sunDir.y;

    if (sunHeight > 0.1) {
      // Day
      this.uniforms.uTopColor.value.setHex(0x1565C0);
      this.uniforms.uHorizonColor.value.setHex(0xBBDEFB);
    } else if (sunHeight > -0.1) {
      // Sunset/sunrise
      this.uniforms.uTopColor.value.setHex(0x4A148C);
      this.uniforms.uHorizonColor.value.setHex(0xFF7043);
    } else {
      // Night
      this.uniforms.uTopColor.value.setHex(0x0D1B2A);
      this.uniforms.uHorizonColor.value.setHex(0x1A237E);
    }

    // Stars fade in at night
    const starOpacity = Math.max(0, -sunHeight * 3);
    (this.starField.material as THREE.PointsMaterial).opacity = Math.min(1, starOpacity);
  }
}
