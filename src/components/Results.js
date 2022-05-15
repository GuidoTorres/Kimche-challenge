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

  const filterData = () => {
    const newData = _.chain(data?.countries ? data.countries : "")

      //Aqui verifico que el texto del input este incluido dentro de algun nombre de pais
      .filter((item) => {
        return item.name.toLowerCase().includes(searchTerm);
      })
      // luego lo agrupo por continente o lenguaje dependiendo del boton seleccionado
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
    filterData();

    if (searchTerm === "") setNewArray("");
  }, [searchTerm, groupBy]);

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
        <div className="result" key={key}>
          <div>
            <p className="result_title">{key}</p>
          </div>
          <div className="result_flex">
            {value.map((item, i) => (
              <div className="info_container" key={i}>
                <div className="info_container_emoji">
                  <span>{item.emoji}</span>
                  <p className="info_container_country"> {item.name}</p>
                </div>

                <div className="info_container_extra_data">
                  <p>
                    <strong>Capital:</strong> {item.capital}
                  </p>
                  <p>
                    <strong>Currency:</strong> {item.currency}
                  </p>
                  <p>
                    <strong>Phone:</strong> {item.phone}
                  </p>
                  <div className="languages">
                    <p className="language_text">Language: </p>
                    <div className="languages_flex">
                      {item.languages.map((lan, i, arr) => (
                        <p key={i}>
                          {"  " + lan.name}
                          {i !== arr.length - 1 ? ", " : ""}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
