import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { updatesPosts } from './updatesData';

const UpdatesIndex: React.FC = () => {
    const featuredPost = updatesPosts[0]; // First post as featured
    const regularPosts = updatesPosts.slice(1); // Rest of the posts

    return (
        <section className="pt-32 pb-20 px-6 bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
            <Helmet>
                <title>Updates | Sizan Smith</title>
                <meta name="description" content="Personal updates, tutorials, and deep-dives into motion design and technology." />
            </Helmet>

            <main className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-4 text-slate-900 dark:text-white">
                            Sizan<span className="text-primary">.</span> <span className="text-slate-400 dark:text-slate-600">Updates</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-light">
                            Exploring the intersection of motion design, technology, and visual storytelling.
                        </p>
                    </motion.div>
                </header>

                {/* Featured Post */}
                <section className="mb-24">
                    <div className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row h-auto lg:h-[500px]">
                        <div className="lg:w-3/5 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                            <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600">
                                <span className="text-2xl font-bold">Featured Image</span>
                            </div>
                        </div>
                        <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Featured</span>
                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{featuredPost.date}</span>
                            </div>
                            <Link to={`/updates/${featuredPost.slug}`}>
                                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors cursor-pointer leading-tight text-slate-900 dark:text-white">
                                    {featuredPost.title}
                                </h2>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4">
                                <Link
                                    to={`/updates/${featuredPost.slug}`}
                                    className="font-bold border-b-2 border-primary pb-1 flex items-center gap-2 hover:gap-4 transition-all group/link text-slate-900 dark:text-white"
                                >
                                    READ ARTICLE <span className="material-icons text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {regularPosts.map((post) => (
                        <article key={post.id} className="group flex flex-col">
                            <div className="aspect-video mb-6 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                                <span className="text-slate-400 dark:text-slate-600 font-semibold">Image</span>
                            </div>
                            <div className="flex items-center gap-4 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                <span className="text-primary">{post.category}</span>
                                <span>•</span>
                                <span>5 MIN READ</span>
                            </div>
                            <Link to={`/updates/${post.slug}`}>
                                <h3 className="font-heading text-2xl font-bold mb-4 leading-snug group-hover:text-primary transition-colors cursor-pointer text-slate-900 dark:text-white">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <span className="text-xs text-slate-400 font-medium italic">{post.date}</span>
                                <span className="material-icons opacity-0 group-hover:opacity-100 transition-opacity text-primary">add</span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4">
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                        <span className="material-icons text-slate-900 dark:text-white">chevron_left</span>
                    </button>
                    <span className="font-bold text-sm tracking-widest px-6 uppercase text-slate-900 dark:text-white">Page 01 of 01</span>
                    <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-primary text-black hover:scale-105 transition-transform">
                        <span className="material-icons">chevron_right</span>
                    </button>
                </div>
            </main>
        </section>
    );
};

export default UpdatesIndex;
