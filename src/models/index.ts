export interface IHeroe {
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
