export enum EyeColorType {
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
  Brown = "brown",
  Golden = "golden",
  Red = "red",
  None = "none"
}

export enum HairColorType {
  Black = "black",
  Brown = "brown",
  Blonde = "blonde",
  White = "white",
  None = "none"
}

export type SpeciesType = {
  name: string;
  average_height: number;
  average_lifespan: number;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: EyeColorType[];
  hair_colors: HairColorType[];
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  skin_colors: string[];
  url: string;
}

