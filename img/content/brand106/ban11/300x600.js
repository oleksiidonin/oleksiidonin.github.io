(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_cap_1 = function() {
	this.initialize(img.box_cap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,170);


(lib.box_cap_2 = function() {
	this.initialize(img.box_cap_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,160);


(lib.box_cap_3 = function() {
	this.initialize(img.box_cap_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,136);


(lib.box_cap_4 = function() {
	this.initialize(img.box_cap_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,176);


(lib.box_neon = function() {
	this.initialize(img.box_neon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,242);


(lib.box_p1 = function() {
	this.initialize(img.box_p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,198);


(lib.box_p2 = function() {
	this.initialize(img.box_p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,250);


(lib.can_back = function() {
	this.initialize(img.can_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,262);


(lib.can_blue = function() {
	this.initialize(img.can_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,260);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,114);


(lib.img2 = function() {
	this.initialize(img.img2);
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


(lib.txt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw5NVQgugIgXgXIAzhQQAVAPAgAEQAiAEAcgGQAjgHASgPQATgPAAgRQAAgRgRgFQgSgEgpAJIhRARIAAhaIBRgRQBGgPAAgfQAAgSgUgEQgUgFghAGQg+AOgqAvIgyg2QAagiArgbQArgbA2gLQBKgQAtAUQAtAVAAAxQgBAigZAeQgZAeglAOQAkgEAdATQAdATAAAoQAAA0gxArQgvArhMAQQghAHgeAAQgTAAgSgDgApZFtIDHgqQBAgOAlAeQAlAeAAA4QAAA5glAtQglAuhAANIhhAUIAACGIhmAVgAmgGfIhTARIAABVIBTgRQAVgFANgOQAOgOAAgUQAAgTgOgJQgIgGgMAAIgOACgAjaEcIEhg+IAABaIi7AnIAAA+IC4gnIAABZIi4AoIAABDIC7goIAABZIkhA9gACDDSIDHgqQBAgOAlAeQAlAeAAA5QAAA3glAuQglAthAAOIhhAVIAACFIhmAVgAE8EEIhTARIAABVIBTgRQAVgEANgPQANgOABgTQgBgVgNgIQgIgGgMAAIgOACgAHlHcIA2hYQA1ApBKgQQAbgGAOgMQAPgMABgPQAAgMgRgFQgRgEgZABQgbACgbgDQgegCgYgGQgZgHgRgWQgQgWAAgkQAAg0AqguQAqguBKgPQBhgVBAAqIg4BVQgygehCANQgqAKgBAcQABALAQAFQARAFAZgCQAXgBAfADQAbACAbAHQAYAGARAWQAQAWAAAiQAAA9grAtQgrAthOARQgkAHgeAAQhCAAgtghgANrA1IBmgWIAAGNIhmAVgAzhDUIDJgrIAADZIg3AMIAAioIhbATIAACoIg3AMgAQdGSQgQgNAAgXQAAgWAQgUQARgVAWgEQAXgFAQANQARANAAAXQAAAXgRATQgQAUgXAFIgMABQgPAAgMgJgAvaFaQgigZAAgxQAAgxAignQAggmAygLQAzgKAgAYQAiAZAAAxQAAAxgiAnQggAmgzALQgPADgNAAQgfAAgXgRgAuIC4QgbAGgPAVQgQAWgBAbQABAbAQAOQAQAPAagGQAbgFARgWQAQgVAAgbQAAgbgQgPQgNgKgRAAIgOABgAp+EmQgZgEgNgNIAcgsQALAJATACQASACAPgDQATgEALgIQAKgIAAgKQAAgJgJgDQgKgCgXAFIgsAJIAAgxIAsgJQAngIgBgRQAAgKgLgDQgKgDgSAEQgiAHgYAaIgbgdQAPgTAXgPQAYgOAdgHQApgIAYALQAZALAAAbQAAASgPARQgOARgTAHQATgCAQAKQAQALAAAWQAAAcgbAXQgaAYgoAJQgSAEgQAAQgMAAgKgCgAQOASIBtgWIgOEEIhSARgAnLAsIA5gLIAACAIBXiTIA7gMIAADZIg5AMIAAiGIhbCZIg3AMgAsBDDIBOgQIAAAqIhOAQgAjagFIBPgRIAtBrIAth+IBNgQIAADYIg3AMIAAiOIg3CZIgYAFIg4iBIAACNIg4AMgABZB2QghgZAAgxQAAgwAhgmQAhgnAygKQAzgLAgAYQAhAZAAAxQAAAwghAnQghAngyAKQgPADgNAAQggAAgXgRgACsgqQgaAGgRAVQgQAUAAAbQAAAbAQAPQARAOAagFQAbgGAQgVQAQgVAAgcQAAgagQgOQgMgLgRAAIgOACgAy4BVQg9gsAAhaQAAhbA9hFQA9hGBcgUQB5gZA0BfIhXA8QgLgWgXgMQgXgMgdAGQgvALggAnQgfAoAAAwQAAAxAfAaQAgAaAvgKQAdgGAXgVQAYgVAKgbIBXAXQgVAxgrAoQgrAohCANQgcAGgZAAQg5AAgrgfgAE9h3IB6gZQAfgHARANQAQANAAAWQAAAUgLAQQgKAPgQAHQASgBAMANQALANAAATQAAAZgRAUQgPAUgfAHIh/AbgAGsgLIg3ALIAAAnIA3gMQALgDAGgGQAFgHABgIQgBgIgFgEQgEgDgGAAIgHABgAGrhfIg2AMIAAAkIA2gLQAJgCAEgGQAGgHAAgIQAAgHgGgFQgDgCgFAAIgFAAgAtFlSICOgeIBTDFIBTjpICOgeIAAGNIhmAWIAAkCIhkEWIguAKIhkjsIAAEBIhmAVgAIwATQghgYgBgxQABgxAhgnQAhgmAygLQAygKAhAYQAgAZABAxQgBAxggAnQghAlgyALQgPADgOAAQgfAAgXgRgAKDiOQgbAGgQAWQgRAVAAAbQAAAbARAOQAQAPAbgGQAbgGAQgVQAQgVAAgbQAAgbgQgPQgMgKgRAAIgOABgAMTjaIBOgQIAtBsIAuiAIBNgQIAADZIg4AMIAAiNIg2CZIgZAFIg3iCIAACNIg4AMgAjRnXICBgcICVFuIhzAYIgUg1IicAhIgTA+Ih0AYgAjCjgIBkgVIgyiLgAQbhFIAWgxQAPAIANgDQALgCAFgFQAGgFAFgKIhPiKIA/gOIAvBcIAwhwIA/gNIhYDBQgYA0g0ALQgNACgLAAQgSAAgNgHgABioYIBngWIAACjIB5i9IB7gZIAAgBIB0gYIBVCnIBXjLIBzgZIihFhQgsBehfAUQg+AOgmgXIAphYQAaAOAYgFQAUgEAKgJQAKgJAKgSIiPj7IACgDIgDABIABACIiYDXICjCxIh+AaIhnh/IgbAnIAAB0IhnAVgANtq9IBmgWIAADqIChkMIBqgWIAAGNIhnAWIAAj1IinEYIhjAVgAO9sTIAngoQAZAdAogJQAqgIAXgoIAnAYQgmA9hCANQgPAEgOAAQgtAAgegig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_mc, new cjs.Rectangle(-127,-85.6,254,171.1), null);


(lib.txt_ligth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Az1ksMAnrgIgIAAR5MgnrAIgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_ligth1_mc, new cjs.Rectangle(-127,-84.4,254.1,169), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-28.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-77.5,-28.5,155,57), null);


(lib.can_blue_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.can_blue();
	this.instance.parent = this;
	this.instance.setTransform(-33,-65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.can_blue_1, new cjs.Rectangle(-33,-65,66,130), null);


(lib.can_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.can_back();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-65.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.can_black, new cjs.Rectangle(-32.5,-65.5,65,131), null);


(lib.box_p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_p1();
	this.instance.parent = this;
	this.instance.setTransform(-68,-49.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_p1_1, new cjs.Rectangle(-68,-49.5,136,99), null);


(lib.box_neon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(22));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqFDzIHcnlIMvDk");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApdDzIHcnlILfDN");
	this.shape_1.setTransform(-4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ao1DzIHcnlIKPC3");
	this.shape_2.setTransform(-8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoNDzIHdnlII+Ch");
	this.shape_3.setTransform(-12,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnlDzIHdnlIHuCK");
	this.shape_4.setTransform(-16,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Am9DzIHcnlIGfB0");
	this.shape_5.setTransform(-20,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUDzIHbnlIFOBd");
	this.shape_6.setTransform(-24.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlsDzIHbnlID+BH");
	this.shape_7.setTransform(-28.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlEDzIHbnlICuAx");
	this.shape_8.setTransform(-32.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkcDzIHbnlIBeAa");
	this.shape_9.setTransform(-36.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj0DzIHcnlIANAE");
	this.shape_10.setTransform(-40.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjtDzIHbnl");
	this.shape_11.setTransform(-40.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjUDZIGomx");
	this.shape_12.setTransform(-43.3,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai6C/IF1l9");
	this.shape_13.setTransform(-45.9,5.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AigClIFBlJ");
	this.shape_14.setTransform(-48.5,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiGCKIENkT");
	this.shape_15.setTransform(-51,10.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhtBwIDbjf");
	this.shape_16.setTransform(-53.6,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhTBWICnir");
	this.shape_17.setTransform(-56.2,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag5A8IB0h2");
	this.shape_18.setTransform(-58.7,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AggAhIBBhB");
	this.shape_19.setTransform(-61.3,21);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGAHIANgN");
	this.shape_20.setTransform(-63.9,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Слой_1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgGAHIANgN");
	this.shape_21.setTransform(-63.9,23.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AggAhIBBhB");
	this.shape_22.setTransform(-61.3,21);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag5A8IB0h2");
	this.shape_23.setTransform(-58.7,18.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhTBWICnir");
	this.shape_24.setTransform(-56.2,15.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhtBwIDbjf");
	this.shape_25.setTransform(-53.6,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiGCKIENkT");
	this.shape_26.setTransform(-51,10.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AigClIFBlJ");
	this.shape_27.setTransform(-48.5,7.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai6C/IF1l9");
	this.shape_28.setTransform(-45.9,5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjUDZIGomx");
	this.shape_29.setTransform(-43.3,2.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjtDzIHbnl");
	this.shape_30.setTransform(-40.8,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj0DzIHcnlIANAE");
	this.shape_31.setTransform(-40.1,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkcDzIHbnlIBeAa");
	this.shape_32.setTransform(-36.1,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlEDzIHbnlICuAx");
	this.shape_33.setTransform(-32.1,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlsDzIHbnlID+BH");
	this.shape_34.setTransform(-28.1,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmUDzIHbnlIFOBd");
	this.shape_35.setTransform(-24.1,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("Am9DzIHcnlIGfB0");
	this.shape_36.setTransform(-20,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnlDzIHdnlIHuCK");
	this.shape_37.setTransform(-16,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoNDzIHdnlII+Ch");
	this.shape_38.setTransform(-12,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ao1DzIHcnlIKPC3");
	this.shape_39.setTransform(-8,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApdDzIHcnlILfDN");
	this.shape_40.setTransform(-4,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqFDzIHcnlIMvDk");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.box_neon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(23));

	// Слой_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgCjoIAFHR");
	this.shape.setTransform(25.6,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhZIABCz");
	this.shape_1.setTransform(25.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},77).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(20));

	// Слой_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqhgOIOiESIGhoH");
	this.shape_2.setTransform(-0.4,-14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("AprhSIOiESIE1l/");
	this.shape_3.setTransform(-5.8,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1,1).p("AoaiJIOjETICSi2");
	this.shape_4.setTransform(-14,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnHiGIOPEN");
	this.shape_5.setTransform(-22.3,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("AlMhiIKZDF");
	this.shape_6.setTransform(-34.5,-5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,1,1).p("AjSg9IGlB7");
	this.shape_7.setTransform(-46.7,-9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhXgZICwAz");
	this.shape_8.setTransform(-59,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},77).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(14));

	// Слой_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABXhOIitCd");
	this.shape_9.setTransform(-59.1,-23.6);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(77).to({_off:false},0).to({_off:true},9).wait(13));

	// Слой_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAqALIhTgV");
	this.shape_10.setTransform(0.4,-57.5);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(77).to({_off:false},0).to({_off:true},10).wait(12));

	// Слой_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqhjlIAfHJIOIEcIGNodIAPm9IiQgl");
	this.shape_11.setTransform(-0.4,7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqgkZIAfHJIOIEcIGOodIAMl6");
	this.shape_12.setTransform(-0.5,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqclyIAfHJIOIEcIGNodIAFiT");
	this.shape_13.setTransform(-0.9,21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqAlyIAfHJIOIEcIFanW");
	this.shape_14.setTransform(-3.7,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("AozlyIAgHJIOIEcIC/kE");
	this.shape_15.setTransform(-11.5,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnllyIAfHJIOIEcIAkgx");
	this.shape_16.setTransform(-19.2,21.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("Al1lVIAfHJILMDi");
	this.shape_17.setTransform(-30.4,18.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,1,1).p("AkBkwIAfHJIHkCY");
	this.shape_18.setTransform(-42,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiNkMIAfHJID8BQ");
	this.shape_19.setTransform(-53.6,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgZjnIAfHJIAUAG");
	this.shape_20.setTransform(-65.3,7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgIh/IARD/");
	this.shape_21.setTransform(-67,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},77).to({state:[{t:this.shape_12}]},11).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(1));

	// Слой_7
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgEIAAAJ");
	this.shape_22.setTransform(25.3,12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgqIAABV");
	this.shape_23.setTransform(25.4,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhZIABCz");
	this.shape_24.setTransform(25.4,21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgBiJIACET");
	this.shape_25.setTransform(25.5,26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgBi5IADFz");
	this.shape_26.setTransform(25.5,30.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgCjoIAFHR");
	this.shape_27.setTransform(25.6,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},71).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},1).wait(22));

	// Слой_3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgGgBIANAD");
	this.shape_28.setTransform(-67.1,-15.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgvgNIBfAb");
	this.shape_29.setTransform(-63.1,-14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhXgZICwAz");
	this.shape_30.setTransform(-59,-13.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiAglIEBBL");
	this.shape_31.setTransform(-54.9,-11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2,1,1).p("AipgxIFTBj");
	this.shape_32.setTransform(-50.8,-10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(2,1,1).p("AjSg9IGlB7");
	this.shape_33.setTransform(-46.7,-9.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2,1,1).p("Aj7hKIH3CV");
	this.shape_34.setTransform(-42.7,-8.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(2,1,1).p("AkkhVIJICs");
	this.shape_35.setTransform(-38.6,-7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(2,1,1).p("AlMhiIKZDF");
	this.shape_36.setTransform(-34.5,-5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(2,1,1).p("Al1huILrDd");
	this.shape_37.setTransform(-30.4,-4.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ameh6IM9D1");
	this.shape_38.setTransform(-26.3,-3.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnHiGIOPEN");
	this.shape_39.setTransform(-22.3,-2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnjiJIOiETIAmgv");
	this.shape_40.setTransform(-19.4,-1.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2,1,1).p("An/iJIOjETIBchz");
	this.shape_41.setTransform(-16.7,-1.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(2,1,1).p("AoaiJIOjETICSi2");
	this.shape_42.setTransform(-14,-1.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ao1iJIOjETIDIj5");
	this.shape_43.setTransform(-11.2,-1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApQh0IOiETID/k9");
	this.shape_44.setTransform(-8.5,-4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(2,1,1).p("AprhSIOiESIE1l/");
	this.shape_45.setTransform(-5.8,-7.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqGgwIOiESIFrnD");
	this.shape_46.setTransform(-3.1,-10.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqhgOIOiESIGhoH");
	this.shape_47.setTransform(-0.4,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},52).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[]},6).wait(22));

	// Слой_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAYgUIgvAq");
	this.shape_48.setTransform(-52.8,-29.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA2gwIhrBh");
	this.shape_49.setTransform(-55.8,-26.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABXhOIitCd");
	this.shape_50.setTransform(-59.1,-23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},49).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},26).wait(22));

	// Слой_3
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(2,1,1).p("AADABIgFgB");
	this.shape_51.setTransform(4.1,-56.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAqALIhTgV");
	this.shape_52.setTransform(0.4,-57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},40).to({state:[{t:this.shape_52}]},1).to({state:[]},36).wait(22));

	// Слой_3
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAgJIABAT");
	this.shape_53.setTransform(-67.8,-14.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgCgwIAFBh");
	this.shape_54.setTransform(-67.5,-10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFhYIALCx");
	this.shape_55.setTransform(-67.2,-6.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgIh/IARD/");
	this.shape_56.setTransform(-67,-2.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgLimIAWFN");
	this.shape_57.setTransform(-66.7,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgNjNIAbGb");
	this.shape_58.setTransform(-66.4,4.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgZjnIAfHJIAUAG");
	this.shape_59.setTransform(-65.3,7.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ag/jzIAfHIIBgAf");
	this.shape_60.setTransform(-61.4,8.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ahmj/IAfHIICuA3");
	this.shape_61.setTransform(-57.5,9.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiNkMIAfHJID8BQ");
	this.shape_62.setTransform(-53.6,11.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ai0kYIAgHJIFJBo");
	this.shape_63.setTransform(-49.8,12.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(2,1,1).p("AjakkIAfHJIGXCA");
	this.shape_64.setTransform(-45.9,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(2,1,1).p("AkBkwIAfHJIHkCY");
	this.shape_65.setTransform(-42,14.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(2,1,1).p("Akok8IAfHJIIyCw");
	this.shape_66.setTransform(-38.1,16);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(2,1,1).p("AlPlIIAgHIIJ/DJ");
	this.shape_67.setTransform(-34.3,17.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(2,1,1).p("Al1lVIAfHJILMDi");
	this.shape_68.setTransform(-30.4,18.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(2,1,1).p("AmclgIAfHIIMaD6");
	this.shape_69.setTransform(-26.5,19.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnDltIAfHJINoES");
	this.shape_70.setTransform(-22.6,20.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnllyIAfHJIOIEcIAkgx");
	this.shape_71.setTransform(-19.2,21.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(2,1,1).p("An/lyIAfHJIOJEcIBXh4");
	this.shape_72.setTransform(-16.6,21.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(2,1,1).p("AoZlyIAfHJIOIEcICMi+");
	this.shape_73.setTransform(-14,21.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(2,1,1).p("AozlyIAgHJIOIEcIC/kE");
	this.shape_74.setTransform(-11.5,21.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApNlyIAgHJIOIEcIDzlL");
	this.shape_75.setTransform(-8.9,21.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(2,1,1).p("ApmlyIAfHJIOIEcIEmmQ");
	this.shape_76.setTransform(-6.3,21.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqAlyIAfHJIOIEcIFanW");
	this.shape_77.setTransform(-3.7,21.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqalyIAfHJIOJEcIGNod");
	this.shape_78.setTransform(-1.1,21.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqblyIAfHJIOIEcIGOodIAChG");
	this.shape_79.setTransform(-1,21.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqclyIAfHJIOIEcIGNodIAFiT");
	this.shape_80.setTransform(-0.9,21.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqelmIAfHIIOJEdIGNodIAIjg");
	this.shape_81.setTransform(-0.7,20.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqflAIAfHJIOIEcIGOodIAKks");
	this.shape_82.setTransform(-0.6,16.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqgkZIAfHJIOIEcIGOodIAMl6");
	this.shape_83.setTransform(-0.5,12.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(2,1,1).p("Aqhj0IAfHIIOIEcIGNocIAPm9IgWgG");
	this.shape_84.setTransform(-0.4,8.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqhjrIAfHJIOIEcIGNodIAPm9IhigZ");
	this.shape_85.setTransform(-0.4,7.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqhjlIAfHJIOIEcIGNodIAPm9IiQgl");
	this.shape_86.setTransform(-0.4,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[]},43).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.box_neon_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_neon();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-60.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_neon_img, new cjs.Rectangle(-69.5,-60.5,139,121), null);


(lib.box_cap_neon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(9));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgXgwIAvBh");
	this.shape.setTransform(19.7,13.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27).to({_off:false},0).to({_off:true},1).wait(7));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AIEk9IlXGRIqwDq");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnGD3IKvjqIDekD");
	this.shape_2.setTransform(-6,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmKCxIKvjqIBmh3");
	this.shape_3.setTransform(-12,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFYh0IqvDp");
	this.shape_4.setTransform(-17.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj8BWIH5ir");
	this.shape_5.setTransform(-26.2,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiiA3IFFht");
	this.shape_6.setTransform(-35.3,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhHAYICPgv");
	this.shape_7.setTransform(-44.3,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},27).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(1));

	// Слой_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHgQIAPAh");
	this.shape_8.setTransform(18.1,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgPggIAgBB");
	this.shape_9.setTransform(18.9,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgXgwIAvBh");
	this.shape_10.setTransform(19.7,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgfhAIA/CC");
	this.shape_11.setTransform(20.5,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgnhRIBPCi");
	this.shape_12.setTransform(21.3,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},22).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(8));

	// Слой_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALgDIgVAH");
	this.shape_13.setTransform(-50.4,31.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgpAOIBTgb");
	this.shape_14.setTransform(-47.4,30.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhHAYICPgv");
	this.shape_15.setTransform(-44.3,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhlAjIDLhF");
	this.shape_16.setTransform(-41.3,28.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiEAtIEIhZ");
	this.shape_17.setTransform(-38.3,27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiiA3IFFht");
	this.shape_18.setTransform(-35.3,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjABCIGBiD");
	this.shape_19.setTransform(-32.3,25.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjeBMIG9iX");
	this.shape_20.setTransform(-29.2,24.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj8BWIH5ir");
	this.shape_21.setTransform(-26.2,23.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkbBgII3jA");
	this.shape_22.setTransform(-23.2,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak5BrIJzjV");
	this.shape_23.setTransform(-20.2,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFYh0IqvDp");
	this.shape_24.setTransform(-17.1,20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AFjiBIgWAZIqvDq");
	this.shape_25.setTransform(-16.1,18.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al2CZIKvjpIA+hI");
	this.shape_26.setTransform(-14.1,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmKCxIKvjqIBmh3");
	this.shape_27.setTransform(-12,14.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmeDIIKvjpICOim");
	this.shape_28.setTransform(-10,11.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmyDgIKvjqIC2jV");
	this.shape_29.setTransform(-8,9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnGD3IKvjqIDekD");
	this.shape_30.setTransform(-6,7.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnaEPIKvjqIEGkz");
	this.shape_31.setTransform(-4,4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnvEmIKwjqIEvlh");
	this.shape_32.setTransform(-2,2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("AIEk9IlXGRIqwDq");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.box_cap_neon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(25));

	// Слой_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUApIgnhR");
	this.shape.setTransform(-27.5,0.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(81).to({_off:false},0).to({_off:true},1).wait(23));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoRFDIDtlfIM2km");
	this.shape_1.setTransform(3.8,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("Am1EiIDtlfIJ+jk");
	this.shape_2.setTransform(-5.4,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlaECIDulgIHHij");
	this.shape_3.setTransform(-14.6,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj+DhIDtlgIEQhh");
	this.shape_4.setTransform(-23.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiiDAIDslfIBZgg");
	this.shape_5.setTransform(-32.9,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhbCJIC3kR");
	this.shape_6.setTransform(-40,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoA8IBRh3");
	this.shape_7.setTransform(-45.2,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},80).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(17));

	// Слой_8
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIoTCu");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIlrB3");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIjHBB");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIghAK");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIkNE2");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIiZCx");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIgmAr");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnMGSIhLinIDmljIMlkZIAkA6");
	this.shape_16.setTransform(-3.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmFF/IhLinIDmliIK7j0");
	this.shape_17.setTransform(-10.2,1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkzFiIhLinIDmliIIXi6");
	this.shape_18.setTransform(-18.5,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjgFGIhLinIDmljIFxiB");
	this.shape_19.setTransform(-26.7,7.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiOEpIhLinIDlliIDOhI");
	this.shape_20.setTransform(-34.9,10.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag7EMIhLinIDlliIApgO");
	this.shape_21.setTransform(-43.2,13.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgDDOIhLinICdjz");
	this.shape_22.setTransform(-48.8,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmCGIhLimIBAhk");
	this.shape_23.setTransform(-53,26.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgZg5IAzBz");
	this.shape_24.setTransform(-51.8,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},80).to({state:[{t:this.shape_9}]},8).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(1));

	// Слой_5
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKAVIgTgp");
	this.shape_25.setTransform(-26.5,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUApIgnhR");
	this.shape_26.setTransform(-27.5,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAfA/Ig9h9");
	this.shape_27.setTransform(-28.6,-1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AApBVIhRip");
	this.shape_28.setTransform(-29.6,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},73).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},5).wait(24));

	// Слой_3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgFAJIALgR");
	this.shape_29.setTransform(-48.6,39.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgXAiIAvhE");
	this.shape_30.setTransform(-46.9,36.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgoA8IBRh3");
	this.shape_31.setTransform(-45.2,34.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag5BVIBziq");
	this.shape_32.setTransform(-43.4,31.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhKBvICVjd");
	this.shape_33.setTransform(-41.7,29);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhbCJIC3kR");
	this.shape_34.setTransform(-40,26.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhsCiIDZlD");
	this.shape_35.setTransform(-38.3,23.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiEC1IDtlfIAcgK");
	this.shape_36.setTransform(-36,22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiiDAIDslfIBZgg");
	this.shape_37.setTransform(-32.9,20.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjBDLIDtlfICWg2");
	this.shape_38.setTransform(-29.9,19.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjgDWIDtlgIDUhL");
	this.shape_39.setTransform(-26.8,18.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj+DhIDtlgIEQhh");
	this.shape_40.setTransform(-23.7,17.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkdDsIDulgIFNh3");
	this.shape_41.setTransform(-20.7,16.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7D3IDtlgIGKiN");
	this.shape_42.setTransform(-17.6,15.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlaECIDulgIHHij");
	this.shape_43.setTransform(-14.6,14.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al4ENIDtlgIIEi5");
	this.shape_44.setTransform(-11.5,13.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmXEYIDulgIJBjP");
	this.shape_45.setTransform(-8.5,12.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("Am1EiIDtlfIJ+jk");
	this.shape_46.setTransform(-5.4,11.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnUEtIDtlfIK8j6");
	this.shape_47.setTransform(-2.3,10);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnzE4IDulfIL5kQ");
	this.shape_48.setTransform(0.7,9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoRFDIDtlfIM2km");
	this.shape_49.setTransform(3.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},52).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},9).wait(24));

	// Слой_1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADAGIgFgK");
	this.shape_50.setTransform(-49.5,39.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgNgeIAbA9");
	this.shape_51.setTransform(-50.7,37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgZg5IAzBz");
	this.shape_52.setTransform(-51.8,34.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmBUIhLim");
	this.shape_53.setTransform(-53,31.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmBqIhLimIAegt");
	this.shape_54.setTransform(-53,29.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmCGIhLimIBAhk");
	this.shape_55.setTransform(-53,26.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAcCdIhKinIBdiS");
	this.shape_56.setTransform(-52,24.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFFFFF").ss(1,1,1).p("AALC3IhKinIB/jG");
	this.shape_57.setTransform(-50.3,21.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgDDOIhLinICdjz");
	this.shape_58.setTransform(-48.8,19.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgSDkIhLinIC7kh");
	this.shape_59.setTransform(-47.3,17.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgiD9IhLinIDalS");
	this.shape_60.setTransform(-45.8,14.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ag7EMIhLinIDlliIApgO");
	this.shape_61.setTransform(-43.2,13.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhXEWIhLinIDlljIBggh");
	this.shape_62.setTransform(-40.4,12.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhyEfIhLinIDlliICXg0");
	this.shape_63.setTransform(-37.7,11.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiOEpIhLinIDlliIDOhI");
	this.shape_64.setTransform(-34.9,10.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(1,1,1).p("AipEyIhLinIDmliIEDha");
	this.shape_65.setTransform(-32.2,9.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjFE8IhLinIDmliIE7hu");
	this.shape_66.setTransform(-29.5,8.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjgFGIhLinIDmljIFxiB");
	this.shape_67.setTransform(-26.7,7.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aj8FPIhLinIDmliIGpiU");
	this.shape_68.setTransform(-24,6.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkXFZIhLinIDmljIHfin");
	this.shape_69.setTransform(-21.2,5.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkzFiIhLinIDmliIIXi6");
	this.shape_70.setTransform(-18.5,4.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlOFsIhLinIDmliIJNjO");
	this.shape_71.setTransform(-15.7,3.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlqF1IhLinIDmliIKFjg");
	this.shape_72.setTransform(-13,2.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmFF/IhLinIDmliIK7j0");
	this.shape_73.setTransform(-10.2,1.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmhGJIhLinIDmliILzkI");
	this.shape_74.setTransform(-7.5,0.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(1,1,1).p("Am9GSIhLinIDmljIMmkZIAFAI");
	this.shape_75.setTransform(-4.7,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnMGSIhLinIDmljIMlkZIAkA6");
	this.shape_76.setTransform(-3.1,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(1,1,1).p("AncGSIhLinIDmljIMlkZIBEBs");
	this.shape_77.setTransform(-1.6,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCd");

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIgmAr");

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIhMBY");

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIhyCE");

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIiZCx");

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIjADd");

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIjmEJ");

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIkNE2");

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIk0Fi");

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlbGP");

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIghAK");

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIhVAc");

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIiNAu");

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIjHBB");

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIj/BT");

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIk3Bm");

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIlrB3");

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgImlCK");

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgInbCc");

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIoTCu");

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIpLDB");

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgIqBDT");

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnsGSIhLinIDmljIMmkZIBjCdIlpGgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[]},30).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.box_cap_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_cap_3();
	this.instance.parent = this;
	this.instance.setTransform(-54,-34,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_cap_2_1, new cjs.Rectangle(-54,-34,108,68), null);


(lib.box_cap_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box_cap_1();
	this.instance.parent = this;
	this.instance.setTransform(-59,-42.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_cap_1_1, new cjs.Rectangle(-59,-42.5,118,85), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#031780","#010A53"],[0,1],0,0,0,0,0,329.5).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#133CC6","#010A53"],[0,1],0,0,0,0,0,329.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.txt_ligth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.txt_ligth1_mc();
	this.instance.parent = this;
	this.instance.alpha = 0.398;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(30, 30, 3)];
	this.instance.cache(-129,-86,258,173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_ligth1, new cjs.Rectangle(-168,-125.4,340,254), null);


(lib.txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.txt_mc();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.6,1,1,0,0,0,0,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-86.1,255,172.1);


(lib.box_p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.neon = new lib.box_neon2();
	this.neon.name = "neon";
	this.neon.parent = this;
	this.neon.setTransform(7.2,9.6);

	this.timeline.addTween(cjs.Tween.get(this.neon).wait(1));

	// Слой_1
	this.instance = new lib.box_p2();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-62.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_p2_1, new cjs.Rectangle(-75.5,-62.5,151,125), null);


(lib.box_neon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.neon = new lib.box_neon_mc();
	this.neon.name = "neon";
	this.neon.parent = this;
	this.neon.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.neon).wait(1));

	// Слой_1
	this.instance = new lib.box_neon_img();
	this.instance.parent = this;
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_neon_1, new cjs.Rectangle(-69.5,-60.5,139,121), null);


(lib.box_cap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.neon1 = new lib.box_cap_neon1();
	this.neon1.name = "neon1";
	this.neon1.parent = this;
	this.neon1.setTransform(1.4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.neon1).wait(1));

	// box_cap_1.png
	this.instance = new lib.box_cap_1_1();
	this.instance.parent = this;
	this.instance.setTransform(1.5,3);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// box_cap_2.png
	this.instance_1 = new lib.box_cap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55.5,-36.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой_2
	this.neon2 = new lib.box_cap_neon2();
	this.neon2.name = "neon2";
	this.neon2.parent = this;
	this.neon2.setTransform(-3.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.neon2).wait(1));

	// box_cap_3.png
	this.instance_2 = new lib.box_cap_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.5,-5.5);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// box_cap_4.png
	this.instance_3 = new lib.box_cap_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60.5,-45.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_cap, new cjs.Rectangle(-60.5,-45.5,121,91), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.box_neon.neon.play();
		this.cap_neon.neon1.play();
	}
	this.frame_51 = function() {
		this.cap_neon.neon2.play();
		this.box_neon2.neon.play();
	}
	this.frame_150 = function() {
		this.box_neon.neon.play();
		this.cap_neon.neon1.play();
		this.cap_neon.neon2.play();
		this.box_neon2.neon.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(50).call(this.frame_51).wait(99).call(this.frame_150).wait(31));

	// img1.png
	this.instance = new lib.img1_1();
	this.instance.parent = this;
	this.instance.setTransform(22.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:70.5},30,cjs.Ease.quadInOut).to({y:60.5},30,cjs.Ease.quadInOut).to({y:70.5},30,cjs.Ease.quadInOut).to({y:60.5},30,cjs.Ease.quadInOut).to({y:70.5},30,cjs.Ease.quadInOut).to({y:60.5},30,cjs.Ease.quadInOut).wait(1));

	// box_neon
	this.box_neon = new lib.box_neon_1();
	this.box_neon.name = "box_neon";
	this.box_neon.parent = this;
	this.box_neon.setTransform(6.8,41.3);

	this.timeline.addTween(cjs.Tween.get(this.box_neon).to({y:51.3},30,cjs.Ease.quadInOut).to({y:41.3},30,cjs.Ease.quadInOut).to({y:51.3},30,cjs.Ease.quadInOut).to({y:41.3},30,cjs.Ease.quadInOut).to({y:51.3},30,cjs.Ease.quadInOut).to({y:41.3},30,cjs.Ease.quadInOut).wait(1));

	// box_p1
	this.instance_1 = new lib.box_p1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:61.5},30,cjs.Ease.quadInOut).to({y:51.5},30,cjs.Ease.quadInOut).to({y:61.5},30,cjs.Ease.quadInOut).to({y:51.5},30,cjs.Ease.quadInOut).to({y:61.5},30,cjs.Ease.quadInOut).to({y:51.5},30,cjs.Ease.quadInOut).wait(1));

	// can_blue
	this.instance_2 = new lib.can_blue_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:36.8,y:-12},30,cjs.Ease.quadInOut).to({x:34,y:3},30,cjs.Ease.quadInOut).to({x:36.8,y:-12},30,cjs.Ease.quadInOut).to({x:34,y:3},30,cjs.Ease.quadInOut).to({x:36.8,y:-12},30,cjs.Ease.quadInOut).to({x:34,y:3},30,cjs.Ease.quadInOut).wait(1));

	// can_black
	this.instance_3 = new lib.can_black();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-20,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-18.5,y:12.5},30,cjs.Ease.quadInOut).to({x:-20,y:-6.5},30,cjs.Ease.quadInOut).to({x:-18.5,y:12.5},30,cjs.Ease.quadInOut).to({x:-20,y:-6.5},30,cjs.Ease.quadInOut).to({x:-18.5,y:12.5},30,cjs.Ease.quadInOut).to({x:-20,y:-6.5},30,cjs.Ease.quadInOut).wait(1));

	// box_p2
	this.box_neon2 = new lib.box_p2_1();
	this.box_neon2.name = "box_neon2";
	this.box_neon2.parent = this;
	this.box_neon2.setTransform(0,38);

	this.box_neon_1 = new lib.box_p2_1();
	this.box_neon_1.name = "box_neon_1";
	this.box_neon_1.parent = this;
	this.box_neon_1.setTransform(0,38);
	this.box_neon_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.box_neon2).to({y:48},30,cjs.Ease.quadInOut).to({_off:true,y:38},30,cjs.Ease.quadInOut).to({_off:false,y:48},30,cjs.Ease.quadInOut).to({_off:true,y:38},30,cjs.Ease.quadInOut).to({_off:false,y:48},30,cjs.Ease.quadInOut).to({_off:true,y:38},30,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.box_neon_1).wait(30).to({_off:false},30,cjs.Ease.quadInOut).to({_off:true,y:48},30,cjs.Ease.quadInOut).to({_off:false,y:38},30,cjs.Ease.quadInOut).to({_off:true,y:48},30,cjs.Ease.quadInOut).to({_off:false,y:38},30,cjs.Ease.quadInOut).wait(1));

	// box_cap_1.png
	this.cap_neon = new lib.box_cap();
	this.cap_neon.name = "cap_neon";
	this.cap_neon.parent = this;
	this.cap_neon.setTransform(-39.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.cap_neon).to({y:-53.5},30,cjs.Ease.quadInOut).to({y:-43.5},30,cjs.Ease.quadInOut).to({y:-53.5},30,cjs.Ease.quadInOut).to({y:-43.5},30,cjs.Ease.quadInOut).to({y:-53.5},30,cjs.Ease.quadInOut).to({y:-43.5},30,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-89,200,190.8);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.box = new lib.box();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(0,72,1.45,1.45);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(181));

	// txt
	this.instance = new lib.txt("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.2,-162.9,1.018,1.018,0,0,0,0.2,-0.1);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.602},15).to({alpha:1},15).to({alpha:0.602},15).to({alpha:1},15).wait(74).to({startPosition:0},0).to({alpha:0.602},15).wait(17));

	// light
	this.instance_1 = new lib.txt_ligth1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,-155.1,0.893,0.893,0,0,0,0.6,-0.4);
	this.instance_1.alpha = 0.398;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.4,regY:-0.1,scaleX:1.02,scaleY:1.02,x:0.4,alpha:1},15).to({regX:0.6,regY:-0.4,scaleX:0.89,scaleY:0.89,x:0.6,alpha:0.398},15).to({regX:0.4,regY:-0.1,scaleX:1.02,scaleY:1.02,x:0.4,alpha:1},15).to({regX:0.6,regY:-0.4,scaleX:0.89,scaleY:0.89,x:0.6,alpha:0.398},15).to({regX:0.4,regY:-0.1,scaleX:1.02,scaleY:1.02,x:0.4,alpha:1},15).wait(74).to({regX:0.6,regY:-0.4,scaleX:0.89,scaleY:0.89,x:0.6,alpha:0.398},15).wait(17));

	// img2
	this.instance_2 = new lib.img2_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181));

	// bg2
	this.instance_3 = new lib.bg2();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},75).wait(74).to({alpha:0},31).wait(1));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.4,-300,312,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.6,300,313,600);
// library properties:
lib.properties = {
	id: '391CEAE05404470988FA32E9FC90C000',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_cap_1.png", id:"box_cap_1"},
		{src:"images/box_cap_2.png", id:"box_cap_2"},
		{src:"images/box_cap_3.png", id:"box_cap_3"},
		{src:"images/box_cap_4.png", id:"box_cap_4"},
		{src:"images/box_neon.png", id:"box_neon"},
		{src:"images/box_p1.png", id:"box_p1"},
		{src:"images/box_p2.png", id:"box_p2"},
		{src:"images/can_back.png", id:"can_back"},
		{src:"images/can_blue.png", id:"can_blue"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"}
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
an.compositions['391CEAE05404470988FA32E9FC90C000'] = {
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