import React from "react";
import TikTokIcon from "../../../assets/Tiktok.svg";
import InstaIcon from "../../../assets/Insta.svg";
import LinkIcon from "../../../assets/Linkdein.svg";

const HeaderSocials: React.FC = () => {
  return (
    <div className="socials">
      <div className="home_socials mb-10">
        <a
          href="https://www.instagram.com/sizzler_fx/"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstaIcon} alt="TikTok" className="home_social-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/sizan-smith-lamichhane-a6b032235/"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkIcon} alt="TikTok" className="home_social-link" />
        </a>
        <a
          href="https://www.tiktok.com/@sizan_smith"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={TikTokIcon} alt="TikTok" className="home_social-link" />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
