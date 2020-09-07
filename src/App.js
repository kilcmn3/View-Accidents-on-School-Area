import React, { useEffect } from 'react';
import MapContainer from './MapContainer';
import './App.css';

var request = require('request');

const App = () => {
  var url =
    'http://apis.data.go.kr/B552061/schoolzoneChild/getRestSchoolzoneChild';
  var queryParams =
    '?' +
    encodeURIComponent('ServiceKey') +
    '=' +
    process.env.REACT_APP_DATA_API; /* Service Key*/
  queryParams +=
    '&' +
    encodeURIComponent('ServiceKey') +
    '=' +
    encodeURIComponent('인증키(URL Encode)'); /* */
  queryParams +=
    '&' +
    encodeURIComponent('searchYearCd') +
    '=' +
    encodeURIComponent('2019'); /* */
  queryParams +=
    '&' + encodeURIComponent('siDo') + '=' + encodeURIComponent('11'); /* */
  queryParams +=
    '&' + encodeURIComponent('guGun') + '=' + encodeURIComponent('320'); /* */
  queryParams +=
    '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /* */
  queryParams +=
    '&' +
    encodeURIComponent('numOfRows') +
    '=' +
    encodeURIComponent('10'); /* */
  queryParams +=
    '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */

  //calling on every render
  useEffect(() => {
    request(
      {
        url: url + queryParams,
        method: 'GET',
      },
      function (error, response, body) {
        console.log('Status', response.statusCode);
        console.log('Headers', JSON.stringify(response.headers));
        console.log('Reponse received', body);
      }
    );
  });

  return (
    <div className='App'>
      <MapContainer />
    </div>
  );
};

export default App;
