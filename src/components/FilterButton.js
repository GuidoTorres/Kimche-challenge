import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";
import "../styles/filterButton.css";

const FilterButton = () => {
  const { filterGroupBy, groupBy } = useContext(HomeContext);

  return (
    <div className="buttons_container">
      <button
        style={{
          backgroundColor: groupBy === "Continent" ? "#7B52F0" : "#2A2F3B",
        }}
        onClick={() => filterGroupBy("Continent")}
      >
        Continent
      </button>
      <button
        style={{
          backgroundColor: groupBy === "Language" ? "#7B52F0" : "#2A2F3B",
        }}
        onClick={() => filterGroupBy("Language")}
      >
        Language
      </button>
    </div>
  );
};

export default FilterButton;
