import React, { useState } from "react";
import "./skills.css";
import Image1 from "../../../assets/book1.png";
import Image2 from "../../../assets/book2.png";
import Image3 from "../../../assets/book3.png";
import Image4 from "../../../assets/book4.png";
import Image5 from "../../../assets/book5.png";
import HoverImage1 from "../../../assets/book1.gif";
import HoverImage2 from "../../../assets/book2.gif";
import HoverImage3 from "../../../assets/book3.gif";
import HoverImage4 from "../../../assets/book4.gif";
import HoverImage5 from "../../../assets/book5.gif";
import Skill from "../../../assets/SKILLS.png";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import AboutBox from "./AboutBox";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (hoverImage: string) => {
    setHoveredImage(hoverImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <motion.div
      className="py-20 drop-shadow-xl"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img
        src={Skill}
        alt="after effects"
        className=" mb-4 w-[150px] content-start"
      />
      <section>
        <div className="scrollable-container">
          <div className="image-container flex content-center scale-200 m-auto p-auto">
            <CardContainer className="flex align-middle content-center inter-var">
              <CardBody className="bg-transparent relative group/card light:hover:shadow-2xl hover:shadow-yellow-300/[0.1] dark:bg-black dark:border-purple/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bol text-black-500 dark:text-white text-center hover:text-purple-500 backdrop:blur-md"
                >
                  After Effects
                  <CardItem translateZ="100" className="w-full h-full mt-4">
                    <img
                      src={hoveredImage === HoverImage1 ? HoverImage1 : Image1}
                      height="100"
                      width="100"
                      className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onMouseEnter={() => handleMouseEnter(HoverImage1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bol text-black-500 dark:text-white text-center hover:text-blue-500 backdrop:blur-md"
                >
                  Photoshop
                  <CardItem translateZ="100" className="w-full h-full mt-4">
                    <img
                      src={hoveredImage === HoverImage2 ? HoverImage2 : Image2}
                      height="100"
                      width="100"
                      className="h-[500px] w-[500px] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onMouseEnter={() => handleMouseEnter(HoverImage2)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bol text-black-500 dark:text-white text-center hover:text-yellow-500 backdrop:blur-md"
                >
                  Illustrator
                  <CardItem translateZ="100" className="w-full h-full mt-4">
                    <img
                      src={hoveredImage === HoverImage5 ? HoverImage5 : Image5}
                      height="100"
                      width="100"
                      className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onMouseEnter={() => handleMouseEnter(HoverImage5)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bol text-black-500 dark:text-white text-center hover:text-red-200 backdrop:blur-md"
                >
                  Figma
                  <CardItem translateZ="100" className="w-auto h-auto mt-4">
                    <img
                      src={hoveredImage === HoverImage3 ? HoverImage3 : Image3}
                      height="100"
                      width="100"
                      className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onMouseEnter={() => handleMouseEnter(HoverImage3)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-300/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bol text-black-500 dark:text-white text-center hover:text-blue-300 backdrop:blur-md"
                >
                  Davinci
                  <CardItem translateZ="100" className="w-full h-full mt-4">
                    <img
                      src={hoveredImage === HoverImage4 ? HoverImage4 : Image4}
                      height="100"
                      width="100"
                      className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                      onMouseEnter={() => handleMouseEnter(HoverImage4)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        <AboutBox projectsCompleted={1197} clients={213} />
        <div className="vortex-container"></div>
      </section>
    </motion.div>
  );
};

export default Skills;
