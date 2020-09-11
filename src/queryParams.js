export var url = '/B552061/schoolzoneChild/getRestSchoolzoneChild'; /*URL*/

export var queryParams =
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
