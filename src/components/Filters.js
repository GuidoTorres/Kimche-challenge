import React from "react";

import "../styles/filters.css";
import FilterButton from "./FilterButton";

const Filters = () => {
  return (
    <div className="filters_container">
      <div className="title_container">
        <p>Group by: </p>
      </div>
      <div className="buttons_container">
        <FilterButton text="Continent"/>
        <FilterButton text="Language"/>

      </div>
    </div>
  );
};

export default Filters;
