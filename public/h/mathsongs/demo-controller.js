(function (cjs,sf) {
    function MathSongsDemoIndexController(view){
        this.view  = view;
        stage.enableMouseOver();
        cjs.Touch.enable(stage);
        this.buttons = SpecialDefinitions.buttons;
        this.view.gotoAndStop(0);
        this.initButtons();
        var userAgent = window.navigator.userAgent.toLowerCase();
        var iPhone = /iphone/.test(userAgent);
        var android = /android/.test(userAgent);
        var isAndroidTablet = android && (Math.max(screen.width,screen.height)>=1280);
        
        if(iPhone || (android && !isAndroidTablet)){
            this.view.gotoAndStop(1);
        }
        else{
            this.view.gotoAndStop(0);
        }

    }

    var p = MathSongsDemoIndexController.prototype;

    p.buttonClickHandler = function(e) {
        var b = e.currentTarget;
        window.location.href = b.link;
    };

    p.toggleButtons = function(enable) {
        for(var i=0;i<this.buttons.length;i++){
            this.view[this.buttons[i].id].mouseEnabled = enable;
        }
    };
    
    p.initButtons = function(){
        for(var i=0;i<this.buttons.length;i++){
            var button = this.view[this.buttons[i].id];
            button.link = this.buttons[i].link;
            button.cursor = "pointer";
            button.addEventListener("click",this.buttonClickHandler.bind(this));
        }
    };

    sf.MathSongsDemoIndexController = MathSongsDemoIndexController;
})(createjs=createjs||{},starfall=starfall||{});
var createjs, starfall;