import React, { useEffect } from 'react';
import MapContainer from './MapContainer';
import './App.css';

const App = () => {
  var url = '/B552061/schoolzoneChild/getRestSchoolzoneChild'; /*URL*/
  var queryParams =
    '?' +
    encodeURIComponent('ServiceKey') +
    '=' +
    process.env.REACT_APP_DATA_API; /*Service Key*/
  queryParams +=
    '&' +
    encodeURIComponent('ServiceKey') +
    '=' +
    encodeURIComponent(`${process.env.REACT_APP_DATA_API}(URL Encode)`); /**/
  queryParams +=
    '&' +
    encodeURIComponent('searchYearCd') +
    '=' +
    encodeURIComponent('2015'); /**/
  queryParams +=
    '&' + encodeURIComponent('siDo') + '=' + encodeURIComponent('11'); /**/
  queryParams +=
    '&' + encodeURIComponent('guGun') + '=' + encodeURIComponent('320'); /**/
  queryParams +=
    '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /**/
  queryParams +=
    '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
  //calling on every render
  useEffect(() => {
    fetch(`${url}` + `${queryParams}`)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => console.log(data));
  });

  return (
    <div className='App'>
      <MapContainer />
    </div>
  );
};

export default App;
