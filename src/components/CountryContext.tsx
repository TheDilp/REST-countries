import React, { createContext, useEffect, useState } from "react";
import { Country, CountryDetails, Filter } from "../../custom-types";

type Props = {
  children: JSX.Element | JSX.Element[];
};

interface CountryContextProps {
  countries: CountryDetails[];
  setCountries: (countries: CountryDetails[]) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  search: string;
  setSearch: (search: string) => void;
  selectedId: string | null;
  setSelectedId: (selectedId: string | null) => void;
}

export const CountryContext = createContext<CountryContextProps>({
  countries: [],
  setCountries: (countries: CountryDetails[]): void => {},
  filter: {
    dropdown: false,
    region: "All",
  },
  setFilter: (filter: Filter): void => {},
  search: "",
  setSearch: (search: string): void => {},
  selectedId: null,
  setSelectedId: (selectedId: string | null): void => {},
});
export default function CountryProvider({ children }: Props) {
  const [countries, setCountries] = useState<CountryDetails[]>([]);
  const [filter, setFilter] = useState<Filter>({
    dropdown: false,
    region: "All",
  });
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);

  function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        filter,
        setFilter,
        search,
        setSearch,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
