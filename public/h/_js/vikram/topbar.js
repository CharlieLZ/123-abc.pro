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


(lib.NoSoundBtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0247A6").s().p("AgXBiIAAglIAmAAIAAAlgAgWAoQABgMAEgIQAEgJAHgGIALgKIAOgKQAFgFAFgGQADgGAAgIQAAgMgIgHQgHgHgPAAQgGAAgGACQgGACgEAEQgFAEgDAGQgCAFgBAHIgngCQABgMAFgLQAGgLAIgIQAJgHANgFQAOgFAQAAQAQAAANAEQANAEAIAHQAKAHAEALQAFAKAAAMQAAAKgDAGQgCAHgEAGIgJAJIgLAHIgKAIIgJAIQgEAEgDAFQgCAFgBAHg");
	this.shape.setTransform(163,31.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0247A6").s().p("AgoBhQgKgFgGgLQgHgKgDgOQgDgOgBgRQABgQADgNQADgPAHgKQAHgKALgGQAKgFAPAAIAOABQAGACAFADQAHADAEAFQAFAFADAHIAAAAIAAgEIAAgGIAAgIIAAgHIAAg2IAnAAIAACqIAAATIABANIglAAIgBgEIgBgGIgBgHIAAgHIAAAAQgHAPgMAGQgMAGgQAAQgOAAgKgGgAgMgUQgFACgFAHQgDAGgCAIQgCAKAAANQAAAzAdAAQAFAAAGgDQAGgCAEgGQAFgGADgKQACgKAAgPQAAgOgCgKQgDgIgEgGQgEgGgHgCQgFgCgGAAQgHAAgFADg");
	this.shape_1.setTransform(145.75,31.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0247A6").s().p("AAdBLIAAhSQABgIgCgHQgCgIgCgEQgEgFgEgEQgGgCgHAAQgGAAgFACQgHAEgDAGQgFAFgCAIQgCAIAAAJIAABOIgmAAIAAhyIAAgJIAAgKIgBgIIgBgFIAlAAIABAFIAAAIIABAIIAAAIIABAAQAHgRAMgIQAKgHARgBQAOAAAJAFQAJAFAFAHQAGAIADAKQACALAAAMIAABcg");
	this.shape_2.setTransform(129.1,34.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0247A6").s().p("AgoBHQgKgEgGgIQgFgHgDgLQgDgKABgMIAAhdIAmAAIAABSIABAQQACAHADAFQADAFAFADQAFADAHAAQAGAAAFgDQAGgDAFgGQAEgGACgIQACgHAAgKIAAhOIAnAAIAAByIAAAKIAAAJIABAIIAAAGIglAAIAAgFIgBgJIAAgIIAAgIIgBAAQgIARgMAIQgLAHgQAAQgNAAgJgEg");
	this.shape_3.setTransform(111.95,34.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0247A6").s().p("AgfBHQgOgGgKgJQgJgKgFgPQgEgOgBgRQABgPAEgPQAFgNAJgLQAJgKAPgGQAOgFARgBQAUABAOAFQAOAGAKAKQAJAKADAOQAFAOAAAQQgBARgEAOQgFAOgJALQgJAJgPAGQgOAFgSAAQgRAAgOgFgAgYglQgJAMAAAZQAAANACAKQADAJAEAHQAFAGAGADQAFACAIAAQAIAAAGgCQAGgDAFgGQAFgHACgJQACgKAAgNQABgagJgMQgJgMgQABQgQAAgJAMg");
	this.shape_4.setTransform(94.95,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0247A6").s().p("AggBgQgOgEgKgHQgLgGgGgKQgHgKgDgMIAngHQACAHADAEQADAGAFAEQAGAEAJACQAIACAKAAQAVAAALgGQALgGAAgOQgBgHgEgFQgEgFgIgEQgHgEgJgCIgTgDIgQgFIgQgEQgIgEgGgDQgGgDgFgGQgEgGgDgIQgDgIAAgKQAAgOAGgKQAFgLALgGQAKgHAOgDQAOgDAQAAQASAAAOADQANADAKAGQAJAGAFAJQAGAJACANIgoAEQgCgMgJgGQgKgHgRABQgJAAgIACQgHABgEADQgEADgCAFQgBAEgBAEQAAAIADAFQAEAEAGADQAHADAIACIASAEIARAFIARAEIAQAHQAGAEAGAFQAFAHADAIQADAIAAALQAAANgFALQgEALgLAHQgKAIgQAEQgPAEgWAAQgSAAgPgDg");
	this.shape_5.setTransform(76.9,31.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0247A6").s().p("AggBHQgNgGgKgJQgJgKgFgPQgFgOAAgRQAAgPAFgPQAFgNAJgLQAJgKAOgGQAPgFARgBQAUABAOAFQAOAGAJAKQAKAKADAOQAFAOAAAQQgBARgEAOQgFAOgJALQgKAJgOAGQgOAFgSAAQgSAAgOgFgAgYglQgJAMAAAZQAAANACAKQADAJAEAHQAFAGAGADQAFACAIAAQAIAAAGgCQAHgDAEgGQAFgHACgJQACgKAAgNQABgagJgMQgJgMgQABQgQAAgJAMg");
	this.shape_6.setTransform(51.4,34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0247A6").s().p("AAjBgIhTiTIABAMIABALIAAAMIAABwIgkAAIAAi/IAvAAIBUCUIgBgMIgBgMIAAgNIAAhvIAkAAIAAC/g");
	this.shape_7.setTransform(32.75,31.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0147A6").ss(2,1,1).p("Ar+AAIX9AA");
	this.shape_8.setTransform(95.15,47.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.008)").s().p("AvYE2IAAprIexAAIAAJrgALdCmI39AAg");
	this.shape_9.setTransform(98.525,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NoSoundBtn, new cjs.Rectangle(0,0,197.1,62), null);


(lib.InstructionText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0247A6").s().p("AgRBWIAAghIAiAAIAAAhgAgNAiIgEh3IAjAAIgEB3g");
	this.shape.setTransform(450.65,19.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0247A6").s().p("AgtBcIgLgBIAAgZIAGABIAGAAIAJgBIAHgEIAGgGIAFgMIACgFIg0iCIAkAAIAVA+IACAFIACAGIADAJIACAJIABAGIACAFIABgFIACgGIACgJIACgHIACgIIACgFIATg+IAkAAIg0CKIgKAUQgFAJgFAFQgGAFgHADQgHADgKAAIgLAAg");
	this.shape_1.setTransform(439.575,23.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0247A6").s().p("AgqBCQgHgDgGgFQgFgFgDgHQgCgIAAgJQAAgMAEgIQAEgIAGgEQAIgFAJgCQAJgCALgBIAcAAIAAgHQAAgHgCgFQAAgFgDgDQgDgDgDgBQgDgCgFAAIgHACIgGADQgDABgBAFQgBADgBAGIgkgDQACgIAEgHQADgHAHgGQAIgFAKgDQAKgDANAAQAMAAAJADQAJAEAIAFQAGAGAEAKQADAIAAAMIAAAvIAAAIIADAGQAAABAAABQAAAAABABQAAAAABAAQAAABABAAQACABADABIAHgBIAAATIgFABIgFAAIgFABIgGAAQgOAAgFgGQgGgGgCgNIAAAAQgIANgKAGQgKAIgPgBQgKABgHgDgAgNAGQgFABgEACQgEACgBAEQgDAEAAAHQAAAJAEAFQAFAFAHAAQAGgBAGgDQAEgCAEgFIAGgKQACgGAAgGIAAgHIgQAAIgLABg");
	this.shape_2.setTransform(426.1,21.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0247A6").s().p("AgjBXQgJgGgGgJQgGgJgDgMQgDgNAAgPQAAgPADgLQADgNAGgJQAGgJAKgFQAKgFANAAQAGAAAFABQAGABAFADIAKAHQAEAFADAGIAAgDIAAgGIAAgGIAAgHIAAgwIAiAAIAACXIAAASIABALIghAAIgBgDIAAgGIgBgGIAAgGIgBAAQgGANgKAFQgLAGgOAAQgMAAgJgFgAgLgSQgFACgDAGQgEAFgBAIQgCAIAAAMQAAAtAaAAQAFAAAFgCQAFgCAEgFQAEgGADgIQACgJAAgOQAAgNgCgIQgDgIgEgFQgEgFgFgCQgFgCgFAAQgGAAgFADg");
	this.shape_3.setTransform(410.775,18.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0247A6").s().p("AgcBAQgNgGgIgJQgIgJgEgMQgEgNgBgPQABgOAEgMQAEgNAHgJQAJgKANgEQAMgGAQAAQASAAAMAGQANAEAIAKQAIAJAEANQAEAMgBAOQAAAPgDANQgFAMgJAJQgIAJgNAGQgMAEgQAAQgQAAgMgEgAgWghQgHAKgBAXQABAMACAIQACAJADAFQAEAGAGACQAFADAHAAQAHAAAFgDQAHgCADgGQAFgFABgJQACgIAAgMQAAgXgHgKQgIgLgOAAQgOAAgJALg");
	this.shape_4.setTransform(395.85,21.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0247A6").s().p("AgMBLQgJgJABgRIAAhNIgRAAIAAgWIASAAIAKggIAVAAIAAAgIAZAAIAAAWIgZAAIAABEQAAAKAEAFQAEAEAHAAIAGgBIAFAAIAAAUIgNAEIgPABQgPgBgHgHg");
	this.shape_5.setTransform(384,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0247A6").s().p("AgQBaIAAi0IAhAAIAAC0g");
	this.shape_6.setTransform(369.425,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0247A6").s().p("AgQBaIAAi0IAhAAIAAC0g");
	this.shape_7.setTransform(362.475,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0247A6").s().p("AgqBCQgIgDgFgFQgFgFgDgHQgDgIABgJQAAgMADgIQAFgIAGgEQAIgFAJgCQAJgCAMgBIAbAAIAAgHQAAgHgBgFQgCgFgCgDQgDgDgDgBQgDgCgEAAIgIACIgGADQgDABAAAFQgCADgBAGIgkgDQACgIADgHQAFgHAGgGQAIgFAJgDQALgDANAAQALAAAKADQAJAEAHAFQAHAGADAKQAEAIAAAMIAAAvIABAIIACAGQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQACABAEABIAIgBIAAATIgGABIgFAAIgFABIgHAAQgNAAgGgGQgFgGgCgNIgBAAQgHANgKAGQgKAIgPgBQgKABgHgDgAgNAGQgFABgDACQgFACgCAEQgCAEAAAHQAAAJAEAFQAFAFAHAAQAGgBAGgDQAFgCADgFIAGgKQACgGAAgGIAAgHIgQAAIgLABg");
	this.shape_8.setTransform(352.5,21.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0247A6").s().p("AgTBaIAAhsIgTAAIAAgWIATAAIAAgPQAAgHABgGQACgHAFgFQAEgFAHgCQAHgDALAAIALABIAKACIAAAVIgEAAIgGAAIgHAAIgFADQgCACAAADIgBAHIAAALIAZAAIAAAWIgZAAIAABsg");
	this.shape_9.setTransform(341.15,18.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0247A6").s().p("AgkBDIAAhkIAAgJIgBgJIAAgIIAAgFIAgAAIAAAFIABAIIAAAJIABAGIABAAIADgMQADgGAEgEQADgEAFgCQAFgCAHAAIAGAAIAEABIAAAdIgGgBIgIgBQgNAAgHALQgGAKAAATIAABBg");
	this.shape_10.setTransform(332.5,21.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0247A6").s().p("AgqBCQgIgDgFgFQgFgFgDgHQgCgIgBgJQAAgMAFgIQADgIAIgEQAHgFAJgCQAJgCALgBIAcAAIAAgHQAAgHgBgFQgCgFgCgDQgCgDgEgBQgDgCgFAAIgHACIgGADQgCABgCAFQgCADAAAGIgjgDQABgIADgHQAFgHAHgGQAGgFALgDQAJgDAOAAQALAAAKADQAKAEAGAFQAHAGAEAKQADAIAAAMIAAAvIABAIIABAGQABABAAABQAAAAABABQAAAAABAAQAAABABAAQABABAEABIAHgBIAAATIgFABIgFAAIgFABIgGAAQgNAAgHgGQgGgGgBgNIAAAAQgIANgKAGQgKAIgPgBQgJABgIgDgAgNAGQgFABgEACQgDACgDAEQgCAEAAAHQAAAJAFAFQAEAFAHAAQAGgBAGgDQAFgCADgFIAGgKQACgGAAgGIAAgHIgRAAIgKABg");
	this.shape_11.setTransform(320.5,21.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0247A6").s().p("AgNBLQgHgJgBgRIAAhNIgRAAIAAgWIATAAIALggIAUAAIAAAgIAZAAIAAAWIgZAAIAABEQAAAKAEAFQAEAEAHAAIAGgBIAGAAIAAAUIgNAEIgQABQgOgBgJgHg");
	this.shape_12.setTransform(308.9,19.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0247A6").s().p("AgcBWQgNgEgJgFQgKgHgFgJQgGgIgDgMIAjgGQABAGADAFQADAEAFAEQAFAEAHABQAIACAJAAQASABALgGQAJgFAAgMQAAgIgEgEQgEgEgHgDIgOgGIgRgDIgOgEIgPgEIgMgFQgFgEgEgFQgFgFgDgHQgBgHAAgJQAAgNAEgKQAGgIAJgGQAJgGAMgDQANgCANAAQASAAAMACQALADAJAFQAIAGAEAHQAGAJABAKIgjAGQgCgMgIgGQgJgFgPAAQgJAAgFACQgHABgEADQgEADgBAEIgBAIQAAAGACAEQADAEAGADIANAEIAQAEIAQAEIAPAEIANAGQAHADAEAFQAEAGADAHQADAIAAAJQAAAMgFAKQgEAKgIAGQgKAHgOAEQgNAEgUgBQgQAAgNgCg");
	this.shape_13.setTransform(296.25,19.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_14.setTransform(273.525,21.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0247A6").s().p("AgQBaIAAiCIAhAAIAACCgAgQhBIAAgZIAhAAIAAAZg");
	this.shape_15.setTransform(262.375,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0247A6").s().p("AgcBAQgNgGgIgJQgIgJgEgMQgFgNAAgPQAAgOAFgMQAEgNAHgJQAJgKAMgEQANgGAQAAQASAAAMAGQANAEAIAKQAIAJAEANQADAMAAAOQAAAPgDANQgFAMgJAJQgIAJgMAGQgNAEgQAAQgQAAgMgEgAgWghQgHAKgBAXQAAAMADAIQACAJADAFQAFAGAFACQAGADAGAAQAHAAAFgDQAHgCADgGQAFgFACgJQABgIAAgMQAAgXgHgKQgIgLgOAAQgOAAgJALg");
	this.shape_16.setTransform(251.3,21.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0247A6").s().p("AgSB0IgJgBIAAgYIADAAIAEAAIAHgBQADgBABgCQACgCABgEIAAgJIAAiKIAiAAIAACSQAAAIgCAHQgCAGgEAFQgEAFgHADQgHACgIAAIgMAAgAgGhbIAAgZIAiAAIAAAZg");
	this.shape_17.setTransform(239.1,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0247A6").s().p("AgRAmIAHgJIAFgKIADgKIABgJIgPAAIAAglIAiAAIAAAdIgBAOIgDANIgEAKIgFAJg");
	this.shape_18.setTransform(226.275,27.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0247A6").s().p("AgMBLQgJgJAAgRIAAhNIgRAAIAAgWIATAAIAKggIAVAAIAAAgIAZAAIAAAWIgZAAIAABEQAAAKAEAFQADAEAIAAIAGgBIAGAAIAAAUIgOAEIgPABQgPgBgHgHg");
	this.shape_19.setTransform(218.6,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_20.setTransform(206.875,21.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0247A6").s().p("AgXBBQgMgFgIgJQgIgIgEgNQgEgNAAgRQAAgTAFgNQAFgNAIgHQAJgJALgDQALgDAMgBQAPABAMAFQAKAGAIAJQAHAKADAOQADANAAAPIAAABIhTAAIABAQQABAHAEAFQADAGAFACQAGAEAGAAQAJAAAGgFQAGgDACgIIAgACIgGANQgEAGgGAFQgHAGgKADQgKAEgOgBQgNAAgLgDgAgHgsQgFABgDAEQgEAFgCAFQgCAHAAAIIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_21.setTransform(192.325,21.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0247A6").s().p("AgNBLQgHgJgBgRIAAhNIgRAAIAAgWIATAAIALggIAUAAIAAAgIAZAAIAAAWIgZAAIAABEQAAAKAEAFQAEAEAHAAIAGgBIAFAAIAAAUIgMAEIgQABQgOgBgJgHg");
	this.shape_22.setTransform(181.1,19.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_23.setTransform(169.375,21.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0247A6").s().p("AgcBAQgNgGgIgJQgIgJgEgMQgFgNAAgPQAAgOAFgMQAEgNAHgJQAJgKAMgEQANgGAQAAQASAAAMAGQANAEAIAKQAIAJAEANQADAMAAAOQAAAPgDANQgFAMgJAJQgIAJgMAGQgNAEgQAAQgQAAgMgEgAgWghQgHAKgBAXQAAAMADAIQACAJADAFQAFAGAFACQAGADAGAAQAHAAAFgDQAHgCADgGQAFgFACgJQABgIAAgMQAAgXgHgKQgIgLgOAAQgOAAgJALg");
	this.shape_24.setTransform(154.1,21.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0247A6").s().p("AgZBAQgMgGgHgIQgIgJgEgMQgEgNAAgPQAAgQAEgNQAFgNAIgJQAIgIAMgFQALgEAOgBQANABAKADQAKADAHAGQAHAGAFAIQAEAIACAKIgjABQgBgKgGgGQgGgGgKAAQgNAAgHAMQgGALAAAVQAAAtAaAAQAKAAAGgGQAHgGACgMIAiABQgBAJgFAIQgEAJgHAHQgIAGgKAEQgLADgNAAQgPAAgMgEg");
	this.shape_25.setTransform(139.625,21.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0247A6").s().p("AgQBaIAAi0IAhAAIAAC0g");
	this.shape_26.setTransform(122.125,18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0247A6").s().p("AgQBaIAAi0IAhAAIAAC0g");
	this.shape_27.setTransform(115.175,18.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0247A6").s().p("AgkA/QgIgEgFgGQgGgHgCgJQgCgKAAgKIAAhTIAiAAIAABJIABAOQABAGADAFQADAEAFADQAEADAGAAQAGAAAFgDQAFgDAEgFQADgFACgHQACgHAAgJIAAhFIAjAAIAABlIAAAJIAAAJIAAAHIAAAFIggAAIgBgFIAAgHIAAgIIgBgGIAAAAQgHAPgLAGQgJAHgPAAQgMAAgIgEg");
	this.shape_28.setTransform(104.025,21.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0247A6").s().p("AgUBaIAAhsIgSAAIAAgWIASAAIAAgPQABgHABgGQACgHAFgFQAEgFAHgCQAHgDALAAIAMABIAKACIAAAVIgFAAIgFAAIgIAAIgFADQgCACAAADIgBAHIAAALIAaAAIAAAWIgaAAIAABsg");
	this.shape_29.setTransform(92.5,18.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0247A6").s().p("AgXBBQgMgFgIgJQgIgIgEgNQgEgNAAgRQAAgTAFgNQAFgNAIgHQAJgJALgDQALgDAMgBQAPABAMAFQAKAGAIAJQAHAKADAOQADANAAAPIAAABIhTAAIABAQQABAHAEAFQADAGAFACQAGAEAGAAQAJAAAGgFQAGgDACgIIAgACIgGANQgEAGgGAFQgHAGgKADQgKAEgOgBQgNAAgLgDgAgHgsQgFABgDAEQgEAFgCAFQgCAHAAAIIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_30.setTransform(74.275,21.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0247A6").s().p("AgXBBQgMgFgIgJQgIgIgEgNQgEgNAAgRQAAgTAFgNQAFgNAIgHQAJgJALgDQALgDAMgBQAPABAMAFQAKAGAIAJQAHAKADAOQADANAAAPIAAABIhTAAIABAQQABAHAEAFQADAGAFACQAGAEAGAAQAJAAAGgFQAGgDACgIIAgACIgGANQgEAGgGAFQgHAGgKADQgKAEgOgBQgNAAgLgDgAgHgsQgFABgDAEQgEAFgCAFQgCAHAAAIIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_31.setTransform(60.375,21.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0247A6").s().p("AgVBCQgKgBgIgFQgHgDgFgIQgFgGgDgKIAegEQACAFACAEQACADAEABQAEACAFABIALABIALgBIAJgCQADgCACgDQADgDAAgFQAAgEgEgEQgDgCgFgCIgMgEIgOgDIgQgFQgIgCgHgEQgGgEgEgHQgEgGAAgLQAAgJAEgHQADgIAHgFQAIgFAKgDQAKgCANgBQALAAAJACQAJACAIAFQAHAEAFAHQAFAHACAJIgfADIgDgIQgCgDgDgBQgDgCgEgBIgKgBQgMAAgFAEQgHACABAHQgBAFADADQADADAEABIALAEIANACIASAFQAJADAGAEQAHAEAFAHQAEAIAAALQAAAJgEAIQgEAHgIAGQgHAEgMAEQgKACgOAAQgMAAgKgCg");
	this.shape_32.setTransform(46.35,21.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0247A6").s().p("AgcBAQgMgGgJgJQgIgJgFgMQgDgNAAgPQAAgOADgMQAFgNAIgJQAIgKANgEQAMgGAQAAQASAAANAGQAMAEAIAKQAIAJAEANQAEAMAAAOQgBAPgEANQgEAMgIAJQgJAJgNAGQgMAEgQAAQgQAAgMgEgAgVghQgJAKABAXQAAAMABAIQACAJAFAFQAEAGAFACQAGADAGAAQAGAAAHgDQAFgCAFgGQADgFACgJQACgIABgMQAAgXgIgKQgIgLgPAAQgOAAgHALg");
	this.shape_33.setTransform(24.9,21.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0247A6").s().p("AgRBWIAAiPIg3AAIAAgcICSAAIAAAcIg4AAIAACPg");
	this.shape_34.setTransform(9.65,19.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InstructionText, new cjs.Rectangle(0,0,457.1,37.9), null);


(lib.DEMObgroundedrect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Arb9HQhhAAhEA5QhFA5AABQMAAAA0LQAABQBFA5QBEA5BhAAIW4AAQBgAABEg5QBFg5AAhQMAAAg0LQAAhQhFg5QhEg5hgAAg");
	this.shape.setTransform(86.65,181.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ACEFF").s().p("ArbdIQhgAAhFg6QhEg4gBhRMAAAg0LQABhPBEg5QBFg4BgAAIW4AAQBgAABEA4QBFA5AABPMAAAA0LQAABRhFA4QhEA6hgAAg");
	this.shape_1.setTransform(86.65,181.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-7.2,197.1,376.7);


(lib.ButtonBaseUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACE0FE").s().p("AsnDuQhlgBABhjIAAkTQgBhjBlgBIZPAAQBlABgBBjIAAETQABBjhlABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBaseUp, new cjs.Rectangle(-90.8,-23.7,181.7,47.5), null);


(lib.ButtonBaseOver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFEDFE").s().p("AsnDuQhlgBABhjIAAkTQgBhjBlgBIZPAAQBlABgBBjIAAETQABBjhlABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ButtonBaseOver, new cjs.Rectangle(-90.8,-23.7,181.7,47.5), null);


(lib.bluebarrect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CCEFF").s().p("EiiDAMkIAA5HMFEHAAAIAAZHg");
	this.shape.setTransform(1037.175,80.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2074.4,160.8);


(lib.SignInButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape.setTransform(33.975,2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0247A6").s().p("AgRBWIAAirIAjAAIAACrg");
	this.shape_1.setTransform(22.8,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_2.setTransform(4.825,2.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0247A6").s().p("AgWBbQgKgDgHgEQgHgFgFgGQgEgHgCgIIAjgEQACAIAGAFQAGAEAIAAQAHAAAFgCQAFgBADgEQAEgEACgHQACgHAAgKIAAgHIAAgGIAAgHIAAAAQgGANgLAGQgLAGgOAAQgMAAgJgFQgJgFgGgJQgGgJgDgMQgDgMAAgOQAAgQADgMQADgMAGgJQAHgJAJgFQAKgFANAAQAMAAALAGQAKAFAGANIABAAIAAgGIAAgGIABgGIAAgDIAhAAIgBAMIAAASIAABhQAAAOgEALQgEAKgIAIQgIAHgMADQgMAEgOAAQgNAAgJgDgAgKhDQgFADgEAFQgEAGgBAIQgCAIAAAMQAAAVAHAKQAGALANAAQAFAAAFgCQAFgCAEgFQAEgFADgIQACgIAAgNQAAgNgCgIQgDgIgEgFQgEgFgFgCQgFgCgFAAQgFAAgFACg");
	this.shape_3.setTransform(-10.775,4.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0247A6").s().p("AgQBbIAAiEIAhAAIAACEgAgQhAIAAgZIAhAAIAAAZg");
	this.shape_4.setTransform(-21.575,-0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0247A6").s().p("AgcBVQgNgCgJgHQgJgGgHgIQgFgJgDgMIAjgFQACAFADAFQACAFAFAEQAFACAHACQAIADAJAAQASAAAKgGQAKgGAAgMQAAgGgEgFQgEgFgGgCIgPgGIgRgDIgPgDIgNgFIgNgFQgGgEgEgFQgEgFgCgHQgDgHAAgKQABgMAFgJQAFgJAIgHQAKgFANgDQAMgCAOgBQAQABAMACQAMACAJAGQAIAFAFAJQAEAHADAMIgjAEQgDgLgJgGQgIgFgPAAQgIAAgHABQgGACgEADQgDADgCADIgCAIQAAAHAEAEQADAEAFADIANAFIAQADIAQAEIAPAFIAOAGQAFACAFAGQAFAFADAHQACAHAAALQAAALgEAKQgFAJgJAHQgJAHgNAEQgPAEgSAAQgRAAgNgEg");
	this.shape_5.setTransform(-33.55,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 2
	this.instance = new lib.ButtonBaseUp();
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);

	this.instance_1 = new lib.ButtonBaseOver();
	this.instance_1.shadow = new cjs.Shadow("#000000",1,1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(124,206,255,0.008)").s().p("Aw7GjIAAtFMAh3AAAIAANFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-41.9,216.7,83.9);


(lib.HowToJoinButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape.setTransform(59.675,2.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0247A6").s().p("AgQBbIAAiEIAhAAIAACEgAgQhAIAAgZIAhAAIAAAZg");
	this.shape_1.setTransform(48.525,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0247A6").s().p("AgcA/QgNgFgIgIQgIgJgEgNQgFgNAAgPQAAgOAFgNQADgMAIgJQAJgKAMgFQANgEAQgBQASABAMAEQANAFAIAKQAIAJAEAMQADANAAAOQABAPgEAMQgFANgJAKQgIAIgMAFQgNAFgQABQgQgBgMgFgAgWghQgHALgBAWQAAALACAJQADAJADAGQAEAFAGADQAGACAGAAQAHAAAGgCQAFgDAEgFQAEgGADgJQABgJAAgLQAAgWgHgMQgIgKgOAAQgOAAgJALg");
	this.shape_2.setTransform(37.45,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0247A6").s().p("AgSB0IgJAAIAAgZIADABIAEAAIAHgBQADgBABgDQADgCAAgEIAAgJIAAiLIAiAAIAACTQAAAIgCAGQgCAHgEAFQgFAFgGACQgHAEgIAAIgMgBgAgGhaIAAgZIAiAAIAAAZg");
	this.shape_3.setTransform(25.25,2.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0247A6").s().p("AgcA/QgNgFgIgIQgIgJgEgNQgFgNAAgPQAAgOAFgNQAEgMAHgJQAJgKAMgFQANgEAQgBQASABAMAEQANAFAIAKQAIAJAEAMQADANAAAOQAAAPgDAMQgFANgJAKQgIAIgMAFQgNAFgQABQgQgBgMgFgAgWghQgHALgBAWQAAALADAJQACAJADAGQAFAFAFADQAGACAGAAQAHAAAFgCQAHgDADgFQAFgGACgJQABgJAAgLQAAgWgHgMQgIgKgOAAQgOAAgJALg");
	this.shape_4.setTransform(8.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0247A6").s().p("AgMBKQgIgIAAgRIAAhMIgRAAIAAgYIASAAIAKgeIAVAAIAAAeIAZAAIAAAYIgZAAIAABDQAAAKAEAEQAEAFAHAAIAGgBIAFgBIAAAWIgMADIgQAAQgOABgIgJg");
	this.shape_5.setTransform(-3.55,0.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0247A6").s().p("AAbBCIgVhQIgCgIIgCgJIgCgKIgBAKIgCAJIgCAIIgWBQIgkAAIgiiDIAgAAIARBMIACAIIABAHIACAJIACgJIABgIIACgHIAUhMIAkAAIAUBMIACAIIACAHIABAJIACgJIACgHIACgIIARhMIAgAAIgjCDg");
	this.shape_6.setTransform(-24.375,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0247A6").s().p("AgcA/QgMgFgJgIQgIgJgFgNQgDgNAAgPQAAgOADgNQAFgMAIgJQAIgKANgFQAMgEAQgBQASABANAEQAMAFAIAKQAIAJAEAMQAEANAAAOQgBAPgEAMQgEANgIAKQgJAIgNAFQgMAFgQABQgQgBgMgFgAgVghQgJALABAWQAAALABAJQACAJAFAGQAEAFAFADQAGACAGAAQAGAAAHgCQAFgDAFgFQADgGACgJQACgJABgLQAAgWgIgMQgIgKgPAAQgOAAgHALg");
	this.shape_7.setTransform(-41.7,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0247A6").s().p("AAnBWIAAhKIhMAAIAABKIgkAAIAAirIAkAAIAABFIBMAAIAAhFIAjAAIAACrg");
	this.shape_8.setTransform(-58.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance = new lib.ButtonBaseUp();
	this.instance.shadow = new cjs.Shadow("#000000",1,1,4);

	this.instance_1 = new lib.ButtonBaseOver();
	this.instance_1.shadow = new cjs.Shadow("#000000",1,1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(124,206,255,0.008)").s().p("Aw7GjIAAtFMAh3AAAIAANFg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-41.9,216.7,83.9);


(lib.bluebarscaled = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.bluebarrect("synched",0);
	this.instance.setTransform(1351.3,57.4,1.3028,1,0,0,0,1037.2,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2702.6,160.8);


(lib.SmallDevices = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0247A6").s().p("AgRBWIAAghIAiAAIAAAhgAgNAiIgEh3IAjAAIgEB3g");
	this.shape.setTransform(187.55,329.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0247A6").s().p("AgtBcIgLgBIAAgZIAGAAIAGABIAJgBIAHgEIAGgGIAFgLIACgHIg0iBIAkAAIAVA+IACAFIACAHIADAIIACAJIABAGIACAFIABgFIACgGIACgIIACgIIACgIIACgFIATg+IAkAAIg0CKIgKAUQgFAIgFAGQgGAGgHACQgHADgKAAIgLAAg");
	this.shape_1.setTransform(176.475,334.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0247A6").s().p("AgqBCQgHgDgGgFQgFgFgDgHQgCgIgBgKQAAgLAFgIQADgIAIgEQAHgFAJgCQAJgDAMAAIAbAAIAAgHQAAgHgBgFQgCgEgCgEQgCgDgEgBQgDgBgFAAIgHABIgGACQgCACgCAFQgCADAAAGIgjgCQABgJADgHQAFgHAHgGQAGgFALgCQAJgEAOAAQALAAAKAEQAKACAGAHQAHAGAEAIQADAJAAAMIAAAvIAAAIIACAGQABABAAABQAAAAABABQAAAAABAAQAAABABAAQABABAEABIAHgBIAAASIgFABIgFABIgFABIgGAAQgNABgHgHQgGgGgBgMIAAAAQgIAMgKAHQgKAGgPAAQgJAAgIgCgAgNAGQgFAAgEADQgDACgDAEQgCAEAAAHQAAAJAFAFQAEAEAHABQAGAAAGgEQAFgCADgEIAGgLQACgGAAgHIAAgGIgRAAIgKABg");
	this.shape_2.setTransform(163,331.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0247A6").s().p("AgjBXQgJgGgGgJQgGgJgDgMQgDgNAAgPQAAgPADgLQADgNAGgJQAGgJAKgFQAKgFANAAQAGAAAFABQAGABAFADIAKAHQAEAFADAGIAAgDIAAgGIAAgGIAAgHIAAgwIAiAAIAACXIAAASIABALIghAAIgBgDIAAgGIgBgGIAAgGIgBAAQgGANgKAFQgLAGgOAAQgMAAgJgFgAgLgSQgFACgDAGQgEAFgBAIQgCAIAAAMQAAAtAaAAQAFAAAFgCQAFgCAEgFQAEgGADgIQACgJAAgOQAAgNgCgIQgDgIgEgFQgEgFgFgCQgFgCgFAAQgGAAgFADg");
	this.shape_3.setTransform(147.675,329.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0247A6").s().p("AgcBAQgMgFgJgKQgIgIgEgNQgFgNAAgPQAAgOAFgMQADgNAJgJQAIgKAMgEQANgGAQAAQASAAANAGQAMAEAIAKQAIAJAEANQADAMABAOQAAAPgFANQgEAMgJAJQgIAKgMAFQgNAEgQAAQgQAAgMgEgAgWghQgIALAAAWQAAALACAJQACAJAEAGQAEAFAGADQAFACAHAAQAGAAAHgCQAFgDAFgFQAEgGACgJQACgJAAgLQgBgWgHgMQgIgKgOAAQgPAAgIALg");
	this.shape_4.setTransform(132.75,331.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0247A6").s().p("AgNBKQgHgIgBgRIAAhMIgQAAIAAgXIASAAIALgfIAUAAIAAAfIAZAAIAAAXIgZAAIAABDQAAAKAEAFQADAEAIAAIAGgBIAFgBIAAAVIgMAEIgQABQgOAAgJgJg");
	this.shape_5.setTransform(120.9,330.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0247A6").s().p("AgQBbIAAi0IAhAAIAAC0g");
	this.shape_6.setTransform(106.325,329.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0247A6").s().p("AgQBbIAAi0IAhAAIAAC0g");
	this.shape_7.setTransform(99.375,329.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0247A6").s().p("AgqBCQgHgDgGgFQgFgFgDgHQgDgIAAgKQABgLAEgIQAEgIAGgEQAIgFAJgCQAJgDALAAIAcAAIAAgHQAAgHgCgFQAAgEgDgEQgDgDgDgBQgDgBgFAAIgHABIgGACQgDACgBAFQgBADgBAGIgkgCQACgJAEgHQADgHAIgGQAGgFALgCQAKgEANAAQAMAAAJAEQAJACAIAHQAGAGAEAIQADAJAAAMIAAAvIAAAIIACAGQABABAAABQAAAAABABQAAAAABAAQAAABABAAQACABADABIAHgBIAAASIgFABIgFABIgFABIgGAAQgOABgFgHQgHgGgBgMIAAAAQgIAMgKAHQgKAGgPAAQgJAAgIgCgAgNAGQgFAAgEADQgDACgCAEQgDAEAAAHQAAAJAFAFQAEAEAHABQAHAAAFgEQAEgCAEgEIAGgLQACgGAAgHIAAgGIgRAAIgKABg");
	this.shape_8.setTransform(89.4,331.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0247A6").s().p("AgUBbIAAhsIgTAAIAAgXIATAAIAAgPQABgHACgGQABgHAEgEQAFgFAHgDQAHgCALAAIAMAAIAJACIAAAVIgEgBIgFAAIgIABIgFADQgCACgBADIgBAHIAAALIAaAAIAAAXIgaAAIAABsg");
	this.shape_9.setTransform(78.05,329.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0247A6").s().p("AglBDIAAhkIAAgJIAAgJIAAgIIgBgFIAhAAIAAAFIABAIIAAAJIABAGIAAAAIAFgMQACgGADgEQAEgEAFgCQAFgCAHAAIAGAAIAFABIAAAdIgHgBIgIgBQgNAAgHALQgGAKAAATIAABBg");
	this.shape_10.setTransform(69.4,331.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0247A6").s().p("AgqBCQgIgDgFgFQgFgFgDgHQgDgIABgKQAAgLADgIQAFgIAHgEQAGgFAKgCQAKgDALAAIAbAAIAAgHQAAgHgBgFQgBgEgDgEQgCgDgEgBQgDgBgEAAIgIABIgGACQgDACAAAFQgCADgBAGIgjgCQABgJADgHQAEgHAHgGQAHgFAKgCQAKgEAOAAQALAAAKAEQAJACAHAHQAHAGADAIQAEAJAAAMIAAAvIABAIIACAGQAAABAAABQAAAAABABQAAAAABAAQAAABAAAAQACABAEABIAIgBIAAASIgGABIgFABIgFABIgHAAQgMABgHgHQgFgGgCgMIgBAAQgGAMgLAHQgKAGgPAAQgJAAgIgCgAgNAGQgFAAgDADQgFACgCAEQgCAEAAAHQAAAJAEAFQAFAEAHABQAHAAAFgEQAFgCADgEIAGgLQACgGAAgHIAAgGIgQAAIgLABg");
	this.shape_11.setTransform(57.4,331.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0247A6").s().p("AgMBKQgJgIAAgRIAAhMIgRAAIAAgXIATAAIAKgfIAVAAIAAAfIAZAAIAAAXIgZAAIAABDQAAAKAEAFQADAEAIAAIAGgBIAGgBIAAAVIgOAEIgPABQgPAAgHgJg");
	this.shape_12.setTransform(45.8,330.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0247A6").s().p("AgcBVQgNgCgJgHQgJgFgHgKQgFgIgDgMIAjgFQACAFADAFQACAFAFAEQAFADAHABQAIACAJAAQASABAKgGQAKgFAAgMQAAgIgEgEQgEgEgGgDIgPgGIgRgDIgPgEIgNgEIgNgFQgFgEgFgFQgEgFgCgHQgCgHgBgKQABgNAFgIQAEgKAKgGQAIgFAOgDQAMgDANABQARgBAMADQAMADAJAFQAIAGAFAHQAFAJACALIgjAEQgDgLgIgGQgIgFgQAAQgIAAgHACQgGABgEADQgDADgCADIgCAJQAAAGAEAEQADAEAFADIANAEIAQAEIAQAEIAPAFIAOAFQAFADAFAFQAFAGADAHQACAIAAAKQAAALgEAKQgFAJgJAHQgIAHgOAEQgPADgTAAQgQAAgNgDg");
	this.shape_13.setTransform(33.15,329.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_14.setTransform(175.025,295.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0247A6").s().p("AgQBbIAAiEIAhAAIAACEgAgQhBIAAgYIAhAAIAAAYg");
	this.shape_15.setTransform(163.875,293.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0247A6").s().p("AgcA/QgMgEgJgKQgIgJgFgMQgDgNAAgPQAAgOADgMQAFgNAIgJQAIgKAMgEQANgFAQgBQASABANAFQAMAEAIAKQAIAJAEANQAEAMAAAOQAAAPgFAMQgEANgIAJQgJAKgNAEQgMAFgQABQgQgBgMgFgAgVghQgJAKABAXQAAALABAJQACAJAFAGQAEAFAFADQAGACAGAAQAGAAAHgCQAFgDAFgFQADgGACgJQADgJAAgLQAAgWgIgMQgIgKgPAAQgOAAgHALg");
	this.shape_16.setTransform(152.8,296.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0247A6").s().p("AgSB0IgJgBIAAgYIADABIADAAIAIgBQADgCACgCQABgCABgEIAAgJIAAiLIAiAAIAACTQAAAIgCAGQgCAHgEAFQgEAFgHACQgHADgIABIgMgBgAgGhbIAAgYIAiAAIAAAYg");
	this.shape_17.setTransform(140.6,296.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0247A6").s().p("AgRAmIAHgJIAFgKIADgKIABgJIgPAAIAAglIAiAAIAAAdIgBAOIgDANIgEAKIgFAJg");
	this.shape_18.setTransform(127.775,302.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0247A6").s().p("AgNBKQgHgIAAgRIAAhMIgRAAIAAgYIASAAIALgeIAUAAIAAAeIAZAAIAAAYIgZAAIAABDQAAAKAEAFQADAEAIAAIAGgBIAFgBIAAAWIgMADIgQABQgPAAgIgJg");
	this.shape_19.setTransform(120.1,294.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_20.setTransform(108.375,295.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0247A6").s().p("AgXBAQgMgEgIgIQgIgJgEgNQgEgNAAgRQAAgTAFgNQAFgMAIgJQAJgIALgDQALgEAMAAQAPAAAMAGQAKAFAIAKQAHAKADANQADAOAAAQIAAABIhTAAIABAPQABAHAEAGQADAEAFAEQAGACAGABQAJAAAGgEQAGgEACgJIAgAEIgGAMQgEAGgGAFQgHAFgKAEQgKAEgOAAQgNgBgLgEgAgHgsQgFACgDAEQgEADgCAHQgCAFAAAJIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_21.setTransform(93.825,296.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0247A6").s().p("AgMBKQgJgIABgRIAAhMIgRAAIAAgYIASAAIAKgeIAVAAIAAAeIAZAAIAAAYIgZAAIAABDQAAAKAEAFQADAEAIAAIAGgBIAGgBIAAAWIgOADIgPABQgPAAgHgJg");
	this.shape_22.setTransform(82.6,294.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0247A6").s().p("AAaBDIAAhJIgBgOQgBgGgDgFQgDgFgEgCQgFgDgGAAQgGAAgFADQgFADgDAFQgEAFgCAHQgCAHAAAIIAABGIgiAAIAAhlIAAgJIgBgJIAAgHIAAgFIAgAAIABAFIAAAHIABAIIAAAGIABAAQAGgPALgHQAJgGAPAAQAMAAAIAEQAIADAGAHQAFAHACAJQACAKAAAKIAABTg");
	this.shape_23.setTransform(70.875,295.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0247A6").s().p("AgcA/QgMgEgJgKQgIgJgFgMQgDgNAAgPQAAgOADgMQAFgNAIgJQAIgKAMgEQANgFAQgBQASABANAFQAMAEAIAKQAIAJAEANQAEAMAAAOQAAAPgFAMQgEANgIAJQgJAKgNAEQgMAFgQABQgQgBgMgFgAgVghQgJAKABAXQAAALABAJQACAJAFAGQAEAFAFADQAGACAGAAQAGAAAHgCQAFgDAFgFQADgGACgJQADgJAAgLQAAgWgIgMQgIgKgPAAQgOAAgHALg");
	this.shape_24.setTransform(55.6,296.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0247A6").s().p("AgZA/QgMgEgHgJQgIgJgEgNQgEgMAAgPQAAgQAEgMQAFgNAIgKQAIgIAMgFQALgFAOAAQANAAAKAEQAKADAHAHQAHAFAFAIQAEAJACAIIgjACQgBgKgGgGQgGgGgKAAQgNAAgHALQgGALAAAWQAAAtAaAAQAKAAAGgGQAHgHACgMIAiACQgBAJgFAIQgEAJgHAHQgIAGgKADQgLAEgNABQgPgBgMgFg");
	this.shape_25.setTransform(41.125,296.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0247A6").s().p("AgQBbIAAi0IAhAAIAAC0g");
	this.shape_26.setTransform(166.675,257.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0247A6").s().p("AgQBbIAAi0IAhAAIAAC0g");
	this.shape_27.setTransform(159.725,257.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0247A6").s().p("AgkA/QgIgEgFgGQgGgHgCgJQgCgKAAgKIAAhTIAiAAIAABJIABAOQABAGADAFQADAEAFADQAEADAGAAQAGAAAFgDQAFgDAEgFQADgFACgHQACgHAAgJIAAhFIAjAAIAABlIAAAJIAAAJIAAAHIAAAFIggAAIgBgFIAAgHIAAgIIgBgGIAAAAQgHAPgLAGQgJAHgPAAQgMAAgIgEg");
	this.shape_28.setTransform(148.575,260.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0247A6").s().p("AgUBbIAAhsIgSAAIAAgYIASAAIAAgNQAAgIACgHQACgGAFgEQAEgFAHgDQAHgDALABIAMAAIAKABIAAAWIgFgBIgFAAIgIABIgFADQgCACAAADIgBAHIAAAKIAaAAIAAAYIgaAAIAABsg");
	this.shape_29.setTransform(137.05,257.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0247A6").s().p("AgXBAQgMgEgIgIQgIgJgEgNQgEgNAAgRQAAgSAFgOQAFgMAIgJQAJgHALgEQALgEAMAAQAPAAAMAGQAKAGAIAJQAHAKADANQADAOAAAQIAAABIhTAAIABAPQABAHAEAGQADAFAFADQAGACAGAAQAJAAAGgDQAGgEACgJIAgAEIgGAMQgEAGgGAFQgHAFgKAEQgKAEgOAAQgNAAgLgFgAgHgsQgFABgDAFQgEADgCAHQgCAFAAAJIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_30.setTransform(118.825,260.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0247A6").s().p("AgXBAQgMgEgIgIQgIgJgEgNQgEgNAAgRQAAgSAFgOQAFgMAIgJQAJgHALgEQALgEAMAAQAPAAAMAGQAKAGAIAJQAHAKADANQADAOAAAQIAAABIhTAAIABAPQABAHAEAGQADAFAFADQAGACAGAAQAJAAAGgDQAGgEACgJIAgAEIgGAMQgEAGgGAFQgHAFgKAEQgKAEgOAAQgNAAgLgFgAgHgsQgFABgDAFQgEADgCAHQgCAFAAAJIAyAAQgBgQgHgIQgGgIgMAAQgEAAgEACg");
	this.shape_31.setTransform(104.925,260.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0247A6").s().p("AgVBCQgKgBgIgEQgHgFgFgGQgFgHgDgKIAegFQACAGACADQACAEAEACQAEACAFAAIALAAIALAAIAJgCQADgCACgDQADgDAAgFQAAgEgEgDQgDgEgFgCIgMgCIgOgEIgQgEQgIgDgHgEQgGgEgEgGQgEgHAAgKQAAgKAEgHQADgIAHgFQAIgFAKgDQAKgDANAAQALABAJACQAJACAIAEQAHAEAFAHQAFAHACAJIgfADIgDgHQgCgEgDgCQgDgBgEgBIgKgBQgMAAgFADQgHAEABAGQgBAGADACQADADAEACIALACIANADIASAFQAJADAGAFQAHADAFAHQAEAHAAALQAAAKgEAIQgEAHgIAFQgHAGgMACQgKAEgOAAQgMAAgKgDg");
	this.shape_32.setTransform(90.9,260.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0247A6").s().p("AgcA/QgMgFgJgIQgIgJgFgNQgDgNAAgPQAAgOADgNQAFgMAIgJQAIgKANgEQAMgFAQgBQASABANAFQAMAEAIAKQAIAJAEAMQAEANAAAOQgBAPgEAMQgEANgIAKQgJAIgNAFQgMAFgQABQgQgBgMgFgAgVghQgJALABAWQAAALABAJQACAJAFAGQAEAFAFADQAGACAGAAQAGAAAHgCQAFgDAFgFQADgGACgJQACgJABgLQAAgWgIgMQgIgKgPAAQgOAAgHALg");
	this.shape_33.setTransform(69.45,260.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0247A6").s().p("AgRBWIAAiPIg3AAIAAgcICSAAIAAAcIg4AAIAACPg");
	this.shape_34.setTransform(54.2,258.15);

	this.howToJoinBtn = new lib.HowToJoinButton();
	this.howToJoinBtn.name = "howToJoinBtn";
	this.howToJoinBtn.setTransform(108.35,69.05);
	new cjs.ButtonHelper(this.howToJoinBtn, 0, 1, 1);

	this.signInBtn = new lib.SignInButton();
	this.signInBtn.name = "signInBtn";
	this.signInBtn.setTransform(108.35,163.95);
	new cjs.ButtonHelper(this.signInBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.signInBtn},{t:this.howToJoinBtn},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.DEMObgroundedrect("single",0);
	this.instance.setTransform(112.65,227.6,1.051,1.051,0,0,0,90.7,211.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SmallDevices, new cjs.Rectangle(0,-2.1,216.7,395.90000000000003), null);


(lib.bluebarscaled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.bluebarscaled("synched",0);
	this.instance.setTransform(1351.2,70,1,0.8705,0,0,0,1351.2,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2702.6,140);


(lib.BigScreens = function(mode,startPosition,loop,reversed) {
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
	this.instructionText = new lib.InstructionText();
	this.instructionText.name = "instructionText";
	this.instructionText.setTransform(1033.4,24.45);

	this.howToJoinBtn = new lib.HowToJoinButton();
	this.howToJoinBtn.name = "howToJoinBtn";
	this.howToJoinBtn.setTransform(1611,42.05);
	new cjs.ButtonHelper(this.howToJoinBtn, 0, 1, 1);

	this.signInBtn = new lib.SignInButton();
	this.signInBtn.name = "signInBtn";
	this.signInBtn.setTransform(1827.3,41.95);
	new cjs.ButtonHelper(this.signInBtn, 0, 1, 1);

	this.bg = new lib.bluebarscaled2();
	this.bg.name = "bg";
	this.bg.setTransform(0,0.1,1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg},{t:this.signInBtn},{t:this.howToJoinBtn},{t:this.instructionText}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BigScreens, new cjs.Rectangle(0,0,2702.6,84.1), null);


// stage content:
(lib.topbar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2
	this.bigScreens_mc = new lib.BigScreens();
	this.bigScreens_mc.name = "bigScreens_mc";
	this.bigScreens_mc.setTransform(429.9,42,1,1,0,0,0,1351.2,42.1);

	this.timeline.addTween(cjs.Tween.get(this.bigScreens_mc).wait(1));

	// Layer 1
	this.noSound_mc = new lib.NoSoundBtn();
	this.noSound_mc.name = "noSound_mc";
	this.noSound_mc.setTransform(799.15,614.15);

	this.smallScreens_mc = new lib.SmallDevices();
	this.smallScreens_mc.name = "smallScreens_mc";
	this.smallScreens_mc.setTransform(788,176.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.smallScreens_mc},{t:this.noSound_mc}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-409.3,383.9,2190.6,292.30000000000007);
// library properties:
lib.properties = {
	id: '26C5CFF12AD69348B647E10FC0D7D85F',
	width: 1024,
	height: 768,
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
an.compositions['26C5CFF12AD69348B647E10FC0D7D85F'] = {
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