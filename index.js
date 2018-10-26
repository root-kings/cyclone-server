var express = require('express');
var app = express();
var server = require('http').Server(app);
var socket = require('socket.io');
var io = socket(server);

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/tty-usbserial1', {
    baudRate: 9600
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
parser.on('data', function(data){
    console.log(data);
    io.emit(data);
});


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


function emmiter() {
    io.emit("news", {
        hello: "krushn"
    })
}

server.listen(3000, function(){
    console.log('Listening on port 3000...');
    setInterval(emmiter, 3000);
});
// WARNING: app.listen(80) will NOT work here!
