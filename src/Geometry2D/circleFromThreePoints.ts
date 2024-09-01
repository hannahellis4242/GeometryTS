import Matrix3, { SV3, MV3 } from "../Geometry3D/Matrix3";
import Vector3 from "../Geometry3D/Vector3D";
import Circle from "./Circle";
import Vector2, { cross2, dot2 } from "./Vector2D";

const createMatrix = (p1: Vector2, p2: Vector2, p3: Vector2): Matrix3 => [
  [p2[1] - p3[1], p3[1] - p1[1], p1[1] - p2[1]],
  [p3[0] - p2[0], p1[0] - p3[0], p2[0] - p1[0]],
  [cross2(p2, p3), cross2(p3, p1), cross2(p1, p2)],
];

const createVector = (p1: Vector2, p2: Vector2, p3: Vector2): Vector3 => [
  dot2(p1, p1),
  dot2(p2, p2),
  dot2(p3, p3),
];

const createScala = (p1: Vector2, p2: Vector2, p3: Vector2): number =>
  (p2[0] - p1[0]) * p3[1] + (p1[0] - p3[0]) * p2[1] + (p3[0] - p2[0]) * p1[1];

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

const circleFromThreePoints = (p1: Vector2, p2: Vector2, p3: Vector2): Circle =>
  convertParams(getParams(p1, p2, p3));
export default circleFromThreePoints;
