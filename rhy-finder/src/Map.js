import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

const Map = () => {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.935242, 40.730610],
      zoom: 12.5,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return (
    <div>
      <h1>Search Here</h1>
      <div className='map-container' ref={mapContainerRef} />
      <div className='right-side'>
        <p>Dummy Information</p>
      </div>
    </div>
  )
}

export default Map;