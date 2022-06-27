import React, { useContext } from "react";
import AllCards from "./AllCards";
import { CountryContext } from "./CountryContext";
import CountryPage from "./CountryPage";
import Inputs from "./Inputs";

type Props = {
  darkMode: string;
};

export default function CardView({ darkMode }: Props) {
  const { countries, selectedId } = useContext(CountryContext);
  if (countries) {
    return !selectedId ? (
      <>
        <Inputs darkMode={darkMode} />
        <AllCards />
      </>
    ) : (
      <CountryPage />
    );
  } else {
    return <div></div>;
  }
}
