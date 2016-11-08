/**
 * Created by jefferson.wu on 11/2/16.
 */

var os      = require('os');
var fs      = require('fs');
var crypto  = require('crypto');

var dataPackage = [
    {
        name: 'object1',
        payload: 'wonderfultastic first message.'
    },
    {
        name: 'object2',
        payload: 'wonderfultastic second message.'
    },
    {
        name: 'object3',
        payload: 'slightly more awesome third message.'
    }
];

//check
fs.readFile('filedatabase.txt', {encoding:'utf8'}, function(err, data){
    if(err) {
        console.error(err);
    } else {
        console.log('data file exists: ');
        console.log(data);
    }
});

fs.appendFile('filedatabase.txt', JSON.stringify(dataPackage) + '\n', function(err){
    if(err) throw err;
    console.log('The data ' + dataPackage + ' has been appended.');
});

//TODO: continue with this, secure the data with the crypto