module.exports = function (server) {

    var io = require('socket.io')(server);
    
    var total = 0;
    
    io.on('connection', function(client) {
        
        total++;

        client.emit('userOnline', {total : total});
        client.broadcast.emit('userOnline', {total : total});

        client.on('disconnect', function () {
            total--;
            client.emit('userOnline', {total : total});
            client.broadcast.emit('userOnline', {total : total});
        });    
    });
    
    return io;
};