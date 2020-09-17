const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

const url =
  'http://apis.data.go.kr/B552061/schoolzoneChild/getRestSchoolzoneChild?ServiceKey=' +
  process.env.REACT_APP_DATA_API +
  '&searchYearCd=2015&siDo=11&guGun=320&type=json&numOfRows=10&pageNo=1&';

app.use(cors());

app.get('/', (req, res) => {
  res.json({ username: 'Hello' });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
