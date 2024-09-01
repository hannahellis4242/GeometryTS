type Vector2 = [number, number];
export default Vector2;

export const vector2 = (x: number, y: number): Vector2 => [x, y];
export const origin2 = (): Vector2 => vector2(0, 0);
export const xAxis2 = (x: number): Vector2 => vector2(x, 0);
export const yAxis2 = (y: number): Vector2 => vector2(0, y);
export const addVV = (...vs: Vector2[]): Vector2 =>
  vs.reduce((a, b) => [a[0] + b[0], a[1] + b[1]], origin2());
export const sub = (a: Vector2, b: Vector2) => addVV(a, mult(-1, b));
export const mult = (scale: number, [x, y]: Vector2): Vector2 => [
  scale * x,
  scale * y,
];
export const div = ([x, y]: Vector2, scale: number): Vector2 => [
  x / scale,
  y / scale,
];

export const dot2 = (a: Vector2, b: Vector2): number =>
  a[0] * b[0] + a[1] * b[1];
export const cross2 = (a: Vector2, b: Vector2): number =>
  a[0] * b[1] - a[1] * b[0];
export const x = ([a, _]: Vector2): number => a;
export const y = ([_, b]: Vector2): number => b;

export const fromTo = (a: Vector2, b: Vector2): Vector2 => sub(b, a);
