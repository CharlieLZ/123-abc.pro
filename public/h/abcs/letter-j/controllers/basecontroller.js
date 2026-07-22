(function(sf,cjs){
    function BaseController(view,stage,lib){
        this.view = view;
        this.stage = stage;
        this.lib = lib;
    }
    var p = BaseController.prototype;
    p.show = function(){
        this.stage.addChildAt(this.view,0);
    }
    p.hide = function(){
        this.stage.removeChild(this.view);
    }
        
    p.handleResize = function(){
        
    }

    sf.BaseController = BaseController;

})(starfall=starfall||{},createjs=createjs||{});
var starfall,createjs;