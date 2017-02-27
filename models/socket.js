
module.exports = (io) => {
    var app = require('express');
    var router = app.Router();
    var userCount = 0;
    // socket.io events
    io.on('connection', function (socket) {
        userCount++;
        console.log('a user connected ' + userCount + ' user(s)');
        socket.on('send', function (msg) {
            stamp = new Date();
            console.log('sending message: ' + 
                        msg.username + ' ' +
                        msg.text)
            io.emit('message', { 
                username: msg.username, 
                text: msg.text, 
                time: stamp.getHours() + ':' + stamp.getMinutes() 
            });
        });
        socket.on('disconnect', function(){
            userCount--;
            console.log('user disconnected ' + userCount + ' user(s)');
        });
    });

    return router;
}