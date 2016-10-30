/**
 * Created by jefferson.wu on 10/28/16.
 */

var http    = require('http');
var fs      = require('fs');
var chalk   = require('chalk');
var port    = process.env.PORT;
var clear   = require('clear');


// MODULE PATTERN
var SimpleOmxPlayer = {
    server: http.createServer(function (req, res) {
        if(req.method === 'GET' && req.url === '/') {
            //stuff happens here
            res.writeHead(200, {'Content-Type':'text/html', 'X-Powered-By':'Bacon Grease'});
            res.write('<html>');

            //head
            res.write('<head>');
            res.write('<title>OMX Controller</title>');

            res.write('<style>');
            res.write('html, body {width: 100%; height: 100%; background: rgba(10,10,10,1.0); color: rgba(200, 200, 200,1.0);}');
            res.write('#container {display: flex; width: 100%; height: 100%; justify-content: center; align-items: center}');
            res.write('</style>');

            res.write('</head>');

            //body
            res.write('<body>');
            res.write('<div id="container">');
            res.write('<h1 id="text">Hello.</h1>');
            res.write('</div>');
            res.write('</body>');

            //front-end-script
            res.write('<script>');
            res.write('var listOfStuff = ["Stuff.","Things.","Monkies.","Turds.","Mushrooms."];');
            res.write('var clickMe = document.getElementById("container");');
            res.write('var text = document.getElementById("text");');
            res.write('clickMe.addEventListener("click", function(e){' +
                'text.innerHTML = listOfStuff[Math.floor(Math.random()*listOfStuff.length)]})');

            res.write('</script>');

            res.write('</html>');
            res.end();
        }
    }),

    init: function() {
        SimpleOmxPlayer.server.listen(port, function(){
            clear();
            console.log(chalk.yellow.bgBlack('Server is running on localhost:' + port + '. '));
        });
    }
};


var server = http.createServer(function(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html', 'X-Powered-By':'Bacon Grease'});
        res.write('<html>');
        res.write('<head>');
        res.write('<title> OMX Player Controller </title>');
        res.end();
        //TODO: continue here.
    }
});


// functions
function buildList(arrayObject){

    arrayObject.forEach(function(elem, arr,ind){
        console.log(__dirname + '/ ' + elem);   //__dirname not available in REPL (or the shell)
    });
}


// start server
SimpleOmxPlayer.init();