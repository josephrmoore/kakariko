Crafty.scene('building', function() {
	Crafty.background('rgb(0, 0, 0)');
	kakariko.createBackground();
	if(!window.kakariko.link){
		kakariko.link = kakariko._link();		
	}
	kakariko.link.attr({x:385, y:400});
	// Crafty.audio.stop();
	// Crafty.audio.play("building_intro", 1);
	// t = setTimeout(function(){
	// 	if(kakariko.shop>0){
	// 		Crafty.audio.stop();
	// 		Crafty.audio.play("building", -1);
	// 	}
	// }, 1940);

	var scrollbox = Crafty.e("2D, DOM, Image, Scrollbox");
	var door = Crafty.e("2D, Canvas, Collision, Color, Door");
	door.attr({
		x: 380,
		y: 550,
		id: 0,
		h: 42,
		w: 42,
		z: 500
	}).collision();

	Crafty.sprite(34, 53, "images/shopkeeps.png", {
	    keep: [0, 0, 34, 53]
	});
	
	var shopkeep = Crafty.e("2D, DOM, Image, SpriteAnimation, keep, solid");
	            shopkeep.attr({ x: 383, y: 290, z: 1000, h:53, w:34 });
	            shopkeep.animate("keep", (kakariko.shop-1)*2, 0, ((kakariko.shop-1)*2)+1);
				shopkeep.animate('keep', 30, -1);
				console.log(kakariko.shop);
	
});
