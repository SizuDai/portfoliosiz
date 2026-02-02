import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-sm md:text-base text-zinc-500 uppercase tracking-widest mb-6">Have an idea?</h2>
          <a
            href="mailto:sizansmith.lamichhane@gmail.com"
            className="inline-block text-5xl md:text-8xl lg:text-9xl font-bold text-white hover:text-brand transition-colors tracking-tighter break-all"
          >
            LET'S TALK
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-16 mb-16">
          <div className="flex items-start gap-4">
            <Mail className="text-brand mt-1" size={24} />
            <div>
              <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Email</span>
              <a href="mailto:sizansmith.lamichhane@gmail.com" className="text-white text-lg hover:text-brand transition-colors">
                sizansmith.lamichhane@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-brand mt-1" size={24} />
            <div>
              <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Phone</span>
              <a href="tel:+9779866039847" className="text-white text-lg hover:text-brand transition-colors">
                +977-9866039847
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-brand mt-1" size={24} />
            <div>
              <span className="block text-zinc-500 text-xs uppercase tracking-widest mb-1">Location</span>
              <span className="text-white text-lg">
                Balaju, Tarkeshwar-08<br />Kathmandu, Nepal
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-zinc-900 pt-8">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-300 text-sm font-bold">© 2024 Sizan Smith Lamichhane</span>
            <span className="text-zinc-600 text-xs uppercase tracking-widest">Motion & Design Portfolio</span>
            <div className="flex gap-4 mt-2">
              <a href="/privacy-policy" className="text-zinc-500 text-xs hover:text-brand transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-zinc-500 text-xs hover:text-brand transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:bg-brand hover:text-black transition-all duration-300 group">
              <Instagram size={20} className="transform group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:bg-brand hover:text-black transition-all duration-300 group">
              <Linkedin size={20} className="transform group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;