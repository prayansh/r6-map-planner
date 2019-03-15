dragElement(document.getElementById("main_tools"));

// Make buttons appear active in Main Toolbar
$('#main_tools .radio').click(function (_) {
    $('#text_tools').addClass("invisible");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

$('#text_tool').click(function (_) {
    $('#text_tools').removeClass("invisible");
});

(function () {
    let floorVal = 0;
    $("#bg").attr("src", "../images/bank/bank-" + floorVal + ".jpg");
    $('#floor_up_btn').click(function (_) {
        if (floorVal < 3) {
            floorVal = floorVal + 1;
            $("#bg").attr("src", "../images/bank/bank-" + floorVal + ".jpg");
        }
    });
    $('#floor_down_btn').click(function (_) {
        if (floorVal > 0) {
            floorVal = floorVal - 1;
            $("#bg").attr("src", "../images/bank/bank-" + floorVal + ".jpg");
        }
    });
})();

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "_fulcrum")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_fulcrum").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}