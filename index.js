$(document).ready(function() { 
	
	var list = $("#list")
	list.slideUp(0)

	$("#genre").hover(function(){
		list.stop()
		list.slideDown()
	}, function(){
		list.stop()
		list.slideUp()
		
	});
}); 