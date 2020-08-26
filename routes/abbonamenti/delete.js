
const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();

const membershipsController = require(appRoot+'/controllers/memberships');

router.get('/',membershipsController.getEditMembership);
router.get('/:membershipId',membershipsController.getDeleteMembership);

module.exports = router;