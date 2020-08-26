
const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const membershipsController = require(appRoot+'/controllers/memberships');

router.get('/',membershipsController.getEditMembership);
//router.get('/false',membershipsController.getEditMembership);
router.get('/:editing/:membershipId',membershipsController.getEditMembership);
router.get('/:editing&:customerId',membershipsController.getEditMembership);

module.exports = router;