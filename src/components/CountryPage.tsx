import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { CountryDetails } from "../../custom-types";
import "../CountryPage.css";
type Props = {};

export default function CountryPage({}: Props) {
  const [country, setCountry] = useState<CountryDetails | null>(null);
  const { country_name } = useParams();
  async function fetchData() {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country_name}`
    );
    const data = await res.json();
    setCountry(data[0]);
  }
  useEffect(() => {
    fetchData();
  }, [country_name]);
  console.log(country);
  return (
    <div className="countryPageContainer">
      <div className="backButtonContainer">
        <div className="backButton">
          <span className="backIcon">
            <IoArrowBack fontSize={22} />
          </span>
          <span className="backText">Back</span>
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
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
                {country.name.official}
              </div>
              {/* <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div>
              <div>
                <span className="detailsInfoTitle">Native Name:</span>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
