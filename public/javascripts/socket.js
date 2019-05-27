// Everything related to Socket Connections

const session = {
    socket: false,   // Main Socket
    userId: false,   // User ID
    color: false,    // Color
    mapName: false,  // Map Name
    roomName: false, // Room Name
    floor: false,    // Floor Number
    clients: {}      // Clients
};

function setupSockets() {
    session.socket = io(); // Initial Socket Connection {event: 'connection'}

    session.socket.on('roomJoined', function (initData) { // {event: 'roomJoined'}
        logger.debug('Joined Room', initData);
        // Setup Session data
        session.userId = initData.userId;
        session.color = initData.color;
        session.mapName = initData.mapName;
        session.roomName = initData.roomName;

        window.location.hash = session.roomName;

        $('#fulcrum_div').css({'background': session.color}); // Indicate User's color
        setupMainMap(session.mapName);
        setupDrawingBoard();
    });

    // Receive data from other clients
    session.socket.on('moving', function (data) { // {event: 'moving'}
        logger.debug("Received: ", data);
        // Send for drawing
        handleMovingData(data);
    });
}

function sendCreateMessage(name, mapName) {
    logger.info(`sendCreateMessage: {name: ${name}, mapName: ${mapName}`);
    session.socket.emit('createRoom', {username: name, mapName: mapName});
}

function sendJoinMessage(name, roomName, roomNotFoundCallback) {
    logger.info(`sendJoinMessage: {name: ${name}, roomName: ${roomName}`);
    session.socket.emit('joinRoom', {username: name, roomName: roomName});
    session.socket.on('roomNotFound', function(data){
        roomNotFoundCallback(data);
    });
}