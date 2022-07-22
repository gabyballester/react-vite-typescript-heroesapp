import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../modules/auth";
import { HeroesRoutes } from "../modules/heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </div>
  );
};
