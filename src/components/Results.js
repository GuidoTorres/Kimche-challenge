import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import HomeContext from "../context/HomeContext";
import * as _ from "lodash";

import "../styles/results.css";

import GET_COUNTRIES from "../graphql/getCountries";

const Results = () => {
  const { searchTerm } = useContext(HomeContext);
  const { data, error, loading } = useQuery(GET_COUNTRIES);
  const [newArray, setNewArray] = useState([]);

  const filterData = () => {
    const newData = _.chain(data?.countries ? data.countries : "")

    //Aqui verifico que el texto del input este incluido dentro de algun nombre de pais
      .filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      })
      // luego lo agrupo por continent
      .groupBy((o) => o.continent.name)
      // y el punto value es para poder obtener el array porque sino devuelve un wrapperlodash con data que no sirve
      .value();

    setNewArray(newData);
    console.log(newArray);
    // console.log(Object.keys(newArray));
  };

  useEffect(() => {
    filterData();
  }, [searchTerm]);

  if (loading)
    return (
      <p style={{ color: "white", marginTop: "100px", marginLeft: "150px" }}>
        loading...
      </p>
    );
  if (error) return <p>`Error...${error.message}`</p>;

  return (
    <div className="result_container">
      <p>Continent</p>
      {/* {newArray.map((country) => (
        <div key={country.code}>
          <div className="info_container">
            <p>{country.continent.name}</p>
            <div>
              <span>{country.emoji}</span>
              <p>{country.name}</p>
            </div>
            <p>{country.capital}</p>
            <p>{country.currency}</p>

            {country.languages.map((lan) => (
              <p key={lan.code}>{lan.name}</p>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Results;
