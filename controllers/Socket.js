
//create function name(params)
module.exports = function (io) {
    io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('recieved message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('sent message', function(msg){
    console.log('message: ' + msg);
  });
});

}


//IO server side stuff happens in here