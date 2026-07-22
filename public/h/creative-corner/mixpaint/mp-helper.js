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


(lib.flash_glow2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFE3A9").s().p("At2MhQk7ifoKAsQKUkVBNl2QBNl0rUl6QJvCFFRglQFSgmCFkUQCGkVAOluQB+KACEC8QCFC8EtgmQEtgmGsicQlqFJgrC9QgqC8DCCJQDCCLGgCUQpWgSjSBtQjSBtAPDbQAPDaDIFHQm1j4jxggQjwghjlCEQjlCFjRFDQBOpqk7ieg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash_glow2, new cjs.Rectangle(-172.4,-157.7,344.8,315.4), null);


(lib.flash_glow1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFD24").s().p("AAoNYQmlhCmsJzQCXocgqklQgrklk5hzQk4h0megNQLThtDVhyQDVhzgrkFQgrkFiwl0QF0E6DVAlQDVAlCbioQCdipCnlpQgVIHB8C2QB7C2D4gMQD2gNFyiuQkYF7glDRQglDRCWDGQCWDHFtC1Qq7hEizESQiyERAxHFQk6o9mmhDg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flash_glow1, new cjs.Rectangle(-178.3,-149.5,356.6,299.1), null);


(lib.bg_dark_tint = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(65,78,178,0.4)").s().p("Eiy3BfeMAAAi+7MFlvAAAMAAAC+7g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_dark_tint, new cjs.Rectangle(-1144.7,-611,2289.5,1222.1), null);


(lib.paint_splat_yellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF592").s().p("AlaIXQg0gmgRgkQgLgWgBgXQgCgZALgVIAKgRQAFgJAAgIQAAgHgEgJIgHgPQgKgTAHgLQAEgGAGgDQAGgCAHABQANACAHANQAHAKAAARQAAAKgDATQgDAKABAHIAGAPQAFALAIAhQAGAcAKAOQAPAVAsAWQAtAWAlgCQAkgDAigUQAhgVAJgcIAUhCQALgmAEgHQAdg2AqgGQALgBAJADQALAEADAJQAFAOgNAPQgHAHgQAMQgTARgMAiQgHATgaAoQgnA/gwAeQgwAeg8ACIgGAAQg5AAgxglgAGLF4QhBgNgogpQgPgQgDgNQgCgJADgIQACgJAHgFQAOgJARAJIAOAJIANAKQA4AoBngLQBDgIAwgWQA7gcAdgxQAfg0gFhMQgDgcgGgVQgKgigZgdQgZgcghgQQgMgFgGgFQgJgJADgKQACgFAGgCQAFgDAGABQAHAAAOAIIAXAMQAOAHAIAFQASANATAVQALANAUAbQAeApAJAYQAMAhgBAuQgCA1gTApQggBIhRAoQhAAhhbAJQgeAEgaAAQgkAAgdgHgADYEkIgRgFIgNACQgLACgKgEQgLgEgGgIQgHgJgBgLQgCgLAFgKIAGgJQAIgIAEgCQALgHAVAAQAfABAQANIAKALIAHAMQADAJgBAKQgCAKgGAHQgHAHgJADQgGACgFAAIgIgBgAnIEDQgMgEgHgJQgGgJAAgMQAAgNAHgIQAIgJAMgDQAMgDAKAFQAQAIADASQACALgGALQgGALgLAEQgGADgHAAIgJgBgAq+DsQgygNgbglQgMgQgGgTQgHgTAAgPQAAgWARgnQATgpAOgPQARgQAQAAQAKAAAIAHQAIAHgCAJQAAAGgKALIgZAXQgNAQgBAPQgBAFACAKQACAMAEALQALAcAgANQAbAKAggIQAagJANgCQATgDAjAHQAXAGAGAFQAIAGAEAKQAEAKgCAJQgCAKgHAIQgHAHgJADQgJADgPgCQgSgCgGABIgSADIgSAFQgbAHgZAAQgVAAgTgFgAlYkSQgRgLgCgZQgCgOAGgLQAGgNANgEQAKgDALAFQAKAEAIAKQAIAJACAMQADAMgDAKQgGARgQAFQgGACgGAAQgKAAgJgFgAGqkpQgLgDgIgJQgIgJgBgMQgCgMAFgKIAEgIQAAgGgIgGQgLgIgPgCQgKgBgTAAQgZAAgLAEQgHADgXAOIgpAVIgdATIgbASQgKAHgIABQgMABgGgIQgHgJAEgLQACgFAIgJIALgOQAHgJARgOQATgRAPgKQAWgQAagNQAqgVAogFQAggDAeAJQAgAJAUAWQAKAMAGANQAHARAAAWQABASgFAMQgEALgJAIQgJAIgLACIgKABQgGAAgHgCgAlPmFQgKgGgFgKQgKgSAGgaQALgtAtgjQA0gqA4AAQAeABAaAOQAcAPAOAZQAJARgCANQgCATgPAGQgIADgJgDQgJgEgFgHIgGgPQgEgIgEgEQgLgLgaAIQgaAGgRAKQgLAHgPAOQgNAMgFAHQgEAGgFALIgHARQgLAWgPAEIgHAAQgHAAgIgDg");
	this.shape.setTransform(14.683,-13.8201);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(216,125,29,0.2)").s().p("AlMJNQg8gigghCQgWgugCgvQAWBBArAuQBGBOCEggQCDggA6h4QA8h5BHgDQBHgEAwA5QAxA5BtASQBtATCChKQCBhLAiiUQAShQgShPQAJAVAFAUQASBPgQBHQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcgAm6EqQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgJgkADgjQAPBWA/AnQBNAwBTgZQBTgYAlAVQAjAVAGA7IgBgIgApVhjQArgCAZgHQARgGAigOQBLg0gMiLQgMiLAXgxQAHgNAHgMQgYBWATBHQAgB8gUBAQgUBBhfAXQgYAHgZAAQgZAAgZgHgAGojhQgVgiA7gqQA6gqgMhSQgGgmgqgbIAQAJQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQAJAEA5AEQgZAAgUACIgUACQgxAAgRgegAgnltQgmgwARhnQAJg5gkgrQAWANAMAVQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQANgJAWgTQglAwgeAIQgMADgLAAQgnAAgdgmg");
	this.shape_1.setTransform(14.5173,-10.2728);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(2));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE900").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_2.setTransform(14.5147,-11.5518);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(2));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_3.setTransform(14.5147,-9.0518);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,-154.3,309.3,323.6);


(lib.paint_splat_red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FD7C81").s().p("AlaIXQg0gmgRgkQgLgWgBgXQgCgZALgVIAKgRQAFgJAAgIQAAgHgEgJIgHgPQgKgTAHgLQAEgGAGgDQAGgCAHABQANACAHANQAHAKAAARQAAAKgDATQgDAKABAHIAGAPQAFALAIAhQAGAcAKAOQAPAVAsAWQAtAWAlgCQAkgDAigUQAhgVAJgcIAUhCQALgmAEgHQAdg2AqgGQALgBAJADQALAEADAJQAFAOgNAPQgHAHgQAMQgTARgMAiQgHATgaAoQgnA/gwAeQgwAeg8ACIgGAAQg5AAgxglgAGLF4QhBgNgogpQgPgQgDgNQgCgJADgIQACgJAHgFQAOgJARAJIAOAJIANAKQA4AoBngLQBDgIAwgWQA7gcAdgxQAfg0gFhMQgDgcgGgVQgKgigZgdQgZgcghgQQgMgFgGgFQgJgJADgKQACgFAGgCQAFgDAGABQAHAAAOAIIAXAMQAOAHAIAFQASANATAVQALANAUAbQAeApAJAYQAMAhgBAuQgCA1gTApQggBIhRAoQhAAhhbAJQgeAEgaAAQgkAAgdgHgADYEkIgRgFIgNACQgLACgKgEQgLgEgGgIQgHgJgBgLQgCgLAFgKIAGgJQAIgIAEgCQALgHAVAAQAfABAQANIAKALIAHAMQADAJgBAKQgCAKgGAHQgHAHgJADQgGACgFAAIgIgBgAnIEDQgMgEgHgJQgGgJAAgMQAAgNAHgIQAIgJAMgDQAMgDAKAFQAQAIADASQACALgGALQgGALgLAEQgGADgHAAIgJgBgAq+DsQgygNgbglQgMgQgGgTQgHgTAAgPQAAgWARgnQATgpAOgPQARgQAQAAQAKAAAIAHQAIAHgCAJQAAAGgKALIgZAXQgNAQgBAPQgBAFACAKQACAMAEALQALAcAgANQAbAKAggIQAagJANgCQATgDAjAHQAXAGAGAFQAIAGAEAKQAEAKgCAJQgCAKgHAIQgHAHgJADQgJADgPgCQgSgCgGABIgSADIgSAFQgbAHgZAAQgVAAgTgFgAlYkSQgRgLgCgZQgCgOAGgLQAGgNANgEQAKgDALAFQAKAEAIAKQAIAJACAMQADAMgDAKQgGARgQAFQgGACgGAAQgKAAgJgFgAGqkpQgLgDgIgJQgIgJgBgMQgCgMAFgKIAEgIQAAgGgIgGQgLgIgPgCQgKgBgTAAQgZAAgLAEQgHADgXAOIgpAVIgdATIgbASQgKAHgIABQgMABgGgIQgHgJAEgLQACgFAIgJIALgOQAHgJARgOQATgRAPgKQAWgQAagNQAqgVAogFQAggDAeAJQAgAJAUAWQAKAMAGANQAHARAAAWQABASgFAMQgEALgJAIQgJAIgLACIgKABQgGAAgHgCgAlPmFQgKgGgFgKQgKgSAGgaQALgtAtgjQA0gqA4AAQAeABAaAOQAcAPAOAZQAJARgCANQgCATgPAGQgIADgJgDQgJgEgFgHIgGgPQgEgIgEgEQgLgLgaAIQgaAGgRAKQgLAHgPAOQgNAMgFAHQgEAGgFALIgHARQgLAWgPAEIgHAAQgHAAgIgDg");
	this.shape.setTransform(14.683,-13.8201);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AlMJNQg8gigghCQgWgugCgvQAWBBArAuQBGBOCEggQCDggA6h4QA8h5BHgDQBHgEAwA5QAxA5BtASQBtATCChKQCBhLAiiUQAShQgShPQAJAVAFAUQASBPgQBHQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcgAm6EqQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgJgkADgjQAPBWA/AnQBNAwBTgZQBTgYAlAVQAjAVAGA7IgBgIgApVhjQArgCAZgHQARgGAigOQBLg0gMiLQgMiLAXgxQAHgNAHgMQgYBWATBHQAgB8gUBAQgUBBhfAXQgYAHgZAAQgZAAgZgHgAGojhQgVgiA7gqQA6gqgMhSQgGgmgqgbIAQAJQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQAJAEA5AEQgZAAgUACIgUACQgxAAgRgegAgnltQgmgwARhnQAJg5gkgrQAWANAMAVQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQANgJAWgTQglAwgeAIQgMADgLAAQgnAAgdgmg");
	this.shape_1.setTransform(14.5173,-10.2728);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(2));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE010C").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_2.setTransform(14.5147,-11.5518);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(2));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_3.setTransform(14.5147,-9.0518);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,-154.3,309.3,323.6);


(lib.paint_splat_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#407DFF").s().p("AlaIXQg0gmgRgkQgLgWgBgXQgCgZALgVIAKgRQAFgJAAgIQAAgHgEgJIgHgPQgKgTAHgLQAEgGAGgDQAGgCAHABQANACAHANQAHAKAAARQAAAKgDATQgDAKABAHIAGAPQAFALAIAhQAGAcAKAOQAPAVAsAWQAtAWAlgCQAkgDAigUQAhgVAJgcIAUhCQALgmAEgHQAdg2AqgGQALgBAJADQALAEADAJQAFAOgNAPQgHAHgQAMQgTARgMAiQgHATgaAoQgnA/gwAeQgwAeg8ACIgGAAQg5AAgxglgAGLF4QhBgNgogpQgPgQgDgNQgCgJADgIQACgJAHgFQAOgJARAJIAOAJIANAKQA4AoBngLQBDgIAwgWQA7gcAdgxQAfg0gFhMQgDgcgGgVQgKgigZgdQgZgcghgQQgMgFgGgFQgJgJADgKQACgFAGgCQAFgDAGABQAHAAAOAIIAXAMQAOAHAIAFQASANATAVQALANAUAbQAeApAJAYQAMAhgBAuQgCA1gTApQggBIhRAoQhAAhhbAJQgeAEgaAAQgkAAgdgHgADYEkIgRgFIgNACQgLACgKgEQgLgEgGgIQgHgJgBgLQgCgLAFgKIAGgJQAIgIAEgCQALgHAVAAQAfABAQANIAKALIAHAMQADAJgBAKQgCAKgGAHQgHAHgJADQgGACgFAAIgIgBgAnIEDQgMgEgHgJQgGgJAAgMQAAgNAHgIQAIgJAMgDQAMgDAKAFQAQAIADASQACALgGALQgGALgLAEQgGADgHAAIgJgBgAq+DsQgygNgbglQgMgQgGgTQgHgTAAgPQAAgWARgnQATgpAOgPQARgQAQAAQAKAAAIAHQAIAHgCAJQAAAGgKALIgZAXQgNAQgBAPQgBAFACAKQACAMAEALQALAcAgANQAbAKAggIQAagJANgCQATgDAjAHQAXAGAGAFQAIAGAEAKQAEAKgCAJQgCAKgHAIQgHAHgJADQgJADgPgCQgSgCgGABIgSADIgSAFQgbAHgZAAQgVAAgTgFgAlYkSQgRgLgCgZQgCgOAGgLQAGgNANgEQAKgDALAFQAKAEAIAKQAIAJACAMQADAMgDAKQgGARgQAFQgGACgGAAQgKAAgJgFgAGqkpQgLgDgIgJQgIgJgBgMQgCgMAFgKIAEgIQAAgGgIgGQgLgIgPgCQgKgBgTAAQgZAAgLAEQgHADgXAOIgpAVIgdATIgbASQgKAHgIABQgMABgGgIQgHgJAEgLQACgFAIgJIALgOQAHgJARgOQATgRAPgKQAWgQAagNQAqgVAogFQAggDAeAJQAgAJAUAWQAKAMAGANQAHARAAAWQABASgFAMQgEALgJAIQgJAIgLACIgKABQgGAAgHgCgAlPmFQgKgGgFgKQgKgSAGgaQALgtAtgjQA0gqA4AAQAeABAaAOQAcAPAOAZQAJARgCANQgCATgPAGQgIADgJgDQgJgEgFgHIgGgPQgEgIgEgEQgLgLgaAIQgaAGgRAKQgLAHgPAOQgNAMgFAHQgEAGgFALIgHARQgLAWgPAEIgHAAQgHAAgIgDg");
	this.shape.setTransform(14.683,-13.8201);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AlMJNQg8gigghCQgWgugCgvQAWBBArAuQBGBOCEggQCDggA6h4QA8h5BHgDQBHgEAwA5QAxA5BtASQBtATCChKQCBhLAiiUQAShQgShPQAJAVAFAUQASBPgQBHQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcgAm6EqQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgJgkADgjQAPBWA/AnQBNAwBTgZQBTgYAlAVQAjAVAGA7IgBgIgApVhjQArgCAZgHQARgGAigOQBLg0gMiLQgMiLAXgxQAHgNAHgMQgYBWATBHQAgB8gUBAQgUBBhfAXQgYAHgZAAQgZAAgZgHgAGojhQgVgiA7gqQA6gqgMhSQgGgmgqgbIAQAJQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQAJAEA5AEQgZAAgUACIgUACQgxAAgRgegAgnltQgmgwARhnQAJg5gkgrQAWANAMAVQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQANgJAWgTQglAwgeAIQgMADgLAAQgnAAgdgmg");
	this.shape_1.setTransform(14.5173,-10.2728);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(2));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004BFF").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_2.setTransform(14.5147,-11.5518);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(2));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AlMJaQg8gigghCQgghBAKhFIAFgcQACgRgDgMQgFgTgSgNQgQgMgVgDQgggEgvARQgjAPgSAGQgfAKgZgBQgygDgrguQglgngOg2QgOg3APgzQAOg1ApglQApgnA1gLQAVgEA5gBQAygBAbgIQARgGAigOQBLg0gMiLQgMiLAXgxQAZg0ApghQAmgeAxgMQAwgMAxAHQBJALAcAuQAPAYADAoQABAXAAAuQACAmARAdQASAhAgAEQAXACAagPQAPgKAbgYQB2huBrgKQBDgGA6AlQA9AnAKA+QAGAkgPAiQgPAkgfARIgRALQgJAIAAAIQAAAOAXAJQALAFBUAEQBTAFBJA+QBJA+ATBOQASBOgQBIQgRBIgbA4QgZA1gtApQhTBMiAATQhTAMhKgXQhSgZgpg+QgYgogOgSQgZgegcACQghABgeAtQgFAIg+BwQgoBIgpAjQg1AshJAHIgXABQg7AAgzgcg");
	this.shape_3.setTransform(14.5147,-9.0518);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,-154.3,309.3,323.6);


(lib.paint_drop_yellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF592").s().p("Ah/CKQghiMC1kUIBZDmQAvCkgwBSQgxBRhNAAQhNAAghiNg");
	this.shape.setTransform(-4.4585,-5.5875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(216,125,29,0.2)").s().p("AhfC2Qi+haAWjJQAEgpAJgoQgGCrCmBOQCyBVB5i4QAthGgDhkQApCyhHBtQhYCGh0AAQg1AAg7gdg");
	this.shape_1.setTransform(0.0405,27.5211);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE900").s().p("AhfHJQi+haAWjKQAWjJB0jCQAwhRAihTQBEiqAoCVQAWBXAiBOQDjGXiADDQhXCGh0AAQg1AAg7gdg");
	this.shape_2.setTransform(0.038,-0.0088);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_drop_yellow, new cjs.Rectangle(-26.6,-48.6,53.3,97.2), null);


(lib.paint_drop_red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FD7C81").s().p("Ah/CKQghiMC1kUIBZDmQAvCkgwBSQgxBRhNAAQhNAAghiNg");
	this.shape.setTransform(-4.4585,-5.5875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AhfC2Qi+haAWjJQAEgpAJgoQgGCrCmBOQCyBVB5i4QAthGgDhkQApCyhHBtQhYCGh0AAQg1AAg7gdg");
	this.shape_1.setTransform(0.0405,27.5211);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE010C").s().p("AhfHJQi+haAWjKQAWjJB0jCQAwhRAihTQBEiqAoCVQAWBXAiBOQDjGXiADDQhXCGh0AAQg1AAg7gdg");
	this.shape_2.setTransform(0.038,-0.0088);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_drop_red, new cjs.Rectangle(-26.6,-48.6,53.3,97.2), null);


(lib.paint_drop_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#407DFF").s().p("Ah/CKQghiMC1kUIBZDmQAvCkgwBSQgxBRhNAAQhNAAghiNg");
	this.shape.setTransform(-4.4585,-5.5875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AhfC2Qi+haAWjJQAEgpAJgoQgGCrCmBOQCyBVB5i4QAthGgDhkQApCyhHBtQhYCGh0AAQg1AAg7gdg");
	this.shape_1.setTransform(0.0405,27.5211);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004BFF").s().p("AhfHJQi+haAWjKQAWjJB0jCQAwhRAihTQBEiqAoCVQAWBXAiBOQDjGXiADDQhXCGh0AAQg1AAg7gdg");
	this.shape_2.setTransform(0.038,-0.0088);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_drop_blue, new cjs.Rectangle(-26.6,-48.6,53.3,97.2), null);


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


(lib.paintbrush_color_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// red_paint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1C1C").s().p("AhgH4QlqgvBViYQmXgiA7jtQBBkJCFhbQCEhcB9gHQB+gHCMg4QCNg4CgA4QCfA3B+B6QB+B6ARD6QARD6kuAwQiPCWkFAAQhAAAhIgJg");
	this.shape.setTransform(-168.6852,-103.6326);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF1C1C").s().p("Au3GqQipiTBsgsQBsgsB+jKQB+jLEyiiQEyiiFlgLQFlgLELD/QELD+ljEdQkeDoi8hFQAJCPrBAHQhCAEg9AAQlqAAiRh9g");
	this.shape_1.setTransform(-123.0061,-114.3859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF1C1C").s().p("AsXKIQg4gSAWhPQAXhPAegmQiaAJiWgKQgegCgRgEQgagHgPgPQgRgRgDgcQgDgZAJgbQAJgaBqhoQBmhjD7igQhagegPgKQgVgOgGgTQgNgsA7g2QBOhHBfhCQHwksJCAnIA3AGQA7AJA7ANQGrBdBjE9QBkE8i0ChQi0CglOghQmlgNmACQIhAAaIg2AUQiDAwh3AYQhEAOgvAAQgjAAgYgHg");
	this.shape_2.setTransform(-70.8118,-116.3967);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF1C1C").s().p("AIpKwQhFgUg7gjQgagQgngcIg/gtQgsgeg2gcQizhXi8g8Qhwglhkg8QhDgpgPg5IgGgaQgDgRgFgJQgNgZgigOQgjgPgzgCIhZABQhGABhMgQQg/gNgMgjQgMggAfgtQAzhJBig2QA/gjB7guQhBgEidAMQiNAMhQgLQg3gIgegUQgUgNgMgTQgNgUAAgWQABgwBGgxQB4hSCdgxQHdiDHlBiQAXAFAYAAIAKgIQAWgSAogJQB4gdB2AoQAjAMApAVQAXAMAxAcQBUAxAuAeQBGAuAzAtQCCByAqCEQANAqAIA4QAEAhAFBCQAHBnABAwQACBUgJBDQgWCrhfBnQhSBZiCAdQg3AMg2AAQhGAAhGgUg");
	this.shape_3.setTransform(8.8673,-120.0363);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF1C1C").s().p("AIXPWQjChIhii3QhYiphShnQhRhohahYQhbhYiLhYQiMhYgigpQgigpAygkQA+grBLgSQiqhpjLg0QjKg1ijgKQilgJgKhBQgLhBCNhWQCMhYBIgIQhCgYg9gjQgigTARgiQASglAjgSQC1hgDMgOQHqgcHYCGQEUBPDhCxQClCDB1CuQAzBOAiBRQBGCtgMC8QgMDAhnCgQgkA5geA5QgTAjgTApQg2B1imBnQhTA1hZAAQg5AAg7gWg");
	this.shape_4.setTransform(122.65,-61.55,1,1,0,0,0,83.2,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF1C1C").s().p("AIETiQi+ghiRh/QiWiCgyjIQgxjBhDi7QgVg6gkgwQhsiNiKhzQiFhug8igQghhYBEg8QALgJAOgHQgdgwg7gwQiUh7h8hDQh8hChOg1QhNg0gdhGQgdhGCIgtQCFgsDOAxIBJARQgrhqAegrQAegqBRgYQBRgYD2AxQD2AxDkB6QCyBRCiBrQCaBmB8CKQB4CFA4CqQAqCTAZCZQAFAgAPAfQAhBGAzA4QAdAkAOAtQA1CyAFC8QAFDJhyCpQhxCni+BJQg+AZhDAIQgnAFgnAAQg3AAg3gKg");
	this.shape_5.setTransform(78.4185,-70.0655);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF1C1C").s().p("AAAARQgGgBgHgDIgNgFIAAgIQgBgEACgDIADgCIAGgEQACgCADgBIAGAAIATAAIAEAAIACADIAHAKQABADgCAFIgDAIIgMACIgKACIgBAAg");
	this.shape_6.setTransform(28.9617,-194.345);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF1C1C").s().p("AgIWVQhUgZg4hDQgdghgZglQhAhfgjhuQhbgDhKg1QhyhSgPiOQgTiuAhiwQAuj5h2jfQhTidhPiMQhOiMAQiIQARiJBdApQBeAoBDBpQgshwhjhvQhjhvhciRQhlifA+ipQAMghAggSQApgYAsAHQBnAOBYA3QCdBgByCSQgSg7gZg1QgkhLAvhAQApg2BEgHQBJgLBDAiQDBBlCKCsQB9CcB5CdQCaDJBwDlQAxBjAdBqQAvCwAHC2IACA2QAsgiAuAYQBSArAPBeQASB7gNB6QgPCRhoBiQhBA8hOghQgwCYhcCCQimDqkUA/QghAHgiAAQgwAAgvgPg");
	this.shape_7.setTransform(140.3641,-23.0727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF1C1C").s().p("AnEXnQikhBhKibQgQghgHgoQgXiHhMh1QgrhggThnQgJg1ABg3QAHjIBOi1QAfhKAnhEQAmhDAbhIQALgeAGgaQAPhGgHhfIgTinQgKhiAHhGQAKhbApg/QB5ipiPjEQhch9giiWQgHhBAdgsQASgbAfgRQAdgQAjgEQA7gHBIAdQAvAUA1AkIArAgQArgkBDADQA4ADA9AcQBOAlBQBHQA0AtBWBbQCwC6BbB/QCFC3A1CxQASA7AjC7QAeCaAlBXQALAZAtBWQAkBFAOAuQARAyAGA+QAFAwAABDQAABMgGA3QgGAugLAoQgnCjiZBBQgjAOgkAFQgvAIgrAUIgdAOQgwC/iaB6QiPBwilBGQiYBKioAPIgDAAQgzAAgugSg");
	this.shape_8.setTransform(150.0898,5.8912);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF1C1C").s().p("Am/XEQhKgWg6gxQgpghgUglQgRgigJgyQgMhFAHhEQgiADgVABQgmABgfgHQgkgIgcgUQgegWgMgfQgFgNgIg8QgGgogQgUQhCgiAAhFQgBirBoiKQAqg/A4hCQAWgaAfgiQgIgIgGgLQgMgUgEgaQgFgkANg8QAYhpAzhcQBAiNCEhEQAlgSAmANQAOAFAOACIARgNQB2iSA2i4QAUhCAchAIADgFQANgYAOgQQASgTAWgJQAZgKAWAFQAfAGAaAhQgXivgyirIgjh5QgShFgFg1QgHhOAmgdQAZgUApAHQAZAEAlAWQBRAtBIBEQAeAdAmArQAjAoAhAqQgBgbAJgRQAMgWAdgHQAagHAaAJQAXAJAWATQAQAOAUAZQDeEIBkFUQBkFUgrFWQAWgMAcAMQAZAKAPAYQAMAUAFAdQADATAAAhQAEFpinDNQgyA+g9AkQhFAohFgFQgQgBgOgDQhFBrheBbQhnBliNBUQh4BIibBBQg1AWghALQgxAQgpAEQgWADgWAAQg1AAg1gQg");
	this.shape_9.setTransform(130.7781,30.6649);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF1C1C").s().p("AoMT8Qiigbg7iWIgKgXQgGgOgJgHQgJgIgPgEIgbgGQg0gKhKgiQhjgtg+gyQhPhAgehPQgNgkgIg3QgaiwAzh0QAohcBehGQBPg8BxgpQA1gUCZgrQBegaBAgXIAVgLQAogUAtghQAbgTA1gqIBGg5QAlghAageQBDhcAigsQA+hOA/gWQAYgIAygGQAzgHAXgIQA+gUBAhKQCcizBEk4QAKguAFgQQAKgjAOgYQASgdAbgRQAdgTAeADQA6AEAvBOQArBHAXBaQAKgKALgJQAzgqA2AJQBDAKA4BaQBaCLAnDbQAlDRgPDTIgKByQgFBDADAvQACAfANBWQALBKAAAsQgBBpgzBsQgsBfhQBZQhfBqhiAxQgvAZhMAXQhVAYgqAOQhkAiiHBGIjHBqQiqBhi/AnQgsAIgrAKIgbAHQhNAWhQAAQgrAAgsgGg");
	this.shape_10.setTransform(81.5651,71.3925,1,1,2.9765);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF1C1C").s().p("AsWQJQgTgHgUgCQi+geichtQj9iwg9kxQhAk7CrkIQAXgjAggdQB2hmCZAbQBOAOBIAlQA5AfAyAuQEaBGERheQBjgjBYg4QCLhaCegnQAigJAgAMQA/AXBCACQAsABAeglQAdglAfgkIAdglQBHh5BmhcQAkggAxAAQBdAAAsBUQAqBNgHBaIgFBIQBnjOAkjkQANhPAxg8QAwg6BDAeQAtAWAUAvQA6CGAICTQAOENAWELQAKB9gzByQg2B4h3BDQhAAkg3AxQhlBZhbBlQi9DSkGBtQh2Ayh5AiIgcAKQkaBjkrAqQhaAMhbgBIgsABQiAAAh3gxg");
	this.shape_11.setTransform(70.2105,86.6265);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF1C1C").s().p("AkXOaQgugDgsgEQlKgjlLiEQiphGiah9QhMg+g1hSQgOgWgKgYQgYg4gQhsQgTh2gQgvIgDgJQgigygSgyQg1iPAujNQAMg2AQglQAUgqAqgwIATgVQCAkSEGgVQCSgQB5BVQBAgVBEAGQBPAIBMAqQBGAmA9A+IAuAzIAtA1QA+BHBcBXIBAA7QAoAaA1ARQAzAQBPALQBRAMA2gBQArgBBHgKQBTgLAegCQAjgDAzAAQAvAAAXACQAoADAdAKQAvARAQAgQALAUABAcQAAAPgDAQQA5gTA3gaQAjgRByhAQBcg0A8gWQBJgcA5ADQAjACAeANQAgAPAUAZQAjAvgHBHQgDAigNAkQAfgMA0glQA+gtApAIQAdAGAVAbQATAYAFAgQAHAvgbBJQgsB3hHBkQhLBphjBHIhaA9Qg3AlgeAfQgbAcgpA8QgsA/gXAaQhyCAjmAmQhGAMh7AJQiNAKg2AHQg6AIhyAXQh0AXg4AIQheANhgAAIg6gBg");
	this.shape_12.setTransform(19.7669,96.5558);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF1C1C").s().p("AEURKIjagZQiEADiOgkQhmgZhpgLQjTggikhgQhmg7hOhRQhShVgvhlQgOgegfhRQgbhHgVgnQgMgWgWghQhtiGhRiYIgHgQQhLi4gIjHQgCgmgHglQgkjFBhiuQAcgzAkgpQAggkAngcQBlhKCAgMQCCgNBtA3QAQAJAkAVQAhATATAJQBCAgBdAKIACABQCFgEB4A1QAtAUAfAmQBVBnApCBQA9C8CQCFQAnAjAvAeQCXBhC6AeQA4AKByANQBjAOBAAdQAgAOATASQAYAWABAbQAAAVgMATQgMASgTAMQgaAQg3AKQh1AWhkANQBrAOB2gEQC2gGDkgzIBZgTQAzgKAngDQAzgDAoAOQAvARARAmQAdBBhNBgQhsCIiSBpQiPBminBAQhbAjhgAXQBJAGAsAIQA4AKATAYQAOASABAZQAAAXgMAWQgRAfgwAhQh7BRisAYQhKALhcAAQg4AAhAgFg");
	this.shape_13.setTransform(-22.5136,68.0036);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF1C1C").s().p("AFpUgQiugaijhKQihhKiHhxQg6gxhAhDQgqgshIhQQhEhMgggrQg0hFgahBQglhbgIigIgEg9IgPivQhMgNgjhRQgTgsgPgtQgph0AFh9QADg9ANg6QAShMAphCQBsisCuhrIAdgRQBDgmAjgXIALgIQAFgLAJgOQByifCZhNQBSgpBXgMQBdgNBVAUQBBAPAxAiQA3AmAWA1QAKAWAHAkQALAwADAMQAOAwAqBGQA1BYAMAaQAtBhgFBtQgFBug0BcQgTAggmAyQgtA8gOAVQgeAtgWAyQgLB2AfB6QA2DRCZCIQA6AzAPARQAkArABAqQABA3g0AoQgtAkhAAKIgTABQAWAcAVASQAVARAhASIA4AeQBtA8BUBYQBaBfgTBPQgSBJhuAsQh+AziaAAQhNAAhTgNg");
	this.shape_14.setTransform(-87.4468,15.0273);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF1C1C").s().p("ApDUtQhPgWhGhMQgwg1g7hjQgjg7gTgqQgghGgUheQgNg+gNhuQgJhLABglQAAgaAFghQgsApgqAFQgZACgXgKQgYgLgPgUQgYghgChBQgDhfAbhxQAMg0AXhDQBDiuAzi0QAVhKAQhLQANhCAag/QBKixCYh2QBDg1BMgnQAsgXAqgbQB7hOCGg8QEKh5ErgrQFug2DQEbQAeAyAWAZQAQASA3AzQAtAqAUAfQArBCAEBzQAIC/hYBuQghAogzAiQglAag9AfQhlAzilBHQjgBgguAVQg7AZg2AcIg4ArQhbBMhMCJQgcAzgfBIIg2B8QgQAkgLATQgRAegTATQgWAXgcALQgfAMgdgGQgkgIggglQgcgggQgnQgvCOgJB1QgFBFAHBjIANCoQACAvgFAdQgHApgXAZQgYAagqAHQgNACgNAAQgZAAgagHg");
	this.shape_15.setTransform(-62.7024,-32.4521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF1C1C").s().p("AxyNJQgsgmgSg4QgQgxADg+QADguANhDQAdiOAyiNQgaAUgggVQgfgVgEgiQgDgdAPgiQAKgVAZgkQBtieBAhMQBoh9BshIQAUgOAJgHQAOgOAFgOQAEgLAAgRIAAgdQADglAegiQAWgaApgcQBrhICLg8IAigOQC4hTDFgYQBSgJBagLQDHgXDAA5QAcAJAcAKQBaAIBYATQC6AnBgBWQA9A2AcBKQAdBPgWBIQgFARgQAnQgPAjgFAVQgIAiAEA5QAFBKgBATQgEBIgpBDQgmA/g+AvQhmBOisAjQhmAVieANIheAHQixALiuAdQiiAbiIBZQgbASgWAZQgpAugoAyIgTAXQgTAUgRANQguAkgugIQgxgIgog4QgVgdgNghQhqBghhBoQgxA1geAXQgxAkgvACIgGAAQgzAAgtgmg");
	this.shape_16.setTransform(-33.0167,-74.4238);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF1C1C").s().p("AIiOOQhvhGhJhmQhjirhLi5QgYg7gggzQhoi3jDg6QiogwiiBEQgmAIgoACQhSADg8g5QhIhDAShjQhjBAhpAyQhdAshlAYQhMAUhAglQgfgQgCgnQgFhnA+hWQBmiMCPhhQB/hXB1hmQgugNALgzQAJgmAegbQAsglAzgaQCrhDC0gqQC7gtC/ACQDMABCrBtQAxAgAuAkQBnBRB0A4QCfBOBuCLQBUBqAuB+QAkBjA2BZQBbCRAgCnQATBggSBgQgiC7hSCsQhXC4jOASIgiAAQi5AAighjg");
	this.shape_17.setTransform(-3.4933,-61.5604);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF1C1C").s().p("Aj+TDQhQgTgsgxIgdgmQgRgYgNgMQgZgVgqgNIhKgTQhCgQgyghQg5gkgcg0QgkhAABhqQAAiCAqhdQAZg2AngoQAqgrAzgVQAngPBIgKQBSgLAfgJQBagaBEhMQBBhKAWhgQAVhagVhiQgUheg1hTQhiiYi+hfQhAgegfgQQg2gcghgdQg2gvgCgzQgCgeASgbQALgSAQgLIghgNQgsgVgmgjQgsgogRgqQgKgZABgZQABgcAMgVQAPgbAkgVQBAgoBVgJQBMgIBUASQA7AMA4AWQAyAUBpA5IAzAdQANgRAUgLQAXgNAcgDQANgCATADQBxgEClBlQC2B+B4DLQBDByAkCAIACAHIA7CVQAjBYATA+QA0CtgWCGQAbgUAlANQAkAMASAfQAPAbADAmQACAcgFAqQgZCwhgCVQhkCaiWBUQgSALgPAEQgmApg3AoQglAahNAvQhRAygpAWQhFAlg7AWQhgAjhXAAQgxAAgtgLg");
	this.shape_18.setTransform(48.5721,-28.22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF1C1C").s().p("Ai9PuQhygLhqgvQi0hOiRiEQhHhCgohXQgJgTgHgUQgGgSgDgTIgngYQhbhlAPiLQAGg0ARgyQAviHB2hSQCqh5C/BXQBFAfBEAhQBuA/B8AZQAbAHAegHQBAgOAvgqQALgJAFgOQAhhXgZhbQgDglAHglQACgLAIgKQA3hGBNAvQAwAdAWAyQAbjKhFjCQgxiKAHiRQABgZAPgSQAzg7BKAkQBCAgASBIIA3DbQAMAzAiAoQBXBmBGB0QBKB8AQCSQAMB2gpBvQAlhCA/ghQAIgEAJADQBCARACBIQADCchCCOQg0BuhGBhQiIC5jbA1QhjAXhmgGQgRA6gyAZQiFAtiKAAQgxAAgxgFg");
	this.shape_19.setTransform(28.721,-7.1278);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF1C1C").s().p("ABqL8QjBgFi1g9Qh5gqhvhDQgjgWgfgYQgegXgxgrQg2gxgYgTQhjhJgwgnQhThEgkhEQgVgqgLg0QgZjEA1jBQALgoAWgjQBRh/BTh3QANgPAPgOQA9g6BNgXQBPgWBSASQBUATA7A3QAeAdAnA4QAwBFARAVQAoAwBBAuQAnAdBQAwQBVA0A1AUQBRAeBDgLQAYgEAigMIA5gUQBIgXAuAUQAiAPAUAkQAJAQAFARQBBhXAXhqIAIgoQAGgWAHgQQAPgjAggVQAggWAkAEQBBAHAyBbQA9BwAJCDQAJCCgsB3IgPAmQgHAWAAASQgBAMADARIAFAeQANBQggBWQgcBOg7BFQhABKhVAyQgdASgjAPQisBJi5AfQhCALhEAAQgeAAgggCg");
	this.shape_20.setTransform(-1.6097,31.9752,1,1,-6.4429);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF1C1C").s().p("AhyN4QhZgUh5gwQhJgegqgWQiKhFhhhsQhhhrgmh9IgGgGQgJgJgKgSQgNgVgFgHQgMgPgWgRIgngdQhWhHgbifQgViAAXh7QAYiCBGhlQAigxAsgqQAggdBFgyQBFgzAfgdIADgDQA0hQBWgwQBagzBjABQBjACBXA4QBYA4ApBaQAOAeALAuIAVBOQArCRBgB5QBgB5CCBMQAjAUALAIQAZARAMAUQATAdgDAsQgCAagKAqQAdAHAjACQAwAEAigHQAtgIA5ghQA/goAggSQBSgtA4ASQAnANAYArQAVAmAEAwQADA6gRA2QgaBNhBBBIgbAaQgPAQgJANQgMASgLAdIgRAxQgMAfgRAbQioDvkXgSQhXAAhXgKIgBAAQAEARgJASQgJARgQALQgYARguAGQgfAEghAAQhIAAhQgTg");
	this.shape_21.setTransform(-14.5536,9.8599);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF1C1C").s().p("AgGPlQihgWiPhqQiHhlhViXIglhCQgXgkgZgWQgUgSgwgaQgwgagVgSQhLhEgIigQgGiBAWh5QAXh/A1hwQA3h0BUhdQBYhgBsg8IAPgHQAhgbAqgoQBThOAjgbQAYgTAagQQCvhhDGgNQC+AACcBuQAtAjANAoIAIAaQAEAQAEAKQAIAPAQAPIAfAYIAEAEIAaAUQB6BigOCXQgNCHhdBgQhABAhlAnIkABjQhKAmgZBoIgIAjQgCAfAGAdQANBBA5A7QAyA0A6AUQAjAMA3ACIBdADQA0ADAnARQAvAVAVAlQAZAtgRA4QgRA1grAjQgmAeg4ARQgoAMhBAKQg2AHguADQgLA2goAwQgnAug4AbQhIAjhcAAQgjAAgkgFg");
	this.shape_22.setTransform(-47.1246,-20.4191,1,1,-14.9983);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF1C1C").s().p("AmONEQg0gbgrgqQjjjeAtk1IAGgqQg2BUhVAoQgbAMgagPQg7gggDhHQgKkFCUjbQAWghAVgiQgcipB0h9QCmi0DxgjQDqgkDrADQB9ABBuA3QB4A6BRBpQANARASAMIAlAdQCfB8AjDBQAOBOgYBMQg8C7i3BNQhfAohkAhQh3AnhrA9QgkAUhHAKQhHAJgPhjQgDgQAAgQQhAAIhUBmQhUBmAxBsQAxBsAABJQgBBJhSA9QglAcgyAAQg+AAhSgrg");
	this.shape_23.setTransform(-21.4518,-59.0027);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF1C1C").s().p("AFoNoQgngngjgrQg8hKhRgzQgVgNgKgVQg2hrgUh3QgQhfg+hLQhjh3icAJQhCAGhFAJQgYgGgTgQQgnggASguQAbhEBFgiQA1gYAfgvQgngjg2APQiuAuifBRQhsA1hygeQhGgSgWhCQgchRAbhTQA4ixCdhkQhQhDBChZQAkgyA5gZQDqhrEBACIBMg2QC3hCC6A9QC+A+CGCZQB9CPCTB7QCOB3BPCoQA9CBALCPQAPDAgxC7QguCyiCCFQhZBch6AmQgzAQguAAQhoAAhShRg");
	this.shape_24.setTransform(36.6769,-68.64);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF1C1C").s().p("AgqScQhFgOhEg0QiMhegKiiQgDg1AIg2QAbi7BjikQAIgMAFgOQAth8gWiIQgVh9hlhOIiwiJIgBAAQg4g2gFg2QgCgkAUgjQAUggAhgWQAsgcA7gGQiQhBjUAIQg5ADgcAAQgxAAgkgGQgtgJgjgWQgngZgSgkQgUgrAKg0QAKgxAhgmQA3hABxggQBsgfCWgBIATAAQgNgKgKgMQgagegDghQgEglAYgjQAXghAlgSQA2gaBjAEQEiAND3CPQEFCXB8D1QAWArAMAQQAWAfAbALQATAHAggBQArAAAJABQBgAKBGCGQBJCKAWCnQAUCbgaCmQgVCEgxBUIghAzQgWAfgLAUQgNAZgPAlIgYBAQgrBshIBZQhKBchgA7QhiA9hyAWQg8AMg7gBQgrAXgrAOQg3ASgzAAQgdAAgcgGg");
	this.shape_25.setTransform(44.2208,-35.8858);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF1C1C").s().p("Ao1SIQi/gqiQiFQhzhpABhrQAChqAqhKQAqhJBQgjQBQgkAmgzQAngzBGgeQBHgeCGADQDGAFCPiKQAggeAagjQASgZAKgfQBBjAhOi6Qg8iQAbiWQAKg4AvggQApgcAyAKQgGg4gwgjQgcgUgWgbQhXhsAkh/QAIgeAcgQQBDgqBOAdQDoBSCFDQIAOAXQBMC2CTCCQCaCIAqCNQApCNAcBqQAcBog/BmQg+BmgFByQgFBygpCqQgoCrijB9QijB9hpgJQhqgKhvAgQiTAii/AaQhPAMhQAAQh3AAh3gbg");
	this.shape_26.setTransform(42.6301,-4.0922);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF1C1C").s().p("AqoPOQmijDAJnYQgdi6Ayi0QA4jIDAhPQAkgPAogBIAcACQCgAPBRB8QBCBhB8ArQBSAXBZgWQAxgLA2gaQBkgxBQhSQBQhSAuhnQAuhmAJhzQAIhygehsIgLgpQgGgXgBgWQAAgLABgMQALhiBdAEQAZABAZAGQDLBCAxDOQAIAiAaAOQABABADgEQAMgMAggDQAlgEAwBBQArA6AZBMQAVBAAMBTQAGAxAIBdQAJAAAIADQAXAFATASQARARAKAXQAPAjABA8QABCFgsCJQg6CxhzCTQh0CSioBXQiEBFiQAkQhEAQg0AnQjmDCkLAAQi5AAjLheg");
	this.shape_27.setTransform(20.2832,18.8341);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF1C1C").s().p("ABbOMIhVhvQgng1g8AOQguALgvABQjsAFimipQgjgigfgoQgug6gvg4Qg4hEhWgbQhqgjgihpQgqiBAHiGQAGhzAghrQA4iSBFiOIATgnQBMitCdhmQAlgZAqgNIAtgMIAZgEQBpgRBdAzQBTAtA/BJQA5BAA7A/QBFBJAZBhQAkCNBPB1QAnA5A/AbQBMAgBTgOQBcgPAaBVQAQA1gnAkQCmgTCmgPQAcgDAcAGQCGAXASCEQAHAyghAoQg3BDArBMQAMAXgCAaQgLB9hcBZQhEBDixCEQiwCEi9ACIgRABQiuAAgqg4g");
	this.shape_28.setTransform(-30.6387,22.7311);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF1C1C").s().p("ADsOSIgYgCQiSACiNghQgtgLgqgSQiyhLh9iTQg0g9glhIIgDgGQhYi2gKjJQhUAdgshXQhNiYAhitQAsjjCQizQCOixDbgwQBzgXBtAqIAgAMIAIgFQAWgMAYgIQDRgzB6C0QBWB+AJCPQANDNh6CiQgxBBgUBNQgMAyABA2QAAASAGARQA4CcCWAuQApANAoAKQAhAKAbAFQA/AMARAiQAMAYAAAZQAAASgFAPQA4ALAhAbQBFA4gzA8QgzA9hlAJQhkAKhCgGQgIgCgIABQAVCujnAAIgkgBg");
	this.shape_29.setTransform(-64.4304,-15.2482);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF1C1C").s().p("AhnNJQiohphoinQgig3gZg7QiAgwgUiMQgFglAKgkQhkhXARiJQAZjUCWifQAwgzA2grQBLg9BZglQAMgFgDgaQgDgaAlguQAkgvBig5QBmhDDFAvQBjhKBqAMQAwAIAmAgQBpBbAJCNQANDChrCjQg+BfhZBGQieB9hAC/QgSA3gLA4QgeCKBKB6QAwBSglBZQgmBehjASQgVADgUAAQhNAAhFgsg");
	this.shape_30.setTransform(-72.0217,-62.5231);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF1C1C").s().p("ApUGyQgogRgVggQgUgegBgoQAAglAOgkQAMggAZghQAQgWAfgjQgegRgMgmQgLgjAKgjQAOg1A+hCQA8g/A2gmQBEgvBFgOQAggHBWgDQBMgEApgNQAogNBGgvQBGgvApgOQArgOA4ABQAjAABDAIQAzAGAZAGQAqAKAbAUQASANAKAQQAMATAAATIgCASQAAAKAEAGQAFAHATAHQAvASAcA0QAYAtAGA8QAKB1g0BSQgoA/hOAnQhDAihXAMQg0AHhsADQhpADg2AIQhcAOhyAsQglAOiiBGQgvAVgdAJQgqAOglABIgHAAQgnAAgigOg");
	this.shape_31.setTransform(-35.2876,-115.4692);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF1C1C").s().p("Al8EvQgsgCgZgLQgRgIgMgNQgNgPgDgQQgFgaAUgjQAZgmAJgUQgrgagYgmQgbgrAJgqQAHgfAcgdQAUgUAlgaIAXgRQANgKAGgLIAPgcQANgSAkgRQBXgoBvgQQBbgNB0AEQA3ACAaALQAUAJAOAPQAOARACATQABAIgBAWQgCATAEAKQAEAOAPAKQAJAHATAKQBSAoAnAWQBBAmArApQAeAcAMAbQARAngOAuQgNArgiAeQg3AwhqAQQhRALiFgFQiogHgvACIiHAJQg7AFgsAAIgggBg");
	this.shape_32.setTransform(32.3838,-127.1774);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF1C1C").s().p("Al8FrQhKgNAIg/QACgNALgHQAygeA+gCQDNgGCXiFQAXgVAXgYQA0g2BJgaQBwgkA5BlQAPAagFAfQgXCjigA9QhfAkhmANQhbAOhcAAQhlAAhlgRgApKCeQgngWAAgfQAAggAngWQAngWA4AAQA3AAAnAWQAoAWAAAgQAAAfgoAWQgnAWg3AAQg4AAgngWgAIgA2QgRgMAAgUIABgLQAAgGgBgEQgDgHgMgFQgOgHgDgEQgIgIgBgVQgCgcADgOQAFgXAQgMQAMgHAcgCQAjgDANAOQALAMgCAgQgBAQADAIIAKAPQAQAXgKAaQgFALgNAQQgOASgLAGQgJAEgHAAQgLAAgJgHgACZi1QgLgMAAgQQAAgQALgLQAMgLAQAAQAQAAALALQALALAAAQQAAAQgLAMQgLALgQAAQgQAAgMgLgAFHjWQgcgcAAgoQAAgoAcgcQAcgdAoAAQAoAAAcAdQAdAcAAAoQAAAogdAcQgcAcgoAAQgoAAgcgcg");
	this.shape_33.setTransform(89.8961,-148.0981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.6,-196.1,482.4,393.4);


(lib.paintbrush_color_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// blue_paint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhgH4QlqgvBViYQmXgiA7jtQBBkJCFhbQCEhcB9gHQB+gHCMg4QCNg4CgA4QCfA3B+B6QB+B6ARD6QARD6kuAwQiPCWkFAAQhAAAhIgJg");
	this.shape.setTransform(-168.6852,-103.6326);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Au3GqQipiTBsgsQBsgsB+jKQB+jLEyiiQEyiiFlgLQFlgLELD/QELD+ljEdQkeDoi8hFQAJCPrBAHQhCAEg9AAQlqAAiRh9g");
	this.shape_1.setTransform(-123.0061,-114.3859);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AsXKIQg4gSAWhPQAXhPAegmQiaAJiWgKQgegCgRgEQgagHgPgPQgRgRgDgcQgDgZAJgbQAJgaBqhoQBmhjD7igQhagegPgKQgVgOgGgTQgNgsA7g2QBOhHBfhCQHwksJCAnIA3AGQA7AJA7ANQGrBdBjE9QBkE8i0ChQi0CglOghQmlgNmACQIhAAaIg2AUQiDAwh3AYQhEAOgvAAQgjAAgYgHg");
	this.shape_2.setTransform(-70.8118,-116.3967);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AIpKwQhFgUg7gjQgagQgngcIg/gtQgsgeg2gcQizhXi8g8Qhwglhkg8QhDgpgPg5IgGgaQgDgRgFgJQgNgZgigOQgjgPgzgCIhZABQhGABhMgQQg/gNgMgjQgMggAfgtQAzhJBig2QA/gjB7guQhBgEidAMQiNAMhQgLQg3gIgegUQgUgNgMgTQgNgUAAgWQABgwBGgxQB4hSCdgxQHdiDHlBiQAXAFAYAAIAKgIQAWgSAogJQB4gdB2AoQAjAMApAVQAXAMAxAcQBUAxAuAeQBGAuAzAtQCCByAqCEQANAqAIA4QAEAhAFBCQAHBnABAwQACBUgJBDQgWCrhfBnQhSBZiCAdQg3AMg2AAQhGAAhGgUg");
	this.shape_3.setTransform(8.8673,-120.0363);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AIXPWQjChIhii3QhYiphShnQhRhohahYQhbhYiLhYQiMhYgigpQgigpAygkQA+grBLgSQiqhpjLg0QjKg1ijgKQilgJgKhBQgLhBCNhWQCMhYBIgIQhCgYg9gjQgigTARgiQASglAjgSQC1hgDMgOQHqgcHYCGQEUBPDhCxQClCDB1CuQAzBOAiBRQBGCtgMC8QgMDAhnCgQgkA5geA5QgTAjgTApQg2B1imBnQhTA1hZAAQg5AAg7gWg");
	this.shape_4.setTransform(122.65,-61.55,1,1,0,0,0,83.2,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AIETiQi+ghiRh/QiWiCgyjIQgxjBhDi7QgVg6gkgwQhsiNiKhzQiFhug8igQghhYBEg8QALgJAOgHQgdgwg7gwQiUh7h8hDQh8hChOg1QhNg0gdhGQgdhGCIgtQCFgsDOAxIBJARQgrhqAegrQAegqBRgYQBRgYD2AxQD2AxDkB6QCyBRCiBrQCaBmB8CKQB4CFA4CqQAqCTAZCZQAFAgAPAfQAhBGAzA4QAdAkAOAtQA1CyAFC8QAFDJhyCpQhxCni+BJQg+AZhDAIQgnAFgnAAQg3AAg3gKg");
	this.shape_5.setTransform(78.4185,-70.0655);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AAAARQgGgBgHgDIgNgFIAAgIQgBgEACgDIADgCIAGgEQACgCADgBIAGAAIATAAIAEAAIACADIAHAKQABADgCAFIgDAIIgMACIgKACIgBAAg");
	this.shape_6.setTransform(28.9617,-194.345);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AgIWVQhUgZg4hDQgdghgZglQhAhfgjhuQhbgDhKg1QhyhSgPiOQgTiuAhiwQAuj5h2jfQhTidhPiMQhOiMAQiIQARiJBdApQBeAoBDBpQgshwhjhvQhjhvhciRQhlifA+ipQAMghAggSQApgYAsAHQBnAOBYA3QCdBgByCSQgSg7gZg1QgkhLAvhAQApg2BEgHQBJgLBDAiQDBBlCKCsQB9CcB5CdQCaDJBwDlQAxBjAdBqQAvCwAHC2IACA2QAsgiAuAYQBSArAPBeQASB7gNB6QgPCRhoBiQhBA8hOghQgwCYhcCCQimDqkUA/QghAHgiAAQgwAAgvgPg");
	this.shape_7.setTransform(140.3641,-23.0727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AnEXnQikhBhKibQgQghgHgoQgXiHhMh1QgrhggThnQgJg1ABg3QAHjIBOi1QAfhKAnhEQAmhDAbhIQALgeAGgaQAPhGgHhfIgTinQgKhiAHhGQAKhbApg/QB5ipiPjEQhch9giiWQgHhBAdgsQASgbAfgRQAdgQAjgEQA7gHBIAdQAvAUA1AkIArAgQArgkBDADQA4ADA9AcQBOAlBQBHQA0AtBWBbQCwC6BbB/QCFC3A1CxQASA7AjC7QAeCaAlBXQALAZAtBWQAkBFAOAuQARAyAGA+QAFAwAABDQAABMgGA3QgGAugLAoQgnCjiZBBQgjAOgkAFQgvAIgrAUIgdAOQgwC/iaB6QiPBwilBGQiYBKioAPIgDAAQgzAAgugSg");
	this.shape_8.setTransform(150.0898,5.8912);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("Am/XEQhKgWg6gxQgpghgUglQgRgigJgyQgMhFAHhEQgiADgVABQgmABgfgHQgkgIgcgUQgegWgMgfQgFgNgIg8QgGgogQgUQhCgiAAhFQgBirBoiKQAqg/A4hCQAWgaAfgiQgIgIgGgLQgMgUgEgaQgFgkANg8QAYhpAzhcQBAiNCEhEQAlgSAmANQAOAFAOACIARgNQB2iSA2i4QAUhCAchAIADgFQANgYAOgQQASgTAWgJQAZgKAWAFQAfAGAaAhQgXivgyirIgjh5QgShFgFg1QgHhOAmgdQAZgUApAHQAZAEAlAWQBRAtBIBEQAeAdAmArQAjAoAhAqQgBgbAJgRQAMgWAdgHQAagHAaAJQAXAJAWATQAQAOAUAZQDeEIBkFUQBkFUgrFWQAWgMAcAMQAZAKAPAYQAMAUAFAdQADATAAAhQAEFpinDNQgyA+g9AkQhFAohFgFQgQgBgOgDQhFBrheBbQhnBliNBUQh4BIibBBQg1AWghALQgxAQgpAEQgWADgWAAQg1AAg1gQg");
	this.shape_9.setTransform(130.7781,30.6649);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AoMT8Qiigbg7iWIgKgXQgGgOgJgHQgJgIgPgEIgbgGQg0gKhKgiQhjgtg+gyQhPhAgehPQgNgkgIg3QgaiwAzh0QAohcBehGQBPg8BxgpQA1gUCZgrQBegaBAgXIAVgLQAogUAtghQAbgTA1gqIBGg5QAlghAageQBDhcAigsQA+hOA/gWQAYgIAygGQAzgHAXgIQA+gUBAhKQCcizBEk4QAKguAFgQQAKgjAOgYQASgdAbgRQAdgTAeADQA6AEAvBOQArBHAXBaQAKgKALgJQAzgqA2AJQBDAKA4BaQBaCLAnDbQAlDRgPDTIgKByQgFBDADAvQACAfANBWQALBKAAAsQgBBpgzBsQgsBfhQBZQhfBqhiAxQgvAZhMAXQhVAYgqAOQhkAiiHBGIjHBqQiqBhi/AnQgsAIgrAKIgbAHQhNAWhQAAQgrAAgsgGg");
	this.shape_10.setTransform(81.5651,71.3925,1,1,2.9765);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AsWQJQgTgHgUgCQi+geichtQj9iwg9kxQhAk7CrkIQAXgjAggdQB2hmCZAbQBOAOBIAlQA5AfAyAuQEaBGERheQBjgjBYg4QCLhaCegnQAigJAgAMQA/AXBCACQAsABAeglQAdglAfgkIAdglQBHh5BmhcQAkggAxAAQBdAAAsBUQAqBNgHBaIgFBIQBnjOAkjkQANhPAxg8QAwg6BDAeQAtAWAUAvQA6CGAICTQAOENAWELQAKB9gzByQg2B4h3BDQhAAkg3AxQhlBZhbBlQi9DSkGBtQh2Ayh5AiIgcAKQkaBjkrAqQhaAMhbgBIgsABQiAAAh3gxg");
	this.shape_11.setTransform(70.2105,86.6265);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("AkXOaQgugDgsgEQlKgjlLiEQiphGiah9QhMg+g1hSQgOgWgKgYQgYg4gQhsQgTh2gQgvIgDgJQgigygSgyQg1iPAujNQAMg2AQglQAUgqAqgwIATgVQCAkSEGgVQCSgQB5BVQBAgVBEAGQBPAIBMAqQBGAmA9A+IAuAzIAtA1QA+BHBcBXIBAA7QAoAaA1ARQAzAQBPALQBRAMA2gBQArgBBHgKQBTgLAegCQAjgDAzAAQAvAAAXACQAoADAdAKQAvARAQAgQALAUABAcQAAAPgDAQQA5gTA3gaQAjgRByhAQBcg0A8gWQBJgcA5ADQAjACAeANQAgAPAUAZQAjAvgHBHQgDAigNAkQAfgMA0glQA+gtApAIQAdAGAVAbQATAYAFAgQAHAvgbBJQgsB3hHBkQhLBphjBHIhaA9Qg3AlgeAfQgbAcgpA8QgsA/gXAaQhyCAjmAmQhGAMh7AJQiNAKg2AHQg6AIhyAXQh0AXg4AIQheANhgAAIg6gBg");
	this.shape_12.setTransform(19.7669,96.5558);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AEURKIjagZQiEADiOgkQhmgZhpgLQjTggikhgQhmg7hOhRQhShVgvhlQgOgegfhRQgbhHgVgnQgMgWgWghQhtiGhRiYIgHgQQhLi4gIjHQgCgmgHglQgkjFBhiuQAcgzAkgpQAggkAngcQBlhKCAgMQCCgNBtA3QAQAJAkAVQAhATATAJQBCAgBdAKIACABQCFgEB4A1QAtAUAfAmQBVBnApCBQA9C8CQCFQAnAjAvAeQCXBhC6AeQA4AKByANQBjAOBAAdQAgAOATASQAYAWABAbQAAAVgMATQgMASgTAMQgaAQg3AKQh1AWhkANQBrAOB2gEQC2gGDkgzIBZgTQAzgKAngDQAzgDAoAOQAvARARAmQAdBBhNBgQhsCIiSBpQiPBminBAQhbAjhgAXQBJAGAsAIQA4AKATAYQAOASABAZQAAAXgMAWQgRAfgwAhQh7BRisAYQhKALhcAAQg4AAhAgFg");
	this.shape_13.setTransform(-22.5136,68.0036);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AFpUgQiugaijhKQihhKiHhxQg6gxhAhDQgqgshIhQQhEhMgggrQg0hFgahBQglhbgIigIgEg9IgPivQhMgNgjhRQgTgsgPgtQgph0AFh9QADg9ANg6QAShMAphCQBsisCuhrIAdgRQBDgmAjgXIALgIQAFgLAJgOQByifCZhNQBSgpBXgMQBdgNBVAUQBBAPAxAiQA3AmAWA1QAKAWAHAkQALAwADAMQAOAwAqBGQA1BYAMAaQAtBhgFBtQgFBug0BcQgTAggmAyQgtA8gOAVQgeAtgWAyQgLB2AfB6QA2DRCZCIQA6AzAPARQAkArABAqQABA3g0AoQgtAkhAAKIgTABQAWAcAVASQAVARAhASIA4AeQBtA8BUBYQBaBfgTBPQgSBJhuAsQh+AziaAAQhNAAhTgNg");
	this.shape_14.setTransform(-87.4468,15.0273);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("ApDUtQhPgWhGhMQgwg1g7hjQgjg7gTgqQgghGgUheQgNg+gNhuQgJhLABglQAAgaAFghQgsApgqAFQgZACgXgKQgYgLgPgUQgYghgChBQgDhfAbhxQAMg0AXhDQBDiuAzi0QAVhKAQhLQANhCAag/QBKixCYh2QBDg1BMgnQAsgXAqgbQB7hOCGg8QEKh5ErgrQFug2DQEbQAeAyAWAZQAQASA3AzQAtAqAUAfQArBCAEBzQAIC/hYBuQghAogzAiQglAag9AfQhlAzilBHQjgBgguAVQg7AZg2AcIg4ArQhbBMhMCJQgcAzgfBIIg2B8QgQAkgLATQgRAegTATQgWAXgcALQgfAMgdgGQgkgIggglQgcgggQgnQgvCOgJB1QgFBFAHBjIANCoQACAvgFAdQgHApgXAZQgYAagqAHQgNACgNAAQgZAAgagHg");
	this.shape_15.setTransform(-62.7024,-32.4521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AxyNJQgsgmgSg4QgQgxADg+QADguANhDQAdiOAyiNQgaAUgggVQgfgVgEgiQgDgdAPgiQAKgVAZgkQBtieBAhMQBoh9BshIQAUgOAJgHQAOgOAFgOQAEgLAAgRIAAgdQADglAegiQAWgaApgcQBrhICLg8IAigOQC4hTDFgYQBSgJBagLQDHgXDAA5QAcAJAcAKQBaAIBYATQC6AnBgBWQA9A2AcBKQAdBPgWBIQgFARgQAnQgPAjgFAVQgIAiAEA5QAFBKgBATQgEBIgpBDQgmA/g+AvQhmBOisAjQhmAVieANIheAHQixALiuAdQiiAbiIBZQgbASgWAZQgpAugoAyIgTAXQgTAUgRANQguAkgugIQgxgIgog4QgVgdgNghQhqBghhBoQgxA1geAXQgxAkgvACIgGAAQgzAAgtgmg");
	this.shape_16.setTransform(-33.0167,-74.4238);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AIiOOQhvhGhJhmQhjirhLi5QgYg7gggzQhoi3jDg6QiogwiiBEQgmAIgoACQhSADg8g5QhIhDAShjQhjBAhpAyQhdAshlAYQhMAUhAglQgfgQgCgnQgFhnA+hWQBmiMCPhhQB/hXB1hmQgugNALgzQAJgmAegbQAsglAzgaQCrhDC0gqQC7gtC/ACQDMABCrBtQAxAgAuAkQBnBRB0A4QCfBOBuCLQBUBqAuB+QAkBjA2BZQBbCRAgCnQATBggSBgQgiC7hSCsQhXC4jOASIgiAAQi5AAighjg");
	this.shape_17.setTransform(-3.4933,-61.5604);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("Aj+TDQhQgTgsgxIgdgmQgRgYgNgMQgZgVgqgNIhKgTQhCgQgyghQg5gkgcg0QgkhAABhqQAAiCAqhdQAZg2AngoQAqgrAzgVQAngPBIgKQBSgLAfgJQBagaBEhMQBBhKAWhgQAVhagVhiQgUheg1hTQhiiYi+hfQhAgegfgQQg2gcghgdQg2gvgCgzQgCgeASgbQALgSAQgLIghgNQgsgVgmgjQgsgogRgqQgKgZABgZQABgcAMgVQAPgbAkgVQBAgoBVgJQBMgIBUASQA7AMA4AWQAyAUBpA5IAzAdQANgRAUgLQAXgNAcgDQANgCATADQBxgEClBlQC2B+B4DLQBDByAkCAIACAHIA7CVQAjBYATA+QA0CtgWCGQAbgUAlANQAkAMASAfQAPAbADAmQACAcgFAqQgZCwhgCVQhkCaiWBUQgSALgPAEQgmApg3AoQglAahNAvQhRAygpAWQhFAlg7AWQhgAjhXAAQgxAAgtgLg");
	this.shape_18.setTransform(48.5721,-28.22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("Ai9PuQhygLhqgvQi0hOiRiEQhHhCgohXQgJgTgHgUQgGgSgDgTIgngYQhbhlAPiLQAGg0ARgyQAviHB2hSQCqh5C/BXQBFAfBEAhQBuA/B8AZQAbAHAegHQBAgOAvgqQALgJAFgOQAhhXgZhbQgDglAHglQACgLAIgKQA3hGBNAvQAwAdAWAyQAbjKhFjCQgxiKAHiRQABgZAPgSQAzg7BKAkQBCAgASBIIA3DbQAMAzAiAoQBXBmBGB0QBKB8AQCSQAMB2gpBvQAlhCA/ghQAIgEAJADQBCARACBIQADCchCCOQg0BuhGBhQiIC5jbA1QhjAXhmgGQgRA6gyAZQiFAtiKAAQgxAAgxgFg");
	this.shape_19.setTransform(28.721,-7.1278);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("ABqL8QjBgFi1g9Qh5gqhvhDQgjgWgfgYQgegXgxgrQg2gxgYgTQhjhJgwgnQhThEgkhEQgVgqgLg0QgZjEA1jBQALgoAWgjQBRh/BTh3QANgPAPgOQA9g6BNgXQBPgWBSASQBUATA7A3QAeAdAnA4QAwBFARAVQAoAwBBAuQAnAdBQAwQBVA0A1AUQBRAeBDgLQAYgEAigMIA5gUQBIgXAuAUQAiAPAUAkQAJAQAFARQBBhXAXhqIAIgoQAGgWAHgQQAPgjAggVQAggWAkAEQBBAHAyBbQA9BwAJCDQAJCCgsB3IgPAmQgHAWAAASQgBAMADARIAFAeQANBQggBWQgcBOg7BFQhABKhVAyQgdASgjAPQisBJi5AfQhCALhEAAQgeAAgggCg");
	this.shape_20.setTransform(-1.6097,31.9752,1,1,-6.4429);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AhyN4QhZgUh5gwQhJgegqgWQiKhFhhhsQhhhrgmh9IgGgGQgJgJgKgSQgNgVgFgHQgMgPgWgRIgngdQhWhHgbifQgViAAXh7QAYiCBGhlQAigxAsgqQAggdBFgyQBFgzAfgdIADgDQA0hQBWgwQBagzBjABQBjACBXA4QBYA4ApBaQAOAeALAuIAVBOQArCRBgB5QBgB5CCBMQAjAUALAIQAZARAMAUQATAdgDAsQgCAagKAqQAdAHAjACQAwAEAigHQAtgIA5ghQA/goAggSQBSgtA4ASQAnANAYArQAVAmAEAwQADA6gRA2QgaBNhBBBIgbAaQgPAQgJANQgMASgLAdIgRAxQgMAfgRAbQioDvkXgSQhXAAhXgKIgBAAQAEARgJASQgJARgQALQgYARguAGQgfAEghAAQhIAAhQgTg");
	this.shape_21.setTransform(-14.5536,9.8599);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AgGPlQihgWiPhqQiHhlhViXIglhCQgXgkgZgWQgUgSgwgaQgwgagVgSQhLhEgIigQgGiBAWh5QAXh/A1hwQA3h0BUhdQBYhgBsg8IAPgHQAhgbAqgoQBThOAjgbQAYgTAagQQCvhhDGgNQC+AACcBuQAtAjANAoIAIAaQAEAQAEAKQAIAPAQAPIAfAYIAEAEIAaAUQB6BigOCXQgNCHhdBgQhABAhlAnIkABjQhKAmgZBoIgIAjQgCAfAGAdQANBBA5A7QAyA0A6AUQAjAMA3ACIBdADQA0ADAnARQAvAVAVAlQAZAtgRA4QgRA1grAjQgmAeg4ARQgoAMhBAKQg2AHguADQgLA2goAwQgnAug4AbQhIAjhcAAQgjAAgkgFg");
	this.shape_22.setTransform(-47.1246,-20.4191,1,1,-14.9983);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AmONEQg0gbgrgqQjjjeAtk1IAGgqQg2BUhVAoQgbAMgagPQg7gggDhHQgKkFCUjbQAWghAVgiQgcipB0h9QCmi0DxgjQDqgkDrADQB9ABBuA3QB4A6BRBpQANARASAMIAlAdQCfB8AjDBQAOBOgYBMQg8C7i3BNQhfAohkAhQh3AnhrA9QgkAUhHAKQhHAJgPhjQgDgQAAgQQhAAIhUBmQhUBmAxBsQAxBsAABJQgBBJhSA9QglAcgyAAQg+AAhSgrg");
	this.shape_23.setTransform(-21.4518,-59.0027);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AFoNoQgngngjgrQg8hKhRgzQgVgNgKgVQg2hrgUh3QgQhfg+hLQhjh3icAJQhCAGhFAJQgYgGgTgQQgnggASguQAbhEBFgiQA1gYAfgvQgngjg2APQiuAuifBRQhsA1hygeQhGgSgWhCQgchRAbhTQA4ixCdhkQhQhDBChZQAkgyA5gZQDqhrEBACIBMg2QC3hCC6A9QC+A+CGCZQB9CPCTB7QCOB3BPCoQA9CBALCPQAPDAgxC7QguCyiCCFQhZBch6AmQgzAQguAAQhoAAhShRg");
	this.shape_24.setTransform(36.6769,-68.64);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgqScQhFgOhEg0QiMhegKiiQgDg1AIg2QAbi7BjikQAIgMAFgOQAth8gWiIQgVh9hlhOIiwiJIgBAAQg4g2gFg2QgCgkAUgjQAUggAhgWQAsgcA7gGQiQhBjUAIQg5ADgcAAQgxAAgkgGQgtgJgjgWQgngZgSgkQgUgrAKg0QAKgxAhgmQA3hABxggQBsgfCWgBIATAAQgNgKgKgMQgagegDghQgEglAYgjQAXghAlgSQA2gaBjAEQEiAND3CPQEFCXB8D1QAWArAMAQQAWAfAbALQATAHAggBQArAAAJABQBgAKBGCGQBJCKAWCnQAUCbgaCmQgVCEgxBUIghAzQgWAfgLAUQgNAZgPAlIgYBAQgrBshIBZQhKBchgA7QhiA9hyAWQg8AMg7gBQgrAXgrAOQg3ASgzAAQgdAAgcgGg");
	this.shape_25.setTransform(44.2208,-35.8858);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("Ao1SIQi/gqiQiFQhzhpABhrQAChqAqhKQAqhJBQgjQBQgkAmgzQAngzBGgeQBHgeCGADQDGAFCPiKQAggeAagjQASgZAKgfQBBjAhOi6Qg8iQAbiWQAKg4AvggQApgcAyAKQgGg4gwgjQgcgUgWgbQhXhsAkh/QAIgeAcgQQBDgqBOAdQDoBSCFDQIAOAXQBMC2CTCCQCaCIAqCNQApCNAcBqQAcBog/BmQg+BmgFByQgFBygpCqQgoCrijB9QijB9hpgJQhqgKhvAgQiTAii/AaQhPAMhQAAQh3AAh3gbg");
	this.shape_26.setTransform(42.6301,-4.0922);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AqoPOQmijDAJnYQgdi6Ayi0QA4jIDAhPQAkgPAogBIAcACQCgAPBRB8QBCBhB8ArQBSAXBZgWQAxgLA2gaQBkgxBQhSQBQhSAuhnQAuhmAJhzQAIhygehsIgLgpQgGgXgBgWQAAgLABgMQALhiBdAEQAZABAZAGQDLBCAxDOQAIAiAaAOQABABADgEQAMgMAggDQAlgEAwBBQArA6AZBMQAVBAAMBTQAGAxAIBdQAJAAAIADQAXAFATASQARARAKAXQAPAjABA8QABCFgsCJQg6CxhzCTQh0CSioBXQiEBFiQAkQhEAQg0AnQjmDCkLAAQi5AAjLheg");
	this.shape_27.setTransform(20.2832,18.8341);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("ABbOMIhVhvQgng1g8AOQguALgvABQjsAFimipQgjgigfgoQgug6gvg4Qg4hEhWgbQhqgjgihpQgqiBAHiGQAGhzAghrQA4iSBFiOIATgnQBMitCdhmQAlgZAqgNIAtgMIAZgEQBpgRBdAzQBTAtA/BJQA5BAA7A/QBFBJAZBhQAkCNBPB1QAnA5A/AbQBMAgBTgOQBcgPAaBVQAQA1gnAkQCmgTCmgPQAcgDAcAGQCGAXASCEQAHAyghAoQg3BDArBMQAMAXgCAaQgLB9hcBZQhEBDixCEQiwCEi9ACIgRABQiuAAgqg4g");
	this.shape_28.setTransform(-30.6387,22.7311);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("ADsOSIgYgCQiSACiNghQgtgLgqgSQiyhLh9iTQg0g9glhIIgDgGQhYi2gKjJQhUAdgshXQhNiYAhitQAsjjCQizQCOixDbgwQBzgXBtAqIAgAMIAIgFQAWgMAYgIQDRgzB6C0QBWB+AJCPQANDNh6CiQgxBBgUBNQgMAyABA2QAAASAGARQA4CcCWAuQApANAoAKQAhAKAbAFQA/AMARAiQAMAYAAAZQAAASgFAPQA4ALAhAbQBFA4gzA8QgzA9hlAJQhkAKhCgGQgIgCgIABQAVCujnAAIgkgBg");
	this.shape_29.setTransform(-64.4304,-15.2482);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0000FF").s().p("AhnNJQiohphoinQgig3gZg7QiAgwgUiMQgFglAKgkQhkhXARiJQAZjUCWifQAwgzA2grQBLg9BZglQAMgFgDgaQgDgaAlguQAkgvBig5QBmhDDFAvQBjhKBqAMQAwAIAmAgQBpBbAJCNQANDChrCjQg+BfhZBGQieB9hAC/QgSA3gLA4QgeCKBKB6QAwBSglBZQgmBehjASQgVADgUAAQhNAAhFgsg");
	this.shape_30.setTransform(-72.0217,-62.5231);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0000FF").s().p("ApUGyQgogRgVggQgUgegBgoQAAglAOgkQAMggAZghQAQgWAfgjQgegRgMgmQgLgjAKgjQAOg1A+hCQA8g/A2gmQBEgvBFgOQAggHBWgDQBMgEApgNQAogNBGgvQBGgvApgOQArgOA4ABQAjAABDAIQAzAGAZAGQAqAKAbAUQASANAKAQQAMATAAATIgCASQAAAKAEAGQAFAHATAHQAvASAcA0QAYAtAGA8QAKB1g0BSQgoA/hOAnQhDAihXAMQg0AHhsADQhpADg2AIQhcAOhyAsQglAOiiBGQgvAVgdAJQgqAOglABIgHAAQgnAAgigOg");
	this.shape_31.setTransform(-35.2876,-115.4692);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0000FF").s().p("Al8EvQgsgCgZgLQgRgIgMgNQgNgPgDgQQgFgaAUgjQAZgmAJgUQgrgagYgmQgbgrAJgqQAHgfAcgdQAUgUAlgaIAXgRQANgKAGgLIAPgcQANgSAkgRQBXgoBvgQQBbgNB0AEQA3ACAaALQAUAJAOAPQAOARACATQABAIgBAWQgCATAEAKQAEAOAPAKQAJAHATAKQBSAoAnAWQBBAmArApQAeAcAMAbQARAngOAuQgNArgiAeQg3AwhqAQQhRALiFgFQiogHgvACIiHAJQg7AFgsAAIgggBg");
	this.shape_32.setTransform(32.3838,-127.1774);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0000FF").s().p("Al8FrQhKgNAIg/QACgNALgHQAygeA+gCQDNgGCXiFQAXgVAXgYQA0g2BJgaQBwgkA5BlQAPAagFAfQgXCjigA9QhfAkhmANQhbAOhcAAQhlAAhlgRgApKCeQgngWAAgfQAAggAngWQAngWA4AAQA3AAAnAWQAoAWAAAgQAAAfgoAWQgnAWg3AAQg4AAgngWgAIgA2QgRgMAAgUIABgLQAAgGgBgEQgDgHgMgFQgOgHgDgEQgIgIgBgVQgCgcADgOQAFgXAQgMQAMgHAcgCQAjgDANAOQALAMgCAgQgBAQADAIIAKAPQAQAXgKAaQgFALgNAQQgOASgLAGQgJAEgHAAQgLAAgJgHgACZi1QgLgMAAgQQAAgQALgLQAMgLAQAAQAQAAALALQALALAAAQQAAAQgLAMQgLALgQAAQgQAAgMgLgAFHjWQgcgcAAgoQAAgoAcgcQAcgdAoAAQAoAAAcAdQAdAcAAAoQAAAogdAcQgcAcgoAAQgoAAgcgcg");
	this.shape_33.setTransform(89.8961,-148.0981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.6,-196.1,482.4,393.4);


(lib.paintbrush_brushred = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// brush_shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AlHAiQgLhRAahJQA3gvA4gbQgmgLghgWQgTgNgTgRQB0AJEbg7IDmCCQAOBTgCBeQgDBcgVBnIgEATQh/BXiqAGIgjABQkHAAgjkSg");
	this.shape.setTransform(-15.7317,13.3858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("AiIDsQk1hJBDjNQAwiRCKhHQCBgGB7AUIFIBSQARDZhfCpQh0Akh7AAQhkAAhrgYg");
	this.shape_1.setTransform(-14.6148,7.1663);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.247)").s().p("ACqFRQgXALguANQhhAciQgXQi2hrg6jOQhak8EFhuQCMg7CZAPQBgA0BRBOQCnCegcDiQgFAbgJAcQg3CBiyCMQgBgsASgog");
	this.shape_2.setTransform(-17.1717,-5.2277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.247)").s().p("AjfDyQhmhIg3hgQAYiIBYh2QCljdD1BYQA7AVAsAuQC3C5g/D0QgZAbgdAZQh7BoiIAAQiDAAiQhhg");
	this.shape_3.setTransform(-3.5111,-12.2745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.247)").s().p("AhuFzQkAhKAljwIgCADQg/A9AMA8Qg9hSAciIQAvjLCkhoQCkg2C4A4QEXBTACDcQACDajkB8Qh+BFigAAIgXgBg");
	this.shape_4.setTransform(8.1246,-7.8382);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.247)").s().p("AlHBiQhQi+CMikQA4geBBgVQA6gTA8gIQAmgCApAFQCxAQAECTQADBTAuAkQDLE/lQA3Qg9ALg2AAQkFAAhjjug");
	this.shape_5.setTransform(0.0352,14.0152);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.247)").s().p("ABRFWQiyglhmhIQhmhHgSizQgNh+BChwQBchXBjgIQCagNA9BoQAGDZCJCDIAYAWQAdBwgbA4QgkBKhoAAQgnAAgxgLg");
	this.shape_6.setTransform(5.7802,15.4308);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AghE7QjuhkgojnQgShqAZhgQA2g3A/ghQB5hBCHAuQBVAdBDA7QCQEChDClQhBCfiIAAQg6AAhIgeg");
	this.shape_7.setTransform(2.2679,9.4999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.247)").s().p("AjiFGQiZibA2kZIACgLQBKh4BohMQB0hWCGAbQCCAbBpCuQgCDdifCoQihCph3AAQhFAAg4g5g");
	this.shape_8.setTransform(-10.05,0.05,1,1,0,0,0,-6.5,-14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.247)").s().p("Aj1DCQhFiGBkjkQAkgwA0gdIAbgOQD5hhB8DeQgCDkiwB1Qh1BOhTAAQhcAAgxhfg");
	this.shape_9.setTransform(-0.4632,8.3592);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.247)").s().p("AhnDWQimh0gMjVIAAgKQAWggAegbQChiXDWBsQAyAZApAhIADAJQBlEFiLBzQhGA5hLAAQhMAAhUg7g");
	this.shape_10.setTransform(2.2993,11.4689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// brush_paint_red
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,28,28,0.749)").s().p("AgLDlQBmgZAugtQhqAbhogfQhTgXhCg2QgqgkgfguQgmg8gJhFQgJhBAeg+QASBzBwgIQBWgGA1gmQh/DnHSA5QhkBrCfArQguAJg1AHQgnAEglAAQhiAAhUggg");
	this.shape_11.setTransform(-66.6025,52.6831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,28,28,0.749)").s().p("ABtF+QBqgfBahjQmECRndhVQDJmHDUiKIiZAoQBRiDCYhMQhEBdBpAUQjRDKCFCFQCECGF1gTQgnCfCTgiIA2gNQiyBejFAAQgmAAgngDg");
	this.shape_12.setTransform(-72.1125,30.6641);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,28,28,0.749)").s().p("AAuEkQAtAIArAJQgpgTiQh3QiSh2hRitQhRiuAGhnQB0BQBwAVQCPAaCygbQhKhShggwQCAgEDIAxQgtAHgRAOQgvAnBhAtQnFBTCuFhQAyBlBmA3QhCAuA2BDQheg1g/hTg");
	this.shape_13.setTransform(-79.5332,-20.3463);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,28,28,0.749)").s().p("AHHHPQAPhwiJAOQAsjMhChnQhChmiAByQgVhUgeguQgegvgqAAQijAChkEeQgqhQg5APQgzANg1BnQAZjjCMhmQgfBhBHB2QgIiHBOiWQBLiWg3iWQD7BnAcEBQBBhrCbgrQggBxApBiQApBhAMBiQANBigjBVQA3gNAthrQAZCLggB1IAAgFg");
	this.shape_14.setTransform(-0.0947,-62.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,28,28,0.749)").s().p("AgKF6QB0h7gihqQgihrgPiAQgOiAizBrQA5hmgwglQghgZhYALQBPg4BJh2QBHBwgqBjQBei2EeifIAEgEQhcDKAlDgQAmDeg+B3QgiA/gTAZQAzghA5hFQgOEEkgB8QCYh6h3hFg");
	this.shape_15.setTransform(60.9875,-33.2375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,28,28,0.749)").s().p("ApFCjQgNgRgLgRQA7AjBAAZQBeAkBhASQA/AMA9gPQA5gPAFg4QEcAQAciEQAciCAyhXQAlhChAgfQAhgOAtgZQCgheBuBKQiFBBhNCRQBhAUBnhGQhZD9jTAaQBrAkCFg4QhfCui0AGQiXAFinAmQhcAghSAAQjKAAiUi/g");
	this.shape_16.setTransform(18.475,35.8836);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,28,28,0.749)").s().p("AoKA7QhNh7gJh9QCHC8BwAOQCGARhZiFQD0CJD4g6QDlg3h9iLQDxBnBYDjQjOgwjAAuQifAjiBAtQhaAdhMAAQiyAAhligg");
	this.shape_17.setTransform(25.65,67.4725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,28,28,0.749)").s().p("AlhDVQiTiDgpjSQgLg5gGguQAgBKA8AOQBeAUBfB7QBgB5CzgdQCygehLjBQCcAtBEg7QA1gug2iXQAlAkA0ARQARAFASgDQAUgDAUgHIAWgJQAVgMAXgSQAEAdAAAbQAEBhg0BRQgiA2g2AeQg3AdhJAHQA1BcCmAAQhPB6iTAmQhQAXhSABQhzAChugfIBLBOIgBAAQi1AAiSiCg");
	this.shape_18.setTransform(17.6643,59.5876);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,28,28,0.749)").s().p("AmRBvQhZijAaiQQAgCbBKhrQAsCEBcAWQBcAXB+heQB+hfBWiMQAXCRBthFQBHgtA8iEQgfD1jnCwQgshYAchGQj/EXAoEFQkXhohki7g");
	this.shape_19.setTransform(-10.05,0.05,1,1,0,0,0,3.9,-78.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,28,28,0.749)").s().p("AnCB1QDVgPAEjXQABg0AFgvQAOC0B7hOQAaB+B+gYQB/gZBPiOQAZBUBIgUQAqgMArhPQgkETkkBiQh+Aqh1AAQiwAAiZhgg");
	this.shape_20.setTransform(-19.1,60.6375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,28,28,0.749)").s().p("AgqCrQiNgOiBhjQhXhBgvilQA4BZBEAyQBoBLAbh3QBjBcCeAHQCfAGgfiIQBmATACg7QA7AsBagPQgvCZiXBMQh/A/h3AAQgWAAgXgCg");
	this.shape_21.setTransform(23.425,60.9412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// brush
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3341").s().p("AkCHBQBngZAtgtQhqAbhpgfQhSgXhCg2QgrgkgegvQgng8gJhFQgJhBAfg9QASByBvgIQBwgIA4g7QA4g8AihHQAihHBEhBQBFhBBGgiQgmgLgggWQgUgNgSgRQByAJEdg7IDmCCQAOBTgDBeQgCBdgWBmQgVBmgtBNQgtBNhIA6QhIA6hYAhQhUAgiNASQgnAEglAAQhhAAhVggg");
	this.shape_22.setTransform(-41.8825,30.674);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3A3341").s().p("AhcG1QBpgfBZhjQmDCRndhVQDImHDUiKIiYAoQB4jEEXhKQEXhKEAAqIFJBSQAbFnkTDhQj0DGkdAAQgmAAgmgDg");
	this.shape_23.setTransform(-51.8746,25.1732);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A3341").s().p("AHJGgQgXALguANQiBAljZg1QjYg1hziXQAsAIArAJQgpgTiRh3QiRh1hRiuQhRiuAGhnQB0BQBwAVQCPAaCzgbQhKhShggwQCfgGEPBOQD4AvCzCsQCnCegcDiQgFAbgJAcQg4CBixCMQgBgsASgog");
	this.shape_24.setTransform(-45.86,-13.1216);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A3341").s().p("Aj/IsQjkigAJkZQAJkYCgh2QgeBiBGB2QgHiIBNiWQBMiWg4iWQD8BnAbEBQBBhrCbgrQggBxApBiQAqBiAMBiQAMBhgjBVQA3gNAthrQA6E9jzDOQh7BpiIAAQiDAAiQhig");
	this.shape_25.setTransform(-0.3468,-43.7294);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A3341").s().p("AkJJNQkphDAnkBIgBADQg/A9AMA8Qg+hSAdiJQA6j9DxhjQBtguB0gWQAmgJAjgNQBxgrBmilQBHBwgqBjQBei2EfifIAEgEQhcDKAlDfQAmDfg+B3QgiA/gTAZQAzghA5hFQgPETlEB7QjOBOiZAAQhZAAhIgag");
	this.shape_26.setTransform(27.4744,-28.6165);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3341").s().p("AoJEHQhhh9AaidIAXhRQgpAeg4ACQAJgfAOgeQCCjbDzhNQA7gUA7gIQAngBApAEQCwARAECSQAFCTCLAAQAjAABug8QCgheBuBKQiFBBhNCRQBhAUBnhGQhZD9jTAaQBrAlCFg5QhfCui0AGQiYAFinAmQhbAghSAAQjLAAiUi/g");
	this.shape_27.setTransform(12.4,25.858);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3341").s().p("AnlGCQiPjkBajsQhJBTgaBjQgljWCNjSQCNjTCbgNQCbgNA9BpQAGDYCICFQCJCDBagKIAMAAQhCBBhCgGQE6BfBoEMQjOgxjAAuQieAjiDAtQhZAdhMAAQiyAAhligg");
	this.shape_28.setTransform(21.9654,34.7365);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3341").s().p("Ak8HQQiSiCgpjUQgpjSAbguQguBBgYA3QghiUBeijQBeijCAhEQB6hACIAtQBXAeBEA+QBHBAArBXIAbA2IA/B6QAvBZBbAeQARAFASgEQAUgCAUgIIAWgJQAVgMAXgRQAEAdAAAbQAEBgg0BRQgiA2g3AeQg2AdhJAIQA0BbCnABQhPB5iTAnQhQAWhSABQhzADhuggIBKBPIgBAAQi1AAiSiDg");
	this.shape_29.setTransform(13.8914,34.4423);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3341").s().p("AmrGnQhli7AwihQAwigCBh7QhsBZh9gKQB0g6CcjpQBQiNB1hWQBzhWCHAbQCHAcBrC4QBsC4ADDdIhWhiQAKEzkVDUQgrhaAbhFQj/EYAoEFQkXhohki7g");
	this.shape_30.setTransform(-10.1,0.05,1,1,0,0,0,1.3,-47.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A3341").s().p("AnrGgQDUgPAEjXQADjXBWh9Qg3AkhLgQQCIhEBAhwQARgiAVgfQAmg4A5ghIAbgOQEKhnB8ECQAeA/AJBGIAIA0QAjD9hJBoQgHhogXhCQgPE/k+BqQh+Aqh1AAQiwAAiYhgg");
	this.shape_31.setTransform(-14.9086,30.6658);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3A3341").s().p("AAQHUQiMgOiBhjQiBhjgpk+IhGBtQgykXChiWQCiiWDWBrQDWBrAvEJQAwEIDLgiQgvCaiXBMQh+BAh4AAQgXAAgXgDg");
	this.shape_32.setTransform(17.5117,31.2295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-109.1,217.5,228.2);


(lib.paintbrush_brushblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// brush_shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AlHAiQgLhRAahJQA3gvA4gbQgmgLghgWQgTgNgTgRQB0AJEbg7IDmCCQAOBTgCBeQgDBcgVBnIgEATQh/BXiqAGIgjABQkHAAgjkSg");
	this.shape.setTransform(-15.7317,13.3858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("AiIDsQk1hJBDjNQAwiRCKhHQCBgGB7AUIFIBSQARDZhfCpQh0Akh7AAQhkAAhrgYg");
	this.shape_1.setTransform(-14.6148,7.1663);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.247)").s().p("ACqFRQgXALguANQhhAciQgXQi2hrg6jOQhak8EFhuQCMg7CZAPQBgA0BRBOQCnCegcDiQgFAbgJAcQg3CBiyCMQgBgsASgog");
	this.shape_2.setTransform(-17.1717,-5.2277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.247)").s().p("AjfDyQhmhIg3hgQAYiIBYh2QCljdD1BYQA7AVAsAuQC3C5g/D0QgZAbgdAZQh7BoiIAAQiDAAiQhhg");
	this.shape_3.setTransform(-3.5111,-12.2745);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.247)").s().p("AhuFzQkAhKAljwIgCADQg/A9AMA8Qg9hSAciIQAvjLCkhoQCkg2C4A4QEXBTACDcQACDajkB8Qh+BFigAAIgXgBg");
	this.shape_4.setTransform(8.1246,-7.8382);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.247)").s().p("AlHBiQhQi+CMikQA4geBBgVQA6gTA8gIQAmgCApAFQCxAQAECTQADBTAuAkQDLE/lQA3Qg9ALg2AAQkFAAhjjug");
	this.shape_5.setTransform(0.0352,14.0152);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.247)").s().p("ABRFWQiyglhmhIQhmhHgSizQgNh+BChwQBchXBjgIQCagNA9BoQAGDZCJCDIAYAWQAdBwgbA4QgkBKhoAAQgnAAgxgLg");
	this.shape_6.setTransform(5.7802,15.4308);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.247)").s().p("AghE7QjuhkgojnQgShqAZhgQA2g3A/ghQB5hBCHAuQBVAdBDA7QCQEChDClQhBCfiIAAQg6AAhIgeg");
	this.shape_7.setTransform(2.2679,9.4999);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.247)").s().p("AjiFGQiZibA2kZIACgLQBKh4BohMQB0hWCGAbQCCAbBpCuQgCDdifCoQihCph3AAQhFAAg4g5g");
	this.shape_8.setTransform(-10.05,0.05,1,1,0,0,0,-6.5,-14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.247)").s().p("Aj1DCQhFiGBkjkQAkgwA0gdIAbgOQD5hhB8DeQgCDkiwB1Qh1BOhTAAQhcAAgxhfg");
	this.shape_9.setTransform(-0.4632,8.3592);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.247)").s().p("AhnDWQimh0gMjVIAAgKQAWggAegbQChiXDWBsQAyAZApAhIADAJQBlEFiLBzQhGA5hLAAQhMAAhUg7g");
	this.shape_10.setTransform(2.2993,11.4689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// brush_paint_blue
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,255,0.749)").s().p("AgLDlQBmgZAugtQhqAbhogfQhTgXhCg2QgqgkgfguQgmg8gJhFQgJhBAeg+QASBzBwgIQBWgGA1gmQh/DnHSA5QhkBrCfArQguAJg1AHQgnAEglAAQhiAAhUggg");
	this.shape_11.setTransform(-66.6025,52.6831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,255,0.749)").s().p("ABtF+QBqgfBahjQmECRndhVQDJmHDUiKIiZAoQBRiDCYhMQhEBdBpAUQjRDKCFCFQCECGF1gTQgnCfCTgiIA2gNQiyBejFAAQgmAAgngDg");
	this.shape_12.setTransform(-72.1125,30.6641);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,255,0.749)").s().p("AAuEkQAtAIArAJQgpgTiQh3QiSh2hRitQhRiuAGhnQB0BQBwAVQCPAaCygbQhKhShggwQCAgEDIAxQgtAHgRAOQgvAnBhAtQnFBTCuFhQAyBlBmA3QhCAuA2BDQheg1g/hTg");
	this.shape_13.setTransform(-79.5332,-20.3463);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,255,0.749)").s().p("AHHHPQAPhwiJAOQAsjMhChnQhChmiAByQgVhUgeguQgegvgqAAQijAChkEeQgqhQg5APQgzANg1BnQAZjjCMhmQgfBhBHB2QgIiHBOiWQBLiWg3iWQD7BnAcEBQBBhrCbgrQggBxApBiQApBhAMBiQANBigjBVQA3gNAthrQAZCLggB1IAAgFg");
	this.shape_14.setTransform(-0.0947,-62.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,255,0.749)").s().p("AgKF6QB0h7gihqQgihrgPiAQgOiAizBrQA5hmgwglQghgZhYALQBPg4BJh2QBHBwgqBjQBei2EeifIAEgEQhcDKAlDgQAmDeg+B3QgiA/gTAZQAzghA5hFQgOEEkgB8QCYh6h3hFg");
	this.shape_15.setTransform(60.9875,-33.2375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,255,0.749)").s().p("ApFCjQgNgRgLgRQA7AjBAAZQBeAkBhASQA/AMA9gPQA5gPAFg4QEcAQAciEQAciCAyhXQAlhChAgfQAhgOAtgZQCgheBuBKQiFBBhNCRQBhAUBnhGQhZD9jTAaQBrAkCFg4QhfCui0AGQiXAFinAmQhcAghSAAQjKAAiUi/g");
	this.shape_16.setTransform(18.475,35.8836);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,255,0.749)").s().p("AoKA7QhNh7gJh9QCHC8BwAOQCGARhZiFQD0CJD4g6QDlg3h9iLQDxBnBYDjQjOgwjAAuQifAjiBAtQhaAdhMAAQiyAAhligg");
	this.shape_17.setTransform(25.65,67.4725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,255,0.749)").s().p("AlhDVQiTiDgpjSQgLg5gGguQAgBKA8AOQBeAUBfB7QBgB5CzgdQCygehLjBQCcAtBEg7QA1gug2iXQAlAkA0ARQARAFASgDQAUgDAUgHIAWgJQAVgMAXgSQAEAdAAAbQAEBhg0BRQgiA2g2AeQg3AdhJAHQA1BcCmAAQhPB6iTAmQhQAXhSABQhzAChugfIBLBOIgBAAQi1AAiSiCg");
	this.shape_18.setTransform(17.6643,59.5876);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,255,0.749)").s().p("AmRBvQhZijAaiQQAgCbBKhrQAsCEBcAWQBcAXB+heQB+hfBWiMQAXCRBthFQBHgtA8iEQgfD1jnCwQgshYAchGQj/EXAoEFQkXhohki7g");
	this.shape_19.setTransform(-10.05,0.05,1,1,0,0,0,3.9,-78.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,255,0.749)").s().p("AnCB1QDVgPAEjXQABg0AFgvQAOC0B7hOQAaB+B+gYQB/gZBPiOQAZBUBIgUQAqgMArhPQgkETkkBiQh+Aqh1AAQiwAAiZhgg");
	this.shape_20.setTransform(-19.1,60.6375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,255,0.749)").s().p("AgqCrQiNgOiBhjQhXhBgvilQA4BZBEAyQBoBLAbh3QBjBcCeAHQCfAGgfiIQBmATACg7QA7AsBagPQgvCZiXBMQh/A/h3AAQgWAAgXgCg");
	this.shape_21.setTransform(23.425,60.9412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// brush
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3A3341").s().p("AkCHBQBngZAtgtQhqAbhpgfQhSgXhCg2QgrgkgegvQgng8gJhFQgJhBAfg9QASByBvgIQBwgIA4g7QA4g8AihHQAihHBEhBQBFhBBGgiQgmgLgggWQgUgNgSgRQByAJEdg7IDmCCQAOBTgDBeQgCBdgWBmQgVBmgtBNQgtBNhIA6QhIA6hYAhQhUAgiNASQgnAEglAAQhhAAhVggg");
	this.shape_22.setTransform(-41.8825,30.674);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3A3341").s().p("AhcG1QBpgfBZhjQmDCRndhVQDImHDUiKIiYAoQB4jEEXhKQEXhKEAAqIFJBSQAbFnkTDhQj0DGkdAAQgmAAgmgDg");
	this.shape_23.setTransform(-51.8746,25.1732);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A3341").s().p("AHJGgQgXALguANQiBAljZg1QjYg1hziXQAsAIArAJQgpgTiRh3QiRh1hRiuQhRiuAGhnQB0BQBwAVQCPAaCzgbQhKhShggwQCfgGEPBOQD4AvCzCsQCnCegcDiQgFAbgJAcQg4CBixCMQgBgsASgog");
	this.shape_24.setTransform(-45.86,-13.1216);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3A3341").s().p("Aj/IsQjkigAJkZQAJkYCgh2QgeBiBGB2QgHiIBNiWQBMiWg4iWQD8BnAbEBQBBhrCbgrQggBxApBiQAqBiAMBiQAMBhgjBVQA3gNAthrQA6E9jzDOQh7BpiIAAQiDAAiQhig");
	this.shape_25.setTransform(-0.3468,-43.7294);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A3341").s().p("AkJJNQkphDAnkBIgBADQg/A9AMA8Qg+hSAdiJQA6j9DxhjQBtguB0gWQAmgJAjgNQBxgrBmilQBHBwgqBjQBei2EfifIAEgEQhcDKAlDfQAmDfg+B3QgiA/gTAZQAzghA5hFQgPETlEB7QjOBOiZAAQhZAAhIgag");
	this.shape_26.setTransform(27.4744,-28.6165);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3A3341").s().p("AoJEHQhhh9AaidIAXhRQgpAeg4ACQAJgfAOgeQCCjbDzhNQA7gUA7gIQAngBApAEQCwARAECSQAFCTCLAAQAjAABug8QCgheBuBKQiFBBhNCRQBhAUBnhGQhZD9jTAaQBrAlCFg5QhfCui0AGQiYAFinAmQhbAghSAAQjLAAiUi/g");
	this.shape_27.setTransform(12.4,25.858);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3341").s().p("AnlGCQiPjkBajsQhJBTgaBjQgljWCNjSQCNjTCbgNQCbgNA9BpQAGDYCICFQCJCDBagKIAMAAQhCBBhCgGQE6BfBoEMQjOgxjAAuQieAjiDAtQhZAdhMAAQiyAAhligg");
	this.shape_28.setTransform(21.9654,34.7365);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3341").s().p("Ak8HQQiSiCgpjUQgpjSAbguQguBBgYA3QghiUBeijQBeijCAhEQB6hACIAtQBXAeBEA+QBHBAArBXIAbA2IA/B6QAvBZBbAeQARAFASgEQAUgCAUgIIAWgJQAVgMAXgRQAEAdAAAbQAEBgg0BRQgiA2g3AeQg2AdhJAIQA0BbCnABQhPB5iTAnQhQAWhSABQhzADhuggIBKBPIgBAAQi1AAiSiDg");
	this.shape_29.setTransform(13.8914,34.4423);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3A3341").s().p("AmrGnQhli7AwihQAwigCBh7QhsBZh9gKQB0g6CcjpQBQiNB1hWQBzhWCHAbQCHAcBrC4QBsC4ADDdIhWhiQAKEzkVDUQgrhaAbhFQj/EYAoEFQkXhohki7g");
	this.shape_30.setTransform(-10.1,0.05,1,1,0,0,0,1.3,-47.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A3341").s().p("AnrGgQDUgPAEjXQADjXBWh9Qg3AkhLgQQCIhEBAhwQARgiAVgfQAmg4A5ghIAbgOQEKhnB8ECQAeA/AJBGIAIA0QAjD9hJBoQgHhogXhCQgPE/k+BqQh+Aqh1AAQiwAAiYhgg");
	this.shape_31.setTransform(-14.9086,30.6658);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3A3341").s().p("AAQHUQiMgOiBhjQiBhjgpk+IhGBtQgykXChiWQCiiWDWBrQDWBrAvEJQAwEIDLgiQgvCaiXBMQh+BAh4AAQgXAAgXgDg");
	this.shape_32.setTransform(17.5117,31.2295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-109.1,217.5,228.2);


(lib.paintbrush_brush_noclr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// brush_shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AlHAiQgLhRAahJQA3gvA4gbQgmgLghgWQgTgNgTgRQB0AJEbg7IDmCCQAOBTgCBeQgDBcgVBnIgEATQh/BXiqAGIgjABQkHAAgjkSg");
	this.shape.setTransform(-15.7317,13.3858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("AghE7QjuhkgojnQgShqAZhgQA2g3A/ghQB5hBCHAuQBVAdBDA7QCQEChDClQhBCfiIAAQg6AAhIgeg");
	this.shape_1.setTransform(2.2679,9.4999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},6).to({state:[]},1).wait(3));

	// brush
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A3341").s().p("AkCHBQBngZAtgtQhqAbhpgfQhSgXhCg2QgrgkgegvQgng8gJhFQgJhBAfg9QASByBvgIQBwgIA4g7QA4g8AihHQAihHBEhBQBFhBBGgiQgmgLgggWQgUgNgSgRQByAJEdg7IDmCCQAOBTgDBeQgCBdgWBmQgVBmgtBNQgtBNhIA6QhIA6hYAhQhUAgiNASQgnAEglAAQhhAAhVggg");
	this.shape_2.setTransform(-41.8825,30.674);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A3341").s().p("Ak8HQQiSiCgpjUQgpjSAbguQguBBgYA3QghiUBeijQBeijCAhEQB6hACIAtQBXAeBEA+QBHBAArBXIAbA2IA/B6QAvBZBbAeQARAFASgEQAUgCAUgIIAWgJQAVgMAXgRQAEAdAAAbQAEBgg0BRQgiA2g3AeQg2AdhJAIQA0BbCnABQhPB5iTAnQhQAWhSABQhzADhuggIBKBPIgBAAQi1AAiSiDg");
	this.shape_3.setTransform(13.8914,34.4423);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},6).to({state:[]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.2,-109.1,217.5,228.2);


(lib.swirl_yellowgreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#49C400").s().p("AA3HIIhNgSQgvgLgggFQgcgEiGgGQhjgFg8gUQg5gUhBgwQhshPhBhpQhHh0gBh3QAAhLAbhHQAbhHAxg4QApguAygbQA3gdA4gDQBLgDBIArIAYAOQAOAIALABQANACASgEIAegGQAqgGAwAZQAXALA7ApQBcBBBaAeQBpAjBfgQQBVgNAmg1QAKgPANgfQANghAJgOQAZgoAogLQAVgFAVAFQAWAFAPAPQAHAIALATQALASAHAIQAHAJANAJIAWAQQAqAhASA9QAPAygCBBQgEBkgkBBIgZAoQgQAZgIAQQgIASgIAfIgNAzQgaBVhIBBQhEA9hbAdQhPAZhdAAQhYAAhkgXg");
	this.shape.setTransform(-7.7637,9.3598);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-63.6,186,125.4);


(lib.swirl_redorange = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FE5608").s().p("ABlHlQhdgPgtgFQhPgJiggHQiNgNhWgsQgxgag4gvQidiCgdiKQgMg0AFhRQAGhwAehDQAUgsAfghQAigjApgQQAygTBQAIICHAMQAcAAAxgGQA2gGAXgBQBEgCBVAVQAjAJBxAkQBaAcA9AKQBUANBFgPQAggFANgQQAIgIAFgPIAGgbQAPhEAwghQAagRAggBQAggBAYASQAMAJAPAVIAZAgQAJAKAUAPQAVARAIAHQAkAjAQA8QAKApAEBGQAFBWgNAxQgIAcgUAmIgjBBIgaA1QgQAegPAUQgNARgVAVIgmAjIg1AyQggAdgWATQh3BfiHANQgSABgUAAQgtAAg5gHg");
	this.shape.setTransform(-7.0938,8.5255);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-63.6,170.5,125.4);


(lib.swirl_bluegreen = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#007890").s().p("ABlHlQhdgPgtgFQhPgJiggHQiNgNhWgsQgxgag4gvQidiCgdiKQgMg0AFhRQAGhwAehDQAUgsAfghQAigjApgQQAygTBQAIICHAMQAcAAAxgGQA2gGAXgBQBEgCBVAVQAjAJBxAkQBaAcA9AKQBUANBFgPQAggFANgQQAIgIAFgPIAGgbQAPhEAwghQAagRAggBQAggBAYASQAMAJAPAVIAZAgQAJAKAUAPQAVARAIAHQAkAjAQA8QAKApAEBGQAFBWgNAxQgIAcgUAmIgjBBIgaA1QgQAegPAUQgNARgVAVIgmAjIg1AyQggAdgWATQh3BfiHANQgSABgUAAQgtAAg5gHg");
	this.shape.setTransform(-7.0938,8.5255);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-63.6,186,125.4);


(lib.mix_color_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABtDIIgSgRIhbhvIhZBvIgSARQgKAHgSAAQgZAAgOgPQgPgOAAgYIAFgUIAKgRIBvh+IhdhoIgLgSQgFgLgBgKQAAgWASgQQASgQAVAAQAMAAAKAGQAKAFAIALIBMBgIBNhgQAIgLAJgFQAKgGANAAQAWAAARAQQARAQAAAWQAAAKgFALIgLASIhdBoIBvB+IAKARIAFAUQAAAYgPAOQgPAPgYAAQgTAAgIgHg");
	this.shape.setTransform(41.5,5.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmEQQgQgRAAgbIAAkjQAAgbAQgRQAPgRAXAAQAYAAAQARQAPARAAAbIAAEjQAAAbgPARQgQARgYAAQgXAAgPgRgAgWiqIgUgOQgJgIgEgLQgGgMAAgNQAAgLAGgLQAEgLAJgIIAUgOQALgFALAAQAMAAALAFIAUAOIAOASQAFALAAAMQAAAagSATQgSATgaAAQgLAAgLgGg");
	this.shape_1.setTransform(14.075,-2.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADYEGQgOgNgEgbIgtk1IgBAAIhbE+IgHAOIgKAPIgSALQgKAEgQAAQgOAAgLgEIgSgLIgLgPIgGgOIhbk+IgCAAIgtE1QgDAbgOANQgNANgdAAQgWAAgRgPQgQgPAAgZIAAgGIABgGIBHmnIAIgVIAQgTIAWgNQANgGAQAAQAcAAAVARQAVARAFAUIBaEtIABAAIBZktQAHgUAUgRQAVgRAdAAQAPAAANAGIAWANIAQATIAIAVIBHGnIABAGIAAAGQgBAZgPAPQgRAPgWAAQgdAAgNgNg");
	this.shape_2.setTransform(-27.4,-1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bottom
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D37E06").s().p("ABtDIIgSgRIhbhvIhZBvIgSARQgJAHgTAAQgYAAgPgPQgPgOAAgYIAEgUIALgRIBvh+IhchoIgNgSQgEgLAAgKQAAgWARgQQARgQAWAAQANAAAJAGQAKAFAIALIBMBgIBNhgQAIgLAJgFQAKgGANAAQAVAAASAQQARAQAAAWQAAAKgEALIgNASIhcBoIBuB+IAMARIAEAUQAAAYgPAOQgPAPgYAAQgSAAgJgHg");
	this.shape_3.setTransform(44.5,8.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D37E06").s().p("AgmEQQgQgRAAgbIAAkjQAAgbAQgRQAPgRAXAAQAYAAAQARQAPARAAAbIAAEjQAAAbgPARQgQARgYAAQgXAAgPgRgAgWiqIgUgOQgJgIgEgLQgGgMAAgNQAAgLAGgLQAEgLAJgIIAUgOQALgFALAAQAMAAALAFIAUAOIAOASQAFALAAAMQAAAagSATQgSATgaAAQgLAAgLgGg");
	this.shape_4.setTransform(17.075,0.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D37E06").s().p("ADXEFQgNgNgEgaIgtk1IgBAAIhbE+IgHAOIgKAPIgSALQgLAEgPAAQgOAAgLgEIgRgLIgMgPIgGgOIhbk+IgCAAIgtE1QgDAagOANQgNAOgcAAQgXAAgRgPQgPgPAAgYIAAgHIABgHIBHmnIAHgUIAQgTIAXgOQANgFAPAAQAcAAAVARQAUARAGAVIBaErIABAAIBZkrQAGgVAVgRQAVgRAdAAQAOAAANAFIAXAOIAQATIAIAUIBHGnIAAAHIAAAHQABAYgRAPQgPAPgXAAQgeAAgNgOg");
	this.shape_5.setTransform(-24.4,1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_txt, new cjs.Rectangle(-79.9,-47.3,162.9,93.6), null);


(lib.mix_color_button_shadow_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gray
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.349)").s().p("AkbPEQi1g2iSh5QiVh7hcioQhaijgVi4QgVi8Aii8QAhi8BqicQBuiiCjhwQCahpC5glQBfgRBggCQDIgCC4BNQCwBKCHCGQCJCJBKC0QBICxAADBQABDCg6C6Qg0Crh0CKQh7CTiqBcQimBbi+AQQgvAEgvAAQiQAAiOgpg");
	this.shape.setTransform(0.0838,1.7602);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_button_shadow_circle, new cjs.Rectangle(-97,-98.7,194.2,201), null);


(lib.mix_color_button_shadow_brush = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// gray
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.349)").s().p("AqrOEQkVkWgGmFQgEgsABguQgBmREdkcQEckdGRAAIAWABQBFiHBMhaQCZi3BiBJQB4AdgqDqIAAAAQgPBTgiBfQCBBDBuBvQEdEcgBGRQABA8gHA6IAAAAQgOFzkLEMIgBAAQkbEamPAAQmQAAkbkag");
	this.shape.setTransform(0,-15.9996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_button_shadow_brush, new cjs.Rectangle(-97,-134.2,194.1,236.5), null);


(lib.mix_color_button_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FE34").s().p("AqrOEQkVkWgGmFQgEgsABguQgBmREdkcQEckdGRAAIAWABQBFiHBMhaQCZi3BiBJQB4AdgqDqIAAAAQgPBTgiBfQCBBDBuBvQEdEcgBGRQABA8gHA6IAAAAQgOFzkLEMIgBAAQkbEamPAAQmQAAkbkag");
	this.shape.setTransform(0,-15.9996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_button_outline, new cjs.Rectangle(-97,-134.2,194.1,236.5), null);


(lib.MIX_empty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAINUQgeAAgegCQgLgBgGgIQgHgIAAgKQABgKAIgHQAIgHAKABIA6ACQAKAAAHAIQAIAHgBALQAAAKgHAHQgIAHgKAAIAAAAgABbNMQgIgHAAgKQgBgLAHgHQAHgIAKgBIA1gEIgBABIAIgBQALgCAIAHQAIAGABAKQACAKgHAJQgGAIgLABIgIABIAAAAIg3AEIgBAAQgJAAgIgGgAiaNHQgegFgegGQgKgCgGgIQgGgJACgKQADgKAIgGQAJgGAKACIA6ALQAKABAGAJQAGAIgBAKQgCAKgIAGQgHAFgIAAIgEAAgAEBM3QgJgFgCgKQgDgKAFgJQAGgJAKgDQAcgHAagKQAKgDAJAEQAJAFAEAJQADAKgEAJQgEAKgKADQgdALgeAIIgGAAQgHAAgGgDgAk4MkQgegIgdgKQgKgEgEgJQgFgJAEgKQADgKAKgEQAJgFAKAEQAbAJAcAIQAKADAFAJQAFAJgDAKQgCAKgJAFQgGADgGAAIgHgBgAGbMAQgKgDgFgJQgFgJACgKQADgKAJgFQAZgOAYgQQAJgGAKACQAKACAGAJQAFAIgCALQgCAKgIAGQgZARgbAPQgGADgGAAIgHgBgAnQLtIgQgHIgFgDIgwggQgIgGgCgKQgBgKAGgJQAGgIAKgCQAKgCAIAHIAtAeIAPAGQAJAFAEAJQAEAKgEAJQgEAKgKAEQgFABgEAAQgFAAgFgCgAIhKkQgKgBgHgHQgHgIAAgKQAAgKAIgHQAVgUATgVQAHgIAKAAQALgBAHAHQAIAHAAALQABAKgHAIQgVAWgWAVQgHAHgKAAIgBAAgApiKEQgXgVgUgWQgHgHAAgLQAAgKAIgHQAIgHAKAAQAKABAHAHQATAUAVAUQAIAHAAAKQABAKgHAIQgHAIgKAAIgCAAQgJAAgHgGgAJ7InQgJgGgCgKQgBgKAFgIQARgZAOgYQAFgJAKgDQAKgDAJAFQAJAFADAKQADAKgFAJQgPAbgTAaQgFAIgLACIgEABQgIAAgGgFgAq9IUQgKgCgGgJQgRgagOgcQgEgKADgJQAEgKAJgFQAJgEAKADQAKADAEAKQANAZAPAYQAGAJgCAKQgCAKgJAGQgGAEgHAAIgGgBgALKGbQgJgDgFgKQgEgJADgKQALgbAHgcQADgKAJgFQAJgGAKADQAKADAFAJQAFAJgDAKQgIAegLAeQgDAJgKAFQgFACgFAAQgEAAgFgCgAsEGAQgIgFgDgKQgHgfgEgfQgBgLAGgIQAHgIAKgBQAKgBAIAGQAJAHABAKQADAcAHAcQACAKgFAJQgGAJgKACIgGABQgGAAgHgEgAL1EBQgKgBgHgIQgGgJABgKQADgcAAgeQABgKAHgHQAIgIAKABQALAAAHAIQAHAHgBALQgBAfgDAeQgBALgIAGQgHAGgIAAIgDAAgAsEDkQgKgBgHgIQgGgIABgKQADgfAGgfQACgLAIgFQAJgGAKACQAKACAGAIQAGAJgCAKQgGAdgDAdQgBAKgIAHQgHAFgIAAIgDAAgAL9BiQgKgBgHgHQgHgIAAgKIACg8QAAgKAIgGQAHgIALABQAKAAAHAIQAHAGAAALIgCA8QAAAKgIAHQgHAHgKAAIgBAAgArmBGQgJgDgFgJQgEgKADgKQALgdANgcQAFgKAJgDQAKgEAJAFQAKAEADAKQAEAJgEAJQgNAbgKAbQgDAKgJAEQgGADgFAAIgJgCgALxhDQgHgHgBgKQAAgegDgdQAAgKAGgIQAHgIAKgBQALgBAHAHQAIAGABALQADAeAAAgQABAKgIAIQgHAHgKAAIgBAAQgKAAgHgHgAqghVQgJgFgDgJQgDgKAEgJQANgZAIgbQAEgKAJgFQAJgFAKADQAKADAEAKQAFAJgDAKQgJAfgQAdQgEAJgKADIgIABQgGAAgFgDgALkjgQgJgGgCgKQgGgdgJgbQgCgKAEgJQAFgKAKgDQAKgDAJAFQAJAFADAKQAJAdAHAgQACAKgGAIQgFAJgKACIgGABQgHAAgGgEgApwjtQgKAAgIgIQgHgHAAgLQABgZgDgbIAAgCIAAgEQAAgLAHgHQAIgHAKAAQAKAAAIAHQAHAHAAALIAAAEQADAcgBAbQAAALgHAHQgIAHgJAAIgBAAgAK2l2QgKgDgEgJQgNgbgPgZQgFgJADgKQACgKAJgFQAJgGAKADQAKADAFAJQAQAaAOAdQAEAJgDAKQgDAKgKAEQgFADgGAAIgIgCgApwmNQgKgDgFgJQgFgJADgKQAIgdANgfQAEgJAKgEQAJgEAKAEQAJAEAEAKQAEAKgEAJQgMAbgHAaQgDAKgJAGQgGADgGAAIgHgBgAJln7QgKgBgHgHQgSgXgWgUQgHgIAAgKQAAgKAHgIQAHgHALAAQAKAAAHAHQAXAWAUAYQAHAIgBAKQAAALgIAGQgHAGgJAAIgDAAgAozohQgIgGgDgKQgCgKAGgJIAWggIABgBIAPgUQAGgIAKgBQALgCAIAHQAIAGABAKQABALgGAIIgOASIAAAAIgVAgQgGAIgKACIgFABQgHAAgHgEgAHjpsQgXgRgYgPQgJgGgCgKQgDgKAGgJQAFgJAKgCQAKgCAJAFQAbARAYASQAIAGACAKQABAKgGAJQgGAIgKACIgEAAQgIAAgHgFgAm+qYQgKgBgHgIQgGgIAAgKQABgKAIgHQAYgVAbgRQAJgGAKACQAKACAGAJQAFAIgCAKQgCAKgIAGQgYAQgWATQgHAGgKAAIgCAAgAFgq7QgZgNgcgLQgJgEgEgKQgEgJAEgKQAEgJAJgEQAKgEAJAEQAdAMAbANQAJAFAEAJQADAKgFAKQgEAJgKADIgIABQgGAAgFgCgAk8ruQgKgEgEgJQgEgKAEgJQAEgKAJgEQAcgMAegKQAKgDAKAFQAJAFADAKQADAKgFAJQgFAJgKADQgbAJgaALQgFACgFAAQgFAAgEgCgADRr1IgmgMIgBAAIgQgGQgKgDgFgIQgFgKACgJQADgKAJgFQAJgGAKADIATAGIAAAAIAnANQAKADAEAJQAFAKgDAJQgEAKgJAFQgFACgGAAIgIgBgAiqscQgJgHgBgKQgCgKAGgIQAGgJAKgBQAfgGAfgCQAKgBAIAHQAIAGABALQABAKgHAIQgHAIgKABQgdACgdAFIgEAAQgHAAgHgEgAA8sbQgdgFgdgBQgKgBgHgHQgHgIABgKQAAgLAIgHQAIgHAJABQAgABAfAFQAKACAGAIQAHAIgCALQgBAKgJAGQgHAFgHAAIgEAAg");
	this.shape.setTransform(0.1055,0.0237);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill_color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmvKWQm8kdEJnVQAvhUgMhzQgMh0BniOQBniPC6gwQC6guCuA5QIyCpgSISIgGC5QgFDOh8CgQieDOkKAdQg9AGg7AAQjvAAjehkg");
	this.shape_1.setTransform(0.0255,-0.0106);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MIX_empty, new cjs.Rectangle(-79.4,-85.2,159.10000000000002,170.5), null);


(lib.paint_mix_shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.196)").s().p("EgwFA5MQj0gBitisQisisAAj0MAAAhf8QAAj0CsitQCtisD0AAMBgKAAAQD1AACsCsQCtCtAAD0MAAABf8QAAD0itCsIAAAAQisCsj1ABgEg2ig2aQirCrAADyMAAABf8QAADyCrCqQCrCrDyAAMBgKAAAQDzAACqirQCsiqAAjyMAAAhf8QAAjyisirQiqirjzgBMhgKAAAQjyABirCrg");
	this.shape.setTransform(0,-0.0005,0.8842,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.294)").s().p("EgwFA5GQjyAAirirQiriqAAjyMAAAhf8QAAjyCrirQCrirDygBMBgKAAAQDzABCqCrQCsCrAADyMAAABf8QAADyisCqQiqCrjzAAgEg2fg2XQipCqAADwMAAABf8QAADwCpCpQCqCqDwAAMBgKAAAQDxAACpiqQCqipAAjwMAAAhf8QAAjwiqiqQipiqjxABMhgKAAAQjwAAiqCpg");
	this.shape_1.setTransform(0,-0.0005,0.8842,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.396)").s().p("EAwFA5CMhgKAAAQjwAAiqiqQipipAAjwMAAAhf8QAAjwCpiqQCqipDwAAMBgKAAAQDxgBCpCqQCqCqAADwMAAABf8QAADwiqCpQipCpjwABIgBAAgEg2bg2TQioCoAADuMAAABf8QAADtCoCoQCoCpDugBMBgKAAAQDuABCoipQCpioAAjtMAAAhf8QAAjuipioQioipjuAAMhgKAAAIAAAAQjuAAioCpg");
	this.shape_2.setTransform(0,-0.0005,0.8842,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("EAwFA48MhgKAAAQjuABioipQioioAAjtMAAAhf8QAAjuCoioQCoipDuAAMBgKAAAQDuAACoCpQCpCoAADuMAAABf8QAADtipCoQioCojtAAIgBAAgEg2Yg2QQimCnAADsMAAABf8QAADrCmCnQCnCnDsAAMBgKAAAQDsAACninIgBAAQCoinAAjrMAAAhf8QAAjsininQininjsAAMhgKAAAIAAAAQjsAAinCng");
	this.shape_3.setTransform(0,-0.0005,0.8842,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.796)").s().p("EgwFA4uQjogBijikQikijAAjnMAAAhf8QAAjoCkikQCjijDogBMBgKAAAQDoABCjCjQClCkAADoMAAABf8QAADnilCkIAAgBQijCkjoABgEg2Ng2FQiiCiAADmMAAABf8QAADlCiCiQCiCiDmAAMBgKAAAQDmAACiiiQCjiiAAjlMAAAhf8QAAjmijiiQiiiijmAAMhgKAAAQjmAAiiCig");
	this.shape_4.setTransform(0,-0.0005,0.8842,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.898)").s().p("EgwFA4oQjmAAiiiiQiiiiAAjlMAAAhf8QAAjmCiiiQCiiiDmAAMBgKAAAQDmAACiCiQCjCiAADmMAAABf8QAADlijCiQiiCijmAAgEg2Kg2CQigChAADkMAAABf8QAADjCgChQChCgDkABMBgKAAAQDkgBChigQChihAAjjMAAAhf8QAAjkihihQihigjkgBMhgKAAAQjkABihCgg");
	this.shape_5.setTransform(0,-0.0005,0.8842,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.094)").s().p("EgwFA5RQj2gBiuiuQiuitAAj2MAAAhf8QAAj2CuiuIAAAAQCuiuD2gBMBgKAAAQD3ABCtCuIAAAAQCvCuAAD2MAAABf8QAAD2ivCtIAAAAQitCuj3ABgEg2mg2eQisCtAAD0MAAABf8QAAD0CsCsQCtCsD0ABMBgKAAAQD1gBCsisIAAAAQCtisAAj0MAAAhf8QAAj0ititQisisj1AAMhgKAAAQj0AAitCsg");
	this.shape_6.setTransform(0,-0.0005,0.8842,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.698)").s().p("EgwFA4yQjqABilimQililAAjpMAAAhf8QAAjqClilIAAAAQClimDqABMBgKAAAQDqAAClClIAAAAQCmClAADqMAAABf8QAADpimClIAAAAQilCljqAAgEg2Qg2JQikCkAADoMAAABf8QAADnCkCjQCjCkDoABMBgKAAAQDogBCjikIAAABQClikAAjnMAAAhf8QAAjoilikQijijjogBMhgKAAAQjoABijCjg");
	this.shape_7.setTransform(0,-0.0005,0.8842,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.596)").s().p("EAwFA44MhgKAAAQjsAAininQiminAAjrMAAAhf8QAAjsCminQCninDsAAMBgKAAAQDsAACnCnQCnCnAADsMAAABf8QAADrioCnIABAAQinCnjrAAIgBAAgEg2Ug2MIAAAAQilClAADqMAAABf8QAADpClClQClCmDqgBMBgKAAAQDqAAClilIAAAAQCmilAAjpMAAAhf8QAAjqimilIAAAAQililjqAAMhgKAAAIAAAAQjqgBilCmg");
	this.shape_8.setTransform(0,-0.0005,0.8842,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("EgwFA4kQjkgBihigQigihAAjjMAAAhf8QAAjkCgihQChigDkgBMBgKAAAQDkABChCgQChChAADkMAAABf8QAADjihChQihCgjkABg");
	this.shape_9.setTransform(0,-0.0005,0.8842,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_mix_shadow, new cjs.Rectangle(-324.6,-366.4,649.3,732.9), null);


(lib.paint_mix_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgwFA4fQjiAAifigQififAAjhMAAAhf8QAAjhCfigQCfigDiABMBgKAAAQDigBCfCgQCgCgAADhMAAABf8QAADhigCfQifCgjiAAg");
	this.shape.setTransform(0,-0.0005,0.8842,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_mix_bg, new cjs.Rectangle(-320.2,-361.4,640.5,722.9), null);


(lib.demo_shadow_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("EhMZBATQiyAAh+h9Qh9h8AAixMAAAhzSQAAiwB9h9QB+h8CyAAMCYzAAAQCyAAB9B8QB+B9AACwMAAABzSQAACxh+B8Qh9B9iyAAg");
	this.shape.setTransform(-0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.204)").s().p("EBMaBAdMiYzAAAQi2AAiBiAQiAh/AAi1MAAAhzSQAAi0CAiAQCBh/C2AAMCYzAAAQC2AACAB/QCBCAAAC0MAAABzSQAAC1iBB/QiACAi2AAIAAAAgEhRJg+WQh9B9AACwMAAABzSQAACxB9B8QB+B9CyAAMCYzAAAQCyAAB9h9QB+h8AAixMAAAhzSQAAiwh+h9Qh9h8iyAAMiYzAAAQiyAAh+B8g");
	this.shape_1.setTransform(-0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.161)").s().p("EhMZBAnQi6AAiEiDQiDiCAAi5MAAAhzSQAAi4CDiDIAAAAQCEiCC6AAMCYzAAAQC6AACDCCQCECDAAC4MAAABzSQAAC5iECCIAAAAQiDCDi6AAgEhRQg+dQiACAAAC0MAAABzSQAAC1CAB/QCBCAC2AAMCYzAAAQC2AACAiAQCBh/AAi1MAAAhzSQAAi0iBiAQiAh/i2AAMiYzAAAIAAAAQi2AAiBB/g");
	this.shape_2.setTransform(-0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.122)").s().p("EhMZBAxQi+AAiHiGQiGiFAAi9MAAAhzSQAAi8CGiGIAAAAQCHiFC+AAMCYzAAAQC+AACGCFQCHCGAAC8MAAABzSQAAC9iHCFIAAAAQiGCGi+AAgEhTag5pMAAABzSQAAC5CDCCQCECDC6AAMCYzAAAQC6AACDiDIAAAAQCEiCAAi5MAAAhzSQAAi4iEiDQiDiCi6AAMiYzAAAQi6AAiECCIAAAAQiDCDAAC4g");
	this.shape_3.setTransform(-0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.078)").s().p("EhMZBA7QjCAAiKiIQiJiJAAjBMAAAhzSQAAjACJiJQCKiIDCAAMCYzAAAQDCAACKCIQCJCJAADAMAAABzSQAADBiJCJQiKCIjCAAgEhReg+rIAAAAQiGCGAAC8MAAABzSQAAC9CGCFQCHCGC+AAMCYzAAAQC+AACGiGIAAAAQCHiFAAi9MAAAhzSQAAi8iHiGQiGiFi+AAMiYzAAAQi+AAiHCFg");
	this.shape_4.setTransform(-0.025,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.039)").s().p("EhMZBBFQjGAAiNiLQiMiMAAjFMAAAhzSQAAjECMiMIAAAAQCNiLDGAAMCYzAAAQDHAACMCLQCMCMAADEMAAABzSQAADGiMCLIAAAAQiMCLjHAAgEhRlg+yQiJCJAADAMAAABzSQAADBCJCJQCKCIDCAAMCYzAAAQDCAACKiIQCJiJAAjBMAAAhzSQAAjAiJiJQiKiIjCAAMiYzAAAQjCAAiKCIg");
	this.shape_5.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.demo_shadow_bg, new cjs.Rectangle(-536.9,-416.5,1073.8,833), null);


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


(lib.color_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AkoJMQhKgcg9gzQgkgegMgbQgIgSACgTQABgUALgOQAPgSAbgCQAYgCAXALQATAIAVASIAlAgQBTBFB4ASQBtAPB0geQBygeBMg6QBchEAhhhIANglQAHgVALgNQAOgQAVgHQAWgHAVAFQAVAEAQAQQARAPAGAVQAMAkgWAwQgaA3hDA6Qh1BoiSA6QiUA7iYACIgKABQh8AAhlgogAo5EXQgUgBgNgIQgKgGgJgMQgYggABgnQABgOADgTQAGgiAGgQQADgMAHgPQAIgTAPgYIAYgoQAKgSAKgGQAIgFALABQALABAHAHQAHAHAFATQAJAjgHAXQgCAGgGALIgIARQgJAUAEAcQACASAJAfIAFAVQADAWgJATQgIATgQAJQgNAGgQAAIgFAAgAI9BXQgNgIgHgOQgHgNABgVQAAgRAGgKQAFgKALgGQAMgHAMAAQAMABALAGQALAHAHAJQAPAVgFAaQgCAPgIAKQgMAPgUACIgDABQgOAAgMgHgAnLjlQgYgGgLgOQgMgQAEgdQAEgeARgkQAfhCA4g2QA2gzBGgiQB8g7ClgDQBogBBZAYQBkAaBLA3QAXASAJAPQAPAYgJAUQgGAOgPAHQgOAHgQAAQgNgBgRgFIgcgLQiqhGi3gCQiCgDhVAqQg0AZgjArQglAtgIA1QgCAWgDALQgEASgKAKQgOAOgWAAQgKAAgKgCg");
	this.shape.setTransform(-10.6424,-14.6836,3.2124,3.4929);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AkkJmQjSgziFiqQhMhhgNh+QgDguAIgrQAKCVA+BjQBfCWDbBDQC2AwC9gJQDrgFDDisQDEisAIkZQAHkbigjCQg0hBhUhCQCkBYBZCkQBnC8gQDYQgHBogbBlQg2DKipB1QivB3jUAGQggACgfAAQidAAiXgog");
	this.shape_1.setTransform(-0.0731,10.7726,3.2124,3.4929);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F4E01").s().p("AkkKbQjSgziFipQhMhigNh+QgIhvA+hlQBXiLAAigQABihB8htQCniTDigBQDSgCDCBXQDFBYBkC6QBnC8gQDXQgHBpgbBkQg2DLipB0QivB3jUAHQggABgfAAQidAAiXgog");
	this.shape_2.setTransform(-0.0731,-7.8753,3.2124,3.4929);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AkkKbQjSgziFipQhMhigNh+QgIhvA+hlQBXiLAAigQABihB8htQCniTDigBQDSgCDCBXQDFBYBkC6QBnC8gQDXQgHBpgbBkQg2DLipB0QivB3jUAHQggABgfAAQidAAiXgog");
	this.shape_3.setTransform(-0.0579,7.8747,3.3087,3.4929);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.color_brown, new cjs.Rectangle(-240.1,-254.9,480.1,509.8), null);


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


(lib.refresh_brown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// check
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AirDmQhRhHgHhrIAAgCIB2gHQAEA5ArAmQArAnA5gEQA5gDAmgsQAngrgEg5QgDg5gsgmQgkgfgtgDIAGBbIich9ICLifIAEBJQBhgBBKBCQBRBIAHBrQAGBrhHBQQhIBRhsAHIgQABQhgAAhKhDg");
	this.shape.setTransform(0.4771,0.0019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dark
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D27E04").s().p("AirDmQhRhHgHhrIAAgCIB2gHQAEA5ArAmQArAnA5gEQA5gDAmgsQAngrgEg5QgDg5gsgmQgkgfgtgDIAGBbIich9ICLifIAEBJQBhgBBKBCQBRBIAHBrQAGBrhHBQQhIBRhsAHIgQABQhgAAhKhDg");
	this.shape_1.setTransform(-0.5229,-1.2481);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// light
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFECA0").s().p("AirDmQhRhHgHhrIAAgCIB2gHQAEA5ArAmQArAnA5gEQA5gDAmgsQAngrgEg5QgDg5gsgmQgkgfgtgDIAGBbIich9ICLifIAEBJQBhgBBKBCQBRBIAHBrQAGBrhHBQQhIBRhsAHIgQABQhgAAhKhDg");
	this.shape_2.setTransform(-0.2729,1.2519);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.refresh_brown, new cjs.Rectangle(-26.5,-30.9,53,61.8), null);


(lib.tube_white_circle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("rgba(255,255,255,0.498)").ss(5,1,1).p("AF0AAQAAEqhtDTQhtDTiaAAQiZAAhtjTQhtjTAAkqQAAkpBtjTQBtjTCZAAQCaAABtDTQBtDTAAEpg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.749)").s().p("AkGH9QhtjTAAkqQAAkpBtjTQBtjTCZAAQCaAABtDTQBtDTAAEpQAAEqhtDTQhtDTiaAAQiZAAhtjTg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_white_circle, new cjs.Rectangle(-39.6,-74.5,79.30000000000001,149.1), null);


(lib.tube_txt_y = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AA6CMQgLgKgGgRIgph/IAAAAIgpB/QgFARgKAKQgMAKgSAAQgUAAgKgMQgMgLgGgSIhDi8IgGgUIgCgSQAAgMALgKQALgKASAAQANAAALAJQAJAJAEAOIAtCWIABAAIAviTQAFgPAIgKQAKgKAQAAQASAAAJAKQAJAKAEAPIAuCTIACAAIAtiWQADgOAKgJQAKgJAPAAQARAAALALQALAKAAASIgCANIgGARIhDC9QgHASgKALQgMAMgTAAQgSAAgLgKg");
	this.shape.setTransform(53.95,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5CNQgagMgTgVQgTgVgKgcQgKgcAAgfQAAgdAKgcQALgbASgVQAUgWAZgMQAbgNAeAAQAfAAAaANQAaAMATAWQATAVAKAbQALAcAAAdQAAAfgLAcQgJAcgUAVQgSAVgaAMQgaAMggAAQgfAAgagMgAgbhIQgMAIgIALQgIAMgEAOQgDAOAAANQAAAPAEAOQAEAOAHAMQAIALAMAHQAMAHAPAAQAQAAAMgHQAMgHAHgLQAIgMADgOQAFgOAAgPQAAgNgEgOQgDgOgIgMQgIgLgLgIQgNgHgQAAQgQAAgLAHg");
	this.shape_1.setTransform(17.3,3.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbDJQgLgMAAgUIAAlRQAAgUALgMQALgMAQAAQASAAAKAMQALAMAAAUIAAFRQAAAUgLAMQgKAMgSAAQgQAAgLgMg");
	this.shape_2.setTransform(-4.1,-3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcDJQgLgMABgUIAAlRQgBgUALgMQAMgMAQAAQARAAAMAMQAKAMABAUIAAFRQgBAUgKAMQgMAMgRAAQgQAAgMgMg");
	this.shape_3.setTransform(-16.3,-3.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape_4.setTransform(-37.125,3.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhLDOQgLgLABgMIABgMIADgLIAnhoIhXjZQgDgJAAgMQAAgHADgGIAJgLIAMgHIANgDQAOAAAKAIQAKAHAGAOIA2CVIA5iVQAFgOAKgHQALgIAOAAIAMADIANAHIAJALQADAGAAAHQAAANgDAIIiJFaQgFANgIAJQgKAKgOAAQgVAAgKgLg");
	this.shape_5.setTransform(-65.1,9.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// wht
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AA6CMQgLgJgGgSIgph+IAAAAIgoB+QgGASgKAJQgMAKgSAAQgTgBgMgKQgLgMgGgSIhDi8IgGgVIgCgRQAAgNALgJQALgJARAAQAOgBAKAJQALAJADAOIAuCWIABAAIAuiTQAFgPAIgKQAJgJARAAQASAAAIAJQAKAKAEAPIAuCTIACAAIAtiWQADgOAKgJQAKgJAOABQASAAALAKQALAKAAASIgDANIgEARIhFC9QgFASgMAMQgLAKgTABQgSAAgLgKg");
	this.shape_6.setTransform(56.95,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("Ag5CNQgagMgTgVQgSgVgLgcQgKgcAAgfQAAgdAKgcQALgbATgVQASgWAbgMQAZgNAfAAQAfAAAaANQAbAMASAWQATAVALAbQAKAcAAAdQAAAfgKAcQgKAcgUAVQgSAVgaAMQgaAMggAAQgfAAgagMgAgbhIQgMAIgIALQgIAMgEAOQgDAOAAANQAAAPAEAOQAEAOAIAMQAIALALAHQAMAHAPAAQAQAAALgHQAMgHAIgLQAIgMAEgOQAEgOAAgPQgBgNgDgOQgEgOgHgMQgIgLgMgIQgMgHgQAAQgQAAgLAHg");
	this.shape_7.setTransform(20.3,5.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.498)").s().p("AgcDJQgLgMABgUIAAlRQgBgUALgMQALgMARAAQASAAAKAMQAMAMAAAUIAAFRQAAAUgMAMQgKAMgSAAQgRAAgLgMg");
	this.shape_8.setTransform(-1.1,-1.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.498)").s().p("AgbDJQgMgMAAgUIAAlRQAAgUAMgMQAKgMARAAQASAAALAMQALAMgBAUIAAFRQABAUgLAMQgLAMgSAAQgRAAgKgMg");
	this.shape_9.setTransform(-13.3,-1.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape_10.setTransform(-34.125,5.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.498)").s().p("AhLDOQgKgLAAgMIABgMIADgLIAohoIhYjZQgDgJAAgMQAAgHADgGIAJgLIAMgHIANgDQAOAAAKAIQALAHAEAOIA2CVIA6iVQAFgOAKgHQALgIAOAAIANADIAMAHIAJALQADAGAAAHQAAANgDAIIiIFaQgGANgJAJQgJAKgOAAQgVAAgKgLg");
	this.shape_11.setTransform(-62.1,11.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_y, new cjs.Rectangle(-80.4,-35.8,160.8,68.69999999999999), null);


(lib.tube_txt_r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhADLQgYgNgRgVQgRgVgJgbQgJgbAAgcQAAgcAIgdQAIgbAQgWQAQgXAXgNQAYgOAgAAQAUABAUAGQATAHAQANIAAhrQAAgUALgMQALgMARAAQASAAALAMQALAMAAAUIAAFSQAAATgLAMQgLANgSAAQgQgBgKgHQgJgJgEgQQgLASgVAJQgVAJgTAAQgeAAgYgMgAgagKQgMAIgIAKQgHAMgEAPQgEAOAAANQAAAPAEAOQAEAOAHALQAIAMAMAHQALAIAPAAQAQgBAMgHQALgIAIgLQAIgMADgPQAEgPAAgOQAAgOgEgOQgEgOgIgLQgHgKgMgHQgLgHgQAAQgPAAgLAHg");
	this.shape.setTransform(24.575,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape_1.setTransform(-5.375,3.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhiCLQgLgMAAgUIAAjSQAAgTALgNQALgMARAAQAQAAAJAIQAJAIACAOQAMgRATgIQARgJAcAAIAVACIAUAGQARAJAHAPQAGAOgHAQQgIAPgPAEQgQAEgSgKQgMgIgSAAQgXAAgNAQQgNAPAAAXIAACJQAAAUgLAMQgLANgSAAQgRAAgLgNg");
	this.shape_2.setTransform(-30.7491,3.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// wht
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AhADLQgYgOgRgUQgRgWgJgaQgJgbAAgcQAAgdAIgcQAIgbAQgWQAQgXAXgNQAYgOAgAAQAUAAAUAHQATAHAQANIAAhrQAAgUALgMQALgMARAAQASAAALAMQALAMAAAUIAAFSQAAATgLANQgLALgSABQgQAAgKgIQgJgJgEgRQgLATgVAJQgVAJgTAAQgeAAgYgMgAgagKQgMAIgIAKQgHAMgEAOQgEAPAAANQAAAOAEAPQAEAOAHALQAIAMAMAHQALAIAPgBQAQAAAMgHQALgIAIgLQAIgMADgPQAEgPAAgOQAAgOgEgOQgEgPgIgLQgHgKgMgGQgLgHgQAAQgPAAgLAHg");
	this.shape_3.setTransform(27.575,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape_4.setTransform(-2.375,5.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AhiCLQgLgMAAgUIAAjSQAAgTALgNQALgMARAAQAQAAAJAIQAJAIACAOQAMgRATgIQARgJAcAAIAVACIAUAGQARAJAHAPQAGAOgHAQQgIAPgPAEQgQAEgSgKQgMgIgSAAQgXAAgNAQQgNAPAAAXIAACJQAAAUgLAMQgLANgSAAQgRAAgLgNg");
	this.shape_5.setTransform(-27.7491,5.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_r, new cjs.Rectangle(-46,-35.8,92,68.69999999999999), null);


(lib.tube_txt_b = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape.setTransform(35.675,3.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhACQQgVgHgOgOQgOgNgIgVQgIgTAAgaIAAiWQgBgUALgMQALgMASAAQASAAALAMQALAMAAAUIAACJQAAAcAPANQAPAOAUAAQAZgBANgQQANgPAAgXIAAiJQAAgUALgMQALgMARAAQATAAALAMQAKAMABAUIAADSQgBAUgKANQgLAMgTABQgOgBgKgIQgKgJgCgNQgLAQgTAIQgSAIgbAAQgXAAgUgHg");
	this.shape_1.setTransform(5.65,3.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcDJQgKgMgBgUIAAlRQABgUAKgMQAMgMAQAAQARAAAMAMQAKAMABAUIAAFRQgBAUgKAMQgMAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(-15.75,-3.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdDOQgVgJgLgSQgEAQgJAJQgKAHgRABQgRAAgLgNQgLgMAAgTIAAlSQAAgUALgMQALgMARAAQASAAALAMQALAMAAAUIAABrQAQgNATgHQAUgGATgBQAgAAAYAOQAYANAQAXQAQAWAIAbQAIAdAAAcQAAAcgJAbQgJAbgRAVQgRAVgYANQgZAMgdAAQgUAAgUgJgAgagKQgMAHgIAKQgHALgEAOQgEAOAAAOQAAAOAEAPQADAPAIAMQAIALALAIQAMAHAPABQAQAAALgIQAMgHAHgMQAIgLAEgOQAEgOAAgPQAAgNgEgOQgEgPgIgMQgHgKgMgIQgLgHgQAAQgPAAgLAHg");
	this.shape_3.setTransform(-37.025,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// wht
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.498)").s().p("Ag2CNQgbgLgTgVQgUgUgLgcQgKgcAAghQAAgdAKgcQALgbASgVQATgWAagMQAagNAfAAQAgAAAaANQAaANATAVQATAVAKAaQAKAZAAAZQAAARgIAJQgIAIgTAAIinAAQAEAeAVAOQAVAOAbAAQAQAAANgFIAYgLIAUgLQAJgFAIAAQANAAAKAKQAKALAAANQAAAMgMANQgMAMgTAJQgTAJgXAGQgXAGgWAAQggAAgcgMgAgrhEQgQARgDAaIB9AAQgDgbgQgRQgQgRgcAAQgaAAgRASg");
	this.shape_4.setTransform(38.675,5.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AhACQQgVgHgNgOQgPgOgIgTQgJgUAAgZIAAiXQABgUAKgMQAMgMARAAQASAAALAMQALAMAAAUIAACJQAAAcAPANQAPANAVAAQAZABAMgRQANgPAAgXIAAiJQAAgUALgMQALgMASAAQARAAAMAMQALAMgBAUIAADSQABAUgLANQgMAMgRABQgPgBgKgJQgJgHgCgOQgMAQgTAIQgSAIgbAAQgYAAgTgHg");
	this.shape_5.setTransform(8.65,5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AgbDJQgMgMAAgUIAAlRQAAgUAMgMQAKgMARAAQASAAAKAMQAMAMgBAUIAAFRQABAUgMAMQgKAMgSAAQgRAAgKgMg");
	this.shape_6.setTransform(-12.75,-1.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.498)").s().p("AgdDOQgVgJgLgTQgEARgJAJQgKAIgRAAQgRgBgLgLQgLgNAAgTIAAlSQAAgUALgMQALgMARAAQASAAALAMQALAMAAAUIAABrQAQgNATgHQAUgHATAAQAgAAAYAOQAYANAQAXQAQAWAIAbQAIAcAAAdQAAAcgJAbQgJAagRAWQgRAUgYAOQgZAMgdAAQgUAAgUgJgAgagKQgMAGgIAKQgHALgEAPQgEAOAAAOQAAAOAEAPQADAPAIAMQAIALALAIQAMAHAPAAQAQABALgIQAMgHAHgMQAIgLAEgOQAEgPAAgOQAAgNgEgPQgEgOgIgMQgHgLgMgHQgLgHgQAAQgPAAgLAHg");
	this.shape_7.setTransform(-34.025,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_b, new cjs.Rectangle(-55.5,-35.8,111,68.69999999999999), null);


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


(lib.paint_tube_outline = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF00").s().p("AkoY5QgYgUgPgcQgPgbgDgfIgGhHQgvgJgvgMIgCAAQh2gchdhcIABAAQhzhrgdjLQigxRBWyTQgeguAAhLIAAhHQgBi7C8AAIWtAAQC8AAgBC7IAABHQAABBgXAqQAzQPhDKkIAAAAQgpGRgcDBIAAAAQg0FtlEA8IgBAAIhGANIgFBBQgDAfgPAcQgPAbgZAUQh9BhirABQirgBh9hhg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_outline, new cjs.Rectangle(-91.4,-169.1,182.9,338.2), null);


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


(lib.check_green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// check
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20DE00").s().p("Ak/AWIBvhvIB9B8IEkkkIBwBwImUGTg");
	this.shape.setTransform(-0.0014,0.0119,0.8372,0.8372);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// dark
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D27E04").s().p("Ak/AWIBvhvIB9B8IEkkkIBwBwImUGTg");
	this.shape_1.setTransform(-0.0014,-2.4881,0.8372,0.8372);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// light
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFECA0").s().p("Ak/AWIBvhvIB9B8IEkkkIBwBwImUGTg");
	this.shape_2.setTransform(-0.0014,2.5119,0.8372,0.8372);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_green, new cjs.Rectangle(-26.8,-24.1,53.7,48.2), null);


(lib.yellow_button_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// center
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FECB00").s().p("Ak3E4QiBiBAAi3QAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// light
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AnEHFQi8i7ABkKQgBkJC8i7QC7i8EJAAQEJAAC8C8QC7C7AAEJQAAEKi7C7Qi8C7kJABQkJgBi7i7g");
	this.shape_1.setTransform(0.023,-0.0267,0.7756,0.7756);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// dark
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC02").s().p("AlcFeQiRiRAAjNQAAjMCRiRQCQiQDMAAQDNAACRCQQCQCRAADMQAADNiQCRQiRCQjNAAQjMAAiQiQg");
	this.shape_2.setTransform(-0.025,4.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_button_bg, new cjs.Rectangle(-49.6,-49.7,99.30000000000001,103.30000000000001), null);


(lib.circle_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FE34").s().p("AAAHwQjFAAiMiLIAAAAQiLiLgBjEIgCgmQAAjGCNiNQCMiMDGAAQDHAACNCMIAAAAQCMCNAADGQAAAbgDAaQgGC6iFCGIAAAAQiNCLjFAAIAAAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_outline, new cjs.Rectangle(-47.9,-49.6,95.9,99.30000000000001), null);


(lib.xbutton_inner = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(113,210,255,0.875)").s().p("Ag8BWQgKgBgHgGIAAgBIgBAAQgHgHAAgKIAAh5QAAgKAIgIIACgBQAGgGAJAAIB5AAQAKAAAHAHIABACQAHAHAAAJIAAB5QAAAKgHAHIgBABQgHAGgKABgAhKhNIgBABQgHAHAAAJIAAB5QAAAJAGAGIABABQAGAGAJAAIB5AAQAJAAAHgGIAAgBQAGgGAAgJIAAh5QAAgIgGgHIAAAAIAAgBQgHgGgJAAIh5AAIAAAAQgIAAgGAFg");
	this.shape.setTransform(9.825,9.8249);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(113,210,255,0.749)").s().p("Ag8BYQgLAAgIgIIgBAAQgHgIAAgLIAAh5QAAgLAIgJIACgBQAIgGAJAAIB5AAQALAAAIAHIABACIAAABQAHAHAAAKIAAB5QAAALgIAIIAAAAQgIAIgKAAgAhLhPIgCABQgIAIAAAKIAAB5QAAAKAHAHIABAAIAAABQAHAGAKABIB5AAQAKgBAHgGIABgBQAHgHAAgKIAAh5QAAgJgHgHIgBgCQgHgHgKAAIh5AAIAAAAQgJAAgGAGg");
	this.shape_1.setTransform(9.8251,9.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(113,210,255,0.624)").s().p("AA9BbIh5AAQgMgBgJgIIAAgBQgJgIAAgMIAAh5QAAgMAJgJIADgCQAIgHAKAAIB5AAQAMAAAIAIIADAEQAHAIAAAKIAAB5QAAAMgJAIIAAAAIgBABQgIAIgLABIAAAAIgBAAgAhNhRIgCABQgIAJAAALIAAB5QAAALAHAHIABABQAIAIALAAIB6AAQAKAAAIgIIAAgBQAIgHAAgLIAAh5QAAgKgHgHIAAgBIgBgCQgIgHgLAAIh5AAIAAAAQgJAAgIAGg");
	this.shape_2.setTransform(9.8251,9.8252);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(113,210,255,0.373)").s().p("AA9BgIh5AAIgBAAQgNgBgKgJIAAgBIgBAAQgKgKAAgOIAAh5QAAgOALgLIADgDQAKgHALAAIB5AAQANAAALAKIADAEQAIAJAAAMIAAB5QAAANgJAJIgCADQgKAJgNABIAAAAIgBAAgAA9BdIABAAQAMAAAJgJIACgCQAIgJAAgMIAAh5QAAgLgHgJIgDgEQgKgIgMAAIh5AAQgLAAgIAHIgEACQgJAKAAANIAAB5QAAANAJAJIAAAAIABABQAJAIAMABIABAAg");
	this.shape_3.setTransform(9.8252,9.8253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(113,210,255,0.247)").s().p("AA9BiIh5AAIgBAAQgOgBgLgJIAAgBIgBAAQgKgLAAgPIAAh5QAAgPALgMIAEgDQAKgHAMAAIB5AAQAOAAALAKIADADQAKALgBANIAAB5QAAAPgKALIgCABIgBAAQgKAKgNAAIAAAAIgBAAgAA9BgIABAAQANgBAKgJIACgDQAJgJAAgNIAAh5QAAgMgIgJIgDgEQgLgKgNAAIh5AAQgLAAgKAHIgDADQgLALAAAOIAAB5QAAAOAKAKIABAAIAAABQAKAJANABIABAAg");
	this.shape_4.setTransform(9.8256,9.8252);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(113,210,255,0.122)").s().p("AA9BlIh5AAIgBAAQgPgBgLgLIgBAAIgBgBQgLgLAAgQIAAh5QAAgQAMgNIAEgDQALgIANAAIB5AAQAPAAAMALIADADQAKAMAAAOIAAB5QAAAQgMALIgCADQgLAJgOABIAAAAIgBAAgAA9BiIABAAQANAAAKgKIABAAIACgBQAKgLAAgPIAAh5QABgNgKgLIgDgDQgLgKgOAAIh5AAQgMAAgKAHIgEADQgLAMAAAPIAAB5QAAAPAKALIABAAIAAABQALAJAOABIABAAg");
	this.shape_5.setTransform(9.8255,9.8253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(113,210,255,0.498)").s().p("AA9BdIh5AAIgBAAQgMgBgJgIIgBgBIAAAAQgJgJAAgNIAAh5QAAgNAJgKIAEgCQAIgHALAAIB5AAQAMAAAKAIIADAEQAHAJAAALIAAB5QAAAMgIAJIgCACQgJAJgMAAIAAAAIgBAAgAhOhTIgDACQgJAJAAAMIAAB5QAAAMAJAIIAAABQAJAIAMABIB5AAIABAAQALgBAIgIIABgBIAAAAQAJgIAAgMIAAh5QAAgKgHgIIgDgEQgIgIgMAAIh5AAIAAAAQgKAAgIAHg");
	this.shape_6.setTransform(9.8251,9.8252);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#71D2FF").s().p("Ag8BTQgJAAgGgGIgBgBQgGgGAAgJIAAh5QAAgJAHgHIABgBQAGgFAIAAIB5AAQAJAAAHAGIAAABIAAAAQAGAHAAAIIAAB5QAAAJgGAGIAAABQgHAGgJAAg");
	this.shape_7.setTransform(9.825,9.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.xbutton_inner, new cjs.Rectangle(-0.2,-0.2,20.099999999999998,20.099999999999998), null);


(lib.buttonBlank = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,0,0.008)").s().p("A13V4MAAAgrvMArvAAAMAAAArvg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonBlank, new cjs.Rectangle(-140,-140,280.1,280.1), null);


(lib.Hand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgDhCQADgHAGgGQAGgFALAAQALAAAIAFQAHAFADAHIAAABQACAFAAAGIAAAHQACgFADgHQADgHANgDQAMgCAHAKQADAGACAHIAAARIAAAOAA2gwIAAAYABjggQACgFADgFQAEgHAMAAQAJAAAFAHIAHAOIADARQAAApgJAaQgMAygfAwIiCAAQhqiUABgJQACgKAIgHQAJgGAKACQAKAEArAnIgBiPQAFgMAFgHQAJgKALAAQALAAAIAKQAFAGADAHQACAGAAAGIAAA0IAAAm");
	this.shape.setTransform(0.0746,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmCaQhqiUABgJQACgKAIgHQAJgGAKADQAKADArAnIgBiPQAFgMAFgHQAJgKALAAQALAAAIAKQAFAGADAHQACAGAAAGIAAA0QADgHAGgFQAGgGALAAQALAAAIAFQAHAFADAHIAAABIACALIAAAHIAFgLQADgIANgCQAMgDAHAKQADAGACAHIAAASIAAANIAAgNIAFgLQAEgHAMAAQAJAAAFAHIAHAOIADARQAAApgJAaQgMAygfAwgAA2gYIAAgYgAgDgcIAAgmg");
	this.shape_1.setTransform(0.0746,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hand, new cjs.Rectangle(-15.3,-16.4,30.8,32.8), null);


(lib.flash_glow_fx = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash_glow1
	this.instance = new lib.flash_glow1();
	this.instance.setTransform(0,2.3,0.2882,0.2882);
	this.instance.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.6208,scaleY:0.6208,y:4.5,alpha:1},2).wait(1).to({scaleX:0.9535,scaleY:0.9535,y:6.75},0).to({scaleX:1.5003,scaleY:1.5003,y:8.95,alpha:0.1016},2).to({_off:true},1).wait(1));

	// flash_glow2
	this.instance_1 = new lib.flash_glow2();
	this.instance_1.setTransform(0.05,0,0.2982,0.2982,0,0,0,0.1,0);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.705,scaleY:0.705,alpha:1},2).wait(1).to({scaleX:1.1118,scaleY:1.1118,x:0.15},0).to({scaleX:1.5186,scaleY:1.5186,x:0.25,alpha:0.1992},2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.5,-239.5,535,479);


(lib.paintbrush_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_end
	this.instance = new lib.paintbrush_end();
	this.instance.setTransform(2.9,41.2,0.8467,0.8467,0,24.9422,-155.0578,2.8,152.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({skewX:-10.2963,skewY:-190.2963,x:238.85,y:57.5},3).to({regX:2.7,skewX:13.6578,skewY:-166.3422,x:288.95,y:252.4},3).to({scaleX:0.8466,scaleY:0.8466,skewX:25.1536,skewY:-154.8464,x:148.95,y:276.45},3).to({regX:2.6,regY:152.6,skewX:13.7567,skewY:-166.2433,x:100.8,y:254.25},1).to({regX:2.7,regY:152.5,skewX:2.3603,skewY:-177.6397,x:56.45,y:217.65},1).to({skewX:-11.071,skewY:-191.071,x:32.5,y:169.65},1).to({regX:2.6,regY:152.6,skewX:-4.0379,skewY:-184.0379,x:58.45,y:117.5},1).to({skewX:0.9604,skewY:-179.0396,x:141.65,y:61.75},1).to({regX:2.7,skewX:5.963,skewY:-174.037,x:194.65,y:65.95},1).to({skewX:10.9616,skewY:-169.0384,x:235,y:170.05},1).to({regX:2.6,skewX:15.9604,skewY:-164.0396,x:165.4,y:214},1).to({regX:2.7,skewX:10.9616,skewY:-169.0384,x:75.05,y:176.65},2).to({skewX:-9.0372,skewY:-189.0372,x:113.9,y:83.9},2).to({regX:2.6,regY:152.7,skewX:3.7929,skewY:-176.2071,x:255.75,y:154.65},2).to({scaleX:0.8465,scaleY:0.8465,skewX:4.5023,skewY:-175.4977,x:179.3,y:205.1},1).to({scaleX:0.8466,scaleY:0.8466,skewX:5.2131,skewY:-174.7869,x:122.7,y:235.5},1).to({regY:152.8,skewX:15.2125,skewY:-164.7875,x:71.45,y:192.9},1).to({regY:152.7,skewX:-4.787,skewY:-184.787,x:44.8,y:126.65},1).to({skewX:10.2117,skewY:-169.7883,x:110.65,y:38.85},2).to({regY:152.8,scaleX:0.8465,scaleY:0.8465,skewX:-19.3119,skewY:-199.3119,x:161.2,y:-18.8},2).to({skewX:-29.2782,skewY:-209.2782,x:161.25},2).wait(1));

	// paintbrush_brush_red
	this.instance_1 = new lib.paintbrush_brushred("single",0);
	this.instance_1.setTransform(6.85,40.5);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AgSAaQgJgFgEgKQgEgLAEgIQADgKAJgGQAJgGAKABIAAgCQAPADAHAGQAFAEAEAJQADAGAAADQABAFgGAJQgFAIgJAGQgEACABACQgUAAgKgGg");
	this.shape.setTransform(-245.0046,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({x:79.85,y:43,startPosition:1},0).wait(1).to({rotation:14.9983,x:153.6,y:42.25},0).wait(1).to({rotation:-6.4746,x:242.8,y:59.3,startPosition:2},0).wait(1).to({regX:0.1,regY:0.1,rotation:32.5008,x:261.65,y:124.55},0).wait(1).to({regX:0,regY:0,rotation:-6.4746,x:280.25,y:189.55,startPosition:3},0).wait(1).to({regX:0.1,regY:0.1,rotation:2.3359,x:296.65,y:255.75},0).wait(1).to({regX:0,regY:0,rotation:-6.4746,x:252.9,y:271.7,startPosition:4},0).wait(1).to({rotation:27.3741,x:200.45,y:279.95},0).wait(1).to({rotation:1.225,x:149.95,y:274.15,startPosition:5},0).wait(1).to({rotation:1.225,x:101.95,y:253.15,startPosition:6},0).wait(1).to({x:61.95,y:222.15,startPosition:7},0).wait(1).to({regX:0.1,regY:0.1,rotation:7.5189,x:39.05,y:171.6},0).wait(1).to({regX:0,regY:0,rotation:1.225,x:57.3,y:116.5,startPosition:8},0).wait(1).to({scaleX:0.9606,rotation:0,skewX:-13.7737,skewY:-10.5176,x:136.4,y:53.15,startPosition:1},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9803,skewX:-1.9824,skewY:-0.355,x:190.25,y:59.05},0).wait(1).to({regY:-0.1,scaleX:1,rotation:24.8076,skewX:0,skewY:0,x:238,y:178.55,startPosition:2},0).wait(1).to({regX:0,regY:0,rotation:-5.1909,x:161.85,y:238.7,startPosition:4},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:24.7536,x:118.05,y:212.45},0).wait(1).to({regX:0,regY:0,rotation:-20.1893,x:77.95,y:176.25,startPosition:6},0).wait(1).to({regX:0.1,regY:-0.1,rotation:9.809,x:95,y:126.1},0).wait(1).to({regY:0,rotation:15.0393,x:116.3,y:81.4,startPosition:8},0).wait(1).to({rotation:79.7308,x:181.85,y:97.6},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:30.5601,x:257.25,y:172.1,startPosition:2},0).wait(1).to({x:184.85,y:227.2,startPosition:3},0).wait(1).to({regX:0.4,rotation:15.5594,x:123.05,y:254.2,startPosition:4},0).wait(1).to({regX:0.5,scaleX:0.9997,scaleY:0.9997,rotation:-13.8861,x:76.85,y:187.8,startPosition:6},0).wait(1).to({regX:0.6,rotation:1.1116,x:49.05,y:129.2,startPosition:7},0).wait(1).to({regY:0.2,rotation:16.1104,x:80.9,y:89.9,startPosition:8},0).wait(1).to({regX:0.7,scaleX:0.8795,scaleY:0.8795,rotation:23.5981,x:114.75,y:36.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:1.225,x:138.5,y:8.8,startPosition:9},0).wait(1).to({rotation:1.225,x:165.5,y:-28.2,startPosition:10},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.0098,rotation:0,skewX:-28.7732,skewY:-36.7686,x:159.65,y:-25.1},0).wait(1).to({scaleX:1.0097,skewX:-22.3297,skewY:-30.3252},0).wait(1));

	// paintbrush_color_red
	this.instance_2 = new lib.paintbrush_color_red("synched",0,false);
	this.instance_2.setTransform(142.6,185.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.4,-200.2,631.8,583);


(lib.paintbrush_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_end
	this.instance = new lib.paintbrush_end();
	this.instance.setTransform(2.9,41.2,0.8467,0.8467,0,24.9422,-155.0578,2.8,152.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({skewX:-10.2963,skewY:-190.2963,x:238.85,y:57.5},3).to({regX:2.7,skewX:13.6578,skewY:-166.3422,x:288.95,y:252.4},3).to({scaleX:0.8466,scaleY:0.8466,skewX:25.1536,skewY:-154.8464,x:148.95,y:276.45},3).to({regX:2.6,regY:152.6,skewX:13.7567,skewY:-166.2433,x:100.8,y:254.25},1).to({regX:2.7,regY:152.5,skewX:2.3603,skewY:-177.6397,x:56.45,y:217.65},1).to({skewX:-11.071,skewY:-191.071,x:32.5,y:169.65},1).to({regX:2.6,regY:152.6,skewX:-4.0379,skewY:-184.0379,x:58.45,y:117.5},1).to({skewX:0.9604,skewY:-179.0396,x:141.65,y:61.75},1).to({regX:2.7,skewX:5.963,skewY:-174.037,x:194.65,y:65.95},1).to({skewX:10.9616,skewY:-169.0384,x:235,y:170.05},1).to({regX:2.6,skewX:15.9604,skewY:-164.0396,x:165.4,y:214},1).to({regX:2.7,skewX:10.9616,skewY:-169.0384,x:75.05,y:176.65},2).to({skewX:-9.0372,skewY:-189.0372,x:113.9,y:83.9},2).to({regX:2.6,regY:152.7,skewX:3.7929,skewY:-176.2071,x:255.75,y:154.65},2).to({scaleX:0.8465,scaleY:0.8465,skewX:4.5023,skewY:-175.4977,x:179.3,y:205.1},1).to({scaleX:0.8466,scaleY:0.8466,skewX:5.2131,skewY:-174.7869,x:122.7,y:235.5},1).to({regY:152.8,skewX:15.2125,skewY:-164.7875,x:71.45,y:192.9},1).to({regY:152.7,skewX:-4.787,skewY:-184.787,x:44.8,y:126.65},1).to({skewX:10.2117,skewY:-169.7883,x:110.65,y:38.85},2).to({regY:152.8,scaleX:0.8465,scaleY:0.8465,skewX:-19.3119,skewY:-199.3119,x:161.2,y:-18.8},2).to({skewX:-29.2782,skewY:-209.2782,x:161.25},2).wait(1));

	// paintbrush_brush_blue
	this.instance_1 = new lib.paintbrush_brushblue("single",0);
	this.instance_1.setTransform(6.85,40.5);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AgSAaQgJgFgEgKQgEgLAEgIQADgKAJgGQAJgGAKABIAAgCQAPADAHAGQAFAEAEAJQADAGAAADQABAFgGAJQgFAIgJAGQgEACABACQgUAAgKgGg");
	this.shape.setTransform(-245.0046,17.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({x:79.85,y:43,startPosition:1},0).wait(1).to({rotation:14.9983,x:153.6,y:42.25},0).wait(1).to({rotation:-6.4746,x:242.8,y:59.3,startPosition:2},0).wait(1).to({regX:0.1,regY:0.1,rotation:32.5008,x:261.65,y:124.55},0).wait(1).to({regX:0,regY:0,rotation:-6.4746,x:280.25,y:189.55,startPosition:3},0).wait(1).to({regX:0.1,regY:0.1,rotation:2.3359,x:296.65,y:255.75},0).wait(1).to({regX:0,regY:0,rotation:-6.4746,x:252.9,y:271.7,startPosition:4},0).wait(1).to({rotation:27.3741,x:200.45,y:279.95},0).wait(1).to({rotation:1.225,x:149.95,y:274.15,startPosition:5},0).wait(1).to({rotation:1.225,x:101.95,y:253.15,startPosition:6},0).wait(1).to({x:61.95,y:222.15,startPosition:7},0).wait(1).to({regX:0.1,regY:0.1,rotation:7.5189,x:39.05,y:171.6},0).wait(1).to({regX:0,regY:0,rotation:1.225,x:57.3,y:116.5,startPosition:8},0).wait(1).to({scaleX:0.9606,rotation:0,skewX:-13.7737,skewY:-10.5176,x:136.4,y:53.15,startPosition:1},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9803,skewX:-1.9824,skewY:-0.355,x:190.25,y:59.05},0).wait(1).to({regY:-0.1,scaleX:1,rotation:24.8076,skewX:0,skewY:0,x:238,y:178.55,startPosition:2},0).wait(1).to({regX:0,regY:0,rotation:-5.1909,x:161.85,y:238.7,startPosition:4},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:24.7536,x:118.05,y:212.45},0).wait(1).to({regX:0,regY:0,rotation:-20.1893,x:77.95,y:176.25,startPosition:6},0).wait(1).to({regX:0.1,regY:-0.1,rotation:9.809,x:95,y:126.1},0).wait(1).to({regY:0,rotation:15.0393,x:116.3,y:81.4,startPosition:8},0).wait(1).to({rotation:79.7308,x:181.85,y:97.6},0).wait(1).to({regX:0.2,regY:0.1,scaleX:0.9998,scaleY:0.9998,rotation:30.5601,x:257.25,y:172.1,startPosition:2},0).wait(1).to({x:184.85,y:227.2,startPosition:3},0).wait(1).to({regX:0.4,rotation:15.5594,x:123.05,y:254.2,startPosition:4},0).wait(1).to({regX:0.5,scaleX:0.9997,scaleY:0.9997,rotation:-13.8861,x:76.85,y:187.8,startPosition:6},0).wait(1).to({regX:0.6,rotation:1.1116,x:49.05,y:129.2,startPosition:7},0).wait(1).to({regY:0.2,rotation:16.1104,x:80.9,y:89.9,startPosition:8},0).wait(1).to({regX:0.7,scaleX:0.8795,scaleY:0.8795,rotation:23.5981,x:114.75,y:36.9},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:1.225,x:138.5,y:8.8,startPosition:9},0).wait(1).to({rotation:1.225,x:165.5,y:-28.2,startPosition:10},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.0098,rotation:0,skewX:-28.7732,skewY:-36.7686,x:159.65,y:-25.1},0).wait(1).to({scaleX:1.0097,skewX:-22.3297,skewY:-30.3252},0).wait(1));

	// paintbrush_color_blue
	this.instance_2 = new lib.paintbrush_color_blue("synched",0,false);
	this.instance_2.setTransform(142.6,185.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.4,-200.2,631.8,583);


(lib.paintbrush_big = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_end
	this.instance = new lib.paintbrush_end();
	this.instance.setTransform(2.9,41.2,0.8467,0.8467,0,24.9422,-155.0578,2.8,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paintbrush_brush
	this.instance_1 = new lib.paintbrush_brush_noclr("single",0);
	this.instance_1.setTransform(6.85,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintbrush_big, new cjs.Rectangle(-94.3,-133.1,193.8,252.39999999999998), null);


(lib.paintbrush_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_end
	this.instance = new lib.paintbrush_end();
	this.instance.setTransform(-2.9,43.15,1.1455,0.7706,0,24.9412,-155.0581,2.6,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paintbrush_brush
	this.instance_1 = new lib.paintbrush_brush_noclr("single",7);
	this.instance_1.setTransform(-3.25,46.55,0.9984,0.9984,0,22.6269,-157.3731,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintbrush_small, new cjs.Rectangle(-93.7,-118.3,186.7,249.3), null);


(lib.paintbrush_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_small
	this.instance = new lib.paintbrush_small("synched",0,false);
	this.instance.setTransform(11.5,-17.95,0.4,0.4,0,0,0,21.7,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(51,51,51,0.498)","#D4810B"],[0,1],17.4,-34.7,-7.9,28.5).s().p("AixHRIAogSQgugFgqgTQgegNgagUQgwglgLg5QA+AZAhgZQgagOgPgUQgPgTgFgZQgHgmARgjQAEgKAGgKQAGAKAGAHIAGAHQAGAGAHAEQAHAEAHABQAmADAfgZIAqgkIASgQQAdgZAkgNQAMgEANgDIABgDQAPgsAUgrIAGgLIAAAAQAVg8AfhDQBAiKBIhVQBIhWAlARQAlARgTBuQgUBuhACKQgfBDghA1IABABIgFALQgTAtgZApIgCAEQASAkAHAyQAKBKgjAyQgBgXgGggQACAVgvBIQgwBIhJAZQgjAMgiAAQglAAgjgOg");
	this.shape.setTransform(1.3473,-20.8076);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paintbrush_btn, new cjs.Rectangle(-34.7,-71.7,70.2,98.80000000000001), null);


(lib.mix_color_nobrush = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mix_color_txt
	this.instance = new lib.mix_color_txt();
	this.instance.setTransform(-1.15,25.9,0.7597,0.7597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// yellow_button_bg
	this.instance_1 = new lib.yellow_button_bg();
	this.instance_1.setTransform(-0.05,-1.85,1.7521,1.7518,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mix_color_button_shadow_circle
	this.instance_2 = new lib.mix_color_button_shadow_circle();
	this.instance_2.setTransform(6.95,4.8,0.9,0.9,0,0,0,0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_nobrush, new cjs.Rectangle(-97,-134.7,194.1,236.5), null);


(lib.mix_color_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_btn
	this.instance = new lib.paintbrush_btn();
	this.instance.setTransform(0.1,-36.7,1.2121,1.2121,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mix_color_txt
	this.instance_1 = new lib.mix_color_txt();
	this.instance_1.setTransform(-1.15,25.9,0.7597,0.7597);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// yellow_button_bg
	this.instance_2 = new lib.yellow_button_bg();
	this.instance_2.setTransform(-0.05,-1.85,1.7521,1.7518,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mix_color_button, new cjs.Rectangle(-87,-128.1,174.1,220.39999999999998), null);


(lib.mix_color_brushin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paintbrush_btn
	this.instance = new lib.paintbrush_btn();
	this.instance.setTransform(0.1,-36.7,1.2121,1.2121,0,0,0,0.1,-0.1);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},2).wait(1));

	// mix_color_txt
	this.instance_1 = new lib.mix_color_txt();
	this.instance_1.setTransform(-1.15,25.9,0.7597,0.7597);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// yellow_button_bg
	this.instance_2 = new lib.yellow_button_bg();
	this.instance_2.setTransform(-0.05,-1.85,1.7521,1.7518,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// mix_color_button_shadow_circle
	this.instance_3 = new lib.mix_color_button_shadow_circle();
	this.instance_3.setTransform(6.95,4.8,0.9,0.9,0,0,0,0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({alpha:0.6484},0).to({_off:true},1).wait(1));

	// mix_color_button_shadow_brush
	this.instance_4 = new lib.mix_color_button_shadow_brush();
	this.instance_4.setTransform(6.95,4.8,0.9,0.9,0,0,0,0.5,0.8);
	this.instance_4.alpha = 0.5;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({alpha:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-128.1,181,224.3);


(lib.paint_tray_LG = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqgA4eQjIAAiNifQiMifAAjiMAAAhf7QAAjhCMigQCNifDIAAMBVBAAAQDHAACNCfQCNCgAADhMAAABf7QAADiiNCfQiNCfjHAAg");
	mask.setTransform(0,-0.0005);

	// paint_splats
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3FFFF").s().p("EAnIAQBQgJgGgHgKQgJgOgEgbQgCgbACgQQAFgbAPgTQANgSARgDQAOgEATAHQAYALAIAPQACAJABALIgCAWQgBAHACAPQgBANgCAJQgHAZgZAUQgSAMgPABQgKAAgKgGgA13PiQgYgLgJgZQgIgYALgYQAMgYAYgJQAZgJAXAMQAYALAIAZQAJAYgMAYQgLAYgYAJQgLAEgLAAQgNAAgNgHgEAiyAO3QgcgbAKgxQAJgxApgqQApgrBFgVQBFgVAmAWQAoAWgpA/QgoA/gqArQgpArgwAMQgPADgNAAQgeAAgTgTgAuSOWQgXgLgJgZQgIgYALgYQALgXAYgKQAZgIAYALQAYALAIAZQAJAZgLAXQgMAYgZAJQgKAEgLAAQgNAAgOgHgEgwEAMwQgYgLgJgZQgJgZAMgYQALgYAZgKQAZgIAYALQAYAMAJAYQAJAagLAYQgMAYgZAJQgLAEgLAAQgOAAgNgHgAp3LGQgZgCgRgUQgQgTACgZQACgaATgRQAUgQAZACQAaACARATQAQAUgCAZQgCAagTAQQgSAPgWAAIgGAAgEgqjAHeQgXgLgIgYQgJgYALgXQALgXAYgJQAYgIAXALQAXALAJAYQAIAYgLAXQgLAXgXAJQgLAEgKAAQgOAAgNgHgEgi9AGTQgXgLgJgYQgIgYALgYQALgXAYgIQAYgJAXALQAYALAIAYQAJAYgLAXQgLAYgZAIQgKAEgKAAQgOAAgNgGgAtrEbQgagCgQgTQgQgTACgaQACgaATgQQATgRAaACQAaACAQATQARAUgCAZQgCAagUARQgRAPgWAAIgGgBgEAn1ADlQgkgDgQgJQgQgKgGgRQgEgMACgNQACgMAIgKQAOgUAbgEQAOgDAbADQAoAEATAHQATAGAKAMQAHAMAAAOQgBAPgIALQgPAWgfAGQgMADgRAAIgbgCgEAnAAA8QhdgignguQgogugBg6QgCg7AvgnQAtgnA5AMQA5ANAlBEQAkBEAoA6QApA6guAnQgZAVgnAAQghAAgqgQgEAqigABQgTgJgJgIQgQgQgHgbQgKgqATgcQALgPASgHQATgGAQAIQAXALALAuQALAvgLAbQgJATgRADIgHABQgKAAgNgEgA1GgQQgagCgRgUQgSgUACgbQACgbAVgRQAUgRAaACQAbACARAUQARAUgCAbQgCAbgUARQgSAQgYAAIgFgBgA46m6QgbgDgRgUQgSgUADgbQACgaAUgSQAUgRAbACQAaACASAUQARAVgCAbQgCAagUARQgTAQgXAAIgFAAgEgp1gHSQgdgCgSgVQgTgWADgdQACgcAVgTQAWgTAdACQAdADASAVQATAWgCAdQgDAdgVASQgTARgZAAIgHgBgEAoGgJRQgXgPgEgiQgDgSAGgNQAEgKAIgGQAJgGALgCQAVgCAPASQAFAHAFAQQAHAWAAAJQABASgJAMQgJALgQABIgCAAQgPAAgLgIgEAsbgJ0QgfgLgMhgQgNhfAXhHQAWhIAqgZQApgZAgALQAfALAGA3QAGA2gXBCQgYBBgiBIQgdA+gcAAQgEAAgFgBgEAvPgLAQgOgCgKgKQgLgKgDgOQgHgZAQgcQAUglAngNQAUgHAOAEQAGACAFADQALAHAEAPQADANgEAOQgEARgVAbIgDADQgQAVgJAIQgSAMgQAAIgCAAgEgtpgN8QgdgCgTgWQgSgWACgdQACgcAWgTQAWgTAdADQAdACASAWQASAWgCAcQgCAdgWATQgTARgaAAIgFgBg");
	this.shape.setTransform(1.4886,248.1101);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE9EF").s().p("Al7drQgqgrAAg7QAAg8AjhhQAihiBNArQBLArAiA3QAiA3AAA8QgBA7gqAqQgrArg7AAQg7gBgrgqgAtFeQQgQgHgIgOQgEgJgBgXIgCgjQABgTAIgMQAMgSAfgIQAigIAYAJQAhALAGAcQAJAjgpApQgeAbgZAFIgKABQgLAAgKgEgADyWCQgUgHgIgMQgJgNADgcQACgdAKgQQAPgRAYgBQAVgCAVAJQAaAJANARQALATgFAXQgFAWgRAOQgQANgXADIgLABQgQAAgQgFgAsaSkQgWgGgMgSQgLgUAFgVQAHgWAYgKQAWgIAUALQAPAGAGAKQANARgCAWQgDAOgKAMQgLALgOADIgNABQgIAAgGgCgAoARZQg+gHgxguQgwgtgYhAQgYg/AvgiQAugiBDAIQBEAIAsAuQAvAuAFA7QAGA7gfAjQgaAhgyAAIgQgBgAKhNCQg8gHgwgvQgvgwgjhKQgjhKAyghQAzggBMAOQBPAPAuAwQAwAvAGA9QAGA9gmAmQghAggxAAIgRgBgAkbKtQgNgGgHgNQgIgOAEgOQABgOAMgLQALgKAPgCQAPgCANAJQAMAJAGANQAJAYgRATQgJALgOADIgMACQgJAAgJgEgAKXEPQgVgFgJgOQgKgQAKggQAHgYAIgLQALgSASgEQARgEAcANQAYAMAJANQAMARgEAWQgGAWgPAOQgWATgdAAQgOAAgOgEgAiOBhQgBgBgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgPgKgFgNQgEgLAFgNQAGgMAKgGQALgFANACQAMABAIAJQAJAJAAANQACANgGAKQgHAKgMAEIgKACQgHAAgGgDgAglijQgygJgIggQgFgTALgZQAZhEAqgcQAlgaAeAQQAYANAKAmQAIAlgJAaQgFASgTAYQgTAYgQAGQgPAGgTAAQgKAAgMgBgALvkXQgyAAhBgkQhDgkAWgxQAUgwAughQAtgjAxAAQAwABAjAjQAjAjAAAwQgBAxgiAjQgiAiguAAIgDAAgAjgrCQgSgMgIgfQgIghAJgZQALggAcgHQAjgJApApQAcAeAEAZQADAQgGAQQgHAQgOAHQgIAEgYABIgjACQgSgBgNgIgAJkt6QgRgGgKgQQgKgQADgRQAEgLAEgFQAJgPASgFQASgFAQAJQAPAHAGASQAHASgHAQQgGAQgQAIQgMAFgLAAIgLgBgAF8ujQgTgJgHgWQgGgVAJgTQAHgQARgKQASgJASADQASADAOAOQAOAOACASQABAJgCAKQgCANgMAMQgPAPgaAAIgEAAQgNAAgMgFgAmRybQhhgiAqhNQArhLA3giQA3giA8AAQA8ABApAqQArArAAA7QgBA8gqAqQgrAqg7AAIgCAAQg7AAhggjgAER14QgmgMgQgaQgJgPABgRQAAgTANgLQAMgLAggKIAZgOQAbgIAjAVQASALAGALQAOAWgJAdQgHAVgTAPQgTAPgWACIgLABQgPAAgSgFgAjV6YQg1gdAehGQAchFAogmQApglA1gIQAzgIAnAnQAnAogBA3QAAA4gnAnQgnAnhEAKQgSACgRAAQgvAAgngVg");
	this.shape_1.setTransform(-266,-164.3174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFD4").s().p("AlZPcQglg2Apg9QAog+AhhMQAghMApgOQApgOATBDQATBCgDBWQgCBXgxAtQgyAtgsAIIgKABQgnAAgggwgAHIO2Qg0gLghg3Qghg4gMhdQgNheAcgbQAbgbA9AhQA9AgAzA8QAzA9gDA1QgCA2goApQggAfgmAAQgLAAgKgCgAg0MpQgPgQgFgiQgFgiAQgQQAPgPAbANQAZAMAPAQQAQAPAAAWQAAAVgQAQQgPAPgVAAQgVAAgQgPgAmmLaQgPgPAAgUQAAgVAPgOQAOgPAdgGQAcgGAVAKQAUAKgOAfQgOAfgOAPQgPAOgUAAQgVAAgOgOgAiwI2QgXgGgGgfQgCgMAFgvQAEgvgBg/QgCg/gKgqQgKgqgpgGQgqgGg1ATQg2ASgYALIgkAOQgPAFgPgDQgQgDgIgNQgFgJAAgMQABgLAGgKQAHgLAXgXQBEg+AKgnQAJgogcgrQgcgtg8gJIhTgNQgQgDgKgEQgOgFgJgLQgJgLABgNQADgcAwgNQA1gNAhgKQAggLA2gaQA2gbAVgwQAVgvgIhWQgJhVgghpQgJgdAEgPQAFgPAPgJQAQgIAQADQAfAFATAiQALASALArQAVBKAXAyQAfBBAsAoQAhAfAgACIATACQASACAegNQAcgOAcgcQAcgcARgYQALgPAKgPQAkg/Aag+QAXgsAMgHQAWgPATALQAKAFAFAMQAEALgBANQAAAKgFANIgJAXQgVAzgFA+QgFA+AYA8QAYA8BjgLQBjgMBdgGQA4gEANAaQAGAMgFAPQgEAOgMAJQgOANglALQhBAVgoAWQgoAWgXAjQgYAiANAhQANAgA8A9QA8A9BDAyQAcAVAIAMQAHALABANQACANgHAKQgGAJgMAFQgKADgMgBQgOgBgegMQg9gag0gOQg1gOgaAJQgbAIgJAfQgJAfAHAvQAGAuAMAmIAKAdQAFARgBAOQAAAQgJANQgKAOgOADQgSACgRgQQgMgLgOgXQgohBgvg3Qgvg2gegHQgfgHgmAcQglAcglBWIgtBlQgGAPgHAJQgJALgNAFQgIAEgIAAQgFAAgFgCgAtNIuQhMgMAShLQAShLBdgtQBdguBDAIQBHgBhrCAQhdB3hIAAIgMgBgANAIoQg4gJgiguIg4hMIgigrQgPgVALgZQAMgaAfACQA+gCA4AcQA5AdAqAwQAVAYAAAfQABAugnAaQgXAPgaAAIgKgBgAxOg4QgihAAqguQArgvAvgKQCXgrBmB1QAUAYhSAnQhRAphXAaQgaAIgVAAQgyAAgYgtgAMigzQgXglgfgnQghgnAYgaQAZgbA1ANQA1ANAYAbQAYAaAFAgQAFAhgUAaQgTAaggAFIgIAAQgbAAgUghgAPNjnIiMgTQhMgLgWgnQgXgnA8ghQA8giBHgLQBIgLBFAfQBFAfAFA3QAFA4gqAQQgcAMglAAQgUAAgXgEgAKVmvQgDgVAWgdQAVgdAWgDQAVgDARAMQASANADAWQADAVgNARQgNARgVADQgWADgZAAQgbgCgDgVgAD2rOQgegigBgtQgBg6ANg5QAKgrAdghQAUgWAbgNQApgVAqARQAOAFAIAJQAsArgPA+QgFARgKAQQgfAwguAfQgeAUgXAcQgMAegeAGIgBAAQgIAAgFgGgAmpsDQgZgbhCgVQhCgVgdhPQgdhPBQgcQBRgcBEBtQBDBsgfBUIgCACIgGAEIgLADIAAAAQgGAAgZgbg");
	this.shape_2.setTransform(350.6908,-156.4838,1.4434,1.4434,21.4388);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// paint_mix_bg
	this.instance = new lib.paint_mix_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// paint_mix_shadow
	this.instance_1 = new lib.paint_mix_shadow();
	this.instance_1.setTransform(0,3,1.01,1.01);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tray_LG, new cjs.Rectangle(-327.9,-367.1,655.8,740.2), null);


(lib.demo_helpBG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E2F4F2").s().p("EhJ0A+gQimAAh1h1Qh1h2AAilMAAAhwfQAAilB1h2QB1h1CmAAMCTpAAAQCmAAB0B1QB2B2AAClMAAABwfQAAClh2B2Qh0B1imAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("EhJ0A+gQimAAh1h1Qh1h2AAilMAAAhwfQAAilB1h2QB1h1CmAAMCTpAAAQCmAAB0B1QB2B2AAClMAAABwfQAAClh2B2Qh0B1imAAg");
	this.shape_1.setTransform(0.0101,-0.0013,1.025,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border_bk
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("EhJ0A+gQimAAh1h1Qh1h2AAilMAAAhwfQAAilB1h2QB1h1CmAAMCTpAAAQCmAAB0B1QB2B2AAClMAAABwfQAAClh2B2Qh0B1imAAg");
	this.shape_2.setTransform(0.0332,10.086,1.035,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// demo_shadow_bg
	this.instance = new lib.demo_shadow_bg();
	this.instance.setTransform(0,13.1,1.005,1.005);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.demo_helpBG, new cjs.Rectangle(-539.6,-410,1079.2,841.7), null);


(lib.refreshColorBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// replay_brown
	this.instance = new lib.refresh_brown();
	this.instance.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// yellow_button_bg
	this.instance_1 = new lib.yellow_button_bg();
	this.instance_1.setTransform(0,-1.65,0.8652,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow_circle
	this.instance_2 = new lib.mix_color_button_shadow_circle();
	this.instance_2.setTransform(2.95,2.2,0.45,0.45,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.refreshColorBtn, new cjs.Rectangle(-42.9,-44.6,89.69999999999999,93), null);


(lib.tube_txt_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_y
	this.instance = new lib.tube_txt_y();
	this.instance.setTransform(0.05,0.05,0.7482,0.7482,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_white_circle
	this.instance_1 = new lib.tube_white_circle();
	this.instance_1.setTransform(0.15,0.1,0.946,0.9176,90,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_yellow, new cjs.Rectangle(-68.3,-37.5,136.7,75.1), null);


(lib.tube_txt_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_r
	this.instance = new lib.tube_txt_r();
	this.instance.setTransform(-0.1,0.2,0.8404,0.8404,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_white_circle
	this.instance_1 = new lib.tube_white_circle();
	this.instance_1.setTransform(0,0.15,0.8404,0.8404,-90,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_red, new cjs.Rectangle(-62.6,-33.3,125.30000000000001,66.69999999999999), null);


(lib.tube_txt_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_b
	this.instance = new lib.tube_txt_b();
	this.instance.setTransform(0,0.05,0.8215,0.8215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_white_circle
	this.instance_1 = new lib.tube_white_circle();
	this.instance_1.setTransform(0,0,0.8215,0.8215,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tube_txt_blue, new cjs.Rectangle(-61.2,-32.5,122.4,65.1), null);


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


(lib.paint_tube_endsquish_yellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,245,146,0.549)").s().p("ArVgiQAiAUBwgUQBEgMB3ACQBOACBkAIQCoAOC3gFQBcgDBhgIQEsgbBHAmIAdAQQgjgJghgCQhtgHiEAbQiEAbibgBQiagBiUgXQiUgXi2ABQirABAaBDQghglgtgtg");
	this.shape.setTransform(-1.0625,-20.7273);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,245,146,0.549)").s().p("ApYANQhZgYgSAXIgCgBQgQgMgNgIQgUgMgLABQgEABgDADIgDAEQAQghApAOQAoAOBLAJQBMAICzgTQCygUDcAgQDdAdDCgfQDCggBhAeQAJAIATAjQhEgkidAPQjdAWhoACQhoABiPgbQiQgaiRAkQhEARhEAAQhPAAhPgXg");
	this.shape_1.setTransform(1.3,-23.7887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,245,146,0.549)").s().p("ArGASQgagcgOgLQgRgNABAhIABAOIgOgCIgBgcQgCgzBAASQBXAYCqAJQCqAJC3gOQC1gPDXAVQDWAUBugOQBugPAXAQQAQAKAUA1IgDgEQgegog7ABQhrABhiAMQhiAMhggIQhggJhagLQhagKhfASQhgASiUAJQiUAJhZggQhYgegcAHQgVAFAYA2Igjgmg");
	this.shape_2.setTransform(1.6595,-22.3831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(216,125,29,0.2)").s().p("ArKAaQAKghACgbQAHAhgCAkIgRgJgALLAAIgFAQIgGADIALgTg");
	this.shape_3.setTransform(13.1625,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(133,139,169,0.349)").s().p("Aj2BaQiLgOhZgCQg3AAgjAEIgxAHQg5AHgjAGQgvAJgTgkQALARAPgGQASgEAqhYQAQgiAKgdIAGgTIARAIIgBALQgCAVgFAVQgKAsApAPQAbALAzgEQB/gJCBgOQCBgNBsABQBsABCNAVQCNAUCJgMQCJgMA6gUQAmgOAwhUIAGgDQgJAegNAkQgqB3gfAAQhhgakRAeQiAAPh7ACIgyABQh/AAh9gOg");
	this.shape_4.setTransform(7.05,13.912);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(216,125,29,0.2)").s().p("AgGBfQjdgfjKAIQjLAJg3AVQg3AVgagsQAJAJAKgEQARgHAeiQIAIgqQgGA+gDAwQgEBKCBgXQCBgYB9gDQB9gDBZAHQBYAIBhAWQBiAXCSgWQCTgWBfADQBgAEAqADQAYACAug6IgnBAQgXAkgPgFQhbgZjBAgQhjAQhpAAQhmAAhsgPg");
	this.shape_5.setTransform(6.6125,9.9377);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(216,125,29,0.2)").s().p("AsOgTQAkA3AZAJQAGADAFgDQASgMAig4IAOgYIAKgUQgLA/AVAHQAXAJBZgVQBYgWBfAMQBgAMBdACQBdACBtgOQBvgNBfAFQBeAEBpgGQBpgHBkAPQBIAKAngmQggA7gyAIQg3AHjJgLQjJgLjZALQjYAKixACQixACg9AFQg+AFgkAYQgGAEgGAAQgfAAglhXg");
	this.shape_6.setTransform(1.8125,18.2236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// front
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],-16.1,26.7,-16.1,-10.4).s().p("Aq4BQQALglABgcQACgjhEhRQAdAXAZAhQBIBcCOgbQCOgaCNAPIA+AFQByAIB7gKQCfgLCqAOQCqAOBcgbQBIgVg3hdQAsAngBAeQgBApgVBHQg6AfijgIQjmgLiZAGQiYAGlSARQg5ADgvAAQioAAg7ghg");
	this.shape_7.setTransform(11.3131,-3.3413);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQBiAIBoACQBKABBLgCQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQh9AJhwgHIg+gFQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_8.setTransform(5.3843,-13.1406);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],-1.5,24.6,-10,-7.1).s().p("AA7CEQAJgfgBgRQgBgnhBhMIghgnQgkgogQgGIgEAAIAAgcQAGAAAGACQA9A8AlAuQBEBRgBAjQgBAdgLAkQgKgGgIgHg");
	this.shape_9.setTransform(-66.0488,-9.8895);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],-1.5,15.8,-10,-15.9).s().p("AgoDdQgMgVgIg2IAVAAQAEAVAFAQQASA1AohlQAohlgBglQgBgnhBhNIghgnQgkgogQgGIgEAAIAAgcQAGgBAGADQA9A8AlAuQBEBRgBAkQgCA4gqBaQgqBZgSAEIgHABQgKAAgIgMg");
	this.shape_10.setTransform(-66.0488,-1.0755);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_11.setTransform(8.1756,4.837);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_12.setTransform(5.3843,-13.1406);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_13.setTransform(-72.75,-21.9735);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgDgIgIgNIgPgSQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA0AqAQAdIAEAIQALAegeCPQgNBCgLAmgAgjhsQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4IAGANQgJAFgEAHQgNgdgNgTg");
	this.shape_14.setTransform(-69.0006,-6.204);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3A600").s().p("AAAAYQgdg3gOgGQATAEATABQARATARAUIAPASQgXAFgOAIIgHgOg");
	this.shape_15.setTransform(-69.325,-17.2375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_16.setTransform(-72.75,-21.9735);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgEgNgWgaQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA8AxAMAeQALAegeCPQgNBCgLAmgAgPCLIADADQAGAEAJgpQAKgqADgaQACgagSguQgQgugTgbQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4QAjBEgBAqQgFBMgbA0QgHANgGADIgCABg");
	this.shape_17.setTransform(-69.0006,-6.204);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_18.setTransform(-68.6525,-5.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],-2.8,17.9,-2.8,-5.2).s().p("AgaCiQjdgfjKAIIgeABIgyADIgfADQhtAIgmAPQg3AVgagrQAJAJAKgFQARgHAeiQQAdiRgLgdIAAgCQAfAoAHAqQAJA2BhAJIADABIAcABQAYABAagBQBEgDBMgQQB5gbEfAcQClAeCcgdQCbgdCCAdQBaAUAMguIAFAPQANAjgiA2Ig3BbQgXAkgPgFQhbgZjBAgQhjAQhpAAQhnAAhrgPg");
	this.shape_19.setTransform(8.6448,3.2377);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],10.8,15.1,10.8,-15).s().p("AntCKIgcgCIgDAAQhhgKgJg1QgHgqgfgoQgNgeg6gvIgHgFQgQgNgNgIQgUgLgLABQgEAAgDAEIgDAEQAQghApAOQAoAOBLAIQAsAFBMgFIAfgCIAzgEIA1gFQCygTDcAfQDdAfDCggQDCggBhAeQAOALApBZQAhBHAOAkQgMAuhagTQiCgdibAdQicAdilgfQkfgch5AbQhMARhDADIgaAAIgZAAg");
	this.shape_20.setTransform(5,-13.5218);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3A600").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpIgLgQQgLgNgQgNQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABIAVAbIAPAXQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAg9hsIgHgDQAbAEAlABIABABQASANAMAOIgpAEQgZgVgWgNg");
	this.shape_21.setTransform(-68.2457,-3.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_22.setTransform(-70.475,-7.6757);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_23.setTransform(-73.225,-16.775);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAbhGg0g3QgNgOgSgNIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAQANALANIALAQQAaApgRBDQgJAjgNAiIgQAngAg0hMQgDAAgBADIgJgaQAFgBAGADIAHADQAWANAZAVIgRACQgXgSgMAAg");
	this.shape_24.setTransform(-69.639,-4.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_25.setTransform(3.95,-11.3954);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_26.setTransform(10.6271,6.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_27.setTransform(-70.475,-7.6757);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_28.setTransform(-73.225,-16.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAihXhahBIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAZAVANAVQAaApgRBDQgJAjgNAiIgQAngAAFBrQAGgHAIgUQAXg7gQgcQgQgegYgTQgagUgMAAQgDAAgBADIgJgaQAFgBAGADIAHADQAgATAkAjQAlAigNAuQgMApgUAmg");
	this.shape_29.setTransform(-69.639,-4.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_30.setTransform(10.6271,6.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_31.setTransform(3.95,-11.3954);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AAADBF").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpQgNgVgZgVQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABQAWAaAOAYQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAAABpQATgmAMgpQANguglgiQgkgjgggTIgHgDQAbAEAlABIABABQBZBBgiBXIgdBGIgOADg");
	this.shape_32.setTransform(-68.2457,-3.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// painttube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(1.9,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.35,y:-1.15},0).wait(1).to({x:2.85,y:-2.6},0).wait(1));

	// back
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F1C20A","#BD8300","#F7D305"],[0.094,0.502,0.953],3.1,-19.5,3.1,19.5).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQAAARgIAeIgMAoIhhgSIAAgKIgSgIIAAAOQAGB9AVAiQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_33.setTransform(-72.2036,3.2389);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],4.3,24.6,-4.2,-7.1).s().p("AB1CEQAIgeAAgSQgBgmhBhMIgigoQgkgogPgFQgSgHgaA0IgpBHQgmBGAfBEQguhOAeg3IA8huQAagxAeALQA7A8AnAuQBEBRgBAkQgBAcgLAkQgLgGgHgHg");
	this.shape_34.setTransform(-71.8065,-9.9017);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],-16.1,26.7,-16.1,-10.4).s().p("Aq4BPQALgkABgcQACgjhEhRQAdAXAZAhQBIBcCOgbQCOgaCNAPQCOAPCdgMQCfgLCqAOQCqAOBcgbQBIgVg3hdQAsAngBAeQgBApgVBHQg6AfijgIQjmgLiZAGQiYAGlSARQg4ADgwAAQioAAg7gig");
	this.shape_35.setTransform(11.3131,-3.3419);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_36.setTransform(5.3843,-13.1406);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],17.9,2.2,-16.2,2.1).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQABAmgoBkQgpBlgSg1QgQgvgDhQIgSgIQAGCJAVAkQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_37.setTransform(-72.2036,3.2389);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],4.3,15.8,-4.2,-15.9).s().p("AARDdQgVgkgGiJIASAIQADBQAQAvQASA1AphlQAohlgBglQgBgnhBhNIgignQgkgogPgGQgSgGgaA0IgpBHQgmBGAfBDQguhNAeg2IA8hwQAagwAeALQA7A8AnAuQBEBRgBAkQgCA4gqBaQgqBZgTAEIgHABQgKAAgIgMg");
	this.shape_38.setTransform(-71.8065,-1.0752);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_39.setTransform(8.1756,4.837);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_40.setTransform(5.3843,-13.1406);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F1C20A","#BD8300","#F7D305"],[0.094,0.682,0.941],-76.6,-8.9,-65.6,32.3).s().p("AgVBnQgwh5gKgvQgFg5AIggIAWhcQAShCAQgIQAQgIAZAZIALALQgSgCgSgDIgEgBIgCABQgNAHgTBMQgUBMgBAfQgBAfBMCOQAIARAJAIQATAfAigCIguDLQgKhigvh6g");
	this.shape_41.setTransform(-73.162,8.8265);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],-26.1,18.4,13.6,29.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQAMATAMAdIALAZQARAugCAbQgCATgGAeIghALIgDgTIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_42.setTransform(-72.355,-1.3778);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5IAGANQgJAFgFAHQgMgdgMgTQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgCgIgJgMIgOgTQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAWhHAOgQQADgDAEgBQALgBATAMQAMAIARANIAHAFQA0AqAPAdIAEAIQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_43.setTransform(-72.0617,-3.679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQAAgmgdg7IgFgNQgeg5gOgFQATADASABQASAUARAUIAOATQAJAMACAIQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_44.setTransform(-68.6525,-5.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-7.1,1.8,-1.7,22.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQARAaASAvQARAugCAbQgCAZgKApQgKAqgHgEQgGgEgEgaIgFghIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_45.setTransform(-72.355,-1.3778);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61,-45.6,-72.8,-1.3).s().p("AgVBvQgwh5gKguQgFg6AIggIAWhcQAShCAQgHQAQgIAZAYIALALQgSgBgSgEIgEAAIgCAAQgNAHgTBMQgUBMgBAgQgBAfBMCNQAIARAJAIQATAfAigCIgzC6QgFhRgvh6g");
	this.shape_46.setTransform(-73.162,7.9515);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5QAkBEgBAqQgGBLgbA0QgHAOgGADQgTAJgOhbIASgIIAFAhQAEAaAGAEQAHAEAKgqQAKgpACgaQACgagRguQgSgvgRgaQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgDgNgWgaQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAWhHAOgQQADgDAEgBQALgBATAMQAMAIARANIAHAFQA8AwALAfQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_47.setTransform(-72.0617,-3.679);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_48.setTransform(-68.6525,-5.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFE900","#E8A500","#FFE900"],[0.027,0.459,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAQAOALANIALAPQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgTIAAgRQAAggAMgGQAGgCAIADIAHADQAWAOAXAUIgQACQgWgRgMAAQgJAAAAAaIAAAYQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAbhFg0g4QgNgOgSgNIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_49.setTransform(-71.7147,0.48);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIABAQIABATQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_50.setTransform(-72.5821,1.6395);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#F1C20A","#BD8300"],[0.094,0.918],18.5,6.1,10.7,35.4).s().p("AgWB/QgXhpgDgxIgBgYQABgaAJAAQALAAAYARIACACQAYAUAQAdQAQAcgXA8IgFAMIgbgDIgCgJIgRgDQAOBFAPgGQATgFAWgEQgQAkgMAXQgHAMgGAAQgPAAgQhKgAgWifIgSgCIgBgQQAAgMACgGQAEgKAKAJIACABQANALAZAcIglgDg");
	this.shape_51.setTransform(-70.8796,-4.8236);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_52.setTransform(4.0521,7.7962);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F1C20A","#FFE900"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_53.setTransform(3.95,-11.3954);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3A600").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpIgMgQQgKgNgQgOQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAIAVAcIAQAXQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAg9h8IgGgDQAbAEAlABIABAAQARAOANANIgqAFQgYgVgXgNg");
	this.shape_54.setTransform(-68.2707,-1.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],12,8.1,6.1,30).s().p("AgWB/QgXhpgDgxQgDgyAMAAQAMAAAZATQAYAUAQAdQAQAcgXA8QgXA7gLg7IgRgDQAOBFAPgGQATgFAWgEQgQAkgMAXQgHAMgGAAQgPAAgQhKgAgWifIgSgCIgBgQQAAgMACgGQAEgKAKAJIACABQANALAZAcIglgDg");
	this.shape_55.setTransform(-70.88,-4.8236);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIACAjQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_56.setTransform(-72.5821,1.6395);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAZAWANAUQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgkQAAggAMgGQAGgCAIADIAHADQAfAUAlAiQAlAigNAvQgOAtgXAqQgGALgFACQgRAGgNhFIAQADQANA7AXg7QAXg7gQgdQgQgdgZgUQgZgTgMAAQgMAAADAyQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAihXhahBIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_57.setTransform(-71.7147,0.48);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_58.setTransform(4.0521,7.7962);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_59.setTransform(3.95,-11.3954);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AAADBF").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpQgNgVgZgWQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAQAWAbAPAYQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAgEBiQAWgqANguQAOgvglghQgkgjghgTIgGgDQAbAEAlABIABAAQBZBCgjBWIgcBHQgWAEgSAFQAGgCAGgKg");
	this.shape_60.setTransform(-68.2707,-1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-27.9,174,69);


(lib.paint_tube_endsquish_red = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(253,124,129,0.549)").s().p("ArVgiQAiAUBwgUQBEgMB3ACQBOACBkAIQCoAOC3gFQBcgDBhgIQEsgbBHAmIAdAQQgjgJghgCQhtgHiEAbQiEAbibgBQiagBiUgXQiUgXi2ABQirABAaBDQghglgtgtg");
	this.shape.setTransform(-1.0625,-20.7273);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(253,124,129,0.549)").s().p("ApYANQhZgYgSAXIgCgBQgQgMgNgIQgUgMgLABQgEABgDADIgDAEQAQghApAOQAoAOBLAJQBMAICzgTQCygUDcAgQDdAdDCgfQDCggBhAeQAJAIATAjQhEgkidAPQjdAWhoACQhoABiPgbQiQgaiRAkQhEARhEAAQhPAAhPgXg");
	this.shape_1.setTransform(1.3,-23.7887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(253,124,129,0.549)").s().p("ArGASQgagcgOgLQgRgNABAhIABAOIgOgCIgBgcQgCgzBAASQBXAYCqAJQCqAJC3gOQC1gPDXAVQDWAUBugOQBugPAXAQQAQAKAUA1IgDgEQgegog7ABQhrABhiAMQhiAMhggIQhggJhagLQhagKhfASQhgASiUAJQiUAJhZggQhYgegcAHQgVAFAYA2Igjgmg");
	this.shape_2.setTransform(1.6595,-22.3831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("ArKAaQAKghACgbQAHAhgCAkIgRgJgALLAAIgFAQIgGADIALgTg");
	this.shape_3.setTransform(13.1625,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(133,139,169,0.349)").s().p("Aj2BaQiLgOhZgCQg3AAgjAEIgxAHQg5AHgjAGQgvAJgTgkQALARAPgGQASgEAqhYQAQgiAKgdIAGgTIARAIIgBALQgCAVgFAVQgKAsApAPQAbALAzgEQB/gJCBgOQCBgNBsABQBsABCNAVQCNAUCJgMQCJgMA6gUQAmgOAwhUIAGgDQgJAegNAkQgqB3gfAAQhhgakRAeQiAAPh7ACIgyABQh/AAh9gOg");
	this.shape_4.setTransform(7.05,13.912);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgGBfQjdgfjKAIQjLAJg3AVQg3AVgagsQAJAJAKgEQARgHAeiQIAIgqQgGA+gDAwQgEBKCBgXQCBgYB9gDQB9gDBZAHQBYAIBhAWQBiAXCSgWQCTgWBfADQBgAEAqADQAYACAug6IgnBAQgXAkgPgFQhbgZjBAgQhjAQhpAAQhmAAhsgPg");
	this.shape_5.setTransform(6.6125,9.9377);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AsOgTQAkA3AZAJQAGADAFgDQASgMAig4IAOgYIAKgUQgLA/AVAHQAXAJBZgVQBYgWBfAMQBgAMBdACQBdACBtgOQBvgNBfAFQBeAEBpgGQBpgHBkAPQBIAKAngmQggA7gyAIQg3AHjJgLQjJgLjZALQjYAKixACQixACg9AFQg+AFgkAYQgGAEgGAAQgfAAglhXg");
	this.shape_6.setTransform(1.8125,18.2236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// front
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],-1.5,24.6,-10,-7.1).s().p("AA7CEQAJgfgBgRQgBgnhBhMIghgnQgkgogQgGIgEAAIAAgcQAGAAAGACQA9A8AlAuQBEBRgBAjQgBAdgLAkQgKgGgIgHg");
	this.shape_7.setTransform(-66.0488,-9.8895);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQBiAIBoACQBKABBLgCQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQh9AJhwgHIg+gFQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_8.setTransform(5.3843,-13.1406);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],-16.1,26.7,-16.1,-10.4).s().p("Aq4BQQALglABgcQACgjhEhRQAdAXAZAhQBIBcCOgbQCOgaCNAPIA+AFQByAIB7gKQCfgLCqAOQCqAOBcgbQBIgVg3hdQAsAngBAeQgBApgVBHQg6AfijgIQjmgLiZAGQiYAGlSARQg5ADgvAAQioAAg7ghg");
	this.shape_9.setTransform(11.3131,-3.3413);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],-1.5,15.8,-10,-15.9).s().p("AgoDdQgMgVgIg2IAVAAQAEAVAFAQQASA1AohlQAohlgBglQgBgnhBhNIghgnQgkgogQgGIgEAAIAAgcQAGgBAGADQA9A8AlAuQBEBRgBAkQgCA4gqBaQgqBZgSAEIgHABQgKAAgIgMg");
	this.shape_10.setTransform(-66.0488,-1.0755);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_11.setTransform(8.1756,4.837);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_12.setTransform(5.3843,-13.1406);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BC131A").s().p("AAAAYQgdg3gOgGQATAEATABQARATARAUIAPASQgXAFgOAIIgHgOg");
	this.shape_13.setTransform(-69.325,-17.2375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_14.setTransform(-72.75,-21.9735);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgDgIgIgNIgPgSQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA0AqAQAdIAEAIQALAegeCPQgNBCgLAmgAgjhsQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4IAGANQgJAFgEAHQgNgdgNgTg");
	this.shape_15.setTransform(-69.0006,-6.204);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_16.setTransform(-72.75,-21.9735);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgEgNgWgaQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA8AxAMAeQALAegeCPQgNBCgLAmgAgPCLIADADQAGAEAJgpQAKgqADgaQACgagSguQgQgugTgbQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4QAjBEgBAqQgFBMgbA0QgHANgGADIgCABg");
	this.shape_17.setTransform(-69.0006,-6.204);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_18.setTransform(-68.6525,-5.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],10.8,15.1,10.8,-15).s().p("AntCKIgcgCIgDAAQhhgKgJg1QgHgqgfgoQgNgeg6gvIgHgFQgQgNgNgIQgUgLgLABQgEAAgDAEIgDAEQAQghApAOQAoAOBLAIQAsAFBMgFIAfgCIAzgEIA1gFQCygTDcAfQDdAfDCggQDCggBhAeQAOALApBZQAhBHAOAkQgMAuhagTQiCgdibAdQicAdilgfQkfgch5AbQhMARhDADIgaAAIgZAAg");
	this.shape_19.setTransform(5,-13.5218);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],-2.8,17.9,-2.8,-5.2).s().p("AgaCiQjdgfjKAIIgeABIgyADIgfADQhtAIgmAPQg3AVgagrQAJAJAKgFQARgHAeiQQAdiRgLgdIAAgCQAfAoAHAqQAJA2BhAJIADABIAcABQAYABAagBQBEgDBMgQQB5gbEfAcQClAeCcgdQCbgdCCAdQBaAUAMguIAFAPQANAjgiA2Ig3BbQgXAkgPgFQhbgZjBAgQhjAQhpAAQhnAAhrgPg");
	this.shape_20.setTransform(8.6448,3.2377);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BC131A").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpIgLgQQgLgNgQgNQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABIAVAbIAPAXQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAg9hsIgHgDQAbAEAlABIABABQASANAMAOIgpAEQgZgVgWgNg");
	this.shape_21.setTransform(-68.2457,-3.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_22.setTransform(-73.225,-16.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_23.setTransform(-70.475,-7.6757);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAbhGg0g3QgNgOgSgNIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAQANALANIALAQQAaApgRBDQgJAjgNAiIgQAngAg0hMQgDAAgBADIgJgaQAFgBAGADIAHADQAWANAZAVIgRACQgXgSgMAAg");
	this.shape_24.setTransform(-69.639,-4.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_25.setTransform(3.95,-11.3954);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_26.setTransform(10.6271,6.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_27.setTransform(-70.475,-7.6757);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_28.setTransform(-73.225,-16.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAihXhahBIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAZAVANAVQAaApgRBDQgJAjgNAiIgQAngAAFBrQAGgHAIgUQAXg7gQgcQgQgegYgTQgagUgMAAQgDAAgBADIgJgaQAFgBAGADIAHADQAgATAkAjQAlAigNAuQgMApgUAmg");
	this.shape_29.setTransform(-69.639,-4.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_30.setTransform(10.6271,6.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_31.setTransform(3.95,-11.3954);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AAADBF").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpQgNgVgZgVQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABQAWAaAOAYQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAAABpQATgmAMgpQANguglgiQgkgjgggTIgHgDQAbAEAlABIABABQBZBBgiBXIgdBGIgOADg");
	this.shape_32.setTransform(-68.2457,-3.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// painttube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(1.9,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.35,y:-1.15},0).wait(1).to({x:2.85,y:-2.6},0).wait(1));

	// back
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#971C21","#CE0F18","#CB0009"],[0.094,0.729,0.992],3.1,-19.5,3.1,19.5).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQAAARgIAeIgMAoIhhgSIAAgKIgSgIIAAAOQAGB9AVAiQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_33.setTransform(-72.2036,3.2389);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],-16.1,26.7,-16.1,-10.4).s().p("Aq4BPQALgkABgcQACgjhEhRQAdAXAZAhQBIBcCOgbQCOgaCNAPQCOAPCdgMQCfgLCqAOQCqAOBcgbQBIgVg3hdQAsAngBAeQgBApgVBHQg6AfijgIQjmgLiZAGQiYAGlSARQg4ADgwAAQioAAg7gig");
	this.shape_34.setTransform(11.3131,-3.3419);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_35.setTransform(5.3843,-13.1406);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],4.3,24.6,-4.2,-7.1).s().p("AB1CEQAIgeAAgSQgBgmhBhMIgigoQgkgogPgFQgSgHgaA0IgpBHQgmBGAfBEQguhOAeg3IA8huQAagxAeALQA7A8AnAuQBEBRgBAkQgBAcgLAkQgLgGgHgHg");
	this.shape_36.setTransform(-71.8065,-9.9017);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],17.9,2.2,-16.2,2.1).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQABAmgoBkQgpBlgSg1QgQgvgDhQIgSgIQAGCJAVAkQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_37.setTransform(-72.2036,3.2389);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],4.3,15.8,-4.2,-15.9).s().p("AARDdQgVgkgGiJIASAIQADBQAQAvQASA1AphlQAohlgBglQgBgnhBhNIgignQgkgogPgGQgSgGgaA0IgpBHQgmBGAfBDQguhNAeg2IA8hwQAagwAeALQA7A8AnAuQBEBRgBAkQgCA4gqBaQgqBZgTAEIgHABQgKAAgIgMg");
	this.shape_38.setTransform(-71.8065,-1.0752);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_39.setTransform(8.1756,4.837);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_40.setTransform(5.3843,-13.1406);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#971C21","#CE0F18","#CB0009"],[0.094,0.553,0.992],-76.6,-8.9,-65.6,32.3).s().p("AgVBnQgwh5gKgvQgFg5AIggIAWhcQAShCAQgIQAQgIAZAZIALALQgSgCgSgDIgEgBIgCABQgNAHgTBMQgUBMgBAfQgBAfBMCOQAIARAJAIQATAfAigCIguDLQgKhigvh6g");
	this.shape_41.setTransform(-73.162,8.8265);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5IAGANQgJAFgFAHQgMgdgMgTQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgCgIgJgMIgOgTQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAWhHAOgQQADgDAEgBQALgBATAMQAMAIARANIAHAFQA0AqAPAdIAEAIQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_42.setTransform(-72.0617,-3.679);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],-7.1,1.8,-1.7,22.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQAMATAMAdIALAZQARAugCAbQgCATgGAeIghALIgDgTIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_43.setTransform(-72.355,-1.3778);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQAAgmgdg7IgFgNQgeg5gOgFQATADASABQASAUARAUIAOATQAJAMACAIQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_44.setTransform(-68.6525,-5.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-7.1,1.8,-1.7,22.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQARAaASAvQARAugCAbQgCAZgKApQgKAqgHgEQgGgEgEgaIgFghIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_45.setTransform(-72.355,-1.3778);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61,-45.6,-72.8,-1.3).s().p("AgVBvQgwh5gKguQgFg6AIggIAWhcQAShCAQgHQAQgIAZAYIALALQgSgBgSgEIgEAAIgCAAQgNAHgTBMQgUBMgBAgQgBAfBMCNQAIARAJAIQATAfAigCIgzC6QgFhRgvh6g");
	this.shape_46.setTransform(-73.162,7.9515);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5QAkBEgBAqQgGBLgbA0QgHAOgGADQgTAJgOhbIASgIIAFAhQAEAaAGAEQAHAEAKgqQAKgpACgaQACgagRguQgSgvgRgaQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgDgNgWgaQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAWhHAOgQQADgDAEgBQALgBATAMQAMAIARANIAHAFQA8AwALAfQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_47.setTransform(-72.0617,-3.679);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_48.setTransform(-68.6525,-5.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIABAQIABATQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_49.setTransform(-72.5821,1.6395);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC131A").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpIgMgQQgKgNgQgOQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAIAVAcIAQAXQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAg9h8IgGgDQAbAEAlABIABAAQARAOANANIgqAFQgYgVgXgNg");
	this.shape_50.setTransform(-68.2707,-1.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#971C21","#CE0F18"],[0.094,0.918],18.5,6.1,10.7,35.4).s().p("AgWB/QgXhpgDgxIgBgYQABgaAJAAQALAAAYARIACACQAYAUAQAdQAQAcgXA8IgFAMIgbgDIgCgJIgRgDQAOBFAPgGQATgFAWgEQgQAkgMAXQgHAMgGAAQgPAAgQhKgAgWifIgSgCIgBgQQAAgMACgGQAEgKAKAJIACABQANALAZAcIglgDg");
	this.shape_51.setTransform(-70.8796,-4.8236);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FE010C","#C8242B","#FE010C"],[0.027,0.459,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAQAOALANIALAPQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgTIAAgRQAAggAMgGQAGgCAIADIAHADQAWAOAXAUIgQACQgWgRgMAAQgJAAAAAaIAAAYQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAbhFg0g4QgNgOgSgNIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_52.setTransform(-71.7147,0.48);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_53.setTransform(3.95,-11.3954);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#C8242B","#FE010C"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_54.setTransform(4.0521,7.7962);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],12,8.1,6.1,30).s().p("AgWB/QgXhpgDgxQgDgyAMAAQAMAAAZATQAYAUAQAdQAQAcgXA8QgXA7gLg7IgRgDQAOBFAPgGQATgFAWgEQgQAkgMAXQgHAMgGAAQgPAAgQhKgAgWifIgSgCIgBgQQAAgMACgGQAEgKAKAJIACABQANALAZAcIglgDg");
	this.shape_55.setTransform(-70.88,-4.8236);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIACAjQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_56.setTransform(-72.5821,1.6395);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAZAWANAUQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgkQAAggAMgGQAGgCAIADIAHADQAfAUAlAiQAlAigNAvQgOAtgXAqQgGALgFACQgRAGgNhFIAQADQANA7AXg7QAXg7gQgdQgQgdgZgUQgZgTgMAAQgMAAADAyQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAihXhahBIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_57.setTransform(-71.7147,0.48);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_58.setTransform(4.0521,7.7962);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_59.setTransform(3.95,-11.3954);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#AAADBF").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpQgNgVgZgWQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAQAWAbAPAYQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAgEBiQAWgqANguQAOgvglghQgkgjghgTIgGgDQAbAEAlABIABAAQBZBCgjBWIgcBHQgWAEgSAFQAGgCAGgKg");
	this.shape_60.setTransform(-68.2707,-1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-27.9,174,69);


(lib.paint_tube_endsquish_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(64,125,255,0.549)").s().p("ArVgiQAiAUBwgUQBEgMB3ACQBOACBkAIQCoAOC3gFQBcgDBhgIQEsgbBHAmIAdAQQgjgJghgCQhtgHiEAbQiEAbibgBQiagBiUgXQiUgXi2ABQirABAaBDQghglgtgtg");
	this.shape.setTransform(-1.0625,-20.7273);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(64,125,255,0.549)").s().p("ApYANQhZgYgSAXIgCgBQgQgMgNgIQgUgMgLABQgEABgDADIgDAEQAQghApAOQAoAOBLAJQBMAICzgTQCygUDcAgQDdAdDCgfQDCggBhAeQAJAIATAjQhEgkidAPQjdAWhoACQhoABiPgbQiQgaiRAkQhEARhEAAQhPAAhPgXg");
	this.shape_1.setTransform(1.3,-23.7887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(64,125,255,0.549)").s().p("ArGASQgagcgOgLQgRgNABAhIABAOIgOgCIgBgcQgCgzBAASQBXAYCqAJQCqAJC3gOQC1gPDXAVQDWAUBugOQBugPAXAQQAQAKAUA1IgDgEQgegog7ABQhrABhiAMQhiAMhggIQhggJhagLQhagKhfASQhgASiUAJQiUAJhZggQhYgegcAHQgVAFAYA2Igjgmg");
	this.shape_2.setTransform(1.6595,-22.3831);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// shadow
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("ArKAaQAKghACgbQAHAhgCAkIgRgJgALLAAIgFAQIgGADIALgTg");
	this.shape_3.setTransform(13.1625,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(133,139,169,0.349)").s().p("Aj2BaQiLgOhZgCQg3AAgjAEIgxAHQg5AHgjAGQgvAJgTgkQALARAPgGQASgEAqhYQAQgiAKgdIAGgTIARAIIgBALQgCAVgFAVQgKAsApAPQAbALAzgEQB/gJCBgOQCBgNBsABQBsABCNAVQCNAUCJgMQCJgMA6gUQAmgOAwhUIAGgDQgJAegNAkQgqB3gfAAQhhgakRAeQiAAPh7ACIgyABQh/AAh9gOg");
	this.shape_4.setTransform(7.05,13.912);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.2)").s().p("AgGBfQjdgfjKAIQjLAJg3AVQg3AVgagsQAJAJAKgEQARgHAeiQIAIgqQgGA+gDAwQgEBKCBgXQCBgYB9gDQB9gDBZAHQBYAIBhAWQBiAXCSgWQCTgWBfADQBgAEAqADQAYACAug6IgnBAQgXAkgPgFQhbgZjBAgQhjAQhpAAQhmAAhsgPg");
	this.shape_5.setTransform(6.6125,9.9377);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AsOgTQAkA3AZAJQAGADAFgDQASgMAig4IAOgYIAKgUQgLA/AVAHQAXAJBZgVQBYgWBfAMQBgAMBdACQBcACBugOQBvgNBfAFQBeAEBpgGQBpgHBkAPQBIAKAngmQggA7gyAIQg3AHjJgLQjJgLjZALQjYAKixACQixACg9AFQg+AFgkAYQgGAEgGAAQgfAAglhXg");
	this.shape_6.setTransform(1.825,18.2212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// front
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],-1.5,24.6,-10,-7.1).s().p("AA7CEQAJgfgBgRQgBgnhBhMIghgnQgkgogQgGIgEAAIAAgcQAGAAAGACQA9A8AlAuQBEBRgBAjQgBAdgLAkQgKgGgIgHg");
	this.shape_7.setTransform(-66.0488,-9.8895);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],-16.1,26.7,-16.1,-10.4).s().p("Aq4BQQALglABgcQACgjhEhRQAdAXAZAhQBIBcCOgbQCOgaCNAPIA+AFQByAIB7gKQCfgLCqAOQCqAOBcgbQBIgVg3hdQAsAngBAeQgBApgVBHQg6AfijgIQjmgLiZAGQiYAGlSARQg5ADgvAAQioAAg7ghg");
	this.shape_8.setTransform(11.3131,-3.3413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQBiAIBoACQBKABBLgCQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQh9AJhwgHIg+gFQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_9.setTransform(5.3843,-13.1406);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],-1.5,15.8,-10,-15.9).s().p("AgoDdQgMgVgIg2IAVAAQAEAVAFAQQASA1AohlQAohlgBglQgBgnhBhNIghgnQgkgogQgGIgEAAIAAgcQAGgBAGADQA9A8AlAuQBEBRgBAkQgCA4gqBaQgqBZgSAEIgHABQgKAAgIgMg");
	this.shape_10.setTransform(-66.0488,-1.0755);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_11.setTransform(8.1756,4.837);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_12.setTransform(5.3843,-13.1406);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#013FD4").s().p("AAAAYQgdg3gOgGQATAEATABQARATARAUIAPASQgXAFgOAIIgHgOg");
	this.shape_13.setTransform(-69.325,-17.2375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#0233A9","#054BF2","#003CCC"],[0.094,0.729,0.992],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_14.setTransform(-72.75,-21.9735);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgDgIgIgNIgPgSQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA0AqAQAdIAEAIQALAegeCPQgNBCgLAmgAgjhsQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4IAGANQgJAFgEAHQgNgdgNgTg");
	this.shape_15.setTransform(-69.0006,-6.204);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61.5,-15.7,-73.3,28.6).s().p("AgJAKIgDgBIgCABIgEADIgJgXIADgCQAQgIAZAYIALALQgSgCgTgDg");
	this.shape_16.setTransform(-72.75,-21.9735);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],15.9,19.6,15.8,-13.2).s().p("AAJDFQAFgNAGgWIAFgSQAQg9AGgvIAHhCQABgVgDgMQgEgNgWgaQgRgVgRgTIgMgLQgZgYgQAIIgDACIgJgXIAAgBQADgEAFAAQAKgBAUALQANAIARANIAFAFQA8AxAMAeQALAegeCPQgNBCgLAmgAgPCLIADADQAGAEAJgpQAKgqADgaQACgagSguQgQgugTgbQgFgHgEAAIgLgcIAEgEIACAAIADAAQAOAGAeA4QAjBEgBAqQgFBMgbA0QgHANgGADIgCABg");
	this.shape_17.setTransform(-69.0006,-6.204);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_18.setTransform(-68.6525,-5.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],10.8,15.1,10.8,-15).s().p("AntCKIgcgCIgDAAQhhgKgJg1QgHgqgfgoQgNgeg6gvIgHgFQgQgNgNgIQgUgLgLABQgEAAgDAEIgDAEQAQghApAOQAoAOBLAIQAsAFBMgFIAfgCIAzgEIA1gFQCygTDcAfQDdAfDCggQDCggBhAeQAOALApBZQAhBHAOAkQgMAuhagTQiCgdibAdQicAdilgfQkfgch5AbQhMARhDADIgaAAIgZAAg");
	this.shape_19.setTransform(5,-13.5218);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],-2.8,17.9,-2.8,-5.2).s().p("AgaCiQjdgfjKAIIgeABIgyADIgfADQhtAIgmAPQg3AVgagrQAJAJAKgFQARgHAeiQQAdiRgLgdIAAgCQAfAoAHAqQAJA2BhAJIADABIAcABQAYABAagBQBEgDBMgQQB5gbEfAcQClAeCcgdQCbgdCCAdQBaAUAMguIAFAPQANAjgiA2Ig3BbQgXAkgPgFQhbgZjBAgQhjAQhpAAQhnAAhrgPg");
	this.shape_20.setTransform(8.6448,3.2377);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#0233A9","#0045EA","#003CCC"],[0.094,0.729,0.992],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_21.setTransform(-73.225,-16.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#0233A9","#0045EA","#003CCC"],[0.094,0.729,0.992],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_22.setTransform(-70.475,-7.6757);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAbhGg0g3QgNgOgSgNIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAQANALANIALAQQAaApgRBDQgJAjgNAiIgQAngAg0hMQgDAAgBADIgJgaQAFgBAGADIAHADQAWANAZAVIgRACQgXgSgMAAg");
	this.shape_23.setTransform(-69.639,-4.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_24.setTransform(10.6271,6.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_25.setTransform(3.95,-11.3954);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#013FD4").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpIgLgQQgLgNgQgNQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABIAVAbIAPAXQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAg9hsIgHgDQAbAEAlABIABABQASANAMAOIgpAEQgZgVgWgNg");
	this.shape_26.setTransform(-68.2457,-3.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],11.6,10.9,5.7,32.8).s().p("AAgChIAOgDIgHAPgAgaiDIgSgCIgBgPQAAgNACgGQAEgJAKAIIACABQANAMAZAbIglgDg");
	this.shape_27.setTransform(-70.475,-7.6757);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-12.5,6.8,14.8,22.6).s().p("AgSAUQgGgDgFABIgPgqIAVAIIALAFQAXAMAiAYQglgBgagEg");
	this.shape_28.setTransform(-73.225,-16.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],21.8,15.6,13.4,-16.1).s().p("AAfCSIAGgPIAdhGQAihXhahBIgBgBQghgYgYgNIgLgFIgVgIIgIgXQAIACAMAFIACABIAPAHIAPAIIAIAFIAFADQAiAVAYAVQAZAVANAVQAaApgRBDQgJAjgNAiIgQAngAAFBrQAGgHAIgUQAXg7gQgcQgQgegYgTQgagUgMAAQgDAAgBADIgJgaQAFgBAGADIAHADQAgATAkAjQAlAigNAuQgMApgUAmg");
	this.shape_29.setTransform(-69.639,-4.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],0.5,15.9,0.5,-7.2).s().p("AriBTIAGgKIAKgUQAMgWAIgVQAQgoAEgjQAFgpgegxQAmAvAJAvQALA4BSgEQBTgFBegQQBegRBngDQBngDBzASQB0ASCMgUQCLgTBSAPQBSAOBOgBQA4gBATgrQAEAWgDALQgGAbgfBIQghBIg3AIQg3AIjJgLQjJgMjYALQjZALixACQiuACg+AFg");
	this.shape_30.setTransform(10.6271,6.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_31.setTransform(3.95,-11.3954);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AAADBF").s().p("AAeCYIAQgnQANgiAJgjQARhDgagpQgNgVgZgVQgXgVgjgVIgFgDIgIgFIgPgIIgPgHIgCgBQgMgFgIgCIgEgBIAEABIAUADIACAAIAOACIASACIAlADIAQATIAmAqIABABQAWAaAOAYQAeAxgEAnQgEAjgRAqQgIAUgLAWIgLAUIgGALgAAABpQATgmAMgpQANguglgiQgkgjgggTIgHgDQAbAEAlABIABABQBZBBgiBXIgdBGIgOADg");
	this.shape_32.setTransform(-68.2457,-3.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	// painttube_end
	this.instance = new lib.paint_tube_end();
	this.instance.setTransform(1.9,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.35,y:-1.15},0).wait(1).to({x:2.85,y:-2.6},0).wait(1));

	// back
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#0233A9","#0141DB","#003CCC"],[0.094,0.729,0.992],3.1,-19.5,3.1,19.5).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQAAARgIAeIgMAoIhhgSIAAgKIgSgIIAAAOQAGB9AVAiQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_33.setTransform(-72.2036,3.2389);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],4.3,24.6,-4.2,-7.1).s().p("AB1CEQAIgeAAgSQgBgmhBhMIgigoQgkgogPgFQgSgHgaA0IgpBHQgmBGAfBEQguhOAeg3IA8huQAagxAeALQA7A8AnAuQBEBRgBAkQgBAcgLAkQgLgGgHgHg");
	this.shape_34.setTransform(-71.8065,-9.9017);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],17.9,2.2,-16.2,2.1).s().p("AhhAiIgRgbQgfhDAmhGIAphHQAag0ASAGQAPAFAkApIAiAnQBBBNABAnQABAmgoBkQgpBlgSg1QgQgvgDhQIgSgIQAGCJAVAkQAQAgAogDIhmAqQgFh4hDhfg");
	this.shape_35.setTransform(-72.2036,3.2389);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],4.3,15.8,-4.2,-15.9).s().p("AARDdQgVgkgGiJIASAIQADBQAQAvQASA1AphlQAohlgBglQgBgnhBhNIgignQgkgogPgGQgSgGgaA0IgpBHQgmBGAfBDQguhNAeg2IA8hwQAagwAeALQA7A8AnAuQBEBRgBAkQgCA4gqBaQgqBZgTAEIgHABQgKAAgIgMg");
	this.shape_36.setTransform(-71.8065,-1.0752);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-13,18.6,-13,-18.5).s().p("AkBC1QiLgPhZgBQg3AAgjAEQhcAMgxAIIgKACQgoADgQggQALARAOgGQATgEAqhZQAqhZACg5QABgkhEhRQAdAXAZAhQBIBdCOgbQCOgaCOAPQCNAPCegLQCegMCqAOQCrAOBbgbQBIgWg3hcQAsAnAAAdQgCA7gqB3QgqB4gfAAQhigakQAeQiAAOh8ADIgwAAQiAAAh9gNg");
	this.shape_37.setTransform(8.1756,4.837);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],-8.2,11.2,-8.2,-15.8).s().p("Ap9A0QgZghgdgWQgngug8g9QAjAUBwgUQBDgMB3ACQBOACBkAIQCoAOC3gFQBdgDBggIQEsgbBHAmQBaAwAtAnQA3BchIAWQhbAbirgOQiqgOieALQifAMiMgPQiOgQiOAbQggAGgcAAQhiAAg4hIg");
	this.shape_38.setTransform(5.3843,-13.1406);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],-2.8,17.9,-2.8,-5.2).s().p("AgaCiQjdgfjKAIIgeABIgyADIgfADQhtAIgmAPQgVAIgSgCIgJgBQgVgGgMgVQAJAJAKgFQARgHAeiQQAdiRgLgdIAAgBIAAgBQAfAoAHAqQAJA2BhAJIADABIAcABQAYABAagBQBEgDBMgQQB5gbEfAcQClAeCcgdQCbgdCCAdQBaAUAMguIAFAPQANAjgiA2Ig3BbQgXAkgPgFQhbgZjBAgQhjAQhpAAQhnAAhrgPg");
	this.shape_39.setTransform(8.6448,3.2377);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],10.8,15.1,10.8,-15).s().p("AntCKIgcgCIgDAAQhhgKgJg1QgHgqgfgoIAAABIgDgHIgEgHIgRgVQgSgTgdgYIgHgFQgQgNgNgIQgUgLgLABQgEAAgDAEIgDAEQAQghApAOQAoAOBLAIQAsAFBMgFIAfgCIAzgEIA1gFQCygTDcAfQDdAfDCggQDCggBhAeQAOALApBZQAhBHAOAkQgMAuhagTQiCgdibAdQicAdilgfQkfgch5AbQhMARhDADIgaAAIgZAAg");
	this.shape_40.setTransform(5,-13.5218);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#0233A9","#0045EA","#003CCC"],[0.094,0.729,0.992],-7.1,1.8,-1.7,22.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQAMATAMAdIALAZQARAugCAbQgCATgGAeIghALIgDgTIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_41.setTransform(-72.355,-1.3778);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#0233A9","#054BF2","#003CCC"],[0.094,0.729,0.992],-76.6,-8.9,-65.6,32.3).s().p("AgVBnQgwh5gKgvQgFg5AIggIAWhcQAShCAQgIQAQgIAZAZIALALQgSgCgSgDIgEgBIgCABQgNAHgTBMQgUBMgBAfQgBAfBMCOQAIARAJAIQANAVAUAGIAJABIALABIguDLQgKhigvh6g");
	this.shape_42.setTransform(-73.162,8.8265);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5IAGANQgJAFgFAHQgMgdgMgTQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgCgIgJgMIgOgTQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAUhAANgTIADgEQADgDAEgBQALgBATAMQAMAIARANIAHAFQAdAXARAUIASAVIADAHIAEAHIAAABQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_43.setTransform(-72.0617,-3.679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQAAgmgdg7IgFgNQgeg5gOgFQATADASABQASAUARAUIAOATQAJAMACAIQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_44.setTransform(-68.6525,-5.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-7.1,1.8,-1.7,22.1).s().p("AATCgQgIgIgTgpIgbg6QgIgRgGgTQgGgSAEgZQAEgYAOhDQANhCATAbQARAaASAvQARAugCAbQgCAZgKApQgKAqgHgEQgGgEgEgaIgFghIgSAIQANBbAUgJIAigIQgNAtgHAFQgDACgDAAQgFAAgEgFg");
	this.shape_45.setTransform(-72.355,-1.3778);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-61,-45.6,-72.8,-1.3).s().p("AgVBvQgwh5gKguQgFg6AIggIAWhcQAShCAQgHQAQgIAZAYIALALQgSgBgSgEIgEAAIgCAAQgNAHgTBMQgUBMgBAgQgBAfBMCNQAIARAJAIQATAfAigCIgzC6QgFhRgvh6g");
	this.shape_46.setTransform(-73.162,7.9515);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],19,17,18.9,-15.8).s().p("AASDYQgJgIgIgRQhMiPABgfQABgeAUhMQAThMANgHIACgBIAEABQAOAFAdA5QAkBEgBAqQgGBLgbA0QgHAOgGADQgTAJgOhbIASgIIAFAhQAEAaAGAEQAHAEAKgqQAKgpACgaQACgagRguQgSgvgRgaQgTgbgNBCQgOBDgEAYQgEAYAGATQAGATAIARIAbA6QATApAIAIQAHAIAIgFQAHgFANgtIAEgRQAQg+AGguIAHhDQACgUgEgNQgDgNgWgaQgRgUgTgTIgLgLQgZgZgQAIQgQAIgSBCIgWBcQgIAfAFA5QgQg7ACgVQADglAXhIQAWhHAOgQQADgDAEgBQALgBATAMQAMAIARANIAHAFQA8AwALAfQALAdgdCQQgeCRgRAHIgHACQgGAAgGgGg");
	this.shape_47.setTransform(-72.0617,-3.679);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AAADBF").s().p("AgDCOQAag0AGhLQABgqgjhEQgeg5gOgFQATADASABQASAUARAUQAWAaADANQAEANgCAUIgHBCQgGAvgQA9IgEASIghAIQAGgDAHgOg");
	this.shape_48.setTransform(-68.6525,-5.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvIgPgWIgVgbIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_49.setTransform(3.95,-11.3954);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#0237B8","#004BFF"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_50.setTransform(4.0521,7.7962);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#013FD4").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpIgMgQQgKgNgQgOQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAIAVAcIAQAXQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAg9h8IgGgDQAbAEAlABIABAAQARAOANANIgqAFQgYgVgXgNg");
	this.shape_51.setTransform(-68.2707,-1.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#0233A9","#054BF2","#003CCC"],[0.094,0.729,0.992],19.9,24.1,12,53.4).s().p("AgIATIgSgCIgBgPQAAgMACgGQADgJALAIIABABQANAMAZAaIgkgDg");
	this.shape_52.setTransform(-72.225,-22.7507);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#0233A9","#054BF2","#003CCC"],[0.094,0.729,0.992],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIABAQIABATQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_53.setTransform(-72.5821,1.6395);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#0233A9","#0045EA","#003CCC"],[0.094,0.729,0.992],18.5,0,10.7,29.3).s().p("AgWBBQgXhogDgyIgBgYQABgaAJAAQALAAAYASIACACQAYATAQAeQAQAdgXA6IgFANIgbgDIgCgJIgRgEQAOBFAPgGQATgFAWgEQgQAlgMAXQgHAMgGAAQgPAAgQhLg");
	this.shape_54.setTransform(-70.8796,1.327);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#004BFF","#0235B0","#004BFF"],[0.027,0.459,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAQAOALANIALAPQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgTIAAgRQAAggAMgGQAGgCAIADIAHADQAWAOAXAUIgQACQgWgRgMAAQgJAAAAAaIAAAYQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAbhFg0g4QgNgOgSgNIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_55.setTransform(-71.7147,0.48);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],12,8.1,6.1,30).s().p("AgWB/QgXhpgDgxQgDgyAMAAQAMAAAZATQAYAUAQAdQAQAcgXA8QgXA7gLg7IgRgDQAOBFAPgGQATgFAWgEQgQAkgMAXQgHAMgGAAQgPAAgQhKgAgWifIgSgCIgBgQQAAgMACgGQAEgKAKAJIACABQANALAZAcIglgDg");
	this.shape_56.setTransform(-70.88,-4.8236);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#858BA9","#B0B3C3"],[0,0.918],-13.2,-11.5,14.2,4.3).s().p("AAWDTIAAAAIgBAAQgPgHgVgsQggg+gVh6QgVh6AGgkQABgNAEgHQAIgNARAGIAYAJIAKAFQAYANAiAYQglgBgagEQgIgEgGADQgMAFgBAhIACAjQADAtANA+QASBaAWApQALAVAQgHQAYgLAbgIQgiA5gSAMQgCABgDAAIgGgBg");
	this.shape_57.setTransform(-72.5821,1.6395);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#D0D2DE","#B0B3C3","#E1E3F1"],[0,0.443,0.918],23.9,10.2,15.5,-21.5).s().p("AguCdIgEgIQgVgzgRhXQgRhWgDg7QgDg7AOgVQADgFAIgCQAGgBAJACQAKACAOAGIACAAIAPAIIAPAIIAIAFIAFADQAiAVAYAUQAZAWANAUQAaApgRBDQgJAjgNAjQgMAfgQAgQgPAegNAHQgPAHgLgVQgXgqgShZQgMg+gEgtIgBgkQAAggAMgGQAGgCAIADIAHADQAfAUAlAiQAlAigNAvQgOAtgXAqQgGALgFACQgRAGgNhFIAQADQANA7AXg7QAXg7gQgdQgQgdgZgUQgZgTgMAAQgMAAADAyQADAyAXBoQAWBoAWgqQAMgXAQgkIAdhHQAihXhahBIgBAAQghgZgYgMIgLgFIgYgKQgQgGgIAOQgEAHgCAMQgFAkAVB7QAVB5AfA+QAWAsAPAHQgYgKgjg3g");
	this.shape_58.setTransform(-71.7147,0.48);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],7,14.3,7,-8.8).s().p("AskBUQAjA3AZAKIAAAAIABABQAGACAFgDQASgLAig6IANgXIALgUQALgWAIgUQARgpAEgjQAEgpgegxQAmAvAKAvQAKA4BTgEQBSgFBfgQQBegRBngDQBngDBzASQBzASCMgUQCMgTBSAPQBSAOBNgBQA4gBAUgrQADAWgCALQgGAbggBIQggBIg3AIQg4AIjIgLQjJgMjZALQjYALixACQixACg+AFQg9AFgkAXQgGAEgHAAQgeAAglhYg");
	this.shape_59.setTransform(4.0521,7.7962);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#B0B3C3","#D0D2DE"],[0.094,0.918],15.9,15.7,15.9,-14.4).s().p("ApRBxQgKgugmgvQgOgXgWgaIgBgBIglgqIgRgTQgagbgNgMIgCgBQgKgIgEAJQgCAGAAANIABAPIgOgCIgBgdIAAgDQAAgwA+ASQBXAYCqAJQCqAJC3gOQC2gPDWAVQDWAVBugPQBugPAXAQQAXAQAhBpQAUBBAGAjQgUArg4ABQhNAChSgPQhSgPiLAUQiMATh0gSQhzgShnADQhnADheARQhfARhSAEIgLABQhIAAgKg1g");
	this.shape_60.setTransform(3.95,-11.3954);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AAADBF").s().p("AATCgQAPggANgfQANgjAJgiQARhDgagpQgNgVgZgWQgXgUgjgVIgFgDIgJgFIgPgIIgPgHIgCgBQgOgGgKgCIAYADIACABIAOACIASACIAmADIAQASIAlArIABAAQAWAbAPAYQAeAwgFAoQgEAjgQAqQgIAUgMAWIgKAUIgOAYQgbAHgXAMQAMgHAPgegAgEBiQAWgqANguQAOgvglghQgkgjghgTIgGgDQAbAEAlABIABAAQBZBCgjBWIgcBHQgWAEgSAFQAGgCAGgKg");
	this.shape_61.setTransform(-68.2707,-1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-27.9,174,69);


(lib.yellowCheckBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// check_green
	this.instance = new lib.check_green();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// yellow_button_bg
	this.instance_1 = new lib.yellow_button_bg();
	this.instance_1.setTransform(0,-1.65,0.8652,0.865);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadow_circle
	this.instance_2 = new lib.mix_color_button_shadow_circle();
	this.instance_2.setTransform(2.95,2.2,0.45,0.45,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowCheckBtn, new cjs.Rectangle(-42.9,-44.6,89.69999999999999,93), null);


(lib.CloseBtn_alt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0033FF").ss(2,1,1).p("ABFBFQgjgigigjQgiAjgiAiAAAAAQgigigigiABFhEQgjAigiAi");
	this.shape.setTransform(0.15,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Light_BG
	this.instance = new lib.xbutton_inner();
	this.instance.setTransform(-0.05,-0.05,0.9559,0.9559,0,0,0,9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Dark_BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FFFF").s().p("Ag5BeQgPAAgLgLQgKgKAAgPIAAh0QAAgOAKgKQALgLAPAAIBzAAQAOAAALALQALAKAAAOIAAB0QAAAPgLAKQgLALgOAAg");
	this.shape_1.setTransform(0.25,0.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("Ag7BiQgQAAgMgMQgKgKAAgQIAAh4QAAgPAKgLQAMgLAQAAIB3AAQAQAAALALQALALAAAPIAAB4QAAAQgLAKQgLAMgQAAg");
	this.shape_2.setTransform(0.2,0.174);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0033FF").s().p("AhBBuQgSAAgNgOQgNgMAAgSIAAiCQAAgSANgNQANgOASAAICDAAQASAAAMAOQAOANAAASIAACCQAAASgNAMIgBABQgMANgSAAg");
	this.shape_3.setTransform(0.2,0.0491);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CloseBtn_alt, new cjs.Rectangle(-10.8,-10.9,22,22), null);


(lib.paint_tube_yellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_yellow
	this.instance = new lib.tube_txt_yellow();
	this.instance.setTransform(0,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_bottle_yellow
	this.instance_1 = new lib.tube_bottle_yellow();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_yellow, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.paint_tube_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_red
	this.instance = new lib.tube_txt_red();
	this.instance.setTransform(0,13.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_bottle_red
	this.instance_1 = new lib.tube_bottle_red();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_red, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.paint_tube_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_txt_blue
	this.instance = new lib.tube_txt_blue();
	this.instance.setTransform(0,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tube_bottle_blue
	this.instance_1 = new lib.tube_bottle_blue();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paint_tube_blue, new cjs.Rectangle(-76.4,-154.1,152.9,308.2), null);


(lib.tube_yellow_squish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// painttube_endsquish_yellow
	this.instance = new lib.paint_tube_endsquish_yellow("synched",0,false);
	this.instance.setTransform(-1.5,-59.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-2.25,y:5.95,startPosition:1},0).wait(1).to({x:-0.85,y:80.6,startPosition:2},0).wait(1));

	// tube_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AsxBtIgCyHIZjgGIACSUI5jgHIZjAHIACOnI5jAFgAMyB0g");
	var mask_graphics_2 = new cjs.Graphics().p("AszLCIAA2DIZnAAIAAWDg");
	var mask_graphics_3 = new cjs.Graphics().p("AszFVIAAqpIZnAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.525,y:55.55}).wait(1).to({graphics:mask_graphics_2,x:-0.225,y:90.275}).wait(1).to({graphics:mask_graphics_3,x:-0.25,y:126.775}).wait(1));

	// paint_tube_yellow
	this.instance_1 = new lib.paint_tube_yellow();
	this.instance_1.setTransform(0.1,-0.65,0.9989,0.9989,0,0,0,0.1,-0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-153.9,173.3,307.9);


(lib.tube_red_squish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// painttube_endsquish_red
	this.instance = new lib.paint_tube_endsquish_red("synched",0,false);
	this.instance.setTransform(-1,-59.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-2.25,y:5.45,startPosition:1},0).wait(1).to({x:-0.85,y:80.6,startPosition:2},0).wait(1));

	// tube_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AsxBtIZjAHIACOnI5jAFgAsxBtIgCyHIZjgGIACSUg");
	var mask_graphics_2 = new cjs.Graphics().p("AszLCIAA2DIZnAAIAAWDg");
	var mask_graphics_3 = new cjs.Graphics().p("AszFVIAAqpIZnAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.525,y:55.55}).wait(1).to({graphics:mask_graphics_2,x:-0.225,y:90.275}).wait(1).to({graphics:mask_graphics_3,x:-0.25,y:126.775}).wait(1));

	// paint_tube_red
	this.instance_1 = new lib.paint_tube_red();
	this.instance_1.setTransform(0.1,-0.65,0.9989,0.9989,0,0,0,0.1,-0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-153.9,172.9,307.9);


(lib.tube_blue_squish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// painttube_endsquish_blue
	this.instance = new lib.paint_tube_endsquish_blue("synched",0,false);
	this.instance.setTransform(-1.5,-59.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:-2.25,y:5.95,startPosition:1},0).wait(1).to({x:-0.85,y:80.6,startPosition:2},0).wait(1));

	// tube_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AsxBtIgCyHIZjgGIACSUI5jgHIZjAHIACOnI5jAFgAMyB0g");
	var mask_graphics_2 = new cjs.Graphics().p("AszLCIAA2DIZnAAIAAWDg");
	var mask_graphics_3 = new cjs.Graphics().p("AszFVIAAqpIZnAAIAAKpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.525,y:55.55}).wait(1).to({graphics:mask_graphics_2,x:-0.225,y:90.275}).wait(1).to({graphics:mask_graphics_3,x:-0.25,y:126.775}).wait(1));

	// paint_tube_blue
	this.instance_1 = new lib.paint_tube_blue();
	this.instance_1.setTransform(0.1,-0.65,0.9989,0.9989,0,0,0,0.1,-0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-153.9,173.3,307.9);


(lib.paint_tube_yellow_ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_yellow_squish
	this.instance = new lib.tube_yellow_squish("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-0.3,scaleX:0.9999,scaleY:0.9999,rotation:0.0009,x:0.5,y:-0.3,startPosition:1},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-153.9,173.3,307.9);


(lib.paint_tube_red_ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_red_squish
	this.instance = new lib.tube_red_squish("single",0);
	this.instance.setTransform(0,0.05,1,1,-0.2597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.2536,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.7,-154.2,173.10000000000002,308.2);


(lib.paint_tube_blue_ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tube_blue_squish
	this.instance = new lib.tube_blue_squish("single",0);
	this.instance.setTransform(0,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.3,regY:-0.2,x:0.3,y:-0.15,startPosition:1},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-153.8,173.3,307.8);


(lib.helper_tween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {stop1:10,close:11};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_5 = function() {
		playSound("text_box");
	}
	this.frame_17 = function() {
		playSound("tube_highlight2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(12).call(this.frame_17).wait(6));

	// mix_color_button
	this.instance = new lib.mix_color_button();
	this.instance.setTransform(640.75,560.95,0.6614,0.6614,0,0,0,0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(3).to({y:590.95},3).to({y:-389.05},4).to({_off:true},1).wait(1));

	// mix_color_button_shadow_brush
	this.instance_1 = new lib.mix_color_button_shadow_brush();
	this.instance_1.setTransform(644.65,564.05,0.5952,0.5952);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(3).to({y:594.05},3).to({y:-385.95},4).to({_off:true},1).wait(1));

	// refreshColorBtn
	this.instance_2 = new lib.refreshColorBtn();
	this.instance_2.setTransform(489.3,565.1,0.9921,0.9921,0,0,0,0,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(3).to({y:595.1},3).to({y:-384.9},4).to({_off:true},1).wait(1));

	// yellowCheckBtn
	this.instance_3 = new lib.yellowCheckBtn();
	this.instance_3.setTransform(793.5,564.9,0.9921,0.9921,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(3).to({y:594.9},3).to({y:-385.1},4).to({_off:true},1).wait(1));

	// paint_tube_red_ani
	this.instance_4 = new lib.paint_tube_red_ani("single",0);
	this.instance_4.setTransform(535.9,-801.3,0.5946,0.5946,-19.7904,0,0,-0.1,-0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({y:178.7},4).to({y:148.7},3).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({y:178.7},3).to({y:-801.3},4).to({_off:true},1).wait(1));

	// paint_tube_blue_ani
	this.instance_5 = new lib.paint_tube_blue_ani("single",0);
	this.instance_5.setTransform(643.65,-816.25,0.5952,0.5952,0,0,0,0.2,-0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({y:163.75},4).to({y:133.75},3).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({y:163.75},3).to({y:-816.25},4).to({_off:true},1).wait(1));

	// paint_tube_yellow_ani
	this.instance_6 = new lib.paint_tube_yellow_ani("single",0);
	this.instance_6.setTransform(751.35,-801,0.5946,0.5946,19.7904,0,0,0.4,-0.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({y:179},4).to({y:149},3).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({y:179},3).to({y:-801},4).to({_off:true},1).wait(1));

	// MIX_empty
	this.instance_7 = new lib.MIX_empty();
	this.instance_7.setTransform(643.1,-601.85,1.9538,1.9538);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({y:378.15},4).to({y:348.15},3).wait(6).to({y:378.15},3).to({y:-601.85},4).to({_off:true},1).wait(1));

	// paint_tray_LG
	this.instance_8 = new lib.paint_tray_LG();
	this.instance_8.setTransform(641.4,-556.65,0.6614,0.6614,0,0,0,-0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({y:423.35},4).to({y:393.35},3).wait(6).to({y:423.35},3).to({y:-556.65},4).to({_off:true},1).wait(1));

	// closeBtn
	this.close = new lib.CloseBtn_alt();
	this.close.name = "close";
	this.close.setTransform(1062.3,-875.85,2,2,0,0,0,0.2,0.1);
	this.close._off = true;

	this.timeline.addTween(cjs.Tween.get(this.close).wait(1).to({_off:false},0).to({y:104.15},4).to({y:74.15},3).wait(6).to({y:104.15},3).to({y:-875.85},4).to({_off:true},1).wait(1));

	// demo_helpBG
	this.instance_9 = new lib.demo_helpBG();
	this.instance_9.setTransform(641.55,-559.4,0.9244,0.9244);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({y:420.6},4).to({y:390.6},3).wait(6).to({y:420.6},3).to({y:-559.4},4).to({_off:true},1).wait(1));

	// bg_dark_tint
	this.instance_10 = new lib.bg_dark_tint();
	this.instance_10.setTransform(641.7,399.95,1,1,0,0,0,0.3,0.1);
	this.instance_10.alpha = 0.1016;

	this.fade = new lib.bg_dark_tint();
	this.fade.name = "fade";
	this.fade.setTransform(641.7,399.95,1,1,0,0,0,0.3,0.1);
	this.fade._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},3).wait(8).to({_off:true},8).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.fade).wait(19).to({_off:false},0).to({alpha:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.3,-938.4,2289.5,1949.3);


(lib.helper_ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("text_box");
	}
	this.frame_6 = function() {
		playSound("sf_mp_dalehelp1");
	}
	this.frame_38 = function() {
		playSound("tube_highlight3");
	}
	this.frame_45 = function() {
		playSound("tube_highlight3");
	}
	this.frame_52 = function() {
		playSound("tube_highlight3");
	}
	this.frame_74 = function() {
		playSound("adb_squish");
		playSound("adb_bubble");
	}
	this.frame_87 = function() {
		playSound("adb_squish");
		playSound("adb_bubble");
	}
	this.frame_97 = function() {
		playSound("sf_singleSwish");
	}
	this.frame_101 = function() {
		playSound("sf_mp_dalehelp2");
	}
	this.frame_114 = function() {
		playSound("tube_highlight3");
	}
	this.frame_120 = function() {
		playSound("tube_highlight3");
	}
	this.frame_126 = function() {
		playSound("tube_highlight3");
	}
	this.frame_135 = function() {
		playSound("button_click");
	}
	this.frame_145 = function() {
		playSound("adb_splash");
	}
	this.frame_150 = function() {
		playSound("adb_fingerpaint");
	}
	this.frame_176 = function() {
		playSound("text_box");
	}
	this.frame_191 = function() {
		playSound("sf_mp_dalehelp3");
	}
	this.frame_229 = function() {
		playSound("adb_squish");
		playSound("adb_bubble");
	}
	this.frame_240 = function() {
		playSound("adb_squish");
		playSound("adb_bubble");
	}
	this.frame_251 = function() {
		playSound("adb_squish");
		playSound("adb_bubble");
	}
	this.frame_262 = function() {
		playSound("button_click");
	}
	this.frame_272 = function() {
		playSound("adb_splash");
	}
	this.frame_277 = function() {
		playSound("adb_fingerpaint");
	}
	this.frame_303 = function() {
		playSound("text_box");
	}
	this.frame_318 = function() {
		playSound("sf_singleSwish");
	}
	this.frame_331 = function() {
		playSound("sf_mp_dalehelp4");
	}
	this.frame_362 = function() {
		playSound("tube_highlight3");
	}
	this.frame_368 = function() {
		playSound("tube_highlight3");
	}
	this.frame_401 = function() {
		playSound("button_click");
	}
	this.frame_405 = function() {
		playSound("magicGliss_short");
	}
	this.frame_441 = function() {
		playSound("sf_singleSwish");
	}
	this.frame_457 = function() {
		playSound("sf_mp_dalehelp5");
	}
	this.frame_496 = function() {
		playSound("tube_highlight3");
	}
	this.frame_502 = function() {
		playSound("tube_highlight3");
	}
	this.frame_528 = function() {
		playSound("button_click");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(4).call(this.frame_6).wait(32).call(this.frame_38).wait(7).call(this.frame_45).wait(7).call(this.frame_52).wait(22).call(this.frame_74).wait(13).call(this.frame_87).wait(10).call(this.frame_97).wait(4).call(this.frame_101).wait(13).call(this.frame_114).wait(6).call(this.frame_120).wait(6).call(this.frame_126).wait(9).call(this.frame_135).wait(10).call(this.frame_145).wait(5).call(this.frame_150).wait(26).call(this.frame_176).wait(15).call(this.frame_191).wait(38).call(this.frame_229).wait(11).call(this.frame_240).wait(11).call(this.frame_251).wait(11).call(this.frame_262).wait(10).call(this.frame_272).wait(5).call(this.frame_277).wait(26).call(this.frame_303).wait(15).call(this.frame_318).wait(13).call(this.frame_331).wait(31).call(this.frame_362).wait(6).call(this.frame_368).wait(33).call(this.frame_401).wait(4).call(this.frame_405).wait(36).call(this.frame_441).wait(16).call(this.frame_457).wait(39).call(this.frame_496).wait(6).call(this.frame_502).wait(26).call(this.frame_528).wait(6));

	// x_btn
	this.close_btn = new lib.buttonBlank();
	this.close_btn.name = "close_btn";
	this.close_btn.setTransform(1062,72,0.39,0.39,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(534));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(885.525,714.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_1.setTransform(874.275,714.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_2.setTransform(863.025,714.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_3.setTransform(849.725,701.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AA8B1QgEgGAAgKIAAiBQAAgQgGgLQgFgLgHgHQgJgHgJgEQgKgDgKAAQgJAAgJADQgLAEgHAHQgJAHgEALQgGALABAQIAACBQAAAKgGAGQgFAFgJAAQgJAAgFgFQgGgGAAgKIAAjJQAAgKAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAKIAAAJIABABQAMgRASgHQASgHARAAQAOAAAOAEQAPAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgFAGQgGAFgJAAQgJAAgGgFg");
	this.shape_4.setTransform(830,704.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_5.setTransform(813.325,700.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAQAIAOAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_6.setTransform(795.75,704.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.2)").s().p("AhhCsQgFgGAAgKIAAk4QAAgJAFgGQAFgFAJgBQAJABAGAFQAFAGAAAJIAAANIABAAQARgiAuAAQAYAAATAKQATALANAQQAOASAGAWQAHAWAAAYQAAAXgHAXQgGAUgOASQgNAQgTALQgTAKgYgBQgLABgKgDIgSgHIgOgLIgKgLIgBAAIAAB5QAAAKgFAGQgGAFgJAAQgJAAgFgFgAggiGQgMAIgIANQgIANgDAPQgEAPAAAQQAAAPAEAQQADAPAIALQAIAOAMAHQAMAIATAAQARAAAMgIQANgHAIgOQAIgLADgPQAEgQAAgPQAAgQgEgPQgDgPgIgNQgIgNgNgIQgMgIgRAAQgTAAgMAIg");
	this.shape_7.setTransform(771.875,710.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.2)").s().p("AgsBwQgVgKgNgRQgNgRgHgWQgGgWAAgYQAAgXAHgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAYAAATAKQATAKANAQQANARAIAVQAGAVAAAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAFANAJAKQAJAKAOAGQAMAFAQAAQATAAAOgFQANgFAIgGIAQgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgIAJgOAHQgOAHgRAGQgRAEgSAAQgbAAgVgKgAgchRQgMAGgJALQgHAKgEAOQgEANgBAOICDAAQgBgNgDgNQgEgNgIgLQgHgLgMgGQgNgHgPAAIgDAAQgQAAgMAGg");
	this.shape_8.setTransform(735.85,704.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_9.setTransform(719.575,699.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.2)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_10.setTransform(707.325,701.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.2)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_11.setTransform(692.025,701.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_12.setTransform(679.825,700.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_13.setTransform(670.675,699.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.2)").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAPAIAPAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_14.setTransform(641.85,704.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.2)").s().p("AgsBwQgVgKgNgRQgOgRgGgWQgHgWABgYQgBgXAIgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAXAAAUAKQATAKANAQQAOARAGAVQAIAVgBAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAEANAKAKQAJAKAOAGQAMAFAQAAQAUAAANgFQANgFAJgGIAPgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgJAJgNAHQgOAHgRAGQgRAEgRAAQgdAAgUgKgAgchRQgNAGgHALQgJAKgDAOQgEANgBAOICDAAQAAgNgEgNQgEgNgIgLQgIgLgLgGQgMgHgQAAIgDAAQgQAAgMAGg");
	this.shape_15.setTransform(606.95,704.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.2)").s().p("AghB2QgQgEgNgHQgMgGgHgIQgGgIgBgIQABgIAFgFQAEgFAGAAQAIAAAGAFIAOAKIAUAKQALAEAQAAQAVAAAMgKQANgKAAgMQAAgMgJgIQgKgIgOgHIgegNQgRgHgOgHQgOgIgJgMQgKgLAAgRQAAgQAHgNQAIgNALgIQAMgJAOgEQAOgEAPAAQAMAAAOADQAOADALAFQAMAGAJAIQAHAIAAAJQAAAGgEAFQgFAFgJAAQgGAAgFgEIgMgIIgQgIQgJgEgNAAQgRAAgMAHQgMAIAAAPQAAAKAJAIQAKAHAOAGIAeAMQAQAGAOAIQAOAIAKAMQAJAMAAARQAAASgHAOQgIAOgMAJQgMAJgPAFQgQAEgRAAQgSAAgQgEg");
	this.shape_16.setTransform(585.25,704.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("AA8B1QgEgGgBgKIAAgEQgRAPgQAFQgQAFgRAAQgOAAgOgEQgPgFgMgLQgMgLgIgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAACBQABAQAFALQAFALAHAHQAJAHAJAEQAKADAJAAQAKAAAKgDQAKgEAHgHQAJgHAFgLQAEgLAAgQIAAiBQABgKAEgGQAGgFAJAAQAJAAAFAFQAGAGAAAKIAADJQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_17.setTransform(563.2,704.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.2)").s().p("AA8B1QgEgGAAgKIAAiBQgBgQgFgLQgEgLgIgHQgIgHgKgEQgKgDgKAAQgJAAgKADQgKAEgIAHQgHAHgFALQgFALgBAQIAACBQAAAKgFAGQgFAFgJAAQgJAAgGgFQgFgGAAgKIAAjJQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAAAJIABABQAOgRARgHQARgHASAAQAOAAAPAEQAOAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_18.setTransform(527.75,704.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.2)").s().p("ABKB2QgHgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgTgKgNgRQgPgRgGgWQgHgWAAgYQAAgXAHgWQAGgWAPgRQANgRATgKQAUgKAYAAQAVAAAPAIQAPAIAPAQIAAAAIAAgNQAAgKAHgFQAGgEAGAAQAFAAAGAEQAHAFAAAKIAADNQAAAKgHAFQgGAEgFAAQgGAAgGgEgAgdhPQgMAIgIANQgIANgDAPQgEAQAAAOQAAAPAEAQQADAPAIANQAIANAMAIQANAIARAAQASAAANgIQAMgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgIgNgMgIQgNgIgSAAQgRAAgNAIg");
	this.shape_19.setTransform(502.65,704.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.2)").s().p("AgZBwQgUgKgOgRQgNgRgHgWQgGgWAAgYQAAgXAGgWQAHgWANgRQAOgRAUgKQAUgKAaAAQAfAAARAJQARAJAAAMQAAAGgEAFQgFAFgHAAIgLgCIgJgEIgMgEIgRgCQgSAAgLAIQgOAIgIANQgIANgEAPQgEAQABAOQgBAPAEAQQAEAPAIANQAIANAOAIQALAIASAAIASgCIAMgEIAKgFIAJgCQAGAAAFAEQAEAEAAAIQAAAMgRAJQgPAKggAAQgaAAgUgKg");
	this.shape_20.setTransform(480.9,704.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.2)").s().p("AA9B1QgGgGAAgKIAAgEQgRAPgQAFQgQAFgQAAQgOAAgPgEQgPgFgMgLQgNgLgHgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGABAKIAACBQAAAQAFALQAEALAJAHQAHAHALAEQAJADAJAAQAKAAAKgDQAJgEAIgHQAIgHAGgLQAEgLAAgQIAAiBQAAgKAGgGQAFgFAJAAQAJAAAGAFQAFAGAAAKIAADJQAAAKgFAGQgGAFgJAAQgJAAgFgFg");
	this.shape_21.setTransform(447.35,704.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.2)").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_22.setTransform(423.175,704.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.2)").s().p("AgOCdQgFgFAAgKIAAiEIhWiLQgGgKAAgHQAAgHAFgFQAFgEAIAAIALADQAEACAFAIIBJB5IBKh5QAFgIAEgCIALgDQAHAAAGAEQAFAFAAAHQAAAHgGAKIhWCLIAACEQAAAKgFAFQgGAGgJAAQgIAAgGgGg");
	this.shape_23.setTransform(403.15,700.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.498)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_24.setTransform(885.525,714.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.498)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_25.setTransform(874.275,714.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.498)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_26.setTransform(863.025,714.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_27.setTransform(849.725,701.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.498)").s().p("AA8B1QgEgGAAgKIAAiBQAAgQgGgLQgFgLgHgHQgJgHgJgEQgKgDgKAAQgJAAgJADQgLAEgHAHQgJAHgEALQgGALABAQIAACBQAAAKgGAGQgFAFgJAAQgJAAgFgFQgGgGAAgKIAAjJQAAgKAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAKIAAAJIABABQAMgRASgHQASgHARAAQAOAAAOAEQAPAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgFAGQgGAFgJAAQgJAAgGgFg");
	this.shape_28.setTransform(830,704.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_29.setTransform(813.325,700.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.498)").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAQAIAOAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_30.setTransform(795.75,704.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.498)").s().p("AhhCsQgFgGAAgKIAAk4QAAgJAFgGQAFgFAJgBQAJABAGAFQAFAGAAAJIAAANIABAAQARgiAuAAQAYAAATAKQATALANAQQAOASAGAWQAHAWAAAYQAAAXgHAXQgGAUgOASQgNAQgTALQgTAKgYgBQgLABgKgDIgSgHIgOgLIgKgLIgBAAIAAB5QAAAKgFAGQgGAFgJAAQgJAAgFgFgAggiGQgMAIgIANQgIANgDAPQgEAPAAAQQAAAPAEAQQADAPAIALQAIAOAMAHQAMAIATAAQARAAAMgIQANgHAIgOQAIgLADgPQAEgQAAgPQAAgQgEgPQgDgPgIgNQgIgNgNgIQgMgIgRAAQgTAAgMAIg");
	this.shape_31.setTransform(771.875,710.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.498)").s().p("AgsBwQgVgKgNgRQgNgRgHgWQgGgWAAgYQAAgXAHgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAYAAATAKQATAKANAQQANARAIAVQAGAVAAAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAFANAJAKQAJAKAOAGQAMAFAQAAQATAAAOgFQANgFAIgGIAQgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgIAJgOAHQgOAHgRAGQgRAEgSAAQgbAAgVgKgAgchRQgMAGgJALQgHAKgEAOQgEANgBAOICDAAQgBgNgDgNQgEgNgIgLQgHgLgMgGQgNgHgPAAIgDAAQgQAAgMAGg");
	this.shape_32.setTransform(735.85,704.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_33.setTransform(719.575,699.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_34.setTransform(707.325,701.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_35.setTransform(692.025,701.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_36.setTransform(679.825,700.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_37.setTransform(670.675,699.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.498)").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAPAIAPAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_38.setTransform(641.85,704.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.498)").s().p("AgsBwQgVgKgNgRQgOgRgGgWQgHgWABgYQgBgXAIgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAXAAAUAKQATAKANAQQAOARAGAVQAIAVgBAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAEANAKAKQAJAKAOAGQAMAFAQAAQAUAAANgFQANgFAJgGIAPgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgJAJgNAHQgOAHgRAGQgRAEgRAAQgdAAgUgKgAgchRQgNAGgHALQgJAKgDAOQgEANgBAOICDAAQAAgNgEgNQgEgNgIgLQgIgLgLgGQgMgHgQAAIgDAAQgQAAgMAGg");
	this.shape_39.setTransform(606.95,704.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.498)").s().p("AghB2QgQgEgNgHQgMgGgHgIQgGgIgBgIQABgIAFgFQAEgFAGAAQAIAAAGAFIAOAKIAUAKQALAEAQAAQAVAAAMgKQANgKAAgMQAAgMgJgIQgKgIgOgHIgegNQgRgHgOgHQgOgIgJgMQgKgLAAgRQAAgQAHgNQAIgNALgIQAMgJAOgEQAOgEAPAAQAMAAAOADQAOADALAFQAMAGAJAIQAHAIAAAJQAAAGgEAFQgFAFgJAAQgGAAgFgEIgMgIIgQgIQgJgEgNAAQgRAAgMAHQgMAIAAAPQAAAKAJAIQAKAHAOAGIAeAMQAQAGAOAIQAOAIAKAMQAJAMAAARQAAASgHAOQgIAOgMAJQgMAJgPAFQgQAEgRAAQgSAAgQgEg");
	this.shape_40.setTransform(585.25,704.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.498)").s().p("AA8B1QgEgGgBgKIAAgEQgRAPgQAFQgQAFgRAAQgOAAgOgEQgPgFgMgLQgMgLgIgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAACBQABAQAFALQAFALAHAHQAJAHAJAEQAKADAJAAQAKAAAKgDQAKgEAHgHQAJgHAFgLQAEgLAAgQIAAiBQABgKAEgGQAGgFAJAAQAJAAAFAFQAGAGAAAKIAADJQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_41.setTransform(563.2,704.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.498)").s().p("AA8B1QgEgGAAgKIAAiBQgBgQgFgLQgEgLgIgHQgIgHgKgEQgKgDgKAAQgJAAgKADQgKAEgIAHQgHAHgFALQgFALgBAQIAACBQAAAKgFAGQgFAFgJAAQgJAAgGgFQgFgGAAgKIAAjJQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAAAJIABABQAOgRARgHQARgHASAAQAOAAAPAEQAOAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_42.setTransform(527.75,704.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.498)").s().p("ABKB2QgHgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgTgKgNgRQgPgRgGgWQgHgWAAgYQAAgXAHgWQAGgWAPgRQANgRATgKQAUgKAYAAQAVAAAPAIQAPAIAPAQIAAAAIAAgNQAAgKAHgFQAGgEAGAAQAFAAAGAEQAHAFAAAKIAADNQAAAKgHAFQgGAEgFAAQgGAAgGgEgAgdhPQgMAIgIANQgIANgDAPQgEAQAAAOQAAAPAEAQQADAPAIANQAIANAMAIQANAIARAAQASAAANgIQAMgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgIgNgMgIQgNgIgSAAQgRAAgNAIg");
	this.shape_43.setTransform(502.65,704.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.498)").s().p("AgZBwQgUgKgOgRQgNgRgHgWQgGgWAAgYQAAgXAGgWQAHgWANgRQAOgRAUgKQAUgKAaAAQAfAAARAJQARAJAAAMQAAAGgEAFQgFAFgHAAIgLgCIgJgEIgMgEIgRgCQgSAAgLAIQgOAIgIANQgIANgEAPQgEAQABAOQgBAPAEAQQAEAPAIANQAIANAOAIQALAIASAAIASgCIAMgEIAKgFIAJgCQAGAAAFAEQAEAEAAAIQAAAMgRAJQgPAKggAAQgaAAgUgKg");
	this.shape_44.setTransform(480.9,704.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.498)").s().p("AA9B1QgGgGAAgKIAAgEQgRAPgQAFQgQAFgQAAQgOAAgPgEQgPgFgMgLQgNgLgHgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGABAKIAACBQAAAQAFALQAEALAJAHQAHAHALAEQAJADAJAAQAKAAAKgDQAJgEAIgHQAIgHAGgLQAEgLAAgQIAAiBQAAgKAGgGQAFgFAJAAQAJAAAGAFQAFAGAAAKIAADJQAAAKgFAGQgGAFgJAAQgJAAgFgFg");
	this.shape_45.setTransform(447.35,704.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.498)").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_46.setTransform(423.175,704.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCdQgFgFAAgKIAAiEIhWiLQgGgKAAgHQAAgHAFgFQAFgEAIAAIALADQAEACAFAIIBJB5IBKh5QAFgIAEgCIALgDQAHAAAGAEQAFAFAAAHQAAAHgGAKIhWCLIAACEQAAAKgFAFQgGAGgJAAQgIAAgGgGg");
	this.shape_47.setTransform(403.15,700.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_48.setTransform(885.525,714.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_49.setTransform(874.275,714.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_50.setTransform(863.025,714.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_51.setTransform(849.725,701.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AA8B1QgEgGAAgKIAAiBQAAgQgGgLQgFgLgHgHQgJgHgJgEQgKgDgKAAQgJAAgJADQgLAEgHAHQgJAHgEALQgGALABAQIAACBQAAAKgGAGQgFAFgJAAQgJAAgFgFQgGgGAAgKIAAjJQAAgKAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAKIAAAJIABABQAMgRASgHQASgHARAAQAOAAAOAEQAPAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgFAGQgGAFgJAAQgJAAgGgFg");
	this.shape_52.setTransform(830,704.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_53.setTransform(813.325,700.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAQAIAOAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_54.setTransform(795.75,704.775);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhhCsQgFgGAAgKIAAk4QAAgJAFgGQAFgFAJgBQAJABAGAFQAFAGAAAJIAAANIABAAQARgiAuAAQAYAAATAKQATALANAQQAOASAGAWQAHAWAAAYQAAAXgHAXQgGAUgOASQgNAQgTALQgTAKgYgBQgLABgKgDIgSgHIgOgLIgKgLIgBAAIAAB5QAAAKgFAGQgGAFgJAAQgJAAgFgFgAggiGQgMAIgIANQgIANgDAPQgEAPAAAQQAAAPAEAQQADAPAIALQAIAOAMAHQAMAIATAAQARAAAMgIQANgHAIgOQAIgLADgPQAEgQAAgPQAAgQgEgPQgDgPgIgNQgIgNgNgIQgMgIgRAAQgTAAgMAIg");
	this.shape_55.setTransform(771.875,710.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgsBwQgVgKgNgRQgNgRgHgWQgGgWAAgYQAAgXAHgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAYAAATAKQATAKANAQQANARAIAVQAGAVAAAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAFANAJAKQAJAKAOAGQAMAFAQAAQATAAAOgFQANgFAIgGIAQgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgIAJgOAHQgOAHgRAGQgRAEgSAAQgbAAgVgKgAgchRQgMAGgJALQgHAKgEAOQgEANgBAOICDAAQgBgNgDgNQgEgNgIgLQgHgLgMgGQgNgHgPAAIgDAAQgQAAgMAGg");
	this.shape_56.setTransform(735.85,704.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_57.setTransform(719.575,699.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_58.setTransform(707.325,701.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgOCYQgFgFAAgLIAAi5IgbAAQgUAAAAgRQAAgSAUABIAbAAIAAg0QAAgKAFgGQAFgFAJAAQAIAAAGAFQAFAGAAAKIAAA0IAcAAQAUgBAAASQAAARgUAAIgcAAIAAC5QAAALgFAFQgGAFgIAAQgJAAgFgFg");
	this.shape_59.setTransform(692.025,701.25);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNCdQgGgFAAgKIAAjKQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADKQAAAKgGAFQgFAGgJAAQgIAAgFgGgAgQh4QgHgHAAgLQAAgKAHgHQAHgHAJAAQALAAAHAHQAGAHAAAKQAAALgGAHQgHAHgLAAQgJAAgHgHg");
	this.shape_60.setTransform(679.825,700.725);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgNCqQgGgGAAgKIAAkzQAAgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAAEzQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_61.setTransform(670.675,699.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABJB2QgGgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgUgKgMgRQgOgRgIgWQgGgWAAgYQAAgXAGgWQAIgWAOgRQAMgRAUgKQAUgKAYAAQAUAAAQAIQAPAIAPAQIAAAAIAAgNQAAgKAGgFQAHgEAGAAQAGAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgGAAQgGAAgHgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAANgIQAMgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgHgNgNgIQgNgIgSAAQgSAAgLAIg");
	this.shape_62.setTransform(641.85,704.775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgsBwQgVgKgNgRQgOgRgGgWQgHgWABgYQgBgXAIgWQAIgWANgRQAOgRAUgKQAUgKAZAAQAXAAAUAKQATAKANAQQAOARAGAVQAIAVgBAVQAAAKgEAFQgFAFgNAAIiUAAQAAAQAFANQAEANAKAKQAJAKAOAGQAMAFAQAAQAUAAANgFQANgFAJgGIAPgLQAFgFAGAAQAFAAAFAEQAFAFAAAIQAAAIgJAIQgJAJgNAHQgOAHgRAGQgRAEgRAAQgdAAgUgKgAgchRQgNAGgHALQgJAKgDAOQgEANgBAOICDAAQAAgNgEgNQgEgNgIgLQgIgLgLgGQgMgHgQAAIgDAAQgQAAgMAGg");
	this.shape_63.setTransform(606.95,704.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AghB2QgQgEgNgHQgMgGgHgIQgGgIgBgIQABgIAFgFQAEgFAGAAQAIAAAGAFIAOAKIAUAKQALAEAQAAQAVAAAMgKQANgKAAgMQAAgMgJgIQgKgIgOgHIgegNQgRgHgOgHQgOgIgJgMQgKgLAAgRQAAgQAHgNQAIgNALgIQAMgJAOgEQAOgEAPAAQAMAAAOADQAOADALAFQAMAGAJAIQAHAIAAAJQAAAGgEAFQgFAFgJAAQgGAAgFgEIgMgIIgQgIQgJgEgNAAQgRAAgMAHQgMAIAAAPQAAAKAJAIQAKAHAOAGIAeAMQAQAGAOAIQAOAIAKAMQAJAMAAARQAAASgHAOQgIAOgMAJQgMAJgPAFQgQAEgRAAQgSAAgQgEg");
	this.shape_64.setTransform(585.25,704.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA8B1QgEgGgBgKIAAgEQgRAPgQAFQgQAFgRAAQgOAAgOgEQgPgFgMgLQgMgLgIgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAACBQABAQAFALQAFALAHAHQAJAHAJAEQAKADAJAAQAKAAAKgDQAKgEAHgHQAJgHAFgLQAEgLAAgQIAAiBQABgKAEgGQAGgFAJAAQAJAAAFAFQAGAGAAAKIAADJQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_65.setTransform(563.2,704.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AA8B1QgEgGAAgKIAAiBQgBgQgFgLQgEgLgIgHQgIgHgKgEQgKgDgKAAQgJAAgKADQgKAEgIAHQgHAHgFALQgFALgBAQIAACBQAAAKgFAGQgFAFgJAAQgJAAgGgFQgFgGAAgKIAAjJQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAAAJIABABQAOgRARgHQARgHASAAQAOAAAPAEQAOAFAMALQAMALAIARQAIARAAAaIAACDQAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_66.setTransform(527.75,704.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ABKB2QgHgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgTgKgNgRQgPgRgGgWQgHgWAAgYQAAgXAHgWQAGgWAPgRQANgRATgKQAUgKAYAAQAVAAAPAIQAPAIAPAQIAAAAIAAgNQAAgKAHgFQAGgEAGAAQAFAAAGAEQAHAFAAAKIAADNQAAAKgHAFQgGAEgFAAQgGAAgGgEgAgdhPQgMAIgIANQgIANgDAPQgEAQAAAOQAAAPAEAQQADAPAIANQAIANAMAIQANAIARAAQASAAANgIQAMgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgIgNgMgIQgNgIgSAAQgRAAgNAIg");
	this.shape_67.setTransform(502.65,704.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgZBwQgUgKgOgRQgNgRgHgWQgGgWAAgYQAAgXAGgWQAHgWANgRQAOgRAUgKQAUgKAaAAQAfAAARAJQARAJAAAMQAAAGgEAFQgFAFgHAAIgLgCIgJgEIgMgEIgRgCQgSAAgLAIQgOAIgIANQgIANgEAPQgEAQABAOQgBAPAEAQQAEAPAIANQAIANAOAIQALAIASAAIASgCIAMgEIAKgFIAJgCQAGAAAFAEQAEAEAAAIQAAAMgRAJQgPAKggAAQgaAAgUgKg");
	this.shape_68.setTransform(480.9,704.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AA9B1QgGgGAAgKIAAgEQgRAPgQAFQgQAFgQAAQgOAAgPgEQgPgFgMgLQgNgLgHgRQgIgRAAgZIAAiEQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGABAKIAACBQAAAQAFALQAEALAJAHQAHAHALAEQAJADAJAAQAKAAAKgDQAJgEAIgHQAIgHAGgLQAEgLAAgQIAAiBQAAgKAGgGQAFgFAJAAQAJAAAGAFQAFAGAAAKIAADJQAAAKgFAGQgGAFgJAAQgJAAgFgFg");
	this.shape_69.setTransform(447.35,704.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_70.setTransform(423.175,704.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOCdQgFgFAAgKIAAiEIhWiLQgGgKAAgHQAAgHAFgFQAFgEAIAAIALADQAEACAFAIIBJB5IBKh5QAFgIAEgCIALgDQAHAAAGAEQAFAFAAAHQAAAHgGAKIhWCLIAACEQAAAKgFAFQgGAGgJAAQgIAAgGgGg");
	this.shape_71.setTransform(403.15,700.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgPCcQgHgGAAgKQAAgJAHgGQAHgHAIAAQAJAAAIAHQAGAGAAAJQAAAKgGAGQgIAHgJAAQgIAAgHgHgAgNBFQgGgGABgKIAAjCQgBgKAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAKIAADCQAAAKgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_72.setTransform(740.55,700.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ABCBxIhChbIhBBbQgGAJgMAAQgHAAgFgFQgGgFAAgIIACgIIAHgLIBGhbIg+hSQgHgIAAgHQAAgIAFgFQAFgFAHAAQAHAAADACIAHAHIA5BNIA6hNIAHgHQADgCAHAAQAIAAAEAFQAFAFAAAIQAAAHgHAIIg+BSIBHBbIAGALIACAIQAAAIgFAFQgFAFgIAAQgLAAgHgJg");
	this.shape_73.setTransform(723.475,704.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AB/B1QgFgGAAgKIAAiFQAAgZgOgPQgNgPgYAAQgYAAgNAPQgOAPAAAZIAACFQAAAKgFAGQgGAFgJAAQgIAAgFgFQgGgGAAgKIAAiFQABgZgOgPQgNgPgZAAQgYAAgOAPQgNAPAAAZIAACFQAAAKgGAGQgFAFgIAAQgJAAgGgFQgGgGAAgKIAAjJQAAgKAGgGQAGgFAJAAQAIAAAFAFQAGAGAAAKIAAAHIABABIAJgKIALgJIARgIQAKgCAOAAQARAAARAIQARAJANAXQANgTARgLQARgKAbAAQAOAAAOAEQAOAFAMALQANALAHARQAJARgBAaIAACDQAAAKgEAGQgGAFgJAAQgJAAgGgFg");
	this.shape_74.setTransform(685.15,704.775);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("ABFCqQgGgGAAgKIAAgLIgBAAQgQAgguAAQgZAAgTgKQgSgKgOgRQgNgSgHgVQgGgXAAgXQAAgYAGgWQAHgVANgSQAOgQASgLQATgKAZAAQAKABAKACIATAIIAOAKIAJAMIABAAIAAh1QAAgKAGgFQAFgGAJAAQAJAAAGAGQAFAFAAAKIAAEzQAAAKgFAGQgGAFgJAAQgJAAgFgFgAgcgaQgMAIgIANQgIAMgEAPQgDAPAAAQQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgQgEgPQgDgPgIgMQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_75.setTransform(642.075,699.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("ABJB2QgGgFAAgKIAAgRIgBAAQgNATgQAJQgQAIgUAAQgYAAgUgKQgUgKgNgRQgNgRgHgWQgHgWAAgYQAAgXAHgWQAHgWANgRQANgRAUgKQAUgKAYAAQAVAAAPAIQAQAIANAQIABAAIAAgNQAAgKAGgFQAGgEAGAAQAHAAAGAEQAGAFAAAKIAADNQAAAKgGAFQgGAEgHAAQgGAAgGgEgAgchPQgNAIgIANQgIANgEAPQgCAQAAAOQAAAPACAQQAEAPAIANQAIANANAIQALAIASAAQASAAAMgIQANgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgHgNgOgIQgMgIgSAAQgSAAgLAIg");
	this.shape_76.setTransform(592.95,704.775);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgPCcQgHgGAAgKQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAKgGAGQgIAHgJAAQgJAAgGgHgAgNBFQgFgGAAgKIAAjCQAAgKAFgFQAFgGAIAAQAJAAAGAGQAFAFAAAKIAADCQAAAKgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape_77.setTransform(826.7,700.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgmCqQgEgGAAgKIAAi5IglAAQgUAAAAgSQAAgRAUAAIAlAAIAAgXQgBgSAGgPQAGgQAKgLQAKgMAOgGQAOgHARAAIAUADIAWAGQAJAEAIAHQAHAHAAAJQAAARgPAAQgHAAgEgDIgKgHIgNgGQgHgDgMAAQgLAAgGAEQgIADgDAHQgEAGgCAJIgBARIAAAcIAkAAQATAAAAARQAAASgTAAIgkAAIAAC5QAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_78.setTransform(699.65,699.475);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNCcQgGgGAAgKIAAkHIg8AAQgJgBgFgEQgFgEAAgKQAAgJAFgFQAFgFAJABICeAAQAJgBAGAFQAFAFAAAJQAAAKgFAEQgGAEgJABIg7AAIAAEHQAAAKgFAGQgGAGgJAAQgIAAgFgGg");
	this.shape_79.setTransform(643.4,700.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag7CVQgbgOgSgWQgRgXgJgeQgJgdAAgfQAAgeAJgeQAJgdARgXQASgXAbgNQAagOAhAAQAiAAAbAOQAaANASAXQASAXAIAdQAJAeAAAeQAAAfgJAdQgJAegRAXQgSAWgaAOQgbAOgiAAQghAAgagOgAgsh0QgTALgMATQgMASgFAXQgFAXAAAWQAAAXAFAXQAFAXAMASQAMATATALQASAMAaAAQAbAAATgMQASgLAMgTQAMgSAFgXQAFgXAAgXQAAgWgFgXQgFgXgMgSQgMgTgSgLQgTgMgbAAQgaAAgSAMg");
	this.shape_80.setTransform(617.975,700.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgyCiQgLgBgFgGQgFgGAAgJIAAkYQAAgJAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAJIAAEJIBUAAQAIgBAGAFQAFAFAAAJQAAAKgFAEQgGAEgIABg");
	this.shape_81.setTransform(594.825,700.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("ABKB2QgHgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgTgKgOgRQgOgRgGgWQgHgWAAgYQAAgXAHgWQAGgWAOgRQAOgRATgKQAUgKAYAAQAVAAAPAIQAPAIAPAQIAAAAIAAgNQAAgKAHgFQAGgEAFAAQAHAAAFAEQAHAFAAAKIAADNQAAAKgHAFQgFAEgHAAQgFAAgGgEgAgdhPQgMAIgIANQgIANgDAPQgDAQgBAOQABAPADAQQADAPAIANQAIANAMAIQANAIARAAQASAAAMgIQANgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgIgNgNgIQgMgIgSAAQgRAAgNAIg");
	this.shape_82.setTransform(560.8,704.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhIB1QgFgGAAgKIAAjJQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAAAJIABABQANgRASgHQAQgHASAAIAUABQAJACAJAGQAIAFADAIQADAHgFAIQgFAHgHABQgIACgJgFIgOgGIgPgCQgKAAgJADQgKAEgIAGQgIAHgEAMQgGALAAAQIAACBQAAAKgFAGQgFAFgJAAQgJAAgGgFg");
	this.shape_83.setTransform(529.3279,704.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_84.setTransform(506.825,704.775);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.498)").s().p("AgPCcQgHgGAAgKQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAKgGAGQgIAHgJAAQgJAAgGgHgAgNBFQgFgGAAgKIAAjCQAAgKAFgFQAFgGAIAAQAJAAAGAGQAFAFAAAKIAADCQAAAKgFAGQgGAFgJAAQgIAAgFgFg");
	this.shape_85.setTransform(826.7,700.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(255,255,255,0.498)").s().p("AgmCqQgEgGAAgKIAAi5IglAAQgUAAAAgSQAAgRAUAAIAlAAIAAgXQgBgSAGgPQAGgQAKgLQAKgMAOgGQAOgHARAAIAUADIAWAGQAJAEAIAHQAHAHAAAJQAAARgPAAQgHAAgEgDIgKgHIgNgGQgHgDgMAAQgLAAgGAEQgIADgDAHQgEAGgCAJIgBARIAAAcIAkAAQATAAAAARQAAASgTAAIgkAAIAAC5QAAAKgGAGQgFAFgJAAQgJAAgGgFg");
	this.shape_86.setTransform(699.65,699.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCcQgGgGAAgKIAAkHIg8AAQgJgBgFgEQgFgEAAgKQAAgJAFgFQAFgFAJABICeAAQAJgBAGAFQAFAFAAAJQAAAKgFAEQgGAEgJABIg7AAIAAEHQAAAKgFAGQgGAGgJAAQgIAAgFgGg");
	this.shape_87.setTransform(643.4,700.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(255,255,255,0.498)").s().p("Ag7CVQgbgOgSgWQgRgXgJgeQgJgdAAgfQAAgeAJgeQAJgdARgXQASgXAbgNQAagOAhAAQAiAAAbAOQAaANASAXQASAXAIAdQAJAeAAAeQAAAfgJAdQgJAegRAXQgSAWgaAOQgbAOgiAAQghAAgagOgAgsh0QgTALgMATQgMASgFAXQgFAXAAAWQAAAXAFAXQAFAXAMASQAMATATALQASAMAaAAQAbAAATgMQASgLAMgTQAMgSAFgXQAFgXAAgXQAAgWgFgXQgFgXgMgSQgMgTgSgLQgTgMgbAAQgaAAgSAMg");
	this.shape_88.setTransform(617.975,700.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.498)").s().p("AgyCiQgLgBgFgGQgFgGAAgJIAAkYQAAgJAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAJIAAEJIBUAAQAIgBAGAFQAFAFAAAJQAAAKgFAEQgGAEgIABg");
	this.shape_89.setTransform(594.825,700.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,255,255,0.498)").s().p("ABKB2QgHgFAAgKIAAgRIAAAAQgOATgQAJQgQAIgUAAQgYAAgUgKQgTgKgOgRQgOgRgGgWQgHgWAAgYQAAgXAHgWQAGgWAOgRQAOgRATgKQAUgKAYAAQAVAAAPAIQAPAIAPAQIAAAAIAAgNQAAgKAHgFQAGgEAFAAQAHAAAFAEQAHAFAAAKIAADNQAAAKgHAFQgFAEgHAAQgFAAgGgEgAgdhPQgMAIgIANQgIANgDAPQgDAQgBAOQABAPADAQQADAPAIANQAIANAMAIQANAIARAAQASAAAMgIQANgIAIgNQAIgNAEgPQADgQAAgPQAAgOgDgQQgEgPgIgNQgIgNgNgIQgMgIgSAAQgRAAgNAIg");
	this.shape_90.setTransform(560.8,704.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.498)").s().p("AhIB1QgFgGAAgKIAAjJQAAgKAFgGQAGgFAJAAQAJAAAFAFQAFAGAAAKIAAAJIABABQANgRASgHQAQgHASAAIAUABQAJACAJAGQAIAFADAIQADAHgFAIQgFAHgHABQgIACgJgFIgOgGIgPgCQgKAAgJADQgKAEgIAGQgIAHgEAMQgGALAAAQIAACBQAAAKgFAGQgFAFgJAAQgJAAgGgFg");
	this.shape_91.setTransform(529.3279,704.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(255,255,255,0.498)").s().p("AgsBwQgUgKgNgRQgOgRgHgWQgGgWAAgYQAAgXAGgWQAHgWAOgRQANgRAUgKQAUgKAYAAQAZAAAUAKQATAKAOARQANARAHAWQAHAWAAAXQAAAYgHAWQgHAWgNARQgOARgTAKQgUAKgZAAQgYAAgUgKgAgehPQgMAIgIANQgIANgEAPQgDAQAAAOQAAAPADAQQAEAPAIANQAIANAMAIQAMAIASAAQASAAAMgIQANgIAIgNQAIgNADgPQAEgQAAgPQAAgOgEgQQgDgPgIgNQgIgNgNgIQgMgIgSAAQgSAAgMAIg");
	this.shape_92.setTransform(506.825,704.775);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.498)").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgFAIgBQAJAAAHAGQAHAHgBAIQABAJgHAHQgHAGgJAAQgIAAgHgGg");
	this.shape_93.setTransform(903,714.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(255,255,255,0.498)").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_94.setTransform(891.9029,704.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgUgKgNgRQgNgQgHgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQAUgKAXAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJANAGQANAGAPAAQATAAANgFQANgFAIgGIAPgLQAGgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgJAJgNAHQgNAHgQAFQgSAFgQAAQgcAAgUgKgAgchPQgLAGgJAKQgHAKgEAOQgEANgBANICAAAQAAgMgEgNQgDgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_95.setTransform(870.3,704.675);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(255,255,255,0.498)").s().p("AgMB0QgEgEgDgJIhDi8IgEgIIgBgHQABgJAFgFQAFgFAHAAQAKAAAEAFQAFAEABAHIA1CgIAAAAIA2igQACgHAEgEQAEgFAKAAQAHAAAGAFQAEAFABAJIgBAHIgDAIIhDC8QgEAJgDAEQgEAEgKAAQgIAAgEgEg");
	this.shape_96.setTransform(849.5,704.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgTgKgNgRQgOgQgGgWQgHgVAAgYQAAgWAHgWQAGgVAOgRQANgRATgKQATgKAYAAQAZAAASAKQAUAKANARQANARAHAVQAHAWAAAWQAAAYgHAVQgHAWgNAQQgNARgUAKQgSAKgZAAQgYAAgTgKgAgdhNQgMAIgIAMQgHANgEAPQgDAPgBAOQABAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQARAAANgIQAMgIAIgNQAHgNAEgPQADgPAAgPQAAgOgDgPQgEgPgHgNQgIgMgMgIQgNgIgRAAQgRAAgMAIg");
	this.shape_97.setTransform(828.35,704.675);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgUABABgSQgBgQAUAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAGAGQAEAFAAALIAAAyIAcAAQATAAAAAQQAAASgTgBIgcAAIAAC2QAAAJgEAGQgGAFgIAAQgJAAgEgFg");
	this.shape_98.setTransform(798,701.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.498)").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_99.setTransform(782.5029,704.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(255,255,255,0.498)").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_100.setTransform(759.575,704.675);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgTABgBgSQABgQATAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAFAGQAFAFABALIAAAyIAbAAQAUAAAAAQQAAASgUgBIgbAAIAAC2QgBAJgFAGQgFAFgIAAQgJAAgEgFg");
	this.shape_101.setTransform(740.35,701.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(255,255,255,0.498)").s().p("AggB0QgQgFgMgGQgMgGgHgIQgHgIAAgIQAAgHAFgFQAFgFAGAAQAHAAAGAEIAOAKIAUAKQALAFAPAAQAVAAAMgKQAMgKAAgMQAAgMgJgIQgJgIgOgGIgegNQgQgHgOgHQgOgIgJgLQgJgLAAgRQAAgQAHgMQAHgMALgJQALgIAPgEQAOgFAOAAQALAAAOAEQAOADAMAFQALAGAIAHQAHAIAAAJQAAAGgEAFQgEAFgJAAQgGAAgFgEIgMgIIgPgIQgJgEgNAAQgQAAgMAHQgMAHAAAPQAAALAJAHQAJAHAOAGIAdAMQAQAFAOAIQAOAIAJALQAKAMAAARQAAASgIAOQgHANgMAJQgMAJgPAFQgQAEgQAAQgRAAgQgEg");
	this.shape_102.setTransform(723.125,704.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQANARAHAVQAHAWAAAWQAAAYgHAVQgHAWgNAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgNAIgHAMQgIANgDAPQgEAPABAOQgBAPAEAPQADAPAIANQAHANANAIQAMAIARAAQASAAALgIQANgIAHgNQAJgNADgPQADgPAAgPQAAgOgDgPQgDgPgJgNQgHgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_103.setTransform(690.6,704.675);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQAUAAgBAQQABASgUgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_104.setTransform(671.25,701.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.498)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_105.setTransform(640.975,704.675);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQAOARAGAVQAHAWAAAWQAAAYgHAVQgGAWgOAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgNAIgHAMQgIANgDAPQgEAPABAOQgBAPAEAPQADAPAIANQAHANANAIQAMAIARAAQASAAALgIQANgIAHgNQAJgNADgPQADgPAAgPQAAgOgDgPQgDgPgJgNQgHgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_106.setTransform(617.35,704.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQATAAAAAQQAAASgTgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_107.setTransform(598,701.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(255,255,255,0.498)").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQAUAAgBAQQABASgUgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_108.setTransform(583.05,701.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.498)").s().p("AA7ByQgFgFAAgKIAAgEQgRAPgPAFQgQAFgQAAQgOAAgOgFQgPgEgLgLQgMgLgIgRQgIgQAAgZIAAiBQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAB/QAAAPAFALQAFALAHAHQAIAHAKADQAJADAJAAQAKAAAJgDQAKgDAIgHQAIgHAEgLQAFgLAAgPIAAh/QAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAADFQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_109.setTransform(563.775,704.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8CLIgBAAIAAAMQAAAJgFAGQgGAFgJAAQgIAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAKIAABxIABAAIAJgLIAOgKIASgHQAKgDAKAAQAYAAASAKQATAJANASQANAQAGAVQAHAVAAAYQAAAXgHAWQgGAVgNAQQgNARgTAKQgSAKgYAAQgtAAgQgggAgfgaQgMAIgIANQgIALgDAQQgDAPAAAPQAAAOADAPQADAPAIANQAIANAMAIQAMAIASAAQARAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgOQAAgPgDgPQgDgQgIgLQgIgNgMgIQgMgIgRAAQgSAAgMAIg");
	this.shape_110.setTransform(540.325,699.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.498)").s().p("AggB0QgQgFgMgGQgMgGgHgIQgHgIAAgIQAAgHAFgFQAFgFAGAAQAHAAAGAEIAOAKIAUAKQALAFAPAAQAVAAAMgKQAMgKAAgMQAAgMgJgIQgJgIgOgGIgegNQgQgHgOgHQgOgIgJgLQgJgLAAgRQAAgQAHgMQAHgMALgJQALgIAPgEQAOgFAOAAQALAAAOAEQAOADAMAFQALAGAIAHQAHAIAAAJQAAAGgEAFQgEAFgJAAQgGAAgFgEIgMgIIgPgIQgJgEgNAAQgQAAgMAHQgMAHAAAPQAAALAJAHQAJAHAOAGIAdAMQAQAFAOAIQAOAIAJALQAKAMAAARQAAASgIAOQgHANgMAJQgMAJgPAFQgQAEgQAAQgRAAgQgEg");
	this.shape_111.setTransform(506.725,704.675);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_112.setTransform(492.525,700.725);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.498)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_113.setTransform(476.225,699.55);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgUABABgSQgBgQAUAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAGAGQAEAFAAALIAAAyIAcAAQATAAAAAQQAAASgTgBIgcAAIAAC2QAAAJgEAGQgGAFgIAAQgJAAgEgFg");
	this.shape_114.setTransform(456.9,701.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.498)").s().p("AhfCoQgFgFAAgKIAAkxQAAgKAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAKIAAAMIABAAQAQghAtAAQAYAAASAKQATAKANARQANARAGAVQAHAWAAAXQAAAYgHAVQgGAVgNAQQgNARgTAKQgSAJgYAAQgLAAgJgCIgSgIIgOgKIgJgLIgBAAIAAB3QAAAKgFAFQgGAGgJAAQgIAAgGgGgAgfiDQgMAIgIAMQgIANgDAPQgDAPAAAPQAAAPADAPQADAPAIAMQAIAMAMAIQAMAIASAAQARAAAMgIQAMgIAIgMQAIgMADgPQADgPAAgPQAAgPgDgPQgDgPgIgNQgIgMgMgIQgMgIgRAAQgSAAgMAIg");
	this.shape_115.setTransform(426.825,710.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.498)").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_116.setTransform(401.275,704.675);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCYQgFgFAAgKIAAkCIg7AAQgIAAgGgEQgFgFAAgJQAAgJAFgFQAGgEAIAAICbAAQAIAAAGAEQAFAFAAAJQAAAJgFAFQgGAEgIAAIg7AAIAAECQAAAKgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_117.setTransform(383.875,700.875);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgFAIgBQAJAAAHAGQAHAHgBAIQABAJgHAHQgHAGgJAAQgIAAgHgGg");
	this.shape_118.setTransform(903,714.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_119.setTransform(891.9029,704.725);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgrBuQgUgKgNgRQgNgQgHgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQAUgKAXAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJANAGQANAGAPAAQATAAANgFQANgFAIgGIAPgLQAGgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgJAJgNAHQgNAHgQAFQgSAFgQAAQgcAAgUgKgAgchPQgLAGgJAKQgHAKgEAOQgEANgBANICAAAQAAgMgEgNQgDgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_120.setTransform(870.3,704.675);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgMB0QgEgEgDgJIhDi8IgEgIIgBgHQABgJAFgFQAFgFAHAAQAKAAAEAFQAFAEABAHIA1CgIAAAAIA2igQACgHAEgEQAEgFAKAAQAHAAAGAFQAEAFABAJIgBAHIgDAIIhDC8QgEAJgDAEQgEAEgKAAQgIAAgEgEg");
	this.shape_121.setTransform(849.5,704.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgrBuQgTgKgNgRQgOgQgGgWQgHgVAAgYQAAgWAHgWQAGgVAOgRQANgRATgKQATgKAYAAQAZAAASAKQAUAKANARQANARAHAVQAHAWAAAWQAAAYgHAVQgHAWgNAQQgNARgUAKQgSAKgZAAQgYAAgTgKgAgdhNQgMAIgIAMQgHANgEAPQgDAPgBAOQABAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQARAAANgIQAMgIAIgNQAHgNAEgPQADgPAAgPQAAgOgDgPQgEgPgHgNQgIgMgMgIQgNgIgRAAQgRAAgMAIg");
	this.shape_122.setTransform(828.35,704.675);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgUABABgSQgBgQAUAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAGAGQAEAFAAALIAAAyIAcAAQATAAAAAQQAAASgTgBIgcAAIAAC2QAAAJgEAGQgGAFgIAAQgJAAgEgFg");
	this.shape_123.setTransform(798,701.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_124.setTransform(782.5029,704.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_125.setTransform(759.575,704.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgTABgBgSQABgQATAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAFAGQAFAFABALIAAAyIAbAAQAUAAAAAQQAAASgUgBIgbAAIAAC2QgBAJgFAGQgFAFgIAAQgJAAgEgFg");
	this.shape_126.setTransform(740.35,701.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AggB0QgQgFgMgGQgMgGgHgIQgHgIAAgIQAAgHAFgFQAFgFAGAAQAHAAAGAEIAOAKIAUAKQALAFAPAAQAVAAAMgKQAMgKAAgMQAAgMgJgIQgJgIgOgGIgegNQgQgHgOgHQgOgIgJgLQgJgLAAgRQAAgQAHgMQAHgMALgJQALgIAPgEQAOgFAOAAQALAAAOAEQAOADAMAFQALAGAIAHQAHAIAAAJQAAAGgEAFQgEAFgJAAQgGAAgFgEIgMgIIgPgIQgJgEgNAAQgQAAgMAHQgMAHAAAPQAAALAJAHQAJAHAOAGIAdAMQAQAFAOAIQAOAIAJALQAKAMAAARQAAASgIAOQgHANgMAJQgMAJgPAFQgQAEgQAAQgRAAgQgEg");
	this.shape_127.setTransform(723.125,704.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQANARAHAVQAHAWAAAWQAAAYgHAVQgHAWgNAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgNAIgHAMQgIANgDAPQgEAPABAOQgBAPAEAPQADAPAIANQAHANANAIQAMAIARAAQASAAALgIQANgIAHgNQAJgNADgPQADgPAAgPQAAgOgDgPQgDgPgJgNQgHgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_128.setTransform(690.6,704.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQAUAAgBAQQABASgUgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_129.setTransform(671.25,701.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_130.setTransform(640.975,704.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQAOARAGAVQAHAWAAAWQAAAYgHAVQgGAWgOAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgNAIgHAMQgIANgDAPQgEAPABAOQgBAPAEAPQADAPAIANQAHANANAIQAMAIARAAQASAAALgIQANgIAHgNQAJgNADgPQADgPAAgPQAAgOgDgPQgDgPgJgNQgHgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_131.setTransform(617.35,704.675);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQATAAAAAQQAAASgTgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_132.setTransform(598,701.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgOCVQgFgGAAgJIAAi2IgaAAQgTABAAgSQAAgQATAAIAaAAIAAgyQAAgLAFgFQAGgGAIABQAIgBAFAGQAGAFAAALIAAAyIAbAAQAUAAgBAQQABASgUgBIgbAAIAAC2QAAAJgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_133.setTransform(583.05,701.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AA7ByQgFgFAAgKIAAgEQgRAPgPAFQgQAFgQAAQgOAAgOgFQgPgEgLgLQgMgLgIgRQgIgQAAgZIAAiBQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAB/QAAAPAFALQAFALAHAHQAIAHAKADQAJADAJAAQAKAAAJgDQAKgDAIgHQAIgHAEgLQAFgLAAgPIAAh/QAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAADFQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_134.setTransform(563.775,704.725);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Ag8CLIgBAAIAAAMQAAAJgFAGQgGAFgJAAQgIAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAKIAABxIABAAIAJgLIAOgKIASgHQAKgDAKAAQAYAAASAKQATAJANASQANAQAGAVQAHAVAAAYQAAAXgHAWQgGAVgNAQQgNARgTAKQgSAKgYAAQgtAAgQgggAgfgaQgMAIgIANQgIALgDAQQgDAPAAAPQAAAOADAPQADAPAIANQAIANAMAIQAMAIASAAQARAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgOQAAgPgDgPQgDgQgIgLQgIgNgMgIQgMgIgRAAQgSAAgMAIg");
	this.shape_135.setTransform(540.325,699.55);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AggB0QgQgFgMgGQgMgGgHgIQgHgIAAgIQAAgHAFgFQAFgFAGAAQAHAAAGAEIAOAKIAUAKQALAFAPAAQAVAAAMgKQAMgKAAgMQAAgMgJgIQgJgIgOgGIgegNQgQgHgOgHQgOgIgJgLQgJgLAAgRQAAgQAHgMQAHgMALgJQALgIAPgEQAOgFAOAAQALAAAOAEQAOADAMAFQALAGAIAHQAHAIAAAJQAAAGgEAFQgEAFgJAAQgGAAgFgEIgMgIIgPgIQgJgEgNAAQgQAAgMAHQgMAHAAAPQAAALAJAHQAJAHAOAGIAdAMQAQAFAOAIQAOAIAJALQAKAMAAARQAAASgIAOQgHANgMAJQgMAJgPAFQgQAEgQAAQgRAAgQgEg");
	this.shape_136.setTransform(506.725,704.675);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_137.setTransform(492.525,700.725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_138.setTransform(476.225,699.55);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgUABABgSQgBgQAUAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAGAGQAEAFAAALIAAAyIAcAAQATAAAAAQQAAASgTgBIgcAAIAAC2QAAAJgEAGQgGAFgIAAQgJAAgEgFg");
	this.shape_139.setTransform(456.9,701.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhfCoQgFgFAAgKIAAkxQAAgKAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAKIAAAMIABAAQAQghAtAAQAYAAASAKQATAKANARQANARAGAVQAHAWAAAXQAAAYgHAVQgGAVgNAQQgNARgTAKQgSAJgYAAQgLAAgJgCIgSgIIgOgKIgJgLIgBAAIAAB3QAAAKgFAFQgGAGgJAAQgIAAgGgGgAgfiDQgMAIgIAMQgIANgDAPQgDAPAAAPQAAAPADAPQADAPAIAMQAIAMAMAIQAMAIASAAQARAAAMgIQAMgIAIgMQAIgMADgPQADgPAAgPQAAgPgDgPQgDgPgIgNQgIgMgMgIQgMgIgRAAQgSAAgMAIg");
	this.shape_140.setTransform(426.825,710.075);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_141.setTransform(401.275,704.675);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgNCYQgFgFAAgKIAAkCIg7AAQgIAAgGgEQgFgFAAgJQAAgJAFgFQAGgEAIAAICbAAQAIAAAGAEQAFAFAAAJQAAAJgFAFQgGAEgIAAIg7AAIAAECQAAAKgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_142.setTransform(383.875,700.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,255,255,0.498)").s().p("AgPCZQgGgHAAgJQAAgJAGgGQAHgGAIgBQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGgAgNBDQgFgFAAgKIAAi9QAAgKAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAKIAAC9QAAAKgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_143.setTransform(1011.975,700.725);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgVgKgNgRQgNgQgGgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQATgKAYAAQAYAAATAKQASAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgQAFgRAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANAAANIB/AAQAAgMgDgNQgFgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_144.setTransform(954.05,704.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,255,255,0.498)").s().p("AgXAcQAAgHAFgGQAJgPgDgXQgCgLAGgHQAEgHAJAAQAHAAAFAFQAEAFACAHIABAKIAAAIQAAAPgDAOQgEANgHALQgHAJgIAAQgSAAAAgVg");
	this.shape_145.setTransform(827.3,717.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,255,255,0.498)").s().p("AgiCqQgQgEgNgGQgOgHgIgHQgJgIAAgHQABgGADgGQADgGAKAAQAHAAAHAEIAOAKIAVAJQALAEARAAQARAAAMgGQANgHAGgKQAIgLADgMQADgNAAgNIAAgjIgBAAQgJAPgPAKQgPAJgUAAQgYAAgTgKQgTgLgNgQQgNgRgIgVQgGgVAAgYQAAgXAGgWQAIgVANgRQANgRATgKQATgKAYAAQAJAAAJADIARAHIAOAJIAKALIABAAIAAgLQAAgKAGgEQAHgFAIAAQAGAAAFAFQAHAEAAALIAADXQAAAagIAVQgHAUgOAPQgPAOgSAIQgUAIgXAAQgOAAgQgEgAgbiDQgNAIgHANQgIAMgDAPQgEAQABAPQgBAPAEAPQADAPAIAMQAHAMANAIQAMAIARAAQASAAALgIQANgIAHgMQAJgMADgPQADgPAAgPQAAgPgDgQQgDgPgJgMQgHgNgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_146.setTransform(809.3,710.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,255,255,0.498)").s().p("ABBBvIhBhaIg/BaQgHAJgLAAQgHAAgGgFQgEgFAAgIIABgIIAHgKIBEhaIg8hPQgHgJAAgHQAAgHAFgFQAEgGAIAAQAGAAAEADIAGAGIA4BMIA5hMIAHgGQADgDAHAAQAGAAAFAGQAFAFAAAHQAAAHgHAJIg9BPIBGBaIAGAKIACAIQAAAIgGAFQgEAFgIAAQgLAAgGgJg");
	this.shape_147.setTransform(754.85,704.675);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_148.setTransform(740.175,700.725);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,255,255,0.498)").s().p("AB8ByQgFgFAAgKIAAiCQAAgZgNgPQgNgOgYAAQgYAAgNAOQgMAPAAAZIAACCQAAAKgGAFQgFAGgJAAQgIAAgFgGQgGgFAAgKIAAiCQAAgZgMgPQgOgOgXAAQgYAAgNAOQgOAPAAAZIAACCQAAAKgEAFQgGAGgJAAQgIAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAIAAQAJAAAGAGQAEAFAAAKIAAAHIABABIAJgJIAMgKIAQgHQAKgDANAAQARAAARAJQARAJAMAWQANgSAQgLQARgLAZAAQAOAAAOAFQAPAFALAKQAMALAIARQAIARAAAYIAACBQAAAKgFAFQgFAGgKAAQgIAAgGgGg");
	this.shape_149.setTransform(717.4,704.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,255,255,0.498)").s().p("ABECmQgGgGAAgJIAAgMIgBAAQgRAggsAAQgYAAgTgKQgSgKgNgRQgNgQgGgVQgHgWAAgXQAAgYAHgVQAGgVANgQQANgSASgJQATgKAYAAQALAAAJADIASAHIAOAKIAJALIABAAIAAhxQAAgKAGgFQAFgGAIAAQAKAAAFAGQAFAFAAAKIAAEsQAAAJgFAGQgFAFgKAAQgIAAgFgFgAgbgaQgMAIgIANQgIALgDAQQgEAPAAAPQAAAOAEAPQADAPAIANQAIANAMAIQAMAIARAAQARAAANgIQAMgIAIgNQAHgNAEgPQADgPAAgOQAAgPgDgPQgEgQgHgLQgIgNgMgIQgNgIgRAAQgRAAgMAIg");
	this.shape_150.setTransform(675.25,699.55);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgVgKgMgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_151.setTransform(652.2,704.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,255,255,0.498)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_152.setTransform(628.925,699.55);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_153.setTransform(593.125,700.725);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,255,255,0.498)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_154.setTransform(576.825,704.675);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,255,255,0.498)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_155.setTransform(560.525,700.725);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,255,255,0.498)").s().p("AglCmQgEgGAAgKIAAi1IgkAAQgUAAABgRQgBgRAUAAIAkAAIAAgXQgBgRAGgPQAFgPALgLQAKgLANgGQANgHASAAIATACIAVAHQAKAEAGAGQAIAHgBAJQAAAQgOAAQgHAAgEgDIgKgGIgMgGQgHgDgMAAQgKAAgHAEQgGADgEAGQgEAHgBAIIgCARIAAAbIAjAAQATAAAAARQAAARgTAAIgjAAIAAC1QAAAKgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_156.setTransform(545.75,699.525);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgUgKgOgRQgMgQgHgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQAUgKAXAAQAYAAATAKQASAKANAQQANAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJANAGQANAGAOAAQAUAAANgFQAMgFAJgGIAPgLQAFgFAGAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgOAHQgNAHgQAFQgSAFgRAAQgbAAgUgKgAgbhPQgMAGgJAKQgHAKgEAOQgEANAAANIB/AAQAAgMgEgNQgEgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_157.setTransform(512.75,704.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQAOARAGAVQAHAWAAAWQAAAYgHAVQgGAWgOAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAALgIQANgIAIgNQAHgNAEgPQADgPAAgPQAAgOgDgPQgEgPgHgNQgIgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_158.setTransform(413.25,704.675);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,255,255,0.498)").s().p("AgvCpQgFgEAAgIIABgIIAEgNIAdhRIhCi9IgEgOIgBgIQAAgHAFgEQAGgFAGAAQAIAAAFAEQAFAEACAHIA0CfIABAAIA1ifQACgHAFgEQAEgEAIAAQAGAAAGAFQAFAEAAAHIgBAIIgEAOIhlElQgCAGgFAEQgEAEgIAAQgGAAgGgEg");
	this.shape_159.setTransform(391.675,710.025);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,255,255,0.498)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_160.setTransform(359.075,704.675);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.498)").s().p("AgrBuQgUgKgNgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQATAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgchPQgMAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_161.setTransform(335.85,704.675);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,255,255,0.498)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_162.setTransform(312.575,699.55);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,255,255,0.498)").s().p("ABMCbQgHgFgFgQIg/jlIgBAAIg/DlQgGAQgHAFQgGAEgMAAQgPAAgGgHQgFgIgCgKIgvj/IgCgMIAAgIQgBgHAFgFQAEgFAJAAQASAAADASIApD5IABAAIBIj8QADgJAEgDQAGgDAGAAQAHAAAFADQAFADACAJIBJD8IABAAIApj5QADgSASAAQAJAAAEAFQAEAFABAHIgBAIIgBAMIgxD/IgCAKIgEAIIgJAFIgMACQgLAAgIgEg");
	this.shape_163.setTransform(282.45,700.725);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgPCZQgGgHAAgJQAAgJAGgGQAHgGAIgBQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGgAgNBDQgFgFAAgKIAAi9QAAgKAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAKIAAC9QAAAKgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_164.setTransform(1011.975,700.725);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgrBuQgVgKgNgRQgNgQgGgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQATgKAYAAQAYAAATAKQASAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgQAFgRAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANAAANIB/AAQAAgMgDgNQgFgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_165.setTransform(954.05,704.675);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgXAcQAAgHAFgGQAJgPgDgXQgCgLAGgHQAEgHAJAAQAHAAAFAFQAEAFACAHIABAKIAAAIQAAAPgDAOQgEANgHALQgHAJgIAAQgSAAAAgVg");
	this.shape_166.setTransform(827.3,717.075);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgiCqQgQgEgNgGQgOgHgIgHQgJgIAAgHQABgGADgGQADgGAKAAQAHAAAHAEIAOAKIAVAJQALAEARAAQARAAAMgGQANgHAGgKQAIgLADgMQADgNAAgNIAAgjIgBAAQgJAPgPAKQgPAJgUAAQgYAAgTgKQgTgLgNgQQgNgRgIgVQgGgVAAgYQAAgXAGgWQAIgVANgRQANgRATgKQATgKAYAAQAJAAAJADIARAHIAOAJIAKALIABAAIAAgLQAAgKAGgEQAHgFAIAAQAGAAAFAFQAHAEAAALIAADXQAAAagIAVQgHAUgOAPQgPAOgSAIQgUAIgXAAQgOAAgQgEgAgbiDQgNAIgHANQgIAMgDAPQgEAQABAPQgBAPAEAPQADAPAIAMQAHAMANAIQAMAIARAAQASAAALgIQANgIAHgMQAJgMADgPQADgPAAgPQAAgPgDgQQgDgPgJgMQgHgNgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_167.setTransform(809.3,710.075);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("ABBBvIhBhaIg/BaQgHAJgLAAQgHAAgGgFQgEgFAAgIIABgIIAHgKIBEhaIg8hPQgHgJAAgHQAAgHAFgFQAEgGAIAAQAGAAAEADIAGAGIA4BMIA5hMIAHgGQADgDAHAAQAGAAAFAGQAFAFAAAHQAAAHgHAJIg9BPIBGBaIAGAKIACAIQAAAIgGAFQgEAFgIAAQgLAAgGgJg");
	this.shape_168.setTransform(754.85,704.675);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_169.setTransform(740.175,700.725);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AB8ByQgFgFAAgKIAAiCQAAgZgNgPQgNgOgYAAQgYAAgNAOQgMAPAAAZIAACCQAAAKgGAFQgFAGgJAAQgIAAgFgGQgGgFAAgKIAAiCQAAgZgMgPQgOgOgXAAQgYAAgNAOQgOAPAAAZIAACCQAAAKgEAFQgGAGgJAAQgIAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAIAAQAJAAAGAGQAEAFAAAKIAAAHIABABIAJgJIAMgKIAQgHQAKgDANAAQARAAARAJQARAJAMAWQANgSAQgLQARgLAZAAQAOAAAOAFQAPAFALAKQAMALAIARQAIARAAAYIAACBQAAAKgFAFQgFAGgKAAQgIAAgGgGg");
	this.shape_170.setTransform(717.4,704.675);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("ABECmQgGgGAAgJIAAgMIgBAAQgRAggsAAQgYAAgTgKQgSgKgNgRQgNgQgGgVQgHgWAAgXQAAgYAHgVQAGgVANgQQANgSASgJQATgKAYAAQALAAAJADIASAHIAOAKIAJALIABAAIAAhxQAAgKAGgFQAFgGAIAAQAKAAAFAGQAFAFAAAKIAAEsQAAAJgFAGQgFAFgKAAQgIAAgFgFgAgbgaQgMAIgIANQgIALgDAQQgEAPAAAPQAAAOAEAPQADAPAIANQAIANAMAIQAMAIARAAQARAAANgIQAMgIAIgNQAHgNAEgPQADgPAAgOQAAgPgDgPQgEgQgHgLQgIgNgMgIQgNgIgRAAQgRAAgMAIg");
	this.shape_171.setTransform(675.25,699.55);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgrBuQgVgKgMgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_172.setTransform(652.2,704.675);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_173.setTransform(628.925,699.55);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_174.setTransform(593.125,700.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_175.setTransform(576.825,704.675);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_176.setTransform(560.525,700.725);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AglCmQgEgGAAgKIAAi1IgkAAQgUAAABgRQgBgRAUAAIAkAAIAAgXQgBgRAGgPQAFgPALgLQAKgLANgGQANgHASAAIATACIAVAHQAKAEAGAGQAIAHgBAJQAAAQgOAAQgHAAgEgDIgKgGIgMgGQgHgDgMAAQgKAAgHAEQgGADgEAGQgEAHgBAIIgCARIAAAbIAjAAQATAAAAARQAAARgTAAIgjAAIAAC1QAAAKgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_177.setTransform(545.75,699.525);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgrBuQgUgKgOgRQgMgQgHgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQAUgKAXAAQAYAAATAKQASAKANAQQANAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJANAGQANAGAOAAQAUAAANgFQAMgFAJgGIAPgLQAFgFAGAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgOAHQgNAHgQAFQgSAFgRAAQgbAAgUgKgAgbhPQgMAGgJAKQgHAKgEAOQgEANAAANIB/AAQAAgMgEgNQgEgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_178.setTransform(512.75,704.675);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQAOARAGAVQAHAWAAAWQAAAYgHAVQgGAWgOAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAALgIQANgIAIgNQAHgNAEgPQADgPAAgPQAAgOgDgPQgEgPgHgNQgIgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_179.setTransform(413.25,704.675);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgvCpQgFgEAAgIIABgIIAEgNIAdhRIhCi9IgEgOIgBgIQAAgHAFgEQAGgFAGAAQAIAAAFAEQAFAEACAHIA0CfIABAAIA1ifQACgHAFgEQAEgEAIAAQAGAAAGAFQAFAEAAAHIgBAIIgEAOIhlElQgCAGgFAEQgEAEgIAAQgGAAgGgEg");
	this.shape_180.setTransform(391.675,710.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_181.setTransform(359.075,704.675);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgrBuQgUgKgNgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQATAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgchPQgMAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_182.setTransform(335.85,704.675);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_183.setTransform(312.575,699.55);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("ABMCbQgHgFgFgQIg/jlIgBAAIg/DlQgGAQgHAFQgGAEgMAAQgPAAgGgHQgFgIgCgKIgvj/IgCgMIAAgIQgBgHAFgFQAEgFAJAAQASAAADASIApD5IABAAIBIj8QADgJAEgDQAGgDAGAAQAHAAAFADQAFADACAJIBJD8IABAAIApj5QADgSASAAQAJAAAEAFQAEAFABAHIgBAIIgBAMIgxD/IgCAKIgEAIIgJAFIgMACQgLAAgIgEg");
	this.shape_184.setTransform(282.45,700.725);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,255,255,0.2)").s().p("AgPCZQgGgHAAgJQAAgJAGgGQAHgGAIgBQAJAAAHAHQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGgAgNBDQgFgFAAgKIAAi9QAAgKAFgGQAFgFAIAAQAJAAAFAFQAFAGAAAKIAAC9QAAAKgFAFQgFAGgJAAQgIAAgFgGg");
	this.shape_185.setTransform(1011.975,700.725);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgUgKgNgRQgNgQgHgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQAUgKAXAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJANAGQANAGAPAAQATAAANgFQANgFAIgGIAPgLQAGgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgJAJgNAHQgNAHgQAFQgSAFgQAAQgcAAgUgKgAgchPQgLAGgJAKQgHAKgEAOQgEANgBANICAAAQAAgMgEgNQgDgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_186.setTransform(994.05,704.675);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,255,255,0.2)").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_187.setTransform(975.6529,704.725);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgVgKgNgRQgNgQgGgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQATgKAYAAQAYAAATAKQASAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgQAFgRAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANAAANIB/AAQAAgMgDgNQgFgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_188.setTransform(954.05,704.675);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,255,255,0.2)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_189.setTransform(930.775,699.55);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,255,255,0.2)").s().p("AhfCoQgFgFAAgKIAAkxQAAgKAFgFQAGgGAIAAQAJAAAGAGQAFAFAAAKIAAAMIABAAQAQghAtAAQAYAAASAKQATAKANARQANARAGAVQAHAWAAAXQAAAYgHAVQgGAVgNAQQgNARgTAKQgSAJgYAAQgLAAgJgCIgSgIIgOgKIgJgLIgBAAIAAB3QAAAKgFAFQgGAGgJAAQgIAAgGgGgAgfiDQgMAIgIAMQgIANgDAPQgDAPAAAPQAAAPADAPQADAPAIAMQAIAMAMAIQAMAIASAAQARAAAMgIQAMgIAIgMQAIgMADgPQADgPAAgPQAAgPgDgPQgDgPgIgNQgIgMgMgIQgMgIgRAAQgSAAgMAIg");
	this.shape_190.setTransform(896.325,710.075);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,255,255,0.2)").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_191.setTransform(870.775,704.675);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCVQgGgGAAgJIAAi2IgaAAQgUABABgSQgBgQAUAAIAaAAIAAgyQAAgLAGgFQAEgGAJABQAIgBAGAGQAEAFAAALIAAAyIAcAAQATAAAAAQQAAASgTgBIgcAAIAAC2QAAAJgEAGQgGAFgIAAQgJAAgEgFg");
	this.shape_192.setTransform(851.55,701.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,255,255,0.2)").s().p("AgXAcQAAgHAFgGQAJgPgDgXQgCgLAGgHQAEgHAJAAQAHAAAFAFQAEAFACAHIABAKIAAAIQAAAPgDAOQgEANgHALQgHAJgIAAQgSAAAAgVg");
	this.shape_193.setTransform(827.3,717.075);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,255,255,0.2)").s().p("AgiCqQgQgEgNgGQgOgHgIgHQgJgIAAgHQABgGADgGQADgGAKAAQAHAAAHAEIAOAKIAVAJQALAEARAAQARAAAMgGQANgHAGgKQAIgLADgMQADgNAAgNIAAgjIgBAAQgJAPgPAKQgPAJgUAAQgYAAgTgKQgTgLgNgQQgNgRgIgVQgGgVAAgYQAAgXAGgWQAIgVANgRQANgRATgKQATgKAYAAQAJAAAJADIARAHIAOAJIAKALIABAAIAAgLQAAgKAGgEQAHgFAIAAQAGAAAFAFQAHAEAAALIAADXQAAAagIAVQgHAUgOAPQgPAOgSAIQgUAIgXAAQgOAAgQgEgAgbiDQgNAIgHANQgIAMgDAPQgEAQABAPQgBAPAEAPQADAPAIAMQAHAMANAIQAMAIARAAQASAAALgIQANgIAHgMQAJgMADgPQADgPAAgPQAAgPgDgQQgDgPgJgMQgHgNgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_194.setTransform(809.3,710.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,255,255,0.2)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_195.setTransform(785.825,704.675);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_196.setTransform(769.525,700.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,255,255,0.2)").s().p("ABBBvIhBhaIg/BaQgHAJgLAAQgHAAgGgFQgEgFAAgIIABgIIAHgKIBEhaIg8hPQgHgJAAgHQAAgHAFgFQAEgGAIAAQAGAAAEADIAGAGIA4BMIA5hMIAHgGQADgDAHAAQAGAAAFAGQAFAFAAAHQAAAHgHAJIg9BPIBGBaIAGAKIACAIQAAAIgGAFQgEAFgIAAQgLAAgGgJg");
	this.shape_197.setTransform(754.85,704.675);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_198.setTransform(740.175,700.725);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.2)").s().p("AB8ByQgFgFAAgKIAAiCQAAgZgNgPQgNgOgYAAQgYAAgNAOQgMAPAAAZIAACCQAAAKgGAFQgFAGgJAAQgIAAgFgGQgGgFAAgKIAAiCQAAgZgMgPQgOgOgXAAQgYAAgNAOQgOAPAAAZIAACCQAAAKgEAFQgGAGgJAAQgIAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAIAAQAJAAAGAGQAEAFAAAKIAAAHIABABIAJgJIAMgKIAQgHQAKgDANAAQARAAARAJQARAJAMAWQANgSAQgLQARgLAZAAQAOAAAOAFQAPAFALAKQAMALAIARQAIARAAAYIAACBQAAAKgFAFQgFAGgKAAQgIAAgGgGg");
	this.shape_199.setTransform(717.4,704.675);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(255,255,255,0.2)").s().p("ABECmQgGgGAAgJIAAgMIgBAAQgRAggsAAQgYAAgTgKQgSgKgNgRQgNgQgGgVQgHgWAAgXQAAgYAHgVQAGgVANgQQANgSASgJQATgKAYAAQALAAAJADIASAHIAOAKIAJALIABAAIAAhxQAAgKAGgFQAFgGAIAAQAKAAAFAGQAFAFAAAKIAAEsQAAAJgFAGQgFAFgKAAQgIAAgFgFgAgbgaQgMAIgIANQgIALgDAQQgEAPAAAPQAAAOAEAPQADAPAIANQAIANAMAIQAMAIARAAQARAAANgIQAMgIAIgNQAHgNAEgPQADgPAAgOQAAgPgDgPQgEgQgHgLQgIgNgMgIQgNgIgRAAQgRAAgMAIg");
	this.shape_200.setTransform(675.25,699.55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgVgKgMgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQAUAKANAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgbhPQgNAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_201.setTransform(652.2,704.675);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.2)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_202.setTransform(628.925,699.55);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.2)").s().p("AggB0QgQgFgMgGQgMgGgHgIQgHgIAAgIQAAgHAFgFQAFgFAGAAQAHAAAGAEIAOAKIAUAKQALAFAPAAQAVAAAMgKQAMgKAAgMQAAgMgJgIQgJgIgOgGIgegNQgQgHgOgHQgOgIgJgLQgJgLAAgRQAAgQAHgMQAHgMALgJQALgIAPgEQAOgFAOAAQALAAAOAEQAOADAMAFQALAGAIAHQAHAIAAAJQAAAGgEAFQgEAFgJAAQgGAAgFgEIgMgIIgPgIQgJgEgNAAQgQAAgMAHQgMAHAAAPQAAALAJAHQAJAHAOAGIAdAMQAQAFAOAIQAOAIAJALQAKAMAAARQAAASgIAOQgHANgMAJQgMAJgPAFQgQAEgQAAQgRAAgQgEg");
	this.shape_203.setTransform(607.325,704.675);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_204.setTransform(593.125,700.725);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.2)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_205.setTransform(576.825,704.675);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.2)").s().p("AgNCaQgFgGAAgJIAAjFQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAADFQAAAJgFAGQgFAFgJAAQgIAAgFgFgAgQh1QgHgHAAgKQAAgLAHgGQAHgHAJAAQAKAAAHAHQAHAGAAALQAAAKgHAHQgHAGgKAAQgJAAgHgGg");
	this.shape_206.setTransform(560.525,700.725);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.2)").s().p("AglCmQgEgGAAgKIAAi1IgkAAQgUAAABgRQgBgRAUAAIAkAAIAAgXQgBgRAGgPQAFgPALgLQAKgLANgGQANgHASAAIATACIAVAHQAKAEAGAGQAIAHgBAJQAAAQgOAAQgHAAgEgDIgKgGIgMgGQgHgDgMAAQgKAAgHAEQgGADgEAGQgEAHgBAIIgCARIAAAbIAjAAQATAAAAARQAAARgTAAIgjAAIAAC1QAAAKgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_207.setTransform(545.75,699.525);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgUgKgOgRQgMgQgHgWQgGgVAAgYQAAgWAHgWQAHgWAOgQQANgRAUgKQAUgKAXAAQAYAAATAKQASAKANAQQANAQAHAVQAHAUAAAWQAAAJgEAFQgFAFgNAAIiQAAQAAAPAEANQAFANAJAKQAJAJANAGQANAGAOAAQAUAAANgFQAMgFAJgGIAPgLQAFgFAGAAQAFAAAEAEQAFAFAAAIQAAAHgIAIQgIAJgOAHQgNAHgQAFQgSAFgRAAQgbAAgUgKgAgbhPQgMAGgJAKQgHAKgEAOQgEANAAANIB/AAQAAgMgEgNQgEgNgHgLQgIgKgLgGQgMgHgQAAIgCAAQgQAAgLAGg");
	this.shape_208.setTransform(512.75,704.675);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(255,255,255,0.2)").s().p("AhHByQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQAQgIASAAIASACQAKACAIAGQAIAFADAHQADAHgFAIQgEAHgIABQgHACgJgFIgOgGIgPgCQgKAAgIADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_209.setTransform(494.3529,704.725);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.2)").s().p("ABIB0QgGgFAAgKIAAgQIgBAAQgNASgQAIQgQAJgTAAQgYAAgTgKQgTgKgNgRQgNgQgHgWQgHgVAAgYQAAgWAHgWQAHgVANgRQANgRATgKQATgKAYAAQAUAAAPAJQAPAIAOAPIABAAIAAgNQAAgKAGgEQAGgFAGAAQAFAAAHAFQAGAEAAAKIAADJQAAAKgGAFQgHAEgFAAQgGAAgGgEgAgchNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAAMgIQAMgIAIgNQAIgNADgPQADgPAAgPQAAgOgDgPQgDgPgIgNQgIgMgMgIQgMgIgSAAQgRAAgMAIg");
	this.shape_210.setTransform(471.425,704.675);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.2)").s().p("AA7ByQgFgFAAgKIAAgEQgRAPgPAFQgQAFgQAAQgOAAgOgFQgPgEgLgLQgMgLgIgRQgIgQAAgZIAAiBQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAB/QAAAPAFALQAFALAHAHQAIAHAKADQAJADAJAAQAKAAAJgDQAKgDAIgHQAIgHAEgLQAFgLAAgPIAAh/QAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAADFQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_211.setTransform(436.875,704.725);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgTgKgNgRQgNgQgIgWQgGgVAAgYQAAgWAGgWQAIgVANgRQANgRATgKQATgKAYAAQAYAAAUAKQATAKANARQAOARAGAVQAHAWAAAWQAAAYgHAVQgGAWgOAQQgNARgTAKQgUAKgYAAQgYAAgTgKgAgdhNQgMAIgIAMQgHANgEAPQgDAPAAAOQAAAPADAPQAEAPAHANQAIANAMAIQAMAIARAAQASAAALgIQANgIAIgNQAHgNAEgPQADgPAAgPQAAgOgDgPQgEgPgHgNQgIgMgNgIQgLgIgSAAQgRAAgMAIg");
	this.shape_212.setTransform(413.25,704.675);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.2)").s().p("AgvCpQgFgEAAgIIABgIIAEgNIAdhRIhCi9IgEgOIgBgIQAAgHAFgEQAGgFAGAAQAIAAAFAEQAFAEACAHIA0CfIABAAIA1ifQACgHAFgEQAEgEAIAAQAGAAAGAFQAFAEAAAHIgBAIIgEAOIhlElQgCAGgFAEQgEAEgIAAQgGAAgGgEg");
	this.shape_213.setTransform(391.675,710.025);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.2)").s().p("AA7ByQgFgFAAgKIAAh+QAAgQgFgLQgEgLgIgHQgIgGgKgEQgJgDgKAAQgJAAgJADQgKAEgIAGQgHAHgFALQgFALAAAQIAAB+QAAAKgFAFQgGAGgIAAQgJAAgGgGQgFgFAAgKIAAjFQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAAAJIABABQANgQARgHQARgIARAAQANAAAOAFQAPAFAMAKQALALAIARQAIARAAAYIAACBQAAAKgFAFQgGAGgIAAQgJAAgGgGg");
	this.shape_214.setTransform(359.075,704.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.2)").s().p("AgrBuQgUgKgNgRQgOgQgGgWQgGgVAAgYQAAgWAHgWQAIgWANgQQAOgRATgKQATgKAYAAQAYAAASAKQATAKAOAQQAMAQAHAVQAHAUAAAWQAAAJgFAFQgEAFgNAAIiRAAQAAAPAGANQAEANAJAKQAJAJAMAGQANAGAQAAQATAAANgFQAMgFAJgGIAOgLQAHgFAFAAQAFAAAFAEQAEAFAAAIQAAAHgIAIQgIAJgNAHQgOAHgRAFQgRAFgQAAQgcAAgUgKgAgchPQgMAGgHAKQgJAKgDAOQgEANgBANICAAAQAAgMgDgNQgEgNgIgLQgHgKgMgGQgMgHgQAAIgCAAQgQAAgMAGg");
	this.shape_215.setTransform(335.85,704.675);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.2)").s().p("AA7CmQgFgGAAgJIAAiAQAAgPgFgKQgEgMgIgGQgIgHgKgDQgJgDgKgBQgJABgJADQgKADgIAHQgHAGgFAMQgFAKAAAPIAACAQAAAJgFAGQgGAFgIAAQgJAAgGgFQgFgGAAgJIAAksQAAgKAFgFQAGgGAJAAQAIAAAGAGQAFAFAAAKIAABwIABAAQANgQARgHQARgIARABQANAAAOAEQAPAFAMALQALAKAIARQAIARAAAYIAACCQAAAJgFAGQgGAFgIAAQgJAAgGgFg");
	this.shape_216.setTransform(312.575,699.55);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.2)").s().p("ABMCbQgHgFgFgQIg/jlIgBAAIg/DlQgGAQgHAFQgGAEgMAAQgPAAgGgHQgFgIgCgKIgvj/IgCgMIAAgIQgBgHAFgFQAEgFAJAAQASAAADASIApD5IABAAIBIj8QADgJAEgDQAGgDAGAAQAHAAAFADQAFADACAJIBJD8IABAAIApj5QADgSASAAQAJAAAEAFQAEAFABAHIgBAIIgBAMIgxD/IgCAKIgEAIIgJAFIgMACQgLAAgIgEg");
	this.shape_217.setTransform(282.45,700.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_47},{t:this.shape_46,p:{x:423.175}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:641.85}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:771.875}},{t:this.shape_30},{t:this.shape_29,p:{x:813.325}},{t:this.shape_28,p:{x:830}},{t:this.shape_27,p:{x:849.725}},{t:this.shape_26,p:{x:863.025}},{t:this.shape_25,p:{x:874.275}},{t:this.shape_24,p:{x:885.525}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70,p:{x:423.175}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:641.85}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:771.875}},{t:this.shape_54},{t:this.shape_53,p:{x:813.325}},{t:this.shape_52,p:{x:830}},{t:this.shape_51,p:{x:849.725}},{t:this.shape_50,p:{x:863.025}},{t:this.shape_49,p:{x:874.275}},{t:this.shape_48,p:{x:885.525}}]},1).to({state:[{t:this.shape_50,p:{x:541.575}},{t:this.shape_49,p:{x:552.825}},{t:this.shape_48,p:{x:564.075}},{t:this.shape_76},{t:this.shape_52,p:{x:618.05}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_53,p:{x:708.475}},{t:this.shape_73},{t:this.shape_72}]},94).to({state:[{t:this.shape_50,p:{x:455.325}},{t:this.shape_49,p:{x:466.575}},{t:this.shape_48,p:{x:477.825}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_70,p:{x:676.725}},{t:this.shape_78},{t:this.shape_55,p:{x:734.525}},{t:this.shape_62,p:{x:758.4}},{t:this.shape_53,p:{x:775.975}},{t:this.shape_52,p:{x:792.65}},{t:this.shape_51,p:{x:812.375}},{t:this.shape_77}]},90).to({state:[{t:this.shape_26,p:{x:455.325}},{t:this.shape_25,p:{x:466.575}},{t:this.shape_24,p:{x:477.825}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_46,p:{x:676.725}},{t:this.shape_86},{t:this.shape_31,p:{x:734.525}},{t:this.shape_38,p:{x:758.4}},{t:this.shape_29,p:{x:775.975}},{t:this.shape_28,p:{x:792.65}},{t:this.shape_27,p:{x:812.375}},{t:this.shape_85}]},123).to({state:[]},1).to({state:[{t:this.shape_117},{t:this.shape_116,p:{x:401.275}},{t:this.shape_115,p:{x:426.825}},{t:this.shape_114},{t:this.shape_113,p:{x:476.225}},{t:this.shape_112,p:{x:492.525}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:563.775}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:640.975}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:723.125}},{t:this.shape_101},{t:this.shape_100,p:{x:759.575}},{t:this.shape_99,p:{x:782.5029}},{t:this.shape_98,p:{x:798}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:870.3}},{t:this.shape_94,p:{x:891.9029}},{t:this.shape_93}]},16).to({state:[{t:this.shape_142},{t:this.shape_141,p:{x:401.275}},{t:this.shape_140,p:{x:426.825}},{t:this.shape_139},{t:this.shape_138,p:{x:476.225}},{t:this.shape_137,p:{x:492.525}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134,p:{x:563.775}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{x:640.975}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:723.125}},{t:this.shape_126},{t:this.shape_125,p:{x:759.575}},{t:this.shape_124,p:{x:782.5029}},{t:this.shape_123,p:{x:798}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:870.3}},{t:this.shape_119,p:{x:891.9029}},{t:this.shape_118}]},1).to({state:[{t:this.shape_117},{t:this.shape_116,p:{x:401.275}},{t:this.shape_115,p:{x:426.825}},{t:this.shape_114},{t:this.shape_113,p:{x:476.225}},{t:this.shape_112,p:{x:492.525}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:563.775}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:640.975}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:723.125}},{t:this.shape_101},{t:this.shape_100,p:{x:759.575}},{t:this.shape_99,p:{x:782.5029}},{t:this.shape_98,p:{x:798}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:870.3}},{t:this.shape_94,p:{x:891.9029}},{t:this.shape_93}]},57).to({state:[]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_109,p:{x:436.875}},{t:this.shape_116,p:{x:471.425}},{t:this.shape_99,p:{x:494.3529}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_102,p:{x:607.325}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_112,p:{x:769.525}},{t:this.shape_105,p:{x:785.825}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_98,p:{x:851.55}},{t:this.shape_100,p:{x:870.775}},{t:this.shape_115,p:{x:896.325}},{t:this.shape_113,p:{x:930.775}},{t:this.shape_144},{t:this.shape_94,p:{x:975.6529}},{t:this.shape_95,p:{x:994.05}},{t:this.shape_143}]},66).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_134,p:{x:436.875}},{t:this.shape_141,p:{x:471.425}},{t:this.shape_124,p:{x:494.3529}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_127,p:{x:607.325}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_137,p:{x:769.525}},{t:this.shape_130,p:{x:785.825}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_123,p:{x:851.55}},{t:this.shape_125,p:{x:870.775}},{t:this.shape_140,p:{x:896.325}},{t:this.shape_138,p:{x:930.775}},{t:this.shape_165},{t:this.shape_119,p:{x:975.6529}},{t:this.shape_120,p:{x:994.05}},{t:this.shape_164}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_109,p:{x:436.875}},{t:this.shape_116,p:{x:471.425}},{t:this.shape_99,p:{x:494.3529}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_102,p:{x:607.325}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_112,p:{x:769.525}},{t:this.shape_105,p:{x:785.825}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_98,p:{x:851.55}},{t:this.shape_100,p:{x:870.775}},{t:this.shape_115,p:{x:896.325}},{t:this.shape_113,p:{x:930.775}},{t:this.shape_144},{t:this.shape_94,p:{x:975.6529}},{t:this.shape_95,p:{x:994.05}},{t:this.shape_143}]},61).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},1).to({state:[]},1).wait(16));

	// chat_bbl
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.2)").s().p("EgpoAHRQh4AAAAh4IAAqxQAAh4B4AAMBTRAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_218.setTransform(641.55,701.675);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.498)").s().p("EgpoAHRQh4AAAAh4IAAqxQAAh4B4AAMBTRAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_219.setTransform(641.55,701.675);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("EgpoAHRQh4AAAAh4IAAqxQAAh4B4AAMBTRAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_220.setTransform(641.55,701.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("A2VHRQh4AAAAh4IAAqxQAAh4B4AAMAsrAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_221.setTransform(641.55,701.675);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("EghHAHRQh4AAAAh4IAAqxQAAh4B4AAMBCPAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_222.setTransform(641.55,701.675);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.498)").s().p("EghHAHRQh4AAAAh4IAAqxQAAh4B4AAMBCPAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_223.setTransform(641.55,701.675);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.498)").s().p("EgwgAHRQh4AAAAh4IAAqxQAAh4B4AAMBhBAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_224.setTransform(641.55,701.675);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("EgwgAHRQh4AAAAh4IAAqxQAAh4B4AAMBhBAAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_225.setTransform(641.55,701.675);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.498)").s().p("Eg/+AHRQh4AAAAh4IAAqxQAAh4B4AAMB/9AAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_226.setTransform(641.55,701.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("Eg/+AHRQh4AAAAh4IAAqxQAAh4B4AAMB/9AAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_227.setTransform(641.55,701.675);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.2)").s().p("Eg/+AHRQh4AAAAh4IAAqxQAAh4B4AAMB/9AAAQB4AAAAB4IAAKxQAAB4h4AAg");
	this.shape_228.setTransform(641.55,701.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_218}]},3).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},94).to({state:[{t:this.shape_222}]},90).to({state:[{t:this.shape_223}]},123).to({state:[]},1).to({state:[{t:this.shape_224}]},16).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_224}]},57).to({state:[]},1).to({state:[{t:this.shape_226}]},66).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226}]},61).to({state:[{t:this.shape_228}]},1).to({state:[]},1).wait(16));

	// flash_glow_fx
	this.instance = new lib.flash_glow_fx("synched",0,false);
	this.instance.setTransform(646.9,135,0.6496,0.6496,171.2852,0,0,0.1,-0.1);

	this.instance_1 = new lib.flash_glow_fx("synched",0,false);
	this.instance_1.setTransform(729.45,190.05,0.8851,0.8851,-158.7171);

	this.instance_2 = new lib.flash_glow_fx("synched",0,false);
	this.instance_2.setTransform(570.55,188.15,0.8851,0.8851,171.2834,0,0,0.1,-0.1);

	this.instance_3 = new lib.flash_glow_fx("synched",0,false);
	this.instance_3.setTransform(644.8,378.4,1.3163,1.3163,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},407).to({state:[]},11).wait(116));

	// hand
	this.instance_4 = new lib.Hand();
	this.instance_4.setTransform(736.3,251.95,2.5617,2.5617,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0.25;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:235.5,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:201.95},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:736.2,y:202.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:736.3,y:201.95},0).to({alpha:0.1992},2).to({_off:true},1).wait(4).to({_off:false,x:643.3,y:251.95,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:235.5},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:201.95,alpha:1},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:643.2,y:202.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:643.3,y:201.95},0).to({alpha:0.1992},2).to({_off:true},1).wait(41).to({_off:false,x:640.3,y:641.95,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:625.5,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:591.95},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:640.2,y:592.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:640.3,y:591.95},0).to({alpha:0.1992},2).to({_off:true},1).wait(83).to({_off:false,x:556.3,y:251.95,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,x:556.25,y:235.5,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:556.3,y:201.95},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:556.2,y:202.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:556.3,y:201.95},0).wait(9).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:556.2,y:202.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:556.3,y:201.95},0).wait(9).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:556.2,y:202.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:556.3,y:201.95},0).to({alpha:0.1992},2).to({_off:true},1).wait(4).to({_off:false,x:640.3,y:641.95,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:625.5,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:591.95},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:640.2,y:592.05},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:640.3,y:591.95},0).to({alpha:0.1992},2).to({_off:true},1).wait(129).to({_off:false,x:492.15,y:627.85,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:611.4,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:577.85},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:492.05,y:577.95},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:492.15,y:577.85},0).to({alpha:0.1992},2).to({_off:true},1).wait(116).to({_off:false,x:789.25,y:633.35,alpha:0.25},0).wait(1).to({regY:0.2,scaleX:2.5616,scaleY:2.5616,y:616.9,alpha:1},0).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,y:583.35},2).wait(1).to({regY:0.2,scaleX:2.0598,scaleY:2.0599,x:789.15,y:583.45},0).wait(2).to({regY:0.1,scaleX:2.5617,scaleY:2.5617,x:789.25,y:583.35},0).to({alpha:0.25},2).to({_off:true},1).wait(2));

	// paintbrush_red
	this.instance_5 = new lib.paintbrush_big("synched",0,false);
	this.instance_5.setTransform(663.9,496.15,0.4187,0.4187,0,0,0,21.8,26.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.paintbrush_blue("synched",1,false);
	this.instance_6.setTransform(569.3,263.35,0.6179,0.6179,0,0,0,21.6,26.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.paintbrush_red("synched",1,false);
	this.instance_7.setTransform(569.3,263.35,0.6179,0.6179,0,0,0,21.6,26.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({_off:false},0).to({regX:21.7,regY:26.4,scaleX:0.4983,scaleY:0.4983,rotation:-95.9971,x:671.55,y:406.55},2).wait(1).to({regX:21.6,scaleX:0.5382,scaleY:0.5382,rotation:-159.0017,x:674,y:275.95},0).to({regY:26.2,scaleX:0.6179,scaleY:0.6179,rotation:-14.9986,x:556.65,y:257.95},2).to({_off:true},1).wait(121).to({_off:false,regX:21.8,scaleX:0.4187,scaleY:0.4187,rotation:0,x:663.9,y:496.15},0).to({regX:21.7,regY:26.4,scaleX:0.4983,scaleY:0.4983,rotation:-95.9971,x:671.55,y:406.55},2).wait(1).to({regX:21.6,scaleX:0.5382,scaleY:0.5382,rotation:-159.0017,x:674,y:275.95},0).to({regY:26.2,scaleX:0.6179,scaleY:0.6179,rotation:-14.9986,x:556.65,y:257.95},2).to({_off:true},1).wait(262));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145).to({_off:false},0).wait(33).to({regX:152.7,regY:-63.1,scaleX:0.6178,scaleY:0.6178,rotation:-6.5532,x:662.3,y:198.05,mode:"single",startPosition:34},0).to({regX:152.6,rotation:-127.4991,x:655.6,y:178.4},2).to({rotation:-194.9976,x:656.6,y:173.9,alpha:0.1016},2).to({_off:true},1).wait(351));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(272).to({_off:false},0).wait(33).to({regX:152.7,regY:-63.1,scaleX:0.6178,scaleY:0.6178,rotation:-6.5532,x:662.3,y:198.05,mode:"single",startPosition:34},0).to({regX:152.6,rotation:-127.4991,x:655.6,y:178.4},2).to({rotation:-194.9976,x:656.6,y:173.9,alpha:0.1016},2).to({_off:true},1).wait(224));

	// mix_color_button
	this.instance_8 = new lib.mix_color_button();
	this.instance_8.setTransform(640.75,560.95,0.6614,0.6614,0,0,0,0,0.1);
	this.instance_8.alpha = 0.1016;
	this.instance_8._off = true;

	this.instance_9 = new lib.mix_color_nobrush();
	this.instance_9.setTransform(640.75,560.95,0.6614,0.6614,0,0,0,0,0.1);

	this.instance_10 = new lib.mix_color_brushin("synched",0,false);
	this.instance_10.setTransform(640.75,560.95,0.6614,0.6614,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},97).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},35).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},41).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8}]},80).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},41).to({state:[{t:this.instance_8}]},4).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({_off:false},0).to({regX:0.1,scaleX:0.75,scaleY:0.75,x:640.8,y:560.9,alpha:1},3).to({regX:0,scaleX:0.6614,scaleY:0.6614,x:640.75,y:560.95},2).wait(35).to({scaleX:0.6,scaleY:0.6},0).to({_off:true,scaleX:0.6614,scaleY:0.6614},2).wait(45).to({_off:false},0).wait(80).to({scaleX:0.6,scaleY:0.6},0).to({_off:true,scaleX:0.6614,scaleY:0.6614},2).wait(45).to({_off:false},0).wait(223));

	// mix_color_button_shadow_brush
	this.instance_11 = new lib.mix_color_button_shadow_brush();
	this.instance_11.setTransform(644.65,564.05,0.5952,0.5952);
	this.instance_11.alpha = 0.1016;
	this.instance_11._off = true;

	this.instance_12 = new lib.mix_color_button_shadow_circle();
	this.instance_12.setTransform(644.65,564.05,0.5952,0.5952);
	this.instance_12.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},97).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_11}]},12).to({state:[]},1).to({state:[{t:this.instance_11}]},17).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12,p:{alpha:0.1016}}]},2).to({state:[]},1).to({state:[{t:this.instance_11}]},44).to({state:[{t:this.instance_11}]},80).to({state:[{t:this.instance_12,p:{alpha:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_11}]},44).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.68,scaleY:0.68,y:564,alpha:1},3).to({regX:0,regY:0,scaleX:0.5952,scaleY:0.5952,y:564.05},2).wait(12).to({_off:true},1).wait(17).to({_off:false},0).wait(5).to({regX:0.1,scaleX:0.54,scaleY:0.54},0).to({_off:true,regX:0,scaleX:0.5952,scaleY:0.5952,alpha:0.1016},2).wait(45).to({_off:false,alpha:1},0).wait(80).to({regX:0.1,scaleX:0.54,scaleY:0.54},0).to({_off:true,regX:0,scaleX:0.5952,scaleY:0.5952,alpha:0},2).wait(45).to({_off:false,alpha:1},0).wait(223));

	// mix_color_button_outline
	this.instance_13 = new lib.mix_color_button_outline();
	this.instance_13.setTransform(640.7,560.95,0.65,0.65,0,0,0,0.1,0.2);
	this.instance_13.alpha = 0.1016;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114).to({_off:false},0).to({scaleX:0.7,scaleY:0.7,x:640.75,alpha:1},3).to({scaleX:0.65,scaleY:0.65,x:640.7},3).to({scaleX:0.7,scaleY:0.7,x:640.75},3).to({scaleX:0.65,scaleY:0.65,x:640.7},3).wait(3).to({alpha:0.1016},3).to({_off:true},1).wait(401));

	// refreshColorBtn
	this.instance_14 = new lib.refreshColorBtn();
	this.instance_14.setTransform(489.3,565.1,0.9921,0.9921,0,0,0,0,0.3);
	this.instance_14.alpha = 0.1016;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(317).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},3).to({scaleX:0.9921,scaleY:0.9921},2).wait(80).to({scaleX:0.85,scaleY:0.85},0).to({scaleX:0.9921,scaleY:0.9921},2).wait(130));

	// yellowCheckBtn
	this.instance_15 = new lib.yellowCheckBtn();
	this.instance_15.setTransform(793.5,564.9,0.9921,0.9921,0,0,0,0.1,0.1);
	this.instance_15.alpha = 0.1016;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(440).to({_off:false},0).to({alpha:1},3).wait(84).to({scaleX:0.85,scaleY:0.85},0).to({scaleX:0.9921,scaleY:0.9921},2).wait(5));

	// paint_tube_red_ani
	this.instance_16 = new lib.paint_tube_red_ani("single",0);
	this.instance_16.setTransform(535.9,148.7,0.5946,0.5946,-19.7904,0,0,-0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(60).to({startPosition:0},0).wait(167).to({startPosition:0},0).to({regX:0,regY:0,scaleX:0.5494,scaleY:0.5494,rotation:-19.7827,x:538.4,y:155.65,startPosition:1},2).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,x:535.9,y:148.7},2).wait(7).to({startPosition:1},0).to({regX:0,regY:0,scaleX:0.5494,scaleY:0.5494,rotation:-19.7827,x:538.4,y:155.65,startPosition:2},2).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,x:535.9,y:148.7},2).wait(7).to({startPosition:2},0).to({regX:0,regY:0,scaleX:0.5494,scaleY:0.5494,rotation:-19.7827,x:538.4,y:155.65,startPosition:3},2).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,x:535.9,y:148.7},2).wait(157).to({startPosition:0},0).wait(124));

	// paint_tube_blue_ani
	this.instance_17 = new lib.paint_tube_blue_ani("single",0);
	this.instance_17.setTransform(643.65,133.75,0.5952,0.5952,0,0,0,0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(60).to({startPosition:0},0).wait(25).to({startPosition:0},0).to({regX:0,regY:0,scaleX:0.55,scaleY:0.55,x:643.55,y:140.85,startPosition:1},2).to({regX:0.2,regY:-0.2,scaleX:0.5952,scaleY:0.5952,x:643.65,y:133.75},2).wait(321).to({startPosition:0},0).wait(124));

	// paint_tube_yellow_ani
	this.instance_18 = new lib.paint_tube_yellow_ani("single",0);
	this.instance_18.setTransform(751.35,149,0.5946,0.5946,19.7904,0,0,0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({startPosition:0},0).wait(12).to({startPosition:0},0).to({regX:0,regY:0,scaleX:0.5494,scaleY:0.5494,rotation:19.7827,x:748.8,y:155.55,startPosition:1},2).to({regX:0.4,regY:-0.4,scaleX:0.5946,scaleY:0.5946,rotation:19.7904,x:751.35,y:149},2).wait(334).to({startPosition:0},0).wait(124));

	// paint_tube_outline
	this.instance_19 = new lib.paint_tube_outline("single",0);
	this.instance_19.setTransform(535.9,148.7,0.5946,0.5946,-19.7904,0,0,-0.1,-0.8);
	this.instance_19.alpha = 0.1016;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(37).to({_off:false},0).to({regX:0.1,regY:-0.6,scaleX:0.6293,scaleY:0.6293,rotation:-19.782,y:148.75,alpha:1},3).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,y:148.7},3).to({regX:0.1,regY:-0.6,scaleX:0.6293,scaleY:0.6293,rotation:-19.782,y:148.75},3).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,y:148.7},3).to({regX:0.1,regY:-0.6,scaleX:0.6293,scaleY:0.6293,rotation:-19.782,y:148.75},3).to({regX:-0.1,regY:-0.8,scaleX:0.5946,scaleY:0.5946,rotation:-19.7904,y:148.7},3).wait(3).to({startPosition:0},0).to({alpha:0.1016},3).to({_off:true},1).wait(472));

	// paint_tube_outline
	this.instance_20 = new lib.paint_tube_outline("single",0);
	this.instance_20.setTransform(643.65,133.75,0.5952,0.5952,0,0,0,0.2,-0.2);
	this.instance_20.alpha = 0.1016;
	this.instance_20._off = true;

	this.instance_21 = new lib.circle_outline();
	this.instance_21.setTransform(489.3,565.1,0.9921,0.9921,0,0,0,0,0.3);
	this.instance_21.alpha = 0.1016;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(37).to({_off:false},0).to({regX:0.3,scaleX:0.63,scaleY:0.63,x:643.7,y:133.7,alpha:1},3).to({regX:0.2,scaleX:0.5952,scaleY:0.5952,x:643.65,y:133.75},3).to({regX:0.3,scaleX:0.63,scaleY:0.63,x:643.7,y:133.7},3).to({regX:0.2,scaleX:0.5952,scaleY:0.5952,x:643.65,y:133.75},3).to({regX:0.3,scaleX:0.63,scaleY:0.63,x:643.7,y:133.7},3).to({regX:0.2,scaleX:0.5952,scaleY:0.5952,x:643.65,y:133.75},3).wait(3).to({startPosition:0},0).to({alpha:0.1016},3).to({_off:true},1).wait(472));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(333).to({_off:false},0).to({regX:0.1,scaleX:1.1,scaleY:1.1,x:489.35,alpha:1},3).wait(4).to({regY:0.4,scaleX:1,scaleY:1,y:565.15},3).to({regY:0.3,scaleX:1.1,scaleY:1.1,y:565.1},3).to({regY:0.4,scaleX:1,scaleY:1,y:565.15},3).wait(13).to({regY:0.3,scaleX:1.1,scaleY:1.1,y:565.1},0).to({regY:0.4,scaleX:1,scaleY:1,y:565.15},3).to({regY:0.3,scaleX:1.1,scaleY:1.1,y:565.1},3).to({regY:0.4,scaleX:1,scaleY:1,y:565.15},3).wait(7).to({alpha:0.1016},2).to({_off:true},1).wait(153));

	// paint_tube_outline
	this.instance_22 = new lib.paint_tube_outline("single",0);
	this.instance_22.setTransform(751.35,149,0.5946,0.5946,19.7904,0,0,0.4,-0.4);
	this.instance_22.alpha = 0.1016;
	this.instance_22._off = true;

	this.instance_23 = new lib.circle_outline();
	this.instance_23.setTransform(793.5,564.9,0.9921,0.9921,0,0,0,0.1,0.1);
	this.instance_23.alpha = 0.1016;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(37).to({_off:false},0).to({scaleX:0.6293,scaleY:0.6293,rotation:19.7833,x:751.4,y:148.95,alpha:1},3).to({scaleX:0.5946,scaleY:0.5946,rotation:19.7904,x:751.35,y:149},3).to({scaleX:0.6293,scaleY:0.6293,rotation:19.7833,x:751.4,y:148.95},3).to({scaleX:0.5946,scaleY:0.5946,rotation:19.7904,x:751.35,y:149},3).to({scaleX:0.6293,scaleY:0.6293,rotation:19.7833,x:751.4,y:148.95},3).to({scaleX:0.5946,scaleY:0.5946,rotation:19.7904,x:751.35,y:149},3).wait(3).to({startPosition:0},0).to({alpha:0.1016},3).to({_off:true},1).wait(472));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(480).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:564.85,alpha:1},3).wait(10).to({scaleX:1,scaleY:1},3).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).to({scaleX:1.1,scaleY:1.1},3).to({scaleX:1,scaleY:1},3).wait(8).to({alpha:0.1016},2).to({_off:true},1).wait(15));

	// swirl_yellow_green
	this.instance_24 = new lib.swirl_yellowgreen("single",3);
	this.instance_24.setTransform(636.25,319.95,1.2887,0.7357,0,-32.4508,-16.4549);
	this.instance_24.alpha = 0.1016;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(147).to({_off:false},0).to({scaleX:1.2603,scaleY:0.8533,skewX:0.6148,skewY:9.258,x:669.4,y:319.6,alpha:0.5},5).to({regX:0.1,regY:-0.1,scaleX:1.1608,scaleY:1.0636,skewX:47.5536,skewY:46.5169,x:670.2,y:342.9},5).to({regX:0.2,scaleX:1.2401,scaleY:1.7497,skewX:100.4005,skewY:88.5469,x:636.4,y:368.95},6).to({scaleX:1.2064,scaleY:1.5435,skewX:134.3107,skewY:124.3877,x:631.45,y:361.45},5).to({regX:0.1,regY:-0.2,scaleX:1.2225,scaleY:1.4392,skewX:164.7036,skewY:163.546,x:613.1,y:361,alpha:0.1016},4).to({_off:true},1).wait(103).to({_off:false,regX:0,regY:0,scaleX:1.2887,scaleY:0.7357,skewX:327.5492,skewY:343.5451,x:636.25,y:299.95},0).to({scaleX:1.2603,scaleY:0.8533,skewX:360.6148,skewY:369.258,x:659.4,y:309.6,alpha:0.5},5).to({regX:0.1,regY:-0.1,scaleX:1.1608,scaleY:1.0636,skewX:407.5536,skewY:406.5169,x:680.2,y:342.9},5).to({regX:0.2,scaleX:1.2401,scaleY:1.7497,skewX:460.4005,skewY:448.5469,x:636.4,y:368.95},6).to({scaleX:1.2064,scaleY:1.5435,skewX:494.3107,skewY:484.3877,x:631.45,y:361.45},5).to({regX:0.1,regY:-0.2,scaleX:1.2225,scaleY:1.4392,skewX:524.7036,skewY:523.546,x:613.1,y:361,alpha:0.1016},4).to({_off:true},1).wait(232));

	// swirl_blue_green
	this.instance_25 = new lib.swirl_bluegreen("single",2);
	this.instance_25.setTransform(662.25,355.45,1.1596,1.5903,0,71.806,39.7666,0.1,0.1);
	this.instance_25.alpha = 0.1016;
	this.instance_25._off = true;

	this.instance_26 = new lib.swirl_redorange("single",2);
	this.instance_26.setTransform(662.25,335.45,1.1596,1.5903,0,71.806,39.7666,0.1,0.1);
	this.instance_26.alpha = 0.1016;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(147).to({_off:false},0).to({scaleX:1.2016,scaleY:1.9887,skewX:98.0555,skewY:94.5901,x:657.55,y:345.95,alpha:0.5},5).to({regX:-0.1,scaleX:1.4812,scaleY:1.8392,skewX:155.3628,skewY:165.8512,x:631.4,y:340.35},5).to({regX:-0.3,scaleX:1.4834,scaleY:1.9223,skewX:253.9724,skewY:245.9682,x:653.9,y:347.25},6).to({regX:-0.2,scaleX:1.441,scaleY:1.7295,skewX:299.8204,skewY:296.0346,x:661,y:347.3},5).to({regX:-0.1,regY:0.2,scaleX:1.3396,scaleY:1.5979,skewX:342.6806,skewY:348.9326,x:676.1,y:328.15,alpha:0.1016},4).to({_off:true},1).wait(361));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(276).to({_off:false},0).to({scaleX:1.2016,scaleY:1.9887,skewX:98.0555,skewY:94.5901,x:647.55,y:335.95,alpha:0.5},5).to({regX:-0.1,scaleX:1.4812,scaleY:1.8392,skewX:155.3628,skewY:165.8512,x:641.4,y:340.35},5).to({regX:-0.3,scaleX:1.4834,scaleY:1.9223,skewX:253.9724,skewY:245.9682,x:653.9,y:347.25},6).to({regX:-0.2,scaleX:1.441,scaleY:1.7295,skewX:299.8204,skewY:296.0346,x:661,y:347.3},5).to({regX:-0.1,regY:0.2,scaleX:1.3396,scaleY:1.5979,skewX:342.6806,skewY:348.9326,x:676.1,y:328.15,alpha:0.1016},4).to({_off:true},1).wait(232));

	// swirl_yellow_green
	this.instance_27 = new lib.swirl_yellowgreen("single",3);
	this.instance_27.setTransform(633,338,1.096,1.4487,0,-143.9707,-154.4745,0,-0.3);
	this.instance_27.alpha = 0.1016;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(147).to({_off:false},0).to({regX:-0.1,scaleX:1.0666,scaleY:1.915,skewX:-117.8204,skewY:-134.4215,x:639.75,y:334.8,alpha:0.5},5).to({regX:-0.2,regY:-0.1,scaleX:1.0563,scaleY:1.924,skewX:-87.2379,skewY:-81.3707,x:639.1,y:333.6},5).to({regX:-0.1,regY:0,scaleX:1.7172,scaleY:1.9851,rotation:-12.251,skewX:0,skewY:0,x:655.05,y:342.45},6).to({regY:-0.1,scaleX:1.5612,scaleY:1.8862,rotation:0,skewX:23.7429,skewY:15.594,x:656.85,y:332.7},5).to({scaleX:1.4052,scaleY:1.7105,skewX:62.388,skewY:41.6648,x:667.1,y:323.1,alpha:0.1016},4).to({_off:true},1).wait(103).to({_off:false,regX:0,regY:-0.3,scaleX:1.096,scaleY:1.4487,skewX:216.0293,skewY:205.5255,x:633,y:318},0).to({regX:-0.1,scaleX:1.0666,scaleY:1.915,skewX:242.1796,skewY:225.5785,x:629.75,y:324.8,alpha:0.5},5).to({regX:-0.2,regY:-0.1,scaleX:1.0563,scaleY:1.924,skewX:272.7621,skewY:278.6293,x:649.1,y:333.6},5).to({regX:-0.1,regY:0,scaleX:1.7172,scaleY:1.9851,rotation:-12.251,skewX:360,skewY:360,x:655.05,y:342.45},6).to({regY:-0.1,scaleX:1.5612,scaleY:1.8862,rotation:0,skewX:383.7429,skewY:375.594,x:656.85,y:332.7},5).to({scaleX:1.4052,scaleY:1.7105,skewX:422.388,skewY:401.6648,x:667.1,y:323.1,alpha:0.1016},4).to({_off:true},1).wait(232));

	// paint_splat_blue_ani
	this.instance_28 = new lib.paint_drop_blue();
	this.instance_28.setTransform(643.95,216.9,0.4092,0.4092,0,0,0,0.1,0);

	this.instance_29 = new lib.paint_splat_blue("single",0);
	this.instance_29.setTransform(628.95,301.95,0.6499,0.6499);
	this.instance_29._off = true;

	this.instance_30 = new lib.paint_drop_red();
	this.instance_30.setTransform(564.7,226.3,0.4092,0.4092,-19.4822,0,0,0.1,0.1);

	this.instance_31 = new lib.paint_splat_red("single",0);
	this.instance_31.setTransform(630.85,329.75,0.6585,0.6415,0,5.494,4.6424,0.1,0);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28,p:{regX:0.1,scaleX:0.4092,scaleY:0.4092,x:643.95,y:216.9}}]},87).to({state:[{t:this.instance_28,p:{regX:0,scaleX:0.4811,scaleY:0.5392,x:642.5,y:251.15}}]},1).to({state:[{t:this.instance_28,p:{regX:0,scaleX:0.8943,scaleY:0.5095,x:642.3,y:272.35}}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},53).to({state:[{t:this.instance_29}]},4).to({state:[]},1).to({state:[{t:this.instance_30,p:{scaleX:0.4092,scaleY:0.4092,rotation:-19.4822,x:564.7,y:226.3,regX:0.1,regY:0.1}}]},101).to({state:[{t:this.instance_30,p:{scaleX:0.4811,scaleY:0.5392,rotation:-34.4807,x:581.55,y:258.85,regX:0.1,regY:0.1}}]},1).to({state:[{t:this.instance_30,p:{scaleX:0.8942,scaleY:0.5095,rotation:-34.483,x:622.05,y:298.1,regX:0,regY:0}}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},18).to({state:[{t:this.instance_31}]},4).to({state:[]},1).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(90).to({_off:false},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:628.2,y:306.2},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,x:628.95,y:301.95},0).wait(53).to({startPosition:0},0).to({alpha:0.1016},4).to({_off:true},1).wait(384));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(254).to({_off:false},0).wait(1).to({regX:0,scaleX:0.7092,scaleY:0.6909,skewX:5.4955,skewY:4.6438,x:630.95,y:332.8},0).wait(1).to({regX:0.1,scaleX:0.6585,scaleY:0.6415,skewX:5.494,skewY:4.6424,x:630.85,y:329.75},0).wait(18).to({startPosition:0},0).to({alpha:0.1016},4).to({_off:true},1).wait(255));

	// paint_splat_yellow_ani
	this.instance_32 = new lib.paint_drop_yellow();
	this.instance_32.setTransform(721.85,227.1,0.4092,0.4092,22.4807,0,0,0.1,0.1);

	this.instance_33 = new lib.paint_splat_yellow("single",0);
	this.instance_33.setTransform(680.7,303.25,0.6499,0.6499);
	this.instance_33._off = true;

	this.instance_34 = new lib.paint_drop_red();
	this.instance_34.setTransform(564.7,226.3,0.4092,0.4092,-19.4822,0,0,0.1,0.1);

	this.instance_35 = new lib.paint_splat_red("single",0);
	this.instance_35.setTransform(598.65,337.9,0.6833,0.757,0,-5.6605,162.8203);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32,p:{regX:0.1,regY:0.1,scaleX:0.4092,scaleY:0.4092,x:721.85,y:227.1,rotation:22.4807}}]},74).to({state:[{t:this.instance_32,p:{regX:0,regY:0,scaleX:0.4811,scaleY:0.5392,x:707.8,y:255.65,rotation:22.4807}}]},1).to({state:[{t:this.instance_32,p:{regX:0,regY:0,scaleX:0.8943,scaleY:0.5095,x:696.85,y:277.25,rotation:22.4821}}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},66).to({state:[{t:this.instance_33}]},4).to({state:[]},1).to({state:[{t:this.instance_34,p:{regX:0.1,regY:0.1,scaleX:0.4092,scaleY:0.4092,rotation:-19.4822,x:564.7,y:226.3}}]},90).to({state:[{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.4811,scaleY:0.5392,rotation:-19.4841,x:575.45,y:257.85}}]},1).to({state:[{t:this.instance_34,p:{regX:0,regY:0,scaleX:0.8943,scaleY:0.5095,rotation:-19.4823,x:582.05,y:288.1}}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},29).to({state:[{t:this.instance_35}]},4).to({state:[]},1).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(77).to({_off:false},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:679.45,y:307.5},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,x:680.7,y:303.25},0).wait(66).to({startPosition:0},0).to({alpha:0.1016},4).to({_off:true},1).wait(384));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(243).to({_off:false},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.7358,scaleY:0.8153,skewX:-5.6608,skewY:162.8201,x:600.7,y:343.7},0).wait(1).to({regX:0,regY:0,scaleX:0.6833,scaleY:0.757,skewX:-5.6605,skewY:162.8203,x:598.65,y:337.9},0).wait(29).to({startPosition:0},0).to({alpha:0.1016},4).to({_off:true},1).wait(255));

	// paint_splat_red_ani
	this.instance_36 = new lib.paint_drop_red();
	this.instance_36.setTransform(565.7,226.3,0.4092,0.4092,-19.4822,0,0,0.1,0.1);

	this.instance_37 = new lib.paint_splat_red("single",0);
	this.instance_37.setTransform(590.9,308.2,0.6499,0.6499,14.9984);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36,p:{regX:0.1,regY:0.1,scaleX:0.4092,scaleY:0.4092,rotation:-19.4822,x:565.7,y:226.3}}]},229).to({state:[{t:this.instance_36,p:{regX:0,regY:0,scaleX:0.4811,scaleY:0.5392,rotation:-19.4841,x:575.45,y:257.85}}]},1).to({state:[{t:this.instance_36,p:{regX:0,regY:0,scaleX:0.8943,scaleY:0.5095,rotation:-19.4823,x:582.05,y:278.1}}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},40).to({state:[{t:this.instance_37}]},4).to({state:[]},1).wait(255));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(232).to({_off:false},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:14.9978,x:593.2,y:312.95},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,rotation:14.9984,x:590.9,y:308.2},0).wait(40).to({startPosition:0},0).to({alpha:0.1016},4).to({_off:true},1).wait(255));

	// color_yellow
	this.instance_38 = new lib.color_yellow();
	this.instance_38.setTransform(693.35,308.2,1.0611,0.9428,0,0,0,0,2.3);
	this.instance_38.alpha = 0.1016;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(145).to({_off:false},0).to({alpha:1},4).to({regY:2.2,scaleX:1.8617,scaleY:1.936,x:650.6,y:351},10).to({scaleX:2.0523,scaleY:2.1725,x:640.4,y:361.4,alpha:0.1016},5).to({_off:true},1).wait(369));

	// color_blue
	this.instance_39 = new lib.color_blue();
	this.instance_39.setTransform(629.1,312.55,0.9122,0.9656,0,0,0,-0.1,2.3);
	this.instance_39.alpha = 0.1016;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(145).to({_off:false},0).to({alpha:1},4).to({regY:2.2,scaleX:1.833,scaleY:1.9403,x:638.8,y:351.8},10).to({scaleX:2.0523,scaleY:2.1725,x:641.25,y:361.4,alpha:0.1016},5).to({_off:true},1).wait(369));

	// color_red
	this.instance_40 = new lib.color_red();
	this.instance_40.setTransform(629.25,311.6,0.9122,0.9656,0,0,0,0.1,1.6);
	this.instance_40.alpha = 0.1016;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(274).to({_off:false},0).to({alpha:0.25},4).to({scaleX:1.833,scaleY:1.9403,x:639.1,y:350.05,alpha:1},10).to({scaleX:2.0523,scaleY:2.1725,x:641.5,y:359.45,alpha:0.1016},5).to({_off:true},1).wait(240));

	// color_green
	this.instance_41 = new lib.color_green();
	this.instance_41.setTransform(694.35,308.15,1.0611,0.9428,0,0,0,0.1,2.2);
	this.instance_41.alpha = 0.1016;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(274).to({_off:false},0).to({alpha:0.25},4).to({scaleX:1.8617,scaleY:1.936,x:652.4,y:351.1,alpha:1},10).to({scaleX:2.0523,scaleY:2.1725,x:642.35,y:361.5,alpha:0.1016},5).to({_off:true},1).wait(240));

	// color_brown
	this.instance_42 = new lib.color_brown();
	this.instance_42.setTransform(641.55,357.45,0.6028,0.6382,0,0,0,0,0.1);
	this.instance_42.alpha = 0.1016;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(281).to({_off:false},0).to({alpha:1},16).wait(111).to({alpha:0.1016},4).to({_off:true},1).wait(121));

	// color_green
	this.instance_43 = new lib.color_green();
	this.instance_43.setTransform(659.7,341.7,1.2037,1.2743,0,0,0,0.1,2.2);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(152).to({_off:false},0).to({scaleX:2.0523,scaleY:2.1725,x:642.35,y:361.5},23).wait(106).to({scaleX:2.049,scaleY:2.2729,x:642.4,y:361.45},7).to({scaleX:2.0468,scaleY:2.3447,x:642.45,y:361.5,alpha:0.1016},5).to({_off:true},1).wait(240));

	// MIX_empty
	this.instance_44 = new lib.MIX_empty();
	this.instance_44.setTransform(643.1,348.15,1.9538,1.9538);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(76).to({alpha:0.1016},3).to({_off:true},1).wait(331).to({_off:false},0).to({alpha:1},3).wait(120));

	// paint_tray_LG
	this.instance_45 = new lib.paint_tray_LG();
	this.instance_45.setTransform(641.4,393.35,0.6614,0.6614,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(534));

	// closeBtn
	this.close = new lib.CloseBtn_alt();
	this.close.name = "close";
	this.close.setTransform(1062.3,74.15,2,2,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(534));

	// demo_helpBG
	this.instance_46 = new lib.demo_helpBG();
	this.instance_46.setTransform(641.55,390.6,0.9244,0.9244);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(534));

	// bg_dark_tint
	this.instance_47 = new lib.bg_dark_tint();
	this.instance_47.setTransform(641.7,399.95,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(534));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.3,-211.2,2289.5,1222.1);


// stage content:
(lib.mphelper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// helper_tween_ani
	this.helper_tween = new lib.helper_tween();
	this.helper_tween.name = "helper_tween";
	this.helper_tween.setTransform(640.1,607.8,1,1,0,0,0,640.1,607.8);

	this.timeline.addTween(cjs.Tween.get(this.helper_tween).wait(1));

	// helper_mc
	this.helper_ani = new lib.helper_ani();
	this.helper_ani.name = "helper_ani";
	this.helper_ani.setTransform(640.1,607.8,1,1,0,0,0,640.1,607.8);

	this.timeline.addTween(cjs.Tween.get(this.helper_ani).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(136.6,188.8,1649.6000000000001,822.0999999999999);
// library properties:
lib.properties = {
	id: 'A99367D348C347699C65CD0733CA3CDE',
	width: 1280,
	height: 800,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/adb_bubble.mp3", id:"adb_bubble"},
		{src:"sounds/adb_fingerpaint.mp3", id:"adb_fingerpaint"},
		{src:"sounds/adb_splash.mp3", id:"adb_splash"},
		{src:"sounds/adb_squish.mp3", id:"adb_squish"},
		{src:"sounds/button_click.mp3", id:"button_click"},
		{src:"sounds/magicGliss_short.mp3", id:"magicGliss_short"},
		{src:"sounds/sf_mp_dalehelp1.mp3", id:"sf_mp_dalehelp1"},
		{src:"sounds/sf_mp_dalehelp2.mp3", id:"sf_mp_dalehelp2"},
		{src:"sounds/sf_mp_dalehelp3.mp3", id:"sf_mp_dalehelp3"},
		{src:"sounds/sf_mp_dalehelp4.mp3", id:"sf_mp_dalehelp4"},
		{src:"sounds/sf_mp_dalehelp5.mp3", id:"sf_mp_dalehelp5"},
		{src:"sounds/sf_singleSwish.mp3", id:"sf_singleSwish"},
		{src:"sounds/text_box.mp3", id:"text_box"},
		{src:"sounds/tube_highlight2.mp3", id:"tube_highlight2"},
		{src:"sounds/tube_highlight3.mp3", id:"tube_highlight3"}
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
an.compositions['A99367D348C347699C65CD0733CA3CDE'] = {
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