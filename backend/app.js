
'use strict';

const express = require('express');
const path = require('path');
const config = require('./config/config');
// Constants
const PORT = 3000;

// App
const app = express();
console.log(__dirname);
app.use(express.static(path.resolve('build')));

app.get('/', function (req, res) {
  res.sendfile(path.resolve('build/index.html'));
});
require('./config/express')(app, config);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);