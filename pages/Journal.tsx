
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Journal: React.FC = () => {
  const featured = BLOG_POSTS.find(post => post.featured);
  const others = BLOG_POSTS.filter(post => !post.featured);

  if (BLOG_POSTS.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-6 dark:text-white">
          Insights <span className="text-primary">&</span> Ideas
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light mb-8">
          The journal is currently being curated. Check back soon for deep dives into motion design and technology.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
          <span className="material-symbols-outlined">west</span> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-20">
        <h1 className="font-display text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-4 dark:text-white">
          Insights <span className="text-primary">&amp;</span> Ideas
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
          Exploring the intersection of motion design, technology, and visual storytelling through deep-dives and laboratory experiments.
        </p>
      </header>

      {/* Featured Post */}
      {featured && (
        <section className="mb-24">
          <Link to={`/journal/${featured.id}`} className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row h-auto lg:h-[500px]">
            <div className="lg:w-3/5 relative overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={featured.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
            </div>
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Featured</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{featured.date}</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight dark:text-white">
                {featured.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-bold border-b-2 border-primary pb-1 flex items-center gap-2 group-hover:gap-4 transition-all dark:text-white">
                  READ ARTICLE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {others.map((post) => (
          <article key={post.id} className="group flex flex-col">
            <Link to={`/journal/${post.id}`} className="block">
              <div className="aspect-video mb-6 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={post.image}
                />
              </div>
              <div className="flex items-center gap-4 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="text-primary">{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors dark:text-white">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium italic">{post.series}</span>
                <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity text-primary">add</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors dark:text-white">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <span className="font-bold text-sm tracking-widest px-6 uppercase dark:text-white">Page 01 of 05</span>
        <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-primary text-black hover:scale-105 transition-transform">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};


export default Journal;
