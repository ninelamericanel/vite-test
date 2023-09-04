import { faker } from "@faker-js/faker";
import { getRandomArbitrary } from "./getRandomArbitrary";

export const getFakeLorem = (min: number, max: number) =>
  faker.lorem.words(getRandomArbitrary(min, max));
