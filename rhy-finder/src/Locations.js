import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import { Route, Link } from "react-router-dom";
import axios from "axios";

//ArcadeName, City, State
export default function Locations(props) {
const {arcades} = props

  return (
    <div>
      <table>
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
                <h2>{arcade.fields.ArcadeName}</h2>
              </td>
              <td>
                <h3>{arcade.fields.City}</h3>
              </td>
              <td>
                <p>{arcade.fields.State}</p>
              </td>
              <td>
              <Link to ={`/locations/${arcade.name}`}><p>Read More</p></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
