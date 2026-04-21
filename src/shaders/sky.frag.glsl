uniform vec3 uTopColor;
uniform vec3 uHorizonColor;
uniform vec3 uSunDir;
uniform float uStarIntensity;
uniform float uTime;
varying vec3 vWorldPos;
varying vec2 vUv;

// Simple hash for procedural stars
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec3 dir = normalize(vWorldPos);
  float h = dir.y;

  // ═══════════════════════════════
  // ATMOSPHERIC SCATTERING (simplified Rayleigh)
  // ═══════════════════════════════
  float horizonBlend = smoothstep(-0.05, 0.4, h);
  vec3 sky = mix(uHorizonColor, uTopColor, horizonBlend);

  // Add subtle gradient band near horizon (atmospheric haze)
  float hazeBand = exp(-abs(h) * 8.0) * 0.3;
  sky = mix(sky, uHorizonColor * 1.1, hazeBand);

  // ═══════════════════════════════
  // SUN DISC + GLOW
  // ═══════════════════════════════
  float sunDot = max(dot(dir, uSunDir), 0.0);

  // Sharp sun disc
  float sunDisc = smoothstep(0.998, 0.9995, sunDot);
  sky += vec3(1.0, 0.95, 0.8) * sunDisc * 2.0;

  // Inner glow (corona)
  float innerGlow = pow(sunDot, 64.0);
  sky += vec3(1.0, 0.85, 0.5) * innerGlow * 0.6;

  // Outer atmospheric glow
  float outerGlow = pow(sunDot, 8.0);
  sky += vec3(1.0, 0.7, 0.3) * outerGlow * 0.15;

  // Subtle forward scattering (bright halo around sun)
  float scatter = pow(sunDot, 3.0) * 0.08;
  sky += uHorizonColor * scatter;

  // ═══════════════════════════════
  // MOON (opposite to sun)
  // ═══════════════════════════════
  float moonDot = max(dot(dir, -uSunDir), 0.0);
  float moonDisc = smoothstep(0.997, 0.999, moonDot);
  sky += vec3(0.85, 0.88, 0.95) * moonDisc * uStarIntensity * 1.5;

  // Moon glow
  float moonGlow = pow(moonDot, 32.0);
  sky += vec3(0.5, 0.55, 0.7) * moonGlow * 0.15 * uStarIntensity;

  // ═══════════════════════════════
  // STARS (procedural)
  // ═══════════════════════════════
  if (uStarIntensity > 0.01 && h > 0.05) {
    vec2 starUV = dir.xz / (dir.y + 0.001) * 50.0;
    float starVal = hash(floor(starUV));
    float starBright = step(0.985, starVal);
    float twinkle = sin(uTime * (2.0 + starVal * 4.0) + starVal * 100.0) * 0.3 + 0.7;
    float starFade = smoothstep(0.05, 0.3, h);
    sky += vec3(starBright * twinkle * starFade * uStarIntensity);
  }

  // ═══════════════════════════════
  // BELOW HORIZON - dark ground color
  // ═══════════════════════════════
  if (h < 0.0) {
    float groundBlend = smoothstep(0.0, -0.15, h);
    sky = mix(sky, vec3(0.15, 0.12, 0.1), groundBlend);
  }

  gl_FragColor = vec4(sky, 1.0);
}
