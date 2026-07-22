var canvas,
  stage,
  intro,
  frame1,
  frame2,
  frame3,
  frame4,
  outro,
  anim_container,
  dom_overlay_container,
  preloaderDiv,
  fnStartAnimation,
  rotateIconContainer,
  rotateIcon,
  loader,
  close_btn;
var initialLoadCompleted = false;
var currentLoadingFrame = 0;
var compositionIds = [
  "7C6755F409921549BCB7700D185ACDE1",
  "7C6755F409921549BCB7700D185ACDE2",
  "7C6755F409921549BCB7700D185ACDE3",
  "7C6755F409921549BCB7700D185ACDE4",
  "7C6755F409921549BCB7700D185ACDE5"
];
var frames = [];
var currentFrame = 0;
var soundInstances = [];
var initialTouchInputForMobileDevices = false;
var xterManifest;
var globalManifest;
var globalSSMetadata;
var waitingForNextFrameToLoad = false;
var loadCheckInterval;
var captionsLoaded = false;
var captionData;

function init(avatarLoadBaseURL, avatarVariable) {
  globalManifest = [
    { src: SpecialDefinitions.globalAssetAtlasURL, id: "global_assets_atlas" }
  ];
  globalSSMetadata = [
    {
      name: "global_assets_atlas",
      frames: [[0, 114, 43, 42], [0, 0, 113, 112]]
    }
  ];
  xterManifest = [
    {
      src: avatarLoadBaseURL + "me-front-optimize.php?b5h=" + avatarVariable,
      id: "xterFront",
      type: "image"
    },
    {
      src:
        avatarLoadBaseURL + "CreateAnim01-optimize.php?b5h=" + avatarVariable,
      id: "xterChar1",
      type: "image"
    },
    {
      src:
        avatarLoadBaseURL + "CreateAnim02-optimize.php?b5h=" + avatarVariable,
      id: "xterChar2",
      type: "image"
    }
  ];
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  preloaderDiv = document.getElementById("_preload_div_");
  rotateIconContainer = document.getElementById("rotate_icon_container");
  rotateIcon = document.getElementById("rotate_icon");
  var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
  var lib = comp.getLibrary();
  createjs.MotionGuidePlugin.install();
  createjs.LoadQueue.loadTimeout = 300000;
  loader = new createjs.LoadQueue(false);
  loader.installPlugin(createjs.Sound);
  //loader.setMaxConnections(10);
  loader.addEventListener("fileload", function(evt) {
    handleFileLoad(evt);
  });
  loader.addEventListener("error", function(evt) {
    console.log("error", evt);
  });
  loader.addEventListener("fileerror", function(evt) {
    console.log("fileerror", evt);
  });
  loader.addEventListener("complete", function(evt) {
    //handleComplete(evt);
  });
  lib.properties.manifest = lib.properties.manifest.concat(globalManifest);
  lib.ssMetadata = lib.ssMetadata.concat(globalSSMetadata);

  if (SpecialDefinitions.isCaptionsOn && !captionsLoaded) {
    lib.properties.manifest.push({
      src: "captions.json",
      id: "captions"
    });
  }
  lib.properties.manifest.map(function(item) {
    item.loadTimeout = 300000;
  });
  loader.loadManifest(lib.properties.manifest);

  // window.addEventListener("resize", function() {
  //   setTimeout(resizePreloader, 200);
  // });
  // resizePreloader();
  // setTimeout(resizePreloader, 800);
  // function resizePreloader() {
  //   window.scrollTop = "-1px";
  //   var w = lib.properties.width,
  //     h = lib.properties.height;
  //   var iw = window.innerWidth,
  //     ih = window.innerHeight;
  //   var pRatio = window.devicePixelRatio || 1,
  //     xRatio = iw / w,
  //     yRatio = ih / h,
  //     sRatio = 1;
  //   var sRatio = Math.min(xRatio, yRatio);
  //   canvas.width = w * pRatio * sRatio;
  //   canvas.height = h * pRatio * sRatio;
  //   canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =
  //     w * sRatio + "px";
  //   canvas.style.height = dom_overlay_container.style.height = anim_container.style.height =
  //     h * sRatio + "px";
  //   lastW = iw;
  //   lastH = ih;
  //   lastS = sRatio;
  //   if (stage) {
  //     stage.update();
  //   }
  //   if (iw > ih) {
  //     anim_container.style.left = (iw - w * sRatio) / 2 + "px";
  //     anim_container.style.top = (ih - h * sRatio) / 2 + "px";
  //     anim_container.style.position = "absolute";
  //     rotateIconContainer.style.display = "none";
  //   } else {
  //     anim_container.style.left = "0px";
  //     anim_container.style.top = "0px";
  //     anim_container.style.position = "relative";
  //     var remainingHeight = ih - h * sRatio;
  //     rotateIconContainer.style.height = remainingHeight + "px";
  //     rotateIconContainer.style.width = iw + "px";
  //     rotateIcon.style.top = (remainingHeight - rotateIcon.height) / 2 + "px";
  //     rotateIcon.style.left = (iw - rotateIcon.width) / 2 + "px";
  //     rotateIconContainer.style.display = "block";
  //   }
  //   window.scrollTo(0, 1);
  // }
}
function loadFrame(frameNo) {
  var compId = compositionIds[frameNo];
  var comp = AdobeAn.getComposition(compId);
  var lib = comp.getLibrary();
  if (frameNo == 3) {
    lib.properties.manifest = lib.properties.manifest.concat(xterManifest);
  }
  lib.properties.manifest.map(function(item) {
    item.loadTimeout = 300000;
  });
  loader.loadManifest(lib.properties.manifest);
}
function loadedFile(id) {
  var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
  var lib = comp.getLibrary();
  lib.properties.manifest.map(function(file) {
    if (file.id == id) {
      file.isLoaded = true;
    }
  });
}
function isAllFilesLoadedForComposition() {
  var com = true;
  var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
  var lib = comp.getLibrary();
  lib.properties.manifest.map(function(file) {
    if (!file.isLoaded) {
      com = false;
    }
  });
  return com;
}
function handleFileLoad(evt) {
  var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
  var images = comp.getImages();
  if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
  }
  if (SpecialDefinitions.isCaptionsOn) {
    if (evt && evt.item.type == "json" && evt.item.id == "captions") {
      captionsLoaded = true;
      captionData = evt.result;
    }
  }

  loadedFile(evt.item.id);
  if (isAllFilesLoadedForComposition()) {
    handleComplete(evt);
  }
}
function initialLoadHandler(evt) {
  sendInsideFlash();
  var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames
    });
  }
  toggleLoader(false);
  document.body.style.backgroundColor = "rgba(226, 225, 225, 1.00)";
  intro = new lib.intro();
  frames.push(intro);
  stage = new lib.Stage(canvas);
  stage.enableMouseOver();

  var Resize = new CanvasResizer.Resize();
  Resize.width = lib.properties.width;
  Resize.height = lib.properties.height;
  Resize.maxWidth = lib.properties.width;
  Resize.maxHeight = lib.properties.height;
  Resize.stage = stage;
  Resize.resizeCallback = stage.update.bind(stage);//stage.update;
  Resize.start();

  addCloseButton(lib, ss);

  var images = comp.getImages();
  var sparkleTextures = [];

  var sparkleTexture1 = new lib.sparkles1();
  sparkleTexture1.regX = 28.5;
  sparkleTexture1.regY = 25;
  sparkleTextures.push(sparkleTexture1);
  var sparkleTexture2 = new lib.sparkles2();
  sparkleTexture2.regX = 23.5;
  sparkleTexture2.regY = 25;
  sparkleTextures.push(sparkleTexture2);
  Sparkles.init(stage, sparkleTextures);
  Sparkles.setPosition(500, 200);

  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.addEventListener("tick", updateEvent);
  };
  function updateEvent() {
    Sparkles.update();
    if (SpecialDefinitions.isCaptionsOn && currentFrame == 4) {
      var frame = frames[currentFrame];
      if (frame.jingle.currentFrame == 3) {
        playCaption("red");
      }
    }
  }
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", function() {
      setTimeout(resizeCanvas, 200);
    });
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w * pRatio * sRatio;
      canvas.height = h * pRatio * sRatio;
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =
        w * sRatio + "px";
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height =
        h * sRatio + "px";
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      stage.update();
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      if (iw > ih) {
        anim_container.style.left = (iw - w * sRatio) / 2 + "px";
        anim_container.style.top = (ih - h * sRatio) / 2 + "px";
        anim_container.style.position = "absolute";
        rotateIconContainer.style.display = "none";
      } else {
        anim_container.style.left = "0px";
        anim_container.style.top = "0px";
        anim_container.style.position = "relative";
        var remainingHeight = ih - h * sRatio;
        rotateIconContainer.style.height = remainingHeight + "px";
        rotateIconContainer.style.width = iw + "px";
        rotateIcon.style.top = (remainingHeight - rotateIcon.height) / 2 + "px";
        rotateIcon.style.left = (iw - rotateIcon.width) / 2 + "px";
        rotateIconContainer.style.display = "block";
      }
    }
  }
  //makeResponsive(true, "both", true, 1);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
function addCloseButton(lib, ss) {
  var CloseButton, X_BUTTON3, Bitmap92;

  (Bitmap92 = function() {
    this.spriteSheet = ss["global_assets_atlas"];
    this.gotoAndStop(0);
  }).prototype = p = new createjs.Sprite();

  (X_BUTTON3 = function() {
    this.spriteSheet = ss["global_assets_atlas"];
    this.gotoAndStop(1);
  }).prototype = p = new createjs.Sprite();

  (CloseButton = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new X_BUTTON3();
    this.instance.parent = this;
    this.instance.setTransform(-21.3, -21.1, 0.377, 0.377);

    this.instance_1 = new Bitmap92();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-21, -21);

    this.timeline.addTween(
      createjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(3)
    );
  }).prototype = p = new createjs.MovieClip();
  p.nominalBounds = new createjs.Rectangle(-21.3, -21.1, 42.6, 42.3);

  close_btn = new CloseButton();
  stage.addChild(close_btn);
  close_btn.setTransform(1072.3, 27.1);
  new createjs.ButtonHelper(close_btn, 0, 1, 2, false, new CloseButton(), 3);

  close_btn.addEventListener("click", closeBtnHandler);
}
function closeBtnHandler(evt) {
  navigateToIndex("close");
}
function navigateToIndex(ref) {
  window.location.href = SpecialDefinitions.exitURL;
}
function handleComplete(evt) {
  if (!initialLoadCompleted) {
    initialLoadCompleted = true;
    initialLoadHandler(evt);
    showFrame(currentFrame);
    if (SpecialDefinitions.isCaptionsOn) {
      addCaptions();
    }
  } else {
    var comp = AdobeAn.getComposition(compositionIds[currentLoadingFrame]);
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    //var loader = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
      if (!loader.getResult(ssMetadata[i].name)) {
        return;
      }
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [loader.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames
      });
    }

    switch (currentLoadingFrame) {
      case 1:
        frame1 = new lib.activity1();
        frames.push(frame1);
        break;
      case 2:
        frame2 = new lib.activity2();
        frames.push(frame2);
        break;
      case 3:
        frame3 = new lib.activity3();
        frame3.comp = comp;
        frames.push(frame3);
        break;
      case 4:
        outro = new lib.outro();
        frames.push(outro);
        break;
    }
  }
  currentLoadingFrame++;
  if (currentLoadingFrame < compositionIds.length) {
    loadFrame(currentLoadingFrame);
  }
}

function showFrame(frameNo) {
  var frame = frames[frameNo];
  stage.addChild(frame);
  if (frameNo == 0) {
    //Start Edit on 2018-09-03 10:57:11 to add start button to computer.
    if (!initialTouchInputForMobileDevices) {
      initialTouchInputForMobileDevices = true;
      frame.gotoAndStop(0);
    } else {
      frame.gotoAndStop(1);
      frame.init();
    }
    //End Edit
  } else {
    frame.gotoAndStop(0);
    frame.init();
  }
  frame.addEventListener("nextframe", gotoNextFrame);
  frame.addEventListener("backpressed", gotoPreviousFrame);
}
function hideFrame(frameNo) {
  var frame = frames[frameNo];
  stage.removeChild(frame);
  frame.removeEventListener("nextframe", gotoNextFrame);
  frame.removeEventListener("backpressed", gotoPreviousFrame);
}
function gotoPreviousFrame() {
  if (currentFrame > 0) {
    hideFrame(currentFrame);
    currentFrame--;
    showFrame(currentFrame);
  }
  stopCaption("red");
}
function gotoNextFrame() {
  if (currentFrame < frames.length - 1) {
    hideFrame(currentFrame);
    currentFrame++;
    showFrame(currentFrame);
    if (currentFrame == frames.length - 1) {
      sendNRate();
      saveCookie("r");
    }
    if (waitingForNextFrameToLoad) {
      waitingForNextFrameToLoad = false;
      toggleLoader(false);
      clearInterval(loadCheckInterval);
    }
  } else if (frames.length < compositionIds.length) {
    if (!waitingForNextFrameToLoad) {
      waitingForNextFrameToLoad = true;
      toggleLoader(true);
      loadCheckInterval = setInterval(gotoNextFrame, 1000);
    }
  } else {
    navigateToIndex("next");
  }
}
function toggleLoader(show) {
  if (show) {
    preloaderDiv.style.display = "block";
    canvas.style.display = "none";
  } else {
    preloaderDiv.style.display = "none";
    canvas.style.display = "block";
  }
}
function playSound(id, loop) {
  var soundInstance = soundInstances[id];
  if (soundInstance) {
    soundInstance.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
  } else {
    soundInstance = createjs.Sound.play(
      id,
      createjs.Sound.INTERRUPT_EARLY,
      0,
      0,
      loop
    );
    soundInstances[id] = soundInstance;
  }
  return soundInstance;
}

var nRateSent = false;
function sendNRate() {
  if (!nRateSent) {
    Tracking.nRate(SpecialDefinitions.rateCode);
    nRateSent = true;
  }
}

function sendInsideFlash() {
  Tracking.insideFlash(SpecialDefinitions.rateCode);
}

function stopSound(id) {
  if (soundInstances[id]) {
    soundInstances[id].stop();
  }
}

var captions;
function addCaptions() {
  captions = new starfall.Captions(captionData, 900, 80);
  stage.addChild(captions);
  captions.x = 550;
  captions.y = 640;
  captions.visible = false;
}
function playCaption(id) {
  if (captions) {
    stage.addChild(captions);
    captions.play(id);
  }
}
function stopCaption(id) {
  if (captions) {
    captions.stop(id);
  }
}
