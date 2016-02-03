$(document).ready(function() {
    $("li").eq(0).addClass("add");
    get_con("js/2015.json");
    
    $("li").click(function() {
		var _num = 2015 - $(this).index();
        var _file_name = "js/"+_num+".json";
        get_con(_file_name);

		$(this).addClass("add").siblings().removeClass("add");
		$(".outer").css({"display":"none"}).fadeIn();
    });
});

function get_con(file_name) {
	$.getJSON(file_name, function(data) {
		$("aside").empty();
        var html = '<img src="' + data[0]['pic']+'"/>';
        $("aside").append(html);
	});
	return false;
}
