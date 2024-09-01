import Shape2D from "./Shape2D";

export default class Circle implements Shape2D {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly r: number
  ) {}
}
