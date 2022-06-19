export type Country = {
  name: { common: string };
  region: string;
  population: number;
  capital: string[];
  flags: { svg: string };
  fifa: string;
  cca3: string;
};
export interface CountryDetails extends Country {
  name: {
    common: string;
    official: string;
  };
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

export type Filter = {
  dropdown: boolean;
  region: "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
};
