import React from "react";

const HeaderSocials: React.FC = () => {
  return (
    <div className="socials">
      <div className="home_socials">
        <a
          href="https://www.instagram.com/sizzler_fx/"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sizan-smith-lamichhane-a6b032235/"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.tiktok.com/@sizan_smith"
          className="home_social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
