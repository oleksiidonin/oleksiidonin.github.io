(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,338);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AjtBiIAAgEIADABIADAAQAFABACgDQACgCADgHIAEgKIgVg3IAEAAIATAyIAAAAIATgyIAEAAIgZBCQgDAIgDACQgEAEgGAAgAtfBiIAAgEIADABIADAAQAEABADgDIAFgJIAEgKIgWg3IAFAAIATAyIASgyIAFAAIgaBCQgDAIgDACQgDAEgGAAgApbBiIAAhPIADAAIAAAMIABAAIADgHIAHgEQAEgCAFAAQAMAAAFAHQAGAHAAAOQAAAOgGAIQgGAHgLAAQgJAAgEgEQgFgEgBgEIgBAAIABAjgApSAcQgFAGAAAMIAAABQAAAMAFAHQAEAFAJAAQAJABAGgHQAFgHAAgMQAAgZgTABQgKAAgEAGgAm1BdIAAgTIgsAAIAAATIgDAAIAAgXIADAAQAHgJAEgNQADgNAAgQIAaAAIAAAzIAIAAIAAAXgAncBGIAgAAIAAgvIgTAAQgBAcgMATgAPLBKIgBgDIABgDIACgBIADABIABADIgBADIgDABgANWBHQgFgDgCgHQgDgGAAgIIgSAAIAAAbIgEAAIAAg3IAEAAIAAAYIASAAIADgMQADgHAEgCQAFgEAHAAQAIAAAFAEQAGAFABAFQACAGAAAJQAAAIgCAGQgDAHgEADQgEAEgJAAQgIAAgEgEgANYAYIgGAJQgCAIAAAGQAAAFACAHQACAGAEADQAEADAGAAQAHAAADgDQAFgDABgGQACgFAAgHQAAgIgCgGQgBgEgEgFQgEgCgHAAQgGAAgEACgALTBHQgFgDgCgHQgCgGAAgIIgTAAIAAAbIgEAAIAAg3IAEAAIAAAYIATAAQAAgGACgGQAEgIAEgBQAEgEAIAAQAIAAAEAEQAFADACAHQADAHAAAIQAAAGgDAIQgCAGgFAEQgFAEgIAAQgHAAgFgEgALVAYQgEAFgBAEQgCAGAAAIQAAAHACAFQABAGAEADQAEADAHAAQAGAAAEgDQADgDADgGQABgFAAgHQAAgHgBgHQgDgGgDgDQgEgCgGAAQgGAAgFACgAG/BHQgFgEAAgHQAAgIAHgEQAHgEANgBIAKgBIAAgEQAAgIgDgFQgEgDgHAAIgIABIgIACIgBgDIAIgDIAJgBQAJAAAFAFQAEAEAAAKIAAAlIgDAAIgBgKIAAAAQgCAEgFAEQgFADgIAAQgHAAgFgEgAHVAuQgMABgEADQgGADAAAHQAAAFADADQADADAHAAQAKABAEgGQAFgGAAgJIAAgFgADJBHQgFgDgDgHQgDgGAAgIQAAgNAGgJQAHgHAMAAQAIAAAFAEQAGAEACAFQACAIAAAIQAAAHgCAHQgDAHgGADQgFAEgIAAQgIAAgFgEgADHAcQgFAHAAAMQAAALAFAHQAFAGAKAAQAHAAAEgDQAFgEACgFQACgGAAgGQAAgGgCgIQgCgFgEgEQgEgCgHAAQgLAAgFAGgABWBHQgGgDgDgHQgDgGAAgIQAAgJAEgHQADgHAGgCQAGgEAIAAIAHABIAHACIgBADIgHgCIgGAAQgHAAgFACQgFAEgDAFQgCAGAAAIQAAAHACAFQACAGAFADQAEADAIAAIAHgBIAHgCIAAAEIgGACIgIABQgJAAgFgEgAh2BHQgEgEAAgHQAAgIAHgEQAHgEAMgBIAKgBIAAgEQAAgIgDgFQgEgDgGAAIgIABIgJACIgBgDIAJgDIAJgBQAJAAAEAFQAFAEAAAKIAAAlIgEAAIAAgKIgBAAQgCAEgFAEQgEADgIAAQgIAAgFgEgAhgAuQgLABgFADQgGADAAAHQAAAFADADQAEADAGAAQAJABAGgGQAEgFAAgKIAAgFgAmcBHQgGgDgCgHQgDgGAAgIQAAgNAHgJQAHgHALAAQAIAAAFAEQAFADADAGQADAIAAAIQAAAHgDAHQgDAHgFADQgFAEgJAAQgIAAgFgEgAmdAcQgFAHAAAMQAAALAEAHQAGAGAJAAQAIAAAEgDQAEgDACgGQADgGAAgGQAAgGgCgIQgDgFgEgEQgEgCgHAAQgKAAgFAGgAoUBHQgGgDgCgHQgDgGAAgIQAAgNAGgJQAHgHALAAQAJAAAFAEQAEADAEAGQACAIAAAIQAAAIgDAGQgCAHgGADQgFAEgIAAQgIAAgFgEgAoWAcQgFAHAAAMQAAALAFAHQAFAGAKAAQAHAAAEgDQAEgDADgGQACgGAAgGQAAgGgCgIQgCgFgEgEQgFgCgHAAQgKAAgFAGgAvJBHQgFgDgDgHQgDgHAAgHQAAgOAHgIQAHgHALAAQAIAAAFAEQAFADADAGQADAIAAAIQAAAIgDAGQgCAGgGAEQgFAEgJAAQgIAAgFgEgAvKAcQgGAHAAAMQAAAKAFAIQAGAGAJAAQAIAAAEgDQAEgDACgGQACgFAAgHQAAgIg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IAJgDIAJgBQAKAAADAEQAFAGAAAJIAAAlIgDAAIgBgKQgDAFgEADQgFADgIAAQgJAAgEgDgAPwgxQgKABgHADQgGAEAAAHQAAAEAEADQAEAEAFAAQALgBAEgFQAFgFAAgJIAAgGgALkgXQgGgEgDgGQgCgIAAgIQAAgNAGgHQAHgIALAAQAJAAAFADQAFAFACAGQADAFAAAJQAAAKgDAGQgDAGgFAEQgFADgIAAQgIAAgFgDgALihDQgFAHAAALQAAAMAFAGQAEAIALAAQAHAAAEgEQAEgCADgHQACgEAAgJQAAgIgCgEQgCgFgEgEQgEgDgIgBQgJABgGAGgAJwgXQgFgDgDgHQgDgHAAgIQAAgIADgIQAEgGAGgEQAFgDAJAAIAHABIAGABIgBAEIgGgCIgGgBQgHABgFADQgFADgDAGQgDAFAAAIQAAAGADAGQACAGAEADQAGAEAGAAIAIgBIAHgCIAAAEIgHABIgHABQgJAAgGgDgAEDgXQgGgFgCgFQgDgHAAgJQAAgMAHgIQAHgIALAAQAIAAAFADQAFAEADAHQADAGAAAIQAAAJgDAHQgCAFgGAFQgFADgJAAQgIAAgFgDgAEChDQgFAHAAALQAAAMAEAGQAFAIAKAAQAHAAAFgEQAEgCACgHQADgFAAgIQAAgFgCgHQgDgGgEgDQgEgDgHgBQgKABgFAGgABHgXQgFgEgDgGQgDgGAAgKQAAgNAHgHQAGgIAMAAQAIAAAFADQAFAEADAHQACAFAAAJQAAAIgCAIQgEAGgEAEQgFADgJAAQgIAAgFgDgABFhDQgFAHAAALQAAAMAFAGQAEAIALAAQAIAAADgEQAFgCACgHQACgHAAgGQAAgIgCgEQgCgGgEgDQgEgDgHgBQgKABgGAGgAnZgXQgFgDgDgHQgDgHAAgIQAAgHADgIQACgGAGgEQAEgEAJAAQAHAAAFADQAEADACAGQADAHAAAHIAAADIgpAAQAAAMAFAGQAGAGAKABIAJgBIAIgDIAAAEIgIACIgJABQgJAAgFgDgAm8g0QAAgJgEgGQgDgHgJAAQgIABgGAFQgFAGgBAKIAkAAIAAAAgApXgXQgEgFAAgGQAAgJAHgEQAGgEANgBIALAAIAAgFQAAgIgEgEQgEgFgGAAIgIABIgIAEIgCgEIAJgDIAJgBQAJAAAEAEQAFAGAAAJIA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AAgaIgJAGQgEABgGAAQgJAAgFgFQgEgEAAgJIAAgSIAEAAIAAASQAAAIAEADQADAEAHAAQAHgBAEgCQAFgBADgDIAAgaIAEAAIAAA3gApwgVIAAgbIgkAAIAAAbIgEAAIAAg3IAEAAIAAAZIAkAAIAAgZIAFAAIAAA3gArggVIAAgzIgiAzIgFAAIAAg3IAEAAIAAAzIAigzIAEAAIAAA3gAtfgVIAAg0IgkAAIAAA0IgEAAIAAg3IAsAAIAAA3gAylgVIAAgCIAHgBIAAhEIgHgBIAAgCIATAAIAAACIgHABIAABEIAHABIAAACgAkchXQgDgDgBgIIAEAAQAAAEADAEQADADAFAAQAGAAADgDQADgDAAgFIAEAAQAAAHgEAEQgEADgIAAQgHAAgEgDgARPhaIgBgDIABgCIACgBQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABACIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAgAH9haIgBgDIABgCIACgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIABACIgBADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgCgAF0haIgBgDIABgCIACgBIADABIAAACIAAADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-119.3,-9.9,238.8,19.8), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFyD3QgSgNgIgUQgJgUAAgbQAAgqAVgZQAUgZAmAAQAaAAARAMQARANAIAUQAIATAAAcQAAAagJAVQgJAVgRAMQgRALgaAAQgZAAgRgLgAFtBsQgQAVAAAmQAAAkAPAWQAQAWAgAAQAWAAAPgKQAOgLAHgSQAHgSAAgXQAAgWgHgTQgHgTgNgKQgNgKgXAAQgfAAgSAVgAv8D3QgRgMgJgVQgJgUAAgbQAAgqAVgZQAVgZAlAAQAaAAAQAMQARAMAIAVQAJAVAAAaQAAAagJAVQgIAUgSANQgRALgaAAQgZAAgRgLgAwBBsQgRAUAAAnQAAAkAQAWQAQAWAgAAQAWAAAOgKQAPgLAGgSQAHgSAAgXQAAgYgGgRQgGgSgOgLQgOgKgWAAQggAAgRAVgApmEAIgEgBIAAgLIAKABQAWAAAKgoQAKgmAGhZIBZAAIAACxIgNAAIAAilIhBAAQgDA2gHAnQgGAkgLATQgLATgUAAgAJ5D/IhUhZIAABZIgNAAIAAixIANAAIAABWIBRhWIAQAAIhSBWIBWBbgAEUD/IAAhSQgNAKgQAGQgPAFgTAAQgcAAgOgOQgPgPAAgbIAAg8IANAAIAAA6QAAAYAMAMQAMAKAWAAQASAAAPgFQAOgGAOgKIAAhTIANAAIAACxgABaD/IAAiiIhsCiIgPAAIAAixIANAAIgBChIBsihIAPAAIAACxgAhmD/IAAhWIh0AAIAABWIgNAAIAAixIANAAIAABPIB0AAIAAhPIANAAIAACxgAmfD/IAAixIANAAIAABLIBCAAQAeAAAOAOQAOANAAAWQAAAZgPAOQgRAOgeAAgAmSD0IA9AAQAaAAAMgLQAMgKAAgUQAAgmgvAAIhAAAgAqTD/IAAixIANAAIAACxgArZD/IAAilIhwAAIAAClIgNAAIAAixICKAAIAACxgAxaD/IAAilIhxAAIAAClIgMAAIAAixICKAAIAACxgAqVAiQgCgDAAgFQAAgFACgEQACgDAGAAQAGAAACADQADAEAAAFQAAAFgDADQgCAEgGAAQgGAAgCgEgAR7hVQgSgLgJgVQgJgVAAgbQAAgcALgUQAKgWAUgLQAUgLAaAAQANAAAKACQALACAIAEIgDAMQgKgFgKgBQgIgCgMAAQggAAgTATQgTATgCAhIBqAAIAAAMIhrAAQABAWAHARQAIASAOAJQAPAKAYAAQAOAAAKgCQANgDAJgEIAAAMIgUAGQgLADgPAAQgbAAgTgLgAO3hXQgOgNAAgWQAAgaAWgNQAXgOAngCIAigCIAAgNQAAgdgLgMQgLgMgWAAQgOAAgMADQgLADgQAHIgEgLQAOgHANgDQAOgEAQAAQAdAAAOAPQAOAPAAAgIAAB2IgLAAIgCghIgBAAQgHAPgPALQgOAKgbAAQgZAAgPgNgAP/inQgiACgTALQgTAKAAAWQAAASALAJQALAKATAAQAfAAAQgSQAQgSAAgdIAAgSgAJHhVQgSgMgJgUQgJgVAAgaQAAgaAJgVQAJgVARgNQARgMAZAAQAXAAAOALQAPALAHASQAHATAAAXIAAAKIiBAAQAAAnARAUQARAUAhAAQASAAAKgCQAMgDAPgHIAAANQgQAHgKABQgNADgQAAQgbAAgSgLgAKliwQAAgfgNgTQgNgUgbAAQgbAAgQASQgRASgDAiIB0AAIAAAAgAN7hNIAAieIAAAAIhCCeIgMAAIhBifIgBAAIAACfIgMAAIAAixIASAAIBCCgIBCigIASAAIAACxgAHphNIAAhXIh0AAIAABXIgNAAIAAixIANAAIAABPIB0AAIAAhPIANAAIAACxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-124,-25.8,248.1,51.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjoFFIAAj/IALAAIABAnIAAAAQAEgLAIgKQAJgJANgGQANgGAQAAQAkAAASAXQATAYgBArQAAAsgTAZQgVAYgiAAQgZAAgPgLQgPgLgGgRIAAAAIAABygAjMBjQgQAVAAAlIAAACQAAApAQATQAQATAdAAQAdAAAQgUQAQgWAAgnQAAhPg7AAQgfAAgQAVgAGjDvQgSgMgIgUQgJgVAAgaQAAgZAIgWQAKgVAQgNQAQgMAbAAQAWAAAPALQAOAKAHATQAIATgBAXIAAAKIiAAAQgBAmASAVQARAUAgAAQATAAAJgCQANgDAOgHIAAANQgPAGgLACQgMADgRAAQgaAAgTgLgAICCUQAAgfgOgTQgNgUgaAAQgbAAgQASQgRASgDAiIB0AAIAAAAgAA1DuQgQgLgKgVQgJgUABgcQAAgrAUgYQAVgYAlAAQAaAAARAMQARAMAIAUQAIAXAAAYQAAAagIAWQgKAVgQALQgRAMgbAAQgZAAgRgMgAAxBkQgRAUgBAmQABAjAQAXQAPAWAgAAQAXAAAOgKQAOgKAHgSQAGgRAAgZQAAgWgFgSQgHgTgOgKQgOgLgWAAQggAAgQAWgAmEDxQgPgIgIgQQgIgNgGgWQgDgVAAgUQAAgwAKgcQALgdASgNQASgOAYgGQAYgFAngFIABALQgpAFgVAGQgZAGgMALQgdAWgEBFIABAAQAKgSARgMQATgLAWAAQAhAAASAVQARAVAAAnQAAAagIATQgIAUgQALQgRALgaAAQgUAAgPgJgAmDBqQgQAMgMAVQAAATADASQADARAHAPQAHANANAJQALAIATAAQAgAAAOgUQAOgVAAgiQAAgjgOgRQgOgRgbAAQgXAAgRAMgApNDtQgOgMAAgXQAAgaAXgNQAWgOAogCIAhgCIAAgNQAAgdgLgMQgLgMgWAAQgOAAgMADQgNADgNAHIgFgLQAOgHANgDQAOgEARAAQAcAAAOAPQAOAPAAAgIAAB2IgKAAIgCghIgCAAQgHAPgPALQgOAKgbAAQgZAAgPgNgAoFCdQghACgUALQgTAKAAAWQAAASALAJQALAKAUAAQAfAAAQgSQAPgRAAgeIAAgSgAC/D3IAAgLQADABAIAAQAVAAAKgoQAKgnAGhYIBZAAIAACxIgNAAIAAilIhBAAQgDA1gHAoQgFAlgMASQgKASgUAAgALLD3IAAixIANAAIAACxgAJhD3IAAilIg7AAIAAgMICEAAIAAAMIg7AAIAAClgAgoD3IAAixIANAAIAACxgAp6D3IhVhaIAABaIgNAAIAAixIANAAIAABWIBRhWIAPAAIhRBWIBWBbgALKAaQgCgEAAgFQAAgFACgDQACgEAGAAQAGAAACAEQACADABAFQgBAFgCAEQgCADgGAAQgFAAgDgDgAgoAaQgDgDAAgGQAAgGADgCQACgEAFAAQAHAAACAEQACACAAAGQAAAGgCADQgCADgHAAQgFAAgCgDgAA9gIIAAgMIAIADIAKABQAOAAAIgJQAIgIAJgVIAMghIhEivIAOAAIA9ChIAAAAIA8ihIAOAAIhSDUQgJAXgKALQgLALgTAAQgJAAgKgDgAoNheQgQgLgKgVQgIgVgBgbQAAgrAWgYQAUgZAlAAQAbAAAQAMQAQAMAJAVQAJAVgBAaQAAAbgJAUQgHAUgSANQgRAMgaAAQgZAAgSgMgAoRjpQgRAVAAAmQAAAkAPAWQARAWAgAAQAWAAAOgKQAOgKAHgSQAHgTAAgXQAAgXgHgSQgFgRgPgLQgNgLgXAAQgfAAgRAVgAl+hUIgFgBIAAgMQAEACAHAAQAWAAAJgpQAKgmAHhYIBZAAIAACwIgOAAIAAilIhAAAQgEA1gGAoQgGAkgLAUQgLASgUAAgAg7hWIAAihIhtChIgPAAIAAiwIAMAAIgBChIBtihIAQAAIAACwgApThWIh4h5IAAB5IgMAAIAAjuIAMAAIAAB0IB1h0IASAAIh2B0IB5B6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-73.2,-32.4,146.5,65), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhzByIgkgkIh4AAQgcAAgTgEQgYgFgOgOQgUgTAAgkIAAhnQAAgGAFgFQAEgEAIAAICFAAQAdAAATAFQAYAFANANQAUATAAAkIAABmIAeAeQAFAEgBAGQAAAGgGAFQgFAGgGAAQgFAAgGgFgAlWAAQAAAaANAMIACABQAMAKAbABICFAAIAAhaQAAgZgMgMIgCgCQgNgKgagBIiGAAgAEsBOQgmgBgRgLQgNgIgDgQIAAgDQABgGAEgEQAEgDAHAAQAHAAAEADQAEACABAFIABACQAEAHAJADQAIACAPABIBIAAQAoAAALgHQAGgCACgHQACgEAAgKIAAgBQAAgPgGgFQgJgHgbAAIhgAAQghAAgPgLQgOgMAAgcIAAgLQAAgZASgKQAVgOA2AAIA1AAQApAAAUALQAOAJACARIAAACQAAAGgEAEQgEAEgHAAQgHAAgDgDQgEgDgCgFIgBgCQgFgIgMgDQgJgBgXAAIg3AAQgiAAgKAEQgJAFAAAQIAAAHQAAAMAGAGQAIAGAWAAIBTAAQApAAAQAIQAXANAAAjIAAAAQAAAlgfAMQgRAHgnAAgAnKBKQgFgFAAgIIAAijQAAgHAFgEQAEgFAIAAQAHAAAFAFQAEAEAAAHIAACjQAAAIgEAFQgFAEgHAAQgIAAgEgEgAAgBOQgvAAgYgNQghgSAAgvIAAgoQAAgvAhgSQAYgNAvAAIAtAAQAwAAAYANQAhASAAAvIAAAoQAAAvghASQgYANgwAAgAgVhRQgRAMAAAfIAAAmQAAAdARALQAOAKAdAAIBBAAQAfAAAOgKQARgLAAgdIAAgmQAAgfgRgMQgOgJgfAAIhBAAQgdAAgOAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-46.4,-11.8,92.8,23.8), null);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-150,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-150,-169,300,338), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqAnIAHgMQAFAFAFAAQAGgBACgHIgihCIASAAIASAnIAFAKIASgxIARAAIgbBDQgIAUgPAAQgIAAgJgGgAitAgQgNgNAAgTQAAgSANgNQANgNATAAQATAAAOANQANANgBASQABATgNANQgOANgTAAQgTAAgNgNgAihgVQgIAJAAAMQAAAMAIAKQAJAIALABQAMgBAJgIQAIgKAAgMQAAgMgIgJQgJgIgMgBQgLABgJAIgAn1AgQgMgMAAgUQAAgSAMgNQAOgNATAAQAUAAAMAMIgIALQgKgJgNAAQgOAAgIAJQgIAJAAAMQAAANAIAIQAIAKAOAAQAOgBALgKIAIALQgNAOgVAAQgUAAgNgNgAHyArIABg+IgBAAIgHAOIghAwIgPAAIAAhVIAQAAIgBA/IAHgPIAhgwIAQAAIAABVgAFpArIAAhIIgdAAIAAgNIBJAAIAAANIgcAAIAABIgAErArIgHgVIgeAAIgIAVIgRAAIAghVIAQAAIAfBVgAEgAIIgIgWIgDgOIgBAAIgLAkIAXAAgACSArIAAhVIAfAAQAMAAAIAFQAHAHAAAKQAAANgLAFIAAABQAOACABARQgBANgIAHQgJAFgNAAgACiAeIARAAQANAAgBgNQABgMgNAAIgRAAgACigHIAPAAQALAAAAgLQAAgLgLAAIgPAAgAg4ArIAAhVIA1AAIAAANIglAAIAAAUIARAAQAMABAIAGQAGAHAAAMQAAAMgGAHQgIAIgMgBgAgoAeIAPAAQANAAAAgNQAAgNgNAAIgPAAgAkaArIAAhVIAhAAQANAAAHAHQAJAIgBANQABAMgJAHQgHAJgNAAIgRAAIAAAdgAkKAAIAPAAQAOAAAAgOQAAgPgOAAIgPAAgAlYArIAAhIIgnAAIAABIIgQAAIAAhVIBHAAIAABVg");
	this.shape.setTransform(-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(236,236,236,0.4)").s().p("AsBC5IAAlxIYDAAIAAFxg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-77,-18.5,154,37), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#172A54").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:69});

	// timeline functions:
	this.frame_153 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(153).call(this.frame_153).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-85.6,226.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,271.2,1.024,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(154));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.6,225.7,0.02,0.02,0,0,0,-2.5,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:55.7},10,cjs.Ease.get(1)).wait(10).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:55.6},5).wait(10).to({regX:0,scaleX:1,scaleY:1,x:55.7},5).wait(55));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.1,127.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({alpha:1},15).wait(104));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-57.9,94.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({alpha:1},15).wait(124));

	// img
	this.instance_5 = new lib._img_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-131);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(139));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '24EC22D0AA3B4827A79999CB427C5C74',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img.jpg", id:"_img"}
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
an.compositions['24EC22D0AA3B4827A79999CB427C5C74'] = {
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