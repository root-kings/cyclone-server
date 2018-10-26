var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static('node_modules'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', {
        hello: 'world'
    });

    socket.on('my other event', function (data) {
        console.log(data);
    });
});


server.listen(3000, function(){
    console.log('Listening on port 3000...');
});
// WARNING: app.listen(80) will NOT work here!
