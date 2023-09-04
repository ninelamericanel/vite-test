export const truncString = (str: string, num: number): string =>
  str.length <= num ? str : str.slice(0, num) + "...";
