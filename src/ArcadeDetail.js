import React from "react";
import { useParams } from "react-router-dom";
import ArcadeGame from "./DisplayArcadeGame";
import OtherCoolGames from "./DisplayOtherGames";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
export default function ArcadeDetail(props) {
  const params = useParams();

  const arcade = props.arcades.find((a) => a.fields.ArcadeName === params.name);
  if (arcade === undefined) return "Loading...";
  return (
    <div className="details">
      <div className="sidebar">
        <h1>{arcade.fields.ArcadeName}</h1>
        <p>
          other information
          <p>Example Address here</p>
          <p>Hours: Example hours here</p>
          <p>How much per credit: Depends on what you buy </p>
        </p>
      </div>
      <div className="rhygames-here">
        <ul>
          <li className="rhy-gamename">{arcade.fields.RhythmGamesHere}</li>
          </ul>
        <br></br>
        <ArcadeGame rhythmGames={props.rhythmGames} arcadeId={arcade.id} />
        {/* <OtherCoolGames otherGames = {props.otherGames} arcadeId={arcade.id} /> */}
      </div>
    </div>
  );
}
