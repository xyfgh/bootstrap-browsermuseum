$(function(){
	var i=0;
	$("#xnavbar a").click(function(e){
		var href = $(this).attr("href");
		$("#xtabs a[href='" + href + "']").tab("show");
		e.preventDefault();
		$(document).scrollTop($(href).offset().top - 100);
		if ($(window).width()<768) {
			$("#xnavbarbtn").click();
		}
		console.log(++i);
	});
});