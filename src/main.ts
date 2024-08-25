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
const Geometry2D = {
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
export { Geometry2D };
