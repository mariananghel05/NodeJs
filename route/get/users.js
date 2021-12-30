const express = require('express');
const router = express.Router();

router.get('/posts', (req, res)=>{
    return res.json({
        Title: 'Tv App',
        Text: 'Hello that, a tv poster',
        Date: '2021-02-12',
        Author: 'Marian05',
        etc: '???'
    });
});


module.exports = router;