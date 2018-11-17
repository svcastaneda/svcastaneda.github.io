$(document).ready(function () {
	var zIndex = 3;
	
	$(function() {
		$(".window").draggable({
			cancel: ".windowCtrls",
			handle: ".title-bar",
			stack: ".window"
		});
	});
	
	$(".window").on("mousedown", function(e) {
		$(this).css({"z-index": zIndex});
		zIndex++;
	});
	
	$(".glyph-min").on("click", function(e) {
		$(this).closest(".window").addClass("minimized");
		$(this).closest(".window").removeClass("maximized");
		$(this).closest(".window").removeClass("closed");
	});
	
	$(".glyph-max").on("click", function(e) {
		$(this).closest(".window").addClass("maximized");
	});
	
	$(".glyph-close").on("click", function(e) {
		$(this).closest(".window").css('visibility', 'hidden');
	});
	
	$(".icon").on("click", function(e) {
		var n = $(this).attr("name");
		$("#" + n).css({"display": "inline-block", "visibility": "initial", "z-index": zIndex});
		zIndex++;
	});
	
	$("#helpLauncher").on("click", function(e) {
		$("#help").css({"display": "inline-block", "visibility": "initial", "z-index": zIndex});
		zIndex++;
	});
});