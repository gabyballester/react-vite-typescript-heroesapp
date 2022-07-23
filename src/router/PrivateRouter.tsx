import { Navigate } from "react-router-dom";
import { IChildren } from "../common/models";
import { useContext } from "react";
import { AuthContext } from "../modules/auth/context/AuthContext";

export const PrivateRouter = ({ children }: IChildren) => {
  const { logged } = useContext(AuthContext);
  return logged ? <>{children}</> : <Navigate to="/login" />;
};
