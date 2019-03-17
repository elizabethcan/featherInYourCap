const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');
const country = require('../database/controllers/country.js');

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/countries/:countryId', (req, res) => {
  console.log(`countryId`, req.params.countryId);
  country.getCountry(parseInt(req.params.countryId), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.listen(port, 'localhost', () => {
  console.log(`Now listening on port ${port}`);
});