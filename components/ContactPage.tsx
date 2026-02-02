import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (or just mailto for now)
        window.location.href = `mailto:sizansmith.lamichhane@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    }

    return (
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-dark min-h-screen">
            <Helmet>
                <title>Contact | Sizzler Fx</title>
                <meta name="description" content="Get in touch with Sizan Smith Lamichhane for Motion Graphics and VFX projects." />
                <link rel="canonical" href="https://sizan-lamichhane.vercel.app/contact" />
            </Helmet>

            <div className="max-w-screen-xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold font-syne text-white mb-12">
                    Let's Create <span className="text-brand">Something Amazing</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Whether you have a specific project in mind or just want to discuss the possibilities of AI and Motion Graphics, I'm always open to chat.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail className="text-brand shrink-0" size={24} />
                                <div>
                                    <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Email</span>
                                    <a href="mailto:sizansmith.lamichhane@gmail.com" className="text-white text-xl hover:text-brand transition-colors">
                                        sizansmith.lamichhane@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-brand shrink-0" size={24} />
                                <div>
                                    <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Phone</span>
                                    <a href="tel:+9779866039847" className="text-white text-xl hover:text-brand transition-colors">
                                        +977-9866039847
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand shrink-0" size={24} />
                                <div>
                                    <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Location</span>
                                    <span className="text-white text-xl">
                                        Balaju, Tarkeshwar-08<br />Kathmandu, Nepal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand transition-colors"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand text-black font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;
