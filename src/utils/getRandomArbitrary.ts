export const getRandomArbitrary = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
