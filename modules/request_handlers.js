/**
 * Created by jefferson.wu on 11/3/16.
 */

const fs = require('fs');

module.exports.handleRequests = function(req, res){


    if (req.method === 'GET' && req.url === '/') {
        //all requests
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('hello, secure world! (/)\n');
    }

    else if(req.method === 'GET' && req.url ==='/htmlpage') {
        //get html page.
        res.writeHead(200, {'Content-Type':'text/html'});

        fs.readFile('./public/index.html', function(err, data){
            res.end(data);
        });
        console.log('User request: ' + req.url);
    }

    else if(req.method === 'GET' && req.url === '/page1') {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('page 1');
    }
    else if(req.method === 'GET' && req.url === '/page2') {
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('page 2');
    } else {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('ERROR, 404: looking for file: ' + req.url);
    }
    
};