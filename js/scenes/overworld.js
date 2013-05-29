Crafty.scene('overworld', function() {
	Crafty.background("rgb(0,0,0)");
	var link = Crafty.e('Link, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown').link();
	if(kakariko.shop > 0){
		link.attr({
			x:kakariko.projects[(kakariko.shop-1)].x+100,
			y:kakariko.projects[(kakariko.shop-1)].y+200,
		});
		kakariko.shop=0;
	}
	kakariko.createBackground();
	kakariko.populateShops();
	Crafty.audio.stop();
	Crafty.audio.play("kakariko", -1);
});

