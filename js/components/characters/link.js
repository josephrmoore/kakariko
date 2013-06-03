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
		    	if(this.x>=2280){
			    	this.x = 2280;
		    	}
		    	if(this.y<=0){
			    	this.y = 0;
		    	}
		   		if(this.y>=2280){
		   			this.y = 2280;
	    		}
			} else {
				if(this.x<=170){
			    	this.x = 170;
		    	}
		    	if(this.x>=590){
			    	this.x = 590;
		    	}
		    	if(this.y<=200){
			    	this.y = 200;
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
						window.kakariko.shop = target.id;						
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
			} else if(this.hit('Sign')){
				this.onHit('Sign', function(ent){
					var target = ent[0].obj;
					kakariko.sign = target.id;
				});
				kakariko.canText = true;
			}
		},

		_checkText: function() {
			if(kakariko.shop>0){
				if(this.x>300 && this.x<500 && this.y<300){
					kakariko.canText = true;
				} else {
					kakariko.canText = false;
				}
			} 
		},

		_enterFrame: function() {	
			this._checkWallCollision();
			this._checkObjectCollision();
			this._checkDoorCollision();
			this._checkViewport();
			this._checkText();
		},
		
		_checkViewport: function(){
			Crafty.viewport.x = -this.x+320;
			Crafty.viewport.y = -this.y+240;
			if(kakariko.shop == 0){
				if(Crafty.viewport.x>0){
					Crafty.viewport.x = 0;
				}
				if(Crafty.viewport.x<-1640){
					Crafty.viewport.x = -1640;
				}
				if(Crafty.viewport.y>-20){
					Crafty.viewport.y = -20;
				}
				if(Crafty.viewport.y<-1800){
					Crafty.viewport.y = -1800;
				}
			} else {
				Crafty.viewport.x = -this.x+320;
				Crafty.viewport.y = -this.y+300;
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
			this.requires('Link, 2D, DOM, Color, Collision, Fourway, SpriteAnimation, walkleft, walkright, walkup, walkdown');
		},
		
		link: function(){
			return this.animate('walkleft', 0, 0, 7)
				.animate('walkright', 0, 1, 7)
				.animate('walkup', 0, 2, 7)
				.animate('walkdown', 0, 3, 7)
				.animate('walkup', 8, -1).stop()
				.bind('EnterFrame', this._enterFrame)
				.bind('Moved', function(from){
					this._checkObjectCollision(from);
				})
				.bind("NewDirection", function (direction) {
					 this._newDirection(direction);
				})
				.attr({ x: 1766, y: 2140, z: 1000, w: 38, h: 55, dX: Crafty.math.randomInt(2, 5), dY: Crafty.math.randomInt(2, 5) })
				.fourway(playerSpeed)
			    .collision();
		}
	});
})();

