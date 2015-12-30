$(document).ready(function() {
    $(".rain").height(50);
    re_win();
	$(window).resize(function() {
        re_win();
	});
    $("h1").mouseenter(function() {
        $("body").css("background-color", "#333");
        $("header").css("background-color", "rgba(255,255,255,.6)");
    });
    $("h1").mouseleave(function() {
        $("body").css("background-color", "#FFF");
        $("header").css("background-color", "rgba(51,51,51,.6)");
    });
});

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
    $("img").height(h);
    $("body").height(h);
    $(".bg").height(h);
    $(".rain").width(w);
    $(".rain").height(h);
}
