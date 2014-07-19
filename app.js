var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);



var game = require(__dirname+'/classes/Game.js');
var gameObj = require(__dirname+'/classes/GameObject.js');

game.addObject(new gameObj.GameObject('object1'));





app.get('/', function(req, res){
	res.sendfile('html/index.html');
});

app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('disconnect', function(){
		console.log('user disconnected');
	});

	socket.on('obj cmd', function(data){
		game.cmd(data);

		io.emit('chat message', data);

	});
});


server.listen(3000);