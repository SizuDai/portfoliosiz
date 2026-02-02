import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from './blogData';

const BlogIndex: React.FC = () => {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-dark min-h-screen">
            <Helmet>
                <title>Blog & Experimental Lab | Sizzler Fx</title>
                <meta name="description" content="Explore motion graphics tutorials, After Effects scripts, and AI workflow experiments by Sizan Smith Lamichhane." />
            </Helmet>

            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-syne text-white mb-6">
                        Experimental <span className="text-brand">Lab</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-16">
                        Insights, tutorials, and deep dives into the world of Motion Graphics and AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-brand transition-all duration-300 group"
                        >
                            <Link to={`/blog/${post.slug}`} className="block p-8 h-full flex flex-col">
                                <span className="text-brand text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                                    {post.category}
                                </span>
                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors font-syne">
                                    {post.title}
                                </h2>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800">
                                    <span className="text-zinc-500 text-xs">{post.date}</span>
                                    <span className="text-white text-xs font-bold uppercase tracking-wider group-hover:underline">Read Article →</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogIndex;
