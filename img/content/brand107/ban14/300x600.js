(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.img4 = function() {
	this.initialize(img.img4);
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBVIAAg2IAGAAIAAAJQAHgKAJAAQAIAAAFAGQAGAGAAAKQAAAJgGAHQgFAFgIABQgKgBgGgIIAAAUgAgUAoQgFAFAAAHQAAAHAFAFQAEAEAGAAQAGAAAEgEQAEgFAAgIQAAgGgEgFQgDgFgHAAQgGABgEAEgAlnBTIAAgKIgiAAIgBAKIgFAAIAAgQIAFAAQAFgLAAgRIAAgIIAeAAIAAAkIAGAAIgBAQgAl/AqQAAAPgFAKIAWAAIAAgeIgRAAgAJABDQgGgGAAgJQAAgJAGgGQAHgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgGAHgKAAQgJAAgGgHgAJFAoQgFAFAAAHQAAAGAFAGQAEAEAHAAQAHAAADgEQAFgGAAgGQAAgHgFgFQgEgEgHgBQgHABgDAEgAGsBDQgHgHAAgIQAAgIAHgHQAGgHAJAAQAJAAAGAHQAHAGAAAJQAAAJgHAGQgGAHgJAAQgJAAgGgHgAGwAoQgEAFAAAHQAAAGAEAGQAFAEAGAAQAHAAAEgEQAEgGAAgGQAAgHgEgFQgFgEgGgBQgHABgEAEgACfBGQgFgDAAgHQAAgGAFgEQAEgDAJAAQAHAAAGACIAAgCQAAgFgDgDQgEgDgFAAQgGAAgHADIgCgFQAHgDAIAAQAJAAAFAEQAEAFAAAHIAAAaIgGAAIAAgGQgGAGgJABQgFAAgGgEgACkA2QgDACAAAEQAAAEADACQADADAEgBQAGAAAEgDQAEgCAAgGIAAgEQgGgCgGAAQgFABgEACgABLBDQgGgGAAgJQAAgJAGgGQAHgHAIAAQAKAAAHAIIgEADQgGgFgHgBQgGABgEAEQgEAFAAAHQAAAGAEAFQAEAFAHAAQAGAAAGgHIAEAFQgHAHgKABQgJAAgGgHgAhPBDQgGgHAAgIQAAgIAGgHQAHgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgGAHgKAAQgJAAgGgHgAhKAoQgFAFAAAHQAAAGAFAGQAEAEAHAAQAHAAADgEQAFgGAAgGQAAgHgFgFQgEgEgHgBQgHABgDAEgAnNBEQgGgHAAgJQAAgJAGgGQAGgHAIAAQAJAAAFAHQAFAFAAAKIAAADIggAAQAAAFAEAFQAEADAGAAQAHAAAGgGIAEAEQgHAHgKABQgJgBgGgFgAnIAoQgEAEAAAFIAaAAQAAgFgEgEQgDgEgGgBQgGABgDAEgAsyBDQgGgGAAgJQAAgJAGgGQAHgHAIAAQAKAAAHAIIgEADQgGgFgHgBQgGABgEAEQgEAEAAAIQAAAHAEAEQAEAFAHAAQAGAAAGgHIAEAFQgHAHgKABQgJAAgGgHgAvsBEQgGgHAAgJQAAgKAGgFQAFgHAJAAQAIAAAGAHQAFAGAAAJIAAADIghAAQABAGAEAEQAEADAGAAQAIAAAFgGIAEAEQgIAHgJABQgJgBgGgFgAvnAoQgEADgBAGIAbAAQgBgHgDgCQgDgEgGgBQgGABgDAEgAxNBGQgFgDAAgHQAAgGAFgEQAFgDAIAAQAGAAAGACIAAgCQAAgFgDgDQgDgDgGAAQgGAAgGADIgCgFQAHgDAIAAQAJAAAEAEQAFAFAAAHIAAAaIgHAAIAAgGQgFAGgJABQgGAAgFgEgAxIA2QgEACAAAEQAAAEADACQAEADAEgBQAGAAAEgDQAEgDAAgFIAAgEQgGgCgHAAQgFABgDACgAx8BDIADgFQAGAGAIAAQAFAAACgCQADgBAAgFQAAgCgCgCQgDgCgFAAIgFAAIAAgFIAFAAQAEAAADgCQACgCAAgEQAAgCgCgCQgCgCgFAAQgHABgFAEIgDgFQAHgFAJAAQAHAAAEADQAEADAAAFQAAAHgHADQAIACAAAIQAAAGgFADQgFAEgHAAQgKAAgHgHgAJpBJIABgGIADABIADAAIACgDIACgGIACgJIAAgTIAdAAIAAAqIgGAAIAAgkIgRAAIgBAQIgCALQAAAEgDACIgDADIgFAAgAlgBJIABgGIADABIADAAIACgDIACgGIACgZIAAgDIAdAAIAAAqIgGAAIAAgkIgRAAIgBAQIgCALQAAAEgDACIgDADIgFAAgAqQBHIABgEIAFABIADgBIADgDQACgDABgDIACgMIABgeIAkAAIAAA5IgGAAIAAgzIgYAAIgBAaQgBAHgCAGQgBAFgCACIgFAFIgFAAgAwnBJIAAgGIADABIADAAIADgDIACgGIABgcIAeAAIAAAqIgGAAIAAgkIgSAAIAAAQIgCALIgDAGIgEADIgEAAgAOPBJIAAgJIAIAAIAAAJgAN8BJIAAghIgZAhIgFAAIAAgqIAGAAIAAAhIAYghIAGAAIAAAqgANKBJIAAggIgQAVIgPgVIAAAgIgGAAIAAgqIAGAAIAPAWIAQgWIAGAAIAAAqgAMRBJIAAgqIAGAAIAAAqgAL8BJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgALABJIAAgkIgPAAIAAgGIAkAAIAAAGIgPAAIAAAkgAKiBJIAAgqIAGAAIAAAqgAIpBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgAHcBJIAAgqIAUAAQAGAAAEADQADADAAAEQAAAHgHADQAKACAAAIQAAAFgFADQgDADgIABgAHiBDIAOAAQAEAAADgBQACgDAAgDQAAgDgDgBQgCgCgFAAIgNAAgAHiAxIANAAQAEAAACgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgCgBgEAAIgNAAgAGUBJIAAgkIgXAAIAAAkIgHAAIAAgqIAkAAIAAAqgAFLBJIAAgPIgMAAIgLAPIgIAAIANgQQgFgCgDgDQgDgDAAgFQAAgGAEgEQAFgDAGAAIAUAAIAAAqgAE2AnQgCACAAADQAAAEADACQACACAFAAIANAAIAAgPIgNAAQgFAAgDACgAEcBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgADqBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgACABJIAAgkIgPAAIAAgGIAkAAIAAAGIgPAAIAAAkgAA0BJIAAghIgZAhIgGAAIAAgqIAHAAIAAAhIAYghIAGAAIAAAqgAhiBJIgPgUIgJAJIAAALIgGAAIAAgqIAGAAIAAAYIAXgYIAIAAIgSASIASAYgAiUBJIAAghIgYAhIgGAAIAAgqIAGAAIAAAhIAYghIAGAAIAAAqgAjhBJIAAgqIAUAAQAGAAAEADQADADAAAEQAAAHgHADQAKACAAAIQAAAFgFADQgDADgHABgAjbBDIAOAAQAEAAADgBQACgDAAgDQAAgDgCgBQgDgCgFAAIgNAAgAjbAxIANAAQAEAAACgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgCgBgEAAIgNAAgAkNBJIAAgPIgMAAIgLAPIgIAAIANgQQgFgCgDgDQgDgDAAgFQAAgGAEgEQAFgDAHAAIATAAIAAAqgAkhAnQgDACAAADQAAADADADQACACAFAAIANAAIAAgPIgNAAQgFAAgCACgAoZBJIAAgqIAGAAIAAAkIAUAAIAAgkIAHAAIAAAkIAUAAIAAgkIAGAAIAAAqgAotBJIAAghIgYAhIgGAAIAAgqIAGAAIAAAhIAYghIAGAAIAAAqgAq1BJIAAgJIAHAAIAAAJgArfBJIAAgqIAGAAIAAAQIALAAQAHAAAEACQAFAEAAAGQAAAGgEAEQgEAEgIAAgArZBDIALAAQAFAAACgCQADgCAAgEQAAgEgDgBQgCgCgFAAIgLAAgAr9BJIAAgkIgPAAIAAgGIAkAAIAAAGIgPAAIAAAkgAtKBJIAAgqIAHAAIAAAqgAteBJIAAgSIgYAAIAAASIgGAAIAAgqIAGAAIAAASIAYAAIAAgSIAGAAIAAAqgAuMBJIgOgUIgIAJIAAALIgGAAIAAgLIgJgJIgNAUIgHAAIAQgYIgQgSIAIAAIAVAYIAAgYIAGAAIAAAYIAVgYIAIAAIgRASIARAYgAMQAWIAAgHIAHAAIAAAHgAKhAWIAAgHIAHAAIAAAHgAtKAWIAAgHIAHAAIAAAHgAmXgNIAAg3IAGAAIAAAJQAHgKAJAAQAIAAAGAGQAGAGAAAKQAAAJgGAHQgGAFgIABQgJgBgHgIIAAAVgAmMg6QgFAEAAAHQAAAHAFAEQAEAFAGAAQAGAAAFgFQAEgEAAgIQAAgGgEgFQgFgFgGAAQgGABgEAFgApRgPIACgGQADACAEAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIAEgGIgTgpIAHAAIAPAjIANgjIAHAAIgRArQgDAGgDADQgEACgEABQgFAAgEgCgAKxgQIAAgLIg7AAIAAgpIAGAAIAAAkIAUAAIAAgkIAGAAIAAAkIAVAAIAAgkIAGAAIAAAkIAGAAIgBAQgAJHgUQAFgCAAgDIAAgCIgCAAIAAgIIAHAAIAAAHQAAAGgCABQgCADgFABgARdggQgHgGAAgJQAAgIAGgIQAHgGAIAAQALAAAGAIIgEADQgFgFgHgBQgFAAgFAFQgEADgBAGIATAAIAAAFIgTAAQABAGAEAEQAFAEAFAAQAHAAAFgHIAFAFIgIAFQgDACgGABQgJAAgGgHgAQsgdQgEgEAAgGQAAgGAEgEQAFgDAIAAQAHAAAGACIAAgCQAAgFgDgDQgDgDgGAAQgHAAgGADIgCgFQAHgEAIABQAJgBAFAFQAEAEAAAIIAAAZIgGAAIAAgFQgGAGgJABQgFAAgGgEgAQxgtQgDACAAAEQAAAEADACQADACAEAAQAGAAAEgDQAEgCAAgGIAAgEQgGgCgGAAQgFABgEACgALDggQgGgGAAgJQAAgIAGgIQAHgGAJAAQAIAAAHAGQAGAHAAAJQAAAIgGAHQgGAHgKAAQgJAAgGgHgALIg6QgFAEAAAHQAAAGAFAFQAEAFAHAAQAHAAADgFQAFgFAAgGQAAgHgFgEQgEgFgHgBQgHABgDAFgAGOggQgGgGAAgJQAAgIAGgIQAGgGAJAAQAJAAAHAGQAGAIAAAIQAAAJgGAGQgHAHgJAAQgJAAgGgHgAGSg6QgEAEAAAHQAAAGAEAFQAFAFAGAAQAHAAAEgFQAEgEAAgHQAAgHgEgEQgEgFgHgBQgGABgFAFgAAmggQgGgGAAgJQAAgIAGgIQAHgGAIAAQAKAAAHAIIgEADQgFgFgIgBQgGABgEAFQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAGgHIAEAFQgIAHgJABQgJAAgGgHgAkzggIADgFQAGAGAIAAQAFAAACgCQADgCAAgEQAAgCgDgCQgCgCgFAAIgGAAIAAgFIAGAAQADAAADgCQADgCAAgEQAAgCgDgCQgCgCgEAAQgHAAgGAFIgDgFQAHgFAJAAQAIAAADADQAEADAAAFQAAAHgGADQAHACAAAIQAAAFgEAEQgFAEgHAAQgKAAgHgHgAocggQgGgGAAgJQAAgIAGgIQAHgGAIAAQAKAAAHAIIgEADQgFgFgIgBQgGABgEAFQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAGgHIAEAFQgIAHgJABQgJAAgGgHgAqRggQgGgGAAgJQAAgIAGgIQAHgGAIAAQAKAAAHAIIgEADQgGgFgHgBQgFAAgFAFQgDADgBAGIASAAIAAAFIgTAAQABAFAEAFQAFAEAGAAQAGAAAGgHIAEAFQgDADgEACQgEACgGABQgJAAgGgHgArBgdQgFgEAAgGQAAgGAFgEQAEgDAJAAIANACIAAgCQAAgFgEgDQgDgDgGAAQgFAAgHADIgCgFQAHgEAIABQAJgBAEAFQAFAFAAAHIAAAZIgGAAIAAgFQgGAGgJABQgGAA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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.9,-8.5,229.8,17), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-103.9,-25.2,207.9,50.4), null);


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


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AjYBBIAAgUIhAAAIgCAUIgKAAIAAgeIAJAAQAKgUAAgiIAAgOIA5AAIAABEIAMAAIgCAegAkFgLQAAAcgKASIArAAIAAg6IghAAgAgmAjQgMgMAAgQQAAgQAMgNQAMgNARAAQARAAAOAPIgIAIQgLgMgNAAQgLAAgJAJQgIAKAAAMQAAANAJAIQAHAJANAAQAMAAALgMIAIAIQgOAOgRAAQgRAAgMgMgAnPApQgJgGAAgNQAAgMAJgHQAKgGAPABQAKAAAOACIAAgCQAAgKgGgGQgGgFgLAAQgNAAgLAFIgEgJQAQgHANAAQARAAAJAIQAIAKAAAOIAAAvIgMAAIAAgLQgLANgSAAQgLABgJgHgAnGAKQgGAFAAAHQAAAHAFAFQAGAEAJAAQALAAAIgGQAHgGAAgJIAAgIQgKgDgNAAQgKAAgHAEgAqbAeIAHgJQAQAQAWAAQAKAAAIgFQAHgGAAgJQAAgKgIgGQgHgDgOAAIgLAAIAAgKIALAAQAMgBAHgFQAHgFAAgKQAAgHgGgGQgIgGgKAAQgSABgOAMIgGgJQAIgHAJgEQAJgDAMAAQARAAAJAIQALAIAAAMQAAASgUAHQAKADAHAGQAGAIAAAJQAAANgLAJQgKAJgRgBQgaABgTgSgAKNAtIAAgPIAPAAIAAAPgAJnAtIhGhXIAABXIgMAAIAAhqIAMAAIBDBWIAAhWIAMAAIAABqgAHJAtIAAgqIgthAIAPAAIAlA2IAkg2IAOAAIgtBAIAAAqgAE4AtIAAgIIBGhXIhEAAIAAgLIBUAAIAAAIIhFBYIBFAAIAAAKgADnAtIAAg9IgwA9IgLAAIAAhOIAMAAIAAA+IAvg+IALAAIAABOgACFAtIAAhOIALAAIAABOgAAqAtIAAhOIAmAAQANAAAGAGQAHAFAAAJQAAAMgNAGQARAEAAAPQAAAKgHAGQgIAFgNAAgAA2AjIAaAAQAJAAAFgCQAEgFAAgGQAAgFgFgEQgFgDgKAAIgYAAgAA2AAIAYAAQAHAAAFgCQAEgDAAgGQAAgGgEgCQgEgDgIgBIgYAAgAiBAtIAAg9IgwA9IgLAAIAAhOIAMAAIAAA+IAvg+IALAAIAABOgAk+AtIAAg9IgwA9IgLAAIAAhOIAMAAIAAA+IAvg+IALAAIAABOgAn4AtIAAgiIguAAIAAAiIgMAAIAAhOIAMAAIAAAhIAuAAIAAghIAMAAIAABOgAKRAQIgDhNIAOAAIgEBNgADAgyQgFgEgCgJIAIgBQADALALgBQAKABADgLIAIABQgBAJgGAEQgGAGgIAAQgIAAgHgGgAllgyQgFgEgCgJIAIgBQADALALgBQAKABADgLIAIABQgBAJgGAEQgGAGgIAAQgIAAgHgGgACEgyIAAgNIANAAIAAANg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-66.8,-6.5,133.6,13.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AuxDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAIdjAAQBSAAA6A7QA7A6AABSIAAACQAABSg7A6Qg6A6hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-114.4,-20,228.9,40), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:104.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-104.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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
	this.frame_200 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(200).call(this.frame_200).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-4.6,261);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).wait(186));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34,140.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:-15.8,alpha:1},15,cjs.Ease.cubicOut).wait(171));

	// logo
	this.instance_2 = new lib.logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.6,79.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-26.2,alpha:1},15,cjs.Ease.cubicOut).wait(186));

	// btn
	this.instance_3 = new lib.btn("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.6,204,1.05,1.05,0,0,0,-0.6,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(186));

	// img
	this.instance_4 = new lib.img1_1();
	this.instance_4.parent = this;

	this.instance_5 = new lib.img2_1();
	this.instance_5.parent = this;

	this.instance_6 = new lib.img3_1();
	this.instance_6.parent = this;

	this.instance_7 = new lib.img4_1();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},40).to({state:[{t:this.instance_6}]},40).to({state:[{t:this.instance_7}]},40).to({state:[{t:this.instance_4}]},40).wait(41));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(201));

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
		{src:"images/img1.jpg", id:"img1"},
		{src:"images/img2.jpg", id:"img2"},
		{src:"images/img3.jpg", id:"img3"},
		{src:"images/img4.jpg", id:"img4"}
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