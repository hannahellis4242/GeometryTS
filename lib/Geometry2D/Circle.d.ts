import Shape2D from "./Shape2D";
export default class Circle implements Shape2D {
    readonly x: number;
    readonly y: number;
    readonly r: number;
    constructor(x: number, y: number, r: number);
}
