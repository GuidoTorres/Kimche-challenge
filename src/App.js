import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT);
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Home />
    </div>
  </ApolloProvider>
);
export default App;
