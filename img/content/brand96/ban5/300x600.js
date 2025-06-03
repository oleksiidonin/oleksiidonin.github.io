(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.dev = function() {
	this.initialize(img.dev);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1036);// helper functions:

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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AJ+CDIAAg+IAIAAIAAAGQAFgHAJAAQAJAAAFAGQAGAGAAAKQAAAJgGAHQgFAGgJAAQgJAAgFgIIAAAbgAKJBPQgDAEAAAHQAAAGADAEQAEAEAGAAQAFAAAEgEQADgEAAgGQAAgHgDgEQgEgEgFAAQgGAAgEAEgAo2CDIAAg+IAIAAIAAAGQAGgHAIAAQAJAAAFAGQAGAGAAAKQAAAJgGAHQgFAGgJAAQgIAAgGgIIAAAbgAoqBPQgEAEAAAHQAAAGAEAEQADAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgFAAQgGAAgDAEgAq6B7IAAgNIgvAAIAAg8IAJAAIAAA1IAeAAIAAg1IAIAAIAAA1IAIAAIAAAUgADrB5IAAgLIgiAAIAAALIgHAAIAAgSIAFAAQADgDAAgNIABgSIAhAAIAAAiIAGAAIAAASgADSBXQAAAMgDAEIAVAAIAAgbIgRAAgALgBqQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAGsBqQgFgHAAgJQAAgKAFgGQAGgGAIAAQAKAAAEAHIAAgGIAIAAIAAApIgIAAIAAgGQgFAIgJAAQgIAAgGgGgAGyBPQgDAEAAAHQAAAGADAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgFAAQgGAAgEAEgAF8BpIAFgFQAEAFAJAAQAKAAAAgHQAAgGgJAAIgIAAIAAgFIAGAAQAJAAAAgGQAAgGgIAAQgHAAgFAFIgEgFQAFgHALAAQAQAAAAAMQAAAGgGADQAIADAAAHQAAAFgFAEQgFAEgIAAQgMAAgGgHgABCBqQgFgHAAgJQAAgKAFgGQAGgGAIAAQAKAAAEAHIAAgGIAIAAIAAApIgIAAIAAgGQgFAIgJAAQgIAAgGgGgABIBPQgDAEAAAHQAAAGADAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgFAAQgGAAgEAEgAj3BnQgJgJAAgOQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANQAAAOgJAJQgJAJgNAAQgNAAgJgJgAjxA/QgGAHAAAKQAAALAGAGQAGAHAKAAQAKAAAGgHQAGgGAAgLQAAgKgGgHQgGgGgKAAQgKAAgGAGgAmiBqQgGgHAAgJQAAgKAGgGQAFgGAJAAQAJAAAFAHIAAgGIAIAAIAAApIgIAAIAAgGQgFAIgJAAQgJAAgFgGgAmcBPQgEAEAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgHgDgEQgEgEgGAAQgFAAgEAEgAqnBpQgGgGAAgJQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAIIgBAEIggAAQABAMANAAQAIAAAFgFIAEAGQgFAHgNAAQgJAAgHgHgAqkBWIAYAAQgBgLgLAAQgLAAgBALgAg5BnIAEgGQAGAHALAAQAOAAAAgKQAAgHgRgGQgRgFAAgLQAAgIAGgEQAFgEAKAAQANAAAHAHIgEAGQgGgGgKAAQgNAAAAAJQAAAFARAGQARAFAAANQAAARgWAAQgPAAgGgIgAn/BpQgGgGAAgJQAAgKAGgGQAGgGAJAAQAKAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgJAAgGgGgAn5BQQgEADAAAHQAAAGAEAEQAEAEAFAAQAOAAAAgOQAAgGgEgEQgEgEgGAAQgFAAgEAEgALOBuIAAgSIgVAAIAAASIgIAAIAAgpIAIAAIAAAQIAVAAIAAgQIAIAAIAAApgAJZBuIAAgpIAdAAIAAAHIgVAAIAAAigAIdBuIAOgVIgHABQgIAAgGgFQgGgGAAgJQAAgJAGgGQAGgGAKAAQAJAAAGAGQAGAFAAAJQAAAJgGAJIgPAXgAIcA8QgEAEAAAGQAAAGAEAEQAEADAGAAQAFAAAEgDQAEgEAAgGQAAgGgEgEQgEgEgFAAQgGAAgEAEgAH8BuIAAg0IgQAIIAAgIIASgIIAGAAIAAA8gAFABuIAAgpIASAAQAPAAAAALQAAAHgFACQAHADAAAHQAAALgOAAgAFIBoIALAAQAIAAAAgGQAAgGgIAAIgLAAgAFIBXIAJAAQAIAAAAgGQAAgGgIAAIgJAAgAErBuIAAgpIAJAAIAAApgAEXBuIAAgSIgUAAIAAASIgJAAIAAgpIAJAAIAAAQIAUAAIAAgQIAIAAIAAApgACKBuIAXg1IggAAIAAgHIApAAIAAAGIgXA2gAArBuIAAgSIgVAAIAAASIgIAAIAAgpIAIAAIAAAQIAVAAIAAgQIAIAAIAAApgAh0BuIAAg8IAUAAQAOAAAJAIQAJAIAAAOQAAAOgJAIQgJAIgOAAgAhsBnIALAAQAYAAAAgXQAAgLgGgGQgHgGgLAAIgLAAgAiLBuIgjgvIAAAvIgIAAIAAg8IAIAAIAjAvIAAgvIAIAAIAAA8gAk0BuIAAg8IAXAAQASAAAAAPQAAALgHADQAKAEAAALQAAAHgFAFQgFAEgIAAgAkrBnIAPAAQALAAAAgKQAAgKgLAAIgPAAgAkrBMIANAAQALAAAAgKQAAgJgLAAIgNAAgAloBuIAAgiIgOAAIAAgHIAlAAIAAAHIgOAAIAAAigAm0BuIgLgQQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgHAAIAAASIgIAAIAAgpIAIAAIAAAQIAHAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIALgPIAJAAIgOAUIAOAVgApKBuIAAgiIgUAAIAAAiIgJAAIAAgpIAlAAIAAApgAEqA2QAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGgAFqApIAAg9IAJAAIAAAGQAEgHAKAAQAIAAAGAGQAFAGAAAJQAAAJgFAHQgGAGgIAAQgJAAgFgIIAAAbgAF2gKQgEAEAAAGQAAAGAEAEQAEAEAFAAQAGAAADgEQAEgEAAgGQAAgGgEgEQgDgEgGAAQgFAAgEAEgAArAfIAAgLIgiAAIAAALIgHAAIAAgSIAEAAQAEgDAAgMIABgSIAhAAIAAAhIAGAAIAAASgAASgCQAAAMgDADIAVAAIAAgaIgRAAgAzdAfIAAgLIg4AAIAAgoIAIAAIAAAhIAQAAIAAghIAIAAIAAAhIARAAIAAghIAIAAIAAAhIAHAAIAAASgAULAQQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAPnAVIABgHIACAAQADAAACgDIABgLIAAgUIAiAAIAAAoIgIAAIAAghIgSAAIAAAOQgBALgCAFQgDAFgHAAgAInAQQgFgHAAgJQAAgJAFgGQAGgGAIAAQAJAAAGAHIAAgGIAIAAIAAAoIgIAAIAAgGQgGAIgJAAQgIAAgGgGgAIugKQgEAEAAAGQAAAGAEAEQADAEAGAAQANAAAAgOQAAgOgNAAQgGAAgDAEgAHSAPQgGgGAAgJQAAgIAGgGQAGgHAKAAQAMAAAFAIIgFAFQgFgFgHAAQgGAAgEAEQgEADAAAGQAAAOAOAAQAHAAAFgGIAFAFQgGAJgLAAQgKAAgGgHgAA4AVIABgHIACAAQADAAACgDIABgLIAAgUIAiAAIAAAoIgIAAIAAghIgSAAIAAAOQgBALgCAFQgDAFgHAAgAjNAVIABgHIACAAQADAAACgDIABgLIAAgUIAiAAIAAAoIgJAAIAAghIgRAAIAAAOQgBALgCAFQgDAFgHAAgAk6AQQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAm3APQgGgGAAgJQAAgJAGgFQAGgHAKAAQAMAAAGAIIgGAFQgEgFgIAAQgGAAgDAEQgEADAAAGQAAAOANAAQAIAAAEgGIAFAFQgFAJgMAAQgKAAgGgHgApoAPQgGgGAAgJQAAgJAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAIIAAADIghAAQABAMANAAQAIAAAFgFIAEAGQgGAHgLAAQgKAAgGgHgApmgDIAZAAQgCgLgKAAQgLAAgCALgAqjAVIACgHIACAAQAFAAAAgOIABgUIAhAAIAAAoIgIAAIAAghIgRAAIgBAOQAAALgDAFQgDAFgHAAgArPAQQgFgHAAgJQAAgJAFgGQAGgGAIAAQAJAAAGAHIAAgGIAIAAIAAAoIgIAAIAAgGQgGAIgJAAQgIAAgGgGgArIgKQgEAEAAAGQAAAGAEAEQADAEAGAAQAFAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgFAAQgGAAgDAEgAr+APIAEgFQAFAFAIAAQAKAAAAgHQAAgGgIAAIgJAAIAAgEIAHAAQAJAAAAgGQAAgGgJAAQgHAAgFAFIgEgFQAFgHAMAAQAQAAAAAMQAAAGgHADQAIABAAAIQAAANgSAAQgLAAgGgHgAs4APQgGgGAAgJQAAgIAGgGQAGgHAKAAQAMAAAGAHIgFAFQgFgFgIAAQgMAAgBAMIAUAAIAAAFIgVAAQADAMAMAAQAHAAAFgGIAFAFQgGAIgMAAQgKAAgGgHgAtrAQQgGgHAAgJQAAgJAGgGQAFgGAJAAQAJAAAFAHIAAgGIAIAAIAAAoIgIAAIAAgGQgFAIgJAAQgJAAgFgGgAtlgKQgEAEAAAGQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgGgDgEQgEgEgGAAQgFAAgEAEgAwBAVIABgHIACAAQADAAACgDIABgLIAAgUIAiAAIAAAoIgIAAIAAghIgSAAIAAAOQgBALgCAFQgDAFgHAAgAO+APQgGgGAAgJQAAgJAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgKAAgGgGgAPEgJQgEAEAAAFQAAAGAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgFgEgEQgEgEgFAAQgGAAgEAEgAMuAPQgGgGAAgJQAAgJAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgKAAgGgGgAM0gJQgEAEAAAFQAAAGAEAEQAEAEAGAAQAGAAADgEQAEgEAAgGQAAgFgEgEQgDgEgGAAQgGAAgEAEgAE8APQgGgGAAgJQAAgJAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgKAAgGgGgAFCgJQgEAEAAAFQAAAGAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgGgEgDQgEgEgFAAQgGAAgEAEgAzKAPQgHgGAAgJQAAgJAHgGQAGgGAJAAQAKAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgKAAQgJAAgGgGgAzEgJQgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgEgEQgDgEgGAAQgFAAgEAEgAT6AUIAAgdIgWAdIgHAAIAAgoIAHAAIAAAdIAWgdIAHAAIAAAogATJAUIAAgcIgOARIgFAAIgOgRIAAAcIgHAAIAAgoIAHAAIARAVIAQgVIAIAAIAAAogASMAUIAAgoIAJAAIAAAogAR4AUIAAgSIgUAAIAAASIgJAAIAAgoIAJAAIAAAQIAUAAIAAgQIAIAAIAAAogAQ9AUIAAghIgPAAIAAgHIAlAAIAAAHIgOAAIAAAhgAQeAUIAAgoIAIAAIAAAogAOmAUIAAgSIgUAAIAAASIgIAAIAAgoIAIAAIAAAQIAUAAIAAgQIAJAAIAAAogANdAUIAAgoIASAAQAPAAAAALQAAAHgFACQAHACAAAHQAAALgOAAgANlAOIALAAQAIAAAAgGQAAgGgIAAIgLAAgANlgCIAJAAQAJAAAAgGQAAgGgJAAIgJAAgAMXAUIAAghIgVAAIAAAhIgIAAIAAgoIAlAAIAAAogALTAUIAAgPIgKAAIgJAPIgJAAIAKgQQgKgDAAgIQAAgNARAAIATAAIAAAogALAgHQAAAHAIAAIALAAIAAgOIgLAAQgIAAAAAHgAKlAUIAAgSIgUAAIAAASI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AGAAAEgEQADgEAAgGQAAgHgDgEQgEgEgGAAQgFAAgEAEgAQLg4QAHgHAAgFQgFgBAAgEQAAgGAFAAQAGAAAAAIQAAAKgLAIgAH3hKQgGgGAAgJQAAgKAFgFQAGgHAKAAQAMAAAGAIIgFAFQgFgFgIAAQgGAAgDAEQgEADAAAHQAAAGAEAEQADAEAGAAQAIAAAFgGIAFAFQgGAJgMAAQgJAAgGgHgAEuhEIABgHIACAAQADAAACgDIABgLIAAgVIAiAAIAAApIgIAAIAAgiIgSAAIAAAPQgBALgCAFQgDAFgHAAgADVhKIAFgFQAEAFAIAAQALAAAAgHQAAgGgJAAIgJAAIAAgFIAHAAQAJAAAAgGQAAgGgIAAQgIAAgEAFIgFgFQAGgHALAAQAQAAAAAMQAAAGgGADQAIACAAAIQAAANgTAAQgKAAgHgHgABHhKQgGgGAAgJQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAIIgBAEIggAAQABAMANAAQAIAAAFgFIAEAGQgGAHgMAAQgJAAgHgHgABKhdIAZAAQgCgLgLAAQgKAAgCALgAgchJQAAgGAGAAQAGAAAAAGQAAAGgGAAQgGAAAAgGgAjnhKIAFgFQAEAFAJAAQAKAAAAgHQAAgGgJAAIgIAAIAAgFIAGAAQAJAAAAgGQAAgGgIAAQgIAAgEAFIgFgFQAHgHAKAAQAQAAAAAMQAAAGgGADQAIADAAAHQAAANgSAAQgMAAgGgHgAnGhKQgGgGAAgJQAAgKAFgFQAGgHAKAAQANAAAFAIIgFAFQgFgFgHAAQgGAAgEAEQgEADAAAHQAAAOAOAAQAHAAAFgGIAFAFQgFAJgMAAQgKAAgGgHgAoxhKQgGgGAAgJQAAgKAGgFQAGgHAKAAQALAAAGAHIgFAFQgEgFgIAAQgNAAgBAMIAUAAIAAAGIgUAAQABAMANAAQAIAAAEgGIAFAFQgGAIgLAAQgKAAgGgHgAplhJQgFgHAAgJQAAgKAFgGQAGgGAIAAQAKAAAEAHIAAgGIAIAAIAAApIgIAAIAAgGQgFAIgJAAQgIAAgGgGgApfhkQgDAEAAAHQAAAGADAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgEQgEgEgFAAQgGAAgEAEgAsNhEIABgHIACAAQAEAAABgDIABgLIABgVIAhAAIAAApIgIAAIAAgiIgRAAIgBAPQAAALgDAFQgDAFgHAAgAvVhKQgGgGAAgJQAAgKAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAIIgBAEIggAAQABAMANAAQAIAAAFgFIAEAGQgFAHgNAAQgJAAgHgHgAvShdIAYAAQgBgLgLAAQgLAAgBALgANXhKQgGgGAAgJQAAgKAGgGQAGgGAJAAQAKAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgKAAQgJAAgGgGgANdhjQgEADAAAHQAAAGAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgGQAAgGgEgEQgEgEgGAAQgFAAgEAEgAEFhKQgGgGAAgJQAAgKAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgJAAQgKAAgGgGgAELhjQgEAEAAAGQAAAGAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgDQgEgEgFAAQgGAAgEAEgACrhKQgGgGAAgJQAAgKAGgGQAGgGAKAAQAJAAAGAGQAGAGAAAKQAAAJgGAGQgGAGgJAAQgKAAgGgGgACxhjQgEAEAAAGQAAAGAEAEQAEAEAGAAQAFAAAEgEQAEgEAAgGQAAgHgEgDQgEgEgFAAQgGAAgEAEgArBhJQgFgFgBgJIgHAAIAAASIgIAAIAAgpIAIAAIAAAQIAHAAQABgHAGgFQAFgFAIAAQAKAAAFAGQAGAGAAAKQAAAJgGAGQgFAGgKAAQgIAAgGgFgAq8hjQgDAEAAAGQAAAGADAEQAEAEAFAAQANAAAAgOQAAgOgNAAQgFAAgEAEgAP7hFIAAgSIgVAAIAAASIgIAAIAAgpIAIAAIAAAQIAVAAIAAgQIAIAAIAAApgAPKhFIAAgeIgVAeIgIAAIAAgpIAIAAIAAAeIAWgeIAHAAIAAApgAOOhFIAAgiIgOAAIAAgHIAlAAIAAAHIgOAAIAAAigANFhFIgLgQQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgHAAIAAASIgIAAIAAgpIAIAAIAAAQIAHAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIALgPIAJAAIgOAUIAOAVgAMUhFIAAgpIAIAAIAAApgAMAhFIAAgSIgVAAIAAASIgIAAIAAgpIAIAAIAAAQIAVAAIAAgQIAIAAIAAApgAKlhFIAAgpIAIAAIAAAPIAJAAQARAAAAANQAAANgRAAgAKthLIAJAAQAJAAAAgHQAAgHgJAAIgJAAgAKGhFIAAgiIgOAAIAAgHIAlAAIAAAHIgPAAIAAAigAJohFIAAgeIgWAeIgHAAIAAgpIAHAAIAAAeIAWgeIAHAAIAAApgAIshFIAAgiIgPAAIAAgHIAlAAIAAAHIgOAAIAAAigAHfhFIAAgpIAIAAIAAApgAHLhFIAAgdIgNASIgGAAIgNgSIAAAdIgIAAIAAgpIAIAAIAQAWIAQgWIAIAAIAAApgAFlhFIAAgpIAIAAIAAAPIAJAAQARAAAAANQAAANgRAAgAFthLIAIAAQAKAAAAgHQAAgHgKAAIgIAAgAA0hFIgEgLIgbAAIgFALIgIAAIAXg8IAHAAIAXA8gAAXhYIAWAAIgLgdgAhHhFIAAgpIATAAQAPAAAAALQAAAHgGACQAIACAAAIQAAALgPAAgAg/hLIALAAQAJAAAAgGQAAgGgJAAIgLAAgAg/hcIAKAAQAIAAAAgGQAAgGgIAAIgKAAgAhbhFIAAgpIAIAAIAAApgAhshFIgLgQQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgHAAIAAASIgIAAIAAgpIAIAAIAAAQIAHAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIALgPIAJAAIgPAUIAPAVgAidhFIAAgeIgVAeIgIAAIAAgpIAIAAIAAAeIAWgeIAHAAIAAApgAj3hFIAAgeIgVAeIgIAAIAAgpIAIAAIAAAeIAVgeIAIAAIAAApgAlshFIgMgPIgLAPIgJAAIAPgUIgPgVIAJAAIAMAPIALgPIAKAAIgQAVIAQAUgAmchFIAAgpIAIAAIAAApgAp8hFIAAgQQgEACgHAAQgQAAAAgPIAAgMIAIAAIAAALQAAAIAJAAQAGAAAEgCIAAgRIAIAAIAAApgAsahFIgLgQQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgGAAIAAASIgJAAIAAgpIAJAAIAAAQIAGAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIALgPIAJAAIgOAUIAOAVgAtKhFIAAgeIgWAeIgHAAIAAgpIAHAAIAAAeIAWgeIAHAAIAAApgAuVhFIAAgpIATAAQAPAAAAALQAAAHgGACQAIACAAAIQAAALgPAAgAuNhLIALAAQAJAAAAgGQAAgGgJAAIgLAAgAuNhcIAKAAQAIAAAAgGQAAgGgIAAIgKAAgAvuhFIAAgbIgfAAIAAAbIgJAAIAAg8IAJAAIAAAZIAfAAIAAgZIAIAAIAAA8gAMTh8QAAgGAFAAQAFAAAAAGQAAAFgFAAQgFAAAAgFgAHeh8QAAgGAFAAQAFAAAAAGQAAAFgFAAQgFAAAAgFgAhch8QAAgGAFAAQAGAAAAAGQAAAFgGAAQgFAAAAgFgAmeh8QAAgGAGAAQAFAAAAAGQAAAFgFAAQgGAAAAgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-130.2,-13.1,260.5,26.2), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33303C").s().p("ABMBqIAAihIAfAAIAAANQAMgPAUgBQAVABAPAQQAOAQAAAYQAAAYgOARQgPAQgVAAQgUAAgMgPIAABBgABxgWQgHAJAAAMQAAANAHAIQAHAIAMAAQAMAAAHgIQAHgIAAgNQAAgMgHgJQgHgIgMAAQgMAAgHAIgAEZA1IAAgrIgnAAIAAArIgfAAIAAhsIAfAAIAAApIAnAAIAAgpIAfAAIAABsgAgZA1IAAhsIBRAAIAAAaIgzAAIAABSgAi4A1IAjgzIgJABQgXAAgQgOQgQgPAAgYQAAgXARgRQARgPAZAAQAaAAAQAPQARAPAAAYQAAAWgRAaIgmA4gAiuhFQgIAHAAAMQAAAMAIAIQAIAIAMAAQAMAAAIgIQAIgIAAgMQAAgMgIgHQgIgJgMABQgMgBgIAJgAkNA1IAAh9IgqATIAAgdIAwgVIAZAAIAACcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/ChQgqgBgdgcQgdgeAAgpIAAh5QAAgpAdgdQAdgeAqAAIJ/AAQAqAAAdAeQAdAdAAApIAAB5QAAApgdAeQgdAcgqABg");
	this.shape_1.setTransform(0,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-42,-18.6,84,32.1), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("ACcB5IAAgiIhlAAIAAAiIgiAAIAAhDIAQAAQALgNACgnIADg0IBzAAIAABoIAVAAIAABDgABYAEQgCAkgIAOIAzAAIAAhHIgoAAgAmRBGQgSgVAAgfQAAgfASgUQASgVAcAAQAaAAAPATIAAgPIAnAAIAACJIgnAAIAAgPQgPATgaAAQgcAAgSgVgAlzgIQgJAJAAARQAAAQAJALQAKAKAPAAQAPAAAJgKQAJgLAAgQQAAgRgJgJQgJgLgPAAQgPAAgKALgAHEBXIAAiJIBCAAQAaAAANAKQANAKAAARQAAAUgSAJQAYAIAAAXQAAASgNAKQgOAMgYAAgAHqA7IAZAAQAWAAAAgPQAAgOgWAAIgZAAgAHqAFIAVAAQAWAAAAgOQAAgOgWAAIgVAAgAF5BXIAAiJIAnAAIAACJgAEuBXIAAg3IgyAAIAAA3IgnAAIAAiJIAnAAIAAAyIAyAAIAAgyIAnAAIAACJgAinBXIBJikIhhAAIAAgjICMAAIAAAdIhLCqgAnmBXIAAg3IgyAAIAAA3IgnAAIAAiJIAnAAIAAAyIAyAAIAAgyIAnAAIAACJgAF8hQQgHgHAAgJQAAgKAHgHQAHgHAKAAQAJAAAHAHQAHAHAAAKQAAAJgHAHQgHAHgJAAQgKAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-57.6,-12.1,115.3,24.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AB/CHIAAjLIAbAAIAAAUQAQgYAeAAQAbAAATAVQASAUAAAfQAAAegSAUQgTAVgbgBQgeAAgQgXIAABYgAClgiQgMANAAAVQAAAUAMANQALAOATAAQASAAAMgOQAMgNAAgUQAAgVgMgNQgMgNgSAAQgTAAgLANgABMBnIAAgkIhvAAIAAAkIgXAAIAAg7IAPAAQAGgHADgMQADgMABgYIACg5IBrAAIAABwIAVAAIAAA7gAgEgJQgBAngJAOIBCAAIAAhZIg3AAgAEzAyQgTgUAAgeQAAgfATgUQASgVAcAAQAdAAARAYIAAgUIAbAAIAACHIgbAAIAAgUQgRAXgdAAQgcABgSgVgAFHgiQgMANAAAVQAAAUAMANQAMAOASAAQATAAAMgOQAMgNAAgUQAAgVgMgNQgMgNgTAAQgSAAgMANgAmlAyQgUgUAAgeQAAgfATgTQAUgWAgAAQAoAAASAbIgRARQgPgTgZAAQgUABgMANQgNAMAAAVQAAAUAMANQANANAUAAQAYAAAQgSIARAQQgIAMgQAIQgPAGgSAAQghAAgTgUgApEAyQgUgTAAgfQAAggAUgTQATgVAeAAQAcABAUATQATATAAAdIgBAKIhsAAQADATAMALQAMALAUAAQAaAAAQgQIAPASQgJAJgQAGQgQAHgSgBQggAAgUgUgAougnQgMAKgCARIBRAAQgCgRgLgKQgLgKgQAAQgRAAgKAKgAJyBDIAAiHIA9AAQAYAAAOAKQAMAKAAAQQAAAWgTAIQAZAGAAAaQAAAQgMALQgNAKgXAAgAKMAwIAkAAQAdgBAAgTQAAgVgdAAIgkAAgAKMgKIAeAAQAdABAAgVQAAgSgdAAIgeAAgAIxBDIAAhiIhIBiIgYAAIAAiHIAaAAIAABjIBHhjIAYAAIAACHgAj3BDIAAhwIgvAAIAAgXIB6AAIAAAXIgwAAIAABwgAqoBDIAAitIg+AAIAAgZICYAAIAAAZIg+AAIAACtgAidADIAAgXIBcAAIAAAXgAHvhnQgOgLgCgUIAVAAQAEAXAWgBQAWABAEgXIAVAAQgCAUgNALQgNAMgTgBQgTABgMgMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-74.3,-13.5,148.6,27), null);


(lib.r_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhijHQBSAAA5A7QA6A6AABSQAABTg6A6Qg5A7hSAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A1E5").s().p("AjFMUQh3gKhjhAQhog2hEhjQh3isBAjsQAkiIBGiPIBbilQAaguAthCQBbiEBkhkQCuirDPATQB3AKBjBAQBoA2BEBjQB3CshADsQgkCIhGCPQgjBIgcAtIhjCgQhbCEhkBjIAAABQidCai5AAQgTAAgUgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-66.5,-79,133.1,158), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F478A").s().p("AmydfQkrgij8ihQkHiLiyj0Qk2mqCMozQBRlFCllXQAzhrA1hgIBti7QA8huBticQDZk4DzjnQGlmQIKA9QErAiD8ChQEHCLCyD0QE2GqiMIzQhRFFikFXQhTCrhCBqIhBBxQg8BuhtCcQjZE4jzDnQluFbm6AAQhDAAhEgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-164,-189.5,328.2,379.1), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFDFB").s().p("AETBdQgCgFACgFQADgGAFgCQAFgCAFACQAEACADAFQAJARAaAFQANADANgBQAOgCAJgIQAIgHAAgMQABgMgJgHQgHgGgXgGQgkgIgNgGQgZgNAAgaQAAgWAOgQQAPgOAYgEQAPgBAPADQAeAFARAUQADAFgBAGQAAAGgEADQgFADgFAAQgGgBgDgEQgMgOgVgDIgTgBIAAABQgdADAAAZQAAARAeAEQAoAJAPAIQAbAQAAAeQAAAXgPAPQgQAPgZADIgKAAQg8AAgTgogACvCFQgcAAgWgVQgUgWgBgeQgCgaACgbIAAgCQABgbAVgUQAUgUAcgBQAQgBACAOQABANgRACQghADgKAeIgBAKQgCAYABAbQABAUAOAOQANANATgBQASABAOgNQANgOABgUIABivQAAgHAEgFQAEgEAGAAQAFAAAEAEQAEAFABAHIAACwQgCAegVAWQgUAVgdAAgAA2CBQgEgFAAgGIgBhpQABgUgMgOQgNgNgTgCIgEAAQgSACgNANQgMAOAAAUIAABpQAAAGgEAFQgEAFgGgBQgFABgFgFQgDgFAAgGIAAhqQgBgfAVgVQAUgWAegBIAEAAQAeABAVAWQAUAVAAAfIAABjIAAAHQAAAGgEAFQgEAFgFgBQgGABgEgFgAisCFQgdAAgVgVQgUgWgCgeQgBgaABgbQACgcAVgVQAVgUAdgBIADAAQAdABAVAUQAWAVABAcIAAA1QgBAegVAWQgVAVgdAAgAjKgXQgMAMgCATQgBAaABAZQACAUAMAOQAOANATgBQASABANgNQAOgOABgUQABgZgBgaQgCgTgNgMQgMgNgTAAQgUAAgNANgAlbCFQgeAAgUgVQgVgWgBgeIAAiwQAAgHAEgFQAEgEAFAAQAGAAAEAEQAFAGAAAGQgCCJACAmQABAUAOAOQANANASgBQASABAOgNQANgOABgUQACgZgCgaIgCgKQgIgdgigFQgQgBABgNQABgOARABQAbABAVAUQAUAUABAbIAAACQACAbgCAaQgBAegUAWQgVAVgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-42,-13.3,84,26.7), null);


(lib.l_part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCNQg7g6AAhTQAAhSA7g6QA5g7BTAAIAAGPQhTAAg5g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.l_part, new cjs.Rectangle(-9.9,-20,19.9,40), null);


(lib.dev_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.dev();
	this.instance.parent = this;
	this.instance.setTransform(-150,-259,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dev_1, new cjs.Rectangle(-150,-259,300,518), null);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35303E").s().p("AnCBGIAAgYIhYAAIAAhxIAPAAIAABiIA5AAIAAhiIAQAAIAABiIAPAAIAAAngAIJAtQgDgDAAgEQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAEgDADQgDADgEAAQgFAAgDgDgAEBAlQgLgMAAgSQAAgQALgMQALgMATABQAWgBALAPIgKAKQgIgLgPAAQgLAAgHAIQgHAHAAALQAAAMAHAHQAHAIALAAQAOAAAJgLIAKAKQgKAPgXAAQgSAAgMgLgAgUAtQgDgDAAgEQAAgEADgEQADgDAFAAQAEAAADADQADAEAAAEQAAAEgDADQgDADgEAAQgFAAgDgDgAhxAlQgLgMAAgSQAAgRALgLQALgMASAAQASAAALAMQALALAAARQAAASgLAMQgLALgSAAQgSAAgLgLgAhmgLQgHAHAAALQAAAMAHAIQAHAHALAAQALAAAHgHQAHgIAAgMQAAgLgHgHQgHgIgLAAQgLAAgHAIgAkmAlQgLgMAAgSQAAgRALgMQAKgLAQAAQARAAAKAOIAAgMIAPAAIAABNIgPAAIAAgMQgKAOgRAAQgQAAgKgLgAkagLQgHAHAAALQAAANAHAGQAGAIALAAQALAAAGgIQAHgGAAgNQAAgLgHgHQgGgIgLAAQgLAAgGAIgAHiAuIAAg4IgoA4IgPAAIAAhNIAPAAIAAA4IApg4IAOAAIAABNgAGGAuIAAgiIgnAAIAAAiIgPAAIAAhNIAPAAIAAAfIAnAAIAAgfIAPAAIAABNgADWAuIAAg4IgpA4IgOAAIAAhNIAPAAIAAA4IApg4IAOAAIAABNgABrAuIAAhiIgkAAIAAgPIBYAAIAAAPIgkAAIAABigAjMAuIAAhNIAjAAQAdABAAATQAAAMgLAFQAPAEAAAOQAAAKgHAGQgIAGgNAAgAi9AjIAVAAQAQAAAAgMQAAgLgQAAIgVAAgAi9ACIASAAQAQAAAAgLQAAgKgQgBIgSAAgAlIAuIgVgfQgCgDgDABIgMAAIAAAhIgQAAIAAhNIAQAAIAAAfIANAAQADAAABgDIAVgcIARAAIgbAkIAcApgAmkAuIAAhNIAQAAIAABNgAgUAPIAAgQQAAgEAEgEIALgJQAMgLAAgKQAAgQgTAAQgOAAgOAHIgFgMQAPgJASAAQAQAAAJAHQAKAIAAAOQAAAQgRAOIgLAKIgBAPgAIKANIgBhQIAPAAIAABQgAmmg6QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDACgEAAQgKAAAAgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_txt, new cjs.Rectangle(-53.9,-7,107.9,14), null);


(lib.btn_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_round, new cjs.Rectangle(-20,-20,40,40), null);


(lib.btn_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Av8DIQhTAAg6g6Qg6g5AAhTIAAgCQAAhSA6g6QA6g7BTAAIf5AAQBTAAA6A7QA6A6AABSIAAACQAABSg6A6Qg6A6hTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bg, new cjs.Rectangle(-122,-20,244,40), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1253A1").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:112},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// l_part
	this.instance_2 = new lib.l_part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-112},8,cjs.Ease.get(1)).to({_off:true},1).wait(3));

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


(lib.bgImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(194.6,116.9,0.97,0.97);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:90.6},10,cjs.Ease.cubicOut).wait(6));

	// p2
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.5,329.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:90.5,y:115},15,cjs.Ease.backOut).wait(11));

	// p1
	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(316.1,-527.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0,y:-4.4},15,cjs.Ease.backOut).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-717.1,582.2,1125.2);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(11));

	// urText
	this.instance = new lib.urText();
	this.instance.parent = this;
	this.instance.setTransform(0,267.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.75},15).wait(75));

	// btn
	this.instance_1 = new lib.btn("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.4,-127.3,1,1,0,0,0,-0.4,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(50));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-253.2,0.01,0.016,0,0,0,0,-3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.backOut).wait(65));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AzUCQIAAkfMAmpAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:0,y:-177.5}).wait(65));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-150.9);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({y:-175.9},10,cjs.Ease.cubicOut).wait(50));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("AzUCQIAAkfMAmpAAAIAAEfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:0,y:-210}).wait(65));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-181.9);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:-209.9},10,cjs.Ease.cubicOut).wait(55));

	// dev
	this.instance_5 = new lib.dev_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-184.1,390,0.7,0.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,x:-1,y:41},15,cjs.Ease.cubicOut).wait(60));

	// bgImg
	this.instance_6 = new lib.bgImg("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-666.1,630.2,1125.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-66.1,630.2,1125.2);
// library properties:
lib.properties = {
	id: '0A6E3F5DF6B342F4AF907DBE848CDF8D',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dev.png", id:"dev"}
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