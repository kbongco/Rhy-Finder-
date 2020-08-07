import React, { useState } from "react";
import axios from "axios";

export default function AddOtherGame() {
  const [OtherCoolGames, updateOtherCoolGames] = useState("");
  const [Images, updateImages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOtherGame = await axios.post(
      "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%202",
      {
        fields: {
          OtherCoolGames: OtherCoolGames,
          Images: Images,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <h2>New Game</h2>
        <p>
          Wanna add a tesyrhythm game? Follow this
          <Link to={`/addgame`}>Link</Link>
        </p>
        <label htmlFor="OtherCoolGames">Other Game Name</label>
        <br></br>
        <input
          type="text"
          id="RhythmGame"
          onChange={(e) => updateOtherCoolGames(e.target.value)}
          value={OtherCoolGames}
        />
        <br></br>

        <label htmlFor="Image Link">Image Link</label>
        <input
          type="url"
          name="url"
          id="url"
          onChange={(e) => updateImages(e.target.value)}
          value={Images}
        />
        <br></br>
        <button type="submit">New Game</button>
      </form>
    </div>
  );
}
