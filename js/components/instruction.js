(function() {
	Crafty.c('Instruction', {
		init: function() {
			this.image('images/sign.png');
			this.requires('Instruction, 2D, Canvas, Collision, Image');
			return this;
		}
	});
})();

