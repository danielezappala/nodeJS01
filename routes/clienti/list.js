const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const customersController = require(appRoot+'/controllers/customers');
const editCustomerRoute = require(appRoot+'/routes/clienti/edit');
const updateCustomerRoute = require(appRoot+'/routes/clienti/update');
const newCustomerRoute = require(appRoot+'/routes/clienti/new');
const customerMembershipRoute = require(appRoot+'/routes/clienti/memberships');

const { read } = require('fs');

router.get('/', customersController.getCustomers);
router.get('/new', customersController.getNewCustomer)
router.post('/update/:customerId', customersController.postUpdateCustomer);
router.post('/add', customersController.postAddCustomer)
router.use('/edit', editCustomerRoute);
router.use('/memberships', customerMembershipRoute);

// reindirizza tutti gli endpoint inesistenti
router.get('/', function(req, res, next) {
    res.redirect('/')
  });

module.exports = router;