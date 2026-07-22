/**
* Class Name: MixPaintAct
* Description: activity core functionality
*/
var canvas, stage;
function MixPaintAct() {
		
		var system_obj;
		var nav_mc;
		var localPath;
		var frBtnList = ['close_btn'];
		
		var txtGen;
		var __json;
		var sndObj = {};
		var captions;
		var color_obj = {};
		
		var sparkle;
		var act_mc;
		var menu_mc;
		var tubes_mc;
		var intro_mc;
		var story_mc;
		var story_ani;
		var helper_mc;
		var helper_ani;
		var helper_tween;
		var artSelect_mc;
		var modeSelect_mc;
		var paintPalette_mc;
		var info_btn;
		var splat_mc;
		var title_mc;
		var chat_mc;
		var blob_mc;
		var colorMix_mc;
		var reset_btn;
		var check_btn;
		var mix_btn;
		var startOver_btn;
		var replay_btn;
		var paintings_mc;
		var paintingMenu_mc;
		var soPrompt_mc;
		var activeColor_btn;
		var mixedBlob_mc;
		var ppMix_btn;

		var paint_cnt = 0;
		var story_cnt = 1;
		var color_cnt;
		var chat_cnt;
		var swirl_cnt;
	 	var hint_cnt;
		var mBtnInitX;
		var	mBtnInitY;

		var colorCntObj = {red: 0, blue: 0, yellow: 0};
		var tubePressCnt = {red: 0, blue: 0, yellow: 0};
		var btnPress = false;
		var splatPress = false;
		var remixPress = false;
		var actComplete;
		var paintTopic;
		var act_mode;
		var pType;

		var tubePressList;
		var paintList = ["unicorn", "fish", "icecream", "dino"];
		var colorList = ["red", "blue", "yellow", "purple", "orange", "green"];
		var storyColorList = ["purple", "orange", "green"];
		var primaryList = ["red", "blue", "yellow"];

		var timeline;
		var color_mix_info;
		var currentColor = "#FFFFFF";
		var mixedColor = "#FFFFFF";
		var color;
		var selectFunc;
		var chatBubble_func;
		var soundChannel;
		var mpMain;
		var content_mc;
		var reward_mc;
		var cookieObj = {};
		var colorCodeObj = {red:"#EF0000", blue:"#202AFF", yellow:"#FFEA00", purple:"#9408B0", orange:"#FE7706", green:"#00B501"};
		var paintChoice_mc;
		var paintFrame_mc;
		var nextPulse_cnt = 0;
		var self = this;
		var fillSplat_mc;

		var UpdateMcCache = {
			mcUpdate: function(__mc, __bool){
				if (__bool){
					__mc.updateCache();
				} else {
					__mc.cache();
				}
			}
		}
		this.init = function(__ctl, mainClass, __nav, __obj, _json) {
			ctl_obj = __ctl;
			mpMain = mainClass;
			nav_mc = __nav;
			content_mc = __obj;
			__json = _json;
			sndObj = ctl_obj.sndObj;
			captions = new ClosedCaptions();
			captions.setTextFormat('Starfall Block', 40);
			captions.setCCinfo({ mc: content_mc, ptX: 600, ptY: 55 });
			self.setTextFormat('VAGzStarBold', 140);
			self.initIntro();
		}
		this.initIntro = function(evt) {
			if (lib.intro != undefined) {
				self.setIntro();
			} else {
				star_loader = new lib.common.StarLoader();
				star_loader.x = 1280 / 2;
				star_loader.y = 800 / 2;
				star_loader.scaleX = star_loader.scaleY = 2;
				stage.addChild(star_loader);
				createjs.Ticker.addEventListener("tick", self.introLoadStar);
			}
		}
		this.introLoadStar = function (evt) {
			if (lib.intro != undefined) {
				stage.removeChild(star_loader);
				star_loader = null;
				createjs.Ticker.removeEventListener("tick", self.introLoadStar);
				self.setIntro();
			} else {
				console.log('loading intro');
			}
		}
		this.initTubes = function(evt) {
			tubes_mc = new lib.tubes.mptubes();
			DisplayInfo.stopAllAt0(tubes_mc);
			tubes_mc.s2_tubes.red_tube_mc.visible = false;
			tubes_mc.s2_tubes.yellow_tube_mc.visible = false;
			tubes_mc.s3_tubes.red_tube_mc.visible = false;
			tubes_mc.s3_tubes.blue_tube_mc.visible = false;
			tubes_mc.s3_tubes.yellow_tube_mc.visible = false;
		}
		this.playBtnHandler = function (evt) {
			nav_mc.play_btn.visible = false;
			EventHandler.removeEvent(nav_mc.play_btn, 'mousedown', self.playBtnHandler);
			playSound('switchToggle', self.playIntro);
		}
		this.setIntro = function(){
			intro_mc = new lib.intro.mpintro();
			title_mc = intro_mc["title_mc"];
			DisplayInfo.stopAllAt0(title_mc);
			content_mc.addChild(intro_mc);
			nav_mc.play_btn.buttonMode = true;
			nav_mc.play_btn.mouseChildren = false;
			nav_mc.play_btn.cursor = "pointer";
			nav_mc.play_btn.visible = true;
			nav_mc.play_btn.x = nav_mc.play_btn.x - 100;
			EventHandler.addEvent(nav_mc.play_btn, 'mousedown', self.playBtnHandler);
		}
		this.playIntro = function(evt) {
			title_mc.gotoAndPlay(1);
			EventHandler.addEvent(title_mc, "tick", self.introCheck);
			act_mode = "story";
			self.getCookie();
		}
		this.getCookie = function(){
			var cc_mixpaint_cookie = Cookies.getLocalItem('cc_mixpaint');
        	console.log('cc_mixpaint', cc_mixpaint_cookie);
			if (cc_mixpaint_cookie != null) {
                console.log("cookie exist");
				actComplete = true;
			} else {
				console.log("cookie does not exist");
				actComplete = false;
			}
		}
		this.writeCookie = function() {
            console.log("writeCookie");
			var cc_mixpaint_cookie = Cookies.getLocalItem('cc_mixpaint');
            if (cc_mixpaint_cookie == null) {
				cookieObj.cc_mixpaint = {};
			} else {
				cookieObj = cc_mixpaint_cookie.cookieObj;
			}
			cookieObj.cc_mixpaint.showMenu = actComplete;
			Cookies.setLocalItem('cc_mixpaint', { cookieObj: cookieObj});
		}
		this.introCheck = function(evt) {
			var __str = '';
			if (title_mc.currentLabel != null){
				__str = title_mc.currentLabel;
			}
			if (__str.indexOf('stop') > -1){
				title_mc.stop();
				EventHandler.removeEvent(title_mc, "tick", self.introCheck);
				btnPress = true;
				self.playTitle(null);
				self.initMenu();
			} else if (title_mc.currentFrame == title_mc.totalFrames - 1) {
				title_mc.stop();
				EventHandler.removeEvent(title_mc, "tick", self.introCheck);
				title_mc.visible = false;
				content_mc.removeChild(intro_mc);
				self.initTubes();
				self.initAct();
				self.loadColorsJSON();
				self.initPaintings();
				self.initStory();
				self.initHelper();
				//self.paintingMenu();
				//self.playReward(null);
				//return; 
				if (actComplete){
					self.selectScreen(null);
				} else {
					self.setStory();
				}
			}
		}
		this.initStory = function(evt) {
			if (lib.story != undefined) {
				story_mc = new lib.story.mpstory();
			} else {
				star_loader = new lib.common.StarLoader();
				star_loader.x = 1280 / 2;
				star_loader.y = 800 / 2;
				star_loader.scaleX = star_loader.scaleY = 2;
				stage.addChild(star_loader);
				createjs.Ticker.addEventListener("tick", self.storyLoadStar);
			}
		}
		this.storyLoadStar = function (evt) {
			if (lib.story != undefined) {
				stage.removeChild(star_loader);
				star_loader = null;
				createjs.Ticker.removeEventListener("tick", self.storyLoadStar);
				story_mc = new lib.story.mpstory();
			} else {
				console.log('loading story');
			}
		}
		this.loadColorsJSON = function () {
			PreloaderAn.loadJSON('/json/creative-corner/color-mixing.json', self.colorsComplete);
		}
		this.colorsComplete = function (__obj) {
			console.log(__obj);
			color_mix_info = __obj;
			//self.setColorTest();
		}
		this.initAct = function(evt) {
			act_mc = new lib.act.mpact();
			DisplayInfo.stopAllAt0(act_mc);
			paintPalette_mc = new lib.act["paintPalette_mc"]();
			DisplayInfo.stopAllAt0(paintPalette_mc);
			paintPalette_mc.x = 641.4;
			paintPalette_mc.y = 648.4;
			paintPalette_mc.tubeMix_ani.visible = false;
			mixedBlob_mc = paintPalette_mc.mix_mc.blob_mc;
			for (var i=0; i < colorList.length; i++){
				paintPalette_mc[colorList[i]+"_btn"].hl.visible = false;
			}
			startOver_btn = act_mc.startOver_btn;
			soPrompt_mc = new lib.act["soPrompt_mc"]();
			DisplayInfo.stopAllAt0(soPrompt_mc);
			act_mc.info_btn.visible = false;
			info_btn = act_mc.info_btn;
			colorMix_mc = new lib.act["colorMix_mc"]();
			DisplayInfo.stopAllAt0(colorMix_mc);
			colorMix_mc.x = 640.05;
			colorMix_mc.y = 292;
			self.showCmBlobShine(false);
			act_mc.mix_btn.visible = false;
			mix_btn = act_mc.mix_btn;
			mBtnInitX = mix_btn.x;
			mBtnInitY = mix_btn.y;
		}
		this.initHelper = function(evt) {
			helper_tween = new lib.helper["helper_tween"]();
			DisplayInfo.stopAllAt0(helper_tween);
			helper_ani = new lib.helper["helper_ani"]();
			DisplayInfo.stopAllAt0(helper_ani);
		}
		this.initPaintings = function(evt) {
			paintings_mc = new lib.paintings.mppaintings();
			DisplayInfo.stopAllAt0(paintings_mc);
		}
		this.initMenu = function(evt) {
			modeSelect_mc = new lib.menu["modeSelect_mc"]();
			DisplayInfo.stopAllAt0(modeSelect_mc);
			artSelect_mc = new lib.menu["artSelect_mc"]();
			DisplayInfo.stopAllAt0(artSelect_mc);
		}
		this.playTitle = function(evt){
			if (!btnPress) return;
			btnPress = false;
			self.nextBtnCommon();
			title_mc.title_ani.gotoAndPlay(1);
			EventHandler.addEvent(title_mc.title_ani, "tick", self.titleAniCheck);
		}
		this.titleAniCheck = function(evt){
			if (title_mc.title_ani.currentFrame == title_mc.title_ani.totalFrames - 1){
				EventHandler.removeEvent(title_mc.title_ani, "tick", self.titleAniCheck);
				title_mc.title_ani.stop();
				title_mc.title_btn.buttonMode = false;
				title_mc.title_btn.mouseChildren = false;
				EventHandler.addEvent(title_mc.title_btn, "mousedown", self.playTitle);
				self.addNextBtn(self.titleNextPress);
				btnPress = true;
				//self.loadColorsJSON();
			}
		}
		this.setColorTest = function(){
			act_mode = "paint";
			self.initTubes();
			self.initAct();
			content_mc.addChild(act_mc);
			act_mc.visible = true;
			content_mc.addChild(colorMix_mc);
			self.paintMixing(null);
		}
		this.titleNextPress = function(evt){
			self.nextBtnCommon();
			playSound("switchToggle");
			title_mc.play();
			EventHandler.addEvent(title_mc, "tick", self.introCheck);
		}
		this.setStory = function(){
			if (story_ani){
				story_ani.gotoAndStop(0);
				content_mc.removeChild(story_ani);
				story_cnt++;
			}
			story_ani = new lib.story["story"+story_cnt];
			DisplayInfo.stopAllAt0(story_ani);
			if (story_ani.splat_mc) story_ani.splat_mc.visible = false;
			for (var i=1; i < 4; i++){
				if (story_ani["chat"+i]) story_ani["chat"+i].visible = false;
				if (story_cnt == 2 && i == 2){
					i++;
				}
			}
			story_ani.visible = true;
			content_mc.addChild(story_ani);
			chat_cnt = 1;
			if (story_cnt == 4){
				self.setStoryInteraction();
				colorCntObj.red = 0;
				colorCntObj.blue = 0;
				colorCntObj.yellow = 0;
				tubePressCnt.red = 0;
				tubePressCnt.blue = 0;
				tubePressCnt.yellow = 0;
				story_ani.mix_ani.visible = false;
				story_ani.mix_ani.gotoAndStop(0);
				story_ani.mix_ani.mix_mc.visible = false;
			} else if (story_cnt == 3){
				tubePressList = [];
				DisplayInfo.stopAll(story_ani);
				story_ani.blueTube_ani.visible = true;
				story_ani.blueTube_ani.gotoAndPlay(0);
				tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.gotoAndStop(0);
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.gotoAndStop(0);
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.gotoAndStop(0);
				story_ani.green_ani.splat_mc.visible = false;
				story_ani.green_ani.yellowblob_mc.gotoAndStop(0);
				story_ani.green_ani.blueblob_mc.gotoAndStop(0);
				story_ani.green_ani.blueblob_mc.visible = false;
				story_ani.green_ani.yellowblob_mc.visible = false;
			} else if (story_cnt == 2){
				tubePressList = [];
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.gotoAndStop(0);
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.gotoAndStop(0);
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
				story_ani.orange_ani.splat_mc.visible = false;
				story_ani.orange_ani.yellowblob_mc.gotoAndStop(0);
				story_ani.orange_ani.redblob_mc.gotoAndStop(0);
				story_ani.orange_ani.yellowblob_mc.visible = false;
				story_ani.orange_ani.redblob_mc.visible = false;
			}
			console.log ("story_cnt: ", story_cnt)
			story_ani.gotoAndPlay(0);
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			btnPress = false;
		}
		this.storyCheck = function(evt) {
			var __str = '';
			if (story_ani.currentLabel != null){
				__str = story_ani.currentLabel;
			}
			if (__str.indexOf('stop') > -1){
				story_ani.stop();
				EventHandler.removeEvent(story_ani, "tick", self.storyCheck);
				var num = parseInt(__str.substr(-1));
				self.storyStopChecks(num);
				btnPress = true;
			} else if (__str.indexOf('restart') > -1) {
				if (chat_mc) chat_mc.visible = false;
				chat_cnt = parseInt(__str.substr(-1));
				if (story_cnt == 4 && chat_cnt == 2){
					self.setChatBubble(story_ani, chat_cnt, self.playChatAudio);
				} else {
					self.setChatBubble(story_ani, chat_cnt, self.restartStoryAni);
				}
			} else if (__str.indexOf('splat') > -1) {
				splatPress = false;
				story_ani.splat_mc.visible = true;
				story_ani.splat_mc.gotoAndPlay(1);
				EventHandler.addEvent(story_ani.splat_mc, "tick", self.storySplatCheck);
			} else if (__str.indexOf('interact') > -1) {
				story_ani.stop();
				EventHandler.removeEvent(story_ani, "tick", self.storyCheck);
				self.setStoryInteraction('interact');
				if (story_cnt != 4){
					self.addNextBtn(self.storyNextPress); 685
					if (story_cnt == 3) nav_mc.next_btn.y = 470;
				} else {
					story_ani.mix_ani.visible = false;
					self.storyMixing();
				}
				btnPress = true;
			} else if (__str.indexOf('mix_ani') > -1) {
				paintPalette_mc.mixOutline_mc.visible = false;
				paintPalette_mc.mix_btn.visible = false;
				paintPalette_mc.txt_mix.alpha = 1;
				TweenMax.to(paintPalette_mc.txt_mix, .5, {alpha: 0});
				story_ani.addChild(story_ani.mix_ani);
				story_ani.mix_ani.visible = true;
				story_ani.mix_ani.gotoAndPlay(0);
				EventHandler.addEvent(story_ani.mix_ani, "tick", self.mixAniCheck);
			} else if (__str.indexOf('chat3') > -1) {
				story_ani.chat3.visible = true; 
			} else if (__str.indexOf('tubes') > -1) {
				story_ani.blueTube_ani.stop();
				story_ani.blueTube_ani.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.visible = true;
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = true;
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = true;
				content_mc.addChild(tubes_mc);
			} else if (story_ani.currentFrame == story_ani.totalFrames - 1) {
				story_ani.stop();
				EventHandler.removeEvent(story_ani, "tick", self.storyCheck);
				if (story_cnt != 4){
					paintPalette_mc.visible = false;
					story_ani.removeChild(paintPalette_mc);
					self.setStory();
				} else {
					remixPress = false;
					story_cnt = 0;
					Conversions.setRGBhex(story_ani.mix_ani.mix_mc.fill, "#CCCCCC");
					self.paintingMenu();
					actComplete = true;
					self.writeCookie();
				}
			}
		}
		this.storyStopChecks = function(num){
			console.log("storyStopCheck", num);
			if (story_cnt == 2 && num == 1){
				chatBubble_func = null;
				EventHandler.removeEvent(chat_mc, "mousedown", self.playChatAudio);
				EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
				paint_cnt = 0;
				self.setRedYellowMix();
			} else if (story_cnt == 3 && num <= 3){
				chatBubble_func = null;
				if (num != 1){
					EventHandler.removeEvent(chat_mc, "mousedown", self.playChatAudio);
					EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
				} else {
					self.setBlueYellowMix();
				}
			} else if (story_cnt == 4 && num == 1){
				paintPalette_mc.mix_btn.hl_ani.visible = true;
				paintPalette_mc.mix_btn.hl_ani.gotoAndPlay(1);
				paintPalette_mc.mix_btn.buttonMode = false;
				paintPalette_mc.mix_btn.mouseChildren = false;
				EventHandler.removeEvent(paintPalette_mc.mix_btn, "mousedown", self.storyNextPress);
				EventHandler.addEvent(paintPalette_mc.mix_btn, "mousedown", self.storyNextPress);
			} else if (story_cnt == 4 && num == 2){
				self.addNextBtn(self.storyNextPress);
				nav_mc.next_btn.y -= 215;
				self.setStoryInteraction();
				EventHandler.removeEvent(paintPalette_mc.mix_btn, "mousedown", self.remixStoryColor);
				EventHandler.addEvent(paintPalette_mc.mix_btn, "mousedown", self.remixStoryColor);
				EventHandler.removeEvent(story_ani.chat3, "mousedown", self.playChatAudio);
				EventHandler.addEvent(story_ani.chat3, "mousedown", self.playChatAudio);
				remixPress = true;
				btnPress = true;
			} else if (num == 3 && (story_cnt == 2 || story_cnt == 3)){
				story_ani.storyMix_btn.gotoAndPlay(1);
			} else {
				if (!nav_mc.next_btn.visible) self.addNextBtn(self.storyNextPress);
			}
		}
		this.playStorySplat = function(evt){
			if (!btnPress || soundChannel != null) return;
			EventHandler.removeEvent(chat_mc, "mousedown", self.playChatAudio);
			splatPress = true;
			EventHandler.removeEvent(story_ani.splat_mc, "mousedown", self.playStorySplat);
			story_ani.splat_mc.visible = true;
			story_ani.splat_mc.gotoAndPlay(1);
			EventHandler.addEvent(story_ani.splat_mc, "tick", self.storySplatCheck);
			story_ani.gotoAndPlay("splat");
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			if (story_cnt == 2){
				story_ani.redblob_mc.gotoAndStop(story_ani.redblob_mc.totalFrames - 1);
			} else if (story_cnt == 3){
				story_ani.blueblob_mc.gotoAndStop(story_ani.blueblob_mc.totalFrames - 1);
			}
		}
		this.setChatBubble = function(__container,__num, __func){
			console.log ("setChatBubble", act_mode, __num, __func);
			chatBubble_func = __func;
			if (__container["chat"+__num]){
				chat_mc = __container["chat"+__num];
			} else {
				var __c = __container.parent; //story_ani parent (story1/story2...)
				chat_mc = __c["chat"+__num];
			}
			console.log (chat_mc.name);
			if (act_mode == "reward"){
				EventHandler.addEvent(chat_mc, "mousedown", self.chatBubble_func);
			} else {
				EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
			}
			chat_mc.visible = true;
		}
		this.playChatAudio = function(evt=null){
			if (!btnPress || soundChannel != null) return;
			console.log ("playChatAudio", chat_cnt);
			if (act_mode == "story"){
				playSound("vo_story"+story_cnt+chat_cnt, self.audioComplete);
				if (story_cnt == 4 && chat_cnt == 1){
					paintPalette_mc.mix_btn.hl_ani.gotoAndStop(0);
					paintPalette_mc.mix_btn.hl_ani.visible = false;
				} else if ((story_cnt == 2 || story_cnt == 3) && chat_cnt == 1){
					TweenMax.killDelayedCallsTo(self.hintStoryTubes);
					TweenMax.killAll();
					self.storyTubeBtnHandler(false);
					mix_btn.scaleX = mix_btn.scaleY = 1;
				} 
			} else if (act_mode == "paint"){
				playSound("vo_choose_picture", self.audioComplete);
			}
			Conversions.setRGBhex(chat_mc.txt, "#FF0000");
		}
		this.audioComplete = function(evt){
			console.log ("audioComplete", chat_cnt, chatBubble_func);
			Conversions.setRGBhex(chat_mc.txt, "#000000");
			soundChannel = null;
			if (act_mode == "story" && chatBubble_func != null){
				if (story_cnt == 4 && chat_cnt == 2){
					chat_cnt = 3;
					chat_mc = story_ani.chat3;
					btnPress = true;
					chatBubble_func();
				} else if (story_cnt == 4 && chat_cnt == 3){
					chat_cnt = 2;
					chat_mc = story_ani.chat2;
					self.restartStoryAni();
				} else {
					chatBubble_func();
				}
			} else if (act_mode == "story" && chatBubble_func == null){
				btnPress = true;
			} else if (act_mode == "paint"){
				if (paintTopic) nav_mc.next_btn.visible = true;
				btnPress = true;
			}
			if ((story_cnt == 2 || story_cnt == 3) && chat_cnt == 1){
				if (!mix_btn.visible){
					if (paint_cnt == 0){
						self.hintStoryTubes();
					} else {
						self.storyTubeBtnHandler(true);
						btnPress = true;
					}
				} else {
					console.log ("animate mix btn");
					self.animateMixBtn();
				}
			} 
		}
		this.storyTubeBtnHandler = function(__bool){
			if (__bool){
				if (story_cnt == 2 && tubePressList[0] != "red" || story_cnt == 3) EventHandler.addEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "mousedown", self.playTubeAni);
				if (tubePressList[0] != "yel") EventHandler.addEvent(tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc, "mousedown", self.playTubeAni);
				if (story_cnt == 3 && tubePressList[0] != "blu") EventHandler.addEvent(tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc, "mousedown", self.playTubeAni);
			} else {
				EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "mousedown", self.playTubeAni);
				EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc, "mousedown", self.playTubeAni);
				if (story_cnt == 3) EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc, "mousedown", self.playTubeAni);
			}
		}
		this.playTubeAni = function(evt){
			if (!btnPress) return;
			btnPress = false;
			TweenMax.killDelayedCallsTo(self.hintStoryTubes);
			var zIndex;
			var tube_mc = evt.target;
			var color = tube_mc.name.split("_")[0];
			EventHandler.removeEvent(tube_mc, "mousedown", self.playTubeAni);
			if (story_cnt == 3 && color == "red"){
				tubes_mc["s"+story_cnt+"_tubes"].addChild(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc);
				playSound("sfx_tubeno", null);
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.gotoAndPlay(1);
				EventHandler.addEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "tick", self.redTubeCheck);
				return;
			} else if (story_cnt == 3){
				tube_mc.parent.addChild(tube_mc);
				tubes_mc["s"+story_cnt+"_tubes"].addChild(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc);
				blob_mc = story_ani.green_ani[color+"blob_mc"];
				if (color == "blue" && paint_cnt == 1){
					zIndex = story_ani.green_ani.getChildIndex(story_ani.green_ani.yellowblob_mc);
					if (zIndex == 2) story_ani.green_ani.addChildAt(story_ani.green_ani.blueblob_mc, zIndex);
				} 
			} else if (story_cnt == 2){
				tube_mc.parent.addChild(tube_mc);
				blob_mc = story_ani.orange_ani[color+"blob_mc"];
				if (color == "red" && paint_cnt == 1){
					zIndex = story_ani.orange_ani.getChildIndex(story_ani.orange_ani.yellowblob_mc);
					if (zIndex == 2) story_ani.orange_ani.addChildAt(story_ani.orange_ani.redblob_mc, zIndex);
				}
			}
			paint_cnt++;
			tubePressList.push(tube_mc.name.substr(0,3));
			tube_mc.gotoAndPlay(0);
			EventHandler.addEvent(tube_mc, "tick", self.storyTubeCheck);
			blob_mc.visible = true;
			blob_mc.gotoAndPlay(0);
			EventHandler.addEvent(blob_mc, "tick", self.storyBlobCheck);
		}
		this.storyNextPress = function(evt){
			console.log ("storyNextPress", chat_cnt);
			btnPress = false;
			self.nextBtnCommon();
			playSound("switchToggle");
			if (story_cnt == 4 && chat_cnt == 1){
				paintPalette_mc.mix_btn.hl_ani.visible = false;
				paintPalette_mc.mix_btn.hl_ani.gotoAndStop(0);
				EventHandler.removeEvent(paintPalette_mc.mix_btn, "mousedown", self.storyNextPress);
			} else if (story_cnt == 3 && chat_cnt == 2 && story_ani.currentLabel == "interact"){
				console.log ("play tub mix ani");
				paintPalette_mc.mix_mc.hl.visible = false;
				mixedBlob_mc.visible = false;
				Conversions.setRGBhex(mixedBlob_mc.fill, mixedColor);
				self.tweenToColor(colorMix_mc.blob_mc, mixedColor,0);
				paintPalette_mc.addChild(paintPalette_mc.tubeMix_ani);
				paintPalette_mc.tubeMix_ani.visible = true;
				paintPalette_mc.tubeMix_ani.gotoAndPlay(1);
				EventHandler.addEvent(paintPalette_mc.tubeMix_ani, "tick", self.tubeMixCheck);
			}
			if (chat_mc){
				Conversions.setRGBhex(chat_mc.txt, "#000000");
				EventHandler.removeEvent(chat_mc, "mousedown", self.restartStoryAni);
			}
			if (splat_mc){
				splat_mc.visible = false;
				splat_mc.gotoAndStop(0);
				EventHandler.removeEvent(splat_mc, "tick", self.splatAniCheck);
			}
			if (story_cnt <= 3 && story_ani.splat_mc.visible){
				story_ani.splat_mc.visible = false;
				story_ani.splat_mc.gotoAndStop(0);
				EventHandler.removeEvent(story_ani.splat_mc, "tick", self.storySplatCheck);
				story_ani.gotoAndPlay("storyNext");
				EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			} else if (story_cnt == 4 && chat_cnt == 2){
				story_ani.gotoAndPlay("zt2");
				EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			} else {
				story_ani.play();
				EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			}
			if (story_ani.storyMix_btn) story_ani.storyMix_btn.gotoAndStop(0);
		}
		this.storySplatCheck = function(evt){
			if (story_ani.splat_mc.currentFrame == story_ani.splat_mc.totalFrames - 1){
				EventHandler.removeEvent(story_ani.splat_mc, "tick", self.storySplatCheck);
				story_ani.splat_mc.stop();
				TweenMax.delayedCall(1, self.setStorySplatEvent);
			}
		}
		this.setStorySplatEvent = function(){
			EventHandler.addEvent(story_ani.splat_mc, "mousedown", self.playStorySplat);
			EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
		}
		//Story Orange Sequence
		this.setRedYellowMix = function(){
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = true;
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.buttonMode = false;
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.mouseChildren = false;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = true;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.buttonMode = false;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.mouseChildren = false;
			TweenMax.delayedCall(.3, self.storyTubeBtnHandler, [true]);
			TweenMax.delayedCall(7, self.hintStoryTubes);
			content_mc.addChild(tubes_mc);
		}
		this.hintStoryTubes = function(){
			btnPress = false;
			story_ani.gotoAndPlay("restart"+chat_cnt);
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			if (story_cnt == 2){
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
			} else if (story_cnt == 3){
				story_ani.blueTube_ani.visible = true;
				story_ani.blueTube_ani.gotoAndPlay("restart");
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.gotoAndStop(0);
				tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.visible = false;
				tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
			}
			self.storyTubeBtnHandler(false);
		}
		
		this.redTubeCheck = function(evt){
			if (tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.currentFrame == tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.totalFrames - 1){
				EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "tick", self.redTubeCheck);
				tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.stop();
				if (story_ani.currentFrame == story_ani.totalFrames - 1){
					EventHandler.addEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "mousedown", self.playTubeAni);
					btnPress = true;
				}
			}
		}
		this.storyTubeCheck = function(evt){
			if(evt.target.currentFrame == evt.target.totalFrames - 1) {
				EventHandler.removeEvent(evt.target, "tick", self.storyTubeCheck);
				evt.target.stop();
				if (paint_cnt == 2){
					paint_cnt = 0;
					EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc, "mousedown", self.playTubeAni);
					EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc, "mousedown", self.playTubeAni);
					if (story_cnt == 3) EventHandler.removeEvent(tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc, "mousedown", self.playTubeAni);
					self.showMixBtn(true);
				} 
				btnPress = true;
			}
		}
		this.showMixBtn = function(__bool){
			console.log ("showMixBtn", __bool);
			mix_btn.visible = __bool;
			if (!__bool) return;
			mix_btn.buttonMode = false;
			mix_btn.mouseChildren = false;
			var func;
			if (act_mode == "story"){
				if (story_cnt == 2){
					content_mc.addChild(mix_btn);
					mix_btn.hl.visible = true;
					mix_btn.x = mBtnInitX;
					mix_btn.y = mBtnInitY;
					func = self.setOrangeAni;
					mix_btn.alpha = 0;
					TweenMax.to(mix_btn, .5, {alpha: 1, onComplete: self.animateMixBtn});
				} else if (story_cnt == 3){
					content_mc.addChild(mix_btn);
					mix_btn.hl.visible = true;
					mix_btn.x = mBtnInitX;
					mix_btn.y = mBtnInitY;
					func = self.setGreenAni;
					mix_btn.alpha = 0;
					TweenMax.to(mix_btn, .5, {alpha: 1, onComplete: self.animateMixBtn});
				} else if (story_cnt == 4){
					colorMix_mc.addChild(mix_btn);
					mix_btn.hl.visible = false;
					mix_btn.alpha = 1;
					mix_btn.x = colorMix_mc.mix_pos.x;
					mix_btn.y = colorMix_mc.mix_pos.y;
					func = self.mixColorPress;
				}
			} else if (act_mode == "paint"){
				colorMix_mc.addChild(mix_btn);
				mix_btn.hl.visible = false;
				mix_btn.alpha = 1;
				mix_btn.x = colorMix_mc.mix_pos.x;
				mix_btn.y = colorMix_mc.mix_pos.y;
				func = self.mixColorPress;
			}
			if (!mix_btn.hasEventListener("mousedown")){
				EventHandler.addEvent(mix_btn, "mousedown", func);
			}
			self.showBrushMix("show");
		}
		this.animateMixBtn = function(){
			TweenMax.to(mix_btn, .5, {scaleX:mix_btn.scaleX+.2, scaleY:mix_btn.scaleY+.2, ease:Linear.easeNone, repeat:5, yoyo:true});
			TweenMax.delayedCall(5.5, self.animateMixBtn);
		}
		this.showBrushMix = function(__str){
			if (__str == "show"){
				mix_btn.mixBrush.visible = true;
				mix_btn.mixBrush.gotoAndStop(mix_btn.mixBrush.totalFrames - 1);
				mix_btn.shadow.visible = true;
				mix_btn.noBrush.visible = false;
				mix_btn.noBrushShadow.visible = false;
			} else if (__str == "hide"){
				mix_btn.mixBrush.visible = false;
				mix_btn.mixBrush.gotoAndStop(0);
				mix_btn.shadow.visible = false;
				mix_btn.noBrush.visible = true;
				mix_btn.noBrushShadow.visible = true;
			}
		}
		this.playMixBtn = function(){
			self.showBrushMix("hide");
			self.playMixAni();
		}
		this.mixBtnAniCheck = function(evt){
			var __str = '';
			if (mix_btn.currentLabel != null){
				__str = mix_btn.currentLabel;
			}
			if (mix_btn.currentFrame == mix_btn.totalFrames - 1) {
				EventHandler.removeEvent(mix_btn, "tick", self.mixBtnAniCheck);
				mix_btn.stop();
				self.playMixAni();
			}
		}
		this.playMixAni = function(){
			colorMix_mc.addChild(colorMix_mc.brush_mc);
			colorMix_mc.brush_mc.visible = true;
			colorMix_mc.brush_mc.brush.gotoAndStop(0);
			if (color_cnt != 0){
				colorMix_mc.brush_mc.brush.paint_fill.visible = true;
				colorMix_mc.brush_mc.brush.brush_fill.visible = true;
			} else {
				colorMix_mc.brush_mc.brush.paint_fill.visible = false;
				colorMix_mc.brush_mc.brush.brush_fill.visible = false;
			}
			colorMix_mc.brush_mc.brush.paint_fill.alpha = 0;
			colorMix_mc.brush_mc.brush.brush_fill.alpha = 0;
			swirl_cnt = 0;
			colorMix_mc.brush_mc.gotoAndPlay(1);
			EventHandler.addEvent(colorMix_mc.brush_mc, "tick", self.brushAniCheck);
			playSound("switchToggle");
			var isSplatVisible = self.tubeCntCheck();
			if (isSplatVisible) TweenMax.delayedCall(.5, playSound, ["sfx_mixswirl", null]);
		}
		this.tubeCntCheck = function(){
			var __bool = false;
			if (tubePressCnt.red != colorCntObj.red || tubePressCnt.blue != colorCntObj.blue || tubePressCnt.yellow != colorCntObj.yellow){
				__bool = true;
			}
			return __bool;
		}
		this.colorCntCheck = function(){
			var cnt = colorCntObj.red + colorCntObj.blue + colorCntObj.yellow;
			return cnt;
		}
		this.brushAniCheck = function(evt){
			var __str = '';
			if (colorMix_mc.brush_mc.currentLabel != null){
				__str = colorMix_mc.brush_mc.currentLabel;
			}
			if (__str.indexOf('color') > -1){
				if (color_cnt != 0 && !colorMix_mc.blob_mc.visible){
					self.showBlob();
				}
				var pFill = colorMix_mc.brush_mc.brush.paint_fill;
				var bFill = colorMix_mc.brush_mc.brush.brush_fill;
				if (color_cnt != 0){
					console.log("TWEEEN COLOR FILL");
					TweenMax.to(pFill, 1, {alpha:1});
					TweenMax.to(bFill, 1, {alpha:1});
					self.tweenToColor(pFill, currentColor,700);
					self.tweenToColor(bFill, currentColor,700);
					self.tweenToColor(colorMix_mc.blob_mc, currentColor,1000);
					console.log("CURRENT COLOR: ",currentColor);
					TweenMax.delayedCall(.7, self.brushFillUpdate, [pFill]);
					TweenMax.delayedCall(.7, self.brushFillUpdate, [bFill]);
				}
			} else if (__str == "fill"){
				pFill = colorMix_mc.brush_mc.brush.paint_fill;
				bFill = colorMix_mc.brush_mc.brush.brush_fill;
				colorMix_mc.brush_mc.brush.gotoAndPlay(0);
				bFill.gotoAndPlay(0);
				pFill.gotoAndPlay(0);
			} else if (__str == "red" || __str == "blue" || __str == "yellow") {
				color = __str;
				colorMix_mc["pSplat_"+color].gotoAndStop(0);
				if (color == "red"){
					for (var i=0; i<3; i++){
						if (colorCntObj[primaryList[i]] != tubePressCnt[primaryList[i]]){
							var swirl_mc = colorMix_mc["swirl"+ (i+1)];
							Conversions.setRGBhex(swirl_mc, colorCodeObj[primaryList[i]]);
							swirl_mc.gotoAndPlay(1);
							EventHandler.addEvent(swirl_mc, "tick", self.swirlCheck);
							swirl_mc.alpha = 0;
							swirl_mc.visible = true;
							TweenMax.to(swirl_mc, .5, {alpha:1});
						} else {
							colorMix_mc["swirl"+ (i+1)].visible = false;
						}
					}
					if (swirl_mc){
						swirl_mc = colorMix_mc["swirl4"];
						Conversions.setRGBhex(swirl_mc, currentColor);
						swirl_mc.visible = true;
						swirl_mc.gotoAndPlay(1);
						EventHandler.addEvent(swirl_mc, "tick", self.swirlCheck);
					}
				}
			} else if (__str == "stop") {
				colorMix_mc.brush_mc.brush.stop();
				pFill = colorMix_mc.brush_mc.brush.paint_fill;
				bFill = colorMix_mc.brush_mc.brush.brush_fill;
				bFill.stop();
				pFill.stop();
			} else if (colorMix_mc.brush_mc.currentFrame == colorMix_mc.brush_mc.totalFrames - 1) {
				EventHandler.removeEvent(colorMix_mc.brush_mc, "tick", self.brushAniCheck);
				colorMix_mc.brush_mc.gotoAndStop(0);
				colorMix_mc.brush_mc.visible = false;
				self.showBrushMix("show");
				mix_btn.mixBrush.gotoAndPlay(0);
				EventHandler.addEvent(mix_btn.mixBrush, "tick", self.fadeBrushAniCheck);
				for (i=0; i<3; i++){
					tubePressCnt[primaryList[i]] = colorCntObj[primaryList[i]]; 
				}
				check_btn.visible = true;
				btnPress = true;
				console.log("CURRENT COLOR 2: ",currentColor);
			}
		}
		this.brushFillUpdate = function(__mc){
			EventHandler.addEvent(__mc, "tick", self.colorUpdateHandler);
		}
		this.colorUpdateHandler = function(evt){
			if (evt.currentTarget.currentFrame == evt.currentTarget.totalFrames - 1){
				UpdateMcCache.mcUpdate(evt.currentTarget, false);
				EventHandler.removeEvent(evt.currentTarget, "tick", self.colorUpdateHandler);
			} else {
				UpdateMcCache.mcUpdate(evt.currentTarget, true);
			}
		}
		this.tweenToColor = function(mc, targetColor, duration) {
			let shape = mc;
			if (!shape) return;
			let targetRGB = self.hexToRGB(targetColor);
			if (!shape.filters || shape.filters.length === 0) {
				shape.filters = [new createjs.ColorFilter(1, 1, 1, 1, 255, 255, 255, 0)];
				shape.cache(-200, -200, 600, 600);
			}
			let colorFilter = shape.filters[0];
			// Store tick listener reference 
			const tickRef = createjs.Ticker.on("tick", () => shape.updateCache());
			createjs.Tween.get(colorFilter)
				.to({
					redOffset: targetRGB.r - 255,
					greenOffset: targetRGB.g - 255,
					blueOffset: targetRGB.b - 255
				}, duration)
				.call(() => {
					// Final cache update
					shape.updateCache();
					createjs.Ticker.off("tick", tickRef);
				});
		}
		this.hexToRGB = function(hex) {
			hex = hex.replace("#", "");
			let bigint = parseInt(hex, 16);
			return {
				r: (bigint >> 16) & 255,
				g: (bigint >> 8) & 255,
				b: bigint & 255
			};
		}
		this.fadeBrushAniCheck = function(evt){
			if (mix_btn.mixBrush.currentFrame == mix_btn.mixBrush.totalFrames - 1) {
				EventHandler.removeEvent(mix_btn.mixBrush, "tick", self.fadeBrushAniCheck);
				mix_btn.mixBrush.stop();
			}
		}
		this.stopMixAni = function(){
			mix_btn.ani.stop();
		}
		this.setStoryInteraction = function(__str=null){
			console.log ("setStoryInteraction", paintPalette_mc.scaleX, paintPalette_mc.scaleY);
			story_ani.addChild(paintPalette_mc);
			self.hidePaletteSplats();
			if (story_cnt == 1){
				chat_cnt = 3;
				paintPalette_mc.x = 641.4;
				paintPalette_mc.y = 648.4;
				paintPalette_mc.mix_mc.visible = false;
				paintPalette_mc.txt_mix.visible = false;
				paintPalette_mc.mixOutline_mc.visible = false;
				paintPalette_mc.mix_btn.scaleX = paintPalette_mc.mix_btn.scaleY = 1.4;
				paintPalette_mc.mix_btn.visible = false;
				paintPalette_mc.mix_btn.hl_ani.visible = false;
				paintPalette_mc.orange_btn.visible = false;
				paintPalette_mc.green_btn.visible = false;
			} else if (story_cnt == 2){
				chat_cnt = 2;
				paintPalette_mc.orange_btn.visible = true;
			} else if (story_cnt == 3){
				chat_cnt = 2;
				paintPalette_mc.green_btn.visible = true;
			} 
			self.setPaletteBtns();
			if (__str && __str == "interact"){
				color = storyColorList[story_cnt-1];
				chatBubble_func = self.playColorSplat;
				EventHandler.removeEvent(chat_mc, "mousedown", self.playChatAudio);
				EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
			}
			paintPalette_mc.visible = true;
		}
		this.hidePaletteSplats = function(){
			paintPalette_mc.mixSplat_mc.visible = false;
			for (var i=0; i < colorList.length; i++){
				paintPalette_mc[colorList[i]+"Splat_mc"].visible = false;
			}
		}
		this.setPaletteBtns = function(){
			for (var i=0; i < colorList.length; i++){
				paintPalette_mc[colorList[i]+"_btn"].buttonMode = false;
				paintPalette_mc[colorList[i]+"_btn"].mouseChildren = false;
				EventHandler.removeEvent(paintPalette_mc[colorList[i]+"_btn"], "mousedown", self.playColorSplat);
				EventHandler.addEvent(paintPalette_mc[colorList[i]+"_btn"], "mousedown", self.playColorSplat);
				if (act_mode == "paint") paintPalette_mc[colorList[i]+"_btn"].hl.visible = false;
			}
			if (act_mode == "paint"){
				paintPalette_mc.mix_mc.buttonMode = false;
				paintPalette_mc.mix_mc.mouseChildren = false;
				EventHandler.removeEvent(paintPalette_mc.mix_mc, "mousedown", self.playColorSplat);
				EventHandler.addEvent(paintPalette_mc.mix_mc, "mousedown", self.playColorSplat);
				paintPalette_mc.mix_mc.hl.visible = false;
			}
		}
		this.playColorSplat = function(evt=null){
			if (soundChannel != null) return;
			if (evt != null){
				if (!btnPress || color_cnt == 0 && evt.target.name.split("_")[0] == "mix") return;
				color = evt.target.name.split("_")[0];
			} else {
				color = storyColorList[story_cnt-1];
			}
			btnPress = false;
			splat_mc = paintPalette_mc[color+"Splat_mc"];
			splat_mc.visible = true;
			splat_mc.alpha = 1;
			splat_mc.gotoAndPlay(1);
			if (color == "mix"){
				console.log("splatAniCheck");
				EventHandler.addEvent(splat_mc, "tick", self.splatAniCheck);
			} else {
				console.log("paletteSplatAniCheck");
				EventHandler.addEvent(splat_mc, "tick", self.paletteSplatAniCheck);
			}
			if (color != "mix" && act_mode == "story") playSound("vo_"+color, null);
			if (act_mode == "paint" && color != "mix"){
				if (activeColor_btn){
					activeColor_btn.hl.visible = false;
					activeColor_btn.scaleX = activeColor_btn.scaleY = 1.2;
				}
				activeColor_btn = paintPalette_mc[color+"_btn"];
				activeColor_btn.hl.visible = true;
				currentColor = colorCodeObj[color];
				activeColor_btn.scaleX = activeColor_btn.scaleY = 1.3;
			} else if (act_mode == "paint" && color == "mix") {
				if (paintPalette_mc.mixOutline_mc.visible || mixedColor == "#000000") return;
				if (activeColor_btn){
					activeColor_btn.hl.visible = false;
					activeColor_btn.scaleX = activeColor_btn.scaleY = 1.2;
				}
				activeColor_btn = paintPalette_mc["mix_mc"];
				activeColor_btn.hl.visible = true;
				activeColor_btn.scaleX = activeColor_btn.scaleY = 1.3;
				currentColor = mixedColor;
			}
		}
		this.paletteSplatAniCheck = function(evt){
			if (splat_mc.currentFrame == splat_mc.totalFrames - 1) {
				EventHandler.removeEvent(splat_mc, "tick", self.paletteSplatAniCheck);
				splat_mc.visible = false;
				splat_mc.gotoAndStop(0);
				if (act_mode == "story" && story_cnt != 4 && story_ani.currentLabel == "interact" && !nav_mc.next_btn.visible){
					self.addNextBtn(self.storyNextPress);
					if (story_cnt == 3) nav_mc.next_btn.y = 470;
				}
				btnPress = true;
			}
		}
		this.splatAniCheck = function(evt){
			if (splat_mc.currentFrame == splat_mc.totalFrames - 1) {
				EventHandler.removeEvent(splat_mc, "tick", self.splatAniCheck);
				splat_mc.stop();
				UpdateMcCache.mcUpdate(splat_mc, false);
				splat_mc.visible = false;
				btnPress = true;
			} else {
				UpdateMcCache.mcUpdate(splat_mc, true);
			}
		}
		this.storyBlobCheck = function(evt){
			var __str = '';
			if (blob_mc.currentLabel != null){
				__str = blob_mc.currentLabel;
			}
			if (__str == "stop") {
				EventHandler.removeEvent(blob_mc, "tick", self.storyBlobCheck);
				blob_mc.stop();
			} else if (blob_mc.currentFrame == blob_mc.totalFrames - 1) {
				EventHandler.removeEvent(blob_mc, "tick", self.storyBlobCheck);
				blob_mc.stop();  //red, blue
				blob_mc.visible = false;
				story_ani.yellowblob_mc.stop(); 
				btnPress = true;
			}
		}
		this.setOrangeAni = function(evt){
			if (!btnPress || soundChannel != null) return;
			btnPress = false;
			content_mc.removeChild(tubes_mc);
			TweenMax.killAll();
			mix_btn.scaleX = mix_btn.scaleY = 1;
			self.showBrushMix("hide");
			TweenMax.to(mix_btn, .5, {alpha: 0, onComplete: function(){content_mc.removeChild(mix_btn)}});
			self.showMixBtn(false);
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
			story_ani = story_ani.orange_ani;
			story_ani.gotoAndPlay(1);
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			story_ani.yellowblob_mc.visible = true;
			story_ani.redblob_mc.visible = true;
			story_ani.redblob_mc.gotoAndPlay("storyNext");
			story_ani.yellowblob_mc.gotoAndPlay("storyNext");
			blob_mc = story_ani.redblob_mc;
			EventHandler.addEvent(blob_mc, "tick", self.storyBlobCheck);
		}
		this.setGreenAni = function(evt){
			if (!btnPress || soundChannel != null) return;
			btnPress = false;
			content_mc.removeChild(tubes_mc);
			TweenMax.killAll();
			mix_btn.scaleX = mix_btn.scaleY = 1;
			self.showBrushMix("hide");
			TweenMax.to(mix_btn, .5, {alpha: 0, onComplete: function(){content_mc.removeChild(mix_btn)}});
			self.showMixBtn(false);
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.visible = false;
			tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.visible = false;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.visible = false;
			story_ani = story_ani.green_ani;
			story_ani.gotoAndPlay(1);
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
			story_ani.blueblob_mc.visible = true;
			story_ani.yellowblob_mc.visible = true;
			story_ani.blueblob_mc.gotoAndPlay("storyNext");
			story_ani.yellowblob_mc.gotoAndPlay("storyNext");
			blob_mc = story_ani.blueblob_mc;
			EventHandler.addEvent(blob_mc, "tick", self.storyBlobCheck);
		}
		//Story Green Sequence
		this.setBlueYellowMix = function(){
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.buttonMode = false;
			tubes_mc["s"+story_cnt+"_tubes"].red_tube_mc.mouseChildren = false;

			tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.buttonMode = false;
			tubes_mc["s"+story_cnt+"_tubes"].blue_tube_mc.mouseChildren = false;

			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.buttonMode = false;
			tubes_mc["s"+story_cnt+"_tubes"].yellow_tube_mc.mouseChildren = false;
			TweenMax.delayedCall(.3, self.storyTubeBtnHandler, [true]);
			TweenMax.delayedCall(7, self.hintStoryTubes);
		}
		this.mixAniCheck = function(evt){
			var __str = '';
			if (story_ani.mix_ani.currentLabel != null){
				__str = story_ani.mix_ani.currentLabel;
			}
			if (__str.indexOf('stop') > -1) {
				EventHandler.removeEvent(story_ani.mix_ani, "tick", self.mixAniCheck);
				story_ani.mix_ani.stop();
				if (remixPress) self.storyMixing();
			} else if (__str.indexOf('mix_btn') > -1) {
				paintPalette_mc.mix_btn.visible = false;
			} else if (story_ani.mix_ani.currentFrame == story_ani.mix_ani.totalFrames - 1) {
				EventHandler.removeEvent(story_ani.mix_ani, "tick", self.mixAniCheck);
				story_ani.mix_ani.stop();
				story_ani.mix_ani.visible = false;
				mixedBlob_mc.visible = true;
				paintPalette_mc.mixOutline_mc.visible = false;
				paintPalette_mc.mix_mc.visible = true;
				paintPalette_mc.mix_btn.visible = true;
				self.showCmBlobShine(true);
				story_ani.addChild(paintPalette_mc);
				paintPalette_mc.visible = true;
				if (remixPress) {
					chat_mc.visible = true;
					story_ani.chat2.visible = true;
					story_ani.chat3.visible = true;
					chat_cnt = 2;
					chat_mc = story_ani.chat2;
					EventHandler.addEvent(story_ani.chat2, "mousedown", self.playChatAudio);
					EventHandler.addEvent(story_ani.chat3, "mousedown", self.playChatAudio); 
					EventHandler.addEvent(paintPalette_mc.mix_btn, "mousedown", self.remixStoryColor);
					self.setStoryInteraction();
					self.showCmBlobShine(true);
					self.addNextBtn(self.storyNextPress);
					nav_mc.next_btn.y -= 215;
					btnPress = true;
				}
			}
		}
		this.hintStoryMixing = function(){
			console.log ("hintStoryMixing");
			if (hint_cnt == 1){
				playSound("vo_tap_tube", self.clearCaption);
				TweenMax.delayedCall(7, self.hintStoryMixing);
				captions.createCCbar("Tap two colors and mix.");
				captions.setCCinfo({mc:content_mc, ptX: 640, ptY: 20});
				hint_cnt++;
			} else {
				TweenMax.to(info_btn, .5, {scaleX:info_btn.scaleX+.2, scaleY:info_btn.scaleY+.2, ease:Linear.easeNone, repeat:5, yoyo:true});
			}
		}
		this.clearCaption = function(evt){
			captions.createCCbar('');
		}
		this.restartStoryAni = function(){
			createjs.Sound.stop();
			if (story_cnt == 1 && chat_cnt == 1){
				self.storyStopChecks(story_cnt);
				btnPress = true;
				return;
			} else {
				story_ani.gotoAndPlay("restart"+chat_cnt);
			}
			if (story_ani.mix_ani){
				story_ani.mix_ani.visible = false;
				story_ani.mix_ani.gotoAndStop(0);
			}
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
		}
		this.tubeMixCheck = function(evt){
			if (paintPalette_mc.tubeMix_ani.currentFrame == paintPalette_mc.tubeMix_ani.totalFrames - 1) {
				EventHandler.removeEvent(paintPalette_mc.tubeMix_ani, "tick", self.tubeMixCheck);
				paintPalette_mc.tubeMix_ani.stop();
				paintPalette_mc.tubeMix_ani.visible = false;
				paintPalette_mc.mix_mc.visible = false;
				paintPalette_mc.txt_mix.visible = true;
				paintPalette_mc.mixOutline_mc.visible = true;
				paintPalette_mc.tubeMix_ani.visible = true;
				paintPalette_mc.mix_btn.visible = true;
				paintPalette_mc.removeChild(paintPalette_mc.tubeMix_ani);
			}
		}
		this.redYellowMixPress = function(evt){
			if (!btnPress) return;
			btnPress = false;
			if (chat_mc){
				EventHandler.removeEvent(chat_mc, "mousedown", self.restartStoryAni);
			}
			story_ani.play();
			EventHandler.addEvent(story_ani, "tick", self.storyCheck);
		}
		this.remixStoryColor = function(evt){
			self.nextBtnCommon();
			playSound("switchToggle");
			soundChannel = null;
			story_ani.gotoAndStop("stop2");
			EventHandler.removeEvent(story_ani, "tick", self.storyCheck);
			Conversions.setRGBhex(story_ani.chat2.txt, "#000000");
			Conversions.setRGBhex(story_ani.chat3.txt, "#000000");
			Conversions.setRGBhex(story_ani.mix_ani.mix_mc.fill, mixedColor);
			chat_mc.visible = false;
			chat_cnt = 2;
			story_ani.chat2.visible = false;
			story_ani.chat3.visible = false;
			paintPalette_mc.mix_btn.visible = false;
			paintPalette_mc.txt_mix.alpha = 1;
			TweenMax.to(paintPalette_mc.txt_mix, .5, {alpha: 0});
			story_ani.mix_ani.mix_mc.visible = true;
			story_ani.addChild(story_ani.mix_ani);
			story_ani.mix_ani.visible = true;
			story_ani.mix_ani.gotoAndPlay(0);
			EventHandler.addEvent(story_ani.mix_ani, "tick", self.mixAniCheck);
		}
		this.storyMixing = function(){
			self.nextBtnCommon();
			content_mc.addChild(colorMix_mc);
			if (remixPress){
				colorMix_mc.blob_mc.visible = true;
			} else {
				colorMix_mc.blob_mc.visible = false;
			}
			colorMix_mc.visible = true;
			color_cnt = self.colorCntCheck();
			self.setMixingUI();
			self.buildColorObj();
			btnPress = true;
		}
		this.setMixingUI = function(){
			reset_btn = colorMix_mc.reset_btn;
			check_btn = colorMix_mc.check_btn;
			if (color_cnt == 0){
				check_btn.visible = false;
				colorMix_mc.mixOutline_mc.visible = true;
			} else {
				check_btn.visible = true;
			}
			info_btn.y = 44.9;
			info_btn.visible = true;
			content_mc.addChild(info_btn);
			self.tweenToColor(colorMix_mc.blob_mc, mixedColor,0);

			info_btn.buttonMode = false;
			reset_btn.buttonMode = false;
			check_btn.buttonMode = false;
			mix_btn.buttonMode = false;
			colorMix_mc.red_btn.buttonMode = false;
			colorMix_mc.blue_btn.buttonMode = false;
			colorMix_mc.yellow_btn.buttonMode = false;

			info_btn.mouseChildren = false;
			reset_btn.mouseChildren = false;
			check_btn.mouseChildren = false;
			mix_btn.mouseChildren = false;
			colorMix_mc.red_btn.mouseChildren = false;
			colorMix_mc.blue_btn.mouseChildren = false;
			colorMix_mc.yellow_btn.mouseChildren = false;
			colorMix_mc.red_btn.gotoAndStop(colorCntObj.red);
			colorMix_mc.blue_btn.gotoAndStop(colorCntObj.blue);
			colorMix_mc.yellow_btn.gotoAndStop(colorCntObj.yellow);
			self.mixingUIBtnHandler(true);
			self.showCmBlobShine(false);
			for (var i=0; i<=3; i++){
				colorMix_mc["swirl"+(i+1)].visible = false; 
			}
			colorMix_mc.brush_mc.visible = false;
			if (act_mode == "story"){
				reset_btn.visible = false;
				if (!remixPress){
					self.showMixBtn(false);
					hint_cnt = 1;
					TweenMax.delayedCall(6, self.hintStoryMixing);
				} else {
					console.log (currentColor,mixedColor,colorCntObj, 'c_'+colorCntObj.red+colorCntObj.blue+colorCntObj.yellow);
					self.showCmBlobShine(true);
					self.showMixBtn(true);
				}
			} else if (act_mode == "paint"){
				self.showMixBtn(true);
				check_btn.visible = true;
				reset_btn.visible = true;
				console.log ('c_'+colorCntObj.red+colorCntObj.blue+colorCntObj.yellow);
				currentColor = '#'+color_obj['c_'+colorCntObj.red+colorCntObj.blue+colorCntObj.yellow];
			}
			EventHandler.addEvent(info_btn, "mousedown", self.infoBtnPress);
		}
		this.mixingUIBtnHandler = function(__bool){
			if (__bool){
				EventHandler.addEvent(colorMix_mc.bg_mc, "mousedown", self.cmBgPress);
				EventHandler.addEvent(reset_btn, "mousedown", self.resetColor);
				EventHandler.addEvent(colorMix_mc.red_btn, "mousedown", self.colorPress);
				EventHandler.addEvent(colorMix_mc.blue_btn, "mousedown", self.colorPress);
				EventHandler.addEvent(colorMix_mc.yellow_btn, "mousedown", self.colorPress);
				if (act_mode == "story") EventHandler.addEvent(check_btn, "mousedown", self.confirmStoryColor);
				if (act_mode == "paint") EventHandler.addEvent(check_btn, "mousedown", self.confirmPaintColor);
			} else {
				EventHandler.removeEvent(colorMix_mc.bg_mc, "mousedown", self.cmBgPress);
				EventHandler.removeEvent(reset_btn, "mousedown", self.resetColor);
				EventHandler.removeEvent(colorMix_mc.red_btn, "mousedown", self.colorPress);
				EventHandler.removeEvent(colorMix_mc.blue_btn, "mousedown", self.colorPress);
				EventHandler.removeEvent(colorMix_mc.yellow_btn, "mousedown", self.colorPress);
				if (act_mode == "story") EventHandler.removeEvent(check_btn, "mousedown", self.confirmStoryColor);
				if (act_mode == "paint") EventHandler.removeEvent(check_btn, "mousedown", self.confirmPaintColor);
			}
		}
		this.cmBgPress = function(){
			console.log("cm bg press");
		}
		this.mixColorPress = function(evt){
			if (!btnPress) return;
			btnPress = false;
			color_cnt = self.colorCntCheck();
			if (color_cnt != 0){
				playSound("switchToggle");
				mixedColor = currentColor;
			}
			TweenMax.killDelayedCallsTo(self.hintStoryMixing);
			self.playMixBtn();
		}
		this.swirlCheck = function(evt){
			if(evt.target.currentFrame == evt.target.totalFrames - 1) {
				EventHandler.removeEvent(evt.target, "tick", self.swirlCheck);
				evt.target.stop();
				UpdateMcCache.mcUpdate(evt.currentTarget, false);
				for (var i=0; i<=3; i++){
					if (colorMix_mc["swirl"+(i+1)].visible){
						colorMix_mc["swirl"+(i+1)].stop();
					} 
				}
			} else {
				UpdateMcCache.mcUpdate(evt.currentTarget, true);
			}
		}
		this.colorPress = function(evt){
			console.log("colorPress");
			if (!btnPress || colorCntObj[evt.target.name.split("_")[0]] == 3) return;
			TweenMax.killDelayedCallsTo(self.hintStoryMixing);
			var color_btn = evt.target;
			color = evt.target.name.split("_")[0];
			if (color_btn.currentFrame != color_btn.totalFrames - 1){
				colorMix_mc["pDrop_"+color].gotoAndPlay(1);
				EventHandler.addEvent(colorMix_mc["pDrop_"+color], "tick", self.pDropCheck);
				color_btn.gotoAndStop(color_btn.currentFrame+1);
				colorCntObj[color]++;
				currentColor = '#'+color_obj['c_'+colorCntObj.red+colorCntObj.blue+colorCntObj.yellow];
				console.log(currentColor);
				playSound("sfx_splat", null);
			}
			if (act_mode == "story" && colorCntObj.red+colorCntObj.blue+colorCntObj.yellow == 2){
				self.showMixBtn(true);
			}  
		}
		this.pDropCheck = function(evt){
			if (evt.target.currentFrame == 2){
				self.setPSplatLayer(colorMix_mc["pSplat_"+color]);
				colorMix_mc["pSplat_"+color].gotoAndStop(colorMix_mc["pSplat_"+color].currentFrame+1);
			} else if(evt.target.currentFrame == evt.target.totalFrames - 1) {
				EventHandler.removeEvent(evt.target, "tick", self.pDropCheck);
				evt.target.gotoAndStop(0);
				btnPress = true;
			}
		}
		this.setPSplatLayer = function(pSColor){
			var __name = pSColor.name.split("_")[1];
			var zIndex = pSColor.parent.getChildIndex(pSColor);
			console.log(zIndex, pSColor.name);
			pSColor.parent.addChildAt(pSColor, 16);
		}
		this.resetColor = function(evt){
			if (!btnPress) return;
			colorCntObj.red = 0;
			colorCntObj.blue = 0;
			colorCntObj.yellow = 0;
			tubePressCnt.red = 0;
			tubePressCnt.blue = 0;
			tubePressCnt.yellow = 0;

			colorMix_mc.red_btn.gotoAndStop(0);
			colorMix_mc.blue_btn.gotoAndStop(0);
			colorMix_mc.yellow_btn.gotoAndStop(0);
			colorMix_mc.pDrop_red.gotoAndStop(0);
			colorMix_mc.pDrop_blue.gotoAndStop(0);
			colorMix_mc.pDrop_yellow.gotoAndStop(0);
			colorMix_mc.pSplat_red.gotoAndStop(0);
			colorMix_mc.pSplat_blue.gotoAndStop(0);
			colorMix_mc.pSplat_yellow.gotoAndStop(0);
			Conversions.resetTransform(colorMix_mc.blob_mc);
			Conversions.setRGBhex(colorMix_mc.brush_mc.brush.paint_fill, "#FFFFFF");
			Conversions.setRGBhex(colorMix_mc.brush_mc.brush.brush_fill, "#FFFFFF");
			self.tweenToColor(colorMix_mc.blob_mc, "#FFFFFF",0);
			colorMix_mc.mixOutline_mc.visible = true;
			colorMix_mc.blob_mc.scaleX = colorMix_mc.blob_mc.scaleY = .10;
			colorMix_mc.blob_mc.visible = false;
			currentColor = "#FFFFFF";
			mixedColor = "#FFFFFF";
			self.showCmBlobShine(false);
			color_cnt = 0;
			if (act_mode == "story") check_btn.visible = false;
			playSound("switchToggle");
		}
		this.infoBtnPress = function(evt){
			console.log ("infoBtnPress");
			if (!btnPress) return;
			btnPress = false;
			TweenMax.killDelayedCallsTo(self.hintStoryMixing);
			helper_ani.visible = false;
			helper_tween.visible = true;
			content_mc.addChild(helper_tween);
			helper_tween.gotoAndPlay(1);
			EventHandler.addEvent(helper_tween, "tick", self.helperTweenCheck);
			if (act_mode == "paint" && paint_cnt >= 4) nav_mc.next_btn.visible = false;
			Tracking.cntProgress({help:1});
		}
		this.helperTweenCheck = function(evt){
			var __str = '';
			if (helper_tween.currentLabel != null){
				__str = helper_tween.currentLabel;
			}
			if (__str.indexOf('stop') > -1) {
				EventHandler.removeEvent(helper_tween, "tick", self.helperTweenCheck);
				helper_tween.stop();
				content_mc.addChild(helper_ani);
				helper_ani.visible = true;
				helper_ani.gotoAndPlay(1);
				EventHandler.addEvent(helper_ani, "tick", self.helperAniCheck);
				helper_tween.visible = false;
				content_mc.removeChild(helper_tween);
				helper_ani.close_btn.mouseChildren = false;
				EventHandler.addEvent(helper_ani.close_btn, "mousedown", self.closeHelper);
			} else if (helper_tween.currentFrame == helper_tween.totalFrames - 1) {
				EventHandler.removeEvent(helper_tween, "tick", self.helperTweenCheck);
				helper_tween.stop();
				helper_tween.visible = false;
				content_mc.removeChild(helper_tween);
				btnPress = true;
				if (act_mode == "paint" && paint_cnt >= 4) nav_mc.next_btn.visible = true;
			}
		}
		this.helperAniCheck = function(evt){
			if (helper_ani.currentFrame == helper_ani.totalFrames - 1) {
				EventHandler.removeEvent(helper_ani, "tick", self.helperAniCheck);
				helper_ani.stop();
				content_mc.addChild(helper_tween);
				helper_tween.visible = true;
				helper_tween.gotoAndPlay(helper_tween.currentFrame+1);
				EventHandler.addEvent(helper_tween, "tick", self.helperTweenCheck);
				helper_ani.visible = false;
				content_mc.removeChild(helper_ani);
			}
		}
		this.closeHelper = function(evt){
			createjs.Sound.stop();
			helper_ani.stop();
			helper_ani.visible = false;
			helper_tween.visible = true;
			helper_tween.gotoAndPlay("close");
			EventHandler.addEvent(helper_tween, "tick", self.helperTweenCheck);
			EventHandler.removeEvent(helper_ani, "tick", self.helperAniCheck);
			if (act_mode == "paint" && paint_cnt >= 4) nav_mc.next_btn.visible = true;
			btnPress = true;
		}
		this.confirmStoryColor = function(evt){
			if (!btnPress || color_cnt == 0) return;
			btnPress = false;
			playSound("switchToggle");
			self.resetSplats();
			var isSplatVisible = self.tubeCntCheck();
			if (!isSplatVisible){
				mixedColor = '#'+color_obj['c_'+colorCntObj.red+colorCntObj.blue+colorCntObj.yellow];
			}
			for (var i=0; i<3; i++){
				colorMix_mc[primaryList[i]+"_btn"].gotoAndStop(0);
				if (colorCntObj[primaryList[i]] != tubePressCnt[primaryList[i]]){
					colorCntObj[primaryList[i]] = tubePressCnt[primaryList[i]];
				}
			}
			content_mc.removeChild(info_btn);
			content_mc.removeChild(colorMix_mc);
			Conversions.setRGBhex(mixedBlob_mc.fill, mixedColor);
			Conversions.setRGBhex(story_ani.mix_ani.mix_mc.fill, mixedColor);
			mixedBlob_mc.visible = false;
			self.showCmBlobShine(false);
			story_ani.addChild(story_ani.mix_ani);
			paintPalette_mc.mixOutline_mc.visible = true;
			paintPalette_mc.txt_mix.alpha = 0;
			TweenMax.to(paintPalette_mc.txt_mix, .5, {alpha: 1});
			story_ani.mix_ani.mix_mc.visible = true;
			story_ani.mix_ani.visible = true;
			story_ani.mix_ani.gotoAndPlay(15);
			story_ani.mix_ani.mixOutline_mc.visible = false;
			EventHandler.addEvent(story_ani.mix_ani, "tick", self.mixAniCheck);
			if (!remixPress){
				story_ani.play();
				EventHandler.addEvent(story_ani, "tick", self.storyCheck);
				soundChannel = null;
			}
			Tracking.cntProgress({story:1});
		}
		this.paintingMenu = function(){
			if (story_ani) story_ani.visible = false;
			content_mc.removeChild(story_mc); //comment out for skip
			content_mc.addChild(artSelect_mc);
			act_mode = "paint";
			for (var i=0; i < paintList.length; i++){
				artSelect_mc["paint_"+paintList[i]].hl.visible = false;
			}
			artSelect_mc.chat_mc.y = 69.3;
			if (chat_mc == artSelect_mc.chat_mc) artSelect_mc.removeChild(chat_mc);
			chat_mc = artSelect_mc.chat_mc;
			artSelect_mc.addChild(chat_mc);
			artSelect_mc.visible = true;
			artSelect_mc.gotoAndPlay(1);
			EventHandler.addEvent(artSelect_mc, "tick", self.paintMenuCheck);
		}
		this.paintMenuCheck = function(evt){
			if (artSelect_mc.currentFrame == artSelect_mc.totalFrames - 1) {
				EventHandler.removeEvent(artSelect_mc, "tick", self.paintMenuCheck);
				artSelect_mc.gotoAndStop(artSelect_mc.totalFrames-1);
				self.setPaintMenuBtns();
				btnPress = true;
			}
		}
		this.setPaintMenuBtns = function(){
			for (var i=0; i < paintList.length; i++){
				artSelect_mc["paint_"+paintList[i]].mouseChildren = false;
				EventHandler.addEvent(artSelect_mc["paint_"+paintList[i]], "mousedown", self.paintPress);
			}
			chat_mc = artSelect_mc.chat_mc;
			chat_mc.mouseChildren = false;
			EventHandler.addEvent(chat_mc, "mousedown", self.playChatAudio);
		}
		this.paintPress = function(evt){
			if (!btnPress|| paintTopic && paintTopic == evt.target.name.split("_")[1]) return;
			playSound("Beep");
			if (paintTopic) artSelect_mc["paint_"+paintTopic].hl.visible = false;
			paintTopic = evt.target.name.split("_")[1];
			artSelect_mc["paint_"+paintTopic].hl.visible = true;
			if (!nav_mc.next_btn.visible) self.addNextBtn(self.setPaintMode)
		}
		this.setPaintMode = function(evt){
			if (!btnPress) return;
			self.nextBtnCommon();
			chat_mc.txt.color = "#000000";
			EventHandler.removeEvent(chat_mc, "mousedown", self.playChatAudio);
			playSound("switchToggle");
			artSelect_mc.visible = false;
			content_mc.removeChild(artSelect_mc);
			paintChoice_mc = new lib.paintings[paintTopic]();
			DisplayInfo.stopAllAt0(paintChoice_mc);
			for (i=0; i < paintChoice_mc.numChildren; i++){
				var __mc = paintChoice_mc.getChildAt(i);
				if (__mc instanceof createjs.MovieClip && __mc.name != null && __mc.name.indexOf("fill") > -1){
					__mc.buttonMode = false;
					__mc.mouseChildren = false;
					EventHandler.addEvent(__mc, "mousedown", self.fillPress);
				}
			}
			colorCntObj = {red: 0, blue: 0, yellow: 0};
			tubePressCnt = {red: 0, blue: 0, yellow: 0};
			paint_cnt = 0;
			color_cnt = 0;
			color = undefined;
			mixedColor = "#FFFFFF";
			currentColor = "#FFFFFF";
			content_mc.addChild(paintChoice_mc);
			paintFrame_mc = new lib.paintings["paintFrame_mc"]();
			DisplayInfo.stopAllAt0(paintFrame_mc);
			content_mc.addChild(paintFrame_mc);
			paintFrame_mc.mouseChildren = false;
			EventHandler.addEvent(paintFrame_mc, "mousedown", self.paintFramePress);
			colorMix_mc.visible = false;
			soPrompt_mc.visible = false;
			colorMix_mc.blob_mc.scaleX = colorMix_mc.blob_mc.scaleY = .10;
			colorMix_mc.blob_mc.visible = false;
			colorMix_mc.brush_mc.brush.paint_fill.visible = false;
			colorMix_mc.brush_mc.brush.brush_fill.visible = false;
			Conversions.setRGBhex(paintPalette_mc.mixSplat_mc, mixedColor);
			Conversions.setRGBhex(mixedBlob_mc.fill, mixedColor);
			paintPalette_mc.scaleX = paintPalette_mc.scaleY = .84;
			paintPalette_mc.x = 640;
			paintPalette_mc.y = 690;
			paintPalette_mc.mix_mc.visible = false;
			self.showCmBlobShine(false);
			paintPalette_mc.mixOutline_mc.visible = true;
			paintPalette_mc.visible = true;
			act_mc.addChild(paintPalette_mc);
			self.hidePaletteSplats();
			self.setPaletteBtns();

			ppMix_btn = paintPalette_mc.mix_btn;
			ppMix_btn.scaleX = ppMix_btn.scaleY = 1;
			ppMix_btn.y = -42;
			ppMix_btn.hl_ani.visible = false;
			ppMix_btn.mouseChildren = false;
			EventHandler.addEvent(ppMix_btn, "mousedown", self.paintMixing);
			startOver_btn.visible = true;
			startOver_btn.mouseChildren = false;
			EventHandler.addEvent(startOver_btn, "mousedown", self.showPrompt);
			content_mc.addChild(info_btn);
			EventHandler.addEvent(info_btn, "mousedown", self.infoBtnPress);
			info_btn.visible = true;
			startOver_btn.y = 44.85;
			info_btn.y = 44.9;
			content_mc.addChild(act_mc);
			var __str = paintTopic.substr(0,1);
			Tracking.cntProgress({paintings:__str});
			btnPress = true;
		}
		this.paintFramePress = function(evt){
			console.log("paintFramePress");
		}
		this.showBlob = function(){
			console.log("showBlob");
			colorMix_mc.blobShine_mc.scaleX = colorMix_mc.blobShine_mc.scaleY = .10;
			colorMix_mc.blobShadow_mc.scaleX = colorMix_mc.blobShadow_mc.scaleY = .10;
			TweenMax.to(colorMix_mc.blobShadow_mc, 1.3, {scaleX:1, scaleY: 1, ease:Linear.easeNone});
			colorMix_mc.blob_mc.visible = true;
			colorMix_mc.blob_mc.scaleX = colorMix_mc.blob_mc.scaleY = .10;
			TweenMax.to(colorMix_mc.blob_mc, 1.3, {scaleX:1, scaleY: 1, ease:Linear.easeNone, onComplete: function(){
				if (colorMix_mc.mixOutline_mc.visible) colorMix_mc.mixOutline_mc.visible = false;
			}});
			self.showCmBlobShine(true);
			TweenMax.to(colorMix_mc.blobShine_mc, 1.3, {scaleX:1, scaleY: 1, ease:Linear.easeNone});
		}
		this.showCmBlobShine = function (__bool){
			colorMix_mc.blobShine_mc.visible = __bool;
			colorMix_mc.blobShadow_mc.visible = __bool;
		}
		this.paintMixing = function(evt){
			if (!btnPress) return;
			playSound("switchToggle");
			content_mc.addChild(colorMix_mc);
			colorMix_mc.visible = true;
			color_cnt = self.colorCntCheck();
			self.setMixingUI();
			self.buildColorObj();
			if (activeColor_btn && color_cnt != 0){
				activeColor_btn.hl.visible = false
				activeColor_btn.scaleX = activeColor_btn.scaleY = 1.2;
				activeColor_btn = paintPalette_mc["mix_mc"];
				activeColor_btn.hl.visible = true;
				activeColor_btn.scaleX = activeColor_btn.scaleY = 1.3;
				self.showCmBlobShine(true);
			}
			btnPress = true;
			if (paint_cnt >= 4) nav_mc.next_btn.visible = false;
		}
		this.fillPress = function(evt){
			if (!btnPress || color == undefined) return;
			btnPress = false;
			var fill_mc = evt.target;
			Conversions.setRGBhex(fill_mc, currentColor);
			if (paint_cnt == 4 && !nav_mc.next_btn.visible){
				self.addNextBtn(self.playReward);
				nav_mc.next_btn.y -= 100;
			} 
			if (paint_cnt < 5) paint_cnt++;
			if (fillSplat_mc != null){
				fillSplat_mc.stop();
				EventHandler.removeEvent(fillSplat_mc, "tick", self.splatAniCheck);
				UpdateMcCache.mcUpdate(fillSplat_mc, false);
				content_mc.removeChild(fillSplat_mc);
			}
			fillSplat_mc = new lib.act["splashPress_mc"]();
			DisplayInfo.stopAllAt0(fillSplat_mc);
			Conversions.setRGBhex(fillSplat_mc, currentColor);
			paintChoice_mc.addChild(fillSplat_mc);
			let localPos = paintChoice_mc.globalToLocal(evt.stageX, evt.stageY);
			fillSplat_mc.x = localPos.x;
			fillSplat_mc.y = localPos.y;

			fillSplat_mc.visible = true;
			fillSplat_mc.gotoAndPlay(1);
			EventHandler.addEvent(fillSplat_mc, "tick", self.paintSplatAniCheck);
		}
		this.paintSplatAniCheck = function(evt){
			if (fillSplat_mc.currentFrame == fillSplat_mc.totalFrames - 1) {
				EventHandler.removeEvent(fillSplat_mc, "tick", self.paintSplatAniCheck);
				fillSplat_mc.stop();
				UpdateMcCache.mcUpdate(fillSplat_mc, false);
				fillSplat_mc.visible = false;
				content_mc.removeChild(fillSplat_mc);
				fillSplat_mc = null;
				btnPress = true;
			} else {
				UpdateMcCache.mcUpdate(fillSplat_mc, true);
			}
		}
		this.confirmPaintColor = function(evt){
			if (!btnPress) return;
			playSound("switchToggle");
			if (colorCntObj.red+colorCntObj.blue+colorCntObj.yellow == 0 || 
				colorCntObj.red+colorCntObj.blue+colorCntObj.yellow > 0 && color_cnt == 0){
				for (var i=0; i < colorList.length; i++){
					paintPalette_mc[colorList[i]+"_btn"].hl.visible = false;
				}
			}
			paintPalette_mc.visible = true;
			if (color_cnt != 0 && paintPalette_mc.mixOutline_mc.visible){
				if (activeColor_btn){
					activeColor_btn.hl.visible = false;
					activeColor_btn.scaleX = activeColor_btn.scaleY = 1.2;
				}
				paintPalette_mc.mixOutline_mc.visible = false;
				paintPalette_mc.mix_mc.visible = true;

				activeColor_btn = paintPalette_mc["mix_mc"];
				activeColor_btn.hl.visible = true;
				activeColor_btn.scaleX = activeColor_btn.scaleY = 1.3;
				self.showCmBlobShine(true);
			} else if (color_cnt == 0){
				paintPalette_mc.mix_mc.hl.visible = false;
				paintPalette_mc.mixOutline_mc.visible = true;
				paintPalette_mc.mix_mc.visible = false;
				self.showCmBlobShine(false);
			}
			if (color_cnt != 0){
				Conversions.setRGBhex(paintPalette_mc.mixSplat_mc, mixedColor);
				Conversions.setRGBhex(mixedBlob_mc.fill, mixedColor);
				currentColor = mixedColor;
				color = "mix";
			} else {
				color = undefined;
			}
			self.mixingUIBtnHandler(false);
			colorMix_mc.visible = false;
			if (paint_cnt > 4) nav_mc.next_btn.visible = true;
			Tracking.cntProgress({mixui:1});
		}
		this.resetSplats = function(){
			var __c; 
			for (var i=0; i<3; i++){
				__c = primaryList[i];
				if (colorMix_mc["pSplat_"+__c].currentFrame != 1){
					colorMix_mc["pSplat_"+__c].gotoAndStop(0);
				}
			}
		}
		this.resetPaintingFills = function(){
			for (var i=0; i < paintChoice_mc.numChildren ; i++){
				var __mc = paintChoice_mc.getChildAt(i);
				if (__mc instanceof createjs.MovieClip && __mc.name != null && __mc.name.indexOf("fill") > -1){
					Conversions.setRGBhex(__mc, "#FFFFFF");
				}
			}
		}
		this.startOverPress = function(){
			if (!btnPress) return;
			self.resetPaintingFills();
			paint_cnt = 0;
			playSound("switchToggle");
		}
		this.showPrompt = function(evt){
			if (!btnPress) return;
			EventHandler.removeEvent(startOver_btn, "mousedown", self.showPrompt);
			nav_mc.next_btn.visible = false;
			content_mc.addChild(soPrompt_mc);
			soPrompt_mc.visible = true;
			soPrompt_mc.yes_btn.buttonMode = false;
			soPrompt_mc.yes_btn.mouseChildren = false;
			EventHandler.addEvent(soPrompt_mc.yes_btn, "mousedown", self.promptPress);
			soPrompt_mc.no_btn.buttonMode = false;
			soPrompt_mc.no_btn.mouseChildren = false;
			EventHandler.addEvent(soPrompt_mc.no_btn, "mousedown", self.promptPress);
			playSound("switchToggle");
		}
		this.promptPress = function(evt){
			if (!btnPress) return;
			var btn = evt.target;
			var btnType = btn.name.split("_")[0];
			soPrompt_mc.visible = false;
			EventHandler.removeEvent(soPrompt_mc.yes_btn, "mousedown", self.promptPress);
			EventHandler.removeEvent(soPrompt_mc.no_btn, "mousedown", self.promptPress);
			EventHandler.addEvent(startOver_btn, "mousedown", self.showPrompt);
			if (btnType == "yes"){
				self.startOverPress();
			} else {
				if (paint_cnt >= 4){
					nav_mc.next_btn.visible = true;
				}
			}
			playSound("Beep");
		}
		this.playReward = function(evt){
			self.nextBtnCommon();
			btnPress = false;
			for (var i=0; i < colorList.length; i++){
				paintPalette_mc[colorList[i]+"_btn"].hl.visible = false;
			}
			if (splat_mc){
				splat_mc.visible = false;
				splat_mc.gotoAndStop(0);
				EventHandler.removeEvent(splat_mc, "tick", self.splatAniCheck);
				//splat_mc = null;
			}
			act_mode = "reward";
			chat_cnt = 1;
			content_mc.removeChild(info_btn); //comment out for skip
			startOver_btn.visible = false;
			reward_mc = new lib.story["reward_mc"]();
			DisplayInfo.stopAllAt0(reward_mc);
			content_mc.addChild(reward_mc);
			content_mc.addChild(paintPalette_mc);
			TweenMax.to(paintPalette_mc, .5, {y:1300, ease:Linear.easeNone, onComplete:self.rewardPaletteTween});
			reward_mc.visible = true;
			reward_mc.gotoAndPlay(1);
			EventHandler.addEvent(reward_mc, "tick", self.rewardCheck);
			Tracking.nRate(rateCode); 
			mix_btn.visible = false;
		}
		this.rewardPaletteTween = function(){
			ppMix_btn.y = -82;
			paintPalette_mc.visible = false;
			paintPalette_mc.scaleX = paintPalette_mc.scaleY = 1;
		}
		this.rewardCheck = function(evt){
			var __str = '';
			if (reward_mc.currentLabel != null){
				__str = reward_mc.currentLabel;
			}
			if (__str.indexOf('stop') > -1){
				EventHandler.removeEvent(reward_mc, "tick", self.rewardCheck);
				reward_mc.stop();
				self.addNextBtn(self.rewardNextPress); 
				btnPress = true;
			} else if (reward_mc.currentFrame == reward_mc.totalFrames - 1) {
				EventHandler.removeEvent(reward_mc, "tick", self.rewardCheck);
				reward_mc.stop();
				self.resetPaintingFills();
				content_mc.removeChild(paintFrame_mc);
				paintFrame_mc = null;
				content_mc.removeChild(paintChoice_mc);
				paintChoice_mc = null;
				content_mc.removeChild(reward_mc);
				reward_mc = null;
				self.selectScreen(null);
				btnPress = true;
			}
		}
		this.restartRewardAni = function(evt){
			if (!btnPress) return;
			btnPress = false;
			self.nextBtnCommon();
			reward_mc.chat2.visible = false;
			reward_mc.gotoAndPlay("restart1");
			EventHandler.addEvent(reward_mc, "tick", self.rewardCheck);
		}
		this.rewardNextPress = function(evt){
			if (!btnPress) return;
			btnPress = false;
			self.nextBtnCommon();
			playSound("switchToggle");
			chat_cnt++;
			reward_mc.play();
			EventHandler.addEvent(reward_mc, "tick", self.rewardCheck);
		}
		this.selectScreen = function(evt){
			content_mc.addChild(modeSelect_mc);
			modeSelect_mc.visible = true;
			modeSelect_mc.gotoAndPlay(1);
			EventHandler.addEvent(modeSelect_mc, "tick", self.selectAniCheck);
		}
		this.selectAniCheck = function(evt){
			var __str = '';
			if (modeSelect_mc.currentLabel != null){
				__str = modeSelect_mc.currentLabel;
			}
			if (__str.indexOf('stop') > -1){
				modeSelect_mc.stop();
				EventHandler.removeEvent(modeSelect_mc, "tick", self.selectAniCheck);
				self.setSelectBtns();
			} else if (modeSelect_mc.currentFrame == modeSelect_mc.totalFrames - 1) {
				modeSelect_mc.stop();
				EventHandler.removeEvent(modeSelect_mc, "tick", self.selectAniCheck);
				modeSelect_mc.visible = false;
				selectFunc();
			}
		}
		this.setSelectBtns = function(){
			console.log("setSelectBtns");
			modeSelect_mc.mix_btn.cursor = "pointer";
			modeSelect_mc.mix_btn.buttonMode = false;
			modeSelect_mc.mix_btn.mouseChildren = false;
			EventHandler.addEvent(modeSelect_mc.mix_btn, "mousedown", self.selectPress);
			modeSelect_mc.paint_btn.cursor = "pointer";
			modeSelect_mc.paint_btn.buttonMode = false;
			modeSelect_mc.paint_btn.mouseChildren = false;
			EventHandler.addEvent(modeSelect_mc.paint_btn, "mousedown", self.selectPress);
			btnPress = true;
		}
		this.selectPress = function(evt){
			console.log("selectPress");
			if (!btnPress) return;
			btnPress = false;
			var btn = evt.target;
			var btnType = btn.name.split("_")[0];
			if (btnType == "mix"){
				selectFunc  = self.backToStory;
				Tracking.cntProgress({m:"s"});
			} else if (btnType == "paint"){
				selectFunc = self.backToPainting;
				Tracking.cntProgress({m:"p"});
			}
			playSound("Beep")
			modeSelect_mc.play();
			EventHandler.addEvent(modeSelect_mc, "tick", self.selectAniCheck);
		}
		this.backToStory = function(){
			content_mc.removeChild(modeSelect_mc);
			story_cnt = 1;
			mixedColor = "#FFFFFF";
			currentColor = "#FFFFFF";
			act_mode = "story";
			story_ani = undefined;
			paintTopic = undefined;
			self.setStory();
		}
		this.backToPainting = function(){
			content_mc.removeChild(modeSelect_mc);
			content_mc.addChild(artSelect_mc);
			act_mode = "paint";
			paintTopic = undefined;
			for (var i=0; i < paintList.length; i++){
				artSelect_mc["paint_"+paintList[i]].hl.visible = false;
			}
			artSelect_mc.visible = true;
			artSelect_mc.gotoAndPlay(1);
			EventHandler.addEvent(artSelect_mc, "tick", self.paintMenuCheck);
		}
		this.buildColorObj = function(){
			//red,blue,yellow
			for(var i=1; i<=3; i++) {
				color_obj['c_'+i+'00'] = color_mix_info['Primary_Colors']['red'];
				color_obj['c_0'+i+'0'] = color_mix_info['Primary_Colors']['blue'];
				color_obj['c_00'+i] = color_mix_info['Primary_Colors']['yellow'];
			}
			//Color Mix 2 red/yellow
			for(i=1; i<=3; i++) {
				for(var j=1; j<=3; j++) {
					color_obj['c_'+i+'0'+j] = color_mix_info['Color_Mix_2']['red'+i+'_yellow'][j-1];
				}
			}
			//Color Mix 2 red/blue
			for(i=1; i<=3; i++) {
				for(j=1; j<=3; j++) {
					color_obj['c_'+i+j+'0'] = color_mix_info['Color_Mix_2']['red'+i+'_blue'][j-1];
				}
			}
			//Color Mix 2 blue/yellow
			for(i=1; i<=3; i++) {
				for(j=1; j<=3; j++) {
					color_obj['c_'+'0'+i+j] = color_mix_info['Color_Mix_2']['blue'+i+'_yellow'][j-1];
				}
			}
			//Color Mix 3 red/yellow/blue
			for(i=1; i<=3; i++) {
				for(j=1; j<=3; j++) {
					for(var k=1; k<=3; k++) {
						color_obj['c_'+i+k+j] = color_mix_info['Color_Mix_3']['red'+i+'_yellow'+j+'_blue'][k-1];
					}
				}
			}
		}
		/*
		* Nav
		*/

		this.addNextBtn = function (__func) {
			self.removeSparkles();
			nav_mc.next_btn.visible = true;
			nav_mc.next_btn.x = nav_mc.close_btn.x-50;;
			nav_mc.next_btn.y = 685;
			nav_mc.next_btn.scaleX = nav_mc.next_btn.scaleY = 2;
			nav_mc.next_btn.alpha = 0;
			nav_mc.next_btn.buttonMode = false;
			nav_mc.next_btn.mouseChildren = false;
			EventHandler.addEvent(nav_mc.next_btn, "mousedown", __func);
			TweenMax.to(nav_mc.next_btn, .5, {alpha:1, ease:Linear.easeNone});
			if (act_mode == "story") TweenMax.delayedCall(30, self.pulseObj, [nav_mc.next_btn]);
		}
		this.pulseObj = function (__mc){
			TweenMax.to(__mc, .3, {scaleX:__mc.scaleX+.2, scaleY:__mc.scaleY+.2, ease:Linear.easeNone, repeat:5, yoyo:true, onComplete:self.pusleCntCheck});
		}
		this.pusleCntCheck = function (){
			nextPulse_cnt++;
			if (nextPulse_cnt == 3) return;
			if (act_mode == "story") TweenMax.delayedCall(30, self.pulseObj, [nav_mc.next_btn]);
		}
		this.addPlayAgainBtn = function (__func){
			replay_btn = new lib.common.PlayAgain();
			replay_btn.scaleX = replay_btn.scaleY = 1.3;
			replay_btn.buttonMode = true;
			replay_btn.mouseChildren = false;
			replay_btn.x = 400;
			replay_btn.y = nav_mc.next_btn.y+35; //630
			nav_mc.addChild(replay_btn);
			replay_btn.visible = true;
			replay_btn.alpha = 0;
			replay_btn.cursor = "pointer";
			EventHandler.addEvent(replay_btn, "mousedown", __func);
			TweenMax.to(replay_btn, .5, { alpha: 1, ease: Linear.easeNone });
		}
		this.removeReplayBtn = function (){
			if (replay_btn != null){
				replay_btn.visible = false;
				replay_btn.parent.removeChild(replay_btn);
				replay_btn = null;
			}
		}
		this.nextBtnCommon = function () {
			TweenMax.killDelayedCallsTo(self.pulseObj);
			nextPulse_cnt = 0;
			EventHandler.removeAllEvents(frBtnList);
			nav_mc.next_btn.visible = false;
			createjs.Sound.stop();
		}
		/*
		* Common
		*/
		this.setBtnPress = function(evt){
			btnPress = true;
		}
		this.addSparkles = function (__mc) {
			console.log("addSparkles");
			self.sparkle = new SparkleGenerator(lib.common);
			self.sparkle.addSparkles(stage, 2, "#FFFFCC", 15, 1);
			self.sparkle.mouseEnabled = false;
			self.sparkle.mouseChildren = false;
			self.sparkle.visible = true;
			content_mc.addChild(self.sparkle);
			self.sparkle.x = 100;
			self.sparkle.y = 600;
			self.sparkle.scaleX = self.sparkle.scaleY = 2;
			self.sparkle.gotoAndPlay(1);
			timeline = new TimelineMax({repeat:-1, yoyo:true});
			timeline.append(TweenMax.to(self.sparkle, 5, {x:1200, ease:Linear.easeNone}), 0);
			TweenMax.delayedCall(60, self.removeSparkles);
		}
		this.removeSparkles = function () {
			if (self.sparkle != null) {
				TweenMax.killDelayedCallsTo(self.removeSparkles);
				timeline.pause();
				timeline = null;
				content_mc.removeChild(self.sparkle);
				self.sparkle = null;
			}
		}
		this.setTextFormat = function(__name, __size){
			txtGen = new TextGen();
			txtGen.init();
			txtGen.applyFormat(__name, __size, "#FF0000");
			txtGen.txt_fmt.kerning = true;
			txtGen.txt_fmt.letterSpacing = 0;
			txtGen.txt_fmt.align = 'left';
		}
	}
