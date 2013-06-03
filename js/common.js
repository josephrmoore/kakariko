(function() {
	window.kakariko = window.kakariko || {};
	// console.log(Crafty.timer);
	kakariko.shop = 0;
	kakariko.sign = 0;
	kakariko.signs = [];
	// Crafty.timer.simulateFrames(8);
	kakariko.canText = false;
	kakariko.checkText = function(){
		var scrollbox = Crafty.e("2D, DOM, Image, Scrollbox");
		scrollbox.y = -1000;
		scrollbox._text.y = -1000;
		function checkText(){
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
	};
	
	kakariko.projects = [
		{
			'id' : 1,
			'name' : 'Fatalatour',
			'scene' : 'fatalatour',
			'tagline' : 'Get shot in LA and have fun doing it.',
			'text' : "<a href=\"http://google.com\">Lorem Ipsum</a> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			'images' : [
				'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'
			],
			'x' : 100,
			'y' : 100,
			'skin' : "images/building.png"
		}, 
		{
			'id' : 2,
			'name' : 'Battle for Boobland',
			'scene' : 'boobland',
			'tagline' : 'Defend Boobland from the coarse hairy invaders of Manland.',
			'text' : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			'images' : [
				'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg'
			],
			'x' : 300,
			'y' : 300,
			'skin' : "images/building_red.png"
		}, 
		{
			'id' : 3,
			'name' : 'Kill/Create',
			'scene' : 'kill-create',
			'tagline' : 'Whether you choose life or death, it ends in extinction.',
			'text' : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			'images' : [
				'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg'
			],
			'x' : 500,
			'y' : 500,
			'skin' : "images/building_brown.png"
		}
	];
		
	kakariko._link = function(){
		var link = Crafty.e('Link, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown, Persist').link();
		return link;
	};
	
	kakariko.populateShops = function(){
		for(var i=0; i<kakariko.projects.length; i++){
			var door = Crafty.e("2D, Canvas, Collision, Color, Door");
			var building = Crafty.e("2D, Canvas, Collision, Image, solid, Building");
			building.attr({
				x: kakariko.projects[i].x,
				y: kakariko.projects[i].y,
				h: 172,
				w: 220,
				z: 400,
			}).collision().image(kakariko.projects[i].skin);
			door.attr({
				x: building.x+90,
				y: building.y+135,
				id: kakariko.projects[i].id,
				h: 42,
				w: 42,
				z: 500
			}).collision();
			var sign = Crafty.e("2D, Canvas, Collision, Image, Sign");
			sign.attr({
				x: kakariko.projects[i].x+15,
				y: kakariko.projects[i].y+183,
				w: 36,
				h: 37,
				z: 400,
				"id": i+1
			}).collision().image("images/sign.png");
			kakariko.signs.push(sign);
		}
	};

	// this drops the background into any scene that calls this function
	kakariko.createBackground = function() {
		if(kakariko.shop > 0) {
			this._createBackgroundViaImage();
		} else {
			this._createBackgroundViaTiles();
		}
	};

	kakariko._createBackgroundViaImage = function() {
		var img = "images/shop" + kakariko.shop + ".png";
		Crafty.sprite(1, img, {
			bg: [0, 0, 600, 600]
		});

		// drop the background in
		Crafty.e('2D, DOM, bg, background').attr({ x: 100, y: 0 });
	};

	kakariko._createBackgroundViaTiles = function() {
		Crafty.sprite(38, 'images/tiles1.gif', {
			"plain" : [0,0],
			"grass_top" : [1,0],
			"grass_middle" : [2,0],
			"flower" : [3,0],
			"border_bottom" : [4,0],
			"border_top" : [5,0],
			"paved_green" : [0, 1],
			"grass_down" : [1, 1],
			"paved_red" : [2,1],
			"stone" : [3,1],
			"border_left" : [4,1],
			"border_right" : [5,1]
		});
		

		// 80x80

		var o = 'plain';
		var t = 'grass_top';
		var x = 'grass_middle';
		var i = 'flower';
		var n = 'border_bottom';
		var u = 'border_top';
		var N = 'paved_green';
		var k = 'grass_down';
		var M = 'paved_red';
		var ø = 'stone';
		var ǝ = 'border_left';
		var e = 'border_right';
		var A = 'images/bush.png';
		var W = 'images/flower.png';
		var R = 'images/peg.png';
		var Y = 'images/stump.png';
		var G = 'images/stake_h.png';
		var X = 'images/stake_v.png';
		var B = 'images/tree_green.png';
		var Z = 'images/tree_purple.png';
		
		var bg = [
			[u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u],
			[ǝ,o,R,o,o,o,o,o,o,o,Y,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,W,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,ø,o,o,o,o,o,o,o,o,t,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,ø,o,o,o,o,k,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,e],
			[B,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[B,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[B,o,B,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[Y,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[B,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[B,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[Y,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,t,o,o,o,o,o,e],
			[B,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,e],
			[Y,o,Z,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,X,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,x,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,x,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,o,o,e],
			[ǝ,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,i,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,ǝ,n,n,n,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,N,N,N,N,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,N,N,N,N,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,N,N,N,N,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,e,N,N,N,N,N,N,N,N,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,u,u,u,u,u,u,u,u,t,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e],
			[ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e]

		];

		for(var y = 0; y < bg.length; ++y) {
			for(var x = 0; x < bg[y].length; ++x) {
				if(bg[y][x] == A || bg[y][x] == W || bg[y][x] == R || bg[y][x] == Y || bg[y][x] == G || bg[y][x] == X || bg[y][x] == B || bg[y][x] == Z){
					var width, height;
					if(bg[y][x] == Y){
						width = 73;
						height = 74;
					} else if (bg[y][x] == X){
						width = 19;
						height = 57;
					} else if (bg[y][x] == B || bg[y][x] == Z){
						width = 147;
						height = 184;
					} else {
						width = 38;
						height = 38;
					}
					
					Crafty.e('2D, Canvas, background, plain')
						.attr({
							x: x* kakariko.TILE_SIZE,
							y: y* kakariko.TILE_SIZE
					});
					Crafty.e('2D, Canvas, Image, solid')
						.attr({
							x: x* kakariko.TILE_SIZE,
							y: y* kakariko.TILE_SIZE,
							w: width,
							h: height,
							z: 1000
					}).image(bg[y][x]);
				} else {
					Crafty.e('2D, Canvas, background, ' + bg[y][x])
						.attr({
							x: x* kakariko.TILE_SIZE,
							y: y* kakariko.TILE_SIZE
					});
				}
			}
		}
	};

})();

