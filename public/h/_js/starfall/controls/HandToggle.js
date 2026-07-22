var cjs = createjs||{};
var p; 

(HandToggle = function(lib) {

	var dir_obj = {up:0, right:90, down:180, left:270};
	var hand_toggle = null, hand = null; 
	var htTargetA, htTargetB; 
	var ptA, ptB; 
	var htDirection = null, delayTime = 0, counter = 0, moveBack = true, toggleTrack = false; 
	var __offset, __iniX, __iniY, __rotA; 

	var rotate = false; 
	var _this = this; 

	var setPosition = function(dir) {
		var __bounds;
		if (htTargetA.nominalBounds) {
			__bounds = htTargetA.nominalBounds;
		} else {
			__bounds = htTargetA.getBounds();
		}
		switch (dir) {
			case 'down' :
				__iniX = ptA.x;
				__iniY = ptA.y - Math.round(__bounds.height/2) - __offset;
				break;
			case 'left' :
				__iniX = ptA.x + Math.round(__bounds.width/2) + __offset;
				__iniY = ptA.y;
				break;
			case 'up' :
				__iniX = ptA.x;
				__iniY = ptA.y + Math.round(__bounds.height/2) + __offset;
				break;
			case 'right' :
				__iniX = ptA.x - Math.round(__bounds.width/2) - __offset;
				__iniY = ptA.y;
				break;
		}
	}; 

	this.init = function(targetA, targetB, dir, dT, shift, rot, sc) {
		if (rot == undefined) rot = true; 
		if (sc == undefined) sc = 1; 

		hand_toggle = new cjs.Container();
		_this.addChild(hand_toggle);
		//
		hand = new lib.Hand();
		hand.scaleX = hand.scaleY = sc;
		hand_toggle.addChild(hand); 
		//
		delayTime = dT;
		htDirection = dir;
		ptA = targetA.localToGlobal(0, 0); 
		//
		htTargetA = targetA;
		htTargetB = targetB;
		//
		__offset = shift;
		rotate = rot;
		setPosition(htDirection);
		//
		if (targetB != null) {
			toggleTrack = true;
			ptB = targetB.localToGlobal(0, 0); 
		}
		//
		//__offset = shift;
		_this.x = __iniX;
		_this.y = __iniY;
		_this.alpha = 0;
		_this.visible = false;

		__rotA = dir_obj[dir];
		
		if (__rotA == 270) {
			hand.scaleX = -1;
		}
		hand.rotation = __rotA;
		counter = 0;
		cjs.Ticker.addEventListener('tick', delay);
	}; 
	var delay = function() {
		counter++;
		if (counter > delayTime) {
			cjs.Ticker.removeEventListener('tick', delay);
			counter = 0;
			_this.visible = true;
			_this.alpha = 1; 
			if (toggleTrack) {
				cjs.Ticker.addEventListener('tick', toggleMotionB);
			} else {
				var toggle_motion_dir = toggleMotionA;
				if (htDirection == 'right') {
					toggle_motion_dir = toggleMotionRight;
				} else if (htDirection == 'left') {
					toggle_motion_dir = toggleMotionLeft;
				} else if (htDirection == 'up') {
					toggle_motion_dir = toggleMotionUp;
				} else if (htDirection == 'down') {
					toggle_motion_dir = toggleMotionDown;
				}
				cjs.Ticker.addEventListener('tick', toggle_motion_dir);
			}
		}
	}; 
	var toggleMotionDown = function() {
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (hand.y > -24 && moveBack) {
			hand.y -= 4;
		} else if (hand.y < 0) {
			moveBack = false;
			hand.y += 4;
		} else {
			moveBack = true;
			hand.y -= 4;
		}
	};
	var toggleMotionUp = function() {
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (hand.y < 24 && moveBack) {
			hand.y += 4;
		} else if (hand.y > 0) {
			moveBack = false;
			hand.y -= 4;
		} else {
			moveBack = true;
			hand.y += 4;
		}
	};
	var toggleMotionLeft = function() {
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (hand.x < 24 && moveBack) {
			hand.x += 4;
		} else if (hand.x > 0) {
			moveBack = false;
			hand.x -= 4;
		} else {
			moveBack = true;
			hand.x += 4;
		}
	}; 
	var toggleMotionRight = function() {
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (hand.x > -24 && moveBack) {
			hand.x -= 4;
		} else if (hand.x < 0) {
			moveBack = false;
			hand.x += 4;
		} else {
			moveBack = true;
			hand.x -= 4;
		}
	};
	var toggleMotionA = function() {
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (hand.x > -24 && moveBack) {
			hand.x-= 4;
		} else if (hand.x < 0) {
			moveBack = false;
			hand.x += 4;
		} else {
			moveBack = true;
			hand.x -= 4;
		}
	}; 
	var toggleMotionB = function() {
		// fade hand in & start toggle
		if (_this.alpha <= 1) {
			_this.alpha += .1;
		}
		if (htDirection == 'down') {
			if (hand.y > -24 && moveBack) {
				hand.y -= 4;
			} else if (hand.x < 0) {
				moveBack = false;
				hand.y += 4;
			} else if (counter < 2) {
				moveBack = true;
				hand.y -= 4;
				counter++;
			} else {
				moveBack = true;
				counter = 0;
				cjs.Ticker.removeEventListener('ticker', toggleMotionB);
				cjs.Ticker.addEventListener('tick', track);
			}
		} else {
			if (hand.x > -24 && moveBack) {
				hand.x -= 4;
			} else if (hand.x < 0) {
				moveBack = false;
				hand.x += 4;
			} else if (counter < 2) {
				moveBack = true;
				hand.x -= 4;
				counter++;
			} else {
				moveBack = true;
				counter = 0;
				cjs.Ticker.removeEventListener('tick', toggleMotionB);
				cjs.Ticker.addEventListener('tick', track);
			}
		}
	};
	var track = function() {
		var onTarget = false;
		var d = 15;
		var v = 15;
		// track object & position
		var pointA = new cjs.Point(_this.x, _this.y);
		var pointB = new cjs.Point(ptB.x, ptB.y-30);
		// distance between targets
		var deltaX1= pointB.x - pointA.x;
		var deltaY1= pointB.y - pointA.y;
		// angle of the line between targets
		var rotationRadian = Math.atan2(deltaY1, deltaX1);
		// check target location
		if (!onTarget && Math.abs(deltaX1) < d && Math.abs(deltaY1) < d) {
			onTarget = true;
		} else if (!onTarget) {
			_this.x = pointA.x + Math.cos(rotationRadian)*v;
			_this.y = pointA.y + Math.sin(rotationRadian)*v;
			if (hand.rotation >= 90 && hand.rotation < 180 && rotate) {
				hand.rotation += 10;
			}
		}
		if (onTarget) {
			hand.rotation= (rotate) ? 180 : hand.rotation;
			_this.x = pointB.x;
			_this.y = pointB.y;
			cjs.Ticker.removeEventListener('tick', track);
			rotate ? cjs.Ticker.addEventListener('tick', toggleMotionC) : cjs.Ticker.addEventListener('tick', toggleMotionD);
		}
	}; 

	var toggleMotionC = function () {
		if (counter > 1) {
			_this.alpha -= .12;
		}
		if (hand.y > -24 && moveBack) {
			hand.y -= 4;
		} else if (hand.y < 0) {
			moveBack = false;
			hand.y += 4;
		} else if (counter < 2) {
			moveBack = true;
			hand.y -= 4;
			counter++;
		} else {
			counter = 0;
			moveBack = true;
			hand.rotation = __rotA;
			hand.x = 0;
			hand.y = 0;
			_this.x = __iniX;
			_this.y = __iniY;
			_this.alpha = 1;
			cjs.Ticker.removeEventListener('tick', toggleMotionC);
			cjs.Ticker.addEventListener('tick', toggleMotionB);
		}
	};
	
	var toggleMotionD = function() {
		// fade hand out & toggle
		if (counter > 1) {
			_this.alpha -= .12;
		}
		if (hand.x > -24 && moveBack) {
			hand.x -= 4;
		} else if (hand.x < 0) {
			moveBack = false;
			hand.x += 4;
		} else if (counter < 2) {
			moveBack = true;
			hand.x -= 4;
			counter++;
		} else {
			counter = 0;
			moveBack = true;
			hand.rotation = __rotA;
			hand.x = 0;
			hand.y = 0;
			_this.x = __iniX;
			_this.y = __iniY;
			_this.alpha = 1;
			cjs.Ticker.removeEventListener('tick', toggleMotionD);
			cjs.Ticker.addEventListener('tick', toggleMotionB);
		}
	};

	this.destroy = function() {
		if (hand_toggle != null) {
			if (hand != null) {
				hand_toggle.removeChild(hand); 
				hand = null; 
			}
			_this.removeChild(hand_toggle); 
			hand_toggle = null; 
		}
		cjs.Ticker.removeEventListener('tick', delay);
		cjs.Ticker.removeEventListener('tick', track);
		cjs.Ticker.removeEventListener('tick', toggleMotionDown);
		cjs.Ticker.removeEventListener('tick', toggleMotionLeft);
		cjs.Ticker.removeEventListener('tick', toggleMotionRight);
		cjs.Ticker.removeEventListener('tick', toggleMotionUp);
		cjs.Ticker.removeEventListener('tick', toggleMotionA);
		cjs.Ticker.removeEventListener('tick', toggleMotionB);
		cjs.Ticker.removeEventListener('tick', toggleMotionC);
		cjs.Ticker.removeEventListener('tick', toggleMotionD);
	}; 
}).prototype = p = new cjs.MovieClip(); 