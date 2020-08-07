import React from "react";
import { useParams } from "react-router-dom";

//3rd Airtable names for columns --> OtherCoolGames, Images 

export default function OtherCoolGames(props) {
  const params = useParams()
  console.log(props.arcadeId)
  if (!props.otherGames.length) return null;
  console.log(props.otherGames[0].fields['Table 1'].includes(1))
  const matchingGames = props.otherGames.filter((o) => { 
    console.log(o)
    if(!o.fields.hasOwnProperty('Table 1')) return false
    return o.fields['Table 1'].includes(props.arcadeId)
  });


  if (matchingGames === undefined) return "What arcade has no games?"
  return (
    <div className='othergame-container'>
      {matchingGames.map((o)=> <img className='coolgameMachines' src={o.fields.Images}/> )}
      
    </div>
  )
}