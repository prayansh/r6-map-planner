$(function () {
    // This demo depends on the canvas element
    if (!('getContext' in document.createElement('canvas'))) {
        alert('Sorry, it looks like your browser does not support canvas!');
        return false;
    }

    var doc = $(document),
        win = $(window),
        $mainMap = $('#main_map')
    ;

    // Generate an unique ID
    var id = Math.round($.now() * Math.random());

    // A flag for mouseDown activity
    var mouseDown = false;

    var clients = {};
    var cursors = {};

    var socket = io();
    var userColor = '#fff';
    var ModeEnums = {PEN: 1, TEXT: 2, SELECT: 3, SHAPE: 4};
    var mode = ModeEnums.SELECT;

    $('#pen_tool').click(function (_) {
        mode = ModeEnums.PEN;
    });
    $('#move_tool').click(function (_) {
        mode = ModeEnums.SELECT;
    });
    $('#text_tool').click(function (_) {
        mode = ModeEnums.TEXT;
    });
    $('#shape_tool').click(function (_) {
        mode = ModeEnums.SHAPE;
    });
    $('#erase_tool').click(function (_) {
        // delete selected object from canvas
        if (currentLayer.canvasState.selection) {
            currentLayer.canvasState.remove(currentLayer.canvasState.selection);
            currentLayer.canvasState.invalidate();
            currentLayer.canvasState.deselect();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (mode !== ModeEnums.TEXT) {
            // Do something with the captured event.keyCode
            logger.debug(`keyCode: ${event.keyCode}, code: ${event.code}`);
            if (event.code === 'KeyQ') { // Q
                $("#move_tool").trigger("click");
            } else if (event.code === 'KeyW') { // W
                $("#pen_tool").trigger("click");
            } else if (event.code === 'KeyE') { // E
                $("#text_tool").trigger("click");
            } else if (event.code === 'Backspace') { // Backspace
                $("#erase_tool").trigger("click");
            } else if (event.code === 'KeyZ') { // Z
                // move toolbar to mouse coordinates
                $("#main_tools").css({top: prev.y, left: prev.x, position:'absolute'});
            } else if (event.code === 'KeyJ') { // Z
                // move toolbar to mouse coordinates
                $("#floor_down_btn").trigger("click");
            } else if (event.code === 'KeyK') { // Z
                // move toolbar to mouse coordinates
                $("#floor_up_btn").trigger("click");
            }
        }
        return false;
    }, false);

    socket.on('init', function (initData) {
        // id = initData.id;
        userColor = initData.color;
        $('#fulcrum_div').css({'background': userColor});
    });

    function redrawPeerCanvas() {
        // Clear All Peer Canvases
        Object.keys(mapLayers).forEach(function(key){
            mapLayers[key].peerContext.clearRect(0, 0, 2560, 1440);
        });
        Object.keys(clients).forEach(function (id) {
            let data = clients[id].layerData;
            Object.keys(data).forEach(function(floorNum){
                const clientColor = clients[id].color;
                let canvasState = data[floorNum];
                canvasState.pathList.forEach(function (path) {
                    var p = new PathRender(0, 0, clientColor);
                    p.pointsNotDrawn = path.points;
                    p.draw(mapLayers[floorNum].peerContext);
                });
                canvasState.textList.forEach(function (text) {
                    var t = new TextRender(text.fontSize, text.x, text.y, 0, text.text, clientColor);
                    t.draw(mapLayers[floorNum].peerContext);
                });
            });
        });
    }

    // Receive data from other clients
    socket.on('moving', function (data) {
        logger.debug("Received: ", data);

        if (!(data.id in clients)) {
            // a new user has come online. create a cursor for them
            cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
        }

        // Move the mouse pointer
        cursors[data.id].css({
            'left': data.x,
            'top': data.y
        });

        // Saving the current client state
        clients[data.id] = data;
        clients[data.id].updated = $.now();
        redrawPeerCanvas();
    });

    var prev = {
        x: 100,
        y: 100
    };

    $mainMap.on('mousedown', function (e) {
        e.preventDefault();
        var mX = e.pageX - $mainMap.offset().left;
        var mY = e.pageY - $mainMap.offset().top;
        mouseDown = true;
        switch (mode) {
            case ModeEnums.PEN: {
                var p = new PathRender(mX, mY, userColor);
                currentLayer.canvasState.addPath(p);
            }
                break;
            case ModeEnums.SHAPE: {

            }
                break;
            case ModeEnums.TEXT: {
                const fontSize = $("#text_tool_size").val();
                const text = $("#text_tool_data").val();
                if (text) {
                    var t = new TextRender(fontSize, mX, mY, 0, text, userColor);
                    currentLayer.canvasState.addText(t);
                    t.draw(currentLayer.userContext);
                }
            }
                break;
            case ModeEnums.SELECT: {
                logger.debug(`(${mX}, ${mY})`);
                var newSelected = false;
                // Check for path selection
                currentLayer.canvasState.pathList.forEach(function (p) {
                    if (p.contains(mX, mY)) {
                        var mySel = p;
                        // Keep track of where in the object we clicked
                        // so we can move it smoothly (see mousemove)
                        currentLayer.canvasState.dragStartX = mX;
                        currentLayer.canvasState.dragStartY = mY;
                        currentLayer.canvasState.dragging = true;
                        currentLayer.canvasState.selection = mySel;
                        currentLayer.canvasState.valid = false;
                        newSelected = true;
                    }
                });
                if (!newSelected) { // Check for text selection
                    currentLayer.canvasState.textList.forEach(function (t) {
                        if (t.contains(mX, mY)) {
                            var mySel = t;
                            // Keep track of where in the object we clicked
                            // so we can move it smoothly (see mousemove)
                            currentLayer.canvasState.dragStartX = mX;
                            currentLayer.canvasState.dragStartY = mY;
                            currentLayer.canvasState.dragging = true;
                            currentLayer.canvasState.selection = mySel;
                            currentLayer.canvasState.valid = false;
                            newSelected = true;
                        }
                    });
                }
                if (!newSelected && currentLayer.canvasState.selection) {
                    currentLayer.canvasState.deselect()
                }
            }
                break;
        }
    });


    doc.bind('mouseup mouseleave', function () {
        mouseDown = false;
        currentLayer.canvasState.dragging = false;
    });

    var lastEmit = $.now();

    function canvasStateToData(canvasState) {
        var data = {};
        data.pathList = [];
        canvasState.pathList.forEach(function (path) {
            var p = {};
            p.points = path.points;
            data.pathList.push(p);
        });
        data.textList = [];
        canvasState.textList.forEach(function (text) {
            var t = {};
            t.x = text.x;
            t.y = text.y;
            t.fontSize = text.fontSize;
            t.text = text.text;
            data.textList.push(t);
        });
        return data;
    }

    function layerToData(mapLayers) {
        var dataObj = {};
        Object.keys(mapLayers).forEach(function(i){
            let layer = mapLayers[i];
            dataObj[layer.floorNum] = canvasStateToData(layer.canvasState);
        });
        logger.debug("Sending: ", dataObj);
        return dataObj;
    }

    doc.on('mousemove', function (e) {
        // e.preventDefault();
        var mX = e.pageX;
        var mY = e.pageY;
        if ($.now() - lastEmit > 60) {
            // Prototype for User Data
            socket.emit('mousemove', {
                'x': e.pageX,
                'y': e.pageY,
                'id': id,
                'color': userColor,
                'layerData': layerToData(mapLayers),
            });
            lastEmit = $.now();
        }

        // Draw a line for the current user's movement, as it is
        // not received in the socket.on('moving') event above

        if (mouseDown) {
            switch (mode) {
                case ModeEnums.PEN:
                    var p = currentLayer.canvasState.pathList[currentLayer.canvasState.pathList.length - 1];
                    p.addPoint(e.pageX, e.pageY);
                    p.draw(currentLayer.userContext);
                    break;
                case ModeEnums.SHAPE:
                    break;
                case ModeEnums.TEXT:
                    break;
                case ModeEnums.SELECT:
                    if (currentLayer.canvasState.dragging) {
                        // We don't want to drag the object by its top-left corner,
                        // we want to drag from where we clicked.
                        // Thats why we saved the offset and use it here
                        var dx = mX - currentLayer.canvasState.dragStartX;
                        var dy = mY - currentLayer.canvasState.dragStartY;
                        currentLayer.canvasState.dragStartX = mX;
                        currentLayer.canvasState.dragStartY = mY;
                        currentLayer.canvasState.selection.displace(dx, dy);
                        currentLayer.canvasState.invalidate(); // Something's dragging so we must redraw
                    }
                    break;
            }

        }
        prev.x = e.pageX;
        prev.y = e.pageY;
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

    // Redraw check
    setInterval(function () {
        currentLayer.canvasState.draw(currentLayer.userContext); // check for invalidation here
    }, 30);  //maybe longer interval???
});