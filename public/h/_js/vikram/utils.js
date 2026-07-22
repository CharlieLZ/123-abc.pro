(function(sf){
    sf.Utils = {
        randomizeArray: function(a,b,c,d){
            c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
        },
        randomRangeInt: function(low,high){
            return Math.floor(Math.random() * (1 + high - low) + low);
        },
        distance: function(x1,y1,x2,y2){
            var dx = x2-x1;
            var dy = y2-y1;
            return Math.sqrt(dy*dy+dx*dx);
        },
        currentFrameLabel: function(mc){
            var matchFrame = mc.labels.filter(function(m){
                 return m.position==mc.currentFrame;
            });
            return matchFrame.length>0?matchFrame[0].label:null;
         },
         cacheMc: function(mc,offsetX,offsetY){
            if(!offsetY)offsetY=0;
            if(!offsetX)offsetX=0;
            if(mc.nominalBounds){
                mc.cache(mc.nominalBounds.x-offsetX,mc.nominalBounds.y-offsetY,mc.nominalBounds.width+offsetX*1.5,mc.nominalBounds.height+offsetY);
            }
            else{
                console.log("Can not cache: bounds are not defined for "+mc);
            }
         },
         isLowEndDevice: function(){
            var userAgent = window.navigator.userAgent.toLowerCase();
            var iPad = /ipad/.test(userAgent);
            var iPhone = /iphone/.test(userAgent);
            var android = /android/.test(userAgent);
        
            console.log("Device Pixel Ratio: "+window.devicePixelRatio);
            console.log("is this iPad: "+iPad);
            console.log("iOS version: "+sf.Utils.getiOSversion());

            //for iPad2 & lesser and iPad1 mini
            if (((iPad || iPhone) && sf.Utils.getiOSversion() <= 9) || (iPad && window.devicePixelRatio < 2)) {
                return true;
            // for iPhone 4 & 4S and lesser
            } 
            else if (iPhone && sf.Utils.getAspectRatio() == 1.5 && window.devicePixelRatio < 2) {
              return true;
            }
            //for Android OS lesser than KitKat
            else if (android && parseFloat(sf.Utils.getAndroidVersion()) <= 6) {
              return true;
            }
            return false;
         },
         getAspectRatio: function() {
            return window.screen.width > window.screen.height ?
                window.screen.width / window.screen.height
              : window.screen.height / window.screen.width;
         },
         getAndroidVersion: function(ua) {
            ua = (ua || navigator.userAgent).toLowerCase();
            var match = ua.match(/android\s([0-9\.]*)/);
            return match ? match[1] : false;
         },
         getiOSversion: function() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
              // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
              var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
              return parseInt(v[1], 10);
            }
            return false;
          },
         isSmallDevice: function(){
            var minimumWidthForSmallScreen = 768;
            var userAgent = window.navigator.userAgent.toLowerCase();
            var iPhone = /iphone/.test(userAgent);
            var android = /android/.test(userAgent);
            var smallScreen = (window.screen.width>window.screen.height)?window.screen.width<minimumWidthForSmallScreen:window.screen.height<minimumWidthForSmallScreen;
            return iPhone||(android&&smallScreen);
         }
    }
})(starfall=starfall||{});
var starfall;