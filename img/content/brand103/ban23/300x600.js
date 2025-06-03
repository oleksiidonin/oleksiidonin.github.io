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
p.nominalBounds = new cjs.Rectangle(0,0,144,228);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,82);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,38);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,100);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,62);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,150);// helper functions:

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
	this.shape.graphics.f("#296941").s().p("ADNFhQgqgVgWgoQgVgnAAg4QgBg2AXgoQAWgpApgVQAqgVA5AAQA6AAApAVQAqAVAVAoQAXAoAAA3QgBA2gWAoQgWAogqAWQgpAVg5AAQg6AAgpgVgADuB2QgWAZABA2QgBA2AWAZQAVAaAtgBQAtABAWgaQAUgZAAg2QAAg2gUgZQgWgZgtAAQgtAAgVAZgAjxFIQgsgvAAhUQAAg2AWgoQAYgoApgWQAqgWA4ABQAxAAAlAPQAkAQAWAcQAWAdADAoIhiAAQgGgbgRgOQgSgOgeAAQggAAgTAKQgTALgJAXQgJAWABAmQgBA3AVAYQAUAZAvAAQAfAAAUgPQATgPAHgbIhcAAIAAg8IC9AAIAAC2IhTAAIAAgpQgSAYgcANQgdAMgkAAQhOAAgrgugAplFhQgpgVgWgoQgVgnAAg4QgBg2AXgoQAXgpApgVQApgVA5AAQA5AAAqAVQAqAVAVAoQAXAoAAA3QAAA2gXAoQgWAogqAWQgpAVg5AAQg6AAgqgVgApDB2QgVAZAAA2QAAA2AVAZQAVAaAtgBQAtABAWgaQAUgZAAg2QAAg2gUgZQgWgZgtAAQgtAAgVAZgAOkFuIAAlTIBdAAIAAB2IBeAAQA6AAAgAdQAfAdAAA0QAAA1gfAeQggAcg6AAgAQBElIBQAAQAWAAAJgJQAKgKAAgVQAAgVgKgJQgJgJgWAAIhQAAgAMEFuIAAiHIiIAAIAACHIhbAAIAAlTIBbAAIAAB+ICIAAIAAh+IBdAAIAAFTgAuSFuIg3jTIg4DTIhoAAIhilTIBhAAIA6DqIA7jqIBaAAIA6DqIA7jqIBdAAIhhFTgAiggTIAAgqIA3AAQAFAAACgFIAIgWIhfjSIA3AAIBBCbIA5ibIAzAAIhhD1QgHATgLAHQgKAIgTAAgAyXhsQgggQgQggQgQggAAgsQAAgrARghQAQgfAfgRQAegRArAAQA5AAAiAdQAkAdAEA0Ig2AAQgEgjgUgQQgTgQgiAAQgrAAgUAXQgTAYAAAzQAAAzATAYQAUAYArAAQAigBATgQQAUgQAEgjIA2AAQgDAjgRAZQgRAYgdAOQgcAMglAAQgrABgegSgABWh4QgdgbABgyQgBgyAdgbQAcgcAzAAQArAAAcAVQAbAVADAnIgxAAQgEgWgNgKQgNgLgXAAQgaAAgOAMQgOAMgDAXIBQAAIAAAjIhRAAQADAbAOANQAOALAbABQAXAAANgLQANgLAEgVIAxAAQgDAngbAVQgbAWgsgBQgzAAgcgcgApphrQgTgPAAgbQAAgeAVgPQAWgOAvgFIAggFQALgBAGgGQAFgEABgIQgBgNgJgHQgMgGgVAAQgXAAgLAHQgLAIgBAQIgvAAQACghAagSQAZgTAoAAQAqAAAXATQAYASAAAjIAABXQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIARAAIAAAqIgeAAQgRAAgIgJQgJgIAAgRQgLARgUALQgTAKgbAAQgjAAgTgPgAoai2QgTACgKAEQgKADgEAGQgEAFAAAIQAAAYAgAAQAbAAASgQQARgPABgeIAAgDQgSAJgeADgAj0hgIhAhdIgdAbIAABCIgzAAIAAjKIAzAAIAABSIBWhSIA9AAIhSBMIBZB+gArVhgIAAiPIg2CPIgsAAIg0iOIAACOIgyAAIAAjKIBIAAIA2CRIA1iRIBGAAIAADKgAGTjDIAAgqIDoAAIAAAqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-124,-37.4,248,74.8), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#296941").s().p("ANrGIIAAg3IieAAIAAA3IhEAAIAAhyIAdAAQAHgvAAhnIAAgvIDhAAIAADFIAgAAIAABygALsDbQgDAmgDAXIBkAAIAAiOIhbAAQgBArgCAmgAi4FHQgfgQgQgeQgRgeAAgqQAAgpARgeQARgeAfgQQAggRAqAAQAsAAAfAQQAfAQAQAeQAQAeABAqQgBApgQAeQgRAegfARQgfAQgrAAQgrAAgggQgAifCVQgQATAAApQAAApAQATQAQATAiAAQAiAAAQgTQAQgTAAgpQAAgpgQgTQgQgTgiAAQgiAAgQATgAR/FRIAAiiIhnCiIhIAAIAAkAIBFAAIAACdIBjidIBMAAIAAEAgAI1FRIgTgvIhsAAIgSAvIhHAAIBokAIBSAAIBnEAgAIPDtIgjhcIgiBcIBFAAgAD3FRIAAhmIhmAAIAABmIhGAAIAAkAIBGAAIAABfIBmAAIAAhfIBGAAIAAEAgAlqFRIAAiuIg7CuIg8AAIg7iuIAACuIhDAAIAAkAIBiAAIA7CtIA7itIBgAAIAAEAgArcFRIAAiiIhnCiIhIAAIAAkAIBEAAIAACdIBkidIBMAAIAAEAgAwHFRIAAjGIhMAAQgBBPgDAjQgDAkgJATQgIAQgOAGQgOAHgYAAIgkAAIAAg7IAaAAQAFAAADgDQADgDABgEQAEgTACgfIABiJIDVAAIAAEAgAkPhIQgggPgQgfQgRgeAAgpQAAgpARgeQARgfAfgQQAfgQAsAAQArAAAgAQQAeAQARAeQAQAeAAAqQAAApgRAeQgQAegfAQQggAQgqAAQgsAAgfgQgAj3j5QgPATgBApQABAoAPATQAQATAjAAQAhAAAQgTQAQgTABgoQgBgpgQgTQgQgTghAAQgjAAgQATgAx3hIQgfgQgQgeQgQgeAAgpQAAgpAQgeQARgeAggRQAegQAqAAQAmAAAcANQAdANARAYQAQAZACAhIhKAAQgDgbgOgNQgNgNgaAAQgiAAgPATQgOATAAApQAAApAOASQAPATAiAAQAaAAANgNQAOgMADgcIBJAAQgBAhgRAYQgQAZgdANQgeANgkAAQgrAAgfgQgALKg9IAAiiIhnCiIhJAAIAAkAIBFAAIAACdIBkidIBMAAIAAEAgAERg9IAAg8IA5AAQAGAAABgEIABgBIhzi/IBQAAIBHCFIA5iFIBKAAIhpDdQgJASgNAIQgOAJgVAAgAgMg9IAAkAIDVAAIAAA4IiRAAIAAAqIBNAAQApAAAWAVQAXAVAAAlQAAAlgXAVQgWAVgpAAgAA4hzIBCgBQAOAAAGgGQAGgGAAgOQAAgNgGgGQgGgHgOAAIhCAAgApXg9IAAkAICPAAQArAAAYAWQAYAWAAAoQAAAngYAWQgYAWgrAAIhJAAIAABZgAoRjKIA/AAQAPAAAIgHQAHgHAAgQQAAgPgHgHQgIgHgPAAIg/AAgArUg9IAAjGIhmAAIAADGIhFAAIAAkAIDxAAIAAEAgAJelbQgTgPgEgdIA3AAQABALAFAEQAFAEAMAAQALAAAFgEQAFgEABgLIA3AAQgDAdgUAPQgUAOgiAAQgjAAgUgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-122,-39.2,244,78.4), null);


(lib.shadow_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-125,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(-125,-75,250,150), null);


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


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;
	this.instance.setTransform(-39,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(-39,-31,78,62), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-57,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-57,-52,114,100), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-21,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-21,-19,42,38), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-22,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-22,-22,44,44), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-39,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-39,-41,78,82), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-72,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-72,-114,144,228), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F5B6").s().p("AHzBZQgNgJgDgRIAdAAQAEAOAWAAQARAAAFgGQAIgGAAgMIAAgQQgNAQgYAAQgYgBgOgOQgNgPAAgZQAAgbANgPQAOgOAYAAQALAAALAEQAKAGAFAHIAAgOIAbAAIAABrQAAAUgOAOQgOANgegBQgZAAgNgJgAIDgbQgHAIAAASQAAAPAHAJQAIAJAPAAQAPAAAHgJQAIgJAAgPQAAgSgIgIQgGgJgQAAQgPAAgIAJgAscBWIAAggIhnAAIAAAgIgbAAIAAg5IAPAAQAFgYAAhGIAAgcIB5AAIAAB6IARAAIAAA5gAtwgJQgCAcgDAKIBGAAIAAhjIhAAAgAM0AwQgKgJAAgOQAAgRALgIQALgGAagDIASgCQAJgDABgCQADgCAAgEQAAgIgGgDQgHgDgLAAQgNAAgFADQgHAFAAAJIgaAAQACgTAOgJQANgLAWAAQAYAAAMALQANAJAAATIAAAvIABADIADABIAJAAIAAAWIgRAAQgJAAgEgFQgFgEAAgKQgGAKgLAGQgLAFgPAAQgSABgLgJgANgAHQgKAAgHADQgDABgFAEQgBADgBAFQAAANATgBQAOABAKgJQAJgJABgQIAAgCQgNAGgNABgAK8AzQgLgGgFgKQgGgKAAgPIAAhBIAdAAIAAA/QAAAOAGAGQAGAGAMAAQAQAAAGgHQAIgIAAgQIAAg6IAcAAIAABtIgbAAIAAgQQgFAJgLAFQgLAFgMgBQgNAAgKgFgAFnApQgPgPAAgaQAAgcAPgPQAPgPAdAAQAbAAAPAPQARAPgBAcQABAagRAPQgPAPgbAAQgbAAgRgPgAF7gbQgHAJAAASQAAARAHAJQAIAJAQAAQAOAAAJgJQAHgJAAgRQAAgSgHgJQgJgJgOAAQgRAAgHAJgAgGAwQgKgJAAgOQAAgRALgIQALgGAagDIASgCQAIgCABgDQADgCAAgEQAAgIgGgDQgGgDgMAAQgMAAgGADQgFAFgCAJIgZAAQACgTAMgJQAPgLAWAAQAWAAANALQANAJAAATIAAAvIABADIACABIAKAAIAAAWIgRAAQgJAAgEgFQgFgGAAgIQgHALgKAFQgKAFgQAAQgSABgKgJgAAkAHQgJAAgHADQgEABgDAEQgCADAAAFQAAANARgBQAOABALgJQAJgJAAgQIAAgCQgOAGgMABgAoBAwQgKgJAAgOQAAgRALgIQAMgGAZgDIASgCQAIgDABgCQADgCAAgEQABgIgGgDQgHgDgLAAQgNAAgFADQgGAFgBAJIgaAAQACgTAOgJQANgLAWAAQAYAAAMALQANAJgBATIAAAvIABADIADABIAKAAIAAAWIgRAAQgJAAgFgFQgEgEgBgKQgHALgJAFQgMAFgPAAQgRABgLgJgAnWAHQgKAAgFADQgFABgEAEQgCADAAAFQAAANASgBQAPABAJgJQAKgJAAgQIAAgCQgNAGgNABgArmApQgPgPAAgaQAAgSAHgNQAGgNAOgHQANgHAQAAQAcAAAPAPQAPAPAAAbIAAAJIhYAAQACAbAeAAQAJAAAGgDQAHgDADgGIAbAAQgDAPgOAKQgQAJgTgBQgbAAgQgPgAqegLQgDgNgHgGQgHgHgOABQgNgBgHAHQgIAGgCANIA9AAIAAAAgAJuA2IAAggIAgAAIAAAggAEMA2IgWhOIgVBOIggAAIgghtIAcAAIAWBRIAXhRIAbAAIAWBQIAXhQIAaAAIggBtgAhAA2IAAgtIgzAAIAAAtIgcAAIAAhtIAcAAIAAArIAzAAIAAgrIAcAAIAABtgAj9A2IAAhtIAcAAIAABtgAk4A2IAAhXIgnAAQAAAhgCARQgCAOgEAKQgCAHgHAEQgGACgKAAIgOAAIAAgXIAMAAQAEAAAAgDQADgFABgPIABg/IBdAAIAABtgApTA2IAAhXIgpAAIAAgWIBsAAIAAAWIgnAAIAABXgAj+hJIAAgZIAeAAIAAAZg");
	this.shape.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#296941").s().p("AvYERQhlAAhIhHQhIhIAAhmIAAg2QAAhmBIhIQBHhIBmAAIewAAQBlAABJBIQBIBIAABmIAAA2QAABmhIBIQhJBHhlAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-123,-27.3,246,54.6), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img4m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4_1();
	this.instance.parent = this;
	this.instance.setTransform(21,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10,y:29},60,cjs.Ease.quadInOut).to({rotation:0,y:19},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,38);


(lib.img3m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3_1();
	this.instance.parent = this;
	this.instance.setTransform(22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,y:12},50,cjs.Ease.quadInOut).to({rotation:0,y:22},50,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.img2m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2_1();
	this.instance.parent = this;
	this.instance.setTransform(39,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,y:51},60,cjs.Ease.quadInOut).to({rotation:0,y:41},60,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,82);


(lib._img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img4
	this.instance = new lib.img4m("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80,-116,1,1,0,0,0,21,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(241));

	// img3
	this.instance_1 = new lib.img3m("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41,-114,1,1,0,0,0,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(241));

	// img2
	this.instance_2 = new lib.img2m("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-43,-222,1,1,0,0,0,39,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(241));

	// img6
	this.instance_3 = new lib.img6_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(241));

	// img1
	this.instance_4 = new lib.img1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(7,-41,1,1,-5,0,0,-23.4,112);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:0.1},30,cjs.Ease.quadInOut).to({rotation:-5,x:7},30,cjs.Ease.quadInOut).to({rotation:0,x:0.1},30,cjs.Ease.quadInOut).to({rotation:-5,x:7},30,cjs.Ease.quadInOut).to({rotation:0,x:0.1},30,cjs.Ease.quadInOut).to({rotation:-5,x:7},30,cjs.Ease.quadInOut).to({rotation:0,x:0.1},30,cjs.Ease.quadInOut).to({rotation:-5,x:7},30,cjs.Ease.quadInOut).wait(1));

	// img5
	this.instance_5 = new lib.img5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13.5,51.5,1,1,0,0,0,14,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:13.8,regY:48.3,rotation:-4,x:13.4,y:51.6},30,cjs.Ease.quadInOut).to({regX:14,regY:48,rotation:0,x:13.5,y:51.5},30,cjs.Ease.quadInOut).to({regX:13.8,regY:48.3,rotation:-4,x:13.4,y:51.6},30,cjs.Ease.quadInOut).to({regX:14,regY:48,rotation:0,x:13.5,y:51.5},30,cjs.Ease.quadInOut).to({regX:13.8,regY:48.3,rotation:-4,x:13.4,y:51.6},30,cjs.Ease.quadInOut).to({regX:14,regY:48,rotation:0,x:13.5,y:51.5},30,cjs.Ease.quadInOut).to({regX:13.8,regY:48.3,rotation:-4,x:13.4,y:51.6},30,cjs.Ease.quadInOut).to({regX:14,regY:48,rotation:0,x:13.5,y:51.5},30,cjs.Ease.quadInOut).wait(1));

	// shadow
	this.instance_6 = new lib.shadow_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-274.4,250,376);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		if(num >= 4){
			this.stop();
			this.wings.stop();
		}else{
			num++;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(66));

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
	this.instance_2.setTransform(277,236.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:0},15,cjs.Ease.quartOut).wait(50).to({x:-277},15,cjs.Ease.quartIn).to({_off:true},1).wait(134));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(274,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0},15,cjs.Ease.quartOut).wait(209).to({x:-275},15,cjs.Ease.quartIn).wait(1));

	// img
	this.instance_4 = new lib._img("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-269,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-16,mode:"synched",loop:false},15,cjs.Ease.quartOut).wait(209).to({startPosition:209},0).to({x:284,startPosition:224},15,cjs.Ease.quartIn).wait(1));

	// bgImg
	this.instance_5 = new lib.bgImg_1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402,-300,798,600);


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
p.nominalBounds = new cjs.Rectangle(-102,299,798,602);
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