"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry2D = void 0;
<<<<<<< HEAD
const Geometry2D_1 = require("./Geometry2D");
const Geometry2D = { Vector2D: Geometry2D_1.Vector2D, Matrix2D: Geometry2D_1.Matrix2D };
=======
const Vector2D_1 = require("./Geometry2D/Vector2D");
const Geometry2D = {
    vector2: Vector2D_1.vector2,
    origin2: Vector2D_1.origin2,
    xAxis2: Vector2D_1.xAxis2,
    yAxis2: Vector2D_1.yAxis2,
    add: Vector2D_1.add,
    sub: Vector2D_1.sub,
    mult: Vector2D_1.mult,
    div: Vector2D_1.div,
    fromTo: Vector2D_1.fromTo,
    dot: Vector2D_1.dot,
    cross: Vector2D_1.cross,
};
>>>>>>> 8509f3d (packaging)
exports.Geometry2D = Geometry2D;
