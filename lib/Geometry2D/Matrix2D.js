"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = exports.inverse = exports.multSM = exports.multMV = exports.multMM = exports.addMM = exports.det = exports.id2 = exports.matrix2D = void 0;
const matrix2D = (a, b, c, d) => [
    [a, b],
    [c, d],
];
exports.matrix2D = matrix2D;
const id2 = () => [
    [1, 0],
    [0, 1],
];
exports.id2 = id2;
const det = ([[a, b], [c, d]]) => a * d - b * c;
exports.det = det;
const addMM = (...matrices) => matrices.reduce(([[a00, a01], [a10, a11]], [[b00, b01], [b10, b11]]) => [
    [a00 + b00, a01 + b01],
    [a10 + b10, a11 + b11],
], (0, exports.matrix2D)(0, 0, 0, 0));
exports.addMM = addMM;
const multMM = ([[a00, a01], [a10, a11]], [[b00, b01], [b10, b11]]) => [
    [a00 * b00 + a01 * b10, a00 * b01 + a01 * b11],
    [a10 * b00 + a11 * b10, a10 * b01 + a11 * b11],
];
exports.multMM = multMM;
const multMV = ([[a00, a01], [a10, a11]], [b0, b1]) => [a00 * b0 + a01 * b1, a10 * b0 + a11 * b1];
exports.multMV = multMV;
const multSM = (scale, [[a00, a01], [a10, a11]]) => [
    [scale * a00, scale * a01],
    [scale * a10, scale * a11],
];
exports.multSM = multSM;
const inverse = (a) => (0, exports.multSM)(1 / (0, exports.det)(a), [
    [a[1][1], -a[0][1]],
    [-a[1][0], a[0][0]],
]);
exports.inverse = inverse;
const solve = (m, b) => (0, exports.multMV)((0, exports.inverse)(m), b);
exports.solve = solve;
