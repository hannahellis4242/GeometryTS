"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x = exports.cross = exports.dot = exports.fromTo = exports.div = exports.mult = exports.sub = exports.addVV = exports.yAxis2 = exports.xAxis2 = exports.origin2 = exports.vector2 = void 0;
const vector2 = (x, y) => [x, y];
exports.vector2 = vector2;
const origin2 = () => (0, exports.vector2)(0, 0);
exports.origin2 = origin2;
const xAxis2 = (x) => (0, exports.vector2)(x, 0);
exports.xAxis2 = xAxis2;
const yAxis2 = (y) => (0, exports.vector2)(0, y);
exports.yAxis2 = yAxis2;
const addVV = (...vs) => vs.reduce((a, b) => [a[0] + b[0], a[1] + b[1]], (0, exports.origin2)());
exports.addVV = addVV;
const sub = (a, b) => (0, exports.addVV)(a, (0, exports.mult)(-1, b));
exports.sub = sub;
const mult = (scale, [x, y]) => [
    scale * x,
    scale * y,
];
exports.mult = mult;
const div = ([x, y], scale) => [
    x / scale,
    y / scale,
];
exports.div = div;
const fromTo = (a, b) => (0, exports.sub)(b, a);
exports.fromTo = fromTo;
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
exports.dot = dot;
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
exports.cross = cross;
const x = ([a, _]) => a;
exports.x = x;
const y = ([_, b]) => b;
exports.y = y;
