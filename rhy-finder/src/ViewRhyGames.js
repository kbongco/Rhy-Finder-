import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";


export default function ViewRhyGames(props) {
  const { rhythmGames } = props
  
  return (
    <div className='gameshowCase'>
      {rhythmGames.map((rhythmgame) => 
        <h2>{rhythmgame.fields.RhythmGameName}</h2>
          // <img className='gameMachines' src='{rhythmgame.fields.Images}' />

       
        )}
      </div>
    // null 
  )
}