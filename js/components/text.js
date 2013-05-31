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
		
		init: function() {
			this.requires('text, 2D, DOM, Text');
			if(kakariko.shop == 0){
				if(kakariko.sign>0){
					this._loadTitle(kakariko.sign);
				}
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

