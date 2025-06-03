(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,208);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,222);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,208);// helper functions:

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
	this.shape.graphics.f("#013A5E").s().p("AqQFJIAAhpIAOAAIAAALQAFgHAFgCQAGgDAIAAQAJAAAIAEQAIAFAEAIQAEAJAAALQAAAKgEAJQgEAIgIAFQgIAEgJAAQgIAAgGgDQgFgCgFgHIAAAtgAp4DuQgFAEgCAFQgDAFAAAIQAAAHADAFQACAFAFAEQAGADAGAAQAGAAAFgDQAEgDAEgGQACgGAAgGQAAgHgCgGQgEgGgEgDQgFgDgGAAQgGAAgGADgAOkEnIgDgDIgBgFIABgFIADgDIAFgBIAFABIADADIACAFQAAADgCACIgDADIgFABIgFgBgAGxEoIACgNIAEABQAEAAACgCQACgCABgFIACgzIA4AAIAABHIgNAAIAAg7IgeAAIgBAZQAAAMgCAIQgCAIgFAEQgEADgJAAgAFvEkQgIgGgFgIQgFgJAAgJQAAgKAFgJQAFgIAIgGQAJgEAKAAQALAAAIAEQAIAGAFAIQAFAJAAAKQAAAJgFAJQgFAIgIAGQgIAEgLAAQgKAAgJgEgAF3DvQgGADgDAFQgDAGAAAHQAAAHADAFQAEAGAFACQAEADAHAAQAHAAAEgDQAFgCAEgGQADgFAAgHQAAgHgDgGQgDgFgGgDQgEgDgHAAQgHAAgEADgAB6EkQgJgGgEgIQgFgIAAgKQAAgLAFgIQAEgIAJgGQAIgEALAAQAKAAAIAEQAJAFAEAJQAFAIAAALQAAAKgFAIQgEAJgJAFQgIAEgKAAQgLAAgIgEgACBDvQgFADgDAFQgDAGAAAHQAAAHADAFQAEAGAEACQAGADAGAAQAGAAAFgDQAFgCADgGQADgFAAgHQAAgHgDgGQgCgFgGgDQgFgDgGAAQgGAAgGADgAlGEkQgHgFgFgIQgEgJAAgKQAAgLAEgJQAFgIAHgFQAJgEAIAAQAIAAAGADQAFACAFAHIAAgLIAOAAIAABHIgOAAIAAgLQgFAHgFACQgGADgIAAQgIAAgJgEgAk9DuQgFADgDAGQgDAFAAAIQAAAHADAFQADAGAFADQAEADAHAAQAGAAAFgDQAGgEACgFQADgFAAgHQAAgIgDgFQgCgFgGgEQgFgDgGAAQgHAAgEADgAnVEkQgJgGgEgIQgFgIAAgLQAAgKAFgIQAEgJAJgEQAIgFALAAQAKAAAHADQAIAEAFAGIgJAJQgDgEgGgDQgFgCgHAAQgGAAgGACQgEADgEAGQgDA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CgIAAgKIABgeIA4AAIAAA6IALAAIAAAegAhyhbQAAAMgCAGIgDAKIAiAAIAAguIgdAAgACXg2QgJgGgEgHQgFgJAAgKQAAgJAFgKQAFgJAIgEQAIgFALAAQAKAAAIAEQAHADAFAGIgIAIQgEgFgGgCQgGgCgFAAQgGAAgGACQgFADgDAEQgCADgCAIIAjAAIAAAKIgjAAQABAKAHAFQAFAFALAAQAHAAAEgCQAGgCAEgFIAIAIQgFAHgHADQgJADgJAAQgKAAgJgFgAgbgyIACgMIADAAQAEAAACgCQACgDABgEIACgyIA4AAIAABGIgOAAIAAg6IgeAAIgBAYQAAALgBAKQgCAHgFAEQgFAEgIAAgAmOg2QgHgEgFgJQgEgIAAgLQAAgKAEgJQAEgIAIgFQAIgFAJAAQAIAAAGADQAGADAEAGIAAgKIAOAAIAABGIgOAAIAAgKQgEAGgGADQgHADgHAAQgIAAgJgFgAmGhrQgEADgDAFQgDAGAAAHQAAAIADAFQACAFAFADQAGADAGAAQAGAAAFgDQAFgDADgFQADgFAAgIQAAgHgDgGQgEgGgEgCQgFgDgGAAQgGAAgGADgAtFg0QgIgDgEgGIAHgIQAFAEAFACQAGADAGAAQAJAAAEgDQAFgDAAgFQAAgKgPAAIgPAAIAAgKIAMAAQAIAAADgDQAEgDAAgEQAAgFgDgDQgDgCgIAAQgNAAgIAIIgHgJQAEgFAIgDQAHgDAJAAQAOAAAHAFQAHAGAAAJQAAAFgDAFQgDAEgFACQAHACADAEQADAEAAAGQAAAHgDAFQgEAEgHADQgHADgKAAQgKAAgHgDgAO/g2QgIgFgFgIQgFgJAAgKQAAgKAFgJQAFgJAIgEQAJgFAKAAQALAAAIAFQAHAEAGAJQAEAJAAAKQAAAKgEAJQgFAIgIAFQgIAFgLAAQgKAAgJgFgAPGhrQgEADgEAGQgDAFAAAHQAAAIADAFQAEAGAEACQAGADAGAAQAGAAAFgDQAFgCADgGQADgFAAgIQAAgHgDgFQgDgGgFgDQgFgDgGAAQgGAAgGADgAG3g2QgJgFgEgIQgEgJAAgKQAAgKAEgJQAFgIAIgFQAJgFAKAAQAKAAAJAFQAIAEAFAJQAFAJAAAKQAAAKgFAJQgFAIgIAFQgJAFgKAAQgKAAgJgFgAG/hrQgFADgDAGQgDAF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gIgFgFgIQgEgIAAgLQAAgKAEgJQAFgIAIgFQAJgFAKAAQAJAAAJAEQAIAEAEAGIgJAIQgEgFgFgCQgGgCgFAAQgHAAgFADQgGADgCAFQgDAGAAAHQAAAGACAGQADAFAFAEQAGADAHAAQAFAAAGgCQAGgEADgEIAJAJQgFAHgHADQgHAEgLAAQgKAAgJgFgAK7jjQgIgFgFgIQgFgIAAgLQAAgKAFgJQAFgJAIgEQAKgFAKAAQAIAAAJADQAIAEAEAGIgIAIQgDgEgGgDQgFgCgHAAQgHAAgEACQgFACgDAFQgEAFgBAGIAjAAIAAAKIgjAAQACAJAGAGQAHAFAJAAQAGAAAGgCQAFgDAEgEIAIAIQgEAGgIAEQgHADgKAAQgLAAgJgFgAJkjjQgJgGgDgHQgFgIAAgLQAAgLAFgIQADgIAJgFQAIgFAIAAQAHAAAHADQAHADADAGIAAgKIAOAAIAABGIgOAAIAAgKQgDAGgHADQgGADgIAAQgJAAgHgFgAJskYQgFACgDAGQgDAGAAAHQAAAGADAHQADAGAFACQAEADAHAAQAGAAAFgDQAFgCADgGQADgHAAgGQAAgHgDgGQgDgGgFgCQgFgDgGAAQgHAAgEADgAHHjjQgIgDgFgIQgEgHgBgKIgMAAIAAAfIgNAAIAAhGIANAAIAAAcIAMAAQACgJAEgHQAGgGAGgEQAIgEAJAAQAJAAAJAFQAJAFAEAIQAEAJAAAKQAAAKgEAJQgFAJgIAEQgJAFgJAAQgKAAgHgFgAHNkYQgFADgDAFQgCAGAAAHQAAAGACAHQADAFAFADQAFADAGAAQAGAAAFgDQAFgDACgGQADgEAAgIQAAgIgDgFQgCgFgFgDQgFgDgGAAQgGAAgFADgAE+jfIACgMIAEAAQADAAACgCQACgCABgFIACgyIA5AAIAABGIgOAAIAAg6IgdAAIgBAYQAAAMgDAJQgBAHgFAEQgEAEgJAAgAgHjjQgIgEgFgJQgFgIAAgLQAAgLAFgIQAEgJAJgEQAHgFAKAAQAJAAAIAEQAIAFAFAIQAEAIAAAJIAAAHIg3AAQABAGADAFQADAEAEADQAGADAGAAQAGAAAHgDQAFgCAEgEIAIAJQgEAFgJAEQgIADgKAAQgKAAgIgFgAAfkJQgCgJgGgFQgFgFgIAAQgJAAgEAFQgHAFAAAJIApAAIAAAAgAoAjjQgJgFgEgIQgFgIAAgLQAAgKAFgJQAEgHAJgGQAJgFAKAAQAJAAAJAFQAJAGAEAHQAFAIAAALQAAALgFAIQgEAIgJAFQgIAFgKAAQgLAAgIgFgAn5kYQgGADgCAFQgDAGAAAHQAAAHADAGQACAEAGAEQAGADAGAAQAGAAAFgDQAGgEACgEQADgGAAgHQAAgHgDgGQgDgFgFgDQgFgDgGAAQgGAAgGADgAt3jjQgIgFgGgIQgEgIAAgLQAAgLAEgIQAFgJAIgEQAJgFAJAAQAKAAAIAEQAIAFAEAIQAFAIAAAJIgBAHIg3AAQABAGADAFQADAEAFADQAGADAGAAQAGAAAGgDQAGgCAEgEIAHAJQgDAFgKAEQgIADgJAAQgLAAgIgFgAtRkJQgBgJgGgFQgFgFgJAAQgJAAgFAFQgFAFgCAJIAqAAIAAAAgAPwjgIgUgaIgTAaIgQAAIAbgkIgbgiIARAAIATAaIATgaIAQAAIgaAjIAaAjgAOjjgIAAhGIAOAAIAABGgAI6jgIAAgdQgIAEgLAAQgIAAgGgCQgGgDgEgGQgDgGAAgIIAAgUIAOAAIAAATQAAAHAEAEQAEADAIAAQAKAAAGgEIAAgdIAOAAIAABGgAEtjgIgSgcIgCgCIgDAAIgLAAIAAAeIgOAAIAAhGIAOAAIAAAbIALAAIADAAIAUgbIAQAAIgZAhIAZAlgADYjgIAAgzIglAzIgNAAIAAhGIANAAIAAAzIAlgzIANAAIAABGgABejgIAAhGIAfAAQANAAAHAFQAGAFAAAIQAAAHgCADQgCAEgFACQAGACADAEQAEAEAAAGQAAAGgDAFQgDAEgGADQgEACgJAAgABsjqIASAAQAIAAAEgDQADgDAAgFQAAgKgPAAIgSAAgABskIIAPAAQAHAAAEgDQAEgCAAgFQAAgKgPAAIgPAAgAg6jgIAAgfIgjAAIAAAfIgOAAIAAhGIAOAAIAAAcIAjAAIAAgcIAOAAIAABGgAi+jgIAAg6IgYAAIAAgMIA+AAIAAAMIgYAAIAAA6gAjojgIgUgeIgDAAIgLAAIAAAeIgOAAIAAhGIAOAAIAAAbIALAAIADAAIAUgbIAQAAIgZAhIAZAlgAqKjgIAAg6IgjAAIAAA6IgOAAIAAhGIA/AAIAABGgAr9jgIAAgzIglAzIgMAAIAAhGIANAAIAAAzIAlgzIAMAAIAABGgAsak1QgGgDgDgEQgDgGgBgGIALAAQABAFADADQAEADAFAAQAGAAADgDQAEgDABgFIALAAQgBAGgDAGIgJAHQgGADgGAAQgFAAgGgDgAOmk3QgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBIAEgBIAFABIADAEIABAEIgBAEIgDAEIgFABIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-108.9,-32.9,217.9,65.9), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#013A5E").s().p("AkKBZIAHgRQAKAFAMAAQALABAGgHQAGgGAHgPIhCiOIAYAAIA1B3IAuh3IAWAAIg8CUQgIAUgMALQgLAJgRAAQgRAAgNgHgAkyBXIAAgkIh0AAIgEAkIgSAAIAAg3IAQAAQAUgigBhBIAAgZIBmAAIAAB8IAXAAIgEA3gAmEg1QAAA2gRAfIBNAAIAAhpIg8AAgACkAhQgWgUAAghQAAggAVgVQATgWAdAAQAfAAASAWQATAVgBAhIAAAIIhxAAQACAVAOANQANAMAVAAQAbABASgVIAOANQgYAbgkAAQgeAAgUgWgAEBgdQgDgVgLgNQgLgOgVAAQgSAAgOAOQgMAOgCAUIBcAAIAAAAgApTAgQgVgWAAgeQAAgeAVgXQAWgWAgAAQAhAAAUAWQAWAVAAAgQAAAegWAWQgVAWghABQgfAAgWgXgApDg7QgPAPAAAYQAAAXAPAQQAQAQAWAAQAYAAAOgQQAPgRAAgWQAAgXgQgQQgPgRgXAAQgWAAgPARgALvAzIAAhxIhXBxIgUAAIAAiPIAVAAIAABxIBWhxIAVAAIAACPgAJHAzIgzhBIgfAeIAAAjIgVAAIAAiPIAVAAIAABTIBPhTIAbAAIg9A+IA+BRgAGXAzIAAg6QgJAFgOADQgNAEgMAAQgVAAgOgKQgNgLAAgWIAAg2IAVAAIAAA0QABANAHAGQAIAIAOAAQAaAAATgOIAAhBIAVAAIAACPgAheAzIAAiPIAVAAIAAB8IBGAAIAAh8IAVAAIAAB8IBGAAIAAh8IAWAAIAACPgAqcAzIAAh8IhSAAIAAB8IgVAAIAAiPIB9AAIAACPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-77.2,-9.6,154.4,19.2), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#013A5E").s().p("ALXBPQgWgWAAgfQAAgdAWgXQAWgWAfAAQAhAAAVAWQAVAVAAAfQAAAfgVAWQgWAWggAAQggAAgVgWgALmgNQgPAPAAAYQAAAYAQAQQAPAQAWAAQAXAAAPgQQAPgRAAgXQAAgXgPgQQgPgQgXAAQgXAAgPAQgAAxBPQgVgXAAgeQAAgdAWgXQAVgWAgAAQAgAAAVAWQAWAVAAAfQAAAfgWAWQgVAWggAAQggAAgWgWgABBgNQgPAPAAAYQAAAXAPARQAQAQAWAAQAXAAAPgQQAPgRAAgXQAAgXgQgQQgPgQgWAAQgXAAgPAQgAtpBPQgWgWAAgfQAAgeAWgWQAWgWAfAAQAgAAAWAWQAVAVAAAfQAAAfgWAWQgVAWggAAQggAAgVgWgAtagNQgPAPAAAYQAAAYAQAQQAPAQAWAAQAXAAAPgQQAPgRAAgXQAAgXgPgQQgQgQgWAAQgXAAgPAQgAQpBiIAAiPIAWAAIAACPgAODBiIAAiPIBGAAQAVAAANAKQANAKAAAQQAAAWgYAKQAfAJAAAaQAAATgOAKQgOALgYAAgAOYBPIAwAAQAQAAAIgGQAJgGAAgMQAAgKgJgGQgJgGgSAAIgtAAgAOYAQIAtAAQANAAAIgGQAIgGAAgKQAAgJgIgGQgIgGgNAAIgtAAgAKOBiIAAg/IhTAAIAAA/IgVAAIAAiPIAVAAIAAA9IBTAAIAAg9IAWAAIAACPgAHYBiIAAhxIhWBxIgVAAIAAiPIAWAAIAABxIBVhxIAVAAIAACPgAEABiIAAh8IgzAAIAAgTIB9AAIAAATIg0AAIAAB8gAgXBiIg0hCIgeAfIAAAjIgVAAIAAiPIAVAAIAABSIBPhSIAaAAIg8A9IA9BSgAjPBiIAAiPIAWAAIAACPgAkMBiIAAg/IhTAAIAAA/IgWAAIAAiPIAWAAIAAA9IBTAAIAAg9IAVAAIAACPgAoXBiIAAiPIAVAAIAACPgAq9BiIAAiPIBFAAQAWAAANAKQAMAJAAARQAAAWgXAKQAfAJAAAaQAAASgOALQgOALgYAAgAqoBPIAwAAQAQAAAIgGQAJgGAAgMQAAgKgJgGQgJgGgSAAIgtAAgAqoAQIAtAAQANAAAIgGQAIgGAAgKQAAgJgIgGQgIgGgNAAIgtAAgAu5BiIAAhYIhxAAIAABYIgVAAIAAjCIAVAAIAABWIBxAAIAAhWIAWAAIAADCgAQohNIAAgXIAYAAIAAAXgAjQhNIAAgXIAZAAIAAAXgAoYhNIAAgXIAYAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-108.8,-10.1,217.7,20.3), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#013A5E").s().p("AIGDcIjDkRIAAERIhrAAIAAlYIAxhfIBkAAICZDXIAAjXIBrAAIAAG3gAhKDcIAAiDIihk0ICPAAIBcDAIBcjAICOAAIihE0IAACDgApwDcIAAhqIDYjiIjNAAIAAhrIFbAAIAyBfIjjDtIDjAAIAABrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-62.5,-22,125,44), null);


(lib.line_g_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#157A84","#1CA4B1"],[0,1],-143.8,109.7,143.8,-109.6).s().p("AwcUPQifgriChiQiHhmhWiUQhViUgVioQgUijAqieQArifBiiCQBmiHCUhVIaHvHQCUhWCogVQCjgUCeArQCfArCDBiQCHBmBVCUQBWCUAUCoQAUCigqCfQgrCfhiCBQhmCHiUBWI6HPHQiUBVioAVQg1AGg1AAQhsAAhrgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_g_1, new cjs.Rectangle(-167.5,-132.3,335.1,264.7), null);


(lib.line_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#03B6EF","#0286B0"],[0,1],-156.9,90.6,156.9,-90.6).s().p("AwcUPQifgriChiQiHhmhWiUQhViUgVioQgUijAqieQArifBiiCQBmiHCUhVIaHvHQCUhWCogVQCjgUCeArQCfArCDBiQCHBmBVCUQBWCUAUCoQAUCigqCfQgrCfhiCBQhmCHiUBWI6HPHQiUBVioAVQg1AGg1AAQhsAAhrgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_b_1, new cjs.Rectangle(-167.5,-132.3,335.1,264.7), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AitA5IAEgJQAEADAHAAQAFAAAEgDQAEgEACgHIghhHIAMAAIAaA8IAYg8IALAAIgeBKQgFALgGAFQgGAEgHAAQgJAAgHgDgAD+AmIAAgPIAMAAIAAAPgADZAmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgABtAmIAAg+IgaAAIAAgKIA/AAIAAAKIgaAAIAAA+gAA3AmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgAgkAmIAAg+IgpAAIAAA+IgKAAIAAhIIA+AAIAABIgAjEAmIgmgvIgVAUIAAAbIgKAAIAAhhIAKAAIAAA6IA4g6IAPAAIgqArIArA2gAEBAKIgDhFIAMAAIgDBFg");
	this.shape.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-26.6,-4.7,53.3,12.1), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("ArJDIQhTAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BTAAIWTAAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-91.3,-20,182.6,40), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-88,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-88,-104,176,208), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-95,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-95,-111,190,222), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-96,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-96,-104,192,208), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F1F1").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-31.4,-1.6,0.83,0.83,0,0,0,-0.2,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#013A5E").s().p("AiYBbIAAgiIhwAAIAAiQIAqAAIAABtIAxAAIAAhtIAqAAIAABtIATAAIgFBFgAhFAnQgVgUgBghQAAggAVgWQAVgWAeAAQAiAAASAXQASAXAAAhIAAAKIhkAAQACANAKAIQAJAHAOAAQASAAARgOIAXAUQgWAbgkAAQghAAgWgVgAAMgaQgCgOgIgIQgIgJgNAAQgLAAgJAJQgJAIgCAOIA+AAIAAAAgADdA5IAAgrIAsAAIAAArgACVA5IAAgrIAsAAIAAArgABNA5IAAgrIAsAAIAAArg");
	this.shape.setTransform(56.6,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-83.1,-19.7,166.2,39.4), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzID/IAAjlMAmRAAAIAADlg");
	mask.setTransform(0,25.5);

	// t2_3
	this.instance = new lib.t2_3();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,18);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:38.4},10,cjs.Ease.cubicInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AzIBzIAAjlMAmRAAAIAADlg");
	mask_1.setTransform(0,-1.6);

	// t2_2
	this.instance_1 = new lib.t2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-23.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:-2.2},10,cjs.Ease.cubicInOut).wait(6));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AzIDXIAAmtMAmRAAAIAAGtg");
	mask_2.setTransform(0,-48.3);

	// t2_1
	this.instance_2 = new lib.t2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.9,-90.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-49.4},10,cjs.Ease.cubicInOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:81.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-81.3},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},10).wait(1));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({alpha:1},10).wait(71));

	// btn
	this.instance_2 = new lib.btn("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.6,70,1.05,1.05,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(256));

	// t2
	this.instance_3 = new lib.t2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(271));

	// box2
	this.instance_4 = new lib.box2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206,-352.5,1,1,75);

	this.instance_5 = new lib.box1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-56,-166.2);

	this.instance_6 = new lib.box3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-57,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},75).to({state:[{t:this.instance_6}]},60).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:-56,y:-159},15,cjs.Ease.cubicOut).to({_off:true},75).wait(181));

	// box1
	this.instance_7 = new lib.box1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-257.4,344.5,1,1,75,0,0,0.1,0.1);

	this.instance_8 = new lib.box2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(35.4,212.4);

	this.instance_9 = new lib.box3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(34,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_8}]},45).to({state:[{t:this.instance_7}]},60).to({state:[{t:this.instance_9}]},30).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:0,regY:0,rotation:0,x:35,y:204},15,cjs.Ease.cubicOut).to({_off:true},45).wait(60).to({_off:false},0).to({_off:true},30).wait(121));

	// line_b_1
	this.instance_10 = new lib.line_b_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-319.1,397.8);

	this.instance_11 = new lib.line_g_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-43.9,237.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},15).to({state:[{t:this.instance_11}]},45).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_10}]},30).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-43.9,y:237.4},15,cjs.Ease.cubicOut).to({_off:true},45).wait(60).to({_off:false},0).wait(30).to({scaleX:0.94,scaleY:0.94,x:-43.1,y:236.6},0).wait(121));

	// line_g_1
	this.instance_12 = new lib.line_g_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(322.4,-400.8);

	this.instance_13 = new lib.line_b_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(40,-236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},15).to({state:[{t:this.instance_13,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:40,y:-236}}]},75).to({state:[{t:this.instance_13,p:{regX:0.3,regY:-0.2,scaleX:0.94,scaleY:0.94,x:36.8,y:-233.6}}]},60).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:40,y:-236},15,cjs.Ease.cubicOut).to({_off:true},75).wait(181));

	// bg
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.6,-533.1,976.6,1063.3);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,66.9,976.6,1063.3);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"}
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