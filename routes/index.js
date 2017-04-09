var express = require('express');
var router = express.Router();
var sha1 = require('js-sha1');

let TOKEN = "xingyuchen"

/* GET home page. */
router.get('/', function(req, res, next) {
  var signature = req.param('signature');
  var timestamp = req.param('timestamp');
  var nonce = req.param('nonce');
  var echostr = req.param('echostr');

  var token = TOKEN;
  var tripleArray = [token, timestamp, nonce];
  tripleArray.sort();

  tripleString = tripleArray.join("")
  tripleSha = sha1(tripleString)

  if (tripleSha === signature) {
    res.send(echostr);
  } else {
    res.send("");
  }

});

module.exports = router;
