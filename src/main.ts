<<<<<<< HEAD
import { Vector2D, Matrix2D } from "./Geometry2D";
const Geometry2D = { Vector2D, Matrix2D };
=======
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
  dot: dot2,
  cross: cross2,
};
>>>>>>> 8509f3d (packaging)
export { Geometry2D };
