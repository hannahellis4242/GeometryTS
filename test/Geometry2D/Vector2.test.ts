import { randomFloat } from "../utils";

interface Vector2 {
  readonly x: number;
  readonly y: number;
}

const vector2 = (x: number, y: number): Vector2 => ({ x, y });
const origin2 = (): Vector2 => vector2(0, 0);
const xAxis2 = (x: number): Vector2 => vector2(x, 0);
const yAxis2 = (y: number): Vector2 => vector2(0, y);
const add = (...vs: Vector2[]): Vector2 =>
  vs.reduce((a, b) => ({ x: a.x + b.x, y: a.y + b.y }), origin2());
const sub = (a: Vector2, b: Vector2) => add(a, mult(-1, b));
const mult = (scale: number, { x, y }: Vector2): Vector2 => ({
  x: scale * x,
  y: scale * y,
});
const div = ({ x, y }: Vector2, scale: number): Vector2 => ({
  x: x / scale,
  y: y / scale,
});
const fromTo = (a: Vector2, b: Vector2): Vector2 => sub(b, a);
const dot = (a: Vector2, b: Vector2): number => a.x * b.x + a.y * b.y;
const cross = (a: Vector2, b: Vector2): number => a.x * b.y - a.y * b.x;

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
