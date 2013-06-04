(function() {
	Crafty.c('DevPanel', {
		_contents : '<div class="dev"> <header> <h1>Triforce of Power</h1> <span>Use ASWD</span> </header><nav> <h2 class="music selected">Music</h2> <h2 class="images">Images</h2> <h2 class="layout">Layout</h2></nav> <section class="music"> <ul> <li id="kakariko" class="kakariko selected">Kakariko Village</li> <li id="overworld" class="overworld">8-bit Overworld</li> <li id="palace" class="palace">Palace</li> <li id="dark" class="dark">Dark World</li> <li id="hyrule" class="hyrule">Hyrule Castle</li> <li id="gerudo" class="gerudo">Gerudo Valley</li> <li id="deku" class="deku">Deku Palace</li> <li id="clock" class="clock">Clock Town</li> <li id="windfall" class="windfall">Windfall Island</li> </ul> </section> <section class="images off"> <article class="you"> <h3>You</h3> <ul> <li id="link" class="link selected">Link</li> <li id="mario" class="mario">Mario</li> <li id="ganon" class="ganon">Ganon</li> <li id="zelda" class="zelda">Zelda</li> <li id="samus" class="samus">Samus</li> <li id="bart" class="bart">Bart Simpson</li> <li id="pacman" class="pacman">Pac-Man</li> <li id="sonic" class="sonic">Sonic</li> <li id="link-8bit" class="link-8bit">8-bit Link</li> </ul> </article> </section> <section class="layout off"> <p>Under Construction</p> </section></div>',
		
		_changeTab : function(right){
			if(right){
				$('.dev nav h2').each(function(){
					if($(this).hasClass('music') && $(this).hasClass('selected')){
						$('.dev section.music').addClass('off');					
						$('.dev section.images').removeClass('off');					
						$('.dev section.layout').addClass('off');
					} else if($(this).hasClass('images') && $(this).hasClass('selected')){
						$('.dev section.music').addClass('off');					
						$('.dev section.images').addClass('off');					
						$('.dev section.layout').removeClass('off');
					} else if($(this).hasClass('layout') && $(this).hasClass('selected')){
						$('.dev section.music').removeClass('off');					
						$('.dev section.images').addClass('off');					
						$('.dev section.layout').addClass('off');
					} 
				});
				console.log('right');
				$('.dev nav h2').each(function(i){
					if($(this).hasClass('selected')){
						if(i == $('.dev nav h2').length-1){
							$('.dev nav h2').removeClass('selected');
							$($('.dev nav h2')[0]).addClass('selected');
						} else {
							$('.dev nav h2').removeClass('selected');
							$($('.dev nav h2')[i+1]).addClass('selected');
						}
						return false;
					}
				});
			} else {
				$('.dev nav h2').each(function(){
					if($(this).hasClass('music') && $(this).hasClass('selected')){
						$('.dev section.music').addClass('off');					
						$('.dev section.images').addClass('off');					
						$('.dev section.layout').removeClass('off');
					} else if($(this).hasClass('images') && $(this).hasClass('selected')){
						$('.dev section.music').removeClass('off');					
						$('.dev section.images').addClass('off');					
						$('.dev section.layout').addClass('off');
					} else if($(this).hasClass('layout') && $(this).hasClass('selected')){
						$('.dev section.music').addClass('off');					
						$('.dev section.images').removeClass('off');					
						$('.dev section.layout').addClass('off');
					} 
				});
				console.log('left');
				$('.dev nav h2').each(function(i){
					if($(this).hasClass('selected')){
						if(i == 0){
							$('.dev nav h2').removeClass('selected');
							$($('.dev nav h2')[$('.dev nav h2').length-1]).addClass('selected');
						} else {
							$('.dev nav h2').removeClass('selected');
							$($('.dev nav h2')[i-1]).addClass('selected');
						}
						return false;
					}
				});
			}
		},
		
		_changeRow : function(down){
			if(down){
				$('.dev section').each(function(){
					if(!$(this).hasClass('off')){
						var lis = $(this).find('li');
						lis.each(function(i){
							if($(this).hasClass('selected')){
								if(i == lis.length-1){
									lis.removeClass('selected');
									$(lis[0]).addClass('selected');
									kakariko._devChangeAssets();
									return false;
								} else {
									lis.removeClass('selected');
									$(lis[i+1]).addClass('selected');
									kakariko._devChangeAssets();
									return false;
								}
							}
						});
					}
				});				
			} else {
				$('.dev section').each(function(){
					if(!$(this).hasClass('off')){
						var lis = $(this).find('li');
						lis.each(function(i){
							if($(this).hasClass('selected')){
								if(i == 0){
									lis.removeClass('selected');
									$(lis[lis.length-1]).addClass('selected');
									kakariko._devChangeAssets();
									return false;
								} else {
									lis.removeClass('selected');
									$(lis[i-1]).addClass('selected');
									kakariko._devChangeAssets();
									return false;
								}
							}
						});
					}
				});
			}
		},
		
		init: function() {
			this.requires('DevPanel, 2D, DOM, Text');
			this.attr({
				w: 600,
				h: 440,
				x: 20-Crafty.viewport.x,
				y: 20-Crafty.viewport.y
			}).text(this._contents);
			return this;
		}
	});
})();

