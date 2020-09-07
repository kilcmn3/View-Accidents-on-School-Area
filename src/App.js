import React, { useEffect } from 'react';
import MapContainer from './MapContainer';
import './App.css';

var request = require('request');

const App = () => {
  const url =
    'http://apis.data.go.kr/B552061/schoolzoneChild/getRestSchoolzoneChild?ServiceKey=' +
    process.env.REACT_APP_DATA_API +
    '&siDo=11';
  // queryParams +=
  //   '&' + encodeURIComponent('siDo') + '=' + encodeURIComponent('11'); /* */

  //calling on every render
  useEffect(() => {
    request(
      {
        url: url,
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
