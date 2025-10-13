import { cnoise21 } from './noise'

export const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
varying vec2 v_uv;

${cnoise21}

float random(vec2 p) {
  vec2 k1 = vec2(
    23.14069263277926, // e^pi (Gelfond's constant)
    2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
  );
  return fract(
    cos(dot(p, k1)) * 12345.6789
  );
}

const vec3 black = vec3(0.031, 0.031, 0.031);
const vec3 color1 = vec3(0.175, 0.175, 0.175);
const vec3 color2 = vec3(0.392, 0.392, 0.392);
const vec3 color3 = vec3(0.56);

void main() {
  vec2 baseUv = v_uv * (u_mouse + 0.3 * (length(u_mouse) + 0.5));
  vec2 wave = vec2(
    sin(v_uv.y * 3.0 + u_time) * 0.1,
    cos(v_uv.x * 3.0 + u_time * 0.7) * 0.1
  );

  vec2 seed1 = (baseUv + wave * 0.5) * 1.2;
  float n1_base = cnoise21(seed1 + u_time * 0.1);

  vec2 seed2 = (baseUv - wave) * 2.5;
  float n2_base = cnoise21(seed2 - u_time * 0.15) * 0.4;

  float n = n1_base + n2_base + length(u_mouse) * 0.9;

  float ml = pow(length(u_mouse), 2.5) * 0.15;

  float n1 = smoothstep(-0.1, 0.15, n);
  vec3 color = mix(black, color1, n1);

  float n2 = smoothstep(0.05 + ml, 0.25 + ml, n);
  color = mix(color, color2, n2);

  float n3 = smoothstep(0.2 + ml, 0.4 + ml, n);
  color = mix(color, color3, n3);

  float n4 = smoothstep(0.35 + ml, 0.55 + ml, n);
  color = mix(color, black, n4);

  vec2 uvrandom = v_uv + u_time * 0.01;
  uvrandom.y *= random(vec2(uvrandom.y, 0.4));
  color.rgb += random(uvrandom) * 0.05;

  gl_FragColor = vec4(color, 1.0);
}
`
