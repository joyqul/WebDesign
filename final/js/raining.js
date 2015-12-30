$(document).ready(function() {
    if ($(window).innerWidth() > 1200) {
        add_raindrop(Math.floor($(".rain").width()/10.5));
        for (var _index = 0; _index < $(".raindrop").length; _index++) {
            AnimateMotion(_index, ".raindrop", 0, 0, $(".rain").height(), 0);
        }
    }
    if ($(window).innerWidth() > 1200 && $(".box").length == 0) {
        $(".rain").show();
        setTimeout(function() {
            $(".rain").fadeOut();
        }, 3000);
    }
    if ($(window).innerWidth() <= 1200) {}
    else if ($(".box").length > 0) {
        $("h1").mouseenter(function() {
            $(".rain").show();
        });
        $("h1").mouseleave(function() {
            $(".rain").hide();
        });
    }
    else {
        $("h1").mouseenter(function() {
            $(".rain").show();
            setTimeout(function() {
                $(".rain").fadeOut();
            }, 3000);
        });
    }
});

function add_raindrop(number) {
    for (var _index = 0; _index < number; _index++) {
        var html = '<div class="raindrop"></div>';
        $(".rain").append(html);
    }
    return false;
}

function make_delta_form(delta) {
    var ans;
    if (delta > 0) ans = "+=";
    else ans = "-=";
    ans += String(Math.abs(delta));
    return ans;
}


function AnimateMotion(_index, part, delta_height, delta_width, delta_top, delta_left) {
    var gap = _index*10;
    var _width = Math.floor((Math.random()-Math.random())*5);
    $(part).eq(_index).css({
        top: 0,
        left: gap
    });
    var _delay = Math.floor((Math.random() * 2000) + 1)
    var new_top = make_delta_form(delta_top);
    var new_left = make_delta_form(delta_left);
    var new_height = make_delta_form(delta_height);
    var new_width = make_delta_form(delta_width);
    $(part).eq(_index).animate({
        top: new_top,
        left: new_left,
        height: new_height,
        width: new_width
    }, _delay);
    window.setTimeout(function(){AnimateMotion(_index, part, delta_height, _width, delta_top, delta_left)}, _delay+100);
}
