import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Locations from "./Locations";
import AddArcade from "./AddArcade";
import AddGame from "./AddGame";
import ArcadeDetail from './ArcadeDetail';
import Home from "./Home";
import ViewRhyGames from './ViewRhyGames'
import ViewOtherGames from './ViewOtherGames'
import Map from './Map'
import axios from "axios";

function App() {
  const [arcades, updateArcades] = useState([]);
  const [getNewArcades, updateGetNewArcades] = useState(false);
  const [rhythmGames, updateRhythmGames] = useState([]);
  const [getRhythmGames, updateGetRhythmGames] = useState(false);
  const [otherGames, updateOtherGames] = useState([]);
  const [getOtherGames, updateGetOtherGames] = useState(false)
 

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

  useEffect(() => {
    const summonOtherGames = async () => {
      const otherGameList = await axios("https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%203?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateOtherGames(otherGameList.data.records)
    }
    summonOtherGames()
  },[getOtherGames])



  return (
    <>
      <Navigation />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/locations/" exact>
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

      <Route path='/viewgames' exact>
        <ViewRhyGames rhythmGames={rhythmGames} />
      </Route>

      <Route path='/viewgames/othergames' exact>
        <ViewOtherGames otherGames={otherGames} />
      </Route>

      <Route path="/locations/:name" exact>
        <ArcadeDetail arcades={arcades}/>
      </Route>

      <Route path='/map'>
        <Map/>
      </Route>
    </>
  );
}

export default App;
