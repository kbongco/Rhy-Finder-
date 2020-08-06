import React from "react";
import { useParams } from "react-router-dom";

//3rd Airtable names for columns --> OtherCoolGames, Images 

export default function OtherCoolGames(props) {
  const params = useParams()
  console.log(props)

  const othergames = props.otherGames.find((o) => o.fields['Table 1'].includes(props.arcadeId));

  if (othergames === undefined) return "What arcade has no games?"
  return (
    <div className='othergame-container'>
      <img className='othergameMachines' src={othergames.fields.Images}/>
    </div>
  )
}