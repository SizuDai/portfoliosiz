import React, { useState } from "react";
import { motion } from "framer-motion";
import Me from "../../../assets/gameboy.gif";
import text2 from "../../../assets/WORK WITH ME.png";
import text3 from "../../../assets/WORK WITH ME 2.png";
import HeaderSocials from "./HeaderSocials";
import GamingText from "../../text/GamingText";
import { HeroHighlight } from "../AsUi/hero-highlight";

const Home: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <HeroHighlight>
        <motion.div
          className="text-center max-w-[540px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={Me}
            alt=""
            className="mx-auto mb-6 w-40 sm:w-60 md:w-80 lg:w-[390px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <div className="m-5">
            <GamingText text="Sizan Smith Lamichhane" size="text-xl" />
          </div>
          <motion.span
            className="font-retro text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I'm a Motion Graphics Designer
            <br className="text-yellow-600" /> "I can do anything (I think
            so...)"
          </motion.span>
          {/* Updated social icons container */}
          <div className="flex flex-row justify-center items-center gap-6 mb-6">
            <HeaderSocials />
          </div>
          <div className="relative inline-flex group mt-6">
            <motion.div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-yellow-300 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, inset: -1 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
            <a
              href="#contact"
              title="Let the Magic Begin"
              className="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold bg-retro-black text-retro-yellow font-pixel rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-retro-yellow transition-all duration-200"
              role="button"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleHover}
              style={{
                border: "4px solid", // Simulating a thick pixel border
                borderColor: "rgba(255,255,0,0.6)", // Semi-transparent yellow
                backgroundImage:
                  "var(--tw-bg-opacity, 1) url(/path/to/pixel-pattern.png)", // Optional: Pixel background pattern
                imageRendering: "pixelated", // Ensures the image doesn't get smoothed
              }}
            >
              <div>
                {isHovered ? (
                  <motion.img
                    src={text3}
                    alt=""
                    className="h-4 sm:h-7"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ imageRendering: "pixelated" }}
                  />
                ) : (
                  <motion.img
                    src={text2}
                    alt=""
                    className="h-4 sm:h-7"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ imageRendering: "pixelated" }}
                  />
                )}
              </div>
            </a>
          </div>
        </motion.div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            backgroundColor: "rgb(0, 0, 0)",
            filter: "blur(100px)",
            zIndex: "-1",
          }}
        ></div>
      </HeroHighlight>
    </section>
  );
};

export default Home;
