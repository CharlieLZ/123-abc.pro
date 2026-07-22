var canvas, stage, lib = lib||{};

function ABCSong() {
	
	this.star_loader = null;
	this.nav = null;
	this.content_mc = null;
	this.song_mc = null;
	this.replay_btn = null;
	this.sendRate = true;
	this.startTime;
	
	var self = this;

	this.start = function() {
		PreloaderAn.loadJS(uiCommonAn, '840A34913633A249B0735EDAD3ACB513', self.onCommonLoaded);
	}
	this.onCommonLoaded = function(__lib) {
		lib.common = __lib;
		
		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);
		createjs.Touch.enable(stage);

		self.star_loader = new lib.common.StarLoader(); 
		self.star_loader.x = 1880/2; 
		self.star_loader.y = 768/2; 
		self.star_loader.scaleX = self.star_loader.scaleY = 2; 

		stage.addChild(self.star_loader); 
		stage.update(); 

		createjs.Ticker.setFPS(12); 
		createjs.Ticker.addEventListener('tick', stage); 
		stage.enableMouseOver();
		
		self.content_mc = new createjs.Container();
		self.content_mc.x = 428;

		self.nav = new lib.common.NavGloss();
		self.nav.close_btn.addEventListener("mousedown", self.closeBtnHandler);
		self.nav.close_btn.cursor = 'pointer';
		self.nav.close_btn.x += 5;
		self.nav.close_btn.y -= 5;
		self.nav.play_btn.visible = false;
		self.content_mc.addChild(self.nav);
		
		stage.addChild(self.content_mc);
		stage.update();
		
		self.handleResize();
		window.addEventListener("resize", self.handleResize);
		window.addEventListener("orientationchange", self.handleResize);

		Tracking.insideFlash(rateCode);
		self.loadManualList();
	}
	this.loadManualList = function() {
		self.loadFonts({
			src: [
				{
					src: "local('VAGzStarBold'), url(../../../gi/_font/StarfallvBP/vrzb___starbold-webfont.woff) format('woff')",
					family: "VAGzStarBold",
					weight: "bold"
				},
				{
					src: "local('regul'), url(../../../gi/_font/StarfallvBP/vrzl___starlight-webfont.woff) format('woff')",
					family: "VAGzStarLight"
				}
			],
			type: "font",
			injectCSS: true
		});
		return false;
	}
	this.loadFonts = function (config) {
		var loader = new createjs.FontLoader(config, true);
		loader.on("complete", self.loadAnime);
		loader.load();
	}
	this.loadAnime = function() {
		PreloaderAn.loadJS('song-abc-load.js', 'D808F50D2F267141BB59E70FBBB91E0C', self.onAnimeLoaded);
	}
	this.onAnimeLoaded = function (__lib) {
		lib.anime = __lib;
		console.log(lib.anime)
		self.anime_mc = new lib.anime.songabcload();
		self.content_mc.addChild(self.anime_mc);
		self.onLoadAct();
	}
	this.onLoadAct = function() {
		PreloaderAn.loadJS('song-abcstrad.js', '32BBE6445586E44A8D8E3A65E89693A9', self.onSongLoaded);
	}
	this.onSongLoaded = function (__lib) {
		lib.song = __lib;
		self.init();
	}
	this.init = function () {
		stage.removeChild(self.star_loader);
		self.star_loader = null;
		
		self.song_mc = new lib.song.songabcstrad();
		DisplayInfo.stopAll(self.song_mc);
		self.song_mc.bg_clouds.alpha = 0;
		self.content_mc.addChildAt(self.song_mc, 0);
		TweenMax.to(self.song_mc.bg_clouds, .75, {alpha:1, ease:Strong.easeIn});

		self.nav.play_btn.addEventListener("mousedown", self.playSong);
		self.nav.play_btn.buttonMode = true;
		self.nav.play_btn.mouseChildren = false;
		self.nav.play_btn.cursor = "pointer";
		self.nav.play_btn.visible = true;
	}
	this.playSong = function () {
		playSound('switchToggle');
		self.nav.play_btn.visible = false;
		self.nav.play_btn.removeEventListener("mousedown", self.playSong);
		TweenMax.to(self.anime_mc, .75, {alpha:0, ease:Strong.easeOut, onComplete:self.animeFadeComplete});
	}
	this.animeFadeComplete = function () {
		self.content_mc.removeChild(self.anime_mc);
		self.anime_mc = null;

		self.replay_btn = new lib.common.PlayAgainBtn();
		self.replay_btn.x = 780;
		self.replay_btn.y = 225;
		self.replay_btn.scaleX = self.replay_btn.scaleY = .75;
		self.replay_btn.visible = false;
		self.replay_btn.mouseChildren = false;
		self.replay_btn.cursor = "pointer";
		self.content_mc.addChild(self.replay_btn);
		
		self.startTime = createjs.Ticker.getTime();
		self.song_mc.gotoAndPlay(1);
		createjs.Ticker.addEventListener("tick", self.songCheck);
	}
	this.songCheck = function(evt) {
		if (self.song_mc.currentFrame >= 886) {
			self.song_mc.stop();
			createjs.Ticker.removeEventListener("tick", self.songCheck);
			if (self.sendRate) {
				self.sendRate = false;
				Tracking.nRate(rateCode);
			}
			self.nav.next_btn.visible = true;
			self.nav.next_btn.mouseChildren = false;
			self.nav.next_btn.cursor = "pointer";
			self.nav.next_btn.addEventListener("mousedown", self.closeBtnHandler);
			self.replay_btn.visible = true;
			self.replay_btn.addEventListener("mousedown", self.replayBtnHandler);
		} else {
			var now = createjs.Ticker.getTime();
			var __frame = Math.floor((now - self.startTime) / 1000 * 12 + 1);
			self.song_mc.gotoAndStop(__frame);
		}
	}
	this.replayBtnHandler = function(evt) {
		self.nav.next_btn.visible = false;
		self.nav.next_btn.removeEventListener("mousedown", self.closeBtnHandler);
		self.replay_btn.visible = false;
		self.replay_btn.removeEventListener("mousedown", self.replayBtnHandler);
		playSound('Beep');
		self.startTime = createjs.Ticker.getTime();
		self.song_mc.gotoAndPlay(1);
		createjs.Ticker.addEventListener("tick", self.songCheck);
	}
	this.closeBtnHandler = function (evt) {
		createjs.Sound.stop();
		self.nav.next_btn.visible = false;
		self.nav.next_btn.removeEventListener("mousedown", self.closeBtnHandler);
		self.nav.next_btn.removeEventListener("mousedown", self.replayBtnHandler);
		self.nav.close_btn.removeEventListener("mousedown", self.closeBtnHandler);
		self.nav.close_btn.gotoAndStop(1);
		if (self.replay_btn) self.replay_btn.visible = false;
		if (self.star_loader) stage.removeChild(self.star_loader);
		DisplayInfo.stopAll(self.content_mc);
		self.addCloseSnd();
	}
	this.addCloseSnd = function() {
		var closeSnd = playSound('goodbye');
		closeSnd.on("complete", self.closeSndComplete, self); 
	}
	this.closeSndComplete = function() {
		window.removeEventListener('resize', self.handleResize);
		window.removeEventListener('orientationchange', self.handleResize);
		createjs.Ticker.removeAllEventListeners('tick'); 
		window.location.href = exitURL;
	}
	this.handleResize = function() {
		rate = window.innerWidth / window.innerHeight;
		if (rate > 1024 / 768) {
			// Landscape
			canvas.style.height = window.innerHeight + 'px';
			canvas.style.width = window.innerHeight * 1880/768 + 'px'; 
			canvas.style.left = canvas.style.right = (window.innerWidth - window.innerHeight * 1880/768)/2 + 'px'; 
		} else {
			// Portrait
			var estimatedCanvasWidth = 1024;
			canvas.style.width = window.innerWidth/estimatedCanvasWidth * 1880+ 'px';
			canvas.style.height = window.innerWidth * 768/1024 + 'px'; 
			canvas.style.left = canvas.style.right = (estimatedCanvasWidth-1880)/(2*estimatedCanvasWidth)*window.innerWidth + 'px'; 
		} 
	}
}