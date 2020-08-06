import React from "react";
import { useParams } from "react-router-dom";

//3rd Airtable names for columns --> OtherCoolGames, Images 

export default function OtherCoolGames(props) {
  const params = useParams()

  const othergames = props.otherGames.find((o) => o.fields.locations.include(props.arcadeId));

  if (othergames === undefined) return "What arcade has no games?"
  return (
    <div className='othergame-container'>
      <img className='othergameMachines' src={othergames.fields.Images}/>
    </div>
  )
}