function Square(m1, row, col, course)
{
	var that = this;
	that.body = [[row, col]];
	that.course = course;
	that.alive = true; 
	that.nyam = 'null';
	
	that.create = function()
	{
		if (!that.alive) {
			that.body = [[10, 10]];
			that.alive = true;
		}
		m1.setCell(that.body[0][0], that.body[0][1], true);
	}
	
	that.move = function()
	{
		var head = that.body[0].slice();
		
		switch(that.course)
		{
			case 'right':
				head[1]++;
				break;
			case 'left':
				head[1]--;
				break;
			case 'up':
				head[0]--;
				break;
			case 'down':
				head[0]++;
				break;
		}	

		that.body.unshift(head);

		if (that.body[0][1] > 20 || that.body[0][1] < 1 || that.body[0][0] < 1 || that.body[0][0] > 20) {
		  that.alive = false;
		} else {
		    that.nyam = m1.getCell(that.body[0][0], that.body[0][1]);
		    if (that.nyam == 'null') { 
				var tail = that.body.pop();
			    m1.setCell(tail[0], tail[1], false);
			}
			if (that.nyam == 'bite') { 
				that.alive = false;
		    }
		    m1.setCell(that.body[0][0], that.body[0][1], true);
		}
	}
}