(function(sf, cjs) {
  function GameController(view, stage, lib) {
    this.BaseController_constructor(view, stage, lib);
    var startBtnClicked, isFirefox, gameEnd;
    this.load1stTime = false;
  }

  createjs.EventDispatcher.initialize(GameController.prototype);

  cjs.extend(GameController, starfall.BaseController);
  var p = GameController.prototype;

  p.show = function() {
    this.BaseController_show();
    this.loader = new cjs.LoadQueue(false);
    this.loader.installPlugin(cjs.Sound);
    Main.nav.next_btn.visible = false;

    this.view.back_btn.visible = false;
    this.view.handMcAnimBtn.visible = false;
    this.view.gotoAndStop(0);
    // this.view.wrd2a.gotoAndStop(0);
    // this.view.wrd2b.gotoAndStop(0);
    // this.view.wrd4.gotoAndStop(0);
    this.view.sndSmall.gotoAndStop(0);
    this.view.sndCapital.gotoAndStop(0);
    this.view.sndLetter.gotoAndStop(0);

    this.view.nxt_btn.visible = false;
    this.view.alphabet.visible = false;
    this.view.start_btn.visible = false;
    this.view.sparkles_mc.visible = false;

    this.view.back_btn.removeAllEventListeners("click");
    this.view.nxt_btn.removeAllEventListeners("click");
    //this.view.back_btn.removeAllEventListeners();
    //this.view.nxt_btn.removeAllEventListeners();
    this.btnControll(this.view.back_btn, 1);
    this.btnControll(this.view.nxt_btn, 1);
    this.view.back_btn.addEventListener("click", this.onBackClick.bind(this));
    this.view.nxt_btn.addEventListener("click", this.nxtClicks.bind(this));
    Main.toggleLoader(false);

    this.stopSounds();
    if (Main.fromMinigame) {
      tweener1 = "";
      tweener2 = "";
      this.view.gotoAndStop(4);
      this.view.addEventListener("tick", this.framesCheck.bind(this));
      this.view.back_btn.visible = true;
    } else {
      Main.sendInsideFlash();
      this.view.start_btn.visible = true;
      this.view.start_btn.addEventListener(
        "click",
        function() {
          this.view.start_btn.removeAllEventListeners("click");
          playSound("SwitchToggle");
          this.load1stTime = true;
          this.start();
        }.bind(this)
      );
    }
  };

  p.stopSounds = function() {
    cjs.Sound.stop();
  };

  p.start = function() {
    tweener1 = "";
    tweener2 = "";
    eggCnt = 0;
    this.view.start_btn.visible = false;
    this.view.gotoAndStop(0);
    isFirefox = typeof InstallTrigger !== "undefined";
    this.init();
  };

  p.onBackClick = function() {
    this.view.sparkles_mc.gotoAndStop(0);
    this.view.nxt_btn.visible = false;
    this.btnControll(this.view.nxt_btn, 0);
    this.pagesInit();
    this.stopSounds();
    this.view.gotoAndStop(Number(this.view.currentFrame) - 1);
    if (this.view.currentFrame == 1) {
      this.view.back_btn.visible = false;
      this.view.lesson0.gotoAndPlay(1);
    }
    this.stopHandAnim(this.view.handMcAnimBtn);
  };

  p.init = function() {
    this.view.gotoAndStop(1);
    this.view.lesson0.gotoAndStop(0);

    this.view.lesson0.play();
    this.view.addEventListener("tick", this.framesCheck.bind(this));

    //=========================================================================================
    // this.view.nxt_btn.visible = true;
    // this.view.gotoAndStop(4);
    //================================================================================================
  };

  p.framesCheck = function() {
    if (this.view.lesson0.currentFrame == 18) {
      this.view.sndCapital.play();
    }
    if (this.view.lesson0.currentFrame == 50) {
      this.view.sndSmall.play();
    }
    if (this.view.lesson0.currentFrame == this.view.lesson0.totalFrames - 2) {
      this.view.lesson0.gotoAndStop(this.view.lesson0.totalFrames - 1);
      this.view.lesson0.btn1.removeAllEventListeners("click");
      this.view.lesson0.ltrGrowCapital.scaleX = this.view.lesson0.ltrGrowCapital.scaleY = 1;
      this.view.lesson0.ltrGrowSmall.scaleX = this.view.lesson0.ltrGrowSmall.scaleY = 1;
      this.btnControll(this.view.lesson0.btn1, 1);
      this.view.lesson0.btn1.addEventListener(
        "click",
        function() {
          this.btnControll(this.view.lesson0.btn1, 0);
          this.btnControll(this.view.lesson0.btn2, 0);
          this.letterZoomAnim(this.view.lesson0.ltrGrowCapital, 1.1, "wrd0");
        }.bind(this)
      );
      this.view.lesson0.btn2.removeAllEventListeners("click");
      this.btnControll(this.view.lesson0.btn2, 1);
      this.view.lesson0.btn2.addEventListener(
        "click",
        function() {
          this.btnControll(this.view.lesson0.btn1, 0);
          this.btnControll(this.view.lesson0.btn2, 0);
          this.letterZoomAnim(this.view.lesson0.ltrGrowSmall, 1.1, "wrd0");
        }.bind(this)
      );
      this.view.nxt_btn.visible = true;
      this.btnControll(this.view.nxt_btn, 1);
      this.view.sparkles_mc.visible = true;
      this.view.sparkles_mc.play();
      this.view.handMcAnimBtn.x = this.view.nxt_btn.x - 100;
      this.view.handMcAnimBtn.y = this.view.nxt_btn.y;
      this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
    }
    if (this.view.currentFrame == 2) {
      if (this.view.lesson1.currentFrame == 0) {
        this.view.lesson1.gotoAndStop(1);
        this.view.wrd1.gotoAndStop(0);
        this.view.lesson1.reward.gotoAndStop(0);
        this.view.lesson1.sparkles_mc.play();
        this.view.handMcAnimBtn.x =
          this.view.lesson1.x + this.view.lesson1.sparkles_mc.x - 160;
        this.view.handMcAnimBtn.y =
          this.view.lesson1.y + this.view.lesson1.sparkles_mc.y - 30;
        this.showHandAnim(
          this.view.lesson1.sparkles_mc,
          this.view.handMcAnimBtn
        );
        this.view.lesson1.btn1.removeAllEventListeners("click");
        this.btnControll(this.view.lesson1.btn1, 1);
        this.view.lesson1.ltrGrowSmall.scaleX = this.view.lesson1.ltrGrowSmall.scaleY = 1;
        this.view.lesson1.btn1.addEventListener(
          "click",
          function() {
            // playSound("wSnd");
            this.view.lesson1.sparkles_mc.gotoAndStop(0);
            this.btnControll(this.view.lesson1.btn1, 0);
            this.stopHandAnim(this.view.handMcAnimBtn);
            this.letterZoomAnim(this.view.lesson1.ltrGrowSmall, 1.1, "wrd1");
          }.bind(this)
        );
      }
      if (this.view.wrd1.currentFrame == 33) {
        this.view.wrd1.gotoAndStop(34);
        this.view.lesson1.gotoAndStop(11);
        this.view.lesson1.reward.gotoAndPlay(1);
      }

      if (
        this.view.lesson1.reward.currentFrame ==
        this.view.lesson1.reward.totalFrames - 1
      ) {
        this.view.lesson1.reward.gotoAndStop(0);
        this.view.lesson1.gotoAndStop(1);
        this.btnControll(this.view.lesson1.btn1, 1);
        this.view.nxt_btn.visible = true;
        this.view.sparkles_mc.visible = true;
        this.view.sparkles_mc.gotoAndPlay(1);
        //this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
        this.btnControll(this.view.nxt_btn, 1);
        this.view.wrd1.letter_mc.scaleX = this.view.wrd1.letter_mc.scaleY = 0.23;
        this.btnControll(this.view.wrd1.btnWord, 1);
        this.view.wrd1.btnWord.removeAllEventListeners("click");
        this.view.wrd1.btnWord.addEventListener(
          "click",
          function() {
            this.letterZoomAnim(this.view.wrd1.letter_mc, 0.27, "wrd1a");
            this.btnControll(this.view.lesson1.btn1, 0);
            this.btnControll(this.view.wrd1.btnWord, 0);
          }.bind(this)
        );
      }
    }
    if (this.view.currentFrame == 3) {
      if (this.view.lesson2.currentFrame == 0) {
        this.view.lesson2.gotoAndStop(1);
        this.view.walk_mc.gotoAndStop(0);
        this.view.handMcAnimBtn.x =
          this.view.lesson2.x + this.view.lesson2.sparkles_mc.x - 280;
        this.view.handMcAnimBtn.y =
          this.view.lesson2.y + this.view.lesson2.sparkles_mc.y + 40;
        this.showHandAnim(
          this.view.lesson2.sparkles_mc,
          this.view.handMcAnimBtn
        );
        this.view.lesson2.sparkles_mc.play();
        this.view.lesson2.ltrGrowSmall.scaleX = this.view.lesson2.ltrGrowSmall.scaleY = 0.37;
        this.view.lesson2.btn1.removeAllEventListeners("click");
        this.btnControll(this.view.lesson2.btn1, 1);
        this.view.lesson2.btn1.addEventListener(
          "click",
          function() {
            // playSound("wSnd");
            this.view.lesson2.sparkles_mc.gotoAndStop(0);
            this.btnControll(this.view.lesson2.btn1, 0);
            this.stopHandAnim(this.view.handMcAnimBtn);
            this.letterZoomAnim(this.view.lesson2.ltrGrowSmall, 0.42, "wrd2");
          }.bind(this)
        );
      }
      if (this.view.lesson2.currentFrame == 16) {
        this.view.lesson2.gotoAndStop(17);
        this.view.walk_mc.gotoAndPlay(1);
      }
      if (this.view.walk_mc.currentFrame == this.view.walk_mc.totalFrames - 1) {
        this.view.walk_mc.gotoAndStop(0);
        this.view.lesson2.gotoAndPlay(18);
      }
      if (this.view.lesson2.currentFrame == this.view.lesson2.totalFrames - 2) {
        this.view.lesson2.gotoAndStop(this.view.lesson2.totalFrames - 1);
        this.view.nxt_btn.visible = true;
        this.view.sparkles_mc.visible = true;
        this.view.sparkles_mc.gotoAndPlay(1);
        this.btnControll(this.view.nxt_btn, 1);
        this.btnControll(this.view.lesson2.btn1, 1);
        //this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
      }
    }
    if (this.view.currentFrame == 4) {
      if (this.view.lesson3.currentFrame == 0) {
        this.view.lesson3.gotoAndStop(1);
        this.view.lesson3.reward.gotoAndStop(0);
        this.view.lesson3.sparkles_mc.play();
        this.view.handMcAnimBtn.x =
          this.view.lesson3.x + this.view.lesson3.sparkles_mc.x - 200;
        this.view.handMcAnimBtn.y =
          this.view.lesson3.y + this.view.lesson3.sparkles_mc.y - 45;
        this.showHandAnim(
          this.view.lesson3.sparkles_mc,
          this.view.handMcAnimBtn
        );
        this.view.lesson3.btn1.removeAllEventListeners();
        this.view.lesson3.ltrGrowSmall.scaleX = this.view.lesson3.ltrGrowSmall.scaleY = 0.45;
        this.btnControll(this.view.lesson3.btn1, 1);
        this.view.lesson3.btn1.addEventListener(
          "click",
          function() {
            //playSound("wSnd");
            this.view.lesson3.sparkles_mc.gotoAndStop(0);
            this.btnControll(this.view.lesson3.btn1, 0);
            this.stopHandAnim(this.view.handMcAnimBtn);
            this.letterZoomAnim(this.view.lesson3.ltrGrowSmall, 0.5, "wrd3");
          }.bind(this)
        );
      }
      if (this.view.lesson3.currentFrame == 22) {
        this.view.lesson3.gotoAndStop(23);
        this.view.lesson3.reward.gotoAndPlay(1);
      }

      if (
        this.view.lesson3.reward.currentFrame ==
        this.view.lesson3.reward.totalFrames - 1
      ) {
        this.view.lesson3.reward.gotoAndStop(0);
        this.view.lesson3.gotoAndPlay(24);
        this.view.lesson3.rewards.gotoAndStop(0);
      }

      if (this.view.lesson3.currentFrame == 32) {
        this.view.lesson3.gotoAndStop(33);
        this.view.lesson3.rewards.gotoAndStop(0);
        this.view.lesson3.sparkles_mc.play();
        this.view.handMcAnimBtn.x =
          this.view.lesson3.x + this.view.lesson3.sparkles_mc.x - 200;
        this.view.handMcAnimBtn.y =
          this.view.lesson3.y + this.view.lesson3.sparkles_mc.y - 45;
        this.showHandAnim(
          this.view.lesson3.sparkles_mc,
          this.view.handMcAnimBtn
        );
        this.view.lesson3.btn2.removeAllEventListeners();
        this.view.lesson3.ltrGrowSmall1.scaleX = this.view.lesson3.ltrGrowSmall1.scaleY = 0.45;
        this.btnControll(this.view.lesson3.btn2, 1);
        this.view.lesson3.btn2.addEventListener(
          "click",
          function() {
            //playSound("wSnd");
            this.view.lesson3.sparkles_mc.gotoAndStop(0);
            this.btnControll(this.view.lesson3.btn2, 0);
            this.stopHandAnim(this.view.handMcAnimBtn);
            this.letterZoomAnim(this.view.lesson3.ltrGrowSmall1, 0.5, "wrd3a");
          }.bind(this)
        );
      }

      if (this.view.lesson3.currentFrame == this.view.lesson3.totalFrames - 1) {
        this.view.lesson3.gotoAndStop(33);
        this.view.lesson3.rewards.gotoAndPlay(1);
      }

      if (
        this.view.lesson3.rewards.currentFrame ==
        this.view.lesson3.rewards.totalFrames - 1
      ) {
        this.view.lesson3.rewards.gotoAndStop(0);
        Main.sendNRate();
        this.view.nxt_btn.visible = true;
        this.view.sparkles_mc.visible = true;
        this.view.sparkles_mc.gotoAndPlay(1);
        this.btnControll(this.view.nxt_btn, 1);
        this.btnControll(this.view.lesson3.btn2, 1);
        //this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
      }
    }
  };

  p.onReverse = function(wrd) {
    if (wrd == "wrd0") {
      this.btnControll(this.view.lesson0.btn1, 1);
      this.btnControll(this.view.lesson0.btn2, 1);
    }

    if (wrd == "wrd1") {
      this.view.wrd1.gotoAndPlay(1);
    }
    if (wrd == "wrd1a") {
      this.view.wrd1.play();
    }
    if (wrd == "wrd2") {
      this.view.lesson2.gotoAndPlay(1);
    }
    if (wrd == "wrd2a") {
      this.view.wrd2.play();
    }
    if (wrd == "wrd3") {
      this.view.lesson3.gotoAndPlay(1);
      // this.view.wrd4.gotoAndPlay(1);
    }
    if (wrd == "wrd3a") {
      this.view.lesson3.gotoAndPlay(33);
      // this.view.wrd4.gotoAndPlay(1);
    }
    this.removeAllTweens();
  };
  p.letterZoomAnim = function(letter, scalePerc, wrd) {
    tweener1 = new TweenMax(letter, 0.15, {
      scaleX: scalePerc,
      scaleY: scalePerc,
      ease: Linear.easeNone,
      onReverseComplete: function() {
        this.onReverse(wrd);
      }.bind(this)
    });
    this.plySnd = playSound("wSnd");
    cjs.Tween.get({})
      .wait(500)
      .call(
        function() {
          tweener1.reverse();
        }.bind(this)
      );
  };
  p.showHandAnim = function(sparkles, hand, ind) {
    cjs.Tween.removeTweens(hand);
    var delay = 0;
	var ind = 0;
    if (ind == 0 || undefined) {
      delay = 7000;
    }
    hand.visible = false;
    sparkles.visible = true;
    cjs.Tween.get(hand, { override: true })
      .wait(delay)
      .call(
        function() {
          hand.visible = true;
          sparkles.visible = true;
          sparkles.gotoAndPlay(1);
        }.bind(this)
      )
      .wait(2000)
      .call(
        function() {
          hand.visible = false;
          //sparkles.visible = false;
          if (ind >= 4) {
            sparkles.visible = false;
            return;
          }
        }.bind(this)
      )
      .wait(3000)
      .call(
        function() {
          if (ind < 4) {
            this.showHandAnim(sparkles, hand, ind + 1);
          }
        }.bind(this)
      );
  };
  p.stopHandAnim = function(hand) {
    cjs.Tween.removeTweens(hand);
    hand.visible = false;
  };
  p.nxtClicks = function() {
    this.view.back_btn.visible = true;
    this.btnControll(this.view.back_btn, 1);
    this.btnControll(this.view.nxt_btn, 0);
    this.view.sparkles_mc.gotoAndStop(0);
    this.view.nxt_btn.visible = false;
    this.stopHandAnim(this.view.handMcAnimBtn);
    this.view.alphabet.alpha = 1;
    this.view.alphabet.scaleX = this.view.alphabet.scaleY = 2.5;
    this.view.alphabet.visible = true;
    playSound("wSnd");
    cjs.Tween.get(this.view.alphabet)
      .wait(10)
      .to({ scaleX: 3.5, scaleY: 3.5 }, 750)
      .to({ alpha: 0 }, 200)
      .call(
        function() {
          this.gotoNextPage();
        }.bind(this)
      );
  };
  p.gotoNextPage = function() {
    this.pagesInit();
    if (this.view.currentFrame == 4) {
      this.view.nxt_btn.removeAllEventListeners();
      this.view.removeAllEventListeners();
      cjs.Tween.removeAllTweens();
      //this.removeAllTweens();
      this.view.back_btn.removeAllEventListeners();
      Main.navigateToIndex("next");
    } else {
      this.view.gotoAndStop(Number(this.view.currentFrame) + 1);
    }
  };
  p.pagesInit = function() {
    this.removeAllTweens();
    this.stopSounds();
    this.view.sndCapital.gotoAndStop(0);
    this.view.sndSmall.gotoAndStop(0);
    if (this.view.currentFrame == 1) {
      this.view.lesson0.gotoAndStop(0);
    }
    if (this.view.currentFrame == 2) {
      this.view.lesson1.gotoAndStop(0);
      this.view.lesson1.reward.gotoAndStop(0);
    }
    if (this.view.currentFrame == 3) {
      this.view.walk_mc.gotoAndStop(0);
      this.view.lesson2.gotoAndStop(0);
    }
    if (this.view.currentFrame == 4) {
      this.view.lesson3.gotoAndStop(32);
      // this.view.lesson3.reward.gotoAndStop(0);
    }
  };
  p.removeAllTweens = function() {
    if (tweener2 != "") {
      tweener2.eventCallback("onComplete", null);
      tweener2.eventCallback("onUpdate", null);
      tweener2.eventCallback("onStart", null);
    }
    if (tweener1 != "") {
      tweener1.eventCallback("onComplete", null);
      tweener1.eventCallback("onUpdate", null);
      tweener1.eventCallback("onStart", null);
    }
    TweenMax.killAll();
  };
  p.btnControll = function(obj, on) {
    if (on == 1) {
      obj.cursor = "pointer";
      obj.buttonMode = true;
      obj.mouseEnabled = true;
      obj.mouseChildren = false;
    } else {
      obj.buttonMode = false;
      obj.mouseEnabled = false;
      obj.mouseChildren = false;
    }
  };

  p.allBtnControll = function(n) {
    for (i = 1; i <= 3; i++) {
      for (var j = 0; j <= 9; j++) {
        if (pieces_mc["d" + i + j] != null) {
          this.btnControll(pieces_mc["d" + i + j], n);
        }
      }
    }
  };
  p.stopSounds = function() {
    cjs.Sound.stop();
  };

  sf.GameController = createjs.promote(GameController, "BaseController");
})((starfall = starfall || {}), (createjs = createjs || {}));
var starfall, createjs;
