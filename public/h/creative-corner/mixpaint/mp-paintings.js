(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.paintFrame_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("EBc0AuGMi5nAAAMAAAhcLMC5nAAAg");
	this.shape.setTransform(642,318.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4D5A9").s().p("Eif/BZZMAAAiyxME//AAAMAAACyxgEhczAlDMC5nAAAMAAAhcLMi5nAAAg");
	this.shape_1.setTransform(642.025,376.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintFrame_mc, new cjs.Rectangle(-382,-196,2048.1,1144.2), null);


(lib.uni_bg_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggFAG2QDWofHwl+QHwl/JyhoQJwhoIfEJQIeEIEVF8QD/FfCFGPIAVBBMhD7AFmQAulgBKjWg");
	this.shape.setTransform(0.0125,0.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_bg_small, new cjs.Rectangle(-217.3,-100.4,434.70000000000005,200.9), null);


(lib.uni_tailend_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvFSQBJgMAWhGQAVhHhBhXQhBhXgBheQAAhgBohlQBphmDUgWQBCBPARB7QARB8gsBKQgsBKgRAzQgSAzAdAnIgMANQgNANgTAFIgNAFQgmAKgogKQgUBZhVAzQgcASgeAAQg5AAg5hDg");
	this.shape.setTransform(-0.0227,0.0323);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_tailend_fill, new cjs.Rectangle(-25.5,-40.4,51,80.9), null);


(lib.uni_tail_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ai+IaQgFgFgFgGQgEgNALgZQARgnAHgqQAKhEgLhEQgMhNgPhMQgIgpgEgqQgOjLBqivQBMh9CChCQAdgKAeAAQASACAEAJQAGAMgVAOQgMAHgTAJQiyBZhGDAQglBjAEBoIABAHQAIBKAOBIQAOBHAGBKQADAjgBAiIgDAlQATgyAHhAQAEgfAFhQIACgcQANjzCKjHQAggtAugfQASgKATgFQALgCAGAEQAIAFgCAMQgDANgOALIgNAIQiUCPglDJIgRBaIgFAqIgHBlQgEA+gGAmQgMBHgcAzQgRAkggAZQgPAMgSAHQgFACgFAAQgJAAgGgGg");
	this.shape.setTransform(18.4633,-33.0263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AinGuQg4gLgogsIgFgGQgVgVACgTQACgOAMgHQAKgFAJADQAHgFANAAQARABAGgCQAOgFALgVQAMgZgCgXQgBgYgagnQgthFgSgpQgohiAahXQBCiaCXhSQAcgQAegOQAggOAkgKIASgFQAPgEANgBQATgCAMAEQAHADAEAGQAFAHgBAIQgCASgjAFQgwAJgrAQQjGBEg1DDIgFAYQgDAgAFAjQABAKAEAKIADAIQALAZASAgIAiA2QAaAoAHAcQALAsgWAsQgWAsgrARIgMAEQBtBhBsiCQAVgYAJgfIACgHIAJgmIgCgIQAAgIAFgIQAFgGAIgDQAHgCAIACQAIADAEAHIAFAJQAMAXAZAAQANABALgDQgFgGgFgHQgMgUgCggQgBgeAFgTQAGgZAagiQAjgvAFgJQASgdAIgoQAQhHgOhBQgIglgehBIgJgUQgGgNADgIQACgFAHgDQAGgDAGABQAJACAMALQASAUAPAjQAfBGgBBQQAABPggBGQgQAkgbAmQgRAWgFAKQgLAXAFAbQADAUAOAFIARACQAIADAFAHQAFAHAAAJQAAAKgGAGQgIAPgSAMQgjAYgqgCQgcgBgUgOQgFASgKAUQhHB/h5AAQgVAAgWgEg");
	this.shape_1.setTransform(-10.4869,44.1035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_tail_stroke, new cjs.Rectangle(-39.6,-87.4,79.2,174.9), null);


(lib.uni_tail_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai0GqQAdhdgaiHQgaiHAEiJQAEiJBHhnQBHhmBog7IBegyIA3CZQhTAcg5BJQhGBbgeBvQgeBugBCMQgCCMgcBMQgcBNgxAvQgHAFgEAAQgTAAAchkg");
	this.shape.setTransform(-0.0118,-0.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_tail_fill, new cjs.Rectangle(-20,-52.6,40.1,105.2), null);


(lib.uni_mouth2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ai+g6QgZhEgMgHQDeAzDpgIQioCmjoA6QAHh/gZhBg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_mouth2_fill, new cjs.Rectangle(-22.8,-13.4,45.6,26.8), null);


(lib.uni_mouth1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACGFDQg6gFg7gPQhLgUg9gwQg7gwgahCQg3iIAtiOQAehfBNhGQAFA1ARAyQAfBfBPBCICQBJQBdCwgmCFg");
	this.shape.setTransform(0.002,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_mouth1_fill, new cjs.Rectangle(-23.5,-32.3,47,64.69999999999999), null);


(lib.uni_mouth_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AoME/Qg5gggrgwQgtgxgYg7Qgag9gChGQgChDAVhCQAnh+BrhiQAXgTAOgDQAIgBAJACQAHAAAHAFQAHAGACAKQABAJgDAJQgCAIgGAJIgKAQQgPAcABAiQAAAgAOAeQAWAzA7AwQCQB2DZAZQBpAMBogOQAkgEBIgMQA/gIAtADQAkACBIANQBoAMBlgdQAcgHAJAKQAIAKgIAOQgHAMgPAIQhEAjh2gKIhegKQg4gHgnACQgTABgaADQheBYg2ArQhdBJhWAjQhqAth3ABQiLgBhtg9gApgjHQgpBHgMA3QgRBSAhBXQAgBVBGA4QBCA2BZAXQBSAUBXgKIACgYQAEh+hKhkIgLgOIgGgKQgSgIgRgJQhFglg/g5QgygsgWgnQgaguABg4IAAgMQgUAagUAhgAinEgIAAASIAAAJQCJgfCChoIBNhBIAFgEIgKABQg5AHhJgCQiUgDhzgiQAyBiAEBug");
	this.shape.setTransform(0.0286,-0.0031);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_mouth_stroke, new cjs.Rectangle(-72.1,-38,144.3,76.1), null);


(lib.uni_leg2_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjJNFQhKgVg8gvQgNgKgFgKQgDgIABgIQABgJAFgFQALgJARAHQAIADAPANIAOAJQCSBXCugSQAlAAAmgLIAUgFQAWgHAJAAQAIABAHAEQAHAEACAHQAFAOgNAMQgJAIgSAEIgPAFQhMAPhJAAQhfAAhdgZgADQMfQgQgLANgkIACgJQAWg8gGhBIgCgTIgEgUQgKglgeg5QgjhCgohAIgkg8QgwhWgHhWQgCgVAEgKQAHgSAQgBQAIgBAIAGQAHAGADAJQAEAKAAAZQAAAcAGAZQAGAfAOAbQAIAQANAUIAYAjQAxBHAjBPQAfBFASBKQANA4gBAnQgDA3geAhQgJAKgKAEQgGACgFAAQgGAAgFgDgAlrK8QgqgTgDgeQgCgQAPgbQgNgFgJgNQgJgMgBgPQgCgVANgkQgKAIgPgEQgOgDgGgMQgEgJABgNQABgIAEgQQAPg4gCg7QgCgigKg4QgHgpgFgWIgNgoQgLgkgEgSQgEgMAEgGQACgHAJgCQAIgBAHADQALAHAIARQAYAvAOA+QALAvAIBDQAIBKgKAsQAMgHAPAGQAPAHAEAOQADAMgGAVIgTBHQArAHAIAVQAGAPgKASQgHALgQAPQAFAHAWALQAUAJADAMQADAJgHAKQgHAJgLADIgJABQgOAAgSgJgAAxBCQgLgDgEgNQgDgNAFgMQAIgPAbgQIAygjQCGhiBmiEQBoiGgHitQgFhwgchsIgKghQgFgRAGgHQADgFAGgBQAGgBAGACQAHAEAJAMQAIALAGAMQA6CagQCnQgQCZhiB3QhtCFiGBpQgfAYghAWQgRALgLAAIgHgBgAnmAwQgKgBgGgHQgOgSAZggIALgSQAmg3AWhBQAMglAKgmQAJgfACgiQAEgvgDgwQgFhEgNhDQgKgvgPgvIgKgeQgEgLAAgIQAAgKAHgEQALgHAPAQQALANAKAUQAbBAAOBEQAKAwACAwQADAygCAvQgCA4gNA4QgOA7gaA5IgNAdQgRAggUAhQgOAXgMAHQgIAEgKAAIgCAAg");
	this.shape.setTransform(0.0429,0.0185);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_leg2_stroke, new cjs.Rectangle(-50.8,-86.2,101.69999999999999,172.5), null);


(lib.uni_leg2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqM2QiEgrgSg6QgGgUgBgaIgRgGQgMgEgEgHQgKgOALgYIAIgRQAFgLgBgIQgggDgHgRQgDgGACgRIANhMQgeAGgLgLQgIgIABgOQABgIAFgRQAKgjgDguQgBgegKg1QgHgygLgdQgXgygKgdQgVgqA6hqQA5hrAZh2QAZh2hUj/QHoi1F3gFQApC7gZCZQgKBAgWA8QgtB5hKBeQhLBehFAyQhEAxgXAOQgXAOgNAmQgMAmAgBBIAiBDQAjA8AvBiQAvBjAUBcQATBdgaAsQgbAtg7APQhqAdhXAAQhJAAg8gUg");
	this.shape.setTransform(0.0116,0.0321);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_leg2_fill, new cjs.Rectangle(-47.7,-84.1,95.5,168.3), null);


(lib.uni_leg1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AGZIRQgMgBgJgJIgCgCQgFADgGACQgIADgPgBQjMgyiFikQgmgxgeg4IAAgBQgHgVADgPQADgOAMgQIAEgFQAbgYAUgdIgBAAQgIABgNgGIgUgHQjPgZh7gtQh7gvgbgPQgbgQgEgEQgfgYgMgrQgUikA2icIAIgYIACgFQAGgMAIgIQAJgJALABQAIACAFAIQAFAHAAAJQABAJgJAYQgKAcgIAiQgZBuAGBxQAAAIACAJQAJAZASAPQAIAHAQAHQC2BTDEAfIA2AJQAaAFAcALQAPAFAGAGQAEAFACAFIAAAAQAFgHAFgEQAIgHAKgCQALgBAHAGQAJAIgCAQQgCAGgDAIQgUAsggAjIgSATIgEADIgBACQgGAJABAIQABAEACAGQBxCfCsBSQAsAYAzAEIAGADIAKgWIAOgvIAFgIIARgOQAMgIAEgGQAEgHAHgTQAEgRAJgHQAFgDAOgEQAOgDAFgFQADgDAEgHIAGgKQAJgMANgCIgBgBQgIgGgEgJQgCgIAAgLIAAgTIABgEQAkiyh6h7Qgrgsg2gcIgUgKIiLg/Qg4gagXgQQgugfgegyQgbgtACgnQABgPAIgLQAKgNAMACQALADAFANQADAHAEATQAGAjAYAgQAUAcAiAXQAaASAmASIBEAcQAlAQApAUQCdA/A3CfQAjBngQBsIgDAWQgEAfgRAFIAHAFQAHAFAEAIQADALgCAQIgGAaIgBAbQgBAQgEAIQgJASgWACQgWADgMgQQgFAZgUAVIgJAJQgGAGgDAEQgDAHgFAOQgFAPgEAGQgGAKgKAGQgKAGgLAAIgBAAg");
	this.shape.setTransform(-0.0077,0.0167);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_leg1_stroke, new cjs.Rectangle(-59.3,-52.8,118.69999999999999,105.69999999999999), null);


(lib.uni_leg1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFpH0Qg0gJhWg1Qg/ghhqhsQhqhsA0gwQA0gqgMgcQgtgFhjgXQlnhfgpgkQgpgkgJhgQgKhgA0i3QCGgIExAhQA9AFAoACQgLB5BdA8QEcCABQBeQA0AxAXCDQAWCDgnBRQgnBRgoAyQghArgqAAIgRgCg");
	this.shape.setTransform(0.023,0.0312);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_leg1_fill, new cjs.Rectangle(-55.6,-50.1,111.30000000000001,100.30000000000001), null);


(lib.uni_horn_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlUGeQhqhIgLgqQgNgvAYgrINpqCQAwgXgRA7IinDHInvIpQgUBTgyAAQgcAAgmgZg");
	this.shape.setTransform(0.0303,-0.7729);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_horn_fill, new cjs.Rectangle(-46.2,-44.7,92.5,87.9), null);


(lib.uni_hair_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(0.023,0.0313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_hair_stroke, new cjs.Rectangle(-181.8,-155.9,363.70000000000005,311.9), null);


(lib.uni_hair_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwsXpQCbiJg7hYQhjBXhIAQIAAhoQgbjOh4hJIjnilIg7A+Qi9jmB8lqQAwhkBYhaQAVgWAXgUIgCAAQhYALhPgTQhOgShMhTQCvgyCIh8QCHh9A4jpIhAhOQDmlSEJgOQgWiRjLhVQE1inDqDdIAFAKQAVjICjieQgVCWBNB7QAjiwCNg4QCMg5CHAOQCHAPCLBYQCLBZBJAfQBIAeBzgnQBygoARh1QCrCGi+CxQAuAlAzAaIF4kcQBAg4AGA4IkeFMQB6ARCQglQCGhMgxh3QCYgqA6B8QA5B8iQCpQA/AHAzgwQgEA/g2BIQgjAvhDAlIBYAIQhkDPkCgcQAYCMg5BMQg6iNh6hDQAQEKjeBfQBDjYhviPQglgvgigjQhHBrhYgTQBcBAAkCMQAlCMhNBWQhGiLhNg/QhNhAh4gkQh3glhYgsQhYgtgOhgQgmDWCrBnQkRgXhVh9QhVh9gOhgQl8AOiSEtQg2B6gDCnQgECmBuCmQBtCmC6AVQhUA7hvAMQArA2BZgPQhgCBjegfQAiA8BGA6QCQB5AwCRQBHDVjcC9QgHhogQhvQhbEDjsAAQgmAAgpgGg");
	this.shape.setTransform(0.025,0.0072);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_hair_fill, new cjs.Rectangle(-178.9,-151.9,357.9,303.9), null);


(lib.uni_ear_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAAIwQgHgDgEgHQgFgIACgKQACgJAGgHQAIgKAWgLQBkg1BNhkQBGhcAph2QAlhnALhqQAIhMgEhbQgDhCgLhkQgDgSAEgKQACgHAFgEQAGgGAGAAQATAAAHAiQA2E3hWD+QgRAwgRAlQhCCShlBZQgkAfhOAzQgSAMgNADIgHABQgGAAgFgCgAklF2QgGgGABgQQAAhsAth1QAkhhBGhtQCqkRDThkQANgGAMgBQAPAAAFAKQAGANgLANQgFAFgSAKQjKBoihEFQg7BeggBTQgnBkgEBcIgCAWQgCAMgGAIQgGAJgMADIgFAAQgJAAgFgGgAmSFVQgGgDgEgHQgEgJAAgUQAGiNApiAQAsiHBQhsQCRjFEHh3QBLgjAyAAQAkAAAUAQQAMAKAEAOQAFAQgHANQgHANgQADQgRADgJgMIgGgKQgDgGgEgDQgHgEgPAEQh+AghwBGQhvBGhVBjQhVBjg0B6Qg0B4gNCBQgFA9gFAVQgEAUgMAEIgFABQgEAAgFgDg");
	this.shape.setTransform(-2.7,-10.9,1,1,0,0,0,-2.7,-10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_ear_stroke, new cjs.Rectangle(-41.6,-56.2,83.30000000000001,112.4), null);


(lib.uni_ear_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al8E7QAojtAsh0QAsh1B8iHQB8iGB/g8QCAg8AzgFQAygEASB7QASB7gNClQgMClgvB4QgvB4g9BcQg9BbiaBoQjaghibjKg");
	this.shape.setTransform(0.0274,0.0168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_ear_fill, new cjs.Rectangle(-38,-54.9,76.1,109.9), null);


(lib.uni_body_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(8.1171,12.5923);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_body_stroke, new cjs.Rectangle(-191.8,-249.3,399.9,523.8), null);


(lib.uni_body_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgYGApKQjGgYhrheQhrheAEg/QABgXAIgaIgOgNQgJgIgCgJQgEgRASgUIAOgOQAHgIADgJQgdgQgBgTQAAgGAIgRIAmhGQgfgFgGgQQgEgLAFgNQAEgHAKgPQAWgfANgvQAJgeAJg4QAKg0AAggQgEg7ABghQgFgyBahTQBZhTA/hrQA0hYAQjMQhijQA/kEQAeh6BRhiQAYgcAdgZQCLh9DvguQDugvDuAWQAzgDBqgaQBqgbBYhjQBAhJANjaQlHhNiWjhQjimOAbnOQAbnHFblEQCViLC3hUQGLi1G0AnQGIAmDRF0QAgA7AbA+QAuByAiBzQACAHAFAJQAfA2ArAqQAQAPAWAJQBOAdBSADQBuAPAtAsQA1BkAYB+QAYB+gTByQgSBxibDPQibDPnvDGQilBDiLAoIhvASQAYDfB1DJQCtEpATEPQASEOjLCeQhrBTiRAgQCqB/AwBTQAqA7gBCFQgBCFg1BJQg2BIguArQgxArgxgTQgygShLhEQg5grhVh9QhWh9A8gnQA7gggGgdQgtgNhegpQkSiBhIg0QjSAdjQBOQimA+hsAUIgMAWQgeA7gpAzQhTBmhlBAQhlA/hRAYQhQAXgaAFQgaAEgYAhQgZAhAIBNIAIBPQAMBJAKBzQAJBzgNBkQgOBjgnAiQggAbguAAIgWgBg");
	this.shape.setTransform(8.4584,8.8144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_body_fill, new cjs.Rectangle(-188.3,-254.7,393.6,527.0999999999999), null);


(lib.uni_rainbow5_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhbRAmWQgJnkBFoLQBFoLCbn0QCbnzEEnLQEwoYGjnBQBlhuBohrQEukkFYjxQF1kDGQjQQDbhzDhhjQHhjKH8h1QITh7IhgRQJCgZI9BTQIdBSIHCuQI6C/INEjQC9BpC1B4QElDCEODjQHLGCFcHiQE8G2DgHtIBLCmQCgFvBtGDQBxGOBGGWIAMBUQADAcABAcIsqDIIgMheQhKpOioo6Qino4lUnjQlXnomrmLQmsmLnHjjQnHjimJioQjQhThGgaIhvgnQoOiXmmgmQmmgni3gCQmYAQmhBNQo7BtoRDzQk1COkrCiQhDAmhCAnQoHE4mfGeQmeGej7G5Qj8G4ikHuQh5FthGF3QhpIygDHPQgCHQAbFCIqeDSQgknegJnkg");
	this.shape.setTransform(-0.0019,-0.0144);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow5_fill, new cjs.Rectangle(-584.3,-341.6,1168.6,683.2), null);


(lib.uni_rainbow4_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5svAQQGq2RNC5QRNC5JOLiQJNLiB2R7IpECCQg6pGkCoNQkNoioUkoQoOkkpeAPIguACQo+AVmLDVQmKDWjdDfQj9EJilFUQi6F9gGGrIq8C0QgB5sTZs5g");
	this.shape.setTransform(0,0.0296);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow4_fill, new cjs.Rectangle(-288.5,-150.9,577,301.9), null);


(lib.uni_rainbow3_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgxtgN9QJbp1I7lZQI7laMXhKQYyj/WOOKUAerATjgBOAhwQlvBemlBsIgIgnIh0gFIBwADQiIxAlzqxQlzqwsbm/Qsbm+tLgSQtJgTr4FiQr4Fip0NBQpzNDAmSvQmtB7l0BpQhn/RSMzUg");
	this.shape.setTransform(0.0119,0.0067);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow3_fill, new cjs.Rectangle(-425.1,-234.3,850.3,468.70000000000005), null);


(lib.uni_rainbow2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhQeATmQB8tiG0s0QGzs2L9pKQL8pLOekmQOekmPJBhQOVBSK1EMQDxBYH2D2QH1D1KeKEQKaKDFsNTQFmNGBiOHQlrBZm1BvUgAJghvgf3gUOUgf2gUPgkOATdUgkpAXBAEDAonQpHCkm6B4Qiks4B8thg");
	this.shape.setTransform(0.0306,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow2_fill, new cjs.Rectangle(-520.4,-294.3,1040.9,588.7), null);


(lib.uni_rainbow1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eha0AMoIgCACQHZ90axy4Qaxy4avAbQauAcSSJvQSRJuHgHVQQNP3G8VqQDIJyBOKJQlNBNm8BtQhiuHlmtGQlstTqaqDQqeqEtWlxQiVhBiXg+Qs/kvtwhrQuMhguGEOQuGENsuJxQsvJxmhL+QmhL8h/NwQiANwCINXIjlA+QjPA3pWDJQiUypF63Pg");
	this.shape.setTransform(0.0179,-0.0177);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow1_fill, new cjs.Rectangle(-608.4,-348.8,1216.9,697.6), null);


(lib.uni_rainbow_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(0.2843,-45.7838);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_rainbow_stroke, new cjs.Rectangle(-688.9,-445,1378.4,798.5), null);


(lib.bg_cloud1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eh0PAWqQgOgGgDgMQgFgSAZgaQCkioDehfQDdheDrgDQBVh7B3heQB3heCLg2QCLg1CYgKQCXgKCRAkQCWAkB1BRIAIAGQBsmFE2kYQFbk3HFhyQDwg+D4AAQF2ABFiCNQHdC8EYGmQBEBnAzBuQBehQBwg3QB1g5B/geQA0gOA3gCQCTgKCPAgIAbAIIAKgnQAkiDBWiZQBdilBoh4QC/jcEXiCQEPh+EqgRQEPgQEIBMQEJBLDbCdQDdCeCaDjQA4BQArBWQFQjfGwBGQCkAbCMBOQDRmlFQlLQFMlHGnjFQCRhDCbgsIAegHIAGgBQAYgFAUAFQAXAGACAUQACASgUAMQgRAJgZAEIgtAMQngB9l2FKQl8FPjxG6IhBB4QA7AoA1AyQARATAOAUQAJAOACANQADAQgKAIQgLAKgRgIQgNgGgNgPQgkgngpggQmxkZnvCkQiMAuh0BbQgiAfgaAlIgQAWQgKALgKAFQgMAGgOgDQgPgDgFgMQgFgPAPgYQASgdAVgaQAkggAmgdQhGiNhqiBQjDjskQiMQk/iklugFQlzgFk7CgQk/CijPEyQjREzgZFhQgBAQgIANQgJANgMgFQgKgEgDgTQgQhgAPhpIgPgDQi4gti7AkQjHAmikB1QgsAggoAkQAOAjANAkIAxB7QAIAVgBARQgBAVgQAGQgOAGgQgNQgMgLgJgTQgQgigthtQimnTmckRQmWkNnrgYQg4gDg4AAQnqgBmqDqQnBD1jaHMQhECPgcCbQgHA2ADAxIACAdQgBAQgEAMQgGAOgOAHQgOAHgMgGQgUgKABgoQAChCAJhCQAHgqAKgpIgggWQhYg8hzghQiNgpiVAGQiVAFiJAzQiJAzhzBeQh0BehOB8QgIANgGAGQgIAJgKACQgJADgLgDIgTgHQgrgOhIALQi0AYilBRQilBRiBB/IgUASQgMAJgLADQgGACgGAAQgIAAgHgDgEBzzgCNQgLgGgJgNQgGgIgIgRQinlLkhkFQkYj9lhiWQlTiRmDgqQlygol9A5IhJALQgrAGgdADQgVADgOgFQgTgGgDgPQgCgQAQgMQAOgJAVgEQGbhQGUAfQGmAfF0CWQGDCbEyETQE7EbCvFrQAKAUgDAMQgEAMgPAEIgKABQgJAAgIgEg");
	this.shape.setTransform(-0.0253,-0.0117);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_cloud1_stroke, new cjs.Rectangle(-745.8,-145.3,1491.6,290.6), null);


(lib.bg_cloud1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh3ZAnuMAAAgjoQEojxD2glQC1gcBUAEQAbgwB6iDIANgPQAogjAugcQIVlXIfFHIASgyQCfmuE/knQBXhRBpg+QINk4JmA/QI6A2HBFSQDsDWDJFyIAkghQGDlDHvBtIAAAAQBolwEnkfQG+myJuAJQJvAJGyG+QCnCsBmDHQDxiuFVgCQFVgCDXCHQAvhiBDhsQAcgpAagrQGBp1KQk2QKFkwLPAuQKrAlIsGHQA+AsA7AxQM2KsEJO9MAAAAtjg");
	this.shape.setTransform(0,2.8038);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_cloud1_fill, new cjs.Rectangle(-764.2,-251.4,1528.4,508.4), null);


(lib.uni_bubblesm_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDkAAChChQChChAADjQAADkihChQihChjkAAQjjAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_bubblesm_fill, new cjs.Rectangle(-55,-55,110,110), null);


(lib.uni_bubbleslg_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtCNDQlZlagBnpQABnoFZlaQFalaHoABQHpgBFaFaQFaFaAAHoQAAHplaFaQlaFanpgBQnoABlalag");
	this.shape.setTransform(2.6,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_bubbleslg_fill, new cjs.Rectangle(-115.4,-122.1,236.10000000000002,236.1), null);


(lib.uni_bubble_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AE7PiQiZgRiNg9IgGgEQg4gggYgSQgegWgQgJQgXgNgGgIQgKgMACgQQACgQANgHQASgLAcAOQAMAFAfAXQAUAOAnAZQB+BHCPAYIAfAEQAhADAegDQAbgCAJAHQAKAIAAAOQgBAOgJAJQgOAPggADIgMABQgRAAgYgDgAHfPMQgYgBgIgMQgFgIACgKQADgKAHgHQALgJAZgFIBVgNQAygHAggMQA/gWBIg+QBxhhBCh7QBIiEADiJQABglgGg+QgIhPgNg2QgbhshCheQhBhfhdg/QgjgYAFgVQADgKAKgGQAKgGALABQAQABAXARQBcA/BEBcQBDBcAhBqQAeBgAGB+QAHCXgjBqQgcBXhEBhQhhCIh3BLQhCAqhIAUQhAATg9AAIgagBgAmIMzQh7gOhBg2QgUgRgQgWQgGgIgRgdQgVgkgHgRQgNgfgFgjQgDgkAGhBQAEgfANgLQAIgHANAAQAMAAAIAHQAQAPgEAaIgEAWIgFAWQgEAbAJAgQAGAXAQAhQARAkAOAVQAUAdAYAQQAQALAfALQAzASApAFQA+AGBBgWQA8gTA2gpQAVgQAMADQAJACAEAKQAFAIgCAKQgDAOgQARQg5A6huAXQgsAJgaAAQgXAAgXgDgAhMKUQgLAAgIgIQgHgHgBgNQgBgLAEgMQAGgOARgZQANgagBgjQAAgagJgnQgLgtgMgdQgUgtgigkQgjgjgrgWQgtgWgvgDQgzgDgpATIgrAXQgrAWgTANQgiAWgNAbQgIAXgGALQgGAJgHAFQgJAFgJgCQgMgCgGgPQgFgMACgPQAEgqAcghQAUgZA0gdQAvgbAegNQAsgUAmgGQA8gJA/ATQA8ASAyAoQBMA+AhBbQAVA4ADBBQAEBUgdA4QgMAWgQAJQgJAGgKAAIgCgBgAlDBvQgUgOAKgrQAWhjA2hXQAZgqA1hCQA2hGAogkQBGg/BpgoQCbg6ClAPQCrAPCFBZQAaASgCASQgCAKgJAGQgKAHgLgBQgPgBgYgOQhsg6h8gRQh9gQh3AcQiJAghXBPQgjAgg0BCQg2BEgbAtQgnBCgNA8IgGAdQgFARgHALQgJANgPAFQgGACgFAAQgKAAgHgGgAo/gvQgngCg/gKQg9gJgfgNQgjgOgJgXQgGgOAHgPQAHgPAOgCQAKgBAQAIQBXAmBZAGQBgAGBRghQBaglBBhTQA+hQAThkQAHgogBgbQgBgigMgoQgghwhUhXQhUhWhugkQgqgMABgXQAAgJAHgHQAGgHAJgCQANgEAXAFQA/ANA7AiQA4AhAuAwQBXBbAsCGQAQAzACAlQABAXgEAkQgKBYgcA7QgRAlghAuQgeApgaAaQgtAug5AdQg6Afg+AJQgdAEggAAIgqgCgAt8ibQgPgCgYgQQgcgSgOgOQgVgVgbg0IgWgpQgUgmgIgUQgRgmgJgoQgIgjgCglQgIh1A2hpQArhTBOg+QBLg7BcgdQAtgNAfgBQAoAAA2ARQAfAKAEAQQAEAOgNALQgMALgQAAQgLAAgRgFIgdgHQgbgDg0ARQg+AUggAQQhBAhgxA5QgwA4gZBFQgZBFAEA8QACAtAUA1QAMAgAeA9QASAkAMARQATAdAWAPIAWAPQAOAIAHAHQAKAKAEANQADAPgGAKQgGAJgLAEQgGACgHAAIgIgBg");
	this.shape.setTransform(487.1626,-336.1989);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("A3JTmQgcAAgXgCQglgEgygQQh0gjhMg8QgkgdADgbQACgNALgIQAKgJANABQAKABALAIIARARQAvAuA8AZQAYAKAvANQApAMAZADQAWACAeAAQA3AAAbgDQAVgDAqgKQAxgNAWgJIARgIQAKgEAIgBQAKgBAJADQAKAEAEAIQAIAPgMASQgMATgaAKQgOAGgkAHIgxAMQgdAIgUADQgcAEgzAAIgWAAgAxyRnQgKgGgCgKQgEgVAmgYQA0ggAoguQApguAag3QAPgiAOguQAPg1AAgiQAAgfgJgmQgGgYgPgsQgdhSgZgvQgphPhAg/QhAg/hPgoQhPgohZgNQhZgOhYAOQgpAHgLgTQgGgLAIgOQAHgNANgIQAWgMAfgCQATgCAmADIBPAGQAsAFAiAHQCFAdBwBZQBvBXA/B8QAbA2AeBaQAZBIADAtQAFBDgeBYQgfBXgxBEQg2BLhIAqQgWANgQAAQgLAAgJgGgA9zP2QgTgHgXgeQhEhYgfhlQgahTADhTQABgcAEgXQAQhtBKh2QBnilCHgsQAPgGANACQAQABAGALQAEAHgCAJQgBAJgGAHQgHAIgUALQhSAsgkAjQgZAXgbAnQhNBughCGQgKArACAcQAAATAHAaQAlClBPBUQAOAPAFAIQAIAPgDAMQgDANgPAGQgIADgHAAQgHAAgGgCgAsgJbQglgBgGgVQgEgQASgLQAOgKAWgDQCngcCShRQCXhTBnh/QBqiDArijQAsiogjigQgUhegyhlQhnjTiwiRQi6iZjZgkIgbgFQgPgEgJgIQgLgKgBgOQgCgQAKgIQALgIAXADQCdAWCVBPQCOBMB0B3QBYBaA/BpQBBBtAjB0QAiB5AAB8QABB/gkB0QhBDJirCeQiiCUjXBJQhaAdg+AAIgIAAgA9TB8QgPgKgRggQh1jhgQjJQgKiDAfiBQAfiCBFhvQBEhwBlhXQBlhWB5gzQC/hPDwAIQBTACAvASQANAGAHAIQAIALgGAJQgFAIgUAAQiTgChcAIQiDAKhmAiQhoAihbA/QhbA+hFBVQhRBhguB5QgtB5gGB/QgFB/AjB8QAkB8BHBpQAiAygXAXQgIAJgPAAQgOAAgLgIgAYPqRQgfgUgXgdQgmgxgSg8QgliRBWh2QAvhCBIgjQAVgJAPACQAOACAJALQAJALgDAMQgCAKgLAHQgGAFgPAHQgQAHgPAKQiHBeAiCiQAEARAFAQQA6CLCaALQBlAEBPg9QAVgRAWgZQATgUALgGQAJgFAKABQALAAAIAGQAIAGACAMQABAKgEALQgFANgVAVQgdAdgRAPQgYAVgWANQhTAohQAAQhjAAhgg8gAfftIQgJgHgCgPQgBgJABgTQAEgygRgxQgRgxgjglQgjglgwgUQgwgUgyABIgWgBQgMgBgGgHQgHgIABgNQACgMAJgIQAOgMAcgCQAqgCAtANQAxAPArAfQArAeAdAqQAeAqAPAyQAOAzgEAzQgDAegLAOQgIAKgMACIgHABQgIAAgHgFg");
	this.shape_1.setTransform(-472.397,-313.0242);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhWS+QjOgLi+hKQjEhLiXiDQhCg6gtg7Qgrg4gmhPQgXgvgohiQgXg5gKgdQgPgwgDgpQgCgcAMgJQAIgHANADQALADAIAJQAKAMAHAdQAOAzAZA9QAOAkAiBJQAeBBAPAcQAaAzAbAkQA0BHBZBFQCNBtCwA+QCrA9C3AJQCxAIC1goQCwgoCkhSQAVgKAJgDQASgGAOACQAQADAKAPQALAPgIAOQgFAIgQAIQi5BfjEAuQinAmiiAAQglAAgkgCgAMJOvQgKgEgEgMQgDgMADgLQAEgOAWgXQBmhuBIh9QBMiEAkiKQAMguAHgsQAUh2gJh0QgJh3gohsQgKgagIgLIgMgNQgHgJgCgHQgFgSARgPQASgOASAHQAVAIAPAiQBNCigIDpQgKEEhlDFQgoBOhCBYQgnA0hUBlQgXAcgTAAQgGAAgFgDgAxxD2QgQgDgJgNQgMgQgBgoQgDizAZiQQAeisBHiFQA9hxB2iBQBRhZBDgwQBIg1BkgoQBKgeBwgfQCPgnBdgFQCPgICIA0QAdALAKAPQAHAKgCANQgCAOgKAEQgLAFgXgIQiOg0i9AVQkGAdjbCSQjkCXhqDlQgoBVgZBjQg1DMAPDSQACAdgKALQgIAIgLAAIgHgBgAKpj9QhRgJhJglQg1gbhAgzQhFg3ghgyQgthAgThcQgVhoARhmQARhqA5hUQA7hXBdgyQBhgyBlAGQAwAEBbAZQAdAIAMAKQAJAIADALQAEAMgFAJQgFAJgKAEQgJAFgLgBQgIgBgLgDIgTgIQhUgghcAOQhdAOhGA4Qg2AsglA/QgjA9gNBGQgOBGALBFQAKBFAhBAQAhA/AzAwQAmAjAyAeQA9AkA7AQQBTAXBWgRQBXgRBCg0QBAgzAnhPQAlhLAJhXQANiDg1hfQgPgbgngxQgXgdgPgOQgXgWgXgKIgVgIQgMgGgFgIQgKgPAMgSQAMgRATgCQAcgDAnAfQBDA2AtBEQAvBIARBPQAWBpgdB8QgWBfgqBEQgrBEhDAwQhDAwhPAUQgzANg1AAQgcAAgbgEg");
	this.shape_2.setTransform(572.0362,191.8088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AQFTDQgYgOASgyQCHlwgZlKQgOi3hAikQhDishziCQgWgagEgOQgDgNAEgMQAEgMALgFQAXgJAcAgQCgCzBREKQATA+AJA1QAIAuADA6QACAmABBCQACBSgBAoQgBBEgFA2QgKBegeBxQgTBFgrCFQgJAdgLAMQgIAIgLADIgIABQgIAAgGgEgAz5J0QgXgBgMgnQgghoAWiaQAlkJCQjnQCSjqDdiTQDfiUEPgqQERgqD+BMQCTAsDBBnQBNAqAtAiQBAAvAiA3QAQAbgBATQAAAOgIAKQgJALgMABQgOABgNgNQgIgIgLgSQgggyg3gtQgsgjhAglQjmiDkBgkQkKgmjyBLQk0BfjfEJQjaEDg6FFQgZCOAXBgQAIAhgCAOQgCAMgJAJQgIAJgLAAIgBAAgAOHneQg9gEgvgQQg5gTgugoQgugpgcg1QgPgfgIgdQgeheAHhiQADgxALgjQAVhEA1g5QAyg1BEggQAjgQAdgFQAbgFA2ACQAqABAbAEQAVAEAJAHQAGAFADAIQACAIgDAHQgHAMgXACIhHAEQgrADgcAGQhaAVg+BKQg/BLgEBbQgDA7AbBeQAMAsANAZQAUAkAkAbQAhAZArAOQBCAWBmgCQAugBAfgGQApgIAdgTQAagQAXgdQAQgUAWgkQAVglAHgUQAOglgBgyQAAgegIg6QgFgkgDgQQgHgdgJgVQgRglgfgbQgggbgngKIgRgFQgJgDgFgGQgLgLAHgSQAGgRAPgGQAZgKAmARQA4AZApAyQAoAyANA8QAFAXAEAiQAHBBABAhQABA2gKAqQgPBBgrA9QgjAygsAhQgxAlg2AKQgWAEgsABIgyAAQglAAgXgBg");
	this.shape_3.setTransform(-490.1813,216.1244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uni_bubble_stroke, new cjs.Rectangle(-679.6,-438.4,1369.3000000000002,776.8), null);


(lib.fish_tail_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEENwQg8gogdgVQgwgjgkggQgjgehOhTIj6kIQgYgagLgPQgTgXgIgXQgIgVgDgcQgBgSAAghQADiiASigQAMhlAVg4QAVg6Atg8QAhgrA6g8QCzi8DSimQAXgSAWgHQAbgHAQAPQAPAPgCAnQgEBYgiGsQgaE6AHDIQACBFANCvIAcFsQADAkgGARQgEAOgLAJQgLAJgNAAQgNAAgWgOg");
	this.shape.setTransform(0.0309,-0.0223);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_tail_fill, new cjs.Rectangle(-35,-89.4,70.1,178.8), null);


(lib.fish_shape2_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("APVbPQgvgMgXgPIgagQIpqmiQlljwkNilIhHgrIhqhAIp3mLQhuhMhghKQh/hhhmheQgPgOgHgLQgJgOACgOQADgQARgJIAEgCIAFgIQAMgQAXgQQBYg6BqhDQCyhxDjiKIINk/IB1hHQLWnCG/lpQAUgRAVgPIAQgMQAYgSAbgMQAigNAiAMQANAHAIANQALATAEAtQAqI8g9I4QCBiVCTiFQAvgrBhhTQAYgVAOgJQAXgOAVgCQAagDAXAOQAYAOAJAYQAGAPABAlQADDFgFBvQgIB/gDA/QgEBRABBwIACCUQABAMAAAPIgBAIIABAIQAAAPgBAMIgCCVQgBBvAEBRQADBAAIB+QAFBvgDDFQgBAlgGAPQgJAYgYAPQgXAOgagDQgVgDgXgOQgOgJgYgUQhhhTgvgrQi7ipidjAIAQDaQAoHwAKH7IgBAWQgIA0giAAQgGAAgIgCgAO7ZdIhKxzQgLimABhSQABhYAOiKQBAouAVkXQAjnFgnlSIgiAUIgTAMQmbE6oiFfQhjBAhiBBIALAIIBTA7QArAgBSBGQAfAbAIASQASAwg3BIQg9BOhKBEQgUASABANQABAKASAOIAcAUQArgaAwgbQA2geBVgrIDyh2QC0hRBTgLQBTgMALAjQALAjgRBAQgSA/g6BjIhBBuQgHAMAAAOQgBAQAKASQAGAKAyA/QAyA/AfBEQAeBEgbApQgKAOAIgNQg6BMiGA6QgfALA4BjQA4BkAVBPQAVBPgIAOQgJANgMALQgMAKgkABQgrABgugOQh3g2hxhBQi1hpiQiQIh2BrIDECkQAUARAJALQAOASAEASQAFAcgUAfQgOAWgeAcIhlBdQIjFcIbF1gAP4lGIgGAoIgXCfQgOBcgFBDQgJBuAECIIAIAIQALAKASAYQDpE1EyD1QAIizgGhgQgJhbgDgtQgEhJABh7IAAoIQgBh7AEhIQADguAJhaQAGhggIizQknDtjkEogAlbrKIhgA/IoNE1IhHAqInZEeIgFADQBCA6BOA9QB9BiCZBlIAeAUIIRFIIBqBBIDJB+ICKh6Ijbi2QgggbgGgTQgRg1BYhCQA1goA2gtQgzg6gug/QgxhIgWg+QgUg5AOglQAHgSAQgRQALgLAWgRQAggYAjgZIgjgbQhDgzAKgtQAEgQAPgQQAIgJAVgSQBhhPBLhqQhkhih0hLIgWgQIgQALgAIrnfQhGAdgtAVIifBSQivBZhTAvQiNBRhnBOQgZAUgEAOQgEAQAMAcQAOAhASAgQAzBSBEBCQD3D2EzCnQAlAOAbACQASADgLgiIiEkHQgKgTgEgOQgGgaAJgTQAIgRAWgMQAMgGAegLIARgGIAUgIQBPgaAvhCQADgZgfgrQgog5gbgeQgagegXgdQgTgagDghQgDghATgpQASgpAUgfQATggAuhkQAjhOgiAAQgKAAgPAGgAxJDGQg9g9AAhXQAAhVA9g+QA9g9BWAAQBWAAA+A9QA9A+AABVQAABXg9A9Qg+A9hWAAQhWAAg9g9gAuxDDQA7AAAqgqQAqgqAAg7QAAg6gqgqQgqgpg7AAQg7AAgqApQghAhgHAqQAIgYATgSQAhghAvAAQAwAAAgAhQAiAgAAAvQAAAvgiAhQggAhgwAAQghAAgagQQAnAiA2AAg");
	this.shape.setTransform(-0.0198,-0.0349);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_shape2_stroke, new cjs.Rectangle(-163.2,-174.5,326.4,349), null);


(lib.fish_shape1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("APVbPQgvgMgXgPIgagQIpqmiQlljwkNilIhHgrIj8iYQjFh3h7hPQjOiEilh/Qh/hhhmheQgPgOgHgLQgJgOACgOQADgQARgJIAEgCIAFgIQAMgQAXgQQBYg6BqhDQC5h1DuiRIGij9IDOh+QLWnCG/lpQAUgRAVgPIAQgMQAYgSAbgMQAigNAiAMQANAHAIANQALATAEAtQAqI8g9I4QCBiVCTiFQAvgrBhhTQAYgVAOgJQAXgOAVgCQAagDAXAOQAYAOAJAYQAGAPABAlQADDFgFBvQgIB/gDA/QgEBRABBwIACCUQABAMAAAPIgBAIIABAIQAAAPgBAMIgCCVQgBBvAEBRQADBAAIB+QAFBvgDDFQgBAlgGAPQgJAYgYAPQgXAOgagDQgVgDgXgOQgOgJgYgUQhhhTgvgrQi7ipidjAIAQDaQAoHwAKH7IgBAWQgIA0giAAQgGAAgIgCgAO7ZdIhKxzQgLimABhSQABhYAOiKQBAouAVkXQAjnFgnlSIgiAUIgTAMQmbE6oiFfIhHAuQAdAYAUAlQAbAxAEA8QAGBcgxCEIgUA5QgKAgABAaQAAAfAOAmIAHARQBzhQB7hGQAxgbAygZICVhJQBsgzBvAnQAgAQAXAhQAaAkAHArQAMBOgsBZQgRAigcAnQgSAagjAqQgQAUgHANQgFAKgCAKQgDASAHAPQAIAUANATQBDBfgSB1QgEAdgSAaQgvBEhPAhIANAaQAxBtgFB3QgCBEgfAgQgRASghAMQgwAShOgXQiRgqh2heQhEg3g7g9QAUBWgGBVQgHBmgqBWQgQAggTASQImFeIfF3gAP4lGIgGAoIgXCfQgOBcgFBDQgJBuAECIIAIAIQALAKASAYQDpE1EyD1QAIizgGhgQgJhbgDgtQgEhJABh7IAAoIQgBh7AEhIQADguAJhaQAGhggIizQknDtjkEogAkMsEIiiBlIlADGIkhCtInZEeIgFADQBCA6BOA9QB9BiCZBlQBUA4DAB3IgBACICwBpIDWCDIDKB/IANgaQA8hvAChVQABgwgahmQgWhXABgzQhYh+g6iUQgFgkAHggQAMhFA+g+QAQgRAbgVIA/gsIgTgxQgMgjgDgcQgHg9AmhmQAth1AEgwQAEg2gSg1QgNgngYgfIhkA/gAIdnrQh2AShsA0QklCWj4DZQgXAegGAfQgGAbAGAdQAfBSAyBKQC+EhEyCiQAwAQAegPQATgJAMgUQAMgSADgXQAFgjgQgzQgPg1gagzQgNgagEgLQgHgWAEgRQAIgjAvgWIAmgQQAVgKANgLQAVgSAJgdQAIgbgDgdQgFgvgkg5QgbgqgHgPIAAgBQgPgiAHgcQACgLAHgLIAIgNIAbgeQBFhMAnheQAXg1gCglQgBgQgFgOQgTgzguAAIgOABgAxJDGQg9g9AAhXQAAhVA9g+QA9g9BWAAQBWAAA+A9QA9A+AABVQAABXg9A9Qg+A9hWAAQhWAAg9g9gAuxDDQA7AAAqgqQAqgqAAg7QAAg6gqgqQgqgpg7AAQg7AAgqApQghAhgHAqQAIgYATgSQAhghAvAAQAwAAAgAhQAiAgAAAvQAAAvgiAhQggAhgwAAQghAAgagQQAnAiA2AAg");
	this.shape.setTransform(-0.0198,-0.0349);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_shape1_stroke, new cjs.Rectangle(-163.2,-174.5,326.4,349), null);


(lib.fish_head2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJMM+IgBABQrpmApqoAIT5r/QAJgBAGAEQAEADACAEQAJAEAMAHQAbATAsAkICOB1QASAPAEAKQAIASgKAWQgGANgSATIg2A+QgVAXgJALQgQAVghAxQgeAtgSAXIATAMQAXAPAnAeQAVAPAAAOQAAALgLAHQgIAGgLABIgLAJQgvAigNANQggAfgIAiQgKApAaBAQALAaAKAQQALARAVAYIBGBOIAMAQIAAAAQAJAEAEAKQAEAJgDAKQgDAIgLAMIhrBxIgwA2QAtAkA4AzQA4A0BFBFQAQAPAEANQADAQgKARQgFAHgSASIhhBaQgWAUgOACIgFABQgHAAgHgDgAj6h/QgyAyAABHQAABGAyAyQAyAyBGAAQBHAAAygyQAxgyAAhGQAAhHgxgyQgygyhHAAQhGAAgyAyg");
	this.shape.setTransform(21.9404,2.5043);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_head2_fill, new cjs.Rectangle(-55.8,-80.7,155.5,166.5), null);


(lib.fish_head1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI/NpQyzrGhwi2IGNj5IFijpIJel2IAUABIAPALIACACQA2A9AVBSQAVBRgQBPQgGAdgPAtQgTA3gFARQgZBaAbA8IAPAhQAIAUgEAPQgFARgTANIgkAUQgnAVgbAlQgcAkgJArQgUBdBCB+QASAiAnBCQAhA7APAtQAPAuAJBBQALBUgGBAQgIBQgiA7QgcAxgnALQgJACgKAAQgMAAgMgDgAjlhRQgyAyAABGQAABHAyAyQAyAyBGAAQBHAAAxgyQAygyAAhHQAAhGgygyQgxgyhHAAQhGAAgyAyg");
	this.shape.setTransform(19.838,-2.0852);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_head1_fill, new cjs.Rectangle(-54.2,-89.7,148.2,175.3), null);


(lib.fish_fin2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEOJkIgSgHQiChJh6hTQkfjDiukqIgCgGQgKgaAEgeQAFgeAQgYIAJgLQAXgZAegSQBEgqBFgkQA2gcA2gdIBsg8IBtg8IB/hCIASgJQBRgoBEgaQA/gZAaAcQAUAXgNAyQgRA8giBFQgWArgvBPQgXAngPAVQAbAYAkAuQAqA0ASAdQAdAvAIArQAGAcgGAXQgIAcgfAcQgYAWgtAcQg/AogtASIgPAGQA8BXAsBlQATApAJAfQALAoABAjQAAAVgHAKQgJANgWADQgKACgKAAQgZAAgcgLg");
	this.shape.setTransform(25.3742,0.2161);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_fin2_fill, new cjs.Rectangle(-21.7,-62,94.2,124.5), null);


(lib.fish_fin1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWHQQlpkAgYkvQDCkYHXjGQHXjGlJJYQBgDHgoBeQgnBdhjAdQBQCngeCaQgLA6g6AAQhgAAjhifg");
	this.shape.setTransform(23.9028,0.6382);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_fin1_fill, new cjs.Rectangle(-23.2,-61.6,94.3,124.6), null);


(lib.fish_eyecolor_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBIQgegeAAgqQAAgpAegeQAdgdApAAQAqAAAeAdQAdAeAAApQAAAqgdAeQgeAdgqAAQgpAAgdgdg");
	this.shape.setTransform(-0.0376,-0.0115,1.6102,1.6102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_eyecolor_fill, new cjs.Rectangle(-16.3,-16.2,32.6,32.5), null);


(lib.fish_body2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIyaHIxGrjIgKgJQgEgEgCgFQgDgJABgJQAAgGAEgGQAGgIAIgGQBOhJBDhOQgdgbgcgeQhIhNhRhCQgWgSgEgcQgCgIAEgGQALgRAPgQQAsgvA4gfQASgKATgDQAHACAGADQAGADAEAEIALALIAoAlQAwArAyAqQAhAcAjAaIBpBQQCDBiBxAWQA6AKAKgLQALgMACgQQAGgmgOglQgth7hChwQgJgQgCgSQgEgfAegOQA3gWA1gbQAxgaAdguQADgFgBgHQgBgqgUgoQgzhmhEhfIgLgOQgdgeAWgkQBChyA7h3QARghAAglQAAg2gygGQgGgBgGABQiuApihBQQhrA1hpA6Qg5AhgwArQgYAWgfAOQggAMgagZIgPgPIgKgIQgFgGgEgGQgFgIgBgJQgBgJABgIQACgIAEgIIAKgOQBfhuBdhnIgOgOIgwgsIhGhAQgagYgdgUQg2gkgcg4QgBgRAOgMIBQg9ICNhsICPhqICPhoICQhnICShkICThkICShkQBEguBEgoQAagOASATQAEAEABAGQAQBwABByQABB3gCB3QgIGOgpGNIgOCTIgMCMQgwKLArKMIAEA0IAIBeIAFA+IADAlIACAhIABAdQAAANALBlQAIBIgaAAQgKAAgQgLg");
	this.shape.setTransform(22.8346,-2.0599);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_body2_fill, new cjs.Rectangle(-42.4,-170.3,130.6,336.5), null);


(lib.fish_body1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHzaEQiPhViOhdQhjhChhhBQhfhBhdhDQjNiSjKiZQgngdAcgqQAmg5AUhEQAUhHgDhLQgDhBgQg+QgFgWASgHQAHgCAGADQAkAWAaAgQAYAdAaAcQApAtAyAkQA2AmA7AdQAlARAnAPQAzAVA3gBIAKgLQAsgjAHg6QADgegCgeQgFhZgkhQQgJgTgDgTQgEgaAXgKQA6gbAngxQANgRAHgTQAihZgphaQgOgdgSgZQgYghAFgiQACgVAPgMQAmgfAagoQARgcAPgcQAhhAAFhJQAEhCgjg5Qgzgfg8ALQhMAMhGAXQhvAmhnA6QhlA6hfBDQgSAMgSACQghgFgQgfQgcg1AJg9QAQh0AhhvQAjh5hShdQgTgVANgYQALgWAVgQIB8hbQBchDBbhEICph8QBfhHBmhAIC+h4QBhg8BZhGQANgLAPgFQAjgJAOAjQARAsABAvQAEC6gPC6QgtJLgdJMQgLDpgDDqQgGGKAuGHQAKBYAGBYQAFBJgCBIQgBAjgIAjQgGAbgUANIgCAAQgNAAgLgHg");
	this.shape.setTransform(28.524,-2.0747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_body1_fill, new cjs.Rectangle(-31.5,-169.5,120.1,334.9), null);


(lib.fish_bg2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhqkAhSMAAAgrRQCOg/CQg3QFQiCFahjQFuhpF0hOQF0hLF6gxQFrgtFwgTQFngSFkALQFhALFfAkQFjAhFiA0QFnA1FlBHQFpBHFrBLQFqBLFwA0QFwA0F0AfQF1AgF3AKQF2AKF1gcQF0gbFyg7QF0g9FthdQF4hgFyh8QFxh+FdisQFVipE6jYQCrh3CYiLMAAABCjg");
	this.shape.setTransform(0.025,74.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_bg2_fill, new cjs.Rectangle(-682,-138.9,1364.1,426), null);


(lib.fish_bg1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehqkgs8MDVJAAAMAAABCoQiYCLirB2Qk6DZlVCoQldCtlxB9QlyB9l4BgQltBcl0A+QlyA7l0AbQl1Acl2gKQl3gLl1gfQl0gflwg0Qlwg0lqhLQlrhMlphGQllhIlng1QligzljghQlfgklhgLQlkgLlnASQlwASlrAuQl6Awl0BMQl0BOluBpQlaBjlQCBQiQA4iOA+g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_bg1_fill, new cjs.Rectangle(-682,-287.7,1364.1,575.5), null);


(lib.fish_bg_line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhsNANLQBnhqCfhTQBxg7C6hEQUcnbXvg0QVLgtXNEiQB7AYGaBWQFJBGDMAkQIuBlI7AoQSpBXROjAQStjPPtoKQCnhWB+hNQCZhfB6hiQAigbBxhhQBbhOA7grQAlgbATAOQAOAKgGAVQgEARgOATQiwDpkXDHQjfCflECgQvtHuycDBQxFCzyUhaQoCgon9haQi+ghkig8InfhiQsRibrShEQsahLrjAcQsbAfrnCVQsUCdrFEhQhqArg3ANQgyANgsAAQgkAAgfgJg");
	this.shape.setTransform(-508.9,33,1,1,0,0,0,-508.9,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish_bg_line, new cjs.Rectangle(-692.6,-85.2,1385.2,170.4), null);


(lib.food_line2_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ehi0AOYQhngVjVg6QjPg5hsgVQiwgiiQAHQhEAChlAOIipAYQjJAYiCglQDOh0EagLQDfgIEkA6QFRBMCpAeQElA2DYgSQFRgbG4jkQBHglEpilQDih+CShCQC8hWCfgkQDCgrCoAbQCtAcDhB/QD4CZCABCQETCME5AnQE4AoEthDQCpglE0h1QE/h5CegmQEthHE5AdQE5AdEbB+QAwAVEwCgQDUBwCWAoQC7AyDwgJQCZgFEXgoQE8gtCpgsQEJhEC3h4QBag6DejEQC+inCGhDQEDiBFYAsQEYAjFICTQBiAtC6BdQDBBgBbAqQFPCbECAmQFEAwFPhiQFDhfENjSQEBjHC/kiQC1kUBolIQAVBughCAQgaBnhAB8QiTEhjjDmQjnDskcCNQkiCSlEAjQlKAkkyhWQi6g0j6h7QkXiSiOhEQlJidkfgpQldgykLB+QiDA/i1CZQjlDChGAvQjDCFkPBPQjPA8ksAqQkZAmjHgBQkGgBjShAQiRgsjjh3QkNiLhigoQj3hkkMgWQkOgWkEA6QiiAkkiBuQkyB0iQAlQl7BgmNg6QmNg5lQjJQhig7jFh/QivhkiQgRQiTgRiyA5QhxAljEBhIrpFwQkXCKiZA4Qj2BajRAFIgeAAQiEAAieggg");
	this.shape.setTransform(0.0371,-0.0047);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_line2_stroke, new cjs.Rectangle(-794.4,-95.2,1588.9,190.4), null);


(lib.food_line2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhzxAnoMAAAhCQIB9gSQBmgOBEgCQCQgHCvAiQBtAVDPA5QDVA6BnAVQCwAkCPgEQDSgFD2haQCZg4EXiKILplwQDEhhBxglQCyg5CTARQCQARCuBkQDFB/BjA7QFQDJGNA5QGMA6F8hgQCPglEzh0QEihuCigkQEEg6EOAWQEMAWD2BkQBiAoEOCLQDjB3CRAsQDRBAEHABQDHABEYgmQEtgqDPg8QEOhPDEiFQBFgvDljCQC2iZCDg/QELh/FdAyQEeApFKCeQCOBEEXCSQD5B7C6A0QEzBWFKgkQFEgjEhiSQCghPCQhuMAAABK1g");
	this.shape.setTransform(0,0.0188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_line2_fill, new cjs.Rectangle(-740.9,-253.5,1481.9,507.1), null);


(lib.food_line1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGFjQh9gpi0hEIkvh0QlviIj9gsQjdgmjiAJQjiAJjZA3Qi+AvlYCLQlnCSiuAwQlpBkl8gVQl8gTldiJQiDg0kDh2QjmhiitgTQjmgZktBWQiuAzlYCAQksBljxAFQkuAGjJiTQD7AvEBgMQEAgND0hIQBggcCag5QC/hGA6gSQEohjDVAJQDHAJEJBrQEqCHCXA5QFfCFF+AOQF9AOFphsQCbguE3iBQEvh8CkgvQDhhADrgPQDrgPDoAjQEZAqGhCYIFWB/QDIBKCQArQIcChIBgmQI4goGkkXQBTg3BxhZIC/iZQDoi1C0hBQEMhiFLA4QETAvE2CZQBxA3CfBZIEMCWQFGCzDnBLQESBaEqADQEkADEdhPQEchPD5iYQD+icC9jZQA4hBAigaQA4grA3AEQi8E0kzDaQksDYlmBcQlcBZl2ghQlsgglWiQQiwhKkvisQlHi5iWhEQkPh9j4giQkigpjtBYQirBAjWCpQjqDEh8BWQnFE7pwAoQhZAFhYAAQneAAnwigg");
	this.shape.setTransform(-0.025,0.0106);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_line1_stroke, new cjs.Rectangle(-754.8,-51.5,1509.6,103.1), null);


(lib.food_line1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABVYpQiPgrjJhJIlWiAQmhiZkZgqQjngijsAOQjrAPjhBAQijAvkwB+Qk3CBibAuQlpBrl9gOQl9gOlgiFQiXg5kpiHQkKhrjHgJQjVgJknBiQg7AUi+BGQibA5hgAcQjzBHkBANQiyAJiwgUMAAAgybMDnjAAAMAAAAoWQggAbgvA2Qi9Daj+CcQj5CYkcBPQkdBPkjgDQkrgDkShZQjnhLlGi0IkMiWQifhahxg3Qk2iYkTgwQlLg4kLBiQi1BCjnC1Ii/CZQhyBahSA3QmlEWo3ApQhhAHhiAAQmlAAm2iDg");
	this.shape.setTransform(0,0.0042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_line1_fill, new cjs.Rectangle(-740.9,-170.8,1481.9,341.6), null);


(lib.wmelon_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag5VcQmIg5lFjmQiuh7iBihIgWgdQiEi6hsjIQgKgSgDgQQgEgXAOgMQAKgJAPABQAOABAMAJQAOAKARAhIAPAbIAYAqQBDBxBSBkQA8BKBDBDQEQESFnCKQFuCNF9hhQBEgRAzgZIAZgLQAPgGALgBQAPgBAMAGQAOAHAEAMQAGATgRASQgNAOhhAuQgpAUg4ARQicAuigAAQhWAAhVgNgAKkSaQgLgKAAgQQgBgQAJgNQAHgLANgLIAYgSIASgOIAighQA+g7A5hAQCJiZBWi7IAEgKQBEiQAaifQAskRg/kLIgKgkQhLkUixjiIgFgHIh8iWQh5iFiQhxQgwglg0gjIh2CdQghAtgcgNQgKgFgEgMQgFgLACgMQACgQARgZQA4hWBDhPQAXgcAUgFQAbgGAqAdQBeBDCFBrQAoAgAsArQCCCBByCQQDHD8BQE3QAaB4ABB7QADE2hsEhQhnD6jKC4QhPBOhjBRQgNAJgNAHQgVALgQAAQgPAAgLgJgAn2N6QgcgRgbgTIgagSQhQg6hLhAIgYgVQjGisigjTIgbgjQgPgTgLgCQgQgEgUAQIgaAYQgQANgOAFQgRAGgSgIQgSgIgBgRQgCgSAZgVQAvgpAxgcQAhgUAWAGQANADAMANIBtCUQBsCTEhD2QEhD1F+gGQDXgQCvhhIAYgOQCGhOBmh3IAegjQAmgiAZASQAKAHADAOQADANgDAUQgDAUgvA6QiBCLicBMQifBVjRAZQgoACgnAAQkfAAj2iVgANKJDQgQgCgKgPQgKgPAAgRQABgPAHgRIAOgfQA4htAZh5IADgPQAYiCgOiBIgDgXQgij+i0kHQhJhshsh6QhBhKiIiOQgSgVgDgLQgDgKADgJQADgKAJgEQAOgHAYARQBNA1BOBPQA9A+BLBcQB3CTBLB+QBcCbAqCVQAWBOAKBQQAMBtgLBxQgSDChWCrIgCACQgYAvgdAAIgDAAgAiyHVQgfgIgPgjQgEgQAAgjQABgjAEgSQAJggATgNQATgPAaAGQAaAFALAVQAJAMAFAgIAEAlQAEAtgRAWQgUAdggAAQgIAAgKgCgACbFCQgZgoADghQACgUAMgPQANgQARgEQAagDAXASQALAJAXAgQAMAPAEAPQANAdgNAeQgOAfghABIgFAAQgjAAgigxgAm0D4QghggAGgzQAEgkAggvQASgbARgJQAlgWAiAbQAdAUACAuQAAAcgMApQgPAtgWARQgTASgdAAQgdAAgUgSgAwwC6QgMgHgEgPQgDgNAEgOQAHgSAbgZQJso/JOpPQAogmAYARQAQAMgGAYQgGAUgmAtQgnAthABEQg/BEiCCFQmqHGnZGCQgcAbgWAAQgHAAgHgDgAgLBjQgggEgWgYQgUgSgPgiQgWgyAQgcQARgdAoAFQAaADAfAYQA8AqgGAyQgBAcgXATQgUAQgXAAIgGAAgAEwgHQgbgHgYgOQgmgTgIgYQgIgUAMgXQANgUAWgKQAmgQAyAUQA/AbAFAuQAEAXgQAVQgPAVgZACIgKAAQgQAAgUgHgACGj+QgsgIgRgOQgRgQgFgZQgDgaAKgWQAUgpA2gTQAigKAgAIQAiAHASAaQARAXgEAiQgDAggWAXQgTATgbAHQgOAEgTAAIgZgCg");
	this.shape.setTransform(4.5096,-2.9648);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wmelon_stroke, new cjs.Rectangle(-130.8,-141.5,270.70000000000005,277.1), null);


(lib.wmelon_out_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj1TmQgogOgngRQpKjrmDp0QAPg0CohrQEFFLDsDNQBGA9CyBqIAbAPQEtCFFIhDQCAgYBuhBQA2ggAxgsIA3gvQEXkBAfkzQAChPgHhbQgMiug8iiQhUjaimi+Ilal1IgWgdIC0jnQDUCPC4DaQDPECCAE0QBOC6AGDPIAFCCQAAAXgcDiQgbDjjKEJIgMAPQjGFolxBRQiKAeiGAAQjfAAjUhVg");
	this.shape.setTransform(-1.5496,0.3721);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wmelon_out_fill, new cjs.Rectangle(-131.3,-133.5,259.6,267.8), null);


(lib.wmelon_in_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikQRQl1iDkLkhQiUighwimQLYpYLIsTQE6E1DeGLQDcFVhiGOQhiGPljDVQjaCCjmAAQiRAAiYg0g");
	this.shape.setTransform(2.3036,-0.4518);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wmelon_in_fill, new cjs.Rectangle(-104.1,-109.7,212.89999999999998,218.60000000000002), null);


(lib.pizza_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AljM+QhAgBgwgpQgdgYgfgzQgUghgIgVQgJgagHgvQgEgaABgOQAAgSAFgUQAThNA3g6QAXgYATgGQAQgFASAEQARADAPAKQAGgaAagRQAXgPAegDQA0gGAxAZQAxAZAZAuQAHANAJAZQAdBLgCBRQAAAggLAeQg4CeilAdQgUADgRAAIgCAAgAmaGhIgmAfQgUAVgLAdQgLAcAAAeQAAA4AhA5QAVAnAdATQAXAOAdADQATACAUgEQA6gKAqgrQAUgVAKgbQAshvg7hsIgDgEQgUgdgegNQghgOgdALIgPAHQgKAFgGACQgVAGgLgMQgIARgXATgAFNGhQgUgBgTgEQglgIghgTQhAgkgbhGQgxiABShtQAYgcAhgXQAogeAkgIQAUgEAegBQAsgBAVAHQAQAFAMALQANAMAEAPQAEAPgIAQQgIAQgQADQgIACgJgDQgGgDgMgIQgLgHgQgBQgagEgbAJQgMAEgMAGQhEAogYBOQgOAwAYAvQAoBNBTgIQA6gIAsglQA7gwAAhFIAAgBIACglQACgVAJgLQAJgLAPgCQAPgCALAJQAMAJAEATQADAMgBAVIAAAPQAAAagHAYQgJAZgKAYQgTAwgjAmQhCBHhbAAIgFgBgAADkSQhKgOhIhGQg5g4gQg3QgIgcAAgsQAAhAAQgvQAPgsAggkQAegkApgXQAogXAvgJQAsgJAvAEQAfADAQAKQALAHAQATQALAOADALQACAOgKALQgLAMgOgBQgMgBgWgNQgNgFgeAAQgjgBgVAEQgfAGgeATQgXAOgTAYQgWAbgQAoQgIAUgEATQgDAXACASQACAhAPAcQAMAVASATQAtAyA3ATQBYAhBNgxQCRhYg2igIgIgYQgKgaABgNQACgPANgLQANgMAPABQAVAAAQAUQANAQAIAYQAFASADAWIAGAqQARB0hIBUQhjB1iOAAQgcAAgegFg");
	this.shape.setTransform(-26.3736,4.8757);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AwWWwQg2hNANgjQAKgXAbgHQAYgIAVANQATAOAmAkQAmAkAcgFQAdgIARgXQAQgRAvhVQAjhBApgWQAogVA0AIQAvALAmAgQAagcAjg4QAog7BNhUQBMhVDCifQC/ieDciXQDbiWBbg4QAsgcAWABQAVAAAPALQARAMgCATQABAYgmAYIl0EEQj8CsinCfQioCdgrA/QgrA8g3BXQg5BThDATQgnALgpgNQgqgPgPgiQg8B3ggAjQhIBOhiABIgDAAQhiAAgzhJgAw3UhQgjgFgQgmQgHgXgBgvQADlwAeleQAdlgBoo3QA1kZBTjyQAehcAbgJQASgEARALQAOAKAHATQAHASgHA1QiSHXhBGtQhBGogEEPQgHEOADEXQgCA9gIATQgWArgkAAIgEAAgAMnDbQg5gngFgvQgGgxgGgZIgKgfQghh+iMi9QiNi/i5iXQi7iYjQhpQjBhejRg2IhZgIQgpgKgOgGQgOgLgVgUQgUgXgJgaQgGgRgGgvQgMhtA1hWQAbgpAjgbQBOg/BgAAQBhACBkAMQE6AnEvCUQAQAIBGAtQBEAtBaBOQBZBQCiDFQCgDFBKC1QBKCzAaBuQAbBtghB4QgMAtgXAlQg3BIhUApQgsAUgjAAQgiAAgbgSgAn12IQhOAHguApQgvApgGA7QgIA6AUAhQARAcBMAEQD0A0DXBvQDCBiCrCIQC5CTCcCvQCVCoA6DcQAKAmAIAvQAGAtAnAVQAnASAygjQAxglAXgvQAUgwgIhKQgKhMgRg6QgSg7gnhhQgphghpioQhpirhvh5Qhuh9joiMQjmiNjdgfQiwgYhUAAQgWAAgPABg");
	this.shape_1.setTransform(0.0201,0.0257);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_stroke, new cjs.Rectangle(-113.9,-152.9,227.9,305.9), null);


(lib.pizza_pepperoni3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5C7QhOhOAAhtQAAhsBOhOQBNhNBsAAQBtAABNBNQBOBOAABsQAABthOBOQhNBNhtAAQhsAAhNhNg");
	this.shape.setTransform(1,-0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_pepperoni3, new cjs.Rectangle(-25.4,-26.8,52.8,52.8), null);


(lib.pizza_pepperoni2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilCmQhFhFAAhhQAAhgBFhFQBFhFBgAAQBhAABFBFQBFBFAABgQAABhhFBFQhFBFhhAAQhgAAhFhFg");
	this.shape.setTransform(1.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_pepperoni2, new cjs.Rectangle(-22.4,-24,47,47), null);


(lib.pizza_pepperoni1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMDNQhVhVgBh4QABh3BVhVQBVhWB3AAQB5AABUBWQBWBVAAB3QAAB4hWBVQhUBWh5AAQh3AAhVhWg");
	this.shape.setTransform(0.85,-1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_pepperoni1, new cjs.Rectangle(-28.2,-30.1,58.099999999999994,58.1), null);


(lib.pizza_crust_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ/MCQhMhPgOhuQgPhukRlNQkQlMpZiRQkqg4AMiLQANiMBehIQBdhKBkALQN6AaGpMgQBxDTA1DxQAzDwhuBGQgzAhgsAAQgyAAgogqg");
	this.shape.setTransform(0.0354,-0.0148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_crust_fill, new cjs.Rectangle(-89.9,-81.2,179.9,162.4), null);


(lib.pizza_cheese_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtFUCQiahkAem8QAem8BdpTQBdpUCYmXIAygBQVUGNCSOMQj5COifBjQk0C0jADVQi/DUh8C4Qh8B5hjhUQibDvh+AAQgoAAglgYg");
	this.shape.setTransform(-1.156,3.787);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pizza_cheese_fill, new cjs.Rectangle(-97.8,-126.7,193.39999999999998,261.1), null);


(lib.icecream2_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhBWAQgsgVgXgtQgTgngHghQg4jtAOkAIhGgIQjrgfgxgQQgxgQgaghQgcghgLhGQgejQgIjVQgJjWAJi3QAHi3AjgQQAjgQAPAlQAQAkAAAiIAKHaQAVF3AeBkQgFAyEWAeQEUAcDTgaID+ghQArgHASADQAoAHAJAhQAFAhgcAVQgRAQgsAOQgsAOj3AMQgCEFg8DMQgOA9gTAhQgeAxgxARQgZAJgWAAQgdAAgbgOgAhrPpQAIC0AeA/QAeA9AYAEQAWABAagdQAageAiiGQAhiJgHiYIgDglQhyABhvgHQgEBtAGBrgAI5J7QgRgSACgjQAAgQAKgrQAFgTAEgVQAMhKAAhuQAHl7gHjJIAAgFQgEhfgIhcQgHhRgJhOQgOhfgYh8QgZh9hiiMQhjiNifglQhwgehoAOQgYACgXADQgtALgsAXQigBQhMCbIgVAnQgdA5gTA/QgzCdgMClIgGAWQgDAUgLARQgKARglgBQgfgCgHhJQADihAliaQAQhAAXg/QA5iWBuhtQB1h1CcgkQAVgGAWgDQCAgMCQAjQCPAjBwBaQBvBbBBCHQA/CGAYCMQANBGAIBEQAJBQAFBPIAJC7QACAWAAAZQADCngFFPIgFDcIgCAaQgHBQgYAeQgSAYgfAGQgIACgIAAQgVAAgQgQgACJJ0QgNgKgFgXQgGgXgDgeQgNiZABiWQADipAujfQAFgTAHgUQAOgrASgUQAagjAkAHQAYAFAVAYQAhAnAUBrQAjC6AEC4QADCDgHBhQgJBfgJAPQgKAOgKgQQgMgQADhCQADhEgHjHQgJjHgYhzQgah1gagKQgZgLgRA0QgNApgKA5QgNBIgKCbQgKCXAEB1QAEB1ACAQQAAAagGATQgFAMgHAAQgDAAgEgEgAh9JsQgFgTAAgaQABgQAEh1QAFh1gKiXQgKibgNhIQgLg5gNgpQgRg0gYALQgaAKgaB1QgZBzgJDHQgHDHADBEQADBCgMAQQgKAQgKgOQgIgPgJhfQgHhhADiDQAEi4Aji6QAUhrAhgnQAUgYAZgFQAkgHAaAjQARAUAPArQAHAUAEATQAuDfADCpQACCWgNCZQgDAegGAXQgGAXgNAKQgEAEgDAAQgHAAgFgMg");
	this.shape.setTransform(-0.0069,0.0039);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream2_stroke, new cjs.Rectangle(-71.2,-142.2,142.4,284.4), null);


(lib.icecream2_stick_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMEEQgJgOgKgfIgchWQgOgmgCgTQACgwgCgYQgHgngCgVQgBgLAAg2IABhpQAAgYAGgKQALgZAdgFQATgHAfADICFAEIAmAFQAVAHAGAQQAEAHAAATIgEDoIgKBCIAAAtQgCAegVA0IgNAgQgJAbgOASQgcAmgxAAQgwAAgcgog");
	this.shape.setTransform(0,-0.0083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream2_stick_fill, new cjs.Rectangle(-15,-30,30,60), null);


(lib.icecream2_ice_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjKQNQiwgHjKhLQgPhjgLhjQgSingIinIgSlJQgHiDAMiDQAUizAqivQAmihBriZQBPhwBtg2QCmhFCwAjQCxAgB4CEQBwB6AsCfQAPA2AJA1IADASQA6FOAVIWQAUIXhxAyQkIA+kKAAQhyAAh0gMg");
	this.shape.setTransform(0.9184,-0.9701);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream2_ice_fill, new cjs.Rectangle(-64.4,-105.8,130.7,209.7), null);


(lib.icecream1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjSVTQhKgWgogSQgogUgKgeQgNghgLg7Ii4v2QgvgFhQgYQitgthFinQgyiAA4hyQA7hwBrgyIgFgYQgPhaAdh5QAWhVAghKQALgaALgTQBMiMB1hlQB/huCgg9QCcg6ClANQCNAQCCA0QBzAtBkBOQBcBFBKBWIAQASQBpCRAfCtQAbCTgvCSIgLAkQByBegWCdQgLBQgkBAQhTCFi/gHQgNgCgLAAQgdCKgeCvIgcCSQg4FJgOB3IgEAbQgFAqgFAWQgPAygdAdQgbAbgyAWQilBPiZANQgzAEgrAAQhUAAgxgPgAmpGrIBcHvIAzEaQAAAPAbAQQAbAQBBANQA/ALBogJQB0gLCZhJIAbgQIAQgOQANgNAmimQAkimA+lOQAeioAYhvQgPALgUAJQgvAWgwgJQgtgNgWAAQgQAAg+AWQhjAohwgJQhtgJhbg6QgXgRgQAAQgPAAg6AYQg5AWg8gfQg8ghgJgDQgCgCgHAAQASBuAfCdgAiIAjIAOAkQAKAUAiAkQAiAlBoAKQBnALAxgpQAvgqAggbQAhgUAbAQQAHAGASAXQAPAUAOACQAiAFAJg7QAIg4AXgLQAQgGAWAKQAOAHAYAQQAZAPAoAHQCUAkBBhqQBnifiHhxQgRgPgSgLIgSgLQgggOgIgUQgHgSAPgSQAMgSAUgEQAYgFAeAOQAShIAEhKQAJibhRiPIghg6QgVgggagdQg5hFhJgyQh8hHiIgtQiYgzifAYQiaAWiEBYQiHBchkCGQgQAXgOAaQgNAVgJAYQgQAigNAoQgrB+AOBcQBMgTBQADIAKACQAaAFASALQAmAZgLAlQgHAmg3ADQgSAAg0gLIgNAAQiNgBhPBxQgWAdgSAhQgdBVAsBfQAvBjBoAZQAYAHAZAEQAWgCAXAAQAkgFAdgUIAYgSQAOgLANgCQAfgFAyAwQAxAvAfgJQAVgFAbgtQAagpAXgDIAEAAQAhAAAVAmgAgPS6QgJgRANgQQAHgLAPgLIBihVQg1g7gwg+IgTAPIhtBcIAoA2IAHANQAGALgEAMQgEANgJAHQgSAHgUgHQgkgVgegvQgNABgLgHQgMgHgCgNQgCgLALgOIgjg9Qgeg+AJgJQAJgLAOAAQALAAAFAEIARANIA6BPQA/gxBBg2Qg+hTg2hZIgvAqQgZAUgLADQgdAIgLgUQgHgQAJgRQAEgHASgSIA9g4QgxhVgphYQgbATgSAGQgaADgJgOQgJgLAGgLQAWgkAbgeIgbg8QgKgWgFgSQgFgOABgRQAEgSAPgDQATgEARAhQAQAmASAmQACgEADgCQA1gxAggVQAIgEAHAAQAQAEAFAQQACACAAADQAHAPgtA2QgbAigZAbQArBVAzBSQAtgvAvg4IAggmIgVg1IgCgFIgHgQQgNgdANgLQAOgPAQAPQAEACACADIAhA8IAHgJQAvg4AlgiQAXgUANgGQAZgLALAPQALALgIAOIgOAYIhyCJQBQCEAvA9QAwgyAvg4QARgNAJgCQASgDAJAMQAFALgMAWQgzBBg0A/IAXAfIACACIAQAbQAHASgHALQgQAZghgSIgFgCIgHgJIgdghQg4A8g8A4QAxA8A0A7IBXhWIAYgPQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAWgHAJAUQAJAQgUAbIgFAJIhSBXQANALANANQAeAbgCAVQgBARgSAJQgRAHgSgEQgUgFgcgbQgGgIgHgFQg8A0g7AoIgLAEQgKAEgJAAQgMAAgIgLgAgNJFIhRBcQA4BZBBBUQA6g2A6g6QhGhagzhpgAFfIWQgdgCgSgvQgUgvgYgxQgXgyAAghQAHgVASABQASACAIAHQAHAGAdArQAbAsAiBxIAAAEQgFAdgaAAIgDAAg");
	this.shape.setTransform(-0.0261,0.0171);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream1_stroke, new cjs.Rectangle(-97.6,-137.7,195.2,275.5), null);


(lib.icecream1_scoop_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTJOQiPBzh+h2QklB1iWk8IgFgNQgRjnDIhFQANlnD7j1QCsipDtgZQDVgYDMBLQDHBOCWC7QDADvhYEkIAKAIQDhDIi9DnQhcBxiIgXQjwBohEheQgyAhhwAXQgxALgtAAQijAAhkiMg");
	this.shape.setTransform(-1.7175,-0.4717);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream1_scoop_fill, new cjs.Rectangle(-94.7,-73.4,186,145.9), null);


(lib.icecream1_cone_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkbI/QgdgOgPgkQh+lPg8ldQgijQAGjQQAAgVAZgPQAZgSAfgLQHlClIDgmQAFgEgEAQQhBGIg4GCQgUCNhdBuQijBxinAAQiBAAiDhCg");
	this.shape.setTransform(0.0088,0.0289);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream1_cone_fill, new cjs.Rectangle(-54.3,-64,108.6,128.1), null);


(lib.dino_pwing_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKHZQmXnJpPgeQLQoHRpgNQk1GtBsGWQiZBiiECgQi2hHi3gDg");
	this.shape.setTransform(-4.4,2.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pwing_fill, new cjs.Rectangle(-96.9,-51.8,185,109.3), null);


(lib.dino_pteranodon_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjmDnQhfhgAAiHQAAiGBfhfQBghgCGAAQCHAABfBgQBgBfAACGQAACHhgBgQhfBfiHAAQiGAAhghfgAhIi5QgbAbAAAmQAAAmAbAbQAaAbAnAAQAlAAAbgbQAbgbAAgmQAAgmgbgbQgbgbglAAQgnAAgaAbg");
	this.shape.setTransform(191.45,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AHJJBQgMgCgfgKIgTgFQh9gbh8AAIgggwIgogUQABgUgGgMQCLgJCMASIAvAKIATAHIAZAJQAOAEAMgCQANgDAMgKQAIgHANgQIAXgbQB7hyCJhVIAAADQAJA3AQAtQhBAsg+AzQhSBEhMBNIgJAIQgNALgLAEQgMAEgOAAIgSgBgAu5ghQByhZCYhRQFHivGJheQFnhWGXgQQBQgDBLAAIgJA1IgpA2QhJAChTAFQkbASjqAoQkQAvjmBRQkBBajVCGQgyAggwAgQg7gSg3gag");
	this.shape_1.setTransform(-23.95,-31.4863);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AggFQQgRgJgRgiQg4hshJhaQgngwhWhaIhIhMIgvgxQgVgUgUgOQA/gFA9gYQAdAdAwA0IBJBQQBBBGAeAlQAzA9AgA3QAHgOAEglQADghAMgOQAPgUAhAAQAZAAAgAMQA4AVA5AcIgBh9QgBggAJgQQATgiBKADQhwhwiKhGQA4gWA3gcQAvAbApAeQB5BYBJBwQAQAYAFAWQAFAcgQAOQgPAQgngCQg2gDgwgQIAACXQAAAngOAQQgaAdhDgeIiEg9QAHA+gSA8QgMAogVASQgNAMgRAEIgKABQgMAAgKgFg");
	this.shape_2.setTransform(-74.1265,181.6182);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AApJlQgUgJgNgYQgHgOgLghQgjhohDhZQhDhYhag+QgVgOgHgHQgPgNgEgPQgDgOAFgOQAGgOAMgIQAfgTA0AfQAnAXApAnQAcAbAqAvQAlAqAQAYQAQAYAZAyQAbA0APAXQAJgUAVgLQAVgKAXABQAkADAsAfIAlAaQAVAOARAIQANgPAJgtQAIgrARgPQAUgSAyAAQg4hWhOhGQgfgcgLgQQgVgdAHgcQADgQANgKQANgLAOACQALABALAHQAGAEAMALIA9A8QAnAlATAUQAfAhATAeQAYAmAWA3QAOAngBAYQAAARgIAOQgIAPgOAHQgRAJgcgFIgvgIIgOAvQgKAjgLASQgQAcgXAJQgoAQgzglIgmgeQgWgSgSgIQgKgGgIADQgIADgGARQgNAjgaASQgOAJgRACIgJABQgMAAgLgFgAlXBKQgSgCgRgMQgOgLgOgQQg6hIgghWQgjhdgIhiQgEg6ASg4QAKgcAQgaQAQgbAUgZQALgMAKgKQArgoA/gNQA7gNA9AOQBtAaBbBlQAkApAkA3QAZAoAjBAIB+DwQALAWADANQAEATgHAPQgKARgXADQgWADgSgLQgPgKgOgTQgIgMgMgYIhhjDQgrhWglg0QgzhHg6gpQgxgigwgIQg5gLgtAcQgJAFgIAHQhLBGAMBiQALBiAkBbQAVAzAeAtQAPAYAGANQAUAngRAUQgJALgQAAIgGgBg");
	this.shape_3.setTransform(-171.8408,154.8025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("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");
	this.shape_4.setTransform(0.0026,-27.244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pteranodon_stroke, new cjs.Rectangle(-439.3,-216.6,878.6,433.2), null);


(lib.dino_pfeet2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmejLIHphkIFUE1IiggJIgQDnIjvhtIgWC5g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pfeet2_fill, new cjs.Rectangle(-41.5,-30.3,83,60.7), null);


(lib.dino_pfeet1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACMHsIhVBTQikkziuiUQjDikgOjnQgPjmCeg2QCdg1B8CEQB6CEBfDLQAaA3AeA4IBaB3QDODqgGBgQgqAwhEgmQgSB1gqAhQg6gMh/hHg");
	this.shape.setTransform(-0.0016,0.0196);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pfeet1_fill, new cjs.Rectangle(-49.4,-57.5,98.9,115.1), null);


(lib.dino_peyeshine_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSBTQgigjAAgwQAAgvAigiQAigjAwABQAwgBAjAjQAiAiAAAvQAAAwgiAjQgjAigwAAQgwAAgigig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_peyeshine_fill, new cjs.Rectangle(-11.7,-11.6,23.4,23.299999999999997), null);


(lib.dino_pbody_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnJc/Qi+AAi4gvIgLgZQhJitgWgsQgvhegwhFQhVh6hfgdQipgxh0B2QgRAQgPASIgIAMIgPAUIgHgEQlOjziEmJIgQgtIAAgBIgVgLQj6iDkRhGQkGhDkLg2QjdgtjjgFQhphwGHi9QFUijGShmQK1jILIB1QGRBBFNDtQA6gEA8AEIAuAFQDzAiDWB9QDTB7CDDOQAYAlAVAnQAOAeAKAfIAUAKQFlDWEbk2IAKgNIAIgMQhkjIgGjkQgHjoBPjbIAOgkQAXg6Afg4QAag1AcguIABgCQgugyhAgtQg/gshcgvQkMiIkng5IhogUIgigJQjOg2BHiuQAUgxAggtQBqiGCfhTIAqgVQDJhjDXg+QClguCrgXQJShKIXEGQAqAVAnAYIAMAHQH1gwDwBfQDwBfglAtQgCAEgFACIgSAKQhjAzhRBZQhMBUgzBsQhXC3gTEHQgMCjAPCjQAPCCAFBAQAIBwgOBRQgdCuiICTQh6CFi1BTQiYBGioAbQinAaingTIABAIQAXBrA0BiIAAACQhYgbhUgHQhBgFgbAJQhVBDhNA2QnGFNoBieQmbJ9r5AAIgFAAgEAlTgBMQhYBXAAB+QAAB9BYBZQBZBYB9AAQB+AABYhYQBZhZAAh9QAAh+hZhXQhYhZh+AAQh9AAhZBZgA35W8IACgEIgGAbIAEgXg");
	this.shape.setTransform(9.1398,-0.8374);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pbody_fill, new cjs.Rectangle(-349.3,-186.3,717,371), null);


(lib.dino_pbeak_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzfSVQhTgxg9hOQiMiwCKgEQC2gHB6gXQC9giCChEQCChDBah6QBah7Abh5QAch5AHhdQAFhCABhmIADlJQAHi7Ali9QAki+BThvQBUhuBfg4QAkgWBPAYQKiEZGYJeQGbJhiCKQQgNDllMgIQlLgJpdBCQpbBBkjASQgpACgoAAQjwAAi2hbg");
	this.shape.setTransform(1.4731,-3.0319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_pbeak_fill, new cjs.Rectangle(-144.7,-129.4,292.4,252.8), null);


(lib.dino_volcano2_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AITS1QgRgpgZhcQgYhYgTgsQgOghgZgoIgshFQhTiHhBiSQgag+gKgUQgWgtgZgfQgTgZgogkQgtgqgQgSQgvg2gkhTIgOglQgPAlgcAoQgTAcgpA1QgkAwgRAlQgOAcgMAqIgUBIQgbBegkA8QgSAfghArIg3BJQgZAjgdAyIgxBZQgwBYhRCGQgbgKgigLQATgfAhgwQAqg/ATggQAOgZAlhIQAfg9AWgiQAOgXBAhUQAyhBAWguQAVgqAdhmQAbhhAagvQAHgMBWh1QA5hNAHg9IADgVIAAgDIgEgPQgMgpAUgLQAIgFAKADQAJACAHAHQAIAJAIAYIAaBNQAQAwAJAXQAPAnATAdQAWAgAtAsQA4A3APARQA0A8AyBsIBUC0QAPAeBLB4QA5BcAYA/QANAhATBEQATBGAMAgQANAgAfBCIACADIgTACQgbAEgTAAIgcg5gAQ0RzQhohGgogtQgVgXgYgjIgqg9QgVgfhkiAQhLhhglhEIgphPQgZgvgXgdQgMgPgkgmQggghgOgWQgOgWgUguQgUgvgNgVQgTgdglglIg+g9QgPgRgDgLQgCgIADgIQADgJAHgCQAOgHAWARQBaBJA5BmIAeA6QASAiAPAWQAOAUAdAgQAgAkAMAPQAYAgAcA0IAwBZQAlBABSBmQBbBzAgAxIAdArQAQAZAPAQQATAUAeAWIA1AkQBiBCBTBLQgkAHgkAFQgogkhDgtgAzlO+IgBAAQCQh1CWhjIA+gqQAigZAWgYQASgTAWggIAlg1QAOgTA4hBQAtg0AVgkQAWgmAdhOQAehQAUgkQAPgcAigvQAlg0ANgWQAbgtAYg8QAOgmAXhJQASg4AHgcQANguAFgnQAGgsAAg4QgBglgEhAQgMioAChOQAEiKAjhnQAIgYALgJQAIgGAKAAQALABAGAHQAFAHgCAKQAAAGgFANQgdBOgHBkQgFBJAHBvQAKCgABAYQADBpgOBOQgKA+gmB1QgVBCgOAhQgVA3gYAnQgMAUgiAvQgeAqgOAZQgRAfgVA0QgaBDgIARQgbA8gvBEQgbAmg+BQQgnAzgTAWQgiAogfAbQgaAXgjAZIhBAtQh8BUh3BhgAC4gKQhGg1gkhlQgOgogKg0QgHghgIg8Iglj5QgOhngMg0IgRhDQgLgpgEgcQgFghgDhgQgChRgMguQgGgcgLgNQgIgIgKgFQgLgEgLADQgNADgKAPIgRAcQgJAPgPAGQgRAHgKgKQgLgLAHgZQAQg0ApgYQAWgMAYgBQAagBAVALQA4AdAJBnQACAaADBVQADBFAHApQADAaAJAlIAQA+QAVBWAYC5QAXC0AYBbQAPA9AWAjQAJAOAXAbQAXAaAJAPQAJAOABAPQAAASgMAFQgEABgFAAQgLAAgPgKg");
	this.shape.setTransform(40.6625,191.1708);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAnXAO0QgHgDgMgHIgSgKQgJgEgQgCIgagEQgUgDgngQQgugSgagOIhIgwQgqgcghgKQgTgGgdgDIgxgGQg3gIgtgXQgUgLghgXQglgZgRgKQgugXgXgOIgogaQgYgQgSgIIgPgGQgJgFgFgFQgGgHAAgJQAAgJAGgFQAJgGATAIQBcAoBFAsIBeA9QA3AgAvAJQAYAFAyADQA4AGAlAUQAYANAqAiQA5ApBZAWQAuALAMAEQAgALATASQAOAOgDALQgCAKgLAEQgGACgFAAQgFAAgFgCgATiF4QiDg2hzhoQhphghUiBIgng9QgYghgXgUQgTgQghgTIg2ggQhEgtg0hIQgjgygfhIQgSgrgfhYQgehVgLgrQgehtgGh2QAAgOAFgLQAGgMALABQALACAHAUQAFAVAEAdIAFAyQAKBKAcBZQASA4AoBnQAWA5AOAdQAWAvAZAhQAvA/BjBAIA5AlQAfAXATAWQAQASASAfIAcA0QAgA1AzA5QAfAjBCBBQAlAkAUARQAhAcAeAQQAKAGAuATQAjAPATAOQANAJAFAMQAGAOgJAJQgGAFgIAAQgJAAgLgFgA7CFwQgJAAgIgHQgHgIACgIQACgIAKgJQApgiBGgbQBSgcAngQQAhgNAzgXQAqgUARgNQAdgVAfgtIAzhLIAbgcIAcgdIA0g8QAfgiAdgPQAYgMBLgOQA/gNAcgZQAZgYAOAJQAIAGgCANQgDALgIAKQgUAWgaAOQgYANg+ANQg5AMgbASQgUANgXAdIgnAwIgdAaQgTARgJALQgKANgLAUIgTAiQgaAugpAkQgaAXgZAKIgbAHQgSADgJAEQgSAIggAWQgWAMgnAKQgwAMgPAGQgPAGgdAQIgvAZQgUAMgNAAIgCgBgEgnmAErQgJgBgFgHQgKgOAPgXQATggAegWQAfgWAjgJQAkgGARgFQAbgJAigZIA5gpIA+ghQAlgTASgVIASgVQAKgPAHgHQAZgZAqgKQAggHAvABQAXAAAIAKQABAHgDAIQgDAHgHAEQgLAIgRABQgLABgYgBQgUAAgNAFQgSAHgTAVIgeAlQgMANgkAYIiuBwQgdATgRAEQgMACgZABQgXAEgXARQgQANgVAXQgPATgKAFQgHADgGAAIgFgBg");
	this.shape_1.setTransform(35.8939,212.4045);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EAyUARPQg9gDgbgCQgxgFglgKQgcgHg9gXQg4gWgggIQgqgJg+gCQhFgBgjgBQiqgHjdhOQj9hjh/guIknhsQilhFhjhZQgmghhchpQhQhag4gqQgogdhJgmQhZgtgbgRQhxhGhah0QhRhqg4iIQgvh1ggiUQgYhxgUiiQgEgZgDgMQgFgVgKgNQgMgQgTgGQgUgGgPALQgKAHgMAaQgMAZgMAHQgOAGgKgRQgJgPADgSQAKgyA1gXQA2gYArAcQAjAXARAyQALAgAHA9QARCUAYBtQAeCKAvBuQA2B9BPBjQBWBpBsA/QAYAOBSAoQBBAgAlAaQA2AmBFBPQBcBqAWAVQBzBwDIBVQB1AyDwBSQBdAjC6BKQCiA7B8AQQAtAFBjAFQBeAEAyAHQBHAKCHAmIChAsQAPAEAKAJQAMALgFALQgGAMgXAAIgEAAgEgy1AKMIAbgRQAvgcAjgMQAegJA1gGQA/gHAWgFQBjgVBkhTQAzgqBzh6QBuh0BlhZQAfgaAUgPQAdgVAcgLQApgQBVgEQBFgDAkABQA6AEArASQAiAOApAeIBFA2QA6AsAyANIAKgGQBPguBrh5QB4iGA6gsQAugiAmgLQAqgNA/AHIBrAMQBeAFBZglQBagmA9hIQAYgdA2hXQAuhMAlgkIAigeQAVgSALgNQAaghAQg8QAThEADhKQAChXADgWQAKg9AkgdQAkgdA2AGQAxAHApAgQAWARAEAQQADALgFAKQgFALgKACQgKACgLgHIgTgRQgWgVgdgHQgfgHgXAPQgXAPgJAhQgHAWgBAnQgEB3gPBDQgXBlg5A7QgKAKgdAZQgZAWgNAPQgTAWgVAmQgXAsgMAVQg/BrhxA+QhyA+h7gEIhhgIQg5gEgmAIQhDAPhCA+QgSAQhbBlQh4CHiaBfQgfATgPgOQgHgHABgMQACgLAHgKQAGgJAKgIQgtgOgzglQgwgjgYgQQgqgdgkgLQgggJgpgBQgbgBgxADQg/AEghAKQgxAPg9AwQhBAzhWBcIiPCXQhUBThOAxQhhA7hfAOIhBAIQgnAEgZAIQgYAHgeARgADAswQgkgKgTgJQgegPgPgVIgNgPQgIgHgLAAQgLABgIAHQgKAFgLgGQgKgFgEgLQgEgKAEgLQAEgKAJgHQAQgNAZABQAYACAUAOQAJAGAOAPQAOAPAIAGQASANAgAJQAYAGAKAIQAIAGADAJQAEAJgEAIQgGANgRACIgCAAQgJAAgSgFg");
	this.shape_2.setTransform(37.1133,170.1692);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("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");
	this.shape_3.setTransform(-52.966,-126.0703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_stroke, new cjs.Rectangle(-362.6,-316.3,725.2,633.7), null);


(lib.dino_volcano2_smoke_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EADZAqiQAVjeABgQQAChCgHg0IgKg4QgHgigBgVIgDgrQAAgdgDgPQgGg+gmhKIhIiAQgrhKgRg8QgLgkgCgiQgSgIgSgKQhNgpg1hDIgQgSQgJgKgJgFQgJgEgMgBIgYgCQingChIhTIgSgXQgLgNgKgHQgNgLgfgIIh2glQhCgXgsgeQgsgggvg5Qgxg8gUgzQgRgwgBhAQAAgeAEgyQingvhdiZQgVgigRgkQlrARjIkgIgOAIIgNAEQm1BDkRldQoSBWlomLQhihsgUiQMAWWgklMBYvAAAMAAAAr+QgSBYgcBVQgaBOgkBKQhbC6idCbQj5D1lJBWIgpBPQiXEhligCQhSB/idAeQgGABgFAEIgQANIgEAEQgiAlguAJQgXAEgagDQgYACgWgCQgeAlgtAaQiaBbiehJQgWgKgUgPIgIAJQhrBzhuAPIACAJQAEAaABAnIABBBIAAAuQAAAagEATQgMA1grAmIghAZQgTAPgIAQIgcA1QgUAlgIAaIgRAzQgHAYgFAKQgKARgGAkQgIAmgHAPIgLAVQgGAMgCA9QgBA+AJCYQhmAbhgAAQirAAiYhXg");
	this.shape.setTransform(-210.6,-277.4,1,1,0,0,0,-210.6,-277.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_smoke_fill, new cjs.Rectangle(-355.4,-280.9,710.9,561.8), null);


(lib.dino_volcano2_mtn3_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoZOxQgRgRhdh4IkFlMQimjVg1h5Qg0h4grhCQgqhChHhMQhHhLgug8Qgug7gihWQgjhVgNhgQgOhfgJhfQgHhSgKhQQgKhWgIhWQgJhhgFhhQAphUAqAaQApAbArAWQAqAWAVgUQAVgUAEgIQAghQBQAMQASACAcAnQAdAnANC2QANC2BVDAQBVDBBpBqQBoBrBvAtQBqAqBJA/QBIBABRBpQBQBqCgBgQB2BIB+AxQBaAhBaAdQBWAZBWAbQBbAcBWAkQBOAfBTAPQA+ALA/AEQDLAMCqAdQCvAeCoA1IAAN8g");
	this.shape.setTransform(0.0125,0.0273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_mtn3_fill, new cjs.Rectangle(-165.2,-147,330.5,294.1), null);


(lib.dino_volcano2_mtn2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTKTIqyhdQImm8EgsmQCJBmCtEiQBIDQDxE0QDRCnCFEmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_mtn2_fill, new cjs.Rectangle(-90.2,-68.5,180.4,137.1), null);


(lib.dino_volcano2_mtn1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG9SgQhHgGhJgCQs4gYrel3QighSiahhQCAhNCVgSQBKgJBAgmQBEgpA8gxQC4iqCAiLQB/iKCpACQCpABBvBXQBvBYAfgDQCKhHBdhjQBchkBVhJQA3gvBmgCQBLAEBKAHQBNgDBFgfQBQgkA6hDIAgglQBahnBVhpQBGhFAQhcQAGggADggIAQiJIACgQIACgOQAAgzAcgjQAcgkAnAAQCAgRAQCIQAPCIgIB/IAECZQgCEDgtEjQgQBqgvBiQg0Bwg3BvQhmDUiFDDQhLBvhnBWQiRB3iiBfQhDAnhRAAQgUAAgWgCg");
	this.shape.setTransform(0,-0.0036);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_mtn1_fill, new cjs.Rectangle(-157.2,-118.6,314.4,237.2), null);


(lib.dino_volcano2_lava_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJMTQQgeg7gUhUQgWhegTgwQgYg8g6hcQhFhtgUgoIhCiaQgnhdgpgzQgVgagjgiIg7g5QhQhRgshgQgRglgLgjQgRBCgqBKQgPAbg1BTQgqBDgWAsQgRAkgkBfQgfBUgZAtQgXApgvA/Qg5BNgRAZQgaApieEQInkigQA2gmAQgKIAwgdQCYhcB+iJQB6iDBXiiQASgjAkhHQAihHAUgjQBAhsAdg3QBVijAejCQAdi4gXjCIgGg3QgEggAAgXQgEiRBailQAgg7AkgGQAPgDAOAFQANgCAMATQAGAHADAIIADAIIAEAKQAPAogEBoQgBA1ABA4QAHApAPA0QAZBVAJArQARBHAQCZQAQCUASBLQAcBzA4BFQAPASAZAYIAqAmQCAB8BJChIADADQAZAlBABJQA9BFAbAqQAUAgAmBPQAjBJAaAkQARAZAjAoQAnAsAPAUQAMAQAXAkIAkA0QAfAnBJBEICxB2QjuAqkEAAQg4AAg6gCg");
	this.shape.setTransform(-1.7125,-4.1701);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano2_lava_fill, new cjs.Rectangle(-121.6,-127.6,239.89999999999998,246.89999999999998), null);


(lib.dino_volcano1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(-241.9432,-254.9775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EB3sAoeQhigZh4gkQhKgWiNguItGkMIibgyQhWgehDgdIhwgzQhEgggugQQiEgxiOgJQiOgJiKAfQgbAGgNgDQgLgDgGgJQgGgKADgJQAEgMAYgIQCIgkCOAEQCOAFCFAsQAxARBIAfIB4A1QBIAeBeAgQA1ASB1AlQNRENGmCNQAPAFAJAIQAKAKgEALQgDAKgOACIgGAAQgIAAgJgCgEgXvAj3QgEgDgLgRQgKgQgVgVIgigiIgcgjIgZgaQgTgSgOgQQgzg7geg/Igcg+QgMgbgLgSQgLgQgEgKQgEgIgGgZQgEgWAJgHQAGgFAIACQAIACAFAGQAFAEADAJIAHAOQAEAKAQAWQAOAUAFANIAGAUIAIAJQAGAGACAEQADAHACAOQACAHAFAIIAKAOQAHAJAIARIAOAaQAIAOAaAeIA6BBQAkApAUASIAXAVQANANAHAMQAIAOgBARQAAARgMAKIgGACQgIAAgIgJgEAPOAiGQgzgZg6gpQgigYhEg0IhhhNQgPgLgDgJQgDgGABgHQACgHAGgEQAJgFARALQA+AnAfAVQAzAjAlAhQAhAeAJAHQAUAPAhAPIA4AaQARAIADAJQADAJgHAJQgHAIgKACIgFAAQgMAAgUgJgEhDiAffQgOgEgEgMQgCgNAPgUQAZgeB6h+QBbhfArhGQANgWAbg0QAZgwAQgZQAJgOAsg7QAhgtAPgfQALgVAMgjIAVg5QAXg7A2hUQBKhzANgXQAjg/A2iFQA2iGAjg+QAdg1AggLQAMgEAEAGQADAEgEAJIhoDvQgpBfgYAzQgnBQglA9Ig8BdQgjA2gSAqQgJAUgSAzQgQAugMAZQgQAhggAsIg1BKQgNAUhJCAQgzBaguAwQgLALhNBCQg2AugYAnIgNAXQgJAMgJAGQgIAFgKAAIgIgBgEBJbAe5QimgBlEgQQjDgJhggJQiigOh/gbQhWgShpgfQhEgUh5goInnifQhzgmg0gOQhegbhNgLQhlgPjxAAQjeAAh3gZQh2gZiehHQiyhWhagmQg6gZhxgqQh2gsg2gXQkChrkmjJIilhxQhgg/hMgmQhFgihagfQg5gUhsggIljhrQhNgXgmgPQg/gXgugcQgzgfg0gxQgoglgzg8Qhph7heiNIg3hUQghgwgcgfQgggjgugoIhUhEQlukkjulXQkLl/hPmYQgmjBgFkNQgChLgFglQgJg+gbgpQgOgCgQAJIgaATQgOALgQACQgSACgJgLQgKgOAMgTQALgPATgMQBKgpApAYQAXANALAgQAIAWADAmIAUEiQAMCrAVB1QBHGEDxFuQDbFKFQEZIBsBaQA+A1ApAqQA2A5A/BVQAkAyBHBlQCFC8BuBTQCBBiDqBDIDFA0QB3AgBMAcQDDBHEsDEIDuCbQCJBVBvA0QBTAoCMA1QCvBDAzAVQBeAoC6BWQCkBHB9AXQBpATCwAAQDWABBGAGQC/AREIBaQA0ASCqA+QCKAyBVAbQGcCBIXAhQFYAVJxgQQAUAAAQALQARALgJAOQgGAIgSACQjMAXj9AAIgfAAgAF6cdQhBgcgggRQg0gcgiggQgWgUgtg5QgpgygdgXQgSgPgrgZQgpgYgUgRQgegYgog3Qgug+gVgVQgtgshegsQhzg3ghgWQgggWgkghQgWgVgogpQgSgTADgNQACgLAMgEQAMgEALAEQAJAEAKAJIAPASQA4BDCcBPQCdBPA4BBQAMAOAaAkQAXAgAQAQQAaAcA1AkQBAAqAUARQAbAXAxA4QAvA1AeAYQAuAmBgAqQBuAvAlAYQAUAMAIAOQAFAIAAAKQABALgGAHgA93atQgWgFgLgbQgDgJgDgPIgFgXQgJghghg4IhSiIIgag4QgLgWgCgLQgBgGABgLIgBgRQgBgLgHgTIgPgsIgSgxIgUgqQgjhLgahNQgHgVAJgJQAJgJANAIQAGADAKAOQANAUANAfIAWA1IAqBYQARAjAGAQQALAdAEAZIAEAmQAEAaANAfQAMAcAVAiIAmA8QAfAxARAhQAXAtAGAfQAFAVADAGIAMARQAHAKAAAIQAAAMgLAIQgIAFgJAAIgGgBgEhlYAXTQgFgLALgLQAIgJAPgGIBjgsIBngtQCYhEBXhAIBDgwQASgLAcgOIAvgYQBegwBLhFQAMgLAGgEQALgIALgBQAMgCALAJQAKAJgDALQgBAFgJAKQgvAxhHAuQgsAehXAwQgnAVgTAMIhEAuQgtAehZAxIhHAoQgiASgMAFIgmAQIhKAeQg4AXgeAEIgKABQgUAAgFgOgEh4CASVQgSgFAAgPQgBgMANgIQAKgHAQgDQGjhPDPgxQFlhVDxh7QArgWBPgtQBSgvAogVQBCgjB/g5QCGg9A8geQBxg5B+hRQBhg+CDhdQBbhAA3gtQBOg/A4g7QA5g8BShyQBfiFAmgtQAug4BMhMQBUhUApgrQFRlhDKnWQDFnIAqn1QADgcADgOQAGgXANgNQAagZAqAKQAlAKAcAeQAXAagLARQgIANgTgFQgRgEgNgOQgmglgVARQgcIEjOHlQjPHklhF5QgzA3hpBqQhcBfg3BJIhaCAQg3BPgpAtQgrAvg+A0QgmAfhNA6Qi6CMhfBAQigBtiKBFQgzAZh8A3QhxAyg+AgQgsAXhdA1QhYA0gxAZQhbAthwAoQhYAgh6AjQmSB0miBBIgPABQgKAAgJgDgEhVcAOBQgLgJACgMQABgLARgMQCAhlBEgsIAzghQAdgTATgSQASgSAWgcIAjgyQA0hFBvhoQB8h2AsgzQAPgQAHgDQAHgDAHABQAIACAEAFQAIAMgNAUQgoBBhVBQQh+B3gNAPQgsAvg9BUQgfArgPAPQgRAPgvAdQhsBChjBUIgUAPQgMAIgLABIgEAAQgLAAgJgHgEg07AGeQgKgIgCgNQgBgLADgNIAIgXIAZhLIB7mHQAIgcABgIQADgNAAgaQAAgbACgMIAGgbQADgQABgKIAAgRQgBgJACgHQADgIAGgGQAHgGAIACQAOADAEAaQAFAegBASQgBAJgEARIgGAZQgCAOABAfQABAdgDAQIgGAXIgGAfQgEAOgKAWIgUAtQgYA0gIAXQgMAkgRBLIgJAlIgKAyQgKAygDAKQgNAogdAgIgGABQgIAAgIgHgEhHwAAmQgJgGgBgMQgCgMAFgKQAFgIAJgKIAPgQIAcgiQAagcALgPQAJgMAOgYQAOgaAIgLQANgSAsgtQBdheBOiIQAMgUAMgBQAGgBAGAEQAGADADAGQAEALgCAPQgDAMgHAOIgOAXIgxBKIgoA7QgYAhgXAWIgoAlQgYAXgMASIgWAoQgJAOgTAYIhDBTQgPASgIAEQgJAGgJAAQgHAAgGgEgEg8ggRvQgRgOAQglQATgvARgUIAPgRQAKgLAEgIQAFgKAEgUQAEgVADgIQAFgLAJgHQAJgHAKADQAMADADARQACAKgEAQIgIAkQgEAUgEAKQgGAMgPAUQgQAVgGAKIgKAZQgGAPgGAJQgIALgNAEIgKACQgIAAgGgGgEgw/gUuQgJgGgCgKQgDgMAIgbQAJgngFgnIgHgoQgDgXACgQQABgLAHgZQAHgWAAgNQABgKgEgVQgEgUAAgLQAAgMAHgJQADgEAGgCQAGgCAFADQAGADAFAOQAaBVgXAwQgIAUgBAEQAAAGABAHIAEANQAHAaAAA3QAAAggDASQgGAbgPAQIgGACQgGAAgGgFgEgnfgU1QgGgDgEgHQgNgPgOglIgDgHQgLgeACgRQABgIAFgFQAEgGAHAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAJgBAGAJQAEAGADAKQAEARAFAJIAKAPIALAPQANAUgBAPQgBAOgLAJIgGABQgLAAgFgDgEg6TgWpQgPgKADgbQABgQAGgVIALglIAri9QAIggAIgRIALgZIAFgbIAGgZQADgPAAgKIgBgoQgBgZAFgOIAFgMIAEgMQABgEgBgQQgBgMAEgHQAEgIAKgDQAKgCAHAFQALAIACATQACAQgDAYIgFApQgCANAAAWIgBAkQAAAMgEAWQgEASgFARIgLAiQgSA5gMAzIgjCkQgEAagKAMQgHAIgLADIgHABQgGAAgGgDgEgpXgZRQgEgEgCgOQgDgPgPgiQgKgcgGgTIgXhdQgJgjABgTIABgSQABgLgBgHQgCgLgLgUQgOgdgKgcQgJgagCgPQgCgPAAgfQAAhJADg/QABgRAFgHQADgFAGgCQAHgDAFADQAHAFABAQQAFA5AAA6IABAyQACAbAIAVQADAGATAjQANAZADASQABAHgBANIAAAUQAAAVAHAhIAHAfQAMA5ALAaIALAcQAMAfgBAaQgBARgGAIQgFAFgHABIgDAAQgFAAgEgDgEgw7gcBQgKgGgCgKQgBgHACgMIAFgTQAFgVgHgnIgUiDQgGgnACgUQABgQAFghQADgZgEglIgHg9QgCgWALgGQALgGAKALQAJAKAEAOQAMA2gDA4IgEAtQgCAaABASQABAJAHAyQAPBXgBBTQAAAmgSAIQgEADgFAAQgEAAgEgCgEg4YgkhQgKgHgCgLQgEgPANgZQARgiANgTQATgdAVgRQAagTAfgEQAhgFAYARIALAIQAHAFAGACQAKACANgDIAYgJQAlgMAlALQAPAEAKAKQALAKgBANQgBANgNAIQgMAIgOgBQgMgBgOgGIgYgMQgJAQgUAHQgTAGgTgFQgdgGgkghQgoAEgfAzIgWApQgNAYgOANQgEADgFAAQgFAAgFgDgEgrjglPQgGgEgDgJIgFgRQgGgbgOgVQgQgWgXgKQgYgLgbAJQgbAJgIAZQgiAHgdgSIgTgNQgLgHgJgDQglgLgyA2QgOAEgHABQgMABgKgCQgLgEgGgJQgHgLADgKQADgIAKgFIARgJQAKgFAhgUQAagQASgFQAcgIAeALQAdALARAZQAWggAmgKQAZgGAbAFQAaAGAWAQQAoAcAYA3QANAegGATQgEAMgNAGQgGADgFAAQgGAAgGgEg");
	this.shape_1.setTransform(0.0292,114.7044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano1_stroke, new cjs.Rectangle(-770.1,-374,1540.3000000000002,748), null);


(lib.dino_volcano1_smoke_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuWZKIAUliIAAgFIACgnQhAAAhCgSQiCgihbhdQhDAYhJgGQhJgFg+ghQgoAUgXALQgkAPgfAIQg4ANg6gLQg6gMgvghQgigXgZggIgFgIQh9ArhDhHIgRgXQpaFSlgrzIgLgCQlLgsiPkvQgHgOgMgNQgJgDgKAAIgYABQg7ACg6gcQg3gagogvQgjgqgUg1QhxABh8grQhqglhbg8QhehAhFhSQhIhXgnhmIgQgtQgngKgrgRQieg/iBiFQh5h7hMilQgRglgLgfIAApuMCjXAAAQAVKwivFuQkcJTqGgoIgNgBQgTAfgNASQgrA6g8AsQg8AphGAXQhFAXhKABQgyAAgxgKIgJAcQg0CdhtB1QheBnhyAzQhGAhhZASQiOAeiMgMIgmgFQgiAogsAhQhPA8hiAZIgRADIgCAEQjxH2o1hfQjIgkikh2IAAgBQgmgBhcgQQgogIgxgUIgUgJQgzgWg8gjIgLgGQhLBIhoAOIguAIIgIABQg3ABg3gIIgBAAQg5Atg+AgQggAQgYAJQgcAJglAEQhFAHg+gOQgxgLgngXIgDAEQgPAQgaAXIgwAoQgbAVgLAIQgPAJgaAOIg2AaQgTAHg7AQQAaDTAoE9gEBRugblIABAAIAAAEIgBgEg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano1_smoke_fill, new cjs.Rectangle(-523.1,-176.5,1046.2,353.1), null);


(lib.dino_volcano1_mtn_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eh33A9lMAAAhAjQFxg0F0haQGIhgD9h5QD+h4BygnQBzgoEAiQQDEhuCWhqQCEhfB8hoQBNhBBAhJQB8iOB3iUIApg1ID5j5QEkk5CHkPQCtlbBDkIQAzjLAThbQAXk4gCgNQAAgSAIgMQAHgLANgGQAMgFAOAAQAXAAAcAQQAqAaAjAyIADAEIAMgVQAYgmAWgIQASgHAaAIIArARIAlANIAHAEQAMgKANgEQAXgIAYALQAIAEAGAGIAVgCIBIgGQAVgBANABIAFgEIAUgSQANgLAKgFQAlgVA2ARQAbAJARAPQARgUARgMQAWgPAXgEQAagEAVAJQAWAJAQAWQAjgdAsgRQAegNAcAAQAigBAUASQAXATALAvQAHAjAEAqQgEHlB+E6QB9E5BfCWQBMB3BaBvQDED1D3C/QBYBBAqAiQBLA7AvAzQA9BDBXCPIAPAYQBXCnCVBpQA+AsBFAgQBSAmBYAgQBgAkB0AjQGiCBDsCUQDqCUFdDAIGQC1QG0DRDnATIB2ARQBVAMDiAFQDfAFDWBGQDWBFCcA0QCbA1CIAjQCIAjCyAhQCiAeCXARQG2ATFiACQFiABFYg5QBfACB9AjIgUgIIAwAQIAGACQBHAVBGAbIYAIKIAAADQAHAAAJAFIAEADMAAAAr5g");
	this.shape.setTransform(0,0.0243);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_volcano1_mtn_fill, new cjs.Rectangle(-767.2,-394.1,1534.4,788.3), null);


(lib.dino_sky3_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAS9AmHQiqgdjKgMQhAgEg9gLQhUgPhOggQhWgkhbgbQhVgbhWgaQhbgchagiQh9gxh2hHQighihRhpQhQhqhJg/QhJg/hpgrQhvgshphrQhohrhVjAQhVjAgNi2QgOi2gcgnQgdgogSgCQglgFgaAOQgDg/ABgjQACg+AGgMIALgVQAHgPAHgmQAHgkAJgRQAGgKAHgYIAQgyQAJgbAUglIAcg0QAIgQATgPIAggZQAsgmAMg1QAEgTAAgaIAAguIgBhBQgBgngFgaIgBgIQBtgQBrhzIAJgJQAUAPAWAKQCeBJCZhbQAtgaAfglQAWACAYgCQAaADAWgEQAvgJAhglIAEgEIAQgNQAGgEAGgBQCcgeBTh/QFhACCXkhIAphPQFJhWD5j1QCcibBci6QAkhKAuiTQAviUAhkLIARDyIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAQIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAMQh0gfh3gUg");
	this.shape.setTransform(0.0107,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_sky3_fill, new cjs.Rectangle(-144.8,-249,289.6,498), null);


(lib.dino_sky2_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EADdAixQlbjBjriTQjsiUmjiBQh0gjhgglQhXgfhTgmQhFggg9gsQiWhqhXimIgOgYQhYiPg9hDQgvg0hKg6QgrgihYhBQj3i/jEj1QhahwhMh2QhfiWh9k5Qh+k5AFnmQgEgpgIgjQgLgvgWgUQgVgRghABQgcAAgfANQgiANgcAUIgkkmQA7gQASgHIA3gaQAbgOAOgKQALgHAbgVIAxgoQAZgXAPgRIADgDQAoAXAwALQA/AOBEgHQAZgDAVgFIAUgFQAXgJAhgQQA+ggA5gtIAiADQApAFAYgCQAigBA7gNQApgJAUgIQAVgKAigaIAkgbQCLBSBcASQBbAQAmABIABABQB4BXCMAqQAyAPA1AKQI1BfDyn2IABgEIARgDQBigZBPg8QAtghAhgoIAnAFQAlADAlAAQAdA6AtAyQFnGMIShVQERFdG1hDIAOgFIANgHQDJEfFqgQQARAjAVAjQBdCYCnAvQgEAyAAAfQABA/ASAwQATA0AxA7QAvA5AsAgQAsAfBCAWIB3AlQAeAIAOALQAJAHALAOIASAWQBIBUCoACIAXABQAMABAJAEQAKAFAJAKIAPASQA1BDBOApQASALATAHQACAiAKAlQARA7ArBLIBIB+QAmBLAHA9QACAPAAAdIADArQABAVAHAjIAKA3QAHA0gCBCIgFA/QgfgMgsAFQgoAAgbAkQgcAkAAAyIgCAPIgCAPIgQCJQgDAggGAgQgQBdhGBEQhWBphZBnIghAlQg5BEhQAjQhFAghNADQhKgIhLgDQhmACg3AvQhVBIhdBkQhcBliKBHQggAChvhYQhwhYiogBQipgCiACLQiACLi3CrQg8AwhEApQhAAmhLAJQhmANhbAog");
	this.shape.setTransform(-0.0039,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_sky2_fill, new cjs.Rectangle(-338.7,-230.5,677.5,461.1), null);


(lib.dino_sky1_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiCAxgIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgQIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgQIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgKIAFn0IAmAjIAIANQAXAwAaAtQA/BsBWBYQCBCECeA/QArARAnAKIAQAtQAnBnBHBWQBFBTBeA/QBbA8BqAlQB9ArBxgBQAUA2AjAqQAoAvA3AbQA6AbA6gCIAZgBQAKAAAJAEQALAMAHAOQCQEvFLAsIALACQFfLzJalSIARAXQBDBIB9gsIAFAIQAZAgAhAXQAwAhA6AMQA6ALA4gNQAfgHAjgQQAYgKAogVQA+AhBJAGQBJAFBDgXQBaBcCCAjQBCARBBABIgCAmIAAAFIgSE7QgUgTgUgNQgcgQgXAAQgOAAgMAFQgNAGgIALQgHAMAAASQABANgXE4QgSBbg0DKQhCEIitFbQiHEPkkE5Ij5D5IgqA1Qh2CUh9COQhABJhMBBQh8BoiFBfQiVBqjEBuQkACQhzAoQhyAnj9B4Qj+B5mIBgQk7BNnLA/IAAgLg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_sky1_fill, new cjs.Rectangle(-217.9,-317.9,435.8,635.8), null);


(lib.bg_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhuOA61MAAAh1pMDcdAAAMAAAB1pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_fill, new cjs.Rectangle(-705.5,-376.5,1411,753), null);


(lib.dog_eyeshine_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBSQgqgDgPgRQgOgRADgiQADggAhgeQAhgeAogBQAogBATAaQATAagCAlQgBAlgmAWQggASgiAAIgMgBg");
	this.shape.setTransform(-0.0536,0.0089,0.8895,0.8895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog_eyeshine_fill, new cjs.Rectangle(-8.3,-7.3,16.6,14.7), null);


(lib.dog_eyebrow_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AASBVQhFgBg6gJQg7gJAFgsQAEgrA2ggQA2gfBGAAQBHAAAkAXQAjAXADAlQAEAjgoAbQgnAYhAAAIgHAAg");
	this.shape.setTransform(0.023,-0.0209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog_eyebrow_stroke, new cjs.Rectangle(-16.4,-8.5,32.9,17), null);


(lib.fish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_line
	this.instance = new lib.fish_shape2_stroke();
	this.instance.setTransform(966.25,321.7,1.6,1.6,0,0,180,-0.2,-0.7);

	this.instance_1 = new lib.fish_shape1_stroke();
	this.instance_1.setTransform(375.8,321.7,1.5999,1.5999,0,0,180,0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fish_fill
	this.fish_head8_fill = new lib.fish_head2_fill();
	this.fish_head8_fill.name = "fish_head8_fill";
	this.fish_head8_fill.setTransform(1131.85,326.95,1.5999,1.5999,0,0,180,-0.4,-0.7);

	this.fish_fin8_fill = new lib.fish_fin2_fill();
	this.fish_fin8_fill.name = "fish_fin8_fill";
	this.fish_fin8_fill.setTransform(977.75,335.35,1.5999,1.5999,0,0,180,-0.4,-1.1);

	this.fish_tail8_fill = new lib.fish_tail_fill();
	this.fish_tail8_fill.name = "fish_tail8_fill";
	this.fish_tail8_fill.setTransform(766,322.8,1.5999,1.5999,0,0,180,-0.2,-0.7);

	this.fish_body8_fill = new lib.fish_body2_fill();
	this.fish_body8_fill.name = "fish_body8_fill";
	this.fish_body8_fill.setTransform(940.9,325.9,1.5999,1.5999,0,0,180,-0.4,-0.9);

	this.fish_head5_fill = new lib.fish_head1_fill();
	this.fish_head5_fill.name = "fish_head5_fill";
	this.fish_head5_fill.setTransform(538.2,325.85,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_fin5_fill = new lib.fish_fin1_fill();
	this.fish_fin5_fill.name = "fish_fin5_fill";
	this.fish_fin5_fill.setTransform(385.15,335.45,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_tail5_fill = new lib.fish_tail_fill();
	this.fish_tail5_fill.name = "fish_tail5_fill";
	this.fish_tail5_fill.setTransform(175.2,322.8,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_body5_fill = new lib.fish_body1_fill();
	this.fish_body5_fill.name = "fish_body5_fill";
	this.fish_body5_fill.setTransform(352.2,325.25,1.5999,1.5999,0,0,180,0.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_body5_fill},{t:this.fish_tail5_fill},{t:this.fish_fin5_fill},{t:this.fish_head5_fill},{t:this.fish_body8_fill},{t:this.fish_tail8_fill},{t:this.fish_fin8_fill},{t:this.fish_head8_fill}]}).wait(1));

	// do_not_fill_eyes
	this.instance_2 = new lib.fish_eyecolor_fill();
	this.instance_2.setTransform(1119.35,329.8,1.6,1.6,0,0,180,-0.4,-0.6);

	this.instance_3 = new lib.fish_eyecolor_fill();
	this.instance_3.setTransform(525.65,330.7,1.5999,1.5999,0,0,180,0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.fish_bg_line();
	this.instance_4.setTransform(670.3,458.15,1.3143,1.3143);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg_fill
	this.fish_bg2_fill = new lib.fish_bg2_fill();
	this.fish_bg2_fill.name = "fish_bg2_fill";
	this.fish_bg2_fill.setTransform(670.25,549.15,1.3143,1.3143);

	this.fish_bg1_fill = new lib.fish_bg1_fill();
	this.fish_bg1_fill.name = "fish_bg1_fill";
	this.fish_bg1_fill.setTransform(670.25,182,1.3143,1.3143,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_bg1_fill},{t:this.fish_bg2_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fish, new cjs.Rectangle(-240,-196,1820.6,1122.5), null);


(lib.icecream = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wmelon_line
	this.instance = new lib.wmelon_stroke();
	this.instance.setTransform(276.35,387.1,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// watermelon_fill
	this.wmelon_out_fill = new lib.wmelon_out_fill();
	this.wmelon_out_fill.name = "wmelon_out_fill";
	this.wmelon_out_fill.setTransform(274.35,378.4,1.4897,1.4897,0,1.8044,-178.1956,-0.1,0.2);

	this.wmelon_in_fill = new lib.wmelon_in_fill();
	this.wmelon_in_fill.name = "wmelon_in_fill";
	this.wmelon_in_fill.setTransform(287.95,371.95,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wmelon_in_fill},{t:this.wmelon_out_fill}]}).wait(1));

	// icecream1_line
	this.instance_1 = new lib.icecream1_stroke();
	this.instance_1.setTransform(453.05,221.35,1.3814,1.3814,-23.536,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// icecream1_fill
	this.icecream1_scoop_fill = new lib.icecream1_scoop_fill();
	this.icecream1_scoop_fill.name = "icecream1_scoop_fill";
	this.icecream1_scoop_fill.setTransform(429.25,152.7,1.3814,1.3814,-23.536,0,0,0,-0.1);

	this.icecream1_cone_fill = new lib.icecream1_cone_fill();
	this.icecream1_cone_fill.name = "icecream1_cone_fill";
	this.icecream1_cone_fill.setTransform(492.55,311.05,1.3814,1.3814,-23.536,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream1_cone_fill},{t:this.icecream1_scoop_fill}]}).wait(1));

	// ice_cream2_line
	this.instance_2 = new lib.icecream2_stroke();
	this.instance_2.setTransform(712.65,298.55,1.4195,1.4195,0,23.3533,-156.6467,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// icecream2_fill
	this.icecream2_ice_fill = new lib.icecream2_ice_fill();
	this.icecream2_ice_fill.name = "icecream2_ice_fill";
	this.icecream2_ice_fill.setTransform(730.3,261.7,1.4195,1.4195,0,23.3533,-156.6467,-0.1,-0.4);

	this.icecream2_stick_fill = new lib.icecream2_stick_fill();
	this.icecream2_stick_fill.name = "icecream2_stick_fill";
	this.icecream2_stick_fill.setTransform(653.95,435.35,1.4195,1.4195,0,23.3533,-156.6467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream2_stick_fill},{t:this.icecream2_ice_fill}]}).wait(1));

	// pizza_line
	this.instance_3 = new lib.pizza_stroke();
	this.instance_3.setTransform(961.7,241.8,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// pizza_fill
	this.pizza_pepperoni1_fill = new lib.pizza_pepperoni1();
	this.pizza_pepperoni1_fill.name = "pizza_pepperoni1_fill";
	this.pizza_pepperoni1_fill.setTransform(1049.35,236.85,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni2_fill = new lib.pizza_pepperoni2();
	this.pizza_pepperoni2_fill.name = "pizza_pepperoni2_fill";
	this.pizza_pepperoni2_fill.setTransform(922.35,245.85,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni3_fill = new lib.pizza_pepperoni3();
	this.pizza_pepperoni3_fill.name = "pizza_pepperoni3_fill";
	this.pizza_pepperoni3_fill.setTransform(912.3,371.25,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_crust_fill = new lib.pizza_crust_fill();
	this.pizza_crust_fill.name = "pizza_crust_fill";
	this.pizza_crust_fill.setTransform(1047.65,166.6,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.5);

	this.pizza_cheese_fill = new lib.pizza_cheese_fill();
	this.pizza_cheese_fill.name = "pizza_cheese_fill";
	this.pizza_cheese_fill.setTransform(950.45,271.5,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pizza_cheese_fill},{t:this.pizza_crust_fill},{t:this.pizza_pepperoni3_fill},{t:this.pizza_pepperoni2_fill},{t:this.pizza_pepperoni1_fill}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.food_line1_stroke();
	this.instance_4.setTransform(640.85,144.15);

	this.instance_5 = new lib.food_line2_stroke();
	this.instance_5.setTransform(658.45,449.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// bg_fill
	this.food_line1_fill = new lib.food_line1_fill();
	this.food_line1_fill.name = "food_line1_fill";
	this.food_line1_fill.setTransform(642.4,20.8);

	this.food_line2_fill = new lib.food_line2_fill();
	this.food_line2_fill.name = "food_line2_fill";
	this.food_line2_fill.setTransform(642.4,694.3);

	this.bg_fill = new lib.bg_fill();
	this.bg_fill.name = "bg_fill";
	this.bg_fill.setTransform(642.4,398.95,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_fill},{t:this.food_line2_fill},{t:this.food_line1_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icecream, new cjs.Rectangle(-136,-150,1589,1097.9), null);


(lib.dino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dino_pteranodon_stroke
	this.dino_pteranodon_stroke = new lib.dino_pteranodon_stroke();
	this.dino_pteranodon_stroke.name = "dino_pteranodon_stroke";
	this.dino_pteranodon_stroke.setTransform(613.55,352.5,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.dino_pteranodon_stroke).wait(1));

	// no_fill_on_eyes
	this.instance = new lib.dino_peyeshine_fill();
	this.instance.setTransform(777.15,327.6,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dino_pteranodon_fill
	this.dino_pbody_fill = new lib.dino_pbody_fill();
	this.dino_pbody_fill.name = "dino_pbody_fill";
	this.dino_pbody_fill.setTransform(547.7,328.85,0.8511,0.8511,0,0,0,0,-0.1);

	this.dino_pwing_fill = new lib.dino_pwing_fill();
	this.dino_pwing_fill.name = "dino_pwing_fill";
	this.dino_pwing_fill.setTransform(601.5,323.9,0.8511,0.8511);

	this.dino_pfeet2_fill = new lib.dino_pfeet2_fill();
	this.dino_pfeet2_fill.name = "dino_pfeet2_fill";
	this.dino_pfeet2_fill.setTransform(552.1,504.2,0.8511,0.8511);

	this.dino_pfeet1_fill = new lib.dino_pfeet1_fill();
	this.dino_pfeet1_fill.name = "dino_pfeet1_fill";
	this.dino_pfeet1_fill.setTransform(467.95,484.7,0.8511,0.8511);

	this.dino_pbeak_fill = new lib.dino_pbeak_fill();
	this.dino_pbeak_fill.name = "dino_pbeak_fill";
	this.dino_pbeak_fill.setTransform(854.4,316.9,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_pbeak_fill},{t:this.dino_pfeet1_fill},{t:this.dino_pfeet2_fill},{t:this.dino_pwing_fill},{t:this.dino_pbody_fill}]}).wait(1));

	// dino_volcano1_stroke
	this.instance_1 = new lib.dino_volcano1_stroke();
	this.instance_1.setTransform(667.1,307.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dino_volcano1_fill
	this.dino_volcano1_mtn_fill = new lib.dino_volcano1_mtn_fill();
	this.dino_volcano1_mtn_fill.name = "dino_volcano1_mtn_fill";
	this.dino_volcano1_mtn_fill.setTransform(644.55,561.15);

	this.dino_volcano1_smoke_fill = new lib.dino_volcano1_smoke_fill();
	this.dino_volcano1_smoke_fill.name = "dino_volcano1_smoke_fill";
	this.dino_volcano1_smoke_fill.setTransform(399.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano1_smoke_fill},{t:this.dino_volcano1_mtn_fill}]}).wait(1));

	// dino_volcano2_stroke
	this.instance_2 = new lib.dino_volcano2_stroke();
	this.instance_2.setTransform(1046.5,302.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dino_volcano2_fill
	this.dino_volcano2_lava_fill = new lib.dino_volcano2_lava_fill();
	this.dino_volcano2_lava_fill.name = "dino_volcano2_lava_fill";
	this.dino_volcano2_lava_fill.setTransform(1088.65,498.15);

	this.dino_volcano2_mtn1_fill = new lib.dino_volcano2_mtn1_fill();
	this.dino_volcano2_mtn1_fill.name = "dino_volcano2_mtn1_fill";
	this.dino_volcano2_mtn1_fill.setTransform(912.55,484.15);

	this.dino_volcano2_mtn2_fill = new lib.dino_volcano2_mtn2_fill();
	this.dino_volcano2_mtn2_fill.name = "dino_volcano2_mtn2_fill";
	this.dino_volcano2_mtn2_fill.setTransform(1083.65,552.2);

	this.dino_volcano2_mtn3_fill = new lib.dino_volcano2_mtn3_fill();
	this.dino_volcano2_mtn3_fill.name = "dino_volcano2_mtn3_fill";
	this.dino_volcano2_mtn3_fill.setTransform(1246.7,523.2);

	this.dino_volcano2_smoke_fill = new lib.dino_volcano2_smoke_fill();
	this.dino_volcano2_smoke_fill.name = "dino_volcano2_smoke_fill";
	this.dino_volcano2_smoke_fill.setTransform(1038.25,110.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano2_smoke_fill},{t:this.dino_volcano2_mtn3_fill},{t:this.dino_volcano2_mtn2_fill},{t:this.dino_volcano2_mtn1_fill},{t:this.dino_volcano2_lava_fill}]}).wait(1));

	// dino_sky3_fill
	this.dino_sky3_fill = new lib.dino_sky3_fill();
	this.dino_sky3_fill.name = "dino_sky3_fill";
	this.dino_sky3_fill.setTransform(1256.05,329.45);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky3_fill).wait(1));

	// dino_sky2_fill
	this.dino_sky2_fill = new lib.dino_sky2_fill();
	this.dino_sky2_fill.name = "dino_sky2_fill";
	this.dino_sky2_fill.setTransform(723.45,308.3);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky2_fill).wait(1));

	// dino_sky1_fill
	this.dino_sky1_fill = new lib.dino_sky1_fill();
	this.dino_sky1_fill.name = "dino_sky1_fill";
	this.dino_sky1_fill.setTransform(91.9,224);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky1_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino, new cjs.Rectangle(-126,-170,1563.3,1125.3), null);


(lib.dog_eye_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dog_eyebrow_stroke();
	this.instance.setTransform(0,-27.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhIC7QgggPgWgbQgWgbgIggQgHgdAEgyQADgeADgOQAFgSALgbQAcg8AlgeQAWgTAbgIQAbgIAaAGQA4AMAmBDQAfA3AGBAQAEAqgIAoQgFAygnAgQghAbgpAKQgVAHgUAAQgjAAgjgSg");
	this.shape.setTransform(-1.0073,17.0529);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dog_eye_stroke, new cjs.Rectangle(-17.2,-36.3,33.7,73.8), null);


(lib.unicorn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// uni_mouth_stroke
	this.uni_mouth_stroke = new lib.uni_mouth_stroke();
	this.uni_mouth_stroke.name = "uni_mouth_stroke";
	this.uni_mouth_stroke.setTransform(750.7,338.4,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_mouth_stroke).wait(1));

	// unicorn_mouth_fill
	this.instance = new lib.uni_mouth2_fill();
	this.instance.setTransform(749.25,354.95,0.8563,0.8563,-1.7583,0,0,0.1,-0.1);

	this.uni_mouth_fill = new lib.uni_mouth1_fill();
	this.uni_mouth_fill.name = "uni_mouth_fill";
	this.uni_mouth_fill.setTransform(712.5,341.5,0.8563,0.8563,-1.7583,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_mouth_fill},{t:this.instance}]}).wait(1));

	// uni_ear_stroke
	this.uni_ear_stroke = new lib.uni_ear_stroke();
	this.uni_ear_stroke.name = "uni_ear_stroke";
	this.uni_ear_stroke.setTransform(659.85,161.95,0.8564,0.8564,0,13.9838,-166.0162,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_stroke).wait(1));

	// uni_ear_fill
	this.uni_ear_fill = new lib.uni_ear_fill();
	this.uni_ear_fill.name = "uni_ear_fill";
	this.uni_ear_fill.setTransform(660.5,162.65,0.8564,0.8564,0,13.9838,-166.0162);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_fill).wait(1));

	// uni_hair_stroke
	this.uni_hair_stroke = new lib.uni_hair_stroke();
	this.uni_hair_stroke.name = "uni_hair_stroke";
	this.uni_hair_stroke.setTransform(709.2,236.65,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_hair_stroke).wait(1));

	// unicorn_head_fill
	this.uni_horn_fill = new lib.uni_horn_fill();
	this.uni_horn_fill.name = "uni_horn_fill";
	this.uni_horn_fill.setTransform(792.75,153.9,0.8563,0.8563,-1.7583,0,0,0.2,-0.2);

	this.uni_hair_fill = new lib.uni_hair_fill();
	this.uni_hair_fill.name = "uni_hair_fill";
	this.uni_hair_fill.setTransform(708.7,237.15,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_hair_fill},{t:this.uni_horn_fill}]}).wait(1));

	// no_fill_eyes
	this.instance_1 = new lib.dog_eyeshine_fill();
	this.instance_1.setTransform(798.85,242.3,0.781,0.8552,-2.8369,0,0,0.2,-0.1);

	this.instance_2 = new lib.dog_eyeshine_fill();
	this.instance_2.setTransform(713.8,246.25,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.uni_eye2_stroke = new lib.dog_eye_stroke();
	this.uni_eye2_stroke.name = "uni_eye2_stroke";
	this.uni_eye2_stroke.setTransform(798.9,233.4,0.7813,0.8557,0,-2.9246,177.0759,-0.2,-0.2);

	this.uni_eye1_stroke = new lib.dog_eye_stroke();
	this.uni_eye1_stroke.name = "uni_eye1_stroke";
	this.uni_eye1_stroke.setTransform(714.1,237.3,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_eye1_stroke},{t:this.uni_eye2_stroke},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// unicorn_body_stroke
	this.uni_body_stroke = new lib.uni_body_stroke();
	this.uni_body_stroke.name = "uni_body_stroke";
	this.uni_body_stroke.setTransform(662.05,366.25,0.8564,0.8564,11.8938,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_stroke).wait(1));

	// unicorn_body_fill
	this.uni_body_fill = new lib.uni_body_fill();
	this.uni_body_fill.name = "uni_body_fill";
	this.uni_body_fill.setTransform(661.85,365.4,0.8564,0.8564,11.8938,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_fill).wait(1));

	// legs_tail_stroke
	this.uni_tail_stroke = new lib.uni_tail_stroke();
	this.uni_tail_stroke.name = "uni_tail_stroke";
	this.uni_tail_stroke.setTransform(462.45,418.45,0.8563,0.8563,44.369,0,0,0,0.4);

	this.uni_leg1_stroke = new lib.uni_leg1_stroke();
	this.uni_leg1_stroke.name = "uni_leg1_stroke";
	this.uni_leg1_stroke.setTransform(726.15,486.7,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_stroke = new lib.uni_leg2_stroke();
	this.uni_leg2_stroke.name = "uni_leg2_stroke";
	this.uni_leg2_stroke.setTransform(565.25,503.1,0.8563,0.8955,0,15.975,19.6373,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_stroke},{t:this.uni_leg1_stroke},{t:this.uni_tail_stroke}]}).wait(1));

	// legs_tail_fill
	this.uni_tail_fill = new lib.uni_tail_fill();
	this.uni_tail_fill.name = "uni_tail_fill";
	this.uni_tail_fill.setTransform(495.15,409.35,0.8563,0.8563,44.369,0,0,0,0.1);

	this.uni_tailend_fill = new lib.uni_tailend_fill();
	this.uni_tailend_fill.name = "uni_tailend_fill";
	this.uni_tailend_fill.setTransform(429.45,439.6,0.8563,0.8563,44.369,0,0,0.1,0.1);

	this.uni_leg1_fill = new lib.uni_leg1_fill();
	this.uni_leg1_fill.name = "uni_leg1_fill";
	this.uni_leg1_fill.setTransform(726.15,485.75,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_fill = new lib.uni_leg2_fill();
	this.uni_leg2_fill.name = "uni_leg2_fill";
	this.uni_leg2_fill.setTransform(564.3,502.9,0.8563,0.8955,0,15.975,19.6373,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_fill},{t:this.uni_leg1_fill},{t:this.uni_tailend_fill},{t:this.uni_tail_fill}]}).wait(1));

	// uni_bubble_stroke
	this.uni_bubble_stroke = new lib.uni_bubble_stroke();
	this.uni_bubble_stroke.name = "uni_bubble_stroke";
	this.uni_bubble_stroke.setTransform(667.7,436.9,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bubble_stroke).wait(1));

	// uni_bubbles_fill
	this.uni_bubblessm2_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm2_fill.name = "uni_bubblessm2_fill";
	this.uni_bubblessm2_fill.setTransform(1207.8,535.4,0.6813,0.654);

	this.uni_bubblessm5_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm5_fill.name = "uni_bubblessm5_fill";
	this.uni_bubblessm5_fill.setTransform(1026.4,111.15,0.6782,0.6782,0,0,0,0.5,-0.3);

	this.uni_bubblessm6_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm6_fill.name = "uni_bubblessm6_fill";
	this.uni_bubblessm6_fill.setTransform(1048.75,195.7,0.4727,0.4454);

	this.uni_bubblessm4_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm4_fill.name = "uni_bubblessm4_fill";
	this.uni_bubblessm4_fill.setTransform(418.6,96.75,0.4286,0.4286,0,0,0,-0.2,-0.1);

	this.uni_bubblessm1_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm1_fill.name = "uni_bubblessm1_fill";
	this.uni_bubblessm1_fill.setTransform(335.55,546.6,0.5264,0.5264,0,0,0,-0.1,0);

	this.uni_bubblessm3_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm3_fill.name = "uni_bubblessm3_fill";
	this.uni_bubblessm3_fill.setTransform(148.6,229.15,0.8602,0.8405);

	this.uni_bubbleslg4_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg4_fill.name = "uni_bubbleslg4_fill";
	this.uni_bubbleslg4_fill.setTransform(1107.2,177.95,0.5043,0.5043);

	this.uni_bubbleslg3_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg3_fill.name = "uni_bubbleslg3_fill";
	this.uni_bubbleslg3_fill.setTransform(182.95,148.9,0.7086,0.6316,0,0,4.1096);

	this.uni_bubbleslg2_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg2_fill.name = "uni_bubbleslg2_fill";
	this.uni_bubbleslg2_fill.setTransform(1145.05,609.7,0.8128,0.7745);

	this.uni_bubbleslg1_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg1_fill.name = "uni_bubbleslg1_fill";
	this.uni_bubbleslg1_fill.setTransform(248.3,660.55,0.8685,0.8278,0,0,0.9161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_bubbleslg1_fill},{t:this.uni_bubbleslg2_fill},{t:this.uni_bubbleslg3_fill},{t:this.uni_bubbleslg4_fill},{t:this.uni_bubblessm3_fill},{t:this.uni_bubblessm1_fill},{t:this.uni_bubblessm4_fill},{t:this.uni_bubblessm6_fill},{t:this.uni_bubblessm5_fill},{t:this.uni_bubblessm2_fill}]}).wait(1));

	// uni_bg_cloud1_stroke
	this.uni_bg_cloud1_stroke = new lib.bg_cloud1_stroke();
	this.uni_bg_cloud1_stroke.name = "uni_bg_cloud1_stroke";
	this.uni_bg_cloud1_stroke.setTransform(652.65,523.95,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_stroke).wait(1));

	// uni_bg_cloud1_fill
	this.uni_bg_cloud1_fill = new lib.bg_cloud1_fill();
	this.uni_bg_cloud1_fill.name = "uni_bg_cloud1_fill";
	this.uni_bg_cloud1_fill.setTransform(674.1,616.55,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_fill).wait(1));

	// uni_rainbow_stroke
	this.uni_rainbow_stroke = new lib.uni_rainbow_stroke();
	this.uni_rainbow_stroke.name = "uni_rainbow_stroke";
	this.uni_rainbow_stroke.setTransform(664.1,414.6,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_rainbow_stroke).wait(1));

	// uni_rainbow_fill
	this.uni_rainbow3_fill = new lib.uni_rainbow3_fill();
	this.uni_rainbow3_fill.name = "uni_rainbow3_fill";
	this.uni_rainbow3_fill.setTransform(691.4,460.2,0.8405,0.8405);

	this.uni_rainbow5_fill = new lib.uni_rainbow5_fill();
	this.uni_rainbow5_fill.name = "uni_rainbow5_fill";
	this.uni_rainbow5_fill.setTransform(674.65,388.4);

	this.uni_rainbow2_fill = new lib.uni_rainbow2_fill();
	this.uni_rainbow2_fill.name = "uni_rainbow2_fill";
	this.uni_rainbow2_fill.setTransform(678.2,433.8,0.8405,0.8405);

	this.uni_rainbow1_fill = new lib.uni_rainbow1_fill();
	this.uni_rainbow1_fill.name = "uni_rainbow1_fill";
	this.uni_rainbow1_fill.setTransform(669.65,414.75,0.8405,0.8405);

	this.uni_rainbow4_fill = new lib.uni_rainbow4_fill();
	this.uni_rainbow4_fill.name = "uni_rainbow4_fill";
	this.uni_rainbow4_fill.setTransform(689.45,489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_rainbow4_fill},{t:this.uni_rainbow1_fill},{t:this.uni_rainbow2_fill},{t:this.uni_rainbow5_fill},{t:this.uni_rainbow3_fill}]}).wait(1));

	// uni_bg_small
	this.uni_bg_small_fill = new lib.uni_bg_small();
	this.uni_bg_small_fill.name = "uni_bg_small_fill";
	this.uni_bg_small_fill.setTransform(690.15,509.85);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_small_fill).wait(1));

	// bg_sky
	this.uni_bg_fill = new lib.bg_fill();
	this.uni_bg_fill.name = "uni_bg_fill";
	this.uni_bg_fill.setTransform(656.95,436.95,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.unicorn, new cjs.Rectangle(-84,-112,1481.9,1097.9), null);


// stage content:
(lib.mppaintings = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(258,204,1408.1,781.9);
// library properties:
lib.properties = {
	id: '5F38EDE27A224EC0B6F314BD6D49BB95',
	width: 1280,
	height: 800,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5F38EDE27A224EC0B6F314BD6D49BB95'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;