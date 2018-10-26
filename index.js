/*
 * Written by Krushn Dayshmookh
 * krushndayshmookh@gmail.com
 *
 */

// Import stuff -----

const express = require('express');
const http = require('http');
const socket = require('socket.io');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');



// Set up globals -----

// 1. web server
var app = express();
var server = http.Server(app);
var io = socket(server);

app.use(express.static('node_modules'));
app.use(express.static('www'));


// 2. serial port
var port = new SerialPort('/dev/tty-usbserial1', {
    baudRate: 9600
}, function (err) {
    if (err) {
        console.error(err);
    }
});

var parser = port.pipe(new Readline({
    delimiter: '\r\n'
}));




// Define routes and events -----

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

parser.on('data', function (data) {
    console.log(data);
    io.emit('data', data);
});



// Debug =====

function emmiter() {
    io.emit("news", {
        hello: "krushn"
    })
}

// ===========

// Start Server -----

server.listen(3000, function () {
    console.log('Listening on port 3000...');
    //setInterval(emmiter, 3000);
});
// WARNING: app.listen(80) will NOT work here!