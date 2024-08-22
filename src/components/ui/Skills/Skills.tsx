import React, { useState } from "react";
import "./skills.css";
import Image1 from "../../../assets/Adobe05.png";
import Image2 from "../../../assets/Adobe04.png";
import Image3 from "../../../assets/Adobe03.png";
import Image4 from "../../../assets/Adobe02.png";
import Image5 from "../../../assets/Adobe01.png";
import HoverImage1 from "../../../assets/Adobe05.png";
import HoverImage2 from "../../../assets/Adobe04.png";
import HoverImage3 from "../../../assets/Adobe03.png";
import HoverImage4 from "../../../assets/Adobe02.png";
import HoverImage5 from "../../../assets/Adobe01.png";
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
      className="drop-shadow-xl mt-5 mb-20"
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
          {[
            { image: Image1, hoverImage: HoverImage1, title: "AfterEffects" },
            { image: Image2, hoverImage: HoverImage2, title: "Photoshop" },
            { image: Image3, hoverImage: HoverImage3, title: "Illustrator" },
            { image: Image4, hoverImage: HoverImage4, title: "Figma" },
            { image: Image5, hoverImage: HoverImage5, title: "Davinci" },
          ].map((item, index) => (
            <CardContainer
              key={index}
              className="p-2 sm:p-2 md:p-10 w-full sm:w-1/2 md:w-[250px]"
            >
              <CardBody className="card-body">
                <CardItem
                  translateZ="50"
                  className="card-item hover: font-retro text-sm"
                >
                  {item.title}
                  <CardItem translateZ="100" className="w-full h-full mt-4">
                    <img
                      src={
                        hoveredImage === item.hoverImage
                          ? item.hoverImage
                          : item.image
                      }
                      className="card-image"
                      alt={item.title}
                      onMouseEnter={() => handleMouseEnter(item.hoverImage)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </CardItem>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
        <AboutBox projectsCompleted={1197} clients={213} />
      </section>
    </motion.div>
  );
};

export default Skills;
