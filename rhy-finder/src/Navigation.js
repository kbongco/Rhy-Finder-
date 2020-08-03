import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
// import './Navigation.css'

//Creating Linked Nav Bar
export default function Navigation() {
  return (
    <div class="navigation-bar">
      <nav>
        <ul className="navigation">
          <Link className="home" to="/" exact>
            <li className="links">home</li>
          </Link>
          <Link className="locations" to={"/locations"} exact>
            <li className="locations">locations</li>
          </Link>
          <Link className="addlocation" to={"/addarcade"}>
            <li className="add-arcade">Add Arcade</li>
          </Link>
          <Link className="addgame" to="/addgame">
            <li className="add-game">Add Game</li>
          </Link>
          <Link className="view-map" to="/map">
            <li className="view-map">Map</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
