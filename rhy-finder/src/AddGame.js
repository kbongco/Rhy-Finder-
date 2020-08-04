import React, { useState } from 'react';
import axios from 'axios'

export default function AddGame() {
  const [RhythmGameName, updateRhythmGameName] = useState('')
  const [RhythmGamePhoto, updateRhythmGamePhoto] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArcade = await axios.post(
      "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%202",
      {
        fields: {
          RhythmGameName: RhythmGameName,
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
    <form onSubmit={handleSubmit}>
    <h2>New Rhythm Game</h2>
    <label htmlFor="RhythmGame">Rhythm Game Name</label>
    <input
      type="text"
      id="RhythmGame"
      onChange={(e) => updateRhythmGameName(e.target.value)}
      value={RhythmGameName}
      />

      <input
        type="text"
        id='piclink'
        onChange={(e) => updateRhythmGamePhoto(e.target.value)}
        value={RhythmGamePhoto}
      />
      <button type="submit">New Game</button>
      </form>
  )
}
