import React, { useState } from 'react';
import axios from 'axios'

export default function AddGame() {
  const [RhythmGameName, updateRhythmGameName] = useState('')
  const [Images, updateImages] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRhythmGame = await axios.post(
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
        type="url"
        name='url'
        id='url'
        onChange={(e) => updateImages(e.target.value)}
        value={Images}
      />
      <button type="submit">New Game</button>
      </form>
  )
}
