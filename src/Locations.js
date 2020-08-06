import React from "react";
import { Link } from "react-router-dom";

//ArcadeName, City, State
export default function Locations(props) {
  const { arcades } = props;

  return (
    <div className="container">
      <table className="designed">
        <thead>
          <tr>
            <th>Arcade Name</th>
            <th>City</th>
            <th>State</th>
            <th>Arcade Details</th>
          </tr>
        </thead>
        <tbody>
          {arcades.map((arcade) => (
            <tr>
              <td>
                <p>{arcade.fields.ArcadeName}</p>
              </td>
              <td className="none-mobile">
                <h3>{arcade.fields.City}</h3>
              </td>
              <td className="none-mobile">
                <p>{arcade.fields.State}</p>
              </td>
              <td>
                <Link to={`/locations/${arcade.fields.ArcadeName}`}>
                  <p>Read More</p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
