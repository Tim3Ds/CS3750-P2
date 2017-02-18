var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// David: added for db validation
var csrf = require('csurf');
var session = require('client-sessions');
var middleware = require('./middleware');


// database dependencies
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = Promise;

// controllers
var index = require('./controllers/index');
var users = require('./controllers/users');
var chat = require('./controllers/chat');

// database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

// express
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  cookieName: 'session',
  secret: 'keyboard cat',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
app.use(csrf());
app.use(middleware.simpleAuth);


//routes
app.use('/', index);
app.use('/users', users);
app.use('/chat', chat);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// class methods

/**
 * Ensure a user is logged in before allowing them to continue their request.
 *
 * If a user isn't logged in, they'll be redirected back to the login page.
 */
requireLogin = function(req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};

/**
 * Given a user object:
 *
 *  - Store the user object as a req.user
 *  - Make the user object available to templates as #{user}
 *  - Set a session cookie with the user object
 *
 *  @ param {Object} req - The http request object.
 *  @ param {Object} res - The http response object.
 *  @ param {Object} user - A user object.
 */
createUserSession = function(req, res, user) {
  var cleanUser = {
    firstName:  user.firstName,
    lastName:   user.lastName,
    email:      user.email,
    data:       user.data || {},
  };

  req.session.user = cleanUser;
  req.user = cleanUser;
  res.locals.user = cleanUser;
};

module.exports = app;
