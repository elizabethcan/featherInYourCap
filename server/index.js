const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const db = require('../database/index.js');
const country = require('../database/controllers/country.js');

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.get('/countries', (req, res) => {
  let options = {
    url: 'https://www.budgetyourtrip.com/api/v3/countries',
  }
  request(options, (error, response, body) => {
    if (error) {
      res.status(500)
    } else {
      if (response.statusCode === 200) {
        res.status(200).send(JSON.parse(body));
      }
    }
  })
});

app.get('/convert', (req, res) => {
  let from = req.query.from;
  let to = req.query.to;
  let options = {
    url: `https://www.budgetyourtrip.com/api/v3/currencies/convert/${from}/${to}`,
  }
  request(options, (error, response, body) => {
    if (error) {
      res.status(500)
    } else {
      if (response.statusCode === 200) {
        res.status(200).send(JSON.parse(body));
      }
    }
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on port ${process.env.PORT || port}`);
});