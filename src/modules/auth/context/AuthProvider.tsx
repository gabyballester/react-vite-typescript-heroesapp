import { useReducer, useState } from "react";

import { type } from "../types";
import { IChildren, Key } from "../../../common/models";
import { AuthContext, authReducer } from "../../auth";

const init = () => {
  const userString: string | null = localStorage.getItem(Key.user);
  const user = userString ? JSON.parse(userString) : null;
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }: IChildren) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string = "") => {
    const user = { id: "ABC", name };
    localStorage.setItem("user", JSON.stringify(user));
    const action = { type: type.login, payload: user };
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem(Key.user);
    const action = { type: type.logout, payload: null };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
