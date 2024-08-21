<<<<<<< HEAD
import { Vector2D, Matrix2D } from "./Geometry2D";
const Geometry2D = { Vector2D, Matrix2D };
=======
import {
  add,
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
  dot,
  cross,
};
>>>>>>> 8509f3d (packaging)
export { Geometry2D };
