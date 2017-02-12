var express = require('express');
var router = express.Router();
var socketio = require('../socketio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chatroom/chat.pug', { title: 'Chatroom' });
});

module.exports = router;
