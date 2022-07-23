import { ReactFragment } from "react";

export interface IHero {
  id: string;
  superhero: string;
  publisher: string;
  alterEgo: string;
  firstAppearance: string;
  characters: string;
}

export enum Publisher {
  DC = "DC Comics",
  MARVEL = "Marvel Comics",
}

export interface IUser {
  id: string | null;
  name: string | null;
}

export interface IAuthContext {
  logged: boolean;
  login: (arg: string) => void;
  logout: () => void;
  user: IUser;
}

export interface IChildren {
  children?: React.ReactNode;
}

export enum Key {
  user = "user",
}
