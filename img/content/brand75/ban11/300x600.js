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
p.nominalBounds = new cjs.Rectangle(0,0,310,326);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,286);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,288);// helper functions:

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


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFoCVQgNgmAAhTQAAhRANgnQANglAeAAQAWAAAMAVQANAVAAAnQAAAPgCALIgEAVIgiAAQACgXAAgVQAAgfgCgKQgBgMgHAAQgIAAgDAcQgDAdAABFQAABHADAcQADAdAIAAQAGAAACgMQACgKAAgfQAAgVgCgXIAiAAQACAHACANQACAMAAAPQAAAmgNAWQgMAVgWAAQgeAAgNgmgAhtCVQgNglAAhUQAAhSANgmQANglAeAAQAWAAANAVQAMAVgBAnQAAAPgCALQgBAOgDAHIgiAAQADgaAAgSQABgcgDgNQgCgMgGAAQgIAAgDAcQgEAdAABFQAABHAEAcQADAdAIAAQAGAAACgMQADgNgBgcQAAgRgDgbIAiAAQADAHABANQACAMAAAPQABAmgMAWQgNAVgWAAQgeAAgNgmgApQCVQgNgmAAhTQAAhRANgmQANgmAcAAQAcAAAOAmQANAmgBBRQABBTgNAmQgOAmgcAAQgcAAgNgmgAoxhFQgDAdAABEQAABGADAdQACAdAIAAQAHAAADgdQAEgdAAhGQAAhEgEgdQgDgdgHAAQgIAAgCAdgAu3CVQgOglAAhUQAAhSAOgmQANglAdAAQAXAAALAVQANAUAAAoQAAAPgCAKIgEARIgjAAQADgVAAgTQAAgegCgKQgBgMgHAAQgHAAgEAZQgCAXgBA+IAqAAIAAAhIgJAAIghgLQAABEADAaQAEAcAHAAQAHAAABgMQACgMAAgdQAAgWgDgSIAjAAIAEASQACAMAAAOQAAAngNAUQgNAVgVAAQgdAAgNgmgAOdC2IARj2IgFAAIgkD2IgpAAIAAkzIAqAAIgRD2IAFAAIAkj2IAoAAIAAEzgAMmC2IgPiMIgIAAIAACMIgmAAIAAkzIAmAAIAACGIARAAIAAiGIAnAAIgSCKIAaCpgAK0C2IgEg/IgbAAIgDA/IgmAAIAXkzIA/AAIAYEzgAKvBVIgKioIgFAAIgJCoIAYAAgAIzC2IARkVIgHAAIgZCsIgUAAIgaisIgFAAIAQEVIgpAAIAAkzIAuAAIASCCIAEAAIASiCIAuAAIAAEzgADoC2IAAkzIAlAAIAAEzgACxC2IgOiMIgIAAIAACMIgmAAIAAkzIAmAAIAACGIARAAIAAiGIAmAAIgSCKIAaCpgAACC2IAAkzIAlAAIAABvQAdAAAPAXQAOAZAAAwQAAAygOAZQgPAZgdAAgAAnCXIACAAQAKAAAEgRQAEgQAAgjQAAgigEgQQgFgQgJAAIgCAAgAi6C2IARj2IgGAAIgkD2IgoAAIAAkzIApAAIgRD2IAGAAIAkj2IAoAAIAAEzgAleC2IAAkzIBSAAIAAAjIgsAAIAABiIAhAAIAAAiIghAAIAABqIAsAAIAAAigAmeC2IAAkQIgWAAIAAEQIgmAAIAAkzIBiAAIAAEzgArNC2IAAkzIAlAAQAcAAAQAYQAOAZAAAwQAAAugOAYQgQAZgcAAIAABzgAqoAjIACAAQARAAAAg/QAAhBgRAAIgCAAgAtHC2IAAkzIAlAAQAcAAAQATQAQASAAAjQAAAigQASQgPARgdAAIAAAFQAfAAAQAUQAQATAAApQAAAogPAUQgRAVgfAAgAsiCXIADAAQAWAAAAg2QAAgzgWAAIgDAAgAsigIIADAAQAJAAAFgKQAFgLAAgVQAAgXgFgKQgFgKgJAAIgDAAgAjkiaQgKgHAAgNQAAgIADgEIAcAAIAAAWIASAAIAAgWIAbAAQAEAEAAAIQAAANgKAHQgMAHgSAAQgSAAgMgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AFoCVQgNgmAAhTQAAhRANgnQANglAeAAQAWAAAMAVQANAVAAAnQAAAPgCALIgEAVIgjAAQADgXAAgVQAAgfgCgKQgBgMgHAAQgIAAgDAcQgDAdAABFQAABHADAcQADAdAIAAQAGAAACgMQACgKAAgfQAAgVgDgXIAjAAQACAHACANQACAMAAAPQAAAmgNAWQgMAVgWAAQgeAAgNgmgAhtCVQgNglAAhUQAAhSANgmQANglAeAAQAWAAAMAVQAMAVAAAnQAAAPgCALQgBAOgDAHIgiAAQAEgagBgSQABgcgDgNQgCgMgGAAQgJAAgCAcQgDAdgBBFQABBHADAcQACAdAJAAQAFAAADgMQADgNgBgcQABgRgEgbIAiAAQADAHABANQACAMAAAPQAAAmgMAWQgMAVgWAAQgeAAgNgmgApQCVQgNgmAAhTQAAhRANgmQANgmAcAAQAcAAAOAmQAMAmAABRQAABTgMAmQgOAmgcAAQgcAAgNgmgAoxhFQgDAdAABEQAABGADAdQACAdAIAAQAHAAADgdQAEgdAAhGQAAhEgEgdQgDgdgHAAQgIAAgCAdgAu3CVQgOglAAhUQAAhSAOgmQANglAdAAQAWAAAMAVQANAUAAAoQAAAPgCAKIgFARIgiAAQADgVABgTQgBgegCgKQgBgMgHAAQgIAAgDAZQgCAXgBA+IAqAAIAAAhIgIAAIgigLQAABEADAaQADAcAIAAQAHAAABgMQACgMABgdQgBgWgDgSIAjAAIAFASQABAMAAAOQAAAngNAUQgMAVgWAAQgdAAgNgmgAOdC2IARj2IgFAAIgkD2IgpAAIAAkzIAqAAIgRD2IAFAAIAkj2IAoAAIAAEzgAMmC2IgOiMIgJAAIAACMIgmAAIAAkzIAmAAIAACGIASAAIAAiGIAmAAIgSCKIAaCpgAK0C2IgEg/IgbAAIgDA/IglAAIAWkzIA+AAIAZEzgAKvBVIgKioIgFAAIgJCoIAYAAgAIzC2IARkVIgHAAIgZCsIgUAAIgaisIgFAAIAQEVIgpAAIAAkzIAuAAIASCCIAEAAIASiCIAuAAIAAEzgADoC2IAAkzIAlAAIAAEzgACxC2IgOiMIgIAAIAACMIgmAAIAAkzIAmAAIAACGIARAAIAAiGIAmAAIgSCKIAaCpgAACC2IAAkzIAlAAIAABvQAdAAAPAXQAOAZAAAwQAAAygOAZQgPAZgdAAgAAnCXIACAAQAKAAAEgRQAEgQAAgjQAAgigEgQQgFgQgJAAIgCAAgAi6C2IARj2IgGAAIgkD2IgoAAIAAkzIApAAIgRD2IAGAAIAkj2IAoAAIAAEzgAleC2IAAkzIBSAAIAAAjIgsAAIAABiIAhAAIAAAiIghAAIAABqIAsAAIAAAigAmdC2IAAkQIgYAAIAAEQIglAAIAAkzIBiAAIAAEzgArNC2IAAkzIAlAAQAdAAAPAYQAOAZAAAwQAAAugOAYQgPAZgdAAIAABzgAqoAjIACAAQARAAAAg/QAAhBgRAAIgCAAgAtHC2IAAkzIAlAAQAcAAAQATQAPASAAAjQAAAigPASQgPARgdAAIAAAFQAfAAAQAUQAQATAAApQAAAogPAUQgRAVgfAAgAsiCXIADAAQAWAAAAg2QAAgzgWAAIgDAAgAsigIIADAAQAJAAAFgKQAEgLABgVQgBgXgEgKQgFgKgJAAIgDAAgAjkiaQgKgHAAgNQAAgIADgEIAcAAIAAAWIATAAIAAgWIAbAAQADAEAAAIQAAANgKAHQgMAHgSAAQgSAAgMgHg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-96.6,-18.6,194.2,38.3), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIvC4IASj1IgGAAIgkD1IgoAAIAAkyIApAAIgSD1IAHAAIAkj1IAnAAIAAEygAG5C4IgEg/IgbAAIgDA/IglAAIAXkyIA+AAIAYEygAG0BXIgKioIgEAAIgKCoIAYAAgAECC4IAAkyIAlAAQAcAAAQASQAQATAAAjQAAAggQATQgPASgdAAIAAAEQAfAAARAUQAQATAAApQAAAngQAWQgQAUggAAgAEnCZIADAAQAXAAgBg2QABgzgXAAIgDAAgAEngFIADAAQAJAAAFgLQAFgLAAgVQAAgXgFgKQgFgKgJAAIgDAAgAC/C4IARj1IgFAAIglD1IgoAAIAAkyIApAAIgRD1IAGAAIAkj1IAnAAIAAEygAAKC4IAAkyIAmAAQAdAAAOAXQAOAZAAAwQAAAugOAYQgOAZgdAAIAAAAIAABzgAAwAlIABAAQASAAAAg/QAAhBgSAAIgBAAgAgrC4IgPiMIgJAAIAACMIglAAIAAkyIAlAAIAACFIASAAIAAiFIAmAAIgSCJIAaCpgAi+C4IAAkQIgiAAIAAgiIBpAAIAAAiIgiAAIAAEQgAkZC4Igjj5IgFAAIASD5IgoAAIAAkyIAqAAIAiD5IAFAAIgRj5IAoAAIAAEygAmXC4IAAkyIAlAAIAAEygAn3C4IAAkyIAmAAIAAEQIAsAAIAAAigApXC4IAAkyIBPAAIAAAiIgqAAIAABqIAgAAIAAAiIggAAIAACEgAIGiXQgKgIAAgNQAAgGADgGIAbAAIAAAWIATAAIAAgWIAbAAQADAFABAHQAAANgLAIQgLAGgTAAQgSAAgLgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AIvC4IASj1IgGAAIgkD1IgoAAIAAkyIApAAIgSD1IAHAAIAkj1IAnAAIAAEygAG5C4IgEg/IgbAAIgDA/IglAAIAXkyIA+AAIAYEygAGzBXIgJioIgEAAIgKCoIAXAAgAECC4IAAkyIAlAAQAdAAAPASQAQATAAAjQAAAggQATQgPASgdAAIAAAEQAfAAARAUQAQATAAApQAAAngQAWQgQAUggAAgAEnCZIADAAQAXAAgBg2QABgzgXAAIgDAAgAEngFIADAAQAJAAAFgLQAEgLABgVQgBgXgEgJQgFgLgJAAIgDAAgAC/C4IARj1IgGAAIgkD1IgoAAIAAkyIApAAIgRD1IAGAAIAkj1IAnAAIAAEygAAKC4IAAkyIAmAAQAdAAAOAYQAOAYAAAwQAAAugOAZQgOAYgdAAIAAAAIAABzgAAwAlIABAAQASAAAAg/QAAhBgSAAIgBAAgAgrC4IgPiLIgJAAIAACLIglAAIAAkyIAlAAIAACFIASAAIAAiFIAmAAIgSCJIAaCpgAi+C4IAAkQIgiAAIAAgiIBpAAIAAAiIghAAIAAEQgAkZC4Igjj5IgFAAIASD5IgoAAIAAkyIApAAIAjD5IAFAAIgRj5IAoAAIAAEygAmXC4IAAkyIAlAAIAAEygAn3C4IAAkyIAmAAIAAEQIAsAAIAAAigApXC4IAAkyIBPAAIAAAiIgrAAIAABqIAhAAIAAAiIghAAIAACEgAIGiXQgLgIABgNQAAgGADgGIAbAAIAAAXIATAAIAAgXIAbAAQADAEABAIQAAANgLAIQgLAGgTAAQgSAAgLgGg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-60,-18.4,121.1,37.9), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AErCXQgFgHgBgLQABgKAFgIQAFgGAJAAQAJgBAGAHQAFAHAAALQAAAMgFAGQgGAIgJgBQgIABgGgIgACXCOQgLgQAAgeQAAgWAGgVIAbAAIghjOIApAAIATCqIAFAAIAHiqIAnAAIgQDaQgEAygMAWQgMAVgXAAQgVABgMgRgACuBcQAAAQACALQADAIAGABQAFAAAEgMQAEgNACgYIACgaIgZAAQgDAUAAATgAleB5QgOglAAhUQAAhTAOglQANglAeAAQAWgBAMAWQAMAVAAAnQAAAOgCAMQgBAOgDAGIgiAAQADgWAAgWQAAgegCgKQgCgNgGAAQgJAAgCAdQgDAdAABFQAABGADAdQACAdAJAAQAFAAADgMQACgKAAgfQAAgVgDgXIAiAAQADAHABANQACAMAAAOQAAAngMAWQgMAUgWAAQgeAAgNglgABeCaIgOiMIgJAAIAACMIglAAIAAkzIAlAAIAACGIASAAIAAiGIAnAAIgSCLIAZCogAgTCaIgDg/IgbAAIgDA/IgmAAIAXkzIA/AAIAWEzgAgYA5IgJipIgFAAIgJCpIAXAAgAiUCaIARkVIgGAAIgaCsIgUAAIgZisIgGAAIAQEVIgoAAIAAkzIAtAAIATCDIADAAIATiDIAuAAIAAEzgAEtBIIgPgoIAAgQQAYgXAHgSQAIgUAAgeQAAgXgDgPQgDgOgGAAQgEAAgCAMQgDAMAAAXQAAAXADAVIghAAQgGgQAAgcQAAglAMgUQANgVAUABQAYAAANAVQAOAXABAlQgBAfgKAXQgKAWgYAZIAFAvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("AErCXQgFgHgBgLQABgKAFgIQAFgGAJAAQAKgBAFAHQAFAHAAALQAAAMgFAGQgGAIgJgBQgIABgGgIgACXCOQgLgPAAgfQAAgWAGgUIAbAAIghjPIApAAIATCqIAFAAIAHiqIAnAAIgQDaQgEAygMAWQgMAVgXAAQgVABgMgRgACuBcQAAARACAKQADAIAGABQAFAAAEgMQAEgNACgYIABgZIgYAAQgDATAAATgAleB5QgOgmAAhTQAAhTAOglQANgmAeAAQAWAAAMAWQANAVAAAmQgBAQgCALQgBAOgDAGIgiAAQADgWAAgWQAAgegCgKQgCgNgGAAQgJAAgDAdQgCAcAABGQAABGACAdQADAcAJABQAFAAADgMQACgKAAgfQAAgWgDgWIAiAAQADAHABANQACAMABAOQAAAngNAWQgMAUgWAAQgeAAgNglgABeCaIgOiMIgIAAIAACMIgmAAIAAkzIAmAAIAACGIASAAIAAiGIAmAAIgSCLIAZCogAgTCaIgEg/IgaAAIgDA/IgmAAIAXkzIA+AAIAXEzgAgYA5IgJipIgFAAIgJCpIAXAAgAiUCaIARkVIgGAAIgaCsIgUAAIgZisIgGAAIAREVIgqAAIAAkzIAuAAIATCCIAEAAIASiCIAuAAIAAEzgAEsBIIgOgoIAAgQQAYgXAHgSQAIgUAAgeQAAgYgDgOQgDgOgGAAQgEAAgCAMQgDAMAAAXQAAAXADAWIghAAQgGgRAAgcQAAglAMgUQANgVAUAAQAYABAOAVQAOAXgBAlQAAAegKAXQgKAXgYAZIAFAvg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-36.4,-15.8,73.9,32.7), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("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");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-105.7,-18.3,212.5,37.6), null);


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


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar3BeIAAgSIhDAAIAAASIgbAAIAAgrIAJABQAHAAAEgDQAEgDAAgLIAAh/IBUAAIAACPIANAAIAAArgAsjAiQAAAMgCAFIAiAAIAAh2IggAAgAFmBDQgJgLgBgVIAAhWQABgVAJgLQAKgLAUAAQATAAAKALQAKAMAAAUIAAAQIgZAAIAAgSQAAgJgDgEQgFgDgFAAQgHAAgDADQgFAEAAAJIAABaQAAAJAFADQADAEAHAAQAGAAAEgEQADgDAAgJIAAgYIAZAAIAAAWQAAAUgKAMQgJALgUgBQgUABgKgLgADjBDQgLgLABgVIAAhWQgBgUALgMQALgLASAAQAUAAAKALQAKALAAAVIAABWQAAAVgKALQgKALgUgBQgSABgLgLgAD3hCQgEAEAAAJIAABaQAAAKAEACQAEAEAFAAQAGAAAEgEQAEgCABgKIAAhaQgBgJgEgEQgEgDgGAAQgFAAgEADgAi6BDQgJgLAAgVIAAhWQAAgUAJgMQALgLASAAQAUAAAKALQAKAMAAAUIAAAQIgZAAIAAgSQAAgJgEgEQgDgDgHAAQgFAAgFADQgDAEAAAJIAABaQAAAJADADQAEAEAGAAQAHAAADgEQAEgDAAgJIAAgYIAZAAIAAAWQAAAUgKAMQgKALgUgBQgSABgLgLgAqcBDQgKgMAAgUIAAgVIAZAAIAAAXQAAAKAEACQAEAEAGAAQAFAAAEgEQAFgDAAgMIAAgMQAAgMgFgGQgEgEgJAAIgEAAIAAgXIAFAAQAIAAAEgEQAEgDABgLIAAgJQAAgMgFgEQgEgDgFAAQgGAAgEADQgEAEAAAJIAAASIgZAAIAAgQQAAgUAKgMQAKgLATAAQATAAALALQAKAMAAAUIAAAEQAAAbgSAHQAKAFADAIQAFAJAAANIAAANQAAAUgKAMQgLALgTgBQgUABgJgLgAM/BMIAAh5IgiB5IgbAAIAAioIAYAAIAABkIAbhkIAhAAIAACogALcBMIgahEIgIAQIAAA0IgbAAIAAioIAbAAIAABKIAjhKIAaAAIglBMIAlBcgAJ5BMIgFgfIggAAIgFAfIgZAAIAbioIAnAAIAbCogAJxAXIgOhUIgMBUIAaAAgAISBMIAAh4IgTB4IgYAAIgUh2IAAB2IgXAAIAAioIAlAAIATB3IASh3IAkAAIAACogACBBMIAAioIAmAAQAVAAAJALQAKALAAAUIAAAWQAAAUgKAKQgJALgVAAIgMAAIAAA/gACbgLIAMAAQAHABADgEQAEgDAAgKIAAgYQAAgKgEgDQgDgDgHAAIgMAAgABTBMIAAiPIgfAAIAACPIgaAAIAAioIBUAAIAACogAhkBMIAAioIAaAAIAAA/IANAAQAUAAAKALQAJALAAATIAAAWQAAAVgJAKQgKALgUAAgAhKAzIANAAQAGABAEgEQACgDAAgKIAAgYQAAgJgCgDQgFgDgFAAIgNAAgAjtBMIAAh5IggB5IgcAAIAAioIAYAAIAABkIAbhkIAiAAIAACogAlrBMIAAiPIgbAAIAAgZIBRAAIAAAZIgbAAIAACPgAmlBMIgFgfIghAAIgEAfIgYAAIAbioIAnAAIAbCogAmtAXIgNhUIgNBUIAaAAgAoOBMIAAhIIgeAAIAABIIgaAAIAAioIAaAAIAABIIAeAAIAAhIIAbAAIAACogArRBMIAAioIAaAAIAACog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8E300").s().p("AvnDwIAAnfIfPAAIAAHfg");
	this.shape_1.setTransform(0,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFAF00").s().p("AvnDwIAAnfIfPAAIAAHfg");
	this.shape_2.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	// Слой_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFAF00").s().p("AvnDwIAAnfIfPAAIAAHfg");
	this.shape_3.setTransform(0,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8E300").s().p("AvnDwIAAnfIfPAAIAAHfg");
	this.shape_4.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-26,200,52);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-72,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-46.5,-72,93,144), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-46,-71.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-46,-71.5,92,143), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-81.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-77.5,-81.5,155,163), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(116.1,-264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245));

	// btn
	this.instance_1 = new lib.btn("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,253.1,0.013,0.013,0,0,0,0,7.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({regY:0,scaleX:1.3,scaleY:1.3},10,cjs.Ease.backOut).wait(41).to({regY:0.1,scaleX:1.25,scaleY:1.25,startPosition:1},0).wait(3).to({regY:0,scaleX:1.3,scaleY:1.3,startPosition:0},0).wait(4).to({regY:0.1,scaleX:1.25,scaleY:1.25,startPosition:1},0).wait(3).to({regY:0,scaleX:1.3,scaleY:1.3,startPosition:0},0).wait(48).to({y:221.6},0).to({alpha:0},10).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_110 = new cjs.Graphics().p("A3RnHIAAnlMAujAAAIAAHlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_graphics_110,x:0,y:-94.1}).wait(135));

	// t2_2
	this.instance_2 = new lib.t2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,-209);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({y:-168},10,cjs.Ease.cubicInOut).wait(109).to({alpha:0},10).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_110 = new cjs.Graphics().p("A3Rr4IAAmVMAujAAAIAAGVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_1_graphics_110,x:0,y:-116.6}).wait(135));

	// t2_1
	this.instance_3 = new lib.t2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-254.2);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).to({y:-214.2},10,cjs.Ease.cubicInOut).wait(114).to({alpha:0},10).wait(1));

	// bgImg2
	this.instance_4 = new lib.bgImg2_1();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({alpha:1},10).wait(124).to({alpha:0},10).wait(1));

	// box1
	this.instance_5 = new lib.box1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(259.5,184);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).to({x:89.5},15,cjs.Ease.cubicOut).to({_off:true},45).wait(135));

	// box2
	this.instance_6 = new lib.box2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(13.5,188.6,0.671,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({scaleX:1,scaleY:1,x:6.9,y:168.6},10,cjs.Ease.quadInOut).wait(75).to({scaleX:0.67,scaleY:0.67,x:13.5,y:188.6},0).wait(135));

	// box3
	this.instance_7 = new lib.box3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-228.5,165.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({x:-77.5},15,cjs.Ease.cubicOut).to({_off:true},45).wait(135));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("A3Rn0IAAmBMAujAAAIAAGBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:0,y:-88.6}).wait(110).to({graphics:null,x:0,y:0}).wait(135));

	// t1_2
	this.instance_8 = new lib.t1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,-194.9);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).to({y:-159.9},10,cjs.Ease.cubicInOut).to({_off:true},95).wait(135));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("A3RrVIAAmBMAujAAAIAAGBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:0,y:-111.1}).wait(110).to({graphics:null,x:0,y:0}).wait(135));

	// t1_1
	this.instance_9 = new lib.t1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,-241.4);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-203.4},10,cjs.Ease.cubicInOut).to({_off:true},100).wait(135));

	// bgImg1
	this.instance_10 = new lib.bgImg1_1();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150.1,300.1,1,1,0,0,0,0.1,0.1);

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
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
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