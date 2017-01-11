// document.onready = function() {
// 	document.getElementById("startBtn").toggle = function() {
// 		document.getElementById("startMenu").style.display = "initial";
// 	}
// }

$(document).ready(function () {
	$("#startBtn").on("click", function(e) {
		$("#startMenu").toggle();
		$("#startBtn").toggleClass("inset");
	});
});