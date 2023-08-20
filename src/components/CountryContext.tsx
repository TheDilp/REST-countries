import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { CountryDetails, Filter } from "../../custom-types";

type Props = {
  children: JSX.Element | JSX.Element[];
};

interface CountryContextProps {
  countries: CountryDetails[];
  setCountries: Dispatch<SetStateAction<CountryDetails[]>> | (() => void);
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>> | (() => void);
  search: string;
  setSearch: Dispatch<SetStateAction<string>> | (() => void);
  selectedId: string | null;
  setSelectedId: Dispatch<SetStateAction<string | null>> | (() => void);
}

export const CountryContext = createContext<CountryContextProps>({
  countries: [],
  setCountries: (): void => {},
  filter: {
    dropdown: false,
    region: "All",
  },
  setFilter: (): void => {},
  search: "",
  setSearch: (): void => {},
  selectedId: null,
  setSelectedId: (): void => {},
});

function fetchData(setCountries: Dispatch<SetStateAction<CountryDetails[]>>) {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      setCountries(data);
    });
}

export default function CountryProvider({ children }: Props) {
  const [countries, setCountries] = useState<CountryDetails[]>([]);
  const [filter, setFilter] = useState<Filter>({
    dropdown: false,
    region: "All",
  });
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<null | string>(null);

  useEffect(() => {
    fetchData(setCountries);
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
