import React from "react";
import fire from "../../../assets/fire-flame.gif";
import magicball from "../../../assets/magicball.gif";

// Step 1: Define the Props Interface
interface AboutBoxProps {
  projectsCompleted: number;
  clients: number;
}

// Step 2: Modify the Component to Accept Props
const AboutBox: React.FC<AboutBoxProps> = ({ projectsCompleted, clients }) => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <img src={fire} alt="" className=" h-20" />

        <div>
          <h3 className="about__title font-retro">{projectsCompleted + "+"}</h3>
          <span className="about__subtitle font-retro">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <img src={magicball} alt="" className=" h-[100px]" />

        <div>
          <h3 className="about__title font-retro">{clients + "+"}</h3>
          <span className="about__subtitle font-retro">Satisfied Clients</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
