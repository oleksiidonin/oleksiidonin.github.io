(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,126);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,142);


(lib.coin_p1 = function() {
	this.initialize(img.coin_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,310);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,182);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,54);


(lib.rocket = function() {
	this.initialize(img.rocket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,292);


(lib.rocket2 = function() {
	this.initialize(img.rocket2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,140);


(lib.smoke_rocket = function() {
	this.initialize(img.smoke_rocket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,242);// helper functions:

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


(lib.t3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHKMQgagOgLgaQgKgaAHgiIAAgEQAIgjAUgZQATgaAigOQAegOAoAAQAnAAAaAOQAaAOAKAaQALAYgHAkIgBAEQgHAjgUAZQgWAbgfANQgeAOgnAAQgoAAgagOgABnHnQgdAWgIAmIgBAGQgHAmAUAWQAVAVArAAQAuAAAbgVQAegXAGglIACgGQAIgmgVgWQgVgWgsAAQgrAAgdAWgAlBKMQgbgOgKgZQgLgZAGgjIABgGQAHgjAVgZQATgZAigOQAfgOAoAAQAkAAAaAMQAaAMAMAVQAMAUgFAbIAAADIgjAAIABgDQADgSgJgNQgJgOgTgIQgUgIgZAAQgtAAgeAWQgdAVgHAnIgBAGQgIAnAVAVQAUAVAuAAQAbAAAVgHQAXgIAOgOQAOgNADgSIABgDIAiAAIAAADQgFAagVAVQgTAVggAMQgdAMglAAQgnAAgbgOgAu1KMQgbgOgKgaQgKgaAGgiIAAgEQAHgiAVgaQAVgaAfgOQAggOAnAAQAnAAAZAOQAcAOAJAaQALAagGAiIgBAEQgHAigUAaQgWAbgfANQgfAOgnAAQgnAAgagOgAuWHnQgdAWgIAmIgBAGQgHAmAVAWQATAVAtAAQAsAAAdgVQAdgWAHgmIABgGQAHgmgTgWQgWgWgrAAQgsAAgdAWgA1AKMQgagNgMgaQgKgaAGgiIABgGQAHgjAVgYQAVgaAhgOQAfgOApAAQAjAAAbAKQAaAKAMATQAMASgEAYIAAACIgjAAIAAgCQADgNgKgMQgJgLgTgHQgVgHgXAAQgtAAgfAWQgeAVgIAnIgBAGQgIAoAWAUQAVAVAvAAQA6AAAmghIAGgaIh3AAIAFgfICZAAIgXB2IgfAAIAEgbQgnAfg7AAQgoAAgbgOgA7MKMQgagOgLgaQgLgYAHgkIABgEQAGgiAVgaQAVgaAfgOQAggOAnAAQAnAAAZAOQAbAOALAaQAKAagHAiIAAAEQgIAjgUAZQgUAaggAOQgfAOgnAAQgnAAgagOgA6uHnQgdAWgHAmIgBAGQgIAmAWAWQATAVAtAAQAsAAAdgVQAdgWAHgmIABgGQAHgmgUgWQgUgWgsAAQgsAAgeAWgAfVKWIARhbIhQiAIABgFIAnAAIBABlIBnhlIAmAAIgBAFIiCCAIgRBbgAbKKWIh0ixIgjCxIghAAIAsjgIAhAAIB0CwIAiiwIAhAAIgrDggAVpKWIgPg5Ih/AAIgmA5IgiAAIABgFICUjbIAlAAIBADbIgBAFgAVRI+IgdhmIhEBmIBhAAgANdKWIArjgICKAAQAmAAATASQASASgGAeIAAAEQgHAfgZASQgaARglAAIhnAAIgSBYgAOWIgIBoAAQAVAAAPgJQAOgKAEgRIAAgEQAEgRgLgJQgKgKgXAAIhnAAgAKdKWIAji0IiAC0IgjAAIg6i1IgjC1IgiAAIArjgIAxAAIA8C6ICEi6IAwAAIgrDggEghBAKWIArjgIAiAAIgmDBIClAAIgFAfgASFERQlRAAh9hNQh2hHAQitIACgNIGhAAIABAKQAHAjAvANQAyAOCAAAIBnAAQBoAAAogKQApgIAFgcIABgCQAEgWgWgKQgXgLg7gCImvgRQjWgIhPg/QhKg7AYh/IACgLQAdiVCahHQClhOFQAAIBYAAQFSAAB+BNQB1BHgRCuIAAANImiAAIgCgKQgGgjgugNQg0gPh/AAIhJAAQhoAAgoAKQgpAKgFAbIgBACQgDAWAVAKQAXAKA8ACIGuASQDWAJBQA+QBKA7gYB/IgDALQgdCUiZBHQimBOlQAAgEAloAEEIB4poIneAAIA6koIVNAAIg5EoIneAAIh3JogAq/EEICxuQISbAAIg0ENIsIAAIgRBXIKWAAIgoDJIqVAAIgRBXIMJAAIg1EMgEggrAEEICxuQIM9AAQESAABcA3QBaA0gbCKIgCAJQgMBCgwAyQg2A6hXAXQBcASAiA3QAeAvgNBJIgCAJQgbCLhsA5Qh2A/kSAAgA5qADIGPAAQBDAAAdgNQAbgNAHggIAAgCQAGgggWgNQgYgOhCAAImPAAgA4ykYIF8AAQBEAAAdgNQAagMAHgfIAAgDQAGgfgWgMQgXgNhEAAIl9AAgEg2IAEEIAhisQAiisB+hSQB4hODzgXIFRgeQAygFAZgKQAagLAEgXIABgCQAFgagigLQgngMhtAAIgUAAQhyAAg9ARQhAASgRAoIgCAGImnAAIAEgQQAyiyChhOQCghNFCAAIA6AAQFCAACEBEQB7BAgaCEIgBAKQgaCHhrA8QhvA+kPAaIlHAfQhQAHggAKQgmAMgIAbIOYAAIg3EZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_mc, new cjs.Rectangle(-346.5,-66.5,693,133.1), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAswADwQitAAhHgnQhDglgKhYIAAgIIDVAAIACAGQAGASAaAHQAbAIBCgBIA1AAQA1AAAUgEQATgGABgNIAAgCQgBgLgMgFQgMgFgfgCIjfgJQhugDgughQgtgdABhBIAAgFQAAhNBHglQBNgnCsAAIAtAAQCsAABJAnQBCAlAJBYIABAIIjVAAIgCgGQgHgSgZgGQgbgIhCAAIglAAQg1AAgUAFQgUAFAAAOIAAABQAAALAMAFQANAGAfABIDeAIQBuAFAvAgQAsAdAABCIAAAFQAABMhIAlQhNAnisAAgAVnDwQi4AAhYg3Qhcg4AAh8IAAgJQAAh8Bcg4QBYg3C4AAIAXAAQC4AABYA3QBdA4gBB8IAAAJQABB8hdA4QhYA3i4AAgAT3hOQgoAYAAA0IAAAFQAAA0AoAZQAkAXBKAAIAbAAQBKAAAlgXQAngZAAg0IAAgFQAAg0gngYQglgYhKAAIgbAAQhKAAgkAYgEggzADwQi5AAhYg3Qhcg4AAh8IAAgJQAAh8Bcg4QBYg3C5AAIAWAAQC5AABYA3QBcA4AAB8IAAAJQAAB8hcA4QhYA3i5AAgEgikgBOQgnAYAAA0IAAAFQAAA0AnAZQAlAXBKAAIAaAAQBKAAAlgXQAogZAAg0IAAgFQAAg0gogYQglgYhKAAIgaAAQhKAAglAYgEgs/ADwQi5AAhYg3Qhcg4AAh8IAAgJQAAh8Bcg4QBYg3C5AAIAWAAQCyAABcA0QBdA0AABoIAAAEIjfAAIgCgKQgOhBh6AAIgaAAQhKAAglAYQgnAYAAA0IAAAFQAAA0AnAZQAkAXBLAAIAaAAQB6AAAOhBIACgKIDfAAIAAADQAABphdA0QhcA0iyAAgEAkKADpIk6j9IAAD9IjBAAIAAnRIDEAAIE6D9IAAj9IDAAAIAAHRgAMIDpIAAnRIDOAAIAAHRgAEkDpIAAk6Ij0AAIAAiXIK2AAIAACXIj0AAIAAE6gAi/DpIAAnRIDNAAIAAHRgAuiDpIAAnRIGFAAQCeAABKAzQBRA3AAB6IAAAJQAAB7hRA3QhLAzidgBgArUBgICcAAQBAAAAfgUQAggWAAgzIAAgFQAAgzgggWQgfgUhAAAIicAAgAyRDpIk5j9IAAD9IjBAAIAAnRIDEAAIE6D9IAAj9IC/AAIAAHRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-324.5,-24,649,48), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6XAIXQmAgBighXQiWhSgTjFIgCgQIHbAAIAEANQAPAnA4AQQA+AQCRABIB2AAQB2gBAsgKQAsgMAAgeIAAgEQAAgZgbgLQgdgMhEgCInugUQj1gJhohHQhjhEAAiQIAAgMQAAiqCfhRQCshZF+AAIBlAAQF/ABChBXQCVBSAUDFIACAQInbAAIgFgNQgOgng4gQQg+gQiSgBIhSAAQh3ABgrAKQgsAMAAAfIAAADQAAAZAbALQAdAMBEACIHuAUQD2ALBnBGQBjBDAACRIAAALQAACqifBRQisBZl+AAgEAwjAIHIAAwNIVAAAIAAEyIt2AAIAABjILyAAIAADjIryAAIAABkIN2AAIAAExgAb3IHIAAwNIHKAAIAAK+IMXAAIAAFPgADKIHIAAwNIOwAAQE3AAB1A+QByA8AACcIAAALQAABKgrA6QgwBBheAbQBsATA0A/QAtA2AABTIAAAKQAACfhuBBQh5BHk3AAgAKRDkIHGAAQBMAAAfgRQAbgPAAgkIAAgCQAAglgbgPQgfgQhMAAInGAAgAKRhfIGyAAQBNAAAegPQAbgOAAgjIAAgEQAAgigbgOQgegPhNgBImyAAgAlCIHIhcitIo8AAIhcCtInTAAIJSwNIIOAAIJRQNgAovBIIiMkJIiNEJIEZAAgEgkKAIHIAAq9IofAAIAAlQIYJAAIAAFQIofAAIAAK9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-445,-53.4,890.2,106.9), null);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5GmIAAo6Im5AAIAAkRITlAAIAAERIm5AAIAAI6g");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(-62.7,-84.3,125.5,84.4), null);


(lib.star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJHkQgLgBgIgIQgJgJAAgMIAAgCQABgxgIg7QgJhCgPgoQgjhdhFgqQhNguiAAFQgMABgJgIQgJgIgBgMQgBgMAHgJQAHgKAMgBQC6gcBKhiQBHhkALjnQABgMAJgIQAIgJAMAAQAMAAAIAJQAJAIAAAMQACA2AHBAQAIBPAKAiIAAAAQAgBkBIA0QBLA1B4AEQAMABAIAIQAJAIAAAMQAAAMgIAJQgJAJgMAAQglACgsALQgyALgcARQhGAqgqBkQgqBigJCCQgBAMgJAIQgIAIgLAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_mc, new cjs.Rectangle(-39.1,-48.3,78.2,96.8), null);


(lib.smoke_rocket_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.smoke_rocket();
	this.instance.parent = this;
	this.instance.setTransform(-96,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.smoke_rocket_1, new cjs.Rectangle(-96,-121,192,242), null);


(lib.s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2GyQk3AAiChHQh5hDgRigIgBgMIGCAAIADAKQAMAgAuAMQAyAOB2AAIBfAAQBfAAAlgJQAjgJAAgZIAAgDQAAgUgXgJQgXgKg3gCImQgQQjHgHhVg6QhQg2AAh2IAAgKQAAiJCChCQCMhIE2AAIBRAAQE3AACCBHQB5BDAQCgIACAMImCAAIgEgKQgLgggugMQgygOh2AAIhCAAQhgAAgjAJQglAJABAZIAAADQgBAUAXAJQAXAKA3ACIGRAQQDGAIBVA6QBQA2AAB1IAAAKQAACJiBBCQiMBIk2AAg");
	this.shape.setTransform(0,-43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.s, new cjs.Rectangle(-63.5,-86.7,127,86.8), null);


(lib.r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADaGmIgOiGQgFgygYgWQgbgYg/AAIlDAAIAADmIlzAAIAAtLIMYAAQDqAABkBEQBcA9AACFIAAAPQABBRgoA2QgpA2hRAXQBJAQAgAsQAcAkAJBJIAUC5gAjugqIFVAAQBGAAAdgPQAdgOAAgjIAAgDQAAgjgdgOQgdgPhGAAIlVAAg");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r, new cjs.Rectangle(-61,-84.3,122.1,84.4), null);


(lib.p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApRGmIAAtLILyAAQDgAABlBEQBsBIAACoIAAAMQAACnhsBIQhlBEjgAAIl+AAIAADYgAjdgpIFWAAQAzAAAXgNQAbgPAAglIAAgCQAAgkgbgPQgXgOgzAAIlWAAg");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p, new cjs.Rectangle(-59.4,-84.3,118.8,84.4), null);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5GmIAAtLIFzAAIAANLg");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(-18.6,-84.3,37.2,84.4), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.824,1],-95,0,95,0).s().p("Au1bCMAAAg2DIdrAAMAAAA2Dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-95,-173,190.1,346.1), null);


(lib.fire_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(-151,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.fire();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-151,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.fire_mc, new cjs.Rectangle(-151,-27,302,54), null);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AohGmIAAtLIRDAAIAAD4IrPAAIAABRIJkAAIAAC5IpkAAIAABRILPAAIAAD4g");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e, new cjs.Rectangle(-54.6,-84.3,109.2,84.4), null);


(lib.coin_p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],0,-153.9,0,154).s().p("AxHRBQnGnCAAp/QAAp9HGnEQHGnCKBAAQKDAAHFHCQHGHEAAJ9QAAJ/nGHCQnFHDqDAAQqBAAnGnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_p2, new cjs.Rectangle(-155,-154,310,308), null);


(lib.coin_p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.coin_p1();
	this.instance.parent = this;
	this.instance.setTransform(-155,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_p1_1, new cjs.Rectangle(-155,-155,310,310), null);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(-124,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(-124,-71,248,142), null);


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRGyQlOAAifhjQinhmAAjfIAAgTQAAjfCnhmQCfhjFOAAIAnAAQFCAACkBdQCqBfAAC9IAAAGImUAAIgDgRQgZh2jdAAIguAAQiGAAhCAqQhHAsAABfIAAAJQAABfBHAsQBCAqCGAAIAuAAQDdAAAZh2IADgRIGUAAIAAAGQAAC9iqBfQikBdlCAAg");
	this.shape.setTransform(0,-43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.c, new cjs.Rectangle(-67.7,-86.7,135.5,86.8), null);


(lib.btn_light_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlKMNMgkygALQACADgzgCQg9gDhAgRQjLg1iLimQiZi2Ayk2QAVh9A0hxQAxhtA9g5QBehbAVgSQBCg5A/gkQCghaD5gGUAABAACAnvgBAUAnwgBAgABAABIA4AFQBIAJBHAXQDmBLCVDGQCYDLgsE2QgQBqgkBmQgcBPgVAdQgwBFgQAUQhBBQhPBAQjzDAlOAIQh+ADnHAAQq6AA2/gHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_light_mc, new cjs.Rectangle(-331.6,-78.8,663.2,157.6), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9000").s().p("EnUvBOIMAAAicPMOpfAAAMAAACcPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-3000,-500,6000,1000), null);


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApiGmIAAtLIL9AAQD9AABfAyQBcAxAAB/IAAAJQAAA9gjAuQgnA1hMAWQBYAQAqAyQAkAsAABEIAAAIQAACBhZA1QhiA6j9AAgAjxC5IFvAAQA+AAAZgOQAWgMAAgdIAAgCQAAgdgWgMQgZgOg+AAIlvAAgAjxhNIFfAAQA/AAAYgMQAWgLAAgdIAAgDQAAgcgWgMQgYgMg/AAIlfAAg");
	this.shape.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b, new cjs.Rectangle(-61.1,-84.3,122.3,84.4), null);


(lib.arrow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-87,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow_1, new cjs.Rectangle(-87,-63,174,126), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_2
	this.instance = new lib.t2_2();
	this.instance.parent = this;
	this.instance.setTransform(0.7,61.7,0.01,0.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(40).to({scaleX:2,scaleY:2,x:1.4,y:123.3,alpha:0},10,cjs.Ease.cubicIn).wait(63));

	// t2_1
	this.instance_1 = new lib.t2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-32.2,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(45).to({scaleX:2,scaleY:2,y:-64.4,alpha:0},10,cjs.Ease.cubicIn).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-32.7,8.9,1.1);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.star_mc();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:2,scaleY:2,x:0.1,alpha:0},6).to({_off:true},1).wait(11));

	// Слой_1
	this.instance_1 = new lib.star_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},6,cjs.Ease.backOut).wait(5).to({scaleX:2,scaleY:2,x:0.1,alpha:0},10,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,0.8,1);


(lib.rocket1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.smoke_rocket_1();
	this.instance.parent = this;
	this.instance.setTransform(-113.1,46.4,0.595,0.595,0,0,0,67.5,-51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-51.4,scaleX:0.78,scaleY:0.78,x:-118.3,y:47.4},4).to({regX:68,regY:-52.1,scaleX:1,scaleY:1,x:-124.8,y:48.9,alpha:0},5).wait(1).to({regX:67.5,regY:-51.5,scaleX:0.1,scaleY:0.1,x:-98.7,y:43},0).to({regY:-51.4,scaleX:0.33,scaleY:0.33,x:-105.2,y:44.5,alpha:1},5).to({regY:-51.3,scaleX:0.55,scaleY:0.55,x:-111.8,y:46},5).wait(1));

	// Слой_2
	this.instance_1 = new lib.smoke_rocket_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.7,43,0.1,0.1,0,0,0,67.5,-51.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-51.4,scaleX:0.33,scaleY:0.33,x:-105.2,y:44.5,alpha:1},5).to({regY:-51.3,scaleX:0.55,scaleY:0.55,x:-111.8,y:46},5).to({regY:-51.4,scaleX:0.78,scaleY:0.78,x:-118.3,y:47.4},5).to({regX:68,regY:-52.1,scaleX:1,scaleY:1,x:-124.8,y:48.9,alpha:0},5).wait(1));

	// Слой_1
	this.instance_2 = new lib.rocket();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-167,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.3,-146,377.4,294.8);


(lib.fire_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.fire_mc();
	this.instance.parent = this;
	this.instance.setTransform(-145.5,0.3,0.685,0.685,0,0,0,-151.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:0.83,scaleY:0.83,x:-148,y:0.2},4).to({regX:-151,scaleX:1,scaleY:1,x:-151,y:0,alpha:0},5).wait(1).to({scaleX:0.3,scaleY:0.3,x:-138.8,y:0.7},0).to({regX:-151.1,scaleX:0.48,scaleY:0.48,x:-141.8,y:0.5,alpha:1},5).to({regY:0.1,scaleX:0.65,scaleY:0.65,x:-144.9,y:0.4},5).wait(1));

	// Слой_1
	this.instance_1 = new lib.fire_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-138.8,0.7,0.3,0.3,0,0,0,-151,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-151.1,scaleX:0.48,scaleY:0.48,x:-141.8,y:0.5,alpha:1},5).to({regY:0.1,scaleX:0.65,scaleY:0.65,x:-144.9,y:0.4},5).to({regY:0,scaleX:0.83,scaleY:0.83,x:-148,y:0.2},5).to({regX:-151,scaleX:1,scaleY:1,x:-151,y:0,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.4,-18.2,206.9,37);


(lib.coin_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],-0.1,-155.2,-0.1,155.3).s().p("AiVYOMAAAgwbIErAAMAAAAwbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(19));

	// Слой_1
	this.instance = new lib.coin_p1_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.097,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1},10).to({scaleX:0.19},9).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],-0.1,-154.2,-0.1,154.3).s().p("AiBYEMAAAgwHIEDAAMAAAAwHg");
	this.shape_1.setTransform(13.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],-0.1,-154.2,-0.1,154.3).s().p("AhtYEMAAAgwHIDbAAMAAAAwHg");
	this.shape_2.setTransform(12.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],0,-154.2,0,154.3).s().p("AhPYEMAAAgwHICfAAMAAAAwHg");
	this.shape_3.setTransform(10.5,0);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],0,-154.2,0,154.3).s().p("AiVYEMAAAgwHIErAKMAAAAv9g");
	this.shape_4.setTransform(-12,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#2F2F2F","#696969","#9D9D9D","#7F7F7F","#2F2F2F"],[0,0.278,0.525,0.722,1],0.5,-154.2,0.5,154.3).s().p("AiQYEMAAAgwHIESAKMAAPAv9g");
	this.shape_5.setTransform(-12.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},3).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(1).to({x:5.5},0).to({_off:true},3).wait(7).to({_off:false,x:-8},0).wait(3).to({x:-10.5},0).to({_off:true},1).wait(2));

	// Слой_2
	this.instance_1 = new lib.coin_p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0,0.097,1,0,0,0,1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.19,x:26.7},1).to({scaleX:0.28,x:25.2},1).to({scaleX:0.37,x:22.1},1).to({scaleX:0.46,x:18.9},1).to({regX:1.2,scaleX:0.55,x:15.8},1).to({regX:0,scaleX:1,x:0},5).to({scaleX:0.19,x:-26.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-155,30,310);


(lib.coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin, new cjs.Rectangle(-15,-155,30,310), null);


(lib.clouds_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(489,-206.1,0.6,0.6,0,0,0,0,-0.2);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:436.7},65).wait(31));

	// Слой_2
	this.instance_1 = new lib.cloud_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(871.2,-226.2,0.4,0.4,0,0,0,0.2,-0.2);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,x:837.5},65).wait(31));

	// Слой_1
	this.instance_2 = new lib.cloud_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.7,155.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:188.1},65).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.7,-254.5,801,480.8);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.cloud_1();
	this.instance.parent = this;
	this.instance.setTransform(-307.7,-113.4,0.6,0.6,0,0,0,0,-0.2);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-359.9},65).wait(31));

	// Слой_2
	this.instance_1 = new lib.cloud_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1111.7,-103.4,0.4,0.4,0,0,0,0.2,-0.2);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,x:1078},65).wait(31));

	// Слой_1
	this.instance_2 = new lib.cloud_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-32.4},65).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.1,-155.9,1543.3,226.9);


(lib.btn_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.btn_light_mc();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(12, 12, 3)];
	this.instance.cache(-334,-81,667,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_light, new cjs.Rectangle(-347.6,-94.8,698,192), null);


(lib.t3_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t3_mc();
	this.instance.parent = this;
	this.instance.setTransform(820.5,-105.6,2,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},10,cjs.Ease.backOut).wait(109).to({y:-321.4},10,cjs.Ease.cubicIn).wait(96));

	// Слой_7
	this.instance_1 = new lib.star("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1266.7,-28.5,0.9,0.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(106));

	// Слой_6
	this.instance_2 = new lib.star("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(353.4,-94.1,0.5,0.5,0,0,0,0,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(111));

	// Слой_5
	this.instance_3 = new lib.star("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1188.6,203.9,0.55,0.55,0,0,0,0.1,-0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(116));

	// Слой_4
	this.instance_4 = new lib.star("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(415.7,-190.4,1.1,1.1,0,0,0,-0.2,-0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(121));

	// Слой_3
	this.instance_5 = new lib.star("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1231.6,-187.8,0.55,0.55,0,0,0,0.1,-0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(126));

	// Слой_2
	this.instance_6 = new lib.star("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(368.2,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(127.5,-238.7,1386,277.3);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.t3_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2,2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},10,cjs.Ease.backOut).wait(109).to({y:-172},10,cjs.Ease.cubicIn).wait(96));

	// Слой_7
	this.instance_1 = new lib.star("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1351.9,28,0.9,0.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(106));

	// Слой_6
	this.instance_2 = new lib.star("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-538.4,66.7,0.5,0.5,0,0,0,0,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(111));

	// Слой_5
	this.instance_3 = new lib.star("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(467.1,-49.1,0.55,0.55,0,0,0,0.1,-0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(116));

	// Слой_4
	this.instance_4 = new lib.star("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-436.1,-94,1.1,1.1,0,0,0,-0.2,-0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(121));

	// Слой_3
	this.instance_5 = new lib.star("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1341.4,-65.1,0.55,0.55,0,0,0,0.1,-0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(126));

	// Слой_2
	this.instance_6 = new lib.star("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(368.2,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({mode:"single",startPosition:11},0).wait(83).to({mode:"synched",loop:false},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-693,-133.1,1386,266.3);


(lib.t1_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.star("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(403.2,-75.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(11));

	// star
	this.instance_1 = new lib.star("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-290.9,43.2,0.5,0.5,0,0,0,0,-0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(16));

	// star
	this.instance_2 = new lib.star("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(411.2,43.2,0.5,0.5,0,0,0,0,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(11).to({x:427.2,mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(21));

	// star
	this.instance_3 = new lib.star("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-272,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(26));

	// e
	this.instance_4 = new lib.e();
	this.instance_4.parent = this;
	this.instance_4.setTransform(234.2,102.4,0.01,0.01,0,0,0,-50.1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:-54.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-50.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).wait(1));

	// c
	this.instance_5 = new lib.c();
	this.instance_5.parent = this;
	this.instance_5.setTransform(92,103.6,0.01,0.01,0,0,0,-65,5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regX:-67.8,regY:0,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,regY:5,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(2));

	// i
	this.instance_6 = new lib.i();
	this.instance_6.parent = this;
	this.instance_6.setTransform(48.1,102.4,0.013,0.01,0,0,0,-14.9,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({regX:-18.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-14.9,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// r
	this.instance_7 = new lib.r();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-80.8,102.4,0.01,0.01,0,0,0,-55.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:-61.1,scaleX:1,scaleY:1,x:-80.9},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01,x:-80.8},7,cjs.Ease.backIn).to({_off:true},1).wait(6));

	// p
	this.instance_8 = new lib.p();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-205.7,102.4,0.01,0.01,0,0,0,-55.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regX:-59.4,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(8));

	// t
	this.instance_9 = new lib.t();
	this.instance_9.parent = this;
	this.instance_9.setTransform(190.9,-14.8,0.01,0.01,0,0,0,-65,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({regX:-62.8,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(10));

	// s
	this.instance_10 = new lib.s();
	this.instance_10.parent = this;
	this.instance_10.setTransform(61.6,-13.6,0.01,0.01,0,0,0,-70,5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({regX:-63.5,regY:0,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-70,regY:5,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(12));

	// e
	this.instance_11 = new lib.e();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-52.6,-14.8,0.01,0.01,0,0,0,-55.1,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({regX:-54.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(14));

	// b
	this.instance_12 = new lib.b();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-180.9,-14.8,0.01,0.01,0,0,0,-65,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:-61.1,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.4,-75.9,92.8,61.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.instance = new lib.star("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(690.5,4.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(11));

	// star
	this.instance_1 = new lib.star("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-615.6,-62.2,0.5,0.5,0,0,0,0,-0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(16));

	// star
	this.instance_2 = new lib.star("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(645.7,-71.5,0.5,0.5,0,0,0,0,-0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(21));

	// star
	this.instance_3 = new lib.star("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-563.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({mode:"single",startPosition:11},0).wait(34).to({mode:"synched",loop:false},0).wait(26));

	// e
	this.instance_4 = new lib.e();
	this.instance_4.parent = this;
	this.instance_4.setTransform(493.8,16.6,0.01,0.01,0,0,0,-50.1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:-54.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-50.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).wait(1));

	// c
	this.instance_5 = new lib.c();
	this.instance_5.parent = this;
	this.instance_5.setTransform(351.6,17.8,0.01,0.01,0,0,0,-65,5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regX:-67.8,regY:0,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,regY:5,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(2));

	// i
	this.instance_6 = new lib.i();
	this.instance_6.parent = this;
	this.instance_6.setTransform(307.7,16.6,0.013,0.01,0,0,0,-14.9,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({regX:-18.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-14.9,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// r
	this.instance_7 = new lib.r();
	this.instance_7.parent = this;
	this.instance_7.setTransform(178.8,16.6,0.01,0.01,0,0,0,-55.1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:-61.1,scaleX:1,scaleY:1,x:178.7},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01,x:178.8},7,cjs.Ease.backIn).to({_off:true},1).wait(6));

	// p
	this.instance_8 = new lib.p();
	this.instance_8.parent = this;
	this.instance_8.setTransform(53.9,16.6,0.01,0.01,0,0,0,-55.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regX:-59.4,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(8));

	// t
	this.instance_9 = new lib.t();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-108.7,16.6,0.01,0.01,0,0,0,-65,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({regX:-62.8,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(10));

	// s
	this.instance_10 = new lib.s();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-238,17.8,0.01,0.01,0,0,0,-70,5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({regX:-63.5,regY:0,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-70,regY:5,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(12));

	// e
	this.instance_11 = new lib.e();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-352.2,16.6,0.01,0.01,0,0,0,-55.1,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({regX:-54.6,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-55.1,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(14));

	// b
	this.instance_12 = new lib.b();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-480.5,16.6,0.01,0.01,0,0,0,-65,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:-61.1,scaleX:1,scaleY:1},7,cjs.Ease.backOut).wait(40).to({regX:-65,scaleX:0.01,scaleY:0.01},7,cjs.Ease.backIn).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-564.3,15.7,85,5.4);


(lib.rocket2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.fire_1();
	this.instance.parent = this;
	this.instance.setTransform(156.4,-58,1,1,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib.rocket2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-113,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket2_1, new cjs.Rectangle(-113,-95.2,333.6,165.2), null);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.coin();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.particle2Movie, new cjs.Rectangle(-6,-62,12,124), null);


(lib.CTA_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah7OGUgnsgAIAAAAABQABACg1gMQg3gNgcgKQgagJgPgKIgIgGQABACgTAAQgSAAABABQABACgegHQglgJgmgMQh2gnhGg8QhahNhIiEQhPiRgJiDQgLiRAyivQA0i6Bbh2QBqiICnhpQC9h4CjgEUAABAABAovgBLUAotgBLAAAAABIA5AGQBIAJBIAUQDoBDCWCjQCiCxA5EBQAsDEgXDCQgSCbiAC1QiBC2iWBQQiSBOhaAYQhOAViGAEIjbABQolAA9tgGgAlgL+UAl/AAMAE/gAIQFOgIDzjAQBPhABBhQQAQgUAwhFQAVgdAchPQAkhmAQhqQAsk2iYjLQiVjGjmhLQhHgXhIgJIg4gFUAABgABgnwABAUgnvABAgABgACQj5AGigBaQg/AkhCA5QgVASheBbQg9A5gxBtQg0BxgVB9QgyE2CZC2QCLCmDLA1QBAARA9ADQAzACgCgDMAkyAALg");
	mask.setTransform(-1.2,-0.5);

	// grad
	this.instance = new lib.grad();
	this.instance.parent = this;
	this.instance.setTransform(-448.7,-24.1,1,1.55,29.7,0,0,-0.2,-0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:469.5,y:-6.1},15,cjs.Ease.quadInOut).wait(1));

	// mask
	this.instance_1 = new lib.btn_light();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.4,-1.9);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.102},5).wait(10).to({alpha:0},5).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AlKMNMgkygALQACADgzgCQg9gDhAgRQjLg1iLimQiZi2Ayk2QAVh9A0hxQAxhtA9g5QBehbAVgSQBCg5A/gkQCghaD5gGUAABAACAnvgBAUAnwgBAgABAABIA4AFQBIAJBHAXQDmBLCVDGQCYDLgsE2QgQBqgkBmQgcBPgVAdQgwBFgQAUQhBBQhPBAQjzDAlOAIQh+ADnHAAQq6AA2/gHg");
	mask_1.setTransform(-3.4,-2);

	// grad
	this.instance_2 = new lib.grad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-448.7,-24.1,1,1.55,29.7,0,0,-0.2,-0.1);
	this.instance_2.alpha = 0.602;
	this.instance_2.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:469.5,y:-6.1},15,cjs.Ease.quadInOut).wait(6));

	// Слой_1
	this.instance_3 = new lib.CTA();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-344,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351,-96.7,699,192);


(lib.chips_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cloneParticle = new lib.particle2Movie();
		cloneParticle.x = Math.random()*900;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*0.7 + 0.2;
		
		cloneParticle.rotation = Math.random()*60;
		this.addChild(cloneParticle);
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_1 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_2 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_3 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_4 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_5 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_6 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// Слой_1
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.setTransform(519,154,1,1,0,0,0,519,154);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-62,12,124);


(lib.chips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cloneParticle = new lib.particle2Movie();
		cloneParticle.x = Math.random()*2100;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random() + 0.2;
		
		cloneParticle.rotation = Math.random()*60;
		this.addChild(cloneParticle);
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_1 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_2 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_3 = function() {
		var num = this.getNumChildren();
		
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 450){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Слой_1
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.setTransform(519,154,1,1,0,0,0,519,154);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-62,12,124);


(lib.banner_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency=10;
		stage.enableMouseOver(frequency);
		_this = this;
		
		_this.btn.addEventListener('click', linkM);
		function linkM() {
				window.open('https://www.google.com', '_blank');
		}
		
		_this.btn.addEventListener('mouseover', linkN);
		function linkN() {
				 _this.cta.play();
		}
			
		_this.btn.addEventListener('mouseout', linkO);
		function linkO() {
			//_this.cta.gotoAndPlay("off");
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(265));

	// bg
	this.btn = new lib.bg();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(265));

	// arrow
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(-185.1,93.9,0.4,0.4,0,0,0,79.2,-53.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).to({x:-121.1,y:35.5},10,cjs.Ease.quadInOut).wait(13).to({regX:79,scaleX:0.38,scaleY:0.38,x:-121.2},0).wait(3).to({regX:79.2,scaleX:0.4,scaleY:0.4,x:-121.1},0).wait(5).to({regX:79,scaleX:0.38,scaleY:0.38,x:-121.2},0).wait(3).to({regX:79.2,scaleX:0.4,scaleY:0.4,x:-121.1},0).wait(65).to({y:131.5},10,cjs.Ease.cubicIn).wait(1));

	// CTA
	this.cta = new lib.CTA_1();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(600.1,225.1);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(140).to({regX:12.6,scaleX:0,scaleY:0,x:32,y:43.1},0).to({regX:0.1,scaleX:0.4,scaleY:0.4,x:0},10,cjs.Ease.backOut).wait(28).to({scaleX:0.38,scaleY:0.38},0).wait(3).to({scaleX:0.4,scaleY:0.4},0).wait(5).to({scaleX:0.38,scaleY:0.38},0).wait(3).to({scaleX:0.4,scaleY:0.4},0).wait(65).to({regY:0.1,y:139.1},10,cjs.Ease.cubicIn).wait(1));

	// t3
	this.instance_1 = new lib.t3_v("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-327.6,0,0.4,0.4,0,0,0,-0.2,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).wait(130));

	// rocket2
	this.instance_2 = new lib.rocket2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.4,-135,0.4,0.4,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regX:-0.1,regY:-0.1,x:-114.5,y:-80.3},10,cjs.Ease.cubicOut).to({x:-148.9,y:-65.1},40).to({regX:0,regY:0.1,x:-312.5,y:17},10).to({_off:true},1).wait(129));

	// rocket1
	this.instance_3 = new lib.rocket1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.4,154.9,0.32,0.32,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({regX:0.3,x:136.5,y:92.4},10,cjs.Ease.cubicOut).to({regX:0.1,regY:0,x:173.6,y:70},45).to({x:288.2,y:-3.6},10).to({_off:true},1).wait(129));

	// t2
	this.instance_4 = new lib.t2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.2,0,0.404,0.402);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({_off:true},66).wait(129));

	// clouds
	this.instance_5 = new lib.clouds_v("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-172,18.6,0.4,0.4,0,0,0,-0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(45).to({startPosition:55},0).to({alpha:0,startPosition:65},10).to({_off:true},1).wait(129));

	// t1
	this.instance_6 = new lib.t1_v("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-34.1,0.7,0.5,0.5,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},71).wait(194));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).to({alpha:1},10).wait(184).to({alpha:0.012},10).wait(1));

	// coins
	this.instance_8 = new lib.chips_v();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-286.1,-169,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(265));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3000,-500,6000,1000);


(lib.banner_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency=10;
		stage.enableMouseOver(frequency);
		_this = this;
		
		_this.btn.addEventListener('click', linkM);
		function linkM() {
				window.open('https://www.google.com', '_blank');
		}
		
		_this.btn.addEventListener('mouseover', linkN);
		function linkN() {
				 _this.cta.play();
		}
			
		_this.btn.addEventListener('mouseout', linkO);
		function linkO() {
			//_this.cta.gotoAndPlay("off");
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(265));

	// bg
	this.btn = new lib.bg();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(265));

	// arrow
	this.instance = new lib.arrow_1();
	this.instance.parent = this;
	this.instance.setTransform(77,124,1,1,0,0,0,79,-54);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).to({x:237,y:-22},10,cjs.Ease.quadInOut).wait(13).to({scaleX:0.96,scaleY:0.96},0).wait(3).to({scaleX:1,scaleY:1},0).wait(5).to({scaleX:0.96,scaleY:0.96},0).wait(3).to({scaleX:1,scaleY:1},0).wait(65).to({y:178},10,cjs.Ease.cubicIn).wait(1));

	// CTA
	this.cta = new lib.CTA_1();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.setTransform(600.1,225.1);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(140).to({regX:5,scaleX:0.01,scaleY:0.01,x:620,y:-3},0).to({regX:0,scaleX:1,scaleY:1,x:540},10,cjs.Ease.backOut).wait(28).to({regX:0.1,scaleX:0.96,scaleY:0.96},0).wait(3).to({regX:0,scaleX:1,scaleY:1},0).wait(5).to({regX:0.1,scaleX:0.96,scaleY:0.96},0).wait(3).to({regX:0,scaleX:1,scaleY:1},0).wait(65).to({y:197},10,cjs.Ease.cubicIn).wait(1));

	// t3
	this.instance_1 = new lib.t3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-406.7,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).wait(130));

	// rocket2
	this.instance_2 = new lib.rocket2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-286.9,-175.8,1,1,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regX:0,regY:0,x:-629,y:-39},10,cjs.Ease.cubicOut).to({x:-715,y:-1},40).to({x:-1124.2,y:204.3},10).to({_off:true},1).wait(129));

	// rocket1
	this.instance_3 = new lib.rocket1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(391.8,235.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({x:736,y:40},10,cjs.Ease.cubicOut).to({x:852,y:-30},45).to({x:1210.1,y:-260},10).to({_off:true},1).wait(129));

	// t2
	this.instance_4 = new lib.t2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({_off:true},66).wait(129));

	// clouds
	this.instance_5 = new lib.clouds("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-535,63);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).to({alpha:1,startPosition:10},10).wait(45).to({startPosition:55},0).to({alpha:0,startPosition:65},10).to({_off:true},1).wait(129));

	// t1
	this.instance_6 = new lib.t1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-61.2,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},71).wait(194));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).to({alpha:1},10).wait(184).to({alpha:0.012},10).wait(1));

	// coins
	this.instance_8 = new lib.chips();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1075.2,-219,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(265));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3000,-500,6000,1000);


// stage content:
(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{v:1,g:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var myLocalThis01 = this;
		window.addEventListener('resize', resizeBanner, false);
		function resizeBanner() {
			var docW = window.innerWidth;
			var docH = window.innerHeight;
			console.log(window.innerWidth + '; ' + window.innerHeight);
			if(docH > docW){
				myLocalThis01.gotoAndStop('v');
			}else{
				myLocalThis01.gotoAndStop('g');
			}
		}
		resizeBanner();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_3
	this.instance = new lib.banner_v();
	this.instance.parent = this;
	this.instance.setTransform(200,100);

	this.instance_1 = new lib.banner_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1000,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '578CD4C2E4994BF29A6E7E02E87A7DAE',
	width: 2000,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/cloud.png", id:"cloud"},
		{src:"images/coin_p1.png", id:"coin_p1"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/fire.png", id:"fire"},
		{src:"images/rocket.png", id:"rocket"},
		{src:"images/rocket2.png", id:"rocket2"},
		{src:"images/smoke_rocket.png", id:"smoke_rocket"}
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
an.compositions['578CD4C2E4994BF29A6E7E02E87A7DAE'] = {
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