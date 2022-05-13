import React, { createContext, useState } from "react";

const HomeContext = createContext();

export function HomeProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [groupBy, setGroupBy] = useState("");
  const [buttonColor, setButtonColor] = useState("#2A2F3B");
  const [buttonSelected, setButtonSelected] = useState(false);

  const addTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <HomeContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
        groupBy,
        setGroupBy,
        buttonColor,
        setButtonColor,
        addTerm,
        buttonSelected,
        setButtonSelected,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContext;
