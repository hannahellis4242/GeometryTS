declare const Geometry2D: {
    vector2: (x: number, y: number) => import("./Geometry2D/Vector2D").default;
    origin2: () => import("./Geometry2D/Vector2D").default;
    xAxis2: (x: number) => import("./Geometry2D/Vector2D").default;
    yAxis2: (y: number) => import("./Geometry2D/Vector2D").default;
    add: (...vs: import("./Geometry2D/Vector2D").default[]) => import("./Geometry2D/Vector2D").default;
    sub: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    mult: (scale: number, { x, y }: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    div: ({ x, y }: import("./Geometry2D/Vector2D").default, scale: number) => import("./Geometry2D/Vector2D").default;
    fromTo: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => import("./Geometry2D/Vector2D").default;
    dot: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
    cross: (a: import("./Geometry2D/Vector2D").default, b: import("./Geometry2D/Vector2D").default) => number;
};
export { Geometry2D };
