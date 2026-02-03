import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Tunnel: React.FC = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("INITIALIZING CONNECTION");

  useEffect(() => {
    const duration = 2200; 
    const frameRate = 60;
    const totalFrames = (duration / 1000) * frameRate;
    let frame = 0;
    let animationFrameId: number;
    let intervalId: any; // fallback for stricter environments

    intervalId = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 4); 
      const currentCount = Math.min(Math.round(easedProgress * 100), 100);
      
      setCount(currentCount);

      if (progress > 0.3 && progress < 0.6) setStatus("VERIFYING SECURE LINK");
      if (progress >= 0.6 && progress < 0.9) setStatus("RENDERING PORTFOLIO");
      if (progress >= 0.9) setStatus("ACCESS GRANTED");

      if (frame >= totalFrames) {
        clearInterval(intervalId);
      }
    }, 1000 / frameRate);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
      style={{ zIndex: 10000 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
       {/* Navbar Simulation for Context */}
       <motion.div 
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.1 }}
         className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-30"
       >
          <div className="text-xl font-bold tracking-tighter text-white uppercase">
             Sizan Smith
          </div>
          <div className="flex items-center gap-3">
             <span className="hidden md:inline-block text-xs font-mono text-zinc-500 tracking-widest" style={{ fontSize: '10px' }}>STATUS</span>
             <div className="px-3 py-1 border border-brand border-opacity-30 rounded-full bg-brand bg-opacity-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse shadow-brand"/>
                <span className="font-mono font-bold text-brand tracking-widest uppercase" style={{ fontSize: '10px' }}>Redirecting</span>
             </div>
          </div>
       </motion.div>

       {/* Smooth Tunnel Effect */}
       <div className="absolute inset-0 flex items-center justify-center perspective-1000 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-20" />
          
          {/* Continuous flowing rings */}
          {Array.from({ length: 15 }).map((_, i) => (
             <motion.div
                key={i}
                className="absolute rounded-full border border-brand border-opacity-30 shadow-brand"
                style={{
                    width: '50vw',
                    height: '50vw',
                }}
                initial={{ scale: 0, opacity: 0, z: -1200 }}
                animate={{ 
                    scale: 3.5, 
                    opacity: [0, 0.2, 0.8, 0],
                    z: 100,
                    borderWidth: ["1px", "2px", "8px"]
                }}
                transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                    delay: i * 0.2, 
                }}
             />
          ))}

           {/* Grid Floor Effect */}
           <motion.div 
             className="absolute bottom-0 w-full h-1/2 opacity-20"
             style={{ 
                 transform: "rotateX(70deg) scale(2)",
                 backgroundImage: 'linear-gradient(transparent 0%, #F2B71F 100%)'
             }}
           />
       </div>

       {/* Main Text Content */}
       <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-3xl px-6">
          <div className="relative w-full flex flex-col items-center">
            <motion.h1 
                className="font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600"
                style={{ fontFamily: 'Syne, sans-serif', fontSize: '15vw', lineHeight: 0.8 }}
            >
                {count}
            </motion.h1>
            
            {/* Progress Line */}
            <div className="w-full max-w-md h-px bg-zinc-900 mt-8 relative overflow-hidden" style={{ height: '2px' }}>
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-brand shadow-brand"
                    initial={{ width: "0%" }}
                    animate={{ width: `${count}%` }}
                />
            </div>

            <motion.div className="mt-4 flex justify-between w-full max-w-md text-xs font-mono text-zinc-500 uppercase tracking-widest">
                <span>System</span>
                <motion.span 
                    key={status}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand"
                >
                    {status}
                </motion.span>
            </motion.div>
          </div>
       </div>

        {/* Final Flash Overlay */}
        <motion.div 
             className="absolute inset-0 bg-brand pointer-events-none mix-blend-normal"
             style={{ zIndex: 200 }}
             initial={{ opacity: 0 }}
             animate={count > 98 ? { opacity: 1 } : { opacity: 0 }}
             transition={{ duration: 0.4, ease: "easeOut" }}
        />
    </motion.div>
  );
};

export default Tunnel;