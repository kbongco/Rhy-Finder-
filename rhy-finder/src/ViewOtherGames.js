import React from "react";
import { Link } from "react-router-dom";

export default function ViewOtherGames(props) {
  const { otherGames } = props;

  return (
    <div className="otherGamesShowCase">
      <h1>Non-Rhythm Games</h1>
      <Link to={`/viewgames/`}>
        <p>Go back to Rhythm Games</p>
      </Link>
      {otherGames.map((othergame) => (
        <div className="othergameTitleandPic">
          <h2 className="othergameName">{othergame.fields.OtherCoolGames}</h2>
          <img className="othergameMachines" src={othergame.fields.Images} />
        </div>
      ))}
    </div>
  );
}
