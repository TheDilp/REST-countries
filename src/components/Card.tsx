import { Country } from "../../custom-types";

export default function Card({
  name,
  population,
  capital,
  region,
  flags,
}: Country) {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardImg">
          <img src={flags.svg} alt={name.common} />
        </div>
        <div className="cardText">
          <h4>{name.common}</h4>
          <div className="cardDetailsContainer">
            <div className="cardTextDetails">
              <span className="detailTextTitle">Population:</span>
              {population}
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
  );
}
