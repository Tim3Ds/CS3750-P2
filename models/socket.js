
module.exports = (io) => {
    var app = require('express');
    var router = app.Router();
    var userCount = 0;
    // socket.io events
    io.on('connection', function (socket, req) {
        userCount++;
        console.log('a user connected ' + userCount + ' user(s)');
        socket.emit('message',{
            username: 'Chat It Up', 
            text: 'Welcome to Chat', 
            time: new Date().toLocaleTimeString().substring(0, 5) + ' ' + new Date().toLocaleTimeString().substring(9, 11)
        });
        io.emit('message', {
            username: 'Chat It Up', 
            text: req.user.username + 'has joined Chat', 
            time: new Date().toLocaleTimeString().substring(0, 5) + ' ' + new Date().toLocaleTimeString().substring(9, 11)
        });
        socket.on('send', function (msg) {
            var stamp = new Date().toLocaleTimeString();
            console.log('sending message: ' + 
                        msg.username + ' ' +
                        msg.text + ' ' +
                        stamp.substring(0, 5) + ' ' + stamp.substring(9, 11)
                )
            io.emit('message', { 
                username: msg.username, 
                text: msg.text, 
                time: stamp.substring(0, 5) + ' ' + stamp.substring(9, 11)
            });
        });
        socket.on('disconnect', function(){
            userCount--;
            console.log('user disconnected ' + userCount + ' user(s)');
            io.emit('message',{
                username: 'Chat It Up', 
                text: req.user.username + 'has left Chat', 
                time: new Date().toLocaleTimeString().substring(0, 5) + ' ' + new Date().toLocaleTimeString().substring(9, 11)
            });
        });
    });

    return router;
}