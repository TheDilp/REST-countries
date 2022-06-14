import { useEffect, useState } from "react";
import { IoChevronDown, IoMoonOutline, IoSearch } from "react-icons/io5";
import "./App.css";
import Card from "./components/Card";
import { Country } from "../custom-types";
function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState<{
    dropdown: boolean;
    region: "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
  }>({ dropdown: false, region: "All" });
  const [search, setSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);
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
          <IoSearch className="searchIcon" />
          <input
            placeholder="Search for a country..."
            className="searchInput input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="selectWrapper input">
            <span
              className="regionFilter "
              placeholder="Filter by Region"
              onClick={() => setFilter({ ...filter, dropdown: true })}
            >
              {filter.region === "All" ? "Filter by Region" : filter.region}
            </span>
            <IoChevronDown fontSize={12} fontWeight={600} />
            {filter.dropdown && (
              <ul className="regionFilterOptions input">
                <li
                  onClick={() => setFilter({ dropdown: false, region: "All" })}
                >
                  All
                </li>
                <li
                  onClick={() =>
                    setFilter({ dropdown: false, region: "Africa" })
                  }
                >
                  Africa
                </li>
                <li
                  onClick={() =>
                    setFilter({ dropdown: false, region: "Americas" })
                  }
                >
                  Americas
                </li>
                <li
                  onClick={() => setFilter({ dropdown: false, region: "Asia" })}
                >
                  Asia
                </li>
                <li
                  onClick={() =>
                    setFilter({ dropdown: false, region: "Europe" })
                  }
                >
                  Europe
                </li>
                <li
                  onClick={() =>
                    setFilter({ dropdown: false, region: "Oceania" })
                  }
                >
                  Oceania
                </li>
              </ul>
            )}
          </div>
        </div>
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
