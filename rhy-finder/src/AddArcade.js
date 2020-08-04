import React, { useState } from "react";
import axios from "axios";

//ArcadeName, City, State
export default function AddArcade(props) {
  const [ArcadeName, updateArcadeName] = useState("");
  const [City, updateCity] = useState("");
  const [State, updateState] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArcade = await axios.post(
      "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201",
      {
        fields: {
          ArcadeName: ArcadeName,
          City: City,
          State: State,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.updateGetNewArcades(!props.getNewArcades)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Arcade Location </h2>
      <label htmlFor="ArcadeName">Arcade Name</label>
      <input
        type="text"
        id="Arcadename"
        onChange={(e) => updateArcadeName(e.target.value)}
        value={ArcadeName}
      />
      <label htmlFor="City">City</label>
      <input
        type="text"
        id="City"
        onChange={(e) => updateCity(e.target.value)}
        value={City}
      />
      <label htmlFor="State">
        <input
          type="text"
          id="State"
          onChange={(e) => updateState(e.target.value)}
          value={State}
        />
      </label>
      <button type="submit">New Arcade</button>
    </form>
  );
}
