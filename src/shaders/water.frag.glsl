uniform float uTime;
uniform vec3 uCamPos;
uniform vec3 uSunDir;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vec3 deep = vec3(0.05, 0.2, 0.5);
  vec3 shallow = vec3(0.1, 0.5, 0.8);
  vec3 viewDir = normalize(uCamPos - vWorldPos);
  vec3 norm = normalize(vNormal);
  float fresnel = pow(1.0 - max(dot(viewDir, norm), 0.0), 3.0);
  vec3 color = mix(deep, shallow, fresnel);
  float spec = pow(max(dot(reflect(-uSunDir, norm), viewDir), 0.0), 64.0);
  color += vec3(1.0) * spec * 0.4;
  gl_FragColor = vec4(color, 0.72);
}
