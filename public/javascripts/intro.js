// Everything related to the Intro Scene
function showIntroDom() {
    $('#app_dom').hide();
    $('#intro_dom').show();
    let $optionsGroup = $('#intro_options_group');
    let $joinGroup = $('#intro_join_group');
    let $createGroup = $('#intro_create_group');

    let html = '';
    const GAME_DATA = Object.keys(DATA);
    GAME_DATA.forEach(function (key, _) {
        html += `<option value="${key}">${key}</option>`;
    });
    $createGroup.find('#choose_game').append(html);

    $('#choose_game').on('change', function() {
        console.log(this.value)
        $createGroup.find('#create_map').empty();
        let genHtml = '';
        const MAP_DATA = DATA[this.value].MAPS;
        Object.keys(MAP_DATA).forEach(function (key, _) {
            genHtml += `<option value="${key}">${key}</option>`;
        });
        console.log("PRAY", genHtml);
        $createGroup.find('#create_map').append(genHtml);
    });

    $optionsGroup.show();
    $joinGroup.hide();
    $createGroup.hide();

    $('#opt_join').click(() => {
        $optionsGroup.hide();
        $joinGroup.show();
    });

    $('#opt_create').click(() => {
        $optionsGroup.hide();
        $createGroup.show();
    });

    $joinGroup.find('button').click(() => {
        // Verify Fields
        let $joinName = $('#join_name');
        let $joinRoom = $('#join_room');
        $joinName.removeClass('is-invalid');
        $joinRoom.removeClass('is-invalid');
        if ($joinName.val().length === 0) {
            $joinName.addClass('is-invalid');
            return;
        }
        if ($joinRoom.val().length === 0) {
            $joinRoom.addClass('is-invalid');
            return;
        }
        $joinGroup.hide();
        const userName = $joinName.val();
        const roomName = $joinRoom.val();

        // Send socket Event
        sendJoinMessage(userName, roomName, (data) => {
            $joinGroup.show();
            $joinRoom.addClass('is-invalid');
        });
    });

    $createGroup.find('button').click(() => {
        // Verify Fields
        let $createName = $('#create_name');
        let $createMap = $('#create_map');
        let $chooseGame = $('#choose_game');
        $createName.removeClass('is-invalid');
        $chooseGame.removeClass('is-invalid');
        $createMap.removeClass('is-invalid');

        const roomType = $chooseGame.val();
        if (roomType.length === 0 || !Object.keys(DATA).some((map) => equalsIgnoreCase(map, roomType))) {
            $chooseGame.addClass('is-invalid');
            return;
        }

        const mapName = $createMap.val();
        const MAP_DATA = DATA[roomType].MAPS;
        if (mapName.length === 0 || !Object.keys(MAP_DATA).some((map) => equalsIgnoreCase(map, mapName))) {
            $createMap.addClass('is-invalid');
            return;
        }

        const userName = $createName.val();
        if (userName.length === 0) {
            $createName.addClass('is-invalid');
            return;
        }

        $createGroup.hide();

        // Send socket Event
        sendCreateMessage(userName, roomType, mapName);
    });
}