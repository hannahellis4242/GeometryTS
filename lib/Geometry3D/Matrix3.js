"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SV3 = exports.MV3 = void 0;
const Vector3D_1 = require("./Vector3D");
const MV3 = (m, v) => [
    (0, Vector3D_1.dot3)(m[0], v),
    (0, Vector3D_1.dot3)(m[1], v),
    (0, Vector3D_1.dot3)(m[2], v),
];
exports.MV3 = MV3;
const SV3 = (s, [x, y, z]) => [
    s * x,
    s * y,
    s * z,
];
exports.SV3 = SV3;
