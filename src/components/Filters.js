import React from "react";
import FilterButton from "./FilterButton";
// import HomeContext from "../context/HomeContext";

import "../styles/filters.css";

const Filters = () => {
  return (
    <div className="filters_container">
      <div className="title_container">
        <p>Group by : </p>
      </div>
      <div className="buttons_container">
        <FilterButton />
      </div>
    </div> 
  );
};

export default Filters;
