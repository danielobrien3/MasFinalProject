$(document).ready(function() { 
	
	var list = $("#list")
	list.slideUp(0)

	$("#genre").hover(function(){
		list.slideDown()
	}, function(){
		list.slideUp()
	});
}); 