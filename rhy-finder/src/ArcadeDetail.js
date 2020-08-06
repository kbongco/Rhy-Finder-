import React from "react";
import { useParams } from "react-router-dom";
import ArcadeGame from './DisplayArcadeGame'

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
export default function ArcadeDetail(props) {
  const params = useParams();

  const arcade = props.arcades.find((a) => a.fields.ArcadeName === params.name);
  if (arcade === undefined) return "Loading...";
  return (
    <div className='details'>
    <div className="sidebar">
      
      <h1>{arcade.fields.ArcadeName}</h1>
      <p>
        other information
        <p>Address</p>
        <p>Hours</p>
      </p>
      </div>
      <div className="rhygames-here">
        <h2 className='rhy-gamename'>{arcade.fields.RhythmGamesHere}</h2><br></br>
        <ArcadeGame rhythmGames={props.rhythmGames} arcadeId={arcade.id}/>
      </div>
    </div>
  );
}
