//alert("hello");
// run code once the page has loaded
$(document).ready(function() {
	//alert("hi");
	$("#footer").css("background-color","#00ff00");
	//click link to hide h1 tags
	$("#btremove").click(function() {
		$("#main h1").hide("slow");
	
	});
});