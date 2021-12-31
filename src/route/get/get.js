const express = require('express');
const router = express.Router();
const get = require('./posts');


router.use('/', get);


module.exports = router;