import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Code2, Search, Filter } from 'lucide-react';

interface Expression {
  title: string;
  description: string;
  code: string;
  tags: string[];
  category: 'Physics' | 'Looping' | 'Utility' | 'Text' | '3D' | 'Color' | 'Time';
}

const expressions: Expression[] = [
  // --- PHYSICS & MOVEMENT ---
  {
    title: "Inertial Bounce",
    description: "The holy grail of AE expressions. Adds a natural decay bounce to any keyframed property.",
    tags: ["bounce", "overshoot", "decay", "spring"],
    category: "Physics",
    code: `amp = .1;
freq = 2.0;
decay = 2.0;
n = 0;
if (numKeys > 0){
  n = nearestKey(time).index;
  if (key(n).time > time){
    n--;
  }
}
if (n == 0){ t = 0; }
else{
  t = time - key(n).time;
}
if (n > 0 && t < 1){
  v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
  value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
}else{value}`
  },
  {
    title: "Squash & Stretch",
    description: "Automatic deformation based on layer velocity. Great for cartoon movement.",
    tags: ["cartoon", "impact", "scale"],
    category: "Physics",
    code: `maxDev = 13; // max deviation in pixels
spd = Math.sqrt(Math.pow(velocity[0], 2) + Math.pow(velocity[1], 2));
n = spd / 15;
if (n > maxDev) n = maxDev;
s = value[0] + n;
[s, value[0] * value[1] / s]`
  },
  {
    title: "Pendulum Swing",
    description: "Swings rotation back and forth with natural decay.",
    tags: ["swing", "rotate", "physics"],
    category: "Physics",
    code: `velocity = 50; 
amplitude = 30; 
decay = 1.0; 
amplitude * Math.sin(velocity*time)/Math.exp(decay*time)`
  },
  {
    title: "Wiggle (Standard)",
    description: "Randomly vibrates a property. (Frequency, Amplitude).",
    tags: ["shake", "random", "noise"],
    category: "Physics",
    code: `freq = 2; // times per second
amp = 50; // amount
wiggle(freq, amp);`
  },
  {
    title: "Wiggle X Only",
    description: "Wiggle only the X axis of Position.",
    tags: ["position", "axis", "random"],
    category: "Physics",
    code: `var w = wiggle(3, 50);
[w[0], value[1]];`
  },
  {
    title: "Wiggle Y Only",
    description: "Wiggle only the Y axis of Position.",
    tags: ["position", "axis", "random"],
    category: "Physics",
    code: `var w = wiggle(3, 50);
[value[0], w[1]];`
  },
  {
    title: "Constant Spin",
    description: "Continuous rotation without keyframes.",
    tags: ["rotate", "turn", "loop"],
    category: "Physics",
    code: `// 360 degrees per second
time * 360`
  },

  // --- LOOPING ---
  {
    title: "Loop Cycle",
    description: "Creates an infinite loop of your keyframes from start to end.",
    tags: ["repeat", "infinite"],
    category: "Looping",
    code: `loopOut("cycle");`
  },
  {
    title: "Loop PingPong",
    description: "Loops animation back and forth (A->B->A). Seamless.",
    tags: ["boomerang", "reverse"],
    category: "Looping",
    code: `loopOut("pingpong");`
  },
  {
    title: "Loop Continue",
    description: "Continues the animation at the same speed as the last keyframe.",
    tags: ["linear", "movement"],
    category: "Looping",
    code: `loopOut("continue");`
  },
  {
    title: "Loop Path (Mask/Shape)",
    description: "Loops a path shape (requires 'cycle' mode).",
    tags: ["shape", "mask", "path"],
    category: "Looping",
    code: `loopOut("cycle", 0);`
  },

  // --- UTILITY & LOGIC ---
  {
    title: "Linear Interpolation",
    description: "Maps one range of values to another (e.g., map Rotation to Opacity).",
    tags: ["map", "range", "math"],
    category: "Utility",
    code: `// Maps rotation 0-90 to opacity 0-100
linear(transform.rotation, 0, 90, 0, 100)`
  },
  {
    title: "Ease Interpolation",
    description: "Same as Linear, but with smooth easing.",
    tags: ["smooth", "map", "math"],
    category: "Utility",
    code: `ease(time, 0, 2, 0, 100)`
  },
  {
    title: "Clamp Value",
    description: "Restricts a value between a minimum and maximum.",
    tags: ["limit", "restrict", "math"],
    category: "Utility",
    code: `minVal = 0;
maxVal = 100;
clamp(value, minVal, maxVal)`
  },
  {
    title: "Index Delay (Follow Leader)",
    description: "Offsets animation based on layer order. Great for 'snaking' layers.",
    tags: ["offset", "echo", "snake"],
    category: "Utility",
    code: `delay = 5; // frames
d = delay * thisComp.frameDuration * (index - 1);
thisComp.layer(1).transform.position.valueAtTime(time - d)`
  },
  {
    title: "Snap to Grid",
    description: "Quantizes position to a pixel grid (8-bit/Pixel art style).",
    tags: ["pixel", "8bit", "quantize"],
    category: "Utility",
    code: `gridSize = 50;
x = Math.round(transform.position[0]/gridSize)*gridSize;
y = Math.round(transform.position[1]/gridSize)*gridSize;
[x,y]`
  },
  {
    title: "Maintain Scale (Parent)",
    description: "Keeps a layer's visual size constant even if its parent is scaled.",
    tags: ["rigging", "parenting", "fix"],
    category: "Utility",
    code: `s = [];
ps = parent.transform.scale.value;
for (i = 0; i < ps.length; i++){
  s[i] = value[i]*100/ps[i];
}
s`
  },
  {
    title: "Maintain Stroke Width",
    description: "Keeps stroke width constant when the layer is scaled.",
    tags: ["shape", "stroke", "scale"],
    category: "Utility",
    code: `value / length(thisLayer.transform.scale) * 100`
  },
  {
    title: "Layer Fade In/Out",
    description: "Automatically fades opacity at the layer's In and Out points.",
    tags: ["opacity", "transition", "auto"],
    category: "Utility",
    code: `fadeIn = .5; // seconds
fadeOut = .5;
if (time < inPoint + fadeIn) ease(time, inPoint, inPoint + fadeIn, 0, 100)
else if (time > outPoint - fadeOut) ease(time, outPoint - fadeOut, outPoint, 100, 0)
else 100`
  },
  {
    title: "Checkbox Control",
    description: "Link opacity or visibility to a checkbox control.",
    tags: ["ui", "control", "switch"],
    category: "Utility",
    code: `if (effect("Checkbox Control")("Checkbox") == 1) 100 else 0`
  },

  // --- TEXT ---
  {
    title: "Auto-Resize Box",
    description: "Creates a background box that scales with text (SourceRectAtTime).",
    tags: ["ui", "responsive", "box"],
    category: "Text",
    code: `// Apply to Rectangle Size
s = thisComp.layer("Text Layer");
w = s.sourceRectAtTime().width;
h = s.sourceRectAtTime().height;
pad = 40;
[w + pad, h + pad]`
  },
  {
    title: "Box Anchor Point Fix",
    description: "Keeps the anchor point centered on an auto-resizing box.",
    tags: ["anchor", "center", "ui"],
    category: "Text",
    code: `// Apply to Rectangle Position or Anchor Point
s = thisComp.layer("Text Layer");
w = s.sourceRectAtTime().width / 2;
h = s.sourceRectAtTime().height / 2;
l = s.sourceRectAtTime().left;
t = s.sourceRectAtTime().top;
[w+l, h+t]`
  },
  {
    title: "Counting Numbers",
    description: "Increments a number over time.",
    tags: ["counter", "data", "ui"],
    category: "Text",
    code: `startTime = 0;
endTime = 4;
startVal = 0;
endVal = 1000;
val = linear(time, startTime, endTime, startVal, endVal);
Math.floor(val)`
  },
  {
    title: "Currency Format",
    description: "Formats a number with commas and decimals (e.g., $1,200.00).",
    tags: ["money", "dollar", "data"],
    category: "Text",
    code: `val = effect("Slider Control")("Slider");
"$" + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');`
  },
  {
    title: "Typewriter Cursor",
    description: "Adds a blinking cursor to the end of a text string.",
    tags: ["typing", "character", "terminal"],
    category: "Text",
    code: `// Apply to Source Text
txt = value;
cursor = "|";
blinkSpeed = 2;
showCursor = (Math.floor(time * blinkSpeed) % 2 == 0);
if (showCursor) txt + cursor else txt`
  },
  {
    title: "Timecode Display",
    description: "Displays current time as 00:00.",
    tags: ["clock", "time", "ui"],
    category: "Text",
    code: `t = Math.floor(time);
min = Math.floor(t / 60);
sec = t % 60;
if(min < 10) min = "0" + min;
if(sec < 10) sec = "0" + sec;
min + ":" + sec`
  },

  // --- TIME ---
  {
    title: "Posterize Time",
    description: "Reduces the frame rate of a layer for a stop-motion look.",
    tags: ["fps", "stutter", "stopmotion"],
    category: "Time",
    code: `posterizeTime(12); // 12 fps
value`
  },
  {
    title: "Trigger on Marker",
    description: "Triggers an animation (like scale) whenever a marker is passed.",
    tags: ["trigger", "marker", "event"],
    category: "Time",
    code: `n = 0;
if (marker.numKeys > 0) {
  n = marker.nearestKey(time).index;
  if (marker.key(n).time > time) n--;
}
if (n == 0) value else {
  t = time - marker.key(n).time;
  // Add animation logic here, e.g. linear(t, 0, .5, 0, 100)
  100 
}`
  },

  // --- 3D ---
  {
    title: "To Comp (3D to 2D)",
    description: "Attach a 2D layer/effect to a specific point on a 3D layer.",
    tags: ["space", "null", "tracking"],
    category: "3D",
    code: `l = thisComp.layer("3D Layer Name");
l.toComp([0,0,0])`
  },
  {
    title: "Look At (Auto Orient)",
    description: "Forces a layer to always face another layer.",
    tags: ["camera", "target", "aim"],
    category: "3D",
    code: `target = thisComp.layer("Target Name");
lookAt(transform.position, target.transform.position)`
  },
  {
    title: "Distance Between Layers",
    description: "Calculates distance between two layers (useful for proximity effects).",
    tags: ["measure", "proximity", "math"],
    category: "3D",
    code: `p1 = thisComp.layer("Layer A").transform.position;
p2 = thisComp.layer("Layer B").transform.position;
length(p1, p2)`
  },
  {
    title: "Scale by Distance",
    description: "Scales a layer based on how close it is to a camera or another object.",
    tags: ["camera", "proximity", "scale"],
    category: "3D",
    code: `C = thisComp.activeCamera;
dist = length(C.transform.position, transform.position);
// Map distance to scale
linear(dist, 500, 2000, 100, 10)`
  },

  // --- COLOR ---
  {
    title: "Random Color Cycle",
    description: "Changes color randomly at a set interval.",
    tags: ["fill", "strobe", "disco"],
    category: "Color",
    code: `posterizeTime(4); // changes 4 times/sec
random([0,0,0,1], [1,1,1,1])`
  },
  {
    title: "Color Opacity",
    description: "Easily control opacity of a Fill effect via expression.",
    tags: ["rgba", "alpha", "fill"],
    category: "Color",
    code: `c = value;
opacity = 50; // 0-100
[c[0], c[1], c[2], c[3] * (opacity/100)]`
  }
];

const CATEGORIES = ["All", "Physics", "Looping", "Text", "Utility", "3D", "Color", "Time"];

interface ExpressionCardProps {
  expression: Expression;
  index: number;
}

const ExpressionCard: React.FC<ExpressionCardProps> = ({ expression, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(expression.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900 bg-opacity-50 border border-zinc-800 hover:border-brand hover:border-opacity-50 rounded-xl p-6 backdrop-blur-sm transition-colors duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded text-black ${
                expression.category === 'Physics' ? 'bg-blue-400' :
                expression.category === 'Looping' ? 'bg-green-400' :
                expression.category === 'Text' ? 'bg-yellow-400' :
                expression.category === '3D' ? 'bg-purple-400' :
                expression.category === 'Time' ? 'bg-red-400' :
                expression.category === 'Color' ? 'bg-pink-400' :
                'bg-gray-400'
            }`} style={{ fontSize: '10px' }}>
                {expression.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors font-syne">
            {expression.title}
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-zinc-800 bg-opacity-50 text-zinc-400 hover:bg-brand hover:text-black transition-all duration-300 flex-shrink-0 relative z-10"
          title="Copy to clipboard"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>

      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {expression.description}
      </p>

      <div className="relative mt-auto group/code">
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-transparent opacity-0 group-hover/code:opacity-20 blur-lg transition-opacity duration-500" />
        <div className="relative bg-black bg-opacity-50 rounded-lg p-4 border border-white border-opacity-5 font-mono text-xs md:text-sm text-zinc-300 overflow-x-auto custom-scrollbar selection:bg-brand selection:text-black">
          <pre className="whitespace-pre-wrap break-words">
            <code>{expression.code}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

interface ExpressionsOverlayProps {
  onClose: () => void;
}

const ExpressionsOverlay: React.FC<ExpressionsOverlayProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExpressions = useMemo(() => {
    return expressions.filter(exp => {
      const matchesSearch = 
        exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "All" || exp.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-xl overflow-y-auto"
      style={{ zIndex: 9998 }}
    >
      <div className="min-h-screen p-6 md:p-12 lg:p-24">
        <div className="max-w-7xl mx-auto relative">
          {/* Header & Controls */}
          <div className="sticky top-0 z-50 bg-dark bg-opacity-80 backdrop-blur-xl -mx-6 px-6 py-6 md:-mx-12 md:px-12 rounded-b-3xl border-b border-white border-opacity-5 mb-12 shadow-2xl">
             
             <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand text-black rounded-xl flex items-center justify-center shadow-brand">
                        <Code2 size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-syne uppercase leading-none">
                        Essential Expressions
                        </h2>
                        <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest mt-1">
                        After Effects Toolkit
                        </p>
                    </div>
                </div>
                <button
                onClick={onClose}
                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-white hover:text-black transition-all duration-300"
                style={{ transition: 'transform 0.3s, background-color 0.3s, color 0.3s' }}
                >
                <X size={24} />
                </button>
             </div>

             {/* Filter Bar */}
             <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                                activeCategory === cat 
                                ? 'bg-brand text-black border-brand' 
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500 group-focus-within:text-brand transition-colors" size={18} />
                    <input 
                        type="text"
                        placeholder="Filter by name or tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-brand focus:ring-1 focus:ring-yellow-500 focus:ring-opacity-50 transition-all placeholder-zinc-600 font-mono text-sm"
                    />
                </div>
             </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
            <AnimatePresence mode='popLayout'>
                {filteredExpressions.length > 0 ? (
                    filteredExpressions.map((exp, index) => (
                        <ExpressionCard key={exp.title + index} expression={exp} index={index} />
                    ))
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full flex flex-col items-center justify-center py-24 text-zinc-500"
                    >
                        <Filter size={48} className="mb-4 opacity-20" />
                        <p className="uppercase tracking-widest text-sm">No expressions found</p>
                        <button 
                            onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                            className="mt-4 text-brand hover:underline text-sm"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
          </motion.div>

          <div className="text-center pb-12 border-t border-zinc-800 pt-12">
            <p className="text-zinc-600 text-sm font-mono">
              Tip: <span className="bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 border border-zinc-700 mx-1 inline-block">Alt + Click</span> the stopwatch in After Effects to activate expressions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpressionsOverlay;