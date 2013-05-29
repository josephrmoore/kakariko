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
			if(kakariko.shop == 0){
				if(this.x<=0){
			    	this.x = 0;
		    	}
		    	if(this.x>=3000){
			    	this.x = 3000;
		    	}
		    	if(this.y<=0){
			    	this.y = 0;
		    	}
		   		if(this.y>=3000){
		   			this.y = 3000;
	    		}
			} else {
				if(this.x<=170){
			    	this.x = 170;
		    	}
		    	if(this.x>=590){
			    	this.x = 590;
		    	}
		    	if(this.y<=300){
			    	this.y = 300;
		    	}	
				if(this.x>370 && this.x<405){
					if(this.y>450){
						if(this.x<370){
							this.x=370;
						}
						if(this.x>405){
							this.x=405;
						}
						if(this.y>=500){
				   			this.y = 500;
			    		}
					}
				} else {
			   		if(this.y>=450){
			   			this.y = 450;
		    		}
				}
			}
		},
		
		_checkDoorCollision: function() {
			
			if (this.hit('Door')) {
				this.onHit('Door', function(ent){
					var target = ent[0].obj;
					if(target.id>0){
						kakariko.shop = target.id;						
						Crafty.scene('building');
					} else {
						Crafty.scene('overworld');
					}
				});
			}
		},

		_checkObjectCollision: function(from) {
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
			if(kakariko.shop == 0){
				if(Crafty.viewport.x>0){
					Crafty.viewport.x = 0;
				}
				if(Crafty.viewport.x<-2240){
					Crafty.viewport.x = -2240;
				}
				if(Crafty.viewport.y>0){
					Crafty.viewport.y = 0;
				}
				if(Crafty.viewport.y<-2440){
					Crafty.viewport.y = -2440;
				}
			} else {
				Crafty.viewport.x = 0;
				Crafty.viewport.y = 0;
			}
		},
		
		_newDirection: function(direction){
    		if(direction.y == 0){
	   			if ((direction.x < 0) && (!this.isPlaying('walkleft')) ) {
		   			this.stop().animate('walkleft', 8, -1);
					console.log(this);
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
			this.requires('Link, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown');
		},
		
		link: function(){
			createSprites();
			this.requires('Link, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown');
			return this.animate('walkleft', 0, 0, 7)
				.animate('walkright', 0, 1, 7)
				.animate('walkup', 0, 2, 7)
				.animate('walkdown', 0, 3, 7)
				.bind('EnterFrame', this._enterFrame)
				.bind('Moved', function(from){
					this._checkObjectCollision(from);
				})
				.bind("NewDirection", function (direction) {
					 this._newDirection(direction);
					console.log(this.x + " " + this.y);
				})
				.attr({ x: 0, y: 0, z: 1000, w: 38, h: 55, dX: Crafty.math.randomInt(2, 5), dY: Crafty.math.randomInt(2, 5) })
				.fourway(playerSpeed)
			    .collision();
		}
	});
})();

