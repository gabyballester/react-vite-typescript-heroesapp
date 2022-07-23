import { Navigate, useLocation } from "react-router-dom";
import { IChildren, Key } from "../common/models";
import { useContext, useEffect } from "react";
import { AuthContext } from "../modules/auth/context/AuthContext";

export const PrivateRoute = ({ children }: IChildren) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;
    localStorage.setItem(Key.lastPath, lastPath);
  }, [pathname, search]);

  const { logged } = useContext(AuthContext);
  return logged ? <>{children}</> : <Navigate to="/login" />;
};
