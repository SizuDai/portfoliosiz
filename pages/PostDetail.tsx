
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

import SEO from '../components/SEO';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <Navigate to="/journal" />;

  // JSON-LD for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      `https://sizan-lamichhane.vercel.app${post.image}`
    ],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": post.author?.name || "Sizan Smith Lamichhane",
      "url": "https://sizan-lamichhane.vercel.app/"
    }]
  };

  // Get related posts based on category, excluding current post
  const relatedPosts = BLOG_POSTS
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  // If not enough related posts, fill with popular posts
  if (relatedPosts.length < 2) {
    const popularPosts = BLOG_POSTS
      .filter(p => p.id !== post.id && !relatedPosts.find(rp => rp.id === p.id))
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...popularPosts);
  }

  return (
    <div className="bg-white dark:bg-background-dark transition-colors duration-300">
      <SEO
        title={post.title}
        description={post.excerpt}
        image={`https://sizan-lamichhane.vercel.app${post.image}`}
        url={`https://sizan-lamichhane.vercel.app/journal/${post.id}`}
        type="article"
        schema={articleSchema}
      />
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">{post.category}</span>
            <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">{post.date}</span>
            {post.views && (
              <span className="flex items-center gap-1 text-slate-400 text-xs font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                {(post.views).toLocaleString()}
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-10">
            {post.author ? (
              <>
                <img alt={post.author.name} className="w-12 h-12 rounded-full object-cover" src={post.author.avatar} />
                <div>
                  <p className="font-semibold text-sm dark:text-white">{post.author.name}</p>
                  <p className="text-slate-400 text-xs">{post.author.role}</p>
                </div>
              </>
            ) : (
              <div>
                <p className="font-semibold text-sm dark:text-white">Sizan Smith Lamichhane</p>
                <p className="text-slate-400 text-xs">Principal Motion Designer</p>
              </div>
            )}
            <div className="ml-auto flex gap-3">
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white">
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white">
                <span className="material-symbols-outlined text-lg">bookmark</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <figure className="mb-16 -mx-6 md:-mx-12">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl">
              <img alt={post.title} className="w-full h-full object-cover" src={post.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <figcaption className="mt-4 px-6 md:px-12 text-center text-slate-500 text-sm italic">The workstation setup: Where the complexity of code meets the fluidity of motion.</figcaption>
          </figure>

          <article className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
            {post.content}
          </article>

          {/* Suggested Blogs */}
          <section className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800">
            <h3 className="font-display text-2xl font-bold mb-8 dark:text-white">Continue Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(suggested => (
                <Link to={`/journal/${suggested.id}`} key={suggested.id} className="group block">
                  <div className="aspect-video mb-4 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
                    <img
                      src={suggested.image}
                      alt={suggested.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <span className="text-primary">{suggested.category}</span>
                    <span>•</span>
                    <span>{suggested.date}</span>
                  </div>
                  <h4 className="font-heading text-xl font-bold group-hover:text-primary transition-colors dark:text-white leading-tight">
                    {suggested.title}
                  </h4>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20 p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold mb-4 dark:text-white">Deep dives, delivered.</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Join 5,000+ motion designers who receive my monthly breakdown of new techniques, tools, and motion studies.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  className="flex-grow bg-white dark:bg-black border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary dark:text-white"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all uppercase tracking-widest text-xs"
                  type="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PostDetail;
