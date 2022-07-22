import { getHeroesByPublisher } from "../helpers";
import { Publisher, IHero } from "../../../models/index";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

interface IHeroList {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: IHeroList) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero: IHero, index: number) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
