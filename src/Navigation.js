import React from "react";
import { Link } from "react-router-dom";

//Creating Linked Nav Bar
export default function Navigation() {
  return (
    <div class="navigation-bar">
      <nav>
        <img className='navicon' src="https://i.ibb.co/V2bbPqw/arcademachine.jpg" />
        <h1 className="headings">Rhy-Finder</h1>
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
          <Link className="search" to="/search">
            <li className="search">Search Here</li>
          </Link>
          <Link className="view-games" to="/viewgames">
            <li className="view-games">All Games</li>
          </Link>
          <Link className="view-map" to={"/map"}>
            <li className="view-map">Map</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
