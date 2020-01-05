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
			if (square.nyam == 'eat') {
				square.nyam = 'null';
				aples.create();
			}
		} else {
		    alert('Game over');
		    m1.create();
		    square.create();
		    aples.create();
		}
	}
}		