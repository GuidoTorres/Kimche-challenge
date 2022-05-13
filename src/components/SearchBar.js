import React, { useContext } from "react";
import HomeContext from "../context/HomeContext";
import "../styles/searchbar.css";

const SearchBar = () => {
  const { 
    // setSearchTerm, searchTerm,
     addTerm } = useContext(HomeContext);

  return (
    <div className="search_container">
      <input onChange={(e) => addTerm(e.target.value)}></input>
    </div>
  );
};

export default SearchBar;
