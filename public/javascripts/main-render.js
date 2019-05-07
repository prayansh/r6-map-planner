/**
 * Everything Related to Rendering the initial map
 */

(function () {
    var name = "CLUBHOUSE";
    setupMap(name);
    setupFloorKeys(name);
    setupOperatorIcons();
})();

function setupMap(name) {
    var $mainScreen = $('#main_map');
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
    var mData = MAP_DATA[name];
    const length = Object.keys(mData.floors).length;
    showFloor(length, 0);
    $('#floor_up_btn').click(function (_) {
        floor = Math.min(length - 1, floor + 1);
        showFloor(length, floor);
    });
    $('#floor_down_btn').click(function (_) {
        floor = Math.max(0, floor - 1);
        showFloor(length, floor);
    });
}

function setupOperatorIcons() {
    let html = '';
    const $list = $('#iconList');
    const size = 48;
    OP_LIST.forEach(function (op) {
        const opName = capitalizeFirstLetter(op);
        html = '';
        html += `<li class="icon-list-item">`;
        html += `<img src="images/operator/${op}.svg" height="${size}px" width="${size}px">`;
        html += `${opName}`;
        html += `</li>`;
        $list.append(html);
    });

    $('#iconList .icon-list-item').click(function(_) {
        $that = $(this);
        logger.info(`${$that.value}`);
        $that.parent().find('li').removeClass('active');
        $that.addClass('active');
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

