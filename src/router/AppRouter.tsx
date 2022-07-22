import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage} from "../modules/heroes/pages";
import { LoginPage } from '../modules/auth/pages/LoginPage';

export const AppRouter = () => {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage/>} />
        
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<Navigate to="/marvel" />} />
        
      </Routes>
    </div>
  );
};
