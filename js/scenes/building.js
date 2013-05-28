Crafty.scene('building', function() {
	Crafty.background('rgb(0, 0, 0)');
	kakariko.createBackground();
	var link = Crafty.e('Link, 2D, Canvas, DOM, Collision').link();
	Crafty.audio.stop();
	Crafty.audio.play("building_intro", 1);
	t = setTimeout(function(){
		Crafty.audio.stop();
		Crafty.audio.play("building", -1);
	}, 1940);
	console.log(link);
	
});
