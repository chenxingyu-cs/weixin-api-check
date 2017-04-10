var express = require('express');
var router = express.Router();
var sha1 = require('js-sha1');

let TOKEN = "xingyuchen"

var checkSignature = function(signature, timestamp, nonce) {
  var token = TOKEN;
  var tripleArray = [token, timestamp, nonce];
  tripleArray.sort();

  tripleString = tripleArray.join("")
  tripleSha = sha1(tripleString)

  if (tripleSha === signature) {
    return true;
  } else {
    return false;
  }
}

/* GET available listing. */
router.get('/', function(req, res, next) {
  var signature = req.param('signature');
  var timestamp = req.param('timestamp');
  var nonce = req.param('nonce');
  var echostr = req.param('echostr');

  if (checkSignature(signature, timestamp, nonce)) {
        res.send(echostr);   // 确认来源是微信，并把echostr返回给微信服务器。
    } else {
        res.json(200, { code : -1, msg : "You aren't wechat server !"});
    }
});

module.exports = router;
