import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../modules/auth";
import { DcPage, MarvelPage } from "../modules/heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </div>
  );
};
