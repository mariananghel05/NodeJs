const express = require('express');
const router = express.Router();
const get = require('./posts/posts');


router.use('/', get);


module.exports = router;