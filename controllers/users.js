var express = require('express');
var bcrypt = require('bcryptjs');
var schema = require('../models/schema');
var utils = require('./utils');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { csrfToken: req.csrfToken() });
});

/* POST register from regisation form */
/**
 * Create a new user account.
 *
 * Once a user is logged in, they will be sent to the chat page.
 */
router.post('/register', function(req, res, next) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);



  var user = new schema.User({
    fname:      req.body.fname,
    lname:      req.body.lname,
    email:      req.body.email,
    username:   req.body.username,
    password:   hash,
  });
  console.log(user); 
  user.save(function(err) {
    if (err) {
      var error = 'Something bad happened! Please try again.';

      if (err.code === 11000) {
        error = 'That email is already taken, please try another.';
      }
      return next(err);
      res.render('register', { error: error });
    } else {
    utils.createUserSession(req, res, user);
    res.redirect('/chat');
    }
  });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { csrfToken: req.csrfToken() });
});

/* POST login request */
/**
 * Log a user into their account.
 *
 * Once a user is logged in, they will be sent to the dashboard page.
 */
router.post('/login', function(req, res) {
  schema.User.findOne({ username: req.body.username }, 'fname lname email username password data', function(err, user) {
    console.log(user);
    if (!user) {
      res.render('login.jade', { error: "Incorrect email / password.", csrfToken: req.csrfToken() });
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        utils.createUserSession(req, res, user);
        res.redirect('/chat');
      } else {
        res.render('login', { error: "Incorrect email / password.", csrfToken: req.csrfToken() });
      }
    }
  });
});




module.exports = router;
