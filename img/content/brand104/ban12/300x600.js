(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,852);// helper functions:

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
	this.shape.graphics.f("#FFFDFB").s().p("AMgCSIAAgeQgFAIgKAAQgKAAgGgHQgGgHAAgKQAAgLAGgGQAGgIAKABQAKgBAFAJIAAgHIAJAAIAABFgAMIBYQgEAEAAAIQAAAHAEAFQAEADAGAAQAPAAAAgPQAAgIgEgEQgEgFgHABQgGgBgEAFgAngCJIAAgOIg1AAIAAhEIAKAAIAAA7IAhAAIAAg7IAKAAIAAA7IAJAAIAAAXgAJSCGIAAgLIgmAAIAAALIgIAAIAAgTIAFAAQAEgEAAgPIABgTIAlAAIAAAmIAHAAIAAATgAI2BgQAAAOgDAFIAXAAIAAgeIgTAAgAPoB1QgHgHAAgKQAAgLAHgGQAGgIAJABQAKgBAGAJIAAgHIAJAAIAAAuIgJAAIAAgHQgGAIgKAAQgJAAgGgHgAPuBYQgEAEAAAIQAAAHAEAFQAEADAHAAQAOAAAAgPQAAgIgEgEQgEgFgGABQgHgBgEAFgAO0B3QgGgFAAgJIAAgcIAJAAIAAAaQAAAMAMAAQALAAAAgMIAAgaIAJAAIAAAcQAAAJgGAFQgFAFgJAAQgJAAgGgFgAOYB2QAAgHAHABQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgHAAAAgGgAM7B1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgANCBYQgFAFAAAHQAAAHAFAFQAEADAGAAQAGAAAEgDQAFgFAAgHQAAgHgFgFQgEgEgGAAQgGAAgEAEgAKeB1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgAKkBYQgEAFAAAHQAAAHAEAFQAEADAHAAQAGAAAEgDQAEgFAAgHQAAgQgOAAQgHAAgEAEgAG1B0IAFgFQAGAFAIAAQAMABAAgIQAAgGgKAAIgJAAIAAgHIAHAAQAKABAAgIQAAgGgJAAQgIAAgGAFIgFgFQAGgHANAAQASgBAAANQAAAIgHADQAJACAAAJQAAAOgUAAQgNAAgHgIgAFFByQgHgJAAgQQAAgQAHgJQAHgKAMAAQAMAAAGAKQAHAJAAAQQAAAQgHAJQgGAKgMAAQgMAAgHgKgAFIBZQAAAaAQAAQAPAAAAgaQAAgbgPAAQgQAAAAAbgAEqB6QgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAD1B2QgHgHAAgKQAAgJAHgLIASgaIAJAAIgPAYQADgBAEgBQAKABAGAGQAHAHAAAKQAAAJgHAIQgHAGgKAAQgLAAgHgGgAD8BZQgEAFAAAHQAAAGAEAFQAEADAHAAQAGAAAEgDQAFgFAAgGQAAgHgFgFQgEgDgGAAQgHAAgEADgAC4ByQgHgJAAgQQAAgQAHgJQAHgKAMAAQAMAAAGAKQAHAJAAAQQAAAQgHAJQgGAKgMAAQgMAAgHgKgAC7BZQAAAaAQAAQAQAAAAgaQAAgbgQAAQgQAAAAAbgABnB1QgGgHAAgKQAAgLAGgGQAGgIAKABQAKgBAFAJIAAgHIAJAAIAAAuIgJAAIAAgHQgFAIgKAAQgKAAgGgHgABuBYQgEAEAAAIQAAAHAEAFQAEADAGAAQAPAAAAgPQAAgIgEgEQgEgFgHABQgGgBgEAFgAheB1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgAhYBYQgEAFAAAHQAAAHAEAFQAEADAHAAQAGAAAEgDQAFgFAAgHQAAgHgFgFQgEgEgGAAQgHAAgEAEgAjOB1QgHgHAAgKQAAgLAHgGQAGgIAJABQAKgBAGAJIAAgHIAJAAIAAAuIgJAAIAAgHQgGAIgKAAQgJAAgGgHgAjIBYQgEAEAAAIQAAAHAEAFQAEADAHAAQAOAAAAgPQAAgIgEgEQgEgFgGABQgHgBgEAFgAkuB1QgHgHAAgKQAAgLAHgGQAGgIALABQANgBAHAKIgGAFQgFgGgJAAQgHAAgEAEQgEAEAAAIQAAAGAEAFQAFAFAGgBQAJAAAFgFIAGAFQgHAJgNAAQgLAAgGgHgAl9B1Q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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-117.2,-14.5,234.4,29.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak1B8QgXgIgNgOIAYggQAZAXAfAAQATgBAKgIQALgKAAgQQAAgggtgBIg8AAIAAh8ICKAAIAAApIhgAAIAAAuIASAAQAtABAXAQQAXASAAAjQAAAigXAVQgWAUgmAAQgXAAgYgJgABUCBIAyhKIgNABQghgBgXgVQgYgWAAgiQABgjAYgXQAZgYAlABQAlgBAYAXQAYAXAAAjQAAAfgZAmIg3BTgABigyQgLALAAARQAAASALAKQAMAMASAAQARAAAMgMQALgKAAgSQAAgSgLgLQgMgMgRAAQgSAAgMANgAhwCBIAyhKIgOABQghgBgWgVQgYgWAAgiQABgjAYgXQAZgYAlABQAlgBAYAXQAXAXAAAjQAAAfgYAmIg3BTgAhigyQgMALAAARQAAASAMAKQAMAMARAAQASAAALgMQALgKAAgSQAAgSgLgLQgLgMgSAAQgRAAgMANgAEXgLQgJgEgFgHQgEgJAAgKIAAgFIABgEIgIAAIAAgNIAOAAIAHgHIAFgDIAFgDIgfAAIAAgMIA4AAQADgCAAgDIABgGQAAgDgCgDIgEgFIgJgBIgJABIgJACIgKAFIgIgUQAHgEALgDQAKgCAKAAQALAAAJADQAIAEAGAIQAEAIAAAKIgBALIAIAAIAAAMIgQAAIgDAEIgQAJIAjAAIAAANIg5AAIgDAEIgBAFQAAADACAEQADADADABQAEACAGAAQAKAAAIgCIARgGIAAAWQgFADgMACQgHADgNAAQgMAAgKgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-34.6,-13.3,69.2,26.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AluB1IAEgUIAOACQAKAAAGgGQAFgFAHgPIAFgOIgxh0IAZAAIAkBaIAkhaIAYAAIg2CBQgKAbgLAJQgLALgRAAQgMAAgIgCgADwAkQgZgZAAglQAAgmAZgZQAZgaAnAAQAnAAAZAaQAZAZgBAmQABAlgZAZQgZAagnAAQgnAAgZgagAEJhCQgOAQAAAYQAAAZAOAOQAPAQAYAAQAZAAAPgQQAOgOgBgZQABgYgOgQQgPgQgZAAQgYAAgPAQgABfA4QgRgGgKgJIAPgbQAWARAbAAQAfAAAAgVQgBgOgtgOQgugOAAgiQAAgYASgNQARgMAcAAQAlAAAXARIgPAbQgTgNgYAAQgfAAAAASQAAAKAPAFQAJAEAWAGQAuAPAAAkQAAAZgSAOQgRANgeAAQgTAAgSgGgAPjAwIAMgZQAUALAVAAQARAAAAgKQAAgGghgJQgigJAAgZQAAgSAPgKQANgJAXAAQAeAAARAMIgLAYQgQgIgTAAQgTAAAAAJQABAEAhAKQAiAKAAAZQAAASgNAJQgNAKgYAAQggAAgWgNgApkAuQgPgPgDgYIgTAAIAAA0IgXAAIAAh0IAXAAIAAAuIATAAQAEgWAQgNQAQgOAWAAQAaAAARARQAPASAAAZQAAAbgPARQgRARgaAAQgYAAgQgPgApVgcQgKALAAARQAAASAKALQAJALAQAAQAQAAAKgLQAJgLAAgSQAAgRgJgLQgKgLgQAAQgQAAgJALgAuOAuQgPgPgDgYIgTAAIAAA0IgXAAIAAh0IAXAAIAAAuIATAAQAFgWAOgNQARgOAWAAQAaAAAQARQARASgBAZQABAbgRARQgQARgaAAQgYAAgQgPgAt/gcQgKALAAARQAAASAKALQAJALAQAAQAPAAAKgLQAKgLAAgSQAAgRgKgLQgKgLgPAAQgQAAgJALgANfA7IAAiqIBwAAIAAAeIhNAAIAAAnIBGAAIAAAeIhGAAIAAAoIBPAAIAAAfgAJ4A7IAAiqIA+AAQApAAAYAXQAYAXgBAnQABAmgYAXQgZAYgoAAgAKaAcIAZAAQAbAAAOgNQAPgOABgbQgBgbgPgOQgPgOgaAAIgZAAgAIvA7IAAiqIAiAAIAACqgAGlA7IAAiqIAjAAIAACLIBKAAIAAAfgAgoA7IAAixIAiAAIAACxgAhpA7IAAh2IAhAAIAAB2gAirA7IAAixIAiAAIAACxgAmWA7IAAg0Ig6AAIAAA0IgXAAIAAh0IAXAAIAAAuIA6AAIAAguIAXAAIAAB0gAr3A7IAAhgIgoAAIAAgUIBnAAIAAAUIgoAAIAABggAwhA7IAAhgIgpAAIAAgUIBoAAIAAAUIgoAAIAABggAhnhUQgFgGgBgIQABgIAFgGQAGgGAJAAQAIAAAFAGQAHAGAAAIQAAAIgHAGQgFAGgIAAQgJAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-109.8,-11.9,219.7,23.9), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEvB0IAAiuIAXAAIAAASQAOgVAZAAQAYAAAQASQAQARAAAaQAAAagQASQgQARgYAAQgZAAgOgVIAABMgAFPgdQgKAMAAARQAAASAKALQAKALARAAQAQAAAKgLQAJgLABgSQgBgRgJgMQgKgLgQAAQgRAAgKALgAKBAsQgRgSABgaQgBgaARgRQAQgSAXAAQAaAAANAVIAAgSIAYAAIAAB0IgYAAIAAgSQgNAVgaAAQgXAAgQgRgAKSgdQgKAMAAARQAAASAKALQAKALAQAAQAQAAAKgLQALgLAAgSQAAgRgLgMQgKgLgQAAQgQAAgKALgAA+AsQgQgSAAgaQAAgaAQgRQAQgSAYAAQAaAAANAVIAAgSIAYAAIAAB0IgYAAIAAgSQgNAVgaAAQgYAAgQgRgABPgdQgJAMgBARQABASAJALQALALAPAAQAQAAALgLQAKgLAAgSQAAgRgKgMQgLgLgQAAQgPAAgLALgAkSAsQgQgSAAgaQAAgaAQgRQAQgSAXAAQAaAAAOAVIAAgSIAXAAIAAB0IgXAAIAAgSQgOAVgaAAQgXAAgQgRgAkAgdQgLAMABARQgBASALALQAKALAQAAQAPAAALgLQAKgLAAgSQAAgRgKgMQgLgLgPAAQgQAAgKALgApDArQgRgRAAgaQAAgbARgRQAQgRAaAAQAZAAAQAQQAQARAAAYIgBAJIhbAAQABARALAJQAKAJARAAQAWAAAPgOIAMAPQgHAJgOAGQgOAFgPAAQgbAAgSgSgAoxghQgJAJgCAOIBGAAQgDgOgJgJQgKgIgNAAQgOAAgKAIgAs2ArQgQgRAAgaQAAgZAQgSQARgSAcAAQAhAAARAXIgPAOQgNgQgWAAQgRAAgKALQgLAMAAARQAAASAKALQALAKARABQAWgBANgQIAPAPQgRAXghAAQgcAAgRgSgAxjAlQgXgZAAgnQAAgoAXgYQAWgYAkAAQAXAAATAKQASAJALARIgTAMQgSgagiAAQgZAAgPARQgRATAAAeQAAAeARATQAPAQAZABQAigBASgaIATAMQgMASgSAJQgSAKgXAAQgjAAgXgYgARkA6IAAgtIgbAAIgbAtIgZAAIAegvQgcgGAAgbQAAgRANgKQAMgJAVAAIA2AAIAAB0gAQugWQAAATAZAAIAdAAIAAglIgdAAQgZAAAAASgAPjA6IAAg0Ig6AAIAAA0IgXAAIAAh0IAXAAIAAAuIA6AAIAAguIAXAAIAAB0gANaA6IAAg0Ig7AAIAAA0IgXAAIAAh0IAXAAIAAAuIA7AAIAAguIAWAAIAAB0gAH6A6IAAh0IAzAAQAWAAALAJQALAHAAAOQAAAUgRAGQAXAHAAAUQAAAPgLAJQgLAJgVAAgAIQApIAfAAQAYAAAAgSQAAgQgYAAIgfAAgAIQgIIAZAAQAaAAAAgQQAAgRgaAAIgZAAgAHAA6IAAh0IAYAAIAAB0gADGA6IAAh0IBSAAIAAAUIg7AAIAABggAgDA6IAAg0Ig6AAIAAA0IgXAAIAAh0IAXAAIAAAuIA6AAIAAguIAXAAIAAB0gAlTA6IAAhTIgmAzIgPAAIgmgyIAABSIgXAAIAAh0IAXAAIAuA8IAtg8IAWAAIAAB0gAqfA6IAAhgIgpAAIAAgUIBoAAIAAAUIgpAAIAABggAt2A6IAAhUIg+BUIgUAAIAAh0IAVAAIAABUIA9hUIAVAAIAAB0gAHBhYQgEgFAAgGQAAgGAEgFQAEgEAHAAQAGAAAEAEQAFAFgBAGQABAGgFAFQgEADgGAAQgHAAgEgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-114.7,-11.6,229.4,23.2), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F478A").s().p("Ax8YMQkCgWinjFQimjGAWkCQAWkBDFinMAiPgc7QDFinECAWQECAWCnDGQCnDFgWECQgWECjFCnMgiPAc6QivCTjdAAQgeAAgegCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-172.1,-155,344.2,310.1), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F478A").s().p("EgidAudQjqgUjQhpQjYhuiei6Qidi7hIjnQhFjfAUjqQATjqBqjQQBtjYC7ieMBBxg3iQC7ieDnhHQDfhGDqAUQDqAUDQBpQDYBuCeC6QCdC7BIDnQBFDfgTDqQgUDqhqDQQhtDYi7CeMhBxA3iQi7CejnBHQitA2i0AAQg0AAg0gEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-330.5,-297.7,661,595.5), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(-46.9,-7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBKQgFgFAAgGIAAh9QAAgGAFgFQAEgEAGAAQAGAAAFAEQAFAFAAAGIAAB9QAAAGgFAFQgFAEgGAAQgGAAgEgEg");
	this.shape_1.setTransform(-46.9,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBpQgEgEgBgHIAAi7QABgGAEgFQAEgEAGgBQAGABAFAEQAFAFAAAGIAAC7QAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_2.setTransform(-40.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBpQgEgEgBgHIAAi7QABgGAEgFQAFgEAFgBQAHABAEAEQAFAFgBAGIAAC7QABAHgFAEQgEAFgHgBQgFABgFgFg");
	this.shape_3.setTransform(-53.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBIQgdgeAAgqQAAgpAdgfQAfgdApAAQArAAAdAdQAeAfABApQgBAqgeAeQgdAfgrAAQgpAAgfgfgAgygyQgWAVAAAdQAAAeAWAVQAVAWAdgBQAeABAWgWQAUgVAAgeQAAgdgUgVQgWgVgegBQgdABgVAVg");
	this.shape_4.setTransform(-0.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBaQgUgMgHgUQgCgGADgFQADgGAGgCQAFgCAGADQAFADADAFQAEALALAHQALAGAPAAQAQABANgKQAMgKAAgNQAAgbgqgEQgcgDgRgPQgQgQAAgWQAAgXASgPQASgQAaAAQATgBAQALQAQAKAHARQACAGgDAFQgCAHgGABQgGADgGgDQgFgCgCgHQgDgHgJgFQgIgFgKgBQgNABgKAGQgJAIAAAKQAAALAJAHQAJAHAPACQApAEARAUQAMAOAAAWQAAAagVASQgVATgdAAQgYAAgTgNg");
	this.shape_5.setTransform(-21.9,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BmQgGAAgEgEQgFgEAAgGIAAiuQAAgHAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAHIAACfIBkAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAg");
	this.shape_6.setTransform(20.6,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJBiQgFgEAAgHIAAitQAAgHAFgEQAEgEAFAAQAHAAADAEQAFAEAAAHIAACtQAAAHgFAEQgDAEgHABQgFgBgEgEg");
	this.shape_7.setTransform(33.2,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABnQgGgBgFgEQgEgEAAgHIAAitQAAgHAEgEQAFgEAGAAIAqAAQAqAAAeAdQAeAfAAApQAAAqgeAeQgeAfgqAAgAgxBIIAbAAQAeABAVgWQAVgVAAgeQAAgdgVgVQgVgVgegBIgbAAg");
	this.shape_8.setTransform(47,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-55,-10.9,110,21.9), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-150,-213,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-150,-213,300,426), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AowBHIAAgXIhUAAIAAAXIgPAAIAAgmIAMAAQAIgKACglIABg0IBMAAIAABjIAQAAIAAAmgApvgNQgBAjgGALIA3AAIAAhUIgvAAgAJRAmQgLgMAAgRQAAgRALgMQALgLASAAQAQgBALALQALAMAAAPIAAAHIg+AAQABALAHAGQAIAGALAAQAOAAAKgJIAIAKQgMAMgVAAQgTAAgMgLgAJWACIAuAAQgDgUgTAAQgVAAgDAUgAEQAxIACgOIAEAAQAGABACgGQACgFABgPIABgnIA/AAIAABNIgQAAIAAhAIghAAIAAAaQgBAWgEAIQgGAJgNAAgACPABQAAgtAWgOQAIgFASgDIAYgEIADANIgbAFQgQACgHAHQgIAIgCATQAKgOASAAQARAAAKALQAKAMAAARQAAARgLALQgLALgRAAQgpABAAgxgACmgJQgHAHgBALQAAAMAIAIQAGAGAMAAQAKAAAHgGQAHgIAAgLQAAgMgHgHQgHgHgKAAQgLAAgHAHgAgwAmQgLgLAAgTQAAgPAKgMQAMgMASAAQAWAAALAPIgKAKQgHgLgPAAQgLAAgIAHQgGAIAAAKQAAANAGAHQAIAIALgBQAOABAIgLIAKAJQgKAPgWAAQgTAAgLgLgAk7AmQgKgLgBgTQABgQAKgMQALgLAPAAQASgBAJAOIAAgLIAPAAIAABNIgPAAIAAgMQgJANgSAAQgPAAgLgLgAkvgKQgHAIAAAKQAAANAHAHQAHAIALgBQAKABAHgIQAHgHgBgNQABgKgHgIQgHgHgKAAQgLAAgHAHgAnyAlIAJgJQAIAJAQAAQAUAAAAgNQAAgLgRABIgQAAIAAgLIANAAQARAAAAgKQgBgMgPAAQgOABgJAIIgJgJQAMgMAVAAQAdgBAAAXQAAAMgLAEQAPAFAAANQgBALgIAHQgKAGgQAAQgWABgLgNgAHIAwIAAhNIAQAAIAAA/IAeAAIAAg/IAQAAIAAA/IAgAAIAAg/IAOAAIAABNgAF3AwIAAhNIAQAAIAAAcIAQAAQAhAAgBAYQABAZghAAgAGHAjIAQAAQARAAAAgMQAAgNgRAAIgQAAgADxAwIAAhNIAQAAIAABNgAAeAwIAAhNIAOAAIAAAcIARAAQAhAAAAAYQAAAZghAAgAAsAjIARAAQARAAAAgMQAAgNgRAAIgRAAgAhcAwIAAg4IgoA4IgOAAIAAhNIAPAAIAAA3IAog3IAPAAIAABNgAjMAwIAAhAIgbAAIAAgNIBFAAIAAANIgbAAIAABAgAlmAwIAAgiIgoAAIAAAiIgOAAIAAhNIAOAAIAAAeIAoAAIAAgeIAPAAIAABNgAoRAwIAAhNIAPAAIAABNgADygxQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAEgDAEQgDACgEAAQgEAAgDgCgAoQgxQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAEgDAEQgDACgEAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-66,-7.1,132,14.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AwVDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAMAgrAAAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-124.5,-20,249,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#175CA6","#1253A1"],[0,1],0.1,-298.8,-0.1,298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:114.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-114.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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


(lib.bgImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p2
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-175.9,404.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.2,y:251.6},15,cjs.Ease.cubicOut).wait(11));

	// p1
	this.instance_1 = new lib.p1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(481.2,-516.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:202.1,y:-280.5},15,cjs.Ease.cubicOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348,-814.3,1159.7,1373.9);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-64.9,-259.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(45));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,266.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.801},15).wait(45));

	// btn
	this.instance_2 = new lib.btn("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,220.7,1,1,0,0,0,-0.4,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(40));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_30 = new cjs.Graphics().p("AzTCQIAAkfMAmnAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_graphics_30,x:-3.5,y:164.8}).wait(30));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-90.1,192.9);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({y:164.9},10,cjs.Ease.cubicOut).wait(20));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("AzTCQIAAkfMAmnAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:-3.5,y:126.8}).wait(35));

	// t2
	this.instance_4 = new lib.t2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14.8,153.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:128.5},10,cjs.Ease.cubicOut).wait(25));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_20 = new cjs.Graphics().p("AzTCQIAAkfMAmnAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_2_graphics_20,x:-3.5,y:95.5}).wait(40));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.5,121.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({y:97.6},10,cjs.Ease.cubicOut).wait(30));

	// dev
	this.instance_6 = new lib.dev_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-196.9,77);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:0.2,y:-87},15,cjs.Ease.cubicOut).wait(40));

	// bgImg
	this.instance_7 = new lib.bgImg("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348,-763.3,1159.7,1373.9);


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
p.nominalBounds = new cjs.Rectangle(-48,-163.4,1159.7,1373.9);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"}
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