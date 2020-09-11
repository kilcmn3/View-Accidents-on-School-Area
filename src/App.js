import React, { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import { queryParams, url } from './queryParams';
import './App.css';

const convert = require('xml-js');

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
  useEffect(() => {
    fetch(`${url}` + `${queryParams}`)
      .then((response) => response.text())
      .then((str) => {
        let convert2json = JSON.parse(
          convert.xml2json(str, { compact: true, spaces: 2 })
        );
        //setState polygon datas
        let polygonData = JSON.parse(
          convert2json.response.body.items.item.geom_json._text
        ).coordinates[0];
        setPolygon(polygonData);
      });
  }, []); //need to clean up before mounting, []

  console.log(usePolygon);
  return (
    <div className='App'>
      <MapContainer />
    </div>
  );
};

export default App;
