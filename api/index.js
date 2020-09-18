require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4000;
const cors = require('cors');

const url =
  'http://apis.data.go.kr/B552061/schoolzoneChild/getRestSchoolzoneChild?ServiceKey=' +
  process.env.REACT_APP_DATA_API +
  '&searchYearCd=2015&siDo=11&guGun=320&type=json&numOfRows=10&pageNo=1&';

app.use(cors());

app.get('/', (req, res) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => res.send(data.items.item[0]));
});

app.listen(port);
