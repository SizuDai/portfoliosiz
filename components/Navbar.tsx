
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isDark, setIsDark] = React.useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Optional: Auto-update on system change if desired, or just safe initialization
    };

    // Safe binding for older browsers or test environments to prevent 'addListener' errors
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="font-display font-extrabold text-2xl leading-none uppercase tracking-tighter transition-colors group-hover:text-primary">Sizan</span>
          <span className="font-display font-extrabold text-2xl leading-none uppercase tracking-tighter text-primary">Smith</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.2em]">
          <Link to="/" className={`${isActive('/') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>Works</Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'text-primary' : 'hover:text-primary'} transition-colors`}>Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
          >
            <span className="material-symbols-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <Link
            to="/contact"
            className="bg-primary hover:scale-105 transition-all text-black px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            Hire Me <span className="material-symbols-outlined text-sm">north_east</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
