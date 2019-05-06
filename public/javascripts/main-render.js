/**
 * Everything Related to Rendering the initial map
 */



(function () {
    var name = "BANK";
    setupMap(name);
    setupFloorKeys(name);
})();

function setupMap(name) {
    var $mainScreen = $('#main_map');
    var mData = MAP_DATA[name];
    var mFloors = mData.floors;
    if (mFloors) {
        var html;
        Object.keys(mFloors).forEach(function (key, i) {
            var obj = mFloors[key];
            html = '';
            html += `<div id="floor_${i}" class="floor-wrapper">`;
            html += `<canvas id="paper_${key}" width="2560" height="1440" class="user-canvas">`;
            // html += '        Your browser needs to support canvas for this to work!';
            html += '</canvas>';
            html += `<canvas id="collab_${key}" width="2560" height="1440" class="peer-canvas">`;
            // html += '        Your browser needs to support canvas for this to work!';
            html += '</canvas>';
            html += `<img id="bg_${key}" src="images/${obj.img}" width="2560" height="1440" class="bg-canvas"/>`;
            html += '</div>'; // end floor-wrapper
            $mainScreen.append(html);
        });
    }
    $('.user-canvas').each(function (i, obj) {
        const id = obj.id.split('_')[1];
        const uCanvas = $(`#paper_${id}`)[0].getContext('2d');
        const pCanvas = $(`#collab_${id}`)[0].getContext('2d');
        let mLayer = new MapLayer(i, uCanvas, pCanvas);
        canvases.push(mLayer);
    });
}

function showFloor(numFloors, floor) {
    console.log(`Showing floor: ${floor}`);
    for (var i = 0; i < numFloors; i++) {
        if (i === floor) {
            $(`#floor_${i}`).show();
        } else {
            $(`#floor_${i}`).hide();
        }
    }
    canvases.forEach(function(obj) {
        if (obj.floorNum === floor) {
            currentCanvasCtx = obj.userContext;
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
};

