var express = require('express'),
  router = express.Router(),
  User = require('../models/user'),
  jwt = require('jsonwebtoken');

module.exports = function (app) {
  router.post('/auth', function (req, res, next) {
// find the user
    User.findOne({
      name: req.body.name
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign({
            admin: user.admin,
            password: user.password,
            name: user.name
          }, app.get('secretKey'), {
            expiresIn: 100000
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    });
  });

  app.use('/security', router);
};


