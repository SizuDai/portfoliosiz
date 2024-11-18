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
        <div className="flex justify-center gap-2 sm:gap-4 mt-4">
          {[
            { image: Image1, hoverImage: HoverImage1, title: "AfterEffects" },
            { image: Image2, hoverImage: HoverImage2, title: "Photoshop" },
            { image: Image3, hoverImage: HoverImage3, title: "Illustrator" },
            { image: Image4, hoverImage: HoverImage4, title: "Figma" },
            { image: Image5, hoverImage: HoverImage5, title: "Davinci" },
          ].map((item, index) => (
            <CardContainer
              key={index}
              className="p-1 w-full xs:w-1/3 sm:w-1/3 md:w-[200px] lg:w-[250px]" // Smaller padding for mobile
            >
              <CardBody className="card-body">
                <CardItem
                  translateZ="30"
                  className=" flex-auto card-item font-retro text-xs sm:text-sm md:text-base "
                >
                  <span className="hidden sm:block">{item.title}</span>{" "}
                  {/* Hide title on mobile */}
                  <CardItem
                    translateZ="100"
                    className="w-full h-full mt-2 sm:mt-4"
                  >
                    <img
                      src={
                        hoveredImage === item.hoverImage
                          ? item.hoverImage
                          : item.image
                      }
                      className="card-image w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px]"
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
      </section>
    </motion.div>
  );
};

export default Skills;
