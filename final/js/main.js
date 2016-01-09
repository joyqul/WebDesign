$(document).ready(function() {
    re_win();
	$(window).resize(function() {
        re_win();
	});
    $(".pics").cycle({
        fx: 'fade'
    });
});

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    $(".black").width(w);
    $(".black").height(h);
    $(".title").css({
        top: Math.floor(h/2)-60
    });
    if (w > 768) {
        $(".title").css({
            left: Math.floor(w/8)
        });
    }
    else {
        $(".title").css({
            left: 20
        });
    }
}
