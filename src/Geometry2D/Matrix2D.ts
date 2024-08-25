import Vector2 from "./Vector2D";

type Matrix2D = [[number, number], [number, number]];
export default Matrix2D;

export const matrix2D = (
  a: number,
  b: number,
  c: number,
  d: number
): Matrix2D => [
  [a, b],
  [c, d],
];
export const id2 = (): Matrix2D => [
  [1, 0],
  [0, 1],
];

export const det2 = ([[a, b], [c, d]]: Matrix2D): number => a * d - b * c;
export const addMM = (...matrices: Matrix2D[]): Matrix2D =>
  matrices.reduce(
    (
      [[a00, a01], [a10, a11]]: Matrix2D,
      [[b00, b01], [b10, b11]]: Matrix2D
    ): Matrix2D => [
      [a00 + b00, a01 + b01],
      [a10 + b10, a11 + b11],
    ],
    matrix2D(0, 0, 0, 0)
  );
export const multMM = (
  [[a00, a01], [a10, a11]]: Matrix2D,
  [[b00, b01], [b10, b11]]: Matrix2D
): Matrix2D => [
  [a00 * b00 + a01 * b10, a00 * b01 + a01 * b11],
  [a10 * b00 + a11 * b10, a10 * b01 + a11 * b11],
];
export const multMV = (
  [[a00, a01], [a10, a11]]: Matrix2D,
  [b0, b1]: Vector2
): Vector2 => [a00 * b0 + a01 * b1, a10 * b0 + a11 * b1];

export const multSM = (
  scale: number,
  [[a00, a01], [a10, a11]]: Matrix2D
): Matrix2D => [
  [scale * a00, scale * a01],
  [scale * a10, scale * a11],
];

export const inverse = (a: Matrix2D): Matrix2D =>
  multSM(1 / det2(a), [
    [a[1][1], -a[0][1]],
    [-a[1][0], a[0][0]],
  ]);

export const solve = (m: Matrix2D, b: Vector2): Vector2 =>
  multMV(inverse(m), b);
