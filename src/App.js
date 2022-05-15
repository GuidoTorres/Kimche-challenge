import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./pages/Home";
import { HomeProvider } from "./context/HomeContext";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <HomeProvider>
        <Home />
      </HomeProvider>
    </div>
  </ApolloProvider>
);
export default App;
