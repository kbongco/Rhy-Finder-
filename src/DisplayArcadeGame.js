import React from "react";
import { useParams } from "react-router-dom";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
//Rhythm Games Component to show on detail page 
export default function ArcadeGame(props) {
  const params = useParams()
  console.log(props)
  console.log(params)
  const rhythmgame = props.rhythmGames.find((r) => r.fields.Locations.includes(props.arcadeId) );
  if (rhythmgame === undefined) return "No Rhythm Games here :( "
  // const rhythmgame = props.rhythmGames.find((r) => r.fields.Images === params.Images);
  console.log(rhythmgame.fields)
  return (
    <div className='pic-container'>
      {/* {rhythmGames.map((rhythmgames) => (
        <img className='gameMachine' src={rhythmgames.fields.Images}/>
      ))} */}
    <img className="gameMachines" src={rhythmgame.fields.Images}/>
      {/* console.log(rhythmgame.fileds.image) */}
    </div>
  )
}