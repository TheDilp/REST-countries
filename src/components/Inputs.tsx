import { useContext, useEffect } from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { CountryContext } from "./CountryContext";

type Props = {
  darkMode: string;
};

export default function Inputs({ darkMode }: Props) {
  const { countries, filter, setFilter, search, setSearch } =
    useContext(CountryContext);

  useEffect(() => {
    return () => {
      setFilter((prev) => ({ ...prev, dropdown: false }));
    };
  }, []);

  return (
    <div className="inputContainer">
      <div className="searchWrapper">
        <IoSearch
          className="searchIcon"
          color={darkMode === "light" ? "black" : "white"}
        />
        <input
          placeholder="Search for a country..."
          className="searchInput input"
          value={search}
          disabled={countries?.length === 0}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="selectWrapper input">
        <div
          className="regionFilter "
          onClick={() => setFilter({ ...filter, dropdown: true })}
        >
          <div>
            {filter.region === "All" ? "Filter by Region" : filter.region}
          </div>
          <div style={{}}>
            <IoChevronDown fontSize={14} fontWeight={600} />
          </div>
        </div>
        {filter.dropdown && (
          <ul className="regionFilterOptions input">
            <li
              className="filterOption"
              onClick={() => setFilter({ dropdown: false, region: "All" })}
            >
              All
            </li>
            <li
              onClick={() => setFilter({ dropdown: false, region: "Africa" })}
            >
              Africa
            </li>
            <li
              onClick={() => setFilter({ dropdown: false, region: "Americas" })}
            >
              Americas
            </li>
            <li onClick={() => setFilter({ dropdown: false, region: "Asia" })}>
              Asia
            </li>
            <li
              onClick={() => setFilter({ dropdown: false, region: "Europe" })}
            >
              Europe
            </li>
            <li
              onClick={() => setFilter({ dropdown: false, region: "Oceania" })}
            >
              Oceania
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
