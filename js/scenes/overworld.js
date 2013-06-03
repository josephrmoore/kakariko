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
	var scrollbox = Crafty.e("2D, DOM, Image, Scrollbox");
	scrollbox.y = -1000;
	scrollbox._text.y = -1000;
	function checkText(){
		if(kakariko.canText){
			if(scrollbox.y == -1000){
				console.log(kakariko.sign);
				scrollbox._text._loadTitle(kakariko.sign);
				scrollbox._text.text(scrollbox._text._contents);
				scrollbox.y = 20-Crafty.viewport.y;
				scrollbox._text.y = 25-Crafty.viewport.y;
				scrollbox.x = 100-Crafty.viewport.x;
				scrollbox._text.x = 115-Crafty.viewport.x;
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

