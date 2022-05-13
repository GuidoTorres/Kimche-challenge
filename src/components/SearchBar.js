import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/searchbar.css";

const SearchBar = () => {
  const { addTerm } = useContext(HomeContext);

  return (
    <div className="search_container">
      <div className="input_search">
        <FontAwesomeIcon icon={faSearch} />
        <input onChange={(e) => addTerm(e.target.value)}></input>
      </div>
    </div>
  );
};

export default SearchBar;
