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


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.chips = function() {
	this.initialize(img.chips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,86);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgrBeQgNgNAAgaIAAhtQAAgaANgNQANgNAYAAQAYAAAMANQANANAAAaIAABtQAAAagNANQgMANgYAAQgYAAgNgNgAgShIQgFAFAAALIAABxQAAALAFAFQAEAEAIAAQAHAAAFgEQAEgFAAgLIAAhxQAAgLgEgFQgFgEgHAAQgIAAgEAEgAkRBeQgMgOAAgZIAAgbIAfAAIAAAdQAAALAFAFQAEAEAIAAQAIAAAFgEQAEgFAAgOIAAgRQAAgPgFgGQgFgGgLAAIgFAAIAAgdIAHAAQAJAAAFgEQAFgFAAgNIAAgLQAAgPgEgEQgFgFgIAAQgIAAgEAEQgFAFAAALIAAAXIgfAAIAAgVQAAgZAMgOQANgNAYAAQAZAAAMANQAMAOAAAZIAAAGQAAAigXAJQANAFAFALQAFAKAAARIAAARQAAAagMANQgMANgZAAQgYAAgNgNgAEBBpIAAiXIgpCXIgiAAIAAjRIAdAAIAAB9IAih9IApAAIAADRgABABpIAAjRIBYAAIAAAeIg3AAIAAAxIAQAAQAZAAAMANQAMAMAAAaIAAAbQAAAagMANQgMANgZAAgABhBLIAQAAQAIAAAEgEQAEgFAAgLIAAgfQAAgMgEgEQgEgEgIAAIgQAAgAimBpIAAjRIAxAAQAZAAAMANQAMAOAAAZIAAAbQAAAZgMANQgMANgZAAIgQAAIAABPgAiFgDIAQAAQAIAAAEgEQAEgEAAgMIAAgfQAAgLgEgFQgEgEgIAAIgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-28.6,-10.7,57.3,21.5), null);


(lib.t3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB092A").s().p("Aq8gzIgiABIgBgeIBmgEIABAfIgjABIAHC0IghABgApqhUIAygCQAaAAAMALQALALACAZIAAAIQAAAQgEALQgFAJgLAGQAOAFAGALQAFALABARIABASQABAXgMAOQgMAOgZAAIg0ACgApFAeIADBBIASgBQAJAAAEgFQAEgFAAgLIgBgTQAAgOgFgGQgFgFgMAAgApIg3IACA3IANAAQAJAAAFgFQAFgFAAgNIAAgLQgBgMgEgFQgEgFgJAAgAnfBuQgNgMgCgaIgEhtQAAgaAMgOQANgOAYgBQAYgBAOAOQANANABAZIAEBtQABAbgNANQgMAOgYABIgEAAQgWAAgMgNgAnMg5QgFAFAAAMIAFBxQAAALAFAFQAEAEAIAAQAIAAAFgFQAEgGAAgLIgEhxQgBgMgFgEQgEgEgIAAQgHAAgFAFgAlpBrQgOgOAAgZIgEhtQgBgaAMgOQAMgOAYgBQAZAAANANQANANAAAaIABAUIgfABIgBgWQAAgMgFgEQgFgFgIAAQgHAAgFAFQgEAFAAAMIABAoIAugBIABAdIguABIACAsQAAALAFAFQAFAEAIAAQAIgBAEgEQAFgFgBgLIgBgfIAfgBIABAcQACAZgNAPQgMAPgYAAIgDAAQgWAAgMgMgAkFhgIAugBIAdCUIASiWIAugBIAHDSIgfABIgGiWIgRCXIgfABIgeiUIAFCUIgdABgAhSBtIgBgeIAMAAQAEAAADgCQAEgBACgCQADgDAAgEQACgFgBgHIg1icIAhgBIAoB6IAah8IAggBIglCcQgEAUgGAOQgGALgGAGQgHAFgHABIgRABIgIAAIgIAAgAB3gFIgmhmIAigBIAcBNIAWhPIAfgBIgfBoIApBqIgjACIgehTIgYBUIgfABgADXhvIAxgCQAZAAAMAMQANANABAaIABAbQABAagMANQgLANgaABIgPABIADBPIghABgAD5hSIADBHIAPAAQAIAAAEgFQAEgFAAgLIgBgfQgBgMgEgEQgFgEgHAAgAFZBfIgCgeIAMAAIAHgBIAGgEIAEgHIABgLIg2idIAhgBIApB6IAZh8IAhgBIglCcQgGAZgFAJQgFALgGAGQgHAFgIABIgZABgAHjBPQgNgNgBgaIgEhtQAAgZALgOQAMgOAZgBQAYgBANANQANAOABAZIABAVIggABIAAgXQgBgLgFgFQgEgEgIAAQgIABgFAEQgEAFAAALIAEBxQABAMAFAEQAFAEAHAAQAIAAAFgFQAEgEAAgMIgBgeIAfgBIABAcQABAagMAOQgMAOgZABIgDAAQgWAAgMgNgAJHh7IAhgBIADBPIAQAAQAZgBAMANQANANABAYIABAcQABAagMANQgLANgaABIgwACgAJsgPIADBHIAPgBQAIAAAEgEQAEgFAAgLIgBggQgBgLgEgDQgEgEgIAAgAK/AzIAggBIABAgIggABgAK4h/IAhgBIACCkIgZAAg");
	this.shape.setTransform(1.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Avxi8MAiRgBHIiuHAMgiRABHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2_mc, new cjs.Rectangle(-118.4,-25.9,236.8,52), null);


(lib.t3_2_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B40002").s().p("Av6iiMAiPgB/IiaHEMgiPAB/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2_bg, new cjs.Rectangle(-117.3,-28.9,234.6,57.9), null);


(lib.t3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB092A").s().p("AJMCMIABgZIhVgCIAAAYIgigCIACg1IALABQAIAAAFgEQAGgDAAgMIAEidIBpADIgFCxIARAAIgBA2gAIXA+QAAANgDAKIApABIAEiUIgngBgAOZB+IgxgCIAFjOIAhABIgCBOIAQABQAZAAAMANQAMANgBAaIgBAbQAAAZgNAMQgLAMgXAAIgDAAgAOKBgIAPAAQAJAAAEgDQAEgEAAgLIABggQABgKgFgFQgEgEgIgBIgPgBgAMWB6IAEixIgigBIAAgdIBmACIAAAeIgjgBIgECxgALHB4IADiVIgsCTIgigBIAFjOIAdAAIgDB8IAlh6IApABIgFDPgAGyBvIgEgmIgpgBIgGAlIgfgBIAnjNIAwACIAdDPgAGqAtIgNhoIgTBnIAgABgAEkBqIg0gBIAFjOIAyABQAZABAMAMQALALAAAZIgBAHQAAAQgFALQgFAJgMAGQAOAFAFALQAFALgBARIAAARQAAAYgNAMQgNAMgWAAIgDgBgAESBMIATABQAHAAAFgEQAEgEABgMIABgSQAAgPgFgFQgFgGgLAAIgPAAgAEUgQIANAAQAJABAGgFQAFgEAAgNIAAgLQABgLgEgGQgEgFgJgBIgQAAgADABoIgFgmIgpgCIgGAmIgegBIAmjNIAxABIAcDQgAC3AlIgNhoIgTBnIAgABgAAwBlQgZgBgLgNQgMgOAAgZIABgaIAfABIAAAcQgBALAFAFQAEAEAIAAQAJABAEgFQAFgFAAgNIAAgQQAAgPgEgGQgGgGgLAAIgFgBIABgcIAHAAQAJAAAFgFQAFgDABgOIAAgLQABgNgFgGQgEgFgIgBQgHABgGAEQgEAFgBAKIAAAXIgfgBIAAgUQABgaANgNQAMgNAZABQAYABAMAOQAMANgBAaIAAAFQAAAhgYAJQANAGAFAKQAEALAAAQIAAARQgBAZgNANQgLAMgWAAIgEAAgAiZBdIAFjPIBaADIAAAdIg5gBIgCA5IAuACIgBAdIgtgCIgCA9IA5ACIgBAegAjSBbIAChZIgmgCIgCBZIghgBIAFjOIAhABIgCBZIAmABIAChZIAhABIgFDPgAmOBXQgYAAgNgPQgMgNAAgaIADhrQABgZAMgMQAOgNAYAAQAYABANAOQANAOgBAZIgDBqQAAAagOANQgNANgXAAIgBgBgAmWhaQgFAFAAALIgDBuQAAAMAEAEQAFAFAHABQAIAAAFgFQAFgDAAgMIADhvQABgLgFgFQgFgFgIAAIgCAAQgGAAgEAEgAoQBRIAFixIgjgBIABgeIBmADIgBAeIgigBIgFCxgApcBPIgZhSIgeBQIgfgBIAohpIgghlIAiABIAXBNIAbhMIAfABIglBkIAiBqgArjBLIAFjPIAhABIgFDPgAsdBIIADhYIgmgBIgCBYIghgBIAFjOIAhABIgCBZIAlABIADhZIAhABIgFDOgAvLBDIAGjOIAhABIgGDOg");
	this.shape.setTransform(-1.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A0sC0IDJmrMAmQABDIjJGsg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1_mc, new cjs.Rectangle(-132.4,-24.8,264.9,49.7), null);


(lib.t3_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B40002").s().p("AxvjBMAmRgA1IirGwMgmYAA9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1_bg, new cjs.Rectangle(-131.4,-24.7,262.8,49.4), null);


(lib.t2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB092A").s().p("AoRCDQgMgNgBgaIgEhtQgBgaAMgOQAMgNAYgBQAZgBAMANQAOAOAAAZIABAUIgfABIgBgWQAAgLgFgFQgGgFgHABQgHAAgFAFQgFAFABALIAEBxQAAALAFAFQAFAEAIAAQAHAAAFgFQAEgFAAgLIgBgeIAfgBIABAcQABAagMAOQgMAOgYAAQgZAAgNgMgAmuhHIAhgBIAEBZIAlgBIgDhaIAigBIAHDSIghABIgEhaIglABIADBbIghABgAkthLIAhgCIAHDTIghABgAj0hNIAxgCQAZAAAMAMQANANABAaIABAbQABAZgMANQgLAOgaABIgPAAIADBQIgiABgAjSgwIADBGIAPAAQAIAAAEgFQAEgFAAgLIgBgeQgBgMgEgEQgEgEgIAAgAh0B2QgOgOAAgZIgBgPIAggBIAAARQAAALAFAFQAGAEAHAAQAIgBAEgEQAFgFgBgLQAAgLgFgIQgEgHgJgJIgQgOQgJgIgHgIQgHgHgFgLQgFgLgBgPQgBgaAMgOQALgOAZgBQAYAAANANQANAOAAAZIAAAIIgfABIAAgKQAAgLgFgFQgFgFgHAAQgIAAgEAFQgFAGABALQABALAEAIQAGAJAHAFIAQAOQAGAFAKALQAIAJAFAKQAFAMAAAOQACAZgNAPQgMAPgYAAIgDAAQgWAAgMgMgAAHg3IghABIgBgeIBlgEIABAeIgjACIAHC0IghABgABZhYIBagDIABAeIg5ACIACA7IAtgCIABAdIgtACIACA+IA5gCIACAeIhbADgADHhcIAygBQAagBAMALQAMAMABAZIABAQQABAggWALQANAEAFAMQAGALAAARIACAuQABAHADAFIgiABIgBgEIgBgEIgDgzQAAgOgGgHQgFgFgMAAIgLAAIADBWIghABgADpg/IADBAIANAAQAJAAAFgFQAGgEgBgNIgBgVQgBgMgEgFQgDgEgKAAgAGaBkQgNgMgBgbIgBgOIAggBIAAARQABALAFAEQAEAFAIAAQAIgBAEgEQAFgFAAgMQgBgKgFgJQgGgJgHgGIgQgOQgHgGgJgJQgHgHgFgMQgFgMgBgOQgBgaAMgOQAKgOAagBQAYgBANAOQANANAAAZIABAJIggABIAAgLQAAgLgFgFQgFgEgHAAQgJAAgDAFQgEAEAAAMQABANAEAGQAGAJAHAHIAQAOQAJAGAHAJQAHAHAGAMQAFAMABAOQABAagNAOQgLAOgZABIgDAAQgXAAgLgNgAIDBMIAggBIABAgIggABgAH8hmIAhgBIABCkIgYAAgAE7iNIAkgBIAXAiIgZABg");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ar0jEIaYg2IiuG/I6ZA2g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2_mc, new cjs.Rectangle(-93.1,-25.1,186.3,50.3), null);


(lib.t2_2_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B40000").s().p("Ar0jEIaYg2IiuG/I6ZA2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2_bg, new cjs.Rectangle(-93.1,-25.1,186.3,50.3), null);


(lib.t2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB092A").s().p("AMeCAIgFglIgpgBIgGAlIgegBIAmjOIAxACIAcDPgAMVA+IgNhoIgTBoIAgAAgAKbB9IAChaIglAAIgCBZIghgBIAFjPIAhABIgDBYIAmABIAChYIAiABIgFDOgAHmB3IgxgCIAGjOIAhABIgCBOIAPABQAZAAAMAMQALANAAAaIgBAbQAAAagNAMQgMAMgXAAIgCAAgAHXBZIAQABQAHgBAFgDQAEgEAAgMIABgfQAAgMgEgDQgDgFgJAAIgPgBgAFvB1QgYAAgMgOQgMgPAAgYIADhrQABgaAMgMQANgNAYABQAZABAMANQAMAOgBAZIAAAVIgfgBIAAgXQAAgMgEgEQgEgEgIgBQgIAAgFAEQgFAFAAALIgDBvQAAAMAEAEQAGAEAHABQAIAAAEgFQAFgDAAgMIABgeIAfABIAAAcQgBAZgNANQgLANgWAAIgEgBgAELBwIAEiVIgtCUIgigBIAGjPIAdABIgDB7IAlh6IApACIgFDOgACHBsIAChQIgIACIgKAAQgYAAgMgOQgMgOABgZIAChNIAgABIgCBQQAAALAFAFQAEADAIAAQAHABAFgDQAFgFABgJIAChTIAhABIgGDPgAAFBrQgXgBgNgPQgMgNAAgZIABgnIgUgBIgCBYIghgBIAFjOIAhABIgCBZIAUABIABgnQABgaANgMQAMgNAYAAQAYABANAOQANANgBAaIgDBqQAAAagOANQgNANgXAAIgBAAgAgChHQgFAFAAALIgDBuQAAAMAEAEQAFAFAGABQAIAAAFgFQAEgDABgNIADhuQAAgLgEgGQgFgEgIAAIgCAAQgGAAgDAEgAiaBjIAEixIgmgBIgDB9QAAAQgFAKQgDAIgHAIQgHAEgJADQgIACgKAAIgIAAIgIgBIABgeIAMABQAIAAAFgEQAGgDAAgNIAEicIBoACIgFDPgAknBfIgfhUIgKASIgCBAIghgBIAFjOIAhABIgCBaIAuhZIAhABIgxBbIArB0gAngBZIAFjOIBaACIgBAeIg5gCIgBA6IAtABIgBAdIgtgBIgBA8IA5ACIgBAdgApRBVIAFjOIAxACQAZAAAMANQAMAOgBAZIgBAbQAAAZgNANQgMAMgZgBIgQgBIgCBPgAotgUIAPAAQAIABAEgFQAFgDAAgMIABgfQAAgKgEgGQgEgEgIAAIgPAAgAq+BSIAFjPIBaADIgBAeIg5gCIgBA6IAtABIgBAeIgtgCIgCA8IA5ACIAAAdgAr4BQIAFixIgmgBIgECxIghgBIAFjOIBoACIgFDPg");
	this.shape.setTransform(2.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AypC0IDImrMAiLABEIjIGrg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1_mc, new cjs.Rectangle(-119.4,-24.8,238.9,49.7), null);


(lib.t2_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B40000").s().p("AygDSIC0mxMAiNAAOIi1Gxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1_bg, new cjs.Rectangle(-118.5,-22.3,237.1,44.8), null);


(lib.t1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("ALgCtIADggIAfAEIgCAfgAJZChIgJAAIgHgCIACgdIAMABIAHAAIAGgDQADgDACgEIACgKIgiigIAhACIAZB9IAph2IAhACIg5CVQgIAWgGAKQgHALgHAEQgIAEgHABIgQgCgAH6CYIgzgEIASjPIAxAEQAaADAKAMQALANgCAYIgBAHQgBAPgGALQgGAKgMADQANAHAFAMQAFANgCAQIgBAQQgCAYgOAMQgMAKgTAAIgIgBgAHqB5IATABQAIABAFgDQAFgGABgLIABgRQACgPgFgGQgFgFgLgCIgOgBgAHyAbIANACQAKAAAFgEQAFgEACgNIABgLQAAgLgDgFQgDgGgJAAIgQgCgAFWCKIASjQIAxAEQAZADAKAOQALAOgCAZIgCAaQgDAagNAMQgMAMgagCIgPgCIgHBOgAGAAgIAQACQAIABAEgEQAFgEABgMIACgdQACgMgEgFQgEgDgIgCIgQgBgADpCAIASjPIBaAHIgDAeIg5gFIgFA5IAtAEIgCAeIgtgEIgFA9IA4AFIgCAegALmCAQgCgHABgHQACgNACgGIAIgPIAKgMQAFgGAFgHQAFgJADgHQAEgKAAgNQACgLgEgFQgFgEgHgBQgIgBgFAEQgFAFAAAKIgCAXIgfgDIABgUQADgZANgMQAOgNAXADQAZACAKAOQAMAPgDAYQgBAPgEAIQgDAKgFAIIgWAaIgIAOQgEAIAAAIIAAAMgAB5B2IASjQIAwAFQAYABAMAPQALAOgCAZIgDAbQgCAYgNAMQgNANgZgDIgQgBIgHBPgACjANIAPABQAIAAAFgDQAFgFAAgKIADgeQABgMgEgEQgFgGgHAAIgPgBgAALBrIASjPIBaAIIgCAeIg5gFIgFA6IAtAEIgDAcIgtgDIgFA8IA5AGIgDAdgAgtBmIAPiyIglgCIgPCxIghgDIASjQIBmAKIgQDPgAlSBMIASjPIAhACIgQCyIAbACIAQiyIAhAEIgQCxIAbADIAPiyIAhADIgSDPgAm/BCIASjPIBaAIIgDAeIg5gGIgFA6IAuAEIgDAeIgtgEIgFA8IA4AFIgCAegAn4A8IAHhPIgJABIgJAAQgYgCgLgOQgLgPABgaIAHhOIAhADIgHBRQAAALADAEQAEAFAIABQAIABAFgDQAFgEABgKIAHhTIAhADIgSDQgAp6AzQgYgDgMgOQgMgOACgZIAKhsQACgaAOgMQAOgMAYACQAZACALAPQAMAOgDAaIgJBrQgCAZgOANQgMAKgTAAIgHAAgAp3iAQgGAEAAAMIgKBwQgBALAEAEQAEAFAIABQAIABAFgFQAFgEABgLIAKhvQABgLgFgGQgDgEgJgBIgBgBQgGAAgFAEgArcAoIgUhUIgiBPIgfgDIAuhnIgahoIAiADIASBPIAhhKIAeACIgrBiIAbBug");
	this.shape.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ay0BuIDjmiMAiGADHIjjGig");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_mc, new cjs.Rectangle(-120.5,-30.9,241,61.8), null);


(lib.t1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B40000").s().p("AytCNIDPmoMAiMACPIjQGog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_bg, new cjs.Rectangle(-119.7,-28.4,239.5,56.9), null);


(lib.round_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_red, new cjs.Rectangle(-12,-12,24,24), null);


(lib.round_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#03D117").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_green, new cjs.Rectangle(-12,-12,24,24), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chips();
	this.instance.parent = this;
	this.instance.setTransform(38,43,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-38,-43,76,86), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chips();
	this.instance.parent = this;
	this.instance.setTransform(-38,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-38,-43,76,86), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD549").s().p("AgOAtQgRgIgEgVQgDgLAFgOIBKAZQAAAOgLAKQgKAJgLAAIgCAAQgMAAgJgEgAgogfIAGgJQAFgEAEgCIAyArIgBADgAgBgvQAFgCAGABQAHABAGAEQAFAEACAHQACAGAAAIQgBAFgCAAg");
	this.shape.setTransform(-20.2,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFzBZQgMgNAAgYIAAgPIAgAAIAAARQAAAKADAEQAFAEAHAAQAGAAAFgEQADgEAAgKQAAgKgDgIIgMgPIgOgNIgPgPQgHgIgEgLQgFgKAAgPQAAgYAMgNQALgOAYAAQAXAAAMAOQAMANAAAYIAAAJIggAAIAAgLQAAgKgEgEQgEgEgGAAQgIAAgDAEQgEAEAAAKQAAAKAEAIQAEAIAIAGIAOAOQAIAHAGAHQAIAJAEALQAFAKAAAPQAAAYgMANQgMAOgYAAQgXAAgMgOgAgwBZQgMgNABgYIAAgPIAfAAIAAARQAAAKAEAEQAEAEAHAAQAGAAAFgEQADgEAAgKQAAgKgEgIQgEgIgGgHIgPgNQgIgHgGgIQgIgIgEgLQgFgKAAgPQAAgYAMgNQAMgOAWAAQAYAAALAOQAMANAAAYIAAAJIgfAAIAAgLQgBgKgCgEQgEgEgHAAQgHAAgEAEQgDAEAAAKQAAAKADAIQAFAIAHAGIANAOQAIAHAHAHQAHAJAFALQAEAKAAAPQAAAYgMANQgLAOgYAAQgXAAgMgOgAm5BZQgMgNAAgYIAAhnQAAgYAMgNQAMgOAXAAQAYAAAMAOQAMANAAAYIAAAUIggAAIAAgWQAAgKgDgEQgFgEgHAAQgGAAgFAEQgDAEAAAKIAABrQAAAKADAEQAFAEAGAAQAHAAAFgEQADgEAAgKIAAgeIAgAAIAAAcQAAAYgMANQgMAOgYAAQgXAAgMgOgAE+BkIgDgIIgBgHIAAgpQAAgOgEgFQgFgGgLAAIgKAAIAABRIggAAIAAjHIAwAAQAZAAALALQALAMgBAXIAAAQQABAegTAJQALAFAEALQAEALAAAPIAAAfIABANIACALIABABgAEcgKIAMAAQAJAAAEgEQAFgEAAgMIAAgTQAAgLgEgFQgEgEgHAAIgPAAgACSBkIAAjHIBXAAIAAAeIg2AAIAAA2IAqAAIAAAcIgqAAIAAA5IA2AAIAAAegABFBkIAAipIggAAIAAgeIBiAAIAAAeIghAAIAACpgAijBkIAAjHIAwAAQAXAAALANQANAMAAAZIAAAaQAAAXgNANQgLANgXAAIgPAAIAABKgAiCgEIAPAAQAGAAAEgDQADgEAAgKIAAgeQAAgLgDgDQgEgEgGAAIgPAAgAjaBkIAAjHIAiAAIAADHgAkQBkIAAhVIgiAAIAABVIghAAIAAjHIAhAAIAABVIAiAAIAAhVIAhAAIAADHgAFahPIAAgUIATAAIgJAUg");
	this.shape_1.setTransform(0,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA0029").s().p("An9CUIAAknIP7AAIAAEng");
	this.shape_2.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-51,-18,102,36.2), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBpIAAjRIAhAAIAABPIAPAAQAYAAANANQAMAMAAAaIAAAcQAAAZgMANQgMANgZAAgAgPBLIAPAAQAIAAAEgEQAEgEAAgMIAAgfQAAgMgEgDQgEgFgIAAIgPAAg");
	this.shape.setTransform(77,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBeQgMgNAAgaIAAhtQAAgZAMgOQANgNAXAAQAYAAANANQAMAOAAAZIAAAVIgfAAIAAgXQAAgLgFgFQgEgEgIAAQgHAAgEAEQgFAFAAALIAABxQAAALAFAFQAEAEAHAAQAIAAAEgEQAFgFAAgLIAAgeIAfAAIAAAcQAAAagMANQgNANgYAAQgXAAgNgNg");
	this.shape_1.setTransform(65,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBpIgHAAIAAgeIALAAIAHgBQAFgBABgCQADgCACgFQABgEAAgIIgwicIAhAAIAjB5IAeh5IAhAAIgrCaQgHAXgFAKQgFAMgGAEQgHAFgIABIgRAAg");
	this.shape_2.setTransform(52.3,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBpIgfhUIgLATIAABBIghAAIAAjRIAhAAIAABbIArhbIAhAAIguBeIAuBzg");
	this.shape_3.setTransform(39.6,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBpIAAjRIBZAAIAAAeIg4AAIAAA6IAsAAIAAAdIgsAAIAAA+IA4AAIAAAeg");
	this.shape_4.setTransform(27.7,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBpIAAjRIAwAAQAZAAAMAOQAMANAAAZIAAAbQAAAagMAMQgMAOgZAAIgPAAIAABOgAgPgDIAPAAQAHABAFgFQAEgEAAgMIAAgfQAAgLgEgFQgFgEgHAAIgPAAg");
	this.shape_5.setTransform(16.8,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsBpIAAjRIBZAAIAAAeIg4AAIAAA6IAsAAIAAAdIgsAAIAAA+IA4AAIAAAeg");
	this.shape_6.setTransform(5.5,-2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASBpIAAizIgkAAIAACzIghAAIAAjRIBnAAIAADRg");
	this.shape_7.setTransform(-6.6,-2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAPIAAgdIA7AAIAAAdg");
	this.shape_8.setTransform(-17.1,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBpIAAjRIAhAAIAABPIAPAAQAZAAAMANQAMAMAAAaIAAAcQAAAZgMANQgMANgZAAgAgPBLIAPAAQAIAAAEgEQAEgEAAgMIAAgfQAAgMgEgDQgFgFgHAAIgPAAg");
	this.shape_9.setTransform(-26.3,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBeQgMgNAAgaIAAhtQAAgZAMgOQAMgNAYAAQAYAAANANQAMAOAAAZIAAAVIgfAAIAAgXQAAgLgFgFQgEgEgIAAQgHAAgFAEQgEAFAAALIAABxQAAALAEAFQAFAEAHAAQAIAAAEgEQAFgFAAgLIAAgeIAfAAIAAAcQAAAagMANQgNANgYAAQgYAAgMgNg");
	this.shape_10.setTransform(-38.2,-2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBpIgIAAIAAgeIALAAIAIgBQAEgBACgCIAEgHIABgMIgwicIAhAAIAjB5IAeh5IAhAAIgrCaQgFAUgGANQgGALgGAFQgHAFgHABIgRAAg");
	this.shape_11.setTransform(-51,-2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBpIAAjRIAwAAQAZAAAMAOQAMANAAAZIAAAbQAAAagMAMQgMAOgZAAIgPAAIAABOgAgPgDIAPAAQAHABAFgFQAEgEAAgMIAAgfQAAgMgEgEQgFgEgHAAIgPAAg");
	this.shape_12.setTransform(-63.1,-2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZBpIgahTIgbBTIgfAAIAlhrIgjhmIAiAAIAZBOIAZhOIAeAAIgiBmIAlBrg");
	this.shape_13.setTransform(-75.6,-2.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA002A").s().p("AurDSQgZAAgRgSQgSgRAAgZIAAkrQAAgZASgRQARgSAZAAIdXAAQAZAAARASQASARAAAZIAAErQAAAZgSARQgRASgZAAg");
	this.shape_14.setTransform(0,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B40002").s().p("AurDSQgZAAgRgSQgSgRAAgZIAAkrQAAgZASgRQARgSAZAAIdXAAQAZAAARASQASARAAAZIAAErQAAAZgSARQgRASgZAAg");
	this.shape_15.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-100,-23,200,46), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-160,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-160,-240,320,480), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-150,-300,300,600), null);


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


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_2_mc
	this.instance = new lib.t3_2_mc();
	this.instance.parent = this;
	this.instance.setTransform(295.9,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.8,y:-5.1},15,cjs.Ease.backOut).wait(6).to({x:-275.2,y:3.9},15,cjs.Ease.backIn).wait(4));

	// t2_2_bg
	this.instance_1 = new lib.t3_2_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.1,-14.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-4.9,y:2.2},15,cjs.Ease.backOut).wait(4).to({x:-284,y:18.7},15,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.5,-40.5,236.8,52);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_1_mc
	this.instance = new lib.t3_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(-289.7,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7.1,y:-2},15,cjs.Ease.backOut).wait(6).to({x:304.9,y:5.7},15,cjs.Ease.backIn).wait(4));

	// t2_1_bg
	this.instance_1 = new lib.t3_1_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-290.8,11.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-8,y:4.6},15,cjs.Ease.backOut).wait(4).to({x:302.3,y:-2.2},15,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.2,-35.1,264.9,49.7);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_2_mc
	this.instance = new lib.t2_2_mc();
	this.instance.parent = this;
	this.instance.setTransform(295.9,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.8,y:-5.1},15,cjs.Ease.backOut).wait(6).to({x:-275.2,y:3.9},15,cjs.Ease.backIn).wait(4));

	// t2_2_bg
	this.instance_1 = new lib.t2_2_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.1,-14.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-4.9,y:2.2},15,cjs.Ease.backOut).wait(4).to({x:-284,y:18.7},15,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202.7,-39.7,186.3,50.3);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_1_mc
	this.instance = new lib.t2_1_mc();
	this.instance.parent = this;
	this.instance.setTransform(-275.7,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7.1,y:-2},15,cjs.Ease.backOut).wait(6).to({x:304.9,y:7.2},15,cjs.Ease.backIn).wait(4));

	// t2_1_bg
	this.instance_1 = new lib.t2_1_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-290.8,2.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-8,y:4.6},15,cjs.Ease.backOut).wait(4).to({x:289.8,y:7.3},15,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395.2,-36.1,238.9,49.7);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1
	this.instance = new lib.t1_mc();
	this.instance.parent = this;
	this.instance.setTransform(-266.6,-26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.4,y:-1.8},15,cjs.Ease.backOut).wait(6).to({x:331.5,y:28.2},15,cjs.Ease.backIn).wait(4));

	// bg
	this.instance_1 = new lib.t1_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-276.1,-13.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:-5.1,y:4.3},15,cjs.Ease.backOut).wait(4).to({x:322,y:25.3},15,cjs.Ease.backIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.1,-57.2,241,61.8);


(lib.radio_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_green
	this.instance = new lib.round_green();
	this.instance.parent = this;
	this.instance.setTransform(20,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1));

	// round_rad
	this.instance_1 = new lib.round_red();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:20},10,cjs.Ease.cubicInOut).wait(1));

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjHCWQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIGPAAQA+AAAsAsQAsAsAAA9QAAA/gsArQgrAsg/AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-15,70,30);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.p.scaleX = this.p.scaleY = Math.random();
	}
	this.frame_41 = function() {
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(18));

	// Слой_2
	this.p = new lib.p2_mc();
	this.p.name = "p";
	this.p.parent = this;
	this.p.setTransform(-58.4,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.p).wait(1).to({rotation:-720,y:1150},39).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-52.6,76,86);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//let sc = Math.random()*.7 +.3;
		//this.p.scaleX = this.p.scaleY = Math.random();
	}
	this.frame_41 = function() {
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(23));

	// Слой_2
	this.p = new lib.p1_mc();
	this.p.name = "p";
	this.p.parent = this;
	this.p.setTransform(-49.4,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.p).wait(1).to({rotation:360,y:1150},39).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-51.5,76,86);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*2));
		//this.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Слой_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(733.1,238,1,1,0,0,0,733.1,238);

	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(733.1,238,1,1,0,0,0,733.1,238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-51.5,76,86);


(lib.chips_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		
		n += .5;
		for (let i = 0; i < n; i++) {
			if(counter < 200){
				var cloneParticle = new lib.particle2Movie();
				cloneParticle.x = Math.random()*370;
				cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.5 +.5;;
				this.addChild(cloneParticle);
				counter++;
			}else{
				this.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Слой_1
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.setTransform(519,154,1,1,0,0,0,519,154);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-51.5,76,86);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		counter = 0;
		n = 1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(336));

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(87.5,-269.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(231).to({x:0},10,cjs.Ease.cubicInOut).wait(79).to({x:87.5},15,cjs.Ease.cubicInOut).wait(1));

	// chips
	this.instance_1 = new lib.chips_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-175.4,-315.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).wait(176));

	// bgImg1
	this.instance_2 = new lib.bgImg1_1();
	this.instance_2.parent = this;
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(320).to({_off:false},0).to({alpha:1},15).wait(1));

	// btn
	this.instance_3 = new lib.btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-185.9,0.01,0.011);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(251).to({_off:false},0).to({scaleX:1,scaleY:1,x:0.1},15,cjs.Ease.backOut).wait(70));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-228.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({alpha:1},10).wait(85));

	// t3_2
	this.instance_5 = new lib.t3_2("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.3,235.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(51).to({mode:"synched",loop:false},0).to({_off:true},20).wait(105));

	// t3_1
	this.instance_6 = new lib.t3_1("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-4,175.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(61).to({mode:"synched",loop:false},0).to({_off:true},20).wait(105));

	// radio_btn
	this.instance_7 = new lib.radio_btn("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9.9,252.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).to({alpha:1},10).wait(25).to({mode:"synched",loop:false},0).wait(15).to({startPosition:10},0).to({alpha:0},15).to({_off:true},1).wait(210));

	// t2_2
	this.instance_8 = new lib.t2_2("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-5.3,176.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(20).to({mode:"synched",loop:false},0).to({_off:true},20).wait(206));

	// t2_1
	this.instance_9 = new lib.t2_1("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-8,116.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).wait(20).to({mode:"single",startPosition:20},0).wait(30).to({mode:"synched",loop:false},0).to({_off:true},20).wait(206));

	// t1
	this.instance_10 = new lib.t1("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5,229);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({mode:"single",startPosition:20},0).wait(20).to({mode:"synched",loop:false},0).to({_off:true},20).wait(276));

	// box1
	this.instance_11 = new lib.box1_1();
	this.instance_11.parent = this;
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.instance_12 = new lib.box2_1();
	this.instance_12.parent = this;

	this.instance_13 = new lib.box3_1();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},216).to({state:[{t:this.instance_11}]},15).to({state:[{t:this.instance_12}]},49).to({state:[{t:this.instance_13}]},20).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(216).to({_off:false},0).to({alpha:1},15).to({_off:true},49).wait(56));

	// bgImg4
	this.instance_14 = new lib.bgImg4_1();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(216).to({_off:false},0).to({alpha:1},15).wait(105));

	// bgImg3
	this.instance_15 = new lib.bgImg3_1();
	this.instance_15.parent = this;
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(115).to({_off:false},0).to({alpha:1},15).wait(206));

	// bgImg2
	this.instance_16 = new lib.bgImg2_1();
	this.instance_16.parent = this;
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(45).to({_off:false},0).to({alpha:1},15).to({_off:true},70).wait(206));

	// bgImg1
	this.instance_17 = new lib.bgImg1_1();
	this.instance_17.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},60).wait(276));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392.1,-300,542.1,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var counter = 0;
		var n = 1;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,300,542.1,600);
// library properties:
lib.properties = {
	id: '19F6AB96D88D4168A980E2AD6C93ED24',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/chips.png", id:"chips"}
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
an.compositions['19F6AB96D88D4168A980E2AD6C93ED24'] = {
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