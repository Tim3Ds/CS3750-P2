var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat It Up',
                        pageName: 'Home',
                        groupName: 'Project 2 : Group 3'
                      });
});

module.exports = router;
