var express = require('express');
var router = express.Router();

let validateLogin = (user, password) => {
  
}

let afterUserSaveAttempt = (err, user) => {
  
}
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Chat It Up',
                           pageName: 'Register',
                           groupName: 'Project 2 : Group 3',
                           user: 'user'
                         });
});
/* POST register from regisation form */
// router.post('/register', function(req,res,next)
// {
//   var user = new User({
//     fname = req.fname
    
//     // lname = req.body.lname,
//     // username = req.body.username,
//     // email = req.body.email,
//     // password = req.body.password
//   });
//   console.log(user.fname);
//   // user.save(function afterUserSaveAttempt(err, user){
//   //   if (err)
//   //   {
//   //     if (err == 11000)
//   //     {
//   //       error = 'That email has already been used. Try another.'
//   //     }
//   //     return next(err); 
      
//   //   }

//   //   res.render('register.pug', {error: error});
//   // });
//   res.redirect('/register');
// });

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Chat It Up',
                        pageName: 'Login',
                        groupName: 'Project 2 : Group 3',
                        user: 'user'
                      });
});
/* POST login request */
router.post('/login', function(req, res, next) {
  var user = new User;
  user.findOne(function (err, user) {
    if (err)
    {
      return next(err);
    }
    res.redirect('/chat');
  });
});


module.exports = router;
