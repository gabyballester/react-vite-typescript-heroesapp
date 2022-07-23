import { useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export interface IAuthContext {
  logged: false;
}

const initialState: IAuthContext = {
  logged: false,
};

interface IAuthProvider {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
