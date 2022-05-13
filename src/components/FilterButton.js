import React, {useContext } from "react";
import HomeContext from "../context/HomeContext";

const FilterButton = ({ text }) => {
  const { setGroupBy, groupBy, setButtonColor, buttonColor } =
    useContext(HomeContext);

  return (
    <div>
      <button
        style={{
          backgroundColor:
            groupBy === ""
              ? buttonColor
              : text === "Continent"
              ? "#7B52F0"
              : "",
        }}
        onClick={() => {
          setGroupBy(text);
          setButtonColor(text);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default FilterButton;
