/*global kakao*/
import React, { useEffect } from 'react';

const MapContainer = (props) => {
  useEffect(() => {
    console.log('this is inside useEffect', props.coordinates);
    const container = document.getElementById('map');
    const options = {
      //Basice option that require to load the map on brower
      center: new kakao.maps.LatLng(33.450701, 126.570667), //The map coordinates.
      level: 3, //Zoom leve
    };
    const map = new window.kakao.maps.Map(container, options); //Instance of new map
    for (var i = 0; i < positions(props.coordinates).length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions(props.coordinates)[i].latlng, // 마커를 표시할 위치
        title: positions(props.coordinates)[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      });
    }
  }, []);

  //The coordinates of the marker
  // const marketPosition = new kakao.maps.LatLng(33.450701, 126.570667);

  const positions = (data) => {
    const marketContainer = [];
    console.log('inside the position', data);
    for (let i = 0; i < data.length; i++) {
      let position = new Object();
      position.latlng = new kakao.maps.Latlng(data[i][0], data[i][1]);
      marketContainer.push(position);
    }
    return marketContainer;
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

  console.log(props.coordinates);
  return <div id='map'></div>;
};

export default MapContainer;
