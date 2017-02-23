var express = require('express');
var router = express.Router();
var utils = require('./utils');  // has function to make sure you can only get to page if logged in

/* GET chat page. */
router.get('/', function(req, res, next) {
  res.render('window', {  title: 'Chat It Up',
                          pageName: 'Chat Window',
                          groupName: 'Project 2 : Group 3',
                          userName: req.user.username,
                          csrfToken: req.csrfToken()
                       });
});


// NOTE THE utils.requireLogin   this function from the utils class makes sure they are logged in before being able to go to chat but its not working right
//  I think its a problem with the session 

// router.get('/', utils.requireLogin, function(req, res, next) {
//   res.render('window', { title: 'Chat It Up',
//                         pageName: 'Chat Window',
//                         groupName: 'Project 2 : Group 3'
//                       });
// });


module.exports = router;