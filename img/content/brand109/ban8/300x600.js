(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,476);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,452);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,454);


(lib.btn_bg = function() {
	this.initialize(img.btn_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,160);


(lib.chips = function() {
	this.initialize(img.chips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,86);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,772);// helper functions:

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


(lib.t5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("At7D3IAAgyIi3AAIAAm2IBFAAIAAF3IBPAAIAAl3IBHAAIAAF3IAjAAIAABxgAN7CtQgbgcAAg2IAAjjQAAg1AbgcQAcgdAzAAQAzAAAbAdQAbAdAAA0IAADjQAAA1gbAdQgbAdgzAAQgzAAgcgdgAOviuQgJAKAAAYIAADsQAAAYAJAJQAKAKARAAQAQAAAKgKQAKgKAAgXIAAjsQAAgYgKgKQgKgJgQAAQgRAAgKAJgAm6CtQgagdAAg1IAAjjQAAg0AagdQAbgdAyAAQA0AAAaAdQAaAcAAA1IAAArIhCAAIAAgvQAAgYgKgKQgJgJgRAAQgQAAgKAJQgKAKAAAYIAADsQAAAYAKAJQAKAJAQAAQARAAAJgJQAKgJAAgYIAAg/IBCAAIAAA6QAAA2gaAcQgaAdg0AAQgyAAgbgdgALxDFIAAi8IhPAAIAAC8IhFAAIAAm2IBFAAIAAC8IBPAAIAAi8IBHAAIAAG2gAHrDFIAAipQgKAEgIAAIgUABQgzAAgagcQgagbAAg2IAAilIBFAAIAACpQAAAYAKAJQAJAKARAAQAQAAAJgJQAKgIABgVIAAiuIBFAAIAAG2gAESDFIgMhQIhVAAIgMBQIg/AAIBGm2IBmAAIBGG2gAD9A6IghjdIgiDdIBDAAgAADDFIAAk6IgvE6IhCAAIg0k2IAAE2Ig8AAIAAm2IBgAAIA0E2IAvk2IBfAAIAAG2gAsWDFIAAm2IC9AAIAAA/Ih3AAIAAB6IBfAAIAAA+IhfAAIAACAIB3AAIAAA/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(20,1,1).p("AESjxIhmAAIhGG2IA/AAIAMhQIBVAAIAMBQIBGAAgAFejxIAAClQAAA2AaAbQAaAcAzAAQAHAAANgBQAIAAAKgEIAACpIBFAAIAAm2IhFAAIAACuQgBAVgKAIQgJAJgQAAQgRAAgJgKQgKgJAAgYIAAipgAKiAJIBPAAIAAC8IBHAAIAAm2IhHAAIAAC8IhPAAIAAi8IhFAAIAAG2IBFAAgANgBbQAAA2AbAcQAcAdAzAAQAzAAAbgdQAbgdAAg1IAAjjQAAg0gbgdQgbgdgzAAQgzAAgcAdQgbAcAAA1gAOmiMQAAgYAJgKQAKgJARAAQAQAAAKAJQAKAKAAAYIAADsQAAAXgKAKQgKAKgQAAQgRAAgKgKQgJgJAAgYgAh+jxIhgAAIAAG2IA8AAIAAk2IA0E2IBCAAIAvk6IAAE6IBBAAIAAm2IhfAAIgvE2gADcijIAhDdIhDAAgAvtjxIhFAAIAAG2IC3AAIAAAyIBHAAIAAhxIgjAAIAAl3IhHAAIAAF3IhPAAgArQiyIB3AAIAAg/Ii9AAIAAG2IC9AAIAAg/Ih3AAIAAiAIBfAAIAAg+IhfAAgAlHAhIAAA/QAAAYgKAJQgJAJgRAAQgQAAgKgJQgKgJAAgYIAAjsQAAgYAKgKQAKgJAQAAQARAAAJAJQAKAKAAAYIAAAvIBCAAIAAgrQAAg1gagcQgagdg0AAQgyAAgbAdQgaAdAAA0IAADjQAAA1AaAdQAbAdAyAAQA0AAAagdQAagcAAg2IAAg6g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("At7D3IAAgyIi3AAIAAm2IBFAAIAAF3IBPAAIAAl3IBHAAIAAF3IAjAAIAABxgAN7CtQgbgcAAg2IAAjjQAAg1AbgcQAcgdAzAAQAzAAAbAdQAbAdAAA0IAADjQAAA1gbAdQgbAdgzAAQgzAAgcgdgAOviuQgJAKAAAYIAADsQAAAYAJAJQAKAKARAAQAQAAAKgKQAKgKAAgXIAAjsQAAgYgKgKQgKgJgQAAQgRAAgKAJgAm6CtQgagdAAg1IAAjjQAAg0AagdQAbgdAyAAQA0AAAaAdQAaAcAAA1IAAArIhCAAIAAgvQAAgYgKgKQgJgJgRAAQgQAAgKAJQgKAKAAAYIAADsQAAAYAKAJQAKAJAQAAQARAAAJgJQAKgJAAgYIAAg/IBCAAIAAA6QAAA2gaAcQgaAdg0AAQgyAAgbgdgALxDFIAAi8IhPAAIAAC8IhFAAIAAm2IBFAAIAAC8IBPAAIAAi8IBHAAIAAG2gAHrDFIAAipQgKAEgIAAIgUABQgzAAgagcQgagbAAg2IAAilIBFAAIAACpQAAAYAKAJQAJAKARAAQAQAAAJgJQAKgIABgVIAAiuIBFAAIAAG2gAESDFIgMhQIhVAAIgMBQIg/AAIBGm2IBmAAIBGG2gAD9A6IghjdIgiDdIBDAAgAADDFIAAk6IgvE6IhCAAIg0k2IAAE2Ig8AAIAAm2IBgAAIA0E2IAvk2IBfAAIAAG2gAsWDFIAAm2IC9AAIAAA/Ih3AAIAAB6IBfAAIAAA+IhfAAIAACAIB3AAIAAA/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_2, new cjs.Rectangle(-117.5,-34.7,235.1,69.4), null);


(lib.t5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("AC3DEQgbgdAAg1IAAjjQAAg1AbgdQAZgcA0AAQAzAAAaAcQAaAcAAA2IAAArIhBAAIAAgwQAAgXgKgKQgKgKgQABQgRgBgJAKQgKAKAAAXIAADtQAAAXAKAJQAJAKARAAQAQAAAKgKQAKgJAAgXIAAg/IBBAAIAAA6QAAA2gaAcQgaAcgzAAQg0AAgZgcgAIwDcIAAk9IhWE9IhIAAIAAm3IA+AAIAAEGIBHkGIBYAAIAAG3gAAtDcIAAl4IhOAAIAAF4IhFAAIAAm3IDaAAIAAG3gAjRDcIAAk9IhXE9IhHAAIAAm3IA+AAIAAEGIBHkGIBXAAIAAG3gAnhDcIAAiqQgGADgMACIgUABQgzAAgagdQgagbAAg2IAAilIBFAAIAACqQAAAYAKAJQAKAKAQAAQAQAAAKgJQAJgIABgVIAAivIBGAAIAAG3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(20,1,1).p("AEqA4IAAA/QAAAYgKAJQgKAJgQAAQgRAAgJgJQgKgJAAgYIAAjtQAAgXAKgKQAJgKARAAQAQAAAKAKQAKAKAAAXIAAAvIBBAAIAAgqQAAg2gagcQgagdgzAAQg0AAgZAdQgbAdAAA1IAADjQAAA1AbAdQAZAdA0AAQAzAAAagdQAagcAAg2IAAg6gAIwhiIAAE+IA/AAIAAm3IhYAAIhHEGIAAkGIg+AAIAAG3IBIAAgAghicIBOAAIAAF4IBHAAIAAm3IjaAAIAAG3IBFAAgApujbIAAClQAAA2AaAbQAaAdAzAAIAUgBQAMgCAGgCIAACpIBGAAIAAm3IhGAAIAACvQgBAVgJAIQgKAIgQAAQgQAAgKgJQgKgJAAgYIAAiqgAjRhiIAAE+IA+AAIAAm3IhXAAIhHEGIAAkGIg+AAIAAG3IBHAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AC3DEQgbgdAAg1IAAjjQAAg1AbgdQAZgcA0AAQAzAAAaAcQAaAcAAA2IAAArIhBAAIAAgwQAAgXgKgKQgKgKgQABQgRgBgJAKQgKAKAAAXIAADtQAAAXAKAJQAJAKARAAQAQAAAKgKQAKgJAAgXIAAg/IBBAAIAAA6QAAA2gaAcQgaAcgzAAQg0AAgZgcgAIwDcIAAk9IhWE9IhIAAIAAm3IA+AAIAAEGIBHkGIBYAAIAAG3gAAtDcIAAl4IhOAAIAAF4IhFAAIAAm3IDaAAIAAG3gAjRDcIAAk9IhXE9IhHAAIAAm3IA+AAIAAEGIBHkGIBXAAIAAG3gAnhDcIAAiqQgGADgMACIgUABQgzAAgagdQgagbAAg2IAAilIBFAAIAACqQAAAYAKAJQAKAKAQAAQAQAAAKgJQAJgIABgVIAAivIBGAAIAAG3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5_1, new cjs.Rectangle(-72.3,-32.4,144.6,64.9), null);


(lib.t3_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvdAGbIE0tIMBaHgDEIk0Tjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_w, new cjs.Rectangle(-303.8,-62.6,607.6,125.3), null);


(lib.t3_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("EgvdAGbIE0tIMBaHgDEIk0Tjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_r, new cjs.Rectangle(-303.8,-62.6,607.6,125.3), null);


(lib.t3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("ASVD4QgcgeAAg6IAAj0QAAg4AcggQAcgeA2AAQA3AAAcAeQAcAgAAA4IAAAuIhGAAIAAgyQAAgagLgKQgKgLgSAAQgRAAgKALQgLAKAAAaIAAD+QAAAaALAJQALAKAQAAQARAAALgKQALgJAAgaIAAhEIBGAAIAAA+QAAA6gcAeQgcAfg3AAQg2AAgcgfgAuxD4QgdgfAAg5IAAhYIgsAAIAADKIhKAAIAAnWIBKAAIAADIIAsAAIAAhYQAAg4AdggQAegeA2AAQA2AAAdAeQAdAfAAA5IAAD0QAAA6gdAeQgdAfg2AAQg3AAgdgfgAt5h8QgLAKAAAaIAAD+QAAAZALALQAKAKASAAQASAAAJgKQALgLAAgZIAAj+QAAgagLgKQgJgLgSAAQgSAAgKALgAnLESIAAhEIAaABQARAAANgIQAMgKAAgbIAAlmIDqAAIAAHWIhKAAIAAmTIhWAAIAAEeQAAAkgJAWQgJAYgOAMQgPAOgTAEQgRAGgXAAgA2hESIAAhEIAaABQARAAANgIQAMgKAAgbIAAlmIDqAAIAAHWIhKAAIAAmTIhWAAIAAEeQAAAlgJAVQgJAYgOAMQgPAOgTAEQgRAGgXAAgA6XESIAAhEIAZABQAJAAAIgCQAHgCAGgGQAGgFADgKQADgJAAgQIhslhIBKAAIBRESIBEkSIBJAAIhgFaQgOAygMAYQgNAagPALQgPAMgRABQgRABgVAAgEAm+AESIAAlVIhcFVIhMAAIAAnWIBCAAIAAEZIBMkZIBcAAIAAHWgEAinAESIhIi8IgXArIAACRIhKAAIAAnWIBKAAIAADMIBijMIBJAAIhnDRIBnEFgAeRESIgNhWIhbAAIgMBWIhEAAIBLnWIBsAAIBLHWgAd6B8IgkjtIgjDtIBHAAgAZwESIAAlRIgzFRIhGAAIg3lMIAAFMIhBAAIAAnWIBnAAIA2FNIAzlNIBmAAIAAHWgAOYESIAAnWIBKAAIAAHWgAIUESIAAnWIBJAAIAAGSIA8AAIAAmSIBKAAIAAGSIA8AAIAAmSIBLAAIAAHWgAGbESIAAnWIBKAAIAAHWgAEhESIAAjKIhUAAIAADKIhKAAIAAnWIBKAAIAADIIBUAAIAAjIIBLAAIAAHWgAhuESIAAnWIDJAAIAABDIh/AAIAACCIBlAAIAABDIhlAAIAACKIB/AAIAABEgArCESIAAnWIDDAAIAABDIh5AAIAABtIAiAAQA4ABAbAcQAcAdAAA6IAAA9QAAA6gcAdQgaAdg5ABgAp4DOIAiAAQASABAJgKQAKgKAAgZIAAhGQAAgbgKgIQgJgKgSAAIgiAAgA8mESIAAlVIhcFVIhLAAIAAnWIBBAAIAAEZIBMkZIBdAAIAAHWgEgg7AESIgNhWIhaAAIgNBWIhEAAIBLnWIBsAAIBMHWgEghSAB8IgjjtIgkDtIBHAAgEgliAESIAAjKIhUAAIAADKIhJAAIAAnWIBJAAIAADIIBUAAIAAjIIBMAAIAAHWgA+ojfIAAg3ICiAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_mc, new cjs.Rectangle(-256,-27.9,512.1,55.8), null);


(lib.t2_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8NpxMAznACpIE0NiMgznADXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_w, new cjs.Rectangle(-180.6,-62.5,361.2,125.1), null);


(lib.t2_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("A8NpwMAznACoIE0NjMgznADWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_r, new cjs.Rectangle(-180.6,-62.5,361.2,125.1), null);


(lib.t2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("AmZD4QgcgfAAg5IAAj0QAAg4AcgfQAbgeA3gBQA3ABAbAeQAcAfAAA4IAAAuIhFAAIAAgyQAAgagLgKQgJgLgTAAQgRAAgLALQgKAKAAAaIAAD9QAAAaAKAKQAMAKAQAAQASAAAKgKQALgKAAgaIAAhEIBFAAIAAA/QAAA5gcAfQgbAeg3AAQg3AAgbgegAMFERIAAhDIAZAAQAKAAAHgCQAIgCAGgFQAFgGAEgJQADgKAAgQIhslgIBJAAIBSESIBDkSIBKAAIhhFZQgMAwgOAaQgNAbgPAKQgOALgRACQgRABgVAAgATQERIAAlUIhcFUIhLAAIAAnVIBBAAIAAEYIBMkYIBdAAIAAHVgAJ4ERIhIi7IgXArIAACQIhKAAIAAnVIBKAAIAADLIBijLIBIAAIhmDRIBmEEgAFiERIgNhWIhbAAIgMBWIhFAAIBMnVIBsAAIBLHVgAFLB8IgkjtIgkDtIBIAAgABBERIAAlRIgzFRIhGAAIg3lLIAAFLIhAAAIAAnVIBnAAIA2FNIAxlNIBnAAIAAHVgAqOERIAAlUIhdFUIhLAAIAAnVIBBAAIAAEYIBNkYIBcAAIAAHVgAvxERIAAmSIhNAAIAAhDIDkAAIAABDIhNAAIAAGSgA0SERIAAnVIBKAAIAAHVgAROjeIAAg3ICiAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_mc, new cjs.Rectangle(-129.8,-27.8,259.7,55.7), null);


(lib.t1_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+nK8IE02TMA4bgDgIk0TiImgglIiQKyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_w, new cjs.Rectangle(-196,-95.2,392,190.4), null);


(lib.t1_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("A+nK8IE02TMA4bgDgIk0TiImfglIiRKyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_r, new cjs.Rectangle(-196,-95.2,392,190.4), null);


(lib.t1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("AI5JCQgcgfAAg5IAAggIBGAAIAAAlQAAAaAKAJQAKAKASAAQASAAAKgKQAKgKAAgZQAAgYgKgTQgLgSgQgRQgQgQgTgRQgSgQgQgUQgRgTgKgZQgLgZAAgiQAAg4AbgfQAbgfA3AAQA2AAAbAfQAcAeAAA5IAAATIhGAAIAAgXQAAgagKgKQgJgLgSAAQgRAAgKALQgKALAAAZQAAAXALATQAKASARARQAQARASAQQASARARATQAQAUALAZQAKAZAAAhQAAA6gcAeQgbAeg3AAQg3AAgbgegAn+JCQgcgfAAg5IAAggIBGAAIAAAlQAAAaAKAJQAKAKASAAQASAAAKgKQAKgKAAgZQAAgYgKgTQgLgSgQgRQgQgQgTgRQgSgQgQgUQgRgTgKgZQgLgZAAgiQAAg4AbgfQAbgfA3AAQA2AAAbAfQAcAeAAA5IAAATIhGAAIAAgXQAAgagKgKQgJgLgSAAQgRAAgKALQgKALAAAZQAAAXALATQAKASARARQAQARASAQQASARARATQAQAUALAZQAKAZAAAhQAAA6gcAeQgbAeg3AAQg3AAgbgegA2MJCQgcgfAAg5IAAj1QAAg4AcgfQAbgfA3AAQA3AAAbAfQAcAfAAA4IAAAuIhGAAIAAgyQAAgagKgKQgLgLgRAAQgRAAgLALQgKAKAAAaIAAD+QAAAaAKAJQAKAKASAAQASAAAKgKQAKgJAAgaIAAhEIBGAAIAAA/QAAA5gcAfQgbAeg3AAQg3AAgbgegAPkJbIAAhHIBHAAIAABHgAOCJbIAAhHIBHAAIAABHgAMgJbIAAhHIBHAAIAABHgAFxJbIgCgJIgDgKIgBgPIAAhiQAAgggMgOQgMgOgZAAIgZAAIAADAIhKAAIAAnXIBvAAQA6AAAaAbQAaAbAAA3IAAAlQAABIgxAXQAdAMAKAZQAKAbAAAkIAABJQAAASACAMQABAOAFANgAEhFYIAdAAQAVAAALgLQAMgKAAgdIAAguQAAgZgJgMQgJgLgUAAIgjAAgAgbJbIAAnXIDJAAIAABEIiAAAIAACDIBmAAIAABDIhmAAIAACKICAAAIAABDgAjVJbIAAmTIhNAAIAAhEIDkAAIAABEIhNAAIAAGTgAsSJbIAAnXIBtAAQA4AAAbAeQAbAeAAA5IAAA9QAAA5gbAeQgbAdg4AAIgjAAIAACxgArIFnIAjAAQARAAAKgJQAJgLAAgYIAAhHQAAgZgJgKQgKgJgRAAIgjAAgAuLJbIAAnXIBKAAIAAHXgAwFJbIAAjKIhUAAIAADKIhKAAIAAnXIBKAAIAADKIBUAAIAAjKIBLAAIAAHXgAHiBuIhJhPIBQAAIAwBPgAT3idQgcgfAAg5IAAj0QAAg5AcgfQAbgeA3AAQA3AAAbAeQAcAfAAA5IAAAuIhGAAIAAgzQAAgZgKgLQgLgKgRAAQgRAAgLAKQgKALAAAZIAABaIBlAAIAABDIhlAAIAABhQAAAaAKAKQALAKARAAQARAAALgKQAKgKAAgaIAAhDIBGAAIAAA+QAAA5gcAfQgbAfg3AAQg3AAgbgfgAjYidQgcgeAAg6IAAj0QAAg6AcgeQAbgeA3AAQA2AAAcAeQAcAfAAA5IAAAuIhGAAIAAgzQAAgZgKgLQgLgKgRAAQgSAAgKAKQgKALAAAZIAAD+QAAAaAKAKQALAKARAAQARAAALgKQAKgKAAgaIAAhDIBGAAIAAA+QAAA6gcAeQgcAfg2AAQg3AAgbgfgAtQidQgcgfAAg5IAAj0QAAg5AcgfQAbgeA3AAQA3AAAbAeQAcAfAAA5IAAAuIhGAAIAAgzQAAgZgKgLQgLgKgRAAQgSAAgKAKQgKALAAAZIAAD+QAAAaAKAKQAKAKASAAQARAAALgKQAKgKAAgaIAAhDIBGAAIAAA+QAAA5gcAfQgbAfg3AAQg3AAgbgfgAPGiEIAAhDIAZABQAJAAAIgCQAHgCAGgGQAGgFADgKQADgKAAgQIhslhIBKAAIBRETIBEkTIBJAAIhgFbQgOAygMAYQgMAZgQAMQgOALgSABQgRACgVAAgA22iEIAAhDIAZABQARAAANgJQANgJAAgbIAAlnIDpAAIAAHWIhKAAIAAmTIhWAAIAAEeQAAAkgIAXQgJAXgPANQgOANgUAFQgUAGgUAAgAM4iEIhIi7IgWArIAACQIhKAAIAAnWIBKAAIAADNIBijNIBIAAIhnDSIBnEEgAIiiEIgNhVIhaAAIgNBVIhEAAIBLnWIBsAAIBMHWgAILkZIgjjuIgkDuIBHAAgAEBiEIAAlRIgzFRIhGAAIg3lMIAAFMIhAAAIAAnWIBmAAIA3FOIAylOIBnAAIAAHWgAnViEIAAi/IgaAAQgZAAgMANQgLAOAAAhIAABhIgCAQIgCAKIgDAIIhLAAQAFgMACgOQABgNAAgSIAAhIQAAgmAKgZQALgaAcgMQgwgWAAhJIAAglQAAg2AagbQAZgbA6AAIBwAAIAAHWgAoVoLQgJALAAAaIAAAuQAAAdALAKQAMALAVAAIAdAAIAAiRIgkAAQgUAAgIAMgAxZiEIAAnWIDJAAIAABDIh/AAIAACDIBlAAIAABDIhlAAIAACKIB/AAIAABDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_mc, new cjs.Rectangle(-146.3,-60.8,292.7,121.7), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chips();
	this.instance.parent = this;
	this.instance.setTransform(38,-43,1,1,0,0,180);

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


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD549").s().p("AgOAtQgRgIgEgVQgDgLAFgOIBKAZQAAAOgLAKQgKAJgLAAIgCAAQgMAAgJgEgAgogfIAGgJQAFgEAEgCIAyArIgBADgAgBgvQAFgCAGABQAHABAGAEQAFAEACAHQACAGAAAIQgBAFgCAAg");
	this.shape.setTransform(-20.2,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFzBZQgMgNAAgYIAAgPIAgAAIAAARQAAAKADAEQAFAEAHAAQAGAAAFgEQADgEAAgKQAAgKgDgIIgMgPIgOgNIgPgPQgHgIgEgLQgFgKAAgPQAAgYAMgNQALgOAYAAQAXAAAMAOQAMANAAAYIAAAJIggAAIAAgLQAAgKgEgEQgEgEgGAAQgIAAgDAEQgEAEAAAKQAAAKAEAIQAEAIAIAGIAOAOQAIAHAGAHQAIAJAEALQAFAKAAAPQAAAYgMANQgMAOgYAAQgXAAgMgOgAgwBZQgMgNABgYIAAgPIAfAAIAAARQAAAKAEAEQAEAEAHAAQAGAAAFgEQADgEAAgKQAAgKgEgIQgEgIgGgHIgPgNQgIgHgGgIQgIgIgEgLQgFgKAAgPQAAgYAMgNQAMgOAWAAQAYAAALAOQAMANAAAYIAAAJIgfAAIAAgLQgBgKgCgEQgEgEgHAAQgHAAgEAEQgDAEAAAKQAAAKADAIQAFAIAHAGIANAOQAIAHAHAHQAHAJAFALQAEAKAAAPQAAAYgMANQgLAOgYAAQgXAAgMgOgAm5BZQgMgNAAgYIAAhnQAAgYAMgNQAMgOAXAAQAYAAAMAOQAMANAAAYIAAAUIggAAIAAgWQAAgKgDgEQgFgEgHAAQgGAAgFAEQgDAEAAAKIAABrQAAAKADAEQAFAEAGAAQAHAAAFgEQADgEAAgKIAAgeIAgAAIAAAcQAAAYgMANQgMAOgYAAQgXAAgMgOgAE+BkIgDgIIgBgHIAAgpQAAgOgEgFQgFgGgLAAIgKAAIAABRIggAAIAAjHIAwAAQAZAAALALQALAMgBAXIAAAQQABAegTAJQALAFAEALQAEALAAAPIAAAfIABANIACALIABABgAEcgKIAMAAQAJAAAEgEQAFgEAAgMIAAgTQAAgLgEgFQgEgEgHAAIgPAAgACSBkIAAjHIBXAAIAAAeIg2AAIAAA2IAqAAIAAAcIgqAAIAAA5IA2AAIAAAegABFBkIAAipIggAAIAAgeIBiAAIAAAeIghAAIAACpgAijBkIAAjHIAwAAQAXAAALANQANAMAAAZIAAAaQAAAXgNANQgLANgXAAIgPAAIAABKgAiCgEIAPAAQAGAAAEgDQADgEAAgKIAAgeQAAgLgDgDQgEgEgGAAIgPAAgAjaBkIAAjHIAiAAIAADHgAkQBkIAAhVIgiAAIAABVIghAAIAAjHIAhAAIAABVIAiAAIAAhVIAhAAIAADHgAFahPIAAgUIATAAIgJAUg");
	this.shape_1.setTransform(0,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA0029").s().p("An9CUIAAknIEQAAQAEAVARAIQAKAFAOgBQALAAAKgJQALgKAAgOIKeAAIAAEngAFnA0QAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYQAAgPgFgKQgEgLgIgJQgGgHgIgHIgOgOQgIgGgEgIQgEgIAAgKQAAgKAEgEQADgEAIAAQAGAAAEAEQAEAEAAAKIAAALIAgAAIAAgJQAAgYgMgNQgMgOgXAAQgYAAgLAOQgMANAAAYQAAAPAFAKQAEALAHAIIAPAPIAOANIAMAPQADAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgFgEQgDgEAAgKIAAgRIggAAgAg7A0QgBAYAMANQAMAOAXAAQAYAAALgOQAMgNAAgYQAAgPgEgKQgFgLgHgJQgHgHgIgHIgNgOQgHgGgFgIQgDgIAAgKQAAgKADgEQAEgEAHAAQAHAAAEAEQACAEABAKIAAALIAfAAIAAgJQAAgYgMgNQgLgOgYAAQgWAAgMAOQgMANAAAYQAAAPAFAKQAEALAIAIQAGAIAIAHIAPANQAGAHAEAIQAEAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgEgEQgEgEAAgKIAAgRIgfAAgAm5hYQgMANAAAYIAABnQAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYIAAgcIggAAIAAAeQAAAKgDAEQgFAEgHAAQgGAAgFgEQgDgEAAgKIAAhrQAAgKADgEQAFgEAGAAQAHAAAFAEQADAEAAAKIAAAWIAgAAIAAgUQAAgYgMgNQgMgOgYAAQgXAAgMAOgAEmATQALAAAFAGQAEAFAAAOIAAApIABAHIADAIIAhAAIgBgBIgCgLIgBgNIAAgfQAAgPgEgLQgEgLgLgFQATgJgBgeIAAgQQABgXgLgMQgLgLgZAAIgwAAIAADHIAgAAIAAhRgACSBkIBXAAIAAgeIg2AAIAAg5IAqAAIAAgcIgqAAIAAg2IA2AAIAAgeIhXAAgAAlhFIAgAAIAACpIAhAAIAAipIAhAAIAAgeIhiAAgAijBkIAhAAIAAhKIAPAAQAXAAALgNQANgNAAgXIAAgaQAAgZgNgMQgLgNgXAAIgwAAgAjaBkIAiAAIAAjHIgiAAgAkQAPIAABVIAhAAIAAjHIghAAIAABVIgiAAIAAhVIghAAIAADHIAhAAIAAhVgAFahPIAKAAIAJgUIgTAAgAiCgEIAAhBIAPAAQAGAAAEAEQADADAAALIAAAeQAAAKgDAEQgEADgGAAgAEcgKIAAg7IAPAAQAHAAAEAEQAEAFAAALIAAATQAAAMgFAEQgEAEgJAAg");
	this.shape_2.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(20,1,1).p("AjtiTIkQAAIAAEnIP7AAIAAknIqeAA");
	this.shape_3.setTransform(0,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAD549").s().p("AgOAtQgRgIgEgVQgDgLAFgOIBKAZQAAAOgLAKQgKAJgLAAIgCAAQgMAAgJgEgAgogfIAGgJQAFgEAEgCIAyArIgBADgAgBgvQAFgCAGABQAHABAGAEQAFAEACAHQACAGAAAIQgBAFgCAAg");
	this.shape_4.setTransform(-20.2,-13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFzBZQgMgNAAgYIAAgPIAgAAIAAARQAAAKADAEQAFAEAHAAQAGAAAFgEQADgEAAgKQAAgKgDgIIgMgPIgOgNIgPgPQgHgIgEgLQgFgKAAgPQAAgYAMgNQALgOAYAAQAXAAAMAOQAMANAAAYIAAAJIggAAIAAgLQAAgKgEgEQgEgEgGAAQgIAAgDAEQgEAEAAAKQAAAKAEAIQAEAIAIAGIAOAOQAIAHAGAHQAIAJAEALQAFAKAAAPQAAAYgMANQgMAOgYAAQgXAAgMgOgAgwBZQgMgNABgYIAAgPIAfAAIAAARQAAAKAEAEQAEAEAHAAQAGAAAFgEQADgEAAgKQAAgKgEgIQgEgIgGgHIgPgNQgIgHgGgIQgIgIgEgLQgFgKAAgPQAAgYAMgNQAMgOAWAAQAYAAALAOQAMANAAAYIAAAJIgfAAIAAgLQgBgKgCgEQgEgEgHAAQgHAAgEAEQgDAEAAAKQAAAKADAIQAFAIAHAGIANAOQAIAHAHAHQAHAJAFALQAEAKAAAPQAAAYgMANQgLAOgYAAQgXAAgMgOgAm5BZQgMgNAAgYIAAhnQAAgYAMgNQAMgOAXAAQAYAAAMAOQAMANAAAYIAAAUIggAAIAAgWQAAgKgDgEQgFgEgHAAQgGAAgFAEQgDAEAAAKIAABrQAAAKADAEQAFAEAGAAQAHAAAFgEQADgEAAgKIAAgeIAgAAIAAAcQAAAYgMANQgMAOgYAAQgXAAgMgOgAE+BkIgDgIIgBgHIAAgpQAAgOgEgFQgFgGgLAAIgKAAIAABRIggAAIAAjHIAwAAQAZAAALALQALAMgBAXIAAAQQABAegTAJQALAFAEALQAEALAAAPIAAAfIABANIACALIABABgAEcgKIAMAAQAJAAAEgEQAFgEAAgMIAAgTQAAgLgEgFQgEgEgHAAIgPAAgACSBkIAAjHIBXAAIAAAeIg2AAIAAA2IAqAAIAAAcIgqAAIAAA5IA2AAIAAAegABFBkIAAipIggAAIAAgeIBiAAIAAAeIghAAIAACpgAijBkIAAjHIAwAAQAXAAALANQANAMAAAZIAAAaQAAAXgNANQgLANgXAAIgPAAIAABKgAiCgEIAPAAQAGAAAEgDQADgEAAgKIAAgeQAAgLgDgDQgEgEgGAAIgPAAgAjaBkIAAjHIAiAAIAADHgAkQBkIAAhVIgiAAIAABVIghAAIAAjHIAhAAIAABVIAiAAIAAhVIAhAAIAADHgAFahPIAAgUIATAAIgJAUg");
	this.shape_5.setTransform(0,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA0029").s().p("An9CUIAAknIEQAAQAEAVARAIQAKAFAOgBQALAAAKgJQALgKAAgOIKeAAIAAEngAFnA0QAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYQAAgPgFgKQgEgLgIgJQgGgHgIgHIgOgOQgIgGgEgIQgEgIAAgKQAAgKAEgEQADgEAIAAQAGAAAEAEQAEAEAAAKIAAALIAgAAIAAgJQAAgYgMgNQgMgOgXAAQgYAAgLAOQgMANAAAYQAAAPAFAKQAEALAHAIIAPAPIAOANIAMAPQADAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgFgEQgDgEAAgKIAAgRIggAAgAg7A0QgBAYAMANQAMAOAXAAQAYAAALgOQAMgNAAgYQAAgPgEgKQgFgLgHgJQgHgHgIgHIgNgOQgHgGgFgIQgDgIAAgKQAAgKADgEQAEgEAHAAQAHAAAEAEQACAEABAKIAAALIAfAAIAAgJQAAgYgMgNQgLgOgYAAQgWAAgMAOQgMANAAAYQAAAPAFAKQAEALAIAIQAGAIAIAHIAPANQAGAHAEAIQAEAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgEgEQgEgEAAgKIAAgRIgfAAgAm5hYQgMANAAAYIAABnQAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYIAAgcIggAAIAAAeQAAAKgDAEQgFAEgHAAQgGAAgFgEQgDgEAAgKIAAhrQAAgKADgEQAFgEAGAAQAHAAAFAEQADAEAAAKIAAAWIAgAAIAAgUQAAgYgMgNQgMgOgYAAQgXAAgMAOgAEmATQALAAAFAGQAEAFAAAOIAAApIABAHIADAIIAhAAIgBgBIgCgLIgBgNIAAgfQAAgPgEgLQgEgLgLgFQATgJgBgeIAAgQQABgXgLgMQgLgLgZAAIgwAAIAADHIAgAAIAAhRgACSBkIBXAAIAAgeIg2AAIAAg5IAqAAIAAgcIgqAAIAAg2IA2AAIAAgeIhXAAgAAlhFIAgAAIAACpIAhAAIAAipIAhAAIAAgeIhiAAgAijBkIAhAAIAAhKIAPAAQAXAAALgNQANgNAAgXIAAgaQAAgZgNgMQgLgNgXAAIgwAAgAjaBkIAiAAIAAjHIgiAAgAkQAPIAABVIAhAAIAAjHIghAAIAABVIgiAAIAAhVIghAAIAADHIAhAAIAAhVgAFahPIAKAAIAJgUIgTAAgAiCgEIAAhBIAPAAQAGAAAEAEQADADAAALIAAAeQAAAKgDAEQgEADgGAAgAEcgKIAAg7IAPAAQAHAAAEAEQAEAFAAALIAAATQAAAMgFAEQgEAEgJAAg");
	this.shape_6.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(-61,-21.5,122,49.7), null);


(lib.logo_znak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjFInQjihfg7kPIgBgCQgiiKBAizQAOgnAlgRQAIgFAJgCIhhgtQgagNgQgYQgPgZAAgdQAAgdAQgZQAdguAqgyQAGgIAHgGQA6gxBBggQAagNAeAEQAdAEAXATIBXBJQAAgeAQgZQATgeAhgLQBQgdBfAOIgBAAQBgANBMAvIAGAEQBXA8AgBqIgBgCQAbBUgGBnIgBADQgMCCg+APQAAAPgFAQIgKAeIgCADIB9ApQAgALATAbQATAbgBAiQgGC/iRCEIgCACQiBBvidAGIgBAAIgeAAQidAAhug4gAmBChQAwDeC2BNQBmA0CWgFQB7gGBmhXQBxhnAFiWIsfkGQg1CVAbBxgAl3mlQglAvgbApIKzFFIALgfIoYnBQg1AagxApgAgVntIFSFfQAQAAAFg0QAFhSgVhDQgWhIg7gqQg7gkhLgKQgWgDgWAAQgtAAgnANg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD549").s().p("AiaHMQi3hNgwjeQgbhxA1iVIMfEGQgFCWhxBnQhmBXh7AGIgaAAQiFAAhcgvgAm3lNQAbgpAlgvQAxgpA2gaIIXHBIgLAfgAgUntQA6gUBFAKQBMAKA6AkQA7AqAWBIQAWBDgGBSQgFA0gQAAg");
	this.shape_1.setTransform(0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_znak, new cjs.Rectangle(-53.8,-61,108,121.5), null);


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
	this.shape_2.graphics.f("#EA0029").s().p("An9CUIAAknIEQAAQAEAVARAIQAKAFAOgBQALAAAKgJQALgKAAgOIKeAAIAAEngAFnA0QAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYQAAgPgFgKQgEgLgIgJQgGgHgIgHIgOgOQgIgGgEgIQgEgIAAgKQAAgKAEgEQADgEAIAAQAGAAAEAEQAEAEAAAKIAAALIAgAAIAAgJQAAgYgMgNQgMgOgXAAQgYAAgLAOQgMANAAAYQAAAPAFAKQAEALAHAIIAPAPIAOANIAMAPQADAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgFgEQgDgEAAgKIAAgRIggAAgAg7A0QgBAYAMANQAMAOAXAAQAYAAALgOQAMgNAAgYQAAgPgEgKQgFgLgHgJQgHgHgIgHIgNgOQgHgGgFgIQgDgIAAgKQAAgKADgEQAEgEAHAAQAHAAAEAEQACAEABAKIAAALIAfAAIAAgJQAAgYgMgNQgLgOgYAAQgWAAgMAOQgMANAAAYQAAAPAFAKQAEALAIAIQAGAIAIAHIAPANQAGAHAEAIQAEAIAAAKQAAAKgDAEQgFAEgGAAQgHAAgEgEQgEgEAAgKIAAgRIgfAAgAm5hYQgMANAAAYIAABnQAAAYAMANQAMAOAXAAQAYAAAMgOQAMgNAAgYIAAgcIggAAIAAAeQAAAKgDAEQgFAEgHAAQgGAAgFgEQgDgEAAgKIAAhrQAAgKADgEQAFgEAGAAQAHAAAFAEQADAEAAAKIAAAWIAgAAIAAgUQAAgYgMgNQgMgOgYAAQgXAAgMAOgAEmATQALAAAFAGQAEAFAAAOIAAApIABAHIADAIIAhAAIgBgBIgCgLIgBgNIAAgfQAAgPgEgLQgEgLgLgFQATgJgBgeIAAgQQABgXgLgMQgLgLgZAAIgwAAIAADHIAgAAIAAhRgACSBkIBXAAIAAgeIg2AAIAAg5IAqAAIAAgcIgqAAIAAg2IA2AAIAAgeIhXAAgAAlhFIAgAAIAACpIAhAAIAAipIAhAAIAAgeIhiAAgAijBkIAhAAIAAhKIAPAAQAXAAALgNQANgNAAgXIAAgaQAAgZgNgMQgLgNgXAAIgwAAgAjaBkIAiAAIAAjHIgiAAgAkQAPIAABVIAhAAIAAjHIghAAIAABVIgiAAIAAhVIghAAIAADHIAhAAIAAhVgAFahPIAKAAIAJgUIgTAAgAiCgEIAAhBIAPAAQAGAAAEAEQADADAAALIAAAeQAAAKgDAEQgEADgGAAgAEcgKIAAg7IAPAAQAHAAAEAEQAEAFAAALIAAATQAAAMgFAEQgEAEgJAAg");
	this.shape_2.setTransform(0,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-51,-18,102,36.2), null);


(lib.girl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-251,-386);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.girl_1, new cjs.Rectangle(-251,-386,502,772), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0A2A").s().p("AsdCvQgXgZAAgwIAAjLQAAgwAXgZQAYgZAtAAQAuAAAXAZQAXAZAAAwIAAAmIg6AAIAAgqQAAgVgJgJQgIgIgPAAQgPAAgJAIQgIAKAAAUIAADTQAAAUAIAKQAJAIAPAAQAPAAAIgIQAJgJAAgVIAAg4IA6AAIAAA0QAAAwgXAZQgXAZguAAQguAAgXgZgAv4CvQgYgZAAgwIAAjLQAAgvAYgaQAZgZAtAAQAtAAAYAZQAYAaAAAvIAADLQAAAwgYAZQgXAZguAAQgtAAgZgZgAvJiHQgJAJAAAVIAADTQAAAWAJAIQAIAJAPAAQAOAAAJgJQAJgJAAgVIAAjTQAAgUgJgKQgIgIgPAAQgPAAgIAIgAC/DEIAAg4IAVABQAIAAAGgCQAGgCAFgEQAFgFACgIQADgHAAgOIhakmIA+AAIBEDlIA4jlIA9AAIhQEgQgKAlgMAZQgLAVgMAKQgMAJgPABIguABgATADEIAAkbIhNEbIg/AAIAAmHIA3AAIAADqIA/jqIBNAAIAAGHgAOYDEIAAlPIhAAAIAAg4IC+AAIAAA4IhBAAIAAFPgAMfDEIgLhHIhMAAIgKBHIg5AAIA/mHIBaAAIA/GHgAMMBIIgejGIgeDGIA8AAgAGyDEIAAmHIBdAAQAxAAAVAWQAVAXAAAtIAAAOQAAAfgJATQgJATgVAKQAZAJAKAVQALAWAAAfIAAAgQAAAtgYAYQgYAYguAAgAHwCMIAjAAQAQAAAIgIQAIgJAAgWIAAgiQAAgbgJgKQgJgKgWAAIgbAAgAHwgjIAYAAQASAAAJgJQAKgJAAgYIAAgWQAAgVgIgJQgHgKgQAAIgeAAgABJDEIg8icIgSAkIAAB4Ig+AAIAAmHIA+AAIAACrIBQirIA9AAIhWCvIBWDYgAifDEIgKhHIhMAAIgLBHIg4AAIA+mHIBbAAIA+GHgAiyBIIgejGIgdDGIA7AAgAmRDEIAAkYIgqEYIg6AAIgukUIAAEUIg2AAIAAmHIBWAAIAtEVIAqkVIBWAAIAAGHgAxzDEIAAlPIhGAAIAAFPIg9AAIAAmHIDCAAIAAGHg");
	this.shape.setTransform(0,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsdCvQgXgZAAgwIAAjLQAAgwAXgZQAYgZAtAAQAuAAAXAZQAXAZAAAwIAAAmIg6AAIAAgqQAAgVgJgJQgIgIgPAAQgPAAgJAIQgIAKAAAUIAADTQAAAUAIAKQAJAIAPAAQAPAAAIgIQAJgJAAgVIAAg4IA6AAIAAA0QAAAwgXAZQgXAZguAAQguAAgXgZgAv4CvQgYgZAAgwIAAjLQAAgvAYgaQAZgZAtAAQAtAAAYAZQAYAaAAAvIAADLQAAAwgYAZQgXAZguAAQgtAAgZgZgAvJiHQgJAJAAAVIAADTQAAAWAJAIQAIAJAPAAQAOAAAJgJQAJgJAAgVIAAjTQAAgUgJgKQgIgIgPAAQgPAAgIAIgAC/DEIAAg4IAVABQAIAAAGgCQAGgCAFgEQAFgFACgIQADgHAAgOIhakmIA+AAIBEDlIA4jlIA9AAIhQEgQgKAlgMAZQgLAVgMAKQgMAJgPABIguABgATADEIAAkbIhNEbIg/AAIAAmHIA3AAIAADqIA/jqIBNAAIAAGHgAOYDEIAAlPIhAAAIAAg4IC+AAIAAA4IhBAAIAAFPgAMfDEIgLhHIhMAAIgKBHIg5AAIA/mHIBaAAIA/GHgAMMBIIgejGIgeDGIA8AAgAGyDEIAAmHIBdAAQAxAAAVAWQAVAXAAAtIAAAOQAAAfgJATQgJATgVAKQAZAJAKAVQALAWAAAfIAAAgQAAAtgYAYQgYAYguAAgAHwCMIAjAAQAQAAAIgIQAIgJAAgWIAAgiQAAgbgJgKQgJgKgWAAIgbAAgAHwgjIAYAAQASAAAJgJQAKgJAAgYIAAgWQAAgVgIgJQgHgKgQAAIgeAAgABJDEIg8icIgSAkIAAB4Ig+AAIAAmHIA+AAIAACrIBQirIA9AAIhWCvIBWDYgAifDEIgKhHIhMAAIgLBHIg4AAIA+mHIBbAAIA+GHgAiyBIIgejGIgdDGIA7AAgAmRDEIAAkYIgqEYIg6AAIgukUIAAEUIg2AAIAAmHIBWAAIAtEVIAqkVIBWAAIAAGHgAxzDEIAAlPIhGAAIAAFPIg9AAIAAmHIDCAAIAAGHg");
	this.shape_1.setTransform(0,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(8,1,1).p("ABJDEIA/AAIhWjYIBWivIg9AAIhQCrIAAirIg+AAIAAGHIA+AAIAAh4IASgkgAC/DEIAPABIAugBQAPgBAMgJQAMgKALgVQAMgZAKglIBQkgIg9AAIg4DlIhEjlIg+AAIBaEmQAAAOgDAHQgCAIgFAFQgFAEgGACQgGACgIAAIgVgBgAIOiLQAQAAAHAKQAIAJAAAVIAAAWQAAAYgKAJQgJAJgSAAIgYAAIAAhogAGyjDIAAGHIBhAAQAuAAAYgYQAYgYAAgtIAAggQAAgfgLgWQgKgVgZgJQAVgKAJgTQAJgTAAgfIAAgOQAAgtgVgXQgVgWgxAAgAMejDIhaAAIg/GHIA5AAIAKhHIBMAAIALBHIA+AAgANYiLIBAAAIAAFPIA9AAIAAlPIBBAAIAAg4Ii+AAgATAhXIAAEbIA3AAIAAmHIhNAAIg/DqIAAjqIg3AAIAAGHIA/AAgALuh+IAeDGIg8AAgAILAUQAWAAAJAKQAJAKAAAbIAAAiQAAAWgIAJQgIAIgQAAIgjAAIAAh4gAz2jDIAAGHIA9AAIAAlPIBGAAIAAFPIA/AAIAAmHgAwQBmQAAAwAYAZQAZAZAtAAQAuAAAXgZQAYgZAAgwIAAjLQAAgvgYgaQgYgZgtAAQgtAAgZAZQgYAaAAAvgAvShpQAAgVAJgJQAIgIAPAAQAPAAAIAIQAJAKAAAUIAADTQAAAVgJAJQgJAJgOAAQgPAAgIgJQgJgIAAgWgAq2AyIAAA4QAAAVgJAJQgIAIgPAAQgPAAgJgIQgIgKAAgUIAAjTQAAgUAIgKQAJgIAPAAQAPAAAIAIQAJAJAAAVIAAAqIA6AAIAAgmQAAgwgXgZQgXgZguAAQgtAAgYAZQgXAZAAAwIAADLQAAAwAXAZQAXAZAuAAQAuAAAXgZQAXgZAAgwIAAg0gAoDjDIhWAAIAAGHIA2AAIAAkUIAuEUIA6AAIAqkYIAAEYIA7AAIAAmHIhWAAIgqEVgAifjDIhbAAIg+GHIA4AAIALhHIBMAAIAKBHIA+AAgAjQh+IAeDGIg7AAg");
	this.shape_2.setTransform(0,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsdCvQgXgZAAgwIAAjLQAAgwAXgZQAYgZAtAAQAuAAAXAZQAXAZAAAwIAAAmIg6AAIAAgqQAAgVgJgJQgIgIgPAAQgPAAgJAIQgIAKAAAUIAADTQAAAUAIAKQAJAIAPAAQAPAAAIgIQAJgJAAgVIAAg4IA6AAIAAA0QAAAwgXAZQgXAZguAAQguAAgXgZgAv4CvQgYgZAAgwIAAjLQAAgvAYgaQAZgZAtAAQAtAAAYAZQAYAaAAAvIAADLQAAAwgYAZQgXAZguAAQgtAAgZgZgAvJiHQgJAJAAAVIAADTQAAAWAJAIQAIAJAPAAQAOAAAJgJQAJgJAAgVIAAjTQAAgUgJgKQgIgIgPAAQgPAAgIAIgAC/DEIAAg4IAVABQAIAAAGgCQAGgCAFgEQAFgFACgIQADgHAAgOIhakmIA+AAIBEDlIA4jlIA9AAIhQEgQgKAlgMAZQgLAVgMAKQgMAJgPABIguABgATADEIAAkbIhNEbIg/AAIAAmHIA3AAIAADqIA/jqIBNAAIAAGHgAOYDEIAAlPIhAAAIAAg4IC+AAIAAA4IhBAAIAAFPgAMfDEIgLhHIhMAAIgKBHIg5AAIA/mHIBaAAIA/GHgAMMBIIgejGIgeDGIA8AAgAGyDEIAAmHIBdAAQAxAAAVAWQAVAXAAAtIAAAOQAAAfgJATQgJATgVAKQAZAJAKAVQALAWAAAfIAAAgQAAAtgYAYQgYAYguAAgAHwCMIAjAAQAQAAAIgIQAIgJAAgWIAAgiQAAgbgJgKQgJgKgWAAIgbAAgAHwgjIAYAAQASAAAJgJQAKgJAAgYIAAgWQAAgVgIgJQgHgKgQAAIgeAAgABJDEIg8icIgSAkIAAB4Ig+AAIAAmHIA+AAIAACrIBQirIA9AAIhWCvIBWDYgAifDEIgKhHIhMAAIgLBHIg4AAIA+mHIBbAAIA+GHgAiyBIIgejGIgdDGIA7AAgAmRDEIAAkYIgqEYIg6AAIgukUIAAEUIg2AAIAAmHIBWAAIAtEVIAqkVIBWAAIAAGHgAxzDEIAAlPIhGAAIAAFPIg9AAIAAmHIDCAAIAAGHg");
	this.shape_3.setTransform(0,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EA0A2A").ss(8,1,1).p("ABJDEIA/AAIhWjYIBWivIg9AAIhQCrIAAirIg+AAIAAGHIA+AAIAAh4IASgkgAC/DEIAPABIAugBQAPgBAMgJQAMgKALgVQAMgZAKglIBQkgIg9AAIg4DlIhEjlIg+AAIBaEmQAAAOgDAHQgCAIgFAFQgFAEgGACQgGACgIAAIgVgBgAIOiLQAQAAAHAKQAIAJAAAVIAAAWQAAAYgKAJQgJAJgSAAIgYAAIAAhogAGyjDIAAGHIBhAAQAuAAAYgYQAYgYAAgtIAAggQAAgfgLgWQgKgVgZgJQAVgKAJgTQAJgTAAgfIAAgOQAAgtgVgXQgVgWgxAAgAMejDIhaAAIg/GHIA5AAIAKhHIBMAAIALBHIA+AAgANYiLIBAAAIAAFPIA9AAIAAlPIBBAAIAAg4Ii+AAgATAhXIAAEbIA3AAIAAmHIhNAAIg/DqIAAjqIg3AAIAAGHIA/AAgALuh+IAeDGIg8AAgAILAUQAWAAAJAKQAJAKAAAbIAAAiQAAAWgIAJQgIAIgQAAIgjAAIAAh4gAz2jDIAAGHIA9AAIAAlPIBGAAIAAFPIA/AAIAAmHgAwQBmQAAAwAYAZQAZAZAtAAQAuAAAXgZQAYgZAAgwIAAjLQAAgvgYgaQgYgZgtAAQgtAAgZAZQgYAaAAAvgAvShpQAAgVAJgJQAIgIAPAAQAPAAAIAIQAJAKAAAUIAADTQAAAVgJAJQgJAJgOAAQgPAAgIgJQgJgIAAgWgAq2AyIAAA4QAAAVgJAJQgIAIgPAAQgPAAgJgIQgIgKAAgUIAAjTQAAgUAIgKQAJgIAPAAQAPAAAIAIQAJAJAAAVIAAAqIA6AAIAAgmQAAgwgXgZQgXgZguAAQgtAAgYAZQgXAZAAAwIAADLQAAAwAXAZQAXAZAuAAQAuAAAXgZQAXgZAAgwIAAg0gAoDjDIhWAAIAAGHIA2AAIAAkUIAuEUIA6AAIAqkYIAAEYIA7AAIAAmHIhWAAIgqEVgAifjDIhbAAIg+GHIA4AAIALhHIBMAAIAKBHIA+AAgAjQh+IAeDGIg7AAg");
	this.shape_4.setTransform(0,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).wait(1));

	// Слой_5
	this.instance = new lib.btn_bg();
	this.instance.parent = this;
	this.instance.setTransform(-190,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A5WMCQgxgJhBgYIg2gXQgjgSgngsQhNhXgRiDQgSiOAuhwQAhhSBPhUQBuhzEJiyQFojxFJhtQF6h9FJgRQE1gRFjBLQEqA/FaD4QDaCcCuCxQBuBvBnDDQB0DegVBzQgXCBgqAiQgvAlhwggQi5g1mQg3QoWhJmlANQnLAPmEAqQljAniNAsQh6AmiYAQQhKAHg2AAQgsAAgegFg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA0A2A").s().p("A5WMCQgxgJhBgYIg2gXQgjgSgngsQhNhXgRiDQgSiOAuhwQAhhSBPhUQBuhzEJiyQFojxFJhtQF6h9FJgRQE1gRFjBLQEqA/FaD4QDaCcCuCxQBuBvBnDDQB0DegVBzQgXCBgqAiQgvAlhwggQi5g1mQg3QoWhJmlANQnLAPmEAqQljAniNAsQh6AmiYAQQhKAHg2AAQgsAAgegFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.4,-80,392.8,160);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-153,-227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-153,-227,306,454), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-153,-226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-153,-226,306,452), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-162,-238);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-162,-238,324,476), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t3_mc
	this.instance = new lib.t3_mc();
	this.instance.parent = this;
	this.instance.setTransform(-693.8,-372.6,1,1,-90,0,0,-0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:0,rotation:0,x:-5.5,y:-9.1},10,cjs.Ease.backOut).wait(50).to({regX:-0.1,rotation:-90,x:-693.8,y:-372.6},10,cjs.Ease.backIn).wait(63));

	// t3_w
	this.instance_1 = new lib.t3_w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-691.7,-372.6,1,1,-90,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,rotation:0,x:-5.5,y:-7},10,cjs.Ease.backOut).wait(50).to({regX:-0.1,rotation:-90,x:-691.7,y:-372.6},10,cjs.Ease.backIn).wait(65));

	// t3_r
	this.instance_2 = new lib.t3_r();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-677.7,-383.8,1,1,-90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({rotation:0,x:5.6,y:7},10,cjs.Ease.backOut).wait(50).to({rotation:-90,x:-677.7,y:-383.8},10,cjs.Ease.backIn).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-754.4,-676.5,125.4,607.6);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2_mc
	this.instance = new lib.t2_mc();
	this.instance.parent = this;
	this.instance.setTransform(488.1,-253.1,1,1,90);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({rotation:0,x:5.2,y:-9},10,cjs.Ease.backOut).wait(50).to({rotation:90,x:463.1,y:-253.1},10,cjs.Ease.backIn).wait(55));

	// t2_w
	this.instance_1 = new lib.t2_w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(486,-252.7,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:5.6,y:-6.9},10,cjs.Ease.backOut).wait(50).to({rotation:90,x:461,y:-252.7},10,cjs.Ease.backIn).wait(57));

	// t2_r
	this.instance_2 = new lib.t2_r();
	this.instance_2.parent = this;
	this.instance_2.setTransform(472,-263.8,1,1,90,0,0,-0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:0,rotation:0,x:-5.5,y:7},10,cjs.Ease.backOut).wait(50).to({regX:-0.1,rotation:90,x:447.1,y:-263.8},10,cjs.Ease.backIn).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(423.4,-433.3,125.1,361.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t1_mc
	this.instance = new lib.t1_mc();
	this.instance.parent = this;
	this.instance.setTransform(-480.9,-295.3,1,1,-90,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:0,regY:0,rotation:0,x:-6.9,y:-9.5},10,cjs.Ease.backOut).wait(50).to({regX:-0.1,regY:-0.1,rotation:-90,x:-493.2,y:-295.3},10,cjs.Ease.backIn).wait(63));

	// t1_w
	this.instance_1 = new lib.t1_w();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-478.3,-296.7,1,1,-90,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,rotation:0,x:-5.5,y:-7},10,cjs.Ease.backOut).wait(50).to({regX:-0.1,rotation:-90,x:-490.6,y:-296.7},10,cjs.Ease.backIn).wait(65));

	// t1_r
	this.instance_2 = new lib.t1_r();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-464.3,-307.8,1,1,-90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({rotation:0,x:5.6,y:7},10,cjs.Ease.backOut).wait(50).to({rotation:-90,x:-476.6,y:-307.8},10,cjs.Ease.backIn).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-573.5,-492.7,190.4,392);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p2_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:-720},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-43,76,86);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p1_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:360},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-43,76,86);


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
p.nominalBounds = new cjs.Rectangle(-38,-43,76,86);


(lib.chips_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		n = 2;
		for (let i = 0; i < n; i++) {
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.x = Math.random()*400;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
			this.addChild(cloneParticle);
		}
		*/
		var cloneParticle = new lib.particle2Movie();
		cloneParticle.x = Math.random()*400;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*0.8 + 0.2;
		this.addChild(cloneParticle);
			
		var num = this.getNumChildren();
		
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
		/*
		var cloneParticle = new lib.particle2Movie();
		cloneParticle.x = Math.random()*400;
		cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
		this.addChild(cloneParticle);
		*/
		var num = this.getNumChildren();
		
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
	this.particle.setTransform(694.2,154,1,1,0,0,0,519,154);

	this.timeline.addTween(cjs.Tween.get(this.particle).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.2,-43,76,86);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5_2
	this.instance = new lib.t5_2();
	this.instance.parent = this;
	this.instance.setTransform(-255.3,-96.1,0.627,0.627,0,0,0,-0.6,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({_off:false},0).to({regX:-0.9,x:-59.1},10,cjs.Ease.cubicOut).wait(55).to({regX:-0.5,x:-255.2},10,cjs.Ease.cubicIn).wait(2));

	// logo
	this.instance_1 = new lib.logo1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-232.3,-134.6,0.866,0.865,0,0,0,-0.7,-0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({x:-84.1},10,cjs.Ease.cubicOut).wait(55).to({x:-232.3},10,cjs.Ease.cubicIn).to({_off:true},1).wait(3));

	// t5_1
	this.instance_2 = new lib.t5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-226.9,-168,0.627,0.627,0,0,0,-0.5,-1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({regX:-1,x:-88.5},10,cjs.Ease.cubicOut).wait(55).to({regX:-0.7,x:-227},10,cjs.Ease.cubicIn).to({_off:true},1).wait(5));

	// logo_znak
	this.instance_3 = new lib.logo_znak();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.3,-150.3,0.627,0.627,0,0,0,0.3,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({_off:false},0).to({regX:-0.4,x:-6.1,alpha:1},15,cjs.Ease.cubicOut).wait(50).to({regX:0.3,x:69.1,alpha:0},15,cjs.Ease.cubicIn).wait(1));

	// logo
	this.instance_4 = new lib.logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-265.4,1.098,1.095);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(225).to({scaleX:1.57,scaleY:1.56,y:-259.4},15,cjs.Ease.quadInOut).wait(50).to({scaleX:1.1,scaleY:1.1,y:-265.4},15,cjs.Ease.quadInOut).wait(1));

	// btn
	this.instance_5 = new lib.btn("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,253.8,0.005,0.005,0,0,0,0,9.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({regY:0,scaleX:0.38,scaleY:0.38,y:254.5},15,cjs.Ease.backOut).wait(20).to({scaleX:0.36,scaleY:0.36,startPosition:1},0).wait(2).to({scaleX:0.38,scaleY:0.38,startPosition:0},0).wait(3).to({scaleX:0.36,scaleY:0.36,startPosition:1},0).wait(2).to({scaleX:0.38,scaleY:0.38,startPosition:0},0).wait(23).to({startPosition:0},0).to({regY:5,scaleX:0.01,scaleY:0.01,y:253.8},15,cjs.Ease.backIn).wait(1));

	// t3
	this.instance_6 = new lib.t3("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.9,211.1,0.5,0.5,0,0,0,-0.2,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({_off:true},76).wait(80));

	// box1
	this.instance_7 = new lib.box1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1,119.1,0.105,0.105,0,0,0,0.5,1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.42,scaleY:0.42,y:61},15,cjs.Ease.cubicOut).wait(45).to({regX:0.5,regY:1,scaleX:0.11,scaleY:0.11,y:119.1},15,cjs.Ease.cubicIn).to({_off:true},1).wait(80));

	// box2
	this.instance_8 = new lib.box2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-214.8,65.3,0.419,0.419,0,0,0,-0.1,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({regX:-0.2,x:-84.5},15,cjs.Ease.cubicOut).wait(40).to({regX:-0.1,x:-215.8},15,cjs.Ease.cubicIn).to({_off:true},1).wait(80));

	// box3
	this.instance_9 = new lib.box3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(216.9,65.3,0.419,0.419,0,0,0,0.2,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(155).to({_off:false},0).to({regX:0.4,x:86.6},15,cjs.Ease.cubicOut).wait(40).to({regX:0.2,x:216.9},15,cjs.Ease.cubicIn).to({_off:true},1).wait(80));

	// t2
	this.instance_10 = new lib.t2("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(49.8,-160,0.5,0.5,0,0,0,-0.2,-0.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({_off:false},0).to({_off:true},75).wait(156));

	// t1
	this.instance_11 = new lib.t1("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-38.9,-148,0.5,0.5,0,0,0,-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},73).wait(233));

	// girl
	this.instance_12 = new lib.girl_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(26.3,118.4,0.466,0.466,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60).to({regX:0.1,scaleX:0.61,scaleY:0.61,x:4.9,y:163},15,cjs.Ease.cubicInOut).wait(60).to({regX:0,x:-304.4},15,cjs.Ease.cubicIn).to({_off:true},1).wait(74).to({_off:false,regX:0.2,scaleX:0.47,scaleY:0.47,x:293.1,y:138.4},0).to({x:-3.7},15).wait(50).to({x:26.3,y:118.4},15,cjs.Ease.quadInOut).wait(1));

	// chips
	this.instance_13 = new lib.chips_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(38.1,-341.1,0.96,0.96,0,0,0,0.1,-0.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({alpha:1},15).wait(60).to({alpha:0},15).wait(156));

	// bg
	this.instance_14 = new lib.bgImg_1();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(306));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.5,-394.2,568.1,694.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,205.8,568.1,694.3);
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
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/btn_bg.png", id:"btn_bg"},
		{src:"images/chips.png", id:"chips"},
		{src:"images/girl.png", id:"girl"}
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