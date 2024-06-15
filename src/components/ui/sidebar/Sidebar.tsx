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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="Interface-Essential-Home-2--Streamline-Pixel"
                  >
                    <desc>
                      Interface Essential Home 2 Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <title>interface-essential-home-2</title>
                    <g>
                      <path
                        d="m0.765 16.76 3.04 0 0 -1.52 1.53 0 0 -1.53 1.52 0 0 -1.52 1.53 0 0 -1.52 1.52 0 0 -1.53 1.52 0 0 -1.52 1.53 0 0 -1.53 1.52 0 0 -1.52 3.05 0 0 1.52 1.52 0 0 1.53 1.53 0 0 1.52 1.52 0 0 1.53 1.52 0 0 1.52 1.53 0 0 1.52 1.52 0 0 1.53 1.52 0 0 1.52 3.05 0 0 -3.05 -1.52 0 0 -1.52 -1.53 0 0 -1.52 -1.52 0 0 -1.53 -1.52 0 0 -1.52 -1.53 0 0 -1.53 -1.52 0 0 -1.52 -1.52 0 0 -1.52 -1.53 0 0 -1.53 -1.52 0 0 -1.52 -3.05 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 1.53 -1.53 0 0 1.52 -1.52 0 0 1.52 -1.52 0 0 3.05z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m26.665 30.48 -6.09 0 0 -7.62 -1.53 0 0 9.14 9.14 0 0 -13.72 -1.52 0 0 12.2z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.145 16.76h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M23.615 15.24h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M22.095 13.71h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M20.575 12.19h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M19.045 10.67h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M17.525 21.33h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M17.525 9.14h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M14.475 19.81h3.05v1.52h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M14.475 7.62h3.05v1.52h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M12.955 21.33h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M12.955 9.14h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m12.955 22.86 -1.53 0 0 7.62 -6.09 0 0 -12.2 -1.53 0 0 13.72 9.15 0 0 -9.14z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M11.425 10.67h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M9.905 12.19h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M8.385 13.71h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M6.855 15.24h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M5.335 16.76h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="Computers-Devices-Electronics-Desktop--Streamline-Pixel"
                  >
                    <desc>
                      Computers Devices Electronics Desktop Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <title>computers-devices-electronics-desktop</title>
                    <g>
                      <path
                        d="M29.71 1.53h1.53v18.28h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m2.28 30.48 0 -1.52 -1.52 0 0 3.04 30.48 0 0 -3.04 -1.53 0 0 1.52 -27.43 0z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M28.19 27.43h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M26.67 25.91h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M6.86 22.86v1.52h18.28v-1.52h-4.57v-1.52h9.14v-1.53H2.28v1.53h9.15v1.52Zm6.09 -1.52h6.1v1.52h-6.1Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.14 24.38h1.53v1.53h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M28.19 3.05H3.81v15.24h24.38Zm-1.52 13.71H5.33V4.57h21.34Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M23.62 27.43h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M22.09 25.91h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m19.05 10.67 1.52 0 0 1.52 1.52 0 0 -1.52 1.53 0 0 -1.52 1.52 0 0 -1.53 -1.52 0 0 -1.52 -1.53 0 0 1.52 -1.52 0 0 -1.52 -1.52 0 0 1.52 -1.53 0 0 1.53 1.53 0 0 1.52z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M19.05 27.43h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M17.52 25.91h1.53v1.52h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M14.47 27.43H16v1.53h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M12.95 25.91h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M11.43 27.43h1.52v1.53h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M8.38 25.91H9.9v1.52H8.38Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M6.86 27.43h1.52v1.53H6.86Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M5.33 24.38h1.53v1.53H5.33Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.81 25.91h1.52v1.52H3.81Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M2.28 0h27.43v1.53H2.28Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M2.28 27.43h1.53v1.53H2.28Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M0.76 1.53h1.52v18.28H0.76Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="Entertainment-Events-Hobbies-Film-Roll--Streamline-Pixel"
                  >
                    <desc>
                      Entertainment Events Hobbies Film Roll Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <title>entertainment-events-hobbies-film-roll</title>
                    <g>
                      <path
                        d="M28.95 27.43H32v1.52h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M27.42 28.95h1.53v1.53h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M27.42 7.62h1.53v13.71h-1.53Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.9 21.33h1.52v3.05H25.9Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.9 4.57h1.52v3.05H25.9Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M24.38 30.48h3.04V32h-3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M24.38 24.38h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M24.38 3.05h1.52v1.52h-1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m24.38 25.9 -3.05 0 0 1.53 1.52 0 0 3.05 1.53 0 0 -4.58z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m22.85 21.33 1.53 0 0 -3.04 -1.53 0 0 -1.53 -3.05 0 0 1.53 -1.52 0 0 3.04 1.52 0 0 1.53 3.05 0 0 -1.53z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M21.33 1.52h3.05v1.53h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m19.8 12.19 3.05 0 0 -1.52 1.53 0 0 -3.05 -1.53 0 0 -1.52 -3.05 0 0 1.52 -1.52 0 0 3.05 1.52 0 0 1.52z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M7.61 27.43h13.72v1.52H7.61Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M12.19 12.19h4.57v4.57h-4.57Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M7.61 0h13.72v1.52H7.61Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m9.14 16.76 -3.05 0 0 1.53 -1.52 0 0 3.04 1.52 0 0 1.53 3.05 0 0 -1.53 1.52 0 0 -3.04 -1.52 0 0 -1.53z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m9.14 6.1 -3.05 0 0 1.52 -1.52 0 0 3.05 1.52 0 0 1.52 3.05 0 0 -1.52 1.52 0 0 -3.05 -1.52 0 0 -1.52z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M4.57 25.9h3.04v1.53H4.57Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M4.57 1.52h3.04v1.53H4.57Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.04 24.38h1.53v1.52H3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.04 3.05h1.53v1.52H3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M1.52 21.33h1.52v3.05H1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M1.52 4.57h1.52v3.05H1.52Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M0 7.62h1.52v13.71H0Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <a href="#animations" className="nav__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="Entertainment-Events-Hobbies-Film-Player--Streamline-Pixel"
                  >
                    <desc>
                      Entertainment Events Hobbies Film Player Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <title>entertainment-events-hobbies-film-player</title>
                    <g>
                      <path
                        d="M0 3.81v24.38h32V3.81Zm7.61 22.85H1.52V5.33h6.09Zm15.24 0H9.14V5.33h13.71Zm7.62 0h-6.09V5.33h6.09Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.9 20.57h3.05v3.05H25.9Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.9 14.47h3.05v3.05H25.9Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M25.9 8.38h3.05v3.05H25.9Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m15.23 19.05 1.53 0 0 -1.53 1.52 0 0 -1.52 1.52 0 0 -1.53 -1.52 0 0 -1.52 -1.52 0 0 -1.52 -1.53 0 0 -1.53 -3.04 0 0 10.67 3.04 0 0 -1.52z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.04 20.57h3.05v3.05H3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.04 14.47h3.05v3.05H3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.04 8.38h3.05v3.05H3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="Email-Mail-Chat--Streamline-Pixel"
                  >
                    <desc>
                      Email Mail Chat Streamline Icon: https://streamlinehq.com
                    </desc>
                    <title>email-mail-chat</title>
                    <g>
                      <path
                        d="m22.1 15.24 0 1.52 -3.05 0 0 1.53 -9.14 0 0 1.52 4.57 0 0 1.52 1.52 0 0 1.53 1.53 0 0 1.52 6.09 0 0 1.52 1.53 0 0 1.53 1.52 0 0 1.52 1.52 0 0 -6.09 1.53 0 0 -1.53 1.52 0 0 -6.09 -1.52 0 0 -1.53 -1.53 0 0 -1.52 -3.04 0 0 -4.57 -1.53 0 0 7.62 -1.52 0z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M22.1 6.09h1.52v1.53H22.1Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M17.53 10.67h3.04v3.04h-3.04Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M19.05 4.57h3.05v1.52h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M11.43 10.67h3.05v3.04h-3.05Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M8.38 19.81h1.53v1.52H8.38Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M6.86 3.05h12.19v1.52H6.86Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="m6.86 18.29 -1.52 0 0 6.09 1.52 0 0 -1.52 1.52 0 0 -1.53 -1.52 0 0 -3.04z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M5.34 10.67h3.04v3.04H5.34Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.81 4.57h3.05v1.52H3.81Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M3.81 16.76h1.53v1.53H3.81Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M2.29 15.24h1.52v1.52H2.29Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M2.29 6.09h1.52v1.53H2.29Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M0.76 7.62h1.53v7.62H0.76Z"
                        fill="#ffb900"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer text-yellow-300 font-retro text-xs">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
