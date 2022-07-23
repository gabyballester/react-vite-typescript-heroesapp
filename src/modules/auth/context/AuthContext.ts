import { createContext, SetStateAction } from "react";
import { IAuthContext } from "./AuthProvider";

export const AuthContext = createContext({} as IAuthContext);
