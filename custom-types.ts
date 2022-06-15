export type Country = {
  name: { common: string };
  region: string;
  population: number;
  capital: string[];
  flags: { svg: string };
  fifa: string;
};

export type Filter = {
  dropdown: boolean;
  region: "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
};
