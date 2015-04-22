var express = require('express')
var app = express();
var http = require('http').Server(app);

var webPort = 3568;

// start http server
http.listen(webPort);

// serve the /static folder, by default at /
app.use(express.static(__dirname + '/static'));

// serve bower components under bower_components
app.use('/bower_components', express.static(__dirname + '/bower_components'));

console.log('listening for http on', webPort);
