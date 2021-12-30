const express = require('express');
const router = express.Router();
const get = require('./users');


router.use('/', get);


module.exports = router;