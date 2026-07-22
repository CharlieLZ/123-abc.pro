//
var PreloaderAn = {
	
	loadJS: function (__file, __id, __func) {
		$.getScript(__file, function(data, textStatus, jqxhr) {
			if (jqxhr.status == 200) {
				PreloaderAn.init(__id, __func);
			}
		});
	},
	
	init: function (__id, __func) {
		var comp=AdobeAn.getComposition(__id);
		var lib=comp.getLibrary();
		var imageManifest = [];
		var soundManifest = [];
		for (var manifestIndex = 0; manifestIndex < lib.properties.manifest.length; manifestIndex++) {
			var item = lib.properties.manifest[manifestIndex];
			if (/\.(mp3|wav|ogg)(?:\?|$)/i.test(item.src)) {
				soundManifest.push(item);
			} else {
				imageManifest.push(item);
			}
		}
		if (soundManifest.length > 0) {
			createjs.Sound.registerSounds(soundManifest);
		}
		if (imageManifest.length == 0) {
			PreloaderAn.handleComplete(null,comp,__func);
		} else {
			var loader = new createjs.LoadQueue(false);
			loader.addEventListener("fileload", function(evt){PreloaderAn.handleFileLoad(evt,comp)});
			loader.addEventListener("complete", function(evt){PreloaderAn.handleComplete(evt,comp,__func)});
			loader.loadManifest(imageManifest);
		}
			
	},
	
	handleFileLoad: function (evt, comp) {
		var images=comp.getImages();	
		if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
	},
	
	handleComplete: function (evt,comp,__func) {
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		if (evt != null) {
			var queue = evt.target;
			var ssMetadata = lib.ssMetadata;
			for(i=0; i<ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
			}
		}
		__func(lib);
	},
	
	loadJSON: function(__url, __func) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', __url, true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var __str = this.responseText;
				var __obj = {};
				if (__str) __obj = JSON.parse(__str);
				__func(__obj);
			}
		};
	},
	
	loadSnds: function (__manifest, __func, __obj) {
		createjs.Sound.registerSounds(__manifest);
		for (var manifestIndex = 0; manifestIndex < __manifest.length; manifestIndex++) {
			__obj[__manifest[manifestIndex].id] = __manifest[manifestIndex];
		}
		__func();
	},
	
	onSndLoad: function(evt, __obj) {
		__obj[evt.item.id] = evt.item;
	},
	
	onSndsComplete: function(evt, __func) {
		__func();
	},

	createSndObj: function(__id, __src, __pos) {
		var __obj = {};
		__obj['id'] = __id;
		__obj['src'] = __src;
		__obj['positions'] = (__pos == null) ? [] : __pos;
		return __obj;
	}
}
//
function playSound(id, __func) {
	//console.log(createjs.SoundJS.version.substr(0,1));
	var __sound;
	if (createjs.SoundJS.version.substr(0,1) == '0') {
		__sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, 0);
	} else {
		__sound = createjs.Sound.play(id, {interrupt:createjs.Sound.INTERRUPT_ANY, loop:0});
	}
	if (__func != null && typeof __func == 'function') {
		__sound.addEventListener('complete', __func);
	}
	return __sound;
}
