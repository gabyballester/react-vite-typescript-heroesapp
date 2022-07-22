import { getHeroesByPublisher } from "../helpers";
import { Publisher, IHeroe } from '../../../models/index';
import { HeroCard } from "./HeroCard";

interface IHeroList {
  publisher: Publisher;
}

export const HeroList = ({ publisher }: IHeroList) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero: IHeroe, index: number) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
