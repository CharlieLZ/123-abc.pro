(function (sf, cjs) {
  function MiniGameController(view, stage, lib) {
    this.BaseController_constructor(view, stage, lib);

    var txtObj, btnPress, tempObj, handAnimShow, dragObj;
    var startBtnClicked, isFirefox, demoEnd;
  }

  createjs.EventDispatcher.initialize(MiniGameController.prototype);

  cjs.extend(MiniGameController, starfall.BaseController);
  var p = MiniGameController.prototype;

  p.show = function () {
    this.BaseController_show();
    this.loader = new cjs.LoadQueue(false);
    this.loader.installPlugin(cjs.Sound);
    dragObjArr = [];
    // Main.nav.next_btn.visible = false;
    //   this.view.nxt_btn.visible = false;

    //   Main.toggleLoader(false);
    this.start();
  };

  p.stopSounds = function () {
    cjs.Sound.stop();
  };

  p.start = function () {
    //Main.loadVideo();
    _currentPage = 0;
    demoEnd = false;
    startBtnClicked = false;
    btnPress = false;
    capApplesCnt = 0;
    hitCnt = 0;
    gameEnd = false;
    handAnimShow = true;
    pop_cnt = 0;
    dragObj = "";
    trackAgain = true;
    // videoStarted = false;
    letterArr = ["j", "u", "m", "p"];
    posArr = [
      [0, 0],
      [630, 130],
      [180, 135],
      [840, 290],
      [395, 275]
    ];
    sndObj = {
      c: "jSnd",
      a: "uSnd",
      m: "mSnd",
      p: "pSnd"
    };

    this.canDrag = true;

    this.view.gotoAndStop(0);
    // this.view.woohoo.gotoAndStop(0);
    //this.view.greatJob.gotoAndStop(0);
    this.view.sentence.visible = false;
    this.view.directions.gotoAndStop(0);
    this.view.sparkles_mc.visible = false;
    this.view.sparkles_mc.gotoAndStop(0);
    this.view.sparkles_mc1.visible = true;
    this.view.sparkles_mc1.gotoAndStop(0);
    this.view.handMcAnimBtn.alpha = 0;
    this.view.nxt_btn.visible = false;
    this.view.alphabet.visible = false;
    this.view.word_spl.alpha = 0;
    this.view.word_spl.gotoAndStop(0);
    this.view.snd_word.gotoAndStop(0);
    this.btnControll(this.view.back_btn, 1);
    this.btnControll(this.view.nxt_btn, 1);
    this.view.back_btn.removeAllEventListeners();
    this.view.nxt_btn.removeAllEventListeners();
    this.view.back_btn.addEventListener("click", this.onBackClick.bind(this));
    this.view.nxt_btn.addEventListener("click", this.nxtClicks.bind(this));
    this.view.sentence.visible = false;
    this.view.sentence.gotoAndStop(0);
    this.view.puzzleBar.visible = true;
    this.view.doorA.x = 311;
    this.view.doorB.x = 711;
    this.view.word_spl.x = 506;
    this.view.word_spl.y = 511;
    this.view.word_spl.scaleX = this.view.word_spl.scaleY = 2.6;
    this.view.sndSmall.gotoAndStop(0);
    this.view.anime.gotoAndStop(0);

    /* if (isFirefox) {
             this.view.WordBox.txt.y = -26;
 
         }*/

    // this.view.nxt_btn.addEventListener("click", this.onNextClick.bind(this));
    this.init();
  };

  p.onNextClick = function () {
    this.view.nxt_btn.removeAllEventListeners();
    this.view.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    Main.navigateToIndex("next");
  };

  p.init = function () {
    for (var i = 1; i <= 4; i++) {
      var obj = this.view["p" + i];
      var targetObj = this.view["t" + i];
      obj.visible = true;
      obj.alpha = 0;
      obj.name = i;
      obj.x = posArr[i][0];
      obj.y = posArr[i][1];
      obj.gotoAndStop(i);
      obj.psSet.gotoAndStop(0);
      obj.rotation = 20;
      obj.psSet.gotoAndStop(i);
      obj.psSet["pc" + i].gotoAndStop(0);
      obj.psSet["pc" + i].gotoAndStop(1);
      obj.psSet.alpha = 1;
      obj.txt_mc.scaleX = 1;
      obj.txt_mc.scaleY = 1;
      obj.txt_mc.gotoAndStop(i);
      obj.txt_mc["txt" + i].gotoAndStop(0);
      targetObj.gotoAndStop(i);
      targetObj.txt_mc.gotoAndStop(0);
      targetObj.txt_mc.gotoAndStop(i);
      targetObj.txt_mc["txt" + i].gotoAndStop(0);
      targetObj.alpha = 1;
      targetObj.psSet.gotoAndStop(i);

      dragObjArr[i - 1] = this.view["p" + i];
    }

    this.animateAlphabets(0);
  };
  p.animateAlphabets = function (num) {
    cjs.Tween.get(dragObjArr[num])
      .wait(200)
      .to({
        alpha: 1
      }, 10)
      .call(
        function () {
          playSound("CorkPop");
          if (num < dragObjArr.length - 1) this.animateAlphabets(num + 1);
          else this.playDemo();
        }.bind(this)
      );
  };
  p.playDemo = function () {
    this.view.directions.gotoAndPlay(1);
    this.dragStart();
    this.view.addEventListener("tick", this.checkFrame.bind(this));
  };
  p.checkFrame = function (e) {
    if (this.view.directions.currentFrame == 4) {
      this.view.caption_mc.visible = true;
    } else if (
      this.view.directions.currentFrame ==
      this.view.directions.totalFrames - 1
    ) {
      this.view.caption_mc.visible = false;
    }
    if (
      this.view.directions.currentFrame ==
      this.view.directions.totalFrames - 2
    ) {
      this.view.caption_mc.visible = false;
      this.view.directions.gotoAndStop(this.view.directions.totalFrames - 1);
      cjs.Tween.get()
        .wait(50)
        .call(
          function () {
            if (handAnimShow) {
              this.guideAnim();
            }
          }.bind(this)
        );
    }
    if (this.view.snd_word.currentFrame == this.view.snd_word.totalFrames - 1) {
      this.view.snd_word.gotoAndStop(0);
      this.view.word_spl.gotoAndStop(0);
      // this.view.word_spl.txt.color = "red";
      this.view.sentence.visible = true;
      this.view.sentence.gotoAndStop(0);
      this.view.sentence.gotoAndPlay(1);
    }
    if (this.view.sentence.currentFrame == 12) {
      this.view.sentence.gotoAndStop(13);
      this.view.word_spl.gotoAndStop(1);
      cjs.Tween.get({})
        .wait(480)
        .call(
          function () {
            this.view.word_spl.alpha = 0;
          }.bind(this)
        );
      TweenMax.to(this.view.word_spl, 0.5, {
        x: this.view.targetWord.x,
        y: this.view.targetWord.y - 20,
        scaleX: 2.3,
        scaleY: 2.3,
        onComplete: function () {
          /* if (cjs.BrowserDetect.isIOS || cjs.BrowserDetect.isAndroid) {
             this.view.sparkles_mc1.gotoAndPlay(1);
             this.view.nxt_btn.visible = true;
             this.btnControll(this.view.nxt_btn, 1);
           } else {
             this.playSenetence();
           }*/
          this.playSenetence();
        }.bind(this)
      });
    } else if (
      this.view.sentence.currentFrame ==
      this.view.sentence.totalFrames - 2
    ) {
      this.view.sentence.gotoAndStop(this.view.sentence.totalFrames - 1);
      //content_mc.anime.addChild(GlobalVars.obj['song_mc']);
      TweenMax.to(this.view.doorA, 0.75, {
        x: -940
      });
      TweenMax.to(this.view.doorB, 0.75, {
        x: 1960
      });
      TweenMax.delayedCall(
        0.75,
        function () {
          this.playReward();
        }.bind(this)
      );
    }
    if (this.view.anime.currentFrame == this.view.anime.totalFrames - 2) {
      this.view.anime.gotoAndStop(this.view.anime.totalFrames - 1);
      this.view.sparkles_mc1.visible = true;
      this.view.sparkles_mc1.gotoAndPlay(1);
      this.view.nxt_btn.visible = true;
      this.view.handMcAnimBtn.visible = false;
      //this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
      this.view.sparkles_mc.visible = true;
      this.view.sparkles_mc.play();

      this.view.handMcAnimBtn.alpha = 1;
      this.view.sparkles_mc.alpha = 1;
      this.view.handMcAnimBtn.gotoAndPlay(1);
      this.view.handMcAnimBtn.rotation = 0;
      this.view.handMcAnimBtn.x = this.view.nxt_btn.x - 100;
      this.view.handMcAnimBtn.y = this.view.nxt_btn.y;
      this.view.sparkles_mc.x = this.view.nxt_btn.x;
      this.view.sparkles_mc.y = this.view.nxt_btn.y;

      this.btnControll(this.view.nxt_btn, 1);
      this.view.sentence.btnWord.removeAllEventListeners("click");
      this.btnControll(this.view.sentence.btnWord, 1);
      this.view.sentence.btnWord.addEventListener(
        "click",
        function () {
          this.btnControll(this.view.sentence.btnWord, 0);
          this.view.sentence.gotoAndPlay("snd");
        }.bind(this)
      );
    }
  };
  p.showHandAnim = function (sparkles, hand, ind) {
    cjs.Tween.removeTweens(hand);
    var ind = 0;
    hand.visible = true;
    sparkles.visible = true;
    cjs.Tween.get(hand, {
        override: true
      })
      .wait(2000)
      .call(
        function () {
          hand.visible = false;
          if (ind >= 4) {
            sparkles.visible = false;
            return;
          }
        }.bind(this)
      )
      .wait(3000)
      .call(
        function () {
          if (ind < 4) {
            this.showHandAnim(sparkles, hand, ind + 1);
          }
        }.bind(this)
      );
  };
  p.stopHandAnim = function (hand) {
    cjs.Tween.removeTweens(hand);
    hand.visible = false;
  };
  p.dragStart = function () {
    for (var i = 0; i < dragObjArr.length; i++) {
      this.btnControll(dragObjArr[i], 1);
      dragObjArr[i].addEventListener("mousedown", this.objPickUp.bind(this));
    }
  };

  p.objPickUp = function (evt) {
    this.view.directions.gotoAndStop(this.view.directions.totalFrames - 1);
    this.stopSounds();
    if (!this.canDrag) return;
    this.canDrag = false;
    this.stopSounds();
    handAnimShow = false;
    this.view.handMcAnimBtn.alpha = 0;
    this.view.sparkles_mc.visible = false;
    cjs.Tween.removeTweens(this.view.sparkles_mc);
    cjs.Tween.removeTweens(this.view.handMcAnimBtn);
    cjs.Tween.removeAllTweens();
    dragObj = evt.currentTarget;
    for (var i = 0; i < dragObjArr.length; i++) {
      this.btnControll(dragObjArr[i], 0);
    }
    //  dragObj.initX = dragObj.x;
    // dragObj.initY = dragObj.y;
    btnPress = true;
    this.view.addChild(dragObj);
    dragObj.rotation = 0;
    dragObj.psSet["pc" + dragObj.psSet.currentFrame].gotoAndStop(2);
    pt = this.stage.globalToLocal(this.stage.mouseX, this.stage.mouseY);
    this.objX = pt.x - dragObj.x;
    this.objY = pt.y - dragObj.y;
    cjs.Tween.get(dragObj)
      .to({
        x: pt.x,
        y: pt.y
      }, 200, cjs.Ease.linear)
      .call(function () {}.bind(this));
    // dragObj.removeAllEventListeners();
    dragObj.addEventListener("tick", this.moveItem.bind(this));

    // dragObj.initX = pt.x - this.objX;
    // dragObj.initY = pt.y - this.objY;

    dragObj.addEventListener("pressup", this.objRelease.bind(this));
  };
  p.objRelease = function (e) {
    btnPress = false;
    target = e.currentTarget;

    cjs.Tween.get(target)
      .to({
          x: this.view["t" + target.name].x,
          y: this.view["t" + target.name].y
        },
        500,
        cjs.Ease.linear
      )
      .call(
        function () {
          target.x = this.view["t" + target.name].x;
          target.y = this.view["t" + target.name].y;
          this.smallLetterHit(target);
        }.bind(this)
      );
  };
  p.moveItem = function (e) {
    if (btnPress) {
      pt = this.stage.globalToLocal(this.stage.mouseX, this.stage.mouseY);
      e.currentTarget.x = pt.x - this.objX;
      e.currentTarget.y = pt.y - this.objY;
      this.checkForHit(e.currentTarget);
    }
  };
  p.checkForHit = function (target) {
    pts = target.localToLocal(
      target.hitArea.x,
      target.hitArea.y,
      this.view["t" + target.name]
    );

    if (this.view["t" + target.name].hitTest(pts.x, pts.y)) {
      btnPress = false;
      target.x = this.view["t" + target.name].x;
      target.y = this.view["t" + target.name].y;

      this.btnControll(target, 0);
      target.removeEventListener("tick");
      //   this.smallLetterHit(target);
    }
  };

  p.smallLetterHit = function (target) {
    this.canDrag = true;
    //target.x = target.initX;
    //target.y = target.initY;
    target.psSet["pc" + dragObj.psSet.currentFrame].gotoAndStop(3);

    hitCnt++;
    target.x = this.view["t" + target.name].x;
    target.y = this.view["t" + target.name].y;
    target.removeAllEventListeners();
    this.btnControll(target, 0);

    this.textZoomAnim(target.txt_mc, 1.1);
  };
  p.checkForGameEnd = function () {
    if (hitCnt >= 4 && !gameEnd) {
      gameEnd = true;
      for (i = 1; i <= 4; i++) {
        this.view["t" + i].alpha = 0;
        TweenMax.to(this.view["p" + i].psSet, 0.5, {
          alpha: 0
        });
      }
      TweenMax.delayedCall(
        0.75,
        function () {
          for (i = 1; i <= 4; i++) {
            this.view["p" + i].txt_mc.scaleX = 1.4;
            this.view["p" + i].txt_mc.scaleY = 1.4;
          }
        }.bind(this)
      );
      TweenMax.delayedCall(
        1.5,
        function () {
          this.playLetters();
        }.bind(this)
      );
      // this.view.greatJob.gotoAndPlay(1);
    } else {
      for (var i = 1; i <= 4; i++) {
        if (this.view["p" + i].psSet["pc" + i].currentFrame != 3) {
          this.btnControll(this.view["p" + i], 1);
        }
      }
    }
  };
  p.letterZoomAnim = function (letter, scalePerc, wrd) {
    tweener1 = new TweenMax(letter, 0.1, {
      scaleX: scalePerc,
      scaleY: scalePerc,
      ease: Linear.easeNone
    });
    this.plySnd = playSound("jSnd");
    this.plySnd.on(
      "complete",
      function () {
        tweener1.reverse();
      }.bind(this)
    );
  };
  p.playLetters = function () {
    pop_cnt++;
    this.textZoomAnim(this.view["p" + pop_cnt].txt_mc, 1.5, true);
    if (pop_cnt >= 4) {
      TweenMax.delayedCall(
        1.25,
        function () {
          this.trackLetters();
        }.bind(this)
      );
    } else {
      TweenMax.delayedCall(
        1.25,
        function () {
          this.playLetters();
        }.bind(this)
      );
    }
  };
  p.trackLetters = function () {
    if (pop_cnt != 0) {
      pop_cnt = 0;
    }
    var shiftXList;
    if (trackAgain) {
      trackAgain = false;
      TweenMax.delayedCall(
        0.75,
        function () {
          this.playLetters();
        }.bind(this)
      );
      shiftXList = [372, 463, 555, 650];
    } else {
      TweenMax.delayedCall(
        0.75,
        function () {
          this.turnOnWord();
        }.bind(this)
      );
      shiftXList = [410, 465, 545, 620];
    }
    for (var i = 1; i <= 4; i++) {
      var __mc = this.view["p" + i];
      TweenMax.to(__mc, 0.75, {
        x: shiftXList[i - 1]
      });
    }
  };

  p.turnOnWord = function () {
    this.view.word_spl.alpha = 1;
    this.view.word_spl.gotoAndStop(0);
    //this.view.word_spl.txt.color = "red";
    for (var i = 1; i <= 4; i++) {
      this.view["p" + i].visible = false;
    }
    this.view.snd_word.gotoAndStop(0);
    this.view.snd_word.gotoAndPlay(1);
  };

  p.playSenetence = function () {
    /* videoStarted = true;
     Main.playVideo(
       function () {
         this.view.sparkles_mc1.visible = true;
         this.view.sparkles_mc1.gotoAndPlay(1);
         this.view.nxt_btn.visible = true;
         this.btnControll(this.view.nxt_btn, 1);
       }.bind(this)
     );*/
    this.view.puzzleBar.visible = false;
    this.view.sentence.play();
    //this.playVideo();
  };

  p.playDoorOpen = function () {};
  p.playReward = function () {
    Main.sendNRate();
    this.view.anime.gotoAndPlay(1);
    /*GlobalVars.obj["song_mc"].gotoAndPlay("start");
    EventHandler.addEvent(
      GlobalVars.obj["song_mc"],
      Event.ENTER_FRAME,
      rewardCheck
    );*/
  };

  p.rewardCheck = function () {
    /* if (evt.target.currentFrame == evt.target.totalFrames) {
      evt.target.stop();
      EventHandler.removeEvent(evt.target, Event.ENTER_FRAME, rewardCheck);
        DisplayInfo.stopAll(GlobalVars.obj['song_mc']);
        parent_obj.rewardEnd();
    }*/
  };

  p.textZoomAnim = function (letter, scalePerc, gameEnd) {
    // letter.txt.color = "red";
    letter["txt" + letter.currentFrame].gotoAndStop(1);
    tweener1 = new TweenMax(letter, 0.1, {
      scaleX: scalePerc,
      scaleY: scalePerc,
      ease: Linear.easeNone,
      onReverseComplete: function () {
        // letter.txt.color = "black";
        letter["txt" + letter.currentFrame].gotoAndStop(0);
        this.checkForGameEnd();
      }.bind(this)
    });
    var snd = String(letterArr[letter.currentFrame - 1] + "Snd");
    this.plySnd = playSound(snd);
    this.plySnd.on(
      "complete",
      function () {
        tweener1.reverse();
      }.bind(this)
    );
    if (gameEnd) {}
  };
  p.btnControll = function (obj, on) {
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

  p.nxtClicks = function () {
    this.btnControll(this.view.back_btn, 1);
    //   this.view.sparkles_mc.gotoAndStop(0);
    this.view.nxt_btn.visible = false;
    this.view.alphabet.alpha = 1;
    this.view.alphabet.scaleX = this.view.alphabet.scaleY = 2.5;
    this.view.alphabet.visible = true;
    playSound("jSnd");
    cjs.Tween.get(this.view.alphabet)
      .wait(10)
      .to({
        scaleX: 3.5,
        scaleY: 3.5
      }, 500)
      .to({
        alpha: 0
      }, 200)
      .call(
        function () {
          this.gotoNextPage();
        }.bind(this)
      );
  };

  p.gotoNextPage = function () {
    this.view.nxt_btn.removeAllEventListeners();
    this.view.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    this.removeAllTweens();
    this.view.back_btn.removeAllEventListeners();
    Main.navigateToIndex("next");
  };
  p.onBackClick = function () {
    this.view.caption_mc.visible = false;
    this.removeAllTweens();
    cjs.Tween.removeAllTweens();
    this.view.removeAllEventListeners();
    this.view.sndSmall.gotoAndStop(0);
    //  Main.stopVideo();
    for (var i = 1; i <= 4; i++) {
      var obj = this.view["p" + i];
      obj.alpha = 0;
      obj.x = posArr[i][0];
      obj.y = posArr[i][1];
    }
    this.view.directions.gotoAndStop(0);
    this.view.snd_word.gotoAndStop(0);
    Main.fromMinigame = true;
    this.view.nxt_btn.removeAllEventListeners();
    this.view.removeAllEventListeners();
    this.view.back_btn.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    this.stopSounds();
    Main.showScreen("game");
  };
  p.guideAnim = function () {
    this.view.handMcAnimBtn.visible = true;
    this.view.handMcAnimBtn.alpha = 1;
    this.view.sparkles_mc.visible = true;
    this.view.sparkles_mc.alpha = 1;
    this.view.sparkles_mc.gotoAndPlay(1);
    this.view.addChild(this.view.sparkles_mc);
    this.view.addChild(this.view.handMcAnimBtn);
    this.view.handMcAnimBtn.initX = 475;
    this.view.handMcAnimBtn.initY = 135;
    this.handAnimStart();
  };

  p.handAnimStart = function () {
    this.view.handMcAnimBtn.x = this.view.handMcAnimBtn.initX;
    this.view.handMcAnimBtn.y = this.view.handMcAnimBtn.initY;
    this.view.handMcAnimBtn.rotation = 0;
    this.view.handMcAnimBtn.gotoAndPlay(1);

    cjs.Tween.get({})
      .wait(1500)
      .call(
        function () {
          this.view.handMcAnimBtn.gotoAndStop(0);
          cjs.Tween.get(this.view.handMcAnimBtn)
            .to({
                x: this.view.t1.x,
                y: this.view.t1.y - 80,
                rotation: 90
              },
              800
            )
            .call(
              function () {
                this.view.handMcAnimBtn.gotoAndPlay(1);
              }.bind(this)
            );
        }.bind(this)
      )

      .wait(3500)
      .call(
        function () {
          this.handAnimStart();
        }.bind(this)
      );
  };
  p.stopSounds = function () {
    cjs.Sound.stop();
  };
  p.removeAllTweens = function () {
    if (tweener1 != "") {
      tweener1.eventCallback("onComplete", null);
      tweener1.eventCallback("onUpdate", null);
      tweener1.eventCallback("onStart", null);
    }
    TweenMax.killAll();
  };

  sf.MiniGameController = createjs.promote(
    MiniGameController,
    "BaseController"
  );
})((starfall = starfall || {}), (createjs = createjs || {}));
var starfall, createjs;