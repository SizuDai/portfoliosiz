
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const Labs: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const concept = await geminiService.generateMotionIdea(prompt);
    setResult(concept || "Concept generation failed.");
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-20">
        <h1 className="font-display text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-4 dark:text-white">
          Experimental <span className="text-primary">Lab</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
          Where AI meets motion design. Use the AI Assistant to brainstorm your next project concept.
        </p>
      </header>

      <section className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl">
            <h2 className="font-heading text-2xl font-bold mb-6 dark:text-white">AI Motion Assistant</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
              Describe a project vibe, a brand, or a specific visual requirement, and Gemini will generate a high-level motion concept.
            </p>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A minimalist tech brand reveal with glassmorphism and fluid physics..."
              className="w-full h-32 bg-slate-50 dark:bg-black border border-slate-200 dark:border-slate-700 rounded-xl p-4 focus:ring-primary focus:border-primary dark:text-white resize-none mb-6"
            />
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-primary text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:scale-100"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  Thinking...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Generate Concept
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
              <span className="material-symbols-outlined text-primary mb-4">movie</span>
              <h3 className="font-bold text-sm mb-2 dark:text-white">Procedural Systems</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Developing AE expressions for complex data viz.</p>
            </div>
            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50">
              <span className="material-symbols-outlined text-primary mb-4">gesture</span>
              <h3 className="font-bold text-sm mb-2 dark:text-white">Fluid Dynamics</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Simulating natural movement through code.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 min-h-[400px] border border-slate-800 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Terminal Output</span>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto font-mono text-sm leading-relaxed custom-scrollbar">
            {result ? (
              <div className="prose prose-invert prose-sm max-w-none">
                {result.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 italic">
                {loading ? 'Awaiting AI response...' : '> Ready for input...'}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labs;
