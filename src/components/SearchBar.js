import React, { useState } from "react";

import "../styles/searchbar.css";

const SearchBar = ({setSearchTerm}) => {
  return (
    <div className="search_container">
      <input onChange={e => setSearchTerm(e.target.value)}></input>
    </div>
  );
};

export default SearchBar;
