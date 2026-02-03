import React, { useState } from "react";
import Image1 from "../../../assets/Adobe05.png";
import Image2 from "../../../assets/Adobe04.png";
import Image3 from "../../../assets/Adobe03.png";
import Image4 from "../../../assets/Adobe02.png";
import Image5 from "../../../assets/Adobe01.png";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import { motion } from "framer-motion";
import GamingText from "../../text/GamingText";

const skillsData = [
  { image: Image1, title: "AfterEffects" },
  { image: Image2, title: "Photoshop" },
  { image: Image3, title: "Illustrator" },
  { image: Image4, title: "Figma" },
  { image: Image5, title: "Davinci" },
];

const Skills: React.FC = () => {
  const [, setHoveredImage] = useState<string | null>(null);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 py-6"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <div className="mb-8">
        <GamingText text="Skills" size="text-3xl" />
      </div>

      {/* Skill Cards */}
      <section>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {skillsData.map((item, index) => (
            <CardContainer
              key={index}
              className="relative p-2 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-transform duration-300 hover:scale-105"
            >
              <CardBody className="bg-retro-black p-3 sm:p-4 md:p-5">
                <CardItem
                  translateZ="30"
                  className="font-display text-m sm:text-base"
                >
                  <span className="hidden sm:block">{item.title}</span>
                  <CardItem translateZ="100" className="mt-2 sm:mt-3">
                    <motion.img
                      src={item.image}
                      className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-[130px] transition-all duration-500 hover:scale-110"
                      alt={item.title}
                      onMouseEnter={() => setHoveredImage(item.image)}
                      onMouseLeave={() => setHoveredImage(null)}
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
