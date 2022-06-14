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
        <div className="cardText"></div>
      </div>
    </div>
  );
}
