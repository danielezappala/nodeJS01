const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const siteController = require(appRoot+'/controllers/site');
const customersRoutes = require(appRoot+'/routes/clienti/list');
const membershipsRoutes = require(appRoot+'/routes/abbonamenti/list');
const { read } = require('fs');
/* GET home page. */

router.get('/home', siteController.getHome);
router.get('/first', siteController.getFirst);
router.use('/clienti',customersRoutes);
router.use('/abbonamenti',membershipsRoutes);
// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
  res.redirect('home')
});

module.exports = router;
