(function(sf, cjs) {
  function Captions(captionData, width, height, style) {
    this.Container_constructor();
    this.captionData = captionData;
    this.width = width || 800;
    this.height = height || 80;
    this.style = style || "34px liberation_sansbold";
    this.bg = new cjs.Shape();
    this.bg.graphics.beginFill("#000");
    this.bg.graphics.drawRoundRect(-width / 2, -height / 2, width, height, 10);
    this.bg.graphics.endFill();
    this.bg.alpha = 0.9;
    this.addChild(this.bg);

    this.textField = new cjs.Text("Sample Caption", this.style, "#ffffff");
    this.addChild(this.textField);
    this.textField.textBaseline = "middle";
    this.textField.textAlign = "center";
    this.textField.x = 0;
    this.textField.y = 2;

    this.disabled = false;
  }
  var p = createjs.extend(Captions, createjs.Container);
  p.play = function(captionID) {
    this.lines = this.captionData[captionID];
    this.currentCaption = captionID;
    if (!this.lines) return;
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.previousTime = cjs.Ticker.getTime();
      this.addEventListener("tick", this.updateHandler.bind(this));
    }
    this.seek(0);
  };

  p.disable = function() {
    this.disabled = true;
    if (this.isPlaying) {
      this.visible = false;
    }
  };

  p.enable = function() {
    this.disabled = false;
    if (this.isPlaying) {
      this.visible = true;
    }
  };

  p.stop = function(captionID) {
    captionID = captionID || "";
    if (
      this.isPlaying &&
      ((captionID && captionID == this.currentCaption) || captionID == "")
    ) {
      this.isPlaying = false;
      this.removeAllEventListeners("tick");
      this.visible = false;
    }
  };

  p.updateHandler = function(e) {
    if (!this.isPlaying) return;
    var now = cjs.Ticker.getTime();
    var delta = now - this.previousTime;
    this.previousTime = now;
    this._currentTime += delta | 0;
    this._calcUpdate();
  };

  p._calcUpdate = function() {
    var lines = this.lines;
    if (!lines) return;

    var len = lines.length;
    var nextLine = this._lastActiveLine + 1;
    var lastLine = len - 1;
    var currentTime = this._currentTime;

    //If we are outside of the bounds of captions, stop
    if (currentTime >= lines[lastLine].end) {
      this.stop();
    } else if (
      nextLine <= lastLine &&
      currentTime >= lines[nextLine].start &&
      currentTime <= lines[nextLine].end
    ) {
      if (!this.disabled) this.visible = true;
      this._currentLine = this._lastActiveLine = nextLine;
      this._updateCaptions();
    } else if (
      this._currentLine != -1 &&
      currentTime > lines[this._currentLine].end
    ) {
      this._lastActiveLine = this._currentLine;
      this._currentLine = -1;
      this._updateCaptions();
    }
  };

  p._updateCaptions = function() {
    this.textField.text =
      this._currentLine == -1 ? "" : this.lines[this._currentLine].caption;
    this.bg.visible = this.textField.text != "";
  };

  p.seek = function(time) {
    var currentTime = (this._currentTime = time);

    var lines = this.lines;
    if (!lines) {
      this._updateCaptions();
      return;
    }

    if (currentTime < lines[0].start) {
      this._currentLine = this._lastActiveLine = -1;
      this._updateCaptions();
      return;
    }

    var len = lines.length;
    for (var i = 0; i < len; i++) {
      var line = lines[i];
      if (currentTime >= line.start && currentTime <= line.end) {
        this._currentLine = this._lastActiveLine = i;
        this._updateCaptions();
        break;
      } else if (currentTime > line.end) {
        this._lastActiveLine = i;
        this._currentLine = -1;
        this._updateCaptions();
      } else if (currentTime < line.start) {
        this._lastActiveLine = i - 1;
        this._currentLine = -1;
        this._updateCaptions();
      }
    }
  };

  p.fadeIn = function() {
    this.visible = true;
    cjs.Tween.get(this).to({ alpha: 1 }, 500);
  };

  p.fadeOut = function() {
    cjs.Tween.get(this)
      .to({ alpha: 0 }, 500)
      .to({ visible: false }, 0);
  };

  sf.Captions = cjs.promote(Captions, "Container");
})((starfall = starfall || {}), (createjs = createjs || {}));
var starfall, createjs;
