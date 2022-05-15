import React, { createContext, useState } from "react";

const HomeContext = createContext();

// Use context api solamente para pasar los hooks entre componentes
// me parecio mas facil que hacerlo mediante props
export function HomeProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupBy, setGroupBy] = useState("Continent");
  const [selectedButton, setSelectedButton] = useState({
    continent: true,
    language: false,
  });

  const addTerm = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filterGroupBy = (text) => {
    setGroupBy(text);
  };

  return (
    <HomeContext.Provider
      value={{
        searchTerm,
        groupBy,
        addTerm,
        filterGroupBy,
        selectedButton,
        setSelectedButton,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContext;
