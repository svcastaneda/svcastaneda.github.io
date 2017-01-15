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
	
	$(".menu-item").on("click", function(e) {
		$("#startMenu").hide();
		$("#startBtn").removeClass("inset");
	});
	
	var updateTime = function() {
	  setTimeout(updateTime, 1000);
	  var now = new Date();
		var time = now.toLocaleTimeString("en-US", { hour: 'numeric', minute: 'numeric', hour12: true });

	  $("#time").text(time);
	}
	
	updateTime();
});