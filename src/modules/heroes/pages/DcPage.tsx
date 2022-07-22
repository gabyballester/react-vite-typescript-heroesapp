import { HeroList } from "../components";
import { Publisher } from "../../../models";

export const DcPage = () => {
  return (
    <>
      <h1>CD Comics</h1>
      <hr />
      <HeroList publisher={Publisher.DC} />
    </>
  );
};
