(function() {
	
	window.kakariko = {};
	window.kakariko._keys = [];
	
	window.kakariko._konami = function(e){
		checkKey(e);
	};
	
	function checkPattern(arr){
	    for(i=0;i<arr.length;i++){
	        if(arr[i+9]){
	            if(arr[i] == 38 && arr[i+1] == 38 && arr[i+2]== 40 && arr[i+3] ==40 && arr[i+4] == 37 && arr[i+5] == 39 &&arr[i+6] == 37 && arr[i+7] == 39 &&arr[i+8] == 66 && arr[i+9]== 65 ){
					window.kakariko._godMode = true;
					window.kakariko._unlocked = true;
					// window.kakariko._devPanel = true;
					// window.kakariko._devPanelVisible = true;
					var map = '<div id="map"><h1>Triforce of Wisdom</h1>';
					for(var i=0; i<window.kakariko.projects.length; i++){
						var name = window.kakariko.projects[i].name;
						var tagline = window.kakariko.projects[i].tagline;
						var text = window.kakariko.projects[i].text;
						var id = "map-" + window.kakariko.projects[i].scene;
						var div = '<div class="'+id+'"><h2 class="title">'+name+'</h2><p class="tagline">'+tagline+'</p><div class="text">'+text+'</div></div>';
						map += div;
					}
					map += '</div>';
					$('body').append(map);
					window.kakariko._keys = [];
					window.kakariko._wisdom = true;
					window.kakariko.link.stop();
					Crafty.audio.play("secret_win", 1);
					alert('Congratulations! You\'ve discovered the Triforce of Wisdom! You can read all the text content of the site below and don\'t have to visit the buildings to unlock the secret each project hints at (tweet tweet).');
	            } else {
	                arr.splice(i,1);
	            }
	        }
	    }
	}

	function checkKey(e){
		if(!window.kakariko._wisdom){
	    	window.kakariko._keys.push(e.keyCode);
	    	checkPattern(window.kakariko._keys); 
	    	console.log(window.kakariko._keys);
		}
	}
	
})();
