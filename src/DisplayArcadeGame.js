import React from "react";
import { useParams } from "react-router-dom";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
//Rhythm Games Component to show on detail page
export default function ArcadeGame(props) {
  const params = useParams();

  console.log(props.arcadeId);
  if (!props.rhythmGames.length) return null;

  const matchingRhythmGames = props.rhythmGames.filter((s) => {
    console.log(s);
    if (!s.fields.hasOwnProperty("Table 1")) return false;
    return s.fields["Table 1"].includes(props.arcadeId);
  });

  if (matchingRhythmGames === undefined) return "No rhythm games here";
  return (
    <div className="pic-container">
      {matchingRhythmGames.map((m) => (
        <img className="gameMachines" src={m.fields.Images} />
      ))}
    </div>
  );
}
