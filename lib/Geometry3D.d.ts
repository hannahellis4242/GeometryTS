declare const Geometry3D: {
    MV3: (m: import("./Geometry3D/Matrix3").default, v: import("./Geometry3D/Vector3D").default) => import("./Geometry3D/Vector3D").default;
    SV3: (s: number, [x, y, z]: import("./Geometry3D/Vector3D").default) => import("./Geometry3D/Vector3D").default;
};
export { Geometry3D };
