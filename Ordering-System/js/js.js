$(".button-collapse").sideNav();
$("#personnel").click(function(){
	$("#content").html("").load("html/personnel.html");
	$(".button-collapse").sideNav("hide");

})
$("#custom").click(function(){
	$("#content").html("").load("html/custom.html")
	$(".button-collapse").sideNav("hide");
})
$("#group").click(function(){
	$("#content").html("").load("html/group.html");
	$(".button-collapse").sideNav("hide");
})
