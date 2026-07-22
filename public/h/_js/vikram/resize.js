(function(sf,cjs){
    
        var _maxWidth = 0;
        var _maxHeight = 0;
        var _originalWidth = 0;
        var _originalHeight = 0;
        var _realWidth = 0;
        var _realHeight = 0;
        var _stage = 0;
    
        var anim_container, dom_overlay_container, rotateIconContainer, rotateIcon;
        
        var _resizeHelper = {
            width:0,
            height:0,
            normalWidth:0,
            normalHeight:0
        };
    
        var _windowResizer = null;
    
        function Resize(){
    
        }
    
        function triggerResize(){
            _resizeHelper.width = (window.innerWidth) | 0;
            _resizeHelper.height = (window.innerHeight) | 0;
            //alert(window.innerWidth+" X "+window.innerHeight);
            calculateDisplaySize(_resizeHelper);
    
            var width = _realWidth = _resizeHelper.width;
            var height = _realHeight = _resizeHelper.height;
            var normalWidth = _resizeHelper.normalWidth;
            var normalHeight = _resizeHelper.normalHeight;
    
            anim_container.style.width = _stage.canvas.style.width = width+"px";
            anim_container.style.height = _stage.canvas.style.height = height+"px";
            width*=devicePixelRatio;
            height*=devicePixelRatio;
            _stage.canvas.width = width;
            _stage.canvas.height = height;

            
    
            var defaultRatio = _originalWidth / _originalHeight;
            var currentRatio = width / height;
            var overallScale = currentRatio >= defaultRatio ?
                height / _originalHeight :
                width / _originalWidth;
            var scaleToHeight = currentRatio >= defaultRatio;
            var xOffset = 0;
            var yOffset = 0;
    
            if (scaleToHeight)
            {
                xOffset = (width - _originalWidth * overallScale) / 2;
            }
            else
            {
                yOffset = (height - _originalHeight * overallScale) / 2;
            }
    
            _stage.scaleX = _stage.scaleY = overallScale;
    
            _stage.x = xOffset;
            _stage.y = yOffset;
            if(rotateIconContainer){
                if(_resizeHelper.width>window.innerHeight || (!createjs.BrowserDetect.isIOS && !createjs.BrowserDetect.isAndroid)){
                    rotateIconContainer.style.display='none';
                }
                else{
                    var remainingHeight = window.innerHeight - _resizeHelper.height;
                    rotateIconContainer.style.height = remainingHeight+'px';
                    rotateIconContainer.style.width = window.innerWidth+'px';
                    rotateIcon.style.top = ((remainingHeight - rotateIcon.height)/2)+'px';
                    rotateIcon.style.left = ((window.innerWidth - rotateIcon.width)/2)+'px';
                    rotateIconContainer.style.display='block';
                }
            }
            // var context = _stage.canvas.getContext("2d");
            // context.translate(xOffset,yOffset);
            // context.scale(overallScale,overallScale);
            // _stage.draw(context);
            _stage.update();
            setTimeout(function(){
                _stage.update();
            },100)
            Resize.stageWidth = width;
            Resize.stageHeight = height;
            Resize.events.dispatchEvent("resize");  
            window.scrollTo(0,0);
        }
    
        function resizeHandler(){
            triggerResize();
            if(_windowResizer){
                clearTimeout(_windowResizer)
                _windowResizer = null;
            }
            _windowResizer = setTimeout(function(){
                triggerResize();
                _windowResizer = null;
            },500);
        }
    
        function calculateDisplaySize(size){
            if(!_originalHeight) return;
            var maxAspectRatio = _maxWidth/_originalHeight,
                minAspectRatio = _originalWidth/_maxHeight,
                originalAspectRatio = _originalWidth/_originalHeight,
                currentAspectRatio = size.width/size.height;
    
            if(currentAspectRatio<minAspectRatio){
                size.height = size.width / minAspectRatio;
            }
            else if(currentAspectRatio>maxAspectRatio){
                size.width = Math.max(size.height*maxAspectRatio,size.width);
            }
    
            currentAspectRatio = size.width/size.height;
    
            if(currentAspectRatio > originalAspectRatio){
                size.normalWidth = _originalHeight * currentAspectRatio;
            }
            else if(currentAspectRatio < originalAspectRatio){
                size.normalHeight = _originalWidth / currentAspectRatio;
            }
    
            size.width = Math.ceil(size.width);
            size.height = Math.ceil(size.height);
            size.normalWidth = Math.ceil(size.normalWidth);
            size.normalHeight = Math.ceil(size.normalHeight);
        }
    
        Resize.setup = function(stage,width,height,maxWidth,maxHeight){
            Resize.events = new Object();
            Resize.stageWidth = width;
            Resize.stageHeight = height;
            createjs.EventDispatcher.initialize(Resize.events);
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            rotateIconContainer = document.getElementById("rotate_icon_container");
            rotateIcon = document.getElementById("rotate_icon");
            //rotateIcon.width*=devicePixelRatio;
            //rotateIcon.height*=devicePixelRatio;
            _stage = stage;
            _maxWidth = 1694;
            _maxHeight = maxHeight;
            _originalWidth = width;
            _originalHeight = height;
            resizeHandler();
            window.addEventListener("resize", resizeHandler);
    
        }

        Resize.update = function(width,height,maxWidth,maxHeight){
            Resize.stageWidth = width;
            Resize.stageHeight = height;
            _maxHeight = maxHeight;
            _originalWidth = width;
            _originalHeight = height;
            resizeHandler();    
        }

        

        Resize.getTransformedCoordinates = function(x,y){
            return _stage.globalToLocal(x,y);
        }
    
        starfall.Resize = Resize;
    
    })(starfall=starfall||{},createjs=createjs||{});
    var starfall,createjs;