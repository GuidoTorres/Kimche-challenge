import React, { createContext, useState } from "react";

const HomeContext = createContext();

export function HomeProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupBy, setGroupBy] = useState("");

  const addTerm = (term) => {
    setSearchTerm(term);
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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContext;
