import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Sticky Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="font-display font-bold text-2xl tracking-tighter uppercase text-slate-900 dark:text-white">
              Sizan<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
            <Link to="/" className="text-slate-900 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/updates" className="text-primary hover:text-primary transition-colors">
              Updates
            </Link>
            <Link to="/about" className="text-slate-900 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-slate-900 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side: Dark Mode Toggle */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-xl">contrast</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-900 dark:text-white hover:text-primary transition-colors p-2"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-40"
            />

            {/* Menu Panel */}
            <div className="fixed top-24 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-2xl md:hidden z-50">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col gap-8 text-center">
                  <Link
                    to="/#work"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    Works
                  </Link>
                  <Link
                    to="/updates"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    Updates
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-slate-900 dark:text-slate-300 hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-black bg-primary py-4 rounded-xl"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;