$(document).ready(function(){
	$("#xnavbar a").click(function(e){
		var href = $(this).attr("href");
		$("#xtabs a[href='" + href + "']").tab("show");
		e.preventDefault();
		$(document).scrollTop($(href).offset().top - 100);
		// $("#xnavbarbtn").click();
		if ($(window).width()<768) {
			$("#xnavbarbtn").click();
		}
	});
});