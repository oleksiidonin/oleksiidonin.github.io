(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.iqos = function() {
	this.initialize(img.iqos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,398,298);


(lib.lil = function() {
	this.initialize(img.lil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,274);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,572);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,572);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A1tDIMArbAAAIAAmPMgrbAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlPCMIAAg9IAGAAIAAAKQAIgLAKAAQAJAAAHAGQAGAHABALQgBALgGAHQgHAGgJAAQgLABgHgKIAAAXgAlDBaQgFAFgBAHQABAIAFAGQAFAEAGAAQAHAAAFgEQAEgGAAgIQAAgIgEgEQgFgFgHgBQgHABgEAFgADTCJIAAgLIglAAIgCALIgFAAIAAgSIAFAAQAGgLAAgVIAAgIIAhAAIAAAoIAHAAIgBASgAC5BbQAAARgFALIAZAAIAAgiIgUAAgAA2CJIAAgLIgoAAIAAgvIAGAAIAAAoIAbAAIAAgoIAHAAIAAAoIAHAAIgBASgAQtB2QgHgKAAgOQAAgNAHgKQAIgJAMAAQALAAAIAJQAHAJAAAOQAAAOgHAJQgIAJgMAAQgMABgHgJgAQyBLQgFAIAAALQAAALAFAHQAGAIAJAAQAIAAAFgIQAFgHABgLQgBgKgFgJQgFgHgJAAQgIAAgGAHgAPcB5QgIgFABgIQAAgDADgGQAEgEAFgCQgKgFAAgJQAAgIAGgFQAIgEAIAAQAIAAAGAEQAHAFAAAIQAAAJgLAFQANAFAAAKQAAAJgHAEQgGAGgKgBQgLABgGgGgAPgBkQgEADAAAFQAAAFAEAEQAGAEAHgBQAHABAFgEQAEgEAAgFQAAgFgFgDQgFgDgGAAQgHgBgGAEgAPiBHQgEADAAAFQAAAFAEAEQAEACAHAAQAGAAAEgCQAEgEAAgFQAAgFgEgDQgEgDgGAAQgHAAgEADgAOhB2QgIgKAAgOQAAgNAIgKQAHgJAMAAQAMAAAHAJQAIAJAAAOQAAAOgIAJQgHAJgMAAQgMABgHgJgAOnBLQgGAIAAALQAAALAGAHQAFAIAIAAQAJAAAFgIQAGgHgBgLQABgKgGgJQgFgHgJAAQgIAAgFAHgANGB3QgHgGAAgLQAAgKAHgHQAHgHAKAAQAKAAAIAHQAGAIABAJQgBALgGAGQgIAIgKgBQgKABgHgIgANLBaQgFAFAAAHQAAAIAFAFQAEAGAIgBQAIAAAEgEQAGgHAAgHQAAgHgGgFQgFgGgHAAQgHAAgFAGgAKxB2QgIgKABgOQgBgNAIgKQAIgJAMAAQALAAAIAJQAHAJAAAOQAAAOgHAJQgIAJgMAAQgLABgIgJgAK2BLQgFAIAAALQAAALAFAHQAGAIAJAAQAIAAAFgIQAFgHABgLQgBgKgFgJQgFgHgJAAQgIAAgGAHgAHDB1IAFgGQAIAJAKAAQAGAAAFgDQADgFAAgGQABgFgFgEQgDgEgIAAQgHAAgGAEIgFgEIACgeIAkAAIAAAGIgeAAIgCAVQAIgDAFAAQAJgBAGAGQAHAGAAAIQAAAIgHAHQgFAFgKAAQgOABgJgKgAE/B4IAEgFQAHAFAJAAQAEAAADgCQAEgCAAgEQAAgEgDgBQgEgCgFAAIgGAAIAAgGIAGAAQAFAAACgCQAEgCAAgEQAAgDgDgCQgEgCgDAAQgJAAgFAFIgEgFQAIgGAKAAQAHAAAFADQAFAFAAAEQAAAIgHADQAIAEAAAHQAAAHgFAEQgFAEgIgBQgLAAgJgGgAD3B3QgGgGAAgLQAAgKAGgHQAIgHAJAAQALAAAIAJIgEAEQgGgHgJAAQgGAAgFAFQgEAEgBAGIAVAAIAAAGIgVAAQABAGAEAFQAGAFAGgBQAHAAAHgGIAEAEQgEAEgDADQgFABgHAAQgJABgIgIgAhjB4IADgFQAHAFAJAAQAEAAAEgCQADgCAAgEQAAgEgDgBQgDgCgGAAIgGAAIAAgGIAGAAQAGAAACgCQACgCAAgEQAAgDgCgCQgEgCgDAAQgJAAgGAFIgDgFQAIgGAKAAQAHAAAFADQAFAFAAAEQAAAIgIADQAJAEAAAHQAAAHgFAEQgEAEgJgBQgMAAgHgGgAiXB3QgHgGAAgLQAAgKAHgHQAHgHAKAAQAKAAAIAHQAGAIABAJQgBALgGAGQgIAIgKgBQgKABgHgIgAiSBaQgFAFAAAHQAAAIAFAFQAEAGAIgBQAIAAAEgEQAGgHAAgHQAAgHgGgFQgFgGgHAAQgIAAgEAGgAkPB3QgHgGAAgLQAAgKAHgHQAHgHAKAAQAKAAAIAHQAGAIAAAJQAAALgGAGQgIAIgKgBQgKABgHgIgAkKBaQgFAFAAAHQAAAIAFAFQAFAGAHgBQAIAAAEgEQAFgHABgHQgBgHgFgFQgFgGgHAAQgHAAgFAGgAp6B7QgFgFAAgGQAAgHAFgFQAGgDAJAAIAPACIAAgBQAAgHgEgDQgFgEgGAAQgFAAgIAEIgDgGQAIgDAJAAQALAAAFAEQAEAFAAAJIAAAdIgGAAIAAgIQgHAJgKgBQgIABgFgEgAp0BpQgEACABAFQAAAEACACQAEADAFAAQAHAAAEgDQAFgEAA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gHABgHQgBgFgEgGQgGgGgHAAQgHAAgGAGgALlAaIAAgHIAEABIADAAIADgDQACgCABgEIACgfIAhAAIAAAuIgHAAIAAgoIgUAAIgBASIgCAMQgBAFgCABIgFAEIgEABgAK1ATQgHgGAAgLQAAgJAHgHQAHgHAKAAQAKAAAIAHQAGAIABAIQgBALgGAGQgIAIgKAAQgKAAgHgIgAK6gJQgFAFAAAGQAAAIAFAFQAFAGAHgBQAIAAAEgEQAGgHAAgHQAAgFgGgGQgFgGgHAAQgHAAgFAGgAILATQgHgGAAgLQAAgJAHgHQAHgHAKAAQAKAAAIAHQAGAIABAIQgBALgGAGQgIAIgKAAQgKAAgHgIgAIQgJQgFAFAAAGQAAAIAFAFQAEAGAIgBQAIAAAEgEQAGgHAAgHQAAgFgGgGQgFgGgHAAQgHAAgFAGgAAfAaIAAgHIAEABIADAAIADgDQACgCABgEIABgfIAiAAIAAAuIgHAAIAAgoIgUAAIgBASIgCAMQgBAFgDABIgDAEIgGABgAi7AUQgGgHAAgLQAAgJAGgHQAHgHAJAAQAKAAAGAHQAGAHAAAJIAAADIglAAQABAHAFAFQADADAHAAQAJAAAGgGIAEAEQgHAJgMAAQgKgBgHgGgAi1gKQgEAEgBAGIAeAAQgBgGgEgEQgDgFgHAAQgGAAgEAFgAkgAWQgGgEAAgGQAAgHAGgFQAGgCAIAAIAOACIAAgBQAAgHgDgDQgEgDgHgBQgEABgJADIgCgGQAHgDAKAAQAJAAAFAEQAFAFAAAJIAAAcIgHAAIAAgIQgGAJgLAAQgHAAgEgFgAkbAFQgDACgBAFQAAAEADACQAEADAFAAQAHAAAEgDQAEgEAAgFIAAgFIgNgCQgGAAgEADgAmUAUIADgFQAHAFAIAAQAFAAAEgCQADgCAAgEQAAgEgDgBQgDgDgGAAIgGAAIAAgEIAGAAQAGAAACgCQACgCAAgEQABgDgDgCQgEgCgEAAQgIAAgGAFIgDgFQAHgGALAAQAGAAAGAEQAFAEAAAFQAAAHgIACQAJAEAAAHQAAAHgFADQgEAFgKAAQgLgBgHgGgAswATQgHgGAAgLQAAgJAHgHQAHgHAKAAQAKAAAHAHQAIAIAAAIQAAALgIAGQgHAIgKAAQgLAAgGgIgAsrgJQgFAFAAAGQAAAIAFAFQAFAGAHgB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g9IAGAAIAAAKQAIgLAKAAQAJAAAHAGQAGAHABALQgBALgGAHQgHAGgJABQgLgBgHgJIAAAXgAQChtQgFAFgBAHQABAIAFAGQAFAEAGAAQAHAAAFgEQAEgGAAgIQAAgIgEgEQgFgGgHAAQgHAAgEAGgAxRg7IAAg9IAHAAIAAAKQAHgLALAAQAHAAAIAGQAGAHAAALQAAALgGAHQgHAGgIABQgMgBgGgJIAAAXgAxGhtQgEAFAAAHQAAAIAEAGQAHAEAFAAQAIAAAEgEQAFgGgBgIQABgIgFgEQgFgGgHAAQgGAAgGAGgAo1hPQgIAGgMABQgOAAgJgKQgJgJAAgOQAAgNAJgKQAJgKAPABQAOgBAIAKQAJAKAAANQABANgIAJIAIAGIgFAGgApah8QgIAJAAAKQAAAKAIAIQAHAIALAAQAHAAAHgEIgMgLIAFgFIALAKQAGgHAAgJQAAgKgHgJQgHgHgLAAQgKAAgHAHgARphPIAEgGQAHAHAJgBQAEAAADgBQAEgDAAgEQAAgEgDgBQgEgDgFAAIgGAAIAAgFIAGAAQAFAAACgCQAEgCAAgEQAAgDgDgCQgEgCgDAAQgJAAgGAFIgDgFQAIgGAKAAQAHAAAGAEQAEADAAAGQAAAHgHADQAIAEAAAHQAAAHgFADQgFAFgIAAQgLgBgJgGgAOWhQQgHgGAAgLQAAgKAHgHQAHgHAKAAQAKAAAJAIIgFAFQgHgHgHAAQgIAAgEAGQgFAFAAAHQAAAIAFAFQAFAFAHAAQAIABAGgIIAFAFQgIAIgLABQgKAAgHgIgAMThQQgGgGAAgLQAAgKAGgHQAIgHAJAAQALAAAIAIIgEAFQgGgHgJAAQgGAAgFAFQgEAFgBAFIAVAAIAAAGIgVAAQABAGAEAFQAGAEAGAAQAHABAHgIIAEAFQgEAEgDADQgFACgHAAQgJAAgIgIgALghNQgGgEAAgGQAAgHAGgEQAFgEAJgBIAPADIAAgBQgBgHgDgDQgEgDgHgBQgFABgIADIgCgFQAHgEAJgBQALABAEAEQAFAFAAAJIAAAdIgGAAIAAgHQgHAHgKABQgIAAgEgFgALlheQgDACAAAFQAAAFACACQAFACAEAAQAHAAAEgDQAEgEABgFIAAgFIgOgCQgGAAgEADgAJ0hPQgGgGgBgJIgKAAIAAAVIgHAAIAAgvIAHAAIA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");
	this.shape_1.setTransform(-0.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-140,-21,280,42), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAyC+IAXgfQAbAWAcgBQAaAAAPgUQAPgVAAghQgTAZgkAAQgmAAgXgUQgXgWAAgiQAAgjAYgWQAagYAmAAQApAAAZAZQAdAcAAA+QAAA7gbAjQgcAjguABQgrAAgigdgABjAWQgNAMAAAUQABASANAMQANAMAWAAQAWAAAOgMQANgMAAgTQgBgTgNgMQgOgNgWAAQgWAAgNANgAikC+IAXgfQAaAWAdgBQAaAAAPgUQAPgVAAghQgUAZgjAAQgmAAgXgUQgXgWAAgiQAAgjAYgWQAagYAnAAQAoAAAZAZQAcAcAAA+QAAA7gaAjQgcAjguABQgrAAgigdgAhzAWQgNAMAAAUQAAASAOAMQANAMAWAAQAWAAAOgMQANgMgBgTQAAgTgNgMQgOgNgWAAQgVAAgOANgAl4C3IAagfQAeAcAeAAQAWAAAMgLQAOgLAAgTQAAgSgOgKQgNgMgXAAQgUAAgXALIgagQIAHh0ICOAAIAAAkIhqAAIgDA4QASgHATAAQAlAAAWASQAYAVgBAlQAAAkgYAVQgXAXgoAAQgygBglgjgAErBKQgMgIAAgPIABgFIgJAAIAAgMIBiAAIAAAMIg9AAQgGACAAAFQAAALATAAQAUAAAOgJIAHASQgTAKgVgBQgUABgLgJgAEXAaIAAgMIA/AAQADgCAAgDQABgLgUAAQgPABgNAEIgGgQQARgIARABQATAAAMAIQAMAJAAANIgBAEIAJAAIAAAMgAi5iAIAGgJQAMAKAMAAQANAAAIgLQAEgGACgJIhMAAQgDANgHAJQgLAPgSAAQgQAAgPgMIAHgJQAMAKAMAAQAOAAAHgLQAEgGADgJIhNAAQgCAMgIAKQgKAPgTAAQgQAAgOgMIAGgJQAMAKANAAQANAAAHgLQAFgGACgJIhFAAIAAgCIAeAAQgHgCgFgFQgKgJAAgNQAAgOAKgKQAKgKAQAAQARAAAKAMQALAMAAAYIgBAPIAkAAQgGgCgFgFQgJgJAAgNQgBgPAKgJQAKgKAQAAQARAAALAMQAKANgBAXIAAAPIAkAAQgHgCgEgFQgKgJAAgNQAAgOAKgKQAJgKARAAQARAAAKAMQALAMAAAYIgBAPIAGAAIAAACIgHAAQgDAMgHAKQgLAPgTAAQgPAAgOgMgAiOibIAPAAIABgNIAAgCQgGALgKAEgAjmibIAPAAIABgNIAAgCQgGALgKAEgAk+ibIAQAAIAAgNIAAgCQgGALgKAEgAiqjJQgGAHAAAKQAAAJAGAGQAHAGALAAQAKAAAHgHQAHgHAAgIQAAgKgHgGQgIgHgKAAQgLAAgGAHgAkCjJQgGAIgBAJQAAAJAIAGQAHAGAKAAQAKAAAIgHQAGgHAAgIQAAgKgHgGQgHgHgLAAQgKAAgHAHgAlajJQgGAHAAAKQAAAJAGAGQAIAGAKAAQAKAAAHgHQAIgHAAgIQAAgKgIgGQgIgHgKAAQgKAAgHAHgAhWimIAAgGIgGAAIAAgFIA8AAIAAAFIgpAAQgEACAAAFQgBAKARAAQAMgBAJgGIADAHQgLAIgNAAQgZAAAAgTgAhci4IAAgGIApAAQADgDAAgDQAAgKgPAAQgKAAgJAFIgCgIQALgFAJAAQANAAAGAFQAGAFAAAIIgBAGIAIAAIAAAGg");
	this.shape.setTransform(1,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#057C77").s().p("AgwF/IhJhJIkwAAQg+AAgsgsQgrgrAAg+IAAmYQAAg9ArgsQAsgsA+AAINTAAQA+AAArAsQAsAsAAA9IAAGYQAAA+gsArQgrAsg+AAIlPAAIhJBJQgNAOgUAAQgTAAgOgOg");
	this.shape_1.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-56,-39.6,115,79.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7C+IAXggQAbAXAbAAQAaAAAQgVQAOgVACghQgVAZgkAAQglAAgXgUQgYgVAAgjQAAgjAZgWQAZgYAnAAQApAAAZAZQAcAcAAA+QAAA6gbAkQgbAkgvAAQgqAAgigdgACsAWQgMAMAAAUQAAASAMAMQAOAMAWAAQAWAAANgNQANgMAAgSQAAgTgNgNQgOgMgWAAQgWAAgNANgAhbC+IAXggQAbAXAbAAQAZAAAQgVQAPgVABghQgWAZgiAAQglAAgXgUQgYgVAAgjQABgjAYgWQAZgYAnAAQAoAAAZAZQAcAcAAA+QAAA7gaAjQgcAkguAAQgpAAgjgdgAgqAWQgMAMAAAUQgBASANAMQAOAMAWAAQAVAAANgNQANgMAAgSQAAgTgNgNQgOgMgWAAQgVAAgNANgAktDXIAAghIBShGQAZgVAJgNQAKgOAAgQQAAgRgLgLQgKgJgRAAQgPAAgOAJQgMAIgOATIgdgYQASgYATgLQAUgNAfAAQAjAAAVATQAWATgBAgQABAagPAVQgNARgiAcIgxApIBxAAIAAAlgAmBDXIAAjFIgqAMIgJghIA/gVIAeAAIAADvgAFnBKQgMgIAAgPIABgFIgJAAIAAgMIBiAAIAAAMIg9AAQgGADAAAEQAAALATAAQAUAAAOgJIAHASQgUAKgUAAQgUAAgLgJgAFTAaIAAgMIA/AAQADgCABgDQAAgLgUAAQgQAAgMAFIgGgRQARgHARAAQATAAAMAJQAMAIAAAOIgBAEIAJAAIAAAMgAjAiAIAGgJQAMALANAAQANAAAHgMQAFgGACgJIhNAAQgCAMgIAKQgKAPgTAAQgPAAgPgMIAGgJQAMALAMAAQAOAAAHgMQAFgGACgJIhMAAQgDANgHAJQgLAPgTAAQgPAAgPgMIAHgJQAMALAMAAQANAAAIgMQAEgHACgIIhPAAIAAAjIgMAAIAAgjIgYAAIAAgDIAYAAIAAgxIgSAFIgDgJIAYgIIAJAAIAAA9IAoAAQgGgCgFgEQgKgJAAgNQAAgOAKgKQAJgKARAAQAQAAALAMQAKALAAAaIgBANIAlAAQgHgCgEgEQgKgJAAgNQAAgPAKgJQAKgKAPAAQASAAAJAMQALAMAAAZIgBANIAlAAQgHgCgFgEQgKgKAAgMQABgOAJgKQAKgKAQAAQARAAAKAMQALAMAAAZIgBANIAGAAIAAADIgHAAQgCAMgIAKQgKAPgTAAQgQAAgOgMgAiVicIAPAAIABgMIAAgBQgGAKgKADgAjsicIAOAAIABgMIAAgBQgGAKgJADgAlEicIAPAAIABgMIAAgBQgGAKgKADgAixjJQgGAGAAAKQAAAKAGAGQAIAGAKAAQAKAAAHgHQAIgHAAgJQAAgJgIgHQgHgGgLAAQgKAAgHAHgAkJjJQgGAHAAAJQAAAKAHAGQAHAGAKAAQALAAAHgHQAGgHAAgJQABgJgIgHQgGgGgMAAQgKAAgHAHgAlgjJQgGAGgBAKQABAKAGAGQAHAGALAAQAKAAAHgHQAHgHAAgJQAAgJgHgHQgHgGgLAAQgLAAgGAHgAhhimIABgGIgGAAIAAgFIA7AAIAAAFIgoAAQgEADgBADQABAKAQAAQANAAAIgGIADAHQgKAHgOAAQgaAAAAgSgAhmi5IAAgFIAoAAQAEgDAAgDQAAgKgPAAQgJAAgJAEIgDgHQAKgFALAAQAMAAAGAFQAHAFgBAJIgBAFIAHAAIAAAFg");
	this.shape.setTransform(0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#883D4D").s().p("AghF/IhJhJImAAAQg+AAgsgsQgrgrAAg+IAAmYQAAg9ArgsQAsgrA+gBIPVAAQA+ABAsArQArAsAAA9IAAGYQAAA+grArQgsAsg+AAImBAAIhJBJQgNAOgUAAQgTAAgOgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-64,-39.6,128,79.3), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-97.9,-28.6,195.9,57.3), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-177,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(-177,-286,354,572), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-177,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-177,-286,354,572), null);


(lib.lil_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMHTQgEAAgDgDQgCgDAAgEIAAh1QAAgEACgDQADgDAEAAQAFAAADADQACADAAAEIAABrIBEAAQAEAAADADQACADAAAEQAAAEgCADQgDADgEAAgAkFHKQgNgIgEgNQgCgEACgEQACgEAEgBQAEgCADACQAEACACAEQACAHAIAFQAHAFAKAAQAMAAAIgHQAIgGAAgKQAAgGgDgEQgHgIgSgCQgTgCgLgKQgMgLAAgPQAAgPANgLQAMgKARAAQANAAALAHQALAHAEALQACAEgCADQgCAEgEACQgEABgDgCQgEgCgCgDQgCgGgFgDQgGgDgHAAQgJAAgGAEQgGAFAAAHQAAAHAGAFQAGAFALABQAbADALAOQAIAJABAOQAAASgPAMQgOANgUAAQgQAAgNgJgAC4HSQgEAAgDgDQgDgCAAgFIAAh0QAAgEADgDQADgDAEAAIAcAAQAcAAAUAUQAUAUAAAcQAAAcgUAUQgUAUgcAAgADCG+IASAAQAUAAAOgOQAOgOAAgUQAAgUgOgOQgOgOgUAAIgSAAgACAHPQgDgCAAgFIAAh0QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAB0QAAAFgDACQgDADgEAAQgEAAgDgDgAiLG+QgUgUAAgcQAAgcAUgUQAUgUAcAAQAcAAAUAUQAVAUAAAcQAAAcgUAUQgUAUgdAAQgcAAgUgUgAh9FsQgOAOAAAUQAAAUAOAOQAOAOAUAAQAUAAAOgOQAPgOAAgUQAAgUgOgOQgPgPgUAAQgUAAgOAPgACxDjQgPgPAAgVIAApeQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVIAAJeQAAAVgPAPQgOAPgVAAQgVAAgPgPgAgiDjQgPgPAAgVIAAmUQAAgVAPgPQAOgOAUAAQAVAAAPAOQAPAPAAAVIAAGUQAAAVgPAPQgPAPgVAAQgUAAgOgPgAj3DjQgPgPAAgVIAApeQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVIAAJeQAAAVgPAPQgOAPgVAAQgVAAgPgPgAgmlFQgQgRAAgXQAAgXAQgQQAQgQAWAAQAXAAARAQQAQAQAAAXQAAAXgQARQgRAQgXAAQgWAAgQgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lil_logo, new cjs.Rectangle(-28,-46.6,56,93.4), null);


(lib.lil_dev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.lil();
	this.instance.parent = this;
	this.instance.setTransform(-167,-137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lil_dev, new cjs.Rectangle(-167,-137,334,274), null);


(lib.iqos_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah1B3IgmgmIh7AAQgeAAgSgEQgZgGgPgOQgUgTAAglIAAhqQAAgHAFgEQAFgEAHAAICJAAQAdAAAUAEQAYAGAPAOQAUATAAAlIAABpIAfAeQAEAFgBAFQAAAHgFAGQgGAFgGAAQgGAAgEgEgAlfACQAAAZANAMIACACQANAKAbABICJAAIAAhcQAAgZgNgNIgCgDQgNgJgcgCIiIAAgAnWBLQgFgFAAgIIAAinQAAgIAFgFQAEgEAIAAQAIAAAEAEQAEAFABAIIAACnQgBAIgEAFQgEAEgIAAQgIAAgEgEgAEzBOQgmgBgRgKQgOgJgDgRIAAgCQABgHAFgDQADgEAIAAQAGAAAFADQAEADACAEIAAADQAFAHAIADQAIACAPAAIBKAAQApAAAMgGQAKgFAAgSIAAgCQAAgPgHgEQgIgIgcABIhjAAQghAAgPgNQgPgMAAgbIAAgLQABgaASgKQAWgOA5AAIAxAAQAtAAAUALQAPAIADASIAAACQgBAHgEAEQgEADgIAAQgGAAgEgDQgFgCgCgFIgBgCQgEgJgNgDQgJgCgYAAIg4AAQgiAAgLAGQgKAEAAAQIAAAIQAAAMAHAFQAIAHAXgBIBVAAQAqAAAQAJQAYANAAAjIAAABQAAAlgfAMQgSAIgogBgAAhBOQgwAAgZgNQgigTAAguIAAgqQAAgwAigTQAZgNAwAAIAuAAQAyAAAYANQAhATABAwIAAAqQAAAugjATQgYANgxAAgAgWhUQgRANAAAfIAAAmQAAAeARAMQAOALAfgBIBCAAQAfABAPgLQARgMAAgeIAAgmQAAgfgRgNQgPgKgfAAIhCAAQgfAAgOAKg");
	this.shape.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iqos_logo, new cjs.Rectangle(-48,-12.3,95.2,24.6), null);


(lib.icos_dev = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(172,165,158,0.698)").s().p("AA+BhQgLgEgGgEIgegZIgIgIQgFgHABgOIACgQIAEgNQAGgJAMgDQAIgDAOABQAJAAAHACQAIADAGAGIAHALIAIAHQAJAHAEAIQADAHAAAIQABAPgFAMQgHAOgNAFQgEACgHAAQgGAAgHgCgAg6ACIgOgGQgHgFgJgIQgKgJgCgIIgCgIIgEgIQgGgQAGgPQAHgQARgBIAOACIAPACQAIABAHAGQAFADAGAHIAJAJIALAKQALAOgEAUQgFANgKAIQgFADgHACQgEACgKAAQgJAAgIgCg");
	this.shape.setTransform(174.2,-74.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(172,165,158,0.698)").s().p("AAFA0QgJgDgHgFIgegYIgIgIQgFgIABgMIADgQIAEgOQAFgJAMgEQAJgDAOABQAIAAAGACQAJADAFAHIAIALIAHAHQAKAIADAIQADAHAAAHQACAPgGAMQgGAOgNAEQgFACgGAAQgGAAgIgCg");
	this.shape_1.setTransform(179.8,-70.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},9).wait(1));

	// Слой_1
	this.instance = new lib.iqos();
	this.instance.parent = this;
	this.instance.setTransform(-199,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-149,398,298);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAwIAAgRIg4AAIgBARIgMAAIAAgdIAIAAQAJgTABgjIAAgMIA3AAIAABCIAIAAIgCAdgAgwgZQAAAbgJARIAkAAIAAg1IgbAAgAFAAfIAAg4IgnA4IgOAAIAAhOIAOAAIAAA5IAog5IANAAIAABOgADRAfIAAhBIgaAAIAAgNIBAAAIAAANIgZAAIAABBgACmAfIgIgTIgmAAIgIATIgNAAIAihOIANAAIAjBOgACZAAIgOgfIgNAfIAbAAgAAUAfIAAhOIA6AAIAAANIgtAAIAAASIAXAAQANAAAHAGQAIAHAAAKQAAAYgdAAgAAhATIATAAQASAAABgNQAAgKgQAAIgWAAgAhuAfIAAg4IgnA4IgNAAIAAhOIANAAIAAA5IApg5IAMAAIAABOgAjyAfIAAhOIAeAAQAOAAAJAIQAHAHAAAMQABANgKAHQgJAGgNAAIgQAAIAAAZgAjlgGIAQAAQARAAABgOQgBgOgRAAIgQAAgAkaAfIAAhBIglAAIAABBIgNAAIAAhOIBAAAIAABOg");
	this.shape.setTransform(0.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoMCgIAAk/IQZAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-52.5,-16,105,32), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBF3").s().p("EgXbAgCMAAAgp3MAu3gWMMAAABADg");
	this.shape.setTransform(0,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006663").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFD1C4").s().p("EgXbAgCMAAAgp3MAu3gWMMAAABADg");
	this.shape.setTransform(0,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A1B2E").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p2
	this.instance = new lib.p2_1();
	this.instance.parent = this;
	this.instance.setTransform(9,-54.9,0.01,0.01,0,0,0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.85,scaleY:0.85,x:8.9},15,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:9,y:-55},84).to({scaleX:2.4,scaleY:2.4},16,cjs.Ease.get(-1)).wait(1));

	// p1
	this.instance_1 = new lib.p1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,-62,0.01,0.01,0,0,0,-5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.2,scaleX:0.85,scaleY:0.85,x:8.9,y:-62.1},15,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:9,y:-62},84).to({scaleX:2.4,scaleY:2.4},16,cjs.Ease.get(-1)).wait(116));

	// lil_logo
	this.instance_2 = new lib.lil_logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,-230.5,0.643,0.643,0,0,0,0.1,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({alpha:1},10).wait(95).to({alpha:0},10).wait(1));

	// iqos_logo
	this.instance_3 = new lib.iqos_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.6,-230.5,1.198,1.198,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10).wait(95).to({alpha:0},10).to({_off:true},1).wait(115));

	// btn
	this.instance_4 = new lib.btn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({scaleX:0.96,scaleY:0.96,y:177.4},2).to({scaleX:1,scaleY:1,y:177.5},2).wait(3).to({scaleX:0.96,scaleY:0.96,y:177.4},2).to({scaleX:1,scaleY:1,y:177.5},2).wait(104).to({scaleX:0.96,scaleY:0.96,y:177.4},2).to({scaleX:1,scaleY:1,y:177.5},2).wait(3).to({scaleX:0.96,scaleY:0.96,y:177.4},2).to({scaleX:1,scaleY:1,y:177.5},2).wait(46));

	// t2
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.3,-69.4,0.01,0.01,0,0,0,0,35);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).to({regY:39.6,scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(65).to({regY:35,scaleX:0.01,scaleY:0.01},10,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-69.4,0.01,0.01,0,0,0,0,35);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({regY:39.6,scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(65).to({regY:35,scaleX:0.01,scaleY:0.01},10,cjs.Ease.get(-1)).to({_off:true},1).wait(125));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(231));

	// urText
	this.instance_8 = new lib.urText();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,269.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(231));

	// lil_dev
	this.instance_9 = new lib.lil_dev();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-315.9,153.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).to({x:18,y:-1.7},15,cjs.Ease.get(1)).wait(90).to({x:-315.9,y:153.3},10,cjs.Ease.get(-1)).wait(1));

	// icos_dev
	this.instance_10 = new lib.icos_dev("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(352.1,-214.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-49,y:-34.2},15,cjs.Ease.get(1)).wait(15).to({mode:"synched",loop:false},0).wait(75).to({startPosition:10},0).to({x:352.1,y:-214.1,mode:"single",startPosition:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(115));

	// Слой_9
	this.instance_11 = new lib.bg2();
	this.instance_11.parent = this;
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(105).to({_off:false},0).to({alpha:1},10).wait(105).to({alpha:0},10).wait(1));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(231));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-363.1,701.1,663.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,236.9,702.1,664.2);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/iqos.png", id:"iqos"},
		{src:"images/lil.png", id:"lil"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"}
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
an.compositions['0A6E3F5DF6B342F4AF907DBE848CDF8D'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;