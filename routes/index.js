const path = require('path');
var express = require('express');
var router = express.Router();

const siteController = require('../controllers/site');
const customersRoutes = require('../routes/customers');
const customersController = require('../controllers/customers');
const { read } = require('fs');
/* GET home page. */

router.get('/home', siteController.getHome);
router.get('/first', siteController.getFirst);
router.use('/clienti',customersRoutes);
router.get('/template', customersController.template);

// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
  res.redirect('home')
});

module.exports = router;
