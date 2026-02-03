
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <SEO />
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

          <a href="https://sizansmith.framer.website/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-black px-10 py-5 font-bold uppercase text-sm tracking-widest transition-all hover:pr-14 hover:bg-primary hover:text-black">
            Enter Portfolio
            <span className="material-symbols-outlined ml-2 absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">north_east</span>
          </a>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl uppercase mb-4 dark:text-white">Latest<br />Blogs</h2>
            <p className="text-slate-500 dark:text-gray-400 max-w-sm">Thoughts, experiments, and insights on motion design and technology.</p>
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
          {BLOG_POSTS.map((post) => (
            <Link to={`/journal/${post.id}`} key={post.id} className="group cursor-pointer block">
              <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-surface-dark mb-6 rounded-xl border border-slate-200 dark:border-white/10">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={post.image}
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{post.category}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-2 dark:text-white group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}

          <Link to="/journal" className="flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-xl aspect-video p-12 group hover:border-primary transition-colors cursor-pointer">
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl mb-4 text-slate-400 group-hover:text-primary transition-colors">auto_stories</span>
              <h4 className="font-display font-bold text-xl uppercase mb-2 dark:text-white">View all blogs</h4>
              <p className="text-sm text-slate-500 mb-6">Explore the full archive.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1">Visit Archive</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
