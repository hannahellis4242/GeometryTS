import { randomFloat } from "../utils";

type Vector3D = [number, number, number];

const vector3D = (a: number, b: number, c: number): Vector3D => [a, b, c];

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
});
