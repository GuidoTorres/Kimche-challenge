import React from "react";
import { useQuery } from "@apollo/react-hooks";

import "../styles/results.css";

import GET_COUNTRIES from "../graphql/getCountries";

const Results = ({ name }) => {
  const { data, error, loading } = useQuery(GET_COUNTRIES, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error...${error.message}`</p>;


  return (
    <div className="result_container">
      <p>Continent</p>
      {data.countries.map((country) => (
        <div>
          <div className="info_container">
            <div>
              <span>{country.emoji}</span>
              <p>{country.name}</p>
            </div>
            <p>{country.capital}</p>
            <p>{country.currency}</p>

          {country.languages.map((lan) =>(

            <p>{lan.name}</p>

          ))}

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
