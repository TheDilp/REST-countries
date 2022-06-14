import { useEffect, useState } from "react";
import { IoMoonOutline, IoSearch } from "react-icons/io5";
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
        <div className="titleBar">
          <h2 className="appTitle">Where in the world?</h2>
          <div className="darkMode">
            <span className="darkModeIcon">
              <IoMoonOutline size={16} fontWeight={600} />
            </span>
            <span>Dark Mode</span>
          </div>
        </div>
        <div className="inputContainer">
          <IoSearch className="searchIcon"/>
          <input
            placeholder="Search for a country..."
            className="searchInput"
          />
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
