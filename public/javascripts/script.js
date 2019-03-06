$(function () {
    // This demo depends on the canvas element
    if (!('getContext' in document.createElement('canvas'))) {
        alert('Sorry, it looks like your browser does not support canvas!');
        return false;
    }

    var doc = $(document),
        win = $(window),
        canvas = $('#paper'),
        ctx = canvas[0].getContext('2d'),
        instructions = $('#instructions');

    // Generate an unique ID
    var id = Math.round($.now() * Math.random());

    // A flag for drawing activity
    var drawing = false;

    var clients = {};
    var cursors = {};

    var socket = io();
    var userColor = '#fff';
    var ModeEnums = {PAINT: 1, ERASE: 2};
    var mode = ModeEnums.PAINT;

    document.addEventListener('keydown', function (event) {
        // Do something with the captured event.keyCode
        console.log(event.keyCode);
        if (event.code === 'KeyQ') {//Q
            mode = ModeEnums.PAINT;
        } else if (event.code === 'KeyW') {//W
            mode = ModeEnums.ERASE;
        } else if (event.code === 'KeyR') {
            drawText(prev.x, prev.y, 0, "text", userColor);
        }
        return false;
    }, false);

    socket.on('init', function (initData) {
        // id = initData.id;
        userColor = initData.color;
    });

    // Receive data from other clients
    socket.on('moving', function (data) {

        if (!(data.id in clients)) {
            // a new user has come online. create a cursor for them
            cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
        }

        // Move the mouse pointer
        cursors[data.id].css({
            'left': data.x,
            'top': data.y
        });

        // Is the user drawing?
        if (data.drawing && clients[data.id]) {

            // Draw a line on the canvas. clients[data.id] holds
            // the previous position of this user's mouse pointer

            drawLine(clients[data.id].x, clients[data.id].y, data.x, data.y, data.color);
        }

        // Saving the current client state
        clients[data.id] = data;
        clients[data.id].updated = $.now();
    });

    var prev = {
        x: 100,
        y: 100
    };

    canvas.on('mousedown', function (e) {
        e.preventDefault();
        drawing = true;
        prev.x = e.pageX;
        prev.y = e.pageY;

        // Hide the instructions
        instructions.fadeOut();
    });

    doc.bind('mouseup mouseleave', function () {
        drawing = false;
    });

    var lastEmit = $.now();

    doc.on('mousemove', function (e) {
        if ($.now() - lastEmit > 30) {
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'drawing': drawing,
                'id': id,
                'color': userColor,
            });
            lastEmit = $.now();
        }

        // Draw a line for the current user's movement, as it is
        // not received in the socket.on('moving') event above

        if (drawing) {
            if (mode === ModeEnums.PAINT) {
                drawLine(prev.x, prev.y, e.pageX, e.pageY, userColor);
            } else if (mode === ModeEnums.ERASE) {
                erase(e.pageX, e.pageY);
            }

            prev.x = e.pageX;
            prev.y = e.pageY;
        }
    });

    // Remove inactive clients after 10 seconds of inactivity
    setInterval(function () {

        for (ident in clients) {
            if ($.now() - clients[ident].updated > 10000) {

                // Last update was more than 10 seconds ago.
                // This user has probably closed the page

                cursors[ident].remove();
                delete clients[ident];
                delete cursors[ident];
            }
        }

    }, 10000);

    function drawLine(fromx, fromy, tox, toy, color) {
        console.log("Drawing line: " + color);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(fromx, fromy);
        ctx.lineTo(tox, toy);
        ctx.stroke();
        ctx.closePath();
    }

    function erase(xpos, ypos) {
        context.fillStyle = 'rgba(0,0,0,0)';
        context.fill();
    }

    function drawText(xpos, ypos, rotation, text, color) {
        console.log("Drawing text: ");
        ctx.save();
        ctx.font = "54px Arial";
        ctx.fillStyle = color;
        ctx.rotate(rotation);
        ctx.translate(xpos, ypos);
        ctx.textAlign = "center";
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }
});