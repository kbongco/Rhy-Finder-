import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const geolocateStyled = {
  float: "left",
  margin: "40px",
  padding: "10px",
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longtitude: 0,
    zoom: 1,
  });

  const _onViewPortChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 2000 });

  return (
    <div style={{ margin: "0 auto" }}>
      <h1 style={{ textAlign: center, fontSize: "20px", fontWeight: "bold" }}>
        Search for an arcade!<a href="/search">here</a>
      </h1>
      <MapGL
        {...viewport}
        mapboxApiToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/dark-v8'
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl 
          style={geolocateStyle}
          positionOptons={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          />
        </MapGL>
    </div>
  );
};

export default Map 
