import Shape2D, { InsideMode } from "./Shape2D";
import Vector2, { dot2, sub } from "./Vector2D";

export default class Circle implements Shape2D {
  constructor(
    public readonly centre: Vector2,
    public readonly radius: number
  ) {}
  inside(p: Vector2, mode: InsideMode = "strict"): boolean {
    const diff = sub(this.centre, p);
    const diffMagSqu = dot2(diff, diff);
    switch (mode) {
      case "strict":
        return diffMagSqu < this.radius ** 2;
      case "allowEdges":
        return diffMagSqu <= this.radius ** 2;
    }
  }
}
