(function(sf,cjs){  
    
	var noSoundLink = indexLinkHelp;
	
	function OptionalBar(stageWidth){
		this.Container_constructor();
        var textString = "If you don\'t hear sound, <a href=\"informationpage.html\">Please Read Instructions.<a>";
        this.fontSize = this.isMobile()?30:25;
        this.fontName = "Liberation Sans Regular";
        this.texts = [];
        this.height = 40;
        this.bgColor = "#FF0000";
        this.textColor = "#FFFFFF";
        this.stageWidth = stageWidth;
        this.bg = new cjs.Shape();
        this.addChild(this.bg);
        this.nodes = this.parseString(textString);
        this.addEventListener("added",this.onAddedToStage.bind(this));
    }
    cjs.extend(OptionalBar,cjs.Container);

    OptionalBar.prototype.isMobile= function(){
        var userAgent = window.navigator.userAgent.toLowerCase();
        var iPhone = /iphone/.test(userAgent);
        var android = /android/.test(userAgent);
        return iPhone || android;
     }

    OptionalBar.prototype.parseString = function(textString){
        var nodes = [];
        var $container = $('<div/>').html(textString);
        $container.contents().map(function(){ 
            if(this.nodeType==1){
                if($.trim(this.innerHTML)!=""){
                    nodes.push({
                        "text":this.innerHTML,
                        "link":noSoundLink
                    });
                }
            }
            else if(this.nodeType==3){
                if($.trim(this.data)!=""){
                    nodes.push({
                        "text":this.data
                    });
                }
            }
        });
        return nodes;
    }

    OptionalBar.prototype.onAddedToStage = function(){
        this.drawBG();
        this.setText();
        this.centerText();
    }

    OptionalBar.prototype.drawBG = function(){
        this.stageWidthScaled = this.stageWidth*0.5*this.stage.scaleX;
        var spaceOnOneSide = stage.x/this.stage.scaleX;
        this.width = this.stageWidth+2*spaceOnOneSide;
        this.bg.graphics.clear();
        this.bg.graphics.beginFill(this.bgColor).drawRect(0,0,this.width,this.height);
        this.bg.x = -spaceOnOneSide;
        //this.bg.graphics.beginFill("#000000").drawRect(this.width*0.5-25,0,50,50);
    }

    OptionalBar.prototype.resize = function(){
        this.drawBG();
        this.centerText();
    }

    OptionalBar.prototype.setText = function(){
        this.textContainer = new cjs.Container();
        this.addChild(this.textContainer);
        var startX=0;
        var text;
        var fontName = this.getFontName();
        for(var i=0;i<this.nodes.length;i++){
            if(!this.nodes[i].link){
                text = new cjs.Text(this.nodes[i].text, fontName, this.textColor);
            }
            else{
                text = new TextLink(this.nodes[i].text, fontName, this.textColor, "#000000",this.nodes[i].link);
            }
            this.textContainer.addChild(text);
            text.x = startX;
            this.texts.push(text);
            startX+=text.getMeasuredWidth()+5;
            this.textHeight = text.getMeasuredHeight();
        }
        this.textWidth = startX;
    }

    OptionalBar.prototype.getFontName = function(){
        return this.fontSize+"px "+this.fontName;
    } 

    OptionalBar.prototype.centerText = function(){
        this.textContainer.x = (this.stageWidth - this.textWidth)*0.5;
        this.textContainer.y = (this.height - this.textHeight)*0.5;
    }


    sf.OptionalBar = cjs.promote(OptionalBar,"Container");


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
		if(evt.type=="rollover" || evt.type == "rollout" || evt.type == "click"){
            stage.update();
        }
	};
	createjs.promote(TextLink, "Text");

})(starfall=starfall||{},createjs=createjs||{});
var starfall,createjs;