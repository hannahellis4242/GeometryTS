import {
  addVV,
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
} from "./Geometry2D/Vector2D";
import {
  addMM,
  det2,
  id2,
  inverse,
  matrix2D,
  multMM,
  multMV,
  multSM,
  solve,
} from "./Geometry2D/Matrix2D";
export const Vector2D = {
  vector2,
  origin2,
  xAxis2,
  yAxis2,
  add: addVV,
  sub,
  mult,
  div,
  fromTo,
  dot,
  cross,
};
export const Matrix2D = {
  matrix2D,
  id2,
  det: det2,
  addMM,
  multMM,
  multMV,
  multSM,
  inverse,
  solve,
};
