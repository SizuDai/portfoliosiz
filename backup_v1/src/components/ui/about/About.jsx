import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section___title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a Motion Graphics Designer and I'm very passionate about
              UI/UX. I'm easy to adaptable and quick learner.
            </p>

            <a href="#contact" className="btn">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
