import { useEffect, useState } from "react";
import { IoChevronDown, IoMoonOutline, IoSearch } from "react-icons/io5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import { Country, Filter } from "../custom-types";
import Inputs from "./components/Inputs";
function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState<Filter>({
    dropdown: false,
    region: "All",
  });
  const [search, setSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState("light");
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
    <main className="App" id={darkMode}>
      <div className="contentContainer">
        <div className="titleBar">
          <h1 className="appTitle">Where in the world?</h1>
          <div
            className="darkMode"
            onClick={() =>
              setDarkMode((curr) => (curr === "light" ? "dark" : "light"))
            }
          >
            <span className="darkModeIcon">
              <IoMoonOutline size={16} fontWeight={600} />
            </span>
            <span>Dark Mode</span>
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Inputs
                  darkMode={darkMode}
                  search={search}
                  setSearch={setSearch}
                  filter={filter}
                  setFilter={setFilter}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <div className="allCardsContainer">
          {countries
            .filter((country) =>
              filter.region === "All" ? true : country.region === filter.region
            )
            .filter((country) =>
              search
                ? country.name.common
                    .toLowerCase()
                    .includes(search.toLowerCase())
                : true
            )
            .map((country: Country) => (
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
