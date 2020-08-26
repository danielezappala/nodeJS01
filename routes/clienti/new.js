
const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const customersController = require(appRoot+'/controllers/customers');
console.log('routing clienti/new')

router.get('/',customersController.getNewCustomer);

module.exports = router;