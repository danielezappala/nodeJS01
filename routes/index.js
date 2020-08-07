const path = require('path');
var express = require('express');
var router = express.Router();

const siteController = require('../controllers/site');
const customersController = require('../controllers/customers');
/* GET home page. */

router.get('/first', siteController.getFirst)
router.get('/home', siteController.getHome);
router.get('/clienti', customersController.getCustomers);
router.get('/clienti/edit-customer', customersController.editCustomer),
router.post('/clienti/add-customer', customersController.postAddCustomer);
// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
  res.redirect('home')
});

module.exports = router;
