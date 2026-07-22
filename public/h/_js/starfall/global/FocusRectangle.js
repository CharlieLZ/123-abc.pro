function FocusRectangle () {

	var focus_rec =  null;
	var focus_obj =  null;
	var cursor_on = true;
	this.spaceIndex = 0;
	var self = this;
		
	this.addKeyListener = function() {
		window.addEventListener('keydown', self.keyBoardPress);
	}
	this.keyBoardPress = function(evt) {
		//console.log(evt.keyCode);
		var key = evt.keyCode;
		if (key == 32) {
			//console.log('space');
			stage.canvas.style.cursor = "none";
			var __length = EventHandler.eventList.length;
			if (self.spaceIndex >= __length) self.spaceIndex = 0;
			for(var i=0; i<__length; i++) {
				focus_obj = EventHandler.eventList[self.spaceIndex];
				if (focus_obj.obj.visible) {
					break;
				} else {
					self.spaceIndex++;
					if (self.spaceIndex == __length) self.spaceIndex = 0;
				}
			}
			//console.log('focus', focus_obj);
			self.addFocusRec(focus_obj);
			if (cursor_on) {
				GlobalVars.obj['focus_rectangle'] = true;
				cursor_on = false;
				window.addEventListener('mousemove', self.mouseListener);
			}
		} else if (key == 13) {
			//console.log('enter');
			if (focus_rec != null) self.onEnterPress(focus_obj);
		}
	}
	this.addFocusRec = function(__info) {
		self.removeFocusRec();
		var __mc = __info.obj;
		var __offset = 0;
		if (__mc.name == 'close_btn' || __mc.name == 'nextBtn') {
			__offset = 10;
		}
		
		var __bounds = __mc.nominalBounds;
		if (__bounds == null) {
			var __bounds = __mc.getBounds();
		}
		//console.log(__mc.getBounds());
			
		focus_rec = new createjs.Shape();
		__mc.addChild(focus_rec);
		focus_rec.graphics.setStrokeStyle(3);
 		focus_rec.graphics.beginStroke('#FFFF00');
		focus_rec.graphics.beginFill(null);
		focus_rec.graphics.drawRect(__bounds.x+(__offset/2), __bounds.y+(__offset/2), __bounds.width-__offset, __bounds.height-__offset);
		focus_rec.graphics.endFill();
		self.spaceIndex++;
		stage.update();
		if (self.spaceIndex == EventHandler.eventList.length) self.spaceIndex = 0;
	}
	this.onEnterPress = function(__info) {
		__info.listener({target:__info.obj});
		self.removeFocusRec();
		focus_obj = null;
	}
	this.mouseListener = function(evt) {
		window.removeEventListener('mousemove', self.mouseListener);
		stage.canvas.style.cursor = "default";
		self.removeFocusRec();
		focus_obj = null;
		cursor_on = true;
		GlobalVars.obj['focus_rectangle'] = false;
		stage.update();
	}
	this.removeFocusRec = function() {
		if (focus_rec) {
			focus_rec.parent.removeChild(focus_rec);
			focus_rec = null;
		}
	}
	this.destroy = function() {
		self.mouseListener(null);
		window.removeEventListener('keydown', self.keyBoardPress);
	}
}