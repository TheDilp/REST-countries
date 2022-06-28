import { useContext, useEffect, useState } from "react";
import { Country, CountryDetails, Filter } from "../../custom-types";
import Card from "./Card";
import { CountryContext } from "./CountryContext";

type Props = {};

export default function AllCards({}: Props) {
  const { countries, filter, search } = useContext(CountryContext);

  const [filteredCountries, setFilteredCountries] = useState<CountryDetails[]>(
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilteredCountries(
        countries
          .filter((country) =>
            filter.region === "All" ? true : country.region === filter.region
          )
          .filter((country) =>
            search
              ? country.name.common.toLowerCase().includes(search.toLowerCase())
              : true
          )
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [countries, search]);

  return (
    <div className="allCardsContainer">
      {filteredCountries.map((country: Country) => (
        <Card
          key={country.cca3}
          name={country.name}
          region={country.region}
          population={country.population}
          capital={country.capital}
          flags={country.flags}
          fifa={country.fifa}
          cca3={country.cca3}
        />
      ))}
    </div>
  );
}
