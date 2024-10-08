import { randomFloat } from "../utils";
import {
  addVV,
  cross2,
  div,
  dot2,
  fromTo,
  mult,
  origin2,
  sub,
  vector2,
  x,
  xAxis2,
  y,
  yAxis2,
} from "../../src/Geometry2D/Vector2D";

describe("Vector2", () => {
  test("can create a vector", () => {
    const a = randomFloat(-2000, 200);
    const b = randomFloat(-2000, 200);
    const [x, y] = vector2(a, b);
    expect(x).toBe(a);
    expect(y).toBe(b);
  });
  test("can create an origin position vector", () => {
    const [x, y] = origin2();
    expect(x).toBe(0);
    expect(y).toBe(0);
  });
  test("can create an x axis position vector", () => {
    const a = randomFloat(-2000, 2000);
    const [x, y] = xAxis2(a);
    expect(x).toBe(a);
    expect(y).toBe(0);
  });
  test("can create an y axis position vector", () => {
    const a = randomFloat(-2000, 2000);
    const [x, y] = yAxis2(a);
    expect(x).toBe(0);
    expect(y).toBe(a);
  });
  test("can add two vectors", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const [x, y] = addVV(v1, v2);
    expect(x).toBe(x1 + x2);
    expect(y).toBe(y1 + y2);
  });
  test("can add three vectors", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const x3 = randomFloat(-2000, 200);
    const y3 = randomFloat(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const v3 = vector2(x3, y3);
    const [x, y] = addVV(v1, v2, v3);
    expect(x).toBe(x1 + x2 + x3);
    expect(y).toBe(y1 + y2 + y3);
  });
  test("can subtract two vectors", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const [x, y] = sub(v1, v2);
    expect(x).toBe(x1 - x2);
    expect(y).toBe(y1 - y2);
  });
  test("can multiply a vector by a scalar", () => {
    const a = randomFloat(-2000, 200);
    const b = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const [x, y] = mult(scale, vector2(a, b));
    expect(x).toBe(scale * a);
    expect(y).toBe(scale * b);
  });
  test("can divide a vector by a scalar", () => {
    const a = randomFloat(-2000, 200);
    const b = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const [x, y] = div(vector2(a, b), scale);
    expect(x).toBe(a / scale);
    expect(y).toBe(b / scale);
  });
  test("can do a dot product", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const result = dot2(vector2(x1, y1), vector2(x2, y2));
    expect(result).toBe(x1 * x2 + y1 * y2);
  });
  test("can get a vector from one position vector to another", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const [x, y] = fromTo(vector2(x1, y1), vector2(x2, y2));
    expect(x).toBe(x2 - x1);
    expect(y).toBe(y2 - y1);
  });
  test("can do a cross product", () => {
    const a1 = randomFloat(-2000, 200);
    const a2 = randomFloat(-2000, 200);
    const b1 = randomFloat(-2000, 200);
    const b2 = randomFloat(-2000, 200);
    const result = cross2(vector2(a1, a2), vector2(b1, b2));
    expect(result).toBe(a1 * b2 - a2 * b1);
  });
  describe("can extract the components from a vector", () => {
    const a = randomFloat(-2000, 2000);
    const b = randomFloat(-2000, 2000);
    const v = vector2(a, b);
    test("x component", () => {
      expect(x(v)).toBe(a);
    });
    test("y component", () => {
      expect(y(v)).toBe(b);
    });
  });
  test("can subtract two vectors", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const [x, y] = sub(v1, v2);
    expect(x).toBe(x1 - x2);
    expect(y).toBe(y1 - y2);
  });
  test("can multiply a vector by a scalar", () => {
    const a = randomFloat(-2000, 200);
    const b = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const [x, y] = mult(scale, vector2(a, b));
    expect(x).toBe(scale * a);
    expect(y).toBe(scale * b);
  });
  test("can divide a vector by a scalar", () => {
    const a = randomFloat(-2000, 200);
    const b = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const [x, y] = div(vector2(a, b), scale);
    expect(x).toBe(a / scale);
    expect(y).toBe(b / scale);
  });
  test("can do a dot product", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const result = dot2(vector2(x1, y1), vector2(x2, y2));
    expect(result).toBe(x1 * x2 + y1 * y2);
  });
  test("can get a vector from one position vector to another", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const [x, y] = fromTo(vector2(x1, y1), vector2(x2, y2));
    expect(x).toBe(x2 - x1);
    expect(y).toBe(y2 - y1);
  });
  test("can do a cross product", () => {
    const a1 = randomFloat(-2000, 200);
    const a2 = randomFloat(-2000, 200);
    const b1 = randomFloat(-2000, 200);
    const b2 = randomFloat(-2000, 200);
    const result = cross2(vector2(a1, a2), vector2(b1, b2));
    expect(result).toBe(a1 * b2 - a2 * b1);
  });
});
