import { randomFloat } from "../utils";
import Vector3D, { vector3D, dot3 } from "../../src/Geometry3D/Vector3D";

describe("Vector3D", () => {
  test("can create a vector", () => {
    const a = randomFloat(-5000, 5000);
    const b = randomFloat(-5000, 5000);
    const c = randomFloat(-5000, 5000);

    const v = vector3D(a, b, c);

    expect(v[0]).toBe(a);
    expect(v[1]).toBe(b);
    expect(v[2]).toBe(c);
  });

  test("can get the dot product of two vectors", () => {
    const a = randomFloat(-5000, 5000);
    const b = randomFloat(-5000, 5000);
    const c = randomFloat(-5000, 5000);

    const d = randomFloat(-5000, 5000);
    const e = randomFloat(-5000, 5000);
    const f = randomFloat(-5000, 5000);

    const u = vector3D(a, b, c);
    const v = vector3D(d, e, f);

    const result = dot3(u, v);
    expect(result).toBe(a * d + b * e + c * f);
  });
});
