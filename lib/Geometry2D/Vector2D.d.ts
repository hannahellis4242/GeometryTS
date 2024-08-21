export default interface Vector2 {
    readonly x: number;
    readonly y: number;
}
export declare const vector2: (x: number, y: number) => Vector2;
export declare const origin2: () => Vector2;
export declare const xAxis2: (x: number) => Vector2;
export declare const yAxis2: (y: number) => Vector2;
export declare const add: (...vs: Vector2[]) => Vector2;
export declare const sub: (a: Vector2, b: Vector2) => Vector2;
export declare const mult: (scale: number, { x, y }: Vector2) => Vector2;
export declare const div: ({ x, y }: Vector2, scale: number) => Vector2;
export declare const fromTo: (a: Vector2, b: Vector2) => Vector2;
export declare const dot: (a: Vector2, b: Vector2) => number;
export declare const cross: (a: Vector2, b: Vector2) => number;
