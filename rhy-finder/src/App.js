import React, { useState, useEffect }  from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import Locations from "./Locations";
import AddArcade from "./AddArcade"
import AddGame from "./AddGame"
import Home from "./Home";
import axios from 'axios'

function App() {
  const [arcades, updateArcades] = useState([]);
  const [getNewArcades, updateGetNewArcades] = useState(false)

  useEffect(() => {
    const arcadeSummon = async () => {
      const arcade = await axios(
        "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateArcades(arcade.data.records);
    };
    arcadeSummon();
  }, [getNewArcades]);
  return (
    <>
      <Navigation />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/locations" exact>
        <Locations arcades={arcades} />
      </Route>

      <Route path='/addarcade'>
        <AddArcade getNewArcades={getNewArcades} updateGetNewArcades={updateGetNewArcades}/>
      </Route>

      <Route path='/addgame'>
        <AddGame/>
      </Route>
    </>
  );
}

export default App;
