(function() {
	Crafty.c('Door', {
		init: function(id) {
			this.id = id;
			this.requires('Door, 2D, Canvas, Collision, Color');
			return this;
		}
	});
})();

