import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import "./App.css";
import CardView from "./components/CardView";
import CountryProvider from "./components/countryContext";
function App() {
  const [darkMode, setDarkMode] = useState("light");

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
        <CountryProvider>
          <CardView darkMode={darkMode} />
        </CountryProvider>
      </div>
    </main>
  );
}

export default App;
