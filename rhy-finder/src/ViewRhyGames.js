import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function ViewRhyGames(props) {
  const { rhythmGames } = props;

  return (
    <div className="othergameshowCase">
      <h1>Rhythm Games </h1>
      <Link to={`/viewgames/othergames`}>
        <p>Other games Here</p>
      </Link>
      {rhythmGames.map((rhythmgame) => (
        <div className="gameTitleandPic">
          <h2 className="gameName">{rhythmgame.fields.RhythmGameName}</h2>
          <img className="gameMachines" src={rhythmgame.fields.Images} />
        </div>
      ))}
    </div>
  );
}
