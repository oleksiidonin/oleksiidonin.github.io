(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_bottom = function() {
	this.initialize(img.box_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,451);


(lib.box_top = function() {
	this.initialize(img.box_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,426);


(lib._img = function() {
	this.initialize(img._img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,335);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBVIAAg2IAHAAIAAAJQAGgKAJAAQAIAAAFAGQAGAGAAAKQAAAJgGAHQgFAFgIABQgKgBgFgIIAAAUgAgVAoQgEAFAAAHQAAAHAEAFQAFAEAGAAQAGAAAEgEQAEgFAAgIQAAgHgEgEQgEgFgGAAQgGABgFAEgAloBTIAAgKIghAAIgBAKIgFAAIAAgQIAFAAQAFgLAAgRIAAgIIAdAAIAAAkIAGAAIAAAQgAl/AqQAAARgFAIIAXAAIAAgeIgSAAgAJABDQgGgGAAgJQAAgJAGgGQAIgHAHAAQAKAAAGAHQAGAFAAAKQAAAJgGAGQgGAHgKAAQgJAAgGgHgAJEAoQgDAEAAAIQAAAHADAEQAFAFAGAAQAHAAAEgFQAFgEAAgHQAAgHgFgFQgEgEgHgBQgGABgFAEgAGsBDQgGgGgBgJQABgJAGgGQAHgHAIAAQAJAAAGAHQAHAFgBAKQABAJgHAGQgGAHgJAAQgJAAgGgHgAGwAoQgEAEAAAIQAAAHAEAEQAEAFAHAAQAHAAAEgFQAEgEAAgHQAAgHgEgFQgEgEgHgBQgHABgEAEgACfBGQgFgDABgHQgBgGAFgEQAFgDAIAAQAHAAAFACIAAgBQAAgGgCgDQgEgDgFAAQgHAAgGADIgCgFQAHgDAIAAQAJAAAEAEQAFAFAAAHIAAAaIgHAAIAAgGQgFAGgJABQgGAAgFgEgACkA2QgEACAAAEQAAAEAEACQADADAEgBQAGAAAEgDQAEgDAAgEIAAgFQgGgCgGAAQgGABgDACgABMBDQgHgHAAgIQAAgIAHgHQAGgHAJAAQAJAAAHAIIgEADQgGgFgGgBQgIABgDAEQgEAFAAAHQAAAHAEAEQAFAFAGAAQAHAAAFgHIAEAFQgIAHgIABQgKAAgFgHgAhPBDQgGgGAAgJQAAgJAGgGQAIgHAHAAQAJAAAHAHQAGAFAAAKQAAAJgGAGQgHAHgJAAQgJAAgGgHgAhLAoQgDAEAAAIQAAAHADAEQAFAFAGAAQAHAAAFgFQADgEAAgHQAAgHgDgFQgFgEgHgBQgGABgFAEgAnNBEQgGgHAAgJQAAgKAGgFQAGgHAIAAQAIAAAGAHQAFAGABAJIAAADIgiAAQABAGAEAEQAEADAGAAQAIAAAFgGIAEAEQgGAHgLABQgJgBgGgFgAnIAoQgEADgBAGIAbAAQgBgHgDgCQgCgEgHgBQgGABgDAEgAsxBDQgHgGAAgJQAAgJAHgGQAGgHAIAAQAKAAAHAIIgEADQgGgFgHgBQgGABgFAEQgDAFAAAHQgBAHAFAEQAFAFAFAAQAIAAAFgHIAEAFQgHAHgKABQgIAAgGgHgAvsBEQgGgHAAgJQAAgJAGgGQAGgHAHAAQAKAAAFAHQAFAFAAAKIAAADIghAAQABAGAEAEQADADAGAAQAJAAAFgGIADAEQgGAHgLABQgIgBgGgFgAvoAoQgDADgBAGIAbAAQAAgFgFgEQgCgEgHgBQgFABgEAEgAxOBGQgEgDAAgHQAAgGAFgEQAEgDAIAAIAOACIAAgBQgBgGgDgDQgDgDgGAAQgFAAgIADIgBgFQAHgDAIAAQAIAAAFAEQAFAFAAAHIAAAaIgGAAIAAgGQgHAGgJABQgFAAgGgEgAxIA2QgEACAAAEQAAAEAEACQADADADgBQAHAAADgDQAFgDAAgEIAAgFQgGgCgGAAQgGABgDACgAx7BEIACgGQAGAGAIAAQAFAAADgCQADgBAAgFQAAgCgDgCQgDgCgFAAIgGAAIAAgFIAGAAQADAAAEgCQACgDABgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQgCgCgEgBQgIABgFAEIgDgFQAHgFAJAAQAHAAADADQAEADAAAFQABAHgHADQAIACAAAIQAAAGgFADQgFAEgGAAQgKgBgHgFgAJpBJIABgGIADABIADAAIACgDIACgGIACgcIAeAAIAAAqIgHAAIAAgkIgRAAIAAABIgCAaIgDAGIgFADIgEAAgAlgBJIABgGIADABIADAAIACgDQACgDAAgDIACgJIAAgTIAdAAIAAAqIgGAAIAAgkIgRAAIAAABIgDAaIgCAGIgFADIgEAAgAqQBHIABgEIAFABIADgBIADgDIADgGIACgMIAAgeIAlAAIAAA5IgGAAIAAgzIgZAAIAAAaIgCANIgFAHIgEAFIgFAAQgEAAgDgCgAwoBJIABgGIADABIADAAIACgDIACgGIACgJIABgTIAdAAIAAAqIgHAAIAAgkIgRAAIgBAQIgCALQAAAEgCACIgEADIgEAAgAOQBJIAAgJIAHAAIAAAJgAN8BJIAAghIgYAhIgHAAIAAgqIAHAAIAAAhIAYghIAGAAIAAAqgANKBJIAAggIgQAVIgPgVIAAAgIgGAAIAAgqIAGAAIAPAWIAQgWIAGAAIAAAqgAMRBJIAAgqIAGAAIAAAqgAL8BJIAAgSIgXAAIAAASIgHAAIAAgqIAHAAIAAASIAXAAIAAgSIAGAAIAAAqgALABJIAAgkIgPAAIAAgGIAkAAIAAAGIgPAAIAAAkgAKhBJIAAgqIAHAAIAAAqgAIpBJIAAgSIgZAAIAAASIgFAAIAAgqIAFAAIAAASIAZAAIAAgSIAGAAIAAAqgAHbBJIAAgqIAVAAQAGAAAEADQADADAAAEQAAAHgHADQAJACAAAIQAAAFgDADQgFADgGABgAHiBDIAOAAQAEAAACgBQADgCAAgEQAAgDgDgBQgDgCgEAAIgNAAgAHiAxIAMAAQAFAAABgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgBgEAAIgNAAgAGUBJIAAgkIgXAAIAAAkIgHAAIAAgqIAkAAIAAAqgAFKBJIAAgPIgLAAIgLAPIgIAAIAMgQQgEgCgEgDQgDgDAAgFQABgGAEgEQAEgDAHAAIAUAAIAAAqgAE2AnQgCACAAADQAAAEACACQADACAFAAIAMAAIAAgPIgMAAQgGAAgCACgAEcBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgADqBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgACABJIAAgkIgPAAIAAgGIAjAAIAAAGIgOAAIAAAkgAA0BJIAAghIgYAhIgGAAIAAgqIAGAAIAAAhIAYghIAGAAIAAAqgAhjBJIgOgUIgIAJIAAALIgHAAIAAgqIAHAAIAAAYIAWgYIAHAAIgRASIASAYgAiUBJIAAghIgZAhIgFAAIAAgqIAGAAIAAAhIAYghIAHAAIAAAqgAjhBJIAAgqIAUAAQAGAAAEADQADADAAAEQABAHgIADQAJACAAAIQAAAFgDADQgFADgGABgAjbBDIAOAAQAEAAACgBQADgCAAgEQAAgDgDgBQgDgCgEAAIgNAAgAjbAxIAMAAQAFAAABgCQADgBAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgBgEAAIgNAAgAkNBJIAAgPIgMAAIgLAPIgIAAIANgQQgFgCgDgDQgDgDAAgFQAAgGAEgEQAGgDAFAAIAUAAIAAAqgAkiAnQgCACAAADQAAAEADACQACACAFAAIANAAIAAgPIgNAAQgFAAgDACgAoZBJIAAgqIAGAAIAAAkIAVAAIAAgkIAFAAIAAAkIAVAAIAAgkIAGAAIAAAqgAotBJIAAghIgYAhIgHAAIAAgqIAHAAIAAAhIAZghIAFAAIAAAqgAq1BJIAAgJIAHAAIAAAJgArfBJIAAgqIAFAAIAAAQIAMAAQAHAAAFACQAEAEAAAGQAAAGgEAEQgEAEgHAAgAraBDIAMAAQAFAAACgCQADgCAAgEQAAgEgDgBQgCgCgFAAIgMAAgAr+BJIAAgkIgOAAIAAgGIAkAAIAAAGIgQAAIAAAkgAtJBJIAAgqIAGAAIAAAqgAteBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgAuMBJIgOgUIgIAJIAAALIgGAAIAAgLIgJgJIgNAUIgIAAIARgYIgQgSIAIAAIAVAYIAAgYIAGAAIAAAYIAVgYIAHAAIgQASIARAYgAMQAWIAAgHIAHAAIAAAHgAKhAWIAAgHIAHAAIAAAHgAtKAWIAAgHIAHAAIAAAHgAmXgNIAAg3IAHAAIAAAJQAGgKAKAAQAHAAAGAGQAGAGAAAKQAAAJgGAHQgGAFgHABQgLgBgFgIIAAAVgAmNg6QgEAEAAAHQAAAHAEAEQAFAFAGAAQAHAAAEgFQADgDAAgJQAAgHgDgEQgFgFgGAAQgFABgGAFgApRgPIACgGQADACADAAQAEAAABgCIAEgGIgTgpIAHAAIAPAjIANgjIAHAAIgSArQgBAGgFADQgDACgEABQgFAAgEgCgAKxgQIAAgLIg7AAIAAgpIAGAAIAAAkIAUAAIAAgkIAGAAIAAAkIAUAAIAAgkIAGAAIAAAkIAHAAIgBAQgAJHgUQAFgCABgEIAAgBIgDAAIAAgIIAHAAIAAAHQAAAFgDACQgBADgFABgARdggQgHgGABgJQgBgIAHgIQAGgGAIAAQAKAAAHAIIgDADQgHgFgHgBQgFAAgFAFQgEAEAAAFIATAAIAAAFIgTAAQAAAFAEAFQAFAEAGAAQAGAAAHgHIADAFQgDADgEACQgDACgHABQgIAAgGgHgAQsgdQgFgEABgGQAAgGAEgEQAFgDAIAAIANACIAAgBQAAgGgDgDQgEgDgFAAQgGAAgHADIgCgFQAHgEAJABQAIgBAEAFQAFAFAAAHIAAAZIgGAAIAAgFQgGAGgJABQgGAAgFgEgAQxgtQgDACAAAEQAAAEADACQAEACADAAQAGAAAEgDQAEgDAAgEIAAgFQgFgCgHAAQgGABgDACgALDggQgGgGAAgJQAAgIAGgIQAGgGAKAAQAIAAAHAGQAGAHAAAJQAAAJgGAGQgHAHgIAAQgKAAgGgHgALIg6QgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAEgFQAEgEAAgHQABgHgFgEQgEgFgGgBQgHABgEAFgAGOggQgHgGAAgJQABgJAGgHQAHgGAIAAQAJAAAGAGQAHAHAAAJQAAAJgHAGQgFAHgKAAQgJAAgGgHgAGSg6QgEAEAAAHQAAAHAEAEQAFAFAGAAQAHAAAEgFQAEgEAAgHQAAgHgEgEQgFgFgGgBQgHABgEAFgAAmggQgGgGAAgJQAAgIAGgIQAHgGAIAAQAJAAAIAIIgEADQgGgFgHgBQgGABgFAFQgDAEAAAHQAAAGADAFQAFAFAGAAQAHAAAGgHIAEAFQgHAHgKABQgJAAgGgHgAkzgfIADgGQAGAGAIAAQAEAAADgCQADgCAAgEQAAgCgDgCQgDgCgFAAIgFAAIAAgFIAGAAIAHgCQACgDAAgDQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgDgDgEAAQgHAAgFAFIgEgFQAIgFAIAAQAIAAADADQAFADAAAFQAAAHgIADQAJACgBAIQAAAFgEAEQgFAEgHAAQgKgBgHgFgAocggQgGgGAAgJQAAgIAGgIQAIgGAHAAQAKAAAHAIIgEADQgGgFgHgBQgGABgEAFQgEAEgBAHQABAGAEAFQAEAFAGAAQAHAAAGgHIAEAFQgHAHgKABQgJAAgGgHgAqRggQgGgGAAgJQAAgIAGgIQAGgGAJAAQAKAAAHAIIgEADQgFgFgIgBQgFAAgFAFQgDADgCAGIAUAAIAAAFIgUAAQACAGADAEQAFAEAFAAQAHAAAGgHIAEAFIgHAFQgEACgGABQgJAAgGgHgArBgdQgFgEAAgGQAAgGAFgEQAEgDAJAAQAGAAAHACIAAgBQAAgGgDgDQgEgDgFAAQgHAAgGADIgCgFQAHgEAIABQAJgBAEAFQAEAFABAHIAAAZIgGAAIAA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.8,-8.5,229.7,17), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An5EAIAMgaQAIAFAIAAQAIAAAEgIIgyiCIAnAAIAdBYIAchYIAmAAIgxCEQgIAUgJAIQgKAIgQAAQgSAAgOgJgAqZEJIAAioIAkAAIAAATQAPgVAZAAQAYAAARASQASATAAAeQAAAfgSASQgQASgZAAQgYgBgQgSIAAA3gAptCIQgIAKAAAQQAAAQAIAJQAKAKANAAQAOAAAIgKQAJgJAAgRQAAgPgJgKQgJgKgNAAQgNAAgKAKgAiTDiIAAiBIBHAAQATAAAMAJQAMAJAAAPQAAAUgVAIQAZAJAAAYQAAAQgNAKQgMAJgXAAgAhvDFIAdAAQAQAAAAgNQAAgMgRAAIgcAAgAhvCVIAaAAQAHAAAEgDQAEgEAAgGQAAgEgEgEQgDgEgIAAIgaAAgAjaDiIAAiBIAlAAIAACBgAkYDiIgagoIgaAoIgmAAIAthBIgshAIAnAAIAYAmIAZgmIAmAAIgsA/IAuBCgAjbBUIAAghIAnAAIAAAhgAiwhlIARgWQASAOAVAAQAIAAAFgEQAGgEAAgFQAAgGgGgEQgGgEgKAAIgPAAIAAgWIAPAAQAIAAAGgFQAFgEAAgFQAAgFgFgEQgEgDgIAAQgUAAgPANIgQgWQAWgUAhAAQAVAAAOAKQAOAKAAAPQAAATgUAKQAXAHAAAWQAAARgPALQgOAMgXAAQgjAAgYgVgAl1hlIARgWQARAOAVAAQAIAAAGgEQAFgEAAgFQAAgGgGgEQgFgEgKAAIgPAAIAAgWIAPAAQAIAAAFgFQAFgEAAgFQAAgFgFgEQgEgDgIAAQgUAAgPANIgPgWQAVgUAhAAQAWAAANAKQAOAKAAAPQAAATgUAKQAXAHAAAWQAAARgOALQgPAMgXAAQgjAAgXgVgAnwhjQgTgSAAgeQAAgcASgTQASgUAcAAQAeAAARAUQAQAVAAAdIgBAJIhZAAQACANAIAGQAIAGANAAQASABANgNIAVASQgTAYghAAQgeAAgTgTgAnVixQgHAHgDANIA3AAQgCgNgHgHQgGgHgMAAQgLAAgHAHgAqMhkQgRgTAAgmIABgXQACgOACgIQADgLAGgIQAGgJAKgGQAKgHAOgDIBFgMIAGAdIhHANQgdAHgCAYQAEgIANgHQALgHATAAQAZABASARQASASAAAaQAAAcgUASQgTATgdAAQggAAgSgUgApwioQgJAJAAAOQAAAPAJAJQAJAJAOAAQANAAAJgJQAJgJAAgPQAAgOgJgJQgJgKgOAAQgNAAgJAKgAghhbQgNgLAAgTQAAgTAOgLQAPgLAWAAQAPAAARAGIAAgCQAAgXgcgBQgQABgTAGIgJgbQAYgLAZAAQAdAAAPAOQAOAOAAAcIAABKIgkAAIAAgOQgOAQgYAAQgSABgNgLgAgEiHQgGAFAAAJQAAAHAFAEQAFAFAJAAQAMAAAIgHQAIgHAAgJIAAgHQgKgEgNAAQgMAAgGAEgAJ3hTIgagoIgaAoIgmAAIAthBIgrg/IAnAAIAYAlIAYglIAmAAIgrA+IAtBCgAHkhTIAAhKIgyBKIgjAAIAAiAIAkAAIAABKIAyhKIAiAAIAACAgAD/hTIAAiAIBHAAQATAAAMAIQAMAIAAAPQAAAVgUAJQAZAIAAAYQAAAQgNAKQgNAJgWAAgAEjhwIAdAAQARABAAgNQAAgNgSAAIgcAAgAEjigIAaAAQAIAAADgEQAEgDAAgGQAAgFgDgEQgEgCgHAAIgbAAgAC8hTIAAhKIgzBKIgiAAIAAiAIAjAAIAABKIAyhKIAjAAIAACAgACJjqQgLgIgCgSIAVgEQAFAQAOAAQAOAAAFgQIAVAEQgCASgLAIQgLALgQAAQgQAAgLgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-66.9,-26.5,134,53), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-117.4,-25.2,234.9,50.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-94.6,-25.2,189.3,50.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AiGBRIAAgeIhjAAIAAiAIAkAAIAABgIAsAAIAAhgIAlAAIAABgIARAAIgEA+gAg9AjQgSgTgBgcQABgdARgTQASgUAbAAQAeAAARAVQAPAUAAAeIAAAJIhZAAQADAMAJAGQAHAGANAAQAQAAAOgNIAVASQgUAYgfAAQgeAAgTgSgAAKgXQgDgNgGgHQgGgHgMAAQgKAAgIAHQgGAIgDAMIA2AAIAAAAgADDAzIAAgnIAnAAIAAAngACDAzIAAgnIAnAAIAAAngABEAzIAAgnIAmAAIAAAng");
	this.shape.setTransform(71.9,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AIbDlIjLkcIAAEcIhvAAIAAlmIAzhjIBoAAICfDgIAAjgIBvAAIAAHJgAhNDlIAAiIIinlBICUAAIBgDIIBgjIICUAAIipFBIAACIgAqJDlIAAhuIDhjrIjVAAIAAhwIFoAAIA1BjIjtD2IDtAAIAABwg");
	this.shape_1.setTransform(-30.3,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-95.3,-24.4,190.6,49), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.img1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._img();
	this.instance.parent = this;
	this.instance.setTransform(-59,-84,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1, new cjs.Rectangle(-59,-84,117,167.5), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("Ao3BCIAAgXIhXAAIgCAXIgKAAIAAgiIALAAQAQgaAAgyIAAgSIBGAAIAABeIAOAAIgCAigApzgmQAAAUgEAUQgEATgGALIA8AAIAAhTIguAAgAJbAhQgLgLAAgSQAAgQALgMQAKgMARAAQARAAAKAMQAKALAAARIgBAEIg+AAQABAMAIAHQAIAHAKAAQAPAAALgKIAHAGQgOAOgTAAQgQAAgMgLgAJkgTQgHAIgBALIAzAAQgCgMgGgHQgGgIgLAAQgKAAgIAIgACaAhQgLgLAAgWIACgXIACgLIAFgJIAJgHQAFgDAGgCIAsgKIACAKIgqAKQgMADgFAHQgFAGgBAMQALgRAVAAQAQAAALAMQALALAAAPQAAARgLAMQgMALgRAAQgSAAgLgLgACjgPQgIAIAAAMQAAALAIAJQAIAJAMAAQAMAAAIgJQAIgJAAgLQAAgMgIgIQgIgJgMAAQgMAAgIAJgAg9AhQgLgMAAgRQAAgQALgMQAMgMARAAQATAAANAOIgIAIQgLgMgNAAQgMAAgIAJQgIAIAAANQAAAMAIAJQAJAJAMAAQANAAALgMIAHAHQgNAPgTAAQgRAAgMgLgAlFAmQgIgGAAgMQAAgNAJgGQAJgGAQAAQANAAAKADIAAgCQAAgKgFgGQgHgFgLAAQgLAAgNAFIgDgJQANgHAPAAQARAAAJAJQAIAIAAAPIAAAvIgMAAIAAgMQgKANgSAAQgNAAgIgGgAk7AIQgGAEAAAHQAAAHAFAFQAGAEAJAAQALAAAHgGQAIgGAAgJIAAgIQgOgDgJAAQgMAAgFAFgAn7AhIAGgJQALAKAPAAQAHAAAHgDQAFgEAAgGQAAgHgFgDQgFgEgKAAIgKAAIAAgIIALAAQAHAAAFgDQAFgFAAgFQAAgGgFgDQgEgDgIAAQgNAAgLAIIgGgJQAOgJARAAQANAAAIAFQAHAGAAAKQAAANgNAEQAPAEAAAPQAAAKgIAHQgIAGgPAAQgSAAgOgLgAEPArIABgKIAGABIAFgBQADgBACgDQACgDACgIQACgIAAgKIABgcIAAgHIA4AAIAABOIgMAAIAAhDIggAAIAAACQAAARgCAMQgBALgDAJQgBAGgEAFQgDADgEACIgJABgAHLArIAAhOIALAAIAABEIAnAAIAAhEIAMAAIAABEIAmAAIAAhEIAMAAIAABOgAF5ArIAAhOIAMAAIAAAeIAVAAQAOAAAIAFQAJAFAAAMQAAAMgIAHQgJAHgNAAgAGFAhIAVAAQAJAAAFgEQAFgEAAgIQAAgGgFgEQgFgDgJAAIgVAAgAD1ArIAAhOIAMAAIAABOgAATArIAAhOIALAAIAAAeIAVAAQAOAAAIAFQAJAFAAAMQAAAMgIAHQgIAHgOAAgAAeAhIAWAAQAIAAAFgEQAGgEAAgIQAAgGgGgEQgFgDgJAAIgVAAgAhpArIAAg9IgvA9IgLAAIAAhOIAMAAIAAA9IAug9IAMAAIAABOgAjcArIAAhDIgcAAIAAgLIBEAAIAAALIgcAAIAABDgAltArIAAgjIgtAAIAAAjIgMAAIAAhOIAMAAIAAAiIAtAAIAAgiIAMAAIAABOgAobArIAAhOIAMAAIAABOgAD1g0IAAgNIANAAIAAANgAobg0IAAgNIANAAIAAANg");
	this.shape.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-66.7,-6.2,133.4,13.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AvgDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAIfBAAQBSAAA7A7QA6A6AABSIAAACQAABSg6A6Qg7A6hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-119.2,-20,238.4,40), null);


(lib.box_top_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_top();
	this.instance.parent = this;
	this.instance.setTransform(-104,-101,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_top_1, new cjs.Rectangle(-104,-101,213,213), null);


(lib.box_bottom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_bottom();
	this.instance.parent = this;
	this.instance.setTransform(-116,-112.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_bottom_1, new cjs.Rectangle(-116,-112.7,232,225.5), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#16BAEF","#01AAE1"],[0,1],0,-300,0,300).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:109.3},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-109.2},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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
	this.initialize(mode,startPosition,loop,{loop:40});

	// timeline functions:
	this.frame_234 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(234).call(this.frame_234).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(26.2,-245.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-24.6,alpha:1},15,cjs.Ease.cubicOut).wait(220));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-181);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145).to({_off:false},0).to({x:-53,alpha:1},15,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(24));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.4,-181.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:-2,alpha:1},15,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(89));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.4,-181.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:-24.6,alpha:1},15,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(129).to({_off:false,x:25.4},0).to({x:-24.6,alpha:1},15,cjs.Ease.cubicOut).wait(10));

	// urText
	this.instance_4 = new lib.urText();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.5,269.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).wait(225));

	// btn
	this.instance_5 = new lib.btn("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.6,219.5,1.05,1.05,0,0,0,-0.6,0.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(220));

	// box_top
	this.instance_6 = new lib.box_top_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-261.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:360,x:-1.5},15,cjs.Ease.cubicOut).wait(65).to({regY:0.1,rotation:330,x:-21.5,y:-1.1},15,cjs.Ease.quadInOut).wait(115).to({regY:0,rotation:360,x:-1.5,y:16.5},15,cjs.Ease.quadInOut).wait(10));

	// box_bottom
	this.instance_7 = new lib.box_bottom_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-245.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:14.2},15,cjs.Ease.cubicOut).wait(65).to({x:33.4,y:30.2},15,cjs.Ease.quadInOut).wait(115).to({x:14.2,y:23.8},15,cjs.Ease.quadInOut).wait(10));

	// img1
	this.instance_8 = new lib.img1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.9,49.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(145).to({_off:false},0).to({x:-74.1,y:76.4},15,cjs.Ease.cubicOut).wait(40).to({x:5.9,y:49.2},10,cjs.Ease.cubicIn).wait(25));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.5,-300,515.5,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,300,515.5,600);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_bottom.png", id:"box_bottom"},
		{src:"images/box_top.png", id:"box_top"},
		{src:"images/_img.png", id:"_img"}
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