import Vector3, { dot3 } from "./Vector3D";

type Matrix3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];
export default Matrix3;

export const MV3 = (m: Matrix3, v: Vector3): Vector3 => [
  dot3(m[0], v),
  dot3(m[1], v),
  dot3(m[2], v),
];

export const SV3 = (s: number, [x, y, z]: Vector3): Vector3 => [
  s * x,
  s * y,
  s * z,
];
