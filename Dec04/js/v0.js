//JavaScript Document

$(document).ready(function(e) {
	
	$(".box").eq(0).addClass("add");
	
	$(".outer").show(); // AJAX way to load the page
	get_con('js/2015.json');
	
	$(".box").click(function(){	
	
		var _num = 2015 - $(this).index();
        var _file_name = "js/"+_num+".json";
        get_con(_file_name);

		$(this).addClass("add").siblings().removeClass("add");
		$(".outer").css({"display":"none"}).fadeIn();
	});

});

function get_con(file_name) {
	$.getJSON(file_name, function(data) {
		$(".outer").empty();
		$.each(data, function(index, en) {
			var html = '<div class="con">';
			html += '<img src="' + en['pic'] + '" alt="' + en['title'] + '">';
            html += '<a href="' + en['pic'] + '">';
            html += '<div class="black"></div></a>';
			html += '<div class="text">' + en['title'] + '</div>';
			html += '<div class="info">' + en['content'] + '</div>';
            html += '<div class="fav"></div>';
			html += '</div>';
			
			$(".outer").append(html);
		});
	});
	return false;
}
