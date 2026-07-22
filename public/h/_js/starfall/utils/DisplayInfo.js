var createjs = createjs||{};
var DisplayInfo = {

	stopAll: function(__content) {
		if (__content instanceof createjs.MovieClip) {
			__content.stop();
		}
		if (__content.numChildren) {
			for (var i = 0, n = __content.numChildren; i < n; ++i) {
				if (__content.getChildAt(i) instanceof createjs.MovieClip) {
					child = __content.getChildAt(i);
					DisplayInfo.stopAll(child);
				}
			}
		} 
	},
	
	stopAllAt0: function(__content) {
		if (__content instanceof createjs.MovieClip) {
			__content.gotoAndStop(0);
		}
		if (__content.numChildren) {
			for (var i = 0, n = __content.numChildren; i < n; ++i) {
				if (__content.getChildAt(i) instanceof createjs.MovieClip) {
					child = __content.getChildAt(i);
					DisplayInfo.stopAllAt0(child);
				}
			}
		} 
	}
};