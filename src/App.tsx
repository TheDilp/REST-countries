import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { Country } from "../custom-types";
function App() {
  const [countries, setCountries] = useState<[]>([]);
  function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="App">
      <div className="contentContainer">
        <div className="titleBar">WHERE IN THE WORLD</div>
        <div className="inputBar">
          <input placeholder="Search for a country" />
          <select></select>
        </div>
        <div className="allCardsContainer">
          {countries.map((country: Country) => (
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
      </div>
    </main>
  );
}

export default App;
