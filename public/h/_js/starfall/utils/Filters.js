var createjs = createjs||{};
var Filters = {

		dropShadow: function(mc, filterObj){
			// sample drop shadow filter object:
			// {distance:4, angle:45, color:0x000000, alpha:1, blurX:4, blurY:4, strength:1, quality:3, inner:false, knockout:false, hideObject:false}
			/*var dsf = new DropShadowFilter();
			dsf.distance = filterObj.distance;
			dsf.angle = filterObj.angle;
			dsf.color = filterObj.color;
			dsf.alpha = filterObj.alpha;
			dsf.blurX = filterObj.blurX;
			dsf.blurY = filterObj.blurY;
			dsf.strength = filterObj.strength;
			dsf.quality = BitmapFilterQuality.HIGH;
			dsf.inner = filterObj.inner;
			dsf.knockout = filterObj.knockout;
			dsf.hideObject = filterObj.hideObject;
			var filtersArray:Array = new Array(dsf);
			mc.filters = filtersArray;
			*/
		},

		glow: function(mc, filterObj) {
			// sample glow filter object:
			// {color:0x33CCFF, alpha:1, blurX:4, blurY:4, strength:1, quality:3, inner:false, knockout:false}
			/*var gf = new GlowFilter();
			gf.color = filterObj.color;
			gf.alpha = filterObj.alpha;
			gf.blurX = filterObj.blurX;
			gf.blurY = filterObj.blurY;
			gf.strength = filterObj.strength;
			gf.quality = BitmapFilterQuality.HIGH;
			gf.inner = filterObj.inner;
			gf.knockout = filterObj.knockout;
			var filtersArray:Array = new Array(gf);
			mc.filters = filtersArray;*/
		},

		bevel: function(mc, filterObj) {
			// sample bevel filter object:
			// {distance:2, angle:45, hlColor:0xFFFF00, hlAlpha:.8, sColor:0x0000FF, sAlpha:.8, blurX:4, blurY:4, strength:3, quality:3, type:'inner', knockout:false}
			/*var bf = new BevelFilter();
			bf.distance = filterObj.distance;
			bf.angle = filterObj.angle;
			bf.highlightColor = filterObj.hlColor;
			bf.highlightAlpha = filterObj.hlAlpha;
			bf.shadowColor = filterObj.sColor;
			bf.shadowAlpha = filterObj.sAlpha;
			bf.blurX = filterObj.blurX;
			bf.blurY = filterObj.blurY;
			bf.strength = filterObj.strength;
			bf.quality = BitmapFilterQuality.HIGH;
			bf.type = filterObj.type;
			bf.knockout = filterObj.knockout;
			var filtersArray:Array = new Array(bf);
			mc.filters = filtersArray;
			*/
		},
		
		adjustColors: function(mc, filterObj) {
			//{hue:0, saturation:-100, brightness:36, contrast:0}
			/*var colorFilter ={};
			var mColorMatrix;
			var mMatrix = [];
			
			colorFilter.hue = filterObj.hue;
			colorFilter.saturation = filterObj.saturation;
			colorFilter.brightness = filterObj.brightness;
			colorFilter.contrast = filterObj.contrast;
			
			mMatrix = colorFilter.CalculateFinalFlatArray();
			mColorMatrix = new ColorMatrixFilter(mMatrix);*/
			if (isNaN(mc.currentFrame) || mc.currentFrame == null) mc.currentFrame = 0;
			var mColorMatrix = new createjs.ColorMatrix().adjustSaturation(filterObj.saturation);
			mc.filters = [new createjs.ColorMatrixFilter(mColorMatrix)];

			var bounds = mc.frameBounds[mc.currentFrame]
			var width, height; 
			if (bounds) {
				width = bounds.width*4; height = bounds.height*4; 
			} else {
				width = 200; height = 200; 
			}
			mc.cache(-width/2, -height/2, width, height, 4, 4);
		},
		
		blackAndWhite: function(mc) {
			/*var rc:Number = 1/3;
			var gc:Number = 1/3;
			var bc:Number = 1/3;
			var cmf:ColorMatrixFilter = new ColorMatrixFilter([rc, gc, bc, 0, 0, rc, gc, bc, 0, 0, rc, gc, bc, 0, 0, 0, 0, 0, 1, 0]);
			mc.filters = [cmf];
			*/
		},
		
		removeFilter: function(mc) {
			/*var filtersArray:Array = new Array();
			mc.filters = filtersArray;
			*/
		},
		setTransform:  function (mc, colorObj) {
			mc.filters = [new createjs.ColorFilter(colorObj.rm, colorObj.gm, colorObj.bm, colorObj.am, colorObj.ro, colorObj.go, colorObj.bo, colorObj.ao)]; 
			var bounds = mc.frameBounds[mc.currentFrame]
			var width, height; 
			if (bounds) {
				width = bounds.width*4; height = bounds.height*4; 
			} else {
				width = 200; height = 200; 
			}
			mc.cache(-width/2, -height/2, width, height);
		}

};