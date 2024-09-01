import {
  add,
  cross2,
  div,
  dot2,
  fromTo,
  mult,
  origin2,
  sub,
  vector2,
  xAxis2,
  yAxis2,
} from "./Geometry2D/Vector2D";
import Circle from "./Geometry2D/Circle";
import circleFromThreePoints from "./Geometry2D/circleFromThreePoints";
const Geometry2D = {
  vector2,
  origin2,
  xAxis2,
  yAxis2,
  add,
  sub,
  mult,
  div,
  fromTo,
  dot2,
  cross2,
  Circle,
  circleFromThreePoints,
};
export { Geometry2D };
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
  det,
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
  det,
  addMM,
  multMM,
  multMV,
  multSM,
  inverse,
  solve,
};
