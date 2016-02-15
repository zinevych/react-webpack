var express = require('express'),
    router = express.Router(),
    User = require('../models/user');

module.exports = function (app) {
  app.use('/test', router);
};

router.get('/post', function(req, res) {

});

router.get('/all', function (req, res, next) {

});