import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country, CountryDetails } from "../../custom-types";

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
  console.log(country);
  return <div>CountryPage</div>;
}
