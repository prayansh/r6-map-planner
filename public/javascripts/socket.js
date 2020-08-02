// Everything related to Socket Connections

const session = {
    socket: false,   // Main Socket
    userId: false,   // User ID
    color: false,    // Color
    mapName: false,  // Map Name
    roomName: false, // Room Name
    floor: false,    // Floor Number
    username: false, // Username
    clients: {},     // Clients
    roomType: '',    // Room Type (either R6 or VALORANT)
};

function setupSockets() {
    session.socket = io(); // Initial Socket Connection {event: 'connection'}

    session.socket.on('roomJoined', function (initData) { // {event: 'roomJoined'}
        logger.debug('Joined Room', initData);
        // Setup Session data
        session.roomType = initData.roomType;
        session.userId = initData.userId;
        session.color = initData.color;
        session.mapName = initData.mapName;
        session.roomName = initData.roomName;
        session.username = initData.clientName;

        window.location.hash = session.roomName;

        $('#fulcrum_div').css({'background': session.color}); // Indicate User's color
        setupMainMap(session.mapName);
        setupDrawingBoard();
        refreshClientList({});
    });

    // Receive data from other clients
    session.socket.on('moving', function (data) { // {event: 'moving'}
        logger.debug("Received: ", data);
        // Send for drawing
        handleMovingData(data);

        // Refresh Client List
        refreshClientList(session.clients);
    });
}

function sendCreateMessage(name, roomType, mapName) {
    logger.debug(`sendCreateMessage: {name: ${name}, mapName: ${mapName}`);
    session.socket.emit('createRoom', {username: name, roomType: roomType, mapName: mapName});
}

function sendJoinMessage(name, roomName, roomNotFoundCallback) {
    logger.debug(`sendJoinMessage: {name: ${name}, roomName: ${roomName}`);
    session.socket.emit('joinRoom', {username: name, roomName: roomName});
    session.socket.on('roomNotFound', function(data){
        roomNotFoundCallback(data);
    });
}

function emitMovingData(x, y, userId, color, layerData, username) {
    const data = {
        'x': x,
        'y': y,
        'id': userId,
        'color': color,
        'layerData': layerData,
        'username': username,
    };
    logger.debug("Sending Data", data);
    session.socket.emit('mousemove', data);
}