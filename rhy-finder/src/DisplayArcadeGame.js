import React from "react";
import { useParams } from "react-router-dom";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
export default function ArcadeGame(props) {
  const params = useParams()

  const RhythmGame = props.RhythmGames.find((r) => r.fields.Images === params.Images)
  if (RhythmGame === undefined) return "No Rhythm Games here :( "
  return (
    <div className='pic-container'>
      <img className="gameMachines" src={RhythmGame.fields.Images}/>
    </div>
  )
}