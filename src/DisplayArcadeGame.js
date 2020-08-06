import React from "react";
import { useParams } from "react-router-dom";

//2nd Airtable names for columns --> RhythmGameName, Images,Locations
//Rhythm Games Component to show on detail page 
export default function ArcadeGame(props) {
  const params = useParams()

  console.log(props.arcadeId)
  if (!props.rhythmGames.length) return null
  // console.log(props.rhythmGames[0].fields['Table 1'].includes(1))
  const matchingRhythmGames = props.rhythmGames.filter((s) => {
    console.log(s)
    if (!s.fields.hasOwnProperty('Table 1')) return false
    return s.fields['Table 1'].includes(props.arcadeId)
  })

  if (matchingRhythmGames === undefined) return 'No rhythm games here'
  return (
    <div className='pic-container'>
      {matchingRhythmGames.map((m) => <img className="gameMachines" src={m.fields.Images}/> )}
    </div>
  )

  // const rhythmgame = props.rhythmGames.find((r) => r.fields.Locations.includes(props.arcadeId) );
  // if (rhythmgame === undefined) return "No Rhythm Games here :( "
  // // const rhythmgame = props.rhythmGames.find((r) => r.fields.Images === params.Images);

  // return (
  //   <div className='pic-container'>
  //     {/* {rhythmGames.map((rhythmgames) => (
  //       <img className='gameMachine' src={rhythmgames.fields.Images}/>
  //     ))} */}
  //   <img className="gameMachines" src={rhythmgame.fields.Images}/>
  //     {/* console.log(rhythmgame.fileds.image) */}
  //   </div>
  // )
}