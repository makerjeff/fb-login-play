/**
 * Created by jefferson.wu on 10/28/16.
 */
'use strict';

// to check, curl -k https:<your IP address>:3443.
const https         = require('https');
const fs            = require('fs');
const os            = require('os');
const chalk         = require('chalk');
const clear         = require('clear');

const networkInfo   = require('./modules/network_interfaces');

//functional programming at play. =D
console.log(networkInfo.getIFaces());

//load credentials for HTTPS
const options = {
    key: fs.readFileSync('credentials/hacksparrow-key.pem'),
    cert: fs.readFileSync('credentials/hacksparrow-cert.pem')
};

//Create HTTPS Severus
var server = https.createServer(options, function(req, res){
    res.writeHead(200);
    res.end('hello secure world\n');
});


//Start HTTPS Severus

server.listen(3443, function(error){
    if(error){
        console.error('Error occurred: ' + error);
    } else {
        clear();
        console.log(chalk.blue('Serving securely on port 3443.'));
    }
});