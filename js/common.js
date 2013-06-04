(function() {
	window.kakariko = window.kakariko || {};
	// console.log(Crafty.timer);
	kakariko.shop = 0;
	kakariko.sign = 0;
	kakariko.signs = [];
	kakariko.visited = [];
	// Crafty.timer.simulateFrames(8);
	kakariko.canText = false;
	kakariko.instruction = false;
	
	kakariko._godMode = false;
	kakariko._devPanel = true;
	kakariko.secrets = [];
	kakariko._devPanelVisible = true;
	
	kakariko._openDevControls = function(){
		console.log("dev controls opened.");
	};
	
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
			'name' : 'Budget Battle',
			'scene' : 'budget',
			'tagline' : 'Battle for control of our Nation\'s budget.',
			'text' : "Budget Battle is a game that lets you see for yourself how effective the current state of politics is by pitting a mad government slasher against a starry-eyed optimist who's willing to do whatever to see that \"the right thing\" is done. One person cuts, the other passes new laws, and absolutely nothing of value gets done. But if you please your party, you can be re-elected for another \"24 month\" round. Budget Battle uses a couple of the simplest possible circuits and an arduino. The scissors just have a wire on each tine that touch when you bring them closed. The voting button is an arcade button set inside a flashlight case for ease of holding.<br /><a href=\"https://github.com/josephrmoore/budgetbattle\" target=\"_blank\">Git Repo</a><br /><a href=\"https://vimeo.com/66378902\" target=\"_blank\">Watch video</a><br /><br /><br />It's a secret to everyone, but there's money under that bush. If only you had a sword. Can you believe you are the FIRST person I've ever told?",
			'images' : [
				'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'
			],
			'x' : 1406,
			'y' : 540,
			'skin' : "images/building.png"
		}, 
		{
			'id' : 2,
			'name' : 'Battle for Boobland',
			'scene' : 'boobland',
			'tagline' : 'Defend Boobland from the coarse hairy invaders of Manland.',
			'text' : "Battle for Boobland is a NES hack of Super Mario Brothers. The game centers around Dangl, a perverted sunflower with a bent neck to look down girls' shirts. He lives in Boobland, and all is well. But one day, Boobland is invaded by Commander Cock's evil army from Manland. Help your feminine friends and repel that Cock's forces to keep Boobland the way it should be, which is full of boobs. Just boobs. <a href=\"http://josephrogermoore.com/8bit/boobland.zip\" target=\"_blank\">Downlad/emulate/play (ZIP file)</a><br /><a href=\"https://vimeo.com/66621907\" target=\"_blank\">Watch video</a><br />I don't know why I'm telling you this, but I feel like sharing... Using that flower to decorate my house is the SECOND best idea I've ever had.",
			'images' : [
				'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg'
			],
			'x' : 532,
			'y' : 540,
			'skin' : "images/building_red.png"
		}, 
		{
			'id' : 3,
			'name' : 'Kill/Create',
			'scene' : 'kill-create',
			'tagline' : 'Whether you choose life or death, it ends in extinction.',
			'text' : "KILL/CREATE is a gestural interface game that pits a creator against a killer to decide who gets to destroy the world their way, either through decimation or overpopulation. The game uses a Kinect to detect both players. Once both players are found, the game begins. Each player controls a paddle bar at the top of the screen that moves left and right when they do. One paddle will breed mature polygons on the screen so that they multiply at an alarming rate. The other player can kill polygons of any age at any time. The two players have to strafe back and forth, trying to either fill the screen with polygons or eliminate them all. When the population reaches a maximum threshold or 0, the game ends with the creator and killer winning, respectively.<br /><a href=\"https://github.com/josephrmoore/cclabFinal\" target=\"_blank\">Git Repo</a><br /><a href=\"https://vimeo.com/66660683\" target=\"_blank\">Watch video</a><br /><br /><br />Before you go I want to tell you something... I haven't fixed that horizontal fence since my nephew broke it on the FOURTH of July.",
			'images' : [
				'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg'
			],
			'x' : 540,
			'y' : 1984,
			'skin' : "images/building_brown.png"
		},
		{
			'id' : 4,
			'name' : 'Mind Controller',
			'scene' : 'mind',
			'tagline' : 'Make it move... with the power of your mind!',
			'text' : "Mind Controller is an experiment in using the brain as a controller for a video game with a single boolean switch (concentrating enough/not concentrating enough). Inspired mostly by LEGO Star Wars, where you build sculptures with scattered pieces by \"using the force\", putting it together in mid-air, the game I built lets you build structures with your mind. Using an Arduino connected to the MindFlex toy brainwave reader, the game measures your concentration levels and if you are concentrating enough, you will put the pieces together, and if not they will fall (or on the easier mode, stop moving). You win when all the pieces are in place, effectively building a structure with your mind.<br /><a href=\"https://vimeo.com/66616298\" target=\"_blank\">Watch video</a><br /><br /></br />I wanna let you know... the vertical fence is good for privacy. Like pleading the FIFTH.",
			'images' : [
				'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'
			],
			'x' : 722,
			'y' : 1528,
			'skin' : "images/building.png"
		},
		{
			'id' : 5,
			'name' : 'Modern Monopoly',
			'scene' : 'monopoly',
			'tagline' : 'A way to play that\'s more honest than the original.',
			'text' : "Modern Monopoly is reflection on modern day capitalism and the role of banking in the system. I started with the idea of making a more realistic version of capitalism than the rosy \"anyone can be a Rockefeller\" story that traditional Monopoly tells. I created a new board and system of rules that enforces different rules and privileges to those with more or less money. There are financial thresholds (cash & property) that determined if you were rich, poor, or middle class. One player would always start rich, one would always start poor, and the rest would start middle class. But if you gain or lose enough you can move from one class to another. In addition, rich players were afforded luxuries and advantages not available to the other players. The rich player gets a private viewing station with digital board and the banker takes care of all his financial transitions for him and gives private advice concerning purchases and strategy. Above all else, the bank serves help the rich player cheat. In the manual I created to give direction to whoever is playing the bank, I state this explicitly. There is also an inner track that is only advantageous for the poor player to navigate. There are numerous small opportunities for the poor player to get ahead, and dangers for the middle class and rich players if they ever go in there. It can be useful to escape paying rent, to duck into the slum, however, if you have money you are always at risk for robbery or worse.<br /><a href=\"http://josephrogermoore.com/studio/ModernMonopoly.zip\" target=\"_blank\">Download Materials</a><br />But before you go, let me share a secret with you... I keep that post out front because it looks nice. It wasn't my first choice of decoration, it was my THIRD.",
			'images' : [
				'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'
			],
			'x' : 1406,
			'y' : 1528,
			'skin' : "images/building_red.png"
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
		Crafty.sprite(38, 'images/tiles2.gif', {
			"plain" : [0,0],
			"grass_top" : [1,0],
			"grass_middle" : [2,0],
			"flower" : [3,0],
			"border_bottom" : [4,0],
			"border_top" : [5,0],
			"border_corner_bottom_left" : [6,0],
			"border_corner_bottom_right" : [7,0],
			"paved_green" : [0, 1],
			"grass_down" : [1, 1],
			"paved_red" : [2,1],
			"stone" : [3,1],
			"border_left" : [4,1],
			"border_right" : [5,1],
			"border_corner_top_left" : [6,1],
			"border_corner_top_right" : [7,1]
		});
		

		// 60x60

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
		var a = 'border_corner_bottom_left';
		var s = 'border_corner_bottom_right';
		var q = 'border_corner_top_left';
		var w = 'border_corner_top_right';
		var A = 'images/bush.png';
		var W = 'images/flower.png';
		var R = 'images/peg.png';
		var Y = 'images/stump.png';
		var G = 'images/stake_h.png';
		var X = 'images/stake_v.png';
		var B = 'images/tree_green.png';
		var Z = 'images/tree_purple.png';
		var U = "one"; // bush
		var I = "two"; // flower
		var J = "three"; // peg
		var K = "four"; // stake_h
		var L = "five"; // stake_v
		
		var bg = [
			[B,o,o,Z,o,o,B,o,o,B,o,o,B,o,o,B,o,o,B,o,o,Z,o,o,B,o,o,B,o,o,Z,o,o,B,o,o,Z,o,o,B,o,o,Z,o,o,B,o,o,B,o,o,B,o,o,B,o,o,B,o,o],
			[o,o,o,o,o,o,o,Z,o,o,o,o,o,o,o,o,B,o,o,o,o,o,o,Z,o,o,o,o,o,o,o,B,o,o,o,o,o,o,B,o,o,o,o,o,o,o,o,o,o,Z,o,o,o,o,o,o,o,o,o,B],
			[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,i,o,o],
			[B,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o],
			[o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,B],
			[o,o,o,o,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,k,o,o,o,i,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,k,o,o,ø,o,o,o,o,o,o,i,o,W,W,W,o,o],
			[B,o,o,o,o,o,o,o,o,t,o,ø,o,o,o,o,o,t,o,o,o,o,x,o,o,ø,t,o,o,o,o,i,o,o,o,o,o,x,o,k,o,o,i,o,o,o,o,o,o,o,o,k,o,o,o,W,W,W,o,o],
			[o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,i,o,o,o,k,o,o,o,t,o,o,x,o,o,o,o,o,o,t,o,o,o,o,o,o,k,o,o,o,o,t,o,o,o,o,o,t,o,o,W,W,W,o,B],
			[o,o,o,o,o,o,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o,o,t,o,o,o,W,W,W,o,o],
			[Z,o,o,o,ø,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,o,x,o,W,W,W,x,o],
			[o,o,o,i,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,o,o,o,o,k,o,o,Z],
			[o,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,i,o,o,x,o,o,o,t,o],
			[B,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o],
			[o,o,o,t,o,e,N,N,N,N,q,u,u,u,u,u,u,u,u,u,w,N,N,q,u,u,u,u,u,u,u,w,N,N,q,u,u,u,u,u,u,u,u,u,w,N,N,N,N,ǝ,o,o,o,t,o,W,W,W,W,B],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,k,o,e,N,N,ǝ,L,M,M,M,M,M,L,e,N,N,ǝ,o,o,x,o,o,o,o,o,i,e,N,N,N,N,ǝ,o,o,o,o,o,A,A,A,A,o],
			[B,o,o,o,x,e,N,N,N,N,ǝ,o,o,W,o,o,o,o,o,i,e,N,N,ǝ,L,M,M,M,M,M,L,e,N,N,ǝ,k,o,o,o,o,o,t,o,o,e,N,N,N,N,ǝ,o,t,o,A,t,o,o,x,o,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,e,N,N,ǝ,M,M,M,M,M,M,M,e,N,N,ǝ,o,o,t,o,o,o,x,o,o,e,N,N,N,N,ǝ,o,o,o,t,o,i,o,o,o,Z],
			[o,o,o,i,o,e,N,N,N,N,ǝ,o,o,t,o,o,o,o,t,o,e,N,N,ǝ,M,K,M,M,M,K,M,e,N,N,ǝ,t,o,o,o,o,o,o,o,t,e,N,N,N,N,ǝ,k,o,o,o,ø,o,o,o,k,o],
			[Z,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,e,N,N,ǝ,M,M,M,M,M,M,M,e,N,N,ǝ,o,o,x,o,o,k,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,t,o,o,o,i,o,e,N,N,ǝ,M,M,M,M,M,M,M,e,N,N,ǝ,t,o,o,o,o,o,o,A,x,e,N,N,N,N,ǝ,o,o,x,o,o,o,k,o,o,B],
			[o,o,o,o,o,e,N,N,N,N,ǝ,ø,t,o,o,o,k,o,o,t,e,N,N,ǝ,U,M,M,J,M,M,I,e,N,N,ǝ,o,o,x,o,i,o,o,o,o,e,N,N,N,N,ǝ,o,W,o,o,o,o,ø,o,o,o],
			[B,o,o,o,k,e,N,N,N,N,a,n,n,n,n,n,n,n,n,n,s,N,N,a,n,n,n,n,n,n,n,s,N,N,a,n,n,n,n,n,n,n,n,n,s,N,N,N,N,ǝ,o,o,t,o,o,o,x,o,o,o],
			[o,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,t,o,o,o,t,o,o,o,o,Z],
			[o,o,o,o,t,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,i,o,o,o,x,o,t,o],
			[B,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,A,o,o,o,o,i,o,o,o],
			[o,o,o,i,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,x,o,o,x,o,k,o,B],
			[o,o,o,o,o,e,N,N,N,N,q,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,w,N,N,N,N,ǝ,o,ø,o,i,o,o,o,o,o,o],
			[B,o,o,o,ø,e,N,N,N,N,ǝ,ø,o,t,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,ø,o,o,o,o,e,N,N,N,N,ǝ,o,o,x,o,o,o,k,o,o,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,A,A,o,o,o,o,o,o,o,o,o,o,t,o,o,o,t,o,o,W,o,o,o,o,o,t,o,o,i,W,e,N,N,N,N,ǝ,o,o,o,x,o,t,o,o,o,B],
			[o,o,o,x,o,e,N,N,N,N,ǝ,o,x,o,i,A,o,o,o,x,o,o,o,o,o,o,o,ø,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,k,o,o,o,A,o,o,o,o],
			[B,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,x,o,o,W,o,o,o,o,o,o,o,i,o,o,o,o,o,k,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,A,A,A,t,o,o],
			[o,o,o,o,i,e,N,N,N,N,ǝ,k,o,o,o,k,o,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,W,A,W,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,x,A,ø,o,o,B],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,x,o,o,ø,o,o,i,o,o,o,o,o,o,o,x,o,o,o,o,o,o,t,A,W,A,ø,i,o,o,x,o,e,N,N,N,N,ǝ,o,o,x,o,o,o,o,t,o,o],
			[B,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,A,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,k,o,o,i,o,o,t,o],
			[o,o,o,o,x,e,N,N,N,N,ǝ,o,o,o,o,o,o,t,A,o,o,k,o,o,o,o,k,o,o,o,i,o,A,o,o,x,o,o,o,o,o,W,W,o,e,N,N,N,N,ǝ,t,o,o,o,o,o,o,o,o,Z],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,W,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,k,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,x,o,W,o,o,o],
			[B,o,o,k,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,o,t,o,o,x,ø,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,i,o,o,o,o,x,o,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,i,o,k,o,o,t,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,x,o,o,o,A,A,A,ø,e,N,N,N,N,ǝ,o,x,o,o,o,t,o,o,o,B],
			[o,o,o,ø,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,i,W,o,t,o,o,o,o,o,o,k,o,o,o,o,o,o,o,i,o,A,o,o,o,e,N,N,N,N,ǝ,o,o,o,A,o,o,i,o,o,o],
			[B,o,o,o,o,e,N,N,N,N,ǝ,o,t,o,o,o,o,o,o,o,o,o,o,o,o,A,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A,o,o,o,e,N,N,N,N,ǝ,o,o,A,k,A,ø,o,o,t,o],
			[o,o,o,o,k,e,N,N,N,N,ǝ,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,k,o,o,o,x,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,A,o,o,o,o,o,B],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,ø,o,o,o,o,k,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,k,o,o],
			[B,o,o,t,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o,o,o,ø,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,t,o,e,N,N,N,N,ǝ,t,ø,o,t,o,o,t,o,o,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,A,o,t,o,o,o,o,o,t,o,o,o,o,o,t,o,o,o,o,o,k,i,o,o,o,o,t,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,i,o,k,o,B],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,W,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,o],
			[Z,o,o,o,i,e,N,N,N,N,ǝ,o,k,o,x,o,o,o,o,o,o,o,o,o,X,i,o,o,o,k,o,o,o,o,o,o,ø,o,k,o,o,o,R,o,e,N,N,N,N,ǝ,o,o,x,o,o,o,W,o,x,o],
			[o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,o,o,o,o,o,x,o,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,k,o,o,o,o,Z],
			[o,o,o,o,o,e,N,N,N,N,a,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,s,N,N,N,N,ǝ,ø,o,o,t,o,o,ø,t,o,o],
			[B,o,o,o,x,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,k,o,A,o,o,x,o,o,k,o],
			[o,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,t,o,o,o,o,o,o,o,B],
			[o,o,o,o,o,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,i,o,o,o,x,o,o,o],
			[B,o,o,ø,t,e,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,ǝ,o,o,o,o,o,k,o,t,o,o],
			[o,o,o,o,o,o,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,w,N,N,N,N,ǝ,t,o,k,o,A,o,o,o,o,B],
			[o,o,o,x,o,o,o,o,o,k,o,o,o,o,o,x,o,o,o,o,o,o,k,o,o,o,o,i,o,o,o,o,o,t,o,o,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,o,o,x,o,o,k,o,o],
			[B,o,o,o,o,i,o,o,o,o,o,o,o,o,o,o,o,t,o,o,G,o,o,o,o,o,o,o,x,o,t,o,o,o,o,o,o,ø,o,i,o,W,t,o,e,N,N,N,N,ǝ,o,t,ø,o,o,x,o,o,o,o],
			[o,o,o,o,o,o,o,o,i,o,o,t,o,o,o,x,o,o,o,o,o,o,o,i,o,o,o,o,o,o,o,A,o,o,o,k,o,o,o,o,o,o,o,o,e,N,N,N,N,ǝ,o,o,k,o,o,o,o,o,t,Z],
			[o,o,o,k,o,o,o,o,o,o,o,o,o,o,o,o,o,k,o,o,o,o,x,o,o,o,o,o,t,o,o,o,i,o,o,o,o,o,o,o,t,o,k,o,e,N,N,N,N,ǝ,o,o,o,o,i,o,o,o,o,o],
			[B,o,o,o,o,t,o,o,o,k,o,ø,o,o,t,o,o,o,o,o,o,x,o,o,o,o,A,o,o,i,o,o,o,o,o,o,x,o,o,ø,o,o,o,x,e,N,N,N,N,ǝ,o,i,o,W,o,o,x,ø,o,o],
			[o,o,o,o,o,o,x,o,o,o,o,o,k,o,o,o,o,x,o,o,o,o,o,o,t,o,o,k,o,ø,o,t,o,o,k,o,o,o,o,o,o,k,o,o,e,N,N,N,N,ǝ,o,o,o,k,o,o,o,o,o,B],
			[o,B,o,o,B,o,o,B,o,o,B,o,o,Z,o,o,B,o,o,B,o,o,B,o,o,B,o,o,B,o,o,B,o,o,B,o,o,Z,o,o,B,o,o,o,e,N,N,N,N,ǝ,B,o,o,B,o,o,B,o,B,o]

		];
		var alt = true;
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
				} else if (bg[y][x] == U || bg[y][x] == I || bg[y][x] == J || bg[y][x] == K || bg[y][x] == L){
					var width, height, type, classes, v_off;
					classes = "2D, DOM, Image, secret";
					v_off = 0;
					if(bg[y][x] == L){
						width = 19;
						height = 57;
						type = "images/stake_v.png";
						classes += ", five";
						v_off = 19;
						alt = !alt;
					} else if(bg[y][x] == U) {
						width = 38;
						height = 38;
						type = "images/bush.png"
						classes += ", one";
					} else if(bg[y][x] == I) {
						width = 38;
						height = 38;
						type = "images/flower.png"
						classes += ", two";
					} else if(bg[y][x] == J) {
						width = 38;
						height = 38;
						type = "images/peg.png"
						classes += ", three";
					} else if(bg[y][x] == K) {
						width = 38;
						height = 38;
						type = "images/stake_h.png"
						classes += ", four";
					}
					Crafty.e('2D, Canvas, background, paved_red')
						.attr({
							x: x* kakariko.TILE_SIZE,
							y: y* kakariko.TILE_SIZE
					});
					
					if(!alt){
						v_off = 0;
					} 
					Crafty.e(classes)
						.attr({
							x: (x* kakariko.TILE_SIZE)+v_off,
							y: y* kakariko.TILE_SIZE,
							w: width,
							h: height,
							z: 1000
					}).image(type);
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

