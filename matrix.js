function Matrix(containerId, rows, cols)
{
	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;
	this.create = function()
	{
		var matrix = document.getElementById(this.containerId);
		var n = this.rows * this.cols;	
		
		matrix.innerHTML = '';
		
		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell';
			matrix.appendChild(div);
		}
	}

	this.getCell = function(row, col)
	{
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];
		if (cell.className == 'cell cellcolor') {
			return 'eat';
		}

		if (cell.className == 'cell on') {
			return 'bite';
		} 

		if (cell.className == 'cell') {
			return 'null';
		} 
	}

	this.setCell = function(row, col, val)
	{
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];	
		cell.className = (val ? 'cell on' : 'cell');
	}	
}
		
