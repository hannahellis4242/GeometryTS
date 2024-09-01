type Vector3 = [number, number, number];
export default Vector3;

export const dot3 = (a: Vector3, b: Vector3): number =>
  a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
