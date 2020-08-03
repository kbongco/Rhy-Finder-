import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";

//ArcadeName, City, State
export default function Locations() {
  const [arcades, updateArcades] = useState([]);

  useEffect(() => {
    const arcadeSummon = async () => {
      const arcade = await axios(
        "https://api.airtable.com/v0/app7jwOkPMaOOh53m/Table%201?maxRecords=3&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateArcades(arcade.data.records);
    };
    arcadeSummon();
  }, []);

  return (
    <div>
      <table>
    <thead>
      <tr>
          <th>Arcade Name</th>
          <th>City</th>
          <th>State</th>
      </tr>
    </thead>
    <tbody>
    {arcades.map((arcade) => (
        <tr>
          <td><h2>{arcade.fields.ArcadeName}</h2></td>
          <td><h3>{arcade.fields.City}</h3></td>
          <td><p>{arcade.fields.State}</p></td>
        </tr>
      ))}
    </tbody>
      </table>
    </div>
  );
}
