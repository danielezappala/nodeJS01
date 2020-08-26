const path = require('path');
var appRoot = process.env.PWD;
var express = require('express');
var router = express.Router();



const membershipsController = require(appRoot+'/controllers/memberships');
const editMembershipRoute = require(appRoot+'/routes/abbonamenti/edit');
const newMembershipRoute = require(appRoot+'/routes/abbonamenti/new');
const updateMembershipRoute = require(appRoot+'/routes/abbonamenti/update');
const deleteMembershipRoute = require(appRoot+'/routes/abbonamenti/delete');

const { read } = require('fs');

router.get('/', membershipsController.getMemberships);
router.use('/delete', deleteMembershipRoute);
router.use('/update', updateMembershipRoute);
router.use('/new', newMembershipRoute);
router.use('/edit', editMembershipRoute);
// reindirizza tutti gli endpoint inesistenti
router.get('/*', function(req, res, next) {
    res.redirect('/')
  });

module.exports = router;