const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(port, 'localhost', () => {
  console.log(`Now listening on port ${port}`);
});