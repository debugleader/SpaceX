import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <h1 className="title">SpaceX</h1>
        </div>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
