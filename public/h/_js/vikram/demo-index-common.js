var xOffset = 0;
var sideBarOffset = 0;
var moveSideBar = false;
(function(sf,cjs){
    var DemoIndexCommon = {
        init: function(_xOffset,_moveSideBarAlso,_sideBarOffset){
            xOffset = _xOffset||0;
            sideBarOffset = _sideBarOffset||0;
            moveSideBar = _moveSideBarAlso || false;
            addTopBar();
            if(OptionalBarOn){
                addOptionalbar();
            }
            addLogos();
            //Start Edit on 2018-07-11 15:39:19 to fix Chrome top bar issues on iPad
            updateBars();
            positionBars();
            var updateBarsTimer;
            updateStageDimensions();
            window.addEventListener("resize",function(){
                clearTimeout(updateBarsTimer);
                updateBarsTimer = setTimeout(updateStageDimensions,600);
            });
            starfall.Resize.events.addEventListener("resize",function(){
                updateBars();
                positionBars();
            });
        }
    }
    sf.DemoIndexCommon = DemoIndexCommon;
})(starfall=starfall||{},createjs=createjs||{});
var starfall, createjs;

function positionBars(){
        if(starfall.Utils.isSmallDevice()){
            if(window.innerWidth>window.innerHeight){
                var width = (stageWidth+stage.x)*stage.scaleX;
                var gap = (stage.x/stage.scaleX)+(stageWidthSmallDevices-stageWidth);
                if(!moveSideBar){
                    topbar.smallScreens_mc.x = -5+stageWidth+(gap-topbar.smallScreens_mc.nominalBounds.width)*0.5*stage.scaleX;
                }
                else{
                    topbar.smallScreens_mc.x = -5+(xOffset/stage.scaleX)-(sideBarOffset*stage.scaleX)+stageWidth+(gap-topbar.smallScreens_mc.nominalBounds.width)*0.5*stage.scaleX;
                }
                if(OptionalBarOn){
                    topbar.noSound_mc.x = topbar.smallScreens_mc.x+(topbar.smallScreens_mc.nominalBounds.width - topbar.noSound_mc.nominalBounds.width)*0.5
                }
                if(logo_mc.ss){
                    logo_mc.ss.x = -2+topbar.smallScreens_mc.x+(topbar.smallScreens_mc.nominalBounds.width - logo_mc.ss.getMeasuredWidth())*0.5;
                }
                logo_mc.logo.x = -10-xOffset+topbar.smallScreens_mc.x+(topbar.smallScreens_mc.nominalBounds.width - logo_mc.logoWidth+10)*0.5;
            }
        }
        else{
            if(OptionalBarOn){
                optionalBar.resize();
            }
            
        }
        stage.update();
    }
    function updateStageDimensions(){
        if(starfall.Utils.isSmallDevice()){
            if(window.innerWidth>window.innerHeight){
                starfall.Resize.update(stageWidthSmallDevices,stageHeight,maxStageWidth,maxStageHeight);
            }
            else{
                starfall.Resize.update(stageWidth,stageHeight,maxStageWidth,maxStageHeight);
            }
    
        }
        else
        {
            starfall.Resize.update(stageWidth,stageHeight,maxStageWidth,maxStageHeight);		
        }	
    }
    function updateBars(){
        if(starfall.Utils.isSmallDevice()){
            if(window.innerWidth>window.innerHeight){
                exportRoot.y = 0;
                exportRoot.x = xOffset;
                topbar.y = 0;
                topbar.bigScreens_mc.visible = false;
                topbar.noSound_mc.visible = OptionalBarOn;
                if(OptionalBarOn){
                    optionalBar.visible = false;
                }
                exportRoot.scaleX = exportRoot.scaleY = 1;
                topbar.smallScreens_mc.visible = true;
            }
            else{
                topbar.y = -stage.y/stage.scaleX;
                topbar.bigScreens_mc.visible = true;
                topbar.smallScreens_mc.visible = false;
                topbar.noSound_mc.visible = false;
                if(OptionalBarOn){
                    optionalBar.visible = false;
                }
                exportRoot.y = topbar.y+topbar.bigScreens_mc.nominalBounds.height;
                var remainingHeight = Math.min(stageHeight-exportRoot.y,stageHeight);
                exportRoot.scaleX = exportRoot.scaleY = remainingHeight/stageHeight;
                exportRoot.x = (stageWidth - (stageWidth*exportRoot.scaleX))/2;
            }
    
        }
        else
        {
            topbar.bigScreens_mc.visible = true;
            topbar.smallScreens_mc.visible = false;
            topbar.y = -stage.y/stage.scaleX;
            exportRoot.y = topbar.y+topbar.bigScreens_mc.nominalBounds.height;	
            if(OptionalBarOn){
                optionalBar.y = topbar.y+topbar.bigScreens_mc.nominalBounds.height;
                exportRoot.y+=OptionalBarHeight;
                optionalBar.visible = true;
            }	
            topbar.noSound_mc.visible = false;
            var remainingHeight = Math.min(stageHeight-exportRoot.y,stageHeight);
            exportRoot.scaleX = exportRoot.scaleY = remainingHeight/stageHeight;
            exportRoot.x = (stageWidth - (stageWidth*exportRoot.scaleX))/2;
        }	
        stage.update();
    }
    // End Edit 2018-07-11 15:39:51 to fix chrome top bar issues.
    function addTopBar(){
        canvas.style.backgroundColor = "#FFF";
        topbar = starfall.TopBar.getTopBar();//defined in topbarcontroller.js;
        topbar.smallScreens_mc.visible = false;
        stage.addChild(topbar);
    
    }
    function addOptionalbar(){
        optionalBar = new starfall.OptionalBar(stageWidth);
        optionalBar.visible = false;
        stage.addChild(optionalBar);
    }
    function playSound(id, loop) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }
    function toggleLoader(show){
        if(show){
            dom_overlay_container.style.display = "block";
            canvas.style.display = "none";
        }
        else{
            dom_overlay_container.style.display = "none";
            canvas.style.display = "block";
        }
    }
    function addLogos(){
        logo_mc = new starfall.IndexLogos(exportRoot,stageWidth,stageHeight,stateStandardsColor,stateStandardsLink,stateStandardsOn,starfallLogoPath);
        exportRoot.addChild(logo_mc);
    }