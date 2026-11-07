export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export const lerp = (a, b, t) => a + (b - a) * t;

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}
