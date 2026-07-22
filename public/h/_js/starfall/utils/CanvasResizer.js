var CanvasResizer = CanvasResizer || {};
(function (cr) {
  cr.Resize = function () {
    var self = this;
    this.width = 1024;
    this.height = 768;
    this.maxWidth = 1024;
    this.maxHeight = 768;
    this.safeWidth = 1024;
    this.safeHeight = 768;
    this.stage = null;
    this.framework = 'createjs'; // createjs
    this.resizeCallback = null;
    this.resizeCallbackTimer = 0;
    this.checkDevice = true;
    this.rotateIconContainer = document.getElementById("rotate_icon_container");
    this.rotateIcon = document.getElementById("rotate_icon");
    this.chromebookWidths = [768,1080,1504,1600];

    this.start = function() {
      this.maxAspectRatio = this.maxWidth / this.height;
      this.minAspectRatio = this.width / this.height;
      this.getCanvas();
      this.setupEventListeners();
      this.resizeDecision();
      this.isMobile =  (this.isIOS() || this.isPhone() || this.isChromebook() || this.isAndroidTablet()) ? true : false;
      this.onResize();
    }

    this.getCanvas = function() {
      const canvases = document.getElementsByTagName('canvas');
      this.canvas = canvases[0];
    }

    this.setupEventListeners = function() {
      window.addEventListener("resize",this.doResize.bind(this));
      window.addEventListener('orientationchange', this.doResize.bind(this));
    }

    this.doResize = function() {
      if (this.windowResizer) {
        clearTimeout(this.windowResizer);
        this.windowResizer = null;
      }
      if (this.framework == 'createjs') {
        this.windowResizer = setTimeout(function() {
          if (typeof self.resizeCallback === 'function') {
            self.resizeCallback();
          }
          self.windowResizer = null;
        }, self.resizeCallbackTimer);
        self.resizeDecision();
      } else {
        self.resizeDecision();
      }
    }

    this.resizeDecision = function() {
      if (this.framework == 'createjs') {
        this.resizeCreatejs();
      }

      setTimeout(function() {
        if (self.framework == 'createjs') {
          self.resizeCreatejs();
        }
        self.isMobile =  (self.isIOS() || self.isPhone() || self.isChromebook() || self.isAndroidTablet()) ? true : false;
        self.onResize();
      },600);

    }

    this.onResize = function() {
      if (this.checkDevice && this.isMobile) {
        if (this.isVertical()) {
          this.setupRotateIcon();
        } else {
          this.hideRotateIcon();
        }
      }
    }

    this.resizeCreatejs = function() {
      var widthToHeight = this.width / this.height;
      var windowWidthToHeight = window.innerWidth / window.innerHeight;
      var newWidth = window.innerWidth;
      var newHeight = window.innerWidth / widthToHeight;

      if (newHeight > window.innerHeight) {
        newHeight = window.innerHeight;
        newWidth = newHeight * widthToHeight;
      }

      if (windowWidthToHeight < this.minAspectRatio) {
        newHeight = newWidth / this.minAspectRatio;
      } else if (windowWidthToHeight > this.maxAspectRatio) {
        newWidth = window.innerWidth;//(newWidth < this.maxWidth) ? window.innerWidth : this.maxWidth;
      } else {
        newWidth = window.innerWidth;
      }
      var currentAspectRatio = this.calculateScale(newWidth,newHeight);

      this.stage.canvas.width = newWidth;
      this.stage.canvas.height = newHeight;
      this.stage.canvas.style.width = newWidth + 'px';
      this.stage.canvas.style.height = newHeight + 'px'
      this.stage.scaleX = currentAspectRatio;
      this.stage.scaleY = currentAspectRatio;
      this.stage.x = (canvas.width - (this.width * currentAspectRatio)) / 2;
      this.stage.y = (canvas.height - (this.height * currentAspectRatio)) / 2;
      this.stage.update();
    }

    this.calculateScale = function(canvasWidth, canvasHeight) {
      var gameWidth = this.width;
      var gameHeight = this.height;

      var scaleX = canvasWidth / gameWidth;
      var scaleY = canvasHeight / gameHeight;

      // Use the smallest scale value to ensure the content fits within the canvas without cropping.
      return Math.min(scaleX, scaleY);
    }

    //Rotate icon
    this.setupRotateIcon = function() {
      this.rotateIconContainer.style.width = window.innerWidth + "px";
      this.rotateIconContainer.style.display = "block";
    }

    this.hideRotateIcon = function() {
      this.rotateIconContainer.style.display = "none";
    }

    //phone checks
    this.isVertical = function() {
      return window.innerHeight > window.innerWidth;
    }

    this.isChromebook = function() {
      var cros = navigator.userAgent.toLowerCase().includes('cros');
      var crosMaxedWidth = false;
      if (this.chromebookWidths.indexOf(parseInt(window.screen.width)) > -1) {
        crosMaxedWidth = true;
      }
      if (cros && crosMaxedWidth) {
        return true;
      } else {
        return false;
      }
    }

    this.isAndroidTablet = function() {
      if (navigator.userAgent.indexOf("Android") > -1) {
        return true;
      } else {
        return false;
      }
    }

    this.isIOS = function () {
      return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].indexOf(navigator.platform) > -1 ||
        (navigator.userAgent.indexOf("Mac") > -1 && "ontouchend" in document)
      );
    };

    this.isPhone = function() {
      var check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }

  }

})(CanvasResizer || {});
