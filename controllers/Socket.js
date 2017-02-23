let userCount = 0;
//create function name(params)
module.exports = function (io) {
  io.on('connection', function(socket){
    userCount++;
    console.log('a user connected ' + userCount + ' user(s)');
    
    socket.on('new message', (msg) => {
      console.log(msg.username + msg.message);
    })

    socket.on('send', (msg) => {
      console.log(msg.user + ' ' + msg.message);
      socket.emit('new message', { username: msg.user, message: msg.message });
    });
    
    socket.on('disconnect', function(){
      userCount--;
      console.log('user disconnected ' + userCount + ' user(s)');
    });
    
  });
}
//IO server side stuff happens in here