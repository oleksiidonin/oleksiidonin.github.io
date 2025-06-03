(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,176);


(lib.cans = function() {
	this.initialize(img.cans);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,264);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,296);// helper functions:

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


(lib.t_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIfNAQhRgggtg3IBtiCQAfApA6AaQA7AZA8AAQAZAAANgJQALgHgBgKQAAgPgsgRQhAgTgkgPQiRg4AAhoQAAhWBCg+QBJhFB5AAQBMAABEAaQBHAaAxAxIhuB/Qgjgjg2gUQgwgSgvAAQgRAAgKAHQgKAGAAALQAAAPAuAQIBkAjQCRA5AABnQgBBhhFA9QhHA+h0AAQhgAAhRgfgAPeNVICFpeIC4AAIiFJegAinNVICGpeIE+AAQBMAAAzA1QAzAzAABLQAABWg3BBQhIBViNAAIiKAAIgqC/gABdH2IBvAAQAcAAATgOQAXgQAAgZQAAgUgOgKQgMgKgZAAIhtAAgArDNVICFpeIHLAAIgjCgIkVAAIgMA8IENAAIgjCgIkNAAIgQBCIEVAAIgjCggA0dNVICGpeIE/AAQBMAAAzA1QA0AzgBBLQABBWg4BBQhJBViMAAIiKAAIgqC/gAwYH2IBvAAQAbAAAUgOQAWgQAAgZQAAgUgOgKQgMgKgYAAIhuAAgAOvCUQhEgZgfguIBZhVQAZAbAtARQAmAOAjAAQAfAAAPgJQAOgJABgNQgBgLgMgGQgRgHgrAAIhfAAIAch5IBdAAQAoAAAQgFQAUgFAAgPQAAgchSAAQgfAAgfAIQgfAIgWANIguhdQAfgaAugQQAwgQAzAAQBfAAA6AhQA6AhAAA6QAAAngnAgQgmAfgvAHQBXAWAABPQABA9g+ApQg4AlhPAAQhIAAg+gYgACrByQhFg8AAhcQAAhvBPhMQBOhNB4AAQBmAABDA6QBEA7AABcQABBvhOBMQhPBOh3AAQhmAAhEg6gAEZiLQgiAmAAA2QgBArAdAaQAcAcAuAAQA2AAAjgoQAjgmAAg1QAAgsgcgbQgdgbguAAQg2AAgjAogAiXCjIAniuIksAAIgoCuIiKAAIBlnJICLAAIgkCiIEsAAIAkiiICKAAIhkHJgAsiCjIBlnJICLAAIhlHJgAwKCjIhHikIglAlIgdB/IiKAAIBknJICMAAIgkCiICViiICyAAIjdDVIB+D0gAGymTIBChYQATARAaAAQAOAAALgFQAIgEAJgJIhMkOICDAAIAkCcIBpicICCAAIjdEyQg8BUhjAAQhDAAgggfgAzjmkQg6gxAAhPQAAhiBDg+QBCg9BhAAQBOAAAyApQApAiAPA0IhvAjQgGgagUgRQgWgQgeAAQgtAAgeAhQgeAgAAAtQAAAiAYAYQAXAYAnAAQAXAAAWgOQAXgMAJgTIBcA7QghAvg1AXQgqASgvAAQhVAAg5gwgARVl7IAsjHIi5DHIhwAAIBUl/IB1AAIgpC6ICvi6IB3AAIhUF/gAEQl7Ig7iKIgeAgIgYBqIh1AAIBVl/IB1AAIgfCHIB9iHICTAAIi3CyIBqDNgAhwl7IgFgtIiKAAIgXAtIiKAAIDil/ICSAAIA5F/gAjJoNIBMAAIgMh7gAo3l7IAyjnIiHDnIg1AAIgjjnIgyDnIh0AAIBUl/ICcAAIAbC4IBsi4IClAAIhVF/gAQxsVQgWgOgOgXIAygkQAPAeAjAAQAkAAAdgeIAlAkQgWAXgdAOQgdANgfAAQgeAAgZgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t_black, new cjs.Rectangle(-131,-86.3,262,172.6), null);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIfNAQhRgggtg3IBtiCQAfApA6AaQA7AZA8AAQAZAAANgJQALgHgBgKQAAgPgsgRQhAgTgkgPQiRg4AAhoQAAhWBCg+QBJhFB5AAQBMAABEAaQBHAaAxAxIhuB/Qgjgjg2gUQgwgSgvAAQgRAAgKAHQgKAGAAALQAAAPAuAQIBkAjQCRA5AABnQgBBhhFA9QhHA+h0AAQhgAAhRgfgAPeNVICFpeIC4AAIiFJegAinNVICGpeIE+AAQBMAAAzA1QAzAzAABLQAABWg3BBQhIBViNAAIiKAAIgqC/gABdH2IBvAAQAcAAATgOQAXgQAAgZQAAgUgOgKQgMgKgZAAIhtAAgArDNVICFpeIHLAAIgjCgIkVAAIgMA8IENAAIgjCgIkNAAIgQBCIEVAAIgjCggA0dNVICGpeIE/AAQBMAAAzA1QA0AzgBBLQABBWg4BBQhJBViMAAIiKAAIgqC/gAwYH2IBvAAQAbAAAUgOQAWgQAAgZQAAgUgOgKQgMgKgYAAIhuAAgAOvCUQhEgZgfguIBZhVQAZAbAtARQAmAOAjAAQAfAAAPgJQAOgJABgNQgBgLgMgGQgRgHgrAAIhfAAIAch5IBdAAQAoAAAQgFQAUgFAAgPQAAgchSAAQgfAAgfAIQgfAIgWANIguhdQAfgaAugQQAwgQAzAAQBfAAA6AhQA6AhAAA6QAAAngnAgQgmAfgvAHQBXAWAABPQABA9g+ApQg4AlhPAAQhIAAg+gYgACrByQhFg8AAhcQAAhvBPhMQBOhNB4AAQBmAABDA6QBEA7AABcQABBvhOBMQhPBOh3AAQhmAAhEg6gAEZiLQgiAmAAA2QgBArAdAaQAcAcAuAAQA2AAAjgoQAjgmAAg1QAAgsgcgbQgdgbguAAQg2AAgjAogAiXCjIAniuIksAAIgoCuIiKAAIBlnJICLAAIgkCiIEsAAIAkiiICKAAIhkHJgAsiCjIBlnJICLAAIhlHJgAwKCjIhHikIglAlIgdB/IiKAAIBknJICMAAIgkCiICViiICyAAIjdDVIB+D0gAGymTIBChYQATARAaAAQAOAAALgFQAIgEAJgJIhMkOICDAAIAkCcIBpicICCAAIjdEyQg8BUhjAAQhDAAgggfgAzjmkQg6gxAAhPQAAhiBDg+QBCg9BhAAQBOAAAyApQApAiAPA0IhvAjQgGgagUgRQgWgQgeAAQgtAAgeAhQgeAgAAAtQAAAiAYAYQAXAYAnAAQAXAAAWgOQAXgMAJgTIBcA7QghAvg1AXQgqASgvAAQhVAAg5gwgARVl7IAsjHIi5DHIhwAAIBUl/IB1AAIgpC6ICvi6IB3AAIhUF/gAEQl7Ig7iKIgeAgIgYBqIh1AAIBVl/IB1AAIgfCHIB9iHICTAAIi3CyIBqDNgAhwl7IgFgtIiKAAIgXAtIiKAAIDil/ICSAAIA5F/gAjJoNIBMAAIgMh7gAo3l7IAyjnIiHDnIg1AAIgjjnIgyDnIh0AAIBUl/ICcAAIAbC4IBsi4IClAAIhVF/gAQxsVQgWgOgOgXIAygkQAPAeAjAAQAkAAAdgeIAlAkQgWAXgdAOQgdANgfAAQgeAAgZgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(-131,-86.3,262,172.6), null);


(lib.round_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_black, new cjs.Rectangle(-131,-131,262.1,262), null);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-162,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(-162,-148,324,296), null);


(lib.ClipGroup_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgPQAmgBAjgQIgSARQgNALgKAGQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_102, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugyAFhGIA3gyQAABFAsAvQArAxBFAFIg3AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_100, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQAMgSARgQIAPgOQgSAjgFAlIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_98, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKgPQAngBAkgQIgSARQgOALgKAGQgoAcgvADg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_96, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBA8QgtgyAFhGIA2gyQAABFAsAvQAsAxBFAFIg3AzQhGgBgugyg");
	this.shape.setTransform(10.7,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_94, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQAKgQATgSIAPgOQgTAlgEAjIg0AxQAHgoAYghg");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_92, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgPQAmgBAjgQIgSARQgNALgKAGQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_90, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugyAFhGIA3gyQAABFAsAvQArAxBFAFIg3AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_88, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQAMgSARgQIAPgOQgSAjgFAlIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_86, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKgQQAmAAAlgQIgSAQQgOAMgKAGQgnAbgwAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_84, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBA8QgtgyAFhGIA3gyQgBBDAsAxQAtAyBEAEIg3AzQhGgBgugyg");
	this.shape.setTransform(10.7,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_82, new cjs.Rectangle(0.1,0,21.3,22.2), null);


(lib.ClipGroup_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQANgTAQgPIAPgOQgTAkgEAkIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_80, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgQQAmAAAjgQIgSAQQgNAMgKAGQgnAbgwAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_78, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugzAFhFIA3gyQgBBDAtAxQArAyBFAEIg3AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMIgHgEIAHAEQAMgTARgPIAPgOQgSAjgFAlIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_74, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKgQQAmAAAlgQIgSAQQgOAMgKAGQgnAbgwAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_72, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBA8QgtgyAFhGIA3gyQgBBDAsAxQAtAyBEAEIg3AzQhGgBgugyg");
	this.shape.setTransform(10.7,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_70, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQANgTAQgPIAPgOQgTAkgEAkIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_68, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgQQAkAAAlgQIgSAQQgJAJgOAJQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_66, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugzAFhFIA3gyQAABFAsAvQArAyBFAEIg3AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMIAAAAQALgTASgQIAPgNQgSAigFAmIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKgQQAkAAAngQIgSAQQgLAKgNAIQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugzAFhFIA3gyQAABFAsAvQAsAyBFAEIg4AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_58, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHgMIABAAQAKgRATgSIAPgNQgTAkgEAkIg0AxQAHgpAXggg");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_56, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgQQAkAAAlgQIgSAQQgJAJgOAJQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_54, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugzAFhFIA3gyQAABFAsAvQArAyBFAEIg3AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_52, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMIAAAAQALgTASgQIAPgNQgSAigFAmIg0AxQAHgnAYgig");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_50, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgQQAmAAAjgQIgSAQQgNAMgKAGQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_48, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugyAFhGIA3gyQAABFAsAvQAsAxBFAFIg4AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQAMgSARgQIAPgOQgSAjgFAlIg0AxQAIgoAXghg");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(0.1,0,7.6,12.3), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKgQQAmAAAlgQIgSAQQgOAMgKAGQgnAbgwAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(0,0,13,6.6), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhBA8QgtgyAFhGIA3gyQgBBEAsAwQAsAxBFAFIg3AzQhGgBgugyg");
	this.shape.setTransform(10.7,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQALgRASgRIAPgOQgTAlgEAjIg0AxQAHgmAYgjg");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJgQQAmAAAjgQIgSAQQgNAMgKAGQgoAbgvAEg");
	this.shape.setTransform(6.5,3.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.ClipGroup_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAA8QgugyAFhGIA3gyQAABFAsAvQArAxBGAFIg4AzQhGgBgtgyg");
	this.shape.setTransform(10.6,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGgMQAMgSARgQIAPgOQgSAjgFAlIg0AxQAIgoAXghg");
	this.shape.setTransform(3.8,6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, new cjs.Rectangle(0.1,0,7.6,12.3), null);


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkPAaIAAgzIIfAAIAAAzg");
	mask.setTransform(27.2,2.6);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkPAaIA1gwIHZAAIAJgBIACAAIAGgCIgmAjQgUAQgZAAg");
	this.shape.setTransform(27.2,2.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, new cjs.Rectangle(0,0,54.4,5.2), null);


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4A6IAAhzIBxAAIAABzg");
	mask.setTransform(5.7,5.8);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgoAmQgRgSABgZIA4g0QAAAYARATQAQARAYAEIg3AzQgZgCgRgSg");
	this.shape.setTransform(5.7,5.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, new cjs.Rectangle(0,0,11.4,11.5), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnCkIAAlHIBPAAIAAFHg");
	mask.setTransform(4,16.4);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgShUQADgZAQgSIAEgDIAjghIgBAGIgBACIgBAJIgXEEIg1Ayg");
	this.shape.setTransform(4,16.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkPAaIAAgzIIfAAIAAAzg");
	mask.setTransform(27.2,2.6);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkPAaIA2gwIHYAAIAJgBIACAAIAGgCIgkAhIgDACQgUAQgZAAg");
	this.shape.setTransform(27.2,2.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0,0,54.5,5.2), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4A6IAAhzIBxAAIAABzg");
	mask.setTransform(5.7,5.8);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAmQgQgSABgZIA3g0QACAZAPASQARARAYAEIg3AzQgagCgRgSg");
	this.shape.setTransform(5.7,5.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0.1,0,11.4,11.5), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnCkIAAlHIBPAAIAAFHg");
	mask.setTransform(4,16.4);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRhUQABgYASgTIAmgkIgBAGIgBACIgBAJIgXEEIg1Ayg");
	this.shape.setTransform(4,16.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnHWIAAurIDPAAIAAOrg");
	mask.setTransform(10.4,47);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAHTQg8hmgZh0Qgah1ALh6QALh6Ath0QAth0BOhmIAZgXIgMASQg7BcgiBmQgjBlgJBpQgLB7AaB2QAaB2A8BoIACADIAFADIg2AyQgCACgEAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(10.4,47);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0,0,20.9,94), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnWBkIAAjHIOtAAIAADHg");
	mask.setTransform(47.1,10);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkDBAQhxgkhghDQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDACgCIA2gyIAEAGIACACQBhBGB0AjQBzAkB7AAQBoAABogaQBogZBggzIAUgKIgaAXQhrBDh4AkQh3Akh6AAQh6AAhygkg");
	this.shape.setTransform(47.1,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0,0,94.2,20), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiACHIAAkOIEBAAIAAEOg");
	mask.setTransform(13,13.6);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABNCEQgCADgDAAQgDAAgCgCIjEjWIA6g2IDEDXIAFADIg0AxIAEADg");
	this.shape.setTransform(13,13.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0.1,0,25.9,27.1), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5DzIAAnlIBzAAIAAHlg");
	mask.setTransform(5.8,24.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAsQAKh6gthrQgCgEAEgEIA1gxIAAABQAtBpgKB4QgLB1g+BqIgnAkQAxhgAIhng");
	this.shape.setTransform(5.7,24.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0,11.5,48.6), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj0A1IAAhpIHoAAIAABpg");
	mask.setTransform(24.5,5.3);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC3A0Qhog3h5AAQhnAAhjAoIAogkQBtg1B3AAQB2AABmA1IAAAAIg2AyQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape.setTransform(24.5,5.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,48.9,10.6), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/CJIAAkRID/AAIAAERg");
	mask.setTransform(12.8,13.7);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah+hNQgBgDAAgDQAAgCADgCIgDgFIAEAEIA0gwIADAFIDEDXIg6A1g");
	this.shape.setTransform(12.8,13.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0.1,0,25.6,27.4), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnDmIAAnLIHPAAIAAHLg");
	mask.setTransform(23.3,23);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai2CpQg3g8AGhVIEUj9QgBAoAOAlQANAkAaAcQA1A7BTAFIkUD+QhVgBg2g8g");
	this.shape.setTransform(23.3,23);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.1,0,46.5,46.1), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgGmAzAMAAAhmAINOAAMAAABmAg");
	mask.setTransform(42.4,326.5);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAB0gtWQAEgoASgmQATgmAfgdIDsjZQgaAtgFAzMgIbBgiIkVD+g");
	this.shape.setTransform(42.4,326.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.1,0,84.7,652.9), null);


(lib.film = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AZ3NoQghgCgegGQgWgDgkgIQgxgNg4gUQhbgehkgvQhUgnhdgxQg+gihsg7IilhgQhEgnhgg5IihhfIiihfIiihcQiwhhiShKQiyhZiTg8IhRgfIhRgcQgtgPgjgJQgsgMgjgHQhUgThDgFQhJgFg7AKQgdAEgZAIQgYAIgVALQgUAKgSAPQgRANgRAUQgRATgQAWQgPAWgPAdQgbA2gVBHQgQA4gLBAInxAAIADgSQABgHgCgEQgCgFgEgBIgfgEQgEgBgEADQgEAFgBAGIgFAaIgmAAIAEgbIAKg2QAZhzAmhpIAVg3IAMgbIAMgcQAZg2Ahg3QAkg7AlgvQAsg3AwgtQA1gyA5glQA8goBBgcQA/gbBGgPQA/gPBDgGQBzgICBARQBlAPB1AiQBhAcBnApQBXAkBjAvQBYAqBZAxQBSArBZA0QCTBXC0B0QBKAvBWA5ICdBpICdBnICcBmQBTA3BJAtIBOAxIBOAvQBSAvBKAmQAnAVAnARQArAVAhAMQAqAQAgAJQAkAKAcADIAZACQAKAAAGgCIAHgBIABAAIAEAFIADgBIADgDIABgCIABgBIABgCIAEgIIAAgCIAGgXQAFgVAAgfQABgegDghQgDgigGggIgUhaIAfAAIgDABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABIADAOQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAIAPgEQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgEgPIAAgBIDTAAIAAADIAEASQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAABAAQAAAAABAAIAPgEQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAIgEgQIATAAIAJAeQAKAuAHAqQAIAxABAuQADA3gGAwIgTBYIgMAeQgNAhgUAdQgWAggbAZIAEAFQgiAggqAVQgoATgqAKQgkAIgpADIgXABQgXgBgXgCgAanM3QgGACAAACIAAASQAAADAGACQAFABAJABIA9gHQAJgCAFgDQAGgDAAgCIgEgSQgBgDgGAAQgGgBgJACIgxAGIgHAAIgNACgAYNMjQgFABAAACIgFASQAAACAEADQAEADAGACIAYAEIAZAFIAGABIAGgBQAFgBABgDIACgSQABgCgFgCIgFgCIgGgCIgXgFIgXgFIgIAAIgEAAgAWIL5QgEAAgBACIgHASQgBACADADIAJAFIArAQIADAAIAIABIADgBIACgCIAGgRQABgDgEgDQgDgDgGgCIgqgOQgEgDgEAAIgCABgAeRLWQgDAAgDADIgKAKIADADQgRAPgJAGQgSAOACAEIAJAPQACACAHgCQAHgCAIgGQAKgHATgRIgEgDIALgMQADgDABgCQABgEgCgCIgMgLIgDgBIgCAAgAUHLIIgIARQgBACADAEQADADAFACIAUAJIAUAIQAFADAFAAQAFAAABgDIAHgRQABgCgDgDIgJgGIgTgJIgTgIQgGgCgEAAQgFAAgBACgAfBKRIgFAFIgGALIAAAAIgHALQgCADAAAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIAOAKQAAAAABABQAAAAABAAQABAAAAAAQABgBABAAQADgBACgEIAHgMIAHgNQACgDAAgEQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAAAIgQgJIgBAAIgDABgASRKPIgJARQgBACADADQADAEAFACIAlATQAGADAEAAQAFAAABgDIAIgRQACgCgDgDQgDgDgFgDIglgSQgGgDgEAAQgEAAgCACgAQfJSIgKARQgBACADAEQACADAFADIAlAUQAFACAFABQAEAAABgCIAKgRQABgDgDgDQgCgEgFgCIglgUQgFgDgEABIgCgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAgAfbJJQgCACgBAEIgDAKIgEAMQgBADABADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAQAGQAAABABAAQABAAAAAAQABAAAAAAQABgBAAAAQADgCABgEIAHgYQABgDgBgDQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAIgQgFIgCAAIgDABgAa/IsIgSAAQgDABgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAASQAAACACACQADABADAAIAEABIARgCIACAAQADAAACgCQAAgBAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgFgSIgCgEIgDgBIgBABgAOvIUIgKARQgBADACADQADAEAFADIAkAUIAHACQAGACACgDIAKgSQABgCgCgEQgDgDgFgCIgkgVQgEgCgFgBIgBAAQgEAAgBACgAZQIgQgEABAAACIgFASQAAACACACQADADAFACIAQADIAPAEIAFAAIADgBQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIACgSQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgDgDIgDgBIgPgDIgPgDIgFgBIgDABgAbTIlIgBADIACAEIAJAPQABABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAgBQABAAAAAAIADgBIACgCIADADIACgCIAAgDIgCgDIgNgLQgEgFgBABIgBACIgEgFIgCABgAbjIeIgCACIgBACQgBABAEADIAOAKIAEACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIACgDIACgDIAAgDIgDgDIgPgHIgEgCIgBAAIgBABgAfnIFIgCAFIgBAKIgCAMQAAACABADQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAQAEQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgBABgEIADgWIgBgGQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgRgDQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAgAXqH8QgDAAgBADIgHARQgBADADACQACAEAFACIAiAMQAEACAFAAQADgBABgDIAGgRQABgCgDgDIgHgFIghgMIgHgCIgCAAgAbsIKIgCAEIgBAEIABACIADACIAQAGIAEAAIADgBIABgEIACgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgEgDIgQgEIgEgBIgCACgANBHUIgKASIgBACQABAFAIAGIAjAUQAFACAFAAQAEABACgCIAKgSQABgCgCgEQgDgDgFgDIgjgUQgFgDgEgBIgBAAQgEAAgBACgAb1HqIgCADIgCAJQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAQAEIAFgBIACgCIACgNIgBgCIgEgCIgRgCIgEABgAWCHMQgEAAgBADIgIAQQgBADACADQADADAEADIAjAQQAEACAEAAQAEAAABgDIAIgQQABgDgDgDQgCgDgFgDIghgPQgEgDgEAAIgBAAgAfpHFQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIAAAVQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIARABQAAAAABAAQAAAAABAAQAAgBABAAQAAgBABAAQABgCAAgDIAAgVQAAgEgCgCIgDgBIgRAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAgAb4HEIgBADIgBAMQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAIARABIAEgBIACgDIAAgNQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgRAAIgEABgALUGUIgLARQgBADACAEQADADAFADIAiAVQAFACAFABQAEABACgDIAKgRQACgCgDgFQgCgDgFgDIgjgVQgFgCgEAAIgBgBQgEAAgBACgAUTGYIgJARQgBACADADQACAEAFADIAiASQAFACAEAAQAEAAABgCIAJgRQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQgCgEgGgDIghgSQgFgEgEAAQgEABgCACgAb8GZQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAOQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQABAAAAgBIARAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgOQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIgEgCgAfqGGQgBAAAAAAQgBAAgBAAQAAABAAAAQgBAAAAABIgBAEIABAUIACAFQABAAAAAAQAAAAABABQAAAAABAAQABAAAAAAIARgBIADgBIACgGIgCgUIAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgDgBgASqFcIgJARQgCACADADQACAEAFADIAiATQAEADAFABQAEgBABgCIAJgRQABgCgBgCQgCgEgEgDIgjgUQgFgDgEAAIgCAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABgAJoFUIgLARQgCADADAEQACADAFADIAjAVQAEACAFABQAEAAACgCIALgRQABgDgCgEQgCgDgFgEIgjgUQgFgDgEAAIgCgBQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABgAcIFqIgQACIgDACIgCACIAAABIABAHIAAABIABAHQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIARgCQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgCgPIgCgDIgDgBIgBAAgAfyFJIgQACQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABIACATIACAEQABAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIARgCQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgDgTIgCgEIgDgBIgBAAgAbyE+QgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABIgBADIACAPIACADIAEABIAQgDQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIgCgOQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgDgBgARBEdIgKARQgBACACADQADAEAEADIAiAUQAFAEAEAAQAEAAACgDIAJgQQACgCgDgEQgCgEgFgDIghgUQgFgDgEAAIgCgBQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAgBABgAH8ETIgLASQgBACACAEQACADAFADIAjAVQAEADAFABQAEgBACgCIALgRQABgDgCgDQgCgEgFgEIgigUQgFgDgFAAIgBAAQgDAAgCACgAfnEPIgQAEQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIAEASQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAgBIAQgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgSQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgDgBIgBAAgAb5EMIgQADIgDADIgBADIADAQQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAABAAQABAAAAgBIAQgDIADgCIABgEIgDgQIgCgDIgDAAIgBAAgAPZDbIgKARQgCACACAEQADAEAEADIAiAVQAFADAEABQAEgBACgCIAKgRQABgCgCgEQgCgEgFgDIghgUQgFgEgEAAIgCAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABgAGRDTIgLASQgCACACAEQADAEAFACIAiAVQAFADAEAAQAFAAABgDIALgRQACgCgCgEQgCgEgFgDIgjgUQgEgEgFAAQgEAAgCADgANwCYIgLARQgBADACAEQACADAFADIAiAWQAFADAEAAQAEABACgDIAKgSQABgBgCgFQgCgDgFgDIghgWQgFgDgEAAIgCAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABgAElCSIgLATQgCACADAEQACAEAFADIAjAUQAEADAFAAQAEAAACgCIALgTQABgCgCgEQgCgDgFgDIgigUQgFgEgFAAQgEAAgCACgAMIBTIgLASQgCADACADQADAEAEAEIAiAVQAFADAEABQAEAAACgDIALgRQABgCgCgEQgCgEgFgDIghgWQgFgDgEgBIgCAAQgDAAgBACgAC6BUIgLATQgCADACADQACAEAFACIAjAUQAEADAFABQAEAAACgDIALgTQACgDgCgDQgCgEgFgCIgjgVQgEgCgFgBIgBAAQgDAAgCADgABRAUIgCACIgMAUIgBACIADAGIAGAEIAiAUQAFADAEAAQAFAAABgDIAMgTIABgDIgCgDIgCgEIgFgDIgigUQgFgDgEAAIgEABgAKfAPIgLASQgBADACADQACAEAEADIAiAWQAFADAEAAQAEABACgCIALgSQACgCgDgFQgCgDgEgEIgigWQgEgCgFgBIgBAAQgEAAgBACgA4VACQgEADgBAEIgHAiQgBAFADAEQACAEAEAAIAfAHQAEABADgDQAEgDABgEIAGggQABgFgDgDQgCgFgEgBIgegHIgCAAQgDAAgCABgAgWgoQgEAAgCADIgMATQgBADACAEQACAEAFADIAhASQAFACAFAAQAEAAACgCIALgTQACgDgCgEQgCgEgFgDIgigSQgEgDgEAAIgBAAgAI2g1IgLASQgCADADAEQACADAEAEIAiAVQAFACAEABQAEAAACgDIALgRQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQgBgEgEgDIgkgYQgFgDgEAAIgBAAQgEAAgBACgA/GhqQgFAFgBAGIgMAuQgBAGACAFQABAFAFABIAeAGQAEABAEgEQAEgEABgFIALgtQACgGgCgFQgBgGgFAAIgdgIIgCAAQgDAAgDACgA36hiQgDACgCAFIgJAfQgCAFACAEQACAEAEABIAdAJQAFABADgBQAEgCABgFIAJgeQABgFgCgDQgBgEgEgCIgdgKIgDgBIgFABgAiIhgIgMAVQgBADACADQACAEAFADIAjASQAEADAFAAQAEAAACgDIALgUQACgDgCgEQgCgEgFgDIgjgSQgFgCgEgBQgFAAgBADgAHNh7IgMAUQgBACACAEIAHAHIAiAWQAEADAFABQAEgBACgCIALgSQACgDgCgEIgHgHIgigWQgFgDgEgBIgCAAQgDAAgBACgAjvibQgEAAgCADIgLAVQgCADADAEQACADAFADIAiASQAFACAFAAQAEAAACgDIALgVQACgDgDgDQgCgFgFgCIgigSQgEgCgEAAIgCAAgA3Ui+QgEACgCADIgNAdQgBAFABAEQACAEADABIAcAMQAEABADgBQAEgCACgEIAMgbQABgEgBgEQgBgDgEgCIgagOIgFgBIgDABgAFji/IgMATQgBACACAEQACAEAFADIAiAWQAFADAEAAQAEABACgDIAMgSQABgDgCgEQgCgEgFgDIgigWQgFgDgEAAIgCgBQgDAAgBADgAlijOIgLAWQgBADACADQACAFAFABIAjASQAFACAEgBQAFAAABgDIALgWQACgDgCgDQgDgEgEgCIgjgSQgFgBgFAAQgEAAgCADgA+Xj5QgFAEgCAHIgRAtQgCAHABAFQACAFAEACIAdAJQAEAAAEgDQAEgDADgHIAPgsQADgGgBgFQgBgGgEgBIgdgLIgCAAQgDAAgDACgAD4kEIgMATQgBADACAEQACAEAFADIAiAWQAFADAFAAQAEABACgEIALgTQACgCgCgEQgDgEgEgDIgjgWQgEgDgFAAQgEgBgCADgAnJkEQgFAAgBAEIgLAWQgBADACAEQACAEAFABIAjAQQAFADAEgBQAFgBABgDIALgWQABgCgBgDQgCgFgGgDIgjgQQgDgBgEAAIgCAAgA2lkPQgEAAgCADIgEAGIgEAHIgIAMQgCAEABAEQABAEADACIAZAQQAEACAEgBQADAAACgEIAHgLIAEgGIAEgFQACgEgBgDQgBgEgDgDIgYgSQgCgCgDAAIgCABgAo4kzQgEAAgBAEIgKAXQgCAEADADQACADAFACIAjAPQAFACAEgBQAFgBABgDIAKgXQACgDgCgEQgDgDgFgCIgjgPIgHgBIgDAAgACMlHIgMAUQgBACACAEQACAEAFADIAjAWQAFACAEAAQAEABACgDIAMgTQABgEgCgDQgCgEgFgEIgjgVQgEgDgFAAIgBAAQgEAAgBADgA1zlOIgTATQgDADABAEQAAAEADADIAWAUQADACADAAQAEABACgDIAQgSQADgCgBgEQAAgDgDgEIgTgVQgCgEgEABIgBgBQgDAAgCADgAqmldQgEACgCADIgJAXQgBAEADADQACAEAFACIAjAMQAFACAEgBQAEgBACgDIAJgYQACgEgDgDQgCgDgFgCIgkgNIgGgBIgDAAgA9VmGQgFADgEAGIgXAtQgDAHABAFQABAGADACIAcALQAEACAEgDQAFgDADgHIAWgrQADgGgBgFQAAgFgDgDIgbgNIgDgBQgCAAgDACgA0zmAIgWAOQgDACAAAEQAAAEACADIAQAXQADAEADAAQADACADgCIASgNQADgBAAgEQABgDgCgDIgNgaQgCgDgDgCIgDAAIgEABgAsUmBQgFACgBAEIgIAYQgBADADAEQACADAFACIAjAKQAFACAEgCQAEgBABgDIAJgYQABgEgCgEQgDgDgFgBIgjgMIgFAAIgEAAgAAemKIgLAVQgCADADADQACAEAFADIAjAVQAFADAEAAQAFAAABgDIAMgUQACgDgDgEQgCgEgFgCIgjgWQgFgDgEAAQgFAAgCADgAuCmdQgEACgBAEIgGAaQgBADADADQACAEAFABIAiAIQAFAAAEgBQAEgCABgEIAHgZQABgDgDgDQgCgEgFgBIgjgIIgEAAIgFAAgAzomhIgZAJQgEAAgBAEQgBAEABADIAKAbQACADADADQADABADgBIALgFIAFgBIAGgCQADgBACgEQABgEgBgDIgGgcQgBgDgEgCIgEgBIgDABgAvumvQgDADgBAEIgDAaQgBAEADADQADACAEABIAhAEQAFACADgDQAEgCABgDIAFgaQABgFgDgDQgDgCgFgBIgigFIgCAAQgEAAgDABgAyPmzIgeADQgEABgCAEQgCADAAADIAEAcQABADADADQADACADgBIAcgDQADgBADgDQACgDAAgEIgBgbQgBgFgDgBQgCgDgDAAIgCABgAxUm0QgDADAAADIgBAbQAAAEADADQADACAEAAIAPAAIAQABQAEAAADgDQADgCABgEIACgbQAAgEgDgCQgDgDgEAAIghgBQgEAAgDADgAhQnLIgLAVQgCAEADADQACAFAFACIAkAUQAFADAEAAQAFAAABgDIAMgUQABgEgCgEQgCgDgFgEIgkgUQgFgDgFABQgEAAgCACgA78oQQgFADgFAFIgIAMIgIAKIgPAWQgEAHAAAFQgBAGAEACIAZAPQAEADAFgDQAFgDADgFIAegpQAEgGABgGQABgGgDgCIgYgSQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgFABgAjBoKIgLAWQgCADADAEQACAEAFADIAlATQAFADAEAAQAFAAABgDIALgVQACgDgCgFQgDgDgFgDIgkgUQgGgDgEAAQgFAAgBADgAkvpKQgFABgBADIgLAWQgBAEACAEQADADAFADIAlASQAFAEAFgBQAFAAABgDIALgWQACgEgDgEQgDgDgFgDIglgUQgFgCgEAAIgBAAgA6EqNQgGABgGAGIgVATIgKAJIgKALQgGAFgBAGQgCAGADADIAVATQADADAGgCQAGgCAFgFIAmglQAGgEACgGQACgGgCgDIgTgVQgCgDgDAAIgEABgAmmqDQgFAAgBADIgKAYQgCADADADQADAEAFADIAmASQAGADAEgBQAFAAABgEIALgXQABgDgDgDQgCgEgGgDIgmgSQgEgDgFAAIgBABgAohq5QgFABgBACIgJAZQgBADADAEQACADAGADIAnAQQAGADAEgBQAFgBABgDIAKgYQABgCgDgFQgCgEgGgCIgogQQgEgDgFAAIgBABgA38rsIgyAcQgHAFgDAFQgDAFACAEIAQAYQADADAGgBQAGAAAGgEIAvgcQAHgEADgEQAEgFgCgDIgNgaQgCgEgGAAQgGABgIAEgAqhrqQgFABgBAEIgIAYQgBADADAEQAEAEAFACIApAPQAGACAEgBQAFgBABgEIAJgYQABgDgDgEQgDgEgGgCIgpgPIgIgBIgDAAgAsnsUQgFACgBADIgGAaQgBAEAEADQADADAGACIArANQAGABAFgBQAEgBABgEIAIgZQAAgEgDgDQgDgDgFgCIgtgNIgHgBIgEAAgA1VssIgNADIgOAEIgbAJQgIABgEAFQgEAEABAEIAKAaQACAEAGACQAGAAAHgDIAZgHIANgEIANgDQAHgCAEgEQAEgEgBgEIgHgbQgBgEgFgBIgGgBIgIACgAu1szQgFABgBAFIgDAaQgBAEAEADQAEAEAHABIAtAIQAGABAEgBQAFgCABgEIAFgaQABgEgEgDQgEgDgGgCIgXgFIgYgEIgFAAIgGABgAyutGIg0AEQgIACgFADQgEAEAAADIAEAcQABADAFACQAGADAHgBIAZgDIAZgCQAHgBAEgCQAFgDAAgEIgCgbQAAgEgFgDQgEgCgGAAIgDAAgAxNtEQgFADAAAEIAAAbQAAAEAFADQAEACAHABIAvADQAHABAFgCQAFgDAAgDIACgbQABgEgFgDQgEgDgHgBIgygEIgCAAQgGAAgEACg");
	this.shape.setTransform(1.4,-48.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.film, new cjs.Rectangle(-205.7,-135.9,414.4,174.9), null);


(lib.cans_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cans();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cans_1, new cjs.Rectangle(-130.5,-132,261,264), null);


(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-48,-44,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(-48,-44,96,88), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-300,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-300,-600,600,1200), null);


(lib.round8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C2543").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round8, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C2B4E").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round7, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D325F").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round6, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B3C72").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round5, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#194688").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round4, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#124F9C").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round3, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0956AD").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round2, new cjs.Rectangle(-136,-136,276,276), null);


(lib.round1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005CB9").s().p("AueOeQl/l/AAofQAAodF/mAQGAmAIeAAQIfAAGAGAQF/GAAAIdQAAIfl/F/QmAGAofAAQoeAAmAmAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.round_black();
	this.instance.parent = this;
	this.instance.alpha = 0.5;
	this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance.cache(-133,-133,266,266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.round1, new cjs.Rectangle(-136,-136,276,276), null);


(lib.ClipGroup_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_102();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_101, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_100();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_99, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_98();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_97, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_96();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_95, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_94();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_93, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_92();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_91, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_90();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_89, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_88();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_87, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_86();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_85, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_84();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_83, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_82();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_81, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_80();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_79, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_78();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_76();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_75, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_74();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_73, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_72();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_71, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_70();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_69, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_68();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_67, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.ClipGroup_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_66();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_65, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_64();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_62();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_60();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_59, new cjs.Rectangle(0,0,13,6.7), null);


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_58();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_57, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_56();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_55, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_54();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_53, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpBvIAAjdIDTAAIAADdg");
	mask.setTransform(10.6,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_52();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_51, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_50();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_49, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_48();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_46();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_44();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICBAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_42();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(0,0,13,6.6), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_40();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_38();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAAhIAAhBICAAAIAABBg");
	mask.setTransform(6.5,3.3);

	// Слой_3
	this.instance = new lib.ClipGroup_36();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.ClipGroup_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqBvIAAjdIDVAAIAADdg");
	mask.setTransform(10.7,11.1);

	// Слой_3
	this.instance = new lib.ClipGroup_34();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglA9IAAh5IBLAAIAAB5g");
	mask.setTransform(3.8,6.1);

	// Слой_3
	this.instance = new lib.ClipGroup_32();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkQAaIAAgzIIhAAIAAAzg");
	mask.setTransform(27.3,2.6);

	// Слой_3
	this.instance = new lib.ClipGroup_30();
	this.instance.parent = this;
	this.instance.setTransform(27.3,2.6,1,1,0,0,0,27.2,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, new cjs.Rectangle(0.1,0,54.5,5.2), null);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4A6IAAhzIBxAAIAABzg");
	mask.setTransform(5.7,5.8);

	// Слой_3
	this.instance = new lib.ClipGroup_28();
	this.instance.parent = this;
	this.instance.setTransform(5.7,5.8,1,1,0,0,0,5.7,5.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0,0,11.4,11.5), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnCkIAAlHIBPAAIAAFHg");
	mask.setTransform(4,16.4);

	// Слой_3
	this.instance = new lib.ClipGroup_26();
	this.instance.parent = this;
	this.instance.setTransform(4,16.4,1,1,0,0,0,4,16.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkPAaIAAgzIIfAAIAAAzg");
	mask.setTransform(27.2,2.6);

	// Слой_3
	this.instance = new lib.ClipGroup_24();
	this.instance.parent = this;
	this.instance.setTransform(27.2,2.6,1,1,0,0,0,27.2,2.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0,0,54.5,5.2), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4A6IAAhzIBxAAIAABzg");
	mask.setTransform(5.7,5.8);

	// Слой_3
	this.instance = new lib.ClipGroup_22();
	this.instance.parent = this;
	this.instance.setTransform(5.7,5.8,1,1,0,0,0,5.7,5.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0.1,0,11.4,11.5), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnCkIAAlHIBPAAIAAFHg");
	mask.setTransform(4,16.4);

	// Слой_3
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(4,16.4,1,1,0,0,0,4,16.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnHWIAAurIDPAAIAAOrg");
	mask.setTransform(10.4,47);

	// Слой_3
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(10.4,47,1,1,0,0,0,10.4,47);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0,0,20.9,94), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnWBkIAAjHIOtAAIAADHg");
	mask.setTransform(47.1,10);

	// Слой_3
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(47.1,10,1,1,0,0,0,47.1,10);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,94.2,20), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiBCHIAAkOIEDAAIAAEOg");
	mask.setTransform(13,13.6);

	// Слой_3
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(13,13.6,1,1,0,0,0,13,13.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,26,27.1), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5DzIAAnlIBzAAIAAHlg");
	mask.setTransform(5.8,24.3);

	// Слой_3
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(5.8,24.3,1,1,0,0,0,5.8,24.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,11.5,48.6), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj0A1IAAhpIHoAAIAABpg");
	mask.setTransform(24.5,5.3);

	// Слой_3
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(24.4,5.3,1,1,0,0,0,24.4,5.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,48.9,10.6), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/CJIAAkRID/AAIAAERg");
	mask.setTransform(12.8,13.7);

	// Слой_3
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.7,1,1,0,0,0,12.8,13.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,25.6,27.4), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjoDmIAAnLIHRAAIAAHLg");
	mask.setTransform(23.3,23);

	// Слой_3
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(23.3,23,1,1,0,0,0,23.3,23);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.1,0,46.5,46.1), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgGnAzAMAAAhmAINPAAMAAABmAg");
	mask.setTransform(42.4,326.5);

	// Слой_3
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(42.4,326.4,1,1,0,0,0,42.4,326.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,84.8,652.9), null);


(lib.rounds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.round1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(15).to({scaleX:1.1,scaleY:1.1},10,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},10,cjs.Ease.quadInOut).wait(40));

	// Слой_3
	this.instance_1 = new lib.round2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.01,0.01);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1.31,scaleY:1.31},10,cjs.Ease.backOut).wait(18).to({scaleX:1.44,scaleY:1.44},10,cjs.Ease.quadInOut).to({scaleX:1.31,scaleY:1.31},10,cjs.Ease.quadInOut).wait(35));

	// Слой_2
	this.instance_2 = new lib.round3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.01,0.01);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1.62,scaleY:1.62},10,cjs.Ease.backOut).wait(21).to({scaleX:1.78,scaleY:1.78},10,cjs.Ease.quadInOut).to({scaleX:1.62,scaleY:1.62},10,cjs.Ease.quadInOut).wait(30));

	// Слой_7
	this.instance_3 = new lib.round4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.01,0.01);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1.93,scaleY:1.93},10,cjs.Ease.backOut).wait(24).to({scaleX:2.12,scaleY:2.12},10,cjs.Ease.quadInOut).to({scaleX:1.93,scaleY:1.93},10,cjs.Ease.quadInOut).wait(25));

	// Слой_6
	this.instance_4 = new lib.round5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.01,0.01);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({scaleX:2.24,scaleY:2.24},10,cjs.Ease.backOut).wait(27).to({scaleX:2.46,scaleY:2.46},10,cjs.Ease.quadInOut).to({scaleX:2.24,scaleY:2.24},10,cjs.Ease.quadInOut).wait(20));

	// Слой_5
	this.instance_5 = new lib.round6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.01,0.01);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({scaleX:2.55,scaleY:2.55},10,cjs.Ease.backOut).wait(30).to({scaleX:2.81,scaleY:2.81},10,cjs.Ease.quadInOut).to({scaleX:2.55,scaleY:2.55},10,cjs.Ease.quadInOut).wait(15));

	// Слой_11
	this.instance_6 = new lib.round7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.01,0.01);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({scaleX:2.86,scaleY:2.86},10,cjs.Ease.backOut).wait(33).to({scaleX:3.15,scaleY:3.15},10,cjs.Ease.quadInOut).to({scaleX:2.86,scaleY:2.86},10,cjs.Ease.quadInOut).wait(10));

	// Слой_10
	this.instance_7 = new lib.round8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.01,0.01);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({scaleX:3.17,scaleY:3.17},10,cjs.Ease.backOut).wait(36).to({scaleX:3.49,scaleY:3.49},10,cjs.Ease.quadInOut).to({scaleX:3.17,scaleY:3.17},10,cjs.Ease.quadInOut).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-6.3,16,16);


(lib.Group_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(42.4,326.4,1,1,0,0,0,42.4,326.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_50, new cjs.Rectangle(0,0,84.8,652.9), null);


(lib.Group_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(23.2,23,1,1,0,0,0,23.2,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_49, new cjs.Rectangle(0,0,46.6,46.1), null);


(lib.Group_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(12.8,13.7,1,1,0,0,0,12.8,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_47, new cjs.Rectangle(0,0,25.6,27.4), null);


(lib.Group_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(24.4,5.3,1,1,0,0,0,24.4,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_46, new cjs.Rectangle(0,0,48.9,10.7), null);


(lib.Group_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(5.8,24.3,1,1,0,0,0,5.8,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_45, new cjs.Rectangle(0,0,11.5,48.6), null);


(lib.Group_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(13,13.6,1,1,0,0,0,13,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_44, new cjs.Rectangle(0,0,26,27.1), null);


(lib.Group_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_15();
	this.instance.parent = this;
	this.instance.setTransform(47.1,10,1,1,0,0,0,47.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_43, new cjs.Rectangle(0,0,94.2,20), null);


(lib.Group_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(10.4,47,1,1,0,0,0,10.4,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_42, new cjs.Rectangle(0,0,20.9,94), null);


(lib.Group_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(4,16.4,1,1,0,0,0,4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_41, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.Group_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(5.7,5.8,1,1,0,0,0,5.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0,0,11.4,11.5), null);


(lib.Group_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_23();
	this.instance.parent = this;
	this.instance.setTransform(27.2,2.6,1,1,0,0,0,27.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_39, new cjs.Rectangle(0,0,54.5,5.2), null);


(lib.Group_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_25();
	this.instance.parent = this;
	this.instance.setTransform(4,16.4,1,1,0,0,0,4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_38, new cjs.Rectangle(0,0,8.1,32.8), null);


(lib.Group_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_27();
	this.instance.parent = this;
	this.instance.setTransform(5.7,5.8,1,1,0,0,0,5.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_37, new cjs.Rectangle(0,0,11.4,11.5), null);


(lib.Group_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_29();
	this.instance.parent = this;
	this.instance.setTransform(27.2,2.6,1,1,0,0,0,27.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_36, new cjs.Rectangle(0,0,54.5,5.2), null);


(lib.Group_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_31();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_35, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_33();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_34, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_35();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.Group_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_37();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_39();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_41();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,13,6.6), null);


(lib.Group_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_43();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_29, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_45();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_28, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_47();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_27, new cjs.Rectangle(0,0,12.9,6.6), null);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_49();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_51();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_53();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_55();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_57();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_59();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,13,6.7), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_61();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_63();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_65();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_67();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_69();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_71();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,13,6.7), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_73();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_75();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_77();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_79();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,7.6,12.2), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_81();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,21.3,22.2), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_83();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,13,6.7), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_85();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_87();
	this.instance.parent = this;
	this.instance.setTransform(10.6,11.1,1,1,0,0,0,10.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_89();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_91();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_93();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_95();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,13,6.7), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_97();
	this.instance.parent = this;
	this.instance.setTransform(3.8,6.1,1,1,0,0,0,3.8,6.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,7.6,12.3), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_99();
	this.instance.parent = this;
	this.instance.setTransform(10.7,11.1,1,1,0,0,0,10.7,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,21.3,22.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_101();
	this.instance.parent = this;
	this.instance.setTransform(6.5,3.3,1,1,0,0,0,6.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,12.9,6.7), null);


(lib.console = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgeAsgEAwQgHBLAxA1QAxA1BLAAQA4AAAyghQAOgJAKgLIBGg/QAagZAQggQASgiADgjQAHhLgxg1QgXgZgfgOQghgOglAAQhIAAg6A0IhDA+QgTARgNATg");
	this.shape.setTransform(32.5,-48.9,0.435,0.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgSARgNATIAAABQgdAqgFAyQgGBKAwA1QAXAZAfAOQAgAOAkAAQAyAAAugaQAVgMARgQ");
	this.shape_1.setTransform(32.6,-49.2,0.435,0.435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_2.setTransform(31.8,-41,0.435,0.435);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_3.setTransform(24.6,-48.9,0.435,0.435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#022FF5").ss(0.3).p("AjWAfQgGBLAwA1QAwA1BLAAQA6AAAwghQAMgIANgMIBFg/QAbgZAQggQARgiAEgjQADglgLgiQgLgggXgZQgXgZgfgOQgggOglAAQhJAAg6A0IhEA+QgSARgNATQgdArgFAxg");
	this.shape_4.setTransform(7.8,-48.9,0.435,0.435);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSARgOATIAAABQgdAsgFAwQgGBKAwA1QAXAZAgAOQAgAOAkAAQAyAAAtgaQAVgMARgQ");
	this.shape_5.setTransform(7.9,-49.2,0.435,0.435);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_6.setTransform(7.1,-41,0.435,0.435);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_7.setTransform(-0.1,-48.9,0.435,0.435);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgeAsgEAwQgHBLAxA1QAwA1BLAAQA5AAAyghQANgJALgLIBFg/QA5g1AHhJQAHhLgxg1QgXgZgfgOQghgOglAAQgkAAghAOQgiANgbAZIhEA+QgSARgNATg");
	this.shape_8.setTransform(-16.9,-48.9,0.435,0.435);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgSARgNATIAAABQgdAqgFAyQgGBKAwA1QAXAZAfAOQAgAOAkAAQAyAAAugaQAVgMARgQ");
	this.shape_9.setTransform(-16.9,-49.2,0.435,0.435);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_10.setTransform(-17.6,-41,0.435,0.435);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_11.setTransform(-24.8,-48.9,0.435,0.435);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdAqgFAyQgGBLAwA1QAwA1BLAAQA5AAAyghQAKgHAOgMIBFhAQAbgZARggQARgiADgjQAGhKgwg2QgXgZgfgOQghgOgkAAQglAAghAOQghANgbAZIhEA+QgSARgOATg");
	this.shape_12.setTransform(34.7,-74.2,0.435,0.435);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSAQgNAUIgBAAQgdAsgFAxQgDAkAMAhQAKAhAXAZQAXAZAgANQAgAPAkAAQAyAAAtgaQAVgNARgP");
	this.shape_13.setTransform(34.8,-74.4,0.435,0.435);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_14.setTransform(34,-66.3,0.435,0.435);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#022FF5").ss(0.3).p("AggAfIBBg9");
	this.shape_15.setTransform(26.9,-74.2,0.435,0.435);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdArgFAxQgGBLAwA1QAxA1BLAAQA4AAAyghQANgJALgKIBGhAQAbgZAQggQARgiADgjQAGhLgwg1QgXgZgfgOQghgOgkAAQhJAAg5A0IhEA+QgSARgOATg");
	this.shape_16.setTransform(10,-74.2,0.435,0.435);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgRAQgOAUIAAAAQgdArgFAyQgDAkALAhQALAhAXAZQAXAZAfANQAhAPAjAAQAyAAAtgaIABAAQAXgOAPgO");
	this.shape_17.setTransform(10.1,-74.4,0.435,0.435);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_18.setTransform(9.3,-66.3,0.435,0.435);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_19.setTransform(2.1,-74.2,0.435,0.435);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdAqgFAyQgGBLAwA1QAwA1BLAAQA5AAAyghQAKgHAOgMIBFhAQAbgZARggQARgiADgjQAGhKgwg2QgXgZgfgOQghgOgkAAQhJAAg5A0IhEA+QgSARgOATg");
	this.shape_20.setTransform(-14.7,-74.2,0.435,0.435);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSAQgNAUIgBAAQgdAsgFAxQgDAkAMAhQAKAhAXAZQAXAZAgANQAgAPAkAAQAyAAAtgaQAVgNARgP");
	this.shape_21.setTransform(-14.7,-74.4,0.435,0.435);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_22.setTransform(-15.4,-66.3,0.435,0.435);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBCg9");
	this.shape_23.setTransform(-22.6,-74.2,0.435,0.435);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdArgFAxQgGBLAwA1QAxA1BLAAQA3AAAzghQAPgKAJgJIBGhAQA5g1AGhJQADglgLghQgLghgXgZQgXgZgfgOQgggOglAAQgkAAgiAOQghANgbAZIhEA+QgRARgPATg");
	this.shape_24.setTransform(36.9,-99.4,0.435,0.435);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgRAQgOAUIAAABQgdAqgFAyQgDAkALAhQALAhAXAZQAXAZAfAOQAgAOAkAAQAyAAAugaQAVgMARgQ");
	this.shape_25.setTransform(37,-99.6,0.435,0.435);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_26.setTransform(36.3,-91.5,0.435,0.435);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_27.setTransform(29.1,-99.4,0.435,0.435);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdAqgFAyQgGBLAwA1QAwA1BLAAQA4AAAyghQAMgHANgMIBFhAQA5g1AHhJQADglgLghQgLghgXgZQgXgZgfgOQgggOglAAQhKABg5AzIhEA+QgSARgNATg");
	this.shape_28.setTransform(12.2,-99.4,0.435,0.435);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSAQgOAUIAAABQgdArgFAxQgDAkAMAhQAKAhAXAZQAwA1BKAAQAzAAAtgaQAVgMARgQ");
	this.shape_29.setTransform(12.3,-99.6,0.435,0.435);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_30.setTransform(11.5,-91.5,0.435,0.435);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_31.setTransform(4.3,-99.4,0.435,0.435);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdArgFAxQgGBLAwA1QAxA1BLAAQA3AAAzghQAPgKAJgJIBGhAQA5g1AGhJQADglgLghQgLghgXgZQgXgZgfgOQgggOglAAQhJABg5AzIhEA+QgSARgOATg");
	this.shape_32.setTransform(-12.5,-99.4,0.435,0.435);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgRAQgOAUIAAABQgdAqgFAyQgDAkALAhQALAhAXAZQAwA1BKAAQAyAAAugaQAVgMARgQ");
	this.shape_33.setTransform(-12.4,-99.6,0.435,0.435);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_34.setTransform(-13.2,-91.5,0.435,0.435);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_35.setTransform(-20.4,-99.4,0.435,0.435);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdArgFAxQgGBLAwA1QAwA1BLAAQA5AAAxghQALgHAOgMIBFhAQAbgZAQggQARgiAEgjQAGhLgwg1QgXgZgfgOQgggOglAAQhJAAg6A0IhEA+QgSARgNATg");
	this.shape_36.setTransform(39.1,-124.6,0.435,0.435);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSAQgOAUIAAAAQgdAsgFAxQgGBKAwA1QAXAZAfANQAgAPAkAAQAyAAAugaQAVgNARgP");
	this.shape_37.setTransform(39.2,-124.8,0.435,0.435);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_38.setTransform(38.5,-116.7,0.435,0.435);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_39.setTransform(31.3,-124.6,0.435,0.435);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgdAqgFAyQgGBLAwA1QAwA1BLAAQA5AAAxghQALgHAOgMIBFhAQA5g0AHhKQAGhKgwg2QgXgZgfgOQghgOgkAAQhJAAg6A0IhEA+QgSARgNATg");
	this.shape_40.setTransform(14.4,-124.6,0.435,0.435);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#022FF5").ss(0.3).p("AhSiaQgSAQgOAUIAAAAQgdAsgFAxQgGBKAwA1QAXAZAgANQAgAPAkAAQAyAAAtgaQATgLATgR");
	this.shape_41.setTransform(14.5,-124.8,0.435,0.435);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_42.setTransform(13.7,-116.7,0.435,0.435);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#022FF5").ss(0.3).p("AggAfIBBg9");
	this.shape_43.setTransform(6.5,-124.6,0.435,0.435);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#022FF5").ss(0.3).p("Ai0g9QgeAsgEAwQgGBLAwA1QAwA1BLAAQA5AAAxghQAOgJALgKIBFhAQAbgZAQggQARgiAEgjQAGhLgwg1Qgxg1hKAAQhJAAg6A0IhEA+QgSARgNATg");
	this.shape_44.setTransform(-10.3,-124.6,0.435,0.435);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#022FF5").ss(0.3).p("AhTiaQgSARgNATIAAAAQgdArgFAyQgGBKAwA1QAXAZAfANQAgAPAkAAQAyAAAugaQAVgNARgP");
	this.shape_45.setTransform(-10.2,-124.8,0.435,0.435);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_46.setTransform(-11,-116.7,0.435,0.435);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_47.setTransform(-18.2,-124.6,0.435,0.435);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_48.setTransform(28.6,89.6,0.435,0.435);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#022FF5").ss(0.3).p("AABAAIgBAB");
	this.shape_49.setTransform(25.4,92.5,0.435,0.435);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#022FF5").ss(0.3).p("AgiAgIBFg/");
	this.shape_50.setTransform(27,91.1,0.435,0.435);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#022FF5").ss(0.3).p("AAAABIABgB");
	this.shape_51.setTransform(25.4,92.5,0.435,0.435);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#022FF5").ss(0.3).p("AEEgJQgWARgbAAInbAA");
	this.shape_52.setTransform(14,93,0.435,0.435);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_53.setTransform(4,92,0.435,0.435);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_54.setTransform(1.1,88.8,0.435,0.435);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#022FF5").ss(0.3).p("AAggcIg/A5");
	this.shape_55.setTransform(3.1,75.3,0.435,0.435);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#022FF5").ss(0.3).p("AgBACIADgD");
	this.shape_56.setTransform(1.6,76.6,0.435,0.435);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_57.setTransform(1.6,76.6,0.435,0.435);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#022FF5").ss(0.3).p("AgVCeIAWkHQADgbATgU");
	this.shape_58.setTransform(0.6,83.3,0.435,0.435);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#022FF5").ss(0.3).p("AgFAFIAKgJ");
	this.shape_59.setTransform(4.7,73.8,0.435,0.435);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#022FF5").ss(0.3).p("AgEAFQAEgEAGgG");
	this.shape_60.setTransform(4.7,73.8,0.435,0.435);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#022FF5").ss(0.3).p("AkmiuQAWgRAZAAIHbAAQAfAAATAWQATAVgCAeIgXEHQgCAcgUAT");
	this.shape_61.setTransform(17.8,81.2,0.435,0.435);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#022FF5").ss(0.3).p("AAUgKQgTAQgYAE");
	this.shape_62.setTransform(27.6,90.2,0.435,0.435);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#022FF5").ss(0.3).p("AAKgPQgNAPgFAU");
	this.shape_63.setTransform(4,74.7,0.435,0.435);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_64.setTransform(28.6,89.6,0.435,0.435);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#022FF5").ss(0.3).p("AANiHIgCAJIgWEH");
	this.shape_65.setTransform(3.1,81.5,0.435,0.435);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#022FF5").ss(0.3).p("AAkAiQgeAAgTgVQgTgVACge");
	this.shape_66.setTransform(3.9,89.2,0.435,0.435);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#022FF5").ss(0.3).p("AjyAAIHbAAIAKAA");
	this.shape_67.setTransform(16,90.7,0.435,0.435);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#022FF5").ss(0.3).p("AAkAiQgfAAgSgVQgTgUACgf");
	this.shape_68.setTransform(0.9,91.9,0.435,0.435);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_69.setTransform(-9.3,89.6,0.435,0.435);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#022FF5").ss(0.3).p("AABAAIgBAB");
	this.shape_70.setTransform(-12.5,92.5,0.435,0.435);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#022FF5").ss(0.3).p("AgiAgIBFg/");
	this.shape_71.setTransform(-10.9,91.1,0.435,0.435);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#022FF5").ss(0.3).p("AAAABIABgB");
	this.shape_72.setTransform(-12.5,92.5,0.435,0.435);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#022FF5").ss(0.3).p("AEEgJQgXARgaAAInbAA");
	this.shape_73.setTransform(-23.9,93,0.435,0.435);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_74.setTransform(-34,92,0.435,0.435);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#022FF5").ss(0.3).p("AghAfIBDg9");
	this.shape_75.setTransform(-36.9,88.8,0.435,0.435);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#022FF5").ss(0.3).p("AAfgcIg9A5");
	this.shape_76.setTransform(-34.8,75.3,0.435,0.435);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#022FF5").ss(0.3).p("AgBACIADgD");
	this.shape_77.setTransform(-36.3,76.6,0.435,0.435);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_78.setTransform(-36.3,76.6,0.435,0.435);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#022FF5").ss(0.3).p("AgVCeIAWkHQACgbAUgU");
	this.shape_79.setTransform(-37.4,83.3,0.435,0.435);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#022FF5").ss(0.3).p("AgFAFIALgJ");
	this.shape_80.setTransform(-33.2,73.8,0.435,0.435);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#022FF5").ss(0.3).p("AgEAFQACgCAJgI");
	this.shape_81.setTransform(-33.3,73.8,0.435,0.435);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#022FF5").ss(0.3).p("AkmiuQAWgRAZAAIHbAAQAeAAAUAWQATAVgCAeIgYEHQgCAbgTAU");
	this.shape_82.setTransform(-20.1,81.2,0.435,0.435);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#022FF5").ss(0.3).p("AAUgKQgTAQgYAE");
	this.shape_83.setTransform(-10.3,90.2,0.435,0.435);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#022FF5").ss(0.3).p("AAKgPQgNAPgFAU");
	this.shape_84.setTransform(-33.9,74.7,0.435,0.435);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_85.setTransform(-9.3,89.6,0.435,0.435);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#022FF5").ss(0.3).p("AANiHIgCAJIgWEH");
	this.shape_86.setTransform(-34.9,81.5,0.435,0.435);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#022FF5").ss(0.3).p("AAkAiQgeAAgTgVQgTgVACge");
	this.shape_87.setTransform(-34.1,89.2,0.435,0.435);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#022FF5").ss(0.3).p("AjyAAIHbAAIAJAA");
	this.shape_88.setTransform(-21.9,90.7,0.435,0.435);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#022FF5").ss(0.3).p("AAkAiQgeAAgTgVQgTgUACgf");
	this.shape_89.setTransform(-37,91.9,0.435,0.435);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_90.setTransform(-25.6,-7.2,0.435,0.435);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#022FF5").ss(0.3).p("ABWhOIirCd");
	this.shape_91.setTransform(-23.1,28.2,0.435,0.435);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#022FF5").ss(0.3).p("AAUGCIBEg+QAHgGgEgJQguhsALh4QALh4BAhrQAFgIgGgGIjHjcQgEgEgGAAQgGABgEAFQgUAagYAm");
	this.shape_92.setTransform(-20.3,7.9,0.435,0.435);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#022FF5").ss(0.3).p("ABGmvQh1C5gTDTQgLB9AbB3QAaBzA6BlQADAFAGAAQAGABAEgF");
	this.shape_93.setTransform(-29.2,13.1,0.435,0.435);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#022FF5").ss(0.3).p("ABanPQhMBkguBzQgvB3gLB+QgLB9AbB3QAZBzA7BlQACAFAGAAQAGABAFgEIBDg/");
	this.shape_94.setTransform(-31,14.4,0.435,0.435);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#022FF5").ss(0.3).p("AHyhcIhEA+QhrBDh2AkQh6Amh9AAQh+AAh0gmQhvgkhfhDQgFgDAAgGQAAgGAFgEIBEg+");
	this.shape_95.setTransform(-0.4,45.3,0.435,0.435);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#022FF5").ss(0.3).p("ABVhOIipCd");
	this.shape_96.setTransform(-15.1,37,0.435,0.435);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#022FF5").ss(0.3).p("Al6hKIBEg+QAHgHAHAFQBnA3B4AAQB4AABwg3QAJgFAGAHIDIDbQAEAEgBAGQgBAGgFADQghAVgjAS");
	this.shape_97.setTransform(5.2,36.8,0.435,0.435);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#022FF5").ss(0.3).p("AGugVQjCBljTAAQh9AAh0glQhwgkhehDQgFgDAAgGQAAgGAFgE");
	this.shape_98.setTransform(-0.4,43.9,0.435,0.435);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_99.setTransform(30.4,32.9,0.435,0.435);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_100.setTransform(20.8,22.8,0.435,0.435);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_101.setTransform(20.8,23.4,0.435,0.435);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#022FF5").ss(0.3).p("Ai1jxIDujcQAFgEAGAAQAGABACAFQA8BkAZBzQAbB4gLB8QgLB+gvB3QguBzhMBlQgEAFgGAAQgGABgEgEIgDgE");
	this.shape_102.setTransform(32.1,11.5,0.435,0.435);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#022FF5").ss(0.3).p("ABlFfIjEjYQgGgGAFgIQBAhrALh4QALh4guhsQgDgIAGgH");
	this.shape_103.setTransform(26.5,16.2,0.435,0.435);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#022FF5").ss(0.3).p("ABwF7QgEAFgGABQgGAAgEgEIjHjbQgGgHAFgIQBBhsAKh3QALh4guhsQgEgIAHgHIBDg+");
	this.shape_104.setTransform(24.1,17.7,0.435,0.435);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_105.setTransform(-5.8,-6.4,0.435,0.435);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_106.setTransform(-6.5,-6.5,0.435,0.435);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#022FF5").ss(0.3).p("AAigeIhDA9");
	this.shape_107.setTransform(-15.1,-16.9,0.435,0.435);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#022FF5").ss(0.3).p("AGKBwIBDg+QAFgFAAgGQAAgFgFgEQhehDhwgkQh0glh+AAQh9AAh6AlQh2AkhrBDQgFAEgBAFQgBAGAEAFIADAD");
	this.shape_108.setTransform(6.4,-19.6,0.435,0.435);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#022FF5").ss(0.3).p("AGrgzIisCcQgGAHgIgFQhng3h4AAQh4AAhwA3QgJAFgGgHIjFjX");
	this.shape_109.setTransform(5,-12.5,0.435,0.435);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#022FF5").ss(0.3).p("AHRhlIjvDaQgHAHgIgEQhmg4h4AAQh5AAhwA4QgIAEgGgHIjJjaQgEgEACgGQABgGAFgE");
	this.shape_110.setTransform(3.3,-10.3,0.435,0.435);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQArgYAbgoQAcgqAEgxQAHhKgxg1Qgwg1hKAAQgxAAgsAZQgqAXgcAo");
	this.shape_111.setTransform(37,-76.2,0.435,0.435);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#022FF5").ss(0.3).p("ACDBvQgtAagyAAQhKAAgxg1Qgwg1AGhKQAFgyAdgr");
	this.shape_112.setTransform(34,-73.7,0.435,0.435);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#022FF5").ss(0.3).p("ACCBvQgtAagyAAQhKAAgwg1Qgwg1AGhKQAFgzAdgq");
	this.shape_113.setTransform(9.3,-73.7,0.435,0.435);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQAqgYAbgoQAcgqAFgxQAGhKgwg1Qgxg1hKAAQgwAAgsAZQgrAXgbAo");
	this.shape_114.setTransform(12.2,-76.2,0.435,0.435);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#022FF5").ss(0.3).p("AhfiIQgdAqgFAzQgGBKAwA1QAwA1BKAAQAyAAAuga");
	this.shape_115.setTransform(-15.5,-73.7,0.435,0.435);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#022FF5").ss(0.3).p("AijhPQAbgoArgXQAsgZAxAAQBJAAAxA1QAwA1gGBKQgFAxgcAqQgbAogqAY");
	this.shape_116.setTransform(-12.5,-76.2,0.435,0.435);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#022FF5").ss(0.3).p("ACDBvQgvAagwAAQhKAAgxg1Qgwg1AGhKQAFgyAdgr");
	this.shape_117.setTransform(31.8,-48.5,0.435,0.435);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQArgYAbgpQAcgpAEgxQAHhKgxg1Qgwg1hKAAQgxAAgsAYQgqAXgcAp");
	this.shape_118.setTransform(34.8,-51,0.435,0.435);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#022FF5").ss(0.3).p("AijhPQAcgpAqgXQAsgYAxAAQBKAAAwA1QAxA1gHBKQgEAxgcApQgbApgrAY");
	this.shape_119.setTransform(10,-51,0.435,0.435);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#022FF5").ss(0.3).p("AhfiIQgdArgFAyQgGBKAwA1QAxA1BKAAQAwAAAvga");
	this.shape_120.setTransform(7,-48.5,0.435,0.435);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#022FF5").ss(0.3).p("AijhPQAbgpArgXQAsgYAwAAQBKAAAxA1QAwA1gGBKQgFAxgcApQgbApgqAY");
	this.shape_121.setTransform(-14.7,-51,0.435,0.435);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#022FF5").ss(0.3).p("AhfiIQgdAqgFAzQgGBKAwA1QAwA1BKAAQAxAAAuga");
	this.shape_122.setTransform(-17.7,-48.5,0.435,0.435);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQArgYAbgoQAcgqAEgxQAHhKgxg1Qgwg1hKAAQgxAAgsAZQgqAXgcAo");
	this.shape_123.setTransform(39.2,-101.3,0.435,0.435);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#022FF5").ss(0.3).p("ACDBvQgtAagyAAQhKAAgxg1Qgwg1AGhKQAFgxAdgs");
	this.shape_124.setTransform(36.2,-98.9,0.435,0.435);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQAqgYAbgoQAcgqAFgxQAGhKgwg1Qgxg1hKAAQgwAAgsAZQgrAXgbAo");
	this.shape_125.setTransform(14.4,-101.3,0.435,0.435);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#022FF5").ss(0.3).p("ACCBvQgtAagyAAQhKAAgwg1Qgwg1AGhKQAFgyAdgr");
	this.shape_126.setTransform(11.5,-98.9,0.435,0.435);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#022FF5").ss(0.3).p("AhfiIQgdAsgFAxQgGBKAwA1QAwA1BKAAQAyAAAuga");
	this.shape_127.setTransform(-13.3,-98.9,0.435,0.435);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#022FF5").ss(0.3).p("AijhPQAbgoArgXQAsgZAxAAQBKAAAwA1QAwA1gGBKQgFAxgbAqQgbAogrAY");
	this.shape_128.setTransform(-10.3,-101.3,0.435,0.435);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQAqgYAbgpQAcgqAFgwQAGhKgwg1Qgxg1hKAAQgwAAgsAYQgrAYgbAo");
	this.shape_129.setTransform(41.4,-126.5,0.435,0.435);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#022FF5").ss(0.3).p("ACCBvQgtAagyAAQhKAAgwg1Qgwg1AGhKQAFgzAdgq");
	this.shape_130.setTransform(38.4,-124,0.435,0.435);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#022FF5").ss(0.3).p("ACCBvQgtAagyAAQhKAAgwg1Qgwg1AGhKQAFgzAdgq");
	this.shape_131.setTransform(13.7,-124,0.435,0.435);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#022FF5").ss(0.3).p("AA+CoQAqgYAbgpQAcgqAFgwQAGhKgwg1Qgxg1hKAAQgwAAgsAYQgrAYgbAo");
	this.shape_132.setTransform(16.6,-126.5,0.435,0.435);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#022FF5").ss(0.3).p("ACkBQQgcApgqAXQgsAYgxAAQhKAAgwg1Qgwg1AGhKQAFgxAbgpQAbgpArgY");
	this.shape_133.setTransform(32.5,-72.3,0.435,0.435);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgqAYgbApQgcApgFAxQgGBKAwA1QAxA1BKAAQAwAAAsgYQArgXAbgp");
	this.shape_134.setTransform(7.8,-72.3,0.435,0.435);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgrAYgbApQgcApgEAxQgGBKAwA1QAwA1BKAAQAxAAAsgYQAqgXAcgp");
	this.shape_135.setTransform(-16.9,-72.3,0.435,0.435);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#022FF5").ss(0.3).p("ACkBQQgcAogqAXQgsAZgxAAQhKAAgwg1Qgwg1AGhKQAEgxAcgqQAbgoArgY");
	this.shape_136.setTransform(30.3,-47.2,0.435,0.435);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgqAYgbAoQgcAqgFAxQgGBKAwA1QAxA1BJAAQAxAAAsgZQArgXAbgo");
	this.shape_137.setTransform(5.6,-47.2,0.435,0.435);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgqAYgbAoQgcAqgFAxQgGBKAwA1QAxA1BKAAQAwAAAsgZQArgXAbgo");
	this.shape_138.setTransform(-19.2,-47.2,0.435,0.435);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#022FF5").ss(0.3).p("ACkBQQgbAogrAYQgsAYgxAAQhJAAgxg1Qgwg1AGhKQAFgwAbgqQAbgpArgY");
	this.shape_139.setTransform(34.7,-97.5,0.435,0.435);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgqAYgbApQgcAqgFAwQgGBKAwA1QAxA1BKAAQAwAAAsgYQArgYAbgo");
	this.shape_140.setTransform(10,-97.5,0.435,0.435);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#022FF5").ss(0.3).p("Ag9inQgrAYgbApQgcAqgEAwQgGBKAwA1QAwA1BKAAQAxAAAsgYQAqgYAcgo");
	this.shape_141.setTransform(-14.7,-97.5,0.435,0.435);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#022FF5").ss(0.3).p("ACkBQQgbAogrAXQgsAZgwAAQhKAAgxg1Qgwg1AGhKQAFgxAcgqQAbgoAqgY");
	this.shape_142.setTransform(36.9,-122.6,0.435,0.435);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#022FF5").ss(0.3).p("ACkBQQgbAogrAXQgsAZgwAAQhKAAgxg1Qgwg1AGhKQAFgxAcgqQAbgoAqgY");
	this.shape_143.setTransform(12.2,-122.6,0.435,0.435);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#022FF5").ss(0.3).p("AiQCFIEhkJ");
	this.shape_144.setTransform(-57.7,134.6,0.435,0.435);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#022FF5").ss(0.3).p("ACRiEIkhEJ");
	this.shape_145.setTransform(-49.2,143.9,0.435,0.435);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#022FF5").ss(0.3).p("AAdgZIg5Az");
	this.shape_146.setTransform(24.4,147,0.435,0.435);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#022FF5").ss(0.3).p("AiAB1IEBjp");
	this.shape_147.setTransform(31.3,140.7,0.435,0.435);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#022FF5").ss(0.3).p("AAKgIIgTAS");
	this.shape_148.setTransform(-37.7,-134.9,0.435,0.435);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_149.setTransform(-37.1,-135.4,0.435,0.435);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#022FF5").ss(0.3).p("ACPiDIkdEH");
	this.shape_150.setTransform(-30.8,-141.2,0.435,0.435);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_151.setTransform(-24.5,-147,0.435,0.435);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#022FF5").ss(0.3).p("EgP3gyrQAggdAngQQApgRArAAIaQAAQBZAAA5A/QA6A/gIBZMgIdBglQgIBZhEA/QhEA/hZAAIg0AA");
	this.shape_152.setTransform(19.8,-5.8,0.435,0.435);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#022FF5").ss(0.3).p("AglBnIAEg0QAEgrAUgmQASgmAfge");
	this.shape_153.setTransform(-26.3,-142.6,0.435,0.435);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#022FF5").ss(0.3).p("ABlBpQhZAAg4g/Qg6g+AIhZ");
	this.shape_154.setTransform(-47.2,133.5,0.435,0.435);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#022FF5").ss(0.3).p("AMvAAI5cAA");
	this.shape_155.setTransform(-7.4,138.1,0.435,0.435);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#022FF5").ss(0.3).p("EAEMgv4MgIXBfx");
	this.shape_156.setTransform(-39.7,-4.7,0.435,0.435);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#022FF5").ss(0.3).p("AACgBIgDAD");
	this.shape_157.setTransform(-37.1,-135.4,0.435,0.435);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#022FF5").ss(0.3).p("EgEyAxgMAIchglQAEgrAUgnQATgmAfge");
	this.shape_158.setTransform(-50.6,2.4,0.435,0.435);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#022FF5").ss(0.3).p("ABlBpQhZAAg4g/Qg5g+AHhZ");
	this.shape_159.setTransform(-59.9,145.2,0.435,0.435);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#022FF5").ss(0.3).p("AgdAZQAggUAZgf");
	this.shape_160.setTransform(24.4,147,0.435,0.435);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#022FF5").ss(0.3).p("AOFgSQg5AkhDAAI6QAA");
	this.shape_161.setTransform(-16.1,148.9,0.435,0.435);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(33.9,-41.4,0.435,0.435,0,0,0,6.5,3.2);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,-44.7,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.2,-50.9,0.435,0.435,0,0,0,3.9,6);
	this.instance_2.alpha = 0.199;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AisCfQgxg1AHhLQAFgwAdgsIABABQANgUARgQIBFg/QA5g0BIAAQAlAAAhAPQAfANAXAZQAxA1gHBLQgDAjgSAiQgPAggbAZIhGA/QgKALgPAJQgxAhg5AAQhKAAgxg1g");
	this.shape_162.setTransform(32.5,-48.9,0.435,0.435);

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.2,-41.4,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.4,-44.7,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_4.alpha = 0.398;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.5,-50.9,0.435,0.435,0,0,0,3.8,6);
	this.instance_5.alpha = 0.199;

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgxAdgrIAAABQANgUASgQIBEg/QA6g0BJAAQAlAAAgAPQAfANAXAZQAXAZALAgQALAjgDAkQgEAjgRAiQgQAggbAZIhFA/QgNAMgMAIQgwAhg6AAQhLAAgwg1g");
	this.shape_163.setTransform(7.8,-48.9,0.435,0.435);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-15.5,-41.4,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_6.alpha = 0.602;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-21.4,-44.7,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_7.alpha = 0.398;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-24.2,-50.9,0.435,0.435,0,0,0,3.9,6);
	this.instance_8.alpha = 0.199;

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAEgwAegsIAAABQAOgUASgQIBDg/QAbgYAigOQAhgOAkAAQAlAAAhAPQAfANAXAZQAwA1gGBLQgGBJg6A1IhFA/QgLALgNAJQgyAhg5AAQhLAAgwg1g");
	this.shape_164.setTransform(-16.9,-48.9,0.435,0.435);

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(36.1,-66.7,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(30.3,-70,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_10.alpha = 0.398;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(27.4,-76.2,0.435,0.435,0,0,0,3.8,6);
	this.instance_11.alpha = 0.199;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgyAdgqQAOgTASgRIBEg+QAbgZAhgNQAhgOAlAAQAkAAAhAOQAfAOAXAZQAwA2gGBKQgDAjgRAiQgRAggbAZIhFBAQgOAMgKAHQgyAhg5AAQhLAAgwg1g");
	this.shape_165.setTransform(34.7,-74.2,0.435,0.435);

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(11.4,-66.7,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_12.alpha = 0.602;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(5.6,-70,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_13.alpha = 0.398;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(2.7,-76.2,0.435,0.435,0,0,0,3.9,6);
	this.instance_14.alpha = 0.199;

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgxAdgrQAOgTASgRIBEg+QA5g0BJAAQAkAAAhAOQAfAOAXAZQAwA1gGBLQgDAjgRAiQgQAggbAZIhGBAQgLAKgNAJQgyAhg4AAQhLAAgxg1g");
	this.shape_166.setTransform(10,-74.2,0.435,0.435);

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-13.3,-66.7,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-19.2,-70,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_16.alpha = 0.398;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-22,-76.2,0.435,0.435,0,0,0,3.8,6);
	this.instance_17.alpha = 0.199;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgyAdgqQAOgTASgRIBEg+QA5g0BJAAQAkAAAhAOQAfAOAXAZQAwA2gGBKQgDAjgRAiQgRAggbAZIhFBAQgOAMgKAHQgyAhg5AAQhLAAgwg1g");
	this.shape_167.setTransform(-14.7,-74.2,0.435,0.435);

	this.instance_18 = new lib.Group_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(38.4,-91.9,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_18.alpha = 0.602;

	this.instance_19 = new lib.Group_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(32.5,-95.2,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_19.alpha = 0.398;

	this.instance_20 = new lib.Group_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(29.6,-101.4,0.435,0.435,0,0,0,3.8,6.1);
	this.instance_20.alpha = 0.199;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgxAdgrQAPgTARgRIBEg+QAbgZAhgNQAigOAkAAQAlAAAgAOQAfAOAXAZQAXAZALAhQALAhgDAlQgGBJg5A1IhGBAQgJAJgPAKQgzAhg3AAQhLAAgxg1g");
	this.shape_168.setTransform(36.9,-99.4,0.435,0.435);

	this.instance_21 = new lib.Group_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(13.6,-91.9,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_21.alpha = 0.602;

	this.instance_22 = new lib.Group_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(7.8,-95.2,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_22.alpha = 0.398;

	this.instance_23 = new lib.Group_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(4.9,-101.4,0.435,0.435,0,0,0,3.8,6.1);
	this.instance_23.alpha = 0.199;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgyAdgqQANgTASgRIBEg+QA5gzBKgBQAlAAAgAOQAfAOAXAZQAXAZALAhQALAhgDAlQgHBJg5A1IhFBAQgNAMgMAHQgyAhg4AAQhLAAgwg1g");
	this.shape_169.setTransform(12.2,-99.4,0.435,0.435);

	this.instance_24 = new lib.Group_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-11.1,-91.9,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_24.alpha = 0.602;

	this.instance_25 = new lib.Group_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-17,-95.2,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_25.alpha = 0.398;

	this.instance_26 = new lib.Group_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-19.8,-101.4,0.435,0.435,0,0,0,3.8,6.1);
	this.instance_26.alpha = 0.199;

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgxAdgrQAOgTASgRIBEg+QA5gzBJgBQAlAAAgAOQAfAOAXAZQAXAZALAhQALAhgDAlQgGBJg5A1IhGBAQgJAJgPAKQgzAhg3AAQhLAAgxg1g");
	this.shape_170.setTransform(-12.5,-99.4,0.435,0.435);

	this.instance_27 = new lib.Group_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(40.6,-117.1,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_27.alpha = 0.602;

	this.instance_28 = new lib.Group_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(34.7,-120.4,0.435,0.435,0,0,0,10.8,11.1);
	this.instance_28.alpha = 0.398;

	this.instance_29 = new lib.Group_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(31.8,-126.6,0.435,0.435,0,0,0,3.8,6.1);
	this.instance_29.alpha = 0.199;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgxAdgrIAAAAQANgTASgRIBEg+QA6g0BJAAQAlAAAgAOQAfAOAXAZQAwA1gGBLQgEAjgRAiQgQAggbAZIhFBAQgOAMgLAHQgxAhg5AAQhLAAgwg1g");
	this.shape_171.setTransform(39.1,-124.6,0.435,0.435);

	this.instance_30 = new lib.Group_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(15.8,-117.1,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_30.alpha = 0.602;

	this.instance_31 = new lib.Group_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(10,-120.4,0.435,0.435,0,0,0,10.7,11.1);
	this.instance_31.alpha = 0.398;

	this.instance_32 = new lib.Group_32();
	this.instance_32.parent = this;
	this.instance_32.setTransform(7.1,-126.6,0.435,0.435,0,0,0,3.8,6.1);
	this.instance_32.alpha = 0.199;

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAFgyAdgqQANgTASgRIBEg+QA6g0BJAAQAkAAAhAOQAfAOAXAZQAwA2gGBKQgHBKg5A0IhFBAQgOAMgLAHQgxAhg5AAQhLAAgwg1g");
	this.shape_172.setTransform(14.4,-124.6,0.435,0.435);

	this.instance_33 = new lib.Group_33();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-8.9,-117.1,0.435,0.435,0,0,0,6.5,3.2);
	this.instance_33.alpha = 0.602;

	this.instance_34 = new lib.Group_34();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-14.7,-120.4,0.435,0.435,0,0,0,10.8,11.1);
	this.instance_34.alpha = 0.398;

	this.instance_35 = new lib.Group_35();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-17.6,-126.6,0.435,0.435,0,0,0,3.9,6.1);
	this.instance_35.alpha = 0.199;

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AisCfQgwg1AGhLQAEgwAegsIAAAAQANgTASgRIBEg+QA6g0BJAAQBKAAAxA1QAwA1gGBLQgEAjgRAiQgQAggbAZIhFBAQgLAKgOAJQgxAhg5AAQhLAAgwg1g");
	this.shape_173.setTransform(-10.3,-124.6,0.435,0.435);

	this.instance_36 = new lib.Group_36();
	this.instance_36.parent = this;
	this.instance_36.setTransform(15.1,92,0.435,0.435,0,0,0,27.4,2.6);
	this.instance_36.alpha = 0.602;

	this.instance_37 = new lib.Group_37();
	this.instance_37.parent = this;
	this.instance_37.setTransform(2.4,90.7,0.435,0.435,0,0,0,5.8,5.8);
	this.instance_37.alpha = 0.398;

	this.instance_38 = new lib.Group_38();
	this.instance_38.parent = this;
	this.instance_38.setTransform(1.8,82.4,0.435,0.435,0,0,0,4.2,16.3);
	this.instance_38.alpha = 0.199;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AkhDyQghAAgVgXQgWgXADghIAXkHQAEgeAUgVIABgBIAAgBIACgBIBNhGQAYgRAaAAIHbAAQAiAAAUAXQAWAYgDAgIgXEGQgDAegVAWIAAAAIgBABIhLBFIgBAAIAAABQgYATgdAAg");
	this.shape_174.setTransform(15.1,83.1,0.435,0.435);

	this.instance_39 = new lib.Group_39();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-22.9,92,0.435,0.435,0,0,0,27.2,2.6);
	this.instance_39.alpha = 0.602;

	this.instance_40 = new lib.Group_40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-35.5,90.7,0.435,0.435,0,0,0,5.8,5.8);
	this.instance_40.alpha = 0.398;

	this.instance_41 = new lib.Group_41();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-36.2,82.4,0.435,0.435,0,0,0,4,16.3);
	this.instance_41.alpha = 0.199;

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AkhDyQggAAgWgXQgVgXACghIAYkHQACgdAVgWIADgDIACgBIBLhFIAAAAQAXgRAcAAIHaAAQAhAAAWAXQAVAXgDAhIgXEGQgCAdgWAXIgBABIgCACIhHBBIAAAAIgCACIgBABQgYATgdAAg");
	this.shape_175.setTransform(-22.8,83.1,0.435,0.435);

	this.instance_42 = new lib.Group_42();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-30.3,13.8,0.435,0.435,0,0,0,10.5,46.9);
	this.instance_42.alpha = 0.398;

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("Ah9H3QgHgBgEgEIgCgDQg9hngah3Qgah2ALh8QALh7Avh3QAuh2BPhnIAFADIgEgEIBDg+QAFgGAIgBQAJgCAGAHIDJDcQAIAJgHANQhABpgKB4QgLB2AuBqQAFAMgLAKIkxEaQgHAFgHAAIgCAAg");
	this.shape_176.setTransform(-24.8,12.8,0.435,0.435);

	this.instance_43 = new lib.Group_43();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-1.1,45.5,0.435,0.435,0,0,0,47.2,9.9);
	this.instance_43.alpha = 0.602;

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AkeDBQhzgkhhhGIgDgCQgEgFAAgHQAAgIAGgHIEzkZQAKgJAMAGQBkA2B4AAQB4AABtg2QAOgGAIAJIDIDcQAGAFgBAJQgCAJgHAEIhDA+QhuBHh6AkQh5Akh8AAQh8AAhzgkg");
	this.shape_177.setTransform(-0.2,40.4,0.435,0.435);

	this.instance_44 = new lib.Group_44();
	this.instance_44.parent = this;
	this.instance_44.setTransform(25.4,28.4,0.435,0.435,0,0,0,13,13.6);
	this.instance_44.alpha = 0.602;

	this.instance_45 = new lib.Group_45();
	this.instance_45.parent = this;
	this.instance_45.setTransform(22.9,12.3,0.435,0.435,0,0,0,5.8,24.2);
	this.instance_45.alpha = 0.398;

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgmHyIjIjcQgEgEgBgGQAAgGADgGQBAhqALh3QAKh3gthpQgFgMAKgKIEykaQAGgHAJACQAJABAEAHQA9BnAaB2QAaB2gLB9QgLB7gvB2QguB2hPBoIhDA/QgGAHgIAAIgCAAQgIAAgFgFg");
	this.shape_178.setTransform(29.6,12.8,0.435,0.435);

	this.instance_46 = new lib.Group_46();
	this.instance_46.parent = this;
	this.instance_46.setTransform(4.7,-7.6,0.435,0.435,0,0,0,24.4,5.2);
	this.instance_46.alpha = 0.602;

	this.instance_47 = new lib.Group_47();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-11,-11.5,0.435,0.435,0,0,0,12.8,13.6);
	this.instance_47.alpha = 0.398;

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("ACrDjQhmg3h2AAQh3AAhuA3QgNAGgJgKIjJjbQgFgGABgJQACgHAHgGIBEg/QBuhFB5glQB5gkB8AAQB8AABzAkQBzAlBhBFQAHAGAAAIQAAAJgHAGIkyEZQgGAHgHAAQgFAAgEgDg");
	this.shape_179.setTransform(5,-14.7,0.435,0.435);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0F2A54").s().p("AwACKIEUj9IaOAAQAwAAAvgWIkIDuQg4AlhAAAg");
	this.shape_180.setTransform(-10.2,143.5,0.435,0.435);

	this.instance_48 = new lib.Group_49();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-53.6,139.4,0.435,0.435,0,0,0,23.3,22.9);
	this.instance_48.alpha = 0.199;

	this.instance_49 = new lib.Group_50();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-45.2,-2.4,0.435,0.435,0,0,0,42.4,326.4);
	this.instance_49.alpha = 0.199;

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#0C1590").ss(0.3).p("EANSAwwIAAAAQAlgfAWgpQAXgrAEgvMAIdhglQAEgtgOgoQgNgogcggQgdgfgngRQgngQgsAAI6QAAQhZAAhHA/IkmEOIAAAAIgUATIABABQgyA7gHBLMgIdBglQgDAtANApQANAoAcAeQAcAfAmARQAoARAtAAIaQAAQBEAAA8gmQAhgWAaggg");
	this.shape_181.setTransform(0,0,0.435,0.435);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#19468B").s().p("EgT6A11QgtAAgogRQgmgRgcgfQgcgegNgoQgNgpADgtMAIdhglQAHhLAyg7IgBgBIAUgTIAAAAIEmkOQBHg/BZAAIaQAAQAsAAAnAQQAnARAdAfQAcAgANAoQAOAogEAtMgIdBglQgEAvgXArQgWApglAfIAAAAIkBDpQgaAgghAWQg8AmhEAAg");
	this.shape_182.setTransform(0,0,0.435,0.435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.instance_49},{t:this.instance_48},{t:this.shape_180},{t:this.shape_179},{t:this.instance_47},{t:this.instance_46},{t:this.shape_178},{t:this.instance_45},{t:this.instance_44},{t:this.shape_177},{t:this.instance_43},{t:this.shape_176},{t:this.instance_42},{t:this.shape_175},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.shape_174},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_173},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_172},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.shape_171},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.shape_170},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.shape_169},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.shape_168},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_167},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_166},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_165},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_164},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_163},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_162},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.console, new cjs.Rectangle(-65.3,-151,130.6,302), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bgImg_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,0.5,0.5,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({alpha:1},10).wait(1));

	// t
	this.instance_1 = new lib.t();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.5,-165.6,2,2,0,0,0,0,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.cubicIn).wait(120));

	// t
	this.instance_2 = new lib.t_black();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4,-161.1,2,2,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5,cjs.Ease.cubicIn).wait(120));

	// cans
	this.instance_3 = new lib.cans_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(284.5,101);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({x:14.5},10,cjs.Ease.cubicOut).wait(120));

	// console
	this.instance_4 = new lib.console();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38.1,85.8,0.411,0.411,0,0,0,-1.1,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({regX:-1,scaleX:0.41,scaleY:0.41,rotation:-24,x:-100.1},10,cjs.Ease.cubicOut).wait(95));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_53 = new cjs.Graphics().p("Al8DxICbpBIJeAYIAAKJg");
	var mask_graphics_54 = new cjs.Graphics().p("AoIBtIFDnmILOBqIAAKJg");
	var mask_graphics_55 = new cjs.Graphics().p("AqJBXIFBorIPSEgIAAKJg");
	var mask_graphics_56 = new cjs.Graphics().p("AC0HCIvbm+IFAosIUPHIIAAKJg");
	var mask_graphics_57 = new cjs.Graphics().p("AFuIrI1PqPIFAotIaDKYIAAKKg");
	var mask_graphics_58 = new cjs.Graphics().p("AI2KpI7guMIFBosMAgUAOVIAAKKg");
	var mask_graphics_59 = new cjs.Graphics().p("ALfMXMggxgRQIEGpEMAmfARxIAAKKg");
	var mask_graphics_60 = new cjs.Graphics().p("AN1OBMgldgSjIC/rFMAsSAVEIAAKKg");
	var mask_graphics_61 = new cjs.Graphics().p("APgOYMgo0gTSIAZrEIF+AvMAsSAVEIAAKKg");
	var mask_graphics_62 = new cjs.Graphics().p("ARzOCMgrDgTLIiWqfIK7ACMAsSAVEIAAKKg");
	var mask_graphics_63 = new cjs.Graphics().p("ASWOBMguEgRYIgbsPIMBgBMAsSAVEIAAKKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_graphics_53,x:165.6,y:170.9}).wait(1).to({graphics:mask_graphics_54,x:151.6,y:166.8}).wait(1).to({graphics:mask_graphics_55,x:138.7,y:157.7}).wait(1).to({graphics:mask_graphics_56,x:122.8,y:149.3}).wait(1).to({graphics:mask_graphics_57,x:104.2,y:138.9}).wait(1).to({graphics:mask_graphics_58,x:84.2,y:126.2}).wait(1).to({graphics:mask_graphics_59,x:67.3,y:115.2}).wait(1).to({graphics:mask_graphics_60,x:52.3,y:104.7}).wait(1).to({graphics:mask_graphics_61,x:41.6,y:102.3}).wait(1).to({graphics:mask_graphics_62,x:26.9,y:104.6}).wait(1).to({graphics:mask_graphics_63,x:23.4,y:104.7}).wait(107));

	// film
	this.instance_5 = new lib.film();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-14.7,148.2);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).wait(117));

	// light
	this.instance_6 = new lib.light_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9,83);
	this.instance_6.alpha = 0;
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({alpha:0.602},10).wait(120));

	// btn
	this.instance_7 = new lib.btn_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,180,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(10).to({scaleX:1.2,scaleY:1.2},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},5,cjs.Ease.quadInOut).to({alpha:0},10).to({_off:true},1).wait(129));

	// bg
	this.instance_8 = new lib.bgImg_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({regY:0.1,scaleX:1.2,scaleY:1.2,y:190,alpha:0},15,cjs.Ease.cubicIn).wait(130));

	// rounds
	this.instance_9 = new lib.rounds("single",25);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,84);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).wait(70).to({mode:"synched",loop:false},0).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '391CEAE05404470988FA32E9FC90C000',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/cans.png", id:"cans"},
		{src:"images/light.png", id:"light"}
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