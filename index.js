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
var port0 = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
}, function (err) {
    if (err) {
        console.error(err);
    }
});

var parser0 = port0.pipe(new Readline({
    delimiter: '\r\n'
}));

var port1 = new SerialPort('/dev/ttyACM1', {
    baudRate: 9600
}, function (err) {
    if (err) {
        console.error(err);
    }
});

var parser1 = port1.pipe(new Readline({
    delimiter: '\r\n'
}));

var port2 = new SerialPort('/dev/ttyACM2', {
    baudRate: 9600
}, function (err) {
    if (err) {
        console.error(err);
    }
});

var parser2 = port2.pipe(new Readline({
    delimiter: '\r\n'
}));




// Define routes and events -----

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});


var oldRounds = [0, 0, 0, 0, 0, 0];
var sendableObject = [{
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}];







app.get('/reset', function (req, res) {
    sendableObject = [{
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }];


    sendable = [{
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }, {
        meters: 0,
        kmph: 0
    }];

    oldRounds = [0, 0, 0, 0, 0, 0];

    res.send(true);



    console.log("Reset done.");

    console.log(sendableObject, oldRounds);
});




io.on('connection', function (socket) {
    socket.emit('news', {
        hello: 'world'
    });


});


function presentor(rounds, x) {
    var diff = rounds - oldRounds[x];
    oldRounds[x] = rounds;

    //var m = sendableObject[x].meters + (diff * 2 * 3.14 * 0.30); //this 0.30 is diameter

    sendableObject[x] = {
        meters: rounds * 2 * 3.14 * 0.30,
        kmph: diff * 60 * 60 / 1000
    }
}

parser0.on('data', function (data) {
    //console.log(data);
    data = JSON.parse(data);

    presentor(data[0], 0);
    presentor(data[1], 1);

    // console.log(data);

    // io.emit('data', sendableObject);

    // console.log(sendableObject + " sent.");

});

parser1.on('data', function (data) {
    //console.log(data);
    data = JSON.parse(data);

    presentor(data[0], 2);
    presentor(data[1], 3);

});


parser2.on('data', function (data) {
    //console.log(data);
    data = JSON.parse(data);

    presentor(data[0], 4);
    presentor(data[1], 5);

});


// Debug =====


var sendable = [{
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}, {
    meters: 0,
    kmph: 0
}];

function emmiter() {
    // io.emit('data', sendableObject);
    io.emit('data', sendableObject);

    sendable[1].meters += (Math.random() * 50);
    sendable[1].kmph = ((Math.random() * 4) + 15);
    sendable[0].meters += (Math.random() * 50);
    sendable[0].kmph = ((Math.random() * 4) + 15);
    sendable[2].meters += (Math.random() * 50);
    sendable[2].kmph = ((Math.random() * 4) + 15);
    sendable[3].meters += (Math.random() * 50);
    sendable[3].kmph = ((Math.random() * 4) + 15);
    sendable[4].meters += (Math.random() * 50);
    sendable[4].kmph = ((Math.random() * 4) + 15);


    console.log(JSON.stringify(sendableObject) + " sent. [-- " + JSON.stringify(new Date) + " --]");
}

// ===========

// Start Server -----

server.listen(3450, function () {
    console.log('Listening on port 3450...');
    setInterval(emmiter, 1000);
});
// WARNING: app.listen(80) will NOT work here!