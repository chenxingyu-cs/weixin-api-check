var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("This is the server for wechat test!")
});

module.exports = router;
