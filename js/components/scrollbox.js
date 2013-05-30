(function() {
	Crafty.c('Scrollbox', {
		_text : {},
		_textPos : 0,

		_loadImage : function(){
			this.image("images/text_black.png");
		},
		
		_loadText : function(){
			this._text = Crafty.e('2D, DOM, Text, text');
		},
		
		_paginate : function(){
			var t = this;
			$('body').click(function(){
				// translate?
				t._textPos = (t._textPos-39);
				console.log(t._textPos);
				$('.text>*').css({
					'margin-top': t._textPos+'px'
				});
				console.log($('.scroll-wrapper').css('margin-top'));
				console.log($('.scroll-wrapper'));
			});
		},
		
		init: function() {
			this.requires('2D, DOM, Image, Scrollbox');
			this._loadImage();
			this._loadText();
			this._paginate();
			this.attr({
				w: 446,
				h: 110,
				x: 162,
				y: 20
			});
			this.css({
				'padding': '10px 45px 10px 15px',
				'max-width' : '446px',
				'max-height': '110px',
				'overflow': 'hidden'
			});
			return this;
		}
	});
})();

