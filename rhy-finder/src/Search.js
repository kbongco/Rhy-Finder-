import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Search(props) {
  const [arcadeSearchTerm, updateArcadeSearchTerm] = useState("");
  const [arcadesResults, updateArcadeResults] = useState([]);
  const handleChange = (event) => {
    arcadeSearchTerm(event.target.value);
  };

  useEffect(() => {
    const arcadeResults = props.arcade.filter(arcades =>
      arcades.include(updateArcadeSearchTerm)
    );
    updateArcadeResults(arcadeResults);
  }, [updateArcadeSearchTerm])
  return (
    <div>
      <h1>Search for an arcade here!</h1>
      <input
        type="text"
        placeholder="DeeDer"
        value={arcadeSearchTerm}
        onChange={handleChange}
      />
      <ul>
        {arcadesResults.map(arcade =>
          <li>{arcade}</li>)}
      </ul>
    </div>
  );
}
