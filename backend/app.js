
'use strict';

const express = require('express');
const path = require('path');
const config = require('./config/config');
const fallback = require('express-history-api-fallback');
const jwt = require('jsonwebtoken');

// Constants
const PORT = 3000;

// App
const app = express();
console.log(__dirname);
app.use(express.static(path.resolve('build')));

require('./config/express')(app, config);

app.get('*', function (req, res) {
  res.sendfile(path.resolve('build/index.html'));
});

app.set('secretKey', config.app.secret);

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);