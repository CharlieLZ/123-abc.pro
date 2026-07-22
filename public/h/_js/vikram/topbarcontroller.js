(function(sf,cjs){
    function TopBarController(){
        //change these two links for sigin in and how to join buttons.
        var signInLink = indexLinkLogin;
        var howToJoinLink = indexLinkJoin;
        var noSoundLink = indexLinkHelp;

        var comp=AdobeAn.getComposition("26C5CFF12AD69348B647E10FC0D7D85F");
        var lib=comp.getLibrary();
        var topbar = new lib.topbar();

        topbar.bigScreens_mc.signInBtn.addEventListener("click",signInHandler);
        topbar.bigScreens_mc.signInBtn.addEventListener("rollover",updateStage);
        topbar.bigScreens_mc.signInBtn.addEventListener("rollout",updateStage);
        topbar.bigScreens_mc.howToJoinBtn.addEventListener("click",howToJoinHandler);
        topbar.bigScreens_mc.howToJoinBtn.addEventListener("rollover",updateStage);
        topbar.bigScreens_mc.howToJoinBtn.addEventListener("rollout",updateStage);

        topbar.smallScreens_mc.signInBtn.addEventListener("click",signInHandler);
        topbar.smallScreens_mc.signInBtn.addEventListener("rollover",updateStage);
        topbar.smallScreens_mc.signInBtn.addEventListener("rollout",updateStage);
        topbar.smallScreens_mc.howToJoinBtn.addEventListener("click",howToJoinHandler);
        topbar.smallScreens_mc.howToJoinBtn.addEventListener("rollover",updateStage);
        topbar.smallScreens_mc.howToJoinBtn.addEventListener("rollout",updateStage);

        topbar.noSound_mc.addEventListener("click",noSoundClickHandler);

        function updateStage(){
            stage.update();
        }

        function signInHandler(){
            window.location.href = signInLink;
        }

        function howToJoinHandler(){
            window.location.href = howToJoinLink;
        }

        function noSoundClickHandler(){
            window.location.href = noSoundLink;
        }
        this.topbar = topbar;
    }
    TopBarController.prototype.getTopBar = function(){
        return this.topbar;
    }

    starfall.TopBar = new TopBarController();

})(starfall=starfall||{},createjs=createjs||{});
var starfall, createjs;