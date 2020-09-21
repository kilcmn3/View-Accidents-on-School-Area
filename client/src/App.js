import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import './App.css';

const App = () => {
  const [usePolygon, setPolygon] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => {
        let map = JSON.parse(data['geom_json']);
        setPolygon(map.coordinates[0]);
      });
  }, []);

  return (
    <div className='App'>
      <MapContainer coordinates={usePolygon} />
    </div>
  );
};

export default App;
