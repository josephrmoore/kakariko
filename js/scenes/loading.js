(function() {
	var audioFiles = [
		'kakariko',
		'building',
		'building_intro',
		'text',
		'next',
		'text_close',
		'secret',
		'secret_possible',
		'secret_win',
		'overworld',
		'palace',
		'dark',
		'hyrule',
		'gerudo',
		'deku',
		'clock',
		'windfall',
	];

	function getAudioPaths(files) {
		var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		var paths = [];
		files = files || audioFiles;

		for(var i = 0; i < files.length; ++i) {
			var file = files[i];
			paths.push('audio/' + file + '.mp3');
			paths.push('audio/' + file + '.ogg');
			if(!isFirefox) {
				paths.push('audio/' + file + '.wav');
			}
		}

		return paths;
	}

	function installAudio() {
		for(var i = 0; i < audioFiles.length; ++i) {
			var file = audioFiles[i];
			Crafty.audio.add(file, getAudioPaths([file]));
		}
	}
	
	Crafty.scene('loading', function() {
		Crafty.load(['building.png', 'images/building_brown.png', 'images/building_red.png', 'images/background_outside.png', 'images/shop1.png', 'images/shop2.png', 'images/shop3.png', 'images/shop4.png', 'images/shop5.png', 'images/shop6.png', 'images/tiles2.gif', 'images/flower.png',  'images/peg.png',  'images/bush.png',  'images/tree_green.png',  'images/tree_purple.png',  'images/sign.png',  'images/shopkeep.png',  'images/text_black.png',  'images/stake_h.png',  'images/stake_v.png',  'images/arch.png'].concat(getAudioPaths())
		, function() {
			installAudio();
			Crafty.scene('overworld'); 
		});

		Crafty.background('#000');
		Crafty.e('2D, DOM, Text').attr({
			w: Crafty.stage.elem.clientWidth,
			h: 20,
			x: 0,
			y: 120
		}).text('Now entering Kakariko Village...').css({
			'text-align': 'center',
			'color': '#fff'
		});
	});
})();

