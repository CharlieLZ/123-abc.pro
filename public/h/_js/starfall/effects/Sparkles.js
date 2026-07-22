var cjs = createjs||{}; 
var p; 

// effects.Sparkles
(Sparkles = function(lib) {
	var degreesToRadians = Math.PI/180;
	var radiansToDegrees = 180/Math.PI;
	var sparkle, spk_type, radius_max; 

	var partList = []; 

	this.init = function (rM, type) {
		radius_max = rM;
		spk_type = type;
		sparkle = new cjs.MovieClip();
		cjs.Ticker.addEventListener('tick', createSpark);
		this.addChild(sparkle);
		partList = [];
	}; 
	var createSpark = function() {
		// potential limiter
		if (partList.length <= 1) {
			var bit = Number(Math.random()*2)+1;
			var angle = Number(Math.random()*20);
			//bit = 1;
			for (var i = 0; i<bit; i++) {
				// create spark
				var part = new lib.Spark(); 
				part.gotoAndStop(spk_type-2);
				part.rotation = Math.random()*360;
				//
				var rndScale = (Number(Math.random()*15)+10)/100;
				part.scaleY = rndScale;
				part.scaleX = rndScale;
				part.maxScale = (Number(Math.random()*25)+10)/100;
				// place object
				angle += Math.floor(360/bit);
				var r = Number(Math.random()*radius_max)+Number(Math.random()*10)+4;
				part.x = Math.floor(Math.cos(angle*degreesToRadians)*r);
				part.y = Math.floor(Math.sin(angle*degreesToRadians)*r);
				part.scaleUp = true;
				part.dir = Number(Math.random()*3);
				sparkle.addChild(part);
				partList.push(part);
			}
		}; 
		
		i = 0; 
		while (i < partList.length) {
			var spark = partList[i];
			if (spark.scaleX<.1) {
				partList.splice(i, 1); 
				sparkle.removeChild(spark);
			} else {
				var tmp = Number(Math.random()*5)/100;
				if (spark.scaleUp && spark.scaleX<spark.maxScale) {
					spark.scaleX += tmp;
					spark.scaleY += tmp;
					if (spark.dir%2 == 0) {
						spark.rotation += 15;
					} else {
						spark.rotation -= 15;
					}
				} else {
					spark.scaleUp = false;
					spark.scaleX -= tmp;
					spark.scaleY -= tmp;
					if (spark.dir%2 == 0) {
						spark.rotation += 15;
					} else {
						spark.rotation -= 15;
					}
				}
				i ++; 
			}
		}
	}; 
	this.destroy = function() {
		cjs.Ticker.removeEventListener('tick', createSpark);
		if (sparkle) {
			this.removeChild(sparkle); 
			sparkle = null; 
		}
	}
}).prototype = p = new cjs.MovieClip();
