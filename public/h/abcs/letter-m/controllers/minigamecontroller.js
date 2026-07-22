(function(sf, cjs) {
  function MiniGameController(view, stage, lib) {
    this.BaseController_constructor(view, stage, lib);

    var txtObj,
      ranSentenceNum,
      _currentPage,
      match_cnt,
      click_cnt,
      previousCard,
      presentCard,
      tempCard_mc,
      end_cnt;
    var startBtnClicked,
      isFirefox,
      demoEnd,
      card_mc,
      shiftX,
      shiftY,
      wdList1 = [],
      cardShuffle1 = [],
      cardCheckList = [],
      cardsListSorted1 = [],
      cardsObjList1 = [],
      cardObjArr = [],
      finishedObjArr = [];
    this.load1stTime = false;
  }

  createjs.EventDispatcher.initialize(MiniGameController.prototype);

  cjs.extend(MiniGameController, starfall.BaseController);
  var p = MiniGameController.prototype;

  p.show = function() {
    this.BaseController_show();
    this.loader = new cjs.LoadQueue(false);
    this.loader.installPlugin(cjs.Sound);
    Main.nav.next_btn.visible = false;
    this.view.handMcAnimBtn.visible = false;

    //this.view.playAgain.visible = false;
    this.view.nxt_btn.visible = false;

    this.view.sparkles_mc.visible = false;

    this.start();
  };

  p.stopSounds = function() {
    cjs.Sound.stop();
  };
  p.showHandAnim = function (sparkles, hand, ind) {
    cjs.Tween.removeTweens(hand);
	var ind = 0;
    hand.visible = true;
    sparkles.visible = true;
    cjs.Tween.get(hand, { override: true })
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
  p.stopHandAnim = function(hand) {
    cjs.Tween.removeTweens(hand);
    hand.visible = false;
  };
  p.start = function() {
    //  Main.loadVideo();
    //  videoStarted = false;
    _currentPage = 0;
    demoEnd = false;
    objHitNum = 0;
    startBtnClicked = false;
    stars = "";
    click1stCard = false;

    this.view.gotoAndStop(0);
    // isFirefox = typeof InstallTrigger !== "undefined";
    shiftX = 0;
    shiftY = 0;
    wdList1 = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "o",
      "y",
      "z"
    ];
    cardShuffle1 = [1, 2, 3, 4, 5, 6];
    cardCheckList = [];
    match_cnt = 0;
    click_cnt = 0;
    cardObjArr = [];
    previousCard = "";
    presentCard = "";
    finishedObjArr = [];
    __arr = [];
    end_cnt = 0;
    loadWordSounds = [];
    this.view.alphabet.alpha = 0;
    //  this.view.start_btn.visible = false;
    this.btnControll(this.view.back_btn, 1);
    this.btnControll(this.view.nxt_btn, 1);
    this.view.back_btn.removeAllEventListeners();
    this.view.nxt_btn.removeAllEventListeners();
    this.view.back_btn.addEventListener("click", this.onBackClick.bind(this));
    this.view.nxt_btn.addEventListener("click", this.nxtClicks.bind(this));
    this.view.congratsSnd.gotoAndStop(0);
    this.view.snd_ding.gotoAndStop(0);
    this.view.snd_geo.gotoAndStop(0);
    this.view.sentence.gotoAndStop(0);
    this.view.lesson4.gotoAndStop(0);
    this.view.lesson4.anime.gotoAndStop(0);
    this.view.lesson4.bg_cover_mc.alpha = 1;
    this.view.intro_mc.gotoAndStop(0);
    this.view.intro_mc.alpha = 1;

    /* if (isFirefox) {
             this.view.WordBox.txt.y = -26;
 
         }*/
    // this.view.nxt_btn.addEventListener("click", this.nxtClicks.bind(this));
    for (var i = 1; i <= 6; i++) {
      this.view["target" + i].alpha = 1;
    }

    this.init();
  };

  p.nxtClicks = function() {
    this.btnControll(this.view.back_btn, 1);
    this.btnControll(this.view.nxt_btn, 0);
    this.view.sparkles_mc.gotoAndStop(0);
    this.view.nxt_btn.visible = false;
    this.stopHandAnim(this.view.handMcAnimBtn);
    this.view.alphabet.alpha = 1;
    this.view.alphabet.scaleX = this.view.alphabet.scaleY = 2.5;
    this.view.alphabet.visible = true;
    playSound("mSnd");
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
    this.view.nxt_btn.removeAllEventListeners();
    this.view.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    //this.removeAllTweens();
    this.view.back_btn.removeAllEventListeners();
    Main.navigateToIndex("next");
  };
  p.onBackClick = function() {
    if (cardObjArr.length > 0) {
      for (var i = 0; i < cardObjArr.length; i++) {
        this.view.removeChild(cardObjArr[i]);
      }
    }
    if (finishedObjArr.length > 0) {
      for (var i = 0; i < finishedObjArr.length; i++) {
        this.view.removeChild(finishedObjArr[i]);
      }
    }
    finishedObjArr;
    stars.clean();
    //this.removeAllTweens();
    cjs.Tween.removeAllTweens();
    this.view.removeAllEventListeners();
    this.view.snd_geo.gotoAndStop(0);
    //Main.stopVideo();
    this.view.congratsSnd.gotoAndStop(0);
    this.view.snd_ding.gotoAndStop(0);
    Main.fromMinigame = true;
    this.view.nxt_btn.removeAllEventListeners();
    this.view.removeAllEventListeners();
    this.view.back_btn.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    this.stopSounds();
    Main.showScreen("game");
  };
  p.init = function() {
    stars = starfall.effects.Stars;
    stars.init(
      this.view.starsContainer,
      [new this.lib.star1(), new this.lib.star2(), new this.lib.star3()],
      2000,
      50
    );
    stars.setPosition(-100, -100);

    while (__arr.length <= 6) {
      var rnd = Math.floor(Math.random() * 26) + 1;
      if (rnd != 24) {
        var addLetter = true;
        for (var i = 0; i < __arr.length; i++) {
          if (__arr[i] == rnd) {
            addLetter = false;
            break;
          }
        }
        if (addLetter) __arr.push(rnd);
      }
    }

    this.rndList();

    this.view.mouseEnabled = false;
    this.loader.addEventListener(
      "fileload",
      function() {
        this.loader.removeAllEventListeners("fileload");
        this.view.mouseEnabled = true;

        this.view.intro_mc.gotoAndPlay(1);
        cjs.Tween.get(this.view.intro_mc)
          .wait(2000)
          .to({ alpha: 0 }, 600)
          .call(
            function() {
              this.cardsArrange();
            }.bind(this)
          );
        this.view.addEventListener("tick", this.checkFrame.bind(this));

        Main.toggleLoader(false);
      }.bind(this)
    );
    this.loader.loadManifest(this.loadWordSounds);
    Main.toggleLoader(true);
  };
  p.cardsArrange = function() {
    for (var i = 1; i <= 12; i++) {
      card_mc = new this.lib.cardMc();
      card_mc.scaleX = card_mc.scaleY = 1;
      card_mc.x = 180 + shiftX; //512;
      card_mc.y = 120 + shiftY; //-110;
      card_mc.alpha = 0;
      // console.log(cardsListSorted1);
      card_mc.name = wdList1[cardsListSorted1[i - 1] - 1];
      card_mc.case = cardsListSorted1[i - 1][1];
      //  console.log(cardsListSorted1[i - 1][1] + "////name");

      cardObjArr.push(card_mc);

      this.view.addChild(card_mc);

      card_mc.addEventListener("click", this.cardClicks.bind(this));

      this.btnControll(card_mc, 0);
      //  playSound("Corkpopwav");
      cjs.Tween.get(card_mc)
        .wait(i * 200)
        .call(
          function() {
            playSound("Corkpopwav");
          }.bind(this)
        )
        .to(
          { x: 180 + shiftX, y: 120 + shiftY, alpha: 1 },
          300,
          cjs.Ease.sineOut
        );

      if (i < 4) {
        shiftX += 220;
      } else if (i == 4) {
        shiftX = 0;
        shiftY += 165;
      } else if (i < 8) {
        shiftX += 220;
      } else if (i == 8) {
        shiftX = 0;
        shiftY += 165;
      } else {
        shiftX += 220;
      }
    }
    cjs.Tween.get({})
      .wait(3000)
      .call(
        function() {
          for (var i = 1; i <= 12; i++) {
            cardObjArr[i - 1].randomShape.alpha = 0;
            //  cardObjArr[i - 1].randomShape.alpha = 1;
            cardObjArr[i - 1].num = cardsListSorted1[i - 1];
            cardObjArr[i - 1].randomShape.gotoAndStop(cardsListSorted1[i - 1]);
            cardObjArr[i - 1].randomShape[
              "letter" + cardsListSorted1[i - 1]
            ].gotoAndStop(0);
            // console.log(cardObjArr[i - 1].randomShape.currentFrame);
          }
          this.allBtnControll(1);
        }.bind(this)
      );
  };

  p.rndList = function() {
    var cardsListOrdered = [];
    var cardsObjOrdered = [];
    for (var i = 0; i < 6; i++) {
      // cardsListOrdered.push(cardShuffle1[i], cardShuffle1[i]);
      cardsListOrdered.push(__arr[i], __arr[i]);
      cardsObjOrdered.push(true, false);
      this.loadWordSound(wdList1[__arr[i] - 1] + "SndSm");
      this.loadWordSound(wdList1[__arr[i] - 1] + "Snd");
    }
    cardsListSorted1 = [];
    cardsObjList1 = [];
    var rnd;
    while (cardsListOrdered.length > 0) {
      rnd = Math.floor(Math.random() * cardsListOrdered.length);
      cardsListSorted1.push(cardsListOrdered[rnd]);
      cardsListOrdered.splice(rnd, 1);
      cardsObjList1.push(cardsObjOrdered[rnd]);
      cardsObjOrdered.splice(rnd, 1);
    }
  };

  p.cardClicks = function(e) {
    if (click1stCard == false) {
      click1stCard = true;
      // Main.startVideo();
    }
    presentCard = e.currentTarget;
    this.view.addChild(presentCard);

    playSound(presentCard.name.charAt(0) + "SndSm");
    presentCard.randomShape[
      "letter" + presentCard.randomShape.currentFrame
    ].gotoAndStop(8);
    cjs.Tween.get({})
      .wait(400)
      .call(
        function() {
          presentCard.randomShape[
            "letter" + presentCard.randomShape.currentFrame
          ].gotoAndStop(0);
        }.bind(this)
      );

    this.allBtnControll(0);
    presentCard.front.alpha = 0;
    presentCard.randomShape.alpha = 1;
    if (previousCard == "" && presentCard != "") {
      previousCard = presentCard;
      this.allBtnControll(1);
      this.btnControll(presentCard, 0);
    } else {
      //  this.allBtnControll(0);
      this.checkForMatch();
    }
  };

  p.checkForMatch = function() {
    // console.log(previousCard.name, presentCard.name )
    if (previousCard.num == presentCard.num) {
      cjs.Tween.get({})
        .wait(1200)
        .call(
          function() {
            this.afterMatch();
          }.bind(this)
        );
    } else {
      cjs.Tween.get({})
        .wait(1500)
        .call(
          function() {
            this.cardFlip(previousCard);
            this.cardFlip(presentCard);
            presentCard = "";
            previousCard = "";
          }.bind(this)
        );
    }
  };

  p.afterMatch = function() {
    this.view.lesson4.bg_cover_mc.alpha = 0;
    match_cnt++;
    var tempX = (previousCard.x + presentCard.x) / 2;
    var tempY = (previousCard.y + presentCard.y) / 2;
    cjs.Tween.get(previousCard)
      .to({ x: tempX, y: tempY }, 200)
      .call(function() {}.bind(this))
      .wait(200)
      .to({ scaleX: 1.2, scaleY: 1.2 }, 200)
      .call(function() {}.bind(this));

    cjs.Tween.get(presentCard)
      .to({ x: tempX, y: tempY }, 200)
      .call(function() {}.bind(this))
      .wait(200)
      .to({ scaleX: 1.2, scaleY: 1.2 }, 200)
      .call(function() {}.bind(this));

    cjs.Tween.get({})
      .wait(410)
      .call(
        function() {
          tempCard_mc = new this.lib.cardMc();
          //  tempCard_mc.alpha = 0;
          tempCard_mc.x = tempX;
          tempCard_mc.y = tempY;
          finishedObjArr.push(tempCard_mc);
          this.view.addChild(tempCard_mc);
          tempCard_mc.front.alpha = 0;
          tempCard_mc.gotoAndStop(0);
          // tempCard_mc.randomShape.gotoAndStop(0);
          tempCard_mc.randomShape.gotoAndStop(presentCard.num);
        }.bind(this)
      )
      .wait(50)
      .call(
        function() {
          tempCard_mc.randomShape.gotoAndStop(presentCard.num);
          tempCard_mc.randomShape["letter" + presentCard.num].gotoAndStop(0);
          tempCard_mc.alpha = 1;
          tempCard_mc.scaleX = tempCard_mc.scaleY = 1.2;
        }.bind(this)
      )

      .wait(500)
      .call(
        function() {
          presentCard.x = presentCard.y = previousCard.x = previousCard.y = -600;
        }.bind(this)
      )
      .wait(100)
      .call(
        function() {
          presentCard.alpha = previousCard.alpha = 0;
          playSound(presentCard.name.charAt(0) + "Snd");
          cjs.Tween.get(tempCard_mc.randomShape["letter" + presentCard.num])
            .to({ scaleX: 1.1, scaleY: 1.1 }, 300)
            .wait(300)
            .to({ scaleX: 1, scaleY: 1 }, 300);

          //this.view.snd_geo.gotoAndPlay(wdList1[presentCard.num - 1]);
          // tempCard_mc.randomShape["mc" + presentCard.num].txt.gotoAndStop(1);
        }.bind(this)
      )
      .wait(1000)
      .call(
        function() {
          playSound("abc_snd_" + presentCard.name);
          /* cjs.Tween.get(tempCard_mc.randomShape["pic" + presentCard.num])
 
             .to({ scaleX: 1.1, scaleY: 1.1 }, 300)
             .wait(300)
             .to({ scaleX: 1, scaleY: 1 }, 300);*/
          // tempCard_mc.randomShape["mc" + presentCard.num].txt.gotoAndStop(0);
        }.bind(this)
      )
      .wait(1000)
      .call(
        function() {
          cjs.Tween.get(tempCard_mc)
            .to(
              {
                x: this.view["target" + match_cnt].x,
                y: this.view["target" + match_cnt].y,
                scaleX: 0.75,
                scaleY: 0.75
              },
              300
            )
            .call(
              function() {
                playSound("clickRight");
                this.view["target" + match_cnt].alpha = 0;
                presentCard = "";
                previousCard = "";
                this.allBtnControll(1);
                if (match_cnt >= 6) {
                  this.gameEndHandler();
                }
              }.bind(this)
            );
        }.bind(this)
      );
  };
  p.gameEndHandler = function() {
    //playSound("youdidit");
    this.view.congratsSnd.gotoAndPlay(1);
    createjs.Tween.get({})
      .wait(500)
      .call(function() {
        stars.startEmit();
        //playSound("starsound");
      })
      .wait(3000)
      .call(function() {
        stars.stopEmit();
      })
      .wait(2000)
      .call(
        function() {
          //thisRef.anim.gotoAndPlay(1);
          stars.clean();
          for (var i = 0; i < 6; i++) {
            finishedObjArr[i].alpha = 0;
          }
          this.view.lesson4.gotoAndPlay(1);
          this.view.sentence.gotoAndPlay(1);
          // thisRef.anim.addEventListener("step1", step1Handler);
        }.bind(this)
      );
  };
  p.nextScreen = function() {
    this.view.removeAllEventListeners();
    cjs.Tween.removeAllTweens();
    Main.showScreen("reward");
  };
  p.cardFlip = function(card) {
    card.front.alpha = 1;
    card.randomShape.alpha = 0;
    this.allBtnControll(1);
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
    for (var i = 1; i <= 12; i++) {
      this.btnControll(cardObjArr[i - 1], n);
    }
  };
  p.loadWordSound1 = function(wordBlock) {
    // this.view.WordBox.alpha = 1;
    var word = wordBlock;
    if (!this.loadWordSounds) {
      this.loadWordSounds = [];
    }
    //console.log(this.loadWordSounds.indexOf(word));
    if (this.loadWordSounds.indexOf(word) > -1) {
      //  var wordlow = word.toLowerCase();
      //  playSound(wordlow);
    } else {
      this.loader.addEventListener(
        "fileload",
        function() {
          // var wordlow = word.toLowerCase();
          //  playSound(wordlow);
          this.loader.removeAllEventListeners("fileload");
          this.loadWordSounds.push(word);
        }.bind(this)
      );
      // console.log(Main.sentenceSoundsPath)
      var filePath = Main.sentenceSoundsPath + word + ".mp3";
      this.loader.loadFile({ id: word, src: filePath });
      //var wordl = word.toLowerCase();
    }
  };
  p.loadWordSound = function(wordBlock) {
    // this.view.WordBox.alpha = 1;
    var word = wordBlock;
    if (!this.loadWordSounds) {
      this.loadWordSounds = [];
    }
    this.loadWordSounds.push({
      id: word,
      src: Main.sentenceSoundsPath + word + ".mp3"
    });
  };
  p.checkFrame = function(e) {
    // console.log(this.view.sentence.currentFrame);
    if (this.view.sentence.currentFrame == 8) {
      this.view.sentence.gotoAndStop(9);

      this.playSenetence();
    } else if (
      this.view.sentence.currentFrame ==
      this.view.sentence.totalFrames - 2
    ) {
      this.view.sentence.gotoAndStop(this.view.sentence.totalFrames - 1);
      this.playReward();
    }
    if (
      this.view.lesson4.anime.currentFrame ==
      this.view.lesson4.anime.totalFrames - 2
    ) {
      this.view.lesson4.anime.gotoAndStop(
        this.view.lesson4.anime.totalFrames - 1
      );
      this.view.sparkles_mc.visible = true;
      this.view.sparkles_mc.gotoAndPlay(1);
      this.view.nxt_btn.visible = true;
      this.btnControll(this.view.nxt_btn, 1);
      this.view.sentence.btnWord.removeAllEventListeners("click");
      this.btnControll(this.view.sentence.btnWord, 1);
      this.view.sentence.btnWord.addEventListener(
        "click",
        this.wordClick.bind(this)
      );
      //this.showHandAnim(this.view.sparkles_mc, this.view.handMcAnimBtn);
    }
  };
  p.playSenetence = function() {
    // console.log("videostart");

    this.view.sentence.play();
    //this.playVideo();
  };
  p.wordClick = function() {
    this.btnControll(this.view.sentence.btnWord, 0);
    this.view.sentence.gotoAndStop(9);
    this.playSenetence();
  };
  p.playReward = function() {
    this.view.lesson4.anime.gotoAndPlay(1);
    Main.sendNRate();
  };

  sf.MiniGameController = createjs.promote(
    MiniGameController,
    "BaseController"
  );
})((starfall = starfall || {}), (createjs = createjs || {}));
var starfall, createjs;
