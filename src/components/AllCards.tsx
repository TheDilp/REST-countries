import { useContext, useEffect, useState } from "react";
import { Country, CountryDetails } from "../../custom-types";
import Card from "./Card";
import { CountryContext } from "./CountryContext";
import SkeletonCard from "./SkeletonCard";

const skeletonCards = [...Array(16).keys()];
export default function AllCards() {
  const { countries, filter, search } = useContext(CountryContext);

  const [filteredCountries, setFilteredCountries] = useState<CountryDetails[]>(
    []
  );

  useEffect(() => {
    // Debounce search
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
    }, 350);
    return () => clearTimeout(timeout);
  }, [countries, search, filter]);

  return (
    <div className="allCardsContainer">
      {countries?.length
        ? filteredCountries.map((country: Country) => (
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
          ))
        : skeletonCards.map((card) => <SkeletonCard key={card} />)}
    </div>
  );
}
