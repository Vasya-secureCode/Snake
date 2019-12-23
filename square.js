function Square(m1, row, col, course)
{
	var that = this;
	that.body = [row, col];
	that.course = course;
	that.alive = true; 
	that.nyam = false;
	
	that.create = function()
	{
		m1.setCell(that.body[0], that.body[1], true);
	}
	
	that.move = function()
	{
		var last_body = that.body.slice();
		
		switch(that.course)
		{
			case 'right':
				that.body[1]++;
				break;
			case 'left':
				that.body[1]--;
				break;
			case 'up':
				that.body[0]--;
				break;
			case 'down':
				that.body[0]++;
				break;
		}	

		if (that.body[1] > 20 || that.body[1] < 1 || that.body[0] < 1 || that.body[0] > 20) {
		  that.alive = false;
		} else {
		  that.nyam = m1.getCell(that.body[0], that.body[1]);
		  m1.setCell(last_body[0], last_body[1], false);
		  m1.setCell(that.body[0], that.body[1], true);
		}
	}
}