export const randomFloat = (min: number, max: number) => {
  const t = Math.random();
  return (1 - t) * min + t * max;
};
