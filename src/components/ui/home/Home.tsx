import React, { useState } from "react";
import "./home.css";
import Me from "../../../assets/avatar-1 1.png";
import text from "../../../assets/textintro2.png";
import text2 from "../../../assets/Workwithmetext.png";
import text3 from "../../../assets/workwithme2.png";
import HeaderSocials from "./HeaderSocials";
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
    <section className="home container" id="home">
      <HeroHighlight>
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <img src={text} alt="" className="home__name" />
          <span className="home__education">
            I'm a Motion Graphics Designer
            <br className=" text-yellow-500" /> "I can do anything but it
            depends upon you"
          </span>
          <HeaderSocials />
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-yellow-300 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="#contact"
              title="Let the Magic Begin"
              className="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-yellow-100 transition-all duration-200 bg-slate-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-900"
              role="button"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleHover}
            >
              <div>
                {isHovered ? (
                  <img src={text3} alt="" className="h-7" />
                ) : (
                  <img src={text2} alt="" className="h-7" />
                )}
              </div>
            </a>
          </div>
        </div>
        <div className="blur-circle"></div>
      </HeroHighlight>
    </section>
  );
};

export default Home;
