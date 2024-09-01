import Vector2 from "./Geometry2D/Vector2D";
import Vector3 from "./Geometry3D/Vector3D";

export const x = (v: Vector2 | Vector3): number => v[0];
export const y = (v: Vector2 | Vector3): number => v[1];
export const z = (v: Vector3): number => v[2];
