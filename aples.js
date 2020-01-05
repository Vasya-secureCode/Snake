function setApple(m) {
	var that = this;
	that.positionR = 3;
	that.positionC = 3;
	
	that.create = function() {
		var cell;
		var matrix = document.getElementById(m.containerId);
		generate();
	    while (matrix.children[that.positionR * that.positionC].className == 'cell on' ) {
			generate();
		}	
		cell = matrix.children[that.positionR * that.positionC];
	    cell.className = 'cell cellcolor';
	}

	var generate = function() {
		that.positionR = Math.floor(Math.random() * 20);
		that.positionC = Math.floor(Math.random() * 20);
	}
}  