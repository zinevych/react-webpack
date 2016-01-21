
'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 3000;

// App
const app = express();
console.log(__dirname);
app.use(express.static(path.resolve('build')));

app.get('/', function (req, res) {
  res.sendfile(path.resolve('build/index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);