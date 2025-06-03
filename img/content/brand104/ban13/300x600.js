(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,496);


(lib.square3 = function() {
	this.initialize(img.square3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,210);


(lib.square = function() {
	this.initialize(img.square);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.triangle = function() {
	this.initialize(img.triangle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("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AgfhGQAAgGAGAAQAGAAAAAGQAAAGgGAAQgGAAAAgGgAn8hHQgHgHAAgKQAAgLAHgHQAHgHALAAQANAAAGAJIgGAGQgFgGgIAAQgHAAgEAEQgEAFAAAHQAAAHAEAEQAEAFAHAAQAIAAAFgHIAGAGQgHAJgMAAQgLAAgHgHgAp0hHQgGgHAAgKQAAgLAGgHQAHgHALAAQANAAAHAJIgGAFQgFgGgJAAQgNAAgCANIAXAAIAAAHIgXAAQABANAOAAQAJAAAFgGIAGAGQgHAIgNAAQgLAAgHgHgAqthHQgHgHAAgKQAAgLAHgHQAGgHAJAAQALAAAFAIIAAgGIAJAAIAAAuIgJAAIAAgHQgFAIgLAAQgJAAgGgHgAqmhkQgEAEAAAIQAAAHAEAEQAEAFAGAAQAHAAADgFQAEgEAAgHQAAgQgOAAQgGAAgEAEgAtphAIABgJIADABQADAAACgEIABgMIABgXIAlAAIAAAuIgJAAIAAgnIgUAAIAAARQgBANgCAFQgEAFgIAAgAxIhHQgHgHAAgKQAAgLAHgHQAGgHAKAAQAKAAAHAHQAGAHAAAJIAAAEIglAAQACAOAOAAQAKAAAEgGIAFAGQgGAIgOAAQgLAAgGgHgAxGhcIAcAAQgCgNgMAAQgLAAgDANgAO8hHQgHgHAAgKQAAgLAHgHQAGgHALAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAHgKAAQgLAAgGgHgAPChkQgEAFAAAHQAAAHAEAEQAEAEAHAAQAGAAAEgEQAEgEAAgHQAAgHgEgFQgEgEgGAAQgHAAgEAEgAEkhHQgHgHAAgKQAAgLAHgHQAHgHAKAAQALAAAGAHQAHAHAAALQAAAKgHAHQgGAHgLAAQgKAAgHgHgAErhkQgFAFAAAHQAAAHAFAEQAEAEAGAAQAGAAAEgEQAFgEAAgHQAAgHgFgFQgEgEgGAAQgGAAgEAEgADuhIIAFgFQAFAFAJAAQAMAAAAgHQAAgGgKAAIgKAAIAAgHIAIAAQAKAAAAgGQAAgHgJAAQgIAAgGAFIgFgFQAHgIAMAAQASAAAAANQAAAIgHADQAJADAAAIQAAAOgVAAQgNAAgGgIgAC/hHQgHgHAAgKQAAgLAHgHQAHgHAKAAQALAAAHAHQAGAHAAALQAAAKgGAHQgHAHgLAAQgKAAgHgHgADGhkQgEAFAAAHQAAAHAEAEQAEAEAGAAQAHAAAEgEQAEgEAAgHQAAgHgEgFQgEgEgHAAQgGAAgEAEgAkChIIAFgFQAFAFAJAAQAMAAAAgHQAAgGgKAAIgKAAIAAgHIAIAAQAKAAAAgGQAAgHgJAAQgIAAgGAFIgFgFQAHgIAMAAQASAAAAANQAAAIgHADQAJADAAAIQAAAOgVAAQgNAAgGgIgAsUhGQgGgGgBgJIgIAAIAAAUIgJAAIAAguIAJAAIAAASIAIAAQACgJAGgFQAGgGAJAAQAKAAAHAHQAGAHAAALQAAAKgGAHQgHAHgKAAQgJAAgHgGgAsOhkQgEAFAAAHQAAAHAEAEQAEAEAGAAQAOAAAAgPQAAgHgEgFQgEgEgGAAQgGAAgEAEgARzhBIAAgUIgXAAIAAAUIgKAAIAAguIAKAAIAAASIAXAAIAAgSIAJAAIAAAugAQ8hBIAAgiIgYAiIgIAAIAAguIAJAAIAAAhIAYghIAIAAIAAAugAP5hBIAAgnIgQAAIAAgHIAqAAIAAAHIgQAAIAAAngAOnhBIgMgTIgDgBIgIAAIAAAUIgJAAIAAguIAJAAIAAASIAIAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAMgQIAKAAIgQAVIARAZgANxhBIAAguIAJAAIAAAugANahBIAAgUIgXAAIAAAUIgJAAIAAguIAJAAIAAASIAXAAIAAgSIAJAAIAAAugAL0hBIAAguIAJAAIAAAQIAKAAQAUAAAAAPQAAAPgUAAgAL9hIIAKAAQAKAAAAgIQAAgIgKAAIgKAAgALShBIAAgnIgQAAIAAgHIApAAIAAAHIgQAAIAAAngAKwhBIAAgiIgYAiIgJAAIAAguIAJAAIAAAhIAYghIAJAAIAAAugAJthBIAAgnIgQAAIAAgHIApAAIAAAHIgQAAIAAAngAIXhBIAAguIAJAAIAAAugAIBhBIAAghIgPAUIgGAAIgPgUIAAAhIgJAAIAAguIAJAAIASAYIASgYIAJAAIAAAugAGOhBIAAguIAKAAIAAAQIAKAAQATAAAAAPQAAAPgTAAgAGYhIIAJAAQALAAAAgIQAAgIgLAAIgJAAgAA6hBIgEgNIgfAAIgFANIgKAAIAahEIAIAAIAaBEgAAahXIAYAAIgMgggAhPhBIAAguIAUAAQASAAAAAMQAAAHgHADQAJADAAAIQAAANgRAAgAhGhIIAMAAQAKAAAAgHQAAgGgKAAIgMAAgAhGhcIAKAAQAKAAAAgGQAAgHgKAAIgKAAgAhmhBIAAguIAJAAIAAAugAh5hBIgNgTQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgHAAIAAAUIgJAAIAAguIAJAAIAAASIAIAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIANgQIAKAAIgQAVIAQAZgAivhBIAAgiIgYAiIgJAAIAAguIAJAAIAAAhIAYghIAIAAIAAAugAkUhBIAAgiIgYAiIgJAAIAAguIAJAAIAAAhIAYghIAJAAIAAAugAmXhBIgNgRIgNARIgKAAIARgYIgRgWIALAAIAMARIANgRIALAAIgSAXIASAXgAnNhBIAAguIAJAAIAAAugArHhBIAAgTQgGADgHAAQgSAAAAgRIAAgNIAJAAIAAAMQAAAJALAAQAGAAAFgCIAAgTIAJAAIAAAugAt4hBIgMgTQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgIAAIAAAUIgJAAIAAguIAJAAIAAASIAIAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIAMgQIALAAIgRAVIARAZgAuuhBIAAgiIgYAiIgIAAIAAguIAJAAIAAAhIAYghIAIAAIAAAugAwBhBIAAguIAVAAQARAAAAAMQAAAHgGADQAIADAAAIQAAANgQAAgAv4hIIANAAQAJAAAAgHQAAgGgJAAIgNAAgAv4hcIAKAAQAKAAAAgGQAAgHgKAAIgKAAgAxlhBIAAgfIgjAAIAAAfIgJAAIAAhEIAJAAIAAAdIAjAAIAAgdIAKAAIAABEgANviAQAAgGAGAAQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgGAAAAgGgAIYh8QgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAGAAAAAGQAAAGgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAhniAQAAgGAGAAQAGAAAAAGQAAAGgGAAQgGAAAAgGgAnPiAQAAgGAGAAQAGAAAAAGQAAAGgGAAQgGAAAAgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-117.2,-13.4,234.4,27), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALVCBIAAi/IAkAAIAAAOQAQgSAWAAQAaABARASQARAUAAAcQAAAdgRATQgRAUgaAAQgWAAgQgSIAABOgAMBgWQgIAJgBAOQABAPAIAKQAIAKAOAAQAOAAAJgKQAJgKAAgPQAAgOgJgJQgJgLgOABQgOgBgIALgAl9BhIAAgfIhdAAIAAAfIggAAIAAg+IAPAAQALgMABgkIACgxIBrAAIAABhIAVAAIAAA+gAm8gLQgCAigHAMIAvAAIAAhCIglAAgAN/AxQgSgTAAgcQAAgcASgUQATgTAdgBQAdABASASQASATAAAZIgBAPIhcAAQAGAZAdAAQAVAAAPgMIAQAbQgIAIgPAEQgQAFgQAAQggAAgUgUgAOSgMIA6AAQgGgYgXAAQgYAAgFAYgAlAAxQgSgTAAgcQgBgcATgUQASgTAdgBQAdABASASQASATAAAZIgBAPIhcAAQAHAZAcAAQAVAAAQgMIAQAbQgJAIgPAEQgQAFgPAAQghAAgTgUgAktgMIA5AAQgFgYgYAAQgYAAgEAYgAJGAxQgSgTgBgcQABgcASgUQAUgTAegBQAeABATATQATAUAAAcQAAAcgTATQgTAUgegBQgeABgUgUgAJhgWQgIAKgBAOQABAOAIAKQAJAJAOAAQAOAAAIgJQAKgKgBgOQABgOgKgKQgIgJgOAAQgOAAgJAJgAQKBCIAAiAIAkAAIAACAgAIEBCIgshIQgEgGgIAAIgUAAIAABOIglAAIAAi5IAlAAIAABIIAVAAIAIgBIAEgEIAnhDIApAAIg1BZIA6BggAETBCIAAhOIgzBOIghAAIAAiAIAjAAIAABNIAyhNIAiAAIAACAgAB5BCIAAiAIAlAAIAACAgAAzBCIAAg0IguAAIAAA0IgjAAIAAiAIAjAAIAAAvIAuAAIAAgvIAlAAIAACAgAhkBCIAAg0IguAAIAAA0IgkAAIAAiAIAkAAIAAAvIAuAAIAAgvIAlAAIAACAgAp7BCIAAiAIA9AAQAYAAANAKQAMAIgBAQQAAAVgRAHQAXAHAAAWQAAAQgMAKQgNALgWAAgApYAoIAXAAQAVAAAAgOQAAgNgVAAIgXAAgApYgKIAUAAQATAAAAgNQAAgOgTAAIgUAAgArBBCIAAiAIAkAAIAACAgAsLBCIAAiWIhNAAIAACWIgmAAIAAi5ICYAAIAAC5gAxGBCIAAiAIA+AAQAXAAANAKQAMAIgBAQQAAAVgQAHQAWAHAAAWQAAAQgMAKQgMALgXAAgAwjAoIAYAAQAUAAABgOQgBgNgUAAIgYAAgAwjgKIAUAAQAUAAAAgNQAAgOgUAAIgUAAgADaheQgOgNgBgVIAbAAQADAUASAAQATAAADgUIAbAAQgBAVgOANQgNAMgVAAQgUAAgNgMgAB8haQgGgGAAgJQAAgIAGgHQAGgHAJAAQAKAAAGAHQAGAHAAAIQAAAJgGAGQgGAHgKAAQgJAAgGgHgAq+haQgHgGABgJQgBgIAHgHQAGgHAJAAQAJAAAHAHQAGAHAAAIQAAAJgGAGQgHAHgJAAQgJAAgGgHgAQnhcQgFgFAAgIQAAgHAFgGQAGgGAHAAQAJAAAFAGQAFAGAAAHQAAAIgFAFQgFAGgJAAQgHAAgGgGgAP3hcQgFgFAAgIQAAgHAFgGQAFgGAJAAQAHAAAFAGQAGAGAAAHQAAAIgGAFQgFAGgHAAQgJAAgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-109.5,-12.8,219,25.7), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AktCAIAAi8IAZAAIAAATQAPgXAcAAQAaABAQASQARATAAAcQAAAdgRATQgQASgaAAQgcAAgPgVIAABRgAkKgdQgLANAAASQAAAUALAMQALAMARAAQASAAAKgMQALgMAAgUQAAgSgLgNQgKgMgSABQgRgBgLAMgAJqAyQgRgTAAgdQAAgcARgTQASgSAagBQAbAAAPAXIAAgTIAZAAIAAB+IgZAAIAAgTQgPAVgbAAQgaAAgSgSgAJ9gdQgKANgBASQABAUAKAMQALAMARAAQASAAALgMQALgMAAgUQAAgSgLgNQgLgMgSABQgRgBgLAMgAFCAxQgTgSAAgcQAAgdATgTQASgSAbgBQAbAAASASQASASAAAaIgBALIhkAAQACARAMALQALAJASABQAYAAAQgQIANARQgIAJgPAGQgPAFgQAAQgeAAgTgTgAFWghQgLAJgCAQIBMAAQgCgQgLgJQgKgJgPAAQgPAAgKAJgACQBEIADgWIAHAAQAKAAADgJQADgJABgYIAChAIBmAAIAAB+IgZAAIAAhpIg1AAIgBArQgBAkgJANQgIAPgWAAgAiFAxQgTgSAAgcQAAgcATgUQASgTAdAAQAcABATATQASATAAAcQAAAcgSASQgTATgcAAQgdAAgSgTgAhzgcQgMAMAAATQAAASAMANQAMAMARAAQASAAALgMQALgNAAgSQAAgTgMgMQgKgMgSAAQgRAAgMAMgAm3AwIAOgQQAOAQAZAAQAfAAAAgUQABgSgbAAIgbAAIAAgQIAVAAQAcAAAAgSQAAgTgaAAQgXAAgNAPIgPgPQASgUAigBQAYABANAJQAMAKAAAQQAAAVgTAHQAYAHABAXQAAARgPALQgPALgbgBQgjAAgSgUgAo3AxQgSgSgBgcQABgcASgUQASgTAdAAQAcABAUATQASATAAAcQAAAcgSASQgUATgcAAQgdAAgSgTgAolgcQgLAMgBATQABASALANQAMAMARAAQASAAAMgMQALgMAAgTQAAgTgMgMQgMgMgRAAQgRAAgMAMgAAVAxQgTgUAAgnQAAhLAjgVQANgJAcgFIApgHIAEAWIgtAIQgYAEgLAKQgOANgDAfQAQgWAdAAQAbAAARATQASASgBAcQAAAcgRARQgSATgdAAQgfAAgQgTgAAngcQgNAMAAATQAAATAMAMQALAMATAAQAQAAALgMQAMgMAAgTQAAgSgMgMQgLgMgQAAQgSAAgLALgAIjBCIAAg4Ig/AAIAAA4IgZAAIAAh+IAZAAIAAAyIA/AAIAAgyIAZAAIAAB+gArYBCIAAi5IBDAAQAeAAAPAOQARAOAAAbQAAAbgRAPQgPANgeAAIgqAAIAABLgAq/gfIAqAAQAlAAgBghQABggglAAIgqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-72.9,-12.8,145.8,25.6), null);


(lib.t1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxBGQgbgbAAgpQAAgoAbgcQAbgbAqAAQAqAAAbAbQAbAcAAAoQAAApgbAbQgbAcgqAAQgqAAgbgcgAjWgoQgPAQAAAaQAAAaAPASQAQARAaAAQAbAAAQgRQAPgSAAgaQAAgagPgQQgQgSgbAAQgaAAgQASgAmNBcQgUgGgLgLIAQgcQAZASAdAAQAPgBAJgGQAJgFAAgMQAAgMgQgHIgigLQgxgOAAglQAAgaAUgOQASgNAfAAQAoAAAYASIgQAdQgVgNgaAAQghAAAAASQAAALAQAHIAiAKQAxAPAAAnQAAAcgTAPQgSAOghAAQgUAAgTgGgAJABUIANgcQAVAMAXAAQATAAAAgKQAAgHgkgKQglgLAAgbQAAgSAPgKQAPgLAZAAQAhAAATANIgNAaQgRgJgVAAQgUAAAAAJQAAAEAlALQAkALAAAcQAAATgOALQgOAKgZAAQglAAgWgNgAGxBeIAAi4IB5AAIAAAiIhUAAIAAAqIBNAAIAAAfIhNAAIAAAsIBWAAIAAAhgAC2BeIAAi4IBDAAQAsAAAaAaQAbAZAAApQAAAqgbAZQgaAZgsAAgADcA9IAaAAQAcAAAQgOQARgQAAgdQAAgcgRgPQgQgPgcAAIgaAAgABnBeIAAi4IAlAAIAAC4gAgtBeIAAi4IAmAAIAACXIBPAAIAAAhgAoiBeIAAi+IAlAAIAAC+gApoBeIAAh+IAkAAIAAB+gAqvBeIAAi+IAlAAIAAC+gAplg8QgHgGAAgKQAAgIAHgHQAGgGAJAAQAJAAAGAGQAHAHAAAIQAAAKgHAGQgGAGgJAAQgJAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_3, new cjs.Rectangle(-68.8,-9.8,137.6,19.6), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQPB7IAEgVIAQACQALAAAGgGQAGgFAHgRIAGgPIg2h+IAbAAIAnBiIAnhiIAaAAIg6CMQgLAdgLALQgMAMgUAAQgLgBgKgDgArvB7IAAi8IAZAAIAAATQAPgWAcAAQAZAAARATQASASAAAdQAAAcgSAUQgRASgZAAQgcAAgPgWIAABRgArMghQgLAMAAATQAAATALANQALAMARgBQARABALgMQALgNAAgTQAAgTgLgMQgLgMgRAAQgRAAgLAMgAmBAuQgSgUAAgcQAAgdASgSQARgTAZAAQAcAAAPAWIAAgTIAZAAIAAB9IgZAAIAAgSQgPAWgcAAQgZAAgRgSgAlughQgLAMAAATQAAAUALAMQAKAMASgBQARABALgMQALgNAAgTQAAgTgLgMQgLgMgRAAQgSAAgKAMgAv0AuQgRgUAAgcQAAgdARgSQARgTAaAAQAcAAAPAWIAAgTIAZAAIAAB9IgZAAIAAgSQgPAWgcAAQgaAAgRgSgAvhghQgLAMAAATQAAATALANQALAMARgBQASABALgMQALgNAAgTQAAgTgLgMQgLgMgSAAQgRAAgLAMgAMFAvQgSgQgCgaIgVAAIAAA3IgZAAIAAh9IAZAAIAAAyIAWAAQAEgYAQgOQARgPAZAAQAcAAASATQARATAAAcQAAAdgRASQgSASgcABQgagBgRgQgAMUghQgKAMAAATQAAATAKAMQALALARAAQARAAALgLQAKgMAAgTQAAgTgKgMQgLgMgRAAQgRAAgLAMgAHCAvQgSgQgCgaIgVAAIAAA3IgZAAIAAh9IAZAAIAAAyIAWAAQAEgYAQgOQARgPAZAAQAcAAASATQARATAAAcQAAAdgRASQgSASgcABQgagBgRgQgAHRghQgKAMAAATQAAATAKAMQALALARAAQARAAALgLQAKgMAAgTQAAgTgKgMQgLgMgRAAQgRAAgLAMgAPkA8IAAg3Ig/AAIAAA3IgZAAIAAh9IAZAAIAAAyIA/AAIAAgyIAZAAIAAB9gAJlA8IAAhnIgsAAIAAgWIBxAAIAAAWIgsAAIAABngAEiA8IAAhnIgsAAIAAgWIBxAAIAAAWIgsAAIAABngACJA8IAAgwIgcAAIgeAwIgcAAIAhgyQgegHAAgcQAAgTAOgLQANgJAXgBIA6AAIAAB9gABPgZQAAAUAbAAIAfAAIAAgpIgfAAQgbAAAAAVgAgBA8IAAg3Ig/AAIAAA3IgZAAIAAh9IAZAAIAAAyIA/AAIAAgyIAYAAIAAB9gAiXA8IAAg3Ig+AAIAAA3IgZAAIAAh9IAZAAIAAAyIA+AAIAAgyIAZAAIAAB9gAoUA8IAAh9IA5AAQAXABAMAIQAMAJAAAQQAAAUgSAHQAYAHAAAWQAAARgMAIQgMALgWgBgAn8AqIAiAAQAbABAAgUQAAgRgbgBIgiAAgAn8gLIAdAAQAaAAAAgSQAAgSgaAAIgdAAgApSA8IAAh9IAZAAIAAB9gAthA8IAAh9IBZAAIAAAWIhAAAIAABngAw7A8IAAg3Ig/AAIAAA3IgZAAIAAh9IAZAAIAAAyIA/AAIAAgyIAZAAIAAB9gApRhiQgFgFAAgHQAAgGAFgFQAFgEAHgBQAGABAFAEQAFAFAAAGQAAAIgFAEQgEAEgHAAQgHAAgFgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-117.2,-12.6,234.5,25.3), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGhBNQgRgSAAgdQAAgdARgTQARgSAaAAQAcAAAPAWIAAgSIAZAAIAAB9IgZAAIAAgTQgPAWgcAAQgaAAgRgTgAG0gBQgLALAAAUQAAATALAMQALANARAAQASAAALgNQALgMAAgTQAAgUgLgLQgLgMgSAAQgRAAgLAMgABXBNQgTgTAAgcQAAgeATgSQARgSAcAAQAaAAASASQASARAAAaIgBALIhjAAQACARALALQAMAKASAAQAXAAAQgPIAOAQQgIAJgPAGQgPAGgRAAQgeAAgSgTgABrgGQgLAIgCARIBMAAQgDgRgKgIQgKgJgPAAQgPAAgKAJgAivBNQgSgTAAgcQAAgcARgSQATgUAeAAQAlAAARAYIgQAPQgOgQgYAAQgSAAgLAMQgMALAAAUQAAATALAMQAMAMASAAQAXAAAPgRIAPAPQgHAMgOAGQgPAHgRAAQgeAAgSgTgAn2BGQgZgbAAgrQAAgqAZgbQAZgaAmAAQAZAAAUAKQAUALAMASIgUAOQgUgcgkAAQgcAAgRASQgSAUAAAgQAAAhASAUQARATAcAAQAkAAAUgdIATAOQgMASgUALQgUAKgYAAQgmAAgZgagAFbBdIAAhbIgqA4IgQAAIgpg4IAABbIgYAAIAAh+IAYAAIAxBBIAyhBIAYAAIAAB+gAgNBdIAAhpIgsAAIAAgUIBwAAIAAAUIgsAAIAABpgAj2BdIAAhcIhCBcIgXAAIAAh9IAYAAIAABaIBChaIAXAAIAAB9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-52.8,-9.6,105.6,19.2), null);


(lib.logo_lil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUBuQgGAAgEgFQgFgEAAgGIAAiuQAAgGAFgFQAEgEAGAAQAGAAAEAEQAEAFABAGIAACfIBlAAQAGAAAEAFQAFADgBAHQABAGgFAEQgEAFgGAAgAmdBpQgEgFgBgGIAAi7QABgGAEgFQAEgFAHAAQAHAAAEAFQAFAFgBAGIAAC7QABAGgFAFQgEAFgHAAQgHAAgEgFgAnfBpQgFgFABgGIAAh9QgBgGAFgEQAEgFAHAAQAGAAAGAFQAEAEAAAGIAAB9QAAAGgEAFQgGAFgGAAQgHAAgEgFgAogBpQgFgFAAgGIAAi7QAAgGAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAGIAAC7QAAAGgFAFQgEAFgHAAQgGAAgEgFgAGVBtQgGAAgFgFQgEgDAAgHIAAiuQAAgGAEgFQAFgEAGAAIAqAAQArAAAeAeQAeAeAAApQAAArgeAeQgeAegrAAgAGkBPIAbAAQAeAAAWgVQAVgWAAgeQAAgdgVgUQgWgWgeAAIgbAAgAFBBoQgFgDABgHIAAiuQgBgGAFgFQAFgEAFAAQAHAAAEAEQAEAFAAAGIAACuQAAAHgEADQgEAFgHAAQgFAAgFgFgAhQBPQgegeAAgrQAAgpAegeQAegeArAAQApAAAeAeQAeAeAAApQAAArgeAeQgeAegpAAQgrAAgegegAg6grQgWAUAAAdQAAAeAWAWQAUAVAfAAQAcAAAWgVQAVgWAAgeQAAgdgVgUQgWgWgcAAQgfAAgUAWgAkHBgQgTgMgHgTQgCgHADgFQACgGAGgBQAGgDAGADQAFADACAGQAFAKALAHQALAHAOAAQASAAAMgKQANgKAAgNQAAgagrgFQgcgCgRgPQgRgQAAgWQAAgXATgQQASgQAZAAQAUAAARAKQAQALAHAQQACAGgDAGQgCAGgGACQgGACgGgDQgFgCgDgGQgDgIgIgFQgIgFgMAAQgMAAgKAHQgKAHAAALQABAKAIAIQAKAHAQACQApADARAVQAMAOAAAVQAAAagVATQgVASgfAAQgXAAgUgNgAngg/QgFgEAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAEAGAAAGQAAAIgEAEQgGAGgHgBQgHABgFgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_lil, new cjs.Rectangle(-55,-10.9,110,21.9), null);


(lib.geo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.triangle();
	this.instance.parent = this;
	this.instance.setTransform(268,-105);

	this.instance_1 = new lib.square3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-37,-105);

	this.instance_2 = new lib.square();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-257,-105);

	this.instance_3 = new lib.circle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-478,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.geo_mc, new cjs.Rectangle(-478,-105,956,210), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-150,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-150,-248,300,496), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#01A1E5","#1253A1"],[0,1],2,52.1,0,2,52.1,162.8).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az5CGIAAkLMAnzAAAIAAELg");
	mask.setTransform(8.1,17.2);

	// t2_2
	this.instance = new lib.t2_2();
	this.instance.parent = this;
	this.instance.setTransform(0,43.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:17},10,cjs.Ease.quadInOut).wait(55).to({y:-10.2},10,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Az5CGIAAkLMAnzAAAIAAELg");
	mask_1.setTransform(8.1,-17);

	// t2_1
	this.instance_1 = new lib.t2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.9,9.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-17},10,cjs.Ease.quadInOut).wait(55).to({y:-44.2},10,cjs.Ease.quadInOut).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0qBmIAAjLMApVAAAIAADLg");
	mask.setTransform(-2.4,33.8);

	// t1_3
	this.instance = new lib.t1_3();
	this.instance.parent = this;
	this.instance.setTransform(-48.2,54.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:33.8},10,cjs.Ease.quadInOut).wait(50).to({y:13},10,cjs.Ease.quadInOut).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A0qCEIAAkHMApVAAAIAAEHg");
	mask_1.setTransform(-2.4,3.2);

	// t1_2
	this.instance_1 = new lib.t1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.3,29.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:3.2},10,cjs.Ease.quadInOut).wait(50).to({y:-23.2},10,cjs.Ease.quadInOut).wait(6));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A0qBkIAAjHMApVAAAIAADHg");
	mask_2.setTransform(-2.4,-34);

	// t1_1
	this.instance_2 = new lib.t1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-64.7,-14);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-34},10,cjs.Ease.quadInOut).wait(50).to({y:-54.8},10,cjs.Ease.quadInOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.geometric_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.geo_mc();
	this.instance.parent = this;
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},4).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(4));

	// Слой_1
	this.instance_1 = new lib.geo_mc();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478,-105,956,210);


(lib.geometric = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// geometric
	this.instance = new lib.geometric_mc();
	this.instance.parent = this;
	this.instance.setTransform(1298,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:332.6},209).wait(1));

	// geometric
	this.instance_1 = new lib.geometric_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-637.4},209).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-98,1926,210);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t2
	this.instance = new lib.t2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-242.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).wait(80));

	// t1
	this.instance_1 = new lib.t1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-228);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},80).wait(80));

	// urText
	this.instance_2 = new lib.urText();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.8,265.5);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160));

	// logo
	this.instance_3 = new lib.logo_lil();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-70,223.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

	// dev
	this.instance_4 = new lib.dev_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160));

	// geometric
	this.instance_5 = new lib.geometric();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160));

	// bg
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,1926,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,1927,602);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/circle.png", id:"circle"},
		{src:"images/dev.png", id:"dev"},
		{src:"images/square3.png", id:"square3"},
		{src:"images/square.png", id:"square"},
		{src:"images/triangle.png", id:"triangle"}
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