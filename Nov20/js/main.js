$(document).ready(function(){
	
		$(window).load(function(){
			re_win();
		});
	
	    $(window).resize(function(){
			re_win();		
			location.reload();
		});
		
		$(".box:eq(0)").addClass("ch_bg");
		
		$(".content:eq(0)").show();

        $(".explanation:eq(0)").show();
		
	    $(".box").click(function(){
		
			var _index = $(this).index();
			$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
            $(this).siblings().children().fadeOut();
            $(".explanation").eq(_index).slideDown("slow");
			$(".content").eq(_index).fadeIn().siblings().fadeOut();	
		});
});

function re_win() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    $("section").width(width);
    $("section").height(height);
    $(".content").width(width);
    $(".content").height(height);
}
