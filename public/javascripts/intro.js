// Everything related to the Intro Scene

function showIntroDom() {
    $('#app_dom').hide();
    $('#intro_dom').show();
    let $joinGroup = $('#intro_join_group');
    let $createGroup = $('#intro_create_group');
    let $optionsGroup = $('#intro_options_group');

    let html = '';
    Object.keys(MAP_DATA).forEach(function (key, _) {
        html += `<option value="${key}">${key}</option>`;

    });
    $createGroup.find('select').append(html);

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
        $createName.removeClass('is-invalid');
        $createMap.removeClass('is-invalid');
        if ($createName.val().length === 0) {
            $createName.addClass('is-invalid');
            return;
        }
        const mapName = $createMap.val();
        if (mapName.length === 0 || !Object.keys(MAP_DATA).some((map) => equalsIgnoreCase(map, mapName))) {
            $createMap.addClass('is-invalid');
            return;
        }
        $createGroup.hide();
        const userName = $createName.val();

        // Send socket Event
        sendCreateMessage(userName, mapName);
    });
}