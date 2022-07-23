import { Navigate, Route, Routes } from "react-router-dom";
import { Key } from "../../../common/models";
import { Navbar } from "../../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  const lastPath: string = localStorage.getItem(Key.lastPath) || "/";

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to={lastPath} />} />
        </Routes>
      </div>
    </>
  );
};
