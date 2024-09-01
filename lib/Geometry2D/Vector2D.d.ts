<<<<<<< HEAD
<<<<<<< HEAD
type Vector2 = [number, number];
export default Vector2;
=======
export default interface Vector2 {
    readonly x: number;
    readonly y: number;
}
>>>>>>> 8509f3d (packaging)
=======
type Vector2 = [number, number];
export default Vector2;
>>>>>>> 6277783 (setting up lib)
export declare const vector2: (x: number, y: number) => Vector2;
export declare const origin2: () => Vector2;
export declare const xAxis2: (x: number) => Vector2;
export declare const yAxis2: (y: number) => Vector2;
<<<<<<< HEAD
export declare const addVV: (...vs: Vector2[]) => Vector2;
export declare const sub: (a: Vector2, b: Vector2) => Vector2;
export declare const mult: (scale: number, [x, y]: Vector2) => Vector2;
export declare const div: ([x, y]: Vector2, scale: number) => Vector2;
export declare const fromTo: (a: Vector2, b: Vector2) => Vector2;
export declare const dot: (a: Vector2, b: Vector2) => number;
export declare const cross: (a: Vector2, b: Vector2) => number;
export declare const x: ([a, _]: Vector2) => number;
export declare const y: ([_, b]: Vector2) => number;
=======
export declare const add: (...vs: Vector2[]) => Vector2;
export declare const sub: (a: Vector2, b: Vector2) => Vector2;
export declare const mult: (scale: number, [x, y]: Vector2) => Vector2;
export declare const div: ([x, y]: Vector2, scale: number) => Vector2;
export declare const fromTo: (a: Vector2, b: Vector2) => Vector2;
<<<<<<< HEAD
export declare const dot: (a: Vector2, b: Vector2) => number;
export declare const cross: (a: Vector2, b: Vector2) => number;
>>>>>>> 8509f3d (packaging)
=======
export declare const dot2: (a: Vector2, b: Vector2) => number;
export declare const cross2: (a: Vector2, b: Vector2) => number;
>>>>>>> 6277783 (setting up lib)
