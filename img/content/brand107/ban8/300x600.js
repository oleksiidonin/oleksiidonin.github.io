(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABPBVIAAg2IAHAAIAAAJQAGgKAJAAQAIAAAGAGQAGAGAAAKQAAAJgGAHQgGAFgIABQgJgBgGgIIAAAUgABZAoQgEAFAAAHQAAAHAEAFQAFAEAGAAQAGAAAFgEQADgFAAgIQAAgHgDgEQgFgFgGAAQgGABgFAEgAj4BTIAAgKIgiAAIgBAKIgFAAIAAgQIAFAAQAFgLAAgRIAAgIIAeAAIAAAkIAFAAIAAAQgAkQAqQAAARgFAIIAWAAIAAgeIgRAAgAKvBDQgGgGAAgJQAAgJAGgGQAIgHAIAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAHgIAAQgKAAgGgHgAKzAoQgDAEAAAIQAAAGADAGQAFAEAHAAQAGAAAFgEQAEgGAAgGQAAgHgEgFQgFgEgGgBQgHABgFAEgAIaBDQgFgGAAgJQAAgJAFgGQAIgHAIAAQAJAAAHAHQAFAGAAAJQAAAJgFAGQgHAHgJAAQgJAAgHgHgAIfAoQgEAEAAAIQAAAHAEAFQAFAEAGAAQAGAAAFgEQAEgGABgGQgBgHgEgFQgFgEgGgBQgGABgFAEgAEOBGQgEgDgBgHQABgGAEgEQAFgDAIAAQAHAAAFACIAAgCQAAgFgCgDQgEgDgFAAQgHAAgGADIgCgFQAHgDAIAAQAJAAAFAEQAEAFAAAHIAAAaIgHAAIAAgGQgFAGgJABQgGAAgFgEgAETA2QgEACABAEQAAAEACACQAEADAEgBQAGAAAEgDQAEgDAAgFIAAgEQgGgCgGAAQgFABgEACgAC6BDQgFgGAAgJQAAgJAFgGQAHgHAJAAQAKAAAGAIIgEADQgFgFgHgBQgIABgDAEQgEAFgBAHQABAHAEAEQAFAFAGAAQAHAAAFgHIAFAFQgIAHgJABQgJAAgHgHgAAfBDQgGgGAAgJQAAgJAGgGQAHgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAHgIAAQgKAAgGgHgAAjAoQgEAEAAAIQAAAHAEAFQAFAEAHAAQAGAAAFgEQAEgGAAgGQAAgHgEgFQgFgEgGgBQgHABgFAEgAleBEQgGgHAAgJQAAgKAGgFQAFgHAJAAQAIAAAGAHQAGAGgBAJIAAADIggAAQAAAGAEAEQAEADAGAAQAIAAAFgGIAEAEQgHAHgKABQgJgBgGgFgAlZAoQgEADAAAGIAaAAQgBgHgD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gGAAgGADIgCgFQAHgEAHABQAKgBAEAFQAFAFgBAHIAAAZIgFAAIAAgFQgHAGgJABQgFAAgFgEgAQugtQgDACAAAEQAAAEADACQADACAEAAQAHAAADgDQAFgDAAgFIAAgEQgGgCgHAAQgFABgEACgALBggQgHgGAAgJQAAgIAHgIQAGgGAJAAQAIAAAHAGQAHAIAAAIQgBAJgGAGQgGAHgJAAQgKAAgFgHgALFg6QgFAEABAHQgBAGAFAFQAFAFAGAAQAGAAAFgFQAEgFAAgGQAAgHgEgEQgFgFgGgBQgIABgDAFgAGLggQgGgGAAgJQAAgIAGgIQAIgGAHAAQAKAAAGAGQAGAIAAAIQAAAJgGAGQgGAHgKAAQgJAAgGgHgAGQg6QgEAEgBAHQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgHgFgEQgEgFgHgBQgGABgEAFgAAjggQgFgGAAgJQAAgIAFgIQAHgGAIAAQAKAAAIAIIgEADQgGgFgIgBQgFABgFAFQgEAEAAAHQAAAGAEAFQAFAFAGAAQAGAAAHgHIAEAFQgIAHgKABQgJAAgGgHgAk2ggIADgFQAGAGAJAAQAEAAADgCQACgCAAgEQAAgCgCgCQgDgCgFAAIgGAAIAAgFIAGAAQADAAAEgCQACgDABgDQgBgCgCgCQgDgCgDAAQgIAAgFAFIgDgFQAHgFAJAAQAHAAADADQAFADAAAFQAAAHgHADQAIACAAAIQAAAFgFAEQgFAEgGAAQgKAAgIgHgAofggQgFgGgBgJQABgIAFgIQAHgGAJAAQAJAAAIAIIgFADQgGgFgGgBQgHABgEAFQgEAEAAAHQAAAGAEAFQAEAFAHAAQAHAAAFgHIAFAFQgHAHgKABQgJAAgHgHgAqUggQgFgGgBgJQABgIAFgIQAHgGAJAAQAKAAAGAIIgEADQgFgFgHgBQgGAAgEAFQgEADgBAGIATAAIAAAFIgTAAQABAGAEAEQAEAEAGAAQAHAAAFgHIAFAFIgHAFQgEACgGABQgJAAgHgHgArDgdQgGgEAAgGQAAgGAGgEQAEgDAIAAQAHAAAGACIAAgCQAAgFgDgDQgDgDgGAAQgGAAgHADIgBgFQAHgEAHABQAJgBAFAFQAEAFAAAHIAAAZIgGAAIAAgFQgFAGgKABQgFAAgFgEgAq/gtQgDACAAAEQA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.6,-8.5,229.2,17), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkQBZIAPgfQAKAGAIAAQAKAAAFgKIg7iVIAtAAIAiBlIAhhlIAsAAIg5CYQgJAYgLAJQgKAJgUAAQgUAAgSgKgAlOBZIAAgjIheAAIgDAjIgkAAIAAhIIARAAQAOgeAAhFIAAgNIB7AAIAABwIAUAAIgFBIgAmMg4QAAAxgLAYIAzAAIAAhMIgoAAgACuAkQgXgXAAghQAAghAVgWQAVgXAhAAQAjAAATAXQATAZAAAhIgBAMIhoAAQADANAJAHQAKAIAOAAQAUAAARgPIAYAVQgWAcgnAAQgiAAgWgVgADMg3QgIAIgDAPIBAAAQgCgPgIgIQgIgJgNAAQgNAAgJAJgApsAjQgXgWAAghQAAghAXgWQAYgXAiAAQAkAAAWAXQAXAWAAAhQAAAggXAWQgXAXgjAAQgjAAgXgWgApPgxQgKALAAASQAAASALAKQALAMARAAQASAAAKgLQALgLAAgSQAAgRgLgMQgLgMgRAAQgSAAgLAMgAMCA2IAAhXIg7BXIgoAAIAAiVIAqAAIAABXIA6hXIAoAAIAACVgAJaA2Igog4IgTAUIAAAkIgrAAIAAiVIArAAIAAA9IA2g9IAxAAIg4A9IA/BYgAGjA2IAAg1QgVAKgTAAQgXAAgPgLQgPgOAAgWIAAg7IArAAIAAAvQAAAYAVAAQAOAAAPgHIAAhAIArAAIAACVgAhmA2IAAiVIArAAIAABwIAwAAIAAhwIApAAIAABwIAwAAIAAhwIArAAIAACVgArNA2IAAhxIgzAAIAABxIgqAAIAAiVICIAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-81.1,-9.9,162.3,19.9), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALgBSQgWgXAAgiQgBgeAYgYQAXgWAjAAQAjAAAXAWQAXAWAAAgQAAAhgYAXQgWAXgjAAQgjAAgYgWgAL/gDQgMALAAARQAAASAMAMQALAMARAAQASAAAKgLQALgMAAgTQAAgRgLgLQgLgMgRABQgSgBgKAMgAA5BSQgXgWAAgjQAAgfAXgXQAYgWAiAAQAjAAAXAWQAXAXAAAfQAAAhgXAXQgXAXgjAAQgjAAgXgWgABWgDQgKALAAARQAAATALALQAMAMAQAAQASAAAKgLQAMgNAAgSQAAgQgMgMQgLgMgRABQgSgBgLAMgAt/BSQgYgWAAgjQAAgfAYgXQAXgWAjAAQAiAAAYAWQAXAXAAAfQAAAhgXAXQgXAXgkAAQgiAAgXgWgAtigDQgLALAAARQAAATALALQAMAMARAAQARAAALgLQALgNAAgSQAAgQgMgMQgKgMgSABQgSgBgKAMgAQ0BlIAAiWIAsAAIAACWgAOLBlIAAiWIBSAAQAXAAANAKQAOAKAAASQABAWgZALQAeAJAAAcQAAAUgPAKQgPAMgaAAgAO1BDIAiAAQATAAAAgPQAAgOgUAAIghAAgAO1ALIAeAAQAIAAAFgFQAFgEgBgGQAAgEgDgFQgGgEgIgBIgeAAgAKBBlIAAg6Ig1AAIAAA6IgrAAIAAiWIArAAIAAA5IA1AAIAAg5IAqAAIAACWgAHSBlIAAhYIg6BYIgpAAIAAiWIAqAAIAABXIA6hXIApAAIAACWgAEBBlIAAhxIgtAAIAAglICFAAIAAAlIgtAAIAABxgAgbBlIgog6IgTAWIAAAkIgrAAIAAiWIArAAIAAA9IA2g9IAvAAIg2A9IA+BZgAjTBlIAAiWIAqAAIAACWgAkmBlIAAg6Ig0AAIAAA6IgrAAIAAiWIArAAIAAA5IA0AAIAAg5IAqAAIAACWgAorBlIAAiWIAqAAIAACWgArVBlIAAiWIBSAAQAXAAANAKQAOAKAAASQAAAWgXALQAcAJAAAcQABAUgQAKQgOAMgaAAgAqsBDIAiAAQATAAAAgPQAAgOgUAAIghAAgAqsALIAfAAQAHAAAFgFQAGgEAAgGQgBgFgEgEQgFgEgIgBIgfAAgAvlBlIAAhPIhPAAIAABPIgsAAIAAjDIAsAAIAABNIBPAAIAAhNIArAAIAADDgAQzhBIAAgmIAtAAIAAAmgAjUhBIAAgmIAsAAIAAAmgAoshBIAAgmIAsAAIAAAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-112,-10.4,224.1,20.8), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGvC3IiijjIAADjIhaAAIAAkeIAqhPIBSAAICACzIAAizIBZAAIAAFtgAg9C3IAAhtIiGkAIB3AAIBMCgIBNigIB2AAIiHEAIAABtgAoHC3IAAhYIC0i8IiqAAIAAhZIEgAAIApBPIi9DFIC+AAIAABZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-52,-18.3,104,36.7), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AnzA+IAEgJQAGADAHAAQAEAAAEgEQAEgDADgIIgjhMIAMAAIAdBAIAZhAIAMAAIggBPQgGANgGAEQgEAFgKAAQgIAAgJgEgAsVBCIAAhlIAMAAIAAAPQALgRASAAQAPAAALAMQALAKAAASQAAASgLALQgLALgPAAQgSABgLgSIAAAogAsBgSQgIAKgBALQABANAIAIQAIAJALAAQAMAAAIgJQAIgHAAgOQAAgMgIgJQgIgJgMAAQgLAAgIAJgAOgAgQgMgMAAgRQAAgPAMgMQALgNASAAQAQAAAMAMQAMAMAAAQQAAARgMAMQgLALgRAAQgSAAgLgLgAOogSQgIAJAAAMQAAANAIAIQAIAJANAAQAMAAAIgJQAIgIAAgNQAAgMgIgJQgJgIgLgBQgNABgIAIgAKIAgQgLgMAAgRQAAgPALgMQANgNARAAQAPAAAOAMQALAMgBAQQAAARgLAMQgLALgSAAQgRAAgMgLgAKQgSQgHAJAAAMQgBANAJAIQAIAJANAAQAMAAAIgJQAIgIAAgNQAAgMgIgJQgJgIgMgBQgNABgIAIgAFTAgQgMgMABgRQgBgQAMgLQAMgNARAAQASAAALAMQAMAMAAAQQAAAQgMANQgMALgRAAQgRAAgMgLgAFbgSQgHAJgBAMQAAANAJAIQAJAJALAAQANAAAIgJQAHgHABgOQgBgMgHgJQgJgIgMgBQgMABgJAIgACjAgIAGgJQAMALANgBQAIABAHgEQAFgEAAgGQAAgGgFgEQgFgDgKAAIgKAAIAAgJIAKAAQAIAAAFgDQAEgDAAgHQAAgFgEgDQgFgDgHgBQgOAAgKAIIgFgIQAMgKARAAQANAAAIAGQAIAGAAAJQAAANgNAEQAPAGAAANQAAAKgJAHQgJAHgNgBQgTAAgNgLgABXAgQgLgLAAgSQAAgQALgMQALgMAQAAQAQAAAKAMQAKAMAAARIAAADIg+AAQABANAIAGQAHAHALAAQAPAAAKgKIAHAGQgNAOgTAAQgQAAgMgLgABggUQgGAHgCAMIAyAAQAAgLgHgIQgGgHgMAAQgKAAgHAHgAgHAgQgLgNAAgTIACgXIADgLIAEgJQAEgFAEgCQAEgDAHgCIArgKIADAJIgqALQgMADgEAGQgFAHgCALQAJgQAXAAQAPAAALAMQALALAAAPQAAAQgLAMQgLALgRAAQgSAAgKgLgAABgQQgHAIAAAMQAAANAHAHQAIAJAMAAQAMAAAHgJQAJgIAAgMQAAgLgJgJQgHgJgMABQgNgBgHAJgAk7AlQgIgGAAgMQAAgMAIgHQAKgGAPAAQAKAAAOADIAAgCQAAgJgHgHQgEgEgNAAQgMAAgLAEIgDgJQAPgGANgBQAQAAAJAJQAIAIAAAPIAAAuIgLAAIAAgLQgKANgSAAQgMABgJgHgAkyAHQgFAEAAAIQgBAGAGAFQAGAEAIAAQALAAAHgGQAIgGAAgJIAAgHQgLgEgMABQgKgBgHAFgApIAgQgLgMAAgUIAAgMIACgLIADgLIAEgJQAEgFAFgCIAMgFIArgKIACAJIgqALQgLADgGAGQgFAHgBALQAKgQAWAAQAPAAAMAMQALALgBAPQABAQgLAMQgMALgRAAQgSAAgLgLgAo+gQQgIAIAAAMQAAAMAIAIQAHAJAMAAQANAAAHgJQAIgIAAgMQAAgLgIgJQgIgJgMABQgMgBgHAJgAqqAgQgMgMAAgRQAAgPAMgMQAMgNARAAQARAAALAMQAMAMAAAQQAAARgMAMQgLALgRAAQgSAAgLgLgAqigSQgIAJAAAMQAAANAIAIQAJAJAMAAQAMAAAIgJQAIgIAAgNQAAgMgIgJQgIgIgMgBQgNABgIAIgAvVAcQgPgRAAgVQAAgWAPgRQAQgPAXgBQANABAJAEQAKAFAIAHIgIAJQgOgOgSAAQgTAAgLAMQgMAMAAATQAAASAMAMQAMAMASAAQAIAAAJgDQAJgFAHgHIAIAIQgKAKgJAEQgJAFgOgBQgWAAgQgPgANzApIAAghIgsAAIAAAhIgNAAIAAhMIANAAIAAAhIAsAAIAAghIAMAAIAABMgALjApIAAhMIAmAAQALAAAHAFQAHAFAAAKQAAAMgOAEQASAFAAAPQAAAJgIAGQgHAFgNAAgALuAgIAaAAQAIAAAFgDQAFgFABgFQgBgGgFgDQgFgDgJAAIgZAAgALugCIAYAAQAHABAFgEQAEgDAAgGQAAgFgEgDQgEgDgHAAIgZAAgAJJApIAAhCIgcAAIAAgKIBEAAIAAAKIgcAAIAABCgAGtApIAAhMIANAAIAABCIAmAAIAAhCIAKAAIAABCIAnAAIAAhCIAMAAIAABMgAEuApIgbgjIgRARIAAASIgKAAIAAhMIAKAAIAAAsIArgsIAPAAIghAhIAiArgAhhApIAAg8IgvA8IgLAAIAAhMIALAAIAAA8IAvg8IALAAIAABMgAjTApIAAhCIgcAAIAAgKIBDAAIAAAKIgcAAIAABCgAmWApIAAhMIAmAAQAMAAAHAFQAGAFAAAKQAAAMgMAEQAQAFABAPQAAAKgIAFQgHAFgNAAgAmJAgIAZAAQAJAAAEgDQAFgFAAgFQAAgGgFgDQgFgDgKAAIgXAAgAmJgCIAXAAQAHABAFgEQADgDAAgGQAAgFgDgDQgEgDgIAAIgXAAgAs6ApIAAhCIgsAAIAABCIgMAAIAAhMIBDAAIAABMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-99.7,-6.6,199.4,13.2), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvfDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAIe/AAQBSAAA7A7QA6A6AABSIAAACQAABSg6A6Qg7A6hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-119.1,-20,238.2,40), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A9E0").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Слой_4
	this.instance = new lib.btn_txt();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,8.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:0.7,alpha:1},8).wait(1));

	// r_part
	this.instance_1 = new lib.r_part();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:109.1},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-109.1},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой_5
	this.instance_3 = new lib.btn_bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.01,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1},8,cjs.Ease.get(1)).wait(4));

	// Слой_1
	this.instance_4 = new lib.btn_round();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.012,0.012);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.2,scaleY:1.2},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.quadInOut).to({_off:true},9).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,0.5,0.5);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AzTCCIAAkDMAmnAAAIAAEDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:0,y:147.6}).wait(40));

	// t1_2
	this.instance = new lib.t1_2();
	this.instance.parent = this;
	this.instance.setTransform(0,170.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:150.4},10,cjs.Ease.quadInOut).wait(30));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("AzTCCIAAkDMAmnAAAIAAEDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:0,y:107.4}).wait(45));

	// t1_1
	this.instance_1 = new lib.t1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,131.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:109.8},10,cjs.Ease.quadInOut).wait(35));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,261);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).wait(45));

	// logo
	this.instance_3 = new lib.logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-256.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},15,cjs.Ease.cubicOut).wait(45));

	// btn
	this.instance_4 = new lib.btn("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.6,202.5,1.05,1.05,0,0,0,-0.6,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).wait(30));

	// img
	this.instance_5 = new lib.bgImg_1();
	this.instance_5.parent = this;
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(45));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"}
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