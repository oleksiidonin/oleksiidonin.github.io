(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("ArqBsIAAhGIAIAAIAAALQAJgMAMAAQAKgBAIAIQAIAIAAANQAAANgIAHQgIAIgKAAQgNgBgIgKIAAAagArcAxQgGAGAAAKQAAAIAGAGQAGAHAHAAQAIgBAGgFQAFgGAAgJQAAgKgFgGQgFgFgJAAQgIAAgFAFgAyYBsIAAhGIAIAAIAAALQAJgMAMAAQAKgBAIAIQAIAIAAANQAAANgIAHQgIAIgKAAQgNgBgIgKIAAAagAyKAxQgGAGAAAKQAAAIAGAGQAGAHAHAAQAIgBAGgFQAFgGAAgJQAAgKgFgGQgFgFgJAAQgIAAgFAFgAE9BpIAAgNIgsAAIgBANIgHAAIAAgUIAGAAQAHgNAAgZIAAgJIAnAAIAAAvIAIAAIAAAFIAAgFIAEABIAEgBIADgDIADgHIACglIAmAAIAAA2IgIAAIAAgvIgXAAIAAABIgBAVIgCANQgBAGgDACQgCADgDABIgFABIgGgBIgBANgAEeA0QAAAUgGANIAdAAIAAgoIgXAAgAzuBpIAAgNIgsAAIgBANIgHAAIAAgUIAGAAQAHgNAAgZIAAgJIAnAAIAAAvIAIAAIgBAUgA0NA0QAAAUgGANIAdAAIAAgoIgXAAgAUJBVQgIgJAAgOIAAgIIABgIIACgHIAEgHIAFgFQAEgCAEgBIAegHIACAGIgdAIQgIACgEAFQgEAEAAAIQAHgLAPAAQALAAAIAHQAHAIAAALQAAALgIAJQgIAIgLAAQgNAAgHgIgAUPAzQgGAGAAAJQAAAHAGAGQAGAHAIAAQAIgBAFgFQAGgHAAgHQAAgJgGgGQgGgGgHAAQgJAAgFAGgASuBVQgIgKAAgKQAAgLAIgJQAIgJALABQAMgBAKAKIgFAFQgIgHgJgBQgIAAgFAHQgGAFAAAKQAAAJAGAFQAGAHAIAAQAJAAAHgJIAFAGQgJAKgNAAQgLAAgIgIgARoBVQgIgKAAgKQAAgLAIgJQAIgJAMABQAMgBAIAJQAIAJAAALQAAALgIAJQgJAIgLAAQgMAAgIgIgARuAyQgGAFAAAKQAAAIAGAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgGgHgIAAQgJAAgFAHgALiBVQgIgKAAgKQAAgLAIgJQAIgJAMABQAMgBAIAJQAIAJAAALQAAALgIAJQgJAIgLAAQgMAAgIgIgALoAyQgGAFAAAKQAAAIAGAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgGgHgIAAQgJAAgFAHgAIkBVQgIgKAAgKQAAgLAIgJQAIgJAMABQAMgBAIAJQAIAJAAALQAAALgIAJQgJAIgLAAQgMAAgIgIgAIqAyQgGAFAAAKQAAAIAGAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgGgHgIAAQgJAAgFAHgAlzBVQgIgIAAgMQAAgMAHgIQAIgJALABQALAAAHAHQAHAIAAANIAAADIgrAAQABAJAFAEQAGAFAHAAQAKAAAHgIIAFAFQgJAKgNAAQgLAAgIgIgAlQA9QgBgHgEgFQgFgFgHgBQgIABgEAFQgFAFgBAHIAjAAIAAAAgApjBVIAEgGQAJAHAJAAQAFAAAFgCQADgDAAgEQAAgFgDgCQgDgCgHAAIgHAAIAAgHIAHAAQAFAAAEgDQADgCAAgFQAAgEgDgBQgEgDgFAAQgJAAgHAGIgEgGQAJgGAMAAQAJAAAFADQAFAFAAAGQAAAIgIAFQAKACAAALQAAAGgGAFQgGAFgKAAQgLAAgLgIgAxNBVQgIgKAAgKQAAgLAIgJQAIgJAMABQAMgBAIAJQAIAJAAALQAAALgIAJQgJAIgLAAQgMAAgIgIgAxHAyQgGAFAAAKQAAAIAGAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgGgHgIAAQgJAAgFAHgAzZBVQgIgKAAgKQAAgLAIgJQAIgJAMABQAMgBAIAJQAIAJAAALQAAALgIAJQgJAIgLAAQgMAAgIgIgAzTAyQgGAFAAAKQAAAIAGAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgGgHgIAAQgJAAgFAHgA1RBVIAEgGQAJAHAJAAQAFAAAFgCQADgDAAgEQAAgFgDgCQgDgCgHAAIgHAAIAAgHIAHAAQAFAAAEgDQADgCAAgFQAAgEgDgBQgEgDgFAAQgJAAgHAGIgEgGQAJgGAMAAQAJAAAFADQAFAFAAAGQAAAIgIAFQAKACAAALQAAAGgGAFQgGAFgKAAQgLAAgLgIgAMaBcIABgHIAEABIAEgBIADgDIADgHIACglIAmAAIAAA2IgIAAIAAgvIgXAAIAAABIgBAVIgCANQgBAGgDACQgCADgDABIgFABgAgPBcIABgHIAEAB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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-136.1,-10.8,272.4,21.6), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADDCRIAPg0Ii7AAIgRA0IgWAAIAUhNIAVAAQAxg0AehqIAOgxICWAAIg4DPIAfAAIgYBNgAB8hFQgMArgSAkQgSAlgTAVICAAAIAzi3IhjAAgAuDBLQghAWgmAAQgsAAgegdQgdgeAAgqQABgjARghQASggAggTQAggVAkAAQAuABAcAdQAdAcAAAsQAAAdgNAaQgMAbgVAUIAXAbIgUAQgAvhhnQgZARgNAbQgOAaAAAdQAAAhAWAVQAUAXAjAAQAeAAAYgRIgkgrIAUgPIAiAqQAjgjAAguQAAgigWgWQgVgXgiAAQgeABgZAQgAFGBEQgdgegBgqQAAgjASghQASggAggTQAfgVAmAAQAtABAcAdQAdAcAAAsQAAAjgRAfQgSAhggAUQgfAUgmAAQgsAAgdgdgAF4hnQgZARgNAbQgNAaAAAdQgBAhAWAVQAUAXAiAAQAegBAZgQQAYgQAOgbQAOgaABgcQgBgigUgWQgWgXgiAAQgeABgZAQgAr5BEQgdgdAAgrQAAgjARghQASggAfgTQAfgVAnAAQAsABAdAdQAdAcAAAsQAAAjgSAfQgRAhggAUQggAUglAAQgtAAgcgdgArHhnQgYAQgOAcQgOAaAAAdQAAAhAVAVQAVAXAiAAQAegBAZgQQAZgRANgaQAOgaAAgcQAAgigVgWQgVgXgiAAQgeABgZAQgAoWAzIAUgPQAeAlAvAAQAYAAASgNQARgNAAgSQAAgOgLgJQgKgJgbgKQgigOgPgNQgPgNAAgXQAAgdAYgSQAYgUAmAAQAzAAAgAjIgUARQgbgdgnAAQgaAAgOANQgQAMAAARQAAAOAMAIQALAJAdALQAfAMAPAOQAOAOAAAVQAAAfgZAUQgZAUgmAAQhAAAgfgtgARLBdIAKgjIAeAAIgKAjgAQPBdIgLg+Ih/AAIgsA+IgeAAICpjqIAaAAIAsDqgAP/AHIgUh3IhWB3IBqAAgALzBdIAzi8Ih2B8IgBAAIg0h8IgyC8IgaAAIA/joIAYAAIAzB+IB2h+IAeAAIg/DogAjXBdIA+joIBYAAQAjAAASAOQASAPAAAZQABAYgQAPQgQARgaAFQApANAAAiQAAAfgaAUQgaASguABgAi3BFIBPAAQAfAAASgMQATgNAAgVQAAgSgPgIQgOgKgZAAIhGAAgAibgkIBDAAQAfAAATgNQASgNAAgUQAAgRgMgIQgMgJgXAAIhCAAgAynBdIA+joIAbAAIg/DogARkAaIAmilIAeAAIg1Clg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-119.2,-14.4,238.4,28.9), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoBeQgcgaAAgsQAAgkATgiQATggAggWQAggUAlAAQAfAAAWAOQAWANANAXIgXAOQgLgUgQgJQgQgLgYABQgsAAghAkQggAkAAAuQAAAiAUAUQAVATAgAAQAnAAAggfIASARQgnAng0AAQgqAAgdgbgAvhBtQgWgMgMgTIAUgOQAXAhAsAAQAbAAARgNQARgOAAgTQAAgUgQgKQgQgLgXAAIgVAAIAGgVIAXAAQAfAAAUgNQATgNAAgVQAAgRgNgKQgOgLgVAAQggAAgdAXIgPgSQAhgdAsAAQAgABAWAQQAVAPAAAbQAAAZgSAPQgSARgfAEQATAGANANQAMANAAAUQAAAdgaAUQgaAUgmAAQgeAAgWgMgAOrB0IAzi/Ii+C/IgZAAIA/joIAaAAIgzC/IC+i/IAZAAIg/DogAJrB0IA4jQIhPAAIAHgYIC4AAIgHAYIhPAAIg4DQgAHSB0IAzi/Ii+C/IgZAAIA/joIAaAAIg0C/IC+i/IAZAAIg+DogACSB0IA4jQIhPAAIAHgYIC3AAIgGAYIhPAAIg4DQgAl0B0IA/joICnAAIgHAYIiNAAIgVBQIB+AAIgHAXIh9AAIgWBSICOAAIgGAXgAoQB0IA4jQIhPAAIAHgYIC3AAIgGAYIhPAAIg4DQgAp0B0IgKg9IiAAAIgsA9IgdAAICqjqIAZAAIArDqgAqDAfIgVh2IhVB2IBqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-102.8,-12.1,205.6,24.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AljBcQgdgdAAgrQAAgjASghQARgfAggVQAggUAlAAQAuAAAcAdQAdAdAAArQAAAjgSAhQgSAggfAUQgfAUgmAAQgtAAgdgdgAkwhPQgZARgNAaQgOAbAAAcQAAAhAVAXQAWAWAhAAQAeAAAZgRQAYgQAOgbQAOgaAAgdQAAghgVgWQgUgWgjAAQgeAAgZAQgAKdB1IgLg+Ih/AAIgsA+IgdAAICpjqIAaAAIArDqgAKOAfIgVh2IhVB2IBqAAgAGFB1IAchpIiFAAIgcBpIgaAAIA+jpIAbAAIgcBoICFAAIAchoIAaAAIg+DpgACdB1IgzhyIg+A0IgQA+IgbAAIARhBIgfgyIhuBzIgjAAICEiHIg9hiIAeAAIBUCKIAkiKIAbAAIgkCHICbiHIAkAAIh1BlIA7CEgAnyB1IAzi8Ih3B8IgBAAIgzh8IgzC8IgaAAIA/jpIAZAAIAyB/IB3h/IAdAAIg+Dpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-69.6,-12.1,139.1,24.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA1IAAgTIg9AAIgCATIgNAAIAAggIAJAAQALgWgBgnIAAgMIA+AAIAABJIAKAAIgBAggAhTgcQAAAdgKAUIAoAAIAAg7IgeAAgADpAiIAAhWIAnAAQAQAAAIAIQAFAGABAIQAAANgNAHQARAGAAAPQABALgKAHQgIAFgPAAgAD5AVIAZAAQARAAAAgMQAAgLgSAAIgYAAgAD5gPIAUAAQARAAAAgMQAAgMgQAAIgVAAgACdAiIAAhWIAPAAIAABWgABWAiIAAgkIgqAAIAAAkIgQAAIAAhWIAQAAIAAAlIAqAAIAAglIAPAAIAABWgAktAiIAnhJIgsAAIAAgNIA+AAIAAALIgnBLg");
	this.shape.setTransform(-1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C81515").s().p("AnQBuIAAjbIOhAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-46.5,-11,93,22), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCCCIgpgpIiIAAQghAAgVgFQgcgHgPgPQgWgVAAgpIAAh1QAAgIAFgEQAFgFAJAAICWAAQAhAAAVAFQAcAGAQAPQAWAWAAAoIAAB0IAiAiQAFAFgBAHQAAAHgGAGQgGAGgHAAIgBAAQgGAAgFgFgAmEAAQAAAdAOANIADACQAOAMAeAAICXAAIAAhmQAAgcgOgOIgCgCQgPgLgegBIiXAAgAFUBYIAAAAQgrgBgTgMQgPgKgDgSIAAgDQAAgHAFgEQAFgEAIAAQAHAAAFADQAFADABAFIACADQAEAIAKADQAJACARABIBRAAQAuAAAMgHQALgGAAgUIAAgCQAAgQgHgGQgKgIgeAAIhtAAQgmAAgQgOQgQgNAAgfIAAgNQAAgcAUgMQAYgPA9AAIA8AAQAwAAAVAMQAQAKADATIAAADQAAAIgFAEQgEAEgIAAQgHAAgFgEQgFgDgCgFIgBgDQgFgJgOgDQgKgCgbAAIg9AAQgmAAgMAGQgLAFAAASIAAAIQAAAOAHAGQAKAHAZAAIBdAAQAuAAATAJQAaAOAAAoIAAABQAAApgjAOQgUAIgsAAgAoIBTQgFgFAAgIIAAi6QAAgIAFgFQAFgFAJAAQAIAAAFAFQAFAFAAAIIAAC6QAAAIgFAFQgFAFgIAAQgJAAgFgFgAAkBYQg1AAgbgPQgmgVAAg0IAAguQAAg1AmgUQAbgPA1AAIAzAAQA3AAAbAPQAlAUAAA1IAAAuQAAA0glAVQgbAPg3AAgAgZhcQgTAOAAAiIAAArQAAAhATAOQAQALAiAAIBJAAQAjAAAQgLQAUgOAAghIAAgrQAAgigUgOQgQgLgjAAIhJAAQgiAAgQALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-52.6,-13.5,105.2,27), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH8AmQgPgPAAgXQAAgWAPgPQAQgQAXAAQAYAAARAQIgLAOQgPgOgPAAQgPAAgJALQgKALAAAPQAAAPAKALQAJALAPAAQAPAAAPgNIAMAMQgSASgYAAQgXAAgQgQgAlCAmQgQgPAAgXQAAgWAQgPQAPgQAYAAQAYAAAQAQQAPAPAAAWQAAAWgQAQQgPAQgYAAQgYAAgPgQgAk0gaQgKALAAAPQAAAPAKALQAKALAPAAQAQAAAKgLQAKgKAAgQQAAgPgKgLQgLgLgPAAQgPAAgKALgAquAlIAKgNQAPAOAUAAQAIAAAGgEQAGgEAAgIQAAgPgYAAIgMAAIAAgOIAMAAQAWAAAAgQQAAgGgGgEQgFgEgJAAQgRAAgNALIgJgMQAQgPAYAAQAQAAALAIQAKAHAAANQAAAQgSAIQAVAGAAASQAAAOgLAIQgLAJgRAAQgcAAgRgRgAJ7A0IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXgAGMA0IAAhoIBOAAIAAARIg7AAIAAAbIA0AAIAAAQIg0AAIAAAcIA8AAIAAAQgAFBA0IAAhXIgiAAIAAgRIBWAAIAAARIgiAAIAABXgADKA0IAAhLIg1BLIgRAAIAAhoIASAAIAABMIA1hMIARAAIAABogAA4A0IAAhXIghAAIAAgRIBVAAIAAARIghAAIAABXgAgUA0IAAhLIg1BLIgRAAIAAhoIASAAIAABMIA1hMIARAAIAABogAjKA0IAAhoIAvAAQASAAAKAKQAHAGAAALQAAAQgPAIQAVAFAAAUQAAANgLAIQgKAHgSAAgAi4AkIAfAAQAUAAAAgPQAAgOgVAAIgeAAgAi4gHIAaAAQATAAAAgPQAAgNgSAAIgbAAgAl8A0IAAhKIghAxIgBAAIghgxIAABKIgSAAIAAhoIAUAAIAgAyIAggyIAUAAIAABogAn5A0IgLgZIgxAAIgLAZIgTAAIAuhoIARAAIAuBogAoLALIgSgpIgSApIAkAAg");
	this.shape.setTransform(-2.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AucDIIAAmPIc5AAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-92.5,-20,185,40), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_3
	this.instance = new lib.t2_3();
	this.instance.parent = this;
	this.instance.setTransform(-270.8,146.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:0.2},10,cjs.Ease.cubicOut).wait(119).to({alpha:0},10).wait(1));

	// t2_2
	this.instance_1 = new lib.t2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-288.4,102.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-17.4},10,cjs.Ease.cubicOut).wait(124).to({alpha:0},10).wait(1));

	// t2_1
	this.instance_2 = new lib.t2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-320.7,60.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-49.7},10,cjs.Ease.cubicOut).wait(129).to({alpha:0},10).wait(1));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-73.7,17.9,0.02,0.02,0,0,0,0,-2.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,y:17.8},10,cjs.Ease.quadOut).to({regX:0,regY:0,scaleX:1,scaleY:1,y:17.9},5,cjs.Ease.quadInOut).wait(95).to({alpha:0},10).wait(1));

	// urText
	this.instance_4 = new lib.urText();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,272.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-72.5,-249.2,0.9,0.9,0,0,0,-0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

	// btn
	this.instance_6 = new lib.btn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-26.3,204.3,0.02,0.02,0,0,0,-2.5,-2.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-26.2},10,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,x:-26.3},5,cjs.Ease.quadInOut).wait(35).to({scaleX:0.96,scaleY:0.96,x:-26.2},2).to({scaleX:1,scaleY:1,x:-26.3},2).wait(7).to({scaleX:0.96,scaleY:0.96,x:-26.2},2).to({scaleX:1,scaleY:1,x:-26.3},2).wait(45).to({alpha:0},10).wait(1));

	// bgImg
	this.instance_7 = new lib.bgImg_1("single",0);
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.3,-300,540.3,600);


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
p.nominalBounds = new cjs.Rectangle(-90.3,299,541.3,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"}
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
an.compositions['E5F08688052A497EA765790B818200C2'] = {
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