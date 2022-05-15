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

  useEffect(() => {
    //en esta funcion encadeno con chain las funciones de lodash
    //primero filtro el termino de busqueda con starswith para ver si el pais inicia con esa letra o termino
    //luego lo agrupo con groupBy dependiendo si es por contiente o lenguaje y obtengo el valor
    const filterData = () => {
      const newData = _.chain(data?.countries ? data.countries : "")
        .filter((item) => {
          return item.name.toLowerCase()
          // .includes(searchTerm)
          .startsWith(searchTerm);
        })
        .groupBy((o) => {
          return groupBy === "Continent"
            ? o.continent.name
            : groupBy === "Language"
            ? o.languages[0]?.name
            : "";
        })
        .value();
      setNewArray(newData);
    };
    filterData();

    if (searchTerm === "") setNewArray("");
  }, [searchTerm, groupBy, data]);

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

  //una vez filtrada la data lo muesto en el html
  //y uso Object.entries ya que al filtrar obtengo objetos en el cual
  // la key es el continente o lenguaje y el value es la data del pais y de ahí
  //solo lo muesto con un map
  return (
    <div className="result_container">
      {Object.entries(newArray).map(([key, value]) => (
        <div className="result" key={key}>
          <div>
            <p className="result_title">{key}</p>
          </div>
          <div className="result_data">
            {value.map((item, i) => (
              <div className="info_container" key={i}>
                <div className="info_container_emoji">
                  <span role="img" aria-label="flag">{item.emoji}</span>
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
