var express = require('express');
var router = express.Router();

router.get('/signin', function(req, res, next) {
  res.render('contents/signin');
 });

router.get('/signup', function(req, res, next) {
  res.render('contents/signup');
});

module.exports = router;