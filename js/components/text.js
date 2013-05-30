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

		init: function() {
			this.requires('text, 2D, DOM, Text');
			this._loadText(kakariko.shop);
			this.attr({
				w: 446,
				h: 110,
				x: 162,
				y: 20
			}).text(this._contents);
			this.css({
				'padding': '10px 45px 10px 15px',
				'max-width' : '446px',
				'overflow' : 'hidden'
			});
			return this;
		}
	});
})();

