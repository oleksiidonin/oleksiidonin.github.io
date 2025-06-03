(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,330);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,302);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,302);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,456);// helper functions:

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


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKpFdQg3gygVheIhfmRQgWhdAUgyQATgyA7ABQA7ACAwAzQAxAzAhBcICMGQQAgBcgZAyQgZAyhRAAQhQAAg3gzgAJUjKIBwGfQAWBNA2AAQA3ABgYhNIiCmeQgXhMgsgCQgrAAAVBMgAGqGOQhQAAgxg0QgvgygKhdIgnmTQgJheAagxQAagzA7ABQA6ABAqAzQAqAzAUBdIBWGRQAUBeggAyQggAyhOAAIgDAAgAEfjPIA5GiQAKBLA3ACQA2AAgNhNIhJmhQgNhLgtgCQgqAAAKBMgAAlGMQhPgBgqgyQgog0ADhdIAOmSQAEheAhgyQAhg0A5ABQA6AAAjA0QAkAzAHBeIAgGSQAHBdgmAzQgnAyhOAAIgDAAgAgUjSIABGjQAABMA1AAQA3AAgDhMIgRmiQgEhNgrAAIgCAAQgoAAAABMgApjFWQgggzAVhdIBZmRQAUheArgyQAqg0A6AAQA7AAAaA0QAZAzgKBdIgrGSQgKBdgwAzQgwAzhRAAQhQgBgfgzgAm9jTIhMGhQgQBNA4AAQA3AAAKhNIA9mhQALhNgrAAQgrAAgPBNgAvdFUQgYgxAhheIAWhAIBfAAIgXBIQgYBLA2AAQA2AAAVhLIAwipQAVhMgvAAQgwAAgZBMIgHAXIhcAAQBOjEBgj6IDSgCIgcBuIiRABIhBC4QArg4A0AAQBhAAgqCwIgqCsQgXBdg1AyQg2AzhPAAQhQgBgXgzgAPGjLIAGgzIgVgCIgGAyIgTgCIAPh3IATADIgGAzIAVACIAGgyIATACIgPB3gANfjYIAPh3IAcAEQAcAEgEAdIgCAPQgFAegbgEIgJgBIgFAsgAN6kTIAJABQAIACABgMIADgSQABgLgJgBIgJgBgAMijgIAPh3IAxAHIgCARIgegEIgOBmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-100,-40,200,80), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-93.9,-10.1,187.8,20.2), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFED3B").s().p("AozCxIAAgtIBXABIAAgsIgqAAQgTAAgNgNQgNgOAAgSIAAjcIAuAAIgBDcIAqAAIABjcIAtAAIAAE1QAAATgOANQgOANgSAAgAKJCGQgSAAgNgNQgNgNAAgSIAAhMIAsAAIAABMIArAAIAAhfIgrAAIAAgjIArAAIAAhbIgqAAIgBBLIgsAAIAAhLQAAgSANgNQAOgNASAAIAqAAQATAAANANQANANAAASIAABEQAAAdgcAMQAcAMAAAcIAABIQAAASgNANQgOANgSAAgAIMCGIAAisIgrCsIgtAAIABk1IAsAAIAACtIAritIAuAAIgBE1gAERCFIAAk0IBYAAQARAAANANQAOANAAASIAABvQAAAOgOAJQgNALgRAAIgrgBIgBB4gAE+gUIArAAIAAhvIgrAAgADACFIAAkJIgrAAIAAEJIgtAAIABk1ICEAAIgBE1gAg6CFIAAk1IBXAAQARAAANANQAOAOAAARIAABvQAAAPgOAJQgNAKgRAAIgqAAIAAB4gAgNgVIAqAAIAAhvIgqAAgAi2CFQgTAAgMgNQgOgNAAgSIAAjdQAAgRAOgOQANgNATAAIAqAAQASAAANANQAOAOAAARIAABgQAAAOgOAKQgNAKgSAAIgrAAIAABbIArAAIAAgtIAtAAIAAAtQAAASgOANQgNANgSAAgAi2gkIArAAIAAhgIgrAAgAkzCFIAAkJIgrAAIAAEJIgtAAIABk1ICEAAIgBE1gAqzCEQgSABgOgNQgNgOAAgSIABjdQAAgRANgOQANgNASAAIAvAAQATAAANAOQAOAOAAARIAABKIguAAIAAhLIgvAAIAADdIAvAAIAAhKIAtAAIAABKQAAASgNAOQgNANgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-73.7,-17.8,147.4,35.6), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvYGEIBkhIICUDSIggAYIiAi2IgjAaIB+C1IgfAXgAtSElIAxgeQAzggAhA3IAQAdQAhA2gxAfIgQAKIAyBSIggAVgAsNElIgQAKIAuBMIAPgLQARgKgNgUIgUgiQgIgNgLAAQgFAAgFACgArUDZIAfgQIBLCQIgjimIAmgVIB4DkIgfARIhVihIAqC4IgkATgAn1FBIgMgaIAigPIANAcQAJAWATgIQATgIgMgbIgIgSQgOgdgXAJIgJAFIgQgiIALgFQAWgKgMgYIgFgOQgLgbgUAJQgTAJALAYIAIASIggAPIgIgSQgbg6A0gYQA1gXAbA6IADAGQARAmgUAVQAdAAATAmIAIATQAbA8g2AXQgQAIgNAAQgfAAgTgqgAm7BOIAigLIA7CXIgQipIAngRIBeDxIghANIhCipIAVC7IgmAPgAjtABIA4gRQA3gSASA4IADAJQAMAlgVATQAhACANAqIAGAUQARA7g4ASIg7ATgAiNB3IgQAFIAYBMIAVgHQATgHgHgXIgHgWQgFgRgIgEQgEgDgGAAQgFAAgGACgAiqARIgTAHIAVBAIAPgEQAWgGgIgbIgEgNQgHgWgNAAIgHABgAhZgtIAggJIArCdIACipIApgKIBCD4IgiAIIguivIgBC9IgmAKgABAhWIBkgWIAIAkIg+AOIAwDXIgmAJgADFhzIA4gLQA5gKAMA+IAGAiQALA9g5AMIgSADIASBfIgnAHgAEEhYIgSADIAQBVIASgEQATgCgFgZIgHglQgEgVgNAAIgGABgAFtiRIA4gIIBMD5IgnAGIgNgtIgvAGIgBAwIgjAFgAGOAcIAlgGIgmh9gAHmiiIA6gHQA6gGAGA7IABAJQAFAngYAQQAeAJAEArIACAUQAJA8g9AHIg9AHgAItgcIgRADIAIBOIAWgDQAUgBgDgaIgCgWQgCgRgGgGQgFgGgMAAIgDAAgAIjiEIgTADIAIBDIAPgCQAXgBgDgdIgBgOQgDgYgSAAIgCAAgAKZi1IA5gDIA7D8IgoADIgKgtIgvAEIgEAvIgkACgAKtgFIAmgDIgdiBgAMSi+IAjgBIAGCjIAoilIAqgBIALEBIgiACIgIi2IgpC4IgoABgAOzAXIAmAAIAAAnIglABgAqjg1QgGASgSAKQgrAUgbg0IguhhIAigRIAuBfQALAVAVgJQASgJgMgYIgshdIAjgRIBwDkIgkARgAOujDIAoAAIgCDHIgcABgAqTjaIAdgMIBkDfIgcAMgAoGg0QAOgFACgGQADgGgHgRIhDi0IBngrIBgDsIglAPIhSjJIggANIA3CQQAMAhgHASQgHATgbALIgEACgAkih2QgUgMgKgbIgsh+QgVg8A5gUQA4gVAVA/IArB7QAWA/g4ARQgOAFgMAAQgMAAgKgFgAk8lJQgUAHAJAYIAtCDQAIAVAUgFQATgHgIgYIgtiBQgHgTgOAAIgHABgAjvmHIBpgfIALAjIhEAUIATA/IAWgGQA5gTASA+IAIAZQATA8g5ARIg7ASgAiLkUIgWAGIAXBNIAWgHQAUgGgIgWIgJgfQgGgTgNAAIgHACgAhamzIAhgIIApCbIAFimIApgLIBAD2IgjAIIgtitIgCC6IgmALgAMlj3IAZgCQABASAQgBQAQgBAAgRIAZgBQABApgqABIgDABQgkAAgDgngABBnaIA5gMQA5gMANA+IAHAfQANA+g5ANIgSADIAUBeIgnAIgACBnDIgRAFIARBUIASgEQASgFgEgWIgIgmQgEgUgOAAIgGAAgADqn8IA4gJIBSD0IgnAHIgOgsIgvAHIABAvIglAGgAEOlSIAmgHIgoh7gAFloPIAigFIAUCgIAbilIAqgGIAfD9IgjAFIgViyIgcC4IgoAEgAJFm5IBGgEIADAkIhIAEgAF0pLIAXgCQAEAQAPgCQASgCgCgRIAYgDQAFApgqAFIgJABQggAAgEglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-98.5,-59.7,197.1,119.5), null);


(lib.logo_cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtgFvQhOgJgVg0QgIgXAAguIgRmyQghgMgFguQgDg6AygGQHGgmH0gJQHPgFFyAUQBmAGAdA9IAJAAQAXADAUARQARAXgDAXIgFAsQAFALAEAPQA3D4hrDlQgVAsg3gJQgogGgHgfImYgJQg3ALhAAGQgmADgRgXIhagDQgRAXgmgDIhOgFIgEACQgOAYgkgDIlXgaIgMAAQAAADgCACQgPAbgoAAIkuAIQg2AEglAAIgigBgAtRCwIAlAGQADgDAEAAQALgMAXAAQHtgUFeAAII+AGQAYAAAtACQAqADAZgIQAegJAFgxIgDhPIAGi4QiigSiigFQAegGAjgDIhQAGQAGAAAJADQlfAdlbAFQgPADgSAAIhagGQgFAAgDADIgSAAIgRAAQgJgDgDADQgdgDgcADIg7gDQgRAAgMgFIlTgVgAEnCzIBggDIhIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_cover, new cjs.Rectangle(-102.7,-36.8,205.4,73.6), null);


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


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#641C44").s().p("AngE0Qi+gVgsgKQiVgigkhNQhUi1Evh1QDshbDfAAQAkgBAAAiQAAAggkAAQj2ACjCBeQhHAigiAXQhAAsgCAoQgDBIBDAgQAfAPBoAUQF4BJHbgvQENgdCrhTQB5g7Aig2QAmg6g6g2QgkgfhXglQlZiWngBLQgjAGgLggQgKggAkgGQE+gxEGArQCSAXByApQCYA2BEBNQBnBxjXCPQjAB+lUAkQi8AUi2AAQiyAAitgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-91.8,-32.7,183.7,65.5), null);


(lib.hero_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B1344").s().p("ALAK/QoZjtq3g9QlcgejwAPIAyx5QKtiOKZHZQDQCUC2C/QA4A7AwA5IAkAsQC7D8BQDMQBHCzhEA3QgdAYg2AAQhnAAjChWg");
	this.shape.setTransform(-233.9,-108.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance = new lib.hero();
	this.instance.parent = this;
	this.instance.setTransform(-163.5,-114,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hero_1, new cjs.Rectangle(-345.6,-187.1,509.1,301.2), null);


(lib.hand_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFED3B").ss(2).p("ABnhtIhDBvIAkCGIgzgIIgYhjIgBgDIg1BaIgtgGIBIh2Ighh+IAyAHIAQBKIAGAXIAzhWg");
	this.shape.setTransform(-53,72.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D6B4").s().p("AhyC2QgIgFgDgNQgGggAMgUQAGgKAOgLQARgKAHgGQAVgVAUgGQg1AGgXAKIgWARIgdAPQgbAJgNgOQgPgMAKgTQARghBOgOIAygDQAegBAQgIQgtgXhXAZQhRAkgGgPQgIgPApgbQAwgbAfgKQAVgIAsADQADACAeADQAdADACADQgIgVgtgIQgegEgfABQgGAAgkALQgbAHgPgHQgGgDAJgLIALgKIAfgPQAjgSAvAEQASACAkAKIAaAFQANAAAMgIIBZg+QAegMAdALQALAFAKAHQAeAYgEAgQAAAKgJAUIgDAOQgBALABAMIADAlQAAAkgaAmQgaAoglAfIgBABIhUAJIhVAIIAAAAQAEgOAPgGQAKgGAZgGQAegGAbgaQAGgGAAgEQAGgYgmAGQgWADgYAKQggAPgSAYQgGAGgSAfIgGAHQgOAPgOAFQgDABgDAAIgHgBg");
	this.shape_1.setTransform(-36.7,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACBDPIATh1IgWgFIADgTIBBAKIgDATIgWgCIgTB1gAAAC6IAWiJIAVADIgUB1IATADIATh1IAVADIgTB1IASADIATh1IAVADIgWCJgAh+CuQhTgSAUhaIAGggIA0AMIgGAhQgJAkAfAFQAeAHAGgkIAShRQAGgkgdgEQgbgIgJAmIgDAKIg1gKIA4jRICSAcIgKA1IhhgUIgWBXQAVgXAhAGQA8ANgPBSIgSBSQgPBNhAAAQgMAAgNgCg");
	this.shape_2.setTransform(-88.5,62.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D22E26").s().p("AJDEvIAIgfIgJgCIgIAfIgPgFIARhKIAPADIgGAgIAJACIAHgeIAQACIgRBMgAIAEfIAShLIASAEQAMAEABAFQAFAHgDAIIgCAKQgBAJgIAEQgFAEgKgCIgDAAIgGAagAIZD6IADABIADAAIAFgPIAAgDIgGgDgAHYEWIAShLIAjAJIgDANIgTgEIgOA9gAFUEKQhcgRARhjIAnjNQAThkBdASQArAHAUAeQATAfgJAwIgnDNQgHAvgdAXQgVAPgcAAQgMAAgNgDgAFtgxIgoDXQgGAlAgAIQAfAEAGgnIApjVQAGgmgegHIgHAAQgbAAgGAhgAB7DhQhdgQAThkIAmjMQAThkBdAQQAtAJATAfQASAegIAwIgoDNQgHAwgdAWQgVAOgcAAQgLAAgOgDgACVhYIgnDVQgIAlAgAIQAfAFAIgmIAnjVQAGgogegFIgKgBQgYAAgFAigAhdC6QhbgRAShkIAljNQAUhkBcARQBcASgTBkIgmDNQgPBVhGAAQgMAAgOgDgAhDiAIgnDUQgJApAhAFQAfAEAIgmIAnjVQAJgogggFIgHAAQgaAAgHAigAmICDQhbgTAQhiIAnjOQAUhjBbARQBcATgSBiIgnDNQgIAvgcAWQgXAQgdAAQgLAAgLgCgAlui4IgpDUQgGApAfAEQAgAFAGglIApjVQAGgpgegEIgHgBQgbAAgFAigApjBWIA4kuIgvgJIAJgsQAfAFASgMQAOgIANgWIApAHIhKGLg");
	this.shape_3.setTransform(24.5,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFED3B").s().p("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");
	this.shape_4.setTransform(20.5,54.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#641C44").s().p("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");
	this.shape_5.setTransform(37.7,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_right, new cjs.Rectangle(-107.8,-133.3,246.6,256.4), null);


(lib.hand_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFED3B").ss(2).p("AAhiRIgECCIBgBjIgwASIhIhOIAAAHIgCBkIgpAPIAEiKIhahdIAvgSIAzA4IAQARIAChig");
	this.shape.setTransform(-24.2,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D6B4").s().p("AiCCpQgSgMgMgRQgTglgRgQIgGgFQgUgMgHgIQgXgWAMgmQAQgrAmgJIADgBQALgEAVABIBNgCQAPAAAKgJQAGgFAOgPQANgMAWgcQAhgeApgHIAigHQAeAAgEALQgIAPgZAKQgpAOgBACQgcARgTAXQgfAiAGAUQAAgEAUgTIAYgYQAcgbAbgHQAqgNAtgEQAMgBARADQAVADABAKQADAPhWATQhXAggVArQAegEA4gpQBGgjAiAQQATAKgEATQgCATgeAIIggAFIgbAAQgNACgVAKIghASQANgFAhADIA5AEQARAHALATIAHANQAGAMgEAIQgCAEgJADQgSAHgYgIQgWgKgNgEIgGgBQgegJgiAHQgbAHgSAJQggAQAMAOIAAABIhBAVIhDAWIgBgBg");
	this.shape_1.setTransform(-29.9,-16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjygzIgqAPIgOgnQAdgLAJgSQAGgMAAgZIAlgOIB6FhIg2ATgAhCBdIg/i3QgPgsANgeQAOgfAngOQBSgeAeBZIBAC2QAgBbhTAcQgUAIgSAAQgyAAgZhCgAg8ifQgdAJAMAkIBDC+QALAkAcgKQAbgJgKglIhBi+QgKgbgTAAQgGAAgGACgABtgiIAVgGIAmBuIASgGIgnhuIAVgIIAlBwIASgGIgnhwIAVgIIAtCCIhgAigADwg6IgVAHIgGgSIA+gXIAGAUIgWAIIAoBuIgUAHg");
	this.shape_2.setTransform(-65.8,95.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D22E26").s().p("AnSEHIgLggIA2gVIANAkQAOAkAdgMQAggKgOgkIghhVQgNgkgeALQgfANAPAjIAEAMIg2AVIhJjeICYg6IAVA2IhkAkIAcBcQAIghAhgOQBCgYAfBYIAfBUQAlBfhWAfQgXAIgSAAQg4AAgahFgAi3CcIhKjDQglhfBZghQBXgiAmBeIBKDFQAjBehZAiQgWAIgUAAQg3AAgahGgAi4hyQgeANANAlIBNDKQAPAlAdgMQAegMgOgkIhNjKQgKgdgWAAQgFAAgGACgAAWBOIhIjDQgTgtAOghQAOghApgRQBXggAmBeIBKDCQAkBfhZAhQgXAJgUAAQg2AAgbhGgAAVi/QgfALAOAlIBNDLQAPAlAdgKQAggMgPgmIhOjKQgLgdgTAAQgGAAgHADgADkABIhJjEQglheBYgiQBYggAlBdIBKDGQAiBchXAjQgXAIgTAAQg4AAgahGgADjkNQgeAMANAkIBODNQAPAkAcgMQAegLgOgkIhMjMQgKgdgVAAQgGAAgHADgAGYhoIAkgNIAGAPIgVAIIAYA9IgRAGgAHBh3IATgHQAMgCAGACQAIAEACAJIADAJQAEANgEAEQgCAIgKADIgEABIALAbIgRAGgAHWhuIAHAWIAEgCIAEgDIgFgPIgDgDIgDAAgAHuiHIAOgGIANAfIAKgDIgMgfIAQgGIAeBNIgRAGIgNggIgKAFIAMAfIgQAGg");
	this.shape_3.setTransform(41.7,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFED3B").s().p("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");
	this.shape_4.setTransform(27.2,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#641C44").s().p("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");
	this.shape_5.setTransform(-22.4,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand_left, new cjs.Rectangle(-131.5,-135.1,240.1,252.3), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-56.5,-75.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-56.5,-75.5,113,151), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-53.2,-71,0.471,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-53.2,-71,106.4,142.1), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-82.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-61.5,-82.5,123,165), null);


(lib.billet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFED3B").s().p("AjJCWQgLgIgCgOIgIhjIgiADIAKBiIgjAEIgTjMQgBgNAKgMQAJgLANgBIBEgGIAWDtIAigCIAEAhIgjAEIgDAAQgMAAgKgJgAkJhJIAGBOIAigDIgHhOgABKBmIhZAHIgXjtIAjgEIASDMIAhgDIgTjMIAjgDIATDLIAVgBIAHBVIghAEgAilh1IAjgDIAKB2IAXh5IAhgDIgWB7IAtBzIgjADIgrhyIAKB1IghAEgABvhXIAjgEIASC4IgjAEgAC/ABQgCgWAUgLQgWgGgCgYIgFg1QgBgNAKgMQAKgKANgCIBDgGIAWDuIgjADIgKhqIggADIAKBrIgiACgADXh1IAGBGIAigDIgIhHgABqiOIAjgDIADAiIgiAEg");
	this.shape.setTransform(-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#703B87").s().p("AhBGGIhhBSIgch9Ih2AuIAPh+Ih+AEIA3hyIh7glIBahaIhmhKIByg4IhKhoIB+gQIgkh6IB8AaIAHiAIBsBBIAwh2IBSBhIBShhIAvB2IBthBIAGCAIB9gaIglB6IB/AQIhKBoIBzA4IhnBKIBaBaIh7AlIA4ByIh/gEIAPB+Ih3guIgaB9IhhhSIhCBsg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.billet, new cjs.Rectangle(-50,-49.8,100,99.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30613").s().p("AKJeQQijgVm/hBQtQh9ldAAQjTAAiwBaQhXAtguAtMAAAg5zQAugtBXgtQCwhaDTAAQFdAANQB9QG/BBCjAVQE7AnCyAAQE1AACohaIA7gkMAAAA5zIg7AkQioBak1AAQiyAAk7gng");
	this.shape.setTransform(-0.9,-1630.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2AD2C9").s().p("EAKJBaIQijgUm/hCQtQh9ldAAQjTAAiwBaQhXAuguAsMAAAghNQAugsBXguQCwhZDTgBQFdAANQB9QG/BCCjAVQE7AnCygBQE1ABCohbIA7gkMAAAAhNIg7AkQioBak1AAQiyAAk7gngAKJg3QijgVm/hCQtQh9ldAAQjTABiwBZQhXAuguAsMAAAhZXMA0cAAdMAAABYCIg7AkQioBbk1gBQiyABk7gng");
	this.shape_1.setTransform(-0.9,-1801.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E30613").s().p("EAKKAwuQijgVm/hBQtRh9lcAAQjVAAivBaQhYAtgtAtMAAAhhjMA0cAAdMAAABgOIg8AkQinBak2AAQixAAk6gng");
	this.shape_2.setTransform(0,-967.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2AD2C9").s().p("EAKKAsoQijgVm/hBQtRh9lcAAQjVAAivBaQhYAtgtAtMAAAhZXMA0cAAdMAAABYCIg8AkQinBak2AAQixAAk6gng");
	this.shape_3.setTransform(0,-447);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E30613").s().p("EAKKAgmQijgVm/hBQtRh9lcAAQjVAAivBaQhYAtgtAtMAAAhBTMA0cAAeMAAAA/9Ig8AkQinBak2AAQixAAk6gng");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2AD2C9").s().p("EAKKAgmQijgVm/hBQtRh9lcAAQjVAAivBaQhYAtgtAtMAAAhBTMA0cAAeMAAAA/9Ig8AkQinBak2AAQixAAk6gng");
	this.shape_5.setTransform(0,212.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-168.8,-2382.1,336.7,2807.2), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD01").s().p("AkIDNQgYh2AAhgQAAhdAYhtQAMg3AMglIIRElIoRE6QgMgogMg7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-28.8,-30.4,57.7,60.8), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30513").s().p("AGsBxQgPgRAAgeIAAiDQAAgeAPgQQAPgRAdAAQAdAAAPARQAPAQAAAeIAAAZIglAAIAAgbQAAgOgGgFQgFgGgKAAQgJAAgGAGQgFAFAAAOIAACHQAAAOAFAFQAHAGAIAAQAJAAAGgGQAGgFAAgOIAAgkIAlAAIAAAiQAAAegPARQgPAQgdAAQgcAAgQgQgAqHBxQgPgRAAgeIAAggIAmAAIAAAiQAAAOAFAFQAFAGAKAAQAJAAAGgGQAGgGAAgRIAAgTQAAgSgHgHQgGgHgNAAIgGAAIAAgjIAIAAQALAAAGgGQAHgFAAgQIAAgOQAAgQgGgHQgGgGgJAAQgKAAgFAGQgFAFAAAOIAAAbIgmAAIAAgZQAAgeAPgQQAPgRAdAAQAdAAAPARQAPAQAAAeIAAAHQAAAogcAMQAQAGAGANQAGANAAAUIAAAUQAAAegPARQgPAQgdAAQgcAAgQgQgAKvB+IAAj7IAnAAIAABfIATAAQAeAAAPAQQAOAPAAAeIAAAhQAAAegOAQQgPAQgeAAgALWBaIATAAQAKAAAEgFQAFgFAAgOIAAgmQAAgNgFgFQgEgFgKAAIgTAAgAgaB+IAAgkIAOAAIAJgBQADAAADgEQAEgEABgEQABgGAAgIIg4i8IAnAAIArCTIAkiTIAnAAIgzC5QgGAXgIARQgHANgIAGQgJAHgIAAgAidB+IAAi2IgxC2IgpAAIAAj7IAjAAIAACWIApiWIAyAAIAAD7gAm9B+IAAhnIgNAAQgOAAgGAIQgGAHAAARIAAA1IgBAIIgDAKIgoAAQACgGABgIIABg3QAAgVAGgNQAFgOAPgGQgagLAAgnIAAgUQAAgcAOgQQAPgOAeAAIA8AAIAAD7gAnfhTQgFAGAAAOIAAAZQAAAPAGAGQAHAFALAAIAPAAIAAhNIgTAAQgKAAgFAGgAJMB+IAAjXIgqAAIAAgkIB7AAIAAAkIgqAAIAADXgAFpB+IgHguIgxAAIgHAuIgkAAIAoj7IA6AAIApD7gAFcAuIgTh+IgTB+IAmAAgADNB+IAAhhIgLACIgLABQgdAAgPgQQgPgQAAgeIAAhfIAoAAIAABhQAAAOAFAFQAGAGAJAAQAJAAAGgFQAFgFABgMIAAhkIAnAAIAAD7gAlaB+IAAjXIgpAAIAAgkIB6AAIAAAkIgpAAIAADXgAsjB+IAAj7IA8AAQAfAAANAOQAOAOAAAeIAAAJQAAAUgGAMQgGANgNAGQAQAGAHANQAGANAAAVIAAAUQAAAdgPAQQgPAPgeAAgAr8BaIAXAAQAKAAAFgFQAGgHAAgNIAAgWQAAgSgGgGQgGgGgOAAIgSAAgAr8gWIAQAAQALAAAGgGQAHgGAAgPIAAgOQAAgOgFgGQgFgGgKAAIgUAAg");
	this.shape.setTransform(26.4,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Слой_3
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-105.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-95.6},3).to({x:-105.6},5).wait(5).to({x:-95.6},3).to({x:-105.6},5).wait(4));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BD2CA").s().p("AysFFIAAqJMAlZAAAIAAKJg");
	this.shape_1.setTransform(14.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-32.5,269,65);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box1
	this.instance = new lib.box1_1();
	this.instance.parent = this;
	this.instance.setTransform(1.7,28.3,0.01,0.01);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).to({regX:0.3,regY:-0.3,scaleX:0.94,scaleY:0.94,y:-1.7},10).wait(55).to({y:518.3},15,cjs.Ease.cubicInOut).wait(6));

	// box2
	this.instance_1 = new lib.box2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-231.8,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({x:-91.8},10).wait(50).to({y:520.1},15,cjs.Ease.cubicInOut).wait(6));

	// box3
	this.instance_2 = new lib.box3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(241.8,-3.2,0.941,0.941,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).to({x:91.8},10).wait(50).to({y:516.8},15,cjs.Ease.cubicInOut).wait(6));

	// btn
	this.instance_3 = new lib.btn("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,174.6,0.01,0.01,0,0,0,0,5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(10).to({mode:"synched",loop:false},0).wait(30).to({startPosition:24},0).to({y:694.6},15,cjs.Ease.cubicInOut).wait(6));

	// hand_right
	this.instance_4 = new lib.hand_right();
	this.instance_4.parent = this;
	this.instance_4.setTransform(232,104,0.9,0.9,-39.7,0,0,0,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({_off:false},0).to({regY:0,rotation:0,x:55.9},15,cjs.Ease.cubicOut).wait(30).to({y:662},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// hand_left
	this.instance_5 = new lib.hand_left();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-248.8,-14,0.9,0.9,30,0,0,-0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({rotation:0,x:-56.8},15,cjs.Ease.cubicOut).wait(40).to({y:544},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// t2_3
	this.instance_6 = new lib.t2_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-130.5,0.2,0.2,0,0,0,0,-0.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-98.4,alpha:1},10,cjs.Ease.backOut).wait(55).to({y:459.6},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// t2_2
	this.instance_7 = new lib.t2_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-133.1,-144.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).to({x:-0.7,y:-149.9,alpha:1},10,cjs.Ease.cubicOut).wait(60).to({y:408.1},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// t2_1
	this.instance_8 = new lib.t2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-13.5,-319.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65).to({_off:false},0).to({y:-193.7},10,cjs.Ease.cubicOut).wait(65).to({y:364.3},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#641C44").s().p("AiAARQgKgfAjgGQBwgRBqgGQAhAkghAcQhgAGhlAQIgKABQgbAAgJgbg");
	this.shape.setTransform(-7.1,-220.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#641C44").s().p("AkFASQgKgfAkgFQEBgoDdAVQAqAggqAgQjUgVj2AnIgKABQgbAAgJgcg");
	this.shape_1.setTransform(6.1,-221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#641C44").s().p("AFjA7Qiggvi6gGQiogFi3AdQgkAGgKggQgKgfAjgGQE/gxEGArQBUAOBMAUQAUAFgJAhQgIAbgSAAIgIgBg");
	this.shape_2.setTransform(18.9,-219.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#641C44").s().p("AHEBoQgkgWg1gXQlZiVngBMQgjAFgLggQgKggAkgFQE/gyEFAsQEJArCMBYQAUAMgeAaQgWAVgMAAQgEAAgDgCg");
	this.shape_3.setTransform(30.8,-215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#641C44").s().p("AG/DEQgVgaAMgOQALgLAHgLQAmg8g6g1QgkgehXgmQlYiWnhBLQgjAGgLggQgKggAkgFQE/gyEFAsQCSAXByApQCYA2BEBLQBUBdiABxQgGAFgGAAQgLAAgOgRg");
	this.shape_4.setTransform(35.8,-204.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#641C44").s().p("ADUD8QgKggAMgFQAtgQApgUQB5g7Ajg2QAmg7g7g1QgjgfhXglQlZiWngBLQgkAGgKggQgKggAjgGQE/gxEGArQCSAXBxApQCYA2BFBNQBnBxjXCPQhOA0hkAjIgFABQgNAAgIgcg");
	this.shape_5.setTransform(35.9,-197.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#641C44").s().p("AgoD2QDKggCKhDQB5g7Ajg2QAmg6g7g2QgjgfhXglQlZiWngBLQgkAGgKggQgKggAjgGQE/gxEGArQCSAXBxApQCYA2BFBNQBnBxjXCPQiqBwkeAoQgmgZAmgpg");
	this.shape_6.setTransform(35.9,-194.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#641C44").s().p("AkuEDQBRgEBTgJQEMgcCqhUQB5g6Ajg2QAmg7g7g1QgjgfhXgmQlZiWngBMQgkAFgKggQgKggAjgFQE/gyEGAsQCSAXBxApQCYA2BFBMQBnByjXCPQjAB+lTAjQheAKhdAGQgrgdArglg");
	this.shape_7.setTransform(35.9,-193.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#641C44").s().p("AokFGQgzgYAzgoQDJAEDegWQEMgdCrhTQB5g7Aig2QAmg6g6g2QgkgfhXglQlYiWnhBLQgjAGgLggQgKggAkgGQE/gxEFArQCSAXByApQCYA2BEBNQBnBxjXCPQjAB+lTAkQi7AUi2AAIhNgBg");
	this.shape_8.setTransform(34.5,-192.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#641C44").s().p("Aq0E1QgEAAABghQABghAJABQE4AkFygkQEMgdCqhTQB5g7Ajg2QAmg6g7g2QgjgfhXglQlaiWnfBLQgkAGgKggQgKggAjgGQE/gxEGArQCSAXBxApQCYA2BFBNQBnBxjXCPQjAB+lUAkQi7AUi3AAQisAAipgSg");
	this.shape_9.setTransform(22.4,-192.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#641C44").s().p("Ao2E0Qi+gVgsgKIgbgHQgKgDAMgjQANgiATAEQAlAJAlAHQF4BJHbgvQENgdCrhTQB5g7Aig2QAmg6g6g2QgkgfhXglQlZiWngBLQgjAGgLggQgKggAkgGQE+gxEGArQCSAXByApQCYA2BEBNQBnBxjXCPQjAB+lUAkQi7AUi3AAQiyAAitgTg");
	this.shape_10.setTransform(8.7,-192.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#641C44").s().p("AngE0Qi+gVgtgKQiUgiglhNQgYgzAJgvQABgIApAFQApAEgBAKQgDBIBEAgQAeAPBpAUQF4BJHbgvQENgdCqhTQB5g7Ajg2QAmg6g7g2QgjgfhXglQlaiWnfBLQgkAGgKggQgKggAjgGQE+gxEHArQCSAXBxApQCYA2BFBNQBnBxjXCPQjAB+lUAkQi8AUi2AAQiyAAitgTg");
	this.shape_11.setTransform(0.2,-192.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#641C44").s().p("AngE0Qi+gVgtgKQiUgiglhNQgrheBAhOQA2hDCAg1QAcgMAPAhQAQAggXALQhIAighAXQhAAsgDAoQgDBIBEAgQAeAPBpAUQF4BJHbgvQENgdCqhTQB5g7Ajg2QAmg6g7g2QgjgfhXglQlaiWnfBLQgkAGgKggQgKggAjgGQE+gxEHArQCSAXBxApQCYA2BFBNQBnBxjXCPQjAB+lUAkQi8AUi2AAQiyAAitgTg");
	this.shape_12.setTransform(0.2,-192.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#641C44").s().p("AngE0Qi+gVgsgKQiVgigkhNQhCiMCshoQCDhQDogsIAIgBQAmAYgmAoQiAAXhvA2QhHAigiAXQhAAsgCAoQgDBIBDAgQAfAPBoAUQF4BJHbgvQENgdCrhTQB5g7Aig2QAmg6g6g2QgkgfhXglQlZiWngBLQgjAGgLggQgKggAkgGQE+gxEGArQCSAXByApQCYA2BEBNQBnBxjXCPQjAB+lUAkQi8AUi2AAQiyAAitgTg");
	this.shape_13.setTransform(0.1,-192.8);

	this.instance_9 = new lib.line();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.2,-192.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},86).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},40).to({state:[{t:this.instance_9}]},15).to({state:[]},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).wait(40).to({y:365.2},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(85));

	// logo
	this.instance_10 = new lib.logo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,-319.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(230).to({_off:false},0).to({y:-267.2},10,cjs.Ease.cubicOut).wait(1));

	// logo
	this.instance_11 = new lib.logo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-267.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({y:321.9},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(79).to({_off:false,regX:0.1,regY:-0.4,scaleX:1.82,scaleY:1.82,x:1,y:-322.1},0).to({y:-194.1},10,cjs.Ease.cubicOut).wait(60).to({y:325.9},15,cjs.Ease.cubicInOut).wait(6));

	// logo_cover
	this.instance_12 = new lib.logo_cover();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0.6,-315);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150).to({_off:false},0).to({y:-187},10,cjs.Ease.cubicOut).wait(60).to({y:333},15,cjs.Ease.cubicInOut).wait(6));

	// billet
	this.instance_13 = new lib.billet();
	this.instance_13.parent = this;
	this.instance_13.setTransform(320,-144.6,3,3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,x:90.1,y:-152.6,alpha:1},10,cjs.Ease.backOut).wait(45).to({y:412.5},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(170));

	// t1
	this.instance_14 = new lib.t1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(21.4,56.3,0.3,0.3,0,0,0,-0.1,0);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:-37.5,y:-57.7,alpha:1},15,cjs.Ease.backOut).wait(30).to({y:507.4},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(170));

	// hero
	this.instance_15 = new lib.hero_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,55);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},10).wait(45).to({y:576.1},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(170));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(2.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55).to({y:417.6},15,cjs.Ease.cubicInOut).wait(70).to({y:949.5},15,cjs.Ease.cubicInOut).wait(65).to({y:1647.5},15,cjs.Ease.cubicInOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.6,-2378.6,815.6,2807.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-1778.6,815.6,2807.1);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/hero.png", id:"hero"}
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