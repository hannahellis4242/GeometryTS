import Vector2, { vector2 } from "../../src/Geometry2D/Vector2D";
import Shape2D, { InsideMode } from "../../src/Geometry2D/Shape2D";
class Triangle implements Shape2D {
  constructor(readonly points: [Vector2, Vector2, Vector2]) {}
  inside(p: Vector2, mode: InsideMode): boolean {
    throw new Error("Method not implemented.");
  }
}

describe("Triangle", () => {
  test("constructor", () => {
    const p1 = vector2(0, 0);
    const p2 = vector2(1, 0);
    const p3 = vector2(0, 1);
    const triangle = new Triangle([p1, p2, p3]);
  });
});
