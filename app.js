var express = require('express')
  , http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
	res.sendfile('html/index.html');
});


io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});


server.listen(3000);