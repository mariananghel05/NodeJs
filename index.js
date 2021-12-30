//Imports
const express = require('express');
const app = express();
const router = require('./route/router');
const fs = require('fs');
const path = require('path');
const https = require('https');
const helmet = require('helmet');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(router);


//Listening
const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`);});

/*
 --- Https version| Needs a certificate {key.pem, cert.pem} --- 

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
    }, app);

sslServer.listen(port, ()=>{console.log(`Listening on port ${port}`)});
*/

//just a sipmple comm