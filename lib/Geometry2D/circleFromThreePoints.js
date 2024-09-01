"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matrix3_1 = require("../Geometry3D/Matrix3");
const Circle_1 = __importDefault(require("./Circle"));
const Vector2D_1 = require("./Vector2D");
const createMatrix = (p1, p2, p3) => [
    [p2[1] - p3[1], p3[1] - p1[1], p1[1] - p2[1]],
    [p3[0] - p2[0], p1[0] - p3[0], p2[0] - p1[0]],
    [(0, Vector2D_1.cross2)(p2, p3), (0, Vector2D_1.cross2)(p3, p1), (0, Vector2D_1.cross2)(p1, p2)],
];
const createVector = (p1, p2, p3) => [
    (0, Vector2D_1.dot2)(p1, p1),
    (0, Vector2D_1.dot2)(p2, p2),
    (0, Vector2D_1.dot2)(p3, p3),
];
const createScala = (p1, p2, p3) => (p2[0] - p1[0]) * p3[1] + (p1[0] - p3[0]) * p2[1] + (p3[0] - p2[0]) * p1[1];
const getParams = (p1, p2, p3) => (0, Matrix3_1.SV3)(-1 / createScala(p1, p2, p3), (0, Matrix3_1.MV3)(createMatrix(p1, p2, p3), createVector(p1, p2, p3)));
const convertParams = ([A, B, C]) => {
    const cx = -A / 2;
    const cy = -B / 2;
    const r = Math.sqrt(A * A + B * B - 4 * C) / 2;
    return new Circle_1.default(cx, cy, r);
};
const circleFromThreePoints = (p1, p2, p3) => convertParams(getParams(p1, p2, p3));
exports.default = circleFromThreePoints;
