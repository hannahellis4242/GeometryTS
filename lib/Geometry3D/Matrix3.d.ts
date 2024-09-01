import Vector3 from "./Vector3D";
type Matrix3 = [
    [
        number,
        number,
        number
    ],
    [
        number,
        number,
        number
    ],
    [
        number,
        number,
        number
    ]
];
export default Matrix3;
export declare const MV3: (m: Matrix3, v: Vector3) => Vector3;
export declare const SV3: (s: number, [x, y, z]: Vector3) => Vector3;
