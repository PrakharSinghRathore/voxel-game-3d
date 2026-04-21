uniform float uTime;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 pos = position;
  pos.y += sin(pos.x * 2.0 + uTime) * 0.04 + sin(pos.z * 1.7 + uTime * 1.3) * 0.04;
  vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
  vNormal = normalMatrix * normal;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
