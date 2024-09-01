import Shape2D, { InsideMode } from "./Shape2D";
import Vector2 from "./Vector2D";
export default class Circle implements Shape2D {
    readonly centre: Vector2;
    readonly radius: number;
    constructor(centre: Vector2, radius: number);
    inside(p: Vector2, mode?: InsideMode): boolean;
}
