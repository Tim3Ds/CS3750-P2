var express = require('express');
var router = express.Router();
var utils = require('./utils')
//var utils = require('./utils');


/* GET chat page. , utils.requireLogin */
router.get('/', function(req, res, next) {
  res.render('window', { title: 'Chat It Up',
                        pageName: 'Chat Window',
                        groupName: 'Project 2 : Group 3',
                        user: 'None'
                      });
});

module.exports = router;