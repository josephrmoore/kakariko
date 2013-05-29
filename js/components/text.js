(function() {
	Crafty.c('text', {
		var contents = "";
		
		_loadtext : function(id){
			this.contents = kakariko.projects[id].text;
		},
		
		_loadImage : function(){
			this.image("images/text_black");
		},
		
		_paginate : function(){
			
		},
		
		init: function() {
			this.requires('text, 2D, Canvas, Image, Collision');
			this._loadText();
			this._loadImage();
			return this;
		}
	});
})();

