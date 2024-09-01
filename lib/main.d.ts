<<<<<<< HEAD
declare const Geometry2D: {
<<<<<<< HEAD
  Vector2D: {
=======
>>>>>>> 8509f3d (packaging)
    vector2: (x: number, y: number) => import("./Geometry2D/Vector2D").default;
    origin2: () => import("./Geometry2D/Vector2D").default;
    xAxis2: (x: number) => import("./Geometry2D/Vector2D").default;
    yAxis2: (y: number) => import("./Geometry2D/Vector2D").default;
<<<<<<< HEAD
    add: (
      ...vs: import("./Geometry2D/Vector2D").default[]
    ) => import("./Geometry2D/Vector2D").default;
    sub: (
      a: import("./Geometry2D/Vector2D").default,
      b: import("./Geometry2D/Vector2D").default
    ) => import("./Geometry2D/Vector2D").default;
    mult: (
      scale: number,
      [x, y]: import("./Geometry2D/Vector2D").default
    ) => import("./Geometry2D/Vector2D").default;
    div: (
      [x, y]: import("./Geometry2D/Vector2D").default,
      scale: number
    ) => import("./Geometry2D/Vector2D").default;
    fromTo: (
      a: import("./Geometry2D/Vector2D").default,
      b: import("./Geometry2D/Vector2D").default
    ) => import("./Geometry2D/Vector2D").default;
    dot: (
      a: import("./Geometry2D/Vector2D").default,
      b: import("./Geometry2D/Vector2D").default
    ) => number;
    cross: (
      a: import("./Geometry2D/Vector2D").default,
      b: import("./Geometry2D/Vector2D").default
    ) => number;
  };
  Matrix2D: {
    matrix2D: (
      a: number,
      b: number,
      c: number,
      d: number
    ) => import("./Geometry2D/Matrix2D").default;
    id2: () => import("./Geometry2D/Matrix2D").default;
    det: ([[a, b], [c, d]]: import("./Geometry2D/Matrix2D").default) => number;
    addMM: (
      ...matrices: import("./Geometry2D/Matrix2D").default[]
    ) => import("./Geometry2D/Matrix2D").default;
    multMM: (
      [[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default,
      [[b00, b01], [b10, b11]]: import("./Geometry2D/Matrix2D").default
    ) => import("./Geometry2D/Matrix2D").default;
    multMV: (
      [[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default,
      [b0, b1]: import("./Geometry2D/Vector2D").default
    ) => import("./Geometry2D/Vector2D").default;
    multSM: (
      scale: number,
      [[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default
    ) => import("./Geometry2D/Matrix2D").default;
    inverse: (
      a: import("./Geometry2D/Matrix2D").default
    ) => import("./Geometry2D/Matrix2D").default;
    solve: (
      m: import("./Geometry2D/Matrix2D").default,
      b: import("./Geometry2D/Vector2D").default
    ) => import("./Geometry2D/Vector2D").default;
  };
=======
    add: (...vs: import("./Geometry2D/Vector2D").default[]) => import("./Geometry2D/Vector2D").default;
    sub: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    mult: (scale: number, { x, y }: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    div: ({ x, y }: import("./Geometry2D/Vector2D").default, scale: number) => import("./Geometry2D/Vector2D").default;
    fromTo: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    dot: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    cross: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
>>>>>>> 8509f3d (packaging)
=======
import { Geometry2D } from "./Geometry2D";
import { Geometry3D } from "./Geometry3D";
declare const Coord: {
    x: (v: import("./Geometry2D/Vector2D").default | import("./Geometry3D/Vector3D").default) => number;
    y: (v: import("./Geometry2D/Vector2D").default | import("./Geometry3D/Vector3D").default) => number;
    z: (v: import("./Geometry3D/Vector3D").default) => number;
>>>>>>> 6277783 (setting up lib)
};
export { Coord, Geometry2D, Geometry3D };
