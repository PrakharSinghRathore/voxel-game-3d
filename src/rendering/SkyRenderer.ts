import * as THREE from 'three';
import skyVertexShader from '../shaders/sky.vert.glsl?raw';
import skyFragmentShader from '../shaders/sky.frag.glsl?raw';

// ═══════════════════════════════
// SKY RENDERER — Realistic atmospheric sky
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

    // Stars (backup - shader also does procedural stars)
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 370;
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = Math.abs(r * Math.sin(phi) * Math.sin(theta)); // Only upper hemisphere
      starPositions[i * 3 + 2] = r * Math.cos(phi);
      starSizes[i] = 0.5 + Math.random() * 2.0;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      sizeAttenuation: false,
    });
    this.starField = new THREE.Points(starGeo, starMat);
    this.starField.renderOrder = -999;
    scene.add(this.starField);
  }

  update(elapsed: number, sunDir: THREE.Vector3, dayProgress: number, cameraPos?: THREE.Vector3): void {
    this.uniforms.uTime.value = elapsed;
    this.uniforms.uSunDir.value.copy(sunDir);

    // Keep sky sphere centered on camera so it never clips
    if (cameraPos) {
      this.skyMesh.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
      this.starField.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
    }

    // ═══════════════════════════════
    // REALISTIC SKY COLORS - smooth interpolation
    // ═══════════════════════════════
    const sunHeight = sunDir.y;
    const dayColor = new THREE.Color();
    const horizonColor = new THREE.Color();

    if (sunHeight > 0.3) {
      // Full day - deep blue sky
      dayColor.setHex(0x0D47A1);       // Deep sky blue
      horizonColor.setHex(0xBBDEFB);    // Light blue haze
    } else if (sunHeight > 0.1) {
      // Day with slight warmth near horizon
      const t = (sunHeight - 0.1) / 0.2;
      dayColor.lerpColors(new THREE.Color(0x1565C0), new THREE.Color(0x0D47A1), t);
      horizonColor.lerpColors(new THREE.Color(0xFFCC80), new THREE.Color(0xBBDEFB), t);
    } else if (sunHeight > 0.0) {
      // Golden hour - warm tones
      const t = sunHeight / 0.1;
      dayColor.lerpColors(new THREE.Color(0xE65100), new THREE.Color(0x1565C0), t);
      horizonColor.lerpColors(new THREE.Color(0xFF8F00), new THREE.Color(0xFFCC80), t);
    } else if (sunHeight > -0.1) {
      // Sunset/sunrise - vivid oranges and purples
      const t = (sunHeight + 0.1) / 0.1;
      dayColor.lerpColors(new THREE.Color(0x311B92), new THREE.Color(0xE65100), t);
      horizonColor.lerpColors(new THREE.Color(0x4A148C), new THREE.Color(0xFF8F00), t);
    } else if (sunHeight > -0.3) {
      // Twilight - deep purples fading to night
      const t = (sunHeight + 0.3) / 0.2;
      dayColor.lerpColors(new THREE.Color(0x0D1B2A), new THREE.Color(0x311B92), t);
      horizonColor.lerpColors(new THREE.Color(0x1A237E), new THREE.Color(0x4A148C), t);
    } else {
      // Night - dark sky
      dayColor.setHex(0x050D1A);        // Very dark blue-black
      horizonColor.setHex(0x0D1B2A);    // Dark navy
    }

    this.uniforms.uTopColor.value.copy(dayColor);
    this.uniforms.uHorizonColor.value.copy(horizonColor);

    // Stars fade in as sun goes below horizon
    const starOpacity = Math.max(0, (-sunHeight - 0.1) * 4);
    this.uniforms.uStarIntensity.value = Math.min(1, starOpacity);
    (this.starField.material as THREE.PointsMaterial).opacity = Math.min(0.8, starOpacity);
  }
}
