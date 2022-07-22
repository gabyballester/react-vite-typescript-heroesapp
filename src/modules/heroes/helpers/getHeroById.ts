import { heroes } from "../../../data/heores";
import { IHero } from "../../../models";

export const getHeroById = (id: string | undefined) => {
  return heroes.find((hero: IHero) => hero.id === id);
};
