import React, { useState } from "react";
import "./skills.css";
import Image1 from "../../../assets/Adobe05.png";
import Image2 from "../../../assets/Adobe04.png";
import Image3 from "../../../assets/Adobe02.png";
import Image4 from "../../../assets/Adobe01.png";
import Image5 from "../../../assets/Adobe03.png";
import HoverImage1 from "../../../assets/Adobe05.png";
import HoverImage2 from "../../../assets/Adobe04.png";
import HoverImage3 from "../../../assets/Adobe02.png";
import HoverImage4 from "../../../assets/Adobe01.png";
import HoverImage5 from "../../../assets/Adobe03.png";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import AboutBox from "./AboutBox";
import { motion } from "framer-motion";
import GamingText from "../../text/GamingText";

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
      className="mt-5 drop-shadow-xl"
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
      <div className="mx-5">
        <GamingText text="Skills" size="text-3xl" />
      </div>
      <section>
        <div className="flex flex-wrap justify-center">
          <CardContainer className="p-10 w-[300px]">
            <CardBody className="card-body">
              <CardItem
                translateZ="50"
                className="card-item  hover:text-purple-500 font-retro text-sm"
              >
                After Effects
                <CardItem translateZ="100" className="w-full h-full mt-4">
                  <img
                    src={hoveredImage === HoverImage1 ? HoverImage1 : Image1}
                    className="card-image"
                    alt="thumbnail"
                    onMouseEnter={() => handleMouseEnter(HoverImage1)}
                    onMouseLeave={handleMouseLeave}
                  />
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="p-10 w-[300px]">
            <CardBody className="card-body">
              <CardItem
                translateZ="50"
                className="card-item hover:text-blue-500 font-retro text-sm"
              >
                Photoshop
                <CardItem translateZ="100" className="w-full h-full mt-4">
                  <img
                    src={hoveredImage === HoverImage2 ? HoverImage2 : Image2}
                    className="card-image"
                    alt="thumbnail"
                    onMouseEnter={() => handleMouseEnter(HoverImage2)}
                    onMouseLeave={handleMouseLeave}
                  />
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="p-10 w-[300px]">
            <CardBody className="card-body">
              <CardItem
                translateZ="50"
                className="card-item  hover:text-orange-500 font-retro text-sm"
              >
                Illustrator
                <CardItem translateZ="100" className="w-full h-full mt-4">
                  <img
                    src={hoveredImage === HoverImage5 ? HoverImage5 : Image5}
                    className="card-image"
                    alt="thumbnail"
                    onMouseEnter={() => handleMouseEnter(HoverImage5)}
                    onMouseLeave={handleMouseLeave}
                  />
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="p-10 w-[300px]">
            <CardBody className="card-body">
              <CardItem
                translateZ="50"
                className="card-item  hover:text-red-500 font-retro text-sm"
              >
                Figma
                <CardItem translateZ="100" className="w-full h-full mt-4">
                  <img
                    src={hoveredImage === HoverImage3 ? HoverImage3 : Image3}
                    className="card-image"
                    alt="thumbnail"
                    onMouseEnter={() => handleMouseEnter(HoverImage3)}
                    onMouseLeave={handleMouseLeave}
                  />
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>

          <CardContainer className="p-10 w-[300px]">
            <CardBody className="card-body">
              <CardItem
                translateZ="50"
                className="card-item  hover:text-green-500 font-retro text-sm"
              >
                Davinci
                <CardItem translateZ="100" className="w-full h-full mt-4">
                  <img
                    src={hoveredImage === HoverImage4 ? HoverImage4 : Image4}
                    className="card-image"
                    alt="thumbnail"
                    onMouseEnter={() => handleMouseEnter(HoverImage4)}
                    onMouseLeave={handleMouseLeave}
                  />
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <AboutBox projectsCompleted={1197} clients={213} />
        <div className="vortex-container"></div>
      </section>
    </motion.div>
  );
};

export default Skills;
