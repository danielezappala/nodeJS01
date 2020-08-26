const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const customersController = require(appRoot+'/controllers/customers');
router.get('/:customerId',customersController.getCustomerMemberships);
module.exports = router;