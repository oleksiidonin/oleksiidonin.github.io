(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.part1 = function() {
	this.initialize(img.part1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,291);


(lib.part2 = function() {
	this.initialize(img.part2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,216);


(lib.part3 = function() {
	this.initialize(img.part3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,88);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AugCdIAAhHIAJAAIAAAHQADgEAEgCQADgCAGAAQAGAAAFADQAFADADAGQADAFAAAIQAAAHgDAFQgCAFgGAEQgFADgGAAQgGAAgDgCQgEgCgDgDIAAAegAuQBfQgEACgCAEQgCAFAAAEQAAADACAGQACADAEACQACACAFAAQAEAAAEgCQAEgDABgCQACgEAAgFQAAgGgCgDQgBgDgEgDQgEgBgEAAQgFAAgCABgAC6CFIgDgCIgBgDIABgDIADgDIADAAIADAAIACADIABADIgBADIgCACIgDABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAgBgAiqCGIABgIIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIABgEIACgiIAmAAIAAAvIgJAAIAAgnIgUAAIgBARQAAAIgBAFQgCAGgDACQgDACgGAAgAjZCDQgGgDgDgGQgDgFAAgHQAAgHADgGQADgFAGgEQAGgDAHAAQAHAAAFADQAGAEADAFQADAGAAAHQAAAHgDAFQgDAGgGADQgFADgHAAQgIAAgFgDgAjUBfQgEADgCAEQgCAEAAAEQAAAEACAEQACADAEADIAIACQADAAAEgCQADgCADgEQACgCAAgGQAAgFgCgDQgDgFgDgCQgEgBgDAAIgIABgAmDCDQgFgDgDgGQgEgGAAgGQAAgGAEgHQADgFAFgEQAGgDAHAAQAHAAAGADQAFAEADAFQAEAGAAAHQAAAHgEAFQgDAGgFADQgGADgHAAQgHAAgGgDgAl+BfQgDADgCAEQgCAEAAAEQAAAEACAEQACADADADIAIACIAIgCQADgCACgEQACgCAAgGQAAgFgCgDQgCgFgDgCIgIgBIgIABgAq+CDQgGgEgCgFQgDgFAAgHQAAgIADgFQADgGAFgDQAFgDAGAAQAGAAADACQAEACADAEIAAgHIAKAAIAAAvIgKAAIAAgGQgDADgEACQgDACgGAAQgGAAgFgDgAq5BfQgEADgBADQgCADAAAGQAAAFACAEQABACAEADQADACAFAAQAFAAACgCQAEgCACgDQACgGAAgDQAAgEgCgFQgCgEgEgCQgCgBgFAAQgFAAgDABgAsfCDQgFgEgDgFQgDgFAAgHQAAgHADgGQADgFAFgEQAGgDAHAAQAIAAAEACQAFACADAFIgFAGIgHgFIgHgBQgEA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AFQAAAFACADQACADADADQAFACAEAAIAHgCIAHgEIAFAFQgDAFgFACQgGADgGgBQgHAAgGgCgABJAWQgGgEgDgFQgDgHAAgGQAAgHADgFQADgGAFgDQAGgDAGAAQAHAAAFADQAGAEADAEQADAGAAAGIgBADIglAAQABAFACADQACADADABIAIACQAFAAAEgCQAEgBACgCIAFAGQgDADgGADQgEABgHAAQgIAAgFgCgABjgEQgCgFgDgEQgEgDgGAAQgFAAgEADQgEAFgBAEIAdAAIAAAAgAgBAYIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBIACgEIABghIAmAAIAAAuIgJAAIAAgmIgUAAIAAAQQAAAIgCAFQgBAGgDACQgEADgFgBgAgwAWQgGgEgCgFQgDgFAAgIQAAgGADgGQADgGAFgDQAFgDAGAAQAGAAADACIAHAGIAAgHIAKAAIAAAuIgKAAIAAgHQgDAFgEACQgDABgGAAQgGAAgFgCgAgrgNQgEADgBACQgCADAAAFQAAAFACADQABADAEADQADACAFAAQAFAAACgCQAEgCACgEQACgEAAgEQAAgDgCgFQgCgDgEgCQgCgCgFAAQgFAAgDACgAhlAXQgFgDgDgEIAFgFQADADADABQAEACAFAAQAFAAAEgCQADgCAAgDQAAgIgKABIgKAAIAAgGIAHAAQAFAAADgBQADgDAAgDQAAgDgDgBQgCgCgFAAQgIgBgGAGIgFgFQADgDAGgDQAEgCAHAAQAJAAAEADQAFAEAAAGQAAAFgCACQgCACgDACQAEAAACADQADAEAAADQAAAEgDADQgCAEgFACQgEABgHAAQgHAAgFgBgAipAWQgFgEgDgFQgEgIAAgFQAAgFAEgHQADgFAFgEQAGgDAIAAQAHAAAEACQAFACADAFIgFAFQgCgDgEgBIgIgCQgEAAgEACQgDABgCADIgDAHIAXAAIAAAGIgXAAQAAAGAFAEQAEAEAHgBQAEAAAEgBQAEgBACgDIAFAFQgDAEgFADQgEABgHAAQgIAAgGgCgAjmAWQgFgEgDgFQgDgFAAgIQAAgGADgGQADgGAFgDQAGgDAGAAQAFAAAEACIAHAGIAAgHIAJAAIAAAuIgJAAIAAgHIgHAHQgEABgFAAQgGAAgGgCgAjggNQgEACgCADQgBAEAAAEQAAAFABADQACAEAEACQACACAFAAQAFAAADgCQADgCACgEQACgDAAgFQAAgEgCgEQgCgDgDgCQgDgCgFAAQgFAAgCACgAmcAYIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBIACgEIABghIAnAAIAAAuIgKAAIAAgmIgTAAIgBAQIgCANQgBAGgDACQgEADgFgBgAqBAVQgGgDgDgFQgDgHAAgGQAAgGADgGQADgFAGgEQAGgDAHAAQAHAAAFADQAFADAEAGQADAGAAAGQAAAGgDAHQgEAFgFADQgFAEgHgBQgIABgFgEgAp8gNQgEACgBAEQgCADAAAEQAAAFACADQABADAEADIAIACQADAAAEgCQAEgDACgDQACgDAAgFQAAgEgCgDQgCgEgEgCQgEgCgDAAIgIACgAvsAVQgFgDgEgFQgDgHAAgGQAAgGADgGQAEgGAFgDQAFgDAHAAQAHAAAGADQAGAEADAFQADAGAAAGQAAAGgDAHQgDAFgGADQgFAEgIgBQgHABgFgEgAvngNQgDABgDAFQgCADAAAEQAAAFACADQADAEADACQAEACADAAIAIgCQAEgDABgDQACgDAAgFQAAgEgCgDQgBgEgEgCIgIgCQgDAAgEACgAO5AXIAAgSIgLAAIgLASIgKAAIAMgTQgGgBgDgDQgDgDAAgFQAAgHAGgEQAFgEAIAAIAWAAIAAAugAOlgOQgCADAAADQAAADACACQADACAFAAIAMAAIAAgPIgMAAQgEAAgEACgALvAXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAK+AXIgNgTIgBgBIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAJtAXIAAguIAJAAIAAARIAKAAQAKAAAFAEQAFACAAAIQAAAIgFAEQgFADgKAAgAJ2AQIAKAAQALAAAAgIQAAgEgDgCQgCgBgGAAIgKAAgAIYAXIAAguIAJAAIAAAugAHuAXIAAg8IgWAAIAAgIIA1AAIAAAIIgWAAIAAA8gAF7AXIAAguIAJAAIAAARIAKAAQAJAAAGAEQAFACAAAIQAAAHgFAFQgGADgJAAgAGEAQIAKAAQAKAAAAgIQAAgEgCgCQgDgBgFAAIgKAAgAFWAXIAAgmIgQAAIAAgIIAqAAIAAAIIgQAAIAAAmgAECAXIAAguIAJAAIAAAugADmAXIAAgUIgYAAIAAAUIgJAAIAAguIAJAAIAAATIAYAAIAAgTIAJAAIAAAugACwAXIgNgUIgFAAIAAAUIgKAAIAAgUIgFAAIgBABIgMATIgKAAIAPgYIgPgWIAKAAIAMARIABACIAFAAIAAgTIAKAAIAAATIAFAAIACgCIALgRIALAAIgQAWIAQAYgAj+AXIgOgUIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAk6AXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAmoAXIgNgUIgKAAIAAAUIgJAAIAAguIAJAAIAAATIAKAAIANgTIALAAIgRAWIARAYgAnkAXIAAghIgYAhIgJAAIAAguIAJAAIAAAiIAZgiIAIAAIAAAugAo1AXIAAguIAVAAQAJAAAEADQAEADAAAGQAAAEgBADQgCADgDABQAEAAACADQADAEAAADQAAAEgCADQgDADgDACIgJABgAosAQIANAAQAFAAACgCQACgBAAgDQAAgIgJABIgNAAgAosgDIAKAAQAFAAADgBQACgBAAgFQAAgGgKAAIgKAAgAsrAXIAAgUIgXAAIAAAUIgKAAIAAguIAKAAIAAATIAXAAIAAgTIAJAAIAAAugAtnAXIAAghIgZAhIgIAAIAAguIAJAAIAAAiIAYgiIAJAAIAAAugAusAXIAAgmIgRAAIAAgIIAqAAIAAAIIgQAAIAAAmgAwFAXIgNgTIgBgBIgJAAIAAAUIgKAAIAAguIAKAAIAAATIAJAAIAOgTIAKAAIgQAWIARAYgAw+AXIAAguIAKAAIAAAugAxaAXIAAgUIgXAAIAAAUIgJAAIAAguIAJAAIAAATIAXAAIAAgTIAKAAIAAAugAIagiIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgAEDgiIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgAw8giIgCgDIgBgDIABgCIACgDIADgBIADABIACADIABACIgBADIgCADIgDABgABdg+IACgIIAFABIAFgBIADgEIAEgGIACgFIgUgwIAKAAIAPAlIAOglIAKAAIgbBAQgDAFgEABQgCACgGAAgAq1g+IABgIIAGABIAFgBQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAGgLIgUgwIAKAAIAOAlIAPglIAKAAIgWA0QgDAJgDADQgCAEgEACQgDACgFAAgAEmg/IAAhGIAJAAIAAAHQACgEAFgCQAEgCAFAAQAGAAAFADQAFADADAGQADAGAAAGQAAAIgDAGQgCAEgGAFQgFACgGAAQgFAAgEgBQgFgDgCgEIAAAegAE2h7QgEADgBACQgCAEAAAEQAAAGACADQABADAEADQACACAFAAQAFAAADgCQADgCACgEQACgDAAgGQAAgEgCgEQgCgDgDgCQgDgCgFgBQgFABgCACgAtkg/IAAhGIAJAAIAAAHQAEgEADgCQAEgCAFAAQAHAAAFADQAFADADAGQADAGAAAGQAAAIgDAGQgDAEgFAFQgFACgHAAQgFAAgEgBQgDgDgEgEIAAAegAtUh7QgDACgCADQgCAFAAADQAAAFACAEQACAEADACQADACAFAAQAFAAACgCQAEgDABgDQACgDAAgGQAAgEgCgEQgBgCgEgDQgCgCgFgBQgFABgDACgAxDhHIAAgOIg2AAIAAhGIAKAAIAAA9IAiAAIAAg9IAKAAIAAA9IAJAAIAAAXgAO6hKIAAgLIgnAAIAAALIgIAAIAAgUIAFAAIAEgHIACggIAlAAIAAAnIAHAAIAAAUgAOehwIgBALIgDAHIAYAAIAAgfIgUAAgArAhKIAAgLIgnAAIAAALIgIAAIAAgUIAFAAQADgCAAgFQACgEAAgIIAAgUIAmAAIAAAnIAHAAIAAAUgArdhlIgDAHIAYAAIAAgfIgUAAgARahXQgGgEgDgFQgDgHAAgHQAAgGADgGQADgFAGgEQAGgDAHAAQAIAAAEACQAFACADAEIgFAGQgCgDgEgBIgIgDIgIADQgEABgCADIgCAHIAXAAIAAAHIgXAAQABAHAEADQAEADAHAAQAEABADgCQAFgCACgDIAFAGQgCAEgGADQgEABgIAAQgHAAgGgCgAPghVIABgIIACAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAAAIACgFIABgiIAnAAIAAAwIgKAAIAAgoIgUAAIAAAQQAAAKgCAFQgBAFgDACQgEACgFAAgALWhXQgGgGgCgDQgDgGAAgIQAAgGADgGQADgFAFgEQAFgDAGAAQAGAAAEACQAEACACAEIAAgHIAKAAIAAAwIgKAAIAAgIQgCAEgEADQgEABgGAAQgGAAgFgCgALbh7QgEADgBACQgCAEAAAEQAAAGACADQABADAEADQAEACAEAAQAEAAAEgCQAEgDABgDQACgDAAgGQAAgEgCgEQgBgCgEgDQgEgCgEgBQgEABgEACgAGjhWQgGgDgCgEIAFgFQADADADABIAIACQAFAAAEgCQADgCAAgEQAAgGgKAAIgJAAIAAgHIAHAAQAGAAACgBQADgCAAgEQAAgDgDgBQgCgDgFAAQgIAAgGAGIgFgGQADgDAFgCQAFgCAGAAQAKAAAEAEQAFADAAAGQAAADgCAEQgCACgDACQAFACABACQADADAAAEQAAAEgDADQgDAFgEABQgEABgHAAQgIAAgEgBgACdhXQgFgEgDgFQgEgHAAgHQAAgFAEgHQADgFAFgEQAGgDAHAAQAHAAAFADQAGACACAEIgGAGIgGgFQgDgCgFAAIgIADQgDACgCADQgCAFAAADQAAAEACAFQACAEADACIAIACQAFAAADgBIAGgGIAGAGQgDAFgFACQgGACgGAAQgHAAgGgCgAAkhXQgEgEgFgFQgDgHAAgHQAAgGADgGQADgFAGgEQAGgDAIAAQAHAAAEACQAFACADAEIgFAGQgCgDgEgBIgIgDQgEAAgEADQgDAAgCAEIgDAHIAXAAIAAAHIgXAAQABAHAEADQAEADAHAAQAEABAEgCQAEgBACgEIAFAGQgCAEgGADQgEABgHAAQgIAAgGgCgAgYhXQgGgFgCgEQgDgHAAgHQAAgGADgGQADgGAFgDQAGgDAFAAQAGAAAEACQADACACAEIAAgHIAKAAIAAAwIgKAAIAAgIQgCAEgDADQgEABgGAAQgFAAgGgCgAgSh7QgEACgCADQgCAFAAADQAAAFACAEQACAEAEACQACACAFAAQAEAAAEgCQADgDABgDQACgDAAgGQAAgEgCgEQgBgCgDgDQgEgCgEgBQgFABgCACgAh8hXQgGgEgDgEQgDgGAAgFIgIAAIAAAVIgJAAIAAgwIAJAAIAAATIAIAAQACgHACgDQAEgGAEgBQAEgDAHAAQAHAAAFADQAGAEADAFQADAGAAAGQAAAHgDAHQgEAFgFADQgFADgHAAQgHAAgEgCgAh4h7QgEAC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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.7,-15.6,229.5,31.3), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEhA3IAAgTIg/AAIgCATIgNAAIAAghIAIAAQAMgWAAgoIAAgNIA+AAIAABLIALAAIgCAhgAD2gcQAAAegKAUIApAAIAAg8IgfAAgAE6AhIAGgMQAFADAGAAQAIAAAHgKIgmhDIASAAIAcA0IAYg0IARAAIgjBFQgJAVgTAAQgKAAgIgEgABzAYQgNgNAAgTQAAgTANgOQAOgNAUAAQAVAAANANQANAOgBATQABASgNAOQgOANgUAAQgVAAgNgNgAB/geQgJAJABANQgBANAJAJQAJAJANAAQANAAAIgJQAJgJAAgNQAAgNgJgJQgIgKgNAAQgNAAgJAKgAkLAYQgNgNAAgTQAAgTANgOQANgNAVAAQAUAAANANQAOAOAAATQAAASgOAOQgNANgVAAQgUAAgNgNgAj/geQgIAJgBANQABANAIAJQAJAJANAAQANAAAJgJQAIgJAAgNQAAgNgIgJQgJgKgOAAQgNAAgIAKgAqdAYQgNgNAAgTQAAgTANgOQANgNAVAAQAUAAANANQANAOABATQgBASgNAOQgNANgUAAQgVAAgNgNgAqRgeQgJAJAAANQAAANAJAJQAIAJAOAAQANAAAIgJQAJgJAAgNQAAgNgJgJQgIgKgNAAQgOAAgIAKgAN+AkIAAhAIgtBAIgPAAIAAhZIAPAAIAABBIAthBIAPAAIAABZgAMeAkIgegnIgPANIAAAaIgQAAIAAhZIAQAAIAAAtIArgtIATAAIglAnIAnAygAK3AkIAAgkQgQAIgKAAQgNAAgJgHQgHgGgBgOIAAgiIAQAAIAAAeQAAARARAAQANAAAKgHIAAgoIAPAAIAABZgAIsAkIAAhZIBCAAIAAAOIgyAAIAAAYIAtAAIAAAOIgtAAIAAAXIAzAAIAAAOgAGcAkIAAhZIAQAAIAABLIAjAAIAAhLIAQAAIAABLIAjAAIAAhLIAPAAIAABZgABEAkIAAhKIgqAAIAABKIgQAAIAAhZIBJAAIAABZgAhBAkIAAhZIAQAAIAABZgAihAkIAAhZIAoAAQAPAAAIAIQAHAGgBAJQABANgNAHQASAGAAAPQgBAMgIAHQgJAGgQAAgAiSAWIAbAAQAQAAABgNQAAgLgTAAIgZAAgAiSgPIAVAAQASAAgBgMQAAgMgPAAIgXAAgAk6AkIAAglIgqAAIAAAlIgQAAIAAhZIAQAAIAAAmIAqAAIAAgmIAQAAIAABZgAmhAkIAAhAIgtBAIgPAAIAAhZIAPAAIAABBIAthBIAQAAIAABZgAoeAkIAAhKIgcAAIAAgPIBJAAIAAAPIgcAAIAABKgArKAkIgegnIgOANIAAAaIgQAAIAAhZIAQAAIAAAtIArgtIATAAIglAnIAmAygAssAkIAAhZIARAAIAABZgAtRAkIAAglIgrAAIAAAlIgQAAIAAhZIAQAAIAAAmIArAAIAAgmIAPAAIAABZg");
	this.shape.setTransform(33.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E40046").s().p("Ay9CFQg3AAgngnQgngnAAg3QAAg2AngnQAngnA3AAMAl7AAAQA3AAAnAnQAnAnAAA2QAAA3gnAnQgnAng3AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-134.7,-13.3,269.4,26.6), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI/BIQgTgUAAgdQAAgbATgVQAVgUAdAAQAgAAAVAXIgWAWQgPgNgQAAQgOAAgJALQgJAKAAAPQAAAQAJAKQAKALAOAAQAQAAAPgPIAWAXQgMAMgMAGQgMAGgSAAQgeAAgUgUgADABIQgUgUAAgdQAAgbAUgVQAUgUAeAAQAeAAAVAVIgUAXQgNgNgTAAQgLAAgIAHQgJAHgDAKIAuAAIAAAZIguAAQAEAMAIAHQAJAHAMAAQARAAAPgPIAVAWQgVAYgiAAQgeAAgTgUgAAlBRQgNgMAAgTQAAgVAPgKQAPgLAYAAQASAAAOAGIAAgDQAAgXgcAAQgTAAgSAHIgJgcQAXgLAcAAQAeAAAPAPQAOAOAAAbIAABNIgkAAIAAgOQgQARgYAAQgTAAgOgLgABEAjQgHAGAAAIQAAAIAFAEQAGAFAJAAQANAAAJgHQAIgGAAgLIAAgGQgKgFgOAAQgMAAgHAEgAn1BIQgUgUAAgdQAAgbAUgVQAUgUAeAAQAfAAAVAXIgWAWQgNgNgSAAQgOAAgJALQgJAKAAAPQAAAQAJAKQAKALAPAAQAPAAAPgPIAWAXQgLAMgMAGQgMAGgTAAQgeAAgTgUgAqZBIQgUgUAAgdQAAgcAUgUQAWgUAeAAQAeAAAVAUQAUAUAAAcQAAAdgUAUQgVAUgfAAQgeAAgVgUgAp/gCQgJAJAAAQQAAAPAKALQAJALAQAAQAPAAAKgLQAJgLAAgPQAAgPgKgKQgJgLgQAAQgQAAgJALgAMUBZIAAgrIgUAAIgcArIgsAAIAigxQgcgKAAgdQAAgTAOgNQAPgMAZAAIBGAAIAACEgALqgJQgGAFAAAHQAAAIAGAEQAGAEAKAAIAaAAIAAggIgaAAQgKAAgGAEgAFFBZIAAiEIAlAAIAABkIAqAAIAAhkIAmAAIAABkIAqAAIAAhkIAmAAIAACEgAgfBZIgbgpIgbApIgnAAIAvhDIgthBIAoAAIAZAnIAZgnIAmAAIgsBAIAuBEgAi4BZIAAiEIAmAAIAACEgAkCBZIAAhQIglA3Igkg2IAABPIglAAIAAiEIAmAAIAkA3IAkg3IAmAAIAACEgArmBZIAAhjIgtAAIAABjIgmAAIAAiEIB5AAIAACEgAi5g5IAAgiIAoAAIAAAig");
	this.shape.setTransform(-37.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-119.7,-11.2,165.2,18.4), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEJBfQAYgDAAgTIAAgDIgPAAIAAgnIApAAIAAAhQAAAYgMALQgKALgYABgAJGA1QgUgUgBgcQAAgdAWgUQATgTAfgBQAgAAATAUQAVAUAAAdQAAAdgVATQgVAVgeAAQgeAAgVgVgAJggVQgJALAAAPQAAAPAKAKQAJALAPAAQARAAAIgKQAKgLAAgPQAAgPgKgLQgLgLgOABQgPAAgKAKgAB+A1QgVgUAAgcQAAgcAVgVQAUgTAfgBQAfAAAUAUQAUAUABAdQgBAcgUAUQgWAVgdAAQgfAAgUgVgACYgVQgKALAAAPQAAAOAKALQAKALAPAAQAQAAAJgKQAKgLgBgPQAAgOgKgMQgJgLgPABQgQAAgJAKgAo3A1QgVgUAAgcQAAgdAVgUQAUgTAfgBQAfAAAUAUQAUAUAAAdQAAAcgUAUQgVAVgfAAQgeAAgUgVgAodgVQgKALAAAPQAAAOAKALQAKALAPAAQAQAAAJgKQAJgLAAgPQAAgPgKgLQgJgLgQABQgPAAgJAKgAtdA2QgTgSAAgfQAAgdASgUQATgTAcgBQAgAAARAVQAQAVAAAdIgBAKIhcAAQADANAIAGQAJAHANAAQARAAAPgNIAWATQgVAZgiAAQgegBgUgTgAsTgFQgBgOgIgHQgHgIgMABQgLgBgIAIQgGAHgDAOIA4AAIAAAAgALNBFIACgeIAIABQAGAAADgDQADgDADgKQAEgHABgWQACgWgBgjIBrAAIAACEIglAAIAAhjIgjAAQAAAcgBAPQgCASgEALQgDALgHAHQgFAGgIACQgIADgJAAQgKAAgJgDgAPYBGIAAhMIg0BMIgjAAIAAiEIAkAAIAABNIA0hNIAjAAIAACEgAIABGIgjgyIgSATIAAAfIglAAIAAiEIAlAAIAAA3IAwg3IArAAIgwA3IA3BNgAAxBGIAAgyIguAAIAAAyIglAAIAAiEIAlAAIAAAzIAuAAIAAgzIAmAAIAACEgAiHBGIAAhjIgoAAIAAghIB1AAIAAAhIgnAAIAABjgAjpBGIAAiEIAmAAIAACEgAkyBGIAAhPIglA2Iglg1IAABOIglAAIAAiEIAmAAIAkA5IAlg5IAlAAIAACEgAqFBGIAAhjIgtAAIAABjIgmAAIAAiEIB5AAIAACEgAuoBGIAAgyIguAAIAAAyIglAAIAAiEIAlAAIAAAzIAuAAIAAgzIAlAAIAACEgAjphMIAAgiIAnAAIAAAig");
	this.shape.setTransform(25.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-76.4,-11.1,204.1,22.1), null);


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
	this.shape.graphics.f("#003B5E").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.part3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.part3();
	this.instance.parent = this;
	this.instance.setTransform(-46,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.part3_1, new cjs.Rectangle(-46,-44,92,88), null);


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
	this.instance.setTransform(65,-147,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.part1_1, new cjs.Rectangle(-224,-147,289,291), null);


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
	this.shape.graphics.f("#003B5E").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5A5IAAgRIg4AAIgCARIgIAAIAAgaIAHAAQAJgRAAgeIAAgMIAxAAIAAA7IALAAIgCAagAjhgKQAAAZgIAQIAlAAIAAgyIgdAAgAgfAfQgKgLAAgPQAAgNAKgLQALgLAPAAQAPABALALIgHAHQgJgKgKAAQgLABgHAHQgHAJAAAJQAAALAHAIQAHAIALAAQAKAAAKgKIAHAGQgNANgOAAQgPABgLgLgApFAaIAHgHQAOANASAAQAJAAAHgFQAGgEAAgJQAAgJgHgDQgHgEgLAAIgKAAIAAgJIAKAAQAJABAHgFQAGgFAAgIQAAgHgFgFQgGgFgKAAQgQAAgLALIgGgHQAIgHAHgDQAHgDAMAAQAOAAAIAHQAJAHAAALQAAAQgRAGQAJADAFAFQAGAGAAAHQAAAMgJAHQgKAJgOgBQgWAAgRgPgAmRAjQgIgGAAgJQAAgMAIgFQAJgFANgBQAIABANACIAAgCQAAgIgGgFQgFgFgKAAQgLAAgKAFIgDgIQANgGAMgBQAOABAJAHQAHAHAAANIAAAqIgKAAIAAgKQgJALgQAAQgLAAgHgGgAmJAJQgFAEAAAGQAAAHAFADQAFAEAHAAQAJAAAHgFQAHgGAAgIIAAgGQgKgDgKAAQgLAAgEAEgAI6AoIAAgPIAMAAIAAAPgAIbAoIg8hMIAABMIgLAAIAAhcIAKAAIA7BJIAAhJIAKAAIAABcgAGTAoIAAglIgmg3IAMAAIAgAuIAgguIAMAAIgnA3IAAAlgAEUAoIAAgHIA9hMIg7AAIAAgJIBJAAIAAAGIg9BNIA9AAIAAAJgADJAoIAAg1IgpA1IgKAAIAAhEIALAAIAAA1IApg1IAKAAIAABEgAB2AoIAAhEIAKAAIAABEgAAoAoIAAhEIAhAAQAKAAAGAFQAGAEAAAIQAAALgLAEQAPAEAAANQAAAJgHAEQgGAGgMAAgAAyAfIAWAAQAIAAAEgDQAFgEAAgEQAAgGgFgCQgEgDgJgBIgVAAgAAyABIAVAAQAHgBADgCQAEgBAAgHQAAgEgEgCQgDgEgHAAIgVAAgAhyAoIAAg1IgpA1IgKAAIAAhEIALAAIAAA1IApg1IAKAAIAABEgAkUAoIAAg1IgpA1IgKAAIAAhEIAKAAIAAA1IApg1IAKAAIAABEgAm3AoIAAgeIgoAAIAAAeIgKAAIAAhEIAKAAIAAAdIAoAAIAAgdIAKAAIAABEgAI9AOIgDhCIAMAAIgEBCgACogqQgFgGgBgGIAHgCQADAKAJgBQAJABADgKIAGACQAAAGgGAGQgFAEgHAAQgIAAgFgEgAk1gqQgGgGAAgGIAHgCQACAKAJgBQAJABADgKIAHACQgBAHgFAFQgFAEgIAAQgHAAgFgEgAB1grIAAgMIALAAIAAAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-58.1,-5.6,116.4,11.3), null);


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
	this.shape.graphics.f("#003B5E").s().p("AuFDIQhTAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BTAAIcLAAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-110.1,-20,220.3,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00A1A2","#00D7DB"],[0,1],169.6,293.8,-169.5,-293.7).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

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
	this.initialize(mode,startPosition,loop,{loop:35});

	// timeline functions:
	this.frame_175 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(175).call(this.frame_175).wait(1));

	// part2
	this.instance = new lib.part2_1();
	this.instance.parent = this;
	this.instance.setTransform(256.6,5.8,0.999,0.999,101.6,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-0.1,scaleX:1,scaleY:1,rotation:0,x:8.1,y:-0.1},15,cjs.Ease.cubicOut).wait(20).to({regX:0.2,regY:0,rotation:-30,x:-14.2,y:-17.4},15).wait(60).to({regX:0.1,regY:-0.1,rotation:0,x:8.1,y:-0.1},15,cjs.Ease.cubicInOut).wait(51));

	// part1
	this.instance_1 = new lib.part1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.2,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:37.5},15,cjs.Ease.cubicOut).wait(20).to({x:58.1,y:-9},15).wait(60).to({x:37.5,y:-19.7},15,cjs.Ease.cubicInOut).wait(51));

	// part3
	this.instance_2 = new lib.part3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.3,12.9,1.03,1.03,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({x:-86.5,y:84.1},10,cjs.Ease.cubicOut).wait(50).to({x:-20.8,y:18.4},10,cjs.Ease.cubicInOut).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.2,-166.7,307,306.5);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,258.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

	// btn
	this.instance_1 = new lib.btn("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,205,1.05,1.05,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// t2_3
	this.instance_2 = new lib.t2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-298.9,-112.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:-58.4},15,cjs.Ease.cubicOut).wait(1));

	// t2_2
	this.instance_3 = new lib.t2_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-237.7,-158.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:2.8},15,cjs.Ease.cubicOut).wait(6));

	// t2_1
	this.instance_4 = new lib.t2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-281.2,-187.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:-40.7},15,cjs.Ease.cubicOut).wait(11));

	// t1
	this.instance_5 = new lib.t1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-197.2,-224.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:43.3},15,cjs.Ease.cubicOut).wait(16));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-296.5,-241);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-56},15,cjs.Ease.cubicOut).wait(16));

	// box
	this.instance_7 = new lib.box();
	this.instance_7.parent = this;
	this.instance_7.setTransform(292.7,34,0.96,0.96,0,0,0,303,-12.7);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",14,14,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359,-300,759.9,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,300,759.9,600);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/part1.png", id:"part1"},
		{src:"images/part2.png", id:"part2"},
		{src:"images/part3.png", id:"part3"}
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