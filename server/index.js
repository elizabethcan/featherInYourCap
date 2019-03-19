const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/index.js');
const country = require('../database/controllers/country.js');

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/countries', (req, res) => {

})

app.listen(port, 'localhost', () => {
  console.log(`Now listening on port ${port}`);
});