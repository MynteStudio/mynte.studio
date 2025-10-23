uniform float u_time;
uniform vec2 u_mouse;
varying vec2 v_uv;

// Noise functions
vec2 fade(vec2 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}

float cnoise21(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

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
