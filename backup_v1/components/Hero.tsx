import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Tunnel from './Tunnel';

const Marquee: React.FC<{ text: string; direction: number; speed: number; top: string }> = ({ text, direction, speed, top }) => {
  return (
    <div className="absolute left-0 w-full overflow-hidden flex pointer-events-none select-none opacity-20 z-0" style={{ top }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="font-black uppercase tracking-tighter mr-16 italic text-transparent"
            style={{
              fontFamily: "'Syne', sans-serif",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
              fontSize: '12vh'
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const RotatingBadge: React.FC = () => (
  <motion.div
    className="absolute -right-4 top-8 md:-right-16 md:top-12 w-24 h-24 md:w-32 md:h-32 rounded-full border border-brand border-opacity-30 flex items-center justify-center z-30 mix-blend-screen"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <div className="absolute inset-0 rounded-full border border-dashed border-brand border-opacity-20 transform scale-90" />
    <svg viewBox="0 0 100 100" className="w-full h-full p-2">
      <path
        id="textPath"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="none"
      />
      <text className="font-bold uppercase fill-brand" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>
        <textPath href="#textPath">
          • Motion • Graphics • Designer •
        </textPath>
      </text>
    </svg>
  </motion.div>
);

const SkillLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-brand w-full mix-blend-screen"
          style={{ top: `${20 + i * 15}%`, left: 0 }}
          initial={{ scaleX: 0, opacity: 0, transformOrigin: i % 2 === 0 ? 'left' : 'right' }}
          animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

const Hero: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Magnetic Button Logic
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const btnSpringConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const btnXSpring = useSpring(btnX, btnSpringConfig);
  const btnYSpring = useSpring(btnY, btnSpringConfig);

  const handleBtnMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { width, height, left, top } = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    btnX.set(x * 0.3);
    btnY.set(y * 0.3);
  };

  const handleBtnMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsRedirecting(true);
    setTimeout(() => {
      // Redirect to internal work section
      const workSection = document.getElementById('work');
      if (workSection) {
        workSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsRedirecting(false);
    }, 1500);
  };

  const letterVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    })
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-dark"
    >
      {isRedirecting && <Tunnel />}

      {/* Animated Background - Z-Index 0 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(242,183,31,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(242,183,31,0.02) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <SkillLines />
        <Marquee text="After Effects • Premiere Pro • DaVinci •" direction={1} speed={50} top="15%" />
        <Marquee text="VFX • Animation • Graphic Design •" direction={-1} speed={40} top="80%" />
      </div>

      {/* Main Content - Z-Index 20 */}
      {/* IMPORTANT: Initial opacity is 1 to prevent black screen if animation fails */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full"
        initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        animate={isRedirecting ? { scale: 0.9, opacity: 0, filter: "blur(15px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
      >
        <div className="w-full">
          {/* Main Typographic Composition */}
          <div className="relative flex flex-col items-center leading-none select-none">

            {/* First Line: SIZAN (Solid White) */}
            <div className="relative z-20">
              <h1 className="font-black tracking-tighter text-white leading-none flex drop-shadow-2xl" style={{ fontSize: '16vw', lineHeight: 0.8 }}>
                {Array.from("SIZAN").map((l, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {l}
                  </motion.span>
                ))}
              </h1>
              <RotatingBadge />
            </div>

            {/* Second Line: SMITH (Solid Yellow) */}
            <div className="relative z-10 -mt-4 md:-mt-12 ml-4 md:ml-8">
              <h1 className="font-black tracking-tighter text-brand leading-none flex" style={{ fontSize: '16vw', lineHeight: 0.8, filter: 'drop-shadow(0 10px 40px rgba(242,183,31,0.2))' }}>
                {Array.from("SMITH").map((l, i) => (
                  <motion.span
                    key={i}
                    custom={i + 5}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {l}
                  </motion.span>
                ))}
              </h1>
            </div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 md:mt-20 flex flex-col items-center gap-8"
          >
            <p className="text-xs md:text-sm text-zinc-400 font-mono uppercase bg-zinc-900 bg-opacity-80 border border-zinc-800 px-6 py-2 rounded-full backdrop-blur-sm" style={{ letterSpacing: '0.3em' }}>
              Motion Graphics Designer
            </p>

            <motion.a
              ref={btnRef}
              href="https://sizansmith.framer.website/"
              onClick={handleRedirect}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              style={{
                x: btnXSpring,
                y: btnYSpring,
                boxShadow: '0 0 50px rgba(255,255,255,0.15)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-zinc-100 text-black overflow-hidden flex items-center gap-3 text-base font-bold uppercase tracking-widest cursor-pointer rounded-sm"
            >
              <div className="absolute inset-0 bg-brand transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />

              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Enter Portfolio</span>
              <motion.span
                className="relative z-10 group-hover:text-black transition-colors duration-300"
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;