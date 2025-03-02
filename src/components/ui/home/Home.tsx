import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ambientSoundRef = useRef<HTMLAudioElement | null>(null);
  const transitionSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePortalClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTransitioning(true);
    if (transitionSoundRef.current) {
      transitionSoundRef.current.play(); // Play transition sound on click
    }
    setTimeout(() => {
      window.location.href = "https://sizansmith.framer.website/";
    }, 2500); // Match transition duration
  };

  // Setup ambient sound on component mount
  useEffect(() => {
    if (ambientSoundRef.current) {
      ambientSoundRef.current.loop = true;
      ambientSoundRef.current.volume = 0.2; // Low volume for subtle effect
      ambientSoundRef.current.play().catch((error) => {
        console.log("Ambient sound blocked by browser:", error);
      });
    }

    // Cleanup on unmount
    return () => {
      if (ambientSoundRef.current) {
        ambientSoundRef.current.pause();
      }
    };
  }, []);

  return (
    <section
      id="portal"
      className="flex justify-center items-center min-h-screen bg-black relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle, #1a1a00 10%, #000000 80%)",
      }}
    >
      {/* Audio Elements */}
      <audio ref={ambientSoundRef} src="/sounds/futuristic-ambient.mp3" />
      <audio ref={transitionSoundRef} src="/sounds/warp-transition.mp3" />

      {/* Background Elements */}
      <motion.div
        className="absolute w-full h-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`fragment-${i}`}
          className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 opacity-30"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            filter: "blur(1px)",
          }}
          initial={{
            x: `${Math.random() * 80 - 40}vw`,
            y: `${Math.random() * 80 - 40}vh`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-300 rounded-sm opacity-30"
          initial={{ x: `${Math.random() * 90 - 45}vw`, y: "100vh" }}
          animate={{ y: "-100vh", opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(1.5px)" }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px h-16 sm:h-24 bg-gradient-to-b from-yellow-400 to-transparent"
          initial={{ x: `${Math.random() * 90 - 45}vw`, y: "100vh" }}
          animate={{ y: "-100vh", opacity: [0, 0.6, 0] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 1,
          }}
          style={{ transform: `rotate(${Math.random() * 90 - 45}deg)` }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`triangle-${i}`}
          className="absolute w-8 h-8 sm:w-12 sm:h-12 border-2 border-yellow-500 opacity-20"
          style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
          initial={{
            x: `${Math.random() * 80 - 40}vw`,
            y: `${Math.random() * 80 - 40}vh`,
          }}
          animate={{ rotate: 360, opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <motion.div
        className="absolute w-24 h-24 sm:w-40 sm:h-40 bg-yellow-500 rounded-full opacity-10"
        initial={{ x: "-20vw", y: "-20vh" }}
        animate={{
          x: ["-20vw", "20vw", "-20vw"],
          y: ["-20vh", "20vh", "-20vh"],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(40px)" }}
      />

      {/* Portal Container */}
      <AnimatePresence>
        {!isTransitioning ? (
          <motion.div
            className="relative flex flex-col items-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0,
              filter: "blur(20px)",
              transition: { duration: 0.5 },
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <a
              href="https://sizansmith.framer.website/"
              className="relative flex items-center justify-center w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={handlePortalClick}
              title="Portal to Sizan's World"
            >
              <motion.div
                className="absolute w-full h-full rounded-full border-4 border-yellow-400 opacity-70"
                animate={{
                  rotate: [0, 360],
                  scale: isHovered ? 1.1 : 1,
                  borderColor: isHovered ? "#ffcc00" : "#ffff00",
                }}
                transition={{
                  rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 0.4 },
                  borderColor: { duration: 0.3 },
                }}
                style={{
                  boxShadow: "0 0 20px rgba(255, 255, 0, 0.7)",
                  filter: "blur(2px)",
                }}
              />
              <motion.div
                className="absolute w-5/6 h-5/6 rounded-full border-2 border-dashed border-yellow-500 opacity-50"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                style={{ boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
              />
              <motion.div
                className="absolute w-2/3 h-2/3 rounded-full bg-gradient-to-br from-yellow-300 via-amber-500 to-black"
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1,
                  opacity: isHovered ? 0.9 : 0.7,
                }}
                transition={{
                  scale: { duration: 1, repeat: Infinity },
                  opacity: { duration: 0.3 },
                }}
                style={{
                  filter: "blur(10px)",
                  boxShadow: "inset 0 0 30px rgba(255, 255, 0, 0.8)",
                }}
              />
              <motion.span
                className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold text-yellow-200 bg-black/50 px-4 py-2 rounded-lg"
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  textShadow:
                    "0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffcc00",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                {isHovered ? "Blast Off!" : "Sizan's Portal"}
              </motion.span>
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  initial={{
                    x: Math.random() * 80 - 40,
                    y: Math.random() * 80 - 40,
                  }}
                  animate={{
                    x: isHovered
                      ? Math.random() * 120 - 60
                      : Math.random() * 80 - 40,
                    y: isHovered
                      ? Math.random() * 120 - 60
                      : Math.random() * 80 - 40,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ filter: "blur(1px)" }}
                />
              ))}
            </a>
            <motion.div
              className="mt-4 text-center px-4 max-w-xs sm:max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="text-xs sm:text-sm text-yellow-300 font-bold bg-black/70 px-3 py-1 rounded-md border border-yellow-500/50"
                animate={{
                  scale: [1, 1.05, 1],
                  color: isHovered ? "#ffcc00" : "#ffff00",
                }}
                transition={{
                  scale: { duration: 1.5, repeat: Infinity },
                  color: { duration: 0.3 },
                }}
                style={{
                  textShadow:
                    "0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 204, 0, 0.5)",
                  fontFamily: "'Exo 2', sans-serif",
                  boxShadow: "0 0 15px rgba(255, 255, 0, 0.3)",
                  display: "inline-block",
                }}
              >
                Hit the tunnel and zip to my portfolio—don’t blame me if you get
                motion sickness!
              </motion.span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-full h-full relative overflow-hidden"
              style={{ background: "#121212", perspective: "1200px" }} // Changed to #121212 during tunnel
            >
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`tunnel-ring-${i}`}
                  className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-60"
                  initial={{ scale: 0.05, opacity: 0, translateZ: "-1200px" }}
                  animate={{
                    scale: 3,
                    opacity: [0, 1, 0],
                    translateZ: "1200px",
                    rotate: Math.random() * 20 - 10,
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                  style={{
                    boxShadow: "0 0 20px rgba(255, 255, 0, 0.8)",
                    margin: `${i * 5}%`,
                  }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-lg sm:text-2xl md:text-3xl font-bold"
                initial={{ scale: 0.5, opacity: 0, translateZ: "-500px" }}
                animate={{ scale: 2, opacity: [0, 1, 0], translateZ: "500px" }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                style={{
                  textShadow: "0 0 10px #ffff00",
                  fontFamily: "'Exo 2', sans-serif",
                }}
              >
                "Hold on, Warp Speed Engaged!"
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
