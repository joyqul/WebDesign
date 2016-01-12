$(document).ready(function() {
    re_win();
    init();
	$(window).resize(function() {
        re_win();
	});
    $(".pics").cycle({
        fx: 'fade'
    });
});

function init() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    if (w <= 768) {
        var images = $("img");
        images.each(function(i) {
            var origin = $(this).attr("src");
            var modify = origin.replace(".", "@small.");
            $(this).attr("src", modify);
        });
        $("img").css({
            height: h
        });
    }
}

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
    $(".page").css({
        height: h
    });
}
