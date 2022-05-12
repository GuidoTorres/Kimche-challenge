import React,{useState} from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import Results from "../components/Results";
import SearchBar from "../components/SearchBar";

import "../styles/home.css"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
console.log(searchTerm);
  return (
    <div className="home_container">
      <Header />
      <SearchBar setSearchTerm ={setSearchTerm}/>
      <Filters />
      <Results name = "Andorra"/>
      
    </div>
  );
};

export default Home;
