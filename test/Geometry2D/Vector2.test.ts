import { randomInt } from "crypto";
import { randomFloat } from "../utils";

interface Vector2 {
  readonly x: number;
  readonly y: number;
}

const vector2 = (x: number, y: number): Vector2 => ({ x, y });
const origin2 = (): Vector2 => vector2(0, 0);
const add = (...vs: Vector2[]): Vector2 =>
  vs.reduce((a, b) => ({ x: a.x + b.x, y: a.y + b.y }), origin2());
const mult = (scale: number, { x, y }: Vector2): Vector2 => ({
  x: scale * x,
  y: scale * y,
});

describe("Vector2", () => {
  test("can create a vector", () => {
    const x = randomInt(-2000, 200);
    const y = randomInt(-2000, 200);
    const result = vector2(x, y);
    expect(result.x).toBe(x);
    expect(result.y).toBe(y);
  });
  test("can create an origin position vector", () => {
    const { x, y } = origin2();
    expect(x).toBe(0);
    expect(y).toBe(0);
  });
  test("can add two vectors", () => {
    const x1 = randomInt(-2000, 200);
    const y1 = randomInt(-2000, 200);
    const x2 = randomInt(-2000, 200);
    const y2 = randomInt(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const result = add(v1, v2);
    expect(result.x).toBe(x1 + x2);
    expect(result.y).toBe(y1 + y2);
  });
  test("can add three vectors", () => {
    const x1 = randomInt(-2000, 200);
    const y1 = randomInt(-2000, 200);
    const x2 = randomInt(-2000, 200);
    const y2 = randomInt(-2000, 200);
    const x3 = randomInt(-2000, 200);
    const y3 = randomInt(-2000, 200);
    const v1 = vector2(x1, y1);
    const v2 = vector2(x2, y2);
    const v3 = vector2(x3, y3);
    const result = add(v1, v2, v3);
    expect(result.x).toBe(x1 + x2 + x3);
    expect(result.y).toBe(y1 + y2 + y3);
  });
  test("can multiply a vector by a scala", () => {
    const x = randomInt(-2000, 200);
    const y = randomInt(-2000, 200);
    const scale = randomFloat(-200, 200);
    const result = mult(scale, vector2(x, y));
    expect(result.x).toBe(scale * x);
    expect(result.y).toBe(scale * y);
  });
});
