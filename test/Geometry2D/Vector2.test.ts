import { randomFloat } from "../utils";
import {
  add,
  cross,
  div,
  dot,
  fromTo,
  mult,
  origin2,
  sub,
  vector2,
  xAxis2,
  yAxis2,
} from "../../src/Geomerty2D/Vector2";

describe("Vector2", () => {
  test("can create a vector", () => {
    const x = randomFloat(-2000, 200);
    const y = randomFloat(-2000, 200);
    const result = vector2(x, y);
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
  });
  test("can create an origin position vector", () => {
    const { x, y } = origin2();
    expect(x).toBe(0);
    expect(y).toBe(0);
  });
  test("can create an x axis position vector", () => {
    const a = randomFloat(-2000, 2000);
    const { x, y } = xAxis2(a);
    expect(x).toBe(a);
    expect(y).toBe(0);
  });
  test("can create an y axis position vector", () => {
    const a = randomFloat(-2000, 2000);
    const { x, y } = yAxis2(a);
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
    const result = add(v1, v2);
    expect(result.x).toBe(x1 + x2);
    expect(result.y).toBe(y1 + y2);
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
    const result = add(v1, v2, v3);
    expect(result.x).toBe(x1 + x2 + x3);
    expect(result.y).toBe(y1 + y2 + y3);
  });
  test("can subtract two vectors", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const result = sub(v1, v2);
    expect(result.x).toBe(x1 - x2);
    expect(result.y).toBe(y1 - y2);
  });
  test("can multiply a vector by a scalar", () => {
    const x = randomFloat(-2000, 200);
    const y = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const result = mult(scale, vector2(x, y));
    expect(result.x).toBe(scale * x);
    expect(result.y).toBe(scale * y);
  });
  test("can divide a vector by a scalar", () => {
    const x = randomFloat(-2000, 200);
    const y = randomFloat(-2000, 200);
    const scale = randomFloat(-200, 200);
    const result = div(vector2(x, y), scale);
    expect(result.x).toBe(x / scale);
    expect(result.y).toBe(y / scale);
  });
  test("can do a dot product", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const result = dot(vector2(x1, y1), vector2(x2, y2));
    expect(result).toBe(x1 * x2 + y1 * y2);
  });
  test("can get a vector from one position vector to another", () => {
    const x1 = randomFloat(-2000, 200);
    const y1 = randomFloat(-2000, 200);
    const x2 = randomFloat(-2000, 200);
    const y2 = randomFloat(-2000, 200);
    const { x, y } = fromTo(vector2(x1, y1), vector2(x2, y2));
    expect(x).toBe(x2 - x1);
    expect(y).toBe(y2 - y1);
  });
  test("can do a cross product", () => {
    const a1 = randomFloat(-2000, 200);
    const a2 = randomFloat(-2000, 200);
    const b1 = randomFloat(-2000, 200);
    const b2 = randomFloat(-2000, 200);
    const result = cross(vector2(a1, a2), vector2(b1, b2));
    expect(result).toBe(a1 * b2 - a2 * b1);
  });
});
