/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' +
      process.env.REACT_APP_KAKAO_API +
      '&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          //Basice option that require to load the map on brower
          center: new kakao.maps.LatLng(33.450701, 126.570667), //The map coordinates.
          level: 3, //Zoom leve
        };

        const map = new window.kakao.maps.Map(container, options); //Instance of new map

        //The coordinates of the marker
        const marketPosition = new kakao.maps.LatLng(33.450701, 126.570667);

        //creat a marker
        const marker = new kakao.maps.Marker({ position: marketPosition });

        marker.setMap(map);
      });
    };
  }, []);

  return <div id='map'></div>;
};

export default MapContainer;
