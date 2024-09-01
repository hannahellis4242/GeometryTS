import Circle from "./Geometry2D/Circle";
declare const Geometry2D: {
    vector2: (x: number, y: number) => import("./Geometry2D/Vector2D").default;
    origin2: () => import("./Geometry2D/Vector2D").default;
    xAxis2: (x: number) => import("./Geometry2D/Vector2D").default;
    yAxis2: (y: number) => import("./Geometry2D/Vector2D").default;
    addVV: (...vs: import("./Geometry2D/Vector2D").default[]) => import("./Geometry2D/Vector2D").default;
    sub: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    mult: (scale: number, [x, y]: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    div: ([x, y]: import("./Geometry2D/Vector2D").default, scale: number) => import("./Geometry2D/Vector2D").default;
    fromTo: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    dot2: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    cross2: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    Circle: typeof Circle;
    circleFromThreePoints: (p1: import("./Geometry2D/Vector2D").default, p2: import("./Geometry2D/Vector2D").default, p3: import("./Geometry2D/Vector2D").default) => Circle;
};
export { Geometry2D };
