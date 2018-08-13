var url = 'http://mylogger.io';
function log(message){
    // send an HTTP request
    console.log(message)
} 

module.exports.log = log;
// module.exports.endPoint = url;