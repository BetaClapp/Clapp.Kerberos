function initialize(io, globals){
	io.sockets.on('connection', function(socket){     

		console.log('-' + socket.id);
	
		/// Welcome to the new client
		socket.emit('Welcome', {SocketId : socket.id});
				
		/* 
		================
		Local functions 
		*/
		
		/// Emit all cranes
		function sendKerberosMessage(){			
			socket.emit('Clapp.Kerberos.Message', {Command : 'KerberosCommand', Values : 1});
		}
		
		/* 
		================
		Socket Intervals
		*/
		/// Emit every 5 seconds cranes
		setInterval(sendKerberosMessage, 5000);
	
		/* 
		================
		Templates for Socket.io
		*/
		/// Template for socket event
		//socket.on('', function(data){
		//  io.sockets.emit('Name', data);
		// socket.emit('ID', {Command: 'CommandID', Values:[{ID: socket.id}]});
		//});
	
	});
		
	console.log('Socket.io initialized');
}

exports.initialize = initialize;