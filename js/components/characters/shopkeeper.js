(function() {
	var spritesCreated = false;
	var playerSpeed = 3;
	
	function createSprites() {
		if (!spritesCreated) {
			spritesCreated = true;
			Crafty.sprite(38, 55, "images/link.png", {
			    walkleft: [0, 0, 38, 55],
			    wakright: [0, 1, 38, 55],
				walkup: [0, 2, 38, 55],
			    walkdown: [0, 3, 38, 55]
			});
		}
	}
	Crafty.c('Link', {
		_checkWallCollision: function() {
	    	if(this.x<=40){
		    	this.x = 40;
	    	}
	    	if(this.x>=2925){
		    	this.x = 2925;
	    	}
	    	if(this.y<=150){
		    	this.y = 150;
	    	}
	   		if(this.y>=2940){
	   			this.y = 2940;
    		}
		},
		
		_checkDoorCollision: function() {
			if (this.hit('door')) {
				this.onHit('door', function(ent){
					var target = ent[0];
					kakariko.shop = target.id;
					Crafty.scene('building');
				});
			}
		},

		_checkObjectCollision: function() {
			if(this.hit('solid')){
				this.attr({x: from.x, y:from.y});
			}
		},

		_enterFrame: function() {	
			this._checkWallCollision();
			this._checkObjectCollision();
			this._checkDoorCollision();
			this._checkViewport();
		},
		
		_checkViewport: function(){
			Crafty.viewport.x = -this.x+400;
			Crafty.viewport.y = -this.y+300;
			if(Crafty.viewport.x>0){
				Crafty.viewport.x = 0;
			}
			if(Crafty.viewport.x<-2200){
				Crafty.viewport.x = -2200;
			}
			if(Crafty.viewport.y>0){
				Crafty.viewport.y = 0;
			}
			if(Crafty.viewport.y<-2400){
				Crafty.viewport.y = -2400;
			}
		},
		
		_newDirection: function(direction){
    		if(direction.y == 0){
	   			if ((direction.x < 0) && (!this.isPlaying('walkleft')) ) {
		   			this.stop().animate('walkleft', 8, -1);
	   			}
	   			if ((direction.x > 0) && (!this.isPlaying('walkright')) ) {
		   			this.stop().animate('walkright', 8, -1);
	   			}
    		} else if (direction.x == 0){
	   			if ((direction.y < 0) && (!this.isPlaying('walkup')) ) {
		   			this.stop().animate('walkup', 8, -1);
	   			}
	   			if ((direction.y > 0) && (!this.isPlaying('walkdown')) ) {
		   			this.stop().animate('walkdown', 8, -1);
	   			}
    		} else {
	   			if ((direction.y < 0) && (!this.isPlaying('walkup')) ) {
		   			this.stop().animate('walkup', 8, -1);
	   			}
	   			if ((direction.y > 0) && (!this.isPlaying('walkdown')) ) {
		   			this.stop().animate('walkdown', 8, -1);
	   			}
    		}
	        if(!direction.x && !direction.y) {
	            this.stop();
	        }
		},
		
		init: function() {
			createSprites();
			this.requires('Link, 2D, Canvas, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown');
		},
		
		link: function(){
			this.init();
			return this.animate('walkleft', 0, 0, 7)
				.animate('walkright', 0, 1, 7)
				.animate('walkup', 0, 2, 7)
				.animate('walkdown', 0, 3, 7)
				.bind('EnterFrame', this._enterFrame)
				.bind("NewDirection", function (direction) {
					 this._newDirection(direction);
				})
				.attr({ x: 0, y: 0, z: 1000, w: 38, h: 55, dX: Crafty.math.randomInt(2, 5), dY: Crafty.math.randomInt(2, 5) })
				.fourway(playerSpeed)
			    .collision();
		}
	});
})();

