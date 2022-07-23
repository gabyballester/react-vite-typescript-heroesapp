import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IChildren } from "../common/models";
import { AuthContext } from "../modules/auth";

export const PublicRouter = ({ children }: IChildren) => {  
  const { logged } = useContext(AuthContext);
  return logged ? <Navigate to={'/'} /> : <>{children}</>;
};
