const path = require('path');
var express = require('express');
var router = express.Router();

const siteController = require('../controllers/site');
/* GET home page. */

router.get('/first', siteController.getFirst)
router.get('/home', siteController.getHome);
router.get('/clienti', siteController.getClienti);

// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
  res.redirect('home')
});

module.exports = router;
