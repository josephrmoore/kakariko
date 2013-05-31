Crafty.scene('overworld', function() {
	Crafty.background("rgb(0,0,0)");
	kakariko.populateShops();
	if(!window.kakariko.link){
		kakariko.link = kakariko._link();		
	}
	if(kakariko.shop > 0){
		kakariko.link.attr({
			x:kakariko.projects[(kakariko.shop-1)].x+100,
			y:kakariko.projects[(kakariko.shop-1)].y+200,
		});
		kakariko.shop=0;
	}
	kakariko.createBackground();
	$('body').click(function(){
		checkText();
	});
	
	Crafty.e('2D, DOM, Keyboard').bind('KeyDown', function () { 
		if (this.isDown('SPACE')) {
			checkText();
		}
		if (this.isDown('ENTER')) {
			checkText();
		}
	});
	function checkText(){
		var scrollbox = Crafty.e("2D, DOM, Image, Scrollbox");
		scrollbox.y = -1000;
		scrollbox._text.y = -1000;
		if(kakariko.canText){
			if(scrollbox.y == -1000){
				scrollbox.y = 20;
				scrollbox._text.y = 25;
				scrollbox._textOn = true;
				scrollbox._pauseUnpause();
			} else {
				scrollbox._paginate();
			}
		}
	}
	// Crafty.audio.stop();
	// Crafty.audio.play("kakariko", -1);
});

