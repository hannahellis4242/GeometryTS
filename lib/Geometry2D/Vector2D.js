"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cross = exports.dot = exports.fromTo = exports.div = exports.mult = exports.sub = exports.add = exports.yAxis2 = exports.xAxis2 = exports.origin2 = exports.vector2 = void 0;
const vector2 = (x, y) => ({ x, y });
exports.vector2 = vector2;
const origin2 = () => (0, exports.vector2)(0, 0);
exports.origin2 = origin2;
const xAxis2 = (x) => (0, exports.vector2)(x, 0);
exports.xAxis2 = xAxis2;
const yAxis2 = (y) => (0, exports.vector2)(0, y);
exports.yAxis2 = yAxis2;
const add = (...vs) => vs.reduce((a, b) => ({ x: a.x + b.x, y: a.y + b.y }), (0, exports.origin2)());
exports.add = add;
const sub = (a, b) => (0, exports.add)(a, (0, exports.mult)(-1, b));
exports.sub = sub;
const mult = (scale, { x, y }) => ({
    x: scale * x,
    y: scale * y,
});
exports.mult = mult;
const div = ({ x, y }, scale) => ({
    x: x / scale,
    y: y / scale,
});
exports.div = div;
const fromTo = (a, b) => (0, exports.sub)(b, a);
exports.fromTo = fromTo;
const dot = (a, b) => a.x * b.x + a.y * b.y;
exports.dot = dot;
const cross = (a, b) => a.x * b.y - a.y * b.x;
exports.cross = cross;
