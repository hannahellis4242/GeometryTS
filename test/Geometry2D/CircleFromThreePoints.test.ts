import Vector2, { vector2 } from "../../src/Geometry2D/Vector2D";
import Circle from "../../src/Geometry2D/Circle";
import circleFromThreePoints from "../../src/Geometry2D/circleFromThreePoints";

namespace CircleFromThreePointsTest {
  interface Params {
    point1: Vector2;
    point2: Vector2;
    point3: Vector2;
    expectedCircle: Circle;
  }

  const checkCircle = (result: Circle, expected: Circle) => {
    expect(result.centre[0]).toBeCloseTo(expected.centre[0]);
    expect(result.centre[1]).toBeCloseTo(expected.centre[1]);
    expect(result.radius).toBeCloseTo(expected.radius);
  };

  describe("circle from three points", () => {
    const testCases: Params[] = [
      {
        point1: vector2(0, 0),
        point2: vector2(1, 1),
        point3: vector2(0, 2),
        expectedCircle: new Circle([0, 1], 1),
      },
      {
        point1: vector2(1, 1),
        point2: vector2(2.5, 1.5),
        point3: vector2(1, 2),
        expectedCircle: new Circle([5 / 3, 3 / 2], Math.sqrt(0.694444444)),
      },
    ];

    testCases.forEach((testCase) =>
      test("", () => {
        const result = circleFromThreePoints(
          testCase.point1,
          testCase.point2,
          testCase.point3
        );
        checkCircle(result, testCase.expectedCircle);
      })
    );
  });
}
