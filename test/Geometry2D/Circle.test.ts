import Circle from "../../src/Geometry2D/Circle";
import Vector2 from "../../src/Geometry2D/Vector2D";
describe("Circle", () => {
  const circle = new Circle([3, 5], 2);
  test("Point is strictly inside circle", () => {
    const point: Vector2 = [2, 4];
    expect(circle.inside(point)).toBeTruthy();
    expect(circle.inside(point, "allowEdges")).toBeTruthy();
  });
  test("Point on edge", () => {
    const point: Vector2 = [1, 5];
    expect(circle.inside(point, "strict")).toBeFalsy();
    expect(circle.inside(point, "allowEdges")).toBeTruthy();
  });
  test("Point outside", () => {
    const point: Vector2 = [4, 3];
    expect(circle.inside(point, "strict")).toBeFalsy();
    expect(circle.inside(point, "allowEdges")).toBeFalsy();
  });
});
