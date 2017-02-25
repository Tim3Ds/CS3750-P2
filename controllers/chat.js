var express = require('express');
var router = express.Router();
// has function to make sure you can only get to page if logged in
var utils = require('./utils');  
// NOTE THE utils.requireLogin   
// this function from the utils class makes sure they are logged 
// in before being able to go to chat but its not working right

var io = require('socket.io');
var socket = io();

/* GET chat page. */
router.get('/', utils.requireLogin, function(req, res, next) {
  socket.on('send', function (msg) {
    socket.emit('message', { 
      username: req.user.username, 
      text: msg, 
      date: new Date().toLocaleTimeString 
    });
  });
  res.render('window', {
    userName: req.user.username,
    csrfToken: req.csrfToken()
  });
});

module.exports = router;