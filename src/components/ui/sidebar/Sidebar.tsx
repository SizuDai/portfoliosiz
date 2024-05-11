import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../../assets/logo.gif";

const Sidebar: React.FC = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <button className="toggle-btn bg-transparent" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={isSidebarActive ? "active" : ""}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#motiongraphics" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer text-yellow-300">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
