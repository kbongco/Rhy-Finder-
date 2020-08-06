import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Locations from "./Locations";
import AddArcade from "./AddArcade";
import AddGame from "./AddGame";
import ArcadeDetail from "./ArcadeDetail";
import Home from "./Home";
import ViewRhyGames from "./ViewRhyGames";
import ViewOtherGames from "./ViewOtherGames";
import Search from "./Search";
import Map from "./Map";
import ArcadeGame from "./DisplayArcadeGame";
import OtherCoolGames from './DisplayOtherGames'
// import { getArcades } from './LocationData'
import Footer from "./Footer";
import axios from "axios";

function App() {
  const [arcades, updateArcades] = useState([]);
  const [getNewArcades, updateGetNewArcades] = useState(false);
  const [rhythmGames, updateRhythmGames] = useState([]);
  const [getRhythmGames, updateGetRhythmGames] = useState(false);
  const [otherGames, updateOtherGames] = useState([]);
  const [getOtherGames, updateGetOtherGames] = useState(false);
  const [arcadeLocations, updateArcadeLocations] = useState([]);
  const [location, updateLocation] = useState({
    lat: 40.73061,
    long: -73.935242,
  });

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
      const rhythmGameList = await axios(
        "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%202?&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateRhythmGames(rhythmGameList.data.records);
    };
    summonRhythmGames();
  }, [getRhythmGames]);

  useEffect(() => {
    const summonOtherGames = async () => {
      const otherGameList = await axios(
        "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%203?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateOtherGames(otherGameList.data.records);
    };
    summonOtherGames();
  }, [getOtherGames]);

  // useEffect(() => {
  //   const mapArcades = async () => {
  //     updateArcadeLocations(await getArcades(location.lat, location, long));
  //   };
  //   mapArcades();
  // },[location])

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
        <AddGame arcades={arcades} />
      </Route>

      <Route path="/search">
        <Search arcades={arcades} />
      </Route>

      <Route path="/viewgames" exact>
        <ViewRhyGames rhythmGames={rhythmGames} />
      </Route>

      <Route path="/viewgames/othergames" exact>
        <ViewOtherGames otherGames={otherGames} />
      </Route>

      <Route path="/locations/:name" exact>
        <ArcadeDetail
          arcades={arcades}
          rhythmGames={rhythmGames}
          otherGames={otherGames}
        />
      </Route>

      <Route path="/map">
        <Map />
      </Route>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
