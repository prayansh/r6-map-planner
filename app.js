var DEV_MODE = false;
var PORT = process.env.PORT || 3000;

/**
 * Sets the DEV_MODE constant for development.
 * Example usage:
 * node server.js --dev
 */
process.argv.forEach(function (value, index, array) {
    if (value === '--dev' || value === '--development') {
        DEV_MODE = true;
    }
});

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var socketIO = require('socket.io');

// var app = express();
// var http = require('http').Server(app);
// var io = socketIO(http);

var app = express();
var server = app.listen(PORT);
var io = socketIO.listen(server);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var colors = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c', '#2ecc71'];

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    // var id = Math.round($.now() * Math.random());
    var color = colors.shift();
    colors.push(color);
    var initData = {color: color}; // parameters when a new user joins
    socket.emit('init', initData);
    // Start listening for mouse move events
    socket.on('mousemove', function (data) {
        // This line sends the event (broadcasts it)
        // to everyone except the originating client.
        console.log('emitting');
        console.log(JSON.stringify(data));
        socket.broadcast.emit('moving', data);
    });
});
