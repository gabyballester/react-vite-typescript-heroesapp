import { Link } from "react-router-dom";
import { IHero } from "../../../models/index";

interface ICharactersByHero {
  alterEgo: string;
  characters: string;
}

const CharactersByHero = ({ alterEgo, characters }: ICharactersByHero) => {
  return alterEgo === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters,
}: IHero) => {
  const heroImg: string = `/assets/img/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImg} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alterEgo}</p>
              <CharactersByHero alterEgo={alterEgo} characters={characters} />
              <p className="card-text">
                <small className="text-muted">{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
