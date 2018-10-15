$(document).ready(function() { 
	
	var list = $("#list")
	list.slideUp(0)

	$("#topTen").hover(function(){
		list.slideDown()
	}, function(){
		list.slideUp()
	});
}); 