
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black transition-colors">
      <section className="py-24 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-[0.03] select-none pointer-events-none">
          <span className="font-display font-extrabold text-[30vw] uppercase whitespace-nowrap dark:text-white">CONTACT ME</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 block mb-6">Have an idea?</span>
          <h2 className="font-display text-6xl md:text-9xl font-extrabold uppercase tracking-tighter mb-16 dark:text-white">
            LET'S TALK
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-left pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">email</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
              </div>
              <p className="font-bold text-lg dark:text-white">sizansmith.lamichhane@gmail.com</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">phone_iphone</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Phone</span>
              </div>
              <p className="font-bold text-lg dark:text-white">+977-9866039847</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined">location_on</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">Location</span>
              </div>
              <p className="font-bold text-lg dark:text-white">Balaju, Tarkeshwar-08<br/>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 dark:text-white">© 2024 Sizan Smith Lamichhane</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Motion & Design Portfolio</p>
          </div>
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-black transition-all dark:text-white dark:hover:text-black" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-black transition-all dark:text-white dark:hover:text-black" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
