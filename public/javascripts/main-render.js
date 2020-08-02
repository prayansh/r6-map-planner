/**
 * Everything Related to Rendering the initial map
 */

const DATA = require('./data.json');

function setupMainMap(mapName) {
    $('#app_dom').show();
    setupMap(mapName);
    setupFloorKeys(mapName);
    setupOperatorIcons();
    setupGadgetIcons();
}

function setupMap(name) {
    var $mainScreen = $('#main_map');
    const MAP_DATA = DATA[session.roomType].MAPS;
    var mData = MAP_DATA[name];
    var mFloors = mData.floors;
    if (mFloors) {
        var html;
        Object.keys(mFloors).forEach(function (key) {
            let obj = mFloors[key];
            let i = mFloors[key].floorNum;
            html = '';
            html += `<div id="floor_${i}" class="floor-wrapper">`;
            html += `<canvas id="paper_${i}" width="${SCREEN_WIDTH}" height="${SCREEN_HEIGHT}" class="user-canvas">`;
            // html += '        Your browser needs to support canvas for this to work!';
            html += '</canvas>';
            html += `<canvas id="collab_${i}" width="${SCREEN_WIDTH}" height="${SCREEN_HEIGHT}" class="peer-canvas">`;
            // html += '        Your browser needs to support canvas for this to work!';
            html += '</canvas>';
            html += `<img id="bg_${i}" src="images/${obj.img}" width="${SCREEN_WIDTH}" height="${SCREEN_HEIGHT}" class="bg-canvas"/>`;
            html += '</div>'; // end floor-wrapper
            $mainScreen.append(html);
        });
    }
    $('.user-canvas').each(function (i, obj) {
        const id = obj.id.split('_')[1];
        const userCanvas = $(`#paper_${id}`)[0];
        const uCanvas = userCanvas.getContext('2d');
        const pCanvas = $(`#collab_${id}`)[0].getContext('2d');
        mapLayers[id] = new MapLayer(id, uCanvas, pCanvas, userCanvas);
    });
}

function showFloor(numFloors, floor) {
    logger.info(`Showing floor: ${floor}`);
    for (var i = 0; i < numFloors; i++) {
        if (i === floor) {
            $(`#floor_${i}`).show();
        } else {
            $(`#floor_${i}`).hide();
        }
    }
    Object.keys(mapLayers).forEach(function (i) {
        let layer = mapLayers[i];
        if (parseInt(layer.floorNum) === floor) {
            currentLayer = layer;
        }
    });
}

function setupFloorKeys(name) {
    const MAP_DATA = DATA[session.roomType].MAPS;
    var mData = MAP_DATA[name];
    const length = Object.keys(mData.floors).length;
    showFloor(length, 0);
    $('#floor_up_btn').click(function (_) {
        session.floor = Math.min(length - 1, session.floor + 1);
        showFloor(length, session.floor);
    });
    $('#floor_down_btn').click(function (_) {
        session.floor = Math.max(0, session.floor - 1);
        showFloor(length, session.floor);
    });
}

function setupOperatorIcons() {
    let html = '';
    const $list = $('#iconList');
    const size = 48;
    const OP_LIST = DATA[session.roomType].OPERATORS;
    OP_LIST.forEach(function (op) {
        const opIcon = op.icon;
        const opName = capitalizeFirstLetter(op.name);
        html = '';
        html += `<li class="icon-list-item">`;
        html += `<img id="${opName}Icon" src="images/${opIcon}" draggable="false" height="${size}px" width="${size}px">`;
        html += `${opName}`;
        html += `</li>`;
        $list.append(html);
    });

    $('#iconList .icon-list-item').click(function(_) {
        $that = $(this);
        logger.debug(`${$that.value}`);
        $that.parent().find('li').removeClass('active');
        $that.addClass('active');
    });
}

function setupGadgetIcons() {
    let html = '';
    const $list = $('#gadgetIcons');
    const size = 48;
    const GADGET_DATA = DATA[session.roomType].GADGETS;
    GADGET_DATA.forEach(function (gadget) {
        const gadgetName = gadget.name;
        const gadgetIcon = gadget.icon;
        html = '';
        html += `<li class="icon-list-item">`;
        html += `<img id="${gadgetName}Icon" src="images/${gadgetIcon}" draggable="false" height="${size}px" width="${size}px">`;
        html += `${gadgetName}`;
        html += `</li>`;
        $list.append(html);
    });

    $('#gadgetIcons .icon-list-item').click(function(_) {
        $that = $(this);
        logger.debug(`${$that.value}`);
        $that.parent().find('li').removeClass('active');
        $that.addClass('active');
    });
}

class MapLayer {
    constructor(floorNum, userContext, peerContext, userCanvas) {
        this.floorNum = floorNum;
        this.userContext = userContext;
        this.peerContext = peerContext;
        this.canvasState = new CanvasState(userCanvas);
    }
}