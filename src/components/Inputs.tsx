import React from "react";
import { IoChevronDown, IoSearch } from "react-icons/io5";
import { Filter } from "../../custom-types";

type Props = {
  darkMode: string;
  search: string;
  setSearch: (search: string) => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export default function Inputs({
  darkMode,
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="selectWrapper input">
        <span
          className="regionFilter "
          placeholder="Filter by Region"
          onClick={() => setFilter({ ...filter, dropdown: true })}
        >
          <div>
            {filter.region === "All" ? "Filter by Region" : filter.region}
          </div>
          <div style={{}}>
            <IoChevronDown fontSize={14} fontWeight={600} />
          </div>
        </span>
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
