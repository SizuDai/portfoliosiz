import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { updatesPosts } from './updatesData';

const UpdatePost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = updatesPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/updates" replace />;
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
            <Helmet>
                <title>{post.title} | Sizan Smith Updates</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            {/* Header */}
            <header className="pt-16 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                            {post.category}
                        </span>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">
                            {post.date}
                        </span>
                    </div>

                    <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-10">
                        <img
                            alt="Sizan Smith Profile"
                            className="w-12 h-12 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLi0Edv-JxREvnqNZ2bySexDmMmXBqqYuQ1f8S6Wv8ebqzdixVLiuQ1jy_hM5DPg1F5aigLJYMRu3YMuu9IGmfJVEdwZ_CBgPfWc5IGG0_B-kaBrPGlnmuzavHlIlLLFygRPnGkWivB9Z87VuWnceLCOVq6rdFuoQqVrQPru3FTwINbYfLTdW1uM6i9Z5g-kHk5hezpFbo3EvobeD8IjiMuVHiYyKTUQUkZR6wfei4ilhyo_VDmIDC_uNFEVsbI7vZ6LJqv_zPCS6W"
                        />
                        <div>
                            <p className="font-semibold text-sm">Sizan Smith Lamichhane</p>
                            <p className="text-slate-400 text-xs">Principal Motion Designer</p>
                        </div>
                        <div className="ml-auto flex gap-3">
                            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </button>
                            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-lg">bookmark</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    <figure className="mb-16 -mx-6 md:-mx-12">
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-2xl">
                            <img
                                alt="Abstract motion graphics workspace"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBczM5A9nrglUNTRMhPUcrQrQ67p76QRKzBeSKy_n5Do8ubMIkqhX3tUivHeBWZTAsMhU12Xx_6FQwsBV91OeWSw357g5NoCnNIvbcLOxucFVASbmVrPrY23wgHn6M9oMWopruttTrfJ1tWcfyV1vFVcgMmqj1LU9oyY3H0spycIegYMKRjlad7JZ9GdCqYFHledtZZeUADMsqB8ROnPMZY_d_pBnKjsWWwEsYh2HVtIXfrhyyxAoi3v9xrXS1a_0ZS5ks7GwlLEIC3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <figcaption className="mt-4 px-6 md:px-12 text-center text-slate-500 text-sm italic">
                            The workstation setup: Where the complexity of code meets the fluidity of motion.
                        </figcaption>
                    </figure>

                    {/* Article Content */}
                    <article className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
                        <p className="lead text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            Motion design is often seen as a purely aesthetic pursuit. We talk about easing,
                            anticipation, and overlap—the principles that bring static shapes to life. But beneath
                            the surface of every professional workflow lies a deeper structure: the economy of motion.
                        </p>

                        <p>
                            In this deep dive, we explore how mathematical expressions and procedural workflows can
                            transform a tedious manual animation process into a dynamic, responsive system. Whether
                            you are building complex UI prototypes or cinematic title sequences, understanding how to
                            "code" your motion is the bridge between a good designer and an exceptional one.
                        </p>

                        <h2>The Power of Expression</h2>

                        <p>
                            Expressions in After Effects are often intimidating for designers who come from a
                            traditional art background. However, the logic is simpler than it appears. By leveraging
                            Javascript-based expressions, we can automate repetitive tasks and create
                            inter-dependencies between layers that would be impossible to keyframe manually.
                        </p>

                        <div className="my-12 p-8 bg-slate-900 rounded-xl overflow-x-auto shadow-inner border border-slate-800">
                            <pre className="m-0 text-sm font-mono text-yellow-400">
                                <code>{`// A simple bounce expression for procedural secondary motion
amp = .1;
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
}else{value}`}</code>
                            </pre>
                        </div>

                        <blockquote className="border-l-4 border-primary font-serif italic text-xl leading-relaxed my-8 pl-6">
                            "The goal isn't just to make things move; it's to make them respond to their
                            environment with an organic logic."
                        </blockquote>

                        <h3>Why Efficiency Matters</h3>

                        <p>
                            Efficiency in motion isn't just about saving time; it's about flexibility. When a client
                            asks for a timing change in a complex 10-second animation, a keyframe-heavy project can
                            become a nightmare. A procedural, expression-based project allows you to shift one master
                            controller and watch the entire sequence adapt instantly.
                        </p>

                        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden aspect-square flex items-center justify-center border border-slate-200 dark:border-slate-800">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"></div>
                                    <div className="absolute inset-4 border-4 border-primary rounded-full animate-[spin_3s_linear_infinite]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-4xl">
                                            slow_motion_video
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="mt-0">Procedural Feedback</h4>
                                <p className="text-sm">
                                    This visual study shows how a single slider can control multiple rotational speeds
                                    and opacity offsets simultaneously, maintaining a perfect harmonic ratio without
                                    manual keyframes.
                                </p>
                            </div>
                        </div>


                        <hr className="my-12 border-slate-200 dark:border-slate-800" />

                        <h3>Key Takeaways</h3>

                        <ul>
                            <li>
                                <strong>Think Systemically:</strong> View your compositions as sets of rules rather
                                than a timeline of positions.
                            </li>
                            <li>
                                <strong>Invest in Tools:</strong> Building your own script library or expression
                                snippets pays dividends in future projects.
                            </li>
                            <li>
                                <strong>Stay Curious:</strong> The line between code and art is blurring. Embrace it.
                            </li>
                        </ul>
                    </article>

                    {/* Newsletter Section */}
                    <section className="mt-20 p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl">
                        <div className="max-w-2xl">
                            <h3 className="font-display text-2xl font-bold mb-4">Deep dives, delivered.</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8">
                                Join 5,000+ motion designers who receive my monthly breakdown of new techniques, tools,
                                and motion studies.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="flex-grow bg-white dark:bg-black border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <button
                                    className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all uppercase tracking-widest text-xs"
                                    type="submit"
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

export default UpdatePost;
