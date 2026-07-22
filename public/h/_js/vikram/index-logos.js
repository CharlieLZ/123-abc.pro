(function(sf,cjs){
    function IndexLogos(parent,stageWidth,stageHeight,stateStandardsColor,stateStandardsLink,stateStandardsOn,starfallLogoPath){
        this.Container_constructor();
        this.__parent = parent;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.stateStandardsColor = stateStandardsColor;
        this.stateStandardsLink = stateStandardsLink;
        this.starfallLogoPath = starfallLogoPath;
        this.stateStandardsOn = stateStandardsOn;
        if(this.stateStandardsOn){
            this.addStateStandardLogo();
        }
        this.addStarfallLogo();
        sf.Resize.events.addEventListener("resize",this.resizeHandle.bind(this));
    }
    cjs.extend(IndexLogos,cjs.Container);
    var p = IndexLogos.prototype;

    p.addStateStandardLogo = function(){
        this.ss = new TextLink("STATE STANDARDS","bold 17px 'Liberation Sans Regular'",this.stateStandardsColor,"#000000",this.stateStandardsLink);
        this.addChild(this.ss);
        this.adjustSSLogoPosition();
    }

    p.adjustSSLogoPosition = function(){
        var newCoords = starfall.Resize.getTransformedCoordinates(starfall.Resize.stageWidth-(this.ss.getMeasuredWidth()+40)*stage.scaleX*this.__parent.scaleX,stage.y+30*stage.scaleY*this.__parent.scaleY);
        this.ss.x = newCoords.x;
        this.ss.y = newCoords.y;
    }

    p.addStarfallLogo = function(){
        var thisRef = this;
        var img = new cjs.Bitmap(starfallLogoPath);
        this.logo = img;
        img.image.onload = function(){
			img.scaleX = .75;
			img.scaleY = .75;
            thisRef.logoWidth = img.image.width;
            thisRef.logoHeight = img.image.height;
            thisRef.adjustLogoPosition();
            thisRef.addChild(img);
        }
    }

    p.adjustLogoPosition = function(){
        var newCoords = starfall.Resize.getTransformedCoordinates(starfall.Resize.stageWidth-(this.logoWidth)*stage.scaleX*this.__parent.scaleX,starfall.Resize.stageHeight-(this.logoHeight)*stage.scaleY*this.__parent.scaleY);
        this.logo.x = newCoords.x+40;
        this.logo.y = newCoords.y+20;
    }

    p.resizeHandle = function(){
        this.adjustLogoPosition();
        if(this.stateStandardsOn){
            this.adjustSSLogoPosition();
        }
    }

    sf.IndexLogos = cjs.promote(IndexLogos,"Container");

    //TextLink Class

    function TextLink(text, font, color, hoverColor, link) {
        this.Text_constructor(text, font, color);
        this.link = link;
		this.hoverColor = hoverColor;
		this.hover = false;
		this.hitArea = new createjs.Shape();
        this.textBaseline = "top";
        this.cursor = "pointer";
		this.addEventListener("rollover", this);
        this.addEventListener("rollout", this);
        this.addEventListener("added",this);
        this.addEventListener("removed",this);
        this.addEventListener("click",this);
        this.line = new createjs.Shape();
	}
    createjs.extend(TextLink, createjs.Text);
    
	TextLink.prototype.draw = function (ctx, ignoreCache) {
		var color = this.color;
		if (this.hover) {
			this.color = this.hoverColor;
		}
        this.Text_draw(ctx, ignoreCache);
        this.hitArea.graphics.clear().beginFill("#FFF").drawRect(0, 0, this.getMeasuredWidth(), this.getMeasuredHeight()+25);
        this.line.graphics.clear().beginFill(this.color).drawRect(this.x,this.y+this.getMeasuredHeight(),this.getMeasuredWidth(),2);
        this.color = color;
    };
    
	TextLink.prototype.handleEvent = function (evt) {
        this.hover = (evt.type == "rollover" || evt.type == "click");
        if(evt.type=="added"){
            this.parent.addChild(this.line);
        }
        else if(evt.type=="removed"){
            this.line.parent.removeChild(this.line);
        }
        else if(evt.type=="click"){
            window.location.href = this.link;
        }
        if(evt.type=="rollover" || evt.type=="click" || evt.type=="rollout"){
            stage.update();
        }
	};
	createjs.promote(TextLink, "Text");

})(starfall=starfall||{},createjs=createjs||{});
var starfall,createjs;