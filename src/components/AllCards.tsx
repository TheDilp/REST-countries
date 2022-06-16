import React from "react";
import { Country, Filter } from "../../custom-types";
import Card from "./Card";

type Props = {
  countries: Country[];
  filter: Filter;
  search: string;
};

export default function AllCards({ countries, filter, search }: Props) {
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
            key={country.fifa}
            name={country.name}
            region={country.region}
            population={country.population}
            capital={country.capital}
            flags={country.flags}
            fifa={country.fifa}
          />
        ))}
    </div>
  );
}
