uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform float uRadius;
varying vec2 vUv;

float roundedBoxSDF(vec2 centerPos, vec2 size, float radius) {
  return length(max(abs(centerPos) - size + radius, 0.0)) - radius;
}

void main() {
  vec2 halfRes = uResolution * 0.5;
  vec2 pos = (vUv - 0.5) * uResolution;

  float distance = roundedBoxSDF(pos, halfRes, uRadius);
  float smoothedAlpha = 1.0 - smoothstep(0.0, 0.01, distance);

  vec4 texColor = texture2D(uTexture, vUv);

  gl_FragColor = vec4(texColor.rgb, texColor.a * smoothedAlpha);
}
