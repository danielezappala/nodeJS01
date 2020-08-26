
const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const membershipsController = require(appRoot+'/controllers/memberships')

router.get('/:customerId',membershipsController.getNewMembership);
module.exports = router;