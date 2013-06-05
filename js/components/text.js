(function() {
	Crafty.c('text', {
		_contents : "",
		_textPos : 0,
		_loadText : function(id){
			this._contents = '<span class="scroll-wrapper">' + kakariko.projects[id-1].text + '</span>';
			$('.scroll-wrapper').css({
				'top': this._textPos+'px'
			});
		},
		
		_loadTitle : function(id){
			this._contents = '<span class="scroll-wrapper">' + kakariko.projects[id-1].name + '<br />' + kakariko.projects[id-1].tagline + '</span>';
			$('.scroll-wrapper').css({
				'top': this._textPos+'px'
			});
		},
		
		_loadInstructions : function(){
			this._contents = '<span class="scroll-wrapper">Welcome to Kakariko Village! Home of Joseph Moore\'s game portfolio. To get around, use the arrow keys. To read a sign, get close to it and press SPACE or ENTER (but you already figured that out didn\'t you?). To see my work, just visit each of the homes and talk to the people inside. You may even find that there is more to this place than there seems if you talk to everybody here. Good luck!</span>';
			$('.scroll-wrapper').css({
				'top': this._textPos+'px'
			});
		},
		
		init: function() {
			this.requires('text, 2D, DOM, Text');
			if(kakariko.shop == 0){
				// console.log("title init");
			} else {
				this._loadText(kakariko.shop);
			}
			this.attr({
				w: 446,
				h: 110,
				x: 162,
				y: 25
			}).text(this._contents);
			this.css({
				'padding': '5px 45px 10px 15px',
				'max-width' : '446px',
				'overflow' : 'hidden'
			});
			return this;
		}
	});
})();

