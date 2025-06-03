(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,88);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,52);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,82);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,40);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,52);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,50);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,226);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,805,102);// helper functions:

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


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4010").s().p("ADIEfQgpgVgWgnQgVgnAAg3QAAg1AWgoQAVgnAqgUQApgVA4AAQA5AAApAUQAqAUAVAoQAWAmAAA3QAAA2gWAnQgXAogoAVQgpAVg5AAQg6AAgogVgADpA3QgVAZAAA1QAAA2AVAYQAVAZAsAAQAtAAAVgZQAVgYAAg2QAAg1gVgZQgVgZgtAAQgsAAgVAZgAjyEGQgrguAAhTQAAg0AXgoQAWgnApgVQAqgVA4AAQAwAAAkAPQAkAQAWAbQAVAbAEAoIhhAAQgFgZgSgPQgTgOgcAAQggAAgTAKQgUALgIAWQgIAVAAAmQAAA3AUAYQAUAYAvAAQAdAAAUgPQAUgPAGgaIhaAAIAAg8IC6AAIAAC1IhRAAIAAgpQgSAXgcANQgcAMgkAAQhOAAgrgugAphEfQgpgVgVgnQgWgnAAg3QAAg2AWgnQAWgnApgUQAqgVA4AAQA5AAApAUQApAUAWAoQAVAmAAA3QAAA2gWAnQgWAogpAVQgpAVg4AAQg6AAgpgVgApAA3QgVAZAAA1QAAA2AVAYQAVAZAtAAQAsAAAVgZQAVgYAAg2QAAg1gVgZQgVgZgsAAQgtAAgVAZgAOYEtIAAlOIBcAAIAABzIBdAAQA5AAAfAdQAfAcAAA0QAAA1gfAcQgfAdg5AAgAP0DkIBPAAQAVAAAJgJQAKgKAAgUQAAgVgKgJQgJgJgVAAIhPAAgAL6EtIAAiGIiHAAIAACGIhbAAIAAlOIBbAAIAAB7ICHAAIAAh7IBbAAIAAFOgAuLEtIg3jRIg3DRIhnAAIhhlOIBgAAIA6DlIA6jlIBZAAIA6DlIA6jlIBdAAIhhFOgAo8heIAAgZIAhAAQABAAAAAAQABgBABAAQAAAAAAgBQABAAAAgBIAFgOIg6h9IAiAAIAoBdIAihdIAfAAIg7CTQgEAKgHAFQgGAFgLAAgAyhiTQgSgKgKgTQgKgUAAgaQAAgaAKgTQAJgTATgLQATgKAaAAQAhAAAWASQAVARADAfIghAAQgDgUgLgKQgMgKgUAAQgaAAgMAOQgMAPAAAeQAAAfAMAOQAMAOAaAAQAUAAAMgKQALgKADgUIAhAAQgCATgKAQQgLAPgRAIQgRAIgWAAQgbAAgSgKgAmoiaQgRgSAAgdQAAgdARgRQARgRAfAAQAaAAARANQAQAMACAYIgeAAQgCgOgIgGQgHgGgOAAQgQAAgIAHQgIAGgDAPIAxAAIAAAVIgxAAQACARAIAHQAJAHAQAAQANAAAIgGQAIgGACgOIAeAAQgCAYgQAMQgQANgbAAQgeAAgSgQgAtQiTQgLgKAAgPQAAgSANgJQAMgJAdgDIAUgCQAFgBAFgDQADgEAAgEQAAgIgGgEQgHgEgNAAQgOAAgGAFQgHAEAAAKIgdAAQACgUAPgLQAQgLAYAAQAZAAAOALQAOALAAAVIAAA0IABADIADABIAKAAIAAAYIgSAAQgLAAgEgFQgFgEgBgLQgGALgMAGQgMAGgQAAQgVAAgMgJgAsgjAQgLABgHACQgFACgDAEQgCACAAAGQAAAOATAAQAQAAALgJQAKgJAAgSIAAgCQgKAFgSACgApuiNIgng3IgSAQIAAAnIgeAAIAAh4IAeAAIAAAxIA0gxIAlAAIgxAtIA2BLgAuRiNIAAhWIggBWIgbAAIgfhUIAABUIgeAAIAAh4IAqAAIAhBXIAhhXIAqAAIAAB4gAjojIIAAgZICMAAIAAAZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-122.4,-30.8,244.9,61.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4010").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-94.4,-49.6,188.8,99.3), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-403,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-403,-51,805,102), null);


(lib.logo_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4BLQgfgfAAgsQAAgrAggfQAggeAuAAQAiAAAaAQQAYAPAOAbIgzAUQgHgNgMgHQgMgHgQAAQgYAAgPAPQgQAQAAAWQAAAZAOAPQAPAQAbAAQASAAAOgJQANgJADgMIhAAAIAAgoIB1AAQAJAxgeAiQgeAkgzAAQgvAAgggegAgvBLQgggfAAgsQAAgrAggfQAfgeAuAAQAuAAAfAeQAgAfAAArQAAAsggAfQgfAeguAAQguAAgfgegAgIgmQgPAQAAAWQAAAWAPARQAPAPAXAAQAWAAAQgPQAQgRAAgWQAAgWgQgQQgQgPgWAAQgXAAgPAPgAjIBIIgIgjQgIgjgDgQIgBAAQgDARgIAiIgIAjQgEAQgJAIQgJAJgOAAQgOAAgJgJQgIgHgFgRIg3isIA9AAIAVBNIAFAVIAFAhIACAAQABgPADgSIAFgYIARhKIA1AAIARBKIAFAYQADASABAPIACAAIAFghIAFgVIAVhNIA9AAIg3CsQgFARgJAHQgJAJgNAAQgcAAgIghg");
	this.shape.setTransform(27.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BC53F").s().p("Ag7gLQgGgOAAgQQAAgbATgUQATgTAbAAQAbAAAUATQATAUAAAbQAAAQgHAOIg7B3g");
	this.shape_1.setTransform(-22.1,-9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNhmQgMgZAJgaQAJgaAXgMQAZgNAaAJQAaAJAMAZIBVCqQAJATAAAVQAAAWgJATIg2BtgAi/hmQgMgZAJgaQAJgaAYgMQAZgMAaAIQAaAJAMAZIBUCqQAJATAAAVQAAAWgJATIg1Btg");
	this.shape_2.setTransform(-44.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_static, new cjs.Rectangle(-64.4,-19.9,129,39.9), null);


(lib.img7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img7();
	this.instance.parent = this;
	this.instance.setTransform(-180,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img7_1, new cjs.Rectangle(-180,-113,360,226), null);


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;
	this.instance.setTransform(-27,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(-27,-25,54,50), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-49,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-49,-26,98,52), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-30,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-30,-20,60,40), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-38,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-38,-41,76,82), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-33,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-33,-26,66,52), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-39,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-39,-44,78,88), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAF4A3").s().p("AHzBZQgNgJgDgRIAdAAQAEAOAWAAQARAAAFgGQAIgGAAgMIAAgQQgNAQgYAAQgYgBgOgOQgNgPAAgZQAAgbANgPQAOgOAYAAQALAAALAEQAKAGAFAHIAAgOIAbAAIAABrQAAAUgOAOQgOANgegBQgZAAgNgJgAIDgbQgHAIAAASQAAAPAHAJQAIAJAPAAQAPAAAHgJQAIgJAAgPQAAgSgIgIQgGgJgQAAQgPAAgIAJgAscBWIAAggIhnAAIAAAgIgbAAIAAg5IAPAAQAFgYAAhGIAAgcIB5AAIAAB6IARAAIAAA5gAtwgJQgCAcgDAKIBGAAIAAhjIhAAAgAM0AwQgKgJAAgOQAAgRALgIQALgGAagDIASgCQAJgDABgCQADgCAAgEQAAgIgGgDQgHgDgLAAQgNAAgFADQgHAFAAAJIgaAAQACgTAOgJQANgLAWAAQAYAAAMALQANAJAAATIAAAvIABADIADABIAJAAIAAAWIgRAAQgJAAgEgFQgFgEAAgKQgGAKgLAGQgLAFgPAAQgSABgLgJgANgAHQgKAAgHADQgDABgFAEQgBADgBAFQAAANATgBQAOABAKgJQAJgJABgQIAAgCQgNAGgNABgAK8AzQgLgGgFgKQgGgKAAgPIAAhBIAdAAIAAA/QAAAOAGAGQAGAGAMAAQAQAAAGgHQAIgIAAgQIAAg6IAcAAIAABtIgbAAIAAgQQgFAJgLAFQgLAFgMgBQgNAAgKgFgAFnApQgPgPAAgaQAAgcAPgPQAPgPAdAAQAbAAAPAPQARAPgBAcQABAagRAPQgPAPgbAAQgbAAgRgPgAF7gbQgHAJAAASQAAARAHAJQAIAJAQAAQAOAAAJgJQAHgJAAgRQAAgSgHgJQgJgJgOAAQgRAAgHAJgAgGAwQgKgJAAgOQAAgRALgIQALgGAagDIASgCQAIgCABgDQADgCAAgEQAAgIgGgDQgGgDgMAAQgMAAgGADQgFAFgCAJIgZAAQACgTAMgJQAPgLAWAAQAWAAANALQANAJAAATIAAAvIABADIACABIAKAAIAAAWIgRAAQgJAAgEgFQgFgGAAgIQgHALgKAFQgKAFgQAAQgSABgKgJgAAkAHQgJAAgHADQgEABgDAEQgCADAAAFQAAANARgBQAOABALgJQAJgJAAgQIAAgCQgOAGgMABgAoBAwQgKgJAAgOQAAgRALgIQAMgGAZgDIASgCQAIgDABgCQADgCAAgEQABgIgGgDQgHgDgLAAQgNAAgFADQgGAFgBAJIgaAAQACgTAOgJQANgLAWAAQAYAAAMALQANAJgBATIAAAvIABADIADABIAKAAIAAAWIgRAAQgJAAgFgFQgEgEgBgKQgHALgJAFQgMAFgPAAQgRABgLgJgAnWAHQgKAAgFADQgFABgEAEQgCADAAAFQAAANASgBQAPABAJgJQAKgJAAgQIAAgCQgNAGgNABgArmApQgPgPAAgaQAAgSAHgNQAGgNAOgHQANgHAQAAQAcAAAPAPQAPAPAAAbIAAAJIhYAAQACAbAeAAQAJAAAGgDQAHgDADgGIAbAAQgDAPgOAKQgQAJgTgBQgbAAgQgPgAqegLQgDgNgHgGQgHgHgOABQgNgBgHAHQgIAGgCANIA9AAIAAAAgAJuA2IAAggIAgAAIAAAggAEMA2IgWhOIgVBOIggAAIgghtIAcAAIAWBRIAXhRIAbAAIAWBQIAXhQIAaAAIggBtgAhAA2IAAgtIgzAAIAAAtIgcAAIAAhtIAcAAIAAArIAzAAIAAgrIAcAAIAABtgAj9A2IAAhtIAcAAIAABtgAk4A2IAAhXIgnAAQAAAhgCARQgCAOgEAKQgCAHgHAEQgGACgKAAIgOAAIAAgXIAMAAQAEAAAAgDQADgFABgPIABg/IBdAAIAABtgApTA2IAAhXIgpAAIAAgWIBsAAIAAAWIgnAAIAABXgAj+hJIAAgZIAeAAIAAAZg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F4010").s().p("AvYERQhlAAhIhHQhIhIAAhmIAAg2QAAhmBIhIQBHhIBmAAIewAAQBlAABJBIQBIBIAABmIAAA2QAABmhIBIQhJBHhlAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-123,-27.3,246,54.6), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img6m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:0.1,y:-9.9},50,cjs.Ease.quadInOut).to({rotation:0,x:0,y:0},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-25,54,50);


(lib.img5m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10,x:0.1,y:10},50,cjs.Ease.quadInOut).to({rotation:0,x:0,y:0},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-26,98,52);


(lib.img4m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:0.1,y:-9.9},60,cjs.Ease.quadInOut).to({rotation:0,x:0,y:0},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-20,60,40);


(lib.img3m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10,x:0.1,y:10},50,cjs.Ease.quadInOut).to({rotation:0,x:0,y:0},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-41,76,82);


(lib.img2m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:0.1,y:-9.9},60,cjs.Ease.quadInOut).to({rotation:0,x:0,y:0},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-26,66,52);


(lib._img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.img4m("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-73,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242));

	// img
	this.instance_1 = new lib.img3m("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-29,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(242));

	// img
	this.instance_2 = new lib.img2m("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(87,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(242));

	// img
	this.instance_3 = new lib.img7_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,-15.5,1,1,0,0,0,5,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5},30,cjs.Ease.quadInOut).to({rotation:0},30,cjs.Ease.quadInOut).to({rotation:-5},30,cjs.Ease.quadInOut).to({rotation:0},30,cjs.Ease.quadInOut).to({rotation:-5},30,cjs.Ease.quadInOut).to({rotation:0},30,cjs.Ease.quadInOut).to({rotation:-5},30,cjs.Ease.quadInOut).to({rotation:0},30,cjs.Ease.quadInOut).wait(2));

	// img
	this.instance_4 = new lib.img1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.9,44.6,1,1,0,0,0,-1.1,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:42.5,rotation:-5},30,cjs.Ease.quadInOut).to({regY:42.6,rotation:0},30,cjs.Ease.quadInOut).to({regY:42.5,rotation:-5},30,cjs.Ease.quadInOut).to({regY:42.6,rotation:0},30,cjs.Ease.quadInOut).to({regY:42.5,rotation:-5},30,cjs.Ease.quadInOut).to({regY:42.6,rotation:0},30,cjs.Ease.quadInOut).to({regY:42.5,rotation:-5},30,cjs.Ease.quadInOut).to({regY:42.6,rotation:0},30,cjs.Ease.quadInOut).wait(2));

	// img
	this.instance_5 = new lib.img6m("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(45,-169);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(242));

	// img
	this.instance_6 = new lib.img5m("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-22,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(242));

	// shadow
	this.instance_7 = new lib.shadow_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-65,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(242));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-468,-220,805,309);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(0,241,0.01,0.013);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:1,scaleY:1},15,cjs.Ease.backOut).wait(34).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,x:-0.1},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},2).wait(2).to({regX:-0.1,regY:-0.1,scaleX:0.96,scaleY:0.96,x:-0.1},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0},2).wait(65).to({regY:4,scaleX:0.01,scaleY:0.01},10,cjs.Ease.cubicIn).wait(1));

	// logo
	this.instance_1 = new lib.logo_static();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.8,-259.2,0.737,0.735,0,0,0,-41,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277,243.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:0},15,cjs.Ease.quartOut).wait(50).to({x:-277},15,cjs.Ease.quartIn).to({_off:true},1).wait(134));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(245.5,-168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-28.5},15,cjs.Ease.quartOut).wait(209).to({x:-303.5},15,cjs.Ease.quartIn).wait(1));

	// img
	this.instance_4 = new lib._img("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-419,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:4,mode:"synched"},15,cjs.Ease.quartOut).wait(209).to({startPosition:209},0).to({x:358,startPosition:224},15,cjs.Ease.quartIn).wait(1));

	// bgImg
	this.instance_5 = new lib.bgImg_1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-887,-300,1226.9,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-587,300,1226.9,600);
// library properties:
lib.properties = {
	id: 'C6CFCF143BE44602932F386B1A77FDC2',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.png", id:"img6"},
		{src:"images/img7.png", id:"img7"},
		{src:"images/shadow.png", id:"shadow"}
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
an.compositions['C6CFCF143BE44602932F386B1A77FDC2'] = {
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