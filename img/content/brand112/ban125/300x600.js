(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,610);


(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,88);


(lib.logo_tg1 = function() {
	this.initialize(img.logo_tg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,52);


(lib.logo_tg2 = function() {
	this.initialize(img.logo_tg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,114);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,52);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,93);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,93);// helper functions:

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
	this.shape.graphics.f("#3C3F50").s().p("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AGAAIAKACQACABAFAFIAAgHIAJAAIAAAwIgJAAIAAgHQgEAEgDACQgEACgGAAQgGAAgFgCgAKXA5QgDACgCADQgDAEAAAFQAAAFADAEQACAEADACQADACAEAAQAFAAAEgCQADgCACgEQACgFAAgEQAAgDgCgGQgCgDgDgCQgEgCgFAAQgEAAgDACgAItBeQgGgEgDgGQgDgFAAgIQAAgHADgGQADgFAGgEQAFgDAIAAQAGAAAGACQAGAEADADIgGAGIgGgFQgEgBgEAAQgFAAgEACQgDACgDADQgCAEAAAFQAAAFACAEQADAEADACQAFACAEAAQAEAAAEgCQADgCADgCIAGAFQgEAFgFACQgEADgHgBQgIAAgGgCgAF9BeQgFgEgEgFQgDgHgBgHQABgHADgGQAEgGAFgDQAFgDAIAAQAHAAAGADQAGADADAGQADAGAAAHQAAAHgDAHQgDAFgGAEQgGACgHAAQgHAAgGgCgAGCA5IgGAFQgCAGAAADQAAAEACAFQADAEADACQADACAFAAQAEAAADgCQAEgCADgEQACgFAAgEQAAgDgCgGQgDgDgEgCQgDgCgEAAQgEAAgEACgAlHBgIgCgCIgBgEIABgDIACgCIADgBIAEABIACACIAAADIAAAEIgCACIgEAAgAnYBeQgGgEgDgGQgDgGAAgHQAAgHADgGQADgFAGgEQAFgDAIAAQAGAAAGACQAHAEACADIgHAGIgGgFQgDgBgFAAQgFAAgDACQgDACgCADQgCAEAAAFQAAAFACAEQABADAEADQAFACADAAQAFAAADgCQAFgCABgCIAHAFQgEAFgEACQgGADgHgBQgHAAgGgCgAsiBeQgFgEgDgFQgDgHAAgHQAAgHADgGQADgGAFgDQAGgDAGAAIAKACQACABAEAFIAAgHIAKAAIAAAwIgKAAIAAgHQgDAEgDACQgEACgGAAQgGAAgGgCgAscA5QgDACgDADQgCAGAAADQAAAEACAFQADAEADACQADACAFAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgCgEQgCgDgDgCQgDgCgFAAQgFAAgDACgAtXBeQgEgBgDgFIAEgFIAHAEQAEACAFAAQAEAAAFgCQADgCAAgEQAAgHgLAAIgJAAIAAgGIAIAAQAFAAADgCQACgCAAgEQAAgDgCgCQgCgCgGAAQgIAAgGAGIgFgGQAEgDAEgCQAEgCAIAAQAJAAAEADQAGAEgBAGIgBAHQgDAEgDAAQAEACADADQADADgBAEQABAEgDADQgDADgFADQgFACgGgBQgHAAgGgCgANWBfIAAgSIgLAAIgLASIgLAAIAMgTQgFgCgDgDQgDgDAAgGQAAgIAFgDQAFgEAJAAIAWAAIAAAwgANCA4QgDACABAEQgBADADADQAEACAEAAIAMAAIAAgQIgMAAQgEAAgEACgAMgBfIAAgVIgYAAIAAAVIgJAAIAAgwIAJAAIAAATIAYAAIAAgTIAKAAIAAAwgALnBfIAAgVIgZAAIAAAVIgJAAIAAgwIAJAAIAAATIAZAAIAAgTIAJAAIAAAwgAJmBfIAAgoIgQAAIAAgIIArAAIAAAIIgRAAIAAAogAINBfIAAgjIgaAjIgJAAIAAgwIAKAAIAAAkIAZgkIAJAAIAAAwgAFiBfIgOgUIgKAAIAAAUIgKAAIAAgwIAKAAIAAATIAIAAIACAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIANgRIALAAIgRAWIARAagAEqBfIAAgjIgaAjIgJAAIAAgwIAKAAIAAAkIAZgkIAJAAIAAAwgADSBfIAAgwIAWAAQAJAAAFADQAEAEAAAFQAAAFgCACQgCADgDABQAEACADADQADADAAAEQgBADgCAEIgFAFQgEACgGgBgADcBYIAMAAQAGAAACgCQADgBAAgDQAAgIgLABIgMAAgADcBEIAKAAQAGgBACgBQADgCgBgEQABgGgLAAIgKAAgACkBfIAAgSIgLAAIgMASIgKAAIAMgTQgFgCgDgDQgDgDgBgGQABgHAFgEQAFgEAJAAIAXAAIAAAwgACQA4QgCACgBAEQABADACADQAEACADAAIANAAIAAgQIgNAAQgDAAgEACgAiWBfIAAgwIAKAAIAAAoIATAAIAAgoIAJAAIAAAoIAUAAIAAgoIAJAAIAAAwgAiuBfIAAgjIgZAjIgJAAIAAgwIAJAAIAAAkIAagkIAIAAIAAAwgAl7BfIAAgwIAKAAIAAASIALAAQAJgBAFAEQAGADAAAJQAAAIgGAEQgFADgJAAgAlxBYIAKAAQALAAAAgJQAAgDgDgCQgEgCgEgBIgKAAgAmfBfIAAgoIgRAAIAAgIIArAAIAAAIIgQAAIAAAogAn5BfIAAgwIAJAAIAAAwgAoQBfIAAgVIgZAAIAAAVIgJAAIAAgwIAJAAIAAATIAZAAIAAgTIAJAAIAAAwgApHBfIgNgUIgGAAIAAAUIgKAAIAAgUIgFAAIgNAUIgMAAIARgaIgQgWIAKAAIANARQAAAAAAABQAAAAAAAAQAAAAABAAQAAABAAAAIABAAIAEAAIAAgTIAKAAIAAATIAEAAIACAAIANgTIALAAIgQAWIAQAagAn4AjIgCgCIgBgDIABgEIACgCIAEgBIADABIACACIABAEIgBADIgCACIgDABgAiGgJIAFgHIADgHIgEgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABgBAAAAQAEAAABADQADACAAAEQAAAGgDAGQgEAGgGAEgAgRgLIAAgMIhDAAIAAgxIAJAAIAAAoIAUAAIAAgoIAKAAIAAAoIAUAAIAAgoIAJAAIAAAoIAHAAIAAAVgAHigZQgFgFgEgFQgDgFAAgIQAAgIADgEQAEgGAFgEQAFgDAJgBQAGABAGACQAGACADAEIgGAGQgDgDgDgCQgEgCgFAAQgFAAgCACQgEACgDADQgCAEAAAEIAYAAIAAAGIgYAAQABAHAEAEQAEADAIAAQAEAAAEgBQADgBADgEIAGAGQgDAEgGADQgGACgGAAQgGAAgIgDgAGlgZQgFgFgDgEQgDgHAAgHQAAgHADgGQADgGAFgDQAGgDAGgBIAKACQADACADAFIAAgHIAKAAIAAAxIgKAAIAAgIQgDAFgDACQgEACgGAAQgGAAgGgDgAGrg/QgDADgDADQgCAFAAAEQAAAEACAFQADAEADACQADACAFAAQAFAAADgCQADgCACgEQACgEAAgFQAAgFgCgEQgCgDgDgDQgDgCgFAAQgFAAgDACgADwgWIABgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQACgBAAgFIABgiIAoAAIAAAxIgKAAIAAgpIgVAAIAAARQAAAJgCAGQgBAFgDACQgDACgGABgAAIgZQgFgEgDgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAIgBQAHABAFADQAHADACAGQAEAHAAAGQAAAHgEAHQgCAFgHAEQgGADgGAAQgIAAgGgDgAAOg/QgDADgDADQgCAEAAAFQAAAFACAEQADAFADABQAEACAEAAQADAAAFgCQADgBACgFQACgEAAgFQAAgFgCgEQgCgDgDgDIgIgCIgIACgAlUgZQgHgEgCgFQgEgHAAgHQAAgGAEgHQACgGAHgDQAFgDAHgBQAJABAEADQAHADACAGQAEAGAAAHQAAAIgEAGQgCAFgHAEQgEADgJAAQgHAAgFgDgAlQg/QgDADgCADQgCAEAAAFQAAAFACAEQACAFADABQAEACAEAAQAFAAAEgCQADgBACgFQACgEAAgFQAAgFgCgEQgCgDgDgDIgJgCIgIACgArzgZQgGgFgDgFQgDgFAAgIQAAgHADgFQADgGAGgEQAFgDAIgBQAGABAGACQAHAEACADIgGAGIgGgFQgEgBgFgBQgEAAgEACQgDADgDADQgCAFAAAEQAAAEACAFQADAEADACQAFACADAAQAFAAAEgCQADgCADgDIAGAHQgDAEgGACQgEACgIABQgHAAgGgDgAGLgXIgMgUIgCgCIgJAAIAAAWIgKAAIAAgxIAKAAIAAATIAIAAIACgBIANgSIAMAAIgSAXIASAagAFTgXIAAgkIgaAkIgJAAIAAgxIAKAAIAAAjIAZgjIAJAAIAAAxgADggXIgNgUIgBgCIgJAAIAAAWIgKAAIAAgxIAKAAIAAATIAIAAIACgBIANgSIAMAAIgSAXIASAagACogXIAAgkIgaAkIgJAAIAAgxIAKAAIAAAjIAZgjIAJAAIAAAxgABQgXIAAgxIAWAAQAKAAADAEQAFACAAAHQAAAEgBACQgCACgEACQAEABADADQADADgBAFQAAAEgBADIgHAFQgDABgGABgABagfIANAAQAGAAACgBQACgCAAgEQAAgGgKgBIgNAAgABagzIALAAQAEAAAEgCQACgCAAgDQAAgHgKAAIgLAAgAiZgXIAAgWIgYAAIAAAWIgJAAIAAgxIAJAAIAAATIAYAAIAAgTIAJAAIAAAxgAjSgXIAAgkIgaAkIgIAAIAAgxIAJAAIAAAjIAZgjIAJAAIAAAxgAkZgXIAAgpIgRAAIAAgIIAsAAIAAAIIgRAAIAAApgAlvgXIgNgUIgCgCIgJAAIAAAWIgJAAIAAgxIAJAAIAAATIAIAAIACgBIAOgSIALAAIgRAXIARAagAmpgXIAAgxIAKAAIAAAxgAnAgXIAAgWIgYAAIAAAWIgKAAIAAgxIAKAAIAAATIAYAAIAAgTIAKAAIAAAxgAorgXIAAgxIAKAAIAAARIAKAAQAKAAAFAEQAFADAAAJQAAAIgFADQgFAFgKAAgAohgfIAKAAQALAAgBgJQABgDgDgDQgEgCgEAAIgKAAgApPgXIAAgpIgRAAIAAgIIArAAIAAAIIgRAAIAAApgApzgXIAAgkIgZAkIgJAAIAAgxIAJAAIAAAjIAZgjIAJAAIAAAxgAq5gXIAAgpIgSAAIAAgIIAsAAIAAAIIgRAAIAAApgAsUgXIAAgxIAKAAIAAAxgAsrgXIAAgjIgQAVIgGAAIgRgVIAAAjIgJAAIAAgxIAKAAIATAZIATgZIAJAAIAAAxgAmnhUIgCgCIgBgEIABgDIACgBIAEgBIACABIADABIAAADIAAAEIgDACIgCABgAsShUIgCgCIgBgEIABgDIACgBIADgBIADABIACABIABADIgBAEIgCACIgDABgAjeh4IACgIIAGABIAEgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAFgNIgUgwIAKAAIAPAlIAPglIAKAAIgWA2QgDAIgDADQgCAEgEADQgFACgEAAgAH+h4IAAhIIAKAAIAAAHQADgFAEgCQAFgBAFAAQAGAAAFADQAGADADAGQADAGAAAHQAAAIgDAFQgDAGgGADQgFADgGABQgGgBgEgCQgFgCgCgEIAAAfgAIPi3QgEAEgBADQgCADAAAFQAAAGACADQABADAEADQAEACAEAAQAFAAADgCQAEgDABgDQACgDAAgGQAAgFgCgDQgBgDgEgEQgDgBgFAAQgEAAgEABgAgLh4IAAhIIAJAAIAAAHQACgFAEgCQAFgBAFAAQAGAAAFADQAGADADAGQADAGAAAHQAAAIgDAFQgDAGgGADQgFADgGABQgGgBgEgCQgEgCgCgEIAAAfgAAEi3QgDADgBAEQgCADAAAFQAAAGACADQABADADADQADACAFAAQAFAAADgCQADgDACgDQACgDAAgGQAAgFgCgDQgCgDgDgEQgDgBgFAAQgFAAgDABgAHPiSQgFgDgEgGQgDgGAAgGQAAgIADgGQAEgHAFgCQAFgDAHAAQAHAAAGACQAGAFADAEQACAGABAHIgBAEIgmAAQAAAEACAEQADADADABQAFADAEAAIAIgDIAGgEIAGAHQgDADgGACQgHADgFAAQgIAAgGgEgAHqisQgBgGgEgEQgDgDgHAAQgFAAgEADQgEADgBAHIAdAAIAAAAgAsHiSQgFgDgEgGQgDgFAAgHQAAgIADgGQAEgGAFgDQAFgDAIAAQAGAAAGACQAGAFACAEQADAGAAAHIAAAEIgmAAQAAAEACAEQADADADABQAFADAEAAIAIgDIAHgEIAEAHQgDADgFACQgGADgGAAQgGAAgIgEgArsisQAAgGgFgEQgEgDgFAAQgGAAgEADQgEADgBAHIAdAAIAAAAgALZiOIACgJIACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIACgEIABgjIAnAAIAAAwIgJAAIAAgoIgUAAIgCAfQgCAGgDACQgDADgHAAgAKuiSQgFgDgEgGQgDgGAAgGQAAgIADgGQAEgGAFgDQAGgDAHAAQAIAAAGADQAFADAEAGQACAGAAAIQAAAGgCAGQgEAGgFADQgHADgHABQgHgBgGgDgAKzi3IgFAHQgCAEgBAFQABADACAFQACAEADABQAEADAEAAQAEAAAEgDQAEgBACgEQACgFAAgDQAAgFgCgEQgCgEgEgDQgEgBgEAAQgEAAgEABgAJ5iRQgFgCgDgDIAFgHQACAEAEACQAFABAEAAQAFAAAEgCQADgCAAgEQAAgHgLAAIgKAAIAAgHIAIAAQAHAAACgCQACgBAAgDQAAgDgCgDQgDgCgFABQgHgBgHAGIgFgFQADgEAGgDQAEgBAHAAQAIAAAGADQAFAEgBAGQAAAEgCADQgBADgDACQAEAAACADQADADAAAFQAAAEgDAEQgCADgGACQgEACgHAAQgHgBgFgCgAJEiSQgFgDgEgGQgDgFAAgHQAAgJADgFQAEgGAFgDQAGgDAHAAQAIAAAGADQAFADAEAGQACAGAAAIQAAAGgCAGQgEAGgFADQgHADgHABQgHgBgGgDgAJKi3QgDACgDAFQgCADAAAGQAAAEACAEQADAFADAAQADADAEAAQAFAAADgDQAEAAACgFQACgEAAgEQAAgGgCgDQgCgFgEgCIgIgBIgHABgAFYiPIgDgDIgBgDIABgDIADgDIACgBIAEABIADADIABADIgBADIgDADIgEABgABuiRQgFgCgEgDIAFgHIAHAGQAEABAEAAQAFAAAFgCQADgCAAgEQAAgHgLAAIgKAAIAAgHIAIAAQAGAAADgCQACgBAAgDQAAgDgCgDQgCgCgGABQgJgBgFAGIgFgFQADgFAFgCQAFgBAGAAQAJAAAGADQAEAEAAAGIgCAHQgCAEgDABQAEABADACQACAEAAAEQAAAEgCAEQgDADgFACQgEACgIAAQgGgBgFgCgAiciSQgFgEgEgFQgCgFAAgIQAAgHACgGQAEgFAFgEQAFgDAJAAQAGgBAGADQAGADADAEIgHAGIgGgFQgEgCgEABQgFAAgDABQgEADgCAEQgCAEAAAEQAAAEACAFQACAEAEACQAFACADAAQAEAAAEgCQADgBADgDIAHAGQgEAEgFACQgEADgIAAQgHgBgHgDgAkaiSQgFgEgEgFQgCgFAAgIQAAgHACgGQAEgFAFgEQAGgDAJAAQAFgBAGADQAGADADAEIgGAFQgCgCgEgDQgEgBgEAAQgFAAgDABQgEACgCADQgDAEAAADIAYAAIAAAHIgYAAQAAAGAFAFQAEAEAIAAQAEAAAEgCQAEgCACgDIAGAGQgDAEgGACQgFACgGABQgIgBgHgDgAlXiSQgFgDgDgGQgDgFAAgIQAAgHADgGQADgGAFgDQAGgDAGAAQAEAAAGABQAEACACAFIAAgHIALAAIAAAwIgLAAIAAgHQgCAEgEACQgEACgGABQgGgBgGgDgAlRi3QgEAEgBADQgCADAAAFQAAAGACADQABADAEADQAEACAEAAQAFAAADgCQADgDACgDQACgDAAgGQAAgFgCgDQgCgDgDgEQgDgBgFAAQgEAAgEABgAnDiSQgFgBgDgHQgEgFAAgGIgIAAIAAAVIgKAAIAAgwIAKAAIAAATIAIAAQABgGADgFQAFgEAEgDQAGgDAGABQAHAAAFADQAGACACAHQAEAHAAAGQAAAHgEAGQgCAGgGADQgFAEgHAAQgHgBgGgDgAm+i3QgDACgDAFQgBAEAAAEQAAAGABADQADAFADAAQADACAFABQAFgBACgCQADgCACgDQACgDAAgGQAAgFgCgDQgCgFgDgCQgCgBgFAAQgFAAgDABgAohiOIABgJIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABgBABgDIABgjIAnAAIAAAwIgJAAIAAgoIgVAAIAAARQAAAKgBAEQgCAGgDACQgDADgGAAgAMaiQIAAgwIAJAAIAAARIALAAQAKABAFADQAEAEAAAIQAAAIgEADQgGAEgJAAgAMjiXIAKAAQALAAAAgIQAAgFgCgCQgFgBgEAAIgKAAgAG0iQIgGgNIgfAAIgGANIgKAAIAbhGIAIAAIAcBGgAGrimIgMgiIgOAiIAaAAgAEiiQIAAgwIAVAAQAJAAAFADQAEADAAAGQAAAFgBACQgCADgEACQAFABACACQACADAAAFQAAAFgCACQgBACgFADQgDABgGAAgAEriWIANAAQAFAAADgDQACgBAAgDQAAgIgKAAIgNAAgAErisIALAAQAFAAADgBQACgDAAgCQAAgHgKAAIgLAAgAEKiQIAAgwIAJAAIAAAwgAD1iQIgNgTIgBgCIgKAAIAAAVIgKAAIAAgwIAKAAIAAATIAIAAIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAOgRIAKAAIgRAXIARAZgAC8iQIAAgjIgZAjIgIAAIAAgwIAJAAIAAAjIAZgjIAJAAIAAAwgABTiQIAAgjIgaAjIgJAAIAAgwIAKAAIAAAjIAZgjIAJAAIAAAwgAg3iQIgNgSIgOASIgLAAIATgYIgTgYIAMAAIANARIANgRIAMAAIgTAYIATAYgAhwiQIAAgwIAKAAIAAAwgAl2iQIAAgUQgHADgHABQgGgBgEgCQgEgCgDgDQgCgEAAgGIAAgOIAKAAIAAANQAAAFADACQACACAGABQAHAAAFgDIAAgUIAJAAIAAAwgAoxiQIgNgVIgLAAIAAAVIgJAAIAAgwIAJAAIAAATIAIAAIADgBIANgSIALAAIgRAXIARAZgAppiQIAAgjIgaAjIgJAAIAAgwIAKAAIAAAjIAagjIAIAAIAAAwgArBiQIAAgwIAXAAQAIAAAEADQAFADABAGQgBAFgCACQgBADgDACQAEABADACQACADAAAFQAAAFgCACQgCACgEADQgEABgGAAgAq3iWIANAAQAGAAABgDQADgBAAgDQAAgIgKAAIgNAAgAq3isIAKAAQAHAAABgBQADgDAAgCQAAgHgLAAIgKAAgAsqiQIAAgfIglAAIAAAfIgKAAIAAhHIAKAAIAAAeIAlAAIAAgeIAKAAIAABHgAELjMIgCgCIAAgEIAAgCIACgCIAEgCIADACIACACIABACIgBAEIgCACIgDABgAhujMIgCgCIgBgEIABgCIACgCIADgCIAEACIABACIABACIgBAEIgBACIgEABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-86.3,-21.6,172.7,43.3), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-113.8,-30.5,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-113.8,-30.5,227.6,61), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-115.6,-31,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-115.6,-31,231.4,62), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-118,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-118,-26,236,52), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00D1D2").s().p("AhRBSQghgiAAgwQAAgvAhgiQAighAvAAQAwAAAiAhQAhAiAAAvQAAAwghAiQgiAhgwAAQgvAAgighg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(-11.5,-11.5,23,23), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo_tg2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo_tg2();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-28.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_tg2_mc, new cjs.Rectangle(-28.5,-28.5,57,57), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.iqos_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3F50").s().p("AhxGrIgegeIgEgCIgDgBIiGAAQgqAAgYgVQgXgSAAgeIAAhyQABgFADgDQAEgEAFAAICZAAQApAAAZAUQAWATAAAeIAAA1QAAAGgDADQgEADgEABIgFAAQgFgBgEgDQgDgDAAgGIAAg1QAAgIgDgGQgEgHgFgGQgIgGgNgEQgLgDgQAAIiFAAIgDABIgBADIAABdQAAAIAEAHQACAHAHAFQAHAHANADQAMADAPAAICOAAIAHABIAGAFIAkAkQADADAAAFQAAAFgDAEIgDADQgEADgEAAQgHAAgCgDgAEcGKQgOAAgNgFQgNgGgJgJIgHgGQgDgDgBgGQABgFADgDIADgEQADgDAFAAQAFAAAEADIAHAHQAGAFAHADQAHADAJAAIBgAAQAOABAKgDQAKgDAGgEIAFgHQACgEAAgHQAAgHgCgDQgCgEgDgEQgGgEgKgDQgKgCgOAAIhRAAQglAAgVgQQgRgOAAgXIAAgGQAAgYARgOQAVgPAlAAIBZAAQANAAAMAFQAMAEAKAJIAIAIQAEADAAAFQAAAFgCAEIgDADQgEAEgFAAQgFABgEgEIgIgHQgFgFgJgEQgHgCgHAAIhZAAQgNAAgLACQgKADgGAFQgDACgCAEQgBAEAAAHQAAAHABAEQACAEADADQAGAFAKACQALACANABIBRAAQAmgBATAQQASANAAAYIAAAGQAAAYgSAOQgTAPgmAAgAARGKQgoAAgZgVQgWgSAAgeIAAg5QAAgeAWgTQAZgUAoAAIBOAAQApAAAYAUQAWATABAeIAAA5QgBAegWASQgYAVgpAAgAgJDnQgMAEgJAGQgFAGgDAHQgEAGABAIIAAA5QgBAIAEAHQADAHAFAFQAJAHAMADQALADAPAAIBOAAQAPAAAMgDQAMgDAHgHQAHgFADgHQAEgHAAgIIAAg5QAAgJgEgFQgDgHgHgGQgHgGgMgEQgMgDgPAAIhOAAQgPAAgLADgAm6GKQgEAAgFgDQgDgEAAgFIAAirQAAgFADgDQAFgEAEAAIAEAAQAGAAADAEQAEAEAAAEIAACrQAAAFgEAEQgDADgGAAgAhtAxQgpABghgVQgggTgTggQgSgggBgmQgBgmAUgkIBvi/QAUgiAigTQAhgTAkAAQAmAAAgATQAiATAUAiIBvC/QAUAkgBAmQgBAmgSAgQgTAgggATQgiAVgogBgAhJlLQghAOgaAaQgaAbgOAhQgPAkAAAmQAAAnAPAiQAOAhAaAcQAaAZAhANQAkAQAlAAQAmAAAkgQQAhgNAagZQAagcAOghQAPgiAAgnQAAgmgPgkQgOghgagbQgagaghgOQgkgPgmAAQglAAgkAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iqos_logo, new cjs.Rectangle(-45.5,-43,91,86), null);


(lib._img_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-125,-22,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._img_1, new cjs.Rectangle(-125,-22,250,44), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-79,-152.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-79,-152.5,158,305), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBHIgGgBIACgMIAJAAIAHAAQADgCACgEQACgBADgJIADgIIgehHIAQAAIAWA3IAWg3IAOAAIggBPQgGANgDAEQgDAGgGADQgGADgHAAgAlQA5IAAgXIhOAAIAAAXIgNAAIAAgkIAKAAQADgDACgFIADgOIAChFIBHAAIAABbIAPAAIAAAkgAmKgWQAAASgCAIQgBAJgEAIIAzAAIAAhNIgrAAgAGdAjQgCgCgBgCQgBgCAAgDIABgEQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQADgCADAAQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIADAEIABAEQAAAEgCADQgDACgEAAgAEPAfQgJgFgEgJQgFgJAAgJQAAgJAFgKQAFgIAIgFQAIgFAMgBQAKAAAIAFQAHACAFAIIgJAJQgDgGgGgBQgGgDgGAAQgHAAgFADQgFADgDAGQgEAGAAAGQAAAFAEAHQADAGAEADQAGADAHAAQAGAAAGgDQAGgCADgFIAJAJQgFAHgHADQgHADgLAAQgMABgIgFgAjoAjIACgMIADAAQAEAAACgCQACgCABgFIACgzIA6AAIAABHIgOAAIAAg6IgeAAIgBAYQgBAMgCAJQgCAHgEAEQgEADgKAAgAknAfQgKgGgEgIQgFgHABgLQgBgLAFgIQAFgJAJgEQAIgGALAAQALAAAIAGQAIAEAFAJQAFAJAAAKQAAAKgFAIQgEAJgJAFQgIAFgLgBQgLABgIgFgAkggWQgFAEgEAFQgCAFAAAHQAAAHACAFQAFAHAEACQAGADAGAAQAGAAAFgDQAFgDAEgGQADgFAAgHQAAgHgDgFQgDgFgGgEQgFgDgGAAQgGAAgGADgAFQAiIAAhHIAOAAIAAAaIAPAAQAPABAIAFQAHAFAAALQAAALgIAHQgIAFgOAAgAFeAXIAPAAQAPAAABgMQgBgGgDgDQgDgCgJAAIgPAAgADgAiIAAgzIgmAzIgNAAIAAhHIAOAAIAAAzIAlgzIANAAIAABHgAB4AiIAAg6IgZAAIAAgNIBAAAIAAANIgZAAIAAA6gABEAiIAAgzIgmAzIgNAAIAAhHIAOAAIAAAzIAlgzIAMAAIAABHgAgQAiIAAgdQgKAEgLAAQgIAAgGgDQgGgDgDgFQgEgFAAgJIAAgVIAOAAIAAAUQAAAIAEADQAGADAHAAQAJAAAIgDIAAgfIANAAIAABHgAGcAEIgBhKIAPAAIgBBKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-42.8,-7.1,85.7,14.2), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34303D").s().p("AuoDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAIdRAAQBSAAA7A7QA6A6AABSIAAACQAABSg6A6Qg7A6hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-113.6,-20,227.2,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EFECE6","#F6F4F0"],[0,1],0,-300.1,0,300.1).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3F50").s().p("AAEAyIAAhPIgaAMIAAgSIAdgOIAQAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(-2.3,-5,4.7,10), null);


(lib.logo_tg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.logo_tg2_mc();
	this.instance.parent = this;
	this.instance.setTransform(2,-1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1));

	// Слой_1
	this.instance_1 = new lib.logo_tg1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-29.5,57,57);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:103.6},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-103.6},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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
	this.instance.setTransform(35.8,247.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191));

	// logo
	this.instance_1 = new lib.iqos_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96.7,246.8,0.6,0.6,0,0,0,1.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191));

	// bg
	this.instance_2 = new lib.bg();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).to({alpha:1},15).wait(1));

	// btn
	this.instance_3 = new lib.btn("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.6,177.8,1.1,1.1,0,0,0,-0.6,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:false},0).wait(76));

	// t1
	this.instance_4 = new lib.t1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-14,152);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({y:114,alpha:1},10,cjs.Ease.cubicOut).wait(10).to({y:44},10,cjs.Ease.quadInOut).wait(10).to({y:-26},10,cjs.Ease.quadInOut).wait(76));

	// t2
	this.instance_5 = new lib.t2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-14,144,0.984,0.984);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({y:106,alpha:1},10,cjs.Ease.quadInOut).wait(10).to({y:36},10,cjs.Ease.quadInOut).wait(76));

	// t3
	this.instance_6 = new lib.t3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-14,144);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({y:106,alpha:1},10,cjs.Ease.quadInOut).wait(76));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_55 = new cjs.Graphics().p("AElm2QgighAAgwQAAgwAigiQAhghAwAAQAwAAAiAhQAhAiAAAwQAAAwghAhQgiAigwAAQgwAAghgig");
	var mask_graphics_56 = new cjs.Graphics().p("AEfmwQgjgjAAgxQAAgyAjgjQAjgjAyAAQAxAAAjAjQAjAjAAAyQAAAxgjAjQgjAjgxAAQgyAAgjgjg");
	var mask_graphics_57 = new cjs.Graphics().p("AD2mGQgsgsAAhAQAAg+AsgtQAsgsBAAAQA/AAAsAsQAtAtAAA+QAABAgtAsQgsAsg/AAQhAAAgsgsg");
	var mask_graphics_58 = new cjs.Graphics().p("ACIkVQhGhFAAhkQAAhjBGhHQBFhGBkAAQBjAABHBGQBGBHAABjQAABkhGBFQhHBGhjAAQhkAAhFhGg");
	var mask_graphics_59 = new cjs.Graphics().p("AhOg4Qh4h3AAirQAAiqB4h5QB2h3CrAAQCpAAB5B3QB4B5AACqQAACrh4B3Qh5B2ipAAQirAAh2h2g");
	var mask_graphics_60 = new cjs.Graphics().p("AmxEzQjJjJAAkfQAAkeDJjMQDJjJEfAAQEdAADNDJQDJDMAAEeQAAEfjJDJQjNDJkdAAQkfAAjJjJg");
	var mask_graphics_61 = new cjs.Graphics().p("AsRMSQlElDAAnPQAAnJFElIQFDlEHOAAQHKAAFIFEQFEFIAAHJQAAHPlEFDQlIFEnKAAQnOAAlDlEg");
	var mask_graphics_62 = new cjs.Graphics().p("AywSxQntnuAArDQAAq7Htn1QHuntLCAAQK8AAH1HtQHtH1AAK7QAALDntHuQn1Htq8AAQrCAAnuntg");
	var mask_graphics_63 = new cjs.Graphics().p("A6ya0QrCrCAAvyQAAvnLCrLQLBrCPxAAQPoAALLLCQLCLLAAPnQAAPyrCLCQrLLBvoAAQvxAArBrBg");
	var mask_graphics_64 = new cjs.Graphics().p("EghRAhSQtrtsAAzmQAAzYNrt5QNstrTlAAQTZAAN5NrQNrN5AATYQAATmtrNsQt5NrzZAAQzlAAtstrg");
	var mask_graphics_65 = new cjs.Graphics().p("Egl6Al7QvlvmAA2VQAA2FPlv1QPmvlWUAAQWGAAP1PlQPlP1AAWFQAAWVvlPmQv1Pl2GAAQ2UAAvmvlg");
	var mask_graphics_66 = new cjs.Graphics().p("EgpBApCQw3w3AA4LQAA35Q3xIQQ3w3YKAAQX6AARIQ3QQ3RIAAX5QAAYLw3Q3QxIQ336AAQ4KAAw3w3g");
	var mask_graphics_67 = new cjs.Graphics().p("Egq6Aq7QxpxpAA5SQAA5ARpx6QRpxpZRAAQZBAAR6RpQRpR6AAZAQAAZSxpRpQx6Rp5BAAQ5RAAxpxpg");
	var mask_graphics_68 = new cjs.Graphics().p("Egr4Ar5QyCyDAA52QAA5kSCyUQSDyCZ1AAQZlAASUSCQSCSUAAZkQAAZ2yCSDQyUSC5lAAQ51AAyDyCg");
	var mask_graphics_69 = new cjs.Graphics().p("EgsOAsPQyMyLAA6EQAA5xSMydQSLyMaDAAQZyAASdSMQSMSdAAZxQAAaEyMSLQydSM5yAAQ6DAAyLyMg");
	var mask_graphics_70 = new cjs.Graphics().p("EgsSAsTQyNyNAA6GQAA5zSNyfQSNyNaFAAQZ0AASfSNQSNSfAAZzQAAaGyNSNQyfSN50AAQ6FAAyNyNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_graphics_55,x:48.9,y:-63.5}).wait(1).to({graphics:mask_graphics_56,x:49.1,y:-63.7}).wait(1).to({graphics:mask_graphics_57,x:50.6,y:-65}).wait(1).to({graphics:mask_graphics_58,x:54.5,y:-68.7}).wait(1).to({graphics:mask_graphics_59,x:62.1,y:-75.7}).wait(1).to({graphics:mask_graphics_60,x:74.6,y:-87.3}).wait(1).to({graphics:mask_graphics_61,x:75.5,y:-98.2}).wait(1).to({graphics:mask_graphics_62,x:69.2,y:-88.1}).wait(1).to({graphics:mask_graphics_63,x:61.2,y:-75.4}).wait(1).to({graphics:mask_graphics_64,x:54.9,y:-65.3}).wait(1).to({graphics:mask_graphics_65,x:50.3,y:-58}).wait(1).to({graphics:mask_graphics_66,x:47.2,y:-53.1}).wait(1).to({graphics:mask_graphics_67,x:45.4,y:-50.1}).wait(1).to({graphics:mask_graphics_68,x:44.4,y:-48.6}).wait(1).to({graphics:mask_graphics_69,x:44.1,y:-48.1}).wait(1).to({graphics:mask_graphics_70,x:44,y:-48}).wait(121));

	// img
	this.instance_7 = new lib._img_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-250);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({_off:false},0).wait(136));

	// 1
	this.instance_8 = new lib._1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(85.9,-115.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).to({alpha:1},3).wait(11).to({alpha:0},5).to({_off:true},1).wait(125));

	// round
	this.instance_9 = new lib.round();
	this.instance_9.parent = this;
	this.instance_9.setTransform(86.4,-115.5,0.022,0.022,0,0,0,2.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).wait(1).to({regX:2.4,scaleX:0.42,scaleY:0.42,x:87.4},0).wait(1).to({regX:2.3,scaleX:0.71,scaleY:0.71,x:88},0).wait(1).to({regX:2.4,scaleX:0.91,scaleY:0.91,x:88.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:88.8},0).wait(1).to({regX:2.3,regY:-0.1,scaleX:1.09,scaleY:1.09,x:88.9,y:-115.6},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({regX:2.4,regY:0,scaleX:1.05,scaleY:1.05,y:-115.5},0).wait(1).to({regX:2.3,scaleX:1.01,scaleY:1.01,x:88.7},0).wait(1).to({regX:0,scaleX:1,scaleY:1,x:86.4},0).to({scaleX:34.78,scaleY:34.78,x:44,y:-48},15,cjs.Ease.cubicInOut).wait(121));

	// logo_tg
	this.instance_10 = new lib.logo_tg("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-160.5,-177.2,2,2,35.7,0,0,14.2,-12.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).wait(1).to({regX:14.1,scaleX:1.95,scaleY:1.95,rotation:38.9,x:-143.5,y:-183.1},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:42.1,x:-126.4,y:-188.6},0).wait(1).to({scaleX:1.85,scaleY:1.85,rotation:45.4,x:-109.2,y:-193.9},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:48.7,x:-92,y:-198.9},0).wait(1).to({scaleX:1.75,scaleY:1.75,rotation:51.9,x:-74.5,y:-203.5},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:55.2,x:-57,y:-207.8},0).wait(1).to({scaleX:1.65,scaleY:1.65,rotation:58.4,x:-39.3,y:-211.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,rotation:61.7,x:-21.9,y:-214.9},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:65,x:-4.4,y:-217.4},0).wait(1).to({regX:14.2,scaleX:1.5,scaleY:1.5,rotation:68.2,x:13.2,y:-218.9},0).wait(1).to({regX:14.1,scaleX:1.45,scaleY:1.45,rotation:71.5,x:30.9,y:-219.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,rotation:74.7,x:48.7,y:-218.5},0).wait(1).to({regY:-12.7,scaleX:1.35,scaleY:1.35,rotation:78,x:66.4,y:-214.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:93.5,x:79.4,y:-208.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:109.3,x:90.2,y:-199.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:125.1,x:97.4,y:-187.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:140.9,x:99.9,y:-172.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:156.7,x:98.8,y:-157.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:172.5,x:95.6,y:-143.6},0).wait(1).to({regX:14.2,regY:-12.6,scaleX:1,scaleY:1,rotation:188.1,x:90.8,y:-130,mode:"synched",loop:false},0).wait(1).to({regY:-12.5,scaleX:1,scaleY:1,rotation:205.1,x:89.9,y:-127.5,startPosition:1},0).wait(1).to({regX:14.1,scaleX:1,scaleY:1,rotation:222.4,x:88.9,y:-124.8,startPosition:2},0).wait(1).to({regX:14.2,regY:-12.6,scaleX:1,scaleY:1,rotation:239.7,x:87.7,y:-122.1,startPosition:3},0).wait(1).to({regY:-12.5,rotation:256.9,x:86.6,y:-119.4,startPosition:4},0).wait(1).to({scaleX:1,scaleY:1,rotation:274,x:85.4,y:-116.8,startPosition:5},0).wait(1).to({regY:-12.6,scaleX:1,scaleY:1,rotation:291.1,x:84.1,y:-114.3,startPosition:6},0).wait(1).to({scaleX:1,scaleY:1,rotation:308.4,x:82.9,y:-111.6,startPosition:7},0).wait(1).to({rotation:325.7,x:81.7,y:-109.1,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1,rotation:342.9,x:80.4,y:-106.5,startPosition:9},0).wait(1).to({scaleX:1,scaleY:1,rotation:360,x:78.1,y:-103,mode:"single",startPosition:10},0).wait(146));

	// dev
	this.instance_11 = new lib.dev_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(231,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:20},15,cjs.Ease.cubicOut).wait(176));

	// bg
	this.instance_12 = new lib.bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265,-300,575,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,461,602);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"},
		{src:"images/_img.png", id:"_img"},
		{src:"images/logo_tg1.png", id:"logo_tg1"},
		{src:"images/logo_tg2.png", id:"logo_tg2"},
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"}
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