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

const COLORS_ARRAY = ['#FFC312', '#C4E538', '#12CBC4', '#FDA7DF', '#ED4C67', '#EE5A24', '#009432', '#0652DD', '#9980FA', '#833471'];
let rooms = {
    main: {
        'name': 'main',
        'colors': [],
        'mapName': "none"
    },
};

let users = {
    // uIJKLh: {id: "", name: "", color: "", socket: null, roomName: ""}
};

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.join('main'); // initially join main room

    socket.on('disconnect', () => console.log("Client disconnected"));

    socket.on('joinRoom', (data) => {
        let room;
        if (data.roomName) {
            if (!(data.roomName in rooms)) {
                socket.emit('roomNotFound', {roomName: data.roomName});
                return;
            }
            room = rooms[data.roomName]
        }
        const color = room.colors.shift();
        const user = newUser(data.username, color, socket);
        users[user.id] = user;
        joinRoom(socket, user, room.name);
        const initData = {
            roomType: room.type,
            userId: user.id,
            color: color,
            mapName: room.mapName,
            roomName: room.name,
            clientName: user.name,
        }; // parameters when a new user joins
        socket.emit('roomJoined', initData); // Send initial data to client
    });

    socket.on('createRoom', (data) => {
        let room;
        if (data.mapName) {
            room = newRoom(data.roomType, data.mapName);
            rooms[room.name] = room;
        }
        const color = room.colors.shift();
        let user = newUser(data.username, color, socket);
        users[user.id] = user;
        joinRoom(socket, user, room.name);
        const initData = {
            roomType: room.type,
            userId: user.id,
            color: color,
            mapName: room.mapName,
            roomName: room.name,
            clientName: user.name,
        }; // parameters when a new user joins
        socket.emit('roomJoined', initData); // Send initial data to client
    });

    // Start listening for mouse move events
    socket.on('mousemove', function (data) {
        // This line sends the event (broadcasts it)
        const roomName = users[data.id].roomName;
        socket.broadcast.to(roomName).emit('moving', data);
    });
});

// Function to join room
function joinRoom(socket, user, roomName) {
    user.socket = socket;
    user.socket.join(roomName);
    user.socket.broadcast.to(roomName).emit('newUser', {
        id: user.id,
        name: user.name,
        color: user.color
    });
    user.roomName = roomName;
    users[user.name] = user;
}

// Function to create new Room Object
function newRoom(roomType, mapName) {
    return {
        'type': roomType,
        'name': Math.random().toString(36).substr(3, 7),
        'mapName': mapName,
        'colors': [...COLORS_ARRAY]
    }
}

// Function to create new User Object
function newUser(name, color, socket) {
    return {
        'id': Math.round(Math.random() * Date.now()).toString(36),
        'name': name,
        'color': color,
        'socket': socket
    }
}