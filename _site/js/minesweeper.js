$(document).ready(function() {
	var board = [];
	
	var newBoard = function(size) {
		board = [];
		addMines();
	}
	
	var buildBoard = function(size) {
		var table = $("#minesweeper");
		var boardHTML = "";//newBoard(size);
		
		table.innerHTML = "";
		
		for (var row = 0; row < size; row++) {
			boardHTML += "<tr>"
			for (var col = 0; col < size; col++) {
				boardHTML += "<td>@</td>"
			}
			boardHTML += "</tr>"
		}
		table.append(boardHTML);
	}
	
	
	var addMines = function() {
		var ms = mines(10);
		
		// for () {
//
// 		}
	}
	
	var mines = function(numMines) {
		var spots = board;
		var m = [];
		
		for (var mine = 0; mine < numMines; mine++, numMines--) {
			var spot = mine; // pick random index from board (spots)
			m; // add spot to mine list (m)
			// remove spot from board (spots)
		}
		
		return m;
	}
	
	var init = function(size) {
		buildBoard(size);
		addMines();
	}
	
	var revealSpot = function() {
		
	}
	
	var revealBoard = function() {
		
	}
	
	init(10);
});