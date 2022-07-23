import { heroes } from "../../../common/data/heores";
import { IHero } from "../../../common/models";

export const getHeroById = (id: string | undefined) => {
  return heroes.find((hero: IHero) => hero.id === id);
};
