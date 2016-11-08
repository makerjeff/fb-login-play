/**
 * Created by jefferson.wu on 11/7/16.
 */

const http = require('http');
const clear = require('clear');
const fs = require('fs');

var server = http.createServer(function(req, res){
    console.log(req.method + ', ' + req.url);
    
    if(req.method === 'GET' && req.url === '/') {

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h1>This is working</h1>');
        res.end(getPage('./public/socket.html'));

        //TODO: GET DATA TO WRITE FILE.


        // res.writeHead(200, {'Content-Type':'text/html'});
        // res.write(getPage('./public/socket.html'));

    }
});

server.listen(3000, function(err){
    if(err){
        console.error('Error occurred: ' + error);
    } else {
        clear();
        console.log('Serving UN-securely at localhost:3000');
        getPage('./public/socket.html');
    }
});


// ======== functions ========
function getPage(fileLocation){
    fs.readFile(fileLocation, 'utf8', function(err, data){
        if(err) {
            console.error('Error: ' + err);
        } else {


            console.log(data);
            return data.toString();
        }
    });

    //return fs.readFileSync('./public/inject_me.txt', {encoding: 'utf8'});
}