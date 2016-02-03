$(document).ready(function() {
    re_win();
	$(window).resize(function() {
        re_win();
	});
});

function re_win() {
    var w = $(window).innerWidth();
    var h = $(window).innerHeight();
}
