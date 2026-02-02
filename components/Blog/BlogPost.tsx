import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from './blogData';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <article className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-dark min-h-screen">
            <Helmet>
                <title>{post.title} | Sizzler Fx</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand mb-8 transition-colors text-sm uppercase tracking-widest font-bold">
                    <ArrowLeft size={16} /> Back to Lab
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                        {post.category} • {post.date}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold font-syne text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div
                        className="prose prose-invert prose-lg max-w-none text-zinc-300 font-inter 
                prose-headings:font-syne prose-headings:text-white prose-a:text-brand hover:prose-a:underline
                prose-code:text-brand prose-code:bg-zinc-900 prose-code:px-1 prose-code:rounded
                prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>
        </article>
    );
};

export default BlogPost;
