$(document).ready(function() { 



	$(".vidContainer").animate({
		height: "toggle"
	} ,{
		duration: 0
	});


	var songList = $(".song");

	songList.click(function(){
		$(this).find(".vidContainer").stop()
		$(this).find(".vidContainer").animate({
			height: "toggle"
		} ,{
			duration:400
		})
		$(this).find(".vidContainer").scrollIntoView()

	}, function(){
		$(this).find(".vidContainer").stop()
		$(this).find(".vidContainer").animate({
			height: "toggle"
		} ,{
			duration:400
		})
	});


	//Make .vid stay open if its video is playing, even if the mouse scrolls out

	
	
});

