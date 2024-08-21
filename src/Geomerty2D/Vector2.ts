export default interface Vector2 {
  readonly x: number;
  readonly y: number;
}

export const vector2 = (x: number, y: number): Vector2 => ({ x, y });
export const origin2 = (): Vector2 => vector2(0, 0);
export const xAxis2 = (x: number): Vector2 => vector2(x, 0);
export const yAxis2 = (y: number): Vector2 => vector2(0, y);
export const add = (...vs: Vector2[]): Vector2 =>
  vs.reduce((a, b) => ({ x: a.x + b.x, y: a.y + b.y }), origin2());
export const sub = (a: Vector2, b: Vector2) => add(a, mult(-1, b));
export const mult = (scale: number, { x, y }: Vector2): Vector2 => ({
  x: scale * x,
  y: scale * y,
});
export const div = ({ x, y }: Vector2, scale: number): Vector2 => ({
  x: x / scale,
  y: y / scale,
});
export const fromTo = (a: Vector2, b: Vector2): Vector2 => sub(b, a);
export const dot = (a: Vector2, b: Vector2): number => a.x * b.x + a.y * b.y;
export const cross = (a: Vector2, b: Vector2): number => a.x * b.y - a.y * b.x;
