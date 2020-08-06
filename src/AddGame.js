import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddGame(props) {
  const [RhythmGameName, updateRhythmGameName] = useState("");
  const [Images, updateImages] = useState("");
  const [Locations, updateLocations] = useState("");
  const { arcades } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRhythmGame = await axios.post(
      "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%202",
      {
        fields: {
          RhythmGameName: RhythmGameName,
          Images: Images,
          Locations: [Locations],
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
        <h2>New Rhythm Game</h2>
        <p>
          Wanna add a non-rhythm game? Go
          <Link to={`/addgame/othergames`}>Here</Link>
        </p>
        <label htmlFor="RhythmGame">Rhythm Game Name</label>
        <br></br>
        <input
          type="text"
          id="RhythmGame"
          onChange={(e) => updateRhythmGameName(e.target.value)}
          value={RhythmGameName}
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
        <select
          value={Locations}
          onChange={(e) => updateLocations(e.target.value)}
        >
          <option value="">Select an arcade </option>
          {arcades.map((arcade) => (
            <option value={arcade.id}>{arcade.fields.ArcadeName}</option>
          ))}
        </select>
        <button type="submit">New Rhythm Game</button>
      </form>
    </div>
  );
}
