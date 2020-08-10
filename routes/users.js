const path = require('path');
var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/:user', (req,res,next)=> {
  const user = req.params.user;
  if (!user){
    user = null
  }
  res.render('users',{ 
    title: 'Users page', 
    user: user,
    path: path }); 
})
router.get('/', (req,res,next)=> {
  const user = req.params.user;

  res.render('users',{ 
    title: 'Users page', 
    user: null,
    path: '>users'
  }); 
})

router.get('/', function(req, res, next) {
  res.redirect('clienti')
});


module.exports = router;
