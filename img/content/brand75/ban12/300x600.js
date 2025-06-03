(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,220);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,206);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,190);


(lib.box4 = function() {
	this.initialize(img.box4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,182);


(lib.box_part = function() {
	this.initialize(img.box_part);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,34);


(lib.box_top = function() {
	this.initialize(img.box_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,88);


(lib.hand_left = function() {
	this.initialize(img.hand_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,254);


(lib.hand_right = function() {
	this.initialize(img.hand_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,348,306);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,534);// helper functions:

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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEABQQgWgXABgiQAAhGAxgjQAdgVApAAQAYAAAOAHIgMApQgQgFgPAAQgWAAgPAOQgZAWAAAoQAAAVAMAMQALAMAUAAQAUAAAMgFIACApQgSAHgcAAQgoAAgWgYgAtBBZIAOglQAUAKAWAAQAOAAAJgGQAKgHAAgLQAAgLgKgGQgKgGgMAAIgPAAIAGgjIAOAAQAQAAAKgGQAKgHAAgMQAAgIgHgFQgFgEgKAAQgSAAgTAKIgJgjQAbgQAgAAQAZAAAQAMQATANAAAXQAAAUgNANQgMANgSAFIgBABQAPADAJAKQAKANAAARQAAAfgaARQgWAQgiAAQgjAAgWgPgAqeBjIAljDQAYgFAdAAQAgAAATALQAXAMAAAZQAAASgLANQgLAMgRAFIAAABQAOAEAIAMQAHALAAAQQABAcgbASQgZARg0AAQghAAgSgDgApoBAIANAAQAPAAAKgHQALgHAAgNQAAgYgfAAIgJAAgApPg/IgIAqIAKAAQAQAAAJgHQAIgGABgMQgBgIgGgFQgFgFgLAAQgKAAgDABgARFBlIAKgsQAJgzAJgiIgBAAQgQAggVAiIgoA/Ig3AAIAnjJIAuAAIgJAsQgJAugNAvIACAAQAOgbAagnIArhHIAzAAIgnDJgAORBlQgEgKgFgkQgDgTgFgIQgFgJgLAAIgEAAIgQBSIgwAAIAmjJIAwAAIgQBUIAEAAIA5hUIA7AAIhKBbQAQALAHAyQAGAjAFAOgALfBlIgCgtIgvAAIgSAtIg0AAIBcjJIA+AAIAQDJgALdATIgChRIAAAAIgQAsIgQAlIAiAAgAIiBlIALhFQAEggAKgvIgBAAQgMAfgVAtIgfBEIglAAIgGiQIgBAAIgRBPIgQBFIgsAAIAzjJIA+AAIACBEIACBAIABAAQAIgVARgrIAdhEIA/AAIgcDJgABRBlIAnjJIAwAAIglDJgAgJBlIAOhRIg2AAIgQBRIgxAAIAmjJIAyAAIgPBNIA3AAIAPhNIAwAAIgmDJgAjOBlIAOhMIAAgBQgNAGgWAAQgWAAgOgLQgNgMAAgTQAAgKACgRIAMg9IAyAAIgLA5IgDARQAAARAWAAQALAAAJgEIARhXIAwAAIgmDJgAmBBlIAJgsIAThVIgBAAQgRAggWAiIgnA/Ig2AAIAmjJIAuAAIgJAsQgJAxgMAsIABAAQAPgbAagnIAphHIA0AAIgmDJgAvVBlIAnjJIB0AAIgJAqIhCAAIgHAkIA/AAIgIAoIg+AAIgIApIBGAAIgIAqgAwxBlIAQhRIg4AAIgPBRIgxAAIAmjJIAxAAIgOBNIA3AAIAPhNIAxAAIgmDJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-117.8,-10.4,235.6,20.8), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEkBuIADgUQgbgHgRgSQgTgVAAggQAAgwAhgdQAcgZAkgBIAEgSIAsAAIgDATQAbAGARASQATAVAAAhQAAAxggAdQgbAYgmABIgEATgAFaA4QAQgCAMgTQAOgVAAgdQAAgigVgGgAEmgiQgNAVAAAaQAAAQAGALQAFALAJADIAWhuQgQABgNAVgAqbBAQATgCAKgMQAQgSAIgqIARhaICEAAIgnDJIgxAAIAfifIgkAAIgJAtQgHAlgIAVQgLAagPAPQgUATghAAgAIPBoQgkAAgUgYQgSgWAAghQgBgdALgbQAKgcASgRQAcgbAoAAQAkAAAUAYQASAVAAAiQAAAegJAbQgLAcgRARQgbAagpAAgAIGgfQgNAcAAAcQAAAmAeAAIAAAAQAUAAAOghQAMgcAAgbQABgkgdAAQgVAAgOAegAkPBQQgVgXAAgiQAAhGAxgjQAegVAoAAQAZAAAOAHIgNApQgPgFgPAAQgXAAgOAOQgZAWAAAoQAAAVALAMQALAMAVAAQATAAAMgFIACApQgTAHgbAAQgoAAgWgYgAv0BjIAmjDQAXgFAdAAQAhAAATALQAWAMAAAZQAAASgLANQgKAMgRAFIAAABQAOAEAHAMQAIALAAAQQAAAcgbASQgYARg0AAQghAAgTgDgAu+BAIANAAQAQAAAKgHQALgHAAgNQAAgYgfAAIgJAAgAukg/IgIAqIAJAAQAQAAAJgHQAJgGAAgMQAAgIgGgFQgGgFgKAAQgLAAgCABgARyBlIgBgtIgvAAIgTAtIgzAAIBcjJIA+AAIAPDJgARxATIgChRIgBAAIgfBRIAiAAgAO+BlIAKhFIAOhPIgBAAQgMAfgVAtIgfBEIgmAAIgFiQIgBAAIgRBPIgQBFIgsAAIAzjJIA+AAIACBEIACBAIABAAQAJgbARglIAchEIA/AAIgcDJgAJ+BlIAnjFQAUgFAgAAQAjAAATAOQAVAPAAAbQAAAmgcAWQgYASgmAAIgOgBIgNBFgALOg9IgLA2IAMABQARAAAKgLQAJgKAAgNQAAgWgXAAgABtBlIgCgtIgvAAIgTAtIgyAAIBbjJIA+AAIAPDJgABqATIgChRIAAAAIgfBRIAhAAgAhwBlIAeidIguAAIAIgsICNAAIgIAsIguAAIgeCdgAmABlIAOhOIgEAAQgTAAgRApQgLAYgIANIg1AAQAGgKARgkQAVgpAWgHIAAgBQgMgDgJgKQgLgMAAgTQAAgdAYgRQAXgRAsAAQAkAAAWAEIgkDGgAmFg4QgIAIgBAOQAAAKAIAHQAHAGAKAAIAKgBIAJgzIgLgBQgOAAgKAIgAreBlIAJgsQAKgzAJgiIgBAAQgNAagZAoIgoA/Ig3AAIAnjJIAuAAIgIAsQgHAggPA9IABAAQAJgSAggwIAqhHIAzAAIgmDJgAw3BlIgRhHIAAAAIgSAkIgSAjIg4AAIBEhnIgchiIAzAAIAOBEIABAAIAihEIA3AAIhCBkIAfBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-118.9,-11,237.8,22), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYA/QASgCALgLQAPgRAJgsIARhZICEAAIgnDJIgxAAIAfifIgkAAIgJAsQgIAlgIAWQgKAagQAOQgUATggAAgAhABPQgTgWAAghQAAgcAKgbQAKgcASgSQAcgaAnAAQAkAAAUAXQATAVAAAiQAAAegKAbQgKAcgSASQgbAagoAAQgkAAgUgZgAgSgfQgNAbAAAdQAAAlAeAAIAAAAQATAAAPggQAMgcAAgbQAAglgdAAQgUAAgOAfgAEfBkIAmjIIAwAAIgOBGQAIgCAMAAQAcAAARAPQASAQAAAbQAAAcgTAUQgcAdg7AAQgeAAgTgDgAFgAHIgLA5IAMAAQAOAAALgIQALgJAAgPQAAgMgGgHQgHgIgMAAIgMACgALrBlIgBgtIgvAAIgTAtIgzAAIBbjJIA/AAIAPDJgALpATIgChRIAAAAIgfBRIAhAAgAIuBlIAPhRIg3AAIgPBRIgxAAIAmjJIAxAAIgOBNIA3AAIAPhNIAxAAIgmDJgAigBlQgEgLgFgkQgDgTgEgHQgFgKgLAAIgFAAIgQBTIgwAAIAnjJIAwAAIgQBTIAEAAIA5hTIA6AAIhKBbQAJAGAGAQQAFAOAEAZQAHAmADALgAlWBlIAJgtQAJgvAJglIAAAAQgSAhgVAhIgnA/Ig3AAIAnjJIAuAAIgJAsQgGAggPA8IABAAIAohCIArhGIAzAAIgnDJgApjBlIAmjFQAVgGAgAAQAjAAASAOQAWAPAAAcQAAAlgdAWQgYASgmAAIgOgBIgNBGgAoUg+IgKA2IAMABQAQAAAKgLQAJgKAAgNQAAgWgXAAgAq3BlIAeifIg0AAIgfCfIgxAAIAmjJICXAAIgmDJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-79.8,-10.4,159.6,20.9), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJdBgQgHgHAAgMQAAgNAJgJQAJgLANAAQAMAAAIAIQAHAIAAALQAAAPgJAJQgJAJgOAAQgMAAgHgIgAmdBoQgkAAgUgZQgTgVAAghQAAgdAKgbQAKgcATgRQAcgbAnAAQAlAAAUAYQASAVAAAiQAAAdgKAbQgKAdgSARQgbAagoAAgAmngfQgNAbAAAdQAAASAHAJQAIALAPAAIABAAQAUAAAOghQAMgdAAgaQAAglgcABQgVAAgPAegAktBjIAljDQAVgFAfAAQAiAAARAKQAXANAAAZQAAASgLANQgLAMgRAFIAAABQAPAEAIAMQAHALAAAQQAAAcgbATQgZAQg0ABQghgBgRgDgAj3BAIANABQAPgBAKgGQALgIAAgNQAAgYgfABIgJAAgAjeg/IgIApIAKAAQAPAAAJgGQAJgGAAgMQAAgIgGgFQgGgFgKAAgAIJBmIAJgtQAJgvAJgmIAAAAQgSAggVAjIgnA/Ig3AAIAnjKIAuAAIgJAsQgFAegQA/IABAAIAohDIArhGIAzAAIgnDKgAFbBmQgEgMgFgjQgDgTgEgHQgFgKgMAAIgEAAIgQBTIgwAAIAmjKIAxAAIgQBUIADAAIA5hUIA7AAIhKBbQAJAHAGAQQAFANAEAZQAHAnADALgAChBmIAPhRIg3AAIgPBRIgxAAIAmjKIAxAAIgOBNIA3AAIAPhNIAxAAIgmDKgAgYBmIAJgtQANhBAFgUIgBAAQgPAegWAlIgoA/Ig2AAIAmjKIAuAAIgIAsQgKAvgMAuIABAAQAPgbAagoIAphGIAzAAIgmDKgApFBmIAPhRIg3AAIgPBRIgyAAIAnjKIAxAAIgPBNIA4AAIAOhNIAyAAIgnDKgAJnAfIATiDIA1AAIghCDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-68.7,-10.4,137.4,20.8), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArbCDIAHgzIh7AAIAmjJIAxAAIgeCfIAzAAIAeifIAyAAIgfChIATABIgVBagAGnBZIADgVQgbgGgQgSQgUgVAAgfQAAgxAhgdQAcgZAlgBIADgSIAtAAIgDASQAaAGARATQATAVAAAiQAAAwggAcQgbAZgmABIgEATgAHdAjQAQgBANgUQANgUAAgfQAAghgUgGgAGpg3QgNAWAAAaQAAAPAGALQAGAKAJAEIAVhuQgQABgNAVgAMnBUQgkgBgUgYQgTgWAAghQAAgdAKgbQAKgcATgRQAcgbAnAAQAlAAAUAXQASAWAAAhQAAAggKAaQgKAcgSARQgcAagnABgAMdgzQgNAbAAAcQAAASAHAJQAIALAPAAQAUAAAPghQAMgbAAgcQAAglgdAAQgVAAgOAggAyYBEIAOglQAUALAWgBQANABAJgHQALgGAAgMQAAgLgLgGQgJgFgNAAIgOAAIAGgkIANAAQARAAAJgHQALgGAAgMQAAgIgHgFQgGgEgJgBQgSAAgTALIgJgkQAagOAhAAQAZAAAQALQATAMAAAYQAAATgNAPQgMANgTAEIAAABQAPADAJALQAKALAAASQAAAfgaASQgWAPgiAAQgkAAgVgPgAOXBOIAljEQAVgEAfAAQAiAAARAKQAXAOAAAYQAAASgLAOQgLALgRAFIAAABQAPAFAIALQAHALAAAPQAAAdgbATQgZARg0AAQghAAgRgEgAPNArIAMAAQAQAAAKgGQALgIAAgOQAAgVgfAAIgJAAgAPlhUIgHAqIAKAAQAPAAAJgHQAJgGAAgMQAAgIgGgFQgGgFgKAAgARCBQIAmjJIAxAAIgmDJgAJeBQIAeidIguAAIAJgsICNAAIgIAsIgvAAIgdCdgAEbBQIgBgtIgvAAIgTAtIgzAAIBbjJIA/AAIAPDJgAEZgBIgBhSIgBAAIgfBSIAhAAgAAQBQIAmjFQATgFAhAAQAjAAATANQAVAPAAAcQAAAngcAWQgXAQgnABIgOgBIgNBFgABfhSIgKA2IAMAAQAQAAAKgLQAJgKAAgMQAAgWgXAAQgLAAgDABgAg0BQQgCgHgHgoQgCgTgEgHQgGgJgLAAIgEAAIgQBSIgxAAIAnjJIAwAAIgQBUIAEAAIA5hUIA6AAIhKBbQAKAHAGARQAEAMAFAZQAGAnAEAKgAkWBQIAJgsQAKgyAJgjIgBAAQgPAfgXAjIgnA/Ig3AAIAmjJIAvAAIgJAsQgGAfgQA9IABAAQAKgQAfgxIAqhHIA0AAIgnDJgAnUBQIAPhQIg3AAIgPBQIgxAAIAmjJIAxAAIgOBNIA3AAIAPhNIAxAAIgmDJgAqRBQIAmjJIAxAAIgmDJgAuVBQIgBgtIgvAAIgTAtIgzAAIBbjJIA/AAIAPDJgAuXgBIgChSIAAAAIgfBSIAhAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-117.7,-13,235.5,26.1), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AslA/QATgCAKgMQAQgSAJgqIARhaICDAAIgnDKIgwAAIAeifIgkAAIgJAsQgHAlgJAWQgJAagRAOQgTATghAAgAMeBjIAHgoQAHADAKAAQAOAAAJgQQAEgHgCgIIgmiAIhIBXQAKAIAFAQQAFANAEAZQAGAjAEAOIgxAAQgEgLgFgkQgDgSgDgIQgGgKgMAAIgDAAIgQBTIgxAAIAnjKIAwAAIgRBVIAFAAIA4hVIBuAAIAVBoIABAAIAnhoIA4AAIg4BvQgPAdgJAOQgNAVgOAMQgTASgcAAQgPAAgMgFgAgqBPQgSgVAAgiQAAgcAKgbQAKgcASgSQAagbAoABQAlgBAUAYQASAWAAAhQAAAegJAbQgLAdgSAQQgbAbgoAAQgkAAgUgZgAAEgfQgNAbAAAdQABARAGAJQAIALAPAAQATAAAPggQAMgcAAgbQAAglgcAAQgWAAgNAfgAl/BPQgWgXAAgiQABhFAxgjQAcgVArAAQAaAAALAHIgMAoQgOgEgRAAQgVAAgQANQgZAXAAAnQAAAWAMAMQALAMAUAAQASAAAOgFIACAoQgQAIgegBQgoABgWgZgADWBlIAPhNIAAgBQgNAHgWAAQgXAAgNgLQgOgMAAgUQAAgKADgQIAMg+IAxAAIgLA6IgCAQQAAASAVAAQALAAAKgFIAQhXIAxAAIgmDKgAiaBlIAfifIg0AAIggCfIgxAAIAnjKICWAAIglDKgAH4BlIAeieIguAAIAJgsICNAAIgJAsIguAAIgeCegAGTBlIgBgtIgvAAIgTAtIgzAAIBbjKIA/AAIAPDKgAGRATIgBhSIgBAAIgfBSIAhAAgApeBlIAmjKIB0AAIgJArIhBAAIgIAkIA/AAIgIAnIg+AAIgIAqIBGAAIgIAqgAtcBlIgBgtIgwAAIgSAtIgzAAIBbjKIA/AAIAPDKgAteATIgChSIgBAAIgeBSIAhAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-97.9,-10.4,195.8,20.9), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIACAIAIgzIhgAAIgNAzIgnAAIAPhZIAQgCQARgbAJgXQAMgeAFgbIAKg1ICAAAIgfCgIATACIgVBZgAHog5QgFAbgKAbQgJAUgLATIAzAAIAXh1IgiAAgADiA4QgTgWAAghQAAgdAKgbQAKgcASgRQAcgbAoAAQAkABAUAXQATAVAAAiQAAAfgKAaQgKAcgSASQgbAZgpAAQgkAAgUgYgAEQg3QgNAcAAAdQAAARAHAKQAIAKAPABIAAAAQAUAAAPgiQAMgbAAgcQAAgkgdAAQgVAAgOAegAguBQQgkAAgUgYQgTgWAAghQAAgdAKgbQAKgcATgRQAcgbAnAAQAkABAUAXQASAVAAAiQAAAfgKAaQgKAcgSASQgaAZgoAAgAg4g3QgNAcAAAdQAAARAHAKQAIAKAPABQAUAAAPgiQALgbAAgcQAAgkgcAAQgVAAgOAegAmoA4QgVgWAAgiQAAhGAxgjQAdgVAqAAQAYAAAOAGIgNApQgPgEgPgBQgWAAgPAOQgZAXAAApQAAAUALAMQALAMAVAAQATAAAMgGIACAqQgQAGgeAAQgnAAgXgYgAkoBNIAmjIIAwAAIgOBFQAIgCAMAAQAcAAARAQQASAQAAAbQAAAcgTATQgbAdg7AAQgaAAgYgCgAjngPIgKA3IALABQAOAAALgJQALgJAAgOQAAgLgGgHQgHgIgMABgAMHBNIAnjIIAxAAIgnDIgAK0BNIAPhQIg4AAIgPBQIgxAAIAmjIIAxAAIgOBMIA3AAIAPhMIAxAAIgmDIgABABNIAnjIIBwAAIgJAsIg/AAIgeCcgAo4BNIgBgtIgwAAIgSAtIg0AAIBcjIIA+AAIAQDIgAo6gDIgChSIgBAAIgeBSIAhAAgAr1BNIAPhQIg3AAIgQBQIgxAAIAnjIIAxAAIgPBMIA4AAIAOhMIAyAAIgnDIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-86.3,-12.7,172.6,25.5), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkEB/IAHgyIhfAAIgNAyIgnAAIAPhZIAQgCQAPgYALgaQALgbAGgeIAKg1IB/AAIgeCgIATACIgVBZgAkcg6QgFAbgLAbQgIATgLAUIAzAAIAWh1IgiAAgAi5BMIAljIIB8AAIgIArIhLAAIgGAdQAIgCANAAQAaAAARAPQASAQAAAZQAAAhgYAUQgbAYg0AAQggAAgTgDgAh4gPIgKA4IALAAQAOAAALgJQALgKAAgOQAAgLgHgHQgGgHgMAAIgMACgAOsBNIAPhNIgEAAQgNAAgKAOQgGAHgIASQgNAdgGAJIg1AAQAIgNAQgiQATgoAXgGIAAgBQgMgEgJgKQgKgNAAgSQAAgeAYgRQAXgRArAAQAlAAAVAFIgjDGgAOohQQgJAIAAANQAAALAHAGQAHAHALAAIAJgBIAJgzIgLgBQgOAAgJAIgAMEBNIAPhQIg3AAIgQBQIgxAAIAnjJIAxAAIgPBNIA3AAIAPhNIAxAAIgmDJgAJGBNIAPhQIg3AAIgPBQIgyAAIAnjJIAxAAIgPBNIA4AAIAPhNIAxAAIgnDJgAFJBNIAnjJIBzAAIgIAqIhCAAIgHAjIA/AAIgIAqIg/AAIgIAoIBHAAIgIAqgAD1BNIAOhNIAAAAQgNAGgVAAQgYAAgNgKQgOgMAAgVQAAgKADgQIAMg9IAxAAIgLA5IgCARQAAARAVAAQAMAAAJgFIAQhWIAxAAIgmDJgABVBNIgBgtIgvAAIgTAtIgyAAIBajJIA/AAIAPDJgABTgEIgChSIAAAAIgfBSIAhAAgAoPBNIAmjJIB0AAIgJAqIhBAAIgIAjIA/AAIgIAqIg+AAIgIAoIBGAAIgIAqgAqyBNIAljFQAUgFAhAAQAkAAASANQAVAPAAAcQAAAlgcAXQgXARgnAAIgOgBIgNBGgApjhWIgLA2IANABQAQAAAKgLQAJgKAAgNQAAgVgYAAgAtGBNIAmjJIB0AAIgJAqIhBAAIgIAjIA/AAIgIAqIg+AAIgIAoIBGAAIgIAqgAubBNIAeifIg0AAIgeCfIgxAAIAmjJICXAAIgnDJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-102.5,-12.7,205.1,25.4), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFZB6IAljDQAUgFAgABQAiAAARAKQAXANAAAYQAAASgLANQgLAMgRAEIAAACQAPAEAHAMQAIAMAAAPQAAAdgbASQgZARg0AAQghAAgRgEgAGPBXIAMABQAQAAAKgHQALgIAAgNQAAgXgfAAIgJAAgAGngoIgHApIAKAAQAPAAAJgFQAJgHgBgLQAAgIgFgGQgHgEgKAAgAMbB8IAJgsQANhBAGgTIgBAAQgNAYgZApIgnA/Ig3AAIAmjIIAuAAIgIAsQgKAtgMAvIABAAQAPgaAagoIAqhGIA0AAIgnDIgAJsB8IgBgtIgvAAIgTAtIgzAAIBbjIIA/AAIAPDIgAJqArIgChSIAAAAIgfBSIAhAAgAEHB8IAJgsQAJgzAKghIgBAAQgNAYgaApIgnA/Ig3AAIAmjIIAuAAIgIAsQgGAegQA+IABAAQAKgSAfgwIAqhGIA0AAIgmDIgAgFB8IAkjFQAUgEAiAAQAkAAARANQAWAPgBAbQABAlgdAXQgXASgnAAIgOgBIgNBFgABJgmIgLA1IANABQARAAAKgLQAIgJABgNQAAgWgZAAgAhKB8QgDgKgGgkQgCgTgEgIQgFgJgMAAIgEAAIgQBSIgxAAIAnjIIAxAAIgRBSIAEAAIA5hSIA6AAIhJBaQAJAGAGASQAEANAFAZQAFAiAFAOgAkkB8IAeicIguAAIAJgsICOAAIgJAsIguAAIgfCcgAmXB8IgThAQgMgvgFgaIgBAAQgFArgJAtIgJAxIgsAAIAmjIIA3AAIARA/QALArAEAbIABAAQADgnAIgrIAKgzIAsAAIgmDIgApUB8IAmjIIAyAAIgnDIgArdB8IAmjIIAyAAIgfCeIBEAAIgIAqgAtvB8IAmjIIBzAAIgIAqIhBAAIgIAnIA9AAIgIAqIg9AAIgPBNgAL+h9IAgAAQgDASANAAQANAAADgSIAiAAQgJAngrAAQgqAAACgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-88,-12.6,176,25.2), null);


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.woman();
	this.instance.parent = this;
	this.instance.setTransform(-146,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(-146,-267,292,534), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("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CAJQgcgdglgRgAAZiJIABgDIAJgFQAAAAABAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgCAAgDACIgDgFQAEgDAFABIAFADQACACgBADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACIgEACIAIACIgBAFgAgniJIAGgHQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABIgFgCQADgFAEgCQAEAAACABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgDAEIgCADIAIgBIABAEIgQAEgAAGiNQgCgDAAgEQAAgFADgDQADgDAEABQAEgBADAEQACADAAAFQAAAEgDADQgDADgFAAQgEgBgCgDgAALiYIgBAEQgBAGAEAAQAEAAAAgGIgBgEQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAIgDACgAgQiLQgDgDAAgFQgBgFADgDQACgDAEAAQAFgBACADQADADABAFQAAAEgCADQgDADgEABQgEAAgDgCgAgOiUIACAEIADACIACgCQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgEABAAAFg");
	this.shape.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdDdQgrgSgggiQgigggSgrQgTgtAAgxQAAgwATgtQASgrAiggQAggiArgSQAtgTAwAAQAxAAAtATQArASAgAiQAiAgASArQATAtAAAwQAAAxgTAtQgSArgiAgQggAigrASQgtATgxAAQgwAAgtgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-24,-24,48,48), null);


(lib.hand_right_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hand_right();
	this.instance.parent = this;
	this.instance.setTransform(-174,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_right_1, new cjs.Rectangle(-174,-153,348,306), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38868F").s().p("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");
	this.shape.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFC00").s().p("AyvFeQgpAAgegdQgdgdAAgqIAAnzQAAgpAdgeQAegdApAAMAlfAAAQAqAAAdAdQAdAeAAApIAAHzQAAApgdAeQgdAdgqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-130,-34.9,260,70), null);


(lib.box4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box4();
	this.instance.parent = this;
	this.instance.setTransform(-27,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box4_1, new cjs.Rectangle(-27,-91,54,182), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-33,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-33,-95,66,190), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-23,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-23,-103,46,206), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-88,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-88,-110,176,220), null);


(lib.box_top_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_top();
	this.instance.parent = this;
	this.instance.setTransform(-91,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_top_1, new cjs.Rectangle(-91,-44,182,88), null);


(lib.box_part_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_part();
	this.instance.parent = this;
	this.instance.setTransform(-21,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_part_1, new cjs.Rectangle(-21,-17,42,34), null);


(lib.bgImg2_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_v, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_v, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#33D6EB","#38868F"],[0,1],0,0,0,0,0,316.6).s().p("EgajAu4MAAAhdvMA1HAAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-170,-300,340,600), null);


(lib.hand_left_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box_part
	this.instance = new lib.box_part_1();
	this.instance.parent = this;
	this.instance.setTransform(33,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:207.5,y:-63.2},20).to({x:458.6,y:93.9},15).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AyPnuIBlkFMAkdAN/IhlEFg");
	var mask_graphics_1 = new cjs.Graphics().p("AxjncIBlkGMAkdAN/IhlEGg");
	var mask_graphics_2 = new cjs.Graphics().p("Aw2nLIBkkGMAkdAN/IhkEGg");
	var mask_graphics_3 = new cjs.Graphics().p("AwKm6IBkkFMAkdAN/IhkEFg");
	var mask_graphics_4 = new cjs.Graphics().p("AvempIBkkFMAkdAN/IhkEFg");
	var mask_graphics_5 = new cjs.Graphics().p("AuymXIBkkGMAkdAN/IhkEGg");
	var mask_graphics_6 = new cjs.Graphics().p("AuGmGIBkkGMAkdAN/IhkEGg");
	var mask_graphics_7 = new cjs.Graphics().p("Atal1IBlkFMAkdAN/IhlEFg");
	var mask_graphics_8 = new cjs.Graphics().p("AsulkIBlkFMAkdAN/IhlEFg");
	var mask_graphics_9 = new cjs.Graphics().p("AsBlSIBkkGMAkdAN/IhlEGg");
	var mask_graphics_10 = new cjs.Graphics().p("ArVlBIBkkFMAkdAN+IhkEGg");
	var mask_graphics_11 = new cjs.Graphics().p("Aqpk8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_12 = new cjs.Graphics().p("Ap9k8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_13 = new cjs.Graphics().p("ApRk8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_14 = new cjs.Graphics().p("Aolk8IBlkGMAkcAN/IhkEGg");
	var mask_graphics_15 = new cjs.Graphics().p("An5k8IBlkGMAkdAN/IhlEGg");
	var mask_graphics_16 = new cjs.Graphics().p("AnNk8IBlkGMAkdAN/IhlEGg");
	var mask_graphics_17 = new cjs.Graphics().p("Amgk8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_18 = new cjs.Graphics().p("Al0k8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_19 = new cjs.Graphics().p("AlIk8IBkkGMAkdAN/IhkEGg");
	var mask_graphics_20 = new cjs.Graphics().p("Akck8IBkkGMAkdAN/IhkEGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:126.7,y:-75.6}).wait(1).to({graphics:mask_graphics_1,x:131.1,y:-73.9}).wait(1).to({graphics:mask_graphics_2,x:135.5,y:-72.2}).wait(1).to({graphics:mask_graphics_3,x:139.9,y:-70.4}).wait(1).to({graphics:mask_graphics_4,x:144.3,y:-68.7}).wait(1).to({graphics:mask_graphics_5,x:148.7,y:-67}).wait(1).to({graphics:mask_graphics_6,x:153.1,y:-65.3}).wait(1).to({graphics:mask_graphics_7,x:157.6,y:-63.5}).wait(1).to({graphics:mask_graphics_8,x:162,y:-61.8}).wait(1).to({graphics:mask_graphics_9,x:166.4,y:-60.1}).wait(1).to({graphics:mask_graphics_10,x:170.8,y:-58.3}).wait(1).to({graphics:mask_graphics_11,x:175.2,y:-55.4}).wait(1).to({graphics:mask_graphics_12,x:179.6,y:-51.9}).wait(1).to({graphics:mask_graphics_13,x:184,y:-48.5}).wait(1).to({graphics:mask_graphics_14,x:188.4,y:-45}).wait(1).to({graphics:mask_graphics_15,x:192.9,y:-41.6}).wait(1).to({graphics:mask_graphics_16,x:197.3,y:-38.1}).wait(1).to({graphics:mask_graphics_17,x:201.7,y:-34.7}).wait(1).to({graphics:mask_graphics_18,x:206.1,y:-31.2}).wait(1).to({graphics:mask_graphics_19,x:210.5,y:-27.8}).wait(1).to({graphics:mask_graphics_20,x:214.9,y:-24.3}).wait(16));

	// box_top
	this.instance_1 = new lib.box_top_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,-104);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// Слой_1
	this.instance_2 = new lib.hand_left();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-184,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-148,378,275);


(lib.boxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// Слой_5
	this.instance_1 = new lib.box2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59,-3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:99},10,cjs.Ease.cubicOut).wait(10));

	// Слой_4
	this.instance_2 = new lib.box3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47,8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:-107},10,cjs.Ease.cubicOut).wait(10));

	// Слой_3
	this.instance_3 = new lib.box4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-55,6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:-145},15,cjs.Ease.cubicOut).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-110,176,220);


(lib.banner_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-114,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(371));

	// boxes
	this.instance_1 = new lib.boxes("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(22,-18,0.01,0.01,0,0,0,0,-5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},15,cjs.Ease.cubicOut).wait(5).to({mode:"synched",loop:false},0).wait(35).to({startPosition:20},0).to({x:-282},15,cjs.Ease.cubicIn).wait(1));

	// btn
	this.instance_2 = new lib.btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,215.6,0.02,0.02,0,0,0,0,2.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},15,cjs.Ease.backOut).wait(100).to({x:-304},15,cjs.Ease.cubicIn).wait(1));

	// man
	this.instance_3 = new lib.man();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-303.6,33.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240).to({_off:false},0).to({x:-13},15,cjs.Ease.cubicOut).wait(30).to({x:300.3},15,cjs.Ease.cubicIn).to({_off:true},1).wait(70));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-149.7,-209.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({x:-16.7,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(130));

	// t3_2
	this.instance_5 = new lib.t3_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-150.6,-179.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(125).to({_off:false},0).to({x:-17.6,alpha:1},10,cjs.Ease.cubicOut).wait(35).to({alpha:0},10).to({_off:true},1).wait(190));

	// t3_1
	this.instance_6 = new lib.t3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-187.7,-209.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).to({x:-54.7,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(190));

	// t2_3
	this.instance_7 = new lib.t2_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-199.4,-149.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({x:-66.4,alpha:1},10,cjs.Ease.cubicOut).wait(30).to({alpha:0},10).to({_off:true},1).wait(250));

	// t2_2
	this.instance_8 = new lib.t2_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-151.1,-177.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({x:-18.1,alpha:1},10,cjs.Ease.cubicOut).wait(35).to({alpha:0},10).to({_off:true},1).wait(250));

	// t2_1
	this.instance_9 = new lib.t2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-171.6,-209.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({x:-38.6,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(250));

	// t1_3
	this.instance_10 = new lib.t1_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-183.2,-147.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({x:-50.2,alpha:1},10,cjs.Ease.cubicOut).wait(30).to({alpha:0},10).to({_off:true},1).wait(310));

	// t1_2
	this.instance_11 = new lib.t1_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-166.9,-177.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({x:-33.9,alpha:1},10,cjs.Ease.cubicOut).wait(35).to({alpha:0},10).to({_off:true},1).wait(310));

	// t1_1
	this.instance_12 = new lib.t1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-181.5,-211.9);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-48.5,alpha:1},10,cjs.Ease.cubicOut).wait(40).to({alpha:0},10).to({_off:true},1).wait(310));

	// bgImg2_v
	this.instance_13 = new lib.bgImg2_v();
	this.instance_13.parent = this;
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(170).to({_off:false},0).to({alpha:1},10).wait(50).to({alpha:0},10).to({_off:true},1).wait(130));

	// bgImg1_v
	this.instance_14 = new lib.bgImg1_v();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(110).to({_off:false},0).to({alpha:1},10).to({_off:true},60).wait(191));

	// hand_right
	this.instance_15 = new lib.hand_right_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(343,363.1,1,1,34.2,0,0,174,153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regY:153,rotation:0,x:286,y:229},15,cjs.Ease.cubicOut).wait(35).to({x:468,y:297.3},20).to({x:716.1,y:455.4},15).to({_off:true},35).wait(251));

	// box_left
	this.instance_16 = new lib.hand_left_1("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-332.3,156.7,1,1,-72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({rotation:0,x:-70,y:124},15,cjs.Ease.cubicOut).wait(35).to({mode:"synched",loop:false},0).to({_off:true},70).wait(251));

	// bg
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.2,-300,1023.4,670.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner_v();
	this.instance.parent = this;
	this.instance.setTransform(150.1,300.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.2,299,1023.3,671.1);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/box4.png", id:"box4"},
		{src:"images/box_part.png", id:"box_part"},
		{src:"images/box_top.png", id:"box_top"},
		{src:"images/hand_left.png", id:"hand_left"},
		{src:"images/hand_right.png", id:"hand_right"},
		{src:"images/woman.png", id:"woman"}
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