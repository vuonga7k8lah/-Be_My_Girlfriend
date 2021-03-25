$(document).ready(function () {
    $('a.btn-ok, #msb-nt').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
    $(window).resize(function () {
        if (!$('#dialog-box').is(':hidden')) popup();
    });
});

function popup(message) {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var dialogTop = (maskHeight / 3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth / 2) - ($('#dialog-box').width() / 2);
    $('#dialog-overlay').css({height: maskHeight, width: maskWidth}).show();
    $('#dialog-box').css({top: dialogTop, left: dialogLeft}).show();
    $('#dialog-message').html(message);
}

var kt = false

function move() {
    var x = Math.random() * 500
    var y = Math.random() * 500
    var left = x + 'px'
    var top = y + 'px'
    document.getElementById('lbNo').style.left = left
    document.getElementById('lbNo').style.top = top
}

function dongy() {
    if (kt == false) {

        kt = true
    } else {
    }
}

$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});
document.addEventListener('click', musicPlay);

function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}

$(document).ready(function () {
    $('#msb-nt').click(function () {
        $('#bg').css('display', 'none');
    });
});