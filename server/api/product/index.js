'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.post('/search', controller.search);

module.exports = router;
