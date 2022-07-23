import { HeroList } from "../components";
import { Publisher } from "../../../common/models";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={Publisher.MARVEL} />
    </>
  );
};
