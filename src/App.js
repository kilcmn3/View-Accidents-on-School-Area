/*global kakao*/

import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' +
      process.env.KAKAO_API +
      '&autoload=false';
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  console.log(process.env.REACT_APP_KAKAO_API);
  return (
    <div className='App'>
      <div id='map' style={{ width: '500px', height: '500px' }}></div>
    </div>
  );
}

export default App;
