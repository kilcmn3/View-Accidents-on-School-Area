import { cleanup } from '@testing-library/react';
/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = (props) => {
  let mounted = true;
  useEffect(() => {
    if (mounted) {
      mapScript(props.coordinates);
    }
    return function cleanup() {
      return (mounted = false);
    };
  }, [props.coordinates]);

  //The coordinates of the marker
  // const marketPosition = new kakao.maps.LatLng(33.450701, 126.570667);
  const mapScript = (coordinates) => {
    const latitude = !Object.entries(props.coordinates).length
      ? 33.450701
      : props.coordinates[0][0];
    const longitude = !Object.entries(props.coordinates).length
      ? 126.57063
      : props.coordinates[0][1];

    const container = document.getElementById('map');
    const options = {
      //Basice option that require to load the map on brower
      center: new kakao.maps.LatLng(latitude, longitude), //The map coordinates.
      level: 3, //Zoom leve
    };

    const map = new kakao.maps.Map(container, options); //Instance of new map

    const positions = (data) => {
      const marketContainer = [];
      for (let i = 0; i < data.length; i++) {
        let position = new Object();
        // debugger;
        position.latlng = new kakao.maps.LatLng(data[i][0], data[i][1]);
        marketContainer.push(position);
      }
      console.log(marketContainer);
      return marketContainer;
    };

    for (var i = 0; i < positions(coordinates).length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions(coordinates)[i].latlng, // 마커를 표시할 위치
      });
    }
  };

  //creat a marker
  // var positions = [
  //   {
  //     title: '카카오',
  //     latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  //   },
  //   {
  //     title: '생태연못',
  //     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
  //   },
  //   {
  //     title: '텃밭',
  //     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
  //   },
  //   {
  //     title: '근린공원',
  //     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
  //   },
  // ];

  return <div id='map'></div>;
};

export default MapContainer;
