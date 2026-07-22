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


(lib.mark_eye_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AiQBaQAgAZBeAFQBdAGBGgQQACgugEgkQgFhphRggQhYgfg9A2Qg+A2AKB6g");
	this.shape.setTransform(0.0091,0.0033);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSB4QhegFgggZQgKh6A+g2QA9g2BYAfQBRAgAFBpQAEAkgCAuQg0AMhCAAIgtgCg");
	this.shape_1.setTransform(0.0091,0.0033);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#996633").ss(2,1,1).p("AgDB0QhDAJgngQQgBgtABgjQAChmBEglQBEgYAoAsQAoAsACBpQgwAxhCAIg");
	this.shape_2.setTransform(0.0075,-0.0187,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhtBtQgBgtABgjQAChmBEglQBEgYAoAsQAoAsACBpQgwAxhCAIQgXADgUAAQglAAgagKg");
	this.shape_3.setTransform(0.0075,-0.0187,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-13.9,31.2,27.8);


(lib.mark_eye_blink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5A3006").s().p("AjFAqQAkgRgggcQDvA2CYhvQAAA6hfApQgyAWhOAAQhJAAhjgTg");
	this.shape.setTransform(0.0251,0.0151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5A3006").s().p("Ai+AMQCEhwDwA8QgcARAlA3QjYhYilB2QAhgvghgDg");
	this.shape_1.setTransform(0.025,1.8315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-6.1,39.5,14.1);


(lib.eye_shine = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AguAuQgSgTgBgbQABgaASgTQAUgUAaAAQAbAAAUAUQASATABAaQgBAbgSATQgUAUgbAAQgaAAgUgUg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_shine, new cjs.Rectangle(-6.5,-6.5,13.1,13.1), null);


(lib.eye_color_green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#336600").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_color_green, new cjs.Rectangle(-13,-13,26,26), null);


(lib.eye_color_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#996600").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_color_brown, new cjs.Rectangle(-13,-13,26,26), null);


(lib.eye_black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape.setTransform(0.05,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAaAZQAYAZAAAiQAAAjgYAZQgaAZgjAAQgiAAgZgZg");
	this.shape_1.setTransform(0.05,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_black, new cjs.Rectangle(-9.4,-9.4,19,19.1), null);


(lib.carla_eye_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AhzgiQAlhHBLgCQBJgCAnA2QAXAhAHAoQAEAZgBAcQgVALgXAIQhfAfiQgWQAAhUAagxg");
	this.shape.setTransform(0.0086,-0.0293,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNBjQAAhUAagxQAlhHBLgCQBJgCAnA2QAXAhAHAoQAEAZgBAcQgVALgXAIQg4AShJAAQgzAAg7gJg");
	this.shape_1.setTransform(0.0086,-0.0293,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#875421").ss(2,1,1).p("ABmA2QgPAMgRALQhGAnhkgNQgFjFBygLQBYgEAFCjg");
	this.shape_2.setTransform(-0.0076,-0.0188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBnQgFjFBygLQBYgEAFCjQgPAMgRALQg1AdhFAAQgXAAgZgDg");
	this.shape_3.setTransform(-0.0076,-0.0188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-12.4,30.4,25.1);


(lib.carla_eye_blink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3C2208").s().p("AjFAqQAkgRgggcQDvA2CYhvQAAA6hfApQgyAWhOAAQhJAAhjgTg");
	this.shape.setTransform(0.0251,0.0151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C2208").s().p("Ai+AMQCEhwDwA8QgcARAlA3QjYhYilB2QAhgvghgDg");
	this.shape_1.setTransform(0.8762,1.8315,1.0472,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-6.1,40.599999999999994,14.1);


(lib.mark_sleeve_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sleeve
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EA1C7").ss(2,1,1).p("AEehyQjNgykyizQgQEUi1CTQKbGFCyi4");
	this.shape.setTransform(-22.125,-8.9664);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmmBQQC0iTARkUQEyCzDNAyQBvE0AaBbQg5A7hsAAQjkAAnEkIg");
	this.shape_1.setTransform(-22.125,-8.9664);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2EA1C7").ss(2,1,1).p("AgMnwQhaCkhPDrQhODqhTBgAgmHxQC3iODGn7");
	this.shape_2.setTransform(20.65,-27.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlWDpQBThgBPjqQBOjrBbikQDeAXCEFBQjGH7i2COg");
	this.shape_3.setTransform(20.65,-27.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[]},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,-109.7,130.60000000000002,224.10000000000002);


(lib.mark_shirt_star_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#3BC6F3").ss(2,1,1).p("AAAi+QALgBARAWQASAWAaA2QAEAHADAHQAOABAOACQBLAKAPAKQAPAJgHASQgGASgxAoQgMAJgPALQAGATAEATQAPBAgGAZQgFAagwgVQgcgMg9gpQg8ApgcAMQgwAVgGgaQgFgZAOhAQAEgTAGgTQgOgLgMgJQgxgogHgSQgGgSAPgJQAPgKBLgKQAOgCAOgBQADgHADgHQAag2ASgWQASgWAKABg");
	this.shape.setTransform(0.0022,0.0046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BC6F3").s().p("ABZC1QgcgMg9gpQg8ApgcAMQgwAVgGgaQgFgZAOhAQAEgTAGgTIgagUQgxgogHgSQgGgSAPgJQAPgKBLgKIAcgDIAGgOQAag2ASgWQASgWAKABQALgBARAWQASAWAaA2IAHAOIAcADQBLAKAPAKQAPAJgHASQgGASgxAoIgbAUQAGATAEATQAPBAgGAZQgDAPgQAAQgNAAgVgKg");
	this.shape_1.setTransform(0.0022,0.0046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_shirt_star_blue, new cjs.Rectangle(-21.7,-20,43.5,40.1), null);


(lib.mark_hand_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("ACZgcQgFAHgEAJQgxBaAJCuQAAAUgJAOQgLARgLADQgLADgMgDQgJgDgKgOQgGgIgEgJQgQgbgNg9QgOg9AChGAhjCSQgFABgEAAQgLgBgKgIQgHgFgGgRQgShGAOhOQAShnBfimQABgDACgCAgaDpQgCABgCABQgLACgMgEQgIgEgKgOQgSgggKglQgThDAEhVAAVEQQgIABgIgCQgIgDgKgOQgHgKgGgLQgvhVADiH");
	this.shape.setTransform(-7.1805,-2.5058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AAbEvQgJgDgKgNIgKgRQgPgbgOg9QgNg2AAg9IABgRIgBARQAAA9ANA2QAOA9APAbQgHAAgIgCQgJgDgKgNIgNgVQgthRABh9IAAgPIAAAPQgBB9AtBRIgEABQgLADgMgFQgIgDgKgOQgSgggLgmQgPg1AAhBIABghIgBAhQAABBAPA1QgEABgEAAQgLgBgKgHQgHgGgGgQQgShHAOhNQAShoBfimIDoA0IguDdIgKAQQgwBbAJCtQAAAUgJAOQgLASgLADIgLABQgGAAgGgCgAgxDnIAAAAgAh7CPIAAAAg");
	this.shape_1.setTransform(-4.868,-2.2558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#996633").ss(2,1,1).p("AheBRQAlAGAbA7QAaA8AhAQQAiAQAUgQQAVgRgPgsQgPgtgViIQgUiKhmhH");
	this.shape_2.setTransform(16.8182,-13.3671);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9966").s().p("AA4DeQgigQgag8Qgag7glgGIg2jfIBPhXQBmBHAUCKQAUCIAPAtQAPAsgUARQgKAIgOAAQgNAAgRgIg");
	this.shape_3.setTransform(14.1307,-13.3671);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#996633").ss(2,1,1).p("ACBgVQAQAGANALQAcATAUAlQAkBCAkALQAkALASgSQATgSgcgyQgbgxgTgpQgLgYgRg0QgQhmgxgrQgygrhRACQhdgmg4AmQg4AngnB7QgMAigOAPQgWAYg3A7Qg4A7AOAjQANAjAfgGQAegIApgyQAJgLAKgKQgZAygTA3QgVA/AiAZQAiAXAXgoQAWgoAWgvQAUgnAcgwQgBAWgKAmQgQBBgFBCQgGBDAnAOQAnAPAMgrQAMgtALgzQAKgzAWhGQAFgOAEgLQACAXgDAqQgGBBAFBDQAGBDAoAIQApAJAFguQAFguADg0QADg0AKhIQAGgqAJgTAAbAWQADAIACAOAimgpQgHAYgVAoQgEAIgEAJAhSAIQgBASgBAQ");
	this.shape_4.setTransform(0.719,-1.7202);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC9966").s().p("AhTE6QgngOAGhDQAFhCAQhBQAKgmABgWIACgiIgCAiQgcAwgUAnQgWAvgWAoQgXAogigXQgigZAVg/QATg3AZgyIgTAVQgpAygeAIQgfAGgNgjQgOgjA4g7IBNhTQAOgPAMgiQAnh7A4gnQA4gmBdAmQBRgCAyArQAxArAQBmQARA0ALAYQATApAbAxQAcAygTASQgSASgkgLQgkgLgkhCQgUglgcgTQgJATgGAqQgKBIgDA0QgDA0gFAuQgFAugpgJQgogIgGhDQgFhDAGhBQADgqgCgXQgCgOgDgIQADAIACAOIgJAZQgWBGgKAzQgLAzgMAtQgJAggYAAQgIAAgKgEgAjCAXIgIARIAIgRQAVgoAHgYQgHAYgVAogACegEQgNgLgQgGQAQAGANALg");
	this.shape_5.setTransform(0.719,-1.7202);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#996633").ss(2,1,1).p("AChgGQAIgQAJgFAChgGQAdAUAUAmQAmBDAkALQAlALATgSQATgTgcgyQgdgzgUgqQgMgYgQg1QgQhogzgtQgzgshUAEQhegng6AoQg5AngnB9QgMAkgPAQQgWAYg4A9Qg5A7AOAlQAOAkAfgIQAfgHAqgzQAKgMAKgMQgaA1gTA5QgVBBAjAYQAjAYAXgpQAWgpAXgwQAUgnAdgyQgCAXgJAmQgQBBgGBFQgGBEAoAQQAoAPAMguQANgtAKg0QALg1AWhHQAEgNAEgLQAEgLAEgIAAgAuQACAXgDApQgFBDAFBFQAGBEAqAIQApAJAGguQAEgwADg1QACg2ALhJQAGgrAJgUAipgYQgSAbgLAVQgEAHgEAIAhVArQAGgMAHgL");
	this.shape_6.setTransform(0.4581,-0.7767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9966").s().p("AhUFCQgogQAGhEQAGhFAQhBQAJgmACgXQgdAygUAnQgXAwgWApQgXApgjgYQgjgYAVhBQATg5Aag1IgUAYQgqAzgfAHQgfAIgOgkQgOglA5g7IBOhVQAPgQAMgkQAnh9A5gnQA6goBeAnQBUgEAzAsQAzAtAQBoQAQA1AMAYQAUAqAdAzQAcAygTATQgTASglgLQgkgLgmhDQgUgmgdgUQAIgQAJgFQgJAFgIAQQgJAUgGArQgLBJgCA2QgDA1gEAwQgGAugpgJQgqgIgGhEQgFhFAFhDQADgpgCgXIAIgTIgIATIgIAYQgWBHgLA1QgKA0gNAtQgJAigYAAQgJAAgKgDgAhVArIANgXIgNAXgAjGAYIgIAPIAIgPQALgVASgbQgSAbgLAVg");
	this.shape_7.setTransform(0.4581,-0.7767);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996633").ss(2,1,1).p("AA1AeQgbBEAJBxQgDAlgYAKQgZALgRg0QgRg0gCgYQgSiVB/j7");
	this.shape_8.setTransform(-16.8461,-8.8658);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC9966").s().p("Ah3DZQgQg0gCgYQgTiVCAj7ICoBDIirDeIAAAAQgbBEAJBxQgCAlgYAKQgFACgEAAQgVAAgOgrg");
	this.shape_9.setTransform(-8.3961,-8.8658);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#996633").ss(2,1,1).p("ABDhqQghBEAHBPQAHBPgMAWQgNAVgXgBQgWgCgfhgQgehfAkiC");
	this.shape_10.setTransform(-12.5388,6.2185);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9966").s().p("AAACiQgWgCgfhgQgehfAkiCIByA3QghBEAHBPQAHBPgMAWQgMAUgVAAIgDAAg");
	this.shape_11.setTransform(-12.5388,6.2185);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#996633").ss(2,1,1).p("ABCiIQgWAngGBGQgGBFAGA4QAGA5ghAJQggAJgahYQgahXALii");
	this.shape_12.setTransform(-6.7482,10.1273);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC9966").s().p("AgvBVQgahXALiiICAAcQgWAngGBGQgGBFAGA4QAGA5ghAJIgGABQgcAAgYhQg");
	this.shape_13.setTransform(-6.7482,10.1273);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#996633").ss(2,1,1).p("ABii1QhRBYAMDbQAAAUgKAOQgLASgKADQgLADgMgEQgIgDgLgNQhHhuAXi/");
	this.shape_14.setTransform(0.3514,10.0317);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9966").s().p("AgLENQgIgDgLgNQhIhuAYi/IghgiICai8IBFCyQhRBZAMDaQAAAUgKAOQgLASgLADIgKABQgFAAgHgCg");
	this.shape_15.setTransform(-1.025,1.1192);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#996633").ss(2,1,1).p("AheBRQAlAGAbA7QAaA8AhAQQAiAQAUgQQAVgRgPgsQgPgtgViIQgUiKhmhH");
	this.shape_16.setTransform(16.8182,-13.3671);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC9966").s().p("AA4DeQgigQgag8Qgag7glgGIg2jfIBPhXQBmBHAUCKQAUCIAPAtQAPAsgUARQgKAIgOAAQgNAAgRgIg");
	this.shape_17.setTransform(14.1307,-13.3671);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_3},{t:this.shape_2},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-52.8,143.2,173.1);


(lib.mark_sideburn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABHhxQgWCohJCWIgumZ");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AhGjMICNBcQgWCnhJCWg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_sideburn, new cjs.Rectangle(-8.1,-21.5,16.2,43), null);


(lib.mark_nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AhjARQBohDBfBD");
	this.shape.setTransform(0,0.035);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_nose, new cjs.Rectangle(-11,-2.7,22,5.5), null);


(lib.mark_neck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("ACuiEQgBABAAACQgUC1B1BIQAIAFAJAEAitiEQABABAAACQAUC1h2BIQgHAFgJAE");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("AkNAmQB1hHgUi2IFZAAQgUC2B1BHQhmCLioAnQingnhmiLg");
	this.shape_1.setTransform(-0.0125,8.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-25.3,67.9,58.7);


(lib.mark_mouth_front34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AEjhLQgPA4hEAqQhWA1h6AAQh6AAhWg1QhFgqgNg4");
	this.shape.setTransform(0.65,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996633").ss(2,1,1).p("AjvAOQghg9gGhiQCdAnCPgBQAEAAADAAQB4AACCgmQgFBigcA+AjvAOQABgBACgBQBsg1CWAAQAEAAADAAQB9ABBYA0QACACACABAjvAOQAcA1AwAdQBRAwBmACQABAAACAAQABAAABAAQADAAACAAQBVgDBEgvQAngcAYg1");
	this.shape_1.setTransform(-2.375,6.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD4848").s().p("ADyBOQhYg1h9gCIgHAAQiWAAhsA3IgDACQghg/gGhgQCdAmCPgBIAHAAQB4AACCglQgFBggcA/IgEgCg");
	this.shape_2.setTransform(-2.375,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AAWBeIgCAAIgDAAQhmgChRgwQgwgcgcg1IADgBQBsg3CWAAIAHAAQB9ABBYA2IAEACQgYA0gnAcQhEAvhVADIgFAAg");
	this.shape_3.setTransform(-2.075,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#996633").ss(2,1,1).p("ADoBIQBMhSALifQgYAKgYAJIgKBDQhZAghyAGQB4AtA2BIQgGAIgHAHQhTBPiTAEQj8AHgsjeQgEgRgCgRAEPiWQjuBOlfhVQAAAXACAVQAAAFAAAGQACALABAMAA6gtQihAIjSgq");
	this.shape_4.setTransform(-1.825,3.7607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkhAVIgDgWIAAgLQgCgVAAgXQFeBVDvhOIgKBCQhaAghxAGIg4ACQiMAAivgkg");
	this.shape_5.setTransform(-4.2,-6.3792);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AkKhaIgGgiQDSAqChgIQB4AtA2BIIgNAPQhTBPiUAEIgPAAQjtAAgrjXg");
	this.shape_6.setTransform(-5.925,8.2607);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD4848").s().p("AiBADQBxgFBZggIAKhDIAwgTQgLCehMBTQg1hJh4gtg");
	this.shape_7.setTransform(17,-1.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#996633").ss(2,1,1).p("AiMAEQAGgvAsguQAtguA2AAQA5AAAjAqQAkApAFAwAiMAEQAugoBDgLQBCgLAtARQAsARAOAUQABAIAAAJQAAA7glAfQglAfg0ACQhCACgugcQgvgcAAg7QAAgKACgJg");
	this.shape_8.setTransform(-1.4,6.6567);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AhfBEQgvgcAAg6IACgTQAugpBEgLQBBgLAsARQAsARAPAUIABATQgBA6gkAfQglAeg0ACIgJAAQg8AAgrgag");
	this.shape_9.setTransform(-1.4,10.8406);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD4848").s().p("AhagXQAtguA2AAQA4AAAkAqQAjApAFAvQgOgUgsgRQgsgRhCALQhDALguApQAGgvAsgug");
	this.shape_10.setTransform(-1.375,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-14.2,66.3,36.099999999999994);


(lib.mark_hair_front34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkSiBQCKEsGbgWQhvhrgIifQgBgQAAgQ");
	this.shape.setTransform(2.3428,3.985,0.8747,0.9599,0,-7.8938,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AkShIIA3iHQD0BJCCAqIABAgQAICfBvBrQgdACgbAAQltAAiAkYg");
	this.shape_1.setTransform(1.5864,-1.4705,0.8747,0.9599,0,-7.8938,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ADSidQgBAHAAAGQgMCgBQCNQlxAEiukSQgFgIgFgI");
	this.shape_2.setTransform(36.3294,6.7193,0.8747,0.8971,0,-7.8943,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282828").s().p("AkPghIA5ixQEwheByDwQgMCgBQCNIgJABQlqAAiskPg");
	this.shape_3.setTransform(35.7812,-0.3885,0.8747,0.8971,0,-7.8943,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AE+kSQh+Gqn6B7QgSjmBWimQAGgNAIgN");
	this.shape_4.setTransform(-48.7936,17.0063,0.8749,0.8794);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282828").s().p("Aj2hcICvjSIGFA4Qh+Gqn6B7QgSjlBWimg");
	this.shape_5.setTransform(-48.7936,14.5109,0.8749,0.8794);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("An9lHQEygfC6A9QC5A8CUCHQAkAiAdAhAD/AZQgEAzAFAwQAmBFAmAmQAmAlB1A8QAMAGAJAFQAJgfgaiIQgUhjhPhf");
	this.shape_6.setTransform(25.5753,-7.3723);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282828").s().p("AH+FIQh1g8gmglQgmgmgmhFQgDgbAAgcQAAgVACgXQgCAXAAAVQAAAcADAbIgTgZQg8hQgogyQgLAFgOAHIgNAJQgpAZgiATQgbhYnrAgQg1ghgIhPQACirAtgUIgBgCQEygfC5A9QC6A8CUCHQAkAiAdAhIALAAIAAANQBPBfAUBjQAaCIgJAfIgVgLg");
	this.shape_7.setTransform(23.2753,-7.3723);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_hair_front34, new cjs.Rectangle(-77.6,-42.2,155.2,84.4), null);


(lib.mark_hair_back_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALVE6QAIgSAHgSQBNjIgbjVQgejuiZizQhmh3iTg7Qh/gxiIgSQjlgYjeBIQjuBNh8DfQgrBMgXBiQgmDXBPDaQBUDnC4CmQCtCcDfBEQAIADAJADQAdAJAdAK");
	this.shape.setTransform(-0.0161,0.0073);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AhPMVQjfhEiticQi4imhUjnQhPjaAmjXQAXhiArhMQB8jfDuhNQDehJDlAZQCIASB/AxQCTA7BmB3QCZCzAeDuQAbDVhNDIIsiH6IgRgFg");
	this.shape_1.setTransform(-0.0161,-0.9552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_hair_back_front34, new cjs.Rectangle(-80.7,-81.4,161.4,162.8), null);


(lib.mark_face_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AIYpqQBaCoAVDrQAVDqg9DZQg9DYiQBaQiRBZicgOQibgOiQhHQiQhIiQjRQhaiDhLjt");
	this.shape.setTransform(2.5689,6.6447);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9966").s().p("ABlKrQibgOiQhHQiQhIiQjRQhaiDhLjtQBrjLEVmuIMjCEQBaCoAVDrQAVDqg9DZQg9DYiQBaQh9BNiGAAQgVAAgVgCg");
	this.shape_1.setTransform(2.5689,0.0197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_face_front34, new cjs.Rectangle(-63.6,-68.5,132.4,138.1), null);


(lib.mark_eyebrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiQATQAhhMBnALQBmAKAzBVQiMgqiVAMg");
	this.shape.setTransform(0.0759,-0.5801,0.7997,0.7997,-5.5139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AiQATQAhhMBnALQBmAKAzBVQiMgqiVAMg");
	this.shape_1.setTransform(0.0759,-0.5801,0.7997,0.7997,-5.5139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_eyebrow, new cjs.Rectangle(-12.3,-5.3,25.3,8.5), null);


(lib.mark_ear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AhJgBQBJhBA0AqQAeAXgKAq");
	this.shape.setTransform(1.0407,-6.6836);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996633").ss(2,1,1).p("AhshwQADgCADgDQBdhZBLAqQBPAsgLBeQgKBdhiBLQhdBIg9hGQgDgEgDgE");
	this.shape_1.setTransform(-0.0078,-0.0213);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9966").s().p("AiDCQIAZkFQBehZBLAqQBPAsgLBeQgLBdhiBLQguAkgnAAQgmAAgegig");
	this.shape_2.setTransform(0.3172,-0.0213);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_ear, new cjs.Rectangle(-14.5,-18.8,29.1,37.7), null);


(lib.carla_sleeve_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carla_sleeve
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0052").ss(2,1,1).p("AC0q5QleI2j3KMQCyCpEyAIQCQo0DPl4");
	this.shape.setTransform(-4.3952,9.7985,1,1,-5.4233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF408C").s().p("AmhIJQD3qMFeo1QCsBbBCFrQjPF4iQI0QkygIiyipg");
	this.shape_1.setTransform(-4.3952,9.7985,1,1,-5.4233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0052").ss(2,1,1).p("AEehyQjNgykyizQgQEUi1CTQKbGFCyi4");
	this.shape_2.setTransform(-22.125,-8.9664);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF408C").s().p("AmmBQQC0iTARkUQEyCzDNAyQBvE0AaBbQg5A7hsAAQjkAAnEkIg");
	this.shape_3.setTransform(-22.125,-8.9664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CC0052").ss(2,1,1).p("AAHnsQhjCchPDrQhODqhTBgAgcHtQC3iOCynF");
	this.shape_4.setTransform(19.65,-27.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF408C").s().p("AlMDlQBThgBPjqQBOjrBjicIFGGGQiyHFi2COg");
	this.shape_5.setTransform(19.65,-27.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,-106,130.60000000000002,220.4);


(lib.carla_shirtp_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shirt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0052").ss(2,1,1).p("Ap0qlQAEgGAEgGQB+inD8g/QBcCPC0ARQDdgFAPiVQDzBDB0CtQACADACADAn7pEQgMA8gLA7QhzJbgsJMQDoDWIKgbQG1gGC8i1Qg6rNhNoAQgHgvgHgs");
	this.shape.setTransform(0,0.4388);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF408C").s().p("AqwLaQArpMBzpbIAXh3IgXB3IhZjkQB9inD8g/QBcCPC0ARQDdgFAPiVQDzBDB0CtIhGCuQBNIAA5LNQi7C1m1AGQg7ADg2AAQmzAAjNi+gAIrnzIgOhbIAOBbg");
	this.shape_1.setTransform(0,0.4388);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0052").ss(2,1,1).p("An7oOQgLA8gMA8QhzJagsJMQDnDXILgbQG2gHC7i1Qg5rNhNn/QgIgvgHgtApVvEQCfBnDEgDQBcCPC0ARQDDABAqibQCqgICEhs");
	this.shape_2.setTransform(0,-5.0116);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF408C").s().p("AqwMQQAspMBypaIAXh4IgXB4QhKhqgZhvQglikBFixQCfBnDEgDQBcCPC0ARQDDABApibQCrgICEhsQBRC/gbChIgEATQgRBTgvBMQBOH/A4LNQi6C1m2AHQg7ADg1AAQm0AAjNi/gAIrm8IgOhcIAOBcg");
	this.shape_3.setTransform(0,-5.0116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-103.4,139.9,196.9);


(lib.carla_shirt_star = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#B67A00").ss(2,1,1).p("ABnkQQg4hWgsgFQgBAAgCAAQAAAAgCAAQgsAFg4BWQgiA0gZA3Qg7AJg8AUQhhAhgQAoQgBACgBABQAAABAAACQgGArBEBLQAbAeAcAaQgPAtgKAxQgVBkAbAiQABACABABQABAAABABQAjAbBkgUQBVgSBJgiQBKAiBVASQBkAUAjgbQABgBABAAQABgBABgCQAbgigVhkQgKgxgPgtQAcgaAbgeQBEhLgGgrQAAgCAAgBQgBgBgBgCQgQgohhghQg8gUg7gJQgZg3gig0g");
	this.shape.setTransform(0,-0.0076);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("ACfFkQhVgShKgiQhJAihVASQhkAUgigbIgDgBIgCgDQgbgiAVhkQAKgxAPgtQgcgagbgeQhEhLAHgrIAAgDIABgDQAQgoBhghQA8gUA7gJQAZg3Aig0QA4hWAsgFIACAAIADAAQAsAFA4BWQAiA0AZA3QA7AJA8AUQBhAhAQAoIABADIAAADQAHArhEBLQgbAegcAaQAPAtAKAxQAVBkgbAiIgCADIgDABQgTAPgpAAQgfAAgrgIg");
	this.shape_1.setTransform(0,-0.0076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_shirt_star, new cjs.Rectangle(-40.6,-37.4,81.2,74.9), null);


(lib.carla_shirt_heart = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#770030").ss(2,1,1).p("AC8l6QCUgdBPB5QBPB4gmB/QglB+h+BmQh8BkipBgQiohgh8hkQh+hmgmh+Qglh/BPh4QBPh5CUAdQB/AYA8CJQA9iJB/gYg");
	this.shape.setTransform(0.0027,0.0215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0052").s().p("AkkC9Qh+hmgmh+Qglh/BPh4QBPh5CUAdQB/AYA8CJQA9iJB/gYQCUgdBPB5QBPB4gmB/QglB+h+BmQh8BkipBgQiohgh8hkg");
	this.shape_1.setTransform(0.0027,0.0215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AC8l6QCUgdBPB5QBPB4gmB/QglB+h+BmQh8BkipBgQiohgh8hkQh+hmgmh+Qglh/BPh4QBPh5CUAdQB/AYA8CJQA9iJB/gYg");
	this.shape_2.setTransform(0.0027,0.0215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-39.4,95.69999999999999,78.9);


(lib.carla_hand_mc = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("ABRgcQgFAHgEAJAC2j2QACAFACAFQBBDOgsCQQAAABgBABQgMAcgSAGQgSAGgOgIQgOgJgIgSQgHgRgGgnQgFgmgQgXQgHgJgJgHQgxBaAJCuQAAAUgJAOQgLARgLADQgKADgMgDQgJgDgKgOQgFgIgFgJQgQgbgOg9QgOg9AChGAirCSQgFABgEAAQgLgBgKgIQgHgFgGgRQgRhGANhOQAShnBfimQACgDABgCAhiDpQgCABgCABQgLACgMgEQgIgEgKgOQgSgggKglQgThDAEhVAgyEQQgIABgIgCQgJgDgKgOQgHgKgGgLQgvhVADiH");
	this.shape.setTransform(0.0031,-2.5058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87542").s().p("AgVEvQgJgDgKgNIgKgRQgQgbgOg9QgMg2AAg9IAAgRIAAARQAAA9AMA2QAOA9AQAbQgIAAgIgCQgJgDgKgNIgNgVQgshRAAh9IAAgPIAAAPQAAB9AsBRIgEABQgLADgMgFQgIgDgKgOQgSgggKgmQgPg1AAhBIAAghIAAAhQAABBAPA1QgFABgEAAQgLgBgKgHQgHgGgGgQQgRhHANhNQAShoBfimIEjBBQBBDOgsCRIgBABQgMAcgSAHQgSAGgOgJQgOgJgIgRQgHgSgGgmQgFgngQgXQgHgJgJgHQgxBbAJCtQAAAUgJAOQgLASgLADIgJABQgHAAgGgCgABIgPIAJgQIgJAQgAhiDnIAAAAg");
	this.shape_1.setTransform(0.0031,-2.2558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#875421").ss(2,1,1).p("AA1AeQgbBEAJBxQgDAlgYAKQgZALgRg0QgRg0gCgYQgSiVB/j7");
	this.shape_2.setTransform(-16.8461,-8.8658);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A87542").s().p("Ah3DZQgQg0gCgYQgTiVCAj7ICoBDIirDeIAAAAQgbBEAJBxQgCAlgYAKQgFACgEAAQgVAAgOgrg");
	this.shape_3.setTransform(-8.3961,-8.8658);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#875421").ss(2,1,1).p("ABDhqQghBEAHBPQAHBPgMAWQgNAVgXgBQgWgCgfhgQgehfAkiC");
	this.shape_4.setTransform(-12.5388,6.2185);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A87542").s().p("AAACiQgWgCgfhgQgehfAkiCIByA3QghBEAHBPQAHBPgMAWQgMAUgVAAIgDAAg");
	this.shape_5.setTransform(-12.5388,6.2185);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#875421").ss(2,1,1).p("ABCiIQgWAngGBGQgGBFAGA4QAGA5ghAJQggAJgahYQgahXALii");
	this.shape_6.setTransform(-6.7482,10.1273);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A87542").s().p("AgvBVQgahXALiiICAAcQgWAngGBGQgGBFAGA4QAGA5ghAJIgGABQgcAAgYhQg");
	this.shape_7.setTransform(-6.7482,10.1273);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#875421").ss(2,1,1).p("ABii1QhRBYAMDbQAAAUgKAOQgLASgKADQgLADgMgEQgIgDgLgNQhHhuAXi/");
	this.shape_8.setTransform(0.3514,10.0317);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A87542").s().p("AgLENQgIgDgLgNQhIhuAYi/IghgiICai8IBFCyQhRBZAMDaQAAAUgKAOQgLASgLADIgKABQgFAAgHgCg");
	this.shape_9.setTransform(-1.025,1.1192);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#875421").ss(2,1,1).p("AheBRQAlAGAbA7QAaA8AhAQQAiAQAUgQQAVgRgPgsQgPgtgViIQgUiKhmhH");
	this.shape_10.setTransform(16.8182,-13.3671);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A87542").s().p("AA4DeQgigQgag8Qgag7glgGIg2jfIBPhXQBmBHAUCKQAUCIAPAtQAPAsgUARQgKAIgOAAQgNAAgRgIg");
	this.shape_11.setTransform(14.1307,-13.3671);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#875421").ss(2,1,1).p("AheBRQAlAGAbA7QAaA8AhAQQAiAQAUgQQAVgRgPgsQgPgtgViIQgUiKhmhH");
	this.shape_12.setTransform(16.8182,-13.3671);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A87542").s().p("AA4DeQgigQgag8Qgag7glgGIg2jfIBPhXQBmBHAUCKQAUCIAPAtQAPAsgUARQgKAIgOAAQgNAAgRgIg");
	this.shape_13.setTransform(14.1307,-13.3671);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-52.8,144.7,129.6);


(lib.carla_apron_front3402 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#037968").ss(2,1,1).p("AGV2XQgcgJgcgHQAABshHBZQgEAFgEAEQgmAtg0AbQgzAZg4AFQg2ABg1gIQg2gHgzgRQghgLgggQQgKgGgKgHQhqhRgkhsQgXAKgXAMQifBQiXB2AEMyCQgqAlgyAWQggAOggAHAGV2XQADBxhOBkQgcAkgiAcAGV2XQCLAqB9BCQgIDgg2DdQAJBeAFCAQACBOAJDBQAAALABAMQAAAGABAFQAXD/A6E4QBTHDAPJbQkaCtnmAFQlhAEklhWQgijhAIjtQgvDEgVDsQg8gVg5gZQAWpoAymfQAymfA4lgQAKg/AIg6IDEi2QgulokAgIQg8DECmFiAI3xIQAaBEAOCWAjOxmQgagPgVgTQhyhmgthzABwwyQg6AIg7gGQg3gEg2gOQgvgNgtgX");
	this.shape.setTransform(0,-0.9161);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3ED7C1").s().p("AiOkSQD/AIAuFnIjDC2QimlhA8jEg");
	this.shape_1.setTransform(-57.9697,-91.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66F4E0").s().p("ApYVWQgjjhAJjtQgwDEgVDsQg8gVg5gZQAXpoAxmfQAymfA4lgIASh5IDFi2QgvlokAgIQCXh2CghQQAsBzByBmQAVATAbAPIgFCYIHYAPIAGjDQAigcAcgkQBLhgAAhtIAAgIQCLAqB9BCQgIDgg2DdQAJBeAECAIAMEPIABAXIABALQAXD/A6E4QBTHDAPJbQkaCtnmAFIgfAAQlPAAkXhSgAJftuQgPiWgahEQAaBEAPCWgAjSvOIAFiYQAsAXAvANQA2AOA4AEIADAAQAXACAZAAIAAAAIAAAAQAbAAAagCIABgBIALgBIgLABIgBABQgaACgbAAIAAAAIAAAAQgZAAgXgCIgDAAQg4gEg2gOQgvgNgsgXIAChHQAgAQAgALQA0ARA1AHQA0AIA3gBQA4gFAygZQA0gbAngtIgCBXQgrAlgxAWQggAOggAHIgKgDIAKADIAAAAQAggHAggOQAxgWArglIgGDDgAj9yIQhyhmgshzIAugWQAjBsBrBRQAJAHALAGIgCBHQgbgPgVgTgAEMyCIAChXIAHgJQBIhZAAhsIA4AQIAAAIQAABthLBgQgcAkgiAcgAEOzZg");
	this.shape_2.setTransform(0,-0.9161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-164.5,167.5,309.4);


(lib.carla_apron_arm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#037968").ss(2,1,1).p("AAKmPQh5BFh2BcQDwBkBFIaQBiiPA0jZ");
	this.shape.setTransform(-49.3,-95.0625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66F4E0").s().p("AjljuQB2hcB6hFQCzDTAoDkQg0DZhiCPQhFoajwhkg");
	this.shape_1.setTransform(-49.3,-95.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(5));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#037968").ss(2,1,1).p("ADrAoQg0DZhiCPQl5j+BEmAQB2hcB6hF");
	this.shape_2.setTransform(-49.8251,-95.0625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3ED7C1").s().p("AjgjuQB2hcB6hFQCzDTAoDkQg0DZhiCPQl5j+BEmAg");
	this.shape_3.setTransform(-49.8251,-95.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-164.5,94,117.7);


(lib.carla_sideburn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag1jiQhKCFAGCBQAEBgAvBfQAGhgA0hfQAvhXBYhX");
	this.shape.setTransform(-1.8057,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("Ah5AkQgGiBBKiFICVBFIAbATQhYBXgvBXQg0BfgGBgQgvhfgEhgg");
	this.shape_1.setTransform(-1.8057,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_sideburn, new cjs.Rectangle(-15,-18.9,26.5,47.4), null);


(lib.carla_nose = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AheAQQBihABbBA");
	this.shape.setTransform(0.05,0.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_nose, new cjs.Rectangle(-10.4,-2.5,21,5.2), null);


(lib.carla_neck = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("ACuiEQgBABAAACQgUC1B1BIQAIAFAJAEAitiEQABABAAACQAUC1h2BIQgHAFgJAE");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87542").s().p("AkNAmQB1hHgUi2IFZAAQgUC2B1BHQhmCLioAnQingnhmiLg");
	this.shape_1.setTransform(-0.0125,8.6125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-14.3,67.9,47.7);


(lib.carla_mouth_front34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AFEhLQgRA5hMApQhfA1iIAAQiHAAhgg1QhMgpgPg5");
	this.shape.setTransform(-1.35,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#875421").ss(2,1,1).p("Aj5AOQgig9gGhiQCkAnCUgBQAEAAAEAAQB8AACHgmQgFBigdA+Aj5AOQAeA1AxAdQBVAwBqACQABAAACAAQABAAABAAQACAAADAAQBYgDBHgvQApgcAZg1Aj5AOQACgBACgBQBwg1CcAAQAEAAAEAAQCBABBcA0QACACACAB");
	this.shape_1.setTransform(-2.35,6.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD4848").s().p("AD7BOQhbg1iBgCIgIAAQicAAhwA3IgDACQgjg/gGhgQCjAmCVgBIAIAAQB8AACHglQgFBggdA/IgFgCg");
	this.shape_2.setTransform(-2.35,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9999").s().p("AAXBeIgCAAIgDAAQhqgChVgwQgygcgcg1IADgBQBwg3CcAAIAIAAQCBABBbA2IAFACQgZA0gqAcQhGAvhYADIgFAAg");
	this.shape_3.setTransform(-2.05,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#875421").ss(2,1,1).p("AEriaQgUAJgMAEQjsBPl2huQgDAmACAiQAJDUDEAvQDgA2CFhkQAYgTATgUQBYhfgEicQgaAOgUAJIgWBbQhFAVhKAIQBaAnAlBFACGgiQjYAXkGhZ");
	this.shape_4.setTransform(-4.2414,3.7437);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlBABQgBghACgmQF2BsDthNIAfgNIgWBaQhFAVhKAHQgtAFgvAAQiyAAjQhGg");
	this.shape_5.setTransform(-6.55,-6.4296);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("AhhB5QjDgwgKjTQEHBZDXgYQBbApAkBEQgTAUgYASQhWBBh+AAQhCAAhPgSg");
	this.shape_6.setTransform(-8.45,7.5937);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CD4848").s().p("AhpARQBKgIBEgUIAWhbIAugXQAECbhYBgQgkhFhagog");
	this.shape_7.setTransform(19.7586,-1.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#875421").ss(2,1,1).p("AiSAEQAHgvAuguQAuguA5AAQA6AAAlAqQAlAqAFAvQABAIAAAJQAAA7gmAfQgmAfg3ACQhEACgwgcQgwgcAAg7QAAgKABgJQAxgoBFgLQBFgLAtARQAuARAPAU");
	this.shape_8.setTransform(-1.35,6.656);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9999").s().p("AhjBEQgwgcAAg6IABgTQAxgpBFgLQBFgLAtARQAuARAPAUIABATQAAA6gmAfQgnAeg2ACIgIAAQg/AAgtgag");
	this.shape_9.setTransform(-1.35,10.839);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CD4848").s().p("AhdgXQAuguA4AAQA7AAAlAqQAlApAFAvQgPgUgugRQgugRhEALQhFALgxApQAHgwAugtg");
	this.shape_10.setTransform(-1.325,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-15,72.4,37.6);


(lib.carla_hairtie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CC0052").ss(2,1,1).p("ABkAAQAAApgeAeQgcAdgqAAQgpAAgdgdQgdgeAAgpQAAgoAdgeQAdgdApAAQAqAAAcAdQAeAeAAAog");
	this.shape.setTransform(0,0,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF408C").s().p("AhGBGQgdgcAAgqQAAgpAdgdQAdgdApAAQAqAAAdAdQAdAdAAApQAAAqgdAcQgdAegqAAQgpAAgdgeg");
	this.shape_1.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_hairtie, new cjs.Rectangle(-11,-11,22,22), null);


(lib.carla_hair_tail = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFdkeQh+jqjsAiQjkAghfEBQAWgTBEgpQh1DLARFkQBWAMA7A7QgWhGAliNQAACrAqBcQAdAUAjAKQAuANBDAYQhwnvBuidQBhiLCMBm");
	this.shape.setTransform(-1.5078,-0.0157);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AhQHHQgjgKgdgUQgqhcAAirQglCNAWBGQg7g7hWgMQgRlkB1jLQhEApgWATQBfkBDkggQDsgiB+DqIhRBZQiMhmhhCLQhuCdBwHvQhDgYgugNg");
	this.shape_1.setTransform(-1.5078,-0.0157);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_hair_tail, new cjs.Rectangle(-37.4,-50.2,71.8,100.4), null);


(lib.carla_hair_front34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKQCKQlRiFh5i6QjjEapyBR");
	this.shape.setTransform(-20.5,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("ApOAMQA8h0CxiEILZAAIDwErIAoCCQlRiFh5i6QjjEapyBRQAGhrA7h2g");
	this.shape_1.setTransform(-20.5,11.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_hair_front34, new cjs.Rectangle(-87.1,-12.2,133.2,48.5), null);


(lib.carla_hair_back_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ALMCmQABgDABgCQAihGAKhHQARhygihwQgihyhDhiQgfgtglgrQhdhhiEg+QkPh/kmA3QgDAAgCABQhPAPhOAdQj0BYhdDtQhcDqBCDzQAEAQAFARQAqCGBTBxQDJESGEBSQAWAFAXAE");
	this.shape.setTransform(1.3438,-0.006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("ApdGLQhThxgqiHIgJggQhCj0BcjpQBdjtD0hZQBOgcBPgPIAFgBQEmg3EPB/QCEA9BdBiQAlArAfAtQBDBiAiBxQAiBwgRBzQgKBGgiBHIABAJIrfI/QmEhSjJkRgALMCqIACgEIgCAEg");
	this.shape_1.setTransform(1.3438,-0.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_hair_back_front34, new cjs.Rectangle(-76.4,-76.4,155.5,152.9), null);


(lib.carla_face_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AHMp/QApA3AgA3QBlCsAJCsQAODhhEDZQhDDYiSBaQiTBZicgOQiagOiOhHQiOhIh8ivQhxiggkizQgEgSgDgS");
	this.shape.setTransform(-0.4375,6.5697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A87542").s().p("ABGLAQiagOiOhHQiOhIh8ivQhxiggki0ICal9IKLlkIFuDyQBlCsAJCsQAODhhEDZQhDDYiSBaQh/BNiGAAQgVAAgVgCg");
	this.shape_1.setTransform(-0.1125,-0.0053);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_face_front34, new cjs.Rectangle(-66,-70.6,131.2,142.2), null);


(lib.carla_eyebrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhYAKQAggwA2AIQA1AHAmA3QhfglhSAPg");
	this.shape.setTransform(-0.025,-0.0252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282828").s().p("AhYAKQAggwA2AIQA1AHAmA3QhfglhSAPg");
	this.shape_1.setTransform(-0.025,-0.0252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_eyebrow, new cjs.Rectangle(-9.9,-4.2,19.8,8.4), null);


(lib.carla_ear = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AhOgBQBOhGA4AtQAfAZgKAt");
	this.shape.setTransform(-0.0128,-6.3723,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#875421").ss(2,1,1).p("Ahzh3QADgDADgDQBjhgBRAuQBUAvgLBkQgMBkhpBQQhiBNhBhLQgEgEgEgE");
	this.shape_1.setTransform(-0.0052,0.0385,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A87542").s().p("AiMCaIAbkXQBjhgBRAuQBUAvgLBkQgMBkhpBQQgxAngqAAQgoAAggglg");
	this.shape_2.setTransform(0.3323,0.0385,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_ear, new cjs.Rectangle(-14,-18.1,28.1,36.3), null);


(lib.art_piece_canvas_outline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FE34").s().p("EhxHBZJQh8gGhahZIktkuQhfhgAAiGMAAAijaQAAiGBfhgQBfhfCHAAMDmdAAAQCHAABfBfIEsEsQBfBgAACGMAAACjaQAACHhfBfQhfBfiHAAMjlvAAAQgVADgWAAIgSgBgEhwfBO9MDg/AAAMAAAid8Mjg/AAAMAAACd8gEhwfBO9MAAAid8MDg/AAAMAAACd8gEBwghO/g");
	this.shape.setTransform(-15,-14.864);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_outline, new cjs.Rectangle(-800,-585.4,1570,1141.1999999999998), null);


(lib.art_piece_canvas_blank = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9F5FC","#F8FBFD","#F8FBFD","#E9F5FC"],[0.024,0.275,0.651,0.941],-536.6,-403,562.8,422.3).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7D5E6").s().p("EgD6BPWMAAAijaIHzH0MAACCgSIjKAAIACADg");
	this.shape_1.setTransform(-742.425,-14.8625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F8FD").s().p("EhtwAD5In0nyIAAgBMDmdAAAIEsErIAADKg");
	this.shape_2.setTransform(-15,-527.8875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_blank, new cjs.Rectangle(-767.5,-552.9,1505,1076.1), null);


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
	this.shape_1.graphics.f("#333333").s().p("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");
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


(lib.scene_swipe_pageflip_solid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paper_front
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8DC8E7").ss(4,1,1).p("EBQoheuUgOMAmGgcGAZiQgCACgCABQjUDBjhC2UghSAa5gpCABPQTMUHpYbrQh1FYi6E9EhQnBevQextMME0gEAmSgfDUgo1AvHgjPAs/");
	this.shape.setTransform(663.975,121.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-183.6,-183.6,183.6,183.6).s().p("EgewAjuQJY7qzM0HUApBgBPAhTga6QDgi1DVjBUgo1AvHgjPAs+QC6k9B1lYg");
	this.shape_1.setTransform(649.2875,217.6875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8DC8E7").ss(4,1,1).p("EgXvBQqUA40hHkAKshCkQjl7i2b0uQgST3lOTRQmKWvt7S9QuFTI13JHQTGO4FLXpQEfUiovSSQhbC+hxC7QmeKrpLIh");
	this.shape_2.setTransform(372.825,109.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-93.4,-73.6,391.7,206.5).s().p("EgTfA2YQlL3pzGu4QV3pHOFzIQN7y8GK2wQFOzQASz3QWbUtDlbjUgKsBCjg40BHkQIvySkf0ig");
	this.shape_3.setTransform(372.825,29.0375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8DC8E7").ss(4,1,1).p("EAIdBQgUAh4gzKAC9hUDUgExgeEg4wgWnUATEBCsgwGBJXQfKHYQqTBQK7MdlBI/UgKyAQNgpoAKs");
	this.shape_4.setTransform(-21.475,4.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-42.6,-100.8,574,156.1).s().p("EACjBIgQwqzA/KnYUAwGhJXgTEhCsUA4wAWmAExAeFUgC9BUDgh3AzJQFAo+q7seg");
	this.shape_5.setTransform(-21.475,-81.7625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8DC8E7").ss(4,1,1).p("EAn2BDEQAJAxADAwQAAACABABUAA1AM8guqAU1EAn2BDEUgIohDlAMQg19UgISgaPhOpgVrUAWwBGMgV+BFEUAz2gE0AWuAWUQG0GtBJF/g");
	this.shape_6.setTransform(-432.375,-12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-139.1,-60.4,621.3,53.7).s().p("EAf5BIDUgWugWUgz2AE0UAV+hFEgWwhGNUBOpAVsAISAaOUgMQA19AIoBDlQhJl+m0mtg");
	this.shape_7.setTransform(-432.375,-125.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8DC8E7").ss(4,1,1).p("EAw2BCVUAMfgSSgNkgo8UgNkgo7AEOggSUgExgUjgmjgGMUgmkgGMgLXgKPUAC2Ae7AWaAz7UAWaAz7gUMAtvQPUjUQquzQQru0QbB0QQbB0kPU9QgWBsguBvQgwB0hMB2QgCACgBADUgLpASEgz+AVJEAw2BCVQg5B3hDBz");
	this.shape_8.setTransform(-944.7019,23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-70.8,-41.2,733.3,-171.6).s().p("A9knZUgWagz8gC2ge7UALXAKPAmkAGNUAmjAGMAExAUjUgEOAgRANkAo7UANkAo9gMfASRQAuhuAWhtQEP09wbh0QwbhzwrOzQwqO0vUDUUAUMgtwgWagz6g");
	this.shape_9.setTransform(-944.7019,-97.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F1FCFD","#C2E9ED"],[0.173,0.988],-6.2,0,6.3,0).s().p("AA+h0QgxB0hKB1QBChyA5h3g");
	this.shape_10.setTransform(-638.2875,460.0375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(2));

	// paper_back
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8DC8E7").ss(4,1,1).p("EizshfhMFnZAAAIAAfNQt1eo3yVnQgCACgCACUgo2AvHgjPAs+Qk6IWoAHIMjovAAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-689.6,-484.2,594.4,444.1).s().p("EizrBfiMAAAi/DMFnXAAAIAAfNQt0eo3yVoIgEADUgo2AvHgjPAs+Qk6IWoAHIg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8DC8E7").ss(4,1,1).p("EiM2hfhMD2zAAAII6G4QWbUtDlbjUgGFAl2gU/AndQpHRGr5RbQoNL/phMIMjX7AAAg");
	this.shape_13.setTransform(-248.575,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-951.3,-555.5,332.7,372.8).s().p("EiM2BfiMAAAi/DMD2zAAAII6G4QWbUtDlbjUgGFAl2gU/AndQpHRGr5RaQoNMAphMIg");
	this.shape_14.setTransform(-248.575,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8DC8E7").ss(4,1,1).p("EhuzhZ7MCizAAAQhIlohnlkQNiFYKkF0UAh1ASlADoAW6UgC9BUDgh4AzKQlNH1saGiMinLAAAg");
	this.shape_15.setTransform(-440.85,-35.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-988.9,-198.4,393.4,114.9).s().p("EhuzBlIMAAAi/DMCizAAAQhIlohmlkQNhFYKkF0UAh1ASlADoAW6UgC9BUDgh4AzKQlNH1saGig");
	this.shape_16.setTransform(-440.85,-35.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8DC8E7").ss(4,1,1).p("EhNyhbHMBHWAAAQhQkahbkaQPqEUM4EgUAzwASGAGoAVAUgMQA18AIoBDmQAKAxADAwQAAACAAABUAAvALYgkAARfMh05AAAg");
	this.shape_17.setTransform(-652.125,-28.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-920.2,50.3,69.3,-58.8).s().p("EhNyBj8MAAAi/DMBHWAAAQhQkahbkaQPqEUM4EgUAzwASGAGoAVAUgMQA18AIoBDmQAKAxADAwIAAADUAAvALYgkBARfg");
	this.shape_18.setTransform(-652.125,-28.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8DC8E7").ss(4,1,1).p("EAu6BOuQgCACgBADQmsKXz9LYMg0SAAAMAAAh8GUgUFgv0gCrgdJQGrGBQFEnQLRDQP6CjUAmjAGMAExAUjUgEOAgSANkAo7UANkAo8gMfASSQgwB0hMB2gEAw2BLEQg5B3hDBz");
	this.shape_19.setTransform(-944.7019,-32.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-6.2,0,6.3,0).s().p("AA+h0QgxB0hKB1QBChyA5h3g");
	this.shape_20.setTransform(-638.2875,460.0375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-1205.1,302.8,119.9,44.1).s().p("EggEBkiMAAAh8GUgUFgv0gCrgdJQGrGBQFEnQLRDQP6CjUAmjAGMAExAUjUgEOAgSANkAo7UANkAo8gMfASSQg5B3hDBzIgDAFQmsKXz9LYg");
	this.shape_21.setTransform(-944.7019,-32.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8DC8E7").ss(4,1,1).p("EizshfhMFnZAAAMAAAC/DMlnZAAAg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#D5F5F8","#F1FCFD","#F1FCFD","#C2E9ED"],[0.012,0.357,0.686,0.988],-1108.1,-524.7,1108.2,524.8).s().p("EizrBfiMAAAi/DMFnXAAAMAAAC/Dg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1297.6,-685,2479.6,1472.9);


(lib.bg_yellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F9DDA2").s().p("ElfFBaHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAMAAAi0FQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAMK+LAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAMAAAC0FQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_yellow, new cjs.Rectangle(-2247.5,-576.7,4495,1153.5), null);


(lib.bg_white_tint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.647)").s().p("Eiy3BffMAAAi+9MFlvAAAMAAAC+9g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_white_tint, new cjs.Rectangle(-1144.7,-611,2289.5,1222.1), null);


(lib.bg_paint_wall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top_bot_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0BD71").s().p("EBjyAD2IAAgSIgBASMlsjAAAIAAnrMIRlAAAIAAHrg");
	this.shape.setTransform(0,307.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D19E52").s().p("EBjyAD1IAAgRIgBARMlsjAAAIAAnpMIRlAAAIAAHpg");
	this.shape_1.setTransform(0,315.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEDA90").s().p("EBjyAD2IAAgRIgBARMlsjAAAIAAnrMIRlAAAIAAHrg");
	this.shape_2.setTransform(0,294.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0BD71").s().p("EBjyAFbIAAgYIgBAYMlsjAAAIAAq1MIRlAAAIAAK1g");
	this.shape_3.setTransform(0,602.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEDA90").s().p("EBjyAFbIAAgYIgBAYMlsjAAAIAAq1MIRlAAAIAAK1g");
	this.shape_4.setTransform(0,584.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// color
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3C587").s().p("EBjyAXbIAAgLIgBALMlsjAAAMAAAgu1MIRlAAAMAAAAu1g");
	this.shape_5.setTransform(0,454.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE4B1").s().p("EBjyAy+IAAgXIgBAXMlsjAAAMAAAhl7MIRlAAAMAAABl7g");
	this.shape_6.setTransform(0,-161.0622,1,1.4601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_paint_wall, new cjs.Rectangle(-1694.7,-637.3,3389.4,1274.6), null);


(lib.bg_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wood_floor
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(234,162,90,0.498)").ss(4,1,1).p("EDfMg1TILYIdMh/IAAAMg7xAAAICHLAMhkYAAAIilNjMhGQAAAIp+QFMhHQAAAMg8IAAAIAASnIAAVKIAAVzEEIyg1TIAAl7MhyrAAAIFyF7Mg1sAAAIFPIdEEIygs2IAALAIAANjIAAQFMg89AAAISMSnMhN5AAAINGVKMheKAAAIEiXsMiIAAAAMjEXAAAIAAh5EEIyg1TIAAIdI+OAAEEIyg1TMgpmAAAMhDTAAAEEIyA6NIAABCMjFMAAAEEIyAjjIAAWqEEIyAOZIAAVKI2HAAIWHWqEEIyAOZMgqxAAAEEIygEOIAASnEB6pgUTIJ9QFMhNJAAAIDkSnMg7aAAAIAAVKMg/fAAAIkiXsECu6gh2INONjMhBfAAAMiv0AAAEAs7g7OIBIF7MgucAAAIAAIdMhr2AAAMg4vAAAIqvLAMhZEAAAIAANjIAAQFEBmNg1TMg4KAAAECQIAOZMhVHAAAECWHg7OMhpMAAAMhaqAAAIhIF7Mg4JAAAIlPIdECu6gh2Mh9IAAAEDL1gEOMhHPAAAEDyrAjjMhVdAAAEEIygUTMhMqAAAEEIygh2MhZ4AAAEgAZg1TMgueAAAEhnAg1TMg1tAAAMhDmAAAIrYIdI9GAAIAALAEiW7g7OIlyF7EiQ7AOZItHVKMhVdAAAI1SVzAgZOZMg7bAAAMhVHAAAMhN5AAAMgp9AAAEg4QgEOMhNJAAAEgtvg7OMhpMAAAMhx2AAAIAAF7IAAIdEg/4AjjMheKAAAEgymgh2Mh9HAAAEg4QgEOIjkSnEjgTg1TMgoeAAAEjzfAjjI1SAAEjMpgEOIyLSnEik+gs2MhGtAAAEh7bgUTMiNWAAAEAvrgs2MgwEAAAEA3dgEOMhvtAAAEA/EAjjMg/dAAA");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4C96F").s().p("EA/EAsbMg/dAAAIAA1KMA7aAAAMBVHAAAINGVKgEiQ7AXRMhN5AAAISLynMBHQAAAMBNJAAAIjkSngEDL1AEqMhHPAAAIp9wEMBBfAAAMBMqAAAIAAQEgEkIxgY9IAArAIdGAAMBGtAAAIqvLAgEAvrgj9MgwEAAAIAAodMAucAAAMA4KAAAIFPIdg");
	this.shape_1.setTransform(-0.025,-56.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5CE92").s().p("EBDmA7PIki3tMBeKAAAMBVdAAAIWHWqIAABDgEjzfAjiI1SAAIAA1JMAp9AAAMBN5AAAItHVJgEA3dgEOMhvtAAAMhNJAAAIJ+wFMBGQAAAMCv0AAAIJ9QFgEgymgh1Mh9HAAAIKvrAMA4vAAAMBr2AAAMAwEAAAICHLAgEDqkgs1IrYoeMApmAAAIAAIegEjgTg1TMgoeAAAIAAl7MBx2AAAIlyF7g");
	this.shape_2.setTransform(-0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7E39E").s().p("EkIxA4RIAAh5IVS1zMBVdAAAMBeKAAAIkiXsgECQIALbMhVHAAAIjkymMBNJAAAMBHPAAAISMSmgEkIxALbIAAymMA8IAAAIyLSmgEh7bgXQMiNWAAAIAAtjMBZEAAAMB9HAAAIilNjgECu6gkzMh9IAAAIiHrAMA7xAAAMB/IAAAIeOAAIAALAgEhsPgvzIFPodMA4JAAAMAueAAAIAAIdg");
	this.shape_3.setTransform(-0.025,18.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0BD71").s().p("EhEaA7PIEi3tMA/fAAAMA/dAAAIEiXtgEkIxAjiIVSAAI1SVzgEDeBAOZIyMynMA89AAAIAASngEjMpgEOMg8IAAAIAAwFMCNWAAAIp+QFgEB6pgUTMiv0AAAICltiMBkYAAAMB9IAAAINONigEik+gs1MhGtAAAILYoeMBDmAAAMA1tAAAIlPIegEDfMg1TMhDTAAAIlyl7MByrAAAIAAF7g");
	this.shape_4.setTransform(-0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE696").s().p("EDyrAvZMhVdAAAItG1KMBN5AAAMAqxAAAIAAVKgEg/4AvZMheKAAAINH1KMBVHAAAMA7bAAAIAAVKgEC8IgIdItOtiMBZ4AAAIAANigEBrcgg/IlPoeMA1sAAAMBDTAAAILYIegEkIxgg/IAAoeMAoeAAAIrYIegEgAZgpdMgueAAAIBIl7MBaqAAAIBIF7g");
	this.shape_5.setTransform(-0.025,-75.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEDA90").s().p("EC8oAkEIWIAAIAAWqgEg2bAO6Mg7cAAAIDkynMBvuAAAIDkSngEAwKg0yMg4IAAAIhIl7MBpLAAAIFyF7gEidCg0yMg1tAAAIFyl7MBpMAAAIhJF7g");
	this.shape_6.setTransform(345.8,-3.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_floor, new cjs.Rectangle(-1696.6,-381.1,3393.2,762.2), null);


(lib.painting_table = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DBE9FC","#F6FAFF"],[0,0.208],8.9,-14.3,8.9,-143.1).s().p("EBwkgCEQgGiShwABIrjAHMjKuAAQIovAFQhBAHASEGQAWJyBPGvQiJlzgiqkQgGjjApg/QAphAC2jyQC1jyBnjHQBnjHBXAFMCqDAAYMAi/AAAQBPAAAqBGIEUG1QDCEyBCA8QBDA7AZFrQAZFrh5LRQBLqZhLqdg");
	this.shape.setTransform(0.0065,-45.4574);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE5B3").s().p("EhwdAIFIKOwJMDMfAAAIKOQJg");
	this.shape_1.setTransform(-1.4,-65.75,1,1,0,0,0,0,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4C37D").s().p("EhwbAEBIgCoBMDg7AAAIgEIBg");
	this.shape_2.setTransform(-1.4,-40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_14
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2D493").s().p("AlsN4IAA7vILZAAIAAbvg");
	this.shape_3.setTransform(632.225,87.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBAB64").s().p("AlsBrIAAjVILZAAIAADVg");
	this.shape_4.setTransform(632.225,-11.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2D493").s().p("AlsN4IAA7vILZAAIAAbvg");
	this.shape_5.setTransform(-635.125,87.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBAB64").s().p("AlsBrIAAjVILZAAIAADVg");
	this.shape_6.setTransform(-635.125,-11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CDD2E7").s().p("EBjJgLcILjgHQBwgBAGCSQBLKdhLKZQiVrErEr8gEhxDgG5QgSkHBBgHIIvgFQnoLKgRJpQhPmvgWpxg");
	this.shape_7.setTransform(0.2144,0.7247);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EBwkgCEQgGiShwABIrjAHMjKuAAQIovAFQhBAHASEGQAWJyBPGvQiJlzgiqkQgGjjApg/QAphAC2jyQC1jyBnjHQBnjHBXAFMCqDAAYMAi/AAAQBPAAAqBGIEUG1QDCEyBCA8QBDA7AZFrQAZFrh5LRQBLqZhLqdg");
	this.shape_8.setTransform(0.0065,-45.4574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-730.4,-169.2,1460.9,345.5);


(lib.kiddy_carpet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blue_middle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2222AC").s().p("EhDdAWgQpVAAljmzQlfmuBfpYQBepQHbmdQHWmaI/AAMB6PAAAQI/AAHWGaQHbGdBeJQQBfJYlfGuQljGzpVAAg");
	this.shape.setTransform(0,-29.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#658CFB").s().p("EhDdAWhQpVgBlimzQlgmuBfpYQBepQHbmeQHVmZJAABMB6PAAAQI/gBHWGZQHbGeBeJQQBfJYlfGuQljGzpVABg");
	this.shape_1.setTransform(0,-27.4,1.02,1.0699,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// rainbow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5AB1C").s().p("Eg56AepIFasLIYNAAIicMLgEBArASTQHWg6ErlvQBtiFBCiXIRKEoQhVFIjeEWQk4GHnLCHgEhgkgVRIA3gwQKGooMOABIGwAAIEzEGIk7AAQo/gBnWGaQg7Azg2A3gAIX6iIAqkGIU8AAIhVEGg");
	this.shape_2.setTransform(36.175,-3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2BC01D").s().p("EA0OAepIlZsLIUrAAQBeAABZgLIPDLPQjyBHkcAAgEhNIAepQkdAAj0hIIPDrOQBaALBhAAIUmAAIlaMLgEAiTgaiIBVkGIZVAAIkzEGgEg4KgaiIkzkGIZVAAIBVEGg");
	this.shape_3.setTransform(-0.175,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3836DE").s().p("AesepIicsLIYNAAIFaMLgEhbxAVUQjekXhVlIIRKkoQBCCXBuCGQEpFtHTA8IvDLOQnJiHk3mGgEBTIgUJQnWmapAABIk/AAIEzkGIG1AAQMOgBKGIoIA2AvIruCyQg1g2g6gzgA8r6iIhVkGIU7AAIArEGg");
	this.shape_4.setTransform(-36.225,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE365F").s().p("A6EepICcsLIWqAAIAAMLgEBUGAHOQCTlNhCmcQgJg7gNg5IPHAAQA7CqAgC3IAAABQAcCcAFCVQAJEGg9DsgEhmFgGPQC9ojHPmfILuCyQlMFShmG+gAg+6iIAAkGIOqAAIgqEGg");
	this.shape_5.setTransform(6.2579,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6713B1").s().p("AA/epIAAsLIWmAAICbMLgEhmDAEEQAFiVAcicIAAgBQAgi3A7iqIPHAAQgNA5gJA7QhCGcCSFMIxJEoQg9jrAJkGgEBW+gGPQhmm/lNlSILuiyQHQGgC9IjgAtG6iIgqkGIOvAAIAAEGg");
	this.shape_6.setTransform(-6.2579,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// yellow
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFC43").s().p("EhP6AhVQknAAj+hPQnZiTlCmpQjmkuhYllQg/kAAKkbQAEijAdiqIAAAAQAijIA9i6QDDpRHgnEIA4g1QKepXMpAAMCMXAAAQMpAAKeJXIA3A0QHhHEDDJSQA9C6AiDIIAAAAQAdCqAECjQAKEbg/EAQhZFmjlEtQlEGqnbCTQj8BOklAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// shadow
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.149)").s().p("EhP6AhVQknAAj+hPQnZiTlCmpQjmkuhYllQg/kAAKkbQAEijAdiqIAAAAQAijIA9i6QDDpRHgnEIA4g1QKepXMpAAMCMXAAAQMpAAKeJXIA3A0QHhHEDDJSQA9C6AiDIIAAAAQAdCqAECjQAKEbg/EAQhZFmjlEtQlEGqnbCTQj8BOklAAg");
	this.shape_8.setTransform(0,3.95,1.01,1.02);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kiddy_carpet, new cjs.Rectangle(-690,-213.6,1380,435.1), null);


(lib.jar_top = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#AFAFAF").s().p("AhEgzIAzAEQA/AGArAdIALAIIgCAFQgIASgnAOQgnAPg4ACIg3ACQA3g7gYgsg");
	this.shape.setTransform(32.975,-8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#878787").s().p("AiLB5IgIAAQhdAAhdgGQDhgRCShxQAfgZAUgWIA4gDQA5gCAmgOQAngPAIgSIADgGQAhAbAIAkQAGAfgHAgQgIAmgsAdQgrAdg9AEQiZAPiXAAIgJAAg");
	this.shape_1.setTransform(14.0065,2.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AAAB5IgIAAQhdAAhdgFQg8gDg7gGQg9gEgsgdQgrgdgIgmQgHghAHgfQAHgkAkgbIACAHQAGASAoAOQAnAPA4ACQCLAHCKAAIAHAAIAHAAQBvAABugFIA3gCQA5gCAngPQAngOAIgSIACgGQAhAaAIAkQAHAfgHAhQgJAmgrAdQgrAdg9AEQiZAOiZAAIgIAAg");
	this.shape_2.setTransform(0.0625,2.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8B8B8").s().p("AAAA8IgHAAQiKAAiLgIQg4gCgngOQgogPgGgSIgCgGIAIgGQAsgdBAgGQCVgPCZABIAJAAIAHAAQCAgBB8AKIAzAFQBAAGArAdIALAHIgCAFQgIASgnAPQgnAOg5ACIg3ADQhuAFhvAAIgHAAg");
	this.shape_3.setTransform(0.175,-9.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jar_top, new cjs.Rectangle(-47.3,-15,94.69999999999999,29.9), null);


(lib.jar_front = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgjE8QgIgDgEgFQgFgIgCgUIgCg9QABjKAhjFQAEgUAFgMQAFgNAIgGQAHgGAKACQAKACAEAHQAEAJgEAZIgDAMQgbDFACDKQABAWADAUQADAVgEAKQgDAIgGAHQgGAHgJADIgIABQgFAAgEgCgAAMj6QgIgDgEgIQgDgJAAgLQABgLAFgIQAFgJAKgFQAIgEAJACQALACAHAKQAFAMgCAPQgDAJgHAIQgHAIgJAEIgGAAQgGAAgGgCg");
	this.shape.setTransform(-45.9026,-0.193,1.3619,1.3619);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,243,249,0.498)").s().p("AhZJ6QA1gngChAQgChwgJjmQgJjmgWkbQgWkaiLgdIDpAAQBIAAAzAyQA1AyAHBVIBCNEQAHBbhTBFQhIA+i2AbIgCABIACgCg");
	this.shape_1.setTransform(37.0059,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(221,248,254,0.498)").s().p("ABLJ7QjXglg4g4QhAhAAHhYIBDtMQAHhRA0gyQA0gxBJAAIEAAAQikAdgWEaQgWEbgJDmQgJDmgCBwQgCA/AzAnIACABIgCAAg");
	this.shape_2.setTransform(-35.7393,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jar_front, new cjs.Rectangle(-61.2,-63.5,122.4,127.1), null);


(lib.jar_back = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(168,217,226,0.498)").s().p("Al2B0QibgwAAhEQAAhDCbgwQCcgwDaAAQDcAACaAwQCcAwAABDQAABEicAwQiaAwjcAAQjaAAicgwg");
	this.shape.setTransform(0,46.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(196,234,242,0.498)").s().p("AjTJZIg3gIQjNgjg2g2Qg9g9AHhTIBAshQAGhNAxgvQAygvBFAAIKsAAQBGAAAwAvQAyAvAGBRIA/MaQAHBWhPBCQhEA7itAZIg7AIQhuAMhoAAQhpAAhkgMg");
	this.shape_1.setTransform(-0.0072,0.825,0.9509,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(187,229,237,0.498)").s().p("AjTJZIg3gIQjNgjg2g2Qg9g9AHhTIBAshQAGhNAxgvQAygvBFAAIKsAAQBGAAAwAvQAyAvAGBRIA/MaQAHBWhPBCQhEA7itAZIg7AIQhuAMhoAAQhpAAhkgMg");
	this.shape_2.setTransform(-0.0075,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(222,249,255,0.498)").s().p("AijHRIgrgHQiegagqgqQgvgvAGhBIAxprQAFg7AmgkQAmglA2AAIIQAAQA2AAAmAlQAmAkAFA/IAxJmQAFBCg9AzQg1AtiGAUIgtAGQhVAJhRAAQhRAAhNgJg");
	this.shape_3.setTransform(-0.0083,0.0007,1.3619,1.3619);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jar_back, new cjs.Rectangle(-61.2,-64.5,122.4,129.1), null);


(lib.easel_top = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A8713A").s().p("AgeB8IgmlHIBjBQIAmFHg");
	this.shape.setTransform(-394.7,27.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98632E").s().p("Eg99ABsMB77gIgIh5KTMh5cADWg");
	this.shape_1.setTransform(5.025,3.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6A473").s().p("Eg+vADoMB77gIfIBkBQMh77AIfg");
	this.shape_2.setTransform(0.025,-16.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_top, new cjs.Rectangle(-401.6,-47.7,803.3,95.4), null);


(lib.easel_paper_roll = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D2D7F4").s().p("Egy8AHGQA4geBPhZQCFiWBBjKQBAjKhUicIgGgMQgWgogZgmIX5EmMAn0ABVMAgmgFhQAeAtAaAwQBKCJg4CzQg5Cxh1CEQhkBxg8AEI6Eh3MhGPAC9g");
	this.shape.setTransform(20.6108,13.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADB4E1").s().p("AizAHQBIAEgIh9QAggbAgggQBshvBGiIIAGAMQBUCchADKQhBDKiECWQhPBZg4Aeg");
	this.shape_1.setTransform(-287.4615,16.9625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5CBEF").s().p("AhdEVQgRh7gqACIAAneQAxAVA4A3QBWBVBDBmQAZAmAXAnQhGCIhsBuQghAhgfAaQgBgVgEgZg");
	this.shape_2.setTransform(-290.15,-26.8875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9ECFF").s().p("A2ODwI35kkQhDhmhXhVQg5g3gxgVIAAgJMAm+ACsMA2hgBmQCngEAYAEQA3ALBEBCQBGBFA4BRMggmAFgg");
	this.shape_3.setTransform(15.7,-27.5625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#915D2A").s().p("Eg3pAA3MBvTgCXIgGBNMhvFAB0g");
	this.shape_4.setTransform(0.9875,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A8713A").s().p("Eg34gARMBvxgBbIgFBCMhvTACXg");
	this.shape_5.setTransform(0.025,-2.9875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D7F4").s().p("EgwkAFOQCFiVBBjKQBAjLhUicIgGgLQgXgpgZglIX6ElMAn0ABWMAgmgFiQAeAtAaAwQBKCKg4CyQg5Cxh1CEQhkBxg8AFI6Eh4MhGxAC+QBBgPBoh1g");
	this.shape_6.setTransform(18.9358,13.7125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B85C5").s().p("AgiAzQgWgJgQgMQBGgdBKg9QAHB5hEAAQgSAAgbgKg");
	this.shape_7.setTransform(-306.215,11.5696);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADB4E1").s().p("AgpGqQhGgShjhtQhihug0h4QgfhJAHhrQCWCZC1hJQAPAMAWAJQB0AugKieQAfgaAgghQBuhuBFiIIAHALQBTCchADLQhADKiFCVQhoB1hAAPIgEABIgOABQgJAAgHgCgAgujdQBlieAeDTQAEAZABAVQhKA/hFAcQhNg7BUiDgABah6IAAAAg");
	this.shape_8.setTransform(-308.0413,17.7067);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C5CBEF").s().p("AlmEbQAFhEAUhSQA0jSBGiBIADgEQBFh9BWgpQAUgJAVgBIAEAAQAJgBAJACQBCAIBSBQQBWBVBDBmQAZAmAXAoQhGCHhtBuQggAhggAaQgBgVgDgZQgfjThkCeQhVCDBNA7Qg6AYg4AAQhzAAhmhog");
	this.shape_9.setTransform(-310.6625,-21.7887);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9ECFF").s().p("A15DyI35klQhEhmhWhUQhShQhCgJMAnoACvMA2hgBlQCmgFAZAFQA3AKBEBDQBGBEA4BSMggmAFgg");
	this.shape_10.setTransform(13.625,-27.7125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_paper_roll, new cjs.Rectangle(-357.7,-60.5,715.5,121.1), null);


(lib.easel_leg2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C08852").s().p("EgCTBo5MgHYjTqIEPhAMAPIDXjg");
	this.shape.setTransform(6.4,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEC193").s().p("AjGgPIENhAICABfIkNBAg");
	this.shape_1.setTransform(-48.425,-686.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6A473").s().p("EACsBpFMgHXjTpICABgMAHXDTpg");
	this.shape_2.setTransform(-38.375,-6.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_leg2, new cjs.Rectangle(-68.3,-694.6,136.7,1389.2), null);


(lib.easel_leg1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DBA672").s().p("AhgARIhQgnIERAGIBQAng");
	this.shape.setTransform(92.675,-665.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8713A").s().p("EgPqBoBMAbDjQBIETAFMgT8DP8g");
	this.shape_1.setTransform(10.05,2.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9844F").s().p("EgPGBlhMAc9jN1IBQAoMgbDDQBg");
	this.shape_2.setTransform(-13.75,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_leg1, new cjs.Rectangle(-110.4,-667.7,220.8,1335.5), null);


(lib.easel_center = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B27C46").s().p("A0KAOMAoZgEyIBJIXMgquAAyg");
	this.shape.setTransform(-5.2,-4.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8713A").s().p("AgODgIhJoXIBmBYIBJIXg");
	this.shape_1.setTransform(133.1,-2.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98632E").s().p("A2KgSMAqugAyIBnBXMgquAAyg");
	this.shape_2.setTransform(0,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_center, new cjs.Rectangle(-141.9,-33.6,283.9,67.30000000000001), null);


(lib.easel_bottom = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#98632E").s().p("EhB8AEyIAvu+MCDKAJzIgaKng");
	this.shape.setTransform(5.5,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8713A").s().p("AhNGkIAvu/IBsB4IguO/g");
	this.shape_1.setTransform(-419.75,-17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6A473").s().p("EhAugD9Ihth4MCDKAJzIBuB4g");
	this.shape_2.setTransform(2.35,-33.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_bottom, new cjs.Rectangle(-427.6,-71.3,855.2,142.7), null);


(lib.color_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF282").s().p("AhhJPQg2gCgjgIQgvgMgfgZQgYgUgCgUQgCgQAKgPQAKgPAQgHQAcgLAlAKQAWAGApAQQAzAQBPgCQCPgEBSg2QBTg2AmhrIAOgrQAKgXAMgPQARgVAagIQAWgIARAHQAWAIAIAaQAGATgEAdQgJBEgyBPQhDBphVArQgtAXhMAOQhwAWhyAAIglgBgAHrB5QgVgDgKgQQgJgNgCgWQgCgeANgVQAHgMAMgGQAMgHAMAAQAPABAMAIQAMAKAFAOQAKAZgLAgQgIAVgMAKQgMAJgQAAIgHAAgAnuBHQgVgIgOgTQgWgeAAg0QgBhCAdhKQAVg3AthLQAig6AdgiQAyg9BHgrQBEgqBPgWQCSgoCsAeQApAHAaAKQAkAOATAZQAUAZgIAUQgGAPgRAFQgRAGgRgFQgMgEgSgKQgVgMgJgEQgZgKgugDQirgKh+A3QhIAgg2A0Qg6A3gcBEQgSAtgIA5QgFArgCA/QgBAqgGAVQgMAlgdALQgJAEgKAAQgLAAgMgFg");
	this.shape.setTransform(-3.3929,-1.8985);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(216,125,29,0.2)").s().p("AmIHtQiNhjhJj4IgKglQA+C0B9BwQCMB/E0gaQE1gaCEjwQCDjvgaj/QgRiohgiKQCZCmALDHQANDvh4DuQh4DulBAmQhYALhMAAQjDAAhlhIg");
	this.shape_1.setTransform(0.9404,10.7761);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEA00").s().p("Al/JaQiMhkhKj4QhJj4BwkxQBwkyE2g3QE1g3DbDAQDcDAANDwQANDvh3DuQh4DulBAmQhZALhMAAQjDAAhlhHg");
	this.shape_2.setTransform(-0.023,-0.0275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Al/JaQiMhkhKj4QhJj4BwkxQBwkyE2g3QE1g3DbDAQDcDAANDwQANDvh3DuQh4DulBAmQhZALhMAAQjDAAhlhHg");
	this.shape_3.setTransform(0.0246,4.4725,1.03,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_yellow, new cjs.Rectangle(-64.5,-67.3,129.1,139.1), null);


(lib.color_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,128,128,0.749)").s().p("AgwJmQgSgKgHgTQgIgUAHgTQALgdAkgMQAUgHArgDQBFgFAzgJQBAgMAzgWQA6gZAsgnQAwgqAYg1QAag7gDhFIgEg0QgCgeAFgVQAHgbAVgSQAWgRAZAFQAhAIAPAxQAUA/gTBKQgRBAgqBBQhXCEiOBQQiOBRieAGIgKAAQgaAAgPgIgAlsI4QghgTgGgnQgEgXANgWQASgeAiAIQAQAEAQAHQARAJAOANQAaARAhAJQAhAIAIAIQAWAZgVAaQgTAYggAEIgaACQg5AAg0gfgAomglQgSAAgMgLQgSgOgBgbQAAgWANgWQANgXARgEQAOgCATAJQARAJAIALQAKAOgBAUQgBARgIAOQgIAPgOAIQgNAJgQAAIgBgBgAoCjgQgTgUAOgsQAJgbAagvQAthNAogrQA4g8BOgkQBMgkBVgGQBSgGBSAVQBQAVBJAsQAcARAMAQQATAagJAYQgJAaghAIQgeAIgogLIhEgZQhqgrh1gDQhSgCgsAcQgVANgfAlQgpAugSAhIgaA2QgPAggRASQgRAUgUAEQgHACgHAAQgQAAgMgMg");
	this.shape.setTransform(1.1938,-2.0488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AklIUQhbgYhTg9QkojYBglqQAMguAPguIgOAyQhcFqEcDYQBQA9BXAYQFIBZEtiUQFXiqgdmAQgUj7iPi+IAYAbQCgDEAVEEQAfGAlnCqQjEBcjOAAQh8AAiBghg");
	this.shape_1.setTransform(-0.0021,12.1836);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE0000").s().p("AklKNQhbgYhTg9QkojYBglpQA4jUBmjCQCBj2EegXQFsgXDvEkQCgDDAVEDQAfGBlnCqQjEBdjOAAQh8AAiBgig");
	this.shape_2.setTransform(-0.0021,0.0155);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AkuKAQhegYhWg8QkwjTBiliQA7jQBoi9QCGjxEmgXQF3gWD2EdQCkDAAWD9QAgF5lxCnQjKBajVAAQiAAAiEggg");
	this.shape_3.setTransform(0.0738,4.5274);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_red, new cjs.Rectangle(-71.2,-68.6,142.60000000000002,140.39999999999998), null);


(lib.color_purple = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(223,72,253,0.498)").s().p("Ah2JaQgkgDgPgDQgcgEgVgIQgNgFgIgIQgKgJABgLQADgVAkgFQAdgDApABIBFACQCoAEB8gtQBIgaA7grQA/guAng9QBaiKgXjXQgEghAGgPQAFgMAMgHQAMgGAKAFQAPAHAFAdQANBKAFAnQAHBAgFAzQgJBhg0BaQgzBXhRA9QhNA7hiAfQheAehmADIgQAAQgvAAhegHgAlnI2QgYgFgMgWQgHgNABgOQACgPALgIQANgJAXAEQAcAGALARQAGAKgBANQgCAMgHAJQgHAJgMAEQgHADgIAAIgIgBgApDg9QgggYAJhBQAGgzATgxQAchLAzgxQAagaA3giQAwgeBNgrQA7giAigRQA0gZAugMQA2gNBAAAQAzAABFAJQAtAFAbAIQAnALAaATQAZATAIAWQAKAdgQAVQgKAMgRAFQgRADgRgDQgOgDgSgIIgegOQh5g0jABDQhYAggwAkQg1ApgwBRQg0BggbAuQgbAugZAQQgRAMgVABIgFABQgTAAgOgLgAGDlLQgTgHgOgfQgNgeAGgTQAEgPAQgIQAPgIAPAFQARAFANAUQAVAfgKAdQgGAPgPAJQgKAGgJAAQgFAAgGgCg");
	this.shape.setTransform(0.8655,-3.9887);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AkvH+Ql+hYgfl+IgBgXQA2FFFSBQQFFBNFBhjQEkhYAqkyQApkkh/kBQC8EmgxFXQgsEyktBYQi6A4i7AAQiSAAiTgig");
	this.shape_1.setTransform(0.1108,15.8094);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9408B0").s().p("AkuKdQl+hZgfl+QgTjuBijZQCdleFqhKQA1gLA1gJQFugKDNE3QDHEsgyFhQgsExktBZQi6A3i7AAQiSAAiTghg");
	this.shape_2.setTransform(0.0243,-0.0062);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AkuKdQl+hZgfl+QgTjuBijZQCdleFqhKQA1gLA1gJQFugKDNE3QDHEsgyFhQgsExktBZQi6A3i7AAQiSAAiTghg");
	this.shape_3.setTransform(0.0403,4.4938,1.03,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_purple, new cjs.Rectangle(-74,-70.2,148.1,144.9), null);


(lib.color_orange = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(253,166,95,0.8)").s().p("AAXJPQgggBgSgHQgbgMgGgYQgFgSALgSQAJgRASgKQAOgIAUgFIAlgGQBDgMBUgfQBAgXAjgWQA5gkAog7QAmg5AQhEQAHgcAKg5QAMgxAUgdQARgZAVgGQAPgEAQAFQAPAGALALQAUATAGAlQANBHguBkQg4B5hcBiQgoAqggAVQgjAXg/AYQhDAagzAMQhAAQg4AAIgDAAgAkbIwQgjgCgXgHQgRgGgdgPQgzgcg6gkQgugegRgZQgOgTgHgeQgKgnANgXQAJgPARgJQARgIATACQAhACAhAcQAMAKAOAQIAZAbQAeAhAbAMQAMAGASAEIAfAHQAXAFAZAMQAWAJAMANQASATgBAaQgBAagUASQgVARgrAAIgRAAgAo4g5QgQgCgNgOQgMgMgFgSQgGgXAGgsQAEgeAEgQQAFgTAMgbQASgoAOgbQAVgnAXgJQAXgIASANQAJAGAEALQAFAKgCAKQgCAIgGALIgLATQgFAMgCAVQgCASAAAVQABAmgCAPIgFAoIgCAPQgDALgLAPQgJAOgGAGQgIAHgOAEQgKADgIAAIgHAAgAEdl4QgOgGgSgLIgfgUQhkg/iQgMQi4gPh3BPIgWAOQgNAHgLAAQgUACgPgSQgPgSAGgUQAGgWAigVQCThYDugCQBmgBBLARQBgAXA/A1QAnAhADAhQABARgJAQQgIAPgQAIQgOAJgSAAQgSAAgVgJg");
	this.shape.setTransform(-0.3068,-3.827);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(150,31,6,0.298)").s().p("AhFJgQoogRhOnLQBgFkFpAuQHoA+DVjVQDUjVgflJQgglKiQh3QBrBPAwCDQCDFphSFMQhOE6pNAAIhGgBg");
	this.shape_1.setTransform(0.5944,6.1031);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE7708").s().p("Ag+KdQqPgUAMqCQAMqAJSghQJQghCEFqQCEFohTFNQhOE6pNAAIhFgBg");
	this.shape_2.setTransform(-0.042,0.0039);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Ag+KdQqPgUAMqCQAMqAJSghQJQghCEFqQCEFohTFNQhOE6pNAAIhFgBg");
	this.shape_3.setTransform(-0.0327,2.6495,1.03,1.03);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_orange, new cjs.Rectangle(-72.7,-67,145.5,138.7), null);


(lib.color_green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,255,65,0.498)").s().p("AgmJdQjPgIh5hMQglgZgLgZQgLgZALgbQAMgcAZgKQAWgIAnAGIAbAGIAMADIADAFIgDgFQC4BWDBgbQAcgEAYgOIARgLQAQgLAZgXQAhgdAfggQAXgXANgGQAMgFALABQANAAAIAHQAJAHADALQADALgDAMQgDAOgQAaQgqBBgdAjQgsA0guAdQg/AnhRAHQgSABgXAAIgngBgAGVD5QgNAAgKgJQgKgIgCgPQgCgOAIgLQAHgLAOgDQAOgEAMAGQALAGAFAMQAFAMgDAMQgDALgLAIQgKAIgLAAIgBAAgAHFCPQgSgJgDgRQgDgRAMgYQAGgMAXgoQATgfAIgVQAZhFgWhEQgIgWgTgkQgVgpgHgRQgHgUgFgJIgPgYQgHgQABgZQACgbANgOQAQgTAdACQAYACAXAQQA0AiAkBNQAsBegFBaQgCAxgSAsQgTAtghAiIgcAaQgRAPgJANIgOAVQgJAMgJAFQgIAEgJAAQgIAAgKgFgApZBOQgbgUgLgvQgShPAehaQAWhFA4hUQBChkBFgzQBFg0BFgfQBFgfBfgOQBfgPAcAAQAdgBAVAEQAZAEATAQQAVARACAXQACARgHARQgIAPgNAMQgXATgnAJQgdAHg2AGQg7AFgaAGQgzAKhQAkQhDAegeAaQgaAXgZAmQhKBugDBzIgCA3QgEAggOATQgRAVgdAEIgMABQgWAAgRgNg");
	this.shape.setTransform(-0.6622,-3.9713);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("AhyIwQhAgJhDgSIgDAAQjqg/h/iZIgEgFQgxg9gghMQB2DLFJBYQFIBYCgiaQCgiZCnjsQCojri+lWQAxA9AkBOQBBCRgBCQQgCC2hvC0QgrBGhABCQjKDPkXAAQg1AAg3gHg");
	this.shape_1.setTransform(2.7891,11.6066);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B500").s().p("AhXKkQg/gIhDgSIgDgBQjqg/h/iZIgEgFQhchzgfilQg1kcCej4QDMk+G4AVQFlAMCwDbQAxA+AjBOQBCCRgCCPQgCC2hvC1QgqBGhBBCQjJDPkYAAQg0AAg4gIg");
	this.shape_2.setTransform(0.0126,-0.0209);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhXKkQg/gIhDgSIgDgBQjqg/h/iZIgEgFQhchzgfilQg1kcCej4QDMk+G4AVQFlAMCwDbQAxA+AjBOQBCCRgCCPQgCC2hvC1QgqBGhBBCQjJDPkYAAQg0AAg4gIg");
	this.shape_3.setTransform(0.0626,4.4791,1.03,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_green, new cjs.Rectangle(-74.3,-68.4,148.8,141.3), null);


(lib.color_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(132,163,251,0.749)").s().p("AlDIgQgsgPgVgWQgNgPgDgTQgEgUAJgQQAOgXAhgDQAVgCAhAJQBAAVAhAIQA4APAqgFQA6gGBJgxIA8gqQAjgZAagNQBFgkBXgJIA4gEQAggEAWgIQAtgRAggrQAdgoAMg0IAMg+QAJgjARgTQAMgPAPgCQALAAAJAHQAJAGAEAKQAHANgBAdQgEBugvBUQgZAtglAiQgmAkguATQgcAMgvAKIhNASQg6ARh2A/QhwA7hAAPQgtAKgvAAQhQAAhXgdgApKA0QgPgIgKgOQgNgTgHgsQgGglABgXQAAgNACgRQADgXAFgTIANgjIAKgVQANgXAZgLQALgFAKgBQAQAAAQAJQAVAMAKAXQALAXgEAYQgDARgOAcQgPAegDAOQgEARABAjQAAAggHASQgKAcgZAHQgFABgFAAQgLAAgLgFgAnBkmQgQgHgIgTQgHgSADgSQAGgfAgggQBQhQCdgtQA8gSAwgGQAjgEBGAAQA3AAAbACQAtAEAiALIAeAMIAeALQAfAKAIAEQAUAMAIAXQAIAXgIAWQgKAYgbAPQgYAOgeABQgXAAgggHIg3gLQhSgQhmAMQhcAKhAAbQgSAIg7AfQgxAZgfAKQgRAFgNAAQgLAAgJgEg");
	this.shape.setTransform(-0.8954,-4.4558);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("ApPEgQg+hWgkhZQCMDkCtBRQCtBSDFg6QDFg7Dmh4QDlh4gJj/QgKkAhqi2QASAVARAXQBQB6AhCmQBLF9j0CuQj0Cuj7AXQg7AJg3AAQktAAi5kDg");
	this.shape_1.setTransform(2.4961,12.5088);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2AFF").s().p("Ao2GdQjTkkBalQQAXhYA2hKQDUkIFQgcQFzgdDxEVQASAVARAXQBQB7AhClQBLF+j0CuQj0Cuj7AWQg7AJg4AAQksAAi5kDg");
	this.shape_2.setTransform(-0.0015,-0.0411);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Ao2GdQjTkkBalQQAXhYA2hKQDUkIFQgcQFzgdDxEVQASAVARAXQBQB7AhClQBLF+j0CuQj0Cuj7AWQg7AJg4AAQksAAi5kDg");
	this.shape_3.setTransform(-0.0145,4.4589,1.03,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_blue, new cjs.Rectangle(-73.7,-67.2,147.4,138.9), null);


(lib.paint_paper = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#BCDEF4").ss(4,1,1).p("EBiXATUQB8x3Fsv7QADgIgCgIQgCgIgFgGQgGgHgJgCUgcngHegnoABbUgngABagjPgByUgjVgBxgQeADtQwfDtgXgDQgXgDCYINQCYIMDqKvQDqKvALAFQAKAFALgEQKNjSOkhYQDsgVPhgGQPigGaUBbQaTBba4BXQdFCoXqj8QAKgBAHgIQAGgHACgKg");
	this.shape.setTransform(-7.5384,-0.8981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAtPAVCQ64hX6ThbQ6UhbviAGQvhAGjsAVQukBYqNDSQgLAEgKgFQgLgFjqqvQjqqviYoMQiYoNAXADQAXADQfjtUAQegDtAjVABxUAjPAByAnggBaUAnogBbAcnAHeQAJACAGAHQAFAGACAIQACAIgDAIQlsP7h8R3QgCAKgGAHQgHAIgKABQuLCYwIAAQqygBrqhDg");
	this.shape_1.setTransform(-7.5384,-0.8981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_paper, new cjs.Rectangle(-688,-144.2,1361,286.7), null);


(lib.txt_paint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcC2QgLgMAAgUIAAi1IghAAQgQAAgJgJQgKgKAAgQQAAgPALgKQAJgJAPAAIAhAAIAAgwQAAgTALgMQAMgNAQAAQARAAAMANQAKAMABATIAAAwIAdAAQAPAAAMAHQALAIAAATQAAATgLAIQgMAIgPAAIgdAAIAAC1QgBAUgKAMQgMALgRAAQgQAAgMgLg");
	this.shape.setTransform(157.4,0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA+CLQgLgMAAgUIAAiJQAAgcgPgNQgPgNgVAAQgYAAgOAQQgMAPAAAXIAACJQAAAUgLAMQgLAMgSAAQgRAAgMgMQgLgMAAgUIAAjSQAAgUALgMQAMgMARAAQAPAAAKAIQAJAIACANQAMgQATgIQASgIAbAAQAXAAAUAHQAUAHAPAOQAOAOAIATQAIAUABAZIAACXQAAAUgLAMQgMAMgRAAQgSAAgLgMg");
	this.shape_1.setTransform(130.05,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbDFQgMgMAAgUIAAjSQAAgUAMgMQAKgMARAAQASAAALAMQALAMgBAUIAADSQABAUgLAMQgLAMgSAAQgRAAgKgMgAgPh7IgPgKQgHgGgDgIQgEgIABgJQgBgJAEgIQADgIAHgGIAPgJQAHgEAIAAQAJAAAIAEIAOAJIAKAOQAEAIAAAJQAAASgOAOQgMANgTAAQgIAAgHgEg");
	this.shape_2.setTransform(108.65,-0.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag9COQgYgMgSgUQgRgUgKgcQgKgcAAgiQAAgfAKgcQAKgcASgVQASgUAYgMQAXgMAcAAQAVAAAUAJQAUAJANASQACgOALgJQALgKAOAAQAOAAAIAGQAIAFADAIQAEAHAAAJIABARIAADDIgBARQAAAJgEAHQgDAIgIAFQgIAFgOAAQgSAAgIgIQgIgJgEgQQgfAlgrAAQgcAAgYgLgAgbhIQgLAIgIALQgIAMgEAOQgDAOAAANQAAAPAEAOQAEAOAHAMQAIALAMAHQAMAHAPAAQAPAAAMgHQALgHAHgLQAIgMAEgOQAEgOAAgPQAAgNgEgOQgDgOgIgMQgIgMgLgHQgMgHgPAAQgQAAgMAHg");
	this.shape_3.setTransform(86.225,5.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiAC6QgMgLAAgUIAAk0QAAgUALgLQALgMAVAAIBhAAQAeAAAaAJQAaAJASASQATARALAYQALAYAAAeQAAAegLAZQgLAXgTARQgTAQgZAJQgZAKgcAAIg8AAIAABaQAAAUgMALQgMALgRAAQgSAAgMgLgAg5gHIA4AAQAaAAAPgRQAPgRAAgZQAAgYgPgRQgPgRgaAAIg4AAg");
	this.shape_4.setTransform(56.975,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhADLQgYgNgRgVQgRgVgJgbQgJgbAAgcQAAgcAIgdQAIgbAQgWQAQgXAXgNQAYgOAgAAQAUABAUAGQATAHAQANIAAhrQAAgUALgMQALgMARAAQASAAALAMQALAMAAAUIAAFSQAAATgLAMQgLANgSAAQgQgBgKgHQgJgJgEgQQgLASgVAJQgVAJgTAAQgeAAgYgMgAgagKQgMAIgIAKQgHAMgEAPQgEAOAAANQAAAPAEAOQAEAOAHALQAIAMAMAHQALAIAPAAQAQgBAMgHQALgIAIgLQAIgMADgPQAEgPAAgOQAAgOgEgOQgEgOgIgLQgHgKgMgHQgLgHgQAAQgPAAgLAHg");
	this.shape_5.setTransform(9.425,-0.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA+CLQgLgMAAgUIAAiJQAAgcgPgNQgPgNgVAAQgZAAgNAQQgMAPAAAXIAACJQAAAUgLAMQgLAMgSAAQgRAAgMgMQgKgMgBgUIAAjSQABgUAKgMQAMgMARAAQAPAAAKAIQAJAIADANQALgQATgIQASgIAbAAQAXAAAUAHQAUAHAPAOQAOAOAIATQAIAUAAAZIAACXQABAUgLAMQgMAMgRAAQgSAAgLgMg");
	this.shape_6.setTransform(-21.05,5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag9COQgYgMgSgUQgRgUgKgcQgKgcAAgiQAAgfAKgcQAKgcASgVQASgUAYgMQAXgMAcAAQAVAAAUAJQAUAJANASQACgOALgJQALgKAOAAQAOAAAIAGQAIAFADAIQAEAHAAAJIABARIAADDIgBARQAAAJgEAHQgDAIgIAFQgIAFgOAAQgSAAgIgIQgIgJgEgQQgfAlgrAAQgcAAgYgLgAgbhIQgLAIgIALQgIAMgEAOQgDAOAAANQAAAPAEAOQAEAOAHAMQAIALAMAHQAMAHAPAAQAPAAAMgHQALgHAHgLQAIgMAEgOQAEgOAAgPQAAgNgEgOQgDgOgIgMQgIgMgLgHQgMgHgPAAQgQAAgMAHg");
	this.shape_7.setTransform(-52.675,5.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABPCRIgOgMIhBhRIhABRIgOAMQgGAFgOAAQgRAAgLgLQgKgKAAgSIACgOIAJgNIBQhaIhEhLIgIgOQgDgHgBgIQABgQAMgLQANgMAQAAQAIABAHAEQAHADAHAIIA2BGIA3hGQAHgIAHgDQAHgEAIgBQAQAAANAMQANALAAAQQgBAIgDAHIgIAOIhEBLIBQBaIAJANIACAOQAAASgKAKQgLALgRAAQgOAAgGgFg");
	this.shape_8.setTransform(-96.35,5.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcDFQgLgMAAgUIAAjSQAAgUALgMQAMgMAQAAQARAAAMAMQAKAMABAUIAADSQgBAUgKAMQgMAMgRAAQgQAAgMgMgAgPh7IgPgKQgGgGgEgIQgEgIAAgJQAAgJAEgIQAEgIAGgGIAPgJQAHgEAIAAQAJAAAIAEIAOAJIAKAOQAEAIgBAJQAAASgMAOQgNANgTAAQgIAAgHgEg");
	this.shape_9.setTransform(-116.2,-0.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACcC9QgKgJgDgTIggjfIgBAAIhCDmIgEAKIgIAKIgNAJQgIACgLAAQgKAAgIgCIgNgJIgIgKIgEgKIhCjmIgBAAIghDfQgCATgKAJQgKAKgUAAQgRAAgMgKQgLgMAAgRIAAgFIAAgEIA0kyIAFgPIAMgOIAQgKQAJgEALAAQAVAAAPAMQAPANAFAOIBADaIABAAIBBjaQAEgOAPgNQAPgMAUAAQALAAAKAEIAQAKIAMAOIAFAPIA0EyIAAAEIAAAFQAAARgLAMQgMAKgRAAQgVAAgJgKg");
	this.shape_10.setTransform(-146.225,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_paint, new cjs.Rectangle(-172.2,-33.5,343.79999999999995,66.6), null);


(lib.txt_mix = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABPCRIgOgNIhBhQIhABQIgOANQgGAFgNgBQgSAAgLgKQgLgKABgSIADgOIAIgNIBQhaIhEhLIgIgOQgDgHAAgIQAAgQAMgLQANgMAPAAQAKAAAGAFQAIAEAGAHIA2BGIA4hGQAFgHAHgEQAIgFAIAAQAQAAANAMQANALAAAQQgBAIgDAHIgJAOIhDBLIBRBaIAIANIACAOQAAASgKAKQgLAKgRAAQgOABgGgFg");
	this.shape.setTransform(128.1,4.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcDFQgLgMABgUIAAjSQgBgUALgMQALgMARAAQASAAAKAMQAMAMAAAUIAADSQAAAUgMAMQgKAMgSAAQgRAAgLgMgAgQh7IgOgKQgHgGgDgIQgEgIAAgJQAAgJAEgIQADgIAHgGIAOgJQAIgEAIAAQAJAAAIAEIAOAJIAKAOQAEAIgBAJQABASgNAOQgNANgTAAQgIAAgIgEg");
	this.shape_1.setTransform(108.25,-1.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACcC+QgKgKgDgTIggjfIgBAAIhCDlIgEAKIgIALIgNAJQgIACgLAAQgKAAgIgCIgNgJIgIgLIgEgKIhCjlIgBAAIghDfQgCATgKAKQgKAJgUAAQgRAAgMgKQgLgLAAgTIAAgEIAAgFIA0kyIAFgOIAMgOIAQgKQAJgEALAAQAVAAAPAMQAPANAFAPIBADYIABAAIBBjYQAEgPAPgNQAPgMAUAAQALAAAKAEIAQAKIAMAOIAFAOIA0EyIAAAFIAAAEQAAATgLALQgMAKgRAAQgVAAgJgJg");
	this.shape_2.setTransform(78.225,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5CNQgagMgTgVQgSgVgLgcQgKgcAAgfQAAgdAKgcQALgbATgVQASgWAbgMQAZgNAfAAQAfAAAaANQAbAMASAWQATAVALAbQAKAcAAAdQAAAfgKAcQgKAcgUAVQgSAVgaAMQgaAMggAAQgfAAgagMgAgbhIQgMAIgIALQgIAMgEAOQgDAOAAANQAAAPAEAOQAEAOAIAMQAIALALAHQAMAHAPAAQAQAAALgHQAMgHAIgLQAIgMAEgOQAEgOAAgPQgBgNgDgOQgEgOgHgMQgIgLgMgIQgMgHgQAAQgQAAgLAHg");
	this.shape_3.setTransform(24.35,4.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcC2QgKgMgBgUIAAi1IghAAQgQAAgJgJQgJgKAAgQQAAgPAKgKQAJgJAPAAIAhAAIAAgwQABgTAKgMQAMgNAQAAQARAAAMANQALAMAAATIAAAwIAdAAQAPAAAMAHQAMAIAAATQAAATgMAIQgMAIgPAAIgdAAIAAC1QAAAUgLAMQgMALgRAAQgQAAgMgLg");
	this.shape_4.setTransform(-3.05,-0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA6CMQgLgKgGgRIgoh/IgBAAIgpB/QgEARgMAKQgKAJgTAAQgUAAgKgLQgMgLgGgRIhDi9IgGgUIgCgRQAAgOALgJQALgKASAAQAOAAAJAJQALAIADAPIAuCWIAAAAIAviTQAEgQAJgJQAKgKAQAAQARAAAKAKQAJAJAEAQIAuCTIABAAIAuiWQAEgPAJgIQAKgJAPAAQARAAALALQALAKAAASIgCAOIgGAQIhDC+QgHARgKALQgMALgTAAQgSAAgLgJg");
	this.shape_5.setTransform(-51.2,4.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5CNQgagMgTgVQgSgVgLgcQgKgcAAgfQAAgdALgcQAKgbASgVQATgWAbgMQAagNAeAAQAfAAAbANQAaAMASAWQATAVAKAbQALAcAAAdQAAAfgLAcQgKAcgSAVQgTAVgaAMQgaAMggAAQgfAAgagMgAgchIQgLAIgIALQgIAMgDAOQgEAOAAANQAAAPAEAOQAEAOAHAMQAJALALAHQAMAHAPAAQAQAAALgHQANgHAHgLQAIgMAEgOQADgOAAgPQABgNgEgOQgDgOgIgMQgIgLgLgIQgMgHgRAAQgPAAgNAHg");
	this.shape_6.setTransform(-87.85,4.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABiC8QgMgLAAgVIAAh4IirAAIAAB4QAAAVgMALQgMALgSAAQgRAAgMgLQgMgLAAgVIAAk3QAAgVAMgLQAMgLARAAQASAAAMALQAMALAAAVIAAB0ICrAAIAAh0QAAgVAMgLQAMgLASAAQARAAAMALQAMALAAAVIAAE3QAAAVgMALQgMALgRAAQgSAAgMgLg");
	this.shape_7.setTransform(-122.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_mix, new cjs.Rectangle(-143.9,-34.7,287.9,66.6), null);


(lib.paintbrush_end = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AhoDiQAOgZAMgcQA7iHASi/IAEg1QAygHA0gNQgCAagBBIQgCBIADAzQADAygFBNQgFBNgLgEQhYAghOAAIgXgBg");
	this.shape.setTransform(-10.5452,120.2122,0.9329,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B09C70").s().p("AjPCIQgMibACiZQDLAxDngxQAECagNCeQhiAhhlAAQhqAAhuglg");
	this.shape_1.setTransform(-0.0388,119.1741,0.9329,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#898375").s().p("AjJC/IAAgCIgGhAQDUBJDMhFIgGA8IgBAHQheAfhjAAQhpgBhpgjgAjYi3IABgqQDKAvDmgwIABArQh0AYhsAAQhtAAhlgYg");
	this.shape_2.setTransform(-0.0267,120.25,0.9329,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.247)").s().p("Ag/TNQhEnYAAqVQAAqkBHnfQAOheAPhLQhxQKEUWPg");
	this.shape_3.setTransform(-9.863,46.5412,0.8831,0.7306);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0BD4A").s().p("AivVoQhDnYgBqVQAAqkBHnfQBInfBkAAQBlAABHHfQBHHfAAKkQABKVhFHYg");
	this.shape_4.setTransform(-0.0025,35.2419,0.8831,0.7306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintbrush_end, new cjs.Rectangle(-21.5,-65.8,43,208.7), null);


(lib.paint_brush_brush = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AieGuQjngNjIhsQjHhsgPjDQB1DADbgqQlPiOAzj7QAYhzBJhPQiQGBJLBeQhNDJF4hTQF5hSBomPQBkBiAtCnQA8ibhvi0QBlBaAfCSQAzDrj6C7QAyh3gaiWQhsEIjcBYQi/BMjHAAQgeAAgegCg");
	this.shape.setTransform(-8.4315,14.348);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A3341").s().p("AieI8QjngNjIhrQjHhsgPjEQB1DADbgqQlPiNAzj8QA0j9EqhSQiUCvB0BGQB1BFCghoQCehmASj7IEYAAQAwCuCmBCQDmBbAzDsQAzDqj6C7QAyh3gaiWQhsEIjcBYQi/BMjHAAQgeAAgegCg");
	this.shape_1.setTransform(-8.4315,0.1105);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-64.5,216,147.2);


(lib.button_shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("AcMv7QBgBgAACHIAAYoQAACIhgBgQhgBgiHAAMgxJAAAQiHAAhhhgQhfhgAAiIIAA4oQAAiHBfhgQBhhgCHAAMAxJAAAQCHAABgBggAcRwBQBjBjAACKIAAYoQAACLhjBiIAAAAQhiBiiKAAMgxJAAAQiKAAhjhiQhihiAAiLIAA4oQAAiKBihjIAAAAQBjhiCKAAMAxJAAAQCKABBiBhgAcXwGQBkBlAACNIAAYoQAACOhkBkIgBAAQhkBliNAAMgxJAAAQiOAAhkhlQhkhkAAiOIAA4oQAAiNBkhlIAAAAQBlhkCNAAMAxJAAAQCOAABkBkgAccwLQBnBnAACQIAAYoQAACRhnBnQhmBniRgBMgxJAAAQiRABhnhnQhmhnAAiRIAA4oQAAiQBmhnQBnhmCRgBMAxJAAAQCRAABmBngAchwRQBpBpAACUIAAYoQAACVhpBoQhoBpiUAAMgxJAAAQiUAAhphpQhohoAAiVIAA4oQAAiTBohqQBphoCUAAMAxJAAAQCUAABoBogAcmwWQBsBrAACXIAAYoQAACYhrBqIgBAAQhqBsiXgBMgxJAAAQiXAAhrhrQhrhqAAiYIAA4oQAAiXBrhrIAAAAQBrhrCXAAMAxJAAAQCXABBqBqgAcswbQBtBtAACaIAAYoQAACbhtBsIAAABQhtBtiaAAMgxJAAAQiaAAhthuQhthsAAibIAA4oQAAiaBshtIABAAQBthtCaAAMAxJAAAQCaAABtBtgAcxwhQBwBwAACdIAAYoQAACehwBvIAAAAQhvBvidAAMgxJAAAQidABhwhwQhvhvAAieIAA4oQAAidBvhvIAAgBQBwhuCdgBMAxJAAAQCdAABvBvg");
	this.shape.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.027)").s().p("A8xQhQhvhvAAidIAA4oQAAieBvhvIAAAAQBwhvCdAAMAxJAAAQCdgBBvBwQBwBvAACeIAAYoQAACdhwBvIAAAAQhvBvidAAMgxJAAAIAAAAQidABhwhwgA8rwbIgBAAQhsBtAACbIAAYoQAACaBtBsQBtBuCaAAMAxJAAAQCaAABthtIAAgBQBthsAAiaIAA4oQAAibhthtQhthtiaAAMgxJAAAIAAAAQiaAAhtBtg");
	this.shape_1.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.059)").s().p("A4kSJQiaAAhthuQhthsAAiaIAA4oQAAibBthtIAAAAQBthtCaAAMAxJAAAQCaAABtBtQBtBtAACbIAAYoQAACahtBsIAAABQhtBtiaAAgA8mwWIAAAAQhrBrAACYIAAYoQAACXBrBqQBrBrCXABMAxJAAAQCXAABqhrIABgBQBrhqAAiXIAA4oQAAiYhshrQhqhqiXgBMgxJAAAIAAAAQiXAAhrBrg");
	this.shape_2.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.09)").s().p("A4kSCQiXgBhrhrQhrhqAAiXIAA4oQAAiYBrhrIAAAAQBrhrCXAAMAxJAAAQCXABBqBqQBsBrAACYIAAYoQAACXhrBqIgBABQhqBriXAAgA8hwQQhoBpAACUIAAYoQAACUBoBoQBpBpCUAAMAxJAAAQCUAABohpQBphoAAiUIAA4oQAAiVhphoQhohpiUAAMgxJAAAQiUAAhpBpg");
	this.shape_3.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.122)").s().p("AYlR6MgxJAAAQiUAAhphpQhohoAAiUIAA4oQAAiUBohpQBphpCUAAMAxJAAAQCUAABoBpQBpBoAACVIAAYoQAACUhpBoQhoBpiUAAIAAAAgA8bwLQhnBnAACRIAAYoQAACQBnBnQBmBnCRAAMAxJAAAQCRAABmhnQBnhnAAiQIAA4oQAAiRhnhnQhmhniRABMgxJAAAQiRAAhmBmg");
	this.shape_4.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.153)").s().p("AYlRzMgxJAAAQiRAAhmhnQhnhnAAiQIAA4oQAAiRBnhnQBmhmCRAAMAxJAAAQCRgBBmBnQBnBnAACRIAAYoQAACQhnBnQhmBmiRABIAAAAgA8WwGIAAAAQhkBlAACOIAAYoQAACNBkBlQBkBkCOAAMAxJAAAQCNAABlhkIAAgBQBkhkAAiNIAA4oQAAiOhkhlQhkhkiOAAMgxJAAAIAAAAQiOAAhkBkg");
	this.shape_5.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.184)").s().p("A4kRrQiOAAhkhkQhkhlAAiNIAA4oQAAiOBkhlIAAAAQBlhkCNAAMAxJAAAQCOAABkBkQBkBlAACOIAAYoQAACNhkBkIAAABQhlBkiNAAgA8RwBIAAAAQhiBjAACLIAAYoQAACKBiBiQBjBiCKAAMAxJAAAQCKAABihiIAAAAQBjhiAAiKIAA4oQAAiLhjhjQhihhiKAAMgxJAAAIAAAAQiKAAhjBhg");
	this.shape_6.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.216)").s().p("A4kRjQiKAAhjhiQhihiAAiKIAA4oQAAiLBihjIAAAAQBjhiCKABMAxJAAAQCKAABiBhQBjBjAACLIAAYoQAACKhjBiIAAAAQhiBiiKAAgA8Lv7QhgBgAACIIAAYoQAACHBgBgQBgBgCHAAMAxJAAAQCHAABghgQBghgAAiHIAA4oQAAiIhghgQhghgiHAAMgxJAAAQiHAAhgBgg");
	this.shape_7.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.247)").s().p("A4kRcQiHAAhghgQhghgAAiHIAA4oQAAiIBghgQBghgCHAAMAxJAAAQCHAABgBgQBgBgAACIIAAYoQAACHhgBgQhgBgiHAAg");
	this.shape_8.setTransform(0.0049,-0.0146,1.0355,1.0609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_shadow, new cjs.Rectangle(-203.2,-125,406.4,250), null);


(lib.btn_canvas_shdw = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(102,102,102,0.129)").s().p("Ehw3BT9IknkoMAAAijRMDmUAAAIEoEoMAABCjRgEh1XBPSIEkEkMDmLAAAMAAAijHIkkkkMjmLAAAg");
	this.shape.setTransform(0,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.196)").s().p("EhwzBT2IkkkkMAAAijHMDmLAAAIEkEkMAAACjHgEh1QBPQIEfEgMDmDAAAMAAAii+IkhkhMjmCAAAg");
	this.shape_1.setTransform(0,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,102,102,0.263)").s().p("EhwxBTwIkfkgMgABii/MDmCAAAIEhEhMAAACi+gEh1KBPNIEcEdMDl5AAAMAAAii1IkdkeMjl4AAAg");
	this.shape_2.setTransform(0,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.329)").s().p("EhwuBTqIkckdMAAAii2MDl4AAAIEdEeMAAACi1gEh1EBPKIEYEZMDlwAAAMAAAiisIkZkZMjlvAAAg");
	this.shape_3.setTransform(0,-0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,102,102,0.396)").s().p("EhwsBTjIkYkZMAAAiisMDlvAAAIEZEZMAAACisgEh09BPIIEUEUMDlnAAAMAAAiijIkVkUMjlmAAAg");
	this.shape_4.setTransform(0,-0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.463)").s().p("EhwpBTcIkUkUMAAAiijMDlmAAAIEVEUMAAACijgEh02BPFIEQERMDleAAAMAAAiiZIkSkSMjlcAAAg");
	this.shape_5.setTransform(0,-0.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.529)").s().p("EhwmBTWIkQkRMAAAiiaMDlcAAAIESESMAAACiZgEh0wBPCIEMEOMDlVAAAMAAAiiRIkOkOMjlTAAAg");
	this.shape_6.setTransform(0,-0.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.596)").s().p("EhwkBTQIkMkOMAAAiiRMDlTAAAIEOEOMAAACiRgEh0qBPAIEJEJMDlLAAAMAAAiiIIkJkJMjlLAAAg");
	this.shape_7.setTransform(0,-0.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,102,102,0.663)").s().p("EhwhBTJIkJkJMAAAiiIMDlLAAAIEJEJMAAACiIgEh0jBO9IEFEGMDlCAAAMAAAih+IkGkGMjlBAAAg");
	this.shape_8.setTransform(0,-0.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.729)").s().p("EhweBTDIkFkGMAAAih+MDlBAAAIEGEGMAAACh+gEh0cBO6IEBECMDk5AAAMAAAih1IkDkCMjk3AAAg");
	this.shape_9.setTransform(0,-0.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,102,102,0.796)").s().p("EhwbBS8IkBkCMAAAih1MDk3AAAIEDECMAAACh1gEh0WBO3ID9D+MDkwAAAMAAAihrIj+j/MjkvAAAg");
	this.shape_10.setTransform(0,-0.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,102,102,0.863)").s().p("EhwZBS1Ij9j+MAAAihsMDkvAAAID+D/MAAAChrgEh0QBO1ID6D6MDknAAAMAAAihiIj7j7MjkmAAAg");
	this.shape_11.setTransform(0,-0.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,102,102,0.063)").s().p("Eh1kBPWMAAAijaMDmdAAAIEsEsMAAACjaMjmdAAAIABADgEh1eBPUIEnEoMDmWAAAMgABijRIkokoMjmUAAAg");
	this.shape_12.setTransform(0,-0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("EhwTBSpIj2j3MAAAihaMDkcAAAID3D3MAAAChag");
	this.shape_13.setTransform(0,-0.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,102,102,0.929)").s().p("EhwWBSvIj6j6MAAAihjMDkmAAAID7D7MAAAChigEh0JBOyID2D3MDkdAAAMAAAihaIj3j3MjkcAAAg");
	this.shape_14.setTransform(0,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_canvas_shdw, new cjs.Rectangle(-752.5,-538.1,1505,1076.2), null);


(lib.paint_tube_yellowlabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF592").s().p("AgaPuQhDjBgRlgQgptNAjoMQAEhAAHg7QA9APBCAKQgWCOgOCuQg3K2BXJCQArEfBICjQhVgJhKgRg");
	this.shape.setTransform(-30.7309,15.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(216,125,29,0.2)").s().p("AJ7HYQAQvBgFmQQAAgqgDgnQBTguAXg4QAlONg8JjQgkFhgaC+QghAshIAmQBGjeAGl7gAqYPdQiOvmA/wdQAdA4BeAwQgdE6ACL3QACK/BADyQg4gigbglg");
	this.shape_1.setTransform(-0.0164,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE900").s().p("AnoQYQiBgzgvhAQiOvmA/wdQApBPCnA9QDeBQE5AAQE6AADehQQCxhAAkhWQAlONg8JjQgkFhgaC+QgwA/h/AyQjLBRkeAAQkdAAjLhRg");
	this.shape_2.setTransform(0.7,-138.4,1,1,0,0,0,0.7,-144.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_yellowlabel, new cjs.Rectangle(-76.3,-106.4,152.6,225.7), null);


(lib.paint_tube_redlabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7C81").s().p("AgaPuQhDjBgRlgQgptNAjoMQAEhAAHg7QA9APBCAKQgWCOgOCuQg3K2BXJCQArEfBICjQhVgJhKgRg");
	this.shape.setTransform(-30.7309,15.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AJ7HYQAQvBgFmQQAAgqgDgnQBTguAXg4QAlONg8JjQgkFhgaC+QghAshIAmQBGjeAGl7gAqYPdQiOvmA/wdQAdA4BeAwQgdE6ACL3QACK/BADyQg4gigbglg");
	this.shape_1.setTransform(-0.0164,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE010C").s().p("AnoQYQiBgzgvhAQiOvmA/wdQApBPCnA9QDeBQE5AAQE6AADehQQCxhAAkhWQAlONg8JjQgkFhgaC+QgwA/h/AyQjLBRkeAAQkdAAjLhRg");
	this.shape_2.setTransform(0.7,-138.4,1,1,0,0,0,0.7,-144.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_redlabel, new cjs.Rectangle(-76.3,-106.4,152.6,225.7), null);


(lib.paint_tube_grayfull = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(133,139,169,0.749)").s().p("AK4gvQgkg9hQgFQhRgFj9AcQj8AcjfgcQjegciZAHQhiAEgpBVQAHhdAIhcIWsAAQANDXAHDIQgZjWgXgpg");
	this.shape.setTransform(0.9,-117.4875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(155,160,184,0.498)").s().p("AmiU/QhPgTg+g+QhQhPgViSQipyNBuzZIEXAAQiOB2geD3QglElACNPQACNQBdCxQBMCSC7A/QhBgLhAgQgAJ7HuQAQvBgFmRQgElZicicID4AAQA/RjhHLLQgoGMgcC/QglD+jdAtIgEABQDkioALq2g");
	this.shape_1.setTransform(-0.0164,-1.2875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shine
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(240,241,245,0.749)").s().p("AAmVcQjHhwgeqFQgptNAjoNQAfnbCbiYICPAAQixDUgyJ5Qg3K2BYJDQBUIvDBBYQhagBhXgKg");
	this.shape_2.setTransform(-22.6059,-0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// color
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B0B3C3","#D0D2DE","#D0D2DE","#B0B3C3"],[0.012,0.18,0.769,1],0,122,0.1,-121.9).s().p("AmiUyQhPgSg+g+QhQhPgViSQipyOBuzZIWtAAQA/RkhHLKQgoGNgcC/QglD+jdAtQjHAoi/AAQjbAAjRg1g");
	this.shape_3.setTransform(0.7,-138.3,1,1,0,0,0,0.7,-138.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_grayfull, new cjs.Rectangle(-76.3,-138.3,152.6,276.6), null);


(lib.paint_tube_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(240,241,245,0.749)").s().p("ALtAGQgXgVi4AJQi4AIk1gEQk0gFiuAGQitAEhhgKQgogDgUAYIAAgHQgBglAmAAIWtAAQAmAAgBAlIAAAYQgGgQgJgJg");
	this.shape.setTransform(0,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(155,160,184,0.749)").s().p("ArWAgQgmAAABgkIAAgJIADAFQAVAZA3gCICXgGQBggFCjACQCkACBrgDQBrgDDPgBQDOgBBbAFQBZAGAngOQARgGALgWIAAAbQABAkgmAAg");
	this.shape_1.setTransform(0,4.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D0D2DE","#BEC0CB"],[0,1],-65.9,-17.6,66,17.7).s().p("ArWBJQgmAAABgmIAAhFQgBgmAmAAIWtAAQAmAAgBAmIAABFQABAmgmAAg");
	this.shape_2.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_end, new cjs.Rectangle(-76.4,-7.3,152.9,14.6), null);


(lib.paint_tube_cap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(240,241,245,0.749)").s().p("AgTCJQABiJgYiPQAkAIAmADIALABQgXB6APCZQgdgBgZgGg");
	this.shape.setTransform(-5.7375,2.6375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(155,160,184,0.749)").s().p("AC0iCQAYgLAXgOIgXESQgcAWggAPQA6ingWh3gAjLB3IgXkSQAXAOAYALQgWB3A5CnQgfgPgcgWg");
	this.shape_1.setTransform(0.025,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D0D2DE","#BEC0CB"],[0,1],-4.1,15.6,4.2,-15.5).s().p("AjLBoIgXkSQBbA5BuAHIAZABIAagBQBugHBbg5IgXESQhWBDh2AAQh1AAhWhDg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_cap, new cjs.Rectangle(-22.7,-17.1,45.5,34.3), null);


(lib.paint_tube_bluelabel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#407DFF").s().p("AgaPuQhDjBgRlgQgptNAjoMQAEhAAHg7QA9APBCAKQgWCOgOCuQg3K2BXJCQArEfBICjQhVgJhKgRg");
	this.shape.setTransform(-30.7309,15.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AJ7HYQAQvBgFmQQAAgqgDgnQBTguAXg4QAlONg8JjQgkFhgaC+QghAshIAmQBGjeAGl7gAqYPdQiOvmA/wdQAdA4BeAwQgdE6ACL3QACK/BADyQg4gigbglg");
	this.shape_1.setTransform(-0.0164,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004BFF").s().p("AnoQYQiBgzgvhAQiOvmA/wdQApBPCnA9QDeBQE5AAQE6AADehQQCxhAAkhWQAlONg8JjQgkFhgaC+QgwA/h/AyQjLBRkeAAQkdAAjLhRg");
	this.shape_2.setTransform(0.7,-138.4,1,1,0,0,0,0.7,-144.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_bluelabel, new cjs.Rectangle(-76.3,-106.4,152.6,225.7), null);


(lib.txt_mp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgPCcQgHgGAAgKQAAgJAHgGQAHgHAIAAQAJAAAIAHQAGAGAAAJQAAAKgGAGQgIAHgJAAQgIAAgHgHgAgNBFQgGgGABgKIAAjCQgBgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADCQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape.setTransform(280.2,-0.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_1.setTransform(265.875,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA8B1QgEgGAAgKIAAiBQgBgQgFgLQgFgLgHgHQgJgHgJgEQgKgDgKAAQgJAAgKADQgJAEgJAHQgHAHgFALQgGALAAAQIAACBQABAKgGAGQgFAFgJAAQgJAAgFgFQgGgGAAgKIAAjJQAAgKAGgGQAFgFAJAAQAJAAAFAFQAGAGgBAKIAAAJIABABQANgRASgHQARgHASAAQAOAAAPAEQAOAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_2.setTransform(246.15,3.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_3.setTransform(229.475,-0.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABJB2QgGgFAAgKIAAgRIgBAAQgNATgQAJQgRAIgTAAQgYAAgUgKQgUgKgNgRQgNgRgIgWQgGgWAAgYQAAgXAGgWQAIgWANgRQANgRAUgKQAUgKAYAAQAUAAAQAIQAPAIAOAQIABAAIAAgNQAAgKAGgFQAHgEAFAAQAGAAAHAEQAGAFAAAKIAADNQAAAKgGAFQgHAEgGAAQgFAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQAMAIARAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgOgIQgMgIgSAAQgRAAgMAIg");
	this.shape_4.setTransform(211.9,3.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhhCsQgFgGAAgJIAAk5QAAgKAFgFQAFgFAJAAQAJAAAGAFQAFAFAAAKIAAANIABAAQARgiAuABQAYgBATAKQATALANAQQAOASAGAWQAHAWAAAXQAAAYgHAXQgGAUgOASQgNAQgTALQgTAKgYAAQgLgBgKgCIgSgHIgOgLIgKgLIgBAAIAAB6QAAAJgFAGQgGAFgJAAQgJAAgFgFgAggiGQgMAIgIANQgIAMgDAQQgEAPAAAPQAAAQAEAQQADAPAIAMQAIANAMAHQAMAJATgBQARABAMgJQANgHAIgNQAIgMADgPQAEgQAAgQQAAgPgEgPQgDgQgIgMQgIgNgNgIQgMgJgRABQgTgBgMAJg");
	this.shape_5.setTransform(188.025,8.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_6.setTransform(151.575,3.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_7.setTransform(131.775,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBwQgVgKgNgRQgOgRgGgWQgGgWAAgYQAAgXAHgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAYAAATAKQATAKANAQQAOARAGAVQAIAVgBAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAFANAJAKQAJAKAOAGQAMAFAQAAQATAAAOgFQANgFAIgGIAQgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgIAJgOAHQgOAHgRAGQgRAEgRAAQgcAAgVgKgAgchRQgMAGgIALQgJAKgDAOQgEANgBAOICDAAQgBgNgDgNQgEgNgIgLQgHgLgMgGQgNgHgPAAIgDAAQgQAAgMAGg");
	this.shape_8.setTransform(101.25,3.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghB2QgRgEgMgHQgLgGgIgIQgGgIAAgIQAAgIAEgFQAFgFAGAAQAHAAAHAFIAOAKIAUAKQALAEAQAAQAVAAAMgKQANgKAAgMQAAgMgJgIQgKgIgOgHIgegNQgRgHgOgHQgOgIgJgMQgKgLAAgRQAAgQAHgNQAIgNALgIQAMgJAOgEQAPgEAOAAQAMAAAOADQAOADALAFQAMAGAJAIQAHAIAAAJQAAAGgEAFQgFAFgJAAQgGAAgFgEIgMgIIgQgIQgIgEgOAAQgRAAgMAHQgNAIAAAPQABAKAJAIQAJAHAPAGIAdAMQASAGAOAIQAOAIAJAMQAJAMAAARQAAASgHAOQgIAOgMAJQgMAJgQAFQgPAEgQAAQgTAAgQgEg");
	this.shape_9.setTransform(79.55,3.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsBwQgVgKgNgRQgOgRgGgWQgHgWABgYQgBgXAIgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAXAAAUAKQATAKANAQQAOARAGAVQAIAVgBAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAEANAKAKQAJAKAOAGQAMAFAQAAQAUAAANgFQANgFAJgGIAPgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgJAJgNAHQgOAHgRAGQgRAEgRAAQgdAAgUgKgAgchRQgNAGgHALQgJAKgDAOQgEANgBAOICDAAQAAgNgEgNQgEgNgIgLQgIgLgLgGQgMgHgQAAIgDAAQgQAAgMAGg");
	this.shape_10.setTransform(57.95,3.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA9CpQgGgFAAgKIAAiDQAAgPgEgLQgFgLgJgHQgHgGgKgEQgKgEgKABQgJgBgJAEQgLAEgHAGQgJAHgEALQgGALABAPIAACDQgBAKgFAFQgFAGgJAAQgJAAgFgGQgGgFAAgKIAAkzQAAgJAGgGQAFgGAJAAQAJAAAFAGQAFAGABAJIAABzIABABQAMgRASgHQASgIAQABQAPAAAOAEQAPAFAMAKQAMAMAIAQQAIASAAAYIAACFQAAAKgFAFQgGAGgJAAQgJAAgFgGg");
	this.shape_11.setTransform(34.15,-2.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_12.setTransform(14.375,-0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglCqQgGgGAAgKIAAi5IgkAAQgUAAAAgSQAAgRAUAAIAkAAIAAgXQABgSAFgPQAGgQAKgLQAKgMANgGQAPgHASAAIATADIAVAGQALAEAGAHQAIAHAAAJQAAARgQAAQgGAAgFgDIgJgHIgMgGQgIgDgNAAQgKAAgHAEQgGADgFAHQgDAGgBAJIgCARIAAAcIAjAAQAVAAAAARQAAASgVAAIgjAAIAAC5QAAAKgFAGQgGAFgJAAQgJAAgFgFg");
	this.shape_13.setTransform(-15,-2.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_14.setTransform(-37.925,3.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgsBwQgVgKgNgRQgNgRgHgWQgGgWgBgYQAAgXAIgWQAHgWAOgRQAOgRAUgKQAUgKAYAAQAYAAAUAKQATAKAOAQQAMARAIAVQAGAVABAVQgBAKgFAFQgDAFgOAAIiUAAQAAAQAFANQAFANAJAKQAJAKANAGQANAFAQAAQATAAAOgFQANgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAIgIAIQgJAJgNAHQgOAHgRAGQgRAEgSAAQgbAAgVgKgAgchRQgNAGgIALQgIAKgEAOQgDANgBAOICCAAQABgNgEgNQgEgNgHgLQgJgLgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_15.setTransform(-72.95,3.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA8B1QgEgGAAgKIAAiBQgBgQgFgLQgFgLgHgHQgJgHgJgEQgKgDgKAAQgJAAgKADQgJAEgJAHQgHAHgFALQgGALAAAQIAACBQABAKgGAGQgFAFgJAAQgJAAgFgFQgGgGAAgKIAAjJQAAgKAGgGQAFgFAJAAQAJAAAFAFQAGAGgBAKIAAAJIABABQANgRASgHQARgHASAAQAOAAAOAEQAPAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_16.setTransform(-96.75,3.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_17.setTransform(-120.925,3.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgsBwQgVgKgNgRQgNgRgHgWQgGgWgBgYQABgXAHgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAYAAATAKQATAKANAQQANARAIAVQAGAVAAAVQAAAKgEAFQgEAFgOAAIiUAAQAAAQAFANQAFANAJAKQAJAKANAGQANAFAQAAQATAAAOgFQANgFAIgGIAPgLQAGgFAGAAQAGAAAEAEQAEAFABAIQAAAIgJAIQgIAJgOAHQgOAHgRAGQgRAEgSAAQgbAAgVgKgAgchRQgMAGgJALQgHAKgEAOQgEANgBAOICCAAQAAgNgDgNQgEgNgIgLQgHgLgNgGQgMgHgPAAIgDAAQgQAAgMAGg");
	this.shape_18.setTransform(-155.95,3.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghB2QgQgEgMgHQgNgGgGgIQgIgIABgIQAAgIAEgFQAFgFAHAAQAHAAAFAFIAQAKIATAKQAMAEAPAAQAVAAANgKQAMgKAAgMQAAgMgJgIQgKgIgOgHIgegNQgQgHgOgHQgPgIgJgMQgKgLAAgRQAAgQAIgNQAGgNAMgIQALgJAPgEQAPgEAOAAQAMAAAOADQAOADAMAFQAMAGAIAIQAHAIAAAJQAAAGgEAFQgFAFgJAAQgGAAgFgEIgMgIIgQgIQgIgEgOAAQgQAAgNAHQgNAIAAAPQAAAKAKAIQAJAHAPAGIAdAMQASAGAOAIQANAIAKAMQAKAMgBARQABASgIAOQgHAOgNAJQgLAJgRAFQgPAEgQAAQgSAAgRgEg");
	this.shape_19.setTransform(-177.65,3.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_20.setTransform(-199.675,3.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_21.setTransform(-223.875,3.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA9CpQgGgFAAgKIAAiDQABgPgGgLQgEgLgJgHQgIgGgJgEQgKgEgKABQgJgBgJAEQgLAEgHAGQgJAHgEALQgGALABAPIAACDQAAAKgGAFQgFAGgJAAQgJAAgFgGQgGgFAAgKIAAkzQAAgJAGgGQAFgGAJAAQAJAAAFAGQAGAGAAAJIAABzIABABQAMgRASgHQASgIAQABQAPAAAOAEQAPAFAMAKQAMAMAIAQQAIASAAAYIAACFQAAAKgFAFQgGAGgJAAQgJAAgFgGg");
	this.shape_22.setTransform(-248.1,-2.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgoCVQgbgOgRgWQgSgXgJgeQgJgdAAgfQAAgeAJgeQAJgdASgXQARgXAcgNQAagOAjAAQAVAAARAFQARAFAMAHQAMAIAHAIQAGAIABAGQgBAIgEAFQgEAGgIAAQgHAAgFgFIgPgLIgTgLQgMgFgSAAQgaAAgTAMQgTALgNATQgMASgFAXQgGAXABAWQgBAXAGAXQAGAXAMASQAMATATALQASAMAYAAQASAAAOgFIAXgKIARgKQAIgEAGAAQAHAAAFAFQAEAFAAAJQAAAHgIAIQgIAIgOAGQgNAHgTAEQgTAEgVAAQghAAgagOg");
	this.shape_23.setTransform(-273.35,-0.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.1,-28.4,582.2,54.5);


(lib.chat_bbl_textbg_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CFE7FF").ss(4,1,1).p("AZKHgMgyTAAAA5JnfMAyTAAA");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5JHgIAAu/MAyTAAAIAAO/g");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chat_bbl_textbg_white, new cjs.Rectangle(-163,-50,326,100), null);


(lib.chat_bbl_textbg_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ACD5FF").s().p("A5JHgIAAu/MAyTAAAIAAO/g");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chat_bbl_textbg_blue, new cjs.Rectangle(-161,-48,322,96), null);


(lib.chat_bbl_end_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CFE7FF").ss(4,1,1).p("AEZHgIiiAAQilAAh1h1QhhhigRiCQgDgYAAgYIAAimQAAimB1h1QB1h1ClAAICiAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB3HgQilAAh1h2QhhhhgQiCQgEgYAAgYIAAimQAAimB1h1QB1h1ClAAICiAAIAAO/gAkYCHIAAgwQAAAYAEAYgAkYBXIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chat_bbl_end_white, new cjs.Rectangle(-30.1,-50,60.2,100), null);


(lib.chat_bbl_end_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ACD5FF").s().p("AB3HgQilAAh1h2QhhhhgQiCQgEgYAAgYIAAjQIACAAQANiLBmhmQB1h1ClAAICiAAIAAO/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chat_bbl_end_blue, new cjs.Rectangle(-28.1,-48,56.2,96), null);


(lib.buttonhl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AhfBYQhegCAEgrQADgqA1gtQA2gtBLAAQBKAAA1AtQA2AtAFApQAFAohTAFQg4ADg3AAQguAAgugCg");
	this.shape.setTransform(16.3216,5.8546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-3.1,37.3,18);


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().p("AqnKoIAA1PIVPAAIAAVPg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(-68,-68,136.1,136.1), null);


(lib.mark_eye_frontL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AiQBaQAOALAaAHQAhAJA1ADQBNAEA/gKQAMgCALgCQACghgCgbQgBgMgBgKQgFhphRggQhYggg9A3Qg+A2AKB6g");
	this.shape.setTransform(1.5,-1.65,1,1,0,0,0,1.5,1.7);

	this.instance = new lib.mark_eye_blink("single",0);
	this.instance.setTransform(15,3.9,0.8841,0.8834,0,8.9228,9.1076,17.2,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{regX:17.2,regY:-5,scaleX:0.8841,scaleY:0.8834,skewX:8.9228,skewY:9.1076,x:15,y:3.9,startPosition:0}}]},1).to({state:[{t:this.instance,p:{regX:-17.4,regY:4.5,scaleX:0.8947,scaleY:0.91,skewX:0,skewY:179.4811,x:14.9,y:9.2,startPosition:1}}]},1).wait(1));

	// eye_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgSB4QhegFgggZIAAAAIgBghIAAAAQAAhgA1gvIAAAAQA9g2BYAfIAAAAQBRAgAFBpIAAAAQADAYAAAdIAAAAIgBAdIAAAAQg0AMhCAAIAAAAIgtgCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.009,y:-3.3968}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// eye_shine
	this.instance_1 = new lib.eye_shine();
	this.instance_1.setTransform(5.85,-6.4,0.8543,0.8543,0,0,180,-0.1,0.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// eye_black
	this.instance_2 = new lib.eye_black();
	this.instance_2.setTransform(0.4,-0.55,0.8543,0.8543,0,0,180,-0.1,0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	// eye_color_green
	this.instance_3 = new lib.eye_color_green();
	this.instance_3.setTransform(0.35,-0.45,0.8543,0.8543,0,0,180,-0.1,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2));

	// mark_eye_white
	this.instance_4 = new lib.mark_eye_white("single",0);
	this.instance_4.setTransform(0,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-16.5,35.9,28.9);


(lib.mark_eye_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996633").ss(2,1,1).p("AgDB1QgyAGgjgHQgLgDgKgEQgBgMAAgLQAAgfAAgaQAChmBEglQBEgYApAsQAoAsACBpQgUAVgXANQghATgmAFg");
	this.shape.setTransform(-11.1,7.8,1,1,0,0,0,-11.1,10.9);

	this.instance = new lib.mark_eye_blink("single",0);
	this.instance.setTransform(-11.2,4.1,0.6605,0.748,0,-14.0153,165.9252,17.1,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{regX:17.1,regY:-4.5,scaleX:0.6605,scaleY:0.748,skewX:-14.0153,skewY:165.9252,x:-11.2,y:4.1,startPosition:0}}]},1).to({state:[{t:this.instance,p:{regX:0,regY:0,scaleX:0.6976,scaleY:0.7191,skewX:1.8277,skewY:-3.9499,x:-0.2,y:4.85,startPosition:1}}]},1).wait(1));

	// eye_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiQBuIgBgdIAAAAQAAgdADgYIAAAAQAFhpBRggIAAAAQBYgfA9A2IAAAAQA1AvAABgIAAAAIgBAhIAAAAQggAZheAFIAAAAIgtACIAAAAQhCAAg0gMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.009,y:-3.0966}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// eye_shine
	this.instance_1 = new lib.eye_shine();
	this.instance_1.setTransform(5.1,-6.75,0.726,0.8543,0,0,180,-0.7,0.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// eye_black
	this.instance_2 = new lib.eye_black();
	this.instance_2.setTransform(-2.1,0,0.726,0.8005,0,0,180,-0.6,0.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	// eye_color_green
	this.instance_3 = new lib.eye_color_green();
	this.instance_3.setTransform(-2.1,0.05,0.726,0.8005,0,0,180,-0.6,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2));

	// mark_eye_white
	this.instance_4 = new lib.mark_eye_white("single",1);
	this.instance_4.setTransform(0,-3.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-16,27.6,27.5);


(lib.carla_eye_frontL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("AB0giQgkhHhLgCQhKgCgmA2QgYAhgHAoQgEAZACAcQABABABAAQAGADAHADQANAHAPAFQBaAdCDgRQAJgBAJgCQAAhUgagxg");
	this.shape.setTransform(-0.0058,-4.3164);

	this.instance = new lib.carla_eye_blink("single",0);
	this.instance.setTransform(-1,4.15,0.7509,1.0451,0,28.4681,12.7829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{regX:0,regY:0,scaleX:0.7509,scaleY:1.0451,skewX:28.4681,skewY:12.7829,x:-1,y:4.15,startPosition:0}}]},1).to({state:[{t:this.instance,p:{regX:-18.6,regY:8.2,scaleX:0.8327,scaleY:0.7617,skewX:0,skewY:178.4953,x:16.25,y:8.2,startPosition:1}}]},1).wait(1));

	// eye_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhhBaQgXgIgVgLIAAAAIAAgQIAAAAQAAgTADgSIAAAAQAHgoAXghIAAAAQAng2BJACIAAAAQBLACAlBHIAAAAQAaAxAABUIAAAAQg7AJgzAAIAAAAQhJAAg4gSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.0088,y:-4.3296}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// eye_shine
	this.instance_1 = new lib.eye_shine();
	this.instance_1.setTransform(6.25,-7.3,0.8543,0.8543,0,0,180,-0.1,0.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// eye_black
	this.instance_2 = new lib.eye_black();
	this.instance_2.setTransform(0.8,-1.45,0.8802,0.8802,0,0,180,-0.1,0.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	// eye_color_brown
	this.instance_3 = new lib.eye_color_brown();
	this.instance_3.setTransform(0.75,-1.35,0.8802,0.8802,0,0,180,-0.1,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2));

	// caerla_eye_white
	this.instance_4 = new lib.carla_eye_white("single",0);
	this.instance_4.setTransform(0,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-16.1,34.2,26.200000000000003);


(lib.carla_eye_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#875421").ss(2,1,1).p("ABiA5QgNALgPAJQhGAnhkgNIAAAAQgEjFBxgLQBYgEAFCj");
	this.shape.setTransform(1.207,-4.5185,1.0492,1.0008,0,2.2457,0);

	this.instance = new lib.carla_eye_blink("single",0);
	this.instance.setTransform(-9.05,3.05,0.5854,0.961,0,-28.0034,157.9024,17.2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance,p:{regX:17.2,regY:-4.5,scaleX:0.5854,scaleY:0.961,skewX:-28.0034,skewY:157.9024,x:-9.05,y:3.05,startPosition:0}}]},1).to({state:[{t:this.instance,p:{regX:-18.7,regY:8.5,scaleX:0.6167,scaleY:0.7675,skewX:6.1481,skewY:-1.001,x:-10.8,y:8.6,startPosition:1}}]},1).wait(1));

	// eye_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhmBaQgZgIgUgLIAAAAIgBgIIAAAAQAAgXAFgWIAAAAQAJgoAaghIAAAAQAqg2BOACIAAAAQBOACAkBHIAAAAQAXAsAABIIAAAAIgBARIAAAAQg/AJg1AAIAAAAQhMAAg6gSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.9153,y:-4.5294}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// eye_shine
	this.instance_1 = new lib.eye_shine();
	this.instance_1.setTransform(5.8,-7.5,0.7261,0.8543,0,15.944,-164.0568,-0.5,0.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// eye_black
	this.instance_2 = new lib.eye_black();
	this.instance_2.setTransform(0.65,-8.5,0.7631,0.8543,0,15.944,-164.0571,0.1,-8.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	// eye_color_brown
	this.instance_3 = new lib.eye_color_brown();
	this.instance_3.setTransform(8.15,1.2,0.7738,0.8543,0,15.944,-164.0574,-12.8,0.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2));

	// caerla_eye_white
	this.instance_4 = new lib.carla_eye_white("single",1);
	this.instance_4.setTransform(1.3,-4.5,1.0492,1.0008,0,2.2457,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-16.1,26.1,25.1);


(lib.mark_sleevestar_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AmmBQQC0iTARkUQEyCzDNAyQBvE0AaBbQg5A7hsAAQjkAAnEkIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:-22.125,y:-8.9664}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// mark_shirt_star_blue
	this.instance = new lib.mark_shirt_star_blue();
	this.instance.setTransform(-21.6,-33.75,0.6602,0.8241,113.7703);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},1).wait(15));

	// sleeve
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EA1C7").ss(2,1,1).p("AEehyQjNgykyizQgQEUi1CTQKbGFCyi4");
	this.shape.setTransform(-22.125,-8.9664);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmmBQQC0iTARkUQEyCzDNAyQBvE0AaBbQg5A7hsAAQjkAAnEkIg");
	this.shape_1.setTransform(-22.125,-8.9664);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2EA1C7").ss(2,1,1).p("AgCnwQhaCkhPDrQhODqhTBgAgcHxQC3iOCynF");
	this.shape_2.setTransform(19.65,-27.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlMDpQBThgBPjqQBOjrBbikQDeAXBwF3QiyHFi2COg");
	this.shape_3.setTransform(19.65,-27.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[]},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.4,-109.7,123.60000000000001,189.9);


(lib.mark_body_front3402 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mark_shirt_front34
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2EA1C7").ss(2,1,1).p("ADovTQAKAAAKABQDkAIDbBhQApAQAaAQAqarrQAEgGAEgFQB+ioD8g+QBcCPC1ARQDcgFAQiVAIDqUQAFAjAFAkQAGAsAGAuQAAAEABADQAAACAAACQABADAAACQBEH7BiMbQjhCJmbAhQn6gHlIiFQBQsHBoqOQAIgyAIgy");
	this.shape.setTransform(3.05,10.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CC6F3").s().p("Ar9NRQBQsHBpqOIAQhkIgQBkIhOiyQB+ioD8g+QBcCPC1ARQDcgFAQiVIAXAEIgVgBIAVABQDkAIDbBhQApAQAZAQQiCAChhFbIgBgHQgCgrgKgvIgKhHIAKBHIAMBaIABAHIAAAEIABAFQBEH7BiMbQjhCJmbAhQn5gHlJiFgAD8vSIAAAAg");
	this.shape_1.setTransform(3.05,10.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(2));

	// mark_neck
	this.instance = new lib.mark_neck("single",0);
	this.instance.setTransform(-0.75,-96.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-113.1,155.1,223.89999999999998);


(lib.mark_facefull_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mark_face_front34
	this.instance = new lib.mark_face_front34();
	this.instance.setTransform(-1,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mark_hair_back_front34
	this.instance_1 = new lib.mark_hair_back_front34();
	this.instance_1.setTransform(-9,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mark_facefull_front34, new cjs.Rectangle(-89.7,-89.8,161.4,174), null);


(lib.carla_shirt_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shirt (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqwLaQArpMBzpbIAXh3IgXB3IhZjkQB9inD8g/QBcCPC0ARQDdgFAPiVQDzBDB0CtIhGCuQBNIAA5LNQi7C1m1AGQg7ADg2AAQmzAAjNi+gAIrnzIgOhbIAOBbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:2.4388}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// carla_shirt_star
	this.instance = new lib.carla_shirt_star();
	this.instance.setTransform(12.3,-18.65,0.8751,1.0021,0,-3.7087,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// carla_shirt_heart
	this.instance_1 = new lib.carla_shirt_heart();
	this.instance_1.setTransform(12.45,-16.65,0.8751,1.0021,0,-3.7087,0);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// carla_shirtp_front34
	this.instance_2 = new lib.carla_shirtp_front34("single",0);
	this.instance_2.setTransform(0,2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-101.3,139.9,196.89999999999998);


(lib.carla_body_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carla_shirt_front34
	this.instance = new lib.carla_shirt_front34("single",0);
	this.instance.setTransform(0,10.35,1,1,0,0,0,0,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// carla_neck
	this.instance_1 = new lib.carla_neck("single",0);
	this.instance_1.setTransform(0,-89.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-103.9,139.9,207.7);


(lib.carla_hair_ponytail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carla_hairtie
	this.instance = new lib.carla_hairtie();
	this.instance.setTransform(28,-24.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// carla_hairtail
	this.instance_1 = new lib.carla_hair_tail();
	this.instance_1.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_hair_ponytail, new cjs.Rectangle(-39.4,-50.2,78.4,100.4), null);


(lib.carla_facefull_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carla_face_front34
	this.instance = new lib.carla_face_front34();
	this.instance.setTransform(4.8,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// carla_hair_back_front34
	this.instance_1 = new lib.carla_hair_back_front34("single",0);
	this.instance_1.setTransform(-4.4,-2.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carla_facefull_front34, new cjs.Rectangle(-80.8,-79.2,155.5,161.5), null);


(lib.sm_shape_painting = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(295.95,-80.05,1.6,1.6,0,0,180,-0.2,-0.7);

	this.instance_1 = new lib.fish_shape1_stroke();
	this.instance_1.setTransform(-294.5,-80.05,1.5999,1.5999,0,0,180,0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fish_fill
	this.fish_head8_fill = new lib.fish_head2_fill();
	this.fish_head8_fill.name = "fish_head8_fill";
	this.fish_head8_fill.setTransform(461.55,-74.8,1.5999,1.5999,0,0,180,-0.4,-0.7);

	this.fish_fin8_fill = new lib.fish_fin2_fill();
	this.fish_fin8_fill.name = "fish_fin8_fill";
	this.fish_fin8_fill.setTransform(307.45,-66.4,1.5999,1.5999,0,0,180,-0.4,-1.1);

	this.fish_tail8_fill = new lib.fish_tail_fill();
	this.fish_tail8_fill.name = "fish_tail8_fill";
	this.fish_tail8_fill.setTransform(95.7,-78.95,1.5999,1.5999,0,0,180,-0.2,-0.7);

	this.fish_body8_fill = new lib.fish_body2_fill();
	this.fish_body8_fill.name = "fish_body8_fill";
	this.fish_body8_fill.setTransform(270.6,-75.85,1.5999,1.5999,0,0,180,-0.4,-0.9);

	this.fish_head5_fill = new lib.fish_head1_fill();
	this.fish_head5_fill.name = "fish_head5_fill";
	this.fish_head5_fill.setTransform(-132.1,-75.9,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_fin5_fill = new lib.fish_fin1_fill();
	this.fish_fin5_fill.name = "fish_fin5_fill";
	this.fish_fin5_fill.setTransform(-285.15,-66.3,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_tail5_fill = new lib.fish_tail_fill();
	this.fish_tail5_fill.name = "fish_tail5_fill";
	this.fish_tail5_fill.setTransform(-495.1,-78.95,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_body5_fill = new lib.fish_body1_fill();
	this.fish_body5_fill.name = "fish_body5_fill";
	this.fish_body5_fill.setTransform(-318.1,-76.5,1.5999,1.5999,0,0,180,0.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_body5_fill},{t:this.fish_tail5_fill},{t:this.fish_fin5_fill},{t:this.fish_head5_fill},{t:this.fish_body8_fill},{t:this.fish_tail8_fill},{t:this.fish_fin8_fill},{t:this.fish_head8_fill}]}).wait(1));

	// do_not_fill_eyes
	this.instance_2 = new lib.fish_eyecolor_fill();
	this.instance_2.setTransform(449.05,-71.95,1.6,1.6,0,0,180,-0.4,-0.6);

	this.instance_3 = new lib.fish_eyecolor_fill();
	this.instance_3.setTransform(-144.65,-71.05,1.5999,1.5999,0,0,180,0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.fish_bg_line();
	this.instance_4.setTransform(0,56.4,1.3143,1.3143);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg_fill
	this.fish_bg2_fill = new lib.fish_bg2_fill();
	this.fish_bg2_fill.name = "fish_bg2_fill";
	this.fish_bg2_fill.setTransform(-0.05,147.4,1.3143,1.3143);

	this.fish_bg1_fill = new lib.fish_bg1_fill();
	this.fish_bg1_fill.name = "fish_bg1_fill";
	this.fish_bg1_fill.setTransform(-0.05,-219.75,1.3143,1.3143,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_bg1_fill},{t:this.fish_bg2_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sm_shape_painting, new cjs.Rectangle(-910.3,-597.7,1820.6,1122.5), null);


(lib.sm_food_painting = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-366.05,-11.85,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// watermelon_fill
	this.wmelon_out_fill = new lib.wmelon_out_fill();
	this.wmelon_out_fill.name = "wmelon_out_fill";
	this.wmelon_out_fill.setTransform(-368.05,-20.55,1.4897,1.4897,0,1.8044,-178.1956,-0.1,0.2);

	this.wmelon_in_fill = new lib.wmelon_in_fill();
	this.wmelon_in_fill.name = "wmelon_in_fill";
	this.wmelon_in_fill.setTransform(-354.45,-27,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wmelon_in_fill},{t:this.wmelon_out_fill}]}).wait(1));

	// icecream1_line
	this.instance_1 = new lib.icecream1_stroke();
	this.instance_1.setTransform(-189.35,-177.6,1.3814,1.3814,-23.536,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// icecream1_fill
	this.icecream1_scoop_fill = new lib.icecream1_scoop_fill();
	this.icecream1_scoop_fill.name = "icecream1_scoop_fill";
	this.icecream1_scoop_fill.setTransform(-213.15,-246.25,1.3814,1.3814,-23.536,0,0,0,-0.1);

	this.icecream1_cone_fill = new lib.icecream1_cone_fill();
	this.icecream1_cone_fill.name = "icecream1_cone_fill";
	this.icecream1_cone_fill.setTransform(-149.85,-87.9,1.3814,1.3814,-23.536,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream1_cone_fill},{t:this.icecream1_scoop_fill}]}).wait(1));

	// ice_cream2_line
	this.instance_2 = new lib.icecream2_stroke();
	this.instance_2.setTransform(70.25,-100.4,1.4195,1.4195,0,23.3533,-156.6467,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// icecream2_fill
	this.icecream2_ice_fill = new lib.icecream2_ice_fill();
	this.icecream2_ice_fill.name = "icecream2_ice_fill";
	this.icecream2_ice_fill.setTransform(87.9,-137.25,1.4195,1.4195,0,23.3533,-156.6467,-0.1,-0.4);

	this.icecream2_stick_fill = new lib.icecream2_stick_fill();
	this.icecream2_stick_fill.name = "icecream2_stick_fill";
	this.icecream2_stick_fill.setTransform(11.55,36.4,1.4195,1.4195,0,23.3533,-156.6467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream2_stick_fill},{t:this.icecream2_ice_fill}]}).wait(1));

	// pizza_line
	this.instance_3 = new lib.pizza_stroke();
	this.instance_3.setTransform(319.3,-157.15,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// pizza_fill
	this.pizza_pepperoni1_fill = new lib.pizza_pepperoni1();
	this.pizza_pepperoni1_fill.name = "pizza_pepperoni1_fill";
	this.pizza_pepperoni1_fill.setTransform(406.95,-162.1,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni2_fill = new lib.pizza_pepperoni2();
	this.pizza_pepperoni2_fill.name = "pizza_pepperoni2_fill";
	this.pizza_pepperoni2_fill.setTransform(279.95,-153.1,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni3_fill = new lib.pizza_pepperoni3();
	this.pizza_pepperoni3_fill.name = "pizza_pepperoni3_fill";
	this.pizza_pepperoni3_fill.setTransform(269.9,-27.7,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_crust_fill = new lib.pizza_crust_fill();
	this.pizza_crust_fill.name = "pizza_crust_fill";
	this.pizza_crust_fill.setTransform(405.25,-232.35,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.5);

	this.pizza_cheese_fill = new lib.pizza_cheese_fill();
	this.pizza_cheese_fill.name = "pizza_cheese_fill";
	this.pizza_cheese_fill.setTransform(308.05,-127.45,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pizza_cheese_fill},{t:this.pizza_crust_fill},{t:this.pizza_pepperoni3_fill},{t:this.pizza_pepperoni2_fill},{t:this.pizza_pepperoni1_fill}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.food_line1_stroke();
	this.instance_4.setTransform(-1.55,-254.8);

	this.instance_5 = new lib.food_line2_stroke();
	this.instance_5.setTransform(16.05,50.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// bg_fill
	this.food_line1_fill = new lib.food_line1_fill();
	this.food_line1_fill.name = "food_line1_fill";
	this.food_line1_fill.setTransform(0,-378.15);

	this.food_line2_fill = new lib.food_line2_fill();
	this.food_line2_fill.name = "food_line2_fill";
	this.food_line2_fill.setTransform(0,295.35);

	this.bg_fill = new lib.bg_fill();
	this.bg_fill.name = "bg_fill";
	this.bg_fill.setTransform(0,0,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_fill},{t:this.food_line2_fill},{t:this.food_line1_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sm_food_painting, new cjs.Rectangle(-778.4,-548.9,1589,1097.9), null);


(lib.sm_dino_painting = function(mode,startPosition,loop,reversed) {
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
	this.dino_pteranodon_stroke.setTransform(-25.95,-46.6,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.dino_pteranodon_stroke).wait(1));

	// no_fill_on_eyes
	this.instance = new lib.dino_peyeshine_fill();
	this.instance.setTransform(137.65,-71.5,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dino_pteranodon_fill
	this.dino_pbody_fill = new lib.dino_pbody_fill();
	this.dino_pbody_fill.name = "dino_pbody_fill";
	this.dino_pbody_fill.setTransform(-91.8,-70.25,0.8511,0.8511,0,0,0,0,-0.1);

	this.dino_pwing_fill = new lib.dino_pwing_fill();
	this.dino_pwing_fill.name = "dino_pwing_fill";
	this.dino_pwing_fill.setTransform(-38,-75.2,0.8511,0.8511);

	this.dino_pfeet2_fill = new lib.dino_pfeet2_fill();
	this.dino_pfeet2_fill.name = "dino_pfeet2_fill";
	this.dino_pfeet2_fill.setTransform(-87.4,105.1,0.8511,0.8511);

	this.dino_pfeet1_fill = new lib.dino_pfeet1_fill();
	this.dino_pfeet1_fill.name = "dino_pfeet1_fill";
	this.dino_pfeet1_fill.setTransform(-171.55,85.6,0.8511,0.8511);

	this.dino_pbeak_fill = new lib.dino_pbeak_fill();
	this.dino_pbeak_fill.name = "dino_pbeak_fill";
	this.dino_pbeak_fill.setTransform(214.9,-82.2,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_pbeak_fill},{t:this.dino_pfeet1_fill},{t:this.dino_pfeet2_fill},{t:this.dino_pwing_fill},{t:this.dino_pbody_fill}]}).wait(1));

	// dino_volcano1_stroke
	this.instance_1 = new lib.dino_volcano1_stroke();
	this.instance_1.setTransform(27.6,-91.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dino_volcano1_fill
	this.dino_volcano1_mtn_fill = new lib.dino_volcano1_mtn_fill();
	this.dino_volcano1_mtn_fill.name = "dino_volcano1_mtn_fill";
	this.dino_volcano1_mtn_fill.setTransform(5.05,162.05);

	this.dino_volcano1_smoke_fill = new lib.dino_volcano1_smoke_fill();
	this.dino_volcano1_smoke_fill.name = "dino_volcano1_smoke_fill";
	this.dino_volcano1_smoke_fill.setTransform(-240,-380.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano1_smoke_fill},{t:this.dino_volcano1_mtn_fill}]}).wait(1));

	// dino_volcano2_stroke
	this.instance_2 = new lib.dino_volcano2_stroke();
	this.instance_2.setTransform(407,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dino_volcano2_fill
	this.dino_volcano2_lava_fill = new lib.dino_volcano2_lava_fill();
	this.dino_volcano2_lava_fill.name = "dino_volcano2_lava_fill";
	this.dino_volcano2_lava_fill.setTransform(449.15,99.05);

	this.dino_volcano2_mtn1_fill = new lib.dino_volcano2_mtn1_fill();
	this.dino_volcano2_mtn1_fill.name = "dino_volcano2_mtn1_fill";
	this.dino_volcano2_mtn1_fill.setTransform(273.05,85.05);

	this.dino_volcano2_mtn2_fill = new lib.dino_volcano2_mtn2_fill();
	this.dino_volcano2_mtn2_fill.name = "dino_volcano2_mtn2_fill";
	this.dino_volcano2_mtn2_fill.setTransform(444.15,153.1);

	this.dino_volcano2_mtn3_fill = new lib.dino_volcano2_mtn3_fill();
	this.dino_volcano2_mtn3_fill.name = "dino_volcano2_mtn3_fill";
	this.dino_volcano2_mtn3_fill.setTransform(607.2,124.1);

	this.dino_volcano2_smoke_fill = new lib.dino_volcano2_smoke_fill();
	this.dino_volcano2_smoke_fill.name = "dino_volcano2_smoke_fill";
	this.dino_volcano2_smoke_fill.setTransform(398.75,-288.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano2_smoke_fill},{t:this.dino_volcano2_mtn3_fill},{t:this.dino_volcano2_mtn2_fill},{t:this.dino_volcano2_mtn1_fill},{t:this.dino_volcano2_lava_fill}]}).wait(1));

	// dino_sky3_fill
	this.dino_sky3_fill = new lib.dino_sky3_fill();
	this.dino_sky3_fill.name = "dino_sky3_fill";
	this.dino_sky3_fill.setTransform(616.55,-69.65);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky3_fill).wait(1));

	// dino_sky2_fill
	this.dino_sky2_fill = new lib.dino_sky2_fill();
	this.dino_sky2_fill.name = "dino_sky2_fill";
	this.dino_sky2_fill.setTransform(83.95,-90.8);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky2_fill).wait(1));

	// dino_sky1_fill
	this.dino_sky1_fill = new lib.dino_sky1_fill();
	this.dino_sky1_fill.name = "dino_sky1_fill";
	this.dino_sky1_fill.setTransform(-547.6,-175.1);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky1_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sm_dino_painting, new cjs.Rectangle(-765.5,-569.1,1563.3,1125.3000000000002), null);


(lib.btn_cvfood = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.4)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.4)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhzRBRtMAAAijZMDmjAAAMAAACjZg");
	mask.setTransform(-0.2061,-0.0732);

	// sm_food_painting
	this.instance = new lib.sm_food_painting();
	this.instance.setTransform(-5.3,73.1,1.2509,1.2509);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_canvas_shdw
	this.instance_2 = new lib.btn_canvas_shdw();
	this.instance_2.setTransform(15,14.9);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cvfood, new cjs.Rectangle(-767.5,-553.2,1535,1106.2), null);


(lib.btn_cvfish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.4)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.4)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhzRBRtMAAAijZMDmjAAAMAAACjZg");
	mask.setTransform(-0.2061,-0.0732);

	// sm_shape_painting
	this.instance = new lib.sm_shape_painting();
	this.instance.setTransform(-3.15,21.25,1.2959,1.2959,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_canvas_shdw
	this.instance_2 = new lib.btn_canvas_shdw();
	this.instance_2.setTransform(33.15,59.2);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cvfish, new cjs.Rectangle(-767.5,-553.2,1553.2,1150.5), null);


(lib.btn_cvdino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.4)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.4)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhzRBRtMAAAijZMDmjAAAMAAACjZg");
	mask.setTransform(-0.2061,-0.0732);

	// sm_dino_painting
	this.instance = new lib.sm_dino_painting();
	this.instance.setTransform(35.7,61.95,1.7083,1.7083,0,0,0,0,-0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_canvas_shdw
	this.instance_2 = new lib.btn_canvas_shdw();
	this.instance_2.setTransform(33.15,59.2);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cvdino, new cjs.Rectangle(-767.5,-553.2,1553.2,1150.5), null);


(lib.shape_painting_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(295.95,-80.05,1.6,1.6,0,0,180,-0.2,-0.7);

	this.instance_1 = new lib.fish_shape1_stroke();
	this.instance_1.setTransform(-294.5,-80.05,1.5999,1.5999,0,0,180,0.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fish_fill
	this.fish_head8_fill = new lib.fish_head2_fill();
	this.fish_head8_fill.name = "fish_head8_fill";
	this.fish_head8_fill.setTransform(461.55,-74.8,1.5999,1.5999,0,0,180,-0.4,-0.7);

	this.fish_fin8_fill = new lib.fish_fin2_fill();
	this.fish_fin8_fill.name = "fish_fin8_fill";
	this.fish_fin8_fill.setTransform(307.45,-66.4,1.5999,1.5999,0,0,180,-0.4,-1.1);

	this.fish_tail8_fill = new lib.fish_tail_fill();
	this.fish_tail8_fill.name = "fish_tail8_fill";
	this.fish_tail8_fill.setTransform(95.7,-78.95,1.5999,1.5999,0,0,180,-0.2,-0.7);

	this.fish_body8_fill = new lib.fish_body2_fill();
	this.fish_body8_fill.name = "fish_body8_fill";
	this.fish_body8_fill.setTransform(270.6,-75.85,1.5999,1.5999,0,0,180,-0.4,-0.9);

	this.fish_head5_fill = new lib.fish_head1_fill();
	this.fish_head5_fill.name = "fish_head5_fill";
	this.fish_head5_fill.setTransform(-132.1,-75.9,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_fin5_fill = new lib.fish_fin1_fill();
	this.fish_fin5_fill.name = "fish_fin5_fill";
	this.fish_fin5_fill.setTransform(-285.15,-66.3,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_tail5_fill = new lib.fish_tail_fill();
	this.fish_tail5_fill.name = "fish_tail5_fill";
	this.fish_tail5_fill.setTransform(-495.1,-78.95,1.5999,1.5999,0,0,180,0.6,-0.7);

	this.fish_body5_fill = new lib.fish_body1_fill();
	this.fish_body5_fill.name = "fish_body5_fill";
	this.fish_body5_fill.setTransform(-318.1,-76.5,1.5999,1.5999,0,0,180,0.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_body5_fill},{t:this.fish_tail5_fill},{t:this.fish_fin5_fill},{t:this.fish_head5_fill},{t:this.fish_body8_fill},{t:this.fish_tail8_fill},{t:this.fish_fin8_fill},{t:this.fish_head8_fill}]}).wait(1));

	// do_not_fill_eyes
	this.instance_2 = new lib.fish_eyecolor_fill();
	this.instance_2.setTransform(449.05,-71.95,1.6,1.6,0,0,180,-0.4,-0.6);

	this.instance_3 = new lib.fish_eyecolor_fill();
	this.instance_3.setTransform(-144.65,-71.05,1.5999,1.5999,0,0,180,0.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.fish_bg_line();
	this.instance_4.setTransform(0,56.4,1.3143,1.3143);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// bg_fill
	this.fish_bg2_fill = new lib.fish_bg2_fill();
	this.fish_bg2_fill.name = "fish_bg2_fill";
	this.fish_bg2_fill.setTransform(-0.05,147.4,1.3143,1.3143);

	this.fish_bg1_fill = new lib.fish_bg1_fill();
	this.fish_bg1_fill.name = "fish_bg1_fill";
	this.fish_bg1_fill.setTransform(-0.05,-219.75,1.3143,1.3143,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish_bg1_fill},{t:this.fish_bg2_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shape_painting_mc, new cjs.Rectangle(-910.3,-597.7,1820.6,1122.5), null);


(lib.food_painting_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-366.05,-11.85,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// watermelon_fill
	this.wmelon_out_fill = new lib.wmelon_out_fill();
	this.wmelon_out_fill.name = "wmelon_out_fill";
	this.wmelon_out_fill.setTransform(-368.05,-20.55,1.4897,1.4897,0,1.8044,-178.1956,-0.1,0.2);

	this.wmelon_in_fill = new lib.wmelon_in_fill();
	this.wmelon_in_fill.name = "wmelon_in_fill";
	this.wmelon_in_fill.setTransform(-354.45,-27,1.4897,1.4897,0,1.8044,-178.1956,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wmelon_in_fill},{t:this.wmelon_out_fill}]}).wait(1));

	// icecream1_line
	this.instance_1 = new lib.icecream1_stroke();
	this.instance_1.setTransform(-189.35,-177.6,1.3814,1.3814,-23.536,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// icecream1_fill
	this.icecream1_scoop_fill = new lib.icecream1_scoop_fill();
	this.icecream1_scoop_fill.name = "icecream1_scoop_fill";
	this.icecream1_scoop_fill.setTransform(-213.15,-246.25,1.3814,1.3814,-23.536,0,0,0,-0.1);

	this.icecream1_cone_fill = new lib.icecream1_cone_fill();
	this.icecream1_cone_fill.name = "icecream1_cone_fill";
	this.icecream1_cone_fill.setTransform(-149.85,-87.9,1.3814,1.3814,-23.536,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream1_cone_fill},{t:this.icecream1_scoop_fill}]}).wait(1));

	// ice_cream2_line
	this.instance_2 = new lib.icecream2_stroke();
	this.instance_2.setTransform(70.25,-100.4,1.4195,1.4195,0,23.3533,-156.6467,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// icecream2_fill
	this.icecream2_ice_fill = new lib.icecream2_ice_fill();
	this.icecream2_ice_fill.name = "icecream2_ice_fill";
	this.icecream2_ice_fill.setTransform(87.9,-137.25,1.4195,1.4195,0,23.3533,-156.6467,-0.1,-0.4);

	this.icecream2_stick_fill = new lib.icecream2_stick_fill();
	this.icecream2_stick_fill.name = "icecream2_stick_fill";
	this.icecream2_stick_fill.setTransform(11.55,36.4,1.4195,1.4195,0,23.3533,-156.6467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icecream2_stick_fill},{t:this.icecream2_ice_fill}]}).wait(1));

	// pizza_line
	this.instance_3 = new lib.pizza_stroke();
	this.instance_3.setTransform(319.3,-157.15,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// pizza_fill
	this.pizza_pepperoni1 = new lib.pizza_pepperoni1();
	this.pizza_pepperoni1.name = "pizza_pepperoni1";
	this.pizza_pepperoni1.setTransform(406.95,-162.1,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni2 = new lib.pizza_pepperoni2();
	this.pizza_pepperoni2.name = "pizza_pepperoni2";
	this.pizza_pepperoni2.setTransform(279.95,-153.1,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_pepperoni3 = new lib.pizza_pepperoni3();
	this.pizza_pepperoni3.name = "pizza_pepperoni3";
	this.pizza_pepperoni3.setTransform(269.9,-27.7,1.2944,1.2945,0,65.0949,-114.9051,-0.1,0);

	this.pizza_crust_fill = new lib.pizza_crust_fill();
	this.pizza_crust_fill.name = "pizza_crust_fill";
	this.pizza_crust_fill.setTransform(405.25,-232.35,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.5);

	this.pizza_cheese_fill = new lib.pizza_cheese_fill();
	this.pizza_cheese_fill.name = "pizza_cheese_fill";
	this.pizza_cheese_fill.setTransform(308.05,-127.45,1.6313,1.6314,0,65.0949,-114.9053,0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pizza_cheese_fill},{t:this.pizza_crust_fill},{t:this.pizza_pepperoni3},{t:this.pizza_pepperoni2},{t:this.pizza_pepperoni1}]}).wait(1));

	// bg_line
	this.instance_4 = new lib.food_line1_stroke();
	this.instance_4.setTransform(-1.55,-254.8);

	this.instance_5 = new lib.food_line2_stroke();
	this.instance_5.setTransform(16.05,50.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// bg_fill
	this.food_line1_fill = new lib.food_line1_fill();
	this.food_line1_fill.name = "food_line1_fill";
	this.food_line1_fill.setTransform(0,-378.15);

	this.food_line2_fill = new lib.food_line2_fill();
	this.food_line2_fill.name = "food_line2_fill";
	this.food_line2_fill.setTransform(0,295.35);

	this.bg_fill = new lib.bg_fill();
	this.bg_fill.name = "bg_fill";
	this.bg_fill.setTransform(0,0,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_fill},{t:this.food_line2_fill},{t:this.food_line1_fill}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.food_painting_mc, new cjs.Rectangle(-778.4,-548.9,1589,1097.9), null);


(lib.dino_painting_mc = function(mode,startPosition,loop,reversed) {
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
	this.dino_pteranodon_stroke.setTransform(-25.95,-46.6,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.dino_pteranodon_stroke).wait(1));

	// no_fill_on_eyes
	this.instance = new lib.dino_peyeshine_fill();
	this.instance.setTransform(137.65,-71.5,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dino_pteranodon_fill
	this.dino_pbody_fill = new lib.dino_pbody_fill();
	this.dino_pbody_fill.name = "dino_pbody_fill";
	this.dino_pbody_fill.setTransform(-91.8,-70.25,0.8511,0.8511,0,0,0,0,-0.1);

	this.dino_pwing_fill = new lib.dino_pwing_fill();
	this.dino_pwing_fill.name = "dino_pwing_fill";
	this.dino_pwing_fill.setTransform(-38,-75.2,0.8511,0.8511);

	this.dino_pfeet2_fill = new lib.dino_pfeet2_fill();
	this.dino_pfeet2_fill.name = "dino_pfeet2_fill";
	this.dino_pfeet2_fill.setTransform(-87.4,105.1,0.8511,0.8511);

	this.dino_pfeet1_fill = new lib.dino_pfeet1_fill();
	this.dino_pfeet1_fill.name = "dino_pfeet1_fill";
	this.dino_pfeet1_fill.setTransform(-171.55,85.6,0.8511,0.8511);

	this.dino_pbeak_fill = new lib.dino_pbeak_fill();
	this.dino_pbeak_fill.name = "dino_pbeak_fill";
	this.dino_pbeak_fill.setTransform(214.9,-82.2,0.8511,0.8511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_pbeak_fill},{t:this.dino_pfeet1_fill},{t:this.dino_pfeet2_fill},{t:this.dino_pwing_fill},{t:this.dino_pbody_fill}]}).wait(1));

	// dino_volcano1_stroke
	this.instance_1 = new lib.dino_volcano1_stroke();
	this.instance_1.setTransform(27.6,-91.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// dino_volcano1_fill
	this.dino_volcano1_mtn_fill = new lib.dino_volcano1_mtn_fill();
	this.dino_volcano1_mtn_fill.name = "dino_volcano1_mtn_fill";
	this.dino_volcano1_mtn_fill.setTransform(5.05,162.05);

	this.dino_volcano1_smoke_fill = new lib.dino_volcano1_smoke_fill();
	this.dino_volcano1_smoke_fill.name = "dino_volcano1_smoke_fill";
	this.dino_volcano1_smoke_fill.setTransform(-240,-380.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano1_smoke_fill},{t:this.dino_volcano1_mtn_fill}]}).wait(1));

	// dino_volcano2_stroke
	this.instance_2 = new lib.dino_volcano2_stroke();
	this.instance_2.setTransform(407,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dino_volcano2_fill
	this.dino_volcano2_lava_fill = new lib.dino_volcano2_lava_fill();
	this.dino_volcano2_lava_fill.name = "dino_volcano2_lava_fill";
	this.dino_volcano2_lava_fill.setTransform(449.15,99.05);

	this.dino_volcano2_mtn1_fill = new lib.dino_volcano2_mtn1_fill();
	this.dino_volcano2_mtn1_fill.name = "dino_volcano2_mtn1_fill";
	this.dino_volcano2_mtn1_fill.setTransform(273.05,85.05);

	this.dino_volcano2_mtn2_fill = new lib.dino_volcano2_mtn2_fill();
	this.dino_volcano2_mtn2_fill.name = "dino_volcano2_mtn2_fill";
	this.dino_volcano2_mtn2_fill.setTransform(444.15,153.1);

	this.dino_volcano2_mtn3_fill = new lib.dino_volcano2_mtn3_fill();
	this.dino_volcano2_mtn3_fill.name = "dino_volcano2_mtn3_fill";
	this.dino_volcano2_mtn3_fill.setTransform(607.2,124.1);

	this.dino_volcano2_smoke_fill = new lib.dino_volcano2_smoke_fill();
	this.dino_volcano2_smoke_fill.name = "dino_volcano2_smoke_fill";
	this.dino_volcano2_smoke_fill.setTransform(398.75,-288.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dino_volcano2_smoke_fill},{t:this.dino_volcano2_mtn3_fill},{t:this.dino_volcano2_mtn2_fill},{t:this.dino_volcano2_mtn1_fill},{t:this.dino_volcano2_lava_fill}]}).wait(1));

	// dino_sky3_fill
	this.dino_sky3_fill = new lib.dino_sky3_fill();
	this.dino_sky3_fill.name = "dino_sky3_fill";
	this.dino_sky3_fill.setTransform(616.55,-69.65);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky3_fill).wait(1));

	// dino_sky2_fill
	this.dino_sky2_fill = new lib.dino_sky2_fill();
	this.dino_sky2_fill.name = "dino_sky2_fill";
	this.dino_sky2_fill.setTransform(83.95,-90.8);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky2_fill).wait(1));

	// dino_sky1_fill
	this.dino_sky1_fill = new lib.dino_sky1_fill();
	this.dino_sky1_fill.name = "dino_sky1_fill";
	this.dino_sky1_fill.setTransform(-547.6,-175.1);

	this.timeline.addTween(cjs.Tween.get(this.dino_sky1_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dino_painting_mc, new cjs.Rectangle(-765.5,-569.1,1563.3,1125.3000000000002), null);


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


(lib.bg_paint_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg_yellow
	this.instance = new lib.bg_yellow();
	this.instance.setTransform(0,0,0.754,0.6572);
	this.instance.alpha = 0.3086;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kiddy_carpet
	this.instance_1 = new lib.kiddy_carpet();
	this.instance_1.setTransform(0,-112.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// classroom_floor
	this.instance_2 = new lib.bg_floor();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_paint_floor, new cjs.Rectangle(-1696.6,-381.1,3393.2,762.2), null);


(lib.paint_jar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jar_top
	this.instance = new lib.jar_top();
	this.instance.setTransform(0.1,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// jar_front
	this.instance_1 = new lib.jar_front();
	this.instance_1.setTransform(-0.05,17.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// paint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB9D99").s().p("AlaA5QiQgZAAgiQAAgjCQgZQAygJBUgHQh2AOg4AUQg3AUABAYQABAYBpAUQBqATCCARQiNgFhrgSgAF5AkQA9gSACgXQACgXh0gWQhzgWjJgFQDOgICDAXQCPAZABAjIAAAAQAAAiiQAZQgvAIg0AFQBEgQA9gSg");
	this.shape.setTransform(0.025,10.5838);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF726C").s().p("Al2BGQibgdAAgpQAAgoCbgeQCbgdDbAAQDcAACbAdQCaAeABAoIAAAAQAAApibAdQibAejcAAQjbAAibgeg");
	this.shape_1.setTransform(0.025,10.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6342B").s().p("Al3ErQhlgcgjglQhRg6A+oGQAAAqCbAdQCcAdDbAAQDbAACbgdQCcgdAAgpQBAIFhSA6QgjAkhnAdQibArjbAAQjbAAicgrg");
	this.shape_2.setTransform(0.075,44.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A8D4FE").s().p("AlaA5QiQgZAAgiQAAgjCQgZQAygJBUgHQh2AOg4AUQg3AUABAYQABAYBpAUQBqATCCARQiNgFhrgSgAF5AkQA9gSACgXQACgXh0gWQhzgWjJgFQDOgICDAXQCPAZABAjIAAAAQAAAiiQAZQgvAIg0AFQBEgQA9gSg");
	this.shape_3.setTransform(0.025,15.6338);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5AAEFC").s().p("Al2BGQiZgcgCgpIAAgGQALglCQgcQCbgdDbAAQDcAACbAdQCbAeAAAoIAAABQgCApiZAcQibAejcAAQjbAAibgeg");
	this.shape_4.setTransform(0.025,15.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0084FF").s().p("Al2EUQhpgdgogfQhIg3A+nZQACApCZAcQCbAeDbAAQDcAACbgeQCZgcACgpQBAHZhPA8QgiAahqAdQibAsjcAAQjbAAibgsgAoRk4IAAgBIAAgGIAAAHIAAAAg");
	this.shape_5.setTransform(0.0258,47.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDF7D5").s().p("AlaA5QiQgZAAgiQAAgjCQgZQAygJBUgHQh2AOg4AUQg3AUABAYQABAYBpAUQBqATCCARQiNgFhrgSgAF5AkQA9gSACgXQACgXh0gWQhzgWjJgFQDOgICDAXQCPAZABAjIAAAAQAAAiiQAZQgvAIg0AFQBEgQA9gSg");
	this.shape_6.setTransform(0.025,5.5338);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEEA81").s().p("AlvBGQiXgdAAgpIAAAAQACgpCVgdQCZgdDWAAQDXAACYAdQCYAeAAAoQAAApiYAdQiYAejXAAQjWAAiZgeg");
	this.shape_7.setTransform(0.075,5.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDB15").s().p("Al2FEQhpgdglgeQhMg/BKo5IAAABQAAApCYAdQCYAeDWAAQDYAACYgeQCYgdAAgpQBKI4hQBCQghAbhqAdQibAsjcAAQjbAAibgsg");
	this.shape_8.setTransform(0.0448,42.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// jar_back
	this.instance_2 = new lib.jar_back();
	this.instance_2.setTransform(-0.05,18.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-65,122.30000000000001,147.7);


(lib.easel_leg_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// easel_ft
	this.instance = new lib.easel_center();
	this.instance.setTransform(-379.15,283.5,1,1,12.9227);

	this.instance_1 = new lib.easel_bottom();
	this.instance_1.setTransform(58.05,120.25,1.021,1,0,-4.9554,-6.141);

	this.instance_2 = new lib.easel_top();
	this.instance_2.setTransform(16.95,-580.6,0.993,1,0,0,4.5741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// easel_legs
	this.instance_3 = new lib.easel_leg2();
	this.instance_3.setTransform(341.9,-686.5,1,1.0193,0,-2.1243,0,-68.5,-688.1);

	this.instance_4 = new lib.easel_leg2();
	this.instance_4.setTransform(-361.95,-686.6,1,1.0161,0,0,0,-68.4,-694.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// easel_chalk_board
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3C38").s().p("Egu8AsmMgDrhbiMBg9AD1MAESBaEg");
	this.shape.setTransform(41.85,-242.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#302E2B").s().p("Eg7/g3GMBveAEhMAIgBl7Mhw8ADxg");
	this.shape_1.setTransform(50.5,-224.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_leg_front, new cjs.Rectangle(-525,-693.1,1056,1418.1), null);


(lib.easel_leg_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// easel_legs
	this.instance = new lib.easel_leg1();
	this.instance.setTransform(403.4,-661.95,1,1.0007,0,-2.1462,0,110.5,-667.7);

	this.instance_1 = new lib.easel_leg1();
	this.instance_1.setTransform(-410.85,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// easel_bk
	this.instance_2 = new lib.easel_center();
	this.instance_2.setTransform(379.35,300);

	this.instance_3 = new lib.easel_bottom();
	this.instance_3.setTransform(-48.45,130.05);

	this.instance_4 = new lib.easel_top();
	this.instance_4.setTransform(19.25,-563.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_leg_back, new cjs.Rectangle(-521.3,-661.9,1042.6,1341.9), null);


(lib.paintpaper_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_paper
	this.instance = new lib.paint_paper();
	this.instance.setTransform(0,-3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.157)").s().p("Ehe9AWeQgbgMgKgaQoA0NjGyLQgSgPAMgTIgFgiIAVAQQA1gMQMjTUAQLgDUAj+AC5UAj9AC5AnqgCKUAnsgCKAOkADfQNFDHBMADQACASgGARQlwPXhNSiQgBAYgQASIAAABQgRARgYAEQ31Dt97iIIgBAAIgCAAQ6mhQ6ghcQ6ghdvXgQQvSgRo+BJQo9BKrFD3IABAAQgMAEgLAAQgPAAgPgHg");
	this.shape.setTransform(-10.7655,-19.1601);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// paint_paper_shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("Ehf2AXQQgagMgKgbQoP0zhSwYIAAgBQgCgYAPgUIAAAAQANgUAYgHUAfRgJMAjdABzUAjPAByAndgBbUAntgBbAdJAH/QATAFAPAPQANAOAFAUQADAUgGATQlxPWhMSjQgCAYgQASIAAAAQgRASgXAEQ31Ds98iIIAAAAIgCAAQ6mhQ6ghcQ6ghcvXgRQvSgRo/BKQo9BJrED4IAAAAQgLAEgMAAQgPAAgPgHg");
	this.shape_1.setTransform(-22.35,-143.45,0.9953,1,0,0,0.2337,-25.1,-142.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintpaper_bg, new cjs.Rectangle(-694.4,-163.6,1371.9,310.1), null);


(lib.btn_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("A40xUMAxpAAAQB+AABZBaQBZBYAAB+IAAZJQAAB+hZBZQhZBZh+AAMgxpAAAQh+AAhZhZQhZhZAAh+IAA5JQAAh+BZhYQBZhaB+AAg");
	this.shape.setTransform(-2.285,-5.5933,0.9544,0.9394);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3366CC","#85BCFF"],[0,1],-41.7,-76.6,41.8,76.6).s().p("A40RVQh+gBhZhYQhZhZAAh+IAA5JQAAh9BZhaQBZhYB+gBMAxpAAAQB+ABBZBYQBZBaAAB9IAAZJQAAB+hZBZQhZBYh+ABg");
	this.shape_1.setTransform(-2.285,-5.5933,0.9544,0.9394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// mid
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("A4kxUMAxJAAAQCEAABeBeQBeBeAACEIAAYpQAACEheBeQheBeiEAAMgxJAAAQiEAAheheQheheAAiEIAA4pQAAiEBeheQBeheCEAAg");
	this.shape_2.setTransform(-2.2947,-5.5468,1.01,1.01);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("A4kRVQiEAAhehfQhehdAAiEIAA4oQAAiFBeheQBeheCEAAMAxJAAAQCEAABeBeQBeBeAACFIAAYoQAACEheBdQheBfiEAAg");
	this.shape_3.setTransform(-2.2947,-5.5468,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// back
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("A4kxUMAxJAAAQCEAABeBeQBeBeAACEIAAYpQAACEheBeQheBeiEAAMgxJAAAQiEAAheheQheheAAiEIAA4pQAAiEBeheQBeheCEAAg");
	this.shape_4.setTransform(-2.3083,-5.5522,1.0422,1.0677);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3366CC","#85BCFF"],[0,1],41.8,76.6,-41.7,-76.6).s().p("A4kRVQiEAAhehfQhehdAAiEIAA4oQAAiFBeheQBeheCEAAMAxJAAAQCEAABeBeQBeBeAACFIAAYoQAACEheBdQheBfiEAAg");
	this.shape_5.setTransform(-2.3083,-5.5522,1.0422,1.0677);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// button_shadow
	this.instance = new lib.button_shadow();
	this.instance.setTransform(-3,-4.5);
	this.instance.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_frame, new cjs.Rectangle(-205.7,-129,405.4,249), null);


(lib.btn_brush = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paintbrush_end();
	this.instance.setTransform(102.55,34.15,0.5203,0.5224,0,34.4735,-148.6294,-0.1,-0.1);

	this.instance_1 = new lib.paint_brush_brush("single",0);
	this.instance_1.setTransform(49.05,119.5,0.5203,0.5224,0,34.4735,-148.6294,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_brush, new cjs.Rectangle(11.9,0,119.6,157.3), null);


(lib.tube_bottle_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_tube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(0,-146.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_tube_yellowlabel
	this.instance_1 = new lib.paint_tube_yellowlabel();
	this.instance_1.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// paint_tube_grayfull
	this.instance_2 = new lib.paint_tube_grayfull();
	this.instance_2.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// paint_tube_cap
	this.instance_3 = new lib.paint_tube_cap();
	this.instance_3.setTransform(-0.05,136.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_bottle_yellow, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.tube_bottle_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_tube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(0,-146.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_tube_redlabel
	this.instance_1 = new lib.paint_tube_redlabel();
	this.instance_1.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// paint_tube_grayfull
	this.instance_2 = new lib.paint_tube_grayfull();
	this.instance_2.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// paint_tube_cap
	this.instance_3 = new lib.paint_tube_cap();
	this.instance_3.setTransform(-0.05,136.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_bottle_red, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.tube_bottle_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_tube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(0,-146.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_tube_bluelabel
	this.instance_1 = new lib.paint_tube_bluelabel();
	this.instance_1.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// paint_tube_grayfull
	this.instance_2 = new lib.paint_tube_grayfull();
	this.instance_2.setTransform(0,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// paint_tube_cap
	this.instance_3 = new lib.paint_tube_cap();
	this.instance_3.setTransform(-0.05,136.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_bottle_blue, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.chat_bbl_short4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white
	this.instance = new lib.chat_bbl_end_white();
	this.instance.setTransform(304.55,-2.5,1,1,0,0,180);

	this.instance_1 = new lib.chat_bbl_textbg_white();
	this.instance_1.setTransform(128.75,-2.5);

	this.instance_2 = new lib.chat_bbl_textbg_white();
	this.instance_2.setTransform(-121.25,-2.5);

	this.instance_3 = new lib.chat_bbl_end_white();
	this.instance_3.setTransform(-308.35,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bg
	this.instance_4 = new lib.chat_bbl_textbg_blue();
	this.instance_4.setTransform(-125.1,2.5);

	this.instance_5 = new lib.chat_bbl_textbg_blue();
	this.instance_5.setTransform(126.9,2.5);

	this.instance_6 = new lib.chat_bbl_end_blue();
	this.instance_6.setTransform(308.4,2.5,1,1,0,0,180);

	this.instance_7 = new lib.chat_bbl_end_blue();
	this.instance_7.setTransform(-308.2,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chat_bbl_short4, new cjs.Rectangle(-338.4,-52.5,674.9,103), null);


(lib.EarBtnSpeaker = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,255,255,0)"],[0,1],-0.8,-1.3,0,-0.8,-1.3,2.9).s().p("AAAAUQgCgQgFgHQgGgIAAgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQADgCADABQACAAACACQALARAEAUg");
	this.shape.setTransform(3.225,-3.38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,255,255,0)"],[0,1],-1.3,-2.6,0,-1.3,-2.6,4.2).s().p("AAGAgQgDgZgNgSIAAgBIgHgIQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgDADgCQACgCACABQABAAABAAQAAAAABAAQAAABABAAQAAAAABABIAHAJQAQAXAEAdg");
	this.shape_1.setTransform(6.95,-4.58);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,255,255,0)"],[0,1],-1.8,-3.5,0,-1.8,-3.5,5.1).s().p("AAMAsQgDgkgSgZIgBAAQgFgJgHgFQgCgCAAgCIAAAAQgBgDACgDQACgCADAAQADAAACACQAHAHAGAJIABAAQAWAcADApg");
	this.shape_2.setTransform(10.595,-5.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,255,255,0)"],[0,1],6,3.2,0,6,3.2,4).s().p("AgUgEQAKgjAfALIAAA8g");
	this.shape_3.setTransform(-4.325,5.2435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,255,255,0)"],[0,1],-2.1,-1.1,0,-2.1,-1.1,6.2).s().p("AgwgJIAlAAQANADAFgIIAqgkIAABAQgkAXgcAHIghAHg");
	this.shape_4.setTransform(-7.1,-2.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#66CCFF","#3398FE"],[0,1],-0.2,-3.8,0.9,2.9).s().p("AAHAsQgFgFgGAAIgsAAIAAhOIAsAAQAFAAAGgFIAqgmIAAClg");
	this.shape_5.setTransform(-7.125,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399FF").s().p("AA5BzIg9g6Ig0AAQgKAAAAgJIAAhfQAAgKAKAAIA0AAIA+g5QAJgEAAAHIAADeQAAAGgFAAIgFgCg");
	this.shape_6.setTransform(-7.175,0.4611);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3398FE").s().p("AACBtQgCgDAAgFQAAgEADgDIAFgEIAJgLIAAAAQAZghAAguQAAgugZghIAAAAQgGgIgGgGQgEgDAAgEQgBgEADgEQADgDAEAAQAEgBAEADQAIAHAIALIAAgBQAdAmAAA2QAAA2gdAmIAAgBIgMAOIAAAAIgFAFQgEADgEAAQgEgBgDgDgAgcBVQgDgDAAgEQAAgEADgDIAJgKQATgaAAgjQAAglgTgZIgIgJQgDgEABgEQAAgEAEgDQADgDAEAAQAEABADADIAIAKIAAAAQAXAfAAAsQAAAqgXAgQgFAHgGAFQgDADgEAAQgEAAgDgEgAg5BAQgEgDgBgEQAAgEACgEIAAAAIABgCQAPgUAAgcQAAgcgOgUQgDgDABgEQAAgFAEgCQADgDAFABQAEAAACAEQATAZAAAjQAAAjgTAZIgBACQgCAEgEAAIgCAAQgDAAgDgBg");
	this.shape_7.setTransform(7.37,0.4964);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// highlight
	this.instance = new lib.buttonhl("synched",0);
	this.instance.setTransform(-13.55,-12.8,0.822,0.8233);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#A0D0FF"],[0.655,1],0,0,0,0,0,17.2).s().p("Ah2B2QgfgfgLgnQgGgYAAgYQAAgjAMgeQANgcAXgYQAxgxBFAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhFAAgxgxg");
	this.shape_8.setTransform(-0.075,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.EarBtnSpeaker, new cjs.Rectangle(-16.8,-16.1,33.5,33.5), null);


(lib.mark_head_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mark_nose
	this.instance = new lib.mark_nose();
	this.instance.setTransform(22.05,35.05,0.88,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_mouth_front34
	this.instance_1 = new lib.mark_mouth_front34("single",2);
	this.instance_1.setTransform(19.05,57.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_hair_front34
	this.instance_2 = new lib.mark_hair_front34();
	this.instance_2.setTransform(-1.05,-39.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_eyebrow
	this.instance_3 = new lib.mark_eyebrow();
	this.instance_3.setTransform(47.5,-14.9,0.7997,0.9986,5.5038,0,0,0.1,-0.2);

	this.instance_4 = new lib.mark_eyebrow();
	this.instance_4.setTransform(-8.2,-14.95,0.9997,0.9997,0,-5.5069,174.4931,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},4).to({state:[]},1).wait(10));

	// mark_eye_front34
	this.instance_5 = new lib.mark_eye_front34("single",0);
	this.instance_5.setTransform(48.75,11.2,1,1,0,0,0,0,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_eye_frontL
	this.instance_6 = new lib.mark_eye_frontL("single",0);
	this.instance_6.setTransform(-8.55,11.5,1,1,0,0,0,0,-0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_sideburn
	this.instance_7 = new lib.mark_sideburn();
	this.instance_7.setTransform(-50.65,1.9,1,1,0,0,180,0.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_ear
	this.instance_8 = new lib.mark_ear();
	this.instance_8.setTransform(-61,18.1,1,1,0,0,180);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	// mark_facefull_front34
	this.instance_9 = new lib.mark_facefull_front34();
	this.instance_9.setTransform(0,7.55);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({_off:true},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-84,166.3,175.7);


(lib.carla_head_front34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// carla_nose
	this.instance = new lib.carla_nose();
	this.instance.setTransform(27.2,31.55,0.905,1,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_mouth_front34
	this.instance_1 = new lib.carla_mouth_front34("single",1);
	this.instance_1.setTransform(24.15,54.9,0.9593,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_eyebrow
	this.instance_2 = new lib.carla_eyebrow();
	this.instance_2.setTransform(-2.9,-15.25,1,1,0,0,180);

	this.instance_3 = new lib.carla_eyebrow();
	this.instance_3.setTransform(51.3,-15.05,0.7864,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[]},1).wait(12));

	// carla_eye34
	this.instance_4 = new lib.carla_eye_front34("single",0);
	this.instance_4.setTransform(51,12.15,1,1,0,0,0,0.5,-0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_eye
	this.instance_5 = new lib.carla_eye_frontL("single",0);
	this.instance_5.setTransform(-2.9,12.15,1,1,0,0,0,0,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_hair_ponytail
	this.instance_6 = new lib.carla_hair_ponytail();
	this.instance_6.setTransform(-77.9,-20.5,1,1,0,0,0,-0.2,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_hair_front34
	this.instance_7 = new lib.carla_hair_front34();
	this.instance_7.setTransform(26.2,-44.1,1,1,0,0,0,0,1.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_sideburn
	this.instance_8 = new lib.carla_sideburn();
	this.instance_8.setTransform(-39.85,-10.75,1,1,-10.4478);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_ear
	this.instance_9 = new lib.carla_ear();
	this.instance_9.setTransform(-56.45,12.15,1,1,0,0,180,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_facefull_front34
	this.instance_10 = new lib.carla_facefull_front34();
	this.instance_10.setTransform(2.65,4.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	// carla_hair_ponytail
	this.instance_11 = new lib.carla_hair_ponytail();
	this.instance_11.setTransform(77.95,-20.7,1,1,0,0,180,-0.2,-0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.1,-76,234.3,162.5);


(lib.sm_unicorn_painting = function(mode,startPosition,loop,reversed) {
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
	this.uni_mouth_stroke.setTransform(93.75,-98.55,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_mouth_stroke).wait(1));

	// unicorn_mouth_fill
	this.instance = new lib.uni_mouth2_fill();
	this.instance.setTransform(92.3,-82,0.8563,0.8563,-1.7583,0,0,0.1,-0.1);

	this.uni_mouth_fill = new lib.uni_mouth1_fill();
	this.uni_mouth_fill.name = "uni_mouth_fill";
	this.uni_mouth_fill.setTransform(55.55,-95.45,0.8563,0.8563,-1.7583,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_mouth_fill},{t:this.instance}]}).wait(1));

	// uni_ear_stroke
	this.uni_ear_stroke = new lib.uni_ear_stroke();
	this.uni_ear_stroke.name = "uni_ear_stroke";
	this.uni_ear_stroke.setTransform(2.9,-275,0.8564,0.8564,0,13.9838,-166.0162,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_stroke).wait(1));

	// uni_ear_fill
	this.uni_ear_fill = new lib.uni_ear_fill();
	this.uni_ear_fill.name = "uni_ear_fill";
	this.uni_ear_fill.setTransform(3.55,-274.3,0.8564,0.8564,0,13.9838,-166.0162);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_fill).wait(1));

	// uni_hair_stroke
	this.uni_hair_stroke = new lib.uni_hair_stroke();
	this.uni_hair_stroke.name = "uni_hair_stroke";
	this.uni_hair_stroke.setTransform(52.25,-200.3,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_hair_stroke).wait(1));

	// unicorn_head_fill
	this.uni_horn_fill = new lib.uni_horn_fill();
	this.uni_horn_fill.name = "uni_horn_fill";
	this.uni_horn_fill.setTransform(135.8,-283.05,0.8563,0.8563,-1.7583,0,0,0.2,-0.2);

	this.uni_hair_fill = new lib.uni_hair_fill();
	this.uni_hair_fill.name = "uni_hair_fill";
	this.uni_hair_fill.setTransform(51.75,-199.8,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_hair_fill},{t:this.uni_horn_fill}]}).wait(1));

	// no_fill_eyes
	this.instance_1 = new lib.dog_eyeshine_fill();
	this.instance_1.setTransform(141.9,-194.65,0.781,0.8552,-2.8369,0,0,0.2,-0.1);

	this.instance_2 = new lib.dog_eyeshine_fill();
	this.instance_2.setTransform(56.85,-190.7,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.uni_eye2_stroke = new lib.dog_eye_stroke();
	this.uni_eye2_stroke.name = "uni_eye2_stroke";
	this.uni_eye2_stroke.setTransform(141.95,-203.55,0.7813,0.8557,0,-2.9246,177.0759,-0.2,-0.2);

	this.uni_eye1_stroke = new lib.dog_eye_stroke();
	this.uni_eye1_stroke.name = "uni_eye1_stroke";
	this.uni_eye1_stroke.setTransform(57.15,-199.65,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_eye1_stroke},{t:this.uni_eye2_stroke},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// unicorn_body_stroke
	this.uni_body_stroke = new lib.uni_body_stroke();
	this.uni_body_stroke.name = "uni_body_stroke";
	this.uni_body_stroke.setTransform(5.1,-70.7,0.8564,0.8564,11.8938,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_stroke).wait(1));

	// unicorn_body_fill
	this.uni_body_fill = new lib.uni_body_fill();
	this.uni_body_fill.name = "uni_body_fill";
	this.uni_body_fill.setTransform(4.9,-71.55,0.8564,0.8564,11.8938,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_fill).wait(1));

	// legs_tail_stroke
	this.uni_tail_stroke = new lib.uni_tail_stroke();
	this.uni_tail_stroke.name = "uni_tail_stroke";
	this.uni_tail_stroke.setTransform(-194.5,-18.5,0.8563,0.8563,44.369,0,0,0,0.4);

	this.uni_leg1_stroke = new lib.uni_leg1_stroke();
	this.uni_leg1_stroke.name = "uni_leg1_stroke";
	this.uni_leg1_stroke.setTransform(69.2,49.75,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_stroke = new lib.uni_leg2_stroke();
	this.uni_leg2_stroke.name = "uni_leg2_stroke";
	this.uni_leg2_stroke.setTransform(-91.7,66.15,0.8563,0.8955,0,15.975,19.6373,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_stroke},{t:this.uni_leg1_stroke},{t:this.uni_tail_stroke}]}).wait(1));

	// legs_tail_fill
	this.uni_tail_fill = new lib.uni_tail_fill();
	this.uni_tail_fill.name = "uni_tail_fill";
	this.uni_tail_fill.setTransform(-161.8,-27.6,0.8563,0.8563,44.369,0,0,0,0.1);

	this.uni_tailend_fill = new lib.uni_tailend_fill();
	this.uni_tailend_fill.name = "uni_tailend_fill";
	this.uni_tailend_fill.setTransform(-227.5,2.65,0.8563,0.8563,44.369,0,0,0.1,0.1);

	this.uni_leg1_fill = new lib.uni_leg1_fill();
	this.uni_leg1_fill.name = "uni_leg1_fill";
	this.uni_leg1_fill.setTransform(69.2,48.8,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_fill = new lib.uni_leg2_fill();
	this.uni_leg2_fill.name = "uni_leg2_fill";
	this.uni_leg2_fill.setTransform(-92.65,65.95,0.8563,0.8955,0,15.975,19.6373,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_fill},{t:this.uni_leg1_fill},{t:this.uni_tailend_fill},{t:this.uni_tail_fill}]}).wait(1));

	// uni_bubble_stroke
	this.uni_bubble_stroke = new lib.uni_bubble_stroke();
	this.uni_bubble_stroke.name = "uni_bubble_stroke";
	this.uni_bubble_stroke.setTransform(10.75,-0.05,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bubble_stroke).wait(1));

	// uni_bubbles_fill
	this.uni_bubblessm2_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm2_fill.name = "uni_bubblessm2_fill";
	this.uni_bubblessm2_fill.setTransform(550.85,98.45,0.6813,0.654);

	this.uni_bubblessm5_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm5_fill.name = "uni_bubblessm5_fill";
	this.uni_bubblessm5_fill.setTransform(369.45,-325.8,0.6782,0.6782,0,0,0,0.5,-0.3);

	this.uni_bubblessm6_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm6_fill.name = "uni_bubblessm6_fill";
	this.uni_bubblessm6_fill.setTransform(391.8,-241.25,0.4727,0.4454);

	this.uni_bubblessm4_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm4_fill.name = "uni_bubblessm4_fill";
	this.uni_bubblessm4_fill.setTransform(-238.35,-340.2,0.4286,0.4286,0,0,0,-0.2,-0.1);

	this.uni_bubblessm1_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm1_fill.name = "uni_bubblessm1_fill";
	this.uni_bubblessm1_fill.setTransform(-321.4,109.65,0.5264,0.5264,0,0,0,-0.1,0);

	this.uni_bubblessm3_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm3_fill.name = "uni_bubblessm3_fill";
	this.uni_bubblessm3_fill.setTransform(-508.35,-207.8,0.8602,0.8405);

	this.uni_bubbleslg4_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg4_fill.name = "uni_bubbleslg4_fill";
	this.uni_bubbleslg4_fill.setTransform(450.25,-259,0.5043,0.5043);

	this.uni_bubbleslg3_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg3_fill.name = "uni_bubbleslg3_fill";
	this.uni_bubbleslg3_fill.setTransform(-474,-288.05,0.7086,0.6316,0,0,4.1096);

	this.uni_bubbleslg2_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg2_fill.name = "uni_bubbleslg2_fill";
	this.uni_bubbleslg2_fill.setTransform(488.1,172.75,0.8128,0.7745);

	this.uni_bubbleslg1_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg1_fill.name = "uni_bubbleslg1_fill";
	this.uni_bubbleslg1_fill.setTransform(-408.65,223.6,0.8685,0.8278,0,0,0.9161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_bubbleslg1_fill},{t:this.uni_bubbleslg2_fill},{t:this.uni_bubbleslg3_fill},{t:this.uni_bubbleslg4_fill},{t:this.uni_bubblessm3_fill},{t:this.uni_bubblessm1_fill},{t:this.uni_bubblessm4_fill},{t:this.uni_bubblessm6_fill},{t:this.uni_bubblessm5_fill},{t:this.uni_bubblessm2_fill}]}).wait(1));

	// uni_bg_cloud1_stroke
	this.uni_bg_cloud1_stroke = new lib.bg_cloud1_stroke();
	this.uni_bg_cloud1_stroke.name = "uni_bg_cloud1_stroke";
	this.uni_bg_cloud1_stroke.setTransform(-4.3,87,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_stroke).wait(1));

	// uni_bg_cloud1_fill
	this.uni_bg_cloud1_fill = new lib.bg_cloud1_fill();
	this.uni_bg_cloud1_fill.name = "uni_bg_cloud1_fill";
	this.uni_bg_cloud1_fill.setTransform(17.15,179.6,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_fill).wait(1));

	// uni_rainbow_stroke
	this.uni_rainbow_stroke = new lib.uni_rainbow_stroke();
	this.uni_rainbow_stroke.name = "uni_rainbow_stroke";
	this.uni_rainbow_stroke.setTransform(7.15,-22.35,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_rainbow_stroke).wait(1));

	// uni_rainbow_fill
	this.uni_rainbow3_fill = new lib.uni_rainbow3_fill();
	this.uni_rainbow3_fill.name = "uni_rainbow3_fill";
	this.uni_rainbow3_fill.setTransform(34.45,23.25,0.8405,0.8405);

	this.uni_rainbow5_fill = new lib.uni_rainbow5_fill();
	this.uni_rainbow5_fill.name = "uni_rainbow5_fill";
	this.uni_rainbow5_fill.setTransform(17.7,-48.55);

	this.uni_rainbow2_fill = new lib.uni_rainbow2_fill();
	this.uni_rainbow2_fill.name = "uni_rainbow2_fill";
	this.uni_rainbow2_fill.setTransform(21.25,-3.15,0.8405,0.8405);

	this.uni_rainbow1_fill = new lib.uni_rainbow1_fill();
	this.uni_rainbow1_fill.name = "uni_rainbow1_fill";
	this.uni_rainbow1_fill.setTransform(12.7,-22.2,0.8405,0.8405);

	this.uni_rainbow4_fill = new lib.uni_rainbow4_fill();
	this.uni_rainbow4_fill.name = "uni_rainbow4_fill";
	this.uni_rainbow4_fill.setTransform(32.5,52.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_rainbow4_fill},{t:this.uni_rainbow1_fill},{t:this.uni_rainbow2_fill},{t:this.uni_rainbow5_fill},{t:this.uni_rainbow3_fill}]}).wait(1));

	// uni_bg_small
	this.uni_bg_small_fill = new lib.uni_bg_small();
	this.uni_bg_small_fill.name = "uni_bg_small_fill";
	this.uni_bg_small_fill.setTransform(33.2,72.9);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_small_fill).wait(1));

	// bg_sky
	this.uni_bg_fill = new lib.bg_fill();
	this.uni_bg_fill.name = "uni_bg_fill";
	this.uni_bg_fill.setTransform(0,0,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sm_unicorn_painting, new cjs.Rectangle(-740.9,-548.9,1481.9,1097.9), null);


(lib.btn_cvuni = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.4)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.4)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhzRBRtMAAAijZMDmjAAAMAAACjZg");
	mask.setTransform(-0.2061,-0.0732);

	// sm_unicorn_painting
	this.instance = new lib.sm_unicorn_painting();
	this.instance.setTransform(-36.3,168.55,1.8405,1.8405,0,0,0,0,-0.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn_canvas_shdw
	this.instance_2 = new lib.btn_canvas_shdw();
	this.instance_2.setTransform(33.15,59.2);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cvuni, new cjs.Rectangle(-767.5,-553.2,1553.2,1150.5), null);


(lib.art_piece_canvas_shape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.647)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.647)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh1kBPWMAAAijaMDmdAAAIEsEsMAAACjaMjmdAAAIABADg");
	mask.setTransform(-15,-15.125);

	// shape_painting_mc
	this.instance = new lib.shape_painting_mc();
	this.instance.setTransform(1.85,92.75,1.2336,1.2336);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// art_piece_canvas_outline
	this.hl = new lib.art_piece_canvas_outline();
	this.hl.name = "hl";
	this.hl.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_shape, new cjs.Rectangle(-800,-585.7,1570,1141.2), null);


(lib.art_piece_canvas_food = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.647)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.647)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh1kBPWMAAAijaMDmdAAAIEsEsMAAACjaMjmdAAAIABADg");
	mask.setTransform(-15,-15.125);

	// food_painting_mc
	this.instance = new lib.food_painting_mc();
	this.instance.setTransform(-4.15,80,1.2322,1.2322,0,0,0,0,-0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// art_piece_canvas_outline
	this.hl = new lib.art_piece_canvas_outline();
	this.hl.name = "hl";
	this.hl.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_food, new cjs.Rectangle(-800,-585.7,1570,1141.2), null);


(lib.art_piece_canvas_dino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.647)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.647)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh1kBPWMAAAijaMDmdAAAIEsEsMAAACjaMjmdAAAIABADg");
	mask.setTransform(-15,-15.125);

	// dino_painting_mc
	this.instance = new lib.dino_painting_mc();
	this.instance.setTransform(-44.8,88.05,1.499,1.499);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// art_piece_canvas_outline
	this.hl = new lib.art_piece_canvas_outline();
	this.hl.name = "hl";
	this.hl.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_dino, new cjs.Rectangle(-800,-585.7,1570,1141.2), null);


(lib.unicorn_painting_mc = function(mode,startPosition,loop,reversed) {
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
	this.uni_mouth_stroke.setTransform(93.75,-98.55,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_mouth_stroke).wait(1));

	// unicorn_mouth_fill
	this.instance = new lib.uni_mouth2_fill();
	this.instance.setTransform(92.3,-82,0.8563,0.8563,-1.7583,0,0,0.1,-0.1);

	this.uni_mouth_fill = new lib.uni_mouth1_fill();
	this.uni_mouth_fill.name = "uni_mouth_fill";
	this.uni_mouth_fill.setTransform(55.55,-95.45,0.8563,0.8563,-1.7583,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_mouth_fill},{t:this.instance}]}).wait(1));

	// uni_ear_stroke
	this.uni_ear_stroke = new lib.uni_ear_stroke();
	this.uni_ear_stroke.name = "uni_ear_stroke";
	this.uni_ear_stroke.setTransform(2.9,-275,0.8564,0.8564,0,13.9838,-166.0162,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_stroke).wait(1));

	// uni_ear_fill
	this.uni_ear_fill = new lib.uni_ear_fill();
	this.uni_ear_fill.name = "uni_ear_fill";
	this.uni_ear_fill.setTransform(3.55,-274.3,0.8564,0.8564,0,13.9838,-166.0162);

	this.timeline.addTween(cjs.Tween.get(this.uni_ear_fill).wait(1));

	// uni_hair_stroke
	this.uni_hair_stroke = new lib.uni_hair_stroke();
	this.uni_hair_stroke.name = "uni_hair_stroke";
	this.uni_hair_stroke.setTransform(52.25,-200.3,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_hair_stroke).wait(1));

	// unicorn_head_fill
	this.uni_horn_fill = new lib.uni_horn_fill();
	this.uni_horn_fill.name = "uni_horn_fill";
	this.uni_horn_fill.setTransform(135.8,-283.05,0.8563,0.8563,-1.7583,0,0,0.2,-0.2);

	this.uni_hair_fill = new lib.uni_hair_fill();
	this.uni_hair_fill.name = "uni_hair_fill";
	this.uni_hair_fill.setTransform(51.75,-199.8,0.8563,0.8563,-1.7583,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_hair_fill},{t:this.uni_horn_fill}]}).wait(1));

	// no_fill_eyes
	this.instance_1 = new lib.dog_eyeshine_fill();
	this.instance_1.setTransform(141.9,-194.65,0.781,0.8552,-2.8369,0,0,0.2,-0.1);

	this.instance_2 = new lib.dog_eyeshine_fill();
	this.instance_2.setTransform(56.85,-190.7,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.uni_eye2_stroke = new lib.dog_eye_stroke();
	this.uni_eye2_stroke.name = "uni_eye2_stroke";
	this.uni_eye2_stroke.setTransform(141.95,-203.55,0.7813,0.8557,0,-2.9246,177.0759,-0.2,-0.2);

	this.uni_eye1_stroke = new lib.dog_eye_stroke();
	this.uni_eye1_stroke.name = "uni_eye1_stroke";
	this.uni_eye1_stroke.setTransform(57.15,-199.65,0.9403,0.9066,-3.1,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_eye1_stroke},{t:this.uni_eye2_stroke},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// unicorn_body_stroke
	this.uni_body_stroke = new lib.uni_body_stroke();
	this.uni_body_stroke.name = "uni_body_stroke";
	this.uni_body_stroke.setTransform(5.1,-70.7,0.8564,0.8564,11.8938,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_stroke).wait(1));

	// unicorn_body_fill
	this.uni_body_fill = new lib.uni_body_fill();
	this.uni_body_fill.name = "uni_body_fill";
	this.uni_body_fill.setTransform(4.9,-71.55,0.8564,0.8564,11.8938,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.uni_body_fill).wait(1));

	// legs_tail_stroke
	this.uni_tail_stroke = new lib.uni_tail_stroke();
	this.uni_tail_stroke.name = "uni_tail_stroke";
	this.uni_tail_stroke.setTransform(-194.5,-18.5,0.8563,0.8563,44.369,0,0,0,0.4);

	this.uni_leg1_stroke = new lib.uni_leg1_stroke();
	this.uni_leg1_stroke.name = "uni_leg1_stroke";
	this.uni_leg1_stroke.setTransform(69.2,49.75,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_stroke = new lib.uni_leg2_stroke();
	this.uni_leg2_stroke.name = "uni_leg2_stroke";
	this.uni_leg2_stroke.setTransform(-91.7,66.15,0.8563,0.8955,0,15.975,19.6373,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_stroke},{t:this.uni_leg1_stroke},{t:this.uni_tail_stroke}]}).wait(1));

	// legs_tail_fill
	this.uni_tail_fill = new lib.uni_tail_fill();
	this.uni_tail_fill.name = "uni_tail_fill";
	this.uni_tail_fill.setTransform(-161.8,-27.6,0.8563,0.8563,44.369,0,0,0,0.1);

	this.uni_tailend_fill = new lib.uni_tailend_fill();
	this.uni_tailend_fill.name = "uni_tailend_fill";
	this.uni_tailend_fill.setTransform(-227.5,2.65,0.8563,0.8563,44.369,0,0,0.1,0.1);

	this.uni_leg1_fill = new lib.uni_leg1_fill();
	this.uni_leg1_fill.name = "uni_leg1_fill";
	this.uni_leg1_fill.setTransform(69.2,48.8,0.8564,0.8564,3.1583,0,0,0.2,0.1);

	this.uni_leg2_fill = new lib.uni_leg2_fill();
	this.uni_leg2_fill.name = "uni_leg2_fill";
	this.uni_leg2_fill.setTransform(-92.65,65.95,0.8563,0.8955,0,15.975,19.6373,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_leg2_fill},{t:this.uni_leg1_fill},{t:this.uni_tailend_fill},{t:this.uni_tail_fill}]}).wait(1));

	// uni_bubble_stroke
	this.uni_bubble_stroke = new lib.uni_bubble_stroke();
	this.uni_bubble_stroke.name = "uni_bubble_stroke";
	this.uni_bubble_stroke.setTransform(10.75,-0.05,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bubble_stroke).wait(1));

	// uni_bubbles_fill
	this.uni_bubblessm2_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm2_fill.name = "uni_bubblessm2_fill";
	this.uni_bubblessm2_fill.setTransform(552.2,97.9,0.6813,0.6813,0,0,0,0.5,-0.1);

	this.uni_bubblessm5_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm5_fill.name = "uni_bubblessm5_fill";
	this.uni_bubblessm5_fill.setTransform(369.45,-325.8,0.6782,0.6782,0,0,0,0.5,-0.3);

	this.uni_bubblessm6_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm6_fill.name = "uni_bubblessm6_fill";
	this.uni_bubblessm6_fill.setTransform(392.05,-240.85,0.4454,0.4454,0,0,0,0.5,-0.2);

	this.uni_bubblessm4_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm4_fill.name = "uni_bubblessm4_fill";
	this.uni_bubblessm4_fill.setTransform(-238.35,-341.7,0.4286,0.4286,0,0,0,-0.2,-0.1);

	this.uni_bubblessm1_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm1_fill.name = "uni_bubblessm1_fill";
	this.uni_bubblessm1_fill.setTransform(-322.4,103.65,0.5264,0.5264,0,0,0,-0.1,0);

	this.uni_bubblessm3_fill = new lib.uni_bubblesm_fill();
	this.uni_bubblessm3_fill.name = "uni_bubblessm3_fill";
	this.uni_bubblessm3_fill.setTransform(-510,-207.8,0.8405,0.8405,0,0,0,-0.1,0);

	this.uni_bubbleslg4_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg4_fill.name = "uni_bubbleslg4_fill";
	this.uni_bubbleslg4_fill.setTransform(450.35,-260.25,0.4704,0.4704,0,0,0,0,-0.2);

	this.uni_bubbleslg3_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg3_fill.name = "uni_bubbleslg3_fill";
	this.uni_bubbleslg3_fill.setTransform(-472.95,-287.95,0.6726,0.6726);

	this.uni_bubbleslg2_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg2_fill.name = "uni_bubbleslg2_fill";
	this.uni_bubbleslg2_fill.setTransform(490.75,169.75,0.7745,0.7745);

	this.uni_bubbleslg1_fill = new lib.uni_bubbleslg_fill();
	this.uni_bubbleslg1_fill.name = "uni_bubbleslg1_fill";
	this.uni_bubbleslg1_fill.setTransform(-409.8,223.5,0.8405,0.8405,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_bubbleslg1_fill},{t:this.uni_bubbleslg2_fill},{t:this.uni_bubbleslg3_fill},{t:this.uni_bubbleslg4_fill},{t:this.uni_bubblessm3_fill},{t:this.uni_bubblessm1_fill},{t:this.uni_bubblessm4_fill},{t:this.uni_bubblessm6_fill},{t:this.uni_bubblessm5_fill},{t:this.uni_bubblessm2_fill}]}).wait(1));

	// uni_bg_cloud1_stroke
	this.uni_bg_cloud1_stroke = new lib.bg_cloud1_stroke();
	this.uni_bg_cloud1_stroke.name = "uni_bg_cloud1_stroke";
	this.uni_bg_cloud1_stroke.setTransform(-4.3,87,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_stroke).wait(1));

	// uni_bg_cloud1_fill
	this.uni_bg_cloud1_fill = new lib.bg_cloud1_fill();
	this.uni_bg_cloud1_fill.name = "uni_bg_cloud1_fill";
	this.uni_bg_cloud1_fill.setTransform(17.15,179.6,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_cloud1_fill).wait(1));

	// uni_rainbow_stroke
	this.uni_rainbow_stroke = new lib.uni_rainbow_stroke();
	this.uni_rainbow_stroke.name = "uni_rainbow_stroke";
	this.uni_rainbow_stroke.setTransform(7.15,-22.35,0.8405,0.8405);

	this.timeline.addTween(cjs.Tween.get(this.uni_rainbow_stroke).wait(1));

	// uni_rainbow_fill
	this.uni_rainbow3_fill = new lib.uni_rainbow3_fill();
	this.uni_rainbow3_fill.name = "uni_rainbow3_fill";
	this.uni_rainbow3_fill.setTransform(34.45,23.25,0.8405,0.8405);

	this.uni_rainbow5_fill = new lib.uni_rainbow5_fill();
	this.uni_rainbow5_fill.name = "uni_rainbow5_fill";
	this.uni_rainbow5_fill.setTransform(17.7,-48.55);

	this.uni_rainbow2_fill = new lib.uni_rainbow2_fill();
	this.uni_rainbow2_fill.name = "uni_rainbow2_fill";
	this.uni_rainbow2_fill.setTransform(21.25,-3.15,0.8405,0.8405);

	this.uni_rainbow1_fill = new lib.uni_rainbow1_fill();
	this.uni_rainbow1_fill.name = "uni_rainbow1_fill";
	this.uni_rainbow1_fill.setTransform(12.7,-22.2,0.8405,0.8405);

	this.uni_rainbow4_fill = new lib.uni_rainbow4_fill();
	this.uni_rainbow4_fill.name = "uni_rainbow4_fill";
	this.uni_rainbow4_fill.setTransform(32.5,52.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uni_rainbow4_fill},{t:this.uni_rainbow1_fill},{t:this.uni_rainbow2_fill},{t:this.uni_rainbow5_fill},{t:this.uni_rainbow3_fill}]}).wait(1));

	// uni_bg_small
	this.uni_bg_small_fill = new lib.uni_bg_small();
	this.uni_bg_small_fill.name = "uni_bg_small_fill";
	this.uni_bg_small_fill.setTransform(33.2,72.9);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_small_fill).wait(1));

	// bg_sky
	this.uni_bg_fill = new lib.bg_fill();
	this.uni_bg_fill.name = "uni_bg_fill";
	this.uni_bg_fill.setTransform(0,0,1.0502,1.4581);

	this.timeline.addTween(cjs.Tween.get(this.uni_bg_fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.unicorn_painting_mc, new cjs.Rectangle(-740.9,-548.9,1481.9,1097.9), null);


(lib.paint_jars2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_jar
	this.instance = new lib.paint_jar("single",2);
	this.instance.setTransform(-15.65,5.1,0.5743,0.5743,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_jar
	this.instance_1 = new lib.paint_jar("single",1);
	this.instance_1.setTransform(-73.35,-12.15,0.5743,0.5743,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// paint_jar
	this.instance_2 = new lib.paint_jar("single",0);
	this.instance_2.setTransform(73.5,-15.15,0.5743,0.5743,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_jars2, new cjs.Rectangle(-108.5,-52.5,217.1,105), null);


(lib.paint_jars1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_jar
	this.instance = new lib.paint_jar("single",1);
	this.instance.setTransform(-3.1,1.6,0.5743,0.5743,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_jar
	this.instance_1 = new lib.paint_jar("single",2);
	this.instance_1.setTransform(52.6,-7.65,0.5743,0.5743,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// paint_jar
	this.instance_2 = new lib.paint_jar("single",0);
	this.instance_2.setTransform(-52.35,-11.65,0.5743,0.5743,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_jars1, new cjs.Rectangle(-87.5,-49,175.2,98), null);


(lib.easel_paint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// easel_leg_front
	this.instance = new lib.easel_leg_front();
	this.instance.setTransform(7.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// easel_paper_roll
	this.instance_1 = new lib.easel_paper_roll();
	this.instance_1.setTransform(0.5,-663.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// easel_leg_back
	this.instance_2 = new lib.easel_leg_back();
	this.instance_2.setTransform(-17.35,-23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easel_paint, new cjs.Rectangle(-538.6,-724.2,1077.3000000000002,1454.9), null);


(lib.btn_paint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_paint
	this.instance = new lib.txt_paint("single",0);
	this.instance.setTransform(-2,107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// txt_paint_shadow
	this.instance_1 = new lib.txt_paint("single",0);
	this.instance_1.setTransform(1,110.8);
	this.instance_1.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(9));

	// btn_brush
	this.instance_2 = new lib.btn_brush();
	this.instance_2.setTransform(51.1,-53.3,1.105,1.105,0,0,0,65.8,84.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AgVNGQiFgIh2g/Qh2g/hPhrQhPhsAhieQg+BAgOBHQg+ikBmhhQAiggAngTQAYgLAagHIATgEIgBABQAwgIA4AJQBYAQBHgwIgOgRIABgBIASggQAthNA0hIIAOgUIABABQA6hlBOhxQChjsCRiTQCRiUAsAbQAjAWgwB/IABgDQgLAegQAkIgVAtQhOCgiDDCIgDAEIgCADIgDAEIgCADIgDAEIgCAEQhOBwhJBcIACAAIgMAQIgDAEQgeAtggAsQgPAYgYAgQgWAagHAEIgBACIgWgGQg2BtAoBWQArBhBRACQBPACgPiAQBBBHANBIQAKA8gaA9Qg5CIjSghQBdBWB4g5QhBBRh1AAIgVgBg");
	this.shape.setTransform(53.7482,-44.296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).to({state:[]},1).wait(9));

	// paint_drops
	this.instance_3 = new lib.color_purple();
	this.instance_3.setTransform(24.45,27.5,0.3663,0.3663,0,0,0,0,0.4);

	this.instance_4 = new lib.color_orange();
	this.instance_4.setTransform(81.7,27.45,0.3663,0.3663,0,0,0,0.1,0.4);

	this.instance_5 = new lib.color_green();
	this.instance_5.setTransform(140.1,27.4,0.3663,0.3663,0,0,0,0.2,0.2);

	this.instance_6 = new lib.color_red();
	this.instance_6.setTransform(-142.65,27.8,0.3663,0.3663,0,0,0,0,0.6);

	this.instance_7 = new lib.color_blue();
	this.instance_7.setTransform(-86.05,27.5,0.3663,0.3663,0,0,0,-0.1,0.4);

	this.instance_8 = new lib.color_yellow();
	this.instance_8.setTransform(-31.25,27.5,0.3663,0.3663,0,0,0,0,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("ACKD9QiPghgMiMQgHhVAjhOIAHgTQA6iACFgbIAngHQCGgEBLByIAEAHIAAgCQARAbAMAcQAtBcgPBmQgRBwhxAhQhHAUhHAAQg3AAg3gMgAVfEAQgYgEgagGIAAAAQhZgYgwg3IgBgCQgjgqgMg9QgQhTAkhLQAKgbARgaQBKh0CiAHQCCAFBBBQQASAXANAcIAEAKIADAHQAZA1gBA0QAABDgqBCQgQAZgZAYQhMBNhqAAQgTAAgVgDgA35D1QgigIgggWQhvhOAkiCQAJgfAMggQASg0AagxQAvhaBpgJQB/gHBWBgIAIAKQAhApARAwQAUAsAEAxQAMCKiHA9QhLAhhOAAQgvAAgwgMgAnBDkQg1gkgbhbQgchbAqhvIADgIIADgIQAphwBxgUQBygVBRBHQA1AvAUA2QARAjACAmQAFBXgtBXQgtBXh5AOQgiAEgdAAQhKAAgmgagAwqCfQhPhrAih6QAEgSAJgRQAIgWAPgTQBNhhB7gKQCJgLBYBmIANAQQAQAZALAeQAOAfAHAkQAdCLhcBAQhcA/hfAJQgXADgVAAQhxAAhGhfgAMgD9Qj3gHAFjyQACiYBag9QA1gmBUgFQCNgIBGA1QArAeATAzQAyCIggB9QgdB3jfAAIgagBg");
	this.shape_1.setTransform(0.1862,29.5557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(9));

	// paintpaper_bg
	this.instance_9 = new lib.paintpaper_bg();
	this.instance_9.setTransform(-0.05,31.95,0.2771,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(9));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2wV9QhSAAhAgqQgWgPgVgUIgRgSQg9hHAAhfIAAhAIj/ilIkC8PMAj1gIAMAiEAJAIh3bUIllC6IAAAmQAABshOBMQhPBNhuAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4.175,y:-77.75}).wait(1).to({graphics:null,x:0,y:0}).wait(9));

	// btn_cv_fish
	this.instance_10 = new lib.btn_cvfish();
	this.instance_10.setTransform(-182.05,5.5,0.1594,0.1473,0,-10.3717,-9.8933,-751.8,486.6);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(9));

	// btn_cv_uni
	this.instance_11 = new lib.btn_cvuni();
	this.instance_11.setTransform(-22.6,-97.1,0.1477,0.1427,0,-3.6425,-2.8544,-3.5,-3.7);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(9));

	// btn_cv_dino
	this.instance_12 = new lib.btn_cvdino();
	this.instance_12.setTransform(29.45,-93.5,0.1523,0.1471,6.247,0,0,4.3,0.2);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(9));

	// btn_cv_food
	this.instance_13 = new lib.btn_cvfood();
	this.instance_13.setTransform(79.4,-83.5,0.1522,0.1471,0,8.178,7.6038,-1.6,0.9);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(9));

	// bg_white
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("A5CxUMAyFAAAQB4AABVBVQBVBVAAB4IAAZlQAAB4hVBVQhVBVh4AAMgyFAAAQh4AAhVhVQhVhVAAh4IAA5lQAAh4BVhVQBVhVB4AAg");
	this.shape_2.setTransform(-2.3181,-36.9546,0.9206,0.8994);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D4F0FF","#FFFFFF"],[0.039,1],0.4,87.1,0.4,-122.1).s().p("A5CRVQh4gBhVhVQhVhUAAh5IAA5kQAAh3BVhVQBVhWB4AAMAyFAAAQB4AABVBWQBVBVAAB3IAAZkQAAB5hVBUQhVBVh4ABg");
	this.shape_3.setTransform(-2.3181,-36.9546,0.9206,0.8994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).wait(9));

	// frame_blue
	this.instance_14 = new lib.btn_frame();
	this.instance_14.setTransform(0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-293.4,635.5,582.2);


(lib.btn_mnc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint
	this.instance = new lib.tube_bottle_red();
	this.instance.setTransform(34.5,150,0.2513,0.2508,-26.5978);

	this.instance_1 = new lib.tube_bottle_blue();
	this.instance_1.setTransform(223.5,75.8,0.2342,0.2426,-14.5196);

	this.instance_2 = new lib.tube_bottle_yellow();
	this.instance_2.setTransform(275.2,94.9,0.2234,0.2409,23.1705);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,255,0.137)").s().p("Ag/BUIhkgIIAAj7IEIAAIAFANIABACIAmBmIACAFIADAKIADAJIABADIAEAKQAUA8gsAjIgBABIglAaIARArQgJAUgTAMQg6glhag3g");
	this.shape.setTransform(47.6625,173.9375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.51)").s().p("ABXF/IgCAAIgCgBIgLgEIgPgrIgQACIgBAAIgEAAIgaABQgSAAgSgLQgXgOgOghIgCgFIgBgBIgBgDIgFgMIgEgKQhLi9gtjNIgLg3IgBgDIgHgjIAAABIgEgWIgBgGIAAABQgJACgCgJIgEgQQgDgJAJgCIFJhVQAIgDADAJIAEAQIAAABIAAABIAAACQAAAFgEACIASA7IAAgBIAQA3QAwCnAVB7IAAABIAAADIACAIIAPBiIABAMIACAOIABAIIAAAAIABAKQAIA+gwAYIgBAAQgTAJgTAIIAIAsQgQAVgbAHQgKADgKAAQgIAAgHgCg");
	this.shape_1.setTransform(3,124.3,1.0369,1.0369,-11.6916,0,0,-22.4,-29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,51,255,0.137)").s().p("ABOCJIgCAAIgCgBIgLgEIgQgrIgRACIABAAIgQABIgPAAQgSAAgSgLQgXgOgNghIgCgFIgBgBIgBgDIgFgMIgEgKQgchFgXhIIERAAIAAEHQgKAIgOADQgKADgKAAQgIAAgHgCg");
	this.shape_2.setTransform(225.9625,102.9889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AhOFWQgYgLgMgWIAPgrIgNgIIgYgSQgPgLgHgTQgJgZAKghIAFgRQAvimBHiiQAUgvAWguIAIgRIAGgMIAPgfIAAgBIAtAZQA0FFAdCvIgsBQIgDAFIAAAAIgFAJQggA1gxgKIgBAAQgUgEgSgGIgVAoQgIACgIABIgEAAQgOAAgOgGg");
	this.shape_3.setTransform(270.8936,98.8313);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.51)").s().p("ABXF/IgCAAIgCgBIgLgEIgPgrIgQACIgBAAIgEAAIgaABQgSAAgSgLQgXgOgOghIgCgFIgBgBIgBgDIgFgMIgEgKQhLi9gtjNIgLg3IgBgDIgHgjIAAABIgEgWIgBgGIAAABQgJACgCgJIgEgQQgDgJAJgCIFJhVQAIgDADAJIAEAQIAAABIAAABIAAACQAAAFgEACIASA7IAAgBIAQA3QAwCnAVB7IAAABIAAADIACAIIAPBiIABAMIACAOIABAIIAAAAIABAKQAIA+gwAYIgBAAQgTAJgTAIIAIAsQgQAVgbAHQgKADgKAAQgIAAgHgCg");
	this.shape_4.setTransform(221.1973,74.5805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mark
	this.instance_3 = new lib.mark_head_front34("single",4);
	this.instance_3.setTransform(128.35,58.7,0.6342,0.6342,-9.6663,0,0,-0.2,-0.2);

	this.instance_4 = new lib.mark_sleevestar_mc("single",5);
	this.instance_4.setTransform(102.05,138.95,0.6676,0.6676,6.8809,0,0,22.1,-73.9);

	this.instance_5 = new lib.mark_hand_mc("single",4);
	this.instance_5.setTransform(28.05,156.15,0.6673,0.6673,0,106.5296,-73.4704,-0.2,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B29B19").ss(1,1,1).p("AHrxYQhnkGiMh5QAgAHAfAKQB+B2BeDrQAOAiANAlQAsB6AiBhQAOAkAMAhQAFBHAEBWQATFgBcHZQBNGQAFLhQktCXnlAFQlvAEk1hRQgijnAJj0QgxDLgWD0QhXgbhSgiQAYqHA3m0QAkkiAokEQDGgbCejWQBbh7AtiiQAih3AIiMQACghAAggAh/xmQgWgHgXgHAITxlQgTAHgVAGQh2AiibAAQi2AAijgwQACjdhtihQgVAEgTAEQBkCaACDO");
	this.shape_5.setTransform(145.1255,221.3752,0.6677,0.6677,-3.9315);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF99").s().p("ApWWYQgijnAJj0QgxDLgWD0QhXgbhSgiQAYqHA3m0QAkkiAokEQDGgbCejWQBbh7AtiiQAih3AIiMQACghAAggIAuAOIgugOQgCjOhkiaIAogIQBtChgBDdQCiAwC2AAQCbAAB2giIAogNIAbBHIBODbIAaBFQAFBHAEBWQATFgBcHZQBNGQAFLhQktCXnlAFIgeAAQleAAkohNgAD43XQAgAHAfAKQB+B2BeDrIgoANQhnkGiMh5gAITxlIAAAAg");
	this.shape_6.setTransform(145.1255,221.3752,0.6677,0.6677,-3.9315);

	this.instance_6 = new lib.mark_body_front3402("single",0);
	this.instance_6.setTransform(142.8,180.55,0.6677,0.6677,-3.9315,0,0,0,0.2);

	this.instance_7 = new lib.mark_sleeve_mc("single",5);
	this.instance_7.setTransform(174.8,126.75,0.6676,0.6676,0,-62.7532,117.2468,15.6,-69.8);

	this.instance_8 = new lib.mark_hand_mc("single",4);
	this.instance_8.setTransform(232.4,77.3,0.6897,0.6897,-155.031,0,0,-0.1,0.2);

	this.instance_9 = new lib.mark_hand_mc("single",4);
	this.instance_9.setTransform(215.85,69.25,0.6674,0.6674,142.0832,0,0,-0.1,0.5);

	this.instance_10 = new lib.mark_hand_mc("single",4);
	this.instance_10.setTransform(39.9,146.8,0.6673,0.6673,0,154.4464,-25.5536,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_6},{t:this.shape_5},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// carla
	this.instance_11 = new lib.carla_head_front34("single",2);
	this.instance_11.setTransform(377.95,71.55,0.6548,0.6548,0,11.1395,-168.8605,-0.2,-0.1);

	this.instance_12 = new lib.carla_apron_arm("single",0);
	this.instance_12.setTransform(356.6,227.55,0.6548,0.6548,0,1.7118,-178.2882,-0.1,0.2);

	this.instance_13 = new lib.carla_sleeve_mc("single",1);
	this.instance_13.setTransform(395.25,156.3,0.6548,0.7699,0,-10.828,172.0183,13.2,-47);

	this.instance_14 = new lib.carla_hand_mc("single",0);
	this.instance_14.setTransform(435.6,260.8,0.6548,0.6548,0,-2.563,177.437,-0.5,0.2);

	this.instance_15 = new lib.carla_apron_arm("single",1);
	this.instance_15.setTransform(356.6,227.55,0.6548,0.6548,0,1.7118,-178.2882,-0.1,0.2);

	this.instance_16 = new lib.carla_apron_front3402("single",0);
	this.instance_16.setTransform(382.95,135,0.6549,0.6549,0,6.6756,-173.3244,-35.6,-141.2);

	this.instance_17 = new lib.carla_body_front34("single",0);
	this.instance_17.setTransform(355.05,183.95,0.6549,0.6549,0,6.6756,-173.3244,-0.4,0.2);

	this.instance_18 = new lib.carla_sleeve_mc("single",5);
	this.instance_18.setTransform(327.2,141.15,0.6548,0.6548,50.9006,0,0,29.1,-63.9);

	this.instance_19 = new lib.carla_hand_mc("single",4);
	this.instance_19.setTransform(266.65,99.8,0.6547,0.6547,0,163.9447,-16.0553,0.1,0.3);

	this.instance_20 = new lib.carla_hand_mc("single",4);
	this.instance_20.setTransform(277.9,92.85,0.6547,0.6547,0,-143.8352,36.1648,-0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_mnc, new cjs.Rectangle(0,7,457.7,316.2), null);


(lib.btn_mix = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_mix
	this.instance = new lib.txt_mix("single",0);
	this.instance.setTransform(-2.3,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// txt_mix_shadow
	this.instance_1 = new lib.txt_mix("single",0);
	this.instance_1.setTransform(0.7,112);
	this.instance_1.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(9));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1TUyQhuAAhPhMQhOhNAAhsIAAgeIpkkgImotcIRWzEMA5vAAAIIQONIstOzIAAIeQAABshPBNQhOBMhuAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.45,y:-70.275}).wait(1).to({graphics:null,x:0,y:0}).wait(9));

	// btn_mnc
	this.instance_2 = new lib.btn_mnc();
	this.instance_2.setTransform(-14.35,58.2,1.0358,1.0358,0,0,0,233.8,238.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("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");
	this.shape.setTransform(-15.275,-13.65);

	var maskedShapeInstanceList = [this.instance_2,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).to({state:[]},1).wait(9));

	// bg_white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(153,0,0,0)").ss(1,1,1).p("A5CxUMAyFAAAQB4AABVBVQBVBVAAB4IAAZlQAAB4hVBVQhVBVh4AAMgyFAAAQh4AAhVhVQhVhVAAh4IAA5lQAAh4BVhVQBVhVB4AAg");
	this.shape_1.setTransform(-2.3181,-36.9546,0.9206,0.8994);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D4F0FF","#FFFFFF"],[0.039,1],1.6,163.7,1.6,-45.5).s().p("A5CRVQh4gBhVhVQhVhUAAh5IAA5kQAAh3BVhVQBVhWB4AAMAyFAAAQB4AABVBWQBVBVAAB3IAAZkQAAB5hVBUQhVBVh4ABg");
	this.shape_2.setTransform(-2.3181,-36.9546,0.9206,0.8994);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(9));

	// frame_blue
	this.instance_3 = new lib.btn_frame();
	this.instance_3.setTransform(0,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-293.4,635.5,582.2);


(lib.menu_picture = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.txt = new lib.txt_mp();
	this.txt.name = "txt";
	this.txt.setTransform(13.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// fluencyBtn
	this.fluency_btn = new lib.EarBtnSpeaker();
	this.fluency_btn.name = "fluency_btn";
	this.fluency_btn.setTransform(-323.1,0.45,2,2,0,0,0,-0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.fluency_btn).wait(1));

	// chat_bbl_short3
	this.instance = new lib.chat_bbl_short4();
	this.instance.setTransform(13.9,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menu_picture, new cjs.Rectangle(-356.5,-52,706.9,103), null);


(lib.modeSelect_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stop:20,zt0:21};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_6 = function() {
		playSound("button_pop1");
	}
	this.frame_22 = function() {
		playSound("page_slide");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(16).call(this.frame_22).wait(6));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiUrBLZMAAAiWxMEpXAAAMAAACWxg");
	mask.setTransform(640.025,400.05);

	// scene_swipe_pageflip
	this.instance = new lib.scene_swipe_pageflip_solid("synched",0,false);
	this.instance.setTransform(640,399.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(23));

	// scene_swipe_pageflip_solid
	this.instance_1 = new lib.scene_swipe_pageflip_solid("single",5);
	this.instance_1.setTransform(640,399.95);
	this.instance_1.alpha = 0.1016;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({alpha:1},3).wait(3));

	// buttonTargets
	this.paint_btn = new lib.button();
	this.paint_btn.name = "paint_btn";
	this.paint_btn.setTransform(650,283.75,3.7151,1.7163,0,0,0,-68.1,-67.8);

	this.mix_btn = new lib.button();
	this.mix_btn.name = "mix_btn";
	this.mix_btn.setTransform(122.9,283.25,3.7049,1.7181,0,0,0,-68,-67.9);

	var maskedShapeInstanceList = [this.paint_btn,this.mix_btn];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mix_btn},{t:this.paint_btn}]}).wait(28));

	// btn_mix
	this.instance_2 = new lib.btn_mix("single",0);
	this.instance_2.setTransform(363.3,385.85,1,1,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0.1992;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},3).to({regX:0.5,regY:0.5,scaleX:1.25,scaleY:1.25,x:368,y:391.65},3).to({scaleX:1.15,scaleY:1.15,x:366.25,y:389.45},2).wait(16));

	// btn_paint
	this.instance_3 = new lib.btn_paint("single",0);
	this.instance_3.setTransform(918.8,386.5,1,1,0,0,0,0.1,0.2);
	this.instance_3.alpha = 0.1992;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},3).to({scaleX:1.25,scaleY:1.25,x:919.45,y:391.6},3).to({scaleX:1.15,scaleY:1.15,x:919.2,y:389.6},2).wait(16));

	// tint
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(85,117,148,0.247)","rgba(239,247,255,0)"],[0.043,0.976],-64.9,-515.3,-64.9,104.3).s().p("Eiy3BffMAAAi+9MFlvAAAMAAAC+9g");
	this.shape.setTransform(640.05,400.05,0.8461,0.8461,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28));

	// bg_white_tint
	this.instance_4 = new lib.bg_white_tint();
	this.instance_4.setTransform(639.95,480);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28));

	// paint_jars1
	this.instance_5 = new lib.paint_jars1();
	this.instance_5.setTransform(32.15,615,0.9699,0.97,0,0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28));

	// paint_jars2
	this.instance_6 = new lib.paint_jars2();
	this.instance_6.setTransform(1189.5,618.25,0.9699,0.97,0,0,0,0.2,0.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28));

	// painting_table
	this.instance_7 = new lib.painting_table();
	this.instance_7.setTransform(640,877.65,1,2.634,0,0,0,0,0.6);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28));

	// easel_paint
	this.instance_8 = new lib.easel_paint();
	this.instance_8.setTransform(1151.05,136.2,0.24,0.2399,0,2.504,180,-1.3,-723.8);

	this.instance_9 = new lib.easel_paint();
	this.instance_9.setTransform(129.3,136.3,0.24,0.2399,0,-3.252,0,0.2,-723.5);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(28));

	// bg_paint_floor
	this.instance_10 = new lib.bg_paint_floor("single",0);
	this.instance_10.setTransform(640.1,955.55,1.0815,0.9427);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28));

	// bg_paint_wall
	this.instance_11 = new lib.bg_paint_wall("single",0);
	this.instance_11.setTransform(640.15,99.35,1.0815,0.7827);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.6,-82.4,1903.3000000000002,964.9);


(lib.art_piece_canvas_unicorn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight_shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(199,213,230,0.498)").s().p("EgCWBPWMAAAijaIErEsMAAACjaIACADg");
	this.shape.setTransform(-752.425,-14.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(244,248,253,0.498)").s().p("Ehw4ACWIkskrIAAAAMDmdAAAIEsErg");
	this.shape_1.setTransform(-15,-537.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// shade
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,214,227,0.647)","rgba(250,252,254,0.098)","rgba(250,252,254,0.098)","rgba(204,214,227,0.647)"],[0.004,0.161,0.753,0.953],444.2,624,-459.5,-593.2).s().p("EhzOBRuMAAAijbMDmdAAAMAAACjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// canvas_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh1kBPWMAAAijaMDmdAAAIEsEsMAAACjaMjmdAAAIABADg");
	mask.setTransform(-15,-15.125);

	// unicorn_painting_mc
	this.instance = new lib.unicorn_painting_mc();
	this.instance.setTransform(-45.6,155.6,1.7532,1.7532,0,0,0,0.1,-0.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// art_piece_canvas_blank
	this.instance_1 = new lib.art_piece_canvas_blank();
	this.instance_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// art_piece_canvas_outline
	this.hl = new lib.art_piece_canvas_outline();
	this.hl.name = "hl";
	this.hl.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.hl).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.art_piece_canvas_unicorn, new cjs.Rectangle(-800,-585.7,1570,1141.2), null);


(lib.artSelect_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// scene_swipe_pageflip
	this.instance = new lib.scene_swipe_pageflip_solid("synched",0,false);
	this.instance.setTransform(640,399.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(1));

	// menu_picture
	this.chat_mc = new lib.menu_picture();
	this.chat_mc.name = "chat_mc";
	this.chat_mc.setTransform(644.05,68.3,1,1,0,0,0,1,-1);

	this.timeline.addTween(cjs.Tween.get(this.chat_mc).wait(6));

	// paintings
	this.paint_icecream = new lib.art_piece_canvas_food();
	this.paint_icecream.name = "paint_icecream";
	this.paint_icecream.setTransform(414.55,617.9,0.2671,0.2671,-5.5468,0,0,0,0.2);

	this.paint_dino = new lib.art_piece_canvas_dino();
	this.paint_dino.name = "paint_dino";
	this.paint_dino.setTransform(865.7,627.35,0.2672,0.2672,5.2392);

	this.paint_fish = new lib.art_piece_canvas_shape();
	this.paint_fish.name = "paint_fish";
	this.paint_fish.setTransform(943.05,273.9,0.267,0.267,1.7584);

	this.paint_unicorn = new lib.art_piece_canvas_unicorn();
	this.paint_unicorn.name = "paint_unicorn";
	this.paint_unicorn.setTransform(341.35,262,0.2672,0.2672,0,-2.5009,-1.9868,0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.paint_unicorn},{t:this.paint_fish},{t:this.paint_dino},{t:this.paint_icecream}]}).wait(6));

	// easel_paint
	this.instance_1 = new lib.easel_paint();
	this.instance_1.setTransform(397.2,408.3,0.4301,0.4299,0,-1.0372,-3.2845,-0.3,-723.6);

	this.instance_2 = new lib.easel_paint();
	this.instance_2.setTransform(882.95,417.15,0.4301,0.4299,0,1.0372,-176.7155,-0.7,-723.6);

	this.instance_3 = new lib.easel_paint();
	this.instance_3.setTransform(975.75,99.95,0.3865,0.3866,0,1.7326,180,-0.6,-723.9);

	this.instance_4 = new lib.easel_paint();
	this.instance_4.setTransform(304.7,88.3,0.3867,0.3869,0,-1.7877,0,0.1,-724);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(6));

	// bg_paint_floor
	this.instance_5 = new lib.bg_paint_floor("single",0);
	this.instance_5.setTransform(640.1,931.45,1.2352,1.0768);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6));

	// bg_paint_wall
	this.instance_6 = new lib.bg_paint_wall("single",0);
	this.instance_6.setTransform(640.15,-46.45,1.2352,0.894);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1455.5,-616.2,4191.1,1958.2);


// stage content:
(lib.mpmenu = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(-815.7,-216.2,3551.5,1558);
// library properties:
lib.properties = {
	id: '6562380DA96C4DDEA3EB11E0FF1F780F',
	width: 1280,
	height: 800,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/button_pop1.mp3", id:"button_pop1"},
		{src:"sounds/page_slide.mp3", id:"page_slide"}
	],
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
an.compositions['6562380DA96C4DDEA3EB11E0FF1F780F'] = {
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