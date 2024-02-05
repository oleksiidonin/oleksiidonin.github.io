(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

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
	this.shape.graphics.f("#E54E58").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-190.9,-44.1,381.8,88.2), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E54E58").s().p("ACuN/QjHiXAAjvQgBlHFBipIAAgLQh8hghBhyQhHh9AAiaQABj+C4iXQC0iSEkAAQEUAACoCRQCpCTAAD2QAACIhIB3QhCBthxBJIAAAMQFRCxAAFyQAADwjFCaQjJCdlAAAQkvAAjEiUgAHIEXQgcBRAABTQAABvBOBBQBIA7BsAAQBgAAA3guQA/g1gBhpQAAhthfhMQhGg3jLhYQgvA1gcBQgAIqp6Qg2AxAABeQAABmBKBIQBDBACWA7QBWh5ABiXQAAhkg1g3Qg0g4heAAQhOAAgvArgA1uPuIAAmrIGlAAIAAwoIl0AAIAAlIQCkggB4gtQB0gsBxhHIGHAAIAAYwIFhAAIAAGrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-139.1,-104.3,278.3,208.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	this.shape.setTransform(-220,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-440,-165,440,330), null);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		//stage.enableMouseOver(frequency);
		var bool = false;
		var interval;
		
		createjs.Touch.enable(stage);
		if(createjs.Touch.enable(stage)){
			stage.on("stagemousedown", function(evt) {
				if (evt.cancelable) {
					evt.preventDefault();
				}
				this.stop();
				clearInterval(interval);
			});
			stage.on("stagemouseup", function(evt) {
				if (evt.cancelable) {
					evt.preventDefault();
				}
				interval = setInterval(backAnim, 41);
			});
			stage.on("stagemousemove", function(evt) {
			if (evt.cancelable) {
				evt.preventDefault();
			}
			exportRoot.gotoAndStop(parseInt(stage.mouseX/sc) + 1);
			console.log("stagemousedown");
		});
			
		}else{
			this.btn.addEventListener("mouseover", btnOver);
			this.btn.addEventListener("mouseout", btnOut);
			stage.addEventListener("tick", my_ticker_fun);
		}
		
		function btnOver(evt) {
			if (evt.cancelable) {
				evt.preventDefault();
			}
			this.stop();
			bool = true;
			
		}
		function backAnim(){
			var fr = exportRoot.currentFrame + 10;
			if(fr > 441){
				fr = 441;
				clearInterval(interval);
			}
			exportRoot.gotoAndStop(fr);
		}
		function my_ticker_fun(evt) {
			//console.log(bool);
			//console.log(parseInt(stage.mouseX/2));
			if(bool){
				
				exportRoot.gotoAndStop(parseInt(stage.mouseX/sc) + 1);
			}else{
				var fr = exportRoot.currentFrame + 10;
				if(fr > 441){
					fr = 441;
				}
				exportRoot.gotoAndStop(fr);
			}
		}
		function btnOut(evt) {
			if (evt.cancelable) {
				evt.preventDefault();
			}
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
	this.btn.parent = this;
	this.btn.setTransform(440,165);
	this.btn.alpha = 0.012;
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(442));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_2 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_3 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_4 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_5 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_6 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_7 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_8 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_9 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_10 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_11 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_12 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_13 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_14 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_15 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_16 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_17 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_18 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_19 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_20 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_21 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_22 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_23 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_24 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_25 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_26 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_27 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_28 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_29 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_30 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_31 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_32 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_33 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_34 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_35 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_36 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_37 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_38 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_39 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_40 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_41 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_42 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_43 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_44 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_45 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_46 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_47 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_48 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_49 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_50 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_51 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_52 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_53 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_54 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_55 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_56 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_57 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_58 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_59 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_60 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_61 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_62 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_63 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_64 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_65 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_66 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_67 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_68 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_69 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_70 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_71 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_72 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_73 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_74 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_75 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_76 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_77 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_78 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_79 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_80 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_81 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_82 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_83 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_84 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_85 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_86 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_87 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_88 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_89 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_90 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_91 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_92 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_93 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_94 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_95 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_96 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_97 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_98 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_99 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_100 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_101 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_102 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_103 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_104 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_105 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_106 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_107 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_108 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_109 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_110 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_111 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_112 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_113 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_114 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_115 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_116 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_117 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_118 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_119 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_120 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_121 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_122 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_123 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_124 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_125 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_126 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_127 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_128 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_129 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_130 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_131 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_132 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_133 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_134 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_135 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_136 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_137 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_138 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_139 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_140 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_141 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_142 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_143 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_144 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_145 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_146 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_147 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_148 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_149 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_150 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_151 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_152 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_153 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_154 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_155 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_156 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_157 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_158 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_159 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_160 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_161 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_162 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_163 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_164 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_165 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_166 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_167 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_168 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_169 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_170 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_171 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_172 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_173 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_174 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_175 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_176 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_177 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_178 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_179 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_180 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_181 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_182 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_183 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_184 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_185 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_186 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_187 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_188 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_189 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_190 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_191 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_192 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_193 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_194 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_195 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_196 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_197 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_198 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_199 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_200 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_201 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_202 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_203 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_204 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_205 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_206 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_207 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_208 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_209 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_210 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_211 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_212 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_213 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_214 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_215 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_216 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_217 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_218 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_219 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_220 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_221 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_222 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_223 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_224 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_225 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_226 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_227 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_228 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_229 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_230 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_231 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_232 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_233 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_234 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_235 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_236 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_237 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_238 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_239 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_240 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_241 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_242 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_243 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_244 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_245 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_246 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_247 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_248 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_249 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_250 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_251 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_252 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_253 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_254 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_255 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_256 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_257 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_258 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_259 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_260 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_261 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_262 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_263 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_264 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_265 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_266 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_267 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_268 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_269 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_270 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_271 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_272 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_273 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_274 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_275 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_276 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_277 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_278 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_279 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_280 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_281 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_282 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_283 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_284 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_285 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_286 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_287 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_288 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_289 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_290 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_291 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_292 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_293 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_294 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_295 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_296 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_297 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_298 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_299 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_300 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_301 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_302 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_303 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_304 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_305 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_306 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_307 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_308 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_309 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_310 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_311 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_312 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_313 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_314 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_315 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_316 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_317 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_318 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_319 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_320 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_321 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_322 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_323 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_324 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_325 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_326 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_327 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_328 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_329 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_330 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_331 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_332 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_333 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_334 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_335 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_336 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_337 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_338 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_339 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_340 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_341 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_342 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_343 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_344 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_345 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_346 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_347 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_348 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_349 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_350 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_351 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_352 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_353 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_354 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_355 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_356 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_357 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_358 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_359 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_360 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_361 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_362 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_363 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_364 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_365 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_366 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_367 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_368 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_369 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_370 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_371 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_372 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_373 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_374 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_375 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_376 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_377 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_378 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_379 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_380 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_381 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_382 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_383 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_384 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_385 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_386 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_387 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_388 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_389 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_390 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_391 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_392 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_393 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_394 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_395 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_396 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_397 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_398 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_399 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_400 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_401 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_402 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_403 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_404 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_405 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_406 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_407 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_408 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_409 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_410 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_411 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_412 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_413 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_414 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_415 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_416 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_417 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_418 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_419 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_420 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_421 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_422 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_423 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_424 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_425 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_426 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_427 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_428 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_429 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_430 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_431 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_432 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_433 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_434 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_435 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_436 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_437 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_438 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_439 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_440 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_graphics_441 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-220,y:165}).wait(1).to({graphics:mask_graphics_2,x:-219,y:165}).wait(1).to({graphics:mask_graphics_3,x:-218,y:165}).wait(1).to({graphics:mask_graphics_4,x:-217,y:165}).wait(1).to({graphics:mask_graphics_5,x:-216,y:165}).wait(1).to({graphics:mask_graphics_6,x:-215,y:165}).wait(1).to({graphics:mask_graphics_7,x:-214,y:165}).wait(1).to({graphics:mask_graphics_8,x:-213,y:165}).wait(1).to({graphics:mask_graphics_9,x:-212,y:165}).wait(1).to({graphics:mask_graphics_10,x:-211,y:165}).wait(1).to({graphics:mask_graphics_11,x:-210,y:165}).wait(1).to({graphics:mask_graphics_12,x:-209,y:165}).wait(1).to({graphics:mask_graphics_13,x:-208,y:165}).wait(1).to({graphics:mask_graphics_14,x:-207,y:165}).wait(1).to({graphics:mask_graphics_15,x:-206,y:165}).wait(1).to({graphics:mask_graphics_16,x:-205,y:165}).wait(1).to({graphics:mask_graphics_17,x:-204,y:165}).wait(1).to({graphics:mask_graphics_18,x:-203,y:165}).wait(1).to({graphics:mask_graphics_19,x:-202,y:165}).wait(1).to({graphics:mask_graphics_20,x:-201,y:165}).wait(1).to({graphics:mask_graphics_21,x:-200,y:165}).wait(1).to({graphics:mask_graphics_22,x:-199,y:165}).wait(1).to({graphics:mask_graphics_23,x:-198,y:165}).wait(1).to({graphics:mask_graphics_24,x:-197,y:165}).wait(1).to({graphics:mask_graphics_25,x:-196,y:165}).wait(1).to({graphics:mask_graphics_26,x:-195,y:165}).wait(1).to({graphics:mask_graphics_27,x:-194,y:165}).wait(1).to({graphics:mask_graphics_28,x:-193,y:165}).wait(1).to({graphics:mask_graphics_29,x:-192,y:165}).wait(1).to({graphics:mask_graphics_30,x:-191,y:165}).wait(1).to({graphics:mask_graphics_31,x:-190,y:165}).wait(1).to({graphics:mask_graphics_32,x:-189,y:165}).wait(1).to({graphics:mask_graphics_33,x:-188,y:165}).wait(1).to({graphics:mask_graphics_34,x:-187,y:165}).wait(1).to({graphics:mask_graphics_35,x:-186,y:165}).wait(1).to({graphics:mask_graphics_36,x:-185,y:165}).wait(1).to({graphics:mask_graphics_37,x:-184,y:165}).wait(1).to({graphics:mask_graphics_38,x:-183,y:165}).wait(1).to({graphics:mask_graphics_39,x:-182,y:165}).wait(1).to({graphics:mask_graphics_40,x:-181,y:165}).wait(1).to({graphics:mask_graphics_41,x:-180,y:165}).wait(1).to({graphics:mask_graphics_42,x:-179,y:165}).wait(1).to({graphics:mask_graphics_43,x:-178,y:165}).wait(1).to({graphics:mask_graphics_44,x:-177,y:165}).wait(1).to({graphics:mask_graphics_45,x:-176,y:165}).wait(1).to({graphics:mask_graphics_46,x:-175,y:165}).wait(1).to({graphics:mask_graphics_47,x:-174,y:165}).wait(1).to({graphics:mask_graphics_48,x:-173,y:165}).wait(1).to({graphics:mask_graphics_49,x:-172,y:165}).wait(1).to({graphics:mask_graphics_50,x:-171,y:165}).wait(1).to({graphics:mask_graphics_51,x:-170,y:165}).wait(1).to({graphics:mask_graphics_52,x:-169,y:165}).wait(1).to({graphics:mask_graphics_53,x:-168,y:165}).wait(1).to({graphics:mask_graphics_54,x:-167,y:165}).wait(1).to({graphics:mask_graphics_55,x:-166,y:165}).wait(1).to({graphics:mask_graphics_56,x:-165,y:165}).wait(1).to({graphics:mask_graphics_57,x:-164,y:165}).wait(1).to({graphics:mask_graphics_58,x:-163,y:165}).wait(1).to({graphics:mask_graphics_59,x:-162,y:165}).wait(1).to({graphics:mask_graphics_60,x:-161,y:165}).wait(1).to({graphics:mask_graphics_61,x:-160,y:165}).wait(1).to({graphics:mask_graphics_62,x:-159,y:165}).wait(1).to({graphics:mask_graphics_63,x:-158,y:165}).wait(1).to({graphics:mask_graphics_64,x:-157,y:165}).wait(1).to({graphics:mask_graphics_65,x:-156,y:165}).wait(1).to({graphics:mask_graphics_66,x:-155,y:165}).wait(1).to({graphics:mask_graphics_67,x:-154,y:165}).wait(1).to({graphics:mask_graphics_68,x:-153,y:165}).wait(1).to({graphics:mask_graphics_69,x:-152,y:165}).wait(1).to({graphics:mask_graphics_70,x:-151,y:165}).wait(1).to({graphics:mask_graphics_71,x:-150,y:165}).wait(1).to({graphics:mask_graphics_72,x:-149,y:165}).wait(1).to({graphics:mask_graphics_73,x:-148,y:165}).wait(1).to({graphics:mask_graphics_74,x:-147,y:165}).wait(1).to({graphics:mask_graphics_75,x:-146,y:165}).wait(1).to({graphics:mask_graphics_76,x:-145,y:165}).wait(1).to({graphics:mask_graphics_77,x:-144,y:165}).wait(1).to({graphics:mask_graphics_78,x:-143,y:165}).wait(1).to({graphics:mask_graphics_79,x:-142,y:165}).wait(1).to({graphics:mask_graphics_80,x:-141,y:165}).wait(1).to({graphics:mask_graphics_81,x:-140,y:165}).wait(1).to({graphics:mask_graphics_82,x:-139,y:165}).wait(1).to({graphics:mask_graphics_83,x:-138,y:165}).wait(1).to({graphics:mask_graphics_84,x:-137,y:165}).wait(1).to({graphics:mask_graphics_85,x:-136,y:165}).wait(1).to({graphics:mask_graphics_86,x:-135,y:165}).wait(1).to({graphics:mask_graphics_87,x:-134,y:165}).wait(1).to({graphics:mask_graphics_88,x:-133,y:165}).wait(1).to({graphics:mask_graphics_89,x:-132,y:165}).wait(1).to({graphics:mask_graphics_90,x:-131,y:165}).wait(1).to({graphics:mask_graphics_91,x:-130,y:165}).wait(1).to({graphics:mask_graphics_92,x:-129,y:165}).wait(1).to({graphics:mask_graphics_93,x:-128,y:165}).wait(1).to({graphics:mask_graphics_94,x:-127,y:165}).wait(1).to({graphics:mask_graphics_95,x:-126,y:165}).wait(1).to({graphics:mask_graphics_96,x:-125,y:165}).wait(1).to({graphics:mask_graphics_97,x:-124,y:165}).wait(1).to({graphics:mask_graphics_98,x:-123,y:165}).wait(1).to({graphics:mask_graphics_99,x:-122,y:165}).wait(1).to({graphics:mask_graphics_100,x:-121,y:165}).wait(1).to({graphics:mask_graphics_101,x:-120,y:165}).wait(1).to({graphics:mask_graphics_102,x:-119,y:165}).wait(1).to({graphics:mask_graphics_103,x:-118,y:165}).wait(1).to({graphics:mask_graphics_104,x:-117,y:165}).wait(1).to({graphics:mask_graphics_105,x:-116,y:165}).wait(1).to({graphics:mask_graphics_106,x:-115,y:165}).wait(1).to({graphics:mask_graphics_107,x:-114,y:165}).wait(1).to({graphics:mask_graphics_108,x:-113,y:165}).wait(1).to({graphics:mask_graphics_109,x:-112,y:165}).wait(1).to({graphics:mask_graphics_110,x:-111,y:165}).wait(1).to({graphics:mask_graphics_111,x:-110,y:165}).wait(1).to({graphics:mask_graphics_112,x:-109,y:165}).wait(1).to({graphics:mask_graphics_113,x:-108,y:165}).wait(1).to({graphics:mask_graphics_114,x:-107,y:165}).wait(1).to({graphics:mask_graphics_115,x:-106,y:165}).wait(1).to({graphics:mask_graphics_116,x:-105,y:165}).wait(1).to({graphics:mask_graphics_117,x:-104,y:165}).wait(1).to({graphics:mask_graphics_118,x:-103,y:165}).wait(1).to({graphics:mask_graphics_119,x:-102,y:165}).wait(1).to({graphics:mask_graphics_120,x:-101,y:165}).wait(1).to({graphics:mask_graphics_121,x:-100,y:165}).wait(1).to({graphics:mask_graphics_122,x:-99,y:165}).wait(1).to({graphics:mask_graphics_123,x:-98,y:165}).wait(1).to({graphics:mask_graphics_124,x:-97,y:165}).wait(1).to({graphics:mask_graphics_125,x:-96,y:165}).wait(1).to({graphics:mask_graphics_126,x:-95,y:165}).wait(1).to({graphics:mask_graphics_127,x:-94,y:165}).wait(1).to({graphics:mask_graphics_128,x:-93,y:165}).wait(1).to({graphics:mask_graphics_129,x:-92,y:165}).wait(1).to({graphics:mask_graphics_130,x:-91,y:165}).wait(1).to({graphics:mask_graphics_131,x:-90,y:165}).wait(1).to({graphics:mask_graphics_132,x:-89,y:165}).wait(1).to({graphics:mask_graphics_133,x:-88,y:165}).wait(1).to({graphics:mask_graphics_134,x:-87,y:165}).wait(1).to({graphics:mask_graphics_135,x:-86,y:165}).wait(1).to({graphics:mask_graphics_136,x:-85,y:165}).wait(1).to({graphics:mask_graphics_137,x:-84,y:165}).wait(1).to({graphics:mask_graphics_138,x:-83,y:165}).wait(1).to({graphics:mask_graphics_139,x:-82,y:165}).wait(1).to({graphics:mask_graphics_140,x:-81,y:165}).wait(1).to({graphics:mask_graphics_141,x:-80,y:165}).wait(1).to({graphics:mask_graphics_142,x:-79,y:165}).wait(1).to({graphics:mask_graphics_143,x:-78,y:165}).wait(1).to({graphics:mask_graphics_144,x:-77,y:165}).wait(1).to({graphics:mask_graphics_145,x:-76,y:165}).wait(1).to({graphics:mask_graphics_146,x:-75,y:165}).wait(1).to({graphics:mask_graphics_147,x:-74,y:165}).wait(1).to({graphics:mask_graphics_148,x:-73,y:165}).wait(1).to({graphics:mask_graphics_149,x:-72,y:165}).wait(1).to({graphics:mask_graphics_150,x:-71,y:165}).wait(1).to({graphics:mask_graphics_151,x:-70,y:165}).wait(1).to({graphics:mask_graphics_152,x:-69,y:165}).wait(1).to({graphics:mask_graphics_153,x:-68,y:165}).wait(1).to({graphics:mask_graphics_154,x:-67,y:165}).wait(1).to({graphics:mask_graphics_155,x:-66,y:165}).wait(1).to({graphics:mask_graphics_156,x:-65,y:165}).wait(1).to({graphics:mask_graphics_157,x:-64,y:165}).wait(1).to({graphics:mask_graphics_158,x:-63,y:165}).wait(1).to({graphics:mask_graphics_159,x:-62,y:165}).wait(1).to({graphics:mask_graphics_160,x:-61,y:165}).wait(1).to({graphics:mask_graphics_161,x:-60,y:165}).wait(1).to({graphics:mask_graphics_162,x:-59,y:165}).wait(1).to({graphics:mask_graphics_163,x:-58,y:165}).wait(1).to({graphics:mask_graphics_164,x:-57,y:165}).wait(1).to({graphics:mask_graphics_165,x:-56,y:165}).wait(1).to({graphics:mask_graphics_166,x:-55,y:165}).wait(1).to({graphics:mask_graphics_167,x:-54,y:165}).wait(1).to({graphics:mask_graphics_168,x:-53,y:165}).wait(1).to({graphics:mask_graphics_169,x:-52,y:165}).wait(1).to({graphics:mask_graphics_170,x:-51,y:165}).wait(1).to({graphics:mask_graphics_171,x:-50,y:165}).wait(1).to({graphics:mask_graphics_172,x:-49,y:165}).wait(1).to({graphics:mask_graphics_173,x:-48,y:165}).wait(1).to({graphics:mask_graphics_174,x:-47,y:165}).wait(1).to({graphics:mask_graphics_175,x:-46,y:165}).wait(1).to({graphics:mask_graphics_176,x:-45,y:165}).wait(1).to({graphics:mask_graphics_177,x:-44,y:165}).wait(1).to({graphics:mask_graphics_178,x:-43,y:165}).wait(1).to({graphics:mask_graphics_179,x:-42,y:165}).wait(1).to({graphics:mask_graphics_180,x:-41,y:165}).wait(1).to({graphics:mask_graphics_181,x:-40,y:165}).wait(1).to({graphics:mask_graphics_182,x:-39,y:165}).wait(1).to({graphics:mask_graphics_183,x:-38,y:165}).wait(1).to({graphics:mask_graphics_184,x:-37,y:165}).wait(1).to({graphics:mask_graphics_185,x:-36,y:165}).wait(1).to({graphics:mask_graphics_186,x:-35,y:165}).wait(1).to({graphics:mask_graphics_187,x:-34,y:165}).wait(1).to({graphics:mask_graphics_188,x:-33,y:165}).wait(1).to({graphics:mask_graphics_189,x:-32,y:165}).wait(1).to({graphics:mask_graphics_190,x:-31,y:165}).wait(1).to({graphics:mask_graphics_191,x:-30,y:165}).wait(1).to({graphics:mask_graphics_192,x:-29,y:165}).wait(1).to({graphics:mask_graphics_193,x:-28,y:165}).wait(1).to({graphics:mask_graphics_194,x:-27,y:165}).wait(1).to({graphics:mask_graphics_195,x:-26,y:165}).wait(1).to({graphics:mask_graphics_196,x:-25,y:165}).wait(1).to({graphics:mask_graphics_197,x:-24,y:165}).wait(1).to({graphics:mask_graphics_198,x:-23,y:165}).wait(1).to({graphics:mask_graphics_199,x:-22,y:165}).wait(1).to({graphics:mask_graphics_200,x:-21,y:165}).wait(1).to({graphics:mask_graphics_201,x:-20,y:165}).wait(1).to({graphics:mask_graphics_202,x:-19,y:165}).wait(1).to({graphics:mask_graphics_203,x:-18,y:165}).wait(1).to({graphics:mask_graphics_204,x:-17,y:165}).wait(1).to({graphics:mask_graphics_205,x:-16,y:165}).wait(1).to({graphics:mask_graphics_206,x:-15,y:165}).wait(1).to({graphics:mask_graphics_207,x:-14,y:165}).wait(1).to({graphics:mask_graphics_208,x:-13,y:165}).wait(1).to({graphics:mask_graphics_209,x:-12,y:165}).wait(1).to({graphics:mask_graphics_210,x:-11,y:165}).wait(1).to({graphics:mask_graphics_211,x:-10,y:165}).wait(1).to({graphics:mask_graphics_212,x:-9,y:165}).wait(1).to({graphics:mask_graphics_213,x:-8,y:165}).wait(1).to({graphics:mask_graphics_214,x:-7,y:165}).wait(1).to({graphics:mask_graphics_215,x:-6,y:165}).wait(1).to({graphics:mask_graphics_216,x:-5,y:165}).wait(1).to({graphics:mask_graphics_217,x:-4,y:165}).wait(1).to({graphics:mask_graphics_218,x:-3,y:165}).wait(1).to({graphics:mask_graphics_219,x:-2,y:165}).wait(1).to({graphics:mask_graphics_220,x:-1,y:165}).wait(1).to({graphics:mask_graphics_221,x:0,y:165}).wait(1).to({graphics:mask_graphics_222,x:1,y:165}).wait(1).to({graphics:mask_graphics_223,x:2,y:165}).wait(1).to({graphics:mask_graphics_224,x:3,y:165}).wait(1).to({graphics:mask_graphics_225,x:4,y:165}).wait(1).to({graphics:mask_graphics_226,x:5,y:165}).wait(1).to({graphics:mask_graphics_227,x:6,y:165}).wait(1).to({graphics:mask_graphics_228,x:7,y:165}).wait(1).to({graphics:mask_graphics_229,x:8,y:165}).wait(1).to({graphics:mask_graphics_230,x:9,y:165}).wait(1).to({graphics:mask_graphics_231,x:10,y:165}).wait(1).to({graphics:mask_graphics_232,x:11,y:165}).wait(1).to({graphics:mask_graphics_233,x:12,y:165}).wait(1).to({graphics:mask_graphics_234,x:13,y:165}).wait(1).to({graphics:mask_graphics_235,x:14,y:165}).wait(1).to({graphics:mask_graphics_236,x:15,y:165}).wait(1).to({graphics:mask_graphics_237,x:16,y:165}).wait(1).to({graphics:mask_graphics_238,x:17,y:165}).wait(1).to({graphics:mask_graphics_239,x:18,y:165}).wait(1).to({graphics:mask_graphics_240,x:19,y:165}).wait(1).to({graphics:mask_graphics_241,x:20,y:165}).wait(1).to({graphics:mask_graphics_242,x:21,y:165}).wait(1).to({graphics:mask_graphics_243,x:22,y:165}).wait(1).to({graphics:mask_graphics_244,x:23,y:165}).wait(1).to({graphics:mask_graphics_245,x:24,y:165}).wait(1).to({graphics:mask_graphics_246,x:25,y:165}).wait(1).to({graphics:mask_graphics_247,x:26,y:165}).wait(1).to({graphics:mask_graphics_248,x:27,y:165}).wait(1).to({graphics:mask_graphics_249,x:28,y:165}).wait(1).to({graphics:mask_graphics_250,x:29,y:165}).wait(1).to({graphics:mask_graphics_251,x:30,y:165}).wait(1).to({graphics:mask_graphics_252,x:31,y:165}).wait(1).to({graphics:mask_graphics_253,x:32,y:165}).wait(1).to({graphics:mask_graphics_254,x:33,y:165}).wait(1).to({graphics:mask_graphics_255,x:34,y:165}).wait(1).to({graphics:mask_graphics_256,x:35,y:165}).wait(1).to({graphics:mask_graphics_257,x:36,y:165}).wait(1).to({graphics:mask_graphics_258,x:37,y:165}).wait(1).to({graphics:mask_graphics_259,x:38,y:165}).wait(1).to({graphics:mask_graphics_260,x:39,y:165}).wait(1).to({graphics:mask_graphics_261,x:40,y:165}).wait(1).to({graphics:mask_graphics_262,x:41,y:165}).wait(1).to({graphics:mask_graphics_263,x:42,y:165}).wait(1).to({graphics:mask_graphics_264,x:43,y:165}).wait(1).to({graphics:mask_graphics_265,x:44,y:165}).wait(1).to({graphics:mask_graphics_266,x:45,y:165}).wait(1).to({graphics:mask_graphics_267,x:46,y:165}).wait(1).to({graphics:mask_graphics_268,x:47,y:165}).wait(1).to({graphics:mask_graphics_269,x:48,y:165}).wait(1).to({graphics:mask_graphics_270,x:49,y:165}).wait(1).to({graphics:mask_graphics_271,x:50,y:165}).wait(1).to({graphics:mask_graphics_272,x:51,y:165}).wait(1).to({graphics:mask_graphics_273,x:52,y:165}).wait(1).to({graphics:mask_graphics_274,x:53,y:165}).wait(1).to({graphics:mask_graphics_275,x:54,y:165}).wait(1).to({graphics:mask_graphics_276,x:55,y:165}).wait(1).to({graphics:mask_graphics_277,x:56,y:165}).wait(1).to({graphics:mask_graphics_278,x:57,y:165}).wait(1).to({graphics:mask_graphics_279,x:58,y:165}).wait(1).to({graphics:mask_graphics_280,x:59,y:165}).wait(1).to({graphics:mask_graphics_281,x:60,y:165}).wait(1).to({graphics:mask_graphics_282,x:61,y:165}).wait(1).to({graphics:mask_graphics_283,x:62,y:165}).wait(1).to({graphics:mask_graphics_284,x:63,y:165}).wait(1).to({graphics:mask_graphics_285,x:64,y:165}).wait(1).to({graphics:mask_graphics_286,x:65,y:165}).wait(1).to({graphics:mask_graphics_287,x:66,y:165}).wait(1).to({graphics:mask_graphics_288,x:67,y:165}).wait(1).to({graphics:mask_graphics_289,x:68,y:165}).wait(1).to({graphics:mask_graphics_290,x:69,y:165}).wait(1).to({graphics:mask_graphics_291,x:70,y:165}).wait(1).to({graphics:mask_graphics_292,x:71,y:165}).wait(1).to({graphics:mask_graphics_293,x:72,y:165}).wait(1).to({graphics:mask_graphics_294,x:73,y:165}).wait(1).to({graphics:mask_graphics_295,x:74,y:165}).wait(1).to({graphics:mask_graphics_296,x:75,y:165}).wait(1).to({graphics:mask_graphics_297,x:76,y:165}).wait(1).to({graphics:mask_graphics_298,x:77,y:165}).wait(1).to({graphics:mask_graphics_299,x:78,y:165}).wait(1).to({graphics:mask_graphics_300,x:79,y:165}).wait(1).to({graphics:mask_graphics_301,x:80,y:165}).wait(1).to({graphics:mask_graphics_302,x:81,y:165}).wait(1).to({graphics:mask_graphics_303,x:82,y:165}).wait(1).to({graphics:mask_graphics_304,x:83,y:165}).wait(1).to({graphics:mask_graphics_305,x:84,y:165}).wait(1).to({graphics:mask_graphics_306,x:85,y:165}).wait(1).to({graphics:mask_graphics_307,x:86,y:165}).wait(1).to({graphics:mask_graphics_308,x:87,y:165}).wait(1).to({graphics:mask_graphics_309,x:88,y:165}).wait(1).to({graphics:mask_graphics_310,x:89,y:165}).wait(1).to({graphics:mask_graphics_311,x:90,y:165}).wait(1).to({graphics:mask_graphics_312,x:91,y:165}).wait(1).to({graphics:mask_graphics_313,x:92,y:165}).wait(1).to({graphics:mask_graphics_314,x:93,y:165}).wait(1).to({graphics:mask_graphics_315,x:94,y:165}).wait(1).to({graphics:mask_graphics_316,x:95,y:165}).wait(1).to({graphics:mask_graphics_317,x:96,y:165}).wait(1).to({graphics:mask_graphics_318,x:97,y:165}).wait(1).to({graphics:mask_graphics_319,x:98,y:165}).wait(1).to({graphics:mask_graphics_320,x:99,y:165}).wait(1).to({graphics:mask_graphics_321,x:100,y:165}).wait(1).to({graphics:mask_graphics_322,x:101,y:165}).wait(1).to({graphics:mask_graphics_323,x:102,y:165}).wait(1).to({graphics:mask_graphics_324,x:103,y:165}).wait(1).to({graphics:mask_graphics_325,x:104,y:165}).wait(1).to({graphics:mask_graphics_326,x:105,y:165}).wait(1).to({graphics:mask_graphics_327,x:106,y:165}).wait(1).to({graphics:mask_graphics_328,x:107,y:165}).wait(1).to({graphics:mask_graphics_329,x:108,y:165}).wait(1).to({graphics:mask_graphics_330,x:109,y:165}).wait(1).to({graphics:mask_graphics_331,x:110,y:165}).wait(1).to({graphics:mask_graphics_332,x:111,y:165}).wait(1).to({graphics:mask_graphics_333,x:112,y:165}).wait(1).to({graphics:mask_graphics_334,x:113,y:165}).wait(1).to({graphics:mask_graphics_335,x:114,y:165}).wait(1).to({graphics:mask_graphics_336,x:115,y:165}).wait(1).to({graphics:mask_graphics_337,x:116,y:165}).wait(1).to({graphics:mask_graphics_338,x:117,y:165}).wait(1).to({graphics:mask_graphics_339,x:118,y:165}).wait(1).to({graphics:mask_graphics_340,x:119,y:165}).wait(1).to({graphics:mask_graphics_341,x:120,y:165}).wait(1).to({graphics:mask_graphics_342,x:121,y:165}).wait(1).to({graphics:mask_graphics_343,x:122,y:165}).wait(1).to({graphics:mask_graphics_344,x:123,y:165}).wait(1).to({graphics:mask_graphics_345,x:124,y:165}).wait(1).to({graphics:mask_graphics_346,x:125,y:165}).wait(1).to({graphics:mask_graphics_347,x:126,y:165}).wait(1).to({graphics:mask_graphics_348,x:127,y:165}).wait(1).to({graphics:mask_graphics_349,x:128,y:165}).wait(1).to({graphics:mask_graphics_350,x:129,y:165}).wait(1).to({graphics:mask_graphics_351,x:130,y:165}).wait(1).to({graphics:mask_graphics_352,x:131,y:165}).wait(1).to({graphics:mask_graphics_353,x:132,y:165}).wait(1).to({graphics:mask_graphics_354,x:133,y:165}).wait(1).to({graphics:mask_graphics_355,x:134,y:165}).wait(1).to({graphics:mask_graphics_356,x:135,y:165}).wait(1).to({graphics:mask_graphics_357,x:136,y:165}).wait(1).to({graphics:mask_graphics_358,x:137,y:165}).wait(1).to({graphics:mask_graphics_359,x:138,y:165}).wait(1).to({graphics:mask_graphics_360,x:139,y:165}).wait(1).to({graphics:mask_graphics_361,x:140,y:165}).wait(1).to({graphics:mask_graphics_362,x:141,y:165}).wait(1).to({graphics:mask_graphics_363,x:142,y:165}).wait(1).to({graphics:mask_graphics_364,x:143,y:165}).wait(1).to({graphics:mask_graphics_365,x:144,y:165}).wait(1).to({graphics:mask_graphics_366,x:145,y:165}).wait(1).to({graphics:mask_graphics_367,x:146,y:165}).wait(1).to({graphics:mask_graphics_368,x:147,y:165}).wait(1).to({graphics:mask_graphics_369,x:148,y:165}).wait(1).to({graphics:mask_graphics_370,x:149,y:165}).wait(1).to({graphics:mask_graphics_371,x:150,y:165}).wait(1).to({graphics:mask_graphics_372,x:151,y:165}).wait(1).to({graphics:mask_graphics_373,x:152,y:165}).wait(1).to({graphics:mask_graphics_374,x:153,y:165}).wait(1).to({graphics:mask_graphics_375,x:154,y:165}).wait(1).to({graphics:mask_graphics_376,x:155,y:165}).wait(1).to({graphics:mask_graphics_377,x:156,y:165}).wait(1).to({graphics:mask_graphics_378,x:157,y:165}).wait(1).to({graphics:mask_graphics_379,x:158,y:165}).wait(1).to({graphics:mask_graphics_380,x:159,y:165}).wait(1).to({graphics:mask_graphics_381,x:160,y:165}).wait(1).to({graphics:mask_graphics_382,x:161,y:165}).wait(1).to({graphics:mask_graphics_383,x:162,y:165}).wait(1).to({graphics:mask_graphics_384,x:163,y:165}).wait(1).to({graphics:mask_graphics_385,x:164,y:165}).wait(1).to({graphics:mask_graphics_386,x:165,y:165}).wait(1).to({graphics:mask_graphics_387,x:166,y:165}).wait(1).to({graphics:mask_graphics_388,x:167,y:165}).wait(1).to({graphics:mask_graphics_389,x:168,y:165}).wait(1).to({graphics:mask_graphics_390,x:169,y:165}).wait(1).to({graphics:mask_graphics_391,x:170,y:165}).wait(1).to({graphics:mask_graphics_392,x:171,y:165}).wait(1).to({graphics:mask_graphics_393,x:172,y:165}).wait(1).to({graphics:mask_graphics_394,x:173,y:165}).wait(1).to({graphics:mask_graphics_395,x:174,y:165}).wait(1).to({graphics:mask_graphics_396,x:175,y:165}).wait(1).to({graphics:mask_graphics_397,x:176,y:165}).wait(1).to({graphics:mask_graphics_398,x:177,y:165}).wait(1).to({graphics:mask_graphics_399,x:178,y:165}).wait(1).to({graphics:mask_graphics_400,x:179,y:165}).wait(1).to({graphics:mask_graphics_401,x:180,y:165}).wait(1).to({graphics:mask_graphics_402,x:181,y:165}).wait(1).to({graphics:mask_graphics_403,x:182,y:165}).wait(1).to({graphics:mask_graphics_404,x:183,y:165}).wait(1).to({graphics:mask_graphics_405,x:184,y:165}).wait(1).to({graphics:mask_graphics_406,x:185,y:165}).wait(1).to({graphics:mask_graphics_407,x:186,y:165}).wait(1).to({graphics:mask_graphics_408,x:187,y:165}).wait(1).to({graphics:mask_graphics_409,x:188,y:165}).wait(1).to({graphics:mask_graphics_410,x:189,y:165}).wait(1).to({graphics:mask_graphics_411,x:190,y:165}).wait(1).to({graphics:mask_graphics_412,x:191,y:165}).wait(1).to({graphics:mask_graphics_413,x:192,y:165}).wait(1).to({graphics:mask_graphics_414,x:193,y:165}).wait(1).to({graphics:mask_graphics_415,x:194,y:165}).wait(1).to({graphics:mask_graphics_416,x:195,y:165}).wait(1).to({graphics:mask_graphics_417,x:196,y:165}).wait(1).to({graphics:mask_graphics_418,x:197,y:165}).wait(1).to({graphics:mask_graphics_419,x:198,y:165}).wait(1).to({graphics:mask_graphics_420,x:199,y:165}).wait(1).to({graphics:mask_graphics_421,x:200,y:165}).wait(1).to({graphics:mask_graphics_422,x:201,y:165}).wait(1).to({graphics:mask_graphics_423,x:202,y:165}).wait(1).to({graphics:mask_graphics_424,x:203,y:165}).wait(1).to({graphics:mask_graphics_425,x:204,y:165}).wait(1).to({graphics:mask_graphics_426,x:205,y:165}).wait(1).to({graphics:mask_graphics_427,x:206,y:165}).wait(1).to({graphics:mask_graphics_428,x:207,y:165}).wait(1).to({graphics:mask_graphics_429,x:208,y:165}).wait(1).to({graphics:mask_graphics_430,x:209,y:165}).wait(1).to({graphics:mask_graphics_431,x:210,y:165}).wait(1).to({graphics:mask_graphics_432,x:211,y:165}).wait(1).to({graphics:mask_graphics_433,x:212,y:165}).wait(1).to({graphics:mask_graphics_434,x:213,y:165}).wait(1).to({graphics:mask_graphics_435,x:214,y:165}).wait(1).to({graphics:mask_graphics_436,x:215,y:165}).wait(1).to({graphics:mask_graphics_437,x:216,y:165}).wait(1).to({graphics:mask_graphics_438,x:217,y:165}).wait(1).to({graphics:mask_graphics_439,x:218,y:165}).wait(1).to({graphics:mask_graphics_440,x:219,y:165}).wait(1).to({graphics:mask_graphics_441,x:220,y:165}).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(220,165);
	this.t1._off = true;

	var maskedShapeInstanceList = [this.t1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1).to({_off:false},0).wait(441));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("EgiXAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgiSAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgiNAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgiIAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgiDAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Egh+AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Egh5AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Egh0AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EghvAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EghqAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EghlAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EghgAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EghbAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EghWAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EghRAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EghMAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EghHAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EghCAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Egg9AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Egg4AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EggzAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgguAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EggpAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EggkAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EggfAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EggaAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EggVAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EggQAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EggLAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EggGAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EggBAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A/8ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_33 = new cjs.Graphics().p("A/3ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_34 = new cjs.Graphics().p("A/yZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("A/tZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("A/oZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("A/jZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_38 = new cjs.Graphics().p("A/eZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("A/ZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("A/UZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("A/PZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("A/KZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("A/FZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("A/AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_45 = new cjs.Graphics().p("A+7ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_46 = new cjs.Graphics().p("A+2ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("A+xZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_48 = new cjs.Graphics().p("A+sZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_49 = new cjs.Graphics().p("A+nZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_50 = new cjs.Graphics().p("A+iZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_51 = new cjs.Graphics().p("A+dZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A+YZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A+TZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A+OZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A+JZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A+EZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A9/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A96ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A91ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A9wZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A9rZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A9mZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A9hZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A9cZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A9XZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A9SZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A9NZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A9IZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A9DZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A8+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A85ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A80ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A8vZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A8qZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A8lZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A8gZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A8bZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A8WZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A8RZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A8MZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A8HZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A8CZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A79ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A74ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A7zZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A7uZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A7pZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A7kZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A7fZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A7aZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A7VZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A7QZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A7LZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A7GZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A7BZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A68ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A63ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A6yZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A6tZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A6oZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A6jZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A6eZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A6ZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A6UZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A6PZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A6KZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A6FZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A6AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A57ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A52ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A5xZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A5sZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A5nZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A5iZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A5dZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A5YZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A5TZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A5OZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A5JZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A5EZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A4/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A46ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A41ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A4wZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A4rZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A4mZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A4hZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A4cZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A4XZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A4SZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A4NZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A4IZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A4DZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A3+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A35ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A30ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A3vZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A3qZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A3lZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A3gZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A3bZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A3WZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A3RZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A3MZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A3HZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A3CZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A29ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A24ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A2zZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A2uZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A2pZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A2kZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A2fZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A2aZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A2VZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A2QZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A2LZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A2GZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A2BZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A18ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A13ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_162 = new cjs.Graphics().p("A1yZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_163 = new cjs.Graphics().p("A1tZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_164 = new cjs.Graphics().p("A1oZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_165 = new cjs.Graphics().p("A1jZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A1eZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A1ZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_168 = new cjs.Graphics().p("A1UZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A1PZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_170 = new cjs.Graphics().p("A1KZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_171 = new cjs.Graphics().p("A1FZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_172 = new cjs.Graphics().p("A1AZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_173 = new cjs.Graphics().p("A07ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_174 = new cjs.Graphics().p("A02ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_175 = new cjs.Graphics().p("A0xZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_176 = new cjs.Graphics().p("A0sZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_177 = new cjs.Graphics().p("A0nZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A0iZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A0dZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A0YZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A0TZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A0OZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A0JZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A0EZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_185 = new cjs.Graphics().p("Az/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_186 = new cjs.Graphics().p("Az6ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_187 = new cjs.Graphics().p("Az1ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AzwZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AzrZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AzmZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AzhZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AzcZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AzXZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AzSZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AzNZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AzIZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AzDZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_198 = new cjs.Graphics().p("Ay+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Ay5ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_200 = new cjs.Graphics().p("Ay0ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AyvZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AyqZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AylZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AygZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AybZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AyWZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AyRZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AyMZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AyHZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AyCZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_211 = new cjs.Graphics().p("Ax9ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Ax4ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AxzZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AxuZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AxpZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AxkZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AxfZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AxaZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AxVZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AxQZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AxLZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AxGZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AxBZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aw8ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_225 = new cjs.Graphics().p("Aw3ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AwyZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AwtZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AwoZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AwjZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AweZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AwZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AwUZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AwPZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AwKZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AwFZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AwAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_237 = new cjs.Graphics().p("Av7ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_238 = new cjs.Graphics().p("Av2ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AvxZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AvsZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AvnZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AviZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AvdZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AvYZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AvTZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AvOZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AvJZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AvEZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_249 = new cjs.Graphics().p("Au/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_250 = new cjs.Graphics().p("Au6ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_251 = new cjs.Graphics().p("Au1ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AuwZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AurZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_254 = new cjs.Graphics().p("AumZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AuhZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AucZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AuXZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AuSZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AuNZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AuIZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AuDZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_262 = new cjs.Graphics().p("At+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_263 = new cjs.Graphics().p("At5ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_264 = new cjs.Graphics().p("At0ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AtvZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AtqZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AtlZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_268 = new cjs.Graphics().p("AtgZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AtbZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AtWZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AtRZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AtMZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AtHZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AtCZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_275 = new cjs.Graphics().p("As9ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_276 = new cjs.Graphics().p("As4ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AszZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AsuZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AspZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AskZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AsfZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AsaZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AsVZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AsQZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_285 = new cjs.Graphics().p("AsLZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AsGZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AsBZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_288 = new cjs.Graphics().p("Ar8ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_289 = new cjs.Graphics().p("Ar3ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AryZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_291 = new cjs.Graphics().p("ArtZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AroZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_293 = new cjs.Graphics().p("ArjZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AreZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_295 = new cjs.Graphics().p("ArZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_296 = new cjs.Graphics().p("ArUZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_297 = new cjs.Graphics().p("ArPZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_298 = new cjs.Graphics().p("ArKZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_299 = new cjs.Graphics().p("ArFZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ArAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_301 = new cjs.Graphics().p("Aq7ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_302 = new cjs.Graphics().p("Aq2ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AqxZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AqsZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AqnZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AqiZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AqdZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AqYZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AqTZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AqOZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AqJZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AqEZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_313 = new cjs.Graphics().p("Ap/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_314 = new cjs.Graphics().p("Ap6ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_315 = new cjs.Graphics().p("Ap1ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_316 = new cjs.Graphics().p("ApwZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AprZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_318 = new cjs.Graphics().p("ApmZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AphZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_320 = new cjs.Graphics().p("ApcZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_321 = new cjs.Graphics().p("ApXZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_322 = new cjs.Graphics().p("ApSZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_323 = new cjs.Graphics().p("ApNZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_324 = new cjs.Graphics().p("ApIZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_325 = new cjs.Graphics().p("ApDZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_326 = new cjs.Graphics().p("Ao+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_327 = new cjs.Graphics().p("Ao5ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_328 = new cjs.Graphics().p("Ao0ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AovZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AoqZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AolZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AogZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AobZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AoWZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AoRZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AoMZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AoHZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AoCZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_339 = new cjs.Graphics().p("An9ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_340 = new cjs.Graphics().p("An4ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AnzZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AnuZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AnpZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AnkZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AnfZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AnaZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AnVZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AnQZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AnLZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AnGZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AnBZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_352 = new cjs.Graphics().p("Am8ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_353 = new cjs.Graphics().p("Am3ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AmyZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AmtZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AmoZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AmjZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AmeZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AmZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AmUZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_361 = new cjs.Graphics().p("AmPZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AmKZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AmFZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AmAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_365 = new cjs.Graphics().p("Al7ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_366 = new cjs.Graphics().p("Al2ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AlxZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AlsZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AlnZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AliZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AldZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_372 = new cjs.Graphics().p("AlYZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AlTZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AlOZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AlJZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_376 = new cjs.Graphics().p("AlEZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_377 = new cjs.Graphics().p("Ak/ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_378 = new cjs.Graphics().p("Ak6ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_379 = new cjs.Graphics().p("Ak1ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AkwZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AkrZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AkmZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_383 = new cjs.Graphics().p("AkhZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AkcZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AkXZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_386 = new cjs.Graphics().p("AkSZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AkNZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AkIZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AkDZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_390 = new cjs.Graphics().p("Aj+ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_391 = new cjs.Graphics().p("Aj5ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_392 = new cjs.Graphics().p("Aj0ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AjvZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AjqZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AjlZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AjgZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AjbZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_398 = new cjs.Graphics().p("AjWZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_399 = new cjs.Graphics().p("AjRZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_400 = new cjs.Graphics().p("AjMZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AjHZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AjCZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_403 = new cjs.Graphics().p("Ai9ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_404 = new cjs.Graphics().p("Ai4ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_405 = new cjs.Graphics().p("AizZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AiuZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_407 = new cjs.Graphics().p("AipZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_408 = new cjs.Graphics().p("AikZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AifZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AiaZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_411 = new cjs.Graphics().p("AiVZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AiQZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AiLZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AiGZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_415 = new cjs.Graphics().p("AiBZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_416 = new cjs.Graphics().p("Ah8ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_417 = new cjs.Graphics().p("Ah3ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_418 = new cjs.Graphics().p("AhyZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AhtZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AhoZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_421 = new cjs.Graphics().p("AhjZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_422 = new cjs.Graphics().p("AheZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AhZZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AhUZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_425 = new cjs.Graphics().p("AhPZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AhKZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AhFZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AhAZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_429 = new cjs.Graphics().p("Ag7ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_430 = new cjs.Graphics().p("Ag2ZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AgxZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AgsZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_433 = new cjs.Graphics().p("AgnZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_434 = new cjs.Graphics().p("AgiZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AgdZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AgYZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AgTZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AgOZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_439 = new cjs.Graphics().p("AgJZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AgEZyMAAAgzjMBEvAAAMAAAAzjg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AAAZyMAAAgzjMBEwAAAMAAAAzjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:220,y:165}).wait(1).to({graphics:mask_1_graphics_2,x:220.5,y:165}).wait(1).to({graphics:mask_1_graphics_3,x:221,y:165}).wait(1).to({graphics:mask_1_graphics_4,x:221.5,y:165}).wait(1).to({graphics:mask_1_graphics_5,x:222,y:165}).wait(1).to({graphics:mask_1_graphics_6,x:222.5,y:165}).wait(1).to({graphics:mask_1_graphics_7,x:223,y:165}).wait(1).to({graphics:mask_1_graphics_8,x:223.5,y:165}).wait(1).to({graphics:mask_1_graphics_9,x:224,y:165}).wait(1).to({graphics:mask_1_graphics_10,x:224.5,y:165}).wait(1).to({graphics:mask_1_graphics_11,x:225,y:165}).wait(1).to({graphics:mask_1_graphics_12,x:225.5,y:165}).wait(1).to({graphics:mask_1_graphics_13,x:226,y:165}).wait(1).to({graphics:mask_1_graphics_14,x:226.5,y:165}).wait(1).to({graphics:mask_1_graphics_15,x:227,y:165}).wait(1).to({graphics:mask_1_graphics_16,x:227.5,y:165}).wait(1).to({graphics:mask_1_graphics_17,x:228,y:165}).wait(1).to({graphics:mask_1_graphics_18,x:228.5,y:165}).wait(1).to({graphics:mask_1_graphics_19,x:229,y:165}).wait(1).to({graphics:mask_1_graphics_20,x:229.5,y:165}).wait(1).to({graphics:mask_1_graphics_21,x:230,y:165}).wait(1).to({graphics:mask_1_graphics_22,x:230.5,y:165}).wait(1).to({graphics:mask_1_graphics_23,x:231,y:165}).wait(1).to({graphics:mask_1_graphics_24,x:231.5,y:165}).wait(1).to({graphics:mask_1_graphics_25,x:232,y:165}).wait(1).to({graphics:mask_1_graphics_26,x:232.5,y:165}).wait(1).to({graphics:mask_1_graphics_27,x:233,y:165}).wait(1).to({graphics:mask_1_graphics_28,x:233.5,y:165}).wait(1).to({graphics:mask_1_graphics_29,x:234,y:165}).wait(1).to({graphics:mask_1_graphics_30,x:234.5,y:165}).wait(1).to({graphics:mask_1_graphics_31,x:235,y:165}).wait(1).to({graphics:mask_1_graphics_32,x:235.5,y:165}).wait(1).to({graphics:mask_1_graphics_33,x:236,y:165}).wait(1).to({graphics:mask_1_graphics_34,x:236.5,y:165}).wait(1).to({graphics:mask_1_graphics_35,x:237,y:165}).wait(1).to({graphics:mask_1_graphics_36,x:237.5,y:165}).wait(1).to({graphics:mask_1_graphics_37,x:238,y:165}).wait(1).to({graphics:mask_1_graphics_38,x:238.5,y:165}).wait(1).to({graphics:mask_1_graphics_39,x:239,y:165}).wait(1).to({graphics:mask_1_graphics_40,x:239.5,y:165}).wait(1).to({graphics:mask_1_graphics_41,x:240,y:165}).wait(1).to({graphics:mask_1_graphics_42,x:240.5,y:165}).wait(1).to({graphics:mask_1_graphics_43,x:241,y:165}).wait(1).to({graphics:mask_1_graphics_44,x:241.5,y:165}).wait(1).to({graphics:mask_1_graphics_45,x:242,y:165}).wait(1).to({graphics:mask_1_graphics_46,x:242.5,y:165}).wait(1).to({graphics:mask_1_graphics_47,x:243,y:165}).wait(1).to({graphics:mask_1_graphics_48,x:243.5,y:165}).wait(1).to({graphics:mask_1_graphics_49,x:244,y:165}).wait(1).to({graphics:mask_1_graphics_50,x:244.5,y:165}).wait(1).to({graphics:mask_1_graphics_51,x:245,y:165}).wait(1).to({graphics:mask_1_graphics_52,x:245.5,y:165}).wait(1).to({graphics:mask_1_graphics_53,x:246,y:165}).wait(1).to({graphics:mask_1_graphics_54,x:246.5,y:165}).wait(1).to({graphics:mask_1_graphics_55,x:247,y:165}).wait(1).to({graphics:mask_1_graphics_56,x:247.5,y:165}).wait(1).to({graphics:mask_1_graphics_57,x:248,y:165}).wait(1).to({graphics:mask_1_graphics_58,x:248.5,y:165}).wait(1).to({graphics:mask_1_graphics_59,x:249,y:165}).wait(1).to({graphics:mask_1_graphics_60,x:249.5,y:165}).wait(1).to({graphics:mask_1_graphics_61,x:250,y:165}).wait(1).to({graphics:mask_1_graphics_62,x:250.5,y:165}).wait(1).to({graphics:mask_1_graphics_63,x:251,y:165}).wait(1).to({graphics:mask_1_graphics_64,x:251.5,y:165}).wait(1).to({graphics:mask_1_graphics_65,x:252,y:165}).wait(1).to({graphics:mask_1_graphics_66,x:252.5,y:165}).wait(1).to({graphics:mask_1_graphics_67,x:253,y:165}).wait(1).to({graphics:mask_1_graphics_68,x:253.5,y:165}).wait(1).to({graphics:mask_1_graphics_69,x:254,y:165}).wait(1).to({graphics:mask_1_graphics_70,x:254.5,y:165}).wait(1).to({graphics:mask_1_graphics_71,x:255,y:165}).wait(1).to({graphics:mask_1_graphics_72,x:255.5,y:165}).wait(1).to({graphics:mask_1_graphics_73,x:256,y:165}).wait(1).to({graphics:mask_1_graphics_74,x:256.5,y:165}).wait(1).to({graphics:mask_1_graphics_75,x:257,y:165}).wait(1).to({graphics:mask_1_graphics_76,x:257.5,y:165}).wait(1).to({graphics:mask_1_graphics_77,x:258,y:165}).wait(1).to({graphics:mask_1_graphics_78,x:258.5,y:165}).wait(1).to({graphics:mask_1_graphics_79,x:259,y:165}).wait(1).to({graphics:mask_1_graphics_80,x:259.5,y:165}).wait(1).to({graphics:mask_1_graphics_81,x:260,y:165}).wait(1).to({graphics:mask_1_graphics_82,x:260.5,y:165}).wait(1).to({graphics:mask_1_graphics_83,x:261,y:165}).wait(1).to({graphics:mask_1_graphics_84,x:261.5,y:165}).wait(1).to({graphics:mask_1_graphics_85,x:262,y:165}).wait(1).to({graphics:mask_1_graphics_86,x:262.5,y:165}).wait(1).to({graphics:mask_1_graphics_87,x:263,y:165}).wait(1).to({graphics:mask_1_graphics_88,x:263.5,y:165}).wait(1).to({graphics:mask_1_graphics_89,x:264,y:165}).wait(1).to({graphics:mask_1_graphics_90,x:264.5,y:165}).wait(1).to({graphics:mask_1_graphics_91,x:265,y:165}).wait(1).to({graphics:mask_1_graphics_92,x:265.5,y:165}).wait(1).to({graphics:mask_1_graphics_93,x:266,y:165}).wait(1).to({graphics:mask_1_graphics_94,x:266.5,y:165}).wait(1).to({graphics:mask_1_graphics_95,x:267,y:165}).wait(1).to({graphics:mask_1_graphics_96,x:267.5,y:165}).wait(1).to({graphics:mask_1_graphics_97,x:268,y:165}).wait(1).to({graphics:mask_1_graphics_98,x:268.5,y:165}).wait(1).to({graphics:mask_1_graphics_99,x:269,y:165}).wait(1).to({graphics:mask_1_graphics_100,x:269.5,y:165}).wait(1).to({graphics:mask_1_graphics_101,x:270,y:165}).wait(1).to({graphics:mask_1_graphics_102,x:270.5,y:165}).wait(1).to({graphics:mask_1_graphics_103,x:271,y:165}).wait(1).to({graphics:mask_1_graphics_104,x:271.5,y:165}).wait(1).to({graphics:mask_1_graphics_105,x:272,y:165}).wait(1).to({graphics:mask_1_graphics_106,x:272.5,y:165}).wait(1).to({graphics:mask_1_graphics_107,x:273,y:165}).wait(1).to({graphics:mask_1_graphics_108,x:273.5,y:165}).wait(1).to({graphics:mask_1_graphics_109,x:274,y:165}).wait(1).to({graphics:mask_1_graphics_110,x:274.5,y:165}).wait(1).to({graphics:mask_1_graphics_111,x:275,y:165}).wait(1).to({graphics:mask_1_graphics_112,x:275.5,y:165}).wait(1).to({graphics:mask_1_graphics_113,x:276,y:165}).wait(1).to({graphics:mask_1_graphics_114,x:276.5,y:165}).wait(1).to({graphics:mask_1_graphics_115,x:277,y:165}).wait(1).to({graphics:mask_1_graphics_116,x:277.5,y:165}).wait(1).to({graphics:mask_1_graphics_117,x:278,y:165}).wait(1).to({graphics:mask_1_graphics_118,x:278.5,y:165}).wait(1).to({graphics:mask_1_graphics_119,x:279,y:165}).wait(1).to({graphics:mask_1_graphics_120,x:279.5,y:165}).wait(1).to({graphics:mask_1_graphics_121,x:280,y:165}).wait(1).to({graphics:mask_1_graphics_122,x:280.5,y:165}).wait(1).to({graphics:mask_1_graphics_123,x:281,y:165}).wait(1).to({graphics:mask_1_graphics_124,x:281.5,y:165}).wait(1).to({graphics:mask_1_graphics_125,x:282,y:165}).wait(1).to({graphics:mask_1_graphics_126,x:282.5,y:165}).wait(1).to({graphics:mask_1_graphics_127,x:283,y:165}).wait(1).to({graphics:mask_1_graphics_128,x:283.5,y:165}).wait(1).to({graphics:mask_1_graphics_129,x:284,y:165}).wait(1).to({graphics:mask_1_graphics_130,x:284.5,y:165}).wait(1).to({graphics:mask_1_graphics_131,x:285,y:165}).wait(1).to({graphics:mask_1_graphics_132,x:285.5,y:165}).wait(1).to({graphics:mask_1_graphics_133,x:286,y:165}).wait(1).to({graphics:mask_1_graphics_134,x:286.5,y:165}).wait(1).to({graphics:mask_1_graphics_135,x:287,y:165}).wait(1).to({graphics:mask_1_graphics_136,x:287.5,y:165}).wait(1).to({graphics:mask_1_graphics_137,x:288,y:165}).wait(1).to({graphics:mask_1_graphics_138,x:288.5,y:165}).wait(1).to({graphics:mask_1_graphics_139,x:289,y:165}).wait(1).to({graphics:mask_1_graphics_140,x:289.5,y:165}).wait(1).to({graphics:mask_1_graphics_141,x:290,y:165}).wait(1).to({graphics:mask_1_graphics_142,x:290.5,y:165}).wait(1).to({graphics:mask_1_graphics_143,x:291,y:165}).wait(1).to({graphics:mask_1_graphics_144,x:291.5,y:165}).wait(1).to({graphics:mask_1_graphics_145,x:292,y:165}).wait(1).to({graphics:mask_1_graphics_146,x:292.5,y:165}).wait(1).to({graphics:mask_1_graphics_147,x:293,y:165}).wait(1).to({graphics:mask_1_graphics_148,x:293.5,y:165}).wait(1).to({graphics:mask_1_graphics_149,x:294,y:165}).wait(1).to({graphics:mask_1_graphics_150,x:294.5,y:165}).wait(1).to({graphics:mask_1_graphics_151,x:295,y:165}).wait(1).to({graphics:mask_1_graphics_152,x:295.5,y:165}).wait(1).to({graphics:mask_1_graphics_153,x:296,y:165}).wait(1).to({graphics:mask_1_graphics_154,x:296.5,y:165}).wait(1).to({graphics:mask_1_graphics_155,x:297,y:165}).wait(1).to({graphics:mask_1_graphics_156,x:297.5,y:165}).wait(1).to({graphics:mask_1_graphics_157,x:298,y:165}).wait(1).to({graphics:mask_1_graphics_158,x:298.5,y:165}).wait(1).to({graphics:mask_1_graphics_159,x:299,y:165}).wait(1).to({graphics:mask_1_graphics_160,x:299.5,y:165}).wait(1).to({graphics:mask_1_graphics_161,x:300,y:165}).wait(1).to({graphics:mask_1_graphics_162,x:300.5,y:165}).wait(1).to({graphics:mask_1_graphics_163,x:301,y:165}).wait(1).to({graphics:mask_1_graphics_164,x:301.5,y:165}).wait(1).to({graphics:mask_1_graphics_165,x:302,y:165}).wait(1).to({graphics:mask_1_graphics_166,x:302.5,y:165}).wait(1).to({graphics:mask_1_graphics_167,x:303,y:165}).wait(1).to({graphics:mask_1_graphics_168,x:303.5,y:165}).wait(1).to({graphics:mask_1_graphics_169,x:304,y:165}).wait(1).to({graphics:mask_1_graphics_170,x:304.5,y:165}).wait(1).to({graphics:mask_1_graphics_171,x:305,y:165}).wait(1).to({graphics:mask_1_graphics_172,x:305.5,y:165}).wait(1).to({graphics:mask_1_graphics_173,x:306,y:165}).wait(1).to({graphics:mask_1_graphics_174,x:306.5,y:165}).wait(1).to({graphics:mask_1_graphics_175,x:307,y:165}).wait(1).to({graphics:mask_1_graphics_176,x:307.5,y:165}).wait(1).to({graphics:mask_1_graphics_177,x:308,y:165}).wait(1).to({graphics:mask_1_graphics_178,x:308.5,y:165}).wait(1).to({graphics:mask_1_graphics_179,x:309,y:165}).wait(1).to({graphics:mask_1_graphics_180,x:309.5,y:165}).wait(1).to({graphics:mask_1_graphics_181,x:310,y:165}).wait(1).to({graphics:mask_1_graphics_182,x:310.5,y:165}).wait(1).to({graphics:mask_1_graphics_183,x:311,y:165}).wait(1).to({graphics:mask_1_graphics_184,x:311.5,y:165}).wait(1).to({graphics:mask_1_graphics_185,x:312,y:165}).wait(1).to({graphics:mask_1_graphics_186,x:312.5,y:165}).wait(1).to({graphics:mask_1_graphics_187,x:313,y:165}).wait(1).to({graphics:mask_1_graphics_188,x:313.5,y:165}).wait(1).to({graphics:mask_1_graphics_189,x:314,y:165}).wait(1).to({graphics:mask_1_graphics_190,x:314.5,y:165}).wait(1).to({graphics:mask_1_graphics_191,x:315,y:165}).wait(1).to({graphics:mask_1_graphics_192,x:315.5,y:165}).wait(1).to({graphics:mask_1_graphics_193,x:316,y:165}).wait(1).to({graphics:mask_1_graphics_194,x:316.5,y:165}).wait(1).to({graphics:mask_1_graphics_195,x:317,y:165}).wait(1).to({graphics:mask_1_graphics_196,x:317.5,y:165}).wait(1).to({graphics:mask_1_graphics_197,x:318,y:165}).wait(1).to({graphics:mask_1_graphics_198,x:318.5,y:165}).wait(1).to({graphics:mask_1_graphics_199,x:319,y:165}).wait(1).to({graphics:mask_1_graphics_200,x:319.5,y:165}).wait(1).to({graphics:mask_1_graphics_201,x:320,y:165}).wait(1).to({graphics:mask_1_graphics_202,x:320.5,y:165}).wait(1).to({graphics:mask_1_graphics_203,x:321,y:165}).wait(1).to({graphics:mask_1_graphics_204,x:321.5,y:165}).wait(1).to({graphics:mask_1_graphics_205,x:322,y:165}).wait(1).to({graphics:mask_1_graphics_206,x:322.5,y:165}).wait(1).to({graphics:mask_1_graphics_207,x:323,y:165}).wait(1).to({graphics:mask_1_graphics_208,x:323.5,y:165}).wait(1).to({graphics:mask_1_graphics_209,x:324,y:165}).wait(1).to({graphics:mask_1_graphics_210,x:324.5,y:165}).wait(1).to({graphics:mask_1_graphics_211,x:325,y:165}).wait(1).to({graphics:mask_1_graphics_212,x:325.5,y:165}).wait(1).to({graphics:mask_1_graphics_213,x:326,y:165}).wait(1).to({graphics:mask_1_graphics_214,x:326.5,y:165}).wait(1).to({graphics:mask_1_graphics_215,x:327,y:165}).wait(1).to({graphics:mask_1_graphics_216,x:327.5,y:165}).wait(1).to({graphics:mask_1_graphics_217,x:328,y:165}).wait(1).to({graphics:mask_1_graphics_218,x:328.5,y:165}).wait(1).to({graphics:mask_1_graphics_219,x:329,y:165}).wait(1).to({graphics:mask_1_graphics_220,x:329.5,y:165}).wait(1).to({graphics:mask_1_graphics_221,x:330,y:165}).wait(1).to({graphics:mask_1_graphics_222,x:330.5,y:165}).wait(1).to({graphics:mask_1_graphics_223,x:331,y:165}).wait(1).to({graphics:mask_1_graphics_224,x:331.5,y:165}).wait(1).to({graphics:mask_1_graphics_225,x:332,y:165}).wait(1).to({graphics:mask_1_graphics_226,x:332.5,y:165}).wait(1).to({graphics:mask_1_graphics_227,x:333,y:165}).wait(1).to({graphics:mask_1_graphics_228,x:333.5,y:165}).wait(1).to({graphics:mask_1_graphics_229,x:334,y:165}).wait(1).to({graphics:mask_1_graphics_230,x:334.5,y:165}).wait(1).to({graphics:mask_1_graphics_231,x:335,y:165}).wait(1).to({graphics:mask_1_graphics_232,x:335.5,y:165}).wait(1).to({graphics:mask_1_graphics_233,x:336,y:165}).wait(1).to({graphics:mask_1_graphics_234,x:336.5,y:165}).wait(1).to({graphics:mask_1_graphics_235,x:337,y:165}).wait(1).to({graphics:mask_1_graphics_236,x:337.5,y:165}).wait(1).to({graphics:mask_1_graphics_237,x:338,y:165}).wait(1).to({graphics:mask_1_graphics_238,x:338.5,y:165}).wait(1).to({graphics:mask_1_graphics_239,x:339,y:165}).wait(1).to({graphics:mask_1_graphics_240,x:339.5,y:165}).wait(1).to({graphics:mask_1_graphics_241,x:340,y:165}).wait(1).to({graphics:mask_1_graphics_242,x:340.5,y:165}).wait(1).to({graphics:mask_1_graphics_243,x:341,y:165}).wait(1).to({graphics:mask_1_graphics_244,x:341.5,y:165}).wait(1).to({graphics:mask_1_graphics_245,x:342,y:165}).wait(1).to({graphics:mask_1_graphics_246,x:342.5,y:165}).wait(1).to({graphics:mask_1_graphics_247,x:343,y:165}).wait(1).to({graphics:mask_1_graphics_248,x:343.5,y:165}).wait(1).to({graphics:mask_1_graphics_249,x:344,y:165}).wait(1).to({graphics:mask_1_graphics_250,x:344.5,y:165}).wait(1).to({graphics:mask_1_graphics_251,x:345,y:165}).wait(1).to({graphics:mask_1_graphics_252,x:345.5,y:165}).wait(1).to({graphics:mask_1_graphics_253,x:346,y:165}).wait(1).to({graphics:mask_1_graphics_254,x:346.5,y:165}).wait(1).to({graphics:mask_1_graphics_255,x:347,y:165}).wait(1).to({graphics:mask_1_graphics_256,x:347.5,y:165}).wait(1).to({graphics:mask_1_graphics_257,x:348,y:165}).wait(1).to({graphics:mask_1_graphics_258,x:348.5,y:165}).wait(1).to({graphics:mask_1_graphics_259,x:349,y:165}).wait(1).to({graphics:mask_1_graphics_260,x:349.5,y:165}).wait(1).to({graphics:mask_1_graphics_261,x:350,y:165}).wait(1).to({graphics:mask_1_graphics_262,x:350.5,y:165}).wait(1).to({graphics:mask_1_graphics_263,x:351,y:165}).wait(1).to({graphics:mask_1_graphics_264,x:351.5,y:165}).wait(1).to({graphics:mask_1_graphics_265,x:352,y:165}).wait(1).to({graphics:mask_1_graphics_266,x:352.5,y:165}).wait(1).to({graphics:mask_1_graphics_267,x:353,y:165}).wait(1).to({graphics:mask_1_graphics_268,x:353.5,y:165}).wait(1).to({graphics:mask_1_graphics_269,x:354,y:165}).wait(1).to({graphics:mask_1_graphics_270,x:354.5,y:165}).wait(1).to({graphics:mask_1_graphics_271,x:355,y:165}).wait(1).to({graphics:mask_1_graphics_272,x:355.5,y:165}).wait(1).to({graphics:mask_1_graphics_273,x:356,y:165}).wait(1).to({graphics:mask_1_graphics_274,x:356.5,y:165}).wait(1).to({graphics:mask_1_graphics_275,x:357,y:165}).wait(1).to({graphics:mask_1_graphics_276,x:357.5,y:165}).wait(1).to({graphics:mask_1_graphics_277,x:358,y:165}).wait(1).to({graphics:mask_1_graphics_278,x:358.5,y:165}).wait(1).to({graphics:mask_1_graphics_279,x:359,y:165}).wait(1).to({graphics:mask_1_graphics_280,x:359.5,y:165}).wait(1).to({graphics:mask_1_graphics_281,x:360,y:165}).wait(1).to({graphics:mask_1_graphics_282,x:360.5,y:165}).wait(1).to({graphics:mask_1_graphics_283,x:361,y:165}).wait(1).to({graphics:mask_1_graphics_284,x:361.5,y:165}).wait(1).to({graphics:mask_1_graphics_285,x:362,y:165}).wait(1).to({graphics:mask_1_graphics_286,x:362.5,y:165}).wait(1).to({graphics:mask_1_graphics_287,x:363,y:165}).wait(1).to({graphics:mask_1_graphics_288,x:363.5,y:165}).wait(1).to({graphics:mask_1_graphics_289,x:364,y:165}).wait(1).to({graphics:mask_1_graphics_290,x:364.5,y:165}).wait(1).to({graphics:mask_1_graphics_291,x:365,y:165}).wait(1).to({graphics:mask_1_graphics_292,x:365.5,y:165}).wait(1).to({graphics:mask_1_graphics_293,x:366,y:165}).wait(1).to({graphics:mask_1_graphics_294,x:366.5,y:165}).wait(1).to({graphics:mask_1_graphics_295,x:367,y:165}).wait(1).to({graphics:mask_1_graphics_296,x:367.5,y:165}).wait(1).to({graphics:mask_1_graphics_297,x:368,y:165}).wait(1).to({graphics:mask_1_graphics_298,x:368.5,y:165}).wait(1).to({graphics:mask_1_graphics_299,x:369,y:165}).wait(1).to({graphics:mask_1_graphics_300,x:369.5,y:165}).wait(1).to({graphics:mask_1_graphics_301,x:370,y:165}).wait(1).to({graphics:mask_1_graphics_302,x:370.5,y:165}).wait(1).to({graphics:mask_1_graphics_303,x:371,y:165}).wait(1).to({graphics:mask_1_graphics_304,x:371.5,y:165}).wait(1).to({graphics:mask_1_graphics_305,x:372,y:165}).wait(1).to({graphics:mask_1_graphics_306,x:372.5,y:165}).wait(1).to({graphics:mask_1_graphics_307,x:373,y:165}).wait(1).to({graphics:mask_1_graphics_308,x:373.5,y:165}).wait(1).to({graphics:mask_1_graphics_309,x:374,y:165}).wait(1).to({graphics:mask_1_graphics_310,x:374.5,y:165}).wait(1).to({graphics:mask_1_graphics_311,x:375,y:165}).wait(1).to({graphics:mask_1_graphics_312,x:375.5,y:165}).wait(1).to({graphics:mask_1_graphics_313,x:376,y:165}).wait(1).to({graphics:mask_1_graphics_314,x:376.5,y:165}).wait(1).to({graphics:mask_1_graphics_315,x:377,y:165}).wait(1).to({graphics:mask_1_graphics_316,x:377.5,y:165}).wait(1).to({graphics:mask_1_graphics_317,x:378,y:165}).wait(1).to({graphics:mask_1_graphics_318,x:378.5,y:165}).wait(1).to({graphics:mask_1_graphics_319,x:379,y:165}).wait(1).to({graphics:mask_1_graphics_320,x:379.5,y:165}).wait(1).to({graphics:mask_1_graphics_321,x:380,y:165}).wait(1).to({graphics:mask_1_graphics_322,x:380.5,y:165}).wait(1).to({graphics:mask_1_graphics_323,x:381,y:165}).wait(1).to({graphics:mask_1_graphics_324,x:381.5,y:165}).wait(1).to({graphics:mask_1_graphics_325,x:382,y:165}).wait(1).to({graphics:mask_1_graphics_326,x:382.5,y:165}).wait(1).to({graphics:mask_1_graphics_327,x:383,y:165}).wait(1).to({graphics:mask_1_graphics_328,x:383.5,y:165}).wait(1).to({graphics:mask_1_graphics_329,x:384,y:165}).wait(1).to({graphics:mask_1_graphics_330,x:384.5,y:165}).wait(1).to({graphics:mask_1_graphics_331,x:385,y:165}).wait(1).to({graphics:mask_1_graphics_332,x:385.5,y:165}).wait(1).to({graphics:mask_1_graphics_333,x:386,y:165}).wait(1).to({graphics:mask_1_graphics_334,x:386.5,y:165}).wait(1).to({graphics:mask_1_graphics_335,x:387,y:165}).wait(1).to({graphics:mask_1_graphics_336,x:387.5,y:165}).wait(1).to({graphics:mask_1_graphics_337,x:388,y:165}).wait(1).to({graphics:mask_1_graphics_338,x:388.5,y:165}).wait(1).to({graphics:mask_1_graphics_339,x:389,y:165}).wait(1).to({graphics:mask_1_graphics_340,x:389.5,y:165}).wait(1).to({graphics:mask_1_graphics_341,x:390,y:165}).wait(1).to({graphics:mask_1_graphics_342,x:390.5,y:165}).wait(1).to({graphics:mask_1_graphics_343,x:391,y:165}).wait(1).to({graphics:mask_1_graphics_344,x:391.5,y:165}).wait(1).to({graphics:mask_1_graphics_345,x:392,y:165}).wait(1).to({graphics:mask_1_graphics_346,x:392.5,y:165}).wait(1).to({graphics:mask_1_graphics_347,x:393,y:165}).wait(1).to({graphics:mask_1_graphics_348,x:393.5,y:165}).wait(1).to({graphics:mask_1_graphics_349,x:394,y:165}).wait(1).to({graphics:mask_1_graphics_350,x:394.5,y:165}).wait(1).to({graphics:mask_1_graphics_351,x:395,y:165}).wait(1).to({graphics:mask_1_graphics_352,x:395.5,y:165}).wait(1).to({graphics:mask_1_graphics_353,x:396,y:165}).wait(1).to({graphics:mask_1_graphics_354,x:396.5,y:165}).wait(1).to({graphics:mask_1_graphics_355,x:397,y:165}).wait(1).to({graphics:mask_1_graphics_356,x:397.5,y:165}).wait(1).to({graphics:mask_1_graphics_357,x:398,y:165}).wait(1).to({graphics:mask_1_graphics_358,x:398.5,y:165}).wait(1).to({graphics:mask_1_graphics_359,x:399,y:165}).wait(1).to({graphics:mask_1_graphics_360,x:399.5,y:165}).wait(1).to({graphics:mask_1_graphics_361,x:400,y:165}).wait(1).to({graphics:mask_1_graphics_362,x:400.5,y:165}).wait(1).to({graphics:mask_1_graphics_363,x:401,y:165}).wait(1).to({graphics:mask_1_graphics_364,x:401.5,y:165}).wait(1).to({graphics:mask_1_graphics_365,x:402,y:165}).wait(1).to({graphics:mask_1_graphics_366,x:402.5,y:165}).wait(1).to({graphics:mask_1_graphics_367,x:403,y:165}).wait(1).to({graphics:mask_1_graphics_368,x:403.5,y:165}).wait(1).to({graphics:mask_1_graphics_369,x:404,y:165}).wait(1).to({graphics:mask_1_graphics_370,x:404.5,y:165}).wait(1).to({graphics:mask_1_graphics_371,x:405,y:165}).wait(1).to({graphics:mask_1_graphics_372,x:405.5,y:165}).wait(1).to({graphics:mask_1_graphics_373,x:406,y:165}).wait(1).to({graphics:mask_1_graphics_374,x:406.5,y:165}).wait(1).to({graphics:mask_1_graphics_375,x:407,y:165}).wait(1).to({graphics:mask_1_graphics_376,x:407.5,y:165}).wait(1).to({graphics:mask_1_graphics_377,x:408,y:165}).wait(1).to({graphics:mask_1_graphics_378,x:408.5,y:165}).wait(1).to({graphics:mask_1_graphics_379,x:409,y:165}).wait(1).to({graphics:mask_1_graphics_380,x:409.5,y:165}).wait(1).to({graphics:mask_1_graphics_381,x:410,y:165}).wait(1).to({graphics:mask_1_graphics_382,x:410.5,y:165}).wait(1).to({graphics:mask_1_graphics_383,x:411,y:165}).wait(1).to({graphics:mask_1_graphics_384,x:411.5,y:165}).wait(1).to({graphics:mask_1_graphics_385,x:412,y:165}).wait(1).to({graphics:mask_1_graphics_386,x:412.5,y:165}).wait(1).to({graphics:mask_1_graphics_387,x:413,y:165}).wait(1).to({graphics:mask_1_graphics_388,x:413.5,y:165}).wait(1).to({graphics:mask_1_graphics_389,x:414,y:165}).wait(1).to({graphics:mask_1_graphics_390,x:414.5,y:165}).wait(1).to({graphics:mask_1_graphics_391,x:415,y:165}).wait(1).to({graphics:mask_1_graphics_392,x:415.5,y:165}).wait(1).to({graphics:mask_1_graphics_393,x:416,y:165}).wait(1).to({graphics:mask_1_graphics_394,x:416.5,y:165}).wait(1).to({graphics:mask_1_graphics_395,x:417,y:165}).wait(1).to({graphics:mask_1_graphics_396,x:417.5,y:165}).wait(1).to({graphics:mask_1_graphics_397,x:418,y:165}).wait(1).to({graphics:mask_1_graphics_398,x:418.5,y:165}).wait(1).to({graphics:mask_1_graphics_399,x:419,y:165}).wait(1).to({graphics:mask_1_graphics_400,x:419.5,y:165}).wait(1).to({graphics:mask_1_graphics_401,x:420,y:165}).wait(1).to({graphics:mask_1_graphics_402,x:420.5,y:165}).wait(1).to({graphics:mask_1_graphics_403,x:421,y:165}).wait(1).to({graphics:mask_1_graphics_404,x:421.5,y:165}).wait(1).to({graphics:mask_1_graphics_405,x:422,y:165}).wait(1).to({graphics:mask_1_graphics_406,x:422.5,y:165}).wait(1).to({graphics:mask_1_graphics_407,x:423,y:165}).wait(1).to({graphics:mask_1_graphics_408,x:423.5,y:165}).wait(1).to({graphics:mask_1_graphics_409,x:424,y:165}).wait(1).to({graphics:mask_1_graphics_410,x:424.5,y:165}).wait(1).to({graphics:mask_1_graphics_411,x:425,y:165}).wait(1).to({graphics:mask_1_graphics_412,x:425.5,y:165}).wait(1).to({graphics:mask_1_graphics_413,x:426,y:165}).wait(1).to({graphics:mask_1_graphics_414,x:426.5,y:165}).wait(1).to({graphics:mask_1_graphics_415,x:427,y:165}).wait(1).to({graphics:mask_1_graphics_416,x:427.5,y:165}).wait(1).to({graphics:mask_1_graphics_417,x:428,y:165}).wait(1).to({graphics:mask_1_graphics_418,x:428.5,y:165}).wait(1).to({graphics:mask_1_graphics_419,x:429,y:165}).wait(1).to({graphics:mask_1_graphics_420,x:429.5,y:165}).wait(1).to({graphics:mask_1_graphics_421,x:430,y:165}).wait(1).to({graphics:mask_1_graphics_422,x:430.5,y:165}).wait(1).to({graphics:mask_1_graphics_423,x:431,y:165}).wait(1).to({graphics:mask_1_graphics_424,x:431.5,y:165}).wait(1).to({graphics:mask_1_graphics_425,x:432,y:165}).wait(1).to({graphics:mask_1_graphics_426,x:432.5,y:165}).wait(1).to({graphics:mask_1_graphics_427,x:433,y:165}).wait(1).to({graphics:mask_1_graphics_428,x:433.5,y:165}).wait(1).to({graphics:mask_1_graphics_429,x:434,y:165}).wait(1).to({graphics:mask_1_graphics_430,x:434.5,y:165}).wait(1).to({graphics:mask_1_graphics_431,x:435,y:165}).wait(1).to({graphics:mask_1_graphics_432,x:435.5,y:165}).wait(1).to({graphics:mask_1_graphics_433,x:436,y:165}).wait(1).to({graphics:mask_1_graphics_434,x:436.5,y:165}).wait(1).to({graphics:mask_1_graphics_435,x:437,y:165}).wait(1).to({graphics:mask_1_graphics_436,x:437.5,y:165}).wait(1).to({graphics:mask_1_graphics_437,x:438,y:165}).wait(1).to({graphics:mask_1_graphics_438,x:438.5,y:165}).wait(1).to({graphics:mask_1_graphics_439,x:439,y:165}).wait(1).to({graphics:mask_1_graphics_440,x:439.5,y:165}).wait(1).to({graphics:mask_1_graphics_441,x:440,y:165}).wait(1));

	// t2
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(220,165);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(441));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(220,165,440,330);
// library properties:
lib.properties = {
	id: '5466AA4EC20B4A179963B476B69A5184',
	width: 440,
	height: 330,
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