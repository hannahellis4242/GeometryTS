import { Geometry2D } from "./Geometry2D";
import { Geometry3D } from "./Geometry3D";
declare const Coord: {
    x: (v: import("./Geometry2D/Vector2D").default | import("./Geometry3D/Vector3D").default) => number;
    y: (v: import("./Geometry2D/Vector2D").default | import("./Geometry3D/Vector3D").default) => number;
    z: (v: import("./Geometry3D/Vector3D").default) => number;
};
export { Coord, Geometry2D, Geometry3D };
