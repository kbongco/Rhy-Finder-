import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [arcadeSearchTerm, updateArcadeSearchTerm] = useState("");
  const [arcadesResults, updateArcadeResults] = useState([]);
  const handleChange = (event) => {
    updateArcadeSearchTerm(event.target.value);
  };

  useEffect(() => {
    const arcadeResults = props.arcades.filter((arcades) => {
      return arcades.fields.ArcadeName.includes(arcadeSearchTerm);
    });

    updateArcadeResults(arcadeResults);
  }, [arcadeSearchTerm]);

  return (
    <div className="searcharcade">
      <h1>Search for an arcade here!</h1>
      <input
        type="text"
        placeholder="Dave and Busters"
        value={arcadeSearchTerm}
        onChange={handleChange}
      />
      <ul>
        {arcadesResults.map((arcade) => (
          <Link to={`/locations/${arcade.fields.ArcadeName}`}>
            <li>{arcade.fields.ArcadeName}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
