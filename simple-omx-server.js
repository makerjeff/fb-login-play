/**
 * Created by jefferson.wu on 10/28/16.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html', 'X-Powered-By':'Bacon Grease'});
    }
});


// functions

function buildList(arrayObject){

    arrayObject.forEach(function(elem, arr,ind){
        console.log(__dirname + '/ ' + elem);   //__dirname not available in REPL (or the shell)
    });
}


// start server
server.listen(3000, function(){
    console.log('Server is running on port ' + port + '. ');
});