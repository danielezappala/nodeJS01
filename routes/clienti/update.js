
const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const customersController = require(appRoot+'/controllers/customers');

router.get('/',customersController.getEditCustomer);
router.get('/:customerId',customersController.postUpdateCustomer);
//router.post('/:customerId',customersController.postUpdateCustomer);

module.exports = router;