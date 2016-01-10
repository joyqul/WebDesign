$(document).ready(function() {
	re_win();
	$(".fancybox").fancybox();
	$(".fancybox").fancybox({
		openEffect:'none',
		clossEffect: 'none'
	});
    $(window).resize(function() {
        re_win();
    });
});

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    var total_h = 0;

    var new_h = Math.max($("#about").height(), h);
    total_h += new_h;
    $("#about").height(new_h);

    new_h = Math.max($("#postcard").height(), h);
    total_h += new_h;
    $("#postcard").height(new_h);

    new_h = Math.max($("#souvenir").height(), h);
    total_h += new_h;
    $("#souvenir").height(new_h);

    $(".black").height(total_h+80*3);

    $(".empty").width(w/8);
    $("section").width(w/8*6);
    $("section").css({
        left: Math.floor(w/8)
    });
    $(".content").css({
        top: Math.floor(h/5)
    });

    for(var i = 0; i < $(".box").size(); i++) {
        $(".year").eq(i).height($(".box").eq(i).height());
    }
}
