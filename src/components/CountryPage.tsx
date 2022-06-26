import { useContext, useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Country, CountryDetails } from "../../custom-types";
import "../CountryPage.css";
import { CountryContext } from "./countryContext";
type Props = {};

export default function CountryPage({}: Props) {
  const [country, setCountry] = useState<CountryDetails | null>(null);

  const { countries, selectedId, setSelectedId } = useContext(CountryContext);

  useEffect(() => {
    if (selectedId) {
      let found = countries.find((country) => country.cca3 === selectedId);
      if (found) {
        setCountry(found);
      }
    }
  }, [selectedId]);

  return (
    <div className="countryPageContainer">
      <div className="backButtonContainer">
        <div className="backButton">
          <span className="backButtonLink" onClick={() => setSelectedId(null)}>
            <span className="backIcon">
              <IoArrowBack fontSize={22} />
            </span>
            <span className="backText">Back</span>
          </span>
        </div>
      </div>
      {country && (
        <div className="detailsContainer">
          <div className="countryFlagContainer">
            <img src={country.flags.svg} alt={country?.name.common} />
          </div>
          <div className="countryDetails">
            <h2>{country.name.common}</h2>
            <div className="countryDetailsInfo">
              <div className="detailsInfoColumn">
                <div>
                  <span className="detailsInfoTitle">Native Name: </span>
                  {country.name.official}
                </div>
                <div>
                  <span className="detailsInfoTitle">Population: </span>
                  {country.population}
                </div>
                <div>
                  <span className="detailsInfoTitle">Region: </span>
                  {country.region}
                </div>
                <div>
                  <span className="detailsInfoTitle">Sub Region: </span>
                  {country.subregion}
                </div>
                <div>
                  <span className="detailsInfoTitle">Capital: </span>
                  {country.capital[0]}
                </div>
              </div>
              <div className="detailsInfoColumn secondInfoColumn">
                <div>
                  <span className="detailsInfoTitle">Top Level Domain: </span>
                  {country.tld}
                </div>
                <div>
                  <span className="detailsInfoTitle">Currencies: </span>
                  {Object.keys(country.currencies).map(
                    (key) => country.currencies[key].name
                  )}
                </div>
                <div>
                  <span className="detailsInfoTitle">Languages: </span>
                  {Object.keys(country.languages).map((key, index) =>
                    Object.keys(country.languages).length - 1 === index
                      ? country.languages[key]
                      : `${country.languages[key]}, `
                  )}
                </div>
              </div>
            </div>
            <div className="borderCountries">
              <span className="detailsInfoTitle">Border Countries: </span>
              <div className="borderCodesContainer">
                {country.borders &&
                  country.borders.map((border) => (
                    <div className="borderCountryCode" key={border}>
                      {countries.find((c) => c.cca3 === border)?.name.common}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
