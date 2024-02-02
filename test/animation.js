(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54E58").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-190.9,-44.1,381.8,88.2), null);


(lib.t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54E58").s().p("ACuN/QjHiXAAjvQgBlHFBipIAAgLQh8hghBhyQhHh9AAiaQABj+C4iXQC0iSEkAAQEUAACoCRQCpCTAAD2QAACIhIB3QhCBthxBJIAAAMQFRCxAAFyQAADwjFCaQjJCdlAAAQkvAAjEiUgAHIEXQgcBRAABTQAABvBOBBQBIA7BsAAQBgAAA3guQA/g1gBhpQAAhthfhMQhGg3jLhYQgvA1gcBQgAIqp6Qg2AxAABeQAABmBKBIQBDBACWA7QBWh5ABiXQAAhkg1g3Qg0g4heAAQhOAAgvArgA1uPuIAAmrIGlAAIAAwoIl0AAIAAlIQCkggB4gtQB0gsBxhHIGHAAIAAYwIFhAAIAAGrg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-139.1,-104.3,278.29999999999995,208.7), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	this.shape.setTransform(-220,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-440,-150,440,300), null);


// stage content:
(lib.animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		stage.enableMouseOver(frequency);
		var bool = false;
		createjs.Touch.enable(stage);
		console.log("Enable touch: "+createjs.Touch.enable(stage) );
		exportRoot.addEventListener("tick", my_ticker_fun.bind(this));
		
		this.btn.addEventListener("mouseover", btnOver);
		this.btn.addEventListener("touchstart", btnOver);
		stage.addEventListener("touchstart", btnOver);
		function btnOver(evt) {
			console.log('tyt');
			this.stop();
			bool = true;
			//stage.canvas.style.cursor = "pointer";
		}
		function my_ticker_fun(evt) {
			if(bool){
				//console.log(parseInt(stage.mouseX/2) + 1);
				exportRoot.gotoAndStop(parseInt(stage.mouseX/2) + 1);
			}else{
				var fr = exportRoot.currentFrame + 10;
				if(fr > 441){
					fr = 441;
				}
				exportRoot.gotoAndStop(fr);
			}
		}
		this.btn.addEventListener("mouseout", btnOut);
		//this.btn.addEventListener("touchend", btnOut);
		//this.btn.addEventListener("touchcancel", btnOut);
		function btnOut(evt) {
			exportRoot.play();
			bool = false;
		
			//stage.canvas.style.cursor = "default";
		}
		
		exportRoot.gotoAndStop(441);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(442));

	// btn
	this.btn = new lib.bg();
	this.btn.name = "btn";
	this.btn.setTransform(440,150);
	this.btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(442));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRAxQgIgEgFgGQgFgHAAgIIAQAAQAAAHAGAEQAGAEAHAAQAJAAAGgFQAFgEAAgIQAAgHgFgFQgGgFgKAAIgIAAIAAgMIAIAAQAIAAAFgEQAFgFAAgHQAAgHgEgEQgFgFgIAAQgGAAgGAEQgGAEAAAHIgPAAQAAgIAFgGQAFgGAHgEQAIgDAIAAQAKAAAHADQAHAEAEAGQAEAHAAAHQAAAJgFAGQgEAGgIACIAAABQAKAAAFAHQAGAGAAAKQAAAIgFAHQgEAHgIADQgJAEgKAAQgJAAgIgDg");
	this.shape.setTransform(15.5273,19.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(442));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_2 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_3 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_4 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_5 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_6 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_7 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_8 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_9 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_10 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_11 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_12 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_13 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_14 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_15 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_16 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_17 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_18 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_19 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_20 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_21 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_22 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_23 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_24 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_25 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_26 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_27 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_28 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_30 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_31 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_32 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_33 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_34 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_35 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_36 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_37 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_38 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_39 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_40 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_41 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_42 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_43 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_44 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_45 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_46 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_47 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_48 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_49 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_50 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_51 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_52 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_53 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_54 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_55 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_56 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_57 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_58 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_59 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_60 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_61 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_62 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_63 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_64 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_65 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_66 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_67 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_68 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_69 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_70 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_71 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_72 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_73 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_74 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_75 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_76 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_77 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_78 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_79 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_80 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_81 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_82 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_83 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_84 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_85 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_86 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_87 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_88 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_89 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_90 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_91 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_92 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_93 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_94 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_95 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_96 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_97 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_98 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_99 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_100 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_101 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_102 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_103 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_104 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_105 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_106 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_107 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_108 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_109 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_110 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_111 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_112 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_113 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_114 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_115 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_116 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_117 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_118 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_119 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_120 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_121 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_122 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_123 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_124 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_125 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_126 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_127 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_128 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_129 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_130 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_131 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_132 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_133 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_134 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_135 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_136 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_137 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_138 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_139 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_140 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_141 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_142 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_143 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_144 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_145 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_146 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_147 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_148 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_149 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_150 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_151 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_152 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_153 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_154 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_155 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_156 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_157 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_158 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_159 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_160 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_161 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_162 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_163 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_164 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_165 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_166 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_167 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_168 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_169 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_170 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_171 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_172 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_173 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_174 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_175 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_176 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_177 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_178 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_179 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_180 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_181 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_182 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_183 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_184 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_185 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_186 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_187 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_188 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_189 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_190 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_191 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_192 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_193 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_194 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_195 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_196 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_197 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_198 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_199 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_200 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_201 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_202 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_203 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_204 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_205 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_206 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_207 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_208 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_209 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_210 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_211 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_212 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_213 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_214 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_215 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_216 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_217 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_218 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_219 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_220 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_221 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_222 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_223 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_224 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_225 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_226 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_227 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_228 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_229 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_230 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_231 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_232 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_233 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_234 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_235 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_236 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_237 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_238 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_239 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_240 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_241 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_242 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_243 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_244 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_245 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_246 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_247 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_248 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_249 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_250 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_251 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_252 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_253 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_254 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_255 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_256 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_257 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_258 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_259 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_260 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_261 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_262 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_263 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_264 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_265 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_266 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_267 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_268 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_269 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_270 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_271 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_272 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_273 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_274 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_275 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_276 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_277 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_278 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_279 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_280 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_281 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_282 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_283 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_284 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_285 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_286 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_287 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_288 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_289 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_290 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_291 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_292 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_293 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_294 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_295 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_296 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_297 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_298 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_299 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_300 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_301 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_302 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_303 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_304 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_305 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_306 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_307 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_308 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_309 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_310 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_311 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_312 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_313 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_314 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_315 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_316 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_317 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_318 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_319 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_320 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_321 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_322 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_323 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_324 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_325 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_326 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_327 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_328 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_329 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_330 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_331 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_332 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_333 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_334 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_335 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_336 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_337 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_338 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_339 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_340 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_341 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_342 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_343 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_344 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_345 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_346 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_347 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_348 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_349 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_350 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_351 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_352 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_353 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_354 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_355 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_356 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_357 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_358 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_359 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_360 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_361 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_362 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_363 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_364 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_365 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_366 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_367 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_368 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_369 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_370 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_371 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_372 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_373 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_374 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_375 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_376 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_377 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_378 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_379 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_380 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_381 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_382 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_383 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_384 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_385 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_386 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_387 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_388 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_389 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_390 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_391 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_392 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_393 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_394 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_395 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_396 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_397 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_398 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_399 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_400 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_401 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_402 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_403 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_404 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_405 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_406 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_407 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_408 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_409 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_410 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_411 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_412 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_413 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_414 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_415 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_416 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_417 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_418 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_419 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_420 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_421 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_422 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_423 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_424 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_425 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_426 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_427 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_428 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_429 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_430 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_431 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_432 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_433 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_434 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_435 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_436 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_437 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_438 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_439 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_440 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_graphics_441 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-220,y:150}).wait(1).to({graphics:mask_graphics_2,x:-219,y:150}).wait(1).to({graphics:mask_graphics_3,x:-218,y:150}).wait(1).to({graphics:mask_graphics_4,x:-217,y:150}).wait(1).to({graphics:mask_graphics_5,x:-216,y:150}).wait(1).to({graphics:mask_graphics_6,x:-215,y:150}).wait(1).to({graphics:mask_graphics_7,x:-214,y:150}).wait(1).to({graphics:mask_graphics_8,x:-213,y:150}).wait(1).to({graphics:mask_graphics_9,x:-212,y:150}).wait(1).to({graphics:mask_graphics_10,x:-211,y:150}).wait(1).to({graphics:mask_graphics_11,x:-210,y:150}).wait(1).to({graphics:mask_graphics_12,x:-209,y:150}).wait(1).to({graphics:mask_graphics_13,x:-208,y:150}).wait(1).to({graphics:mask_graphics_14,x:-207,y:150}).wait(1).to({graphics:mask_graphics_15,x:-206,y:150}).wait(1).to({graphics:mask_graphics_16,x:-205,y:150}).wait(1).to({graphics:mask_graphics_17,x:-204,y:150}).wait(1).to({graphics:mask_graphics_18,x:-203,y:150}).wait(1).to({graphics:mask_graphics_19,x:-202,y:150}).wait(1).to({graphics:mask_graphics_20,x:-201,y:150}).wait(1).to({graphics:mask_graphics_21,x:-200,y:150}).wait(1).to({graphics:mask_graphics_22,x:-199,y:150}).wait(1).to({graphics:mask_graphics_23,x:-198,y:150}).wait(1).to({graphics:mask_graphics_24,x:-197,y:150}).wait(1).to({graphics:mask_graphics_25,x:-196,y:150}).wait(1).to({graphics:mask_graphics_26,x:-195,y:150}).wait(1).to({graphics:mask_graphics_27,x:-194,y:150}).wait(1).to({graphics:mask_graphics_28,x:-193,y:150}).wait(1).to({graphics:mask_graphics_29,x:-192,y:150}).wait(1).to({graphics:mask_graphics_30,x:-191,y:150}).wait(1).to({graphics:mask_graphics_31,x:-190,y:150}).wait(1).to({graphics:mask_graphics_32,x:-189,y:150}).wait(1).to({graphics:mask_graphics_33,x:-188,y:150}).wait(1).to({graphics:mask_graphics_34,x:-187,y:150}).wait(1).to({graphics:mask_graphics_35,x:-186,y:150}).wait(1).to({graphics:mask_graphics_36,x:-185,y:150}).wait(1).to({graphics:mask_graphics_37,x:-184,y:150}).wait(1).to({graphics:mask_graphics_38,x:-183,y:150}).wait(1).to({graphics:mask_graphics_39,x:-182,y:150}).wait(1).to({graphics:mask_graphics_40,x:-181,y:150}).wait(1).to({graphics:mask_graphics_41,x:-180,y:150}).wait(1).to({graphics:mask_graphics_42,x:-179,y:150}).wait(1).to({graphics:mask_graphics_43,x:-178,y:150}).wait(1).to({graphics:mask_graphics_44,x:-177,y:150}).wait(1).to({graphics:mask_graphics_45,x:-176,y:150}).wait(1).to({graphics:mask_graphics_46,x:-175,y:150}).wait(1).to({graphics:mask_graphics_47,x:-174,y:150}).wait(1).to({graphics:mask_graphics_48,x:-173,y:150}).wait(1).to({graphics:mask_graphics_49,x:-172,y:150}).wait(1).to({graphics:mask_graphics_50,x:-171,y:150}).wait(1).to({graphics:mask_graphics_51,x:-170,y:150}).wait(1).to({graphics:mask_graphics_52,x:-169,y:150}).wait(1).to({graphics:mask_graphics_53,x:-168,y:150}).wait(1).to({graphics:mask_graphics_54,x:-167,y:150}).wait(1).to({graphics:mask_graphics_55,x:-166,y:150}).wait(1).to({graphics:mask_graphics_56,x:-165,y:150}).wait(1).to({graphics:mask_graphics_57,x:-164,y:150}).wait(1).to({graphics:mask_graphics_58,x:-163,y:150}).wait(1).to({graphics:mask_graphics_59,x:-162,y:150}).wait(1).to({graphics:mask_graphics_60,x:-161,y:150}).wait(1).to({graphics:mask_graphics_61,x:-160,y:150}).wait(1).to({graphics:mask_graphics_62,x:-159,y:150}).wait(1).to({graphics:mask_graphics_63,x:-158,y:150}).wait(1).to({graphics:mask_graphics_64,x:-157,y:150}).wait(1).to({graphics:mask_graphics_65,x:-156,y:150}).wait(1).to({graphics:mask_graphics_66,x:-155,y:150}).wait(1).to({graphics:mask_graphics_67,x:-154,y:150}).wait(1).to({graphics:mask_graphics_68,x:-153,y:150}).wait(1).to({graphics:mask_graphics_69,x:-152,y:150}).wait(1).to({graphics:mask_graphics_70,x:-151,y:150}).wait(1).to({graphics:mask_graphics_71,x:-150,y:150}).wait(1).to({graphics:mask_graphics_72,x:-149,y:150}).wait(1).to({graphics:mask_graphics_73,x:-148,y:150}).wait(1).to({graphics:mask_graphics_74,x:-147,y:150}).wait(1).to({graphics:mask_graphics_75,x:-146,y:150}).wait(1).to({graphics:mask_graphics_76,x:-145,y:150}).wait(1).to({graphics:mask_graphics_77,x:-144,y:150}).wait(1).to({graphics:mask_graphics_78,x:-143,y:150}).wait(1).to({graphics:mask_graphics_79,x:-142,y:150}).wait(1).to({graphics:mask_graphics_80,x:-141,y:150}).wait(1).to({graphics:mask_graphics_81,x:-140,y:150}).wait(1).to({graphics:mask_graphics_82,x:-139,y:150}).wait(1).to({graphics:mask_graphics_83,x:-138,y:150}).wait(1).to({graphics:mask_graphics_84,x:-137,y:150}).wait(1).to({graphics:mask_graphics_85,x:-136,y:150}).wait(1).to({graphics:mask_graphics_86,x:-135,y:150}).wait(1).to({graphics:mask_graphics_87,x:-134,y:150}).wait(1).to({graphics:mask_graphics_88,x:-133,y:150}).wait(1).to({graphics:mask_graphics_89,x:-132,y:150}).wait(1).to({graphics:mask_graphics_90,x:-131,y:150}).wait(1).to({graphics:mask_graphics_91,x:-130,y:150}).wait(1).to({graphics:mask_graphics_92,x:-129,y:150}).wait(1).to({graphics:mask_graphics_93,x:-128,y:150}).wait(1).to({graphics:mask_graphics_94,x:-127,y:150}).wait(1).to({graphics:mask_graphics_95,x:-126,y:150}).wait(1).to({graphics:mask_graphics_96,x:-125,y:150}).wait(1).to({graphics:mask_graphics_97,x:-124,y:150}).wait(1).to({graphics:mask_graphics_98,x:-123,y:150}).wait(1).to({graphics:mask_graphics_99,x:-122,y:150}).wait(1).to({graphics:mask_graphics_100,x:-121,y:150}).wait(1).to({graphics:mask_graphics_101,x:-120,y:150}).wait(1).to({graphics:mask_graphics_102,x:-119,y:150}).wait(1).to({graphics:mask_graphics_103,x:-118,y:150}).wait(1).to({graphics:mask_graphics_104,x:-117,y:150}).wait(1).to({graphics:mask_graphics_105,x:-116,y:150}).wait(1).to({graphics:mask_graphics_106,x:-115,y:150}).wait(1).to({graphics:mask_graphics_107,x:-114,y:150}).wait(1).to({graphics:mask_graphics_108,x:-113,y:150}).wait(1).to({graphics:mask_graphics_109,x:-112,y:150}).wait(1).to({graphics:mask_graphics_110,x:-111,y:150}).wait(1).to({graphics:mask_graphics_111,x:-110,y:150}).wait(1).to({graphics:mask_graphics_112,x:-109,y:150}).wait(1).to({graphics:mask_graphics_113,x:-108,y:150}).wait(1).to({graphics:mask_graphics_114,x:-107,y:150}).wait(1).to({graphics:mask_graphics_115,x:-106,y:150}).wait(1).to({graphics:mask_graphics_116,x:-105,y:150}).wait(1).to({graphics:mask_graphics_117,x:-104,y:150}).wait(1).to({graphics:mask_graphics_118,x:-103,y:150}).wait(1).to({graphics:mask_graphics_119,x:-102,y:150}).wait(1).to({graphics:mask_graphics_120,x:-101,y:150}).wait(1).to({graphics:mask_graphics_121,x:-100,y:150}).wait(1).to({graphics:mask_graphics_122,x:-99,y:150}).wait(1).to({graphics:mask_graphics_123,x:-98,y:150}).wait(1).to({graphics:mask_graphics_124,x:-97,y:150}).wait(1).to({graphics:mask_graphics_125,x:-96,y:150}).wait(1).to({graphics:mask_graphics_126,x:-95,y:150}).wait(1).to({graphics:mask_graphics_127,x:-94,y:150}).wait(1).to({graphics:mask_graphics_128,x:-93,y:150}).wait(1).to({graphics:mask_graphics_129,x:-92,y:150}).wait(1).to({graphics:mask_graphics_130,x:-91,y:150}).wait(1).to({graphics:mask_graphics_131,x:-90,y:150}).wait(1).to({graphics:mask_graphics_132,x:-89,y:150}).wait(1).to({graphics:mask_graphics_133,x:-88,y:150}).wait(1).to({graphics:mask_graphics_134,x:-87,y:150}).wait(1).to({graphics:mask_graphics_135,x:-86,y:150}).wait(1).to({graphics:mask_graphics_136,x:-85,y:150}).wait(1).to({graphics:mask_graphics_137,x:-84,y:150}).wait(1).to({graphics:mask_graphics_138,x:-83,y:150}).wait(1).to({graphics:mask_graphics_139,x:-82,y:150}).wait(1).to({graphics:mask_graphics_140,x:-81,y:150}).wait(1).to({graphics:mask_graphics_141,x:-80,y:150}).wait(1).to({graphics:mask_graphics_142,x:-79,y:150}).wait(1).to({graphics:mask_graphics_143,x:-78,y:150}).wait(1).to({graphics:mask_graphics_144,x:-77,y:150}).wait(1).to({graphics:mask_graphics_145,x:-76,y:150}).wait(1).to({graphics:mask_graphics_146,x:-75,y:150}).wait(1).to({graphics:mask_graphics_147,x:-74,y:150}).wait(1).to({graphics:mask_graphics_148,x:-73,y:150}).wait(1).to({graphics:mask_graphics_149,x:-72,y:150}).wait(1).to({graphics:mask_graphics_150,x:-71,y:150}).wait(1).to({graphics:mask_graphics_151,x:-70,y:150}).wait(1).to({graphics:mask_graphics_152,x:-69,y:150}).wait(1).to({graphics:mask_graphics_153,x:-68,y:150}).wait(1).to({graphics:mask_graphics_154,x:-67,y:150}).wait(1).to({graphics:mask_graphics_155,x:-66,y:150}).wait(1).to({graphics:mask_graphics_156,x:-65,y:150}).wait(1).to({graphics:mask_graphics_157,x:-64,y:150}).wait(1).to({graphics:mask_graphics_158,x:-63,y:150}).wait(1).to({graphics:mask_graphics_159,x:-62,y:150}).wait(1).to({graphics:mask_graphics_160,x:-61,y:150}).wait(1).to({graphics:mask_graphics_161,x:-60,y:150}).wait(1).to({graphics:mask_graphics_162,x:-59,y:150}).wait(1).to({graphics:mask_graphics_163,x:-58,y:150}).wait(1).to({graphics:mask_graphics_164,x:-57,y:150}).wait(1).to({graphics:mask_graphics_165,x:-56,y:150}).wait(1).to({graphics:mask_graphics_166,x:-55,y:150}).wait(1).to({graphics:mask_graphics_167,x:-54,y:150}).wait(1).to({graphics:mask_graphics_168,x:-53,y:150}).wait(1).to({graphics:mask_graphics_169,x:-52,y:150}).wait(1).to({graphics:mask_graphics_170,x:-51,y:150}).wait(1).to({graphics:mask_graphics_171,x:-50,y:150}).wait(1).to({graphics:mask_graphics_172,x:-49,y:150}).wait(1).to({graphics:mask_graphics_173,x:-48,y:150}).wait(1).to({graphics:mask_graphics_174,x:-47,y:150}).wait(1).to({graphics:mask_graphics_175,x:-46,y:150}).wait(1).to({graphics:mask_graphics_176,x:-45,y:150}).wait(1).to({graphics:mask_graphics_177,x:-44,y:150}).wait(1).to({graphics:mask_graphics_178,x:-43,y:150}).wait(1).to({graphics:mask_graphics_179,x:-42,y:150}).wait(1).to({graphics:mask_graphics_180,x:-41,y:150}).wait(1).to({graphics:mask_graphics_181,x:-40,y:150}).wait(1).to({graphics:mask_graphics_182,x:-39,y:150}).wait(1).to({graphics:mask_graphics_183,x:-38,y:150}).wait(1).to({graphics:mask_graphics_184,x:-37,y:150}).wait(1).to({graphics:mask_graphics_185,x:-36,y:150}).wait(1).to({graphics:mask_graphics_186,x:-35,y:150}).wait(1).to({graphics:mask_graphics_187,x:-34,y:150}).wait(1).to({graphics:mask_graphics_188,x:-33,y:150}).wait(1).to({graphics:mask_graphics_189,x:-32,y:150}).wait(1).to({graphics:mask_graphics_190,x:-31,y:150}).wait(1).to({graphics:mask_graphics_191,x:-30,y:150}).wait(1).to({graphics:mask_graphics_192,x:-29,y:150}).wait(1).to({graphics:mask_graphics_193,x:-28,y:150}).wait(1).to({graphics:mask_graphics_194,x:-27,y:150}).wait(1).to({graphics:mask_graphics_195,x:-26,y:150}).wait(1).to({graphics:mask_graphics_196,x:-25,y:150}).wait(1).to({graphics:mask_graphics_197,x:-24,y:150}).wait(1).to({graphics:mask_graphics_198,x:-23,y:150}).wait(1).to({graphics:mask_graphics_199,x:-22,y:150}).wait(1).to({graphics:mask_graphics_200,x:-21,y:150}).wait(1).to({graphics:mask_graphics_201,x:-20,y:150}).wait(1).to({graphics:mask_graphics_202,x:-19,y:150}).wait(1).to({graphics:mask_graphics_203,x:-18,y:150}).wait(1).to({graphics:mask_graphics_204,x:-17,y:150}).wait(1).to({graphics:mask_graphics_205,x:-16,y:150}).wait(1).to({graphics:mask_graphics_206,x:-15,y:150}).wait(1).to({graphics:mask_graphics_207,x:-14,y:150}).wait(1).to({graphics:mask_graphics_208,x:-13,y:150}).wait(1).to({graphics:mask_graphics_209,x:-12,y:150}).wait(1).to({graphics:mask_graphics_210,x:-11,y:150}).wait(1).to({graphics:mask_graphics_211,x:-10,y:150}).wait(1).to({graphics:mask_graphics_212,x:-9,y:150}).wait(1).to({graphics:mask_graphics_213,x:-8,y:150}).wait(1).to({graphics:mask_graphics_214,x:-7,y:150}).wait(1).to({graphics:mask_graphics_215,x:-6,y:150}).wait(1).to({graphics:mask_graphics_216,x:-5,y:150}).wait(1).to({graphics:mask_graphics_217,x:-4,y:150}).wait(1).to({graphics:mask_graphics_218,x:-3,y:150}).wait(1).to({graphics:mask_graphics_219,x:-2,y:150}).wait(1).to({graphics:mask_graphics_220,x:-1,y:150}).wait(1).to({graphics:mask_graphics_221,x:0,y:150}).wait(1).to({graphics:mask_graphics_222,x:1,y:150}).wait(1).to({graphics:mask_graphics_223,x:2,y:150}).wait(1).to({graphics:mask_graphics_224,x:3,y:150}).wait(1).to({graphics:mask_graphics_225,x:4,y:150}).wait(1).to({graphics:mask_graphics_226,x:5,y:150}).wait(1).to({graphics:mask_graphics_227,x:6,y:150}).wait(1).to({graphics:mask_graphics_228,x:7,y:150}).wait(1).to({graphics:mask_graphics_229,x:8,y:150}).wait(1).to({graphics:mask_graphics_230,x:9,y:150}).wait(1).to({graphics:mask_graphics_231,x:10,y:150}).wait(1).to({graphics:mask_graphics_232,x:11,y:150}).wait(1).to({graphics:mask_graphics_233,x:12,y:150}).wait(1).to({graphics:mask_graphics_234,x:13,y:150}).wait(1).to({graphics:mask_graphics_235,x:14,y:150}).wait(1).to({graphics:mask_graphics_236,x:15,y:150}).wait(1).to({graphics:mask_graphics_237,x:16,y:150}).wait(1).to({graphics:mask_graphics_238,x:17,y:150}).wait(1).to({graphics:mask_graphics_239,x:18,y:150}).wait(1).to({graphics:mask_graphics_240,x:19,y:150}).wait(1).to({graphics:mask_graphics_241,x:20,y:150}).wait(1).to({graphics:mask_graphics_242,x:21,y:150}).wait(1).to({graphics:mask_graphics_243,x:22,y:150}).wait(1).to({graphics:mask_graphics_244,x:23,y:150}).wait(1).to({graphics:mask_graphics_245,x:24,y:150}).wait(1).to({graphics:mask_graphics_246,x:25,y:150}).wait(1).to({graphics:mask_graphics_247,x:26,y:150}).wait(1).to({graphics:mask_graphics_248,x:27,y:150}).wait(1).to({graphics:mask_graphics_249,x:28,y:150}).wait(1).to({graphics:mask_graphics_250,x:29,y:150}).wait(1).to({graphics:mask_graphics_251,x:30,y:150}).wait(1).to({graphics:mask_graphics_252,x:31,y:150}).wait(1).to({graphics:mask_graphics_253,x:32,y:150}).wait(1).to({graphics:mask_graphics_254,x:33,y:150}).wait(1).to({graphics:mask_graphics_255,x:34,y:150}).wait(1).to({graphics:mask_graphics_256,x:35,y:150}).wait(1).to({graphics:mask_graphics_257,x:36,y:150}).wait(1).to({graphics:mask_graphics_258,x:37,y:150}).wait(1).to({graphics:mask_graphics_259,x:38,y:150}).wait(1).to({graphics:mask_graphics_260,x:39,y:150}).wait(1).to({graphics:mask_graphics_261,x:40,y:150}).wait(1).to({graphics:mask_graphics_262,x:41,y:150}).wait(1).to({graphics:mask_graphics_263,x:42,y:150}).wait(1).to({graphics:mask_graphics_264,x:43,y:150}).wait(1).to({graphics:mask_graphics_265,x:44,y:150}).wait(1).to({graphics:mask_graphics_266,x:45,y:150}).wait(1).to({graphics:mask_graphics_267,x:46,y:150}).wait(1).to({graphics:mask_graphics_268,x:47,y:150}).wait(1).to({graphics:mask_graphics_269,x:48,y:150}).wait(1).to({graphics:mask_graphics_270,x:49,y:150}).wait(1).to({graphics:mask_graphics_271,x:50,y:150}).wait(1).to({graphics:mask_graphics_272,x:51,y:150}).wait(1).to({graphics:mask_graphics_273,x:52,y:150}).wait(1).to({graphics:mask_graphics_274,x:53,y:150}).wait(1).to({graphics:mask_graphics_275,x:54,y:150}).wait(1).to({graphics:mask_graphics_276,x:55,y:150}).wait(1).to({graphics:mask_graphics_277,x:56,y:150}).wait(1).to({graphics:mask_graphics_278,x:57,y:150}).wait(1).to({graphics:mask_graphics_279,x:58,y:150}).wait(1).to({graphics:mask_graphics_280,x:59,y:150}).wait(1).to({graphics:mask_graphics_281,x:60,y:150}).wait(1).to({graphics:mask_graphics_282,x:61,y:150}).wait(1).to({graphics:mask_graphics_283,x:62,y:150}).wait(1).to({graphics:mask_graphics_284,x:63,y:150}).wait(1).to({graphics:mask_graphics_285,x:64,y:150}).wait(1).to({graphics:mask_graphics_286,x:65,y:150}).wait(1).to({graphics:mask_graphics_287,x:66,y:150}).wait(1).to({graphics:mask_graphics_288,x:67,y:150}).wait(1).to({graphics:mask_graphics_289,x:68,y:150}).wait(1).to({graphics:mask_graphics_290,x:69,y:150}).wait(1).to({graphics:mask_graphics_291,x:70,y:150}).wait(1).to({graphics:mask_graphics_292,x:71,y:150}).wait(1).to({graphics:mask_graphics_293,x:72,y:150}).wait(1).to({graphics:mask_graphics_294,x:73,y:150}).wait(1).to({graphics:mask_graphics_295,x:74,y:150}).wait(1).to({graphics:mask_graphics_296,x:75,y:150}).wait(1).to({graphics:mask_graphics_297,x:76,y:150}).wait(1).to({graphics:mask_graphics_298,x:77,y:150}).wait(1).to({graphics:mask_graphics_299,x:78,y:150}).wait(1).to({graphics:mask_graphics_300,x:79,y:150}).wait(1).to({graphics:mask_graphics_301,x:80,y:150}).wait(1).to({graphics:mask_graphics_302,x:81,y:150}).wait(1).to({graphics:mask_graphics_303,x:82,y:150}).wait(1).to({graphics:mask_graphics_304,x:83,y:150}).wait(1).to({graphics:mask_graphics_305,x:84,y:150}).wait(1).to({graphics:mask_graphics_306,x:85,y:150}).wait(1).to({graphics:mask_graphics_307,x:86,y:150}).wait(1).to({graphics:mask_graphics_308,x:87,y:150}).wait(1).to({graphics:mask_graphics_309,x:88,y:150}).wait(1).to({graphics:mask_graphics_310,x:89,y:150}).wait(1).to({graphics:mask_graphics_311,x:90,y:150}).wait(1).to({graphics:mask_graphics_312,x:91,y:150}).wait(1).to({graphics:mask_graphics_313,x:92,y:150}).wait(1).to({graphics:mask_graphics_314,x:93,y:150}).wait(1).to({graphics:mask_graphics_315,x:94,y:150}).wait(1).to({graphics:mask_graphics_316,x:95,y:150}).wait(1).to({graphics:mask_graphics_317,x:96,y:150}).wait(1).to({graphics:mask_graphics_318,x:97,y:150}).wait(1).to({graphics:mask_graphics_319,x:98,y:150}).wait(1).to({graphics:mask_graphics_320,x:99,y:150}).wait(1).to({graphics:mask_graphics_321,x:100,y:150}).wait(1).to({graphics:mask_graphics_322,x:101,y:150}).wait(1).to({graphics:mask_graphics_323,x:102,y:150}).wait(1).to({graphics:mask_graphics_324,x:103,y:150}).wait(1).to({graphics:mask_graphics_325,x:104,y:150}).wait(1).to({graphics:mask_graphics_326,x:105,y:150}).wait(1).to({graphics:mask_graphics_327,x:106,y:150}).wait(1).to({graphics:mask_graphics_328,x:107,y:150}).wait(1).to({graphics:mask_graphics_329,x:108,y:150}).wait(1).to({graphics:mask_graphics_330,x:109,y:150}).wait(1).to({graphics:mask_graphics_331,x:110,y:150}).wait(1).to({graphics:mask_graphics_332,x:111,y:150}).wait(1).to({graphics:mask_graphics_333,x:112,y:150}).wait(1).to({graphics:mask_graphics_334,x:113,y:150}).wait(1).to({graphics:mask_graphics_335,x:114,y:150}).wait(1).to({graphics:mask_graphics_336,x:115,y:150}).wait(1).to({graphics:mask_graphics_337,x:116,y:150}).wait(1).to({graphics:mask_graphics_338,x:117,y:150}).wait(1).to({graphics:mask_graphics_339,x:118,y:150}).wait(1).to({graphics:mask_graphics_340,x:119,y:150}).wait(1).to({graphics:mask_graphics_341,x:120,y:150}).wait(1).to({graphics:mask_graphics_342,x:121,y:150}).wait(1).to({graphics:mask_graphics_343,x:122,y:150}).wait(1).to({graphics:mask_graphics_344,x:123,y:150}).wait(1).to({graphics:mask_graphics_345,x:124,y:150}).wait(1).to({graphics:mask_graphics_346,x:125,y:150}).wait(1).to({graphics:mask_graphics_347,x:126,y:150}).wait(1).to({graphics:mask_graphics_348,x:127,y:150}).wait(1).to({graphics:mask_graphics_349,x:128,y:150}).wait(1).to({graphics:mask_graphics_350,x:129,y:150}).wait(1).to({graphics:mask_graphics_351,x:130,y:150}).wait(1).to({graphics:mask_graphics_352,x:131,y:150}).wait(1).to({graphics:mask_graphics_353,x:132,y:150}).wait(1).to({graphics:mask_graphics_354,x:133,y:150}).wait(1).to({graphics:mask_graphics_355,x:134,y:150}).wait(1).to({graphics:mask_graphics_356,x:135,y:150}).wait(1).to({graphics:mask_graphics_357,x:136,y:150}).wait(1).to({graphics:mask_graphics_358,x:137,y:150}).wait(1).to({graphics:mask_graphics_359,x:138,y:150}).wait(1).to({graphics:mask_graphics_360,x:139,y:150}).wait(1).to({graphics:mask_graphics_361,x:140,y:150}).wait(1).to({graphics:mask_graphics_362,x:141,y:150}).wait(1).to({graphics:mask_graphics_363,x:142,y:150}).wait(1).to({graphics:mask_graphics_364,x:143,y:150}).wait(1).to({graphics:mask_graphics_365,x:144,y:150}).wait(1).to({graphics:mask_graphics_366,x:145,y:150}).wait(1).to({graphics:mask_graphics_367,x:146,y:150}).wait(1).to({graphics:mask_graphics_368,x:147,y:150}).wait(1).to({graphics:mask_graphics_369,x:148,y:150}).wait(1).to({graphics:mask_graphics_370,x:149,y:150}).wait(1).to({graphics:mask_graphics_371,x:150,y:150}).wait(1).to({graphics:mask_graphics_372,x:151,y:150}).wait(1).to({graphics:mask_graphics_373,x:152,y:150}).wait(1).to({graphics:mask_graphics_374,x:153,y:150}).wait(1).to({graphics:mask_graphics_375,x:154,y:150}).wait(1).to({graphics:mask_graphics_376,x:155,y:150}).wait(1).to({graphics:mask_graphics_377,x:156,y:150}).wait(1).to({graphics:mask_graphics_378,x:157,y:150}).wait(1).to({graphics:mask_graphics_379,x:158,y:150}).wait(1).to({graphics:mask_graphics_380,x:159,y:150}).wait(1).to({graphics:mask_graphics_381,x:160,y:150}).wait(1).to({graphics:mask_graphics_382,x:161,y:150}).wait(1).to({graphics:mask_graphics_383,x:162,y:150}).wait(1).to({graphics:mask_graphics_384,x:163,y:150}).wait(1).to({graphics:mask_graphics_385,x:164,y:150}).wait(1).to({graphics:mask_graphics_386,x:165,y:150}).wait(1).to({graphics:mask_graphics_387,x:166,y:150}).wait(1).to({graphics:mask_graphics_388,x:167,y:150}).wait(1).to({graphics:mask_graphics_389,x:168,y:150}).wait(1).to({graphics:mask_graphics_390,x:169,y:150}).wait(1).to({graphics:mask_graphics_391,x:170,y:150}).wait(1).to({graphics:mask_graphics_392,x:171,y:150}).wait(1).to({graphics:mask_graphics_393,x:172,y:150}).wait(1).to({graphics:mask_graphics_394,x:173,y:150}).wait(1).to({graphics:mask_graphics_395,x:174,y:150}).wait(1).to({graphics:mask_graphics_396,x:175,y:150}).wait(1).to({graphics:mask_graphics_397,x:176,y:150}).wait(1).to({graphics:mask_graphics_398,x:177,y:150}).wait(1).to({graphics:mask_graphics_399,x:178,y:150}).wait(1).to({graphics:mask_graphics_400,x:179,y:150}).wait(1).to({graphics:mask_graphics_401,x:180,y:150}).wait(1).to({graphics:mask_graphics_402,x:181,y:150}).wait(1).to({graphics:mask_graphics_403,x:182,y:150}).wait(1).to({graphics:mask_graphics_404,x:183,y:150}).wait(1).to({graphics:mask_graphics_405,x:184,y:150}).wait(1).to({graphics:mask_graphics_406,x:185,y:150}).wait(1).to({graphics:mask_graphics_407,x:186,y:150}).wait(1).to({graphics:mask_graphics_408,x:187,y:150}).wait(1).to({graphics:mask_graphics_409,x:188,y:150}).wait(1).to({graphics:mask_graphics_410,x:189,y:150}).wait(1).to({graphics:mask_graphics_411,x:190,y:150}).wait(1).to({graphics:mask_graphics_412,x:191,y:150}).wait(1).to({graphics:mask_graphics_413,x:192,y:150}).wait(1).to({graphics:mask_graphics_414,x:193,y:150}).wait(1).to({graphics:mask_graphics_415,x:194,y:150}).wait(1).to({graphics:mask_graphics_416,x:195,y:150}).wait(1).to({graphics:mask_graphics_417,x:196,y:150}).wait(1).to({graphics:mask_graphics_418,x:197,y:150}).wait(1).to({graphics:mask_graphics_419,x:198,y:150}).wait(1).to({graphics:mask_graphics_420,x:199,y:150}).wait(1).to({graphics:mask_graphics_421,x:200,y:150}).wait(1).to({graphics:mask_graphics_422,x:201,y:150}).wait(1).to({graphics:mask_graphics_423,x:202,y:150}).wait(1).to({graphics:mask_graphics_424,x:203,y:150}).wait(1).to({graphics:mask_graphics_425,x:204,y:150}).wait(1).to({graphics:mask_graphics_426,x:205,y:150}).wait(1).to({graphics:mask_graphics_427,x:206,y:150}).wait(1).to({graphics:mask_graphics_428,x:207,y:150}).wait(1).to({graphics:mask_graphics_429,x:208,y:150}).wait(1).to({graphics:mask_graphics_430,x:209,y:150}).wait(1).to({graphics:mask_graphics_431,x:210,y:150}).wait(1).to({graphics:mask_graphics_432,x:211,y:150}).wait(1).to({graphics:mask_graphics_433,x:212,y:150}).wait(1).to({graphics:mask_graphics_434,x:213,y:150}).wait(1).to({graphics:mask_graphics_435,x:214,y:150}).wait(1).to({graphics:mask_graphics_436,x:215,y:150}).wait(1).to({graphics:mask_graphics_437,x:216,y:150}).wait(1).to({graphics:mask_graphics_438,x:217,y:150}).wait(1).to({graphics:mask_graphics_439,x:218,y:150}).wait(1).to({graphics:mask_graphics_440,x:219,y:150}).wait(1).to({graphics:mask_graphics_441,x:220,y:150}).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.name = "t1";
	this.t1.setTransform(220,150);
	this.t1._off = true;

	var maskedShapeInstanceList = [this.t1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1).to({_off:false},0).wait(441));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgiXAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgiSAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgiNAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgiIAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgiDAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_6 = new cjs.Graphics().p("Egh+AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("Egh5AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_8 = new cjs.Graphics().p("Egh0AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("EghvAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EghqAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_11 = new cjs.Graphics().p("EghlAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_12 = new cjs.Graphics().p("EghgAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EghbAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EghWAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_15 = new cjs.Graphics().p("EghRAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_16 = new cjs.Graphics().p("EghMAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("EghHAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("EghCAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("Egg9AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_20 = new cjs.Graphics().p("Egg4AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_21 = new cjs.Graphics().p("EggzAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgguAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_23 = new cjs.Graphics().p("EggpAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_24 = new cjs.Graphics().p("EggkAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_25 = new cjs.Graphics().p("EggfAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_26 = new cjs.Graphics().p("EggaAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_27 = new cjs.Graphics().p("EggVAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("EggQAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EggLAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_30 = new cjs.Graphics().p("EggGAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EggBAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_32 = new cjs.Graphics().p("A/8XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_33 = new cjs.Graphics().p("A/3XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_34 = new cjs.Graphics().p("A/yXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_35 = new cjs.Graphics().p("A/tXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_36 = new cjs.Graphics().p("A/oXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_37 = new cjs.Graphics().p("A/jXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_38 = new cjs.Graphics().p("A/eXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_39 = new cjs.Graphics().p("A/ZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_40 = new cjs.Graphics().p("A/UXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_41 = new cjs.Graphics().p("A/PXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_42 = new cjs.Graphics().p("A/KXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_43 = new cjs.Graphics().p("A/FXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_44 = new cjs.Graphics().p("A/AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_45 = new cjs.Graphics().p("A+7XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_46 = new cjs.Graphics().p("A+2XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_47 = new cjs.Graphics().p("A+xXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_48 = new cjs.Graphics().p("A+sXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_49 = new cjs.Graphics().p("A+nXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_50 = new cjs.Graphics().p("A+iXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_51 = new cjs.Graphics().p("A+dXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_52 = new cjs.Graphics().p("A+YXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_53 = new cjs.Graphics().p("A+TXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_54 = new cjs.Graphics().p("A+OXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_55 = new cjs.Graphics().p("A+JXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_56 = new cjs.Graphics().p("A+EXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_57 = new cjs.Graphics().p("A9/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_58 = new cjs.Graphics().p("A96XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_59 = new cjs.Graphics().p("A91XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_60 = new cjs.Graphics().p("A9wXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_61 = new cjs.Graphics().p("A9rXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_62 = new cjs.Graphics().p("A9mXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_63 = new cjs.Graphics().p("A9hXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_64 = new cjs.Graphics().p("A9cXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_65 = new cjs.Graphics().p("A9XXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_66 = new cjs.Graphics().p("A9SXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_67 = new cjs.Graphics().p("A9NXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_68 = new cjs.Graphics().p("A9IXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_69 = new cjs.Graphics().p("A9DXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_70 = new cjs.Graphics().p("A8+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_71 = new cjs.Graphics().p("A85XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_72 = new cjs.Graphics().p("A80XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_73 = new cjs.Graphics().p("A8vXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_74 = new cjs.Graphics().p("A8qXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_75 = new cjs.Graphics().p("A8lXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_76 = new cjs.Graphics().p("A8gXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_77 = new cjs.Graphics().p("A8bXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_78 = new cjs.Graphics().p("A8WXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_79 = new cjs.Graphics().p("A8RXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_80 = new cjs.Graphics().p("A8MXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_81 = new cjs.Graphics().p("A8HXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_82 = new cjs.Graphics().p("A8CXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_83 = new cjs.Graphics().p("A79XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_84 = new cjs.Graphics().p("A74XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_85 = new cjs.Graphics().p("A7zXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_86 = new cjs.Graphics().p("A7uXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_87 = new cjs.Graphics().p("A7pXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_88 = new cjs.Graphics().p("A7kXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_89 = new cjs.Graphics().p("A7fXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_90 = new cjs.Graphics().p("A7aXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_91 = new cjs.Graphics().p("A7VXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_92 = new cjs.Graphics().p("A7QXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_93 = new cjs.Graphics().p("A7LXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_94 = new cjs.Graphics().p("A7GXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_95 = new cjs.Graphics().p("A7BXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_96 = new cjs.Graphics().p("A68XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_97 = new cjs.Graphics().p("A63XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_98 = new cjs.Graphics().p("A6yXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_99 = new cjs.Graphics().p("A6tXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_100 = new cjs.Graphics().p("A6oXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_101 = new cjs.Graphics().p("A6jXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_102 = new cjs.Graphics().p("A6eXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_103 = new cjs.Graphics().p("A6ZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_104 = new cjs.Graphics().p("A6UXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_105 = new cjs.Graphics().p("A6PXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_106 = new cjs.Graphics().p("A6KXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_107 = new cjs.Graphics().p("A6FXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_108 = new cjs.Graphics().p("A6AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_109 = new cjs.Graphics().p("A57XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_110 = new cjs.Graphics().p("A52XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_111 = new cjs.Graphics().p("A5xXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_112 = new cjs.Graphics().p("A5sXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_113 = new cjs.Graphics().p("A5nXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_114 = new cjs.Graphics().p("A5iXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_115 = new cjs.Graphics().p("A5dXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_116 = new cjs.Graphics().p("A5YXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_117 = new cjs.Graphics().p("A5TXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_118 = new cjs.Graphics().p("A5OXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_119 = new cjs.Graphics().p("A5JXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_120 = new cjs.Graphics().p("A5EXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_121 = new cjs.Graphics().p("A4/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_122 = new cjs.Graphics().p("A46XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_123 = new cjs.Graphics().p("A41XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_124 = new cjs.Graphics().p("A4wXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_125 = new cjs.Graphics().p("A4rXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_126 = new cjs.Graphics().p("A4mXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_127 = new cjs.Graphics().p("A4hXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_128 = new cjs.Graphics().p("A4cXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_129 = new cjs.Graphics().p("A4XXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_130 = new cjs.Graphics().p("A4SXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_131 = new cjs.Graphics().p("A4NXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_132 = new cjs.Graphics().p("A4IXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_133 = new cjs.Graphics().p("A4DXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_134 = new cjs.Graphics().p("A3+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_135 = new cjs.Graphics().p("A35XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_136 = new cjs.Graphics().p("A30XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_137 = new cjs.Graphics().p("A3vXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_138 = new cjs.Graphics().p("A3qXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_139 = new cjs.Graphics().p("A3lXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_140 = new cjs.Graphics().p("A3gXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_141 = new cjs.Graphics().p("A3bXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_142 = new cjs.Graphics().p("A3WXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_143 = new cjs.Graphics().p("A3RXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_144 = new cjs.Graphics().p("A3MXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_145 = new cjs.Graphics().p("A3HXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_146 = new cjs.Graphics().p("A3CXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_147 = new cjs.Graphics().p("A29XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_148 = new cjs.Graphics().p("A24XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_149 = new cjs.Graphics().p("A2zXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_150 = new cjs.Graphics().p("A2uXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_151 = new cjs.Graphics().p("A2pXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_152 = new cjs.Graphics().p("A2kXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_153 = new cjs.Graphics().p("A2fXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_154 = new cjs.Graphics().p("A2aXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_155 = new cjs.Graphics().p("A2VXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_156 = new cjs.Graphics().p("A2QXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_157 = new cjs.Graphics().p("A2LXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_158 = new cjs.Graphics().p("A2GXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_159 = new cjs.Graphics().p("A2BXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_160 = new cjs.Graphics().p("A18XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_161 = new cjs.Graphics().p("A13XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_162 = new cjs.Graphics().p("A1yXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_163 = new cjs.Graphics().p("A1tXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_164 = new cjs.Graphics().p("A1oXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_165 = new cjs.Graphics().p("A1jXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_166 = new cjs.Graphics().p("A1eXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_167 = new cjs.Graphics().p("A1ZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_168 = new cjs.Graphics().p("A1UXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_169 = new cjs.Graphics().p("A1PXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_170 = new cjs.Graphics().p("A1KXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_171 = new cjs.Graphics().p("A1FXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_172 = new cjs.Graphics().p("A1AXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_173 = new cjs.Graphics().p("A07XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_174 = new cjs.Graphics().p("A02XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_175 = new cjs.Graphics().p("A0xXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_176 = new cjs.Graphics().p("A0sXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_177 = new cjs.Graphics().p("A0nXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_178 = new cjs.Graphics().p("A0iXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_179 = new cjs.Graphics().p("A0dXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_180 = new cjs.Graphics().p("A0YXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_181 = new cjs.Graphics().p("A0TXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_182 = new cjs.Graphics().p("A0OXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_183 = new cjs.Graphics().p("A0JXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_184 = new cjs.Graphics().p("A0EXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_185 = new cjs.Graphics().p("Az/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_186 = new cjs.Graphics().p("Az6XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_187 = new cjs.Graphics().p("Az1XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_188 = new cjs.Graphics().p("AzwXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_189 = new cjs.Graphics().p("AzrXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_190 = new cjs.Graphics().p("AzmXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AzhXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AzcXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_193 = new cjs.Graphics().p("AzXXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_194 = new cjs.Graphics().p("AzSXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_195 = new cjs.Graphics().p("AzNXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_196 = new cjs.Graphics().p("AzIXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_197 = new cjs.Graphics().p("AzDXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_198 = new cjs.Graphics().p("Ay+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_199 = new cjs.Graphics().p("Ay5XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_200 = new cjs.Graphics().p("Ay0XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_201 = new cjs.Graphics().p("AyvXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_202 = new cjs.Graphics().p("AyqXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AylXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_204 = new cjs.Graphics().p("AygXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AybXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_206 = new cjs.Graphics().p("AyWXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AyRXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_208 = new cjs.Graphics().p("AyMXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_209 = new cjs.Graphics().p("AyHXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_210 = new cjs.Graphics().p("AyCXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_211 = new cjs.Graphics().p("Ax9XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_212 = new cjs.Graphics().p("Ax4XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_213 = new cjs.Graphics().p("AxzXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_214 = new cjs.Graphics().p("AxuXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AxpXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_216 = new cjs.Graphics().p("AxkXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_217 = new cjs.Graphics().p("AxfXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AxaXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_219 = new cjs.Graphics().p("AxVXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AxQXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AxLXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AxGXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_223 = new cjs.Graphics().p("AxBXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aw8XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_225 = new cjs.Graphics().p("Aw3XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_226 = new cjs.Graphics().p("AwyXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AwtXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_228 = new cjs.Graphics().p("AwoXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_229 = new cjs.Graphics().p("AwjXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_230 = new cjs.Graphics().p("AweXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_231 = new cjs.Graphics().p("AwZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_232 = new cjs.Graphics().p("AwUXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_233 = new cjs.Graphics().p("AwPXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_234 = new cjs.Graphics().p("AwKXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_235 = new cjs.Graphics().p("AwFXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_236 = new cjs.Graphics().p("AwAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_237 = new cjs.Graphics().p("Av7XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_238 = new cjs.Graphics().p("Av2XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_239 = new cjs.Graphics().p("AvxXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_240 = new cjs.Graphics().p("AvsXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_241 = new cjs.Graphics().p("AvnXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_242 = new cjs.Graphics().p("AviXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_243 = new cjs.Graphics().p("AvdXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_244 = new cjs.Graphics().p("AvYXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AvTXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_246 = new cjs.Graphics().p("AvOXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_247 = new cjs.Graphics().p("AvJXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_248 = new cjs.Graphics().p("AvEXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_249 = new cjs.Graphics().p("Au/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_250 = new cjs.Graphics().p("Au6XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_251 = new cjs.Graphics().p("Au1XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_252 = new cjs.Graphics().p("AuwXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_253 = new cjs.Graphics().p("AurXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AumXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_255 = new cjs.Graphics().p("AuhXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_256 = new cjs.Graphics().p("AucXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_257 = new cjs.Graphics().p("AuXXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_258 = new cjs.Graphics().p("AuSXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_259 = new cjs.Graphics().p("AuNXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_260 = new cjs.Graphics().p("AuIXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_261 = new cjs.Graphics().p("AuDXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_262 = new cjs.Graphics().p("At+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_263 = new cjs.Graphics().p("At5XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_264 = new cjs.Graphics().p("At0XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_265 = new cjs.Graphics().p("AtvXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_266 = new cjs.Graphics().p("AtqXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_267 = new cjs.Graphics().p("AtlXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_268 = new cjs.Graphics().p("AtgXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_269 = new cjs.Graphics().p("AtbXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_270 = new cjs.Graphics().p("AtWXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_271 = new cjs.Graphics().p("AtRXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_272 = new cjs.Graphics().p("AtMXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_273 = new cjs.Graphics().p("AtHXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_274 = new cjs.Graphics().p("AtCXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_275 = new cjs.Graphics().p("As9XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_276 = new cjs.Graphics().p("As4XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_277 = new cjs.Graphics().p("AszXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_278 = new cjs.Graphics().p("AsuXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_279 = new cjs.Graphics().p("AspXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_280 = new cjs.Graphics().p("AskXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_281 = new cjs.Graphics().p("AsfXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_282 = new cjs.Graphics().p("AsaXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_283 = new cjs.Graphics().p("AsVXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_284 = new cjs.Graphics().p("AsQXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_285 = new cjs.Graphics().p("AsLXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_286 = new cjs.Graphics().p("AsGXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_287 = new cjs.Graphics().p("AsBXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_288 = new cjs.Graphics().p("Ar8XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_289 = new cjs.Graphics().p("Ar3XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AryXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_291 = new cjs.Graphics().p("ArtXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AroXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_293 = new cjs.Graphics().p("ArjXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_294 = new cjs.Graphics().p("AreXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_295 = new cjs.Graphics().p("ArZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_296 = new cjs.Graphics().p("ArUXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_297 = new cjs.Graphics().p("ArPXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_298 = new cjs.Graphics().p("ArKXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_299 = new cjs.Graphics().p("ArFXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_300 = new cjs.Graphics().p("ArAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_301 = new cjs.Graphics().p("Aq7XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_302 = new cjs.Graphics().p("Aq2XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_303 = new cjs.Graphics().p("AqxXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_304 = new cjs.Graphics().p("AqsXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_305 = new cjs.Graphics().p("AqnXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_306 = new cjs.Graphics().p("AqiXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_307 = new cjs.Graphics().p("AqdXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AqYXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AqTXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_310 = new cjs.Graphics().p("AqOXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_311 = new cjs.Graphics().p("AqJXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AqEXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_313 = new cjs.Graphics().p("Ap/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_314 = new cjs.Graphics().p("Ap6XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_315 = new cjs.Graphics().p("Ap1XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_316 = new cjs.Graphics().p("ApwXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_317 = new cjs.Graphics().p("AprXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_318 = new cjs.Graphics().p("ApmXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_319 = new cjs.Graphics().p("AphXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_320 = new cjs.Graphics().p("ApcXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_321 = new cjs.Graphics().p("ApXXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_322 = new cjs.Graphics().p("ApSXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_323 = new cjs.Graphics().p("ApNXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_324 = new cjs.Graphics().p("ApIXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_325 = new cjs.Graphics().p("ApDXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_326 = new cjs.Graphics().p("Ao+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_327 = new cjs.Graphics().p("Ao5XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_328 = new cjs.Graphics().p("Ao0XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_329 = new cjs.Graphics().p("AovXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_330 = new cjs.Graphics().p("AoqXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AolXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AogXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_333 = new cjs.Graphics().p("AobXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_334 = new cjs.Graphics().p("AoWXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_335 = new cjs.Graphics().p("AoRXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_336 = new cjs.Graphics().p("AoMXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_337 = new cjs.Graphics().p("AoHXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_338 = new cjs.Graphics().p("AoCXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_339 = new cjs.Graphics().p("An9XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_340 = new cjs.Graphics().p("An4XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_341 = new cjs.Graphics().p("AnzXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_342 = new cjs.Graphics().p("AnuXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AnpXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_344 = new cjs.Graphics().p("AnkXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_345 = new cjs.Graphics().p("AnfXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_346 = new cjs.Graphics().p("AnaXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_347 = new cjs.Graphics().p("AnVXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_348 = new cjs.Graphics().p("AnQXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_349 = new cjs.Graphics().p("AnLXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_350 = new cjs.Graphics().p("AnGXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_351 = new cjs.Graphics().p("AnBXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_352 = new cjs.Graphics().p("Am8XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_353 = new cjs.Graphics().p("Am3XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_354 = new cjs.Graphics().p("AmyXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_355 = new cjs.Graphics().p("AmtXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_356 = new cjs.Graphics().p("AmoXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_357 = new cjs.Graphics().p("AmjXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AmeXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_359 = new cjs.Graphics().p("AmZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_360 = new cjs.Graphics().p("AmUXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_361 = new cjs.Graphics().p("AmPXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_362 = new cjs.Graphics().p("AmKXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_363 = new cjs.Graphics().p("AmFXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_364 = new cjs.Graphics().p("AmAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_365 = new cjs.Graphics().p("Al7XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_366 = new cjs.Graphics().p("Al2XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_367 = new cjs.Graphics().p("AlxXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_368 = new cjs.Graphics().p("AlsXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_369 = new cjs.Graphics().p("AlnXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_370 = new cjs.Graphics().p("AliXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_371 = new cjs.Graphics().p("AldXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_372 = new cjs.Graphics().p("AlYXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_373 = new cjs.Graphics().p("AlTXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_374 = new cjs.Graphics().p("AlOXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_375 = new cjs.Graphics().p("AlJXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_376 = new cjs.Graphics().p("AlEXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_377 = new cjs.Graphics().p("Ak/XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_378 = new cjs.Graphics().p("Ak6XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_379 = new cjs.Graphics().p("Ak1XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_380 = new cjs.Graphics().p("AkwXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_381 = new cjs.Graphics().p("AkrXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_382 = new cjs.Graphics().p("AkmXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_383 = new cjs.Graphics().p("AkhXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_384 = new cjs.Graphics().p("AkcXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_385 = new cjs.Graphics().p("AkXXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_386 = new cjs.Graphics().p("AkSXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_387 = new cjs.Graphics().p("AkNXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_388 = new cjs.Graphics().p("AkIXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_389 = new cjs.Graphics().p("AkDXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_390 = new cjs.Graphics().p("Aj+XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_391 = new cjs.Graphics().p("Aj5XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_392 = new cjs.Graphics().p("Aj0XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_393 = new cjs.Graphics().p("AjvXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_394 = new cjs.Graphics().p("AjqXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_395 = new cjs.Graphics().p("AjlXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_396 = new cjs.Graphics().p("AjgXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_397 = new cjs.Graphics().p("AjbXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_398 = new cjs.Graphics().p("AjWXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_399 = new cjs.Graphics().p("AjRXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_400 = new cjs.Graphics().p("AjMXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_401 = new cjs.Graphics().p("AjHXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_402 = new cjs.Graphics().p("AjCXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_403 = new cjs.Graphics().p("Ai9XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_404 = new cjs.Graphics().p("Ai4XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_405 = new cjs.Graphics().p("AizXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_406 = new cjs.Graphics().p("AiuXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_407 = new cjs.Graphics().p("AipXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_408 = new cjs.Graphics().p("AikXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_409 = new cjs.Graphics().p("AifXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_410 = new cjs.Graphics().p("AiaXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_411 = new cjs.Graphics().p("AiVXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_412 = new cjs.Graphics().p("AiQXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_413 = new cjs.Graphics().p("AiLXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_414 = new cjs.Graphics().p("AiGXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_415 = new cjs.Graphics().p("AiBXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_416 = new cjs.Graphics().p("Ah8XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_417 = new cjs.Graphics().p("Ah3XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_418 = new cjs.Graphics().p("AhyXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_419 = new cjs.Graphics().p("AhtXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_420 = new cjs.Graphics().p("AhoXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_421 = new cjs.Graphics().p("AhjXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_422 = new cjs.Graphics().p("AheXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_423 = new cjs.Graphics().p("AhZXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_424 = new cjs.Graphics().p("AhUXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_425 = new cjs.Graphics().p("AhPXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_426 = new cjs.Graphics().p("AhKXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_427 = new cjs.Graphics().p("AhFXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_428 = new cjs.Graphics().p("AhAXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_429 = new cjs.Graphics().p("Ag7XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_430 = new cjs.Graphics().p("Ag2XcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_431 = new cjs.Graphics().p("AgxXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_432 = new cjs.Graphics().p("AgsXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AgnXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AgiXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_435 = new cjs.Graphics().p("AgdXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_436 = new cjs.Graphics().p("AgYXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_437 = new cjs.Graphics().p("AgTXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_438 = new cjs.Graphics().p("AgOXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_439 = new cjs.Graphics().p("AgJXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_440 = new cjs.Graphics().p("AgEXcMAAAgu3MBEvAAAMAAAAu3g");
	var mask_1_graphics_441 = new cjs.Graphics().p("AAAXcMAAAgu3MBEwAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:220,y:150}).wait(1).to({graphics:mask_1_graphics_2,x:220.5,y:150}).wait(1).to({graphics:mask_1_graphics_3,x:221,y:150}).wait(1).to({graphics:mask_1_graphics_4,x:221.5,y:150}).wait(1).to({graphics:mask_1_graphics_5,x:222,y:150}).wait(1).to({graphics:mask_1_graphics_6,x:222.5,y:150}).wait(1).to({graphics:mask_1_graphics_7,x:223,y:150}).wait(1).to({graphics:mask_1_graphics_8,x:223.5,y:150}).wait(1).to({graphics:mask_1_graphics_9,x:224,y:150}).wait(1).to({graphics:mask_1_graphics_10,x:224.5,y:150}).wait(1).to({graphics:mask_1_graphics_11,x:225,y:150}).wait(1).to({graphics:mask_1_graphics_12,x:225.5,y:150}).wait(1).to({graphics:mask_1_graphics_13,x:226,y:150}).wait(1).to({graphics:mask_1_graphics_14,x:226.5,y:150}).wait(1).to({graphics:mask_1_graphics_15,x:227,y:150}).wait(1).to({graphics:mask_1_graphics_16,x:227.5,y:150}).wait(1).to({graphics:mask_1_graphics_17,x:228,y:150}).wait(1).to({graphics:mask_1_graphics_18,x:228.5,y:150}).wait(1).to({graphics:mask_1_graphics_19,x:229,y:150}).wait(1).to({graphics:mask_1_graphics_20,x:229.5,y:150}).wait(1).to({graphics:mask_1_graphics_21,x:230,y:150}).wait(1).to({graphics:mask_1_graphics_22,x:230.5,y:150}).wait(1).to({graphics:mask_1_graphics_23,x:231,y:150}).wait(1).to({graphics:mask_1_graphics_24,x:231.5,y:150}).wait(1).to({graphics:mask_1_graphics_25,x:232,y:150}).wait(1).to({graphics:mask_1_graphics_26,x:232.5,y:150}).wait(1).to({graphics:mask_1_graphics_27,x:233,y:150}).wait(1).to({graphics:mask_1_graphics_28,x:233.5,y:150}).wait(1).to({graphics:mask_1_graphics_29,x:234,y:150}).wait(1).to({graphics:mask_1_graphics_30,x:234.5,y:150}).wait(1).to({graphics:mask_1_graphics_31,x:235,y:150}).wait(1).to({graphics:mask_1_graphics_32,x:235.5,y:150}).wait(1).to({graphics:mask_1_graphics_33,x:236,y:150}).wait(1).to({graphics:mask_1_graphics_34,x:236.5,y:150}).wait(1).to({graphics:mask_1_graphics_35,x:237,y:150}).wait(1).to({graphics:mask_1_graphics_36,x:237.5,y:150}).wait(1).to({graphics:mask_1_graphics_37,x:238,y:150}).wait(1).to({graphics:mask_1_graphics_38,x:238.5,y:150}).wait(1).to({graphics:mask_1_graphics_39,x:239,y:150}).wait(1).to({graphics:mask_1_graphics_40,x:239.5,y:150}).wait(1).to({graphics:mask_1_graphics_41,x:240,y:150}).wait(1).to({graphics:mask_1_graphics_42,x:240.5,y:150}).wait(1).to({graphics:mask_1_graphics_43,x:241,y:150}).wait(1).to({graphics:mask_1_graphics_44,x:241.5,y:150}).wait(1).to({graphics:mask_1_graphics_45,x:242,y:150}).wait(1).to({graphics:mask_1_graphics_46,x:242.5,y:150}).wait(1).to({graphics:mask_1_graphics_47,x:243,y:150}).wait(1).to({graphics:mask_1_graphics_48,x:243.5,y:150}).wait(1).to({graphics:mask_1_graphics_49,x:244,y:150}).wait(1).to({graphics:mask_1_graphics_50,x:244.5,y:150}).wait(1).to({graphics:mask_1_graphics_51,x:245,y:150}).wait(1).to({graphics:mask_1_graphics_52,x:245.5,y:150}).wait(1).to({graphics:mask_1_graphics_53,x:246,y:150}).wait(1).to({graphics:mask_1_graphics_54,x:246.5,y:150}).wait(1).to({graphics:mask_1_graphics_55,x:247,y:150}).wait(1).to({graphics:mask_1_graphics_56,x:247.5,y:150}).wait(1).to({graphics:mask_1_graphics_57,x:248,y:150}).wait(1).to({graphics:mask_1_graphics_58,x:248.5,y:150}).wait(1).to({graphics:mask_1_graphics_59,x:249,y:150}).wait(1).to({graphics:mask_1_graphics_60,x:249.5,y:150}).wait(1).to({graphics:mask_1_graphics_61,x:250,y:150}).wait(1).to({graphics:mask_1_graphics_62,x:250.5,y:150}).wait(1).to({graphics:mask_1_graphics_63,x:251,y:150}).wait(1).to({graphics:mask_1_graphics_64,x:251.5,y:150}).wait(1).to({graphics:mask_1_graphics_65,x:252,y:150}).wait(1).to({graphics:mask_1_graphics_66,x:252.5,y:150}).wait(1).to({graphics:mask_1_graphics_67,x:253,y:150}).wait(1).to({graphics:mask_1_graphics_68,x:253.5,y:150}).wait(1).to({graphics:mask_1_graphics_69,x:254,y:150}).wait(1).to({graphics:mask_1_graphics_70,x:254.5,y:150}).wait(1).to({graphics:mask_1_graphics_71,x:255,y:150}).wait(1).to({graphics:mask_1_graphics_72,x:255.5,y:150}).wait(1).to({graphics:mask_1_graphics_73,x:256,y:150}).wait(1).to({graphics:mask_1_graphics_74,x:256.5,y:150}).wait(1).to({graphics:mask_1_graphics_75,x:257,y:150}).wait(1).to({graphics:mask_1_graphics_76,x:257.5,y:150}).wait(1).to({graphics:mask_1_graphics_77,x:258,y:150}).wait(1).to({graphics:mask_1_graphics_78,x:258.5,y:150}).wait(1).to({graphics:mask_1_graphics_79,x:259,y:150}).wait(1).to({graphics:mask_1_graphics_80,x:259.5,y:150}).wait(1).to({graphics:mask_1_graphics_81,x:260,y:150}).wait(1).to({graphics:mask_1_graphics_82,x:260.5,y:150}).wait(1).to({graphics:mask_1_graphics_83,x:261,y:150}).wait(1).to({graphics:mask_1_graphics_84,x:261.5,y:150}).wait(1).to({graphics:mask_1_graphics_85,x:262,y:150}).wait(1).to({graphics:mask_1_graphics_86,x:262.5,y:150}).wait(1).to({graphics:mask_1_graphics_87,x:263,y:150}).wait(1).to({graphics:mask_1_graphics_88,x:263.5,y:150}).wait(1).to({graphics:mask_1_graphics_89,x:264,y:150}).wait(1).to({graphics:mask_1_graphics_90,x:264.5,y:150}).wait(1).to({graphics:mask_1_graphics_91,x:265,y:150}).wait(1).to({graphics:mask_1_graphics_92,x:265.5,y:150}).wait(1).to({graphics:mask_1_graphics_93,x:266,y:150}).wait(1).to({graphics:mask_1_graphics_94,x:266.5,y:150}).wait(1).to({graphics:mask_1_graphics_95,x:267,y:150}).wait(1).to({graphics:mask_1_graphics_96,x:267.5,y:150}).wait(1).to({graphics:mask_1_graphics_97,x:268,y:150}).wait(1).to({graphics:mask_1_graphics_98,x:268.5,y:150}).wait(1).to({graphics:mask_1_graphics_99,x:269,y:150}).wait(1).to({graphics:mask_1_graphics_100,x:269.5,y:150}).wait(1).to({graphics:mask_1_graphics_101,x:270,y:150}).wait(1).to({graphics:mask_1_graphics_102,x:270.5,y:150}).wait(1).to({graphics:mask_1_graphics_103,x:271,y:150}).wait(1).to({graphics:mask_1_graphics_104,x:271.5,y:150}).wait(1).to({graphics:mask_1_graphics_105,x:272,y:150}).wait(1).to({graphics:mask_1_graphics_106,x:272.5,y:150}).wait(1).to({graphics:mask_1_graphics_107,x:273,y:150}).wait(1).to({graphics:mask_1_graphics_108,x:273.5,y:150}).wait(1).to({graphics:mask_1_graphics_109,x:274,y:150}).wait(1).to({graphics:mask_1_graphics_110,x:274.5,y:150}).wait(1).to({graphics:mask_1_graphics_111,x:275,y:150}).wait(1).to({graphics:mask_1_graphics_112,x:275.5,y:150}).wait(1).to({graphics:mask_1_graphics_113,x:276,y:150}).wait(1).to({graphics:mask_1_graphics_114,x:276.5,y:150}).wait(1).to({graphics:mask_1_graphics_115,x:277,y:150}).wait(1).to({graphics:mask_1_graphics_116,x:277.5,y:150}).wait(1).to({graphics:mask_1_graphics_117,x:278,y:150}).wait(1).to({graphics:mask_1_graphics_118,x:278.5,y:150}).wait(1).to({graphics:mask_1_graphics_119,x:279,y:150}).wait(1).to({graphics:mask_1_graphics_120,x:279.5,y:150}).wait(1).to({graphics:mask_1_graphics_121,x:280,y:150}).wait(1).to({graphics:mask_1_graphics_122,x:280.5,y:150}).wait(1).to({graphics:mask_1_graphics_123,x:281,y:150}).wait(1).to({graphics:mask_1_graphics_124,x:281.5,y:150}).wait(1).to({graphics:mask_1_graphics_125,x:282,y:150}).wait(1).to({graphics:mask_1_graphics_126,x:282.5,y:150}).wait(1).to({graphics:mask_1_graphics_127,x:283,y:150}).wait(1).to({graphics:mask_1_graphics_128,x:283.5,y:150}).wait(1).to({graphics:mask_1_graphics_129,x:284,y:150}).wait(1).to({graphics:mask_1_graphics_130,x:284.5,y:150}).wait(1).to({graphics:mask_1_graphics_131,x:285,y:150}).wait(1).to({graphics:mask_1_graphics_132,x:285.5,y:150}).wait(1).to({graphics:mask_1_graphics_133,x:286,y:150}).wait(1).to({graphics:mask_1_graphics_134,x:286.5,y:150}).wait(1).to({graphics:mask_1_graphics_135,x:287,y:150}).wait(1).to({graphics:mask_1_graphics_136,x:287.5,y:150}).wait(1).to({graphics:mask_1_graphics_137,x:288,y:150}).wait(1).to({graphics:mask_1_graphics_138,x:288.5,y:150}).wait(1).to({graphics:mask_1_graphics_139,x:289,y:150}).wait(1).to({graphics:mask_1_graphics_140,x:289.5,y:150}).wait(1).to({graphics:mask_1_graphics_141,x:290,y:150}).wait(1).to({graphics:mask_1_graphics_142,x:290.5,y:150}).wait(1).to({graphics:mask_1_graphics_143,x:291,y:150}).wait(1).to({graphics:mask_1_graphics_144,x:291.5,y:150}).wait(1).to({graphics:mask_1_graphics_145,x:292,y:150}).wait(1).to({graphics:mask_1_graphics_146,x:292.5,y:150}).wait(1).to({graphics:mask_1_graphics_147,x:293,y:150}).wait(1).to({graphics:mask_1_graphics_148,x:293.5,y:150}).wait(1).to({graphics:mask_1_graphics_149,x:294,y:150}).wait(1).to({graphics:mask_1_graphics_150,x:294.5,y:150}).wait(1).to({graphics:mask_1_graphics_151,x:295,y:150}).wait(1).to({graphics:mask_1_graphics_152,x:295.5,y:150}).wait(1).to({graphics:mask_1_graphics_153,x:296,y:150}).wait(1).to({graphics:mask_1_graphics_154,x:296.5,y:150}).wait(1).to({graphics:mask_1_graphics_155,x:297,y:150}).wait(1).to({graphics:mask_1_graphics_156,x:297.5,y:150}).wait(1).to({graphics:mask_1_graphics_157,x:298,y:150}).wait(1).to({graphics:mask_1_graphics_158,x:298.5,y:150}).wait(1).to({graphics:mask_1_graphics_159,x:299,y:150}).wait(1).to({graphics:mask_1_graphics_160,x:299.5,y:150}).wait(1).to({graphics:mask_1_graphics_161,x:300,y:150}).wait(1).to({graphics:mask_1_graphics_162,x:300.5,y:150}).wait(1).to({graphics:mask_1_graphics_163,x:301,y:150}).wait(1).to({graphics:mask_1_graphics_164,x:301.5,y:150}).wait(1).to({graphics:mask_1_graphics_165,x:302,y:150}).wait(1).to({graphics:mask_1_graphics_166,x:302.5,y:150}).wait(1).to({graphics:mask_1_graphics_167,x:303,y:150}).wait(1).to({graphics:mask_1_graphics_168,x:303.5,y:150}).wait(1).to({graphics:mask_1_graphics_169,x:304,y:150}).wait(1).to({graphics:mask_1_graphics_170,x:304.5,y:150}).wait(1).to({graphics:mask_1_graphics_171,x:305,y:150}).wait(1).to({graphics:mask_1_graphics_172,x:305.5,y:150}).wait(1).to({graphics:mask_1_graphics_173,x:306,y:150}).wait(1).to({graphics:mask_1_graphics_174,x:306.5,y:150}).wait(1).to({graphics:mask_1_graphics_175,x:307,y:150}).wait(1).to({graphics:mask_1_graphics_176,x:307.5,y:150}).wait(1).to({graphics:mask_1_graphics_177,x:308,y:150}).wait(1).to({graphics:mask_1_graphics_178,x:308.5,y:150}).wait(1).to({graphics:mask_1_graphics_179,x:309,y:150}).wait(1).to({graphics:mask_1_graphics_180,x:309.5,y:150}).wait(1).to({graphics:mask_1_graphics_181,x:310,y:150}).wait(1).to({graphics:mask_1_graphics_182,x:310.5,y:150}).wait(1).to({graphics:mask_1_graphics_183,x:311,y:150}).wait(1).to({graphics:mask_1_graphics_184,x:311.5,y:150}).wait(1).to({graphics:mask_1_graphics_185,x:312,y:150}).wait(1).to({graphics:mask_1_graphics_186,x:312.5,y:150}).wait(1).to({graphics:mask_1_graphics_187,x:313,y:150}).wait(1).to({graphics:mask_1_graphics_188,x:313.5,y:150}).wait(1).to({graphics:mask_1_graphics_189,x:314,y:150}).wait(1).to({graphics:mask_1_graphics_190,x:314.5,y:150}).wait(1).to({graphics:mask_1_graphics_191,x:315,y:150}).wait(1).to({graphics:mask_1_graphics_192,x:315.5,y:150}).wait(1).to({graphics:mask_1_graphics_193,x:316,y:150}).wait(1).to({graphics:mask_1_graphics_194,x:316.5,y:150}).wait(1).to({graphics:mask_1_graphics_195,x:317,y:150}).wait(1).to({graphics:mask_1_graphics_196,x:317.5,y:150}).wait(1).to({graphics:mask_1_graphics_197,x:318,y:150}).wait(1).to({graphics:mask_1_graphics_198,x:318.5,y:150}).wait(1).to({graphics:mask_1_graphics_199,x:319,y:150}).wait(1).to({graphics:mask_1_graphics_200,x:319.5,y:150}).wait(1).to({graphics:mask_1_graphics_201,x:320,y:150}).wait(1).to({graphics:mask_1_graphics_202,x:320.5,y:150}).wait(1).to({graphics:mask_1_graphics_203,x:321,y:150}).wait(1).to({graphics:mask_1_graphics_204,x:321.5,y:150}).wait(1).to({graphics:mask_1_graphics_205,x:322,y:150}).wait(1).to({graphics:mask_1_graphics_206,x:322.5,y:150}).wait(1).to({graphics:mask_1_graphics_207,x:323,y:150}).wait(1).to({graphics:mask_1_graphics_208,x:323.5,y:150}).wait(1).to({graphics:mask_1_graphics_209,x:324,y:150}).wait(1).to({graphics:mask_1_graphics_210,x:324.5,y:150}).wait(1).to({graphics:mask_1_graphics_211,x:325,y:150}).wait(1).to({graphics:mask_1_graphics_212,x:325.5,y:150}).wait(1).to({graphics:mask_1_graphics_213,x:326,y:150}).wait(1).to({graphics:mask_1_graphics_214,x:326.5,y:150}).wait(1).to({graphics:mask_1_graphics_215,x:327,y:150}).wait(1).to({graphics:mask_1_graphics_216,x:327.5,y:150}).wait(1).to({graphics:mask_1_graphics_217,x:328,y:150}).wait(1).to({graphics:mask_1_graphics_218,x:328.5,y:150}).wait(1).to({graphics:mask_1_graphics_219,x:329,y:150}).wait(1).to({graphics:mask_1_graphics_220,x:329.5,y:150}).wait(1).to({graphics:mask_1_graphics_221,x:330,y:150}).wait(1).to({graphics:mask_1_graphics_222,x:330.5,y:150}).wait(1).to({graphics:mask_1_graphics_223,x:331,y:150}).wait(1).to({graphics:mask_1_graphics_224,x:331.5,y:150}).wait(1).to({graphics:mask_1_graphics_225,x:332,y:150}).wait(1).to({graphics:mask_1_graphics_226,x:332.5,y:150}).wait(1).to({graphics:mask_1_graphics_227,x:333,y:150}).wait(1).to({graphics:mask_1_graphics_228,x:333.5,y:150}).wait(1).to({graphics:mask_1_graphics_229,x:334,y:150}).wait(1).to({graphics:mask_1_graphics_230,x:334.5,y:150}).wait(1).to({graphics:mask_1_graphics_231,x:335,y:150}).wait(1).to({graphics:mask_1_graphics_232,x:335.5,y:150}).wait(1).to({graphics:mask_1_graphics_233,x:336,y:150}).wait(1).to({graphics:mask_1_graphics_234,x:336.5,y:150}).wait(1).to({graphics:mask_1_graphics_235,x:337,y:150}).wait(1).to({graphics:mask_1_graphics_236,x:337.5,y:150}).wait(1).to({graphics:mask_1_graphics_237,x:338,y:150}).wait(1).to({graphics:mask_1_graphics_238,x:338.5,y:150}).wait(1).to({graphics:mask_1_graphics_239,x:339,y:150}).wait(1).to({graphics:mask_1_graphics_240,x:339.5,y:150}).wait(1).to({graphics:mask_1_graphics_241,x:340,y:150}).wait(1).to({graphics:mask_1_graphics_242,x:340.5,y:150}).wait(1).to({graphics:mask_1_graphics_243,x:341,y:150}).wait(1).to({graphics:mask_1_graphics_244,x:341.5,y:150}).wait(1).to({graphics:mask_1_graphics_245,x:342,y:150}).wait(1).to({graphics:mask_1_graphics_246,x:342.5,y:150}).wait(1).to({graphics:mask_1_graphics_247,x:343,y:150}).wait(1).to({graphics:mask_1_graphics_248,x:343.5,y:150}).wait(1).to({graphics:mask_1_graphics_249,x:344,y:150}).wait(1).to({graphics:mask_1_graphics_250,x:344.5,y:150}).wait(1).to({graphics:mask_1_graphics_251,x:345,y:150}).wait(1).to({graphics:mask_1_graphics_252,x:345.5,y:150}).wait(1).to({graphics:mask_1_graphics_253,x:346,y:150}).wait(1).to({graphics:mask_1_graphics_254,x:346.5,y:150}).wait(1).to({graphics:mask_1_graphics_255,x:347,y:150}).wait(1).to({graphics:mask_1_graphics_256,x:347.5,y:150}).wait(1).to({graphics:mask_1_graphics_257,x:348,y:150}).wait(1).to({graphics:mask_1_graphics_258,x:348.5,y:150}).wait(1).to({graphics:mask_1_graphics_259,x:349,y:150}).wait(1).to({graphics:mask_1_graphics_260,x:349.5,y:150}).wait(1).to({graphics:mask_1_graphics_261,x:350,y:150}).wait(1).to({graphics:mask_1_graphics_262,x:350.5,y:150}).wait(1).to({graphics:mask_1_graphics_263,x:351,y:150}).wait(1).to({graphics:mask_1_graphics_264,x:351.5,y:150}).wait(1).to({graphics:mask_1_graphics_265,x:352,y:150}).wait(1).to({graphics:mask_1_graphics_266,x:352.5,y:150}).wait(1).to({graphics:mask_1_graphics_267,x:353,y:150}).wait(1).to({graphics:mask_1_graphics_268,x:353.5,y:150}).wait(1).to({graphics:mask_1_graphics_269,x:354,y:150}).wait(1).to({graphics:mask_1_graphics_270,x:354.5,y:150}).wait(1).to({graphics:mask_1_graphics_271,x:355,y:150}).wait(1).to({graphics:mask_1_graphics_272,x:355.5,y:150}).wait(1).to({graphics:mask_1_graphics_273,x:356,y:150}).wait(1).to({graphics:mask_1_graphics_274,x:356.5,y:150}).wait(1).to({graphics:mask_1_graphics_275,x:357,y:150}).wait(1).to({graphics:mask_1_graphics_276,x:357.5,y:150}).wait(1).to({graphics:mask_1_graphics_277,x:358,y:150}).wait(1).to({graphics:mask_1_graphics_278,x:358.5,y:150}).wait(1).to({graphics:mask_1_graphics_279,x:359,y:150}).wait(1).to({graphics:mask_1_graphics_280,x:359.5,y:150}).wait(1).to({graphics:mask_1_graphics_281,x:360,y:150}).wait(1).to({graphics:mask_1_graphics_282,x:360.5,y:150}).wait(1).to({graphics:mask_1_graphics_283,x:361,y:150}).wait(1).to({graphics:mask_1_graphics_284,x:361.5,y:150}).wait(1).to({graphics:mask_1_graphics_285,x:362,y:150}).wait(1).to({graphics:mask_1_graphics_286,x:362.5,y:150}).wait(1).to({graphics:mask_1_graphics_287,x:363,y:150}).wait(1).to({graphics:mask_1_graphics_288,x:363.5,y:150}).wait(1).to({graphics:mask_1_graphics_289,x:364,y:150}).wait(1).to({graphics:mask_1_graphics_290,x:364.5,y:150}).wait(1).to({graphics:mask_1_graphics_291,x:365,y:150}).wait(1).to({graphics:mask_1_graphics_292,x:365.5,y:150}).wait(1).to({graphics:mask_1_graphics_293,x:366,y:150}).wait(1).to({graphics:mask_1_graphics_294,x:366.5,y:150}).wait(1).to({graphics:mask_1_graphics_295,x:367,y:150}).wait(1).to({graphics:mask_1_graphics_296,x:367.5,y:150}).wait(1).to({graphics:mask_1_graphics_297,x:368,y:150}).wait(1).to({graphics:mask_1_graphics_298,x:368.5,y:150}).wait(1).to({graphics:mask_1_graphics_299,x:369,y:150}).wait(1).to({graphics:mask_1_graphics_300,x:369.5,y:150}).wait(1).to({graphics:mask_1_graphics_301,x:370,y:150}).wait(1).to({graphics:mask_1_graphics_302,x:370.5,y:150}).wait(1).to({graphics:mask_1_graphics_303,x:371,y:150}).wait(1).to({graphics:mask_1_graphics_304,x:371.5,y:150}).wait(1).to({graphics:mask_1_graphics_305,x:372,y:150}).wait(1).to({graphics:mask_1_graphics_306,x:372.5,y:150}).wait(1).to({graphics:mask_1_graphics_307,x:373,y:150}).wait(1).to({graphics:mask_1_graphics_308,x:373.5,y:150}).wait(1).to({graphics:mask_1_graphics_309,x:374,y:150}).wait(1).to({graphics:mask_1_graphics_310,x:374.5,y:150}).wait(1).to({graphics:mask_1_graphics_311,x:375,y:150}).wait(1).to({graphics:mask_1_graphics_312,x:375.5,y:150}).wait(1).to({graphics:mask_1_graphics_313,x:376,y:150}).wait(1).to({graphics:mask_1_graphics_314,x:376.5,y:150}).wait(1).to({graphics:mask_1_graphics_315,x:377,y:150}).wait(1).to({graphics:mask_1_graphics_316,x:377.5,y:150}).wait(1).to({graphics:mask_1_graphics_317,x:378,y:150}).wait(1).to({graphics:mask_1_graphics_318,x:378.5,y:150}).wait(1).to({graphics:mask_1_graphics_319,x:379,y:150}).wait(1).to({graphics:mask_1_graphics_320,x:379.5,y:150}).wait(1).to({graphics:mask_1_graphics_321,x:380,y:150}).wait(1).to({graphics:mask_1_graphics_322,x:380.5,y:150}).wait(1).to({graphics:mask_1_graphics_323,x:381,y:150}).wait(1).to({graphics:mask_1_graphics_324,x:381.5,y:150}).wait(1).to({graphics:mask_1_graphics_325,x:382,y:150}).wait(1).to({graphics:mask_1_graphics_326,x:382.5,y:150}).wait(1).to({graphics:mask_1_graphics_327,x:383,y:150}).wait(1).to({graphics:mask_1_graphics_328,x:383.5,y:150}).wait(1).to({graphics:mask_1_graphics_329,x:384,y:150}).wait(1).to({graphics:mask_1_graphics_330,x:384.5,y:150}).wait(1).to({graphics:mask_1_graphics_331,x:385,y:150}).wait(1).to({graphics:mask_1_graphics_332,x:385.5,y:150}).wait(1).to({graphics:mask_1_graphics_333,x:386,y:150}).wait(1).to({graphics:mask_1_graphics_334,x:386.5,y:150}).wait(1).to({graphics:mask_1_graphics_335,x:387,y:150}).wait(1).to({graphics:mask_1_graphics_336,x:387.5,y:150}).wait(1).to({graphics:mask_1_graphics_337,x:388,y:150}).wait(1).to({graphics:mask_1_graphics_338,x:388.5,y:150}).wait(1).to({graphics:mask_1_graphics_339,x:389,y:150}).wait(1).to({graphics:mask_1_graphics_340,x:389.5,y:150}).wait(1).to({graphics:mask_1_graphics_341,x:390,y:150}).wait(1).to({graphics:mask_1_graphics_342,x:390.5,y:150}).wait(1).to({graphics:mask_1_graphics_343,x:391,y:150}).wait(1).to({graphics:mask_1_graphics_344,x:391.5,y:150}).wait(1).to({graphics:mask_1_graphics_345,x:392,y:150}).wait(1).to({graphics:mask_1_graphics_346,x:392.5,y:150}).wait(1).to({graphics:mask_1_graphics_347,x:393,y:150}).wait(1).to({graphics:mask_1_graphics_348,x:393.5,y:150}).wait(1).to({graphics:mask_1_graphics_349,x:394,y:150}).wait(1).to({graphics:mask_1_graphics_350,x:394.5,y:150}).wait(1).to({graphics:mask_1_graphics_351,x:395,y:150}).wait(1).to({graphics:mask_1_graphics_352,x:395.5,y:150}).wait(1).to({graphics:mask_1_graphics_353,x:396,y:150}).wait(1).to({graphics:mask_1_graphics_354,x:396.5,y:150}).wait(1).to({graphics:mask_1_graphics_355,x:397,y:150}).wait(1).to({graphics:mask_1_graphics_356,x:397.5,y:150}).wait(1).to({graphics:mask_1_graphics_357,x:398,y:150}).wait(1).to({graphics:mask_1_graphics_358,x:398.5,y:150}).wait(1).to({graphics:mask_1_graphics_359,x:399,y:150}).wait(1).to({graphics:mask_1_graphics_360,x:399.5,y:150}).wait(1).to({graphics:mask_1_graphics_361,x:400,y:150}).wait(1).to({graphics:mask_1_graphics_362,x:400.5,y:150}).wait(1).to({graphics:mask_1_graphics_363,x:401,y:150}).wait(1).to({graphics:mask_1_graphics_364,x:401.5,y:150}).wait(1).to({graphics:mask_1_graphics_365,x:402,y:150}).wait(1).to({graphics:mask_1_graphics_366,x:402.5,y:150}).wait(1).to({graphics:mask_1_graphics_367,x:403,y:150}).wait(1).to({graphics:mask_1_graphics_368,x:403.5,y:150}).wait(1).to({graphics:mask_1_graphics_369,x:404,y:150}).wait(1).to({graphics:mask_1_graphics_370,x:404.5,y:150}).wait(1).to({graphics:mask_1_graphics_371,x:405,y:150}).wait(1).to({graphics:mask_1_graphics_372,x:405.5,y:150}).wait(1).to({graphics:mask_1_graphics_373,x:406,y:150}).wait(1).to({graphics:mask_1_graphics_374,x:406.5,y:150}).wait(1).to({graphics:mask_1_graphics_375,x:407,y:150}).wait(1).to({graphics:mask_1_graphics_376,x:407.5,y:150}).wait(1).to({graphics:mask_1_graphics_377,x:408,y:150}).wait(1).to({graphics:mask_1_graphics_378,x:408.5,y:150}).wait(1).to({graphics:mask_1_graphics_379,x:409,y:150}).wait(1).to({graphics:mask_1_graphics_380,x:409.5,y:150}).wait(1).to({graphics:mask_1_graphics_381,x:410,y:150}).wait(1).to({graphics:mask_1_graphics_382,x:410.5,y:150}).wait(1).to({graphics:mask_1_graphics_383,x:411,y:150}).wait(1).to({graphics:mask_1_graphics_384,x:411.5,y:150}).wait(1).to({graphics:mask_1_graphics_385,x:412,y:150}).wait(1).to({graphics:mask_1_graphics_386,x:412.5,y:150}).wait(1).to({graphics:mask_1_graphics_387,x:413,y:150}).wait(1).to({graphics:mask_1_graphics_388,x:413.5,y:150}).wait(1).to({graphics:mask_1_graphics_389,x:414,y:150}).wait(1).to({graphics:mask_1_graphics_390,x:414.5,y:150}).wait(1).to({graphics:mask_1_graphics_391,x:415,y:150}).wait(1).to({graphics:mask_1_graphics_392,x:415.5,y:150}).wait(1).to({graphics:mask_1_graphics_393,x:416,y:150}).wait(1).to({graphics:mask_1_graphics_394,x:416.5,y:150}).wait(1).to({graphics:mask_1_graphics_395,x:417,y:150}).wait(1).to({graphics:mask_1_graphics_396,x:417.5,y:150}).wait(1).to({graphics:mask_1_graphics_397,x:418,y:150}).wait(1).to({graphics:mask_1_graphics_398,x:418.5,y:150}).wait(1).to({graphics:mask_1_graphics_399,x:419,y:150}).wait(1).to({graphics:mask_1_graphics_400,x:419.5,y:150}).wait(1).to({graphics:mask_1_graphics_401,x:420,y:150}).wait(1).to({graphics:mask_1_graphics_402,x:420.5,y:150}).wait(1).to({graphics:mask_1_graphics_403,x:421,y:150}).wait(1).to({graphics:mask_1_graphics_404,x:421.5,y:150}).wait(1).to({graphics:mask_1_graphics_405,x:422,y:150}).wait(1).to({graphics:mask_1_graphics_406,x:422.5,y:150}).wait(1).to({graphics:mask_1_graphics_407,x:423,y:150}).wait(1).to({graphics:mask_1_graphics_408,x:423.5,y:150}).wait(1).to({graphics:mask_1_graphics_409,x:424,y:150}).wait(1).to({graphics:mask_1_graphics_410,x:424.5,y:150}).wait(1).to({graphics:mask_1_graphics_411,x:425,y:150}).wait(1).to({graphics:mask_1_graphics_412,x:425.5,y:150}).wait(1).to({graphics:mask_1_graphics_413,x:426,y:150}).wait(1).to({graphics:mask_1_graphics_414,x:426.5,y:150}).wait(1).to({graphics:mask_1_graphics_415,x:427,y:150}).wait(1).to({graphics:mask_1_graphics_416,x:427.5,y:150}).wait(1).to({graphics:mask_1_graphics_417,x:428,y:150}).wait(1).to({graphics:mask_1_graphics_418,x:428.5,y:150}).wait(1).to({graphics:mask_1_graphics_419,x:429,y:150}).wait(1).to({graphics:mask_1_graphics_420,x:429.5,y:150}).wait(1).to({graphics:mask_1_graphics_421,x:430,y:150}).wait(1).to({graphics:mask_1_graphics_422,x:430.5,y:150}).wait(1).to({graphics:mask_1_graphics_423,x:431,y:150}).wait(1).to({graphics:mask_1_graphics_424,x:431.5,y:150}).wait(1).to({graphics:mask_1_graphics_425,x:432,y:150}).wait(1).to({graphics:mask_1_graphics_426,x:432.5,y:150}).wait(1).to({graphics:mask_1_graphics_427,x:433,y:150}).wait(1).to({graphics:mask_1_graphics_428,x:433.5,y:150}).wait(1).to({graphics:mask_1_graphics_429,x:434,y:150}).wait(1).to({graphics:mask_1_graphics_430,x:434.5,y:150}).wait(1).to({graphics:mask_1_graphics_431,x:435,y:150}).wait(1).to({graphics:mask_1_graphics_432,x:435.5,y:150}).wait(1).to({graphics:mask_1_graphics_433,x:436,y:150}).wait(1).to({graphics:mask_1_graphics_434,x:436.5,y:150}).wait(1).to({graphics:mask_1_graphics_435,x:437,y:150}).wait(1).to({graphics:mask_1_graphics_436,x:437.5,y:150}).wait(1).to({graphics:mask_1_graphics_437,x:438,y:150}).wait(1).to({graphics:mask_1_graphics_438,x:438.5,y:150}).wait(1).to({graphics:mask_1_graphics_439,x:439,y:150}).wait(1).to({graphics:mask_1_graphics_440,x:439.5,y:150}).wait(1).to({graphics:mask_1_graphics_441,x:440,y:150}).wait(1));

	// t2
	this.instance = new lib.t2();
	this.instance.setTransform(220,150);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(441));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(220,150,220,150);
// library properties:
lib.properties = {
	id: '5466AA4EC20B4A179963B476B69A5184',
	width: 440,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
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
an.compositions['5466AA4EC20B4A179963B476B69A5184'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		sc = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;