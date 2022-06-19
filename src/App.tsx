import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Country, Filter } from "../custom-types";
import "./App.css";
import AllCards from "./components/AllCards";
import CountryPage from "./components/CountryPage";
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
  console.log(countries);
  return (
    <main className="App" id={darkMode}>
      <BrowserRouter>
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Inputs
                    darkMode={darkMode}
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <AllCards
                    countries={countries}
                    filter={filter}
                    search={search}
                  />
                </>
              }
            />
            <Route
              path="/:country_name"
              element={<CountryPage countries={countries} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
