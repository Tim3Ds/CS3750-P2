var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Chat It Up',
                           pageName: 'Register',
                           groupName: 'Project 2 : Group 3',
                           user: 'New User'
                         });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Chat It Up',
                        pageName: 'Login',
                        groupName: 'Project 2 : Group 3',
                        user: 'none'
                      });
});

/* GET login page. */
router.get('/message', function(req, res, next) {
  res.render('login', { title: 'Chat It Up',
                        pageName: 'Login Failed',
                        groupName: 'Project 2 : Group 3',
                        user: 'None'
                      });
});

/* GET chat page. */
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat It Up',
                        pageName: 'Chat',
                        groupName: 'Project 2 : Group 3',
                        user: 'None'
                      });
});

module.exports = router;
