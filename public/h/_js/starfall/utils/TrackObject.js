var createjs = createjs||{}; 

function TrackObject() {
	this.parent_obj = null;
	this.trackObj = null;
	this.targetObj = null;
	this.pointTarget = false;
	//
	this.__velocity = 35;
	this.__scale = .025;
	this.__offset = 30;

	var self = this; 

	this.init = function(p_obj, obj, target, ptTarget) {
		this.parent_obj = p_obj;
		this.trackObj = obj;
		this.targetObj = target;
		this.pointTarget = ptTarget;
		createjs.Ticker.addEventListener('tick', this.trackCard);
	}

	this.trackCard = function () {
		var onTarget = false;
		// track object & position 
		var pointA = {x:self.trackObj.x, y:self.trackObj.y};
		//
		var pointB;
		if (self.pointTarget) {
			pointB = {x:self.targetObj.x, y:self.targetObj.y};
		} else {
			pointB = {x:self.targetObj.x+(self.targetObj.getBounds().width/2)-1, y:self.targetObj.y+(self.targetObj.getBounds().height/2)+2};
		}
		// distance between targets
		var deltaX1 = pointB.x-pointA.x;
		var deltaY1 = pointB.y-pointA.y;
		// angle of the line between targets
		var rotationRadian = Math.atan2(deltaY1, deltaX1);
		// check target location
		if (!onTarget && Math.abs(deltaX1)<=self.__offset && Math.abs(deltaY1)<=self.__offset) {
			onTarget = true;
		} else if (!onTarget) {
			self.trackObj.x = pointA.x+Math.cos(rotationRadian)*self.__velocity;
			self.trackObj.y = pointA.y+Math.sin(rotationRadian)*self.__velocity;
			if (self.trackObj.scaleX>.25) {
				self.trackObj.scaleX -= self.__scale;
				self.trackObj.scaleY -= self.__scale;
			}
			
		}
		if (onTarget) {
			createjs.Ticker.removeEventListener('tick', self.trackCard);
			self.trackObj.x = pointB.x;
			self.trackObj.y = pointB.y;
			// check parent for track complete rules
			self.parent_obj.trackComplete();
		}
	}
	
	this.destroy = function () {
		if (self.trackObj != null) {
			createjs.Ticker.removeEventListener('tick', self.trackCard);
		}
	}
}