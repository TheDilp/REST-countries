export type Country = {
  name: { common: string };
  region: string;
  population: number;
  capital: string[];
  flags: { svg: string };
  fifa: string;
};
export interface CountryDetails extends Country {
  name: {
    common: string;
    nativeName: {
      [key: string]: { official: string; common: string };
    };
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
