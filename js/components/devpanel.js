(function() {
	Crafty.c('DevPanel', {
		_contents : '<div class="dev"> <header> <h1>Triforce of Power</h1> <span>Use ASWD</span> </header><nav> <h2 class="music selected">Music</h2> <h2 class="images">Images</h2> </nav> <section class="music"> <ul> <li id="kakariko" class="kakariko selected">Kakariko Village</li> <li id="overworld" class="overworld">Old School</li> <li id="smb" class="smb">Super Mario Bros.</li> <li id="metroid" class="metroid">Brinstar</li> <li id="got" class="got">Seven Kingdoms</li> <li id="sally" class="sally">Long Legged Sally</li> <li id="sex" class="sex">Sex Robot</li> <li id="newlywed" class="newlywed">The Newlywed Game</li> <li id="clockwork" class="clockwork">Korova Milk Bar</li> </ul> </section> <section class="images off"> <article class="you"> <h3>You</h3> <ul> <li id="link" class="link selected">Link</li> <li id="mario" class="mario">Mario</li> <li id="samus" class="samus">Samus</li> <li id="bart" class="bart">Bart Simpson</li> <li id="pacman" class="pacman">Pac-Man</li> <li id="sonic" class="sonic">Sonic</li> </ul> </article> </section> </div>',
		
		_changeTab : function(right){
			if(right){
				$('.dev nav h2').each(function(){
					if($(this).hasClass('music') && $(this).hasClass('selected')){
						$('.dev section.music').addClass('off');					
						$('.dev section.images').removeClass('off');					
					} else if($(this).hasClass('images') && $(this).hasClass('selected')){
						$('.dev section.music').removeClass('off');					
						$('.dev section.images').addClass('off');					
					}
				});
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
						$('.dev section.images').removeClass('off');					
					} else if($(this).hasClass('images') && $(this).hasClass('selected')){
						$('.dev section.music').removeClass('off');					
						$('.dev section.images').addClass('off');					
					}
				});
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
			this.requires('DevPanel, 2D, DOM, Text, Persist');
			this.attr({
				w: 600,
				h: 440,
				x: kakariko.x+20,
				y: kakariko.y+20
			}).text(this._contents);
			return this;
		}
	});
})();

