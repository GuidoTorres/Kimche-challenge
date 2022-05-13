import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <SearchBar />
      <Filters />
      <Results />
    </div>
  );
};

export default Home;
