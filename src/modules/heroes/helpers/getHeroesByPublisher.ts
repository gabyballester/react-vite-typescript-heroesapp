import { heroes } from "../../../common/data/heores";
import { IHero, Publisher } from "../../../common/models";

export const getHeroesByPublisher = (
  publisher: Publisher,
  validPublishers: Publisher[]
) => {
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe: IHero) => heroe.publisher === publisher);
};
