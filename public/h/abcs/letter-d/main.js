(function (Main) {
  var canvas,
    anim_container,
    dom_overlay_container,
    loader,
    screens = [],
    imgManifest = [],
    currentScreen,
    stage,
    videoLoader,
    videoLoadedCallback,
    player,
    Resize;

  Main.wdList1 = [
    "apple",
    "ball",
    "cat",
    "drum",
    "eggs",
    "fish",
    "girl",
    "heart",
    "igloo",
    "jet",
    "kite",
    "lock",
    "moon",
    "nine",
    "octopus",
    "pig",
    "question",
    "rainbow",
    "snake",
    "train",
    "umbrella",
    "van",
    "web",
    "ox",
    "yoyo",
    "zipper"
  ];

  Main.nRateSent = false;

  Main.fromMinigame = false;

  //Main.operandSoundsPath =  "www.starfall.com/ms/math/julie/"
  Main.alreadyLoadedSounds = [];
  Main.init = function () {
    Main.rateCode = SpecialDefinitions.rateCode;
    Main.exitURL = SpecialDefinitions.exitURL;
    Main.imgPath = SpecialDefinitions.logoURL;
    Main.videoPath = SpecialDefinitions.mp4URL;
    Main.sentenceSoundsPath = SpecialDefinitions.sentenceSoundsURL;
    Main.captionsURL = SpecialDefinitions.captionURL;
    Main.isCaptionsOn = SpecialDefinitions.isCaptionsOn;

    Main.compositions = {
      game: {
        id: "F045DBBD13287248A30E46EB9D82FA8F",
        controller: "GameController",
        view: "game"
      },
      /* reward: {
        id: "61091B25FD84974182C76AF395AC25BE",
        controller: "RewardController",
        view: "reward"
      }*/
      minigame: {
        id: "655FCB4D1CCC8D4588441A8B029C1958",
        controller: "MiniGameController",
        view: "minigame"
      }
    };
    Main.audioSounds = {
      minigame: [{
        src: "sounds/dvorak.mp3",
        id: "dvorak"
      }]
    };
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");

    dom_overlay_container = document.getElementById("dom_overlay_container");
    //this.loadSounds("and");
    this.loadSounds();
    this.loadImages();
    Main.toggleLoader(true);

    Main.loadComposition("game", Main.gameLoadCallback.bind(Main));
    /////////////  Main.loadComposition("quiz", Main.gameLoadCallback.bind(Main));
  };
  Main.appendToManifest = function (id, manifest) {
    var compObject = Main.compositions[id];
    var comp = AdobeAn.getComposition(compObject.id);
    var lib = comp.getLibrary();
    lib.properties.manifest = lib.properties.manifest.concat(manifest);
  };
  Main.loadImages = function () {
    Main.addImgToManifest();

    Main.appendToManifest("game", imgManifest);
  };
  Main.loadVideo = function (callback) {
    if (!videoLoader) {
      videoLoader = new createjs.LoadQueue(true);
      videoLoader.addEventListener("fileload", Main.onVideoLoaded.bind(this));

      videoLoader.loadFile({
        id: "video",
        src: Main.videoPath,
        type: createjs.AbstractLoader.BINARY
      });
      if (callback) {
        videoLoadedCallback = callback;
      }
    }
  };
  Main.onVideoLoaded = function (evt) {
    Main.video = evt.result;
    Main.initVideo();
    if (videoLoadedCallback) {
      videoLoadedCallback();
    }
    Main.startVideo();
  };
  Main.playVideo = function (callback) {
    if (player) {
      player.currentTime(0);
      var promise = player.play();
      player.on("ended", callback);
      if (promise !== undefined) {
        promise.then(
          function () {
            // Autoplay started!
            console.log("Autoplay started.");
          },
          function (error) {
            // Autoplay was prevented.
            console.log("Autoplay was prevented.");
          }
        );
      }
    }
  };
  Main.cleanVideo = function (callback) {
    if (player) {
      player.off("ended", callback);
    }
  };
  Main.stopVideo = function () {
    if (player) {
      player.currentTime(0);
      player.pause();
    }
  };
  Main.resumeVideo = function () {
    if (player) {
      //  player.currentTime(0);
      player.play();
    }
  };
  Main.pauseVideo = function () {
    if (player) {
      // player.currentTime(0);
      player.pause();
    }
  };
  Main.startVideo = function () {
    if (player && Main.videoReady) {
      player.currentTime(1);
      var promise = player.play();
      if (promise !== undefined) {
        promise.then(
          function () {
            // Autoplay started!
            console.log("Autoplay started.");
          },
          function (error) {
            // Autoplay was prevented.
            console.log("Autoplay was prevented.");
          }
        );
      }
      player.pause();
      // console.log(player.currentTime + "currentTime");
    }
  };
  Main.onVideoEnded = function () {
    return true;
  };
  Main.initVideo = function () {
    var $video = $(
      '<video id="player" controls playsinline class="video-js vjs-default-skin vjs-big-play-centered" data-setup=\'{ "nativeControlsForTouch": false }\'/>'
    );
    $("#video_container").append($video);

    player = videojs("player");
    player.ready(function () {
      //var $source = $('<source type="video/mp4"/>');
      var src = Main.video;

      var blob = new Blob([src], {
        type: "video/mp4"
      });
      var urlCreator = window.URL || window.webkitURL;
      var objUrl = urlCreator.createObjectURL(blob);
      this.src({
        type: "video/mp4",
        src: objUrl
      });
      Main.resizeHandler();

      player.addRemoteTextTrack({
        src: Main.captionsURL,
        kind: "captions",
        srclang: "en",
        label: "English",
        default: Main.isCaptionsOn
      });
      setInterval(function () {
        var height = $("video").height();
        var top = height * 0.4;
        $(".vjs-text-track-display div div").css("top", top + "px");
      }, 100);
      Main.videoReady = true;
    });
    return $video[0];
  };
  Main.loadSounds = function () {
    //Main.addSoundToManifest(sName);
    /*  operandArrray = ["and_one_half", "one_half"];
        for (var i = 0; i <= 20; i++) {
            Main.addSoundToManifest(i);
        }
        for (var i = 0; i < operandArrray.length; i++) {
            Main.addSoundToManifest(operandArrray[i]);
        }
        Main.appendToManifest('game', soundManifest);*/
  };
  Main.addImgToManifest = function () {
    imgManifest.push({
      src: Main.imgPath + "STARFALL_LOGO_EMBOSSED-medlow" + ".png",
      id: "logo"
    });
  };
  Main.addSoundToManifest = function (num) {
    /* if (addedFiles.indexOf(num) == -1) {
            addedFiles.push(num);
           // console.log(num)
            if (num == "and_one_half" || num == "one_half") {

                soundManifest.push(
                    { src: Main.numberSoundsPath + 'j-' + num + '.mp3', id: "j-" + num }
                )
            } else {
                soundManifest.push(
                    { src: Main.numberSoundsPath + Main.getSoundName(num), id: "j-" + num }
                )
            }

        }*/
  };

  Main.getSoundName = function (num) {
    return num < 10 ? "j-0" + num + ".mp3" : "j-" + num + ".mp3";
  };
  //Main.loadSounds("and")

  Main.loadComposition = function (id, callback) {
    var compObject = Main.compositions[id];
    var comp = AdobeAn.getComposition(compObject.id);
    var lib = comp.getLibrary();
    if (compObject.additionalManifest) {
      lib.properties.manifest = lib.properties.manifest.concat(
        compObject.additionalManifest
      );
    }
    lib.properties.manifest = lib.properties.manifest.filter(function (item) {
      return !(
        item.src.indexOf(".mp3") > -1 &&
        Main.alreadyLoadedSounds.indexOf(item.id) > -1
      );
    });
    lib.properties.manifest.map(function (item) {
      if (item.src.indexOf(".mp3") > -1) {
        Main.alreadyLoadedSounds.push(item.id);
      }
      item.loadTimeout = 300000;
    });

    if (!loader) {
      loader = new createjs.LoadQueue(false);
      loader.installPlugin(createjs.Sound);
      loader.setMaxConnections(10);
    }
    loader.addEventListener("fileload", function (evt) {
      handleFileLoad(evt);
    });
    loader.addEventListener("complete", function (evt) {
      handleComplete(evt);
    });
    loader.loadManifest(lib.properties.manifest);

    function handleFileLoad(evt) {
      var images = comp.getImages();
      if (evt && evt.item.type == "image") {
        if (evt.item.id == "logo") Main.logo = evt.result;
        images[evt.item.id] = evt.result;
      }
    }

    function handleComplete(evt) {
      loader.removeAllEventListeners("fileload");
      loader.removeAllEventListeners("complete");
      var ss = comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
          images: [queue.getResult(ssMetadata[i].name)],
          frames: ssMetadata[i].frames
        });
      }
      AdobeAn.compositionLoaded(lib.properties.id);
      if (!stage) {
        stage = new lib.Stage(canvas);
        createjs.Touch.enable(stage);
        stage.enableMouseOver(10);
        Main.addNav();
        createjs.Ticker.addEventListener("tick", stage);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(12);
        Resize = new CanvasResizer.Resize();
        Resize.width = 1024;
        Resize.height = 768;
        Resize.maxHeight = 1024;
        Resize.maxWidth = 768;
        Resize.stage = stage;
        Resize.resizeCallback = Main.resizeHandler;
        Resize.start();
        window.dispatchEvent(new Event('resize'));
      }
      Main.initScreen(id);
      if (callback) {
        callback();
      }
    }
  };

  Main.resizeHandler = function () {
    var width = (window.innerWidth) | 0;
    var height = (window.innerHeight) | 0;

    anim_container.style.width = width+"px";
    anim_container.style.height =  height+"px";

    var scaleW = 1024 * stage.scaleX;
    var scaleH = 680 * stage.scaleY;

    if (player) {
      $("#video_container").css({
        height: scaleH + "px",
        width: "100%",
        top:
          -(
            $("canvas").height() -
            (680 * stage.scaleY)
          ) * 0.5
      });

      $("#player").css({
        height: scaleH + "px",
        width:scaleW + "px",
        textAlign:"center",
        margin:"auto"
      });
    }
    setTimeout(function(){
      Resize.resizeCreatejs();
    },500);
    stage.update();
  };

  Main.toggleLoader = function (show) {
    if (show) {
      dom_overlay_container.style.display = "block";
      canvas.style.display = "none";
    } else {
      canvas.style.display = "block";
      setTimeout(function () {
        dom_overlay_container.style.display = "none";
      }, 100);
    }
  };
  Main.getComp = function (id) {
    return AdobeAn.getComposition(id);
  };
  Main.getLib = function (comp) {
    return comp.getLibrary();
  };
  Main.gameLoadCallback = function () {
    Main.showScreen("game");
    // Main.loadComposition("reward");
    Main.appendToManifest("minigame", Main.audioSounds.minigame);
    Main.loadComposition("minigame");
    //////////// Main.showScreen("quiz");
  };

  Main.addNav = function () {
    Main.nav = new starfall.nav();
    stage.addChild(Main.nav);
    var logoImg = new createjs.Bitmap(Main.logo);

    stage.addChild(logoImg);
    logoImg.scaleX = 0.3;
    logoImg.scaleY = 0.3;
    logoImg.x = 870;
    logoImg.y = 730;

    Main.nav.close_btn.x = 990;
    // Main.nav.close_btn.y = -30;

    //increase hit area
    var hit = new createjs.Shape();
    var w = Main.nav.close_btn.nominalBounds.width * 1.25;
    var h = Main.nav.close_btn.nominalBounds.height * 1.25;
    hit.graphics.beginFill("#000").drawRect(-w * 0.5, -h * 0.5, w, h);
    //Main.nav.close_btn.addChildAt(hit, 0);
    Main.nav.close_btn.hitArea = hit;

    Main.nav.close_btn.addEventListener("click", Main.closeButtonHandler);
  };
  Main.closeButtonHandler = function () {
    Main.navigateToIndex("close");
  };
  Main.initScreen = function (id) {
    var compObject = Main.compositions[id];
    var lib = Main.getLib(Main.getComp(compObject.id));
    var screen = new starfall[compObject.controller](
      new lib[compObject.view](),
      stage,
      lib
    );
    screens[id] = screen;
  };

  Main.navigateToIndex = function (ref) {
    window.location.href = Main.exitURL;
  };

  Main.showScreen = function (id, shouldHideLoader) {
    if (Main.isCompositionLoaded(id)) {
      if (currentScreen) {
        currentScreen.hide();
      }
      if (shouldHideLoader) {
        Main.toggleLoader(false);
      }
      currentScreen = screens[id];
      currentScreen.show();
    } else {
      Main.toggleLoader(true);
      setTimeout(Main.showScreen, 100, id, true);
    }
  };

  Main.isCompositionLoaded = function (screen) {
    return AdobeAn.bootcompsLoaded.indexOf(Main.compositions[screen].id) > -1;
  };

  Main.sendNRate = function () {
    if (Main.nRateSent == false) {
      Tracking.nRate(Main.rateCode);
      Main.nRateSent = true;
    }
  };

  Main.sendInsideFlash = function () {
    Tracking.insideFlash(Main.rateCode);
  };

  Main.isCompositionLoaded = function (screen) {
    return AdobeAn.bootcompsLoaded.indexOf(Main.compositions[screen].id) > -1;
  };
})((Main = Main || {}));
var Main;
