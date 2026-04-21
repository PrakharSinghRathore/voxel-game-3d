uniform vec3 uTopColor;
uniform vec3 uHorizonColor;
uniform vec3 uSunDir;
uniform float uStarIntensity;
uniform float uTime;
varying vec3 vWorldPos;
void main() {
  vec3 dir = normalize(vWorldPos);
  float h = dir.y;
  vec3 sky = mix(uHorizonColor, uTopColor, smoothstep(0.0, 0.5, h));
  float sunDot = max(dot(dir, uSunDir), 0.0);
  float sun = pow(sunDot, 512.0);
  sky += vec3(1.0, 0.9, 0.6) * sun;
  float moonDot = max(dot(dir, -uSunDir), 0.0);
  float moon = pow(moonDot, 512.0);
  sky += vec3(0.8, 0.85, 0.9) * moon * uStarIntensity;
  gl_FragColor = vec4(sky, 1.0);
}
