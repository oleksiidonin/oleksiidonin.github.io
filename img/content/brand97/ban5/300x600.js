(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.billet = function() {
	this.initialize(img.billet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,62);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,338);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,314);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,76);


(lib.hero1 = function() {
	this.initialize(img.hero1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,320);


(lib.hero2 = function() {
	this.initialize(img.hero2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,293);


(lib.part = function() {
	this.initialize(img.part);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,25);


(lib.plashka = function() {
	this.initialize(img.plashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,170);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,88);// helper functions:

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


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.txt();
	this.instance.parent = this;
	this.instance.setTransform(-100,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(-100,-44,200,88), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzCnIAKAAIgDhdIgKABIgBgUIAmgBIABAPQAKgQARgBQAQgBAKANQALANAAAUQABAVgMANQgMANgUAAQgKAAgJgDIABAZIAKgBIABATIgxACgABmBKQgHAAgEAFQgFAGAAAFIABAgQAIACAIAAQAIgBAGgHQAGgGgBgMQAAgKgGgIQgFgGgIAAIgBAAgAHdCkIANgOQAEADAIgBQAHAAAFgPIADgGIghhGIgLAAIgBgTIAygBIAAASIgLABIASAnIAPgoIgLAAIAAgTIAxgBIAAATIgLAAIgiBXQgLAcgVAAIgCAAQgQAAgKgJgAr3CYIAMgBIAVgfQgOgCgJgKQgIgKAAgOQgBgSALgLQAKgLASgBIBEgBIAAATIgJAAIADBYIAJAAIABATIgyABIAAgTIAJAAIgBgeIgHAAIgTAeIAIAAIABATIg1ACgArKBDQgGAAgEAEQgDAFAAAGQAAAHAEAEQAEAFAGgBIAYgBIgBgegAqACUIAKAAIgBg0IgKAAIgBgTIAwgBIABATIgKAAIAAAQIAOgLIAFgGIgEABIgBgTIAxgCIAAATIgKAAIgSAUIAXAgIAKAAIABASIgxADIgBgTIAJgBIgLgRIgQAKIABAIIAKAAIAAATIgwABgAoRCQIALAAIgCgzIgKAAIgBgUIAmgBIADBHIAKAAIABATIgxABgAnOCWQgNgMgBgVQgBgWANgMQANgOAWAAQAUgBAOAJIABAWIgYABIAAgLIgJAAQgKACgGAGQgFAIAAALQABAMAGAGQAFAHALAAQAMgBAGgHIAPAPQgNAOgWAAIgDAAQgTAAgNgMgAlrCMIAKgBIgBgyIgHAAIABAKIgYABIgBgfIBYgDIABAfIgXABIgBgKIgGAAIACAyIAKAAIAAATIgwACgAkdCJIAKgBIgCgzIgKAAIAAgTIAwgCIABAUIgKAAIAAAHIAVAAQAOgBAJAJQAJAIABAPQAAAOgIAIQgJAKgOAAIg7ACgAj3CFIAOAAQAFAAADgDQADgDAAgEQAAgEgEgEQgDgDgEABIgOAAgAiHCEIAKAAIgCg0IgKAAIgBgTIBPgCIABAfIgYABIAAgLIgRABIACAyIAKAAIABATIgwABgAgoCNQgIgHgBgMQgBgNAMgJQALgJAUgBIAMAAIAAgBQAAgHgEgDQgDgCgHAAQgIgBgGADIAAAJIgYABIAAgWQAPgKAVgCQASAAANAIQANAJAAAPIACAoIAKgBIAAATIgmACIAAgMQgJANgQABIgBAAQgMAAgJgIgAgQBuQgFADAAAFQAAAEADADQAFADAEgBQAHAAAEgFQAFgHgBgIIgJgBQgJABgEADgACoCHQgJgIAAgMQgBgNAMgJQAMgJASAAIAOAAIAAgCQAAgGgEgDQgFgDgGAAQgHAAgIACIABAJIgYABIgBgWQAPgKAWgBQATgBANAJQANAJAAAOIACApIAKgBIAAATIgmABIAAgLQgKANgQAAQgOAAgIgHgADABnQgGAEAAAFQABAFADABQADADAGAAQAHAAAFgGQAEgHAAgIIgKgBQgJABgEADgAEFB4IAKAAIgCg0IgKAAIAAgTIAwgCIABATIgKABIAAAOIAhgBIgBgOIgKAAIgBgUIAxgBIAAATIgKAAIACA0IAKAAIABATIgxABIAAgSIAKgBIgBgPIggABIAAAPIAKAAIABATIgwACgAGQBzIAKAAIgCgyIgGABIAAAKIgYAAIgBgfIBZgDIABAfIgYABIAAgKIgHAAIACAyIAKAAIABATIgxABgAJNBtIAKAAIgCg0IgKAAIgBgSIAxgCIAAASIgKABIABAOIAOAAQACgPAMgLQAMgKARgBQAUAAANAMQANANABAVQABAVgNANQgMANgUABQgRAAgNgJQgMgKgDgRIgPABIABAQIAKAAIABASIgxADgAKgA+QgEAIAAALQABAMAEAGQAGAHAHAAQAHgBAFgHQAFgHgBgMQAAgKgGgIQgEgGgIgBQgHABgFAHgALqBgIAcgBIABAcIgcABgALngCIAcAAIACBTIgcABgAoKAlIAcgBIABAWIgcABgAkvgBIAKgBIgDhcIgLABIAAgTIAmgCIAAAOQAKgPASgBQAPAAALANQAKALABAVQABAVgMANQgNANgUABQgLAAgHgDIABAYIAKAAIABARIgxACgAj8heQgHAAgEAFQgFAGAAAGIABAfQAIACAIgBQAIABAGgIQAFgHAAgLQAAgKgGgIQgFgGgIAAIgBAAgAs9gZIAJgBIgDhXIgJAAIgBgTIBlgDIABAgIgZABIAAgJIgkABIABAbIAygBIABAXIgyACIABAdIAmgBIgBgJIAZgBIABAfIhnAEgArLgdIAKAAIgCg0IgKAAIAAgTIAwgBIAAASIgKABIABAQIAOgKIAEgHIgDAAIgBgSIAwgCIABATIgKABIgTATIAXAhIALgBIAAATIgwACIgBgTIAIAAIgKgSIgQAKIAAAIIAKAAIABATIgwABgApRgZQgOgMgBgVQAAgUANgOQAMgNAWgBQAVAAAOAHIAAAYIgXAAIgBgKIgIAAQgKAAgGAIQgGAHAAALQABAMAGAGQAHAHAKAAQAMgBAFgGIAQAOQgMANgXABIgDAAQgUAAgMgMgAoDgjIAKAAIgCg0IgKAAIgBgTIBtgEIABATIgLABIACA0IAKAAIABATIgwABIgBgTIAKAAIgCgyIggABIACAyIAKgBIABATIgxACgAmCgfQgOgMgBgWQgBgTAMgPQAMgNAVAAQAUgBAMAMQANANABAVIAAAJIg+ACQADAHAGAEQAHAFAJAAQANgBAGgHIAQAOQgNAOgXABIgDAAQgUAAgOgMgAlvhWQgFAEgBAIIAigBQgBgIgEgEQgFgEgHgBQgFAAgGAGgAiuguIAKAAIgCgyIgGABIAAAKIgXAAIgBgfIBYgDIABAfIgYABIAAgKIgHAAIACAyIAKAAIABASIgxACgAgqgsIALgLIAIADIALABQAHAAAFgDQADgCAAgFQAAgCgDgDQgDgCgGAAIgPABIAAgTIAKgBQAGAAAEgDQAEgCAAgDQAAgDgEgDQgEgCgFAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAIAAAJIgYABIgBgXQANgGATgCQAPAAALAGQAKAHABALQAAAHgEAFQgDAFgIAEQAJACAFAGQAFAHAAAIQABALgLAHQgLAHgRABIgDAAQgTAAgNgOgABbg2IAKgBIgBg0IgLABIAAgTIAwgCIABATIgKABIAAAPIAhgBIgBgQIgKABIAAgTIAwgBIABASIgLABIACA0IAKAAIABATIgwABIgBgTIAKAAIAAgRIghABIAAARIALgBIAAATIgwACgADaguQgIgHgBgMQAAgOALgJQALgIAUgBIANAAIAAgCQAAgGgEgDQgEgDgHABQgGAAgIABIAAAKIgYAAIAAgVQAOgKAWgBQAUgBAMAIQANAJABAOIABAoIAKAAIABATIgnACIAAgMQgJANgRABQgNAAgJgIgADyhNQgFADAAAGQAAAEADACQADADAGAAQAHAAAFgHQAEgGAAgJIgKgBQgIAAgFAFgAFCg2QgOgMAAgVQgBgVANgNQANgNAWgBQAUgBAOAIIABAYIgYAAIAAgLIgJABQgKAAgGAHQgGAJABAKQABAMAGAGQAGAHAKAAQAMgBAGgGIAPAOQgMANgXABIgDAAQgTAAgNgMgAGQhAIAKAAIgBg0IgLAAIAAgTIAmgBIACBHIALAAIAAASIgwACgAHIhBIAKgBIgBg0IgLAAIAAgTIAwgBIABATIgKAAIAAAPIAhgBIgBgPIgKABIAAgTIAwgCIABATIgLABIACA0IAKgBIABATIgwACIgBgTIAKgBIAAgQIghABIAAARIALgBIAAATIgwABgAI/hGIAKAAIgBgzIgLAAIAAgTIAwgCIABATIgKABIAAAOIAhgBIgBgPIgKABIAAgUIAwgBIABATIgLAAIACA0IAKAAIABATIgwABIgBgSIAKgBIAAgQIghACIAAAPIALAAIAAATIgwACgAKzhJIAJAAIANgRQgIgCgGgIQgEgFgBgKQAAgNAIgJQAKgIAOAAIA8gCIAAATIgKAAIACA1IAKgBIABATIgxABIAAgSIAKgBIgBgPIgIAAIgLAQIAIAAIABASIgvACgALdh8QgEAAgEADQgDACAAADQAAAEADACQAEABAFAAIAPAAIgBgQgAMlhVIAcgBIABAcIgdABgAMhi3IAcgBIADBUIgcABgAGXirIAcgBIAAAVIgcABg");
	this.shape.setTransform(5.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// billet.png
	this.instance = new lib.billet();
	this.instance.parent = this;
	this.instance.setTransform(-150,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-150,-33,300,62), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApZCuIAKAAIgDhdIgKABIgBgTIAmgCIABAPQAKgQARgBQAQAAAKANQAKALABAVQABAUgMAOQgMANgUAAQgKAAgJgDIABAZIAKgBIABATIgwACgAomBRQgGAAgFAFQgFAGABAFIABAgQAIACAHgBQAJAAAFgHQAFgHAAgLQAAgLgGgHQgFgGgHAAIgCAAgAttCVQgOgMgBgUQAAgVANgNQANgOAVgBQAVAAAOAIIAAAXIgXABIgBgLIgIABQgKgBgGAIQgGAIAAAKQABAMAGAGQAHAIAKgBQAMAAAGgHIAPAOQgMAOgXABIgBAAQgVAAgNgNgAsKCLIAKAAIgCgyIgGAAIAAAKIgXABIgBggIBYgCIABAfIgYAAIAAgKIgHABIACAyIAKAAIABASIgwACgAJTCTIANgPQADADAIAAQAIAAAFgPIACgHIgghGIgLAAIgBgTIAxgBIABATIgLAAIASAoIAPgpIgLAAIgBgTIAxgBIABATIgLAAIgiBYQgLAbgWABQgRAAgKgJgAq1CUQgIgHgBgMQAAgOALgIQALgIAUgCIAOAAIAAgBQgBgHgEgDQgEgCgGAAQgIgBgHADIAAAJIgXABIgBgWQAOgKAWgBQATgBAOAIQAMAJABAPIABAoIAKgBIABAUIgnABIAAgMQgJANgRABIgCAAQgLAAgJgIgAqdB1QgFAEAAAFQAAAEAEACQADADAFAAQAIgBAEgFQAEgHAAgIIgKgCQgIACgFADgAnkCOQgJgIAAgMQgBgNAMgJQANgJARAAQAHgBAHABIAAgBQAAgHgEgDQgEgDgHAAQgIAAgGACIAAAJIgYACIgBgXQAQgKAVgBQATAAANAIQANAJAAAOIACApIAKgBIAAATIgmABIAAgLQgKANgQAAQgOAAgIgHgAnMBuQgFAEAAAFQAAAEADADQADACAGAAQAHAAAFgGQAFgHgBgHQgFgCgFAAQgJABgEADgAmHB/IAKAAIgBg0IgKAAIgBgTIAwgCIABATIgKABIAAAOIAhgBIgBgOIgKAAIAAgTIAwgCIABAUIgKAAIABAzIAKAAIABATIgwACIgBgTIAKgBIAAgPIghABIAAAQIALgBIAAATIgwACgAkQB7IAKgBIgBg0IgLABIAAgTIAwgCIABATIgKABIAAAOIAhAAIgBgQIgKABIAAgTIAwgCIABATIgKABIABA0IAKAAIABATIgwABIgBgTIAKgBIAAgQIghABIAAAQIALAAIAAATIgwACgAicB4IAJgBIANgQQgJgDgFgHQgEgGgBgKQAAgNAIgIQAJgIAPgBIA8gCIAAATIgKABIACA0IAKgBIABATIgxACIAAgTIAKAAIgBgPIgIAAIgLAPIAIAAIABATIgvABgAhyBEQgEAAgEACQgDADAAADQAAAEADACQAFACAEAAIAPAAIgBgRgAgzB0IALgBIACgzIgIAAIgBgTIArgCIAXAwIAWgxIAqgCIABATIgJAAIAGA1IALgBIABATIgxACIgBgTIALgBIgDgfIgWAzIgRABIgYgyIgBAgIALgBIABATIgyACgACVBuIAJAAIANgRQgJgDgFgHQgFgHAAgJQgBgMAJgIQAJgKAPABIA7gCIABATIgKAAIACA0IAKgBIAAAUIgwABIgBgTIAKAAIAAgPIgJAAIgLAQIAJgBIABATIgvACgAC/A6QgFABgDACQgDADAAACQAAAEADACQADACAFAAIAQAAIgBgQgAEwBoIALAAIgCg0IgKABIgBgUIBOgCIABAgIgXABIgBgLIgQABIACAxIAKAAIABATIgxABgAGVBtQgNgMgBgVQgBgVANgNQAOgOAVAAQAVgBAOAMQAOAOABAUQABAVgOANQgMAOgWAAIgCAAQgUAAgOgMgAG2AxQgIAAgGAIQgGAHABALQAAALAGAHQAGAHAJAAQAJgBAGgGQAFgIAAgLQgBgMgGgGQgGgHgIAAIgBAAgAIFBiIALgBIgCgxIgHAAIABAKIgYAAIgBgeIBYgDIABAfIgXABIgBgKIgGAAIACAyIAKgBIAAATIgwACgALCBcIAKAAIgBg1IgKABIgBgTIAwgBIABATIgKAAIAAAPIAPgBQADgQALgKQAMgLARAAQAUAAANAMQANANABAUQAAAVgMANQgLAOgVABQgSABgMgKQgMgKgEgRIgOABIABAQIAKAAIAAATIgwABgAMiAmQgIAAgEAHQgFAIABALQAAAKAFAIQAEAGAIAAQAIABAEgIQAFgIAAgKQgBgMgFgHQgFgHgGAAIgBABgANgBOIAcgBIABAcIgcABgANcgTIAcgBIADBUIgcABgAvhgmIATgBQAEgEABgQIgBg/IgKAAIgBgTIB2gEIABAUIgKAAIADBTIASAAIACA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");
	this.shape.setTransform(6.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// billet.png
	this.instance = new lib.billet();
	this.instance.parent = this;
	this.instance.setTransform(-150,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-150,-33,300,62), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// billet.png
	this.instance = new lib.billet();
	this.instance.parent = this;
	this.instance.setTransform(-150,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-150,-33,300,62), null);


(lib.plashka_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.plashka();
	this.instance.parent = this;
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plashka_1, new cjs.Rectangle(-85,-85,172,170), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.part();
	this.instance.parent = this;
	this.instance.setTransform(9,-13,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-9,-13,18,25), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.part();
	this.instance.parent = this;
	this.instance.setTransform(-9,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-9,-13,18,25), null);


(lib.hero2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hero2();
	this.instance.parent = this;
	this.instance.setTransform(-149,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hero2_1, new cjs.Rectangle(-149,-147,297,293), null);


(lib.hero1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hero1();
	this.instance.parent = this;
	this.instance.setTransform(-131,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hero1_1, new cjs.Rectangle(-131,-160,262,320), null);


(lib.hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(-77,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(-77,-38,154,76), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyArQgLgLAAgRQAAgPALgMQALgLARAAQARAAAKAHIAAATIgSAAIAAgIIgIAAQgHAAgFAFQgGAFAAAKQAAAKAGAFQAFAGAHAAQAKAAAGgFIAKAMQgJALgSAAQgSAAgKgLgAiIAvQgGgHAAgJQAAgLAKgIQAJgHAPAAIAMABIAAgCQAAgEgEgDQgDgCgFAAQgHAAgFABIAAAHIgTAAIAAgRQAMgJARAAQARAAAJAIQALAHAAALIAAAiIAIAAIAAAQIgfAAIAAgKQgIALgOAAQgKAAgIgHgAhzAVQgEADgBAFQAAADADACQADACAEAAQAHAAADgEQAEgGAAgHIgIgBQgHAAgEADgAlkAvQgIgGAAgKQAAgLAKgIQAKgHAPAAIALABIAAgCQAAgEgDgDQgEgCgEAAQgHAAgGABIAAAHIgTAAIAAgRQANgJARAAQAQAAALAIQAJAHABALIAAAiIAIAAIAAAQIggAAIAAgKQgHALgNAAQgLAAgHgHgAlRAVQgEADAAAFQAAADADACQADACAEAAQAGAAAEgEQADgGAAgHIgIgBQgGAAgFADgAnDAnIAMgNQAKAJARAAQAHAAAFgEQAEgEAAgGQAAgFgEgEQgEgEgFAAIgTAAIAAgSIAQAAQAEAAADgDQAEgDAAgFQAAgFgFgEQgEgEgFAAQgGAAgGACIAAAMIgTAAIAAgXQAMgKAWAAQAQAAAJAIQAKAIAAAMQAAARgKAGQAHACAFAHQAFAIgBAKQAAANgLAIQgLAIgTAAQgXAAgQgPgAGcA1IAAgQIAJAAIgCgbIgTArIgOAAIgTgrIgCAbIAJAAIAAAQIgoAAIAAgQIAKAAIADgrIgHAAIAAgQIAiAAIATAnIATgnIAiAAIAAAQIgHAAIAEArIAJAAIAAAQgAEhA1IAAgQIAIAAIAAgNIgHAAIgJANIAGAAIAAAQIgmAAIAAgQIAHAAIALgOQgGgCgFgGQgDgGAAgHQgBgKAIgHQAIgHAMAAIAwAAIAAAQIgIAAIAAArIAIAAIAAAQgAEWgCQgCACgBACQABADACABQACACAFAAIAMAAIAAgMIgMAAQgFAAgCACgADMA1IAAgQIAIAAIAAgOIgaAAIAAAOIAIAAIAAAQIgnAAIAAgQIAIAAIAAgrIgIAAIAAgQIAnAAIAAAQIgIAAIAAAMIAaAAIAAgMIgIAAIAAgQIAoAAIAAAQIgIAAIAAArIAIAAIAAAQgABrA1IAAgQIAIAAIAAgOIgaAAIAAAOIAIAAIAAAQIgnAAIAAgQIAIAAIAAgrIgIAAIAAgQIAnAAIAAAQIgIAAIAAAMIAaAAIAAgMIgIAAIAAgQIAoAAIAAAQIgIAAIAAArIAIAAIAAAQgAAMA1IAAgQIAJAAIAAgrIgJAAIAAgQIAfAAIAAA7IAIAAIAAAQgAi9A1IAAgQIAIAAIAAgOIgbAAIAAAOIAJAAIAAAQIgnAAIAAgQIAIAAIAAgrIgIAAIAAgQIAnAAIAAAQIgJAAIAAAMIAbAAIAAgMIgIAAIAAgQIAoAAIAAAQIgIAAIAAArIAIAAIAAAQgAAVgiIAAgSIAWAAIAAASg");
	this.shape.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_17
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C0416").s().p("AqfANIAAgaIU/AAIAAAag");
	this.shape_1.setTransform(0,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B10825").s().p("AqfCAIAAj/IU/AAIAAD/g");
	this.shape_2.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-67.2,-14.1,134.4,28.3), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-78.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-66.5,-78.5,133,157), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-84.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-73.5,-84.5,147,169), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p2_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:-720},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13,18,25);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p1_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:360},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13,18,25);


(lib.particle2Movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.ceil(Math.random()*3));
		//this.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Слой_1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(733.1,238,1,1,0,0,0,733.1,238);

	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(733.1,238,1,1,0,0,0,733.1,238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13,18,25);


(lib.chips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		n = 2;
		for (let i = 0; i < n; i++) {
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.x = Math.random()*330;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
			this.addChild(cloneParticle);
		}
		var num = this.getNumChildren();
		//console.log(num);
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 650){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}
	this.frame_1 = function() {
		n = 2;
		for (let i = 0; i < n; i++) {
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.x = Math.random()*330;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
			this.addChild(cloneParticle);
		}
		var num = this.getNumChildren();
		//console.log(num);
		var speed = 15;
		for(var i=num-1; i>=0; i--){
			if(this.getChildAt(i).y > 650){
				this.removeChild(this.getChildAt(i));
			}else {
				this.getChildAt(i).y += speed*this.getChildAt(i).scaleX;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой_1
	this.particle = new lib.particle2Movie();
	this.particle.name = "particle";
	this.particle.parent = this;
	this.particle.setTransform(519,154,1,1,0,0,0,519,154);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-13,18,25);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plashka
	this.instance = new lib.plashka_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-360,1,1,0,0,0,0,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(346));

	// btn
	this.instance_1 = new lib.btn("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-112,0.014,0.014);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260).to({_off:false},0).to({scaleX:1.4,scaleY:1.4},15,cjs.Ease.backOut).wait(14).to({scaleX:1.34,scaleY:1.34},0).wait(2).to({scaleX:1.4,scaleY:1.4},0).wait(24).to({startPosition:0},0).to({y:-324},15,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-330.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(190).to({_off:false},0).to({y:-122},15,cjs.Ease.cubicOut).wait(40).to({y:-330.5},15,cjs.Ease.cubicIn).to({_off:true},1).wait(85));

	// hero2
	this.instance_3 = new lib.hero2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-299,178);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190).to({_off:false},0).to({x:0.5},15,cjs.Ease.cubicOut).wait(125).to({x:-298},15,cjs.Ease.cubicIn).wait(1));

	// txt
	this.instance_4 = new lib.txt_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50,13);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(260).to({_off:false},0).to({alpha:1},15).wait(40).to({alpha:0},15).wait(16));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-340.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120).to({_off:false},0).to({y:-122.5},15,cjs.Ease.cubicOut).wait(40).to({y:-340.5},15,cjs.Ease.cubicIn).to({_off:true},1).wait(155));

	// hand
	this.instance_6 = new lib.hand_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-175,146.1,1,1,-75,0,0,-77,38);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).to({rotation:0,x:-160,y:146},15,cjs.Ease.cubicOut).wait(40).to({rotation:-75,x:-175,y:146.1},15,cjs.Ease.cubicIn).to({_off:true},1).wait(155));

	// hero1
	this.instance_7 = new lib.hero1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(284,140);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({x:22},15,cjs.Ease.cubicOut).wait(40).to({x:284},15,cjs.Ease.cubicIn).to({_off:true},1).wait(155));

	// t1
	this.instance_8 = new lib.t1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,335.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).to({y:87.5},15,cjs.Ease.cubicOut).wait(40).to({y:334.5},15,cjs.Ease.cubicIn).to({_off:true},1).wait(225));

	// box1
	this.instance_9 = new lib.box1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-238,16,1,1,-90);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).to({rotation:0,x:-45},15,cjs.Ease.cubicOut).wait(40).to({rotation:-90,x:-238},15,cjs.Ease.cubicIn).to({_off:true},1).wait(225));

	// box2
	this.instance_10 = new lib.box2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(232.1,15,1,1,90);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({rotation:0,x:46},15,cjs.Ease.cubicOut).wait(40).to({rotation:90,x:232.1},15,cjs.Ease.cubicIn).to({_off:true},1).wait(225));

	// fries
	this.instance_11 = new lib.chips();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-164.3,-317,1,1,0,0,0,-0.1,-0.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},15).wait(90).to({alpha:0},15).wait(226));

	// img1
	this.instance_12 = new lib.bgImg_1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(346));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.2,-360,323.3,660);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.8,240,323.3,660);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/billet.png", id:"billet"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/hero1.png", id:"hero1"},
		{src:"images/hero2.png", id:"hero2"},
		{src:"images/part.png", id:"part"},
		{src:"images/plashka.png", id:"plashka"},
		{src:"images/txt.png", id:"txt"}
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