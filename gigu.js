var $gigu = null

$(document).ready(function () {
    initialize()
    event_gigu()
});

function initialize() {
    $gigu = $('#gigu')
}

function event_gigu() {
    $("#btnStart").click(function () {
        var x = parseInt($("#txtX").val())
        var y = parseInt($("#txtY").val())
        moveGigu(x, y)
    })
}

function moveGigu(x, y) {
    if ((x >= 0 && x <= 500) && (y >= 0 && y <= 400)) {
        $gigu.css({
            left: x,
            top: y
        })
    } else {
        alert("The entered value was over range")
    }
}