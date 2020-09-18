/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = (props) => {
  useEffect(() => {
    mapScript(props.coordinates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coordinates]);

  //The coordinates of the marker
  // const marketPosition = new kakao.maps.LatLng(33.450701, 126.570667);
  const mapScript = (coordinates) => {
    const latitude = !Object.entries(props.coordinates).length
      ? 33.450701
      : props.coordinates[0][1];
    const longitude = !Object.entries(props.coordinates).length
      ? 126.57063
      : props.coordinates[0][0];

    const container = document.getElementById('map');
    const options = {
      //Basice option that require to load the map on brower
      center: new kakao.maps.LatLng(latitude, longitude), //The map coordinates.
      level: 3, //Zoom leve
    };

    const map = new kakao.maps.Map(container, options); //Instance of new map

    const positions = (data) => {
      if (!data.length) return false;
      const marketContainer = data.map((coordinate) => {
        let position = new Object();
        position.latlng = new kakao.maps.LatLng(coordinate[1], coordinate[0]);
        return position;
      });
      // console.log(marketContainer);
      return marketContainer;
    };

    for (var i = 0; i < positions(coordinates).length; i++) {
      // create the marker
      var marker = new kakao.maps.Marker({
        map: map, // the position of the marker on the mpa.
        position: positions(coordinates)[i].latlng, // the coordinates of the marker.
      });
    }
  };

  return <div id='map'></div>;
};

export default MapContainer;
