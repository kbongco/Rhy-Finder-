import React from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import Locations from "./Locations";
import AddArcade from "./AddArcade"
import Home from "./Home";

function App() {
  return (
    <>
      <Navigation />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/locations" exact>
        <Locations />
      </Route>

      <Route path='/addarcade'>
        <AddArcade />
      </Route>
    </>
  );
}

export default App;
