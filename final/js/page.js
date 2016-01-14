$(document).ready(function() {
    re_win();
    $(".fancybox").fancybox();
    $("nav").niceScroll({cursorcolor:"#333",cursorwidth:"10px"});
    $(".fancybox").fancybox({
        openEffect:'none',
        clossEffect: 'none'
    });
    $(window).resize(function() {
        re_win();
    });
    $(".black").click(function() {
        menu_toggle();
    });
    $(".menu").click(function() {
        menu_toggle();
    });
    $(".paragraph").click(function() {
        var target = $(this).attr("alt");
        var top_s = $(target).offset().top;
        $("html, body").animate({scrollTop: top_s}, 1000);
        menu_toggle();
    });
    $(".top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});

function change_hash(trans) {
    var window_offset = $(window).scrollTop();
    for (var i = trans.length-1; i >= 0; i--) {
        var focus_obj = "#"+trans[i];
        if (window_offset >= $(focus_obj).offset().top-200) {
            document.location.hash = trans[i];
            return i;
        }
    }
    return 0;
}

function menu_toggle() {
    var h = $(window).innerHeight();
    var w = $(window).innerWidth();
    var my_width = Math.floor(w/4);
    if (h >= w) {
        my_width = Math.floor(h/4*3);
    }
    var addEvent = "+=";
    var minusEvent = "-=";
    addEvent += my_width;
    minusEvent += my_width;
    if($(".menu").hasClass("focus")){
        $(".menu").removeClass("focus");
        $(".black").fadeOut();
        if (w > h) {
            $(".menu").animate({
                left: addEvent
            }, 350);
            $("nav").animate({
                width: minusEvent,
                left: addEvent
            }, 350);
        }
        else {
            $(".menu").animate({
                top: minusEvent
            }, 350);
            $("nav").animate({
                height: minusEvent
            }, 350);
        }
    }
    else {
        $(".menu").addClass("focus");
        $(".black").fadeIn();
        if (w > h) {
            $(".menu").animate({
                left:minusEvent
            }, 350);
            $("nav").animate({
                width: addEvent,
                left: minusEvent
            }, 350);
        }
        else {
            $(".menu").animate({
                top: addEvent
            }, 350);
            $("nav").animate({
                height: addEvent
            }, 350);
        }
    }
    var trans = [ "about", "TNR", "postcard", "souvenir" ];
    var my_hash_id = change_hash(trans)+1;
    $("nav a").eq(my_hash_id).addClass("chosen").siblings().removeClass("chosen");
}

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    $(".empty").width(w/10);
    $("section").css({
        left: Math.floor(w/10)
    });
    $(".black").outerWidth(w);
    $(".black").outerHeight(h);
    if (w > h) {
        if ($(".menu").hasClass("focus")) {
            $("nav").outerWidth(Math.floor(w/4));
        }
        else {
            $("nav").outerWidth(0);
            $("nav").outerHeight(0);
        }
        $(".menu").css({
            top: 20,
            left:w-60-$("nav").outerWidth()
        });
        $("nav").outerHeight(h);
        $("nav").css({
            left: w-$("nav").outerWidth()
        });
    }
    else {
        if ($(".menu").hasClass("focus")) {
            $("nav").outerHeight(Math.floor(h/4*3));
        }
        else {
            $("nav").outerWidth(0);
            $("nav").outerHeight(0);
        }
        $(".menu").css({
            top: 20+$("nav").outerHeight(),
            left:w-60
        });
        $("nav").outerWidth(w);
        $("nav").css({
            top:0,
            left:0
        });
    }
}
