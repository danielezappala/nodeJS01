const path = require('path');
var express = require('express');
var router = express.Router();

const customersController = require('../controllers/customers');
const { read } = require('fs');

router.get('/', customersController.getCustomers);
router.get('/edit-customer', customersController.editCustomer);
router.post('/add-customer', customersController.postAddCustomer);

// reindirizza tutti gli endpoint inesistenti
router.get('/*', function(req, res, next) {
    res.redirect('/')
  });

module.exports = router;