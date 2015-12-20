$(document).ready(function() {
    re_win();
	$(window).resize(function() {
        re_win();
	});
    $("h1").mouseenter(function() {
        $("body").css("background-color", "#BBB");
    });
    $("h1").mouseleave(function() {
        $("body").css("background-color", "#333");
    });
});

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    $("img").height(h);
    $("body").height(h);
    $(".bg").height(h);
    $(".box").css({
        top: (h-Math.floor(h*0.4))
    });
    
    $(".rain").css({
        top: $(".box").position().top-$(".rain").height(),
        left: w-$(".rain").width()
    });
}
