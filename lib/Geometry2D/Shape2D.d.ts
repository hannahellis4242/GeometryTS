import Vector2 from "./Vector2D";
export type InsideMode = "strict" | "allowEdges";
export default interface Shape2D {
    inside(p: Vector2, mode: InsideMode): boolean;
}
