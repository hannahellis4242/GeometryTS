import { randomFloat } from "../utils";

type MatrixSquare2 = [[number, number], [number, number]];
const matrixSquare2 = (
  a: number,
  b: number,
  c: number,
  d: number
): MatrixSquare2 => [
  [a, b],
  [c, d],
];
const id2 = (): MatrixSquare2 => [
  [1, 0],
  [0, 1],
];

const det = ([[a, b], [c, d]]: MatrixSquare2): number => a * d - b * c;
const add = (...matrices: MatrixSquare2[]): MatrixSquare2 =>
  matrices.reduce(
    (
      [[a00, a01], [a10, a11]]: MatrixSquare2,
      [[b00, b01], [b10, b11]]: MatrixSquare2
    ): MatrixSquare2 => [
      [a00 + b00, a01 + b01],
      [a10 + b10, a11 + b11],
    ],
    matrixSquare2(0, 0, 0, 0)
  );
const multMM = (
  [[a00, a01], [a10, a11]]: MatrixSquare2,
  [[b00, b01], [b10, b11]]: MatrixSquare2
): MatrixSquare2 => [
  [a00 * b00 + a01 * b10, a00 * b01 + a01 * b11],
  [a10 * b00 + a11 * b10, a10 * b01 + a11 * b11],
];

describe("MatrixSquare2", () => {
  test("can create a matrix", () => {
    const a = randomFloat(-200, 200);
    const b = randomFloat(-200, 200);
    const c = randomFloat(-200, 200);
    const d = randomFloat(-200, 200);
    const matrix = matrixSquare2(a, b, c, d);
    expect(matrix[0][0]).toBe(a);
    expect(matrix[0][1]).toBe(b);
    expect(matrix[1][0]).toBe(c);
    expect(matrix[1][1]).toBe(d);
  });
  test("can create identity matrix", () => {
    const matrix = id2();
    expect(matrix[0][0]).toBe(1);
    expect(matrix[0][1]).toBe(0);
    expect(matrix[1][0]).toBe(0);
    expect(matrix[1][1]).toBe(1);
  });
  test("can calculate a determinant", () => {
    const a = randomFloat(-200, 200);
    const b = randomFloat(-200, 200);
    const c = randomFloat(-200, 200);
    const d = randomFloat(-200, 200);
    const matrix = matrixSquare2(a, b, c, d);
    const determinant = det(matrix);
    expect(determinant).toBe(a * d - b * c);
  });

  test("can add two matrices", () => {
    const a = randomFloat(-200, 200);
    const b = randomFloat(-200, 200);
    const c = randomFloat(-200, 200);
    const d = randomFloat(-200, 200);
    const e = randomFloat(-200, 200);
    const f = randomFloat(-200, 200);
    const g = randomFloat(-200, 200);
    const h = randomFloat(-200, 200);
    const m1 = matrixSquare2(a, b, c, d);
    const m2 = matrixSquare2(e, f, g, h);
    const m3 = add(m1, m2);
    expect(m3[0][0]).toBe(a + e);
    expect(m3[0][1]).toBe(b + f);
    expect(m3[1][0]).toBe(c + g);
    expect(m3[1][1]).toBe(d + h);
  });
  test("can add three matrices", () => {
    const a = randomFloat(-200, 200);
    const b = randomFloat(-200, 200);
    const c = randomFloat(-200, 200);
    const d = randomFloat(-200, 200);
    const e = randomFloat(-200, 200);
    const f = randomFloat(-200, 200);
    const g = randomFloat(-200, 200);
    const h = randomFloat(-200, 200);
    const i = randomFloat(-200, 200);
    const j = randomFloat(-200, 200);
    const k = randomFloat(-200, 200);
    const l = randomFloat(-200, 200);
    const m1 = matrixSquare2(a, b, c, d);
    const m2 = matrixSquare2(e, f, g, h);
    const m3 = matrixSquare2(i, j, k, l);
    const m4 = add(m1, m2, m3);
    expect(m4[0][0]).toBe(a + e + i);
    expect(m4[0][1]).toBe(b + f + j);
    expect(m4[1][0]).toBe(c + g + k);
    expect(m4[1][1]).toBe(d + h + l);
  });
  test("can multiply to matrices", () => {
    const m1 = matrixSquare2(5, 6, 1, 2);
    const m2 = matrixSquare2(-2, 3, 1, 3);
    const [[a, b], [c, d]] = multMM(m1, m2);
    expect(a).toBe(-4);
    expect(b).toBe(33);
    expect(c).toBe(0);
    expect(d).toBe(9);
  });
});
