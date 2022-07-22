import { heroes } from "../../../data/heores";
import { IHero, Publisher } from "../../../models";

export const getHeroesByPublisher = (publisher: Publisher) => {
  const validPublishers = [Publisher.DC, Publisher.MARVEL];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe: IHero) => heroe.publisher === publisher);
};
