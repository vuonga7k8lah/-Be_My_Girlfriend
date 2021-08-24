$(document).ready(function() {
    $('a.btn-ok, #msb-nt').click(function() {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
    $(window).resize(function() {
        if (!$('#dialog-box').is(':hidden')) popup();
    });
    $('#msb-nt').click(function() {
        $('#bg').css('display', 'none');
    });
});

function popup(message) {
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var dialogTop = (maskHeight / 3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth / 2) - ($('#dialog-box').width() / 2);
    $('#dialog-overlay').css({ height: maskHeight, width: maskWidth }).show();
    $('#dialog-box').css({ top: dialogTop, left: dialogLeft }).show();
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
    setTimeout(function() {
        let result = confirm('Anh Không Tin Vào Duyên Số,Nhưng Nếu Em Đồng Ý Thì Mình Sẽ Nên Duyên Đó <3');
        if (result) {
            window.location = "https://www.facebook.com/vuongDTTN/";
        }
    }, 20000);
    if (kt == false) {

        kt = true
    } else {}
}

$(document).ready(function() {
    $(document).bind("contextmenu", function(e) {
        return false;
    });
    edenTogleModal();
});
document.addEventListener('click', musicPlay);

function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
}

function edenTogleModal() {
    const btnOpen = document.getElementById('edenOpenModal');
    const panel = document.getElementById('edenModal');
    const edenContent = document.getElementById('edenContent');
    const edenCloseModal = document.getElementById('edenCloseModal');

    if (!btnOpen || !panel) return;
    btnOpen.addEventListener('click', (event) => {
        event.preventDefault();
        panel.classList.toggle('show');
        panel.style.display = "block";
        dongy();
    });
    edenCloseModal.addEventListener('click', (event) => {
        console.log('xxxx')
        event.preventDefault();
        $("#edenModal").attr("style", "display:none");
        panel.classList.remove('show');
        panel.style.display = "nono";
    })


}
setInterval(function() {
    let aColor = ['#FF0000', '#FF7F00', '#FFFF00', '#1aff00', '#0000FF', '#4B0082', '#8F00FF'];
    let randomIndex = Math.floor(Math.random() * aColor.length);
    document.getElementById("title_code").style.color = aColor[randomIndex];
}, 1000)