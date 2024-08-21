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
const add = (
  [[a00, a01], [a10, a11]]: MatrixSquare2,
  [[b00, b01], [b10, b11]]: MatrixSquare2
): MatrixSquare2 => [
  [a00 + b00, a01 + b01],
  [a10 + b10, a11 + b11],
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
});
