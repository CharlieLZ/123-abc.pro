var createjs = createjs||{};

var Conversions = {
	local_to_global: function(mc) {
		return mc.localToGlobal(0, 0);
	},

	global_to_local: function(mc, pt) {
		return mc.globalToLocal(pt.x, pt.y);
	},
	
	hexToRGB: function(hex) {
		// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m, r, g, b) {
			return r + r + g + g + b + b;
		});
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	},
	
	setRGBhex: function(mc, colorValue) {
		var rgbObj = this.hexToRGB(colorValue);
		var filter = new createjs.ColorFilter(0,0,0,1,rgbObj.r,rgbObj.g,rgbObj.b,0);
		mc.filters = [filter];
		mc.cache(mc.nominalBounds.x,mc.nominalBounds.y,mc.nominalBounds.width,mc.nominalBounds.height);
	},

	setRGB: function(mc, colorValue, multiplier) {
		if (multiplier != 0 || multiplier == undefined) {
			var __r = colorValue>>16;
			var __g = colorValue>>8&255;
			var __b = colorValue&255;
			var filter = new createjs.ColorFilter(0,0,0,1,__r,__g,__b,0);
			mc.filters = [filter];
			var bounds = null;
			var width, height; 
			if ( mc.frameBounds != null){
				bounds = mc.frameBounds[0];
			} else {
				bounds = mc.nominalBounds;
			}		
			if (bounds) {
				width = bounds.width*4; height = bounds.height*4; 
				mc.cache(bounds.x,  bounds.y, bounds.width, 2 * bounds.height, 1,1);
			} else {
				width = 200; height = 200; 
				mc.cache(-width/2, -height/2, width, height, 3, 3);
			}
		} else {
			mc.filters = null; 
			mc.uncache();
		}
	},

	setTransform: function (mc, colorObj) {
		mc.filters = [new createjs.ColorFilter(colorObj.rm, colorObj.gm, colorObj.bm, colorObj.am, colorObj.ro, colorObj.go, colorObj.bo, colorObj.ao)];
		var bounds = null;
		var width, height; 
		if ( mc.frameBounds != null){
			if (isNaN(mc.currentFrame) == false){
				bounds = mc.frameBounds[mc.currentFrame];
			}else{
				bounds = mc.frameBounds[0];
			}
		} else {
			bounds = mc.nominalBounds;
		}
		if (bounds) {
			width = bounds.width; height = bounds.height; 
			mc.cache(bounds.x,  bounds.y, bounds.width, bounds.height, 3, 3);
		} else {
			width = 200; height = 200; 
			mc.cache(-width/2, -height/2, width, height, 3, 3);
		}
	},

	resetTransform: function(mc) {
		mc.filters = null; 
		mc.uncache();
	}
};
