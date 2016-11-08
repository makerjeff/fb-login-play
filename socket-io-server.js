/**
 * Created by jefferson.wu on 11/7/16.
 */



// forget it. going with Express.
const express       = require('express');
const app           = express();
const http          = require('http').Server(app);
const chalk         = require('chalk');
const clear         = require('clear');

const io            = require('socket.io')(http);

//app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/socket.html');
});

// process socket stuff
io.on('connection', function(socket){
    console.log(chalk.blue('a user connected: ' + socket.id));

    //chat message event
    socket.on('chat message', function(data){
        console.log(socket.id + ' says: ' + data);
        io.emit('chat message', data);
    });

    //put socket listeners here
    socket.on('disconnect', function(){
        console.log(chalk.red('user ' + socket.id + ' has disconnected.'));
    });
});

//start server
http.listen(3000, function(err){
    if(err){
        console.log('Error: ' + err);
    } else {
        clear();
        console.log('listening on localhost:3000');
    }
});