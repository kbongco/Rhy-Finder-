import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { render } from "react-dom";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_KEY;

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.73061,
    longitude: -73.935242,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });
  const [popUp, updatePopUp] = useState({
    arcade: null,
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/kbongco/ckdhtsuz306hu1in2tnszgtpf"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}
