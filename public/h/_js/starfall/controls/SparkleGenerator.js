var cjs = createjs||{};
var p; 

// controls.SparkleGenerator
(SparkleGenerator = function(lib) {
	var spk = null;  
	var spkOrb = null;
	var self = this;
	
	this.ht = null; 
	
	this.addSparkles = function(target, scale, color, radius, spk_type) {
		spk = new Sparkles(lib);
		spk.init(radius, spk_type);
		this.addChild(spk);

		var pt = target.localToGlobal(0, 0); 
		spk.x = pt.x;
		spk.y = pt.y;
		spk.scaleX = scale;
		spk.scaleY = scale;
		// if (color != 0) Conversions.setRGB(spk, color);
		
		// clear sparkles / ht after 60 seconds
		TweenMax.delayedCall(60, self.clearSparkles);
	}
	this.addSparklesOrb = function(target, scale) {
		spkOrb = new lib.SparklesOrb();
		this.addChild(spkOrb);

		var pt = target.localToGlobal(0,0);
		spkOrb.x = pt.x;
		spkOrb.y = pt.y;
		spkOrb.scaleX = scale;
		spkOrb.scaleY = scale;
			
		// clear sparkles / ht after 60 seconds
		TweenMax.delayedCall(60, self.clearSparkles);
	}
	this.handToggle = function(targetA, targetB, dir, delayTime, shift) {
		self.ht = new HandToggle(lib);
		self.ht.init(targetA, targetB, dir, delayTime, shift);
		this.addChild(self.ht); 
	}
	this.clearSparkles = function() {
		if (spk != null) {
			spk.destroy();
			self.removeChild(spk);
			spk = null;
		}
		if (self.ht != null) {
			self.ht.destroy();
			self.removeChild(self.ht);
			self.ht = null;
		}
		if (spkOrb != null) {
			self.removeChild(spkOrb);
			spkOrb = null;
		}
		TweenMax.killDelayedCallsTo(self.clearSparkles);
	}
	this.addSparkPt = function (pt, scale, color, radius, spk_type) {
        var sp = new createjs.Container();
        sp.x = pt.x;
        sp.y = pt.y;
        //
        self.addSparkles(sp, scale, color, radius, spk_type);
    }
	this.addSparkOrbPt = function (pt, scale) {
        var sp = new createjs.Container();
        sp.x = pt.x;
        sp.y = pt.y;
        //
        self.addSparklesOrb(sp, scale);
    }
    this.handPt = function (ptA, ptB, dir, delayTime, shift, rotate, sc) {
        var tgtA = new createjs.Container();
        tgtA.x = ptA.x;
        tgtA.y = ptA.y;
		tgtA.setBounds(-10, -10, 20, 20);
        //
        if (ptB) {
            var tgtB = new createjs.Container();
            tgtB.x = ptB.x;
            tgtB.y = ptB.y;
			tgtB.setBounds(-10, -10, 20, 20);
        }
        self.ht = new HandToggle(lib);
        self.ht.init(tgtA, tgtB, dir, delayTime, shift, rotate, sc);
        this.addChild(self.ht);
    }
    this.addSparkOrbPt = function (pt, scale) {
        var sp = new createjs.Container();
        sp.x = pt.x;
        sp.y = pt.y;
        //
        self.addSparklesOrb(sp, scale);
    }
}).prototype = p = new cjs.MovieClip();