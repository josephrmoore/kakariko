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
	// $('body').click(function(){
	// 	checkText();
	// });
	// 
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
		if(kakariko.instruction){
			if(kakariko.canText){
				if(scrollbox.y == -1000){
					scrollbox._text._loadInstructions();
					scrollbox._text.text(scrollbox._text._contents);
					scrollbox.y = 20-Crafty.viewport.y;
					scrollbox._text.y = 25-Crafty.viewport.y;
					scrollbox.x = 100-Crafty.viewport.x;
					scrollbox._text.x = 115-Crafty.viewport.x;
					scrollbox._textOn = true;
					scrollbox._pauseUnpause();
					Crafty.audio.play("text", 1);
				} else {
					scrollbox._paginate();
					Crafty.audio.play("next", 1);
				}
			}
		} else {
			if(kakariko.canText){
				if(scrollbox.y == -1000){
					scrollbox._text._loadTitle(kakariko.sign);
					scrollbox._text.text(scrollbox._text._contents);
					scrollbox.y = 20-Crafty.viewport.y;
					scrollbox._text.y = 25-Crafty.viewport.y;
					scrollbox.x = 100-Crafty.viewport.x;
					scrollbox._text.x = 115-Crafty.viewport.x;
					scrollbox._textOn = true;
					scrollbox._pauseUnpause();
					Crafty.audio.play("text", 1);
				} else {
					scrollbox._paginate();
					Crafty.audio.play("next", 1);
				}
			}
		}
	}
	Crafty.e('2D, DOM, Image')
		.attr({
			x: 1694,
			y: 2200,
			w: 183,
			h: 92,
			z: 10001
	}).image("images/arch.png");
	
	Crafty.e('2D, Canvas, Image')
		.attr({
			x: 1884,
			y: 1944,
			w: 116,
			h: 10,
			z: 10001
	}).image("images/dir.png");
	
	Crafty.e('2D, Canvas, Image, solid')
		.attr({
			x: 1008,
			y: 560,
			w: 74,
			h: 73,
			z: 10000
	}).image("images/bird_base.png");
	
	Crafty.e('2D, DOM, Image')
		.attr({
			x: 1008,
			y: 520,
			w: 74,
			h: 54,
			z: 10001
	}).image("images/bird_top.png");
	
	
	Crafty.e('2D, Canvas, Image, Instruction')
		.attr({
			x: 1880,
			y: 1960,
			w: 183,
			h: 92,
			z: 10001
	});
	
	
	Crafty.audio.stop();
	Crafty.audio.play("kakariko", -1);
});

