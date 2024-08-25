import { randomFloat } from "../utils";
import { det2, inverse } from "../../src/Geometry2D/Matrix2D";
import Vector3D, { dot3, vector3D } from "../../src/Geometry3D/Vector3D";

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

const det3 = ([[a, b, c], [d, e, f], [g, h, i]]: Matrix3D): number =>
  a *
    det2([
      [e, f],
      [h, i],
    ]) -
  b *
    det2([
      [d, f],
      [g, i],
    ]) +
  c *
    det2([
      [d, e],
      [g, h],
    ]);

const MV3 = (
  [[a, b, c], [d, e, f], [g, h, i]]: Matrix3D,
  v: Vector3D
): Vector3D => [dot3([a, b, c], v), dot3([d, e, f], v), dot3([g, h, i], v)];

const SM3 = (
  s: number,
  [[a, b, c], [d, e, f], [g, h, i]]: Matrix3D
): Matrix3D => [
  [s * a, s * b, s * c],
  [s * d, s * e, s * f],
  [s * g, s * h, s * i],
];

const inverse3 = ([[a, b, c], [d, e, f], [g, h, i]]: Matrix3D): Matrix3D =>
  SM3(
    1.0 /
      det3([
        [a, b, c],
        [d, e, f],
        [g, h, i],
      ]),
    [
      [
        det2([
          [e, f],
          [h, i],
        ]),
        -det2([
          [b, c],
          [h, i],
        ]),
        det2([
          [b, c],
          [e, f],
        ]),
      ],
      [
        -det2([
          [d, f],
          [g, i],
        ]),
        det2([
          [a, c],
          [g, i],
        ]),
        -det2([
          [a, c],
          [d, f],
        ]),
      ],
      [
        det2([
          [d, e],
          [g, h],
        ]),
        -det2([
          [a, b],
          [g, h],
        ]),
        det2([
          [a, b],
          [d, e],
        ]),
      ],
    ]
  );

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
  test("can get the determinant", () => {
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
    const det = det3(m);
    expect(det).toBe(
      a * (e * i - f * h) + b * (f * g - d * i) + c * (d * h - e * g)
    );
  });
  test("can multiply a matrix by a vector", () => {
    const a = randomFloat(-5000, 5000);
    const b = randomFloat(-5000, 5000);
    const c = randomFloat(-5000, 5000);

    const d = randomFloat(-5000, 5000);
    const e = randomFloat(-5000, 5000);
    const f = randomFloat(-5000, 5000);

    const g = randomFloat(-5000, 5000);
    const h = randomFloat(-5000, 5000);
    const i = randomFloat(-5000, 5000);

    const x = randomFloat(-5000, 5000);
    const y = randomFloat(-5000, 5000);
    const z = randomFloat(-5000, 5000);

    const m = matrix3D(a, b, c, d, e, f, g, h, i);
    const v = vector3D(x, y, z);

    const u = MV3(m, v);
    expect(u[0]).toBe(a * x + b * y + c * z);
    expect(u[1]).toBe(d * x + e * y + f * z);
    expect(u[2]).toBe(g * x + h * y + i * z);
  });

  test("can multiply a matrix by a scalar", () => {
    const a = randomFloat(-5000, 5000);
    const b = randomFloat(-5000, 5000);
    const c = randomFloat(-5000, 5000);

    const d = randomFloat(-5000, 5000);
    const e = randomFloat(-5000, 5000);
    const f = randomFloat(-5000, 5000);

    const g = randomFloat(-5000, 5000);
    const h = randomFloat(-5000, 5000);
    const i = randomFloat(-5000, 5000);

    const s = randomFloat(-5000, 5000);

    const m = matrix3D(a, b, c, d, e, f, g, h, i);

    const result = SM3(s, m);
    expect(result[0][0]).toBe(s * a);
    expect(result[0][1]).toBe(s * b);
    expect(result[0][2]).toBe(s * c);

    expect(result[1][0]).toBe(s * d);
    expect(result[1][1]).toBe(s * e);
    expect(result[1][2]).toBe(s * f);

    expect(result[2][0]).toBe(s * g);
    expect(result[2][1]).toBe(s * h);
    expect(result[2][2]).toBe(s * i);
  });

  test("can invert a matrix", () => {
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

    const result = inverse3(m);
    const det = det3(m);
    expect(result[0][0]).toBeCloseTo((e * i - f * h) / det);
    expect(result[0][1]).toBeCloseTo((c * h - b * i) / det);
    expect(result[0][2]).toBeCloseTo((b * f - c * e) / det);

    expect(result[1][0]).toBeCloseTo((f * g - d * i) / det);
    expect(result[1][1]).toBeCloseTo((a * i - c * g) / det);
    expect(result[1][2]).toBeCloseTo((c * d - a * f) / det);

    expect(result[2][0]).toBeCloseTo((d * h - e * g) / det);
    expect(result[2][1]).toBeCloseTo((b * g - a * h) / det);
    expect(result[2][2]).toBeCloseTo((a * e - b * d) / det);
  });
});
