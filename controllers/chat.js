var express = require('express');
var router = express.Router();
// has function to make sure you can only get to page if logged in
var utils = require('./utils');  
// NOTE THE utils.requireLogin   
// this function from the utils class makes sure they are logged 
// in before being able to go to chat but its not working right

var io = require('../models/socket');

let userCount = 0;

/* GET chat page. */
router.get('/', utils.requireLogin, function(req, res, next) {
  io.on('connection', function (socket) {
    userCount++;
    console.log('test con ', socket.connected)
    console.log('a user connected ' + userCount + ' user(s)');
    socket.on('send', function (msg) {
      io.emit('message', { 
        username: req.user.username, 
        text: msg, 
        date: new Date().toLocaleTimeString 
      });
    });
    socket.on('disconnect', function(){
      userCount--;
      console.log('user disconnected ' + userCount + ' user(s)');
    });
  });
  res.render('window', {
    userName: req.user.username,
    csrfToken: req.csrfToken()
  });
});

module.exports = router;