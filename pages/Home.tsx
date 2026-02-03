
import React from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative px-4 py-20">
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none select-none flex items-center justify-center">
          <span className="font-display font-extrabold text-[40vw] leading-none uppercase translate-y-20 dark:text-white">MOTION</span>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="relative mb-12">
            <h1 className="font-display font-extrabold text-7xl md:text-9xl lg:text-[12rem] hero-text uppercase dark:text-white text-slate-900 transition-all">SIZAN</h1>
            <h1 className="font-display font-extrabold text-7xl md:text-9xl lg:text-[12rem] hero-text uppercase text-primary -mt-4 md:-mt-8">SMITH</h1>
          </div>

          <div className="bg-slate-900/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 px-6 py-2 rounded-full mb-8">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">Motion Graphics Designer</span>
          </div>

          <a href="#projects" className="group relative inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-5 font-bold uppercase text-sm tracking-widest transition-all hover:pr-14 hover:bg-primary hover:text-black">
            Enter Portfolio
            <span className="material-symbols-outlined ml-2 absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">north_east</span>
          </a>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-4 dark:text-white">Other<br />Projects</h2>
            <p className="text-slate-500 dark:text-gray-400 max-w-sm">Experimental lab, tools, and motion studies. Pushing the boundaries of visual storytelling.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors dark:text-white">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors dark:text-white">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-surface-dark mb-6 rounded-xl">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 transition-slow group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 border border-black/5 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-sm rounded-lg">
                    <span className="material-symbols-outlined text-4xl mb-2 text-primary">{project.icon}</span>
                    <div className="font-mono text-[10px] text-slate-700 dark:text-gray-400 uppercase tracking-widest">{project.accentText}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1 dark:text-white">{project.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{project.category}</p>
                </div>
                <span className="text-[10px] font-bold border border-slate-200 dark:border-white/20 px-2 py-1 dark:text-gray-400 rounded">{project.year}</span>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default Home;
