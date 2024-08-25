import { randomFloat } from "../utils";

type Matrix3D = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

const matrix3D = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
  i: number
): Matrix3D => [
  [a, b, c],
  [d, e, f],
  [g, h, i],
];

describe("Matrix3D", () => {
  test("can create a matrix", () => {
    const a = randomFloat(-5000, 5000);
    const b = randomFloat(-5000, 5000);
    const c = randomFloat(-5000, 5000);

    const d = randomFloat(-5000, 5000);
    const e = randomFloat(-5000, 5000);
    const f = randomFloat(-5000, 5000);

    const g = randomFloat(-5000, 5000);
    const h = randomFloat(-5000, 5000);
    const i = randomFloat(-5000, 5000);

    const m = matrix3D(a, b, c, d, e, f, g, h, i);

    expect(m[0][0]).toBe(a);
    expect(m[0][1]).toBe(b);
    expect(m[0][2]).toBe(c);

    expect(m[1][0]).toBe(d);
    expect(m[1][1]).toBe(e);
    expect(m[1][2]).toBe(f);

    expect(m[2][0]).toBe(g);
    expect(m[2][1]).toBe(h);
    expect(m[2][2]).toBe(i);
  });
});
