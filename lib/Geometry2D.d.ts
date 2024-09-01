<<<<<<< HEAD
export declare const Vector2D: {
=======
import Circle from "./Geometry2D/Circle";
declare const Geometry2D: {
>>>>>>> 6277783 (setting up lib)
    vector2: (x: number, y: number) => import("./Geometry2D/Vector2D").default;
    origin2: () => import("./Geometry2D/Vector2D").default;
    xAxis2: (x: number) => import("./Geometry2D/Vector2D").default;
    yAxis2: (y: number) => import("./Geometry2D/Vector2D").default;
    add: (...vs: import("./Geometry2D/Vector2D").default[]) => import("./Geometry2D/Vector2D").default;
    sub: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    mult: (scale: number, [x, y]: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    div: ([x, y]: import("./Geometry2D/Vector2D").default, scale: number) => import("./Geometry2D/Vector2D").default;
    fromTo: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
<<<<<<< HEAD
    dot: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    cross: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
};
export declare const Matrix2D: {
    matrix2D: (a: number, b: number, c: number, d: number) => import("./Geometry2D/Matrix2D").default;
    id2: () => import("./Geometry2D/Matrix2D").default;
    det: ([[a, b], [c, d]]: import("./Geometry2D/Matrix2D").default) => number;
    addMM: (...matrices: import("./Geometry2D/Matrix2D").default[]) => import("./Geometry2D/Matrix2D").default;
    multMM: ([[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default, [[b00, b01], [b10, b11]]: import("./Geometry2D/Matrix2D").default) => import("./Geometry2D/Matrix2D").default;
    multMV: ([[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default, [b0, b1]: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    multSM: (scale: number, [[a00, a01], [a10, a11]]: import("./Geometry2D/Matrix2D").default) => import("./Geometry2D/Matrix2D").default;
    inverse: (a: import("./Geometry2D/Matrix2D").default) => import("./Geometry2D/Matrix2D").default;
    solve: (m: import("./Geometry2D/Matrix2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
};
=======
    dot2: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    cross2: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    Circle: typeof Circle;
    circleFromThreePoints: (p1: import("./Geometry2D/Vector2D").default, p2: import("./Geometry2D/Vector2D").default, p3: import("./Geometry2D/Vector2D").default) => Circle;
};
export { Geometry2D };
>>>>>>> 6277783 (setting up lib)
