var express = require('express'),
    router = express.Router(),
    User = require('../models/user'),
    auth = require('../middlewares/auth');

module.exports = function (app) {
  app.use('/users', router);
};

//router.get('/setup', function(req, res) {
//
//  // create a sample user
//  var nick = new User({
//    name: 'Nick Cerminara',
//    password: 'password',
//    admin: true
//  });
//
//  // save the sample user
//  nick.save(function(err) {
//    if (err) throw err;
//
//    console.log('User saved successfully');
//    res.json({ success: true });
//  });
//});

router.get('/all', auth, function (req, res, next) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});