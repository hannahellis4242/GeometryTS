"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry2D = void 0;
const Vector2D_1 = require("./Geometry2D/Vector2D");
const Circle_1 = __importDefault(require("./Geometry2D/Circle"));
const circleFromThreePoints_1 = __importDefault(require("./Geometry2D/circleFromThreePoints"));
const Geometry2D = {
    vector2: Vector2D_1.vector2,
    origin2: Vector2D_1.origin2,
    xAxis2: Vector2D_1.xAxis2,
    yAxis2: Vector2D_1.yAxis2,
    addVV: Vector2D_1.addVV,
    sub: Vector2D_1.sub,
    mult: Vector2D_1.mult,
    div: Vector2D_1.div,
    fromTo: Vector2D_1.fromTo,
    dot2: Vector2D_1.dot2,
    cross2: Vector2D_1.cross2,
    Circle: Circle_1.default,
    circleFromThreePoints: circleFromThreePoints_1.default,
};
exports.Geometry2D = Geometry2D;
