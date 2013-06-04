(function() {
	window.kakariko = window.kakariko || {};
	kakariko.TILE_SIZE = 38;
	kakariko.shop = 0;
	kakariko.IS_MOBILE = (function() {
		// stolen from Modernizr
		// TODO: does Lime or Closure already have this somewhere?
		try {  
			document.createEvent("TouchEvent");  
			return true;  
		} catch (e) {  
			return false;  
		} 
	})();


	window.onload = function() {
		Crafty.mobile = false;
		Crafty.init(640, 480);
		Crafty.canvas.init();
		Crafty.scene('loading');

		setTimeout(function() {
			window.scrollTo(0, 1);
		}, 1);
	};
	// 
	// $('body').click(function(){
	// 	if(kakariko.shop<6){
	// 		kakariko.shop += 1;
	// 		Crafty.scene('building');
	// 	} else {
	// 		kakariko.shop = 0;
	// 		Crafty.scene('overworld');
	// 	}
	// });
	
})();




// jQuery(document).ready(function($){
// 	// Stage
// 	var width = 900;
// 	var height = 600;
// 	var background_green = 'rgb(72, 152, 72)';
// 	var background_black = 'rgb(0, 0, 0)';
// 	var inside = false;
// 	
// 	// Background
// 	
// 	// Link
// 	
// 	// Building - Outside
// 	
// 	// Building - Inside
// 	
// 	
// 	// Init Crafty
// 	Crafty.init(width, height);
// 	Crafty.background(background_green);
// 
// 	// Assets
// 	var assets = ['building.png', 'images/building_brown.png', 'images/building_red.png', 'images/background_outside.png', 'audio/kakariko.mp3', 'audio/building.mp3', 'audio/building_intro.mp3', 'images/shop1.png', 'images/shop2.png', 'images/shop3.png', 'images/shop4.png', 'images/shop5.png', 'images/shop6.png'];
// 	var BUILDING_WIDTH = 220;
// 	var BUILDING_HEIGHT = 192;
// 	var doorW = 42;
// 	var doorL = 90;
// 	var doorR = doorL+doorW;
// 	var playerSpeed = 3;
// 	var currentBuilding;
// 	// Audio & Sprites
// 	var audio = Crafty.audio.add({
// 		kakariko: ["audio/kakariko.wav", "audio/kakariko.mp3", "audio/kakariko.ogg"],
// 		building_intro:  ["audio/building_intro.wav", "audio/building_intro.mp3", "audio/building_intro.ogg"],
// 		building:  ["audio/building.wav", "audio/building.mp3", "audio/building.ogg"]
// 	});
// 	
// 	var link_sprite = Crafty.sprite(38, 55, "link.png", {
// 	    walkleft: [0, 0, 38, 55],
// 	    wakright: [0, 1, 38, 55],
// 		walkup: [0, 2, 38, 55],
// 	    walkdown: [0, 3, 38, 55]
// 	});
// 
// // use ajax to get projects from db. for now though...
// 
// 	var projects = [
// 		{
// 			'id' : 0,
// 			'name' : 'Fatalatour',
// 			'scene' : 'fatalatour',
// 			'tagline' : 'Get shot in LA and have fun doing it.',
// 			'text' : 'Lorem ipsum...',
// 			'images' : [
// 				'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'
// 			],
// 			'x' : 656,
// 			'y' : 784,
// 			'skin' : 0
// 		}, 
// 		{
// 			'id' : 1,
// 			'name' : 'Battle for Boobland',
// 			'scene' : 'boobland',
// 			'tagline' : 'Defend Boobland from the coarse hairy invaders of Manland.',
// 			'text' : 'Lorem ipsum...',
// 			'images' : [
// 				'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg'
// 			],
// 			'x' : 2101,
// 			'y' : 2162,
// 			'skin' : 1
// 		}, 
// 		{
// 			'id' : 2,
// 			'name' : 'Kill/Create',
// 			'scene' : 'kill-create',
// 			'tagline' : 'Whether you choose life or death, it ends in extinction.',
// 			'text' : 'Lorem ipsum...',
// 			'images' : [
// 				'images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg'
// 			],
// 			'x' : 2767,
// 			'y' : 1355,
// 			'skin' : 2
// 		}
// 	];
// 	
// 	var link = Crafty.e("Player, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown, Persist")
// 		.attr({ x: 2500, y: 2940, z: 1000, w: 38, h: 55, dX: Crafty.math.randomInt(2, 5), dY: Crafty.math.randomInt(2, 5) })
// 		.fourway(playerSpeed)
// 	    .collision()
// 		.animate('walkleft', 0, 0, 7)
// 	    .animate('walkright', 0, 1, 7)
// 	    .animate('walkup', 0, 2, 7)
// 	    .animate('walkdown', 0, 3, 7)
// 	    .bind("NewDirection", function (direction) {
// 	    		if(direction.y == 0){
// 		   			if ((direction.x < 0) && (!this.isPlaying('walkleft')) ) {
// 			   			this.stop().animate('walkleft', 8, -1);
// 		   			}
// 		   			if ((direction.x > 0) && (!this.isPlaying('walkright')) ) {
// 			   			this.stop().animate('walkright', 8, -1);
// 		   			}
// 	    		} else if (direction.x == 0){
// 		   			if ((direction.y < 0) && (!this.isPlaying('walkup')) ) {
// 			   			this.stop().animate('walkup', 8, -1);
// 		   			}
// 		   			if ((direction.y > 0) && (!this.isPlaying('walkdown')) ) {
// 			   			this.stop().animate('walkdown', 8, -1);
// 		   			}
// 	    		} else {
// 		   			if ((direction.y < 0) && (!this.isPlaying('walkup')) ) {
// 			   			this.stop().animate('walkup', 8, -1);
// 		   			}
// 		   			if ((direction.y > 0) && (!this.isPlaying('walkdown')) ) {
// 			   			this.stop().animate('walkdown', 8, -1);
// 		   			}
// 	    		}
// 		        if(!direction.x && !direction.y) {
// 		            this.stop();
// 		        }
// 		})
// 	    .bind('Moved', function(from) {
// 	    	if(this.x<=40){
// 		    	this.x = 40;
// 	    	}
// 	    	if(this.x>=2925){
// 		    	this.x = 2925;
// 	    	}
// 	    	if(this.y<=150){
// 		    	this.y = 150;
// 	    	}
// 	   		if(this.y>=2940){
// 	   			this.y = 2940;
//     		}
// 			Crafty.viewport.x = -this.x+400;
// 			Crafty.viewport.y = -this.y+300;
// 			if(Crafty.viewport.x>0){
// 				Crafty.viewport.x = 0;
// 			}
// 			if(Crafty.viewport.x<-2200){
// 				Crafty.viewport.x = -2200;
// 			}
// 			if(Crafty.viewport.y>0){
// 				Crafty.viewport.y = 0;
// 			}
// 			if(Crafty.viewport.y<-2400){
// 				Crafty.viewport.y = -2400;
// 			}
// 
//             if(this.hit('solid')){
//               this.attr({x: from.x, y:from.y});
//             } else if (this.hit('door')){
//             	link.onHit('door', function(ent){
// 	            	var target = ent[0];
// 		            for(i=0;i<projects.length;i++){
// 						if(projects[i].x+doorL == target.obj._x && projects[i].y+BUILDING_HEIGHT-50 == target.obj._y ){
// 							currentBuilding = projects[i];
// 								Crafty.scene(projects[i].scene);
// 						}
// 					}
//             	});
//             }
//         })	
// 
// 	// Scenes
// 
// 	Crafty.scene("loading", function() {
// 	    // Load takes an array of assets and a callback when complete
// 	    Crafty.load(assets, function() {
//     		Crafty.scene("kakariko"); //when everything is loaded, run the main scene
//     	});
//     	// Loading screen
//     	Crafty.background(background_green);
//     	Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
//     		.text("Loading")
//     		.css({"text-align": "center"});
//     });
// 
//     Crafty.scene("kakariko", function() {
//     	var bg = Crafty.e("DOM, Image, 2D, Persist")
// 		.attr({w: 3000, h: 3000, x: 0, z:0})
// 		.image("images/background_outside.png", "repeat");
// 			// Link
// 
// 
// 		var arch = Crafty.e("DOM, Image, 2D, Persist")
// 		.attr({w: 3000, h: 3000, x: 2417, y:2770, z:2000})
// 		.image("images/arch.png", "no-repeat");
//     	inside = false;
//     	Crafty.background(background_green);
// 	    Crafty.audio.play("kakariko", -1);
// 	    Crafty.e("solid, 2D, DOM, Collision")
// 			    .attr({x:0, y: 2805, w: 2453, h: 250 })
// 			    .collision();
// 		Crafty.e("solid, 2D, DOM, Collision")
// 			    .attr({x:2567, y: 2805, w: 433, h: 250 })
// 			    .collision();
//     	for(j=0;j<projects.length;j++){
// 	    		var id = j;
// 			projects[j].building = Crafty.e("building, solid, 2D, DOM, Color, Collision, Image")
// 			    .attr({ x: projects[j].x, y: projects[j].y, w: BUILDING_WIDTH, h: BUILDING_HEIGHT })
// 			    .image(building[projects[j].skin])
// 			    .collision();
// 			projects[j].door = Crafty.e("door, 2D, DOM, Collision")
// 			    .attr({ x: projects[j].x+doorL, y: projects[j].y+142, w: doorW, h: 60 })
// 			    .collision();
// 			Crafty.scene(projects[j].scene, function() {
// 				inside = true;
// 			    Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
// 			    	.scrollText("Lorem ipsum dolor sit", $('#text_box_content'));
// 			    var img = "images/shop"+(j+1)+".png"
// 			   	var bg = Crafty.e("DOM, Image, 2D")
// 			   	.attr({w: 600, h: 600, x: 200, z:-10})
// 			   	.image(img, "no-repeat");
// 					
// 				Crafty.background(background_black);
// 				Crafty.audio.stop();
// 				Crafty.audio.play("building_intro", 1);
// 				link._x = 480;
// 				link._y = 440;
// 				Crafty.viewport.x = 0;
// 				Crafty.viewport.y = 0;
// 				console.log(bg);
// 
// 				t = setTimeout(function(){
// 					Crafty.audio.stop();
// 					Crafty.audio.play("building", -1);
// 				}, 2000);
// 			});
// 		}
// 	});
// 
// 	Crafty.scene("loading");
// 
// });
