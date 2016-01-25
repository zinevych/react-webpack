var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/auth', router);
};

router.get('/login', function (req, res, next) {
//  Article.find(function (err, articles) {
//    if (err) return next(err);
//    res.render('index', {
//      title: 'Generator-Express MVC',
//      articles: articles
//    });
//  });

  res.send('hello world');
});
