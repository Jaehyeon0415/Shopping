var express = require('express');
var router = express.Router();

router.get('/signin', function(req, res, next) {
   res.render('contents/signin');
 });

module.exports = router;