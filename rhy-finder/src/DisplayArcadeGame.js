import React from "react";
import { useParams } from "react-router-dom";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
//Rhythm Games Component to show on detail page 
export default function ArcadeGame(props) {
  const params = useParams()
console.log(props)
  const rhythmgame = props.rhythmgames.find((r) => r.fields.Images === params.Images);
  if (rhythmgame === undefined) return "No Rhythm Games here :( "
  return (
    <div className='pic-container'>
    //   <img className="gameMachines" src={rhythmgame.fields.Images}/>
    </div>
  )
}