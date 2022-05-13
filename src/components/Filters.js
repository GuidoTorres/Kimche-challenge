import React from "react";
import FilterButton from "./FilterButton";
import "../styles/filters.css";

const Filters = () => {
  return (
    <div className="filters_container">
      <div>
        <p>Group by: </p>
      </div>
      <div>
        <FilterButton />
      </div>
    </div>
  );
};

export default Filters;
