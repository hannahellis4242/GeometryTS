import Vector2, { cross, dot, vector2 } from "../../src/Geometry2D/Vector2D";

interface Shape {}
class Circle implements Shape {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly r: number
  ) {}
}
const circleFromThreePoints = (p1: Vector2, p2: Vector2, p3: Vector2): Circle =>
  convertParams(getParams(p1, p2, p3));

type Matrix3 = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

type Vector3 = [number, number, number];

const dot3 = (a: Vector3, b: Vector3): number =>
  a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const MV3 = (m: Matrix3, v: Vector3): Vector3 => [
  dot3(m[0], v),
  dot3(m[1], v),
  dot3(m[2], v),
];

const x = (v: Vector2 | Vector3): number => v[0];
const y = (v: Vector2 | Vector3): number => v[1];
const z = (v: Vector3): number => v[2];

const createMatrix = (p1: Vector2, p2: Vector2, p3: Vector2): Matrix3 => [
  [y(p2) - y(p3), y(p3) - y(p1), y(p1) - y(p2)],
  [x(p3) - x(p2), x(p1) - x(p3), x(p2) - x(p1)],
  [cross(p2, p3), cross(p3, p1), cross(p1, p2)],
];

const createVector = (p1: Vector2, p2: Vector2, p3: Vector2): Vector3 => [
  dot(p1, p1),
  dot(p2, p2),
  dot(p3, p3),
];

const createScala = (p1: Vector2, p2: Vector2, p3: Vector2): number =>
  (x(p2) - x(p1)) * y(p3) + (x(p1) - x(p3)) * y(p2) + (x(p3) - x(p2)) * y(p1);

const SV3 = (s: number, [x, y, z]: Vector3): Vector3 => [s * x, s * y, s * z];

const getParams = (p1: Vector2, p2: Vector2, p3: Vector2): Vector3 =>
  SV3(
    -1 / createScala(p1, p2, p3),
    MV3(createMatrix(p1, p2, p3), createVector(p1, p2, p3))
  );

const convertParams = ([A, B, C]: Vector3): Circle => {
  const cx = -A / 2;
  const cy = -B / 2;
  const r = Math.sqrt(A * A + B * B - 4 * C) / 2;
  return new Circle(cx, cy, r);
};

namespace CircleFromThreePointsTest {
  interface Params {
    point1: Vector2;
    point2: Vector2;
    point3: Vector2;
    expectedCircle: Circle;
  }

  const checkCircle = (result: Circle, expected: Circle) => {
    expect(result.x).toBeCloseTo(expected.x);
    expect(result.y).toBeCloseTo(expected.y);
    expect(result.r).toBeCloseTo(expected.r);
  };

  describe("circle from three points", () => {
    const testCases: Params[] = [
      {
        point1: vector2(0, 0),
        point2: vector2(1, 1),
        point3: vector2(0, 2),
        expectedCircle: new Circle(0, 1, 1),
      },
      {
        point1: vector2(1, 1),
        point2: vector2(2.5, 1.5),
        point3: vector2(1, 2),
        expectedCircle: new Circle(5 / 3, 3 / 2, Math.sqrt(0.694444444)),
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
