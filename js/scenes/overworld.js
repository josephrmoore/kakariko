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
	
	kakariko.panel = Crafty.e('2D, DOM, Text, DevPanel, Persist').attr({
		x: -1000,
		y: -1000,
		z: 10002
	});
	
	Crafty.e('2D, DOM, Keyboard').bind('KeyDown', function () { 
		if (this.isDown('SPACE')) {
			checkText();
		}
		if (this.isDown('ENTER')) {
			checkText();
		}
		if (this.isDown('3')) {
			if(kakariko._devPanel){
				kakariko._devPanelVisible = !kakariko._devPanelVisible;
				if(kakariko._devPanelVisible){
					// console.log(kakariko.devContents);
					kakariko.panel.x = kakariko.x+20;
					kakariko.panel.y = kakariko.y+20;
					kakariko.link.fourway(0);
					console.log("before insertion: " + kakariko.devContents);
					kakariko.panel.text('<div class="dev">'+kakariko.devContents+'</div>');
				} else {
					console.log("storing after close: "+$('.dev').html());
					kakariko.devContents = $(".dev").html();
					// console.log(kakariko.devContents);
					kakariko.panel.x = -1000;
					kakariko.panel.y = -1000;					
					kakariko.link.fourway(3);
					
				}
			}
		}
		if (this.isDown('A')) {
			if(kakariko._devPanel && kakariko._devPanelVisible){
				kakariko.panel._changeTab(false);
			}
		}
		if (this.isDown('S')) {
			if(kakariko._devPanel && kakariko._devPanelVisible){
				kakariko.panel._changeRow(true);
			}
		}
		if (this.isDown('D')) {
			if(kakariko._devPanel && kakariko._devPanelVisible){
				kakariko.panel._changeTab(true);
			}
		}
		if (this.isDown('W')) {
			if(kakariko._devPanel && kakariko._devPanelVisible){
				kakariko.panel._changeRow(false);
			}
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
	
	var current_music = $(".dev section.music li.selected").attr('id');
	console.log(current_music);
	console.log($(".dev section.music li.selected").attr('id'));
	if(!current_music){
		current_music = "kakariko";
	}
	Crafty.audio.stop();
	Crafty.audio.play(current_music, -1);
});

