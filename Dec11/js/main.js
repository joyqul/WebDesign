$(document).ready(function() {
    $("li").eq(0).addClass("add");
	get_con('js/2015.json');
    
	$(".fancybox").fancybox();
	$(window).resize(function() {
		var w = $(window).innerWidth();
		if (w > 768) {
            $("nav").show();
		}
        else {
            $("nav").hide();
        }
	});
    $("li").click(function() {
		var _num = 2015 - $(this).index();
        var _file_name = "js/"+_num+".json";
        get_con(_file_name);

		$(this).addClass("add").siblings().removeClass("add");
		$(".outer").css({"display":"none"}).fadeIn();
    });
    $(".menu").click(function() {
		$("nav").toggle();
	});
	$(".fancybox").fancybox({
		openEffect:'none',
		clossEffect: 'none'
	});
});

function get_con(file_name) {
	$.getJSON(file_name, function(data) {
		$(".picture").empty();
        var html = '<div class="col-8 col-m-6">';
		$.each(data, function(index, en) {
			html += '<a class="fancybox" rel="group" href="' + en['pic'] + '" alt="' + en['title'] + '">';
            if (index == 0) {
                html += '<img src="' + en['pic'] + '"/>';
            }
            html += '</a>';
			
		});
        html += '</div>';
        $(".picture").append(html);
	});
	return false;
}
