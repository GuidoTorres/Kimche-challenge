import React from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Filters />
      <Results />
    </div>
  );
};

export default Home;
