$(document).ready(function() {
    re_win();
    $(".fancybox").fancybox();
    $(".label").niceScroll({cursorcolor:"#333",cursorwidth:"10px"});
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
        menu_toggle();
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
        my_width = Math.floor(h/2);
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
            $(".label").animate({
                width: minusEvent,
                left: addEvent
            }, 350);
        }
        else {
            $(".menu").animate({
                top: minusEvent
            }, 350);
            $(".label").animate({
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
            $(".label").animate({
                width: addEvent,
                left: minusEvent
            }, 350);
        }
        else {
            $(".menu").animate({
                top: addEvent
            }, 350);
            $(".label").animate({
                height: addEvent
            }, 350);
        }
    }
    var trans = [ "about", "postcard", "souvenir" ];
    var my_hash_id = change_hash(trans);
    $(".label a").eq(my_hash_id).addClass("chosen").siblings().removeClass("chosen");
}

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    $(".empty").width(w/8);
    $("section").css({
        left: Math.floor(w/8)
    });
    $(".black").outerWidth(w);
    $(".black").outerHeight(h);
    if (w > h) {
        if ($(".menu").hasClass("focus")) {
            $(".label").outerWidth(Math.floor(w/4));
        }
        else {
            $(".label").outerWidth(0);
            $(".label").outerHeight(0);
        }
        $(".menu").css({
            left:w-60-$(".label").outerWidth()
        });
        $(".label").outerHeight(h);
        $(".label").css({
            left: w-$(".label").outerWidth()
        });
    }
    else {
        if ($(".menu").hasClass("focus")) {
            $(".label").outerHeight(Math.floor(h/2));
        }
        else {
            $(".label").outerWidth(0);
            $(".label").outerHeight(0);
        }
        $(".menu").css({
            left:w-60
        });
        $(".label").outerWidth(w);
        $(".label").css({
            top:0+$(".label").outerHeight(),
            left:0
        });
    }
}
