import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { CountryDetails } from "../../custom-types";
import "../CountryPage.css";
type Props = {};

export default function CountryPage({}: Props) {
  const [country, setCountry] = useState<CountryDetails | null>();
  const { country_name } = useParams();
  function fetchData() {
    fetch(`https://restcountries.com/v3.1/name/${country_name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="countryPageContainer">
      <div className="backButton">
        <span className="backIcon">
          <IoArrowBack fontSize={22} />
        </span>
        <span className="backText">Back</span>
      </div>
    </div>
  );
}
