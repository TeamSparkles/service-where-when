const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './../client')));

app.listen('8000', '127.0.0.1', () =>
  console.log('Listening on port 8000')
)
