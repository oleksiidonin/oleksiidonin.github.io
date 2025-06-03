(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev1 = function() {
	this.initialize(img.dev1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1026);


(lib.dev2 = function() {
	this.initialize(img.dev2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1026);


(lib.dev3 = function() {
	this.initialize(img.dev3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1026);


(lib.dev4 = function() {
	this.initialize(img.dev4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1026);// helper functions:

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
	this.shape.graphics.f("#FFFDFB").s().p("AMgCSIAAgeQgFAIgKAAQgKAAgGgHQgGgHAAgKQAAgLAGgGQAGgIAKABQAKgBAFAJIAAgHIAJAAIAABFgAMIBYQgEAEAAAIQAAAHAEAFQAEADAGAAQAPAAAAgPQAAgIgEgEQgEgFgHABQgGgBgEAFgAngCJIAAgOIg1AAIAAhEIAKAAIAAA7IAhAAIAAg7IAKAAIAAA7IAJAAIAAAXgAJSCGIAAgLIgmAAIAAALIgIAAIAAgTIAFAAQAEgEAAgPIABgTIAlAAIAAAmIAHAAIAAATgAI2BgQAAAOgDAFIAXAAIAAgeIgTAAgAPoB1QgHgHAAgKQAAgLAHgGQAGgIAJABQAKgBAGAJIAAgHIAJAAIAAAuIgJAAIAAgHQgGAIgKAAQgJAAgGgHgAPuBYQgEAEAAAIQAAAHAEAFQAEADAHAAQAOAAAAgPQAAgIgEgEQgEgFgGABQgHgBgEAFgAO0B3QgGgFAAgJIAAgcIAJAAIAAAaQAAAMAMAAQALAAAAgMIAAgaIAJAAIAAAcQAAAJgGAFQgFAFgJAAQgJAAgGgFgAOYB2QAAgHAHABQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgHAAAAgGgAM7B1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgANCBYQgFAFAAAHQAAAHAFAFQAEADAGAAQAGAAAEgDQAFgFAAgHQAAgHgFgFQgEgEgGAAQgGAAgEAEgAKeB1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgAKkBYQgEAFAAAHQAAAHAEAFQAEADAHAAQAGAAAEgDQAEgFAAgHQAAgQgOAAQgHAAgEAEgAG1B0IAFgFQAGAFAIAAQAMABAAgIQAAgGgKAAIgJAAIAAgHIAHAAQAKABAAgIQAAgGgJAAQgIAAgGAFIgFgFQAGgHANAAQASgBAAANQAAAIgHADQAJACAAAJQAAAOgUAAQgNAAgHgIgAFFByQgHgJAAgQQAAgQAHgJQAHgKAMAAQAMAAAGAKQAHAJAAAQQAAAQgHAJQgGAKgMAAQgMAAgHgKgAFIBZQAAAaAQAAQAPAAAAgaQAAgbgPAAQgQAAAAAbgAEqB6QgBAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAD1B2QgHgHAAgKQAAgJAHgLIASgaIAJAAIgPAYQADgBAEgBQAKABAGAGQAHAHAAAKQAAAJgHAIQgHAGgKAAQgLAAgHgGgAD8BZQgEAFAAAHQAAAGAEAFQAEADAHAAQAGAAAEgDQAFgFAAgGQAAgHgFgFQgEgDgGAAQgHAAgEADgAC4ByQgHgJAAgQQAAgQAHgJQAHgKAMAAQAMAAAGAKQAHAJAAAQQAAAQgHAJQgGAKgMAAQgMAAgHgKgAC7BZQAAAaAQAAQAQAAAAgaQAAgbgQAAQgQAAAAAbgABnB1QgGgHAAgKQAAgLAGgGQAGgIAKABQAKgBAFAJIAAgHIAJAAIAAAuIgJAAIAAgHQgFAIgKAAQgKAAgGgHgABuBYQgEAEAAAIQAAAHAEAFQAEADAGAAQAPAAAAgPQAAgIgEgEQgEgFgHABQgGgBgEAFgAheB1QgHgHAAgKQAAgLAHgGQAGgIALABQAKgBAHAIQAHAGAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgAhYBYQgEAFAAAHQAAAHAEAFQAEADAHAAQAGAAAEgDQAFgFAAgHQAAgHgFgFQgEgEgGAAQgHAAgEAEgAjOB1QgHgHAAgKQAAgLAHgGQAGgIAJABQAKgBAGAJIAAgHIAJAAIAAAuIgJAAIAAgHQgGAIgKAAQgJAAgGgHgAjIBYQgEAEAAAIQAAAHAEAFQAEADAHAAQAOAAAAgPQAAgIgEgEQgEgFgGABQgHgBgEAFgAkuB1QgHgHAAgKQAAgLAHgGQAGgIALABQANgBAHAKIgGAFQgFgGgJAAQgHAAgEAEQgEAEAAAIQAAAGAEAFQAFAFAGgBQAJAAAFgFIAGAFQgHAJgNAAQgLAAgGgHgAl9B1Q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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-117.2,-14.5,234.4,29.1), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("ABUCAIA3hSQgHABgIAAQgkAAgZgYQgagXAAglQAAgnAbgZQAbgaApAAQAoAAAbAZQAaAYAAAnQAAAjgbApIg8BbgABjhFQgMANAAATQAAATAMANQANALATAAQATAAANgLQANgNAAgUQAAgTgNgNQgNgMgTAAQgTAAgNANgAiDCAIA3hSQgHABgIAAQgkAAgZgYQgagXAAglQAAgmAbgaQAbgaAoAAQApAAAbAZQAZAYAAAnQAAAjgaApIg9BbgAh0hFQgMANAAATQAAATAMANQANALATAAQATAAANgLQANgNAAgUQAAgTgNgNQgNgMgTAAQgTAAgNANgAlsCAIAAgmIA7g+QAZgbAJgMQANgTAAgQQAAgQgLgJQgLgKgUAAQgbAAgcAQIgSgpQAigVAsAAQAnAAAXATQAZAUAAAkQAAAbgPAZQgMAUgcAcIgjAkIBdAAIAAAsgAEZAEQgMgHAAgPIACgJIAEgGIgOAAIAAgSIBxAAIAAASIhFAAIgEAFIgCAHQAAAGAFADQAGADAIAAQAJAAAFgDQAFgCABgJIAfAAQgBANgGAIQgFAIgLADQgLAEgRAAQgYAAgNgJgAEFg9IAAgTIBEAAIAEgEQACgDAAgFQAAgEgEgDQgFgDgHAAQgIAAgFAEQgEADAAAFIgfAAQABgKAFgJQAFgHALgFQALgEAOAAQAOAAALAEQALAEAFAHQAGAIAAAIQAAAFgCAEIgDAFIAOAAIAAATg");
	this.shape.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-35.6,-12.8,74.9,25.6), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AFaBaQgUgGgMgLIARgdQAZATAcgBQAPAAAKgFQAJgHAAgKQAAgNgQgHIgigLQgygOABglQAAgaATgOQASgNAgAAQAoAAAYATIgQAcQgVgNgaAAQghAAAAASQAAALAQAHIAiAKQAxAPAAAoQAAAbgTAPQgTAOggAAQgVAAgSgGgAkIBEQgbgbAAgpQAAgoAbgbQAbgcAqAAQAqAAAbAcQAbAbAAAoQAAApgbAbQgbAcgqAAQgqAAgbgcgAjtgqQgQAQAAAaQAAAbAQAQQAPASAbAAQAaAAAQgSQAQgQgBgbQABgagQgQQgQgSgaAAQgbAAgPASgACFBdIAAi5IBDAAQAsABAbAZQAZAZAAApQAAAqgZAaQgbAZgsAAgACqA7IAbAAQAdAAAPgOQARgPAAgeQAAgcgRgPQgPgPgdAAIgbAAgAA6BdIhah8IAAB8IgkAAIAAi5IAjAAIBaB8IAAh8IAjAAIAAC5gAnGBdIAAi5IBOAAQAbABAPANQAPAMAAAXQgBAcgTAMQAcAMAAAfQAAAYgPANQgPAPgbABgAmhA8IApAAQAaAAAAgVQAAgYgaAAIgpAAgAmhgPIAjAAQAZgBAAgWQAAgWgZABIgjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-45.5,-9.6,91,19.2), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AQsB+IAHgfIAQACQAKAAAGgFQAGgFAGgPIADgIIg1iAIAnAAIAgBWIAhhWIAmAAIg3CIQgNAfgNANQgOAOgXAAQgOAAgLgEgAsLB+IAAi+IAlAAIAAANQAOgRAXAAQAaAAARATQARAUAAAdQAAAcgRATQgRAUgaAAQgXAAgOgSIAABNgArfgZQgJAJAAAQQAAAOAJAKQAIAJAOAAQAOAAAJgJQAIgKAAgOQAAgQgIgJQgJgKgOAAQgOAAgIAKgAmPAvQgRgTAAgcQAAgdARgUQARgTAaAAQAXAAAOARIAAgNIAlAAIAAB/IglAAIAAgOQgOASgXAAQgaAAgRgUgAlzgZQgJAJAAAQQAAAOAJAKQAIAJAOAAQAPAAAIgJQAJgKAAgOQAAgQgJgJQgIgKgPAAQgOAAgIAKgAwYAvQgSgTAAgcQAAgdASgUQARgTAZAAQAXAAAPARIAAgNIAkAAIAAB/IgkAAIAAgOQgPASgXAAQgZAAgRgUgAv8gZQgJAJAAAQQAAAOAJAKQAIAJAOAAQAOAAAJgJQAIgKAAgOQAAgQgIgJQgJgKgOAAQgOAAgIAKgAMdAzQgRgPgEgYIgRAAIAAAzIgkAAIAAh/IAkAAIAAAvIASAAQAFgXARgNQARgPAZAAQAeAAATAUQARATAAAdQAAAcgRASQgTAUgeAAQgaAAgSgPgAM0gZQgIAKAAAPQAAAOAIAJQAIAJANAAQAOAAAIgJQAIgJAAgOQAAgPgIgKQgIgJgOAAQgNAAgIAJgAHMAzQgRgPgEgYIgRAAIAAAzIglAAIAAh/IAlAAIAAAvIARAAQAGgXAQgNQASgPAZAAQAeAAASAUQASATAAAdQAAAcgSASQgSAUgeAAQgbAAgRgPgAHigZQgIAKAAAPQAAAOAIAJQAIAJAOAAQANAAAIgJQAIgJAAgOQAAgPgIgKQgIgJgNAAQgOAAgIAJgAP3A/IAAgzIguAAIAAAzIglAAIAAh/IAlAAIAAAvIAuAAIAAgvIAkAAIAAB/gAJvA/IAAhhIgpAAIAAgeIB1AAIAAAeIgoAAIAABhgAEdA/IAAhhIgoAAIAAgeIB1AAIAAAeIgoAAIAABhgACAA/IAAgtIgSAAIgZAtIgoAAIAegxQgbgIAAgcQAAgVAQgLQAOgKAZAAIA+AAIAAB/gABUgWQAAAPAVAAIAXAAIAAgfIgXAAQgVAAAAAQgAgPA/IAAgzIguAAIAAAzIglAAIAAh/IAlAAIAAAvIAuAAIAAgvIAjAAIAAB/gAinA/IAAgzIguAAIAAAzIglAAIAAh/IAlAAIAAAvIAuAAIAAgvIAlAAIAAB/gAolA/IAAh/IA+AAQAwAAAAAiQAAAUgRAIQAWAHAAAVQAAAQgMAKQgMALgXAAgAoCAlIAYAAQAUAAAAgOQAAgNgUAAIgYAAgAoCgMIAUAAQAUAAAAgOQAAgNgUAAIgUAAgAprA/IAAh/IAlAAIAAB/gAuDA/IAAh/IBgAAIAAAeIg7AAIAABhgAxoA/IAAgzIguAAIAAAzIgkAAIAAh/IAkAAIAAAvIAuAAIAAgvIAlAAIAAB/gApohcQgGgGAAgJQAAgJAGgGQAHgHAJAAQAIAAAHAHQAGAGAAAJQAAAJgGAGQgHAGgIAAQgJAAgHgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-121.1,-13,242.3,26), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AGlBNQgRgUAAgdQAAgcARgTQASgTAZAAQAYAAAOARIAAgOIAkAAIAAB/IgkAAIAAgNQgOARgYAAQgZAAgSgTgAHBADQgIAKAAAPQAAAQAIAJQAJAKAOAAQAPAAAIgKQAJgJgBgQQABgPgJgKQgIgIgPAAQgOAAgJAIgABWBMQgTgTABgdQAAgcASgTQASgTAdAAQAdAAASASQASASAAAaIgBAPIhcAAQAGAZAdAAQAVAAAPgLIARAaQgJAHgPAFQgQAFgQAAQggAAgTgUgABoAPIA6AAQgFgXgYAAQgXAAgGAXgAi3BMQgSgTAAgdQAAgcASgSQATgUAgAAQASAAAPAGQAOAGAJALIgVAYQgOgOgUAAQgQAAgIAJQgJAJAAAQQAAAPAJAJQAJAJAPAAQAUAAAOgOIAVAYQgIALgPAGQgPAHgSAAQgfAAgUgUgAoABGQgZgbAAgrQAAgqAZgbQAZgaAoAAQAZAAAWALQATAKAMATIgeAUQgRgZgfAAQgXAAgOAQQgQARABAbQgBAcAQARQAOAQAXAAQAfAAARgZIAdATQgMATgTALQgVALgZAAQgoAAgZgagAFYBcIAAhMIgfArIgYAAIgfgrIAABMIgiAAIAAh/IAjAAIAqA4IArg4IAjAAIAAB/gAgVBcIAAhgIgoAAIAAgfIB0AAIAAAfIgpAAIAABggAkFBcIAAhOIgyBOIgiAAIAAh/IAjAAIAABNIAzhNIAhAAIAAB/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-53.8,-9.6,107.7,19.3), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A1E5").s().p("AieKvQhugMhbg7QhhgzhAhYQhyibAzjNQAeh2A8h9IBOiOQAWgoAog5QBPhxBZhVQCaiRC+AWQBsAMBdA7QBhA0BBBXQBxCbgzDNQgeB2g8B9QgeA/gYAmIgYApQgWAogoA5QhPBxhZBVQiGB+iiAAQgYAAgYgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-60,-69,120,138.1), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F478A").s().p("AmlcjQkhghj1icQkAiHirjrQktmdCIohQBOk7CglMQAyhoAzhdIBqi0QA6hrBpiXQDTkuDsjgQGXmDH7A7QEhAhD1CcQEACHCrDrQEtGdiIIhQhOE7igFMQhPCmhABnIhABsQg6BrhpCXQjSEujtDgQliFQmsAAQhBAAhDgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-159,-183.4,318.2,367), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.dev4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-257,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev4_1, new cjs.Rectangle(-150,-257,300,513), null);


(lib.dev3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-257,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev3_1, new cjs.Rectangle(-150,-257,300,513), null);


(lib.dev2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-257,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev2_1, new cjs.Rectangle(-150,-257,300,513), null);


(lib.dev1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-257,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev1_1, new cjs.Rectangle(-150,-257,300,513), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AowBHIAAgXIhUAAIAAAXIgPAAIAAgmIAMAAQAIgKACglIABg0IBMAAIAABjIAQAAIAAAmgApvgNQgBAjgGALIA3AAIAAhUIgvAAgAJRAmQgLgMAAgRQAAgRALgMQALgLASAAQAQgBALALQALAMAAAPIAAAHIg+AAQABALAHAGQAIAGALAAQAOAAAKgJIAIAKQgMAMgVAAQgTAAgMgLgAJWACIAuAAQgDgUgTAAQgVAAgDAUgAEQAxIACgOIAEAAQAGABACgGQACgFABgPIABgnIA/AAIAABNIgQAAIAAhAIghAAIAAAaQgBAWgEAIQgGAJgNAAgACPABQAAgtAWgOQAIgFASgDIAYgEIADANIgbAFQgQACgHAHQgIAIgCATQAKgOASAAQARAAAKALQAKAMAAARQAAARgLALQgLALgRAAQgpABAAgxgACmgJQgHAHgBALQAAAMAIAIQAGAGAMAAQAKAAAHgGQAHgIAAgLQAAgMgHgHQgHgHgKAAQgLAAgHAHgAgwAmQgLgLAAgTQAAgPAKgMQAMgMASAAQAWAAALAPIgKAKQgHgLgPAAQgLAAgIAHQgGAIAAAKQAAANAGAHQAIAIALgBQAOABAIgLIAKAJQgKAPgWAAQgTAAgLgLgAk7AmQgKgLgBgTQABgQAKgMQALgLAPAAQASgBAJAOIAAgLIAPAAIAABNIgPAAIAAgMQgJANgSAAQgPAAgLgLgAkvgKQgHAIAAAKQAAANAHAHQAHAIALgBQAKABAHgIQAHgHgBgNQABgKgHgIQgHgHgKAAQgLAAgHAHgAnyAlIAJgJQAIAJAQAAQAUAAAAgNQAAgLgRABIgQAAIAAgLIANAAQARAAAAgKQgBgMgPAAQgOABgJAIIgJgJQAMgMAVAAQAdgBAAAXQAAAMgLAEQAPAFAAANQgBALgIAHQgKAGgQAAQgWABgLgNgAHIAwIAAhNIAQAAIAAA/IAeAAIAAg/IAQAAIAAA/IAgAAIAAg/IAOAAIAABNgAF3AwIAAhNIAQAAIAAAcIAQAAQAhAAgBAYQABAZghAAgAGHAjIAQAAQARAAAAgMQAAgNgRAAIgQAAgADxAwIAAhNIAQAAIAABNgAAeAwIAAhNIAOAAIAAAcIARAAQAhAAAAAYQAAAZghAAgAAsAjIARAAQARAAAAgMQAAgNgRAAIgRAAgAhcAwIAAg4IgoA4IgOAAIAAhNIAPAAIAAA3IAog3IAPAAIAABNgAjMAwIAAhAIgbAAIAAgNIBFAAIAAANIgbAAIAABAgAlmAwIAAgiIgoAAIAAAiIgOAAIAAhNIAOAAIAAAeIAoAAIAAgeIAPAAIAABNgAoRAwIAAhNIAPAAIAABNgADygxQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAEgDAEQgDACgEAAQgEAAgDgCgAoQgxQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAEgDAEQgDACgEAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-66,-7.1,132,14.3), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Av8DIQhTAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BTAAIf5AAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-122,-20,244,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1253A1").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:112},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-112},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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


(lib.bgImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(187.5,112.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:100.5},10,cjs.Ease.cubicOut).wait(6));

	// p2
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20.8,319.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.2,y:111.6},15,cjs.Ease.backOut).wait(11));

	// p1
	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310,-455.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:6,y:-2.4},15,cjs.Ease.backOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.8,-638.9,550,1027.4);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:60});

	// timeline functions:
	this.frame_180 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(180).call(this.frame_180).wait(1));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(-3,261.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},15).wait(166));

	// btn
	this.instance_1 = new lib.btn("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-122.3,1,1,0,0,0,-0.4,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(141));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AzUrLIAAkfMAmpAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:0,y:-100.3}).wait(156));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-73.4,-161.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({y:-182},10,cjs.Ease.cubicOut).wait(136));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("AzUCQIAAkfMAmpAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:0,y:-219.3}).wait(156));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.8,-191);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({y:-218},10,cjs.Ease.cubicOut).wait(141));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_25 = new cjs.Graphics().p("AzUCQIAAkfMAmpAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_2_graphics_25,x:0,y:-259}).wait(156));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-66,-234.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:-254.9},10,cjs.Ease.cubicOut).wait(146));

	// dev
	this.instance_5 = new lib.dev1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-183,392,0.7,0.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.dev2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.2,43);

	this.instance_7 = new lib.dev3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.2,43);

	this.instance_8 = new lib.dev4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.2,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_6}]},30).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_8}]},30).to({state:[{t:this.instance_5}]},30).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,x:0.2,y:43},15,cjs.Ease.cubicOut).to({_off:true},30).wait(90).to({_off:false},0).wait(31));

	// bgImg
	this.instance_9 = new lib.bgImg("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-587.9,619.1,1027.4);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,12.1,619.1,1027.4);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev1.png", id:"dev1"},
		{src:"images/dev2.png", id:"dev2"},
		{src:"images/dev3.png", id:"dev3"},
		{src:"images/dev4.png", id:"dev4"}
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