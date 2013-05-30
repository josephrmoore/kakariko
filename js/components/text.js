(function() {
	Crafty.c('text', {
		_contents : "",
		_textPos : 0,
		_loadText : function(id){
			this._contents = '<span class="scroll-wrapper">' + kakariko.projects[id].text + '</span>';
			$('.text>*').css({
				'margin-top': this._textPos+'px'
			});
		},
		
		_loadImage : function(){
			this.image("images/text_black.png");
		},
		
		_paginate : function(){
			var t = this;
			$('body').click(function(){
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
			this.requires('text, 2D, DOM, Text, Canvas, Image');
			this._loadText(kakariko.shop);
			this._loadImage();
			this._paginate();
			this.attr({
				w: 446,
				h: 93,
				x: 162,
				y: 20
			}).text(this._contents);
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

