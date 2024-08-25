import { vector2 } from "../../src/Geometry2D/Vector2D";
import { randomFloat } from "../utils";
import {
  det,
  id2,
  matrix2D,
  multMM,
  multMV,
  solve,
  addMM,
} from "../../src/Geometry2D/Matrix2D";

describe("Matrix2D", () => {
  test("can create a matrix", () => {
    const a = randomFloat(-200, 200);
    const b = randomFloat(-200, 200);
    const c = randomFloat(-200, 200);
    const d = randomFloat(-200, 200);
    const matrix = matrix2D(a, b, c, d);
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
    const matrix = matrix2D(a, b, c, d);
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
    const m1 = matrix2D(a, b, c, d);
    const m2 = matrix2D(e, f, g, h);
    const m3 = addMM(m1, m2);
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
    const m1 = matrix2D(a, b, c, d);
    const m2 = matrix2D(e, f, g, h);
    const m3 = matrix2D(i, j, k, l);
    const m4 = addMM(m1, m2, m3);
    expect(m4[0][0]).toBe(a + e + i);
    expect(m4[0][1]).toBe(b + f + j);
    expect(m4[1][0]).toBe(c + g + k);
    expect(m4[1][1]).toBe(d + h + l);
  });
  test("can multiply two matrices", () => {
    const m1 = matrix2D(5, 6, 1, 2);
    const m2 = matrix2D(-2, 3, 1, 3);
    const [[a, b], [c, d]] = multMM(m1, m2);
    expect(a).toBe(-4);
    expect(b).toBe(33);
    expect(c).toBe(0);
    expect(d).toBe(9);
  });
  test("can multiply a matrix and a vector", () => {
    const m = matrix2D(5, 6, 1, 2);
    const v = vector2(5, 4);
    const [x, y] = multMV(m, v);
    expect(x).toBe(49);
    expect(y).toBe(13);
  });
  test("can solve system of equations", () => {
    const m = matrix2D(1, 3, 4, -2);
    const b = vector2(17, -2);
    const a = solve(m, b);
    expect(a[0]).toBeCloseTo(2);
    expect(a[1]).toBe(5);
  });
});
