type Vector3D = [number, number, number];
export default Vector3D;

export const vector3D = (a: number, b: number, c: number): Vector3D => [
  a,
  b,
  c,
];

export const dot3 = ([a0, a1, a2]: Vector3D, [b0, b1, b2]: Vector3D): number =>
  a0 * b0 + a1 * b1 + a2 * b2;
