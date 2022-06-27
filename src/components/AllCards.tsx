import { useContext } from "react";
import { Country, Filter } from "../../custom-types";
import Card from "./Card";
import { CountryContext } from "./CountryContext";

type Props = {};

export default function AllCards({}: Props) {
  const { countries, filter, search } = useContext(CountryContext);
  return (
    <div className="allCardsContainer">
      {countries
        .filter((country) =>
          filter.region === "All" ? true : country.region === filter.region
        )
        .filter((country) =>
          search
            ? country.name.common.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((country: Country) => (
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
