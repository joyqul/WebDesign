$(document).ready(function(){

	$(window).load(function(){
		re_win();

        for (var _index = 0; _index < $(".rabbit").length; _index++) {
            AnimateRotate(_index*2+0, ".ear", 0, -5);
            AnimateRotate(_index*2+1, ".ear", 0, 5);
            AnimateRotate(_index, ".lhand", 20, 25);
            AnimateRotate(_index, ".rhand", -20, -25);
            // function AnimateMotion(id, part, delta_height, delta_width, delta_top, delta_left) {
            AnimateMotion(_index, ".body", -10, 0, 20, 0);
            AnimateMotion(_index*2+0, ".ear", 0, 0, 20, 0);
            AnimateMotion(_index*2+1, ".ear", 0, 0, 20, 0);
            AnimateMotion(_index*2+0, ".eye", -14, 0, 27, 0);
            AnimateMotion(_index*2+1, ".eye", -14, 0, 27, 0);
            AnimateMotion(_index, ".nose", -2, 0, 20, 0);
            AnimateMotion(_index, ".mouse", -4, 0, 20, 0);
            AnimateMotion(_index, ".lhand", 0, 0, 20, 0);
            AnimateMotion(_index, ".rhand", 0, 0, 20, 0);
            AnimateMotion(_index*2+0, ".leg", -10, 2, 10, -1);
            AnimateMotion(_index*2+1, ".leg", -10, 2, 10, -1);
        }

        AnimateMotion(0, ".sniff", 20, 20, -10, 0);
        AnimateRotate(0, ".lear", 0, -5);
        AnimateRotate(0, ".rear", 0, -5);
        AnimateMotion(0, ".lear", 0, 0, 0, -5);
        AnimateMotion(0, ".rear", 0, 0, 0, -5);
	});

	$(window).resize(function(){
		re_win();	
		var _index = $("div.focus").index();
		slide(_index);
	});

	$(".box:eq(0)").addClass("focus");

	$(".box").click(function(){
		var _index = $(this).index();
		$(this).addClass("focus").siblings().removeClass("focus");
		slide(_index);
	});

	$(window).scroll(function(){
		var _win_sc = $(window).scrollTop();
        var _index = $("div.focus").index();
        _new_index = change_focus(_win_sc);
		$(".box").eq(_new_index).addClass("focus").siblings().removeClass("focus");
	});

});

function get_height(_index) {
	return _index*window.innerHeight;
}

function re_win(){

	var w = window.innerWidth;
	var h = window.innerHeight;
    var _num = $(".content").length;

    $("section").width(w);
    $("section").height(h*_num);
	$(".content").width(w);
	$(".content").height(h);

    $(".content_box").height(Math.floor(h*0.8));
    $(".content_box").width(Math.floor(w*0.8));
    $(".content_box").css({
        top: (h-Math.floor(h*0.8))/2,
        left: (w-Math.floor(w*0.8))/2
    });

    var _rabbit_num = $(".rabbit").length;
    $(".rabbit").css({
        top: $(".content_box").height()-$(".rabbit").height(),
        left: $(".content_box").width()-$(".rabbit").width()*_rabbit_num
    });

    $(".sleep").css({
        top: $(".content_box").height()-$(".sleep").height(),
        left: $(".content_box").width()-$(".sleep").width()
    });

    $("aside").css({top: h/2-$("aside").height()/2});
}

function slide(_index) {
	var top_s = get_height(_index);	
	$("html, body").animate({scrollTop: top_s}, 1000);
}

function change_focus(_win) {
	var h = window.innerHeight;
	return Math.floor((_win+h/2)/h);
}

function scroll_index(_index, delta) {
    var _num = $(".content").length;
    return (_index+delta+_num)%_num;
}

/******************************************
 ************* Rabbit part ****************
 ******************************************/

function AnimateRotate(id, part, ori, angle) {
    var $elem = $(part).eq(id);
    $({deg: ori}).animate({deg: angle}, {
        duration: 1000,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
    window.setTimeout(function(){AnimateRotate(id, part, angle, ori)}, 1000);
}

function make_delta_form(delta) {
    var ans;
    if (delta > 0) ans = "+=";
    else ans = "-=";
    ans += String(Math.abs(delta));
    return ans;
}

function AnimateMotion(_index, part, delta_height, delta_width, delta_top, delta_left) {
    var new_top = make_delta_form(delta_top);
    var new_left = make_delta_form(delta_left);
    var new_height = make_delta_form(delta_height);
    var new_width = make_delta_form(delta_width);
    $(part).eq(_index).animate({
        top: new_top,
        left: new_left,
        height: new_height,
        width: new_width
    }, 1000);
    window.setTimeout(function(){AnimateMotion(_index, part, -delta_height, -delta_width, -delta_top, -delta_left)}, 1000);
}
