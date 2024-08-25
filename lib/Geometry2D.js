"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix2D = exports.Vector2D = void 0;
const Vector2D_1 = require("./Geometry2D/Vector2D");
const Matrix2D_1 = require("./Geometry2D/Matrix2D");
exports.Vector2D = {
    vector2: Vector2D_1.vector2,
    origin2: Vector2D_1.origin2,
    xAxis2: Vector2D_1.xAxis2,
    yAxis2: Vector2D_1.yAxis2,
    add: Vector2D_1.addVV,
    sub: Vector2D_1.sub,
    mult: Vector2D_1.mult,
    div: Vector2D_1.div,
    fromTo: Vector2D_1.fromTo,
    dot: Vector2D_1.dot,
    cross: Vector2D_1.cross,
};
exports.Matrix2D = {
    matrix2D: Matrix2D_1.matrix2D,
    id2: Matrix2D_1.id2,
    det: Matrix2D_1.det,
    addMM: Matrix2D_1.addMM,
    multMM: Matrix2D_1.multMM,
    multMV: Matrix2D_1.multMV,
    multSM: Matrix2D_1.multSM,
    inverse: Matrix2D_1.inverse,
    solve: Matrix2D_1.solve,
};
