(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boxes1 = function() {
	this.initialize(img.boxes1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,306);


(lib.boxes2 = function() {
	this.initialize(img.boxes2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,306);


(lib.boxes3 = function() {
	this.initialize(img.boxes3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,306);


(lib.boxes4 = function() {
	this.initialize(img.boxes4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,306);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-114.3,-33.2,228.7,66.4), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj+BZIAPgfQAKAGAIAAQAKAAAFgKIg7iVIAtAAIAjBlIAghlIAsAAIg5CYQgJAYgLAJQgLAJgTAAQgVAAgRgKgAk+BZIAAgjIhdAAIgEAjIgkAAIAAhIIAQAAQAPgcAAhHIAAgNIB7AAIAABwIAUAAIgFBIgAl8g3QAAAvgLAZIAzAAIAAhMIgoAAgAC3AkQgXgWAAgiQAAghAWgWQAVgXAgAAQAjAAATAYQASAXABAiIgBAMIhoAAQACAMAKAJQAKAHAOAAQAUAAAQgPIAZAVQgWAcgnAAQgiAAgWgVgAEKggQgCgOgIgJQgIgJgNAAQgOAAgIAJQgJAJgCAOIBAAAIAAAAgApZAjQgXgWAAghQAAggAYgXQAXgXAiAAQAkAAAXAXQAWAXAAAgQABAfgYAYQgXAWgjAAQgiAAgYgWgAo7gxQgLALAAASQAAASALAKQAMANAQAAQASAAAKgMQALgLAAgSQAAgRgLgMQgLgMgRAAQgSAAgKAMgAL3A2IAAhXIg7BXIgnAAIAAiVIApAAIAABXIA6hXIAoAAIAACVgAJWA2Igog4IgTAUIAAAkIgqAAIAAiVIAqAAIAAA9IA1g9IAyAAIg3A9IA+BYgAGkA2IAAg1QgTAKgVAAQgYAAgNgLQgQgNABgXIAAg7IArAAIAAAvQAAAYAUAAQAQAAANgHIAAhAIArAAIAACVgAhXA2IAAiVIAqAAIAABwIAwAAIAAhwIAqAAIAABwIAwAAIAAhwIArAAIAACVgArCA2IAAhxIgzAAIAABxIgqAAIAAiVICIAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-80,-9.9,160.1,19.9), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AL2BSQgYgXAAghQAAggAYgXQAYgWAiAAQAjAAAXAWQAXAXAAAgQAAAggXAYQgXAWgkAAQgiAAgXgWgAMTgDQgKALAAASQgBARAMAMQALANARAAQASAAAKgMQALgNAAgRQAAgRgLgMQgLgMgSABQgQgBgMAMgABABSQgYgYAAggQAAggAYgXQAYgWAiAAQAjAAAXAWQAXAXAAAgQAAAggYAYQgWAWgkAAQgiAAgXgWgABdgDQgKALAAASQAAARALAMQALANARAAQARAAALgMQALgNAAgRQAAgSgLgLQgLgMgSABQgQgBgMAMgAuHBSQgYgXAAghQAAggAYgXQAYgWAiAAQAjAAAXAWQAXAXAAAgQAAAggXAYQgYAWgjAAQgjAAgWgWgAtqgDQgKALgBASQABAQAKANQAMANARAAQASAAALgMQAKgNAAgRQAAgSgLgLQgLgMgSABQgRgBgLAMgARDBlIAAiWIAqAAIAACWgAOcBlIAAiWIBTAAQAWAAAOAKQAOALAAARQAAAWgYALQAeAJAAAcQAAAUgPAKQgPAMgbAAgAPHBEIAhAAQAUgBAAgPQAAgOgVAAIggAAgAPHALIAdAAQAJAAAFgFQAEgEAAgGQABgFgFgEQgEgEgJAAIgeAAgAKOBlIAAg6Ig0AAIAAA6IgrAAIAAiWIArAAIAAA5IA0AAIAAg5IArAAIAACWgAHbBlIAAhYIg6BYIgpAAIAAiWIAqAAIAABXIA6hXIApAAIAACWgAEEBlIAAhxIgtAAIAAglICFAAIAAAlIgtAAIAABxgAgNBlIgpg6IgTAWIAAAkIgqAAIAAiWIAqAAIAAA9IA2g9IAwAAIg2A9IA9BZgAjNBlIAAiWIAqAAIAACWgAkmBlIAAg6Ig1AAIAAA6IgrAAIAAiWIArAAIAAA5IA1AAIAAg5IAqAAIAACWgAo6BlIAAiWIArAAIAACWgArgBlIAAiWIBSAAQAXAAAOAKQANALAAARQAAAWgYALQAdAJABAcQgBAUgPAKQgOAMgaAAgAq3BEIAiAAQAUgBgBgPQABgOgVAAIghAAgAq3ALIAfAAQAIAAAFgFQAFgEAAgGQAAgFgFgEQgEgEgJAAIgfAAgAvzBlIAAhPIhQAAIAABPIgrAAIAAjDIArAAIAABNIBQAAIAAhNIArAAIAADDgARChBIAAgmIAtAAIAAAmgAjOhBIAAgmIAtAAIAAAmgAo7hBIAAgmIAtAAIAAAmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-113.4,-10.4,226.9,20.8), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFC").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGFDAIAAgjIh0AAIAAiWIAqAAIAABxIA0AAIAAhxIArAAIAABxIAUAAIgGBIgAHWCKQgVgWAAgiQAAggAUgYQAWgWAfAAQAkAAATAXQASAXAAAjIAAALIhoAAQACAPAKAHQAKAIAPAAQATAAARgQIAYAWQgXAcgmAAQghAAgYgWgAIqBGQgBgPgJgIQgIgJgOAAQgMAAgJAIQgIAJgDAPIBAAAIAAAAgAMSCdIAAgtIAuAAIAAAtgAK/CdIAAgtIAtAAIAAAtgAJsCdIAAgtIAtAAIAAAtgABJCcIiZjYIAADYIhUAAIAAkQIAnhLIBPAAIB3CqIAAiqIBWAAIAAFbgAmLCcIAAhnIh/j0IBxAAIBJCYIBKiYIBwAAIiAD0IAABngAs+CcIAAhTICrizIiiAAIAAhVIERAAIApBLIi0C8IC0AAIAABUg");
	this.shape.setTransform(29.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-53.7,-15.6,166.3,38.4), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFC").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003B5E").s().p("AitA5IAEgJQAEADAHAAQAFAAAEgDQAEgEACgHIghhHIAMAAIAaA8IAYg8IALAAIgeBKQgFALgGAFQgGAEgHAAQgJAAgHgDgAD+AmIAAgPIAMAAIAAAPgADZAmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgABtAmIAAg+IgaAAIAAgKIA/AAIAAAKIgaAAIAAA+gAA3AmIAAg5IgrA5IgLAAIAAhIIALAAIAAA5IArg5IALAAIAABIgAgkAmIAAg+IgpAAIAAA+IgKAAIAAhIIA+AAIAABIgAjEAmIgmgvIgVAUIAAAbIgKAAIAAhhIAKAAIAAA6IA4g6IAPAAIgqArIArA2gAEBAKIgDhFIAMAAIgDBFg");
	this.shape.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-26.6,-4.7,53.3,12.1), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFC").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDFDFC").s().p("AuKDIQhSAAg6g6Qg7g5AAhTIAAgCQAAhSA7g6QA6g7BSAAIcVAAQBSAAA7A7QA6A6AABSIAAACQAABSg6A6Qg7A6hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-110.6,-20,221.2,40), null);


(lib.boxes4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes4();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes4_1, new cjs.Rectangle(-129,-153,257,306), null);


(lib.boxes3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes3();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes3_1, new cjs.Rectangle(-129,-153,258,306), null);


(lib.boxes2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes2();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes2_1, new cjs.Rectangle(-129,-153,258,306), null);


(lib.box3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgPNFQkbgCiOhzQiDhriRjFQhIhigvhOIgPiiQgMi+AWiTQANhYBWhhQBUhgCGhUQEsi8FRgWQFCgWDFEAQCkDUA0FnQAoEUjBEBQhKBhhgBOQhTBDhFAdQiVA+jmAAIgKAAg");
	mask.setTransform(51.1,-85.5);

	// Слой_1
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3, new cjs.Rectangle(-34.4,-153,163.4,151.2), null);


(lib.box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOHLQj8hdjjiKQhxhFg/gyQgagfgQg0QghhnAyhnQBQiiA1hIQBThvBPAFQBZADBxAMQDiAZB5AyQDQBXBtBHQCzB2A7CVQA4CMhmCmQgzBTg/A3QgmArhaAYQg7APhEAAQiIAAiog+g");
	mask.setTransform(-64.5,-8.5);

	// Слой_1
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2, new cjs.Rectangle(-129,-60.5,137.1,104.2), null);


(lib.box1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar1JsIkvqtQBjhFCGhSQEJilClhEQC2hLGzg3QDbgbC3gNICLH0IEOFJIAfGag");
	mask.setTransform(26.9,97);

	// Слой_1
	this.instance = new lib.boxes1();
	this.instance.parent = this;
	this.instance.setTransform(-129,-153);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1, new cjs.Rectangle(-79.3,35.1,208.3,118), null);


(lib.bg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#13A3DB","#26BFE7","#FFFFFF","#1CA5B1"],[0,1,1,1],0,300,0,-299.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg5, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1395CC","#27B1DA","#FFFFFF","#1CA5B1"],[0,1,1,1],0,300,0,-299.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg4, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0F8EC6","#27B1DA","#FFFFFF","#1CA5B1"],[0,1,1,1],0,300,0,-299.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg3, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#157A84","#15B5C6","#26B1DA","#FFFFFF","#1CA5B1"],[0,0.482,1,1,1],0,300,0,-299.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#157A85","#1CA5B1","#FFFFFF","#1CA5B1"],[0,1,1,1],0,300,0,-299.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-150,-300,300,600), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:100.6},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-100.5},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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


(lib.boxes1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-270.8,1,1,0,0,0,-11.5,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:144.2},15,cjs.Ease.cubicOut).wait(55).to({alpha:0},5).wait(60));

	// box2
	this.instance_1 = new lib.box2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-305.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).wait(115));

	// box3
	this.instance_2 = new lib.box3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-260.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).wait(45).to({alpha:0},5).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,-568,262,312);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(315).to({_off:false},0).to({alpha:1},14).wait(1));

	// urText
	this.instance_1 = new lib.urText();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.4,-10.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(255).to({_off:false},0).to({alpha:1},15).wait(60));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("A0pCWIAAkrMApTAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:0.8,y:181.2}).wait(246).to({graphics:null,x:0,y:0}).wait(74));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,206.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({y:185.9},10,cjs.Ease.cubicOut).wait(215).to({alpha:0},15).to({_off:true},1).wait(74));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("A0pCWIAAkrMApTAAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:0.8,y:141}).wait(246).to({graphics:null,x:0,y:0}).wait(74));

	// t1
	this.instance_3 = new lib.t1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,167);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:145.3},10,cjs.Ease.cubicOut).wait(220).to({alpha:0},15).to({_off:true},1).wait(74));

	// logo
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-55.8,-244.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},10).wait(230).to({alpha:0},15).to({_off:true},1).wait(74));

	// btn
	this.instance_5 = new lib.btn("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.6,240,1.05,1.05,0,0,0,-0.6,0.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(225).to({startPosition:20},0).to({alpha:0},15).to({_off:true},1).wait(74));

	// boxes4
	this.instance_6 = new lib.boxes4_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(2.5,-37.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).to({alpha:1},15).wait(30).to({alpha:0},15).to({_off:true},1).wait(74));

	// boxes3
	this.instance_7 = new lib.boxes3_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.5,-37.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150).to({_off:false},0).to({alpha:1},15).wait(40).to({alpha:0},5).to({_off:true},1).wait(119));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_105 = new cjs.Graphics().p("Ak5IeQi+hWh4hfQiTh0gShxQgTh/BHjpQBJjuBQgzQA2ggBHgZQCNgyBUAlQDaBaCXBHQEfCFBhBdQAiAhBQBDQBDA5AdAeQBYBegkBeQg+CjgrBBQhTB6iEAfQi6ArjDAFIghAAQjeAAiLg+g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(105).to({graphics:mask_2_graphics_105,x:-58.6,y:-47.2}).wait(16).to({graphics:null,x:0,y:0}).wait(209));

	// boxes2
	this.instance_8 = new lib.boxes2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2.5,-37.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).to({alpha:1},15).to({_off:true},1).wait(209));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_60 = new cjs.Graphics().p("AygdSIhztuIgUlyQAAgECchgQC0hvCBhAQB/g+C8hJQBdgkBDgYQgGhegThnQgnjQhCg2QhRhChbhjQhghnhNhrQhBhbgTiKQgJhFADg0IgIiLQgFiZAShJQAXhaCAhXQCKheFaiaQEpiEGzCpQDaBUCfBtMAIDAscIn5JsQAAgB/PgBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_3_graphics_60,x:61,y:-21.2}).wait(61).to({graphics:null,x:0,y:0}).wait(209));

	// boxes2
	this.instance_9 = new lib.boxes2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2.5,-37.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({alpha:1},15).wait(85).to({alpha:0},5).to({_off:true},1).wait(164));

	// boxes1
	this.instance_10 = new lib.boxes1_1("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(3,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({mode:"single",startPosition:75},0).wait(40).to({startPosition:75},0).to({alpha:0},5).to({_off:true},1).wait(209));

	// Слой_19
	this.instance_11 = new lib.bg5();
	this.instance_11.parent = this;
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(195).to({_off:false},0).to({alpha:1},15).wait(120));

	// bg
	this.instance_12 = new lib.bg4();
	this.instance_12.parent = this;
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150).to({_off:false},0).to({alpha:1},15).to({_off:true},46).wait(119));

	// bg
	this.instance_13 = new lib.bg3();
	this.instance_13.parent = this;
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(105).to({_off:false},0).to({alpha:1},15).to({_off:true},45).wait(165));

	// bg
	this.instance_14 = new lib.bg2();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).to({alpha:1},15).to({_off:true},45).wait(210));

	// bg
	this.instance_15 = new lib.bg1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},75).wait(255));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-416.9,300,717);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-5,300,905);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boxes1.png", id:"boxes1"},
		{src:"images/boxes2.png", id:"boxes2"},
		{src:"images/boxes3.png", id:"boxes3"},
		{src:"images/boxes4.png", id:"boxes4"}
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