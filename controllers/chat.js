var express = require('express');
var router = express.Router();


/* GET chat page. */
router.get('/', function(req, res, next) {
  res.render('window', { title: 'Chat It Up',
                        pageName: 'Chat Window',
                        groupName: 'Project 2 : Group 3',
                        user: 'None'
                      });
});



module.exports = router;