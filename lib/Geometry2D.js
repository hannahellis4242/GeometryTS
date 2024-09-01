"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix2D = exports.Vector2D = void 0;
const Vector2D_1 = require("./Geometry2D/Vector2D");
const Matrix2D_1 = require("./Geometry2D/Matrix2D");
exports.Vector2D = {
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry2D = void 0;
const Vector2D_1 = require("./Geometry2D/Vector2D");
const Circle_1 = __importDefault(require("./Geometry2D/Circle"));
const circleFromThreePoints_1 = __importDefault(require("./Geometry2D/circleFromThreePoints"));
const Geometry2D = {
>>>>>>> 6277783 (setting up lib)
    vector2: Vector2D_1.vector2,
    origin2: Vector2D_1.origin2,
    xAxis2: Vector2D_1.xAxis2,
    yAxis2: Vector2D_1.yAxis2,
<<<<<<< HEAD
    add: Vector2D_1.addVV,
=======
    add: Vector2D_1.add,
>>>>>>> 6277783 (setting up lib)
    sub: Vector2D_1.sub,
    mult: Vector2D_1.mult,
    div: Vector2D_1.div,
    fromTo: Vector2D_1.fromTo,
<<<<<<< HEAD
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
=======
    dot2: Vector2D_1.dot2,
    cross2: Vector2D_1.cross2,
    Circle: Circle_1.default,
    circleFromThreePoints: circleFromThreePoints_1.default,
};
exports.Geometry2D = Geometry2D;
>>>>>>> 6277783 (setting up lib)
