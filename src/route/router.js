const express = require('express');
const router = express.Router();
const get = require('./get/get');
const put = require('./put/put');
const post = require('./post/post');
const del = require('./delete/delete');


router.use('/', get);
router.use('/', put);
router.use('/', post);
router.use('/', del);


module.exports = router;



