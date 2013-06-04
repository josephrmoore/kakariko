(function() {
	Crafty.c('Scrollbox', {
		_text : {},
		_textPos : 0,
		_textOn : false,
		_link : {},

		_loadImage : function(){
			this.image("images/text_black.png");
		},
		
		_loadText : function(){
			this._text = Crafty.e('2D, DOM, Text, text');
		},
		
		_paginate : function(){
			var t = this;
			if(Math.abs(t._textPos) <= $('.scroll-wrapper').height()-117){
				t._textPos = (t._textPos-117);
				$('.scroll-wrapper').css({
					'top': t._textPos+'px'
				});
			} else {
				t._textPos = 0;
				t._text.y = -1000;
				t.y = -1000
				t._textOn = false;
				$('.scroll-wrapper').css({
					'top': 0
				});
			}
			t._pauseUnpause();
		},
		
		_pauseUnpause : function(){
			if(this._textOn){
				kakariko.link.fourway(0);
			} else {
				kakariko.link.fourway(3);
			}
		},
		
		init: function() {
			this.requires('2D, DOM, Image, Scrollbox');
			this._loadImage();
			this._loadText();
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

