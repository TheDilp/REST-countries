import { useContext } from "react";
import { Country } from "../../custom-types";
import { CountryContext } from "./CountryContext";

export default function Card({
  name,
  population,
  capital,
  region,
  flags,
  cca3,
}: Country) {
  const { setSelectedId } = useContext(CountryContext);
  return (
    <div className="cardContainer">
      <div className="cardLink" onClick={() => setSelectedId(cca3)}>
        <div className="card">
          <div className="cardImg">
            <img src={flags.svg} alt={name.common} />
          </div>
          <div className="cardText">
            <h4>{name.common}</h4>
            <div className="cardDetailsContainer">
              <div className="cardTextDetails">
                <span className="detailTextTitle">Population:</span>
                {new Intl.NumberFormat("en", {
                  maximumSignificantDigits: 3,
                }).format(population)}
              </div>
              <div className="cardTextDetails">
                <span className="detailTextTitle">Region:</span>
                {region}
              </div>
              <div className="cardTextDetails">
                <span className="detailTextTitle">Capital:</span>
                {capital?.[0] || capital}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
