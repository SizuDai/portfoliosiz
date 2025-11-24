import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuVariants: Variants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 w-full flex justify-center pointer-events-none pt-6 px-4 h-auto" style={{ zIndex: 9999 }}>
        <motion.nav 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto backdrop-blur-xl bg-zinc-900 bg-opacity-90 border border-white border-opacity-10 rounded-full pl-5 pr-5 md:pr-8 py-3 flex justify-between items-center gap-12 shadow-2xl w-full max-w-screen-md relative"
        >
          <a href="#" className="flex items-center gap-3 group relative z-50 cursor-pointer select-none">
            <div className="w-8 h-8 bg-zinc-100 text-black flex items-center justify-center font-black font-syne text-lg rounded-sm group-hover:bg-brand transition-colors duration-300">
              S
            </div>
            <div className="flex flex-col leading-none">
               <span className="font-bold tracking-tight text-white text-base uppercase font-syne group-hover:text-brand transition-colors">Sizan Smith</span>
               <span className="text-zinc-400 tracking-widest uppercase" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>Portfolio</span>
            </div>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400 items-center">
            <a href="#work" className="hover:text-white transition-all duration-300 relative group py-2 cursor-pointer">
              Playground
              <span className="absolute bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="hover:text-white transition-all duration-300 relative group py-2 cursor-pointer">
              About
              <span className="absolute bottom-1 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-white bg-opacity-5 rounded-full text-white hover:bg-brand hover:text-black transition-all duration-300 cursor-pointer">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-brand transition-colors relative z-50 p-2 -mr-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay & Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md md:hidden"
                style={{ zIndex: 9990 }}
            />
            
            {/* Menu */}
            <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed top-24 left-4 right-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl md:hidden overflow-hidden"
                style={{ zIndex: 9995 }}
            >
                <div className="flex flex-col gap-8 text-center">
                <a 
                    href="#work" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-zinc-300 hover:text-brand transition-colors cursor-pointer"
                >
                    Playground
                </a>
                <a 
                    href="#about" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-zinc-300 hover:text-brand transition-colors cursor-pointer"
                >
                    About
                </a>
                <a 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold uppercase tracking-widest text-black bg-brand py-4 rounded-xl cursor-pointer shadow-brand"
                >
                    Contact
                </a>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;