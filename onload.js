window.onload = function()
{
	var m1 = new Matrix('matrix1', 20, 20);
	m1.create();

	var square = new Square(m1, 1, 2, 'right');
	square.create();

	var aples = new setApple(m1);
	aples.create();

    document.onkeydown = function(e){
	    var event = e || window.event;
	    var keycode = event.keycode || event.which;
	        
	    switch(keycode){
	    	case 37:
	    		square.course = 'left';
	    		break;
    
	    	case 38:
	    		square.course = 'up';
	    		break;
    
	    	case 39:
	    		square.course = 'right';
	    		break;
    
	    	case 40:
	    		square.course = 'down';
	    		break; 
		}
	}	

	setInterval(gameplay, 300);

	function gameplay() {
        if (square.alive) {
			square.move();
			if (square.nyam) {
				square.nyam = false;
				aples.create();
			}
		} else {
		  alert('Game over');
		  m1.create();
		  square.body[0] = 10; square.body[1] = 10;
		  m1.setCell(square.body[0], square.body[1], true);
		  square.alive = true;
		  aples.create();
		}
	}
}		