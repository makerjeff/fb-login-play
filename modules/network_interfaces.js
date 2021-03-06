/**
 * Created by jefferson.wu on 11/2/16.
 */

var os      = require('os');
var ifaces  = os.networkInterfaces();

/**
 * Get network interfaces and export them into an array.
 * @returns {Array} Array of network interfaces.
 */
module.exports.getIFaces = function(){
    var elemArray = [];
    Object.keys(ifaces).forEach(function(elem, ind, arr){
        elemArray.push(elem);
    });
    return elemArray;
};

/**
 * Get the local IP of the server
 */
module.exports.getLocalIP = function(){
    if(ifaces.en0[1].address) {
        return ifaces.en0[1].address;
    } else {
        return console.error('IP address not detected');
    }
};
