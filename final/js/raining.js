$(document).ready(function() {
    if ($(window).innerWidth() > 1200) {
        add_raindrop(20);
        for (var _index = 0; _index < $(".raindrop").length; _index++) {
            AnimateMotion(_index, ".raindrop", 0, 0, 150, 0);
        }
    }
    $("h1").mouseenter(function() {
        if ($(window).innerWidth() > 1200) {
            $(".raindrop").show();
        }
    });
    $("h1").mouseleave(function() {
        if ($(window).innerWidth() > 1200) {
            $(".raindrop").hide();
        }
    });
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
    $(part).eq(_index).css({
        top: 0,
        left: gap
    });
    var _delay = Math.floor((Math.random() * 4000) + 1)
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
    window.setTimeout(function(){AnimateMotion(_index, part, delta_height, delta_width, delta_top, delta_left)}, _delay+100);
}
