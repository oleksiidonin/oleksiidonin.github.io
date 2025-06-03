(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,326);


(lib.part1 = function() {
	this.initialize(img.part1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,291);


(lib.part2 = function() {
	this.initialize(img.part2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,216);// helper functions:

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
	this.shape.graphics.f("#003B5E").s().p("AugCdIAAhHIAJAAIAAAHQADgEAEgCQADgCAGAAQAGAAAFADQAFADADAGQADAFAAAIQAAAHgDAFQgCAFgGAEQgFADgGAAQgGAAgDgCQgEgCgDgDIAAAegAuQBfQgEACgCAEQgCAFAAAEQAAADACAGQACADAEACQACACAFAAQAEAAAEgCQAEgDABgCQACgEAAgFQAAgGgCgDQgBgDgEgDQgEgBgEAAQgFAAgCABgAC6CFIgDgCIgBgDIABgDIADgDIADAAIADAAIACADIABADIgBADIgCACIgDABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBgAiqCGIABgIIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgEIACgiIAmAAIAAAvIgJAAIAAgnIgUAAIgBARQAAAIgBAFQgCAGgDACQgDACgGAAgAjZCDQgGgDgDgGQgDgFAAgHQAAgHADgGQADgFAGgEQAGgDAHAAQAHAAAFADQAGAEADAFQADAGAAAHQAAAHgDAFQgDAGgGADQgFADgHAAQgIAAgFgDgAjUBfQgEADgCAEQgCAEAAAEQAAAEACAEQACADAEADIAIACQADAAAEgCQADgCADgEQACgCAAgGQAAgFgCgDQgDgFgDgCQgEgBgDAAIgIABgAmDCDQgFgDgDgGQgEgGAAgGQAAgGAEgHQADgFAFgEQAGgDAHAAQAHAAAGADQAFAEADAFQAEAGAAAHQAAAHgEAFQgDAGgFADQgGADgHAAQgHAAgGgDgAl+BfQgDADgCAEQgCAEAAAEQAAAEACAEQACADADADIAIACIAIgCQADgCACgEQACgCAAgGQAAgFgCgDQgCgFgDgCIgIgBIgIABgAq+CDQgGgEgCgFQgDgFAAgHQAAgIADgFQADgGAFgDQAFgDAGAAQAGAAADACQAEACADAEIAAgHIAKAAIAAAvIgKAAIAAgGQgDADgEACQgDACgGAAQgGAAgFgDgAq5BfQgEADgBADQgCADAAAGQAAAFACAEQABACAEADQADACAFAAQAFAAACgCQAEgCACgDQACgGAAgDQAAgEgCgFQgCgEgEgCQgCgBgFAAQgFAAgDABgAsfCDQgFgEgDgFQgDgFAAgHQAAgHADgGQADgFAFgEQAGgDAHAAQAIAAAEACQAFACADAFIgFAGIgHgFIgHgBQgEA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AFQAAAFACADQACADADADQAFACAEAAIAHgCIAHgEIAFAFQgDAFgFACQgGADgGgBQgHAAgGgCgABJAWQgGgEgDgFQgDgHAAgGQAAgHADgFQADgGAFgDQAGgDAGAAQAHAAAFADQAGAEADAEQADAGAAAGIgBADIglAAQABAFACADQACADADABIAIACQAFAAAEgCQAEgBACgCIAFAGQgDADgGADQgEABgHAAQgIAAgFgCgABjgEQgCgFgDgEQgEgDgGAAQgFAAgEADQgEAFgBAEIAdAAIAAAAgAgBAYIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBIACgEIABghIAmAAIAAAuIgJAAIAAgmIgUAAIAAAQQAAAIgCAFQgBAGgDACQgEADgFgBgAgwAWQgGgEgCgFQgDgFAAgIQAAgGADgGQADgGAFgDQAFgDAGAAQAGAAADACIAHAGIAAgHIAKAAIAAAuIgKAAIAAgHQgDAFgEACQgDABgGAAQgGAAgFgCgAgrgNQgEADgBACQgCADAAAFQAAAFACADQABADAEADQADACAFAAQAFAAACgCQAEgCACgEQACgEAAgEQAAgDgCgFQgCgDgEgCQgCgCgFAAQgFAAgDACgAhlAXQgFgDgDgEIAFgFQADADADABQAEACAFAAQAFAAAEgCQADgCAAgDQAAgIgKABIgKAAIAAgGIAHAAQAFAAADgBQADgDAAgDQAAgDgDgBQgCgCgFAAQgIgBgGAGIgFgFQADgDAGgDQAEgCAHAAQAJAAAEADQAFAEAAAGQAAAFgCACQgCACgDACQAEAAACADQADAEAAADQAAAEgDADQgCAEgFACQgEABgHAAQgHAAgFgBgAipAWQgFgEgDgFQgEgIAAgFQAAgFAEgHQADgFAFgEQAGgDAIAAQAHAAAEACQAFACADAFIgFAFQgCgDgEgBIgIgCQgEAAgEACQgDABgCADIgDAHIAXAAIAAAGIgXAAQAAAGAFAEQAEAEAHgBQAEAAAEgBQAEgBACgDIAFAFQgDAEgFADQgEABgHAAQgIAAgGgCgAjmAWQgFgEgDgFQgDgFAAgIQAAgGADgGQADgGAFgDQAGgDAGAAQAFAAAEACIAHAGIAAgHIAJAAIAAAuIgJAAIAAgHIgHAHQgEABgFAAQgGAAgGgCgAjggNQgEACgCADQgBAEAAAEQAAAFABADQACAEAEACQACACAFAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgEQgCgDgDgCQgDgCgFAAQgFAAgCACgAmcAYIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBIACgEIABghIAnAAIAAAuIgKAAIAAgmIgTAAIgBAQIgCANQgBAGgDACQgEADgFgBgAqBAVQgGgDgDgFQgDgHAAgGQAAgGADgGQADgFAGgEQAGgDAHAAQAHAAAFADQAFADAEAGQADAGAAAGQAAAGgDAHQgEAFgFADQgFAEgHgBQgIABgFgEgAp8gNQgEACgBAEQgCADAAAEQAAAFACADQABADAEADIAIACQADAAAEgCQAEgDACgDQACgDAAgFQAAgEgCgDQgCgEgEgCQgEgCgDAAIgIACgAvsAVQgFgDgEgFQgDgHAAgGQAAgGADgGQAEgGAFgDQAFgDAHAAQAHAAAGADQAGAEADAFQADAGAAAGQAAAGgDAHQgDAFgGADQgFAEgIgBQgHABgFgEgAvngNQgDABgDAFQgCADAAAEQAAAFACADQADAEADACQAEACADAAIAIgCQAEgDABgDQACgDAAgFQAAgEgCgDQgBgEgEgCIgIgCQgDAAgEACgAO5AXIAAgSIgLAAIgLASIgKAAIAMgTQgGgBgDgDQgDgDAAgFQAAgHAGgEQAFgEAIAAIAWAAIAAAugAOlgOQgCADAAADQAAADACACQADACAFAAIAMAAIAAgPIgMAAQgEAAgEACgALvAXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAK+AXIgNgTIgBgBIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAJtAXIAAguIAJAAIAAARIAKAAQAKAAAFAEQAFACAAAIQAAAIgFAEQgFADgKAAgAJ2AQIAKAAQALAAAAgIQAAgEgDgCQgCgBgGAAIgKAAgAIYAXIAAguIAJAAIAAAugAHuAXIAAg8IgWAAIAAgIIA1AAIAAAIIgWAAIAAA8gAF7AXIAAguIAJAAIAAARIAKAAQAJAAAGAEQAFACAAAIQAAAHgFAFQgGADgJAAgAGEAQIAKAAQAKAAAAgIQAAgEgCgCQgDgBgFAAIgKAAgAFWAXIAAgmIgQAAIAAgIIAqAAIAAAIIgQAAIAAAmgAECAXIAAguIAJAAIAAAugADmAXIAAgUIgYAAIAAAUIgJAAIAAguIAJAAIAAATIAYAAIAAgTIAJAAIAAAugACwAXIgNgUIgFAAIAAAUIgKAAIAAgUIgFAAIgBABIgMATIgKAAIAPgYIgPgWIAKAAIAMARIABACIAFAAIAAgTIAKAAIAAATIAFAAIACgCIALgRIALAAIgQAWIAQAYgAj+AXIgOgUIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAk6AXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAmoAXIgNgUIgKAAIAAAUIgJAAIAAguIAJAAIAAATIAKAAIANgTIALAAIgRAWIARAYgAnkAXIAAghIgYAhIgJAAIAAguIAJAAIAAAiIAZgiIAIAAIAAAugAo1AXIAAguIAVAAQAJAAAEADQAEADAAAGQAAAEgBADQgCADgDABQAEAAACADQADAEAAADQAAAEgCADQgDADgDACIgJABgAosAQIANAAQAFAAACgCQACgBAAgDQAAgIgJABIgNAAgAosgDIAKAAQAFAAADgBQACgBAAgFQAAgGgKAAIgKAAgAsrAXIAAgUIgXAAIAAAUIgKAAIAAguIAKAAIAAATIAXAAIAAgTIAJAAIAAAugAtnAXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAusAXIAAgmIgRAAIAAgIIAqAAIAAAIIgQAAIAAAmgAwFAXIgNgTIgBgBIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAw+AXIAAguIAKAAIAAAugAxaAXIAAgUIgXAAIAAAUIgJAAIAAguIAJAAIAAATIAXAAIAAgTIAKAAIAAAugAIagiIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgAEDgiIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgAw8giIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgABdg+IACgIIAFABIAFgBIADgEIAEgGIACgFIgUgwIAKAAIAPAlIAOglIAKAAIgbBAQgDAFgEABQgCACgGAAgAq1g+IABgIIAGABIAFgBQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAGgLIgUgwIAKAAIAOAlIAPglIAKAAIgWA0QgDAJgDADQgCAEgEACQgDACgFAAgAEmg/IAAhGIAJAAIAAAHQACgEAFgCQAEgCAFAAQAGAAAFADQAFADADAGQADAGAAAGQAAAIgDAGQgCAEgGAFQgFACgGAAQgFAAgEgBQgFgDgCgEIAAAegAE2h7QgEADgBACQgCAEAAAEQAAAGACADQABADAEADQACACAFAAQAFAAADgCQADgCACgEQACgDAAgGQAAgEgCgEQgCgDgDgCQgDgCgFgBQgFABgCACgAtkg/IAAhGIAJAAIAAAHQAEgEADgCQAEgCAFAAQAHAAAFADQAFADADAGQADAGAAAGQAAAIgDAGQgDAEgFAFQgFACgHAAQgFAAgEgBQgDgDgEgEIAAAegAtUh7QgDACgCADQgCAFAAADQAAAFACAEQACAEADACQADACAFAAQAFAAACgCQAEgDABgDQACgDAAgGQAAgEgCgEQgBgCgEgDQgCgCgFgBQgFABgDACgAxDhHIAAgOIg2AAIAAhGIAKAAIAAA9IAiAAIAAg9IAKAAIAAA9IAJAAIAAAXgAO6hKIAAgLIgnAAIAAALIgIAAIAAgUIAFAAIAEgHIACggIAlAAIAAAnIAHAAIAAAUgAOehwIgBALIgDAHIAYAAIAAgfIgUAAgArAhKIAAgLIgnAAIAAALIgIAAIAAgUIAFAAQADgCAAgFQACgEAAgIIAAgUIAmAAIAAAnIAHAAIAAAUgArdhlIgDAHIAYAAIAAgfIgUAAgARahXQgGgEgDgFQgDgHAAgHQAAgGADgGQADgFAGgEQAGgDAHAAQAIAAAEACQAFACADAEIgFAGQgCgDgEgBIgIgDIgIADQgEABgCADIgCAHIAXAAIAAAHIgXAAQABAHAEADQAEADAHAAQAEABADgCQAFgCACgDIAFAGQgCAEgGADQgEABgIAAQgHAAgGgCgAPghVIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAIACgFIABgiIAnAAIAAAwIgKAAIAAgoIgUAAIAAAQQAAAKgCAFQgBAFgDACQgEACgFAAgALWhXQgGgGgCgDQgDgGAAgIQAAgGADgGQADgFAFgEQAFgDAGAAQAGAAAEACQAEACACAEIAAgHIAKAAIAAAwIgKAAIAAgIQgCAEgEADQgEABgGAAQgGAAgFgCgALbh7QgEADgBACQgCAEAAAEQAAAGACADQABADAEADQAEACAEAAQAEAAAEgCQAEgDABgDQACgDAAgGQAAgEgCgEQgBgCgEgDQgEgCgEgBQgEABgEACgAGjhWQgGgDgCgEIAFgFQADADADABIAIACQAFAAAEgCQADgCAAgEQAAgGgKAAIgJAAIAAgHIAHAAQAGAAACgBQADgCAAgEQAAgDgDgBQgCgDgFAAQgIAAgGAGIgFgGQADgDAFgCQAFgCAGAAQAKAAAEAEQAFADAAAGQAAADgCAEQgCACgDACQAFACABACQADADAAAEQAAAEgDADQgDAFgEABQgEABgHAAQgIAAgEgBgACdhXQgFgEgDgFQgEgHAAgHQAAgFAEgHQADgFAFgEQAGgDAHAAQAHAAAFADQAGACACAEIgGAGIgGgFQgDgCgFAAIgIADQgDACgCADQgCAFAAADQAAAEACAFQACAEADACIAIACQAFAAADgBIAGgGIAGAGQgDAFgFACQgGACgGAAQgHAAgGgCgAAkhXQgEgEgFgFQgDgHAAgHQAAgGADgGQADgFAGgEQAGgDAIAAQAHAAAEACQAFACADAEIgFAGQgCgDgEgBIgIgDQgEAAgEADQgDAAgCAEIgDAHIAXAAIAAAHIgXAAQABAHAEADQAEADAHAAQAEABAEgCQAEgBACgEIAFAGQgCAEgGADQgEABgHAAQgIAAgGgCgAgYhXQgGgFgCgEQgDgHAAgHQAAgGADgGQADgGAFgDQAGgDAFAAQAGAAAEACQADACACAEIAAgHIAKAAIAAAwIgKAAIAAgIQgCAEgDADQgEABgGAAQgFAAgGgCgAgSh7QgEACgCADQgCAFAAADQAAAFACAEQACAEAEACQACACAFAAQAEAAAEgCQADgDABgDQACgDAAgGQAAgEgCgEQgBgCgDgDQgEgCgEgBQgFABgCACgAh8hXQgGgEgDgEQgDgGAAgFIgIAAIAAAVIgJAAIAAgwIAJAAIAAATIAIAAQACgHACgDQAEgGAEgBQAEgDAHAAQAHAAAFADQAGAEADAFQADAGAAAGQAAAHgDAHQgEAFgFADQgFADgHAAQgHAAgEgCgAh4h7QgEAC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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.7,-15.6,229.5,31.3), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgBSIAKgWQAHAEAGAAQAIAAADgHIgqhqIAgAAIAZBIIAXhIIAgAAIgqBtQgGAQgIAHQgHAGgOAAQgPAAgMgHgAt5BSIAKgWQAHAEAGAAQAHAAAEgHIgqhqIAgAAIAYBIIAYhIIAfAAIgpBtQgGAQgIAHQgIAGgNAAQgPAAgMgHgAE1BSIAAgZIhEAAIgCAZIgZAAIAAgzIALAAQALgWAAgxIAAgJIBXAAIAABQIAPAAIgEAzgAEIgVQAAAigIASIAlAAIAAg2IgdAAgAluBSIAAgZIhDAAIgDAZIgZAAIAAgzIALAAQALgWAAgxIAAgJIBXAAIAABQIAPAAIgEAzgAmbgVQAAAigIASIAlAAIAAg2IgdAAgAqlBSIAAgZIhDAAIgCAZIgaAAIAAgzIAMAAQAKgWAAgxIAAgJIBYAAIAABQIAPAAIgEAzgArRgVQAAAigIASIAlAAIAAg2IgdAAgAKjArQgRgQAAgXQAAgWARgRQARgQAZAAQAYAAARAQQAQAQAAAXQAAAXgQAQQgRAQgZAAQgYAAgRgQgAK4gRQgIAJAAAMQAAALAIAJQAJAJAMAAQAMAAAIgIQAHgJAAgMQAAgMgHgIQgIgJgNAAQgMAAgIAIgAgSArQgOgQAAgfIAAgTIAEgSQADgKAEgHQAGgHAIgFQAHgFAMgDIA5gKIAFAYIg7ALQgXAFgCAVQAEgHAJgGQAKgFAPAAQAVAAAPAOQAPAPAAAVQAAAXgQAPQgQAQgYAAQgaAAgPgQgAAEgNQgGAHAAALQAAAMAGAIQAIAIALAAQALAAAIgIQAHgIAAgMQAAgKgIgIQgHgJgLAAQgMAAgHAJgAk3AsQgQgQAAgYQAAgXAPgQQAQgQAWAAQAaAAANARQANAQAAAYIAAAIIhLAAQACAKAHAGQAHAFALAAQAOAAAMgLIARAPQgQAUgcAAQgYAAgQgPgAj7gEQgCgLgFgGQgGgGgKAAQgIAAgHAGQgGAGgCALIAuAAIAAAAgAvsArQgOgQAAgfIAAgTIAEgSQADgKAEgHQAFgGAIgGQAJgGAMgCIA5gKIAFAYIg7ALQgZAGgBAUQADgGALgHQALgFAOAAQAVAAAPAOQAPAPAAAVQAAAWgQAQQgQAQgZAAQgaAAgPgQgAvVgNQgHAIAAAKQAAAMAHAIQAIAIALAAQALAAAIgIQAHgIAAgMQAAgKgIgIQgHgJgMAAQgLAAgHAJgAMKA4IACgYIAHAAQAFAAACgCQAEgDACgHQADgLAAgNIABgtIBWAAIAABqIgeAAIAAhQIgbAAQAAAVgCAOQgBAOgDAJQgCAIgGAHQgGAFgFABQgFACgJAAQgJAAgHgCgAPeA5IAAg9IgqA9IgdAAIAAhqIAeAAIAAA9IAqg9IAcAAIAABqgAJhA5IgdgpIgOAPIAAAaIgeAAIAAhqIAeAAIAAAsIAngsIAjAAIgoAsIAtA+gAFhA5IAAhqIAfAAIAAAjIAWAAQATAAAMAJQALAIAAASQAAARgLAJQgKAKgUAAgAGAAhIATAAQAPAAAAgNQAAgGgEgDQgEgDgHAAIgTAAgAiKA5IAAhqIAfAAIAABqgAp4A5IAAhqIAeAAIAAAjIAWAAQAUAAAMAJQALAIAAASQAAARgLAJQgKAKgUAAgApaAhIAUAAQAPAAAAgNQAAgGgEgDQgEgDgIAAIgTAAgAHLAJIAAgcIA+AAIAAAcgAoOAJIAAgcIA+AAIAAAcgAiKg9IAAgbIAgAAIAAAbg");
	this.shape.setTransform(11.1,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-90.8,-11.3,203.9,17.9), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(12,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-116.1,-7,256.2,17.3), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEPA0IAAgSIg7AAIgBASIgNAAIAAgfIAIAAQAKgVAAglIAAgMIA7AAIAABGIALAAIgCAfgADngaQAAAdgJASIAnAAIAAg5IgeAAgAEoAfIAFgLQAFADAGAAQAHAAAFgJIgjg/IARAAIAaAxIAYgxIAPAAIggBBQgKATgRAAQgJAAgHgEgABsAXQgMgNAAgRQAAgSAMgNQANgNATAAQATAAAMANQAMANAAASQAAARgMANQgNAMgSAAQgUAAgMgMgAB3gcQgHAIgBANQABALAHAJQAJAJAMAAQAMAAAIgJQAIgJAAgLQAAgNgIgIQgIgJgMAAQgMAAgJAJgAj7AXQgMgNAAgRQAAgSAMgNQANgNATAAQATAAANANQAMANAAASQAAARgMANQgNAMgTAAQgTAAgNgMgAjwgcQgHAIgBANQABALAHAJQAJAJAMAAQAMAAAJgJQAHgJABgLQgBgMgHgJQgJgJgMAAQgMAAgJAJgAp0AXQgMgNAAgRQAAgSAMgNQAMgNAUAAQASAAANANQANANAAASQAAARgNANQgNAMgSAAQgUAAgMgMgAppgcQgIAIAAANQAAALAIAJQAJAJAMAAQAMAAAIgJQAIgJAAgLQAAgMgIgJQgIgJgMAAQgNAAgIAJgANHAiIAAg8IgqA8IgOAAIAAhTIAPAAIAAA8IAqg8IAOAAIAABTgALtAiIgcglIgNANIAAAYIgPAAIAAhTIAPAAIAAAqIAngqIATAAIgjAkIAkAvgAKNAiIAAghQgOAHgKAAQgcAAAAgaIAAgfIAOAAIAAAbQABARAPAAQAKAAAMgHIAAglIAOAAIAABTgAIKAiIAAhTIA/AAIAAANIgwAAIAAAWIAqAAIAAANIgqAAIAAAWIAwAAIAAANgAGDAiIAAhTIAPAAIAABGIAhAAIAAhGIAOAAIAABGIAiAAIAAhGIAOAAIAABTgAA/AiIAAhGIgmAAIAABGIgQAAIAAhTIBFAAIAABTgAg9AiIAAhTIAQAAIAABTgAiXAiIAAhTIAlAAQAOAAAJAHQAFAHAAAHQAAANgMAGQARAGAAAOQAAAXggAAgAiIAVIAYAAQAQAAAAgMQAAgKgSAAIgWAAgAiIgOIATAAQAQAAABgLQgBgLgPAAIgUAAgAkmAiIAAgiIgoAAIAAAiIgPAAIAAhTIAPAAIAAAjIAoAAIAAgjIAPAAIAABTgAmIAiIAAg8IgqA8IgOAAIAAhTIAPAAIAAA8IAqg8IAOAAIAABTgAn8AiIAAhFIgbAAIAAgOIBEAAIAAAOIgbAAIAABFgAqeAiIgdglIgNANIAAAYIgPAAIAAhTIAPAAIAAAqIAogqIASAAIgjAkIAlAvgAr6AiIAAhTIAPAAIAABTgAseAiIAAgiIgoAAIAAAiIgPAAIAAhTIAPAAIAAAjIAoAAIAAgjIAPAAIAABTg");
	this.shape.setTransform(12.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E40046").s().p("AxzB9Qg0AAglglQgkgkAAg0QAAgzAkgkQAlglA0AAMAjnAAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-126.5,-12.5,253,25), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLBUIAAggIhoAAIAAiFIAmAAIAABlIAuAAIAAhlIAmAAIAABlIASAAIgFBAgAhAAlQgTgUAAgeQAAgdASgVQATgUAdAAQAfAAAQAWQARAUAAAfIAAAKIhdAAQADAMAJAHQAIAGANAAQARAAAPgNIAVATQgUAZghAAQgfAAgUgTgAAKgYQgCgNgHgIQgGgHgMAAQgLAAgIAHQgIAIgCANIA4AAIAAAAgADLA0IAAgnIApAAIAAAngACJA0IAAgnIAoAAIAAAngABGA0IAAgnIApAAIAAAng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-24.4,-8.4,48.8,16.8), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.part2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.part2();
	this.instance.parent = this;
	this.instance.setTransform(-115,-108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.part2_1, new cjs.Rectangle(-115,-108,230,216), null);


(lib.part1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.part1();
	this.instance.parent = this;
	this.instance.setTransform(-144.5,-145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.part1_1, new cjs.Rectangle(-144.5,-145.5,289,291), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIGDcIjDkRIAAERIhrAAIAAlYIAxhfIBkAAICZDXIAAjXIBrAAIAAG3gAhKDcIAAiDIihk0ICPAAIBcDAIBcjAICOAAIihE0IAACDgApwDcIAAhqIDYjiIjNAAIAAhrIFbAAIAyBfIjjDtIDjAAIAABrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-62.5,-22,125,44), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-150,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-150,-163,300,326), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AitA5IAEgJQAEADAHAAQAFAAAEgDQAEgEACgHIghhHIAMAAIAaA8IAYg8IALAAIgeBKQgFALgGAFQgGAEgHAAQgJAAgHgDgAD+AmIAAgPIAMAAIAAAPgADZAmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgABtAmIAAg+IgaAAIAAgKIA/AAIAAAKIgaAAIAAA+gAA3AmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgAgkAmIAAg+IgpAAIAAA+IgKAAIAAhIIA+AAIAABIgAjEAmIgmgvIgVAUIAAAbIgKAAIAAhhIAKAAIAAA6IA4g6IAPAAIgqArIArA2gAEBAKIgDhFIAMAAIgDBFg");
	this.shape.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-26.6,-4.7,53.3,12.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AuFDIQhTAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BTAAIcLAAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-110.1,-20,220.3,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#01AFE4","#80E0FF"],[0,1],169.6,293.8,-169.5,-293.7).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:100.2},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-100.2},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// part2
	this.instance = new lib.part2_1();
	this.instance.parent = this;
	this.instance.setTransform(302.8,-13,1,1,30,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:22.8},15,cjs.Ease.cubicOut).wait(10).to({rotation:0,x:8.1,y:-0.1},15,cjs.Ease.quadInOut).wait(30).to({regY:-0.2,rotation:-101.7,x:-271.3,y:-15.5},15,cjs.Ease.cubicIn).wait(52));

	// part1
	this.instance_1 = new lib.part1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(293.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:13.5},15,cjs.Ease.cubicOut).wait(10).to({x:37.5,y:-19.7},15,cjs.Ease.quadInOut).wait(30).to({x:-236.5},15,cjs.Ease.cubicIn).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,-164,307.3,302.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:25});

	// timeline functions:
	this.frame_235 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(235).call(this.frame_235).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,258.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(236));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,-228.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(236));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(236));

	// btn
	this.instance_3 = new lib.btn("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.6,196,1.05,1.05,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(236));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_90 = new cjs.Graphics().p("AgEFVQkxAAkXh2QkNhyjQjPQjQjPhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDPQjQDPkNByQkXB2kxAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AgEHCQkxAAkXh2QkNhyjQjQQjQjOhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDOQjQDQkNByQkXB2kxAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AgEIvQkxAAkXh2QkNhyjQjQQjQjOhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDOQjQDQkNByQkXB2kxAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AgEKcQkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AgEMJQkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_95 = new cjs.Graphics().p("AgEN2QkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AgEPjQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kWAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EWQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AgERQQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kWAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EWQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AgES9QkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AgEUqQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AgEWXQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AgEYEQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AgEZxQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AgEbeQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AgEc1QkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AgEc1QkxAAkXh2QkNhxjQjRQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDRkNBxQkXB2kxAAg");
	var mask_graphics_195 = new cjs.Graphics().p("AgEc1QkxAAkXh2QkNhxjQjRQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDRkNBxQkXB2kxAAg");
	var mask_graphics_196 = new cjs.Graphics().p("AgEc1QkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_197 = new cjs.Graphics().p("AgEbeQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_198 = new cjs.Graphics().p("AgEZxQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_199 = new cjs.Graphics().p("AgEYEQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkxMAAAgiNMAvBAAAMAAAAiNQAAExh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_200 = new cjs.Graphics().p("AgEWXQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_201 = new cjs.Graphics().p("AgEUqQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_202 = new cjs.Graphics().p("AgES9QkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kXAAkwMAAAgiOMAvBAAAMAAAAiOQAAEwh2EXQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_203 = new cjs.Graphics().p("AgERQQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kWAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EWQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_204 = new cjs.Graphics().p("AgEPjQkxAAkXh2QkNhyjQjQQjQjPhxkNQh2kWAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EWQhyENjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_205 = new cjs.Graphics().p("AgEN2QkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_206 = new cjs.Graphics().p("AgEMJQkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_207 = new cjs.Graphics().p("AgEKcQkxAAkXh2QkNhyjQjQQjQjPhxkMQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyEMjPDPQjQDQkNByQkXB2kxAAg");
	var mask_graphics_208 = new cjs.Graphics().p("AgEIvQkxAAkXh2QkNhyjQjQQjQjOhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDOQjQDQkNByQkXB2kxAAg");
	var mask_graphics_209 = new cjs.Graphics().p("AgEHCQkxAAkXh2QkNhyjQjQQjQjOhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDOQjQDQkNByQkXB2kxAAg");
	var mask_graphics_210 = new cjs.Graphics().p("AgEFVQkxAAkXh2QkNhyjQjPQjQjPhxkNQh2kXAAkxMAAAgiOMAvBAAAMAAAAiOQAAExh2EXQhyENjPDPQjQDPkNByQkXB2kxAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_graphics_90,x:0,y:-334.9}).wait(1).to({graphics:mask_graphics_91,x:0,y:-324}).wait(1).to({graphics:mask_graphics_92,x:0,y:-313.1}).wait(1).to({graphics:mask_graphics_93,x:0,y:-302.2}).wait(1).to({graphics:mask_graphics_94,x:0,y:-291.3}).wait(1).to({graphics:mask_graphics_95,x:0,y:-280.4}).wait(1).to({graphics:mask_graphics_96,x:0,y:-269.5}).wait(1).to({graphics:mask_graphics_97,x:0,y:-258.6}).wait(1).to({graphics:mask_graphics_98,x:0,y:-247.7}).wait(1).to({graphics:mask_graphics_99,x:0,y:-236.8}).wait(1).to({graphics:mask_graphics_100,x:0,y:-225.9}).wait(1).to({graphics:mask_graphics_101,x:0,y:-215}).wait(1).to({graphics:mask_graphics_102,x:0,y:-204.1}).wait(1).to({graphics:mask_graphics_103,x:0,y:-193.2}).wait(1).to({graphics:mask_graphics_104,x:0,y:-180.1}).wait(1).to({graphics:mask_graphics_105,x:0,y:-158.3}).wait(90).to({graphics:mask_graphics_195,x:0,y:-158.3}).wait(1).to({graphics:mask_graphics_196,x:0,y:-180.1}).wait(1).to({graphics:mask_graphics_197,x:0,y:-193.2}).wait(1).to({graphics:mask_graphics_198,x:0,y:-204.1}).wait(1).to({graphics:mask_graphics_199,x:0,y:-215}).wait(1).to({graphics:mask_graphics_200,x:0,y:-225.9}).wait(1).to({graphics:mask_graphics_201,x:0,y:-236.8}).wait(1).to({graphics:mask_graphics_202,x:0,y:-247.7}).wait(1).to({graphics:mask_graphics_203,x:0,y:-258.6}).wait(1).to({graphics:mask_graphics_204,x:0,y:-269.5}).wait(1).to({graphics:mask_graphics_205,x:0,y:-280.4}).wait(1).to({graphics:mask_graphics_206,x:0,y:-291.3}).wait(1).to({graphics:mask_graphics_207,x:0,y:-302.2}).wait(1).to({graphics:mask_graphics_208,x:0,y:-313.1}).wait(1).to({graphics:mask_graphics_209,x:0,y:-324}).wait(1).to({graphics:mask_graphics_210,x:0,y:-334.9}).wait(1).to({graphics:null,x:0,y:0}).wait(25));

	// img
	this.instance_4 = new lib._img_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-137);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({_off:true},121).wait(25));

	// t2_3
	this.instance_5 = new lib.t2_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-266.5,142.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({x:-28.5},15,cjs.Ease.cubicOut).wait(65).to({x:-318.5},15,cjs.Ease.cubicIn).to({_off:true},1).wait(25));

	// t2_2
	this.instance_6 = new lib.t2_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-293.5,113.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({x:-2.5},15,cjs.Ease.cubicOut).wait(75).to({x:-292.5},15,cjs.Ease.cubicIn).to({_off:true},1).wait(25));

	// t2_1
	this.instance_7 = new lib.t2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-281.3,67.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({_off:false},0).to({x:-45.3},15,cjs.Ease.cubicOut).wait(90).to({x:-335.3},15,cjs.Ease.cubicIn).to({_off:true},1).wait(25));

	// box
	this.instance_8 = new lib.box();
	this.instance_8.parent = this;
	this.instance_8.setTransform(302.7,-13,1,1,0,0,0,302.6,-13);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",14,14,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},90).wait(120).to({_off:false},0).wait(26));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,635.1,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,635.1,600);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_img.jpg", id:"_img"},
		{src:"images/part1.png", id:"part1"},
		{src:"images/part2.png", id:"part2"}
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