var canvas, stage, lib = lib || {}, Main = Main || {};

function MixPaint() {
	var star_loader = null;
	var nav_mc = null;
	var content_mc = null;
	var currentScreen;
	this.json_obj;
	this.sndObj = {};
	var self = this;
	var dom_overlay_container;

	var __topic;
	this.start = function () {
		var commonComp = AdobeAn.getComposition('840A34913633A249B0735EDAD3ACB513');
		var commonLib = commonComp.getLibrary();
		var commonImages = commonComp.getImages();
		var imageManifest = commonLib.properties.manifest.filter(function (item) {
			return !item.src.endsWith('.mp3');
		});
		var soundManifest = commonLib.properties.manifest.filter(function (item) {
			return item.src.endsWith('.mp3');
		});
		createjs.Sound.registerSounds(soundManifest);
		if (imageManifest.length === 0) {
			self.onCommonLoaded(commonLib);
			return;
		}
		var imageLoader = new createjs.LoadQueue(false);
		imageLoader.on('fileload', function (event) {
			commonImages[event.item.id] = event.result;
		});
		imageLoader.on('complete', function () {
			self.onCommonLoaded(commonLib);
		});
		imageLoader.loadManifest(imageManifest);
	}
	this.onCommonLoaded = function (__lib) {
		lib.common = __lib;
		Main.compositions = {
			common: {
			  id: "840A34913633A249B0735EDAD3ACB513",
			}
		}
		dom_overlay_container = document.getElementById("dom_overlay_container");
		canvas = document.getElementById("canvas");
		stage = new createjs.Stage(canvas);
		createjs.Touch.enable(stage, true);
		self.stageWidth = 1280;
		self.stageHeight = 800;
		self.maxStageWidth = 1920;
		self.maxStageHeight = 1000;
		//Main.nav = {};
		var Resize = new CanvasResizer.Resize();
		Resize.width = self.stageWidth;
		Resize.height = self.stageHeight;
		Resize.maxHeight = self.maxStageHeight;
		Resize.maxWidth = self.maxStageWidth;
		Resize.stage = stage;
		Resize.resizeCallback = stage.update();
		Resize.start();

		star_loader = new lib.common.StarLoader();
		star_loader.x = 1280 / 2;
		star_loader.y = 800 / 2;
		star_loader.scaleX = star_loader.scaleY = 2;

		stage.addChild(star_loader);
		stage.update();

		createjs.Ticker.framerate = 12;
		createjs.Ticker.addEventListener('tick', stage);
		stage.enableMouseOver();
		self.loadJSON();
	}
	this.loadManualList = function () {
		self.loadFonts({
			src: [
				{
					src: "local('regul'), url(/gi/_font/StarfallBlock/starfallblock-bold-webfont.woff) format('woff')",
					family: "Starfall Block",
					weight: "bold"
				},
				{
					src: "local('regul'), url(/gi/_font/Liberation/LiberationSans-Bold-webfont.woff) format('woff')",
					family: "Liberation Sans"
				},
				{
					src: "local('regul'), url(/gi/_font/StarfallBlock/starfallblock-regular-webfont.woff) format('woff')",
					family: "Starfall Block"
				}
			],
			type: "font",
			injectCSS: true
		});
		return false;
	}
	this.loadFonts = function (config) {
		var loader = new createjs.FontLoader(config, true);
		loader.on("complete", self.loadJSON);
		loader.load();
	}
	this.loadJSON = function () {
		PreloaderAn.loadJSON('/json/creative-corner/mixpaint.json', self.onJSONComplete);
	}
	this.onJSONComplete = function (__obj) {
		console.log(__obj);
		self.json_obj = __obj;
		PreloaderAn.loadSnds(self.json_obj.snds, self.loadIntro, self.sndObj);
	}
	this.loadIntro = function () {
		PreloaderAn.loadJS('../mixpaint/mp-intro.js', 'EFB25D31C161417D972EADE52CFF0A6A', self.onIntroComplete);
	}
	this.onIntroComplete = function (__lib) {
		lib.intro = __lib;
		console.log(lib.intro);
		self.loadMenu();
	}
	this.loadMenu = function () {
		PreloaderAn.loadJS('../mixpaint/mp-menu.js', '6562380DA96C4DDEA3EB11E0FF1F780F', self.onMenuComplete);
	}
	this.onMenuComplete = function (__lib) {
		lib.menu = __lib;
		console.log(lib.menu);
		self.loadTubes();
		self.init();
	}
	this.loadTubes = function () {
		PreloaderAn.loadJS('../mixpaint/mp-tubes.js', '43D8417F85154DF0968FEB6A9E319A8C', self.onTubesComplete);
	}
	this.onTubesComplete = function (__lib) {
		lib.tubes = __lib;
		console.log(lib.tubes);
		self.loadStory();
	}
	this.loadStory = function () {
		PreloaderAn.loadJS('../mixpaint/mp-story.js', 'F748CD31F5264A7393089775DFCC5C00', self.onStoryComplete);
	}
	this.onStoryComplete = function (__lib) {
		lib.story = __lib;
		console.log(lib.story);
		self.loadAct();
	}
	this.loadAct = function () {
		PreloaderAn.loadJS('../mixpaint/mp-act.js', '4E16EDB7E5D540EF9AAC99590A116C42', self.onActComplete);
	}
	this.onActComplete = function (__lib) {
		lib.act = __lib;
		console.log(lib.act);
		self.loadHelper();
	}
	this.loadHelper = function () {
		PreloaderAn.loadJS('../mixpaint/mp-helper.js', 'A99367D348C347699C65CD0733CA3CDE', self.onHelperComplete);
	}
	this.onHelperComplete = function (__lib) {
		lib.helper = __lib;
		console.log(lib.helper);
		self.loadPaintings();
	}
	this.loadPaintings = function () {
		PreloaderAn.loadJS('../mixpaint/mp-paintings.js', '5F38EDE27A224EC0B6F314BD6D49BB95', self.onPaintingsComplete);
	}
	this.onPaintingsComplete = function (__lib) {
		lib.paintings = __lib;
		console.log(lib.paintings);
	}
	this.init = function () {
		content_mc = new createjs.Container();
		nav_mc = new lib.common.NavGloss();
		EventHandler.addEvent(nav_mc.close_btn, 'mousedown', self.closeBtnHandler);
		nav_mc.close_btn.cursor = 'pointer';
		nav_mc.close_btn.scaleX = nav_mc.close_btn.scaleY = 2;
		nav_mc.close_btn.visible = true;
		nav_mc.play_btn.visible = false;
		stage.addChild(nav_mc);
		nav_mc.x = 225;
		
	
		self.main_mc = new MixPaintAct();
		console.log(self.main_mc);
		self.main_mc.init(self, self.main_mc, nav_mc, content_mc, self.json_obj);

		stage.addChildAt(content_mc, 0);
		stage.update();

		Tracking.insideFlash(rateCode);

		stage.removeChild(star_loader);
		star_loader = null;
	}
	this.closeBtnHandler = function (evt) {
		createjs.Sound.stop();
		DisplayInfo.stopAll(content_mc);
		nav_mc.close_btn.removeEventListener("mousedown", self.closeBtnHandler);
		nav_mc.close_btn.gotoAndStop(1);
		var closeSnd = playSound('switchToggle');
		closeSnd.on("complete", self.closeSndComplete, self);
	}
	this.closeSndComplete = function () {
		createjs.Ticker.removeAllEventListeners('tick');
		window.location.href = exitURL;
	}
	this.resizeHandler = function () {
		//Fix resizing error while rotating the activity from landscape to portrait orientation on new touchscreen Chromebook(Dell).
		var dom_overlay_container = document.getElementById(
			"dom_overlay_container"
		  );
		  dom_overlay_container.style.width = window.innerWidth + "px";
		  dom_overlay_container.style.height = window.innerHeight + "px";
		  //End fix
		
		var closeBtnCoords = starfall.Resize.getTransformedCoordinates(
		  starfall.Resize.stageWidth - 100 * stage.scaleX,
		  100 * stage.scaleY
		);
		/*
		Main.nav.close_btn.x = closeBtnCoords.x;
		Main.nav.close_btn.y = closeBtnCoords.y;
		if (!Main.nav.close_btn.visible) {
		  Main.nav.close_btn.visible = true;
		}
		*/
		if (Main.nav.fullscreenOpenBtn) {
		  //fullscreen button
		  closeBtnCoords = starfall.Resize.getTransformedCoordinates(
			starfall.Resize.stageWidth - 206 * stage.scaleX,
			100 * stage.scaleY
		  );
		  Main.nav.fullscreenOpenBtn.x = closeBtnCoords.x;
		  Main.nav.fullscreenOpenBtn.y = closeBtnCoords.y;
		  Main.nav.fullscreenCloseBtn.x = closeBtnCoords.x;
		  Main.nav.fullscreenCloseBtn.y = closeBtnCoords.y;
		}
	  };
	this.toggleLoader = function (show) {
		if (show) {
		  dom_overlay_container.style.display = "block";
		  canvas.style.display = "none";
		} else {
		  dom_overlay_container.style.display = "none";
		  canvas.style.display = "block";
		}
	  };
}
