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


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,236);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,236);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,236);


(lib.fries = function() {
	this.initialize(img.fries);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,84);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,194);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,254);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,134);


(lib.img3_1 = function() {
	this.initialize(img.img3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,134);


(lib.plate1 = function() {
	this.initialize(img.plate1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,146);


(lib.plate2 = function() {
	this.initialize(img.plate2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,140);


(lib.plate3 = function() {
	this.initialize(img.plate3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,162);


(lib.vapor = function() {
	this.initialize(img.vapor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,265);// helper functions:

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


(lib.vaporMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.vapor();
	this.instance.parent = this;
	this.instance.setTransform(-47,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.vapor();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47,-148);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.vaporMc, new cjs.Rectangle(-47,-148,117,265), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE009").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-124.6,-32.9,249.3,65.9), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE009").s().p("AsiCiIAAgdIikAAIAAj7IAoAAIAADXIAgAAIAAjXIAoAAIAADXIAgAAIAAjXIAoAAIAADXIAUAAIAABBgAEvB4QgPgQAAgfIAAiCQAAgfAPgQQAPgQAdAAQAeAAAOAQQAPAQAAAfIAAAYIglAAIAAgbQAAgOgGgFQgFgFgKAAQgJAAgFAFQgGAGAAANIAACIQAAAOAGAFQAFAFAJAAQAKAAAFgFQAGgFAAgOIAAgkIAlAAIAAAhQAAAfgPAQQgOAQgeAAQgcAAgQgQgAgDB4QgPgQAAgfIAAiCQAAgfAPgQQAPgQAdAAQAcAAAQAQQAQAQAAAfIAACCQAAAfgQAQQgPAQgdAAQgeAAgOgQgAAahPQgGAGAAANIAACIQAAANAGAGQAFAFAKAAQAJAAAGgFQAFgGAAgNIAAiIQAAgNgFgGQgGgFgJAAQgKAAgFAFgAiPB4QgPgQAAgfIAAiCQAAgfAPgQQAPgQAdAAQAdAAAPAQQAPAQAAAfIAAAYIglAAIAAgbQAAgNgGgGQgFgFgKAAQgKAAgFAFQgGAGAAANIAACIQAAAOAGAFQAGAFAJAAQAJAAAGgFQAGgFAAgOIAAgkIAlAAIAAAhQAAAegPARQgPAQgdAAQgdAAgPgQgAlTB4QgPgQAAgfIAAggIAmAAIAAAjQAAANAFAGQAGAFAJAAQAKAAAFgFQAGgGAAgRIAAgUQAAgRgGgIQgGgHgOAAIgGAAIAAgjIAIAAQALAAAHgGQAGgFAAgQIAAgOQAAgRgGgFQgFgGgKAAQgJAAgGAFQgFAGAAANIAAAbIgmAAIAAgYQAAgfAPgQQAPgQAdAAQAeAAAPAQQAOAQAAAfIAAAGQAAApgbAKQAPAHAGANQAGAOAAATIAAAUQAAAegOARQgPAQgeAAQgcAAgQgQgACJCFIAAgkIANABIAJgBQADgBAFgDQADgDABgFQACgGAAgIIg6i9IAoAAIArCTIAkiTIAoAAIg0C5QgGAXgIARQgGAOgJAGQgIAGgJAAIgUABgAOgCGIAAgnIAmAAIAAAngAnWCGIAAi2IgyC2IgoAAIAAj8IAjAAIAACWIApiWIAxAAIAAD8gArrCGIAAj8IBsAAIAAAlIhFAAIAABGIA3AAIAAAjIg3AAIAABKIBFAAIAAAkgANfCFIAAi1IgyC1IgoAAIAAj7IAjAAIAACWIApiWIAxAAIAAD7gALCCFIAAizIgbCzIglAAIgeixIAACxIgjAAIAAj7IA4AAIAdCyIAbiyIA3AAIAAD7gAIHCFIgGgtIgxAAIgHAtIgkAAIAoj7IA6AAIAoD7gAH7A2IgTh/IgTB/IAmAAgAOkBOIgFhaIAAhqIAoAAIAABqIgFBagAociEIAAgdIBXAAIAAAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-96.6,-16.2,193.4,32.5), null);


(lib.t2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHEBxQgPgRgBgeIAAiDQABgeAPgQQAQgRAdAAQAdAAAPARQAPAPAAAfIAACDQAAAfgPAQQgQAQgcAAQgdAAgQgQgAHhhWQgFAFAAAOIAACHQAAAOAFAFQAFAGALAAQAJAAAFgGQAGgFAAgOIAAiHQAAgOgGgFQgFgGgJAAQgLAAgFAGgAw8BxQgPgRAAgeIAAiDQAAgeAPgQQAQgRAdAAQAdAAAPARQAOAQAAAeIAAAZIglAAIAAgbQAAgOgFgFQgGgGgKAAQgJAAgGAGQgFAFAAAOIAACHQAAAOAFAFQAHAGAIAAQAKAAAGgGQAFgFAAgOIAAgkIAlAAIAAAiQAAAegOARQgPAQgdAAQgdAAgQgQgALUB+IAAgkIAPAAQAJAAAGgEQAHgFAAgPIAAi/IB+AAIAAD7IgoAAIAAjXIgvAAIAACYQABAUgFAMQgFALgHAIQgIAHgLADQgKADgMAAgAKbB+IAAjXIgtAAIAADXIgpAAIAAj7IB+AAIAAD7gAFVB+IAAjXIgpAAIAAgkIB6AAIAAAkIgpAAIAADXgACvB+IAAj7IA6AAQAeAAAOAQQAPAQABAeIAAAhQgBAegPAPQgOAQgeAAIgTAAIAABfgADWgEIATAAQAKAAAFgFQAEgFABgNIAAgmQgBgOgEgFQgFgFgKAAIgTAAgAmGB+IAAhsIgtAAIAABsIgnAAIAAj7IAnAAIAABsIAtAAIAAhsIApAAIAAD7gAQkB+IAAgmIAnAAIAAAmgAPgB+IAAhnIgPAAQgNAAgGAIQgGAHAAARIgBA9IgDAKIgoAAQADgGABgIIAAg3QAAgUAGgOQAFgOAQgGQgagLAAgnIAAgUQgBgdAOgPQAPgOAeAAIA8AAIAAD7gAO9hTQgFAHAAANIAAAZQAAAPAGAGQAHAFALAAIAQAAIAAhNIgTAAQgLAAgFAGgAB1B+IgHguIgxAAIgGAuIgkAAIAnj7IA6AAIApD7gABoAuIgSh+IgTB+IAlAAgAgdB+IgmhkIgMAXIAABNIgoAAIAAj7IAoAAIAABuIA0huIAmAAIg2BwIA2CLgAjoB+IgHguIgxAAIgHAuIgkAAIAoj7IA6AAIAoD7gAj1AuIgTh+IgTB+IAmAAgAofB+IAAhhIgKACIgLABQgdAAgPgQQgPgQgBgeIAAhfIApAAIAABhQgBAOAGAFQAGAGAJAAQAJAAAFgFQAFgEABgNIAAhkIAoAAIAAD7gAqgB+IgHguIgwAAIgHAuIglAAIAoj7IA7AAIAnD7gAqtAuIgTh+IgTB+IAmAAgAs6B+IAAi0IgbC0IgmAAIgeixIAACxIgiAAIAAj7IA3AAIAdCyIAbiyIA3AAIAAD7gAQpBGIgFhaIAAhpIAoAAIAABpIgGBag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_mc, new cjs.Rectangle(-109.9,-12.8,219.9,25.8), null);


(lib.t2_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA002A").s().p("A0OjWMAodgBQIg8I5Mgm5AAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_bg, new cjs.Rectangle(-129.5,-29.5,259,59), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE009").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-90.3,-50.2,180.6,100.4), null);


(lib.plate3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.plate3();
	this.instance.parent = this;
	this.instance.setTransform(-114,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate3_1, new cjs.Rectangle(-114,-81,228,162), null);


(lib.plate2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.plate2();
	this.instance.parent = this;
	this.instance.setTransform(-92,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate2_1, new cjs.Rectangle(-92,-70,184,140), null);


(lib.plate1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.plate1();
	this.instance.parent = this;
	this.instance.setTransform(-86,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.plate1_1, new cjs.Rectangle(-86,-73,172,146), null);


(lib.p2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fries();
	this.instance.parent = this;
	this.instance.setTransform(-21,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_mc, new cjs.Rectangle(-21,-42,42,84), null);


(lib.p1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.fries();
	this.instance.parent = this;
	this.instance.setTransform(-21,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_mc, new cjs.Rectangle(-21,-42,42,84), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjTBCQgGgGgCgMIgEgxQgCgMAFgHQAFgIAMgBQAMgBAGAGQAHAGABAMIABAJIgQABIgBgKQAAgFgCgBQgCgCgEAAQgDAAgDADQgBACAAAFIAGAzQAAAFACACQADACADAAQAEgBABgCQADgCgBgFIgCgOIABAAIAOgCIACANQACAMgGAHQgFAHgMACIgDAAQgJAAgGgFgAirgfIARgCIAEApIARgCIgFgoIARgCIAAAAIAKBhIgRACIgEgqIgQACIAEApIgQACgAhvglIARgCIAJBhIgQACgAhUgoIAXgCQAMgBAGAFQAHAGAAAMIACAMQABALgFAHQgFAHgMABIgGABIADAkIgQACgAg7gbIgIAAIAEAfIAGgBQAEAAACgCQACgBgBgFIgCgOQgBgGgCgBIgDgBIgBAAgAgTAuQgGgGgBgMIgBgHIAAAAIAPgCIABAJQABAFACABQACACADAAQADgBACgCQACgCgBgFQgBgFgCgDIgFgHIgIgGIgIgGIgHgIQgCgFgBgHQgBgMAFgHQAFgHALgCQALgBAGAGQAGAGACAMIAAAEIgOACIgBgGQAAgFgCgBQgCgCgEAAQgDAAgBADQgCACAAAFQAAAFADADIAHAHIAHAGIAHAGQAEADADAFQADAFABAHQABAMgGAHQgFAHgLACIgDAAQgIAAgHgFgAAfglIgRACIAAgBIgBgOIAwgFIABAPIgPABIAIBTIgQABgABDg4IAqgEIACAPIgbADIADAaIAUgDIADAPIgWADIADAaIAbgDIABAPIgqAEgACBAkIgLhhIABAAIAWgCQANgCAGAGQAGAFABALIABAIQACAOgKAGQAGACACAFQADAFABAHIACAPIABAGIABAFIABABIgRACIgBgCIgBgCIAAgEIAAgEIgCgQQgBgFgDgDQgCgCgFAAIgFABIAFAmIgQACgACIgwIADAdIAGAAQADgBACgCQACgDAAgFIgBgKQAAgFgDgCQgBgCgFAAgAC6AZQgHgGgBgMIgBgHIAQgBIABAHQAAAFACACQACACAEgBQADAAADgCQABgCAAgFQgBgFgDgDIgFgGIgIgGIgIgHIgHgJQgDgFAAgHQgCgMAFgHQAGgHALgBQALgBAGAGQAHAGACAMIAAAEIgQABIAAgFQAAgFgCgCQgDgBgDAAQgDAAgCACQgCADABAFQAAAFADADIAGAHIAHAGIAIAGQAEAEADAFQACAFABAGQACAMgGAHQgEAHgMABIgEABQgJAAgFgFgACmg4IgBgKIAIgBIgDALg");
	this.shape.setTransform(0,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA0029").s().p("AkAgtICFgOQADAKAJADQAFACAGgBQAHgBADgFQAFgFAAgHIFHgiIAPCQIi8ATIAAgFIgkAJIAAABIg6AFQgMgCgPAAQgPAAgUACIABAHIgQABIAAgEIhQACIAAAKIg7AHgAjLgcQgMAAgFAIQgFAHACAMIAEAxQACAMAGAGQAHAGALgBQAMgCAFgGQAGgIgCgLIgCgOIgOACIgBAAIACAOQABAFgDADQgBACgEAAQgDAAgDgBQgCgDAAgFIgGgzQAAgFABgCQADgCADgBQAEAAACACQACACAAAEIABAKIAQgBIgBgJQgBgMgHgGQgFgFgKAAIgDABgAirgfIALBhIAQgBIgEgqIAQgCIAEAqIARgBIgKhhIAAgBIgRACIAFApIgRACIgEgqgAhvglIAKBhIAQgCIgJhhgAg9gqIgXACIAKBhIAQgBIgDglIAGAAQAMgBAFgIQAFgHgBgKIgCgNQAAgMgHgFQgFgFgKAAIgDAAgAgaAcQABANAGAFQAIAGAKgBQALgCAFgGQAGgIgBgMQgBgHgDgFQgDgEgEgEIgHgGIgHgGIgHgHQgDgDAAgFQAAgFACgCQABgCADgBQAEAAACACQACACAAAFIABAFIAOgCIAAgEQgCgMgGgFQgGgHgLABQgLACgFAHQgFAHABAMQABAHACAFIAHAJIAIAFIAIAGIAFAHQACAEABAFQABAEgCADQgCABgDABQgDAAgCgBQgCgCgBgFIgBgJIgPACIAAAAgAAnAuIAQgCIgIhTIAPgBIgBgPIgwAFIABAPIAAAAIARgBgABDg3IAKBgIAqgEIgBgPIgbADIgDgaIAWgDIgDgOIgUACIgDgaIAbgDIgCgPgACBAkIAAABIAQgCIgFgnIAFgBQAFAAACACQADADABAFIACAQIAAAFIAAADIABACIABACIARgCIgBgBIgBgEIgBgHIgCgPQgBgGgDgFQgCgFgGgDQAKgFgCgPIgBgIQgBgLgGgFQgGgGgNACIgWACIgBAAgACxAAIABAHQABAMAHAGQAGAGAMgCQAMAAAEgIQAGgGgCgNQgBgFgCgFQgDgGgEgDIgIgHIgHgGIgGgGQgDgEAAgFQgBgFACgCQACgCADgBQADAAADACQACABAAAGIAAAEIAQgBIAAgEQgCgMgHgGQgGgGgLABQgLABgGAIQgFAGACAMQAAAIADAEIAHAJIAIAHIAIAGIAFAGQADADABAFQAAAFgBACQgDACgDAAQgEABgCgCQgCgCAAgEIgBgHgAClhCIABALIAEAAIADgMgAhDgaIAIgBQACgBACACQACABABAGIACAOQABAFgCACQgCABgEAAIgGABgACIgwIAGgBQAFAAABADQADACAAAEIABAKQAAAFgCADQgCACgDABIgGABg");
	this.shape_1.setTransform(0,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE00A").s().p("AgTD0QAAgkgHgHQgGgKgLABIgDAAQAAAkADAfIgnABIABhDIgBhiIgBgHQAUgCAPAAQAPAAAMACQAVAEAGAJQALAOAAAQQAAAHgCAJQgHAZgXAHQAPACAJAOQAIAOAAA4IAAAEIglABIABgagAgyBzIABAzQAYgBAGgOQADgIAAgGQAAgHgCgFQgFgKgSAAIgJAAgABgBsIAfgCQgDBXAABLIgkABQAEhOAEhTgAAmBnIAkgCQgBBNgBBOIgfADQAAhTgDhJgACMBiIAjgEIADCcIggAEQgChTgEhJgAixD9QABghAAgiQAAgpgCgpIAAgKIBQgCIAAAEIAAAcIgygCIAAAsIAtgBIABAfIgoAAIAAA6gABiBUIAegFIABAWIghADgAAlBTIAAgBIAkgJIAAAFIAAAQIgjAFgACKBLIAjgHIAAAXIggACgAhrgiQgJgDgDgKQgCgGACgGIAmAIIAAAAQAAAHgFAFQgDAFgHABIgEAAIgHgBgAh8hGIACgFIAFgDIAbASIAAACgAhqhQQADgBAEAAIAGACIACACIACACIABAIIAAABIgBABgAgyhbIAAhEIghAAIAAA/IggAAIABhVQAAgpgBgnIAfAAIgCBEIAhACIAAhJIAhADIgDCqgAitheQguAAABhXQAAhUAuAAQAsAAAAA4IAAAHIgaAAIAAgCQAAgcgQAAQgRAAAAAyQABA6AQAAIABAAQARgBAAgbIAAgMIAdAAIAAAJQAAA6gwADIgCAAgACIh+QAAhHgDhFIAjgDQgCA9AAArIABAhIAzgDIABAmIhTACIAAgfgAAlh+QAAhFgChHIAjgDQgCA9AAArIAAAhIA0gDIABAmIhUACIAAgfgAgJkFIAggDIgBCiIgdACQABhVgDhMg");
	this.shape_2.setTransform(-0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-25.7,-27,51.4,54), null);


(lib.img3_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3_1();
	this.instance.parent = this;
	this.instance.setTransform(-143,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1_1, new cjs.Rectangle(-143,-67,286,134), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-108,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-108,-127,216,254), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-115,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-115,-97,230,194), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE009").s().p("AgOAtQgQgIgFgVQgCgLAFgNIBJAYQgBAOgKAKQgKAIgLABIgDAAQgLAAgJgEgAgogeIAGgJQAFgEAFgDIAwAsIgBACgAgBguQAEgCAHABQAHABAFAEQAGAEACAGQACAHgBAIQAAAFgCAAg");
	this.shape.setTransform(-20,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFvBYQgMgNAAgYIAAgOIAgAAIAAAQQAAAKAEAEQAEAEAHAAQAHAAAEgEQAEgEAAgKQAAgKgFgHQgDgIgIgHIgOgNQgIgHgGgHQgHgJgFgKQgEgLgBgOQABgYALgNQAMgNAXAAQAYAAALANQAMANgBAYIAAAJIgfAAIAAgLQABgKgEgEQgEgEgHAAQgHAAgEAEQgDAEAAAKQgBAKAFAHQAEAIAHAHIAOANIAPAOQAHAJAEAKQAFALAAAOQAAAYgMANQgMANgXAAQgYAAgMgNgAgwBYQgMgNABgYIAAgOIAfAAIAAAQQAAAKAEAEQAEAEAHAAQAGAAAFgEQADgEAAgKQAAgKgEgHQgEgIgGgHIgPgNQgIgHgGgHQgIgJgEgKQgEgLAAgOQAAgYALgNQAMgNAXAAQAXAAALANQALANAAAYIAAAJIgeAAIAAgLQAAgKgEgEQgEgEgGAAQgHAAgEAEQgDAEAAAKQAAAKADAHQAFAIAHAHIANANIAPAOQAGAJAFAKQAFALAAAOQAAAYgMANQgMANgXAAQgXAAgMgNgAm1BYQgMgNAAgYIAAhlQAAgYAMgNQALgNAYAAQAXAAAMANQAMANAAAYIAAAUIgfAAIAAgWQAAgKgEgEQgFgEgGAAQgHAAgEAEQgEAEAAAKIAABpQAAAKAEAEQAEAEAHAAQAGAAAFgEQAEgEAAgKIAAgdIAfAAIAAAbQAAAYgMANQgMANgXAAQgYAAgLgNgAE6BjIgBgEIgBgFIgBgGIAAgpQAAgNgEgGQgEgFgLAAIgJAAIAABQIgiAAIAAjFIAwAAQAZAAALALQALAMAAAXIAAAPQAAAegTAJQALAFADAKQAFALAAAQIAAAeIABANQAAAFACAGIABABgAEbgKIAKAAQAJAAAFgEQAEgEAAgLIAAgUQAAgKgDgFQgEgEgIAAIgNAAgACRBjIAAjFIBWAAIAAAeIg2AAIAAA1IArAAIAAAdIgrAAIAAA3IA2AAIAAAegABEBjIAAinIggAAIAAgeIBhAAIAAAeIggAAIAACngAiiBjIAAjFIAvAAQAYAAAMANQALAMAAAYIAAAaQAAAXgLANQgMAMgYAAIgOAAIAABKgAiBgEIAOAAQAHAAAEgDQADgEAAgKIAAgeQAAgKgDgDQgEgEgHAAIgOAAgAjYBjIAAjFIAhAAIAADFgAkOBjIAAhUIghAAIAABUIghAAIAAjFIAhAAIAABUIAhAAIAAhUIAhAAIAADFgAFYhNIAAgVIARAAIgHAVg");
	this.shape_1.setTransform(0,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Слой_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(0,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// Слой_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA002A").s().p("Az1F8IAAr3MAnrAAAIAAL3g");
	this.shape_3.setTransform(0,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B9011B").s().p("Az1F8IAAr3MAnrAAAIAAL3g");
	this.shape_4.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{y:2}},{t:this.shape_3,p:{y:-2}}]}).to({state:[{t:this.shape_3,p:{y:2}},{t:this.shape_4,p:{y:-2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-40,254,80);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-75,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-75,-118,150,236), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-75,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-75,-118,150,236), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-75,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-75,-118,150,236), null);


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


(lib.vapor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vaporMc();
	this.instance.parent = this;
	this.instance.setTransform(14.8,32.8,1,1,0,0,180);
	this.instance.alpha = 0.98;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-15,alpha:0},49).wait(1).to({y:82.5},0).to({y:33.8,alpha:1},50).wait(1));

	// Слой 1
	this.instance_1 = new lib.vaporMc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35,82.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:33.8,alpha:1},50).to({y:-15,alpha:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-148,152.1,347.5);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.t2_mc();
	this.instance.parent = this;
	this.instance.setTransform(-474.7,2.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:0.3},15,cjs.Ease.backOut).wait(3));

	// Слой_3
	this.instance_1 = new lib.t2_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-475,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0},15,cjs.Ease.backOut).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-604.5,-29.5,259,59);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p2_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:-720},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-42,42,84);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.p = new lib.p1_mc();
	this.p.name = "p";
	this.p.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p).to({rotation:360},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-42,42,84);


(lib.img3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.img3_1_1();
	this.instance.parent = this;
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},20).to({alpha:0.77},19).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ASBRzQjRh8kKhgQiUg1jTggQivgaicgEQh0gDiyAhQhnAUi0AtQhpAbikBJQhpAwhPAqQhUAthZgPQgngGgqghQghgagDgHQqSiWgEgFQgCgCACv8QACv8gCgCQgCgCfIgIQe8gIAKgCQgCAEAHJ6QAHJ/gCgDQgBgBkLHfQkRHrggAkQguAzhGAMQgSADgTAAQg7AAg6gigAfCyUIAAAAIAAAAg");
	mask.setTransform(-5.4,-96.2);

	// Слой_3
	this.instance_1 = new lib.vapor_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.5,-69.5,0.8,0.8,0,0,180);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.vapor_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30.6,-92.6,0.8,0.8);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.vapor_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-37.8,-92.6,0.8,0.8,0,0,180);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.vapor_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-93.4,-77.6,0.8,0.8);
	this.instance_4.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(40));

	// Слой_1
	this.instance_5 = new lib.img3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-143,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-184.8,313.2,251.8);


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
p.nominalBounds = new cjs.Rectangle(-21,-42,42,84);


(lib.chips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		/*
		n += .5;
		for (let i = 0; i < n; i++) {
			if(counter < 250){
				var cloneParticle = new lib.particle2Movie();
				cloneParticle.x = Math.random()*600;
				cloneParticle.scaleX = cloneParticle.scaleY = Math.random()*.5 +.5;;
				this.addChild(cloneParticle);
				counter++;
			}else{
				this.stop();
			}
		}
		*/
		n = 2;
		for (let i = 0; i < n; i++) {
			var cloneParticle = new lib.particle2Movie();
			cloneParticle.x = Math.random()*400;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
			this.addChild(cloneParticle);
		}
		var num = this.getNumChildren();
		//console.log(num);
		var speed = 20;
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
			cloneParticle.x = Math.random()*400;
			cloneParticle.scaleX = cloneParticle.scaleY = Math.random();
			this.addChild(cloneParticle);
		}
		var num = this.getNumChildren();
		//console.log(num);
		var speed = 20;
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
p.nominalBounds = new cjs.Rectangle(-21,-42,42,84);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-109.9,-257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(329));

	// bgImg
	this.instance_1 = new lib.bgImg1_1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).to({alpha:1},15).wait(1));

	// btn
	this.instance_2 = new lib.btn("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,238.2,0.01,0.01);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(265).to({_off:false},0).to({scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(15).to({scaleX:0.96,scaleY:0.96,y:238.1,startPosition:1},0).wait(3).to({scaleX:1,scaleY:1,y:238.2,startPosition:0},0).wait(4).to({scaleX:0.96,scaleY:0.96,y:238.1,startPosition:1},0).wait(3).to({scaleX:1,scaleY:1,y:238.2,startPosition:0},0).wait(29));

	// t4
	this.instance_3 = new lib.t4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-169.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(250).to({_off:false},0).to({alpha:1},15).wait(64));

	// box3
	this.instance_4 = new lib.box3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(247,31);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(250).to({_off:false},0).to({x:70},15,cjs.Ease.cubicOut).wait(64));

	// plate3
	this.instance_5 = new lib.plate3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-294,94);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(250).to({_off:false},0).to({x:-60},15,cjs.Ease.cubicOut).wait(64));

	// t3
	this.instance_6 = new lib.t3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-172);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(140).to({_off:false},0).to({alpha:1},15).wait(85).to({alpha:0},10).to({_off:true},1).wait(78));

	// box2
	this.instance_7 = new lib.box2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247,31);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(195).to({_off:false},0).to({x:70},15,cjs.Ease.cubicOut).wait(30).to({x:247},10,cjs.Ease.cubicIn).to({_off:true},1).wait(78));

	// plate2
	this.instance_8 = new lib.plate2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-264,106);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(195).to({_off:false},0).to({x:-69},15,cjs.Ease.cubicOut).wait(30).to({x:-264},10,cjs.Ease.cubicIn).to({_off:true},1).wait(78));

	// box1
	this.instance_9 = new lib.box1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(247,31);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140).to({_off:false},0).to({x:70},15,cjs.Ease.cubicOut).wait(30).to({x:247},10,cjs.Ease.cubicIn).to({_off:true},1).wait(133));

	// plate1
	this.instance_10 = new lib.plate1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-259,99);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(140).to({_off:false},0).to({x:-81},15,cjs.Ease.cubicOut).wait(30).to({x:-259},10,cjs.Ease.cubicIn).to({_off:true},1).wait(133));

	// bgImg2
	this.instance_11 = new lib.bgImg2_1();
	this.instance_11.parent = this;
	this.instance_11.alpha = 0.301;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(125).to({_off:false},0).to({alpha:1},15).wait(189));

	// t2
	this.instance_12 = new lib.t2("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,-170.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({_off:false},0).to({_off:true},75).wait(189));

	// fries
	this.instance_13 = new lib.chips();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-197.2,-353.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(55).to({_off:false},0).to({_off:true},85).wait(189));

	// t1
	this.instance_14 = new lib.t1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(246.5,-234);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:42.5},15,cjs.Ease.backOut).wait(40).to({x:246.5},10,cjs.Ease.backIn).to({_off:true},1).wait(263));

	// img2
	this.instance_15 = new lib.img2_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-87,326.1,0.1,0.1,0,0,0,25.5,122.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).to({regX:26,regY:122,scaleX:1,scaleY:1,y:315},15,cjs.Ease.backOut).wait(30).to({regX:25.5,regY:122.5,scaleX:0.1,scaleY:0.1,y:326.1},10,cjs.Ease.backIn).to({_off:true},1).wait(263));

	// img1
	this.instance_16 = new lib.img1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(332.1,131,1,1,45,0,0,115,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).to({rotation:0,x:210},15,cjs.Ease.backOut).wait(35).to({rotation:45,x:332.1},10,cjs.Ease.backIn).to({_off:true},1).wait(263));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aa/aJQAAgdgbgrQgQgbgYAEQgXAKgHABQgEAAgcgMQgegNgdgFQhIgJgYASQgJAHgXADQgUADgUgBQgWgBg2AAQg+ABgXADQgyAGgmASQgKAEgSgEIgegHQgPgBgnAFQgGABgYgGQgZgFgTAAQgUABggAEIg/AKQgeAEg2gCQgpgBgkgFQgYgCgTAHIgZAKQgIADgTgDQgRgCgCgCQgWgOgqgCQgZgBggAMQgbANgBgBQgCgBgogCQgpgDgQABQhpAHgBgBQgTgXgNgKIgTgNQgJgTgMgLIgRgMQgIgHgDgGQgDgHgIgFIgIgFQgDgBgGgNQgHgUgRgOQgFgEgHgLQgJgMgHgIQgRgRgVANQgGAEgBAKQAAAJgBgBQgCgDgXgUQgbgXgKgCIhDgWQgMgDgNAAIgLAAIgBgMQAAgKgBgCQgCAAALhBQAAgHAIgHQAIgIAEgLQAHgXgGgiQgGgkgHgSQgIgVgHgNQgNgUgggeQgggcglgJIg+gGQgbgDgfAJQgaAIgRAMQgMAIACAOIAEANQgBgBgHgBQgJAAgIABQgIACgMAMIgTAYQgTAWgKAgQgFAPADAgIAGAoQACALgMAxQgFAVALAwQACAMAIANIAGAJQgBgBAFAVIACAfQADAigCAIIgFAcQgEATgEAIQgIATgYANQgKAFgZATQgMAJgZAFQgYAFgQgCQgigBgWAJQgXAJgxgFQgUgBgaACQgfADgWgHQgRgFgwgEQgTgBgKAFQgegCgCgCQhmAAgBgBIgbABIgaAAIghgBIgfgDQgBgBh/gCIg0gCQgigCgSACQguAChzgIQhAgFgrAeQgKAHgQAdIgOAaQAAAYgCgEQgCgCghAIQgdAHgXAHQhAAUgCgDQgBgBgVgCQgUAAgBgCIgj6SQgj6PgCgDUgADgACAgvgBMUAgigBLAALgACUgAGAAMgCHA19QAAgBgggBQAAgBgSAAIgRgCIgLAMQAAgCgXAHQgqAdgUAMQgNAHgXADIgTACgEAgtgbkIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.6,y:-158.8}).wait(66).to({graphics:null,x:0,y:0}).wait(263));

	// img3
	this.instance_17 = new lib.img3_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1,192);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:-75},15,cjs.Ease.cubicOut).wait(40).to({y:192},10,cjs.Ease.cubicIn).to({_off:true},1).wait(263));

	// bgImg
	this.instance_18 = new lib.bgImg1_1();
	this.instance_18.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(329));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-300,540.9,600);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.1,264.7,546.7,635.4);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/fries.png", id:"fries"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img3_1.png", id:"img3_1"},
		{src:"images/plate1.png", id:"plate1"},
		{src:"images/plate2.png", id:"plate2"},
		{src:"images/plate3.png", id:"plate3"},
		{src:"images/vapor.png", id:"vapor"}
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