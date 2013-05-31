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
	// Crafty.audio.stop();
	// Crafty.audio.play("kakariko", -1);
});

