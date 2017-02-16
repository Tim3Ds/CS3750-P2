var express = require('express');
var router = express.Router();


/* GET chat page. */
router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Chat It Up',
                        pageName: 'Chat',
                        groupName: 'Project 2 : Group 3',
                        user: 'None'
                      });
});



module.exports = router;