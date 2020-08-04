import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation";
import Locations from "./Locations";
import AddArcade from "./AddArcade";
import AddGame from "./AddGame";
import Home from "./Home";
import ViewRhyGames from './ViewRhyGames'
// import ArcadeMap from './Map'
import axios from "axios";

function App() {
  const [arcades, updateArcades] = useState([]);
  const [getNewArcades, updateGetNewArcades] = useState(false);
  const [rhythmGames, updateRhythmGames] = useState([]);
  const [getRhythmGames, updateGetRhythmGames] = useState(false);
 

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

  useEffect(() => {
    const summonRhythmGames = async () => {
      const rhythmGameList = await axios("https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%202?&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }

      );
      updateRhythmGames(rhythmGameList.data.records);
    };
    summonRhythmGames()
  }, [getRhythmGames]);



  return (
    <>
      <Navigation />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/locations" exact>
        <Locations arcades={arcades} />
      </Route>

      <Route path="/addarcade">
        <AddArcade
          getNewArcades={getNewArcades}
          updateGetNewArcades={updateGetNewArcades}
        />
      </Route>

      <Route path="/addgame">
        <AddGame />
      </Route>

      <Route path='/viewgames'>
        <ViewRhyGames rhythmGames={rhythmGames}/>
      </Route>

      {/* <Route path='/map'>
        <ArcadeMap/>
      </Route> */}
    </>
  );
}

export default App;
