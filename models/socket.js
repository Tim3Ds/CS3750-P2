
module.exports = (io) => {
    var app = require('express');
    var router = app.Router();
    var userCount = 0;
    // socket.io events
    io.on('connection', function (socket) {
        userCount++;
        console.log('a user connected ' + userCount + ' user(s)');
        socket.on('disconnect', function(){
            userCount--;
            console.log('user disconnected ' + userCount + ' user(s)');
        });
    });

    return router;
}