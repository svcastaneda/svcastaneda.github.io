$(document).ready(function () {
	$(function() {
		$('.window').draggable();
	});
	
	$(".glyph-min").on("click", function(e) {
		$(this).closest(".window").addClass("minimized");
	});
	
	$(".glyph-max").on("click", function(e) {
	});
	
	$(".glyph-close").on("click", function(e) {
	});
});