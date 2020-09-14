/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = (props) => {
  const script = document.createElement('script');
  script.async = true;
  script.src =
    'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' +
    process.env.REACT_APP_KAKAO_API +
    '&autoload=false';
  document.head.appendChild(script);
  useEffect(() => {
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          //Basice option that require to load the map on brower
          center: new kakao.maps.LatLng(33.450701, 126.570667), //The map coordinates.
          level: 3, //Zoom leve
        };

        const map = new window.kakao.maps.Map(container, options); //Instance of new map
      });
    };
  }, []);

  //The coordinates of the marker
  // const marketPosition = new kakao.maps.LatLng(33.450701, 126.570667);

  //List of marker's position and title of that place.
  const positions = (data) => {
    const marketContainer = [];
    data = props.coordinates;
    console.log('inside the position');
    for (let i = 0; i < data.length; i++) {
      let position = new Object();
      position.latlng = new kakao.maps.Latlng(data[i][0], data[i][1]);
      marketContainer.push(position);
    }
    return marketContainer;
  };

  //creat a marker
  for (let i = 0; i < positions().length; i++) {
    const marker = new kakao.maps.Marker({
      map: map, //This will shows the marker on the map
      position: positions()[i].latlng,
      title: positions()[i].title,
    });
  }

  console.log(props.coordinates);
  return <div id='map'></div>;
};

export default MapContainer;
