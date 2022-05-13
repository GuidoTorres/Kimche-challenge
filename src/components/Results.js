import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import HomeContext from "../context/HomeContext";
import * as _ from "lodash";
import "../styles/results.css";

import GET_COUNTRIES from "../graphql/getCountries";

const Results = () => {
  const { searchTerm, groupBy } = useContext(HomeContext);
  const { data, error, loading } = useQuery(GET_COUNTRIES);
  const [newArray, setNewArray] = useState();

  const filterDatabyContinent = () => {
    const newData = _.chain(data?.countries ? data.countries : "")

      //Aqui verifico que el texto del input este incluido dentro de algun nombre de pais
      .filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      })
      // luego lo agrupo por continent
      .groupBy((o) => {
        return groupBy === "Continent"
          ? o.continent.name
          : groupBy === "Language"
          ? o.languages[0]?.name
          : "";
      })
      // y el punto value es para poder obtener el array porque sino devuelve un wrapperlodash con data que no sirve
      .value();
    setNewArray(newData);
  };

  useEffect(() => {
    filterDatabyContinent();
  }, [searchTerm]);

  if (loading)
    return (
      <p
        style={{
          color: "white",
          marginTop: "100px",
          width: "100%",
          textAlign: "center",
        }}
      >
        loading...
      </p>
    );
  if (error) return <p>`Error...${error.message}`</p>;

  return (
    <div className="result_container">
      {Object.entries(newArray).map(([key, value]) => (
        <div key={key} className="result">
          <p>{key}</p>
          {value.map((item, i) => (
            <div key={i} className="info_container">
              <span>{item.emoji}</span>
              <div className="flex_title">
                <p> {item.name}</p>
                <p> Capital: {item.capital}</p>
                <p> Currency: {item.currency}</p>
                <p> Phone: {item.phone}</p>
                {item.languages.map((lan, i) => (
                  <p key={i}> Language: {lan.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Results;
