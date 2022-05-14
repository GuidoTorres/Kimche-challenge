import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";
import "../styles/filterButton.css";

const FilterButton = () => {
  const { filterGroupBy, groupBy, selectedButton, setSelectedButton } =
    useContext(HomeContext);

  return (
    <div className="buttons_container">
      <button
        style={{
          backgroundColor:
            selectedButton.continent === true ? "#7B52F0" : "#2A2F3B",
          // backgroundColor: groupBy === "Continent" ? "#7B52F0" : "#2A2F3B",
        }}
        onClick={() => {
          filterGroupBy("Continent");
          setSelectedButton({ continent: true, language: false });
        }}
      >
        Continent
      </button>
      <button
        style={{
          backgroundColor:
            selectedButton.language === true ? "#7B52F0" : "#2A2F3B",

          // backgroundColor: groupBy === "Language" ? "#7B52F0" : "#2A2F3B",
        }}
        onClick={() => {
          filterGroupBy("Language");
          setSelectedButton({ continent: false, language: true });
        }}
      >
        Language
      </button>
    </div>
  );
};

export default FilterButton;
