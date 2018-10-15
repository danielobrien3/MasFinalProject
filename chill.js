$(document).ready(function() { 

	$(".vid").animate({
		height: "toggle"
	} ,{
		duration: 0
	});

	var songList = $(".song");

	songList.hover(function(){
		$(this).find(".vid").animate({
			height: "toggle"
		} ,{
			duration:400
		});
	}, function(){
		$(this).find(".vid").animate({
			height: "toggle"
		},{
			duration:400
		});
	});
	
});