import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import './App.css';

const App = () => {
  const [usePolygon, setPolygon] = useState({});

  //Method 1.
  // useEffect(() => {
  //   fetch(`${url}` + `${queryParams}`)
  //     .then((response) => response.text()) //data return by xml form.
  //     .then((str) => new window.DOMParser().parseFromString(str, 'text/xml')) // using build-in paraser to convert xml to text.
  //     .then((data) => console.log(data));
  // });

  //Method 2.

  //calling on every render
  //Fetching with XML datas
  // useEffect(() => {
  //   fetch(`${url}` + `${queryParams}`)
  //     .then((response) => response.text())
  //     .then((str) => {
  //       let convert2json = JSON.parse(
  //         convert.xml2json(str, { compact: true, spaces: 2 })
  //       );
  //       //setState polygon datas
  //       let polygonData = JSON.parse(
  //         convert2json.response.body.items.item.geom_json._text
  //       ).coordinates[0];
  //       setPolygon(polygonData);
  //     });
  // }, []); //need to clean up before mounting, []

  //Fetching with JSON datas
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

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
