var models = require('./models/schema');
var app = require('./app');

/**
 * A simple authentication middleware for Express.
 *
 * This middleware will load users from session data, and handle all user
 * proxying for convenience.
 */
module.exports.simpleAuth = function(req, res, next) {
  if (req.session && req.session.user) {
    models.User.findOne({ email: req.session.user.email }, 'fname lname username email password data', function(err, user) {
      if (user) {
        app.createUserSession(req, res, user);
      }
      next();
    });
  } else {
    next();
  }
};
