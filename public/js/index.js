var socket = io();
$('form').submit(function(){
	socket.emit('obj cmd', {
		id:'object1',
		cmd:{
			name:'move',
			params:['n']
		}
	});
	return false;
});
socket.on('obj cmd', function(msg){
	$('#messages').append($('<li>').text(msg));
});