/**
 * Created by jefferson.wu on 10/28/16.
 */
'use strict';

// to check, curl -k https:<your IP address>:3443.
const https = require('https');
const fs = require('fs');
const os = require('os');

var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function(elem,ind, arr){
    console.log(elem);
});


const options = {
    key: fs.readFileSync('credentials/hacksparrow-key.pem'),
    cert: fs.readFileSync('credentials/hacksparrow-cert.pem')
};

//Create Severus
var server = https.createServer(options, function(req, res){
    res.writeHead(200);
    res.end('hello secure world\n');
});


//Start Severus

//TODO: Figure out why this is crashing.
server.listen(443, function(error){

    if(error){
        console.error('Error occurred: ' + error);
    } else {
        console.log('Serving securely on port 3443.');
    }
});