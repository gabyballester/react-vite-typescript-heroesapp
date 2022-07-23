import { heroes } from "../../../common/data/heores";
import { IHero } from "../../../common/models";

export const getHeroesByName = (name: any) => {
  if(typeof name !== 'string') return []
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];
  return heroes.filter((hero: IHero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
