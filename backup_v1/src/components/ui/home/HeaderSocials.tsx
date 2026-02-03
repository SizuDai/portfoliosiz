import React from "react";
import TikTokIcon from "../../../assets/Tiktok.svg";
import InstaIcon from "../../../assets/Insta.svg";
import LinkIcon from "../../../assets/Linkdein.svg";

const HeaderSocials: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-6 mb-10">
      <a
        href="https://www.instagram.com/sizzler_fx/"
        className="text-retro-yellow hover:text-yellow-500 transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={InstaIcon}
          alt="Instagram"
          className="w-10 h-10 transition-transform duration-300 ease-out"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/sizan-smith-lamichhane-a6b032235/"
        className="text-retro-yellow hover:text-yellow-500 transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={LinkIcon}
          alt="LinkedIn"
          className="w-10 h-10 transition-transform duration-300 ease-out"
        />
      </a>
      <a
        href="https://www.tiktok.com/@sizan_smith"
        className="text-retro-yellow hover:text-yellow-500 transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={TikTokIcon}
          alt="TikTok"
          className="w-10 h-10 transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

export default HeaderSocials;
