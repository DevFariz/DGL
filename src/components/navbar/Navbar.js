import { useState, useRef, useEffect } from "react";
import Dropdown from "../dropdown/Dropdown";

import "./Navbar.scss";

import logo from "../../resources/img/user-profile-logo.png";
import dashboardLogo from "../../resources/svg/dashboard-logo.svg";
import profileLogo from "../../resources/svg/profile-logo.svg";
import activitiesLogo from "../../resources/svg/activities-logo.svg";
import dataLogo from "../../resources/svg/data-logo.svg";
import forumLogo from "../../resources/svg/forum-logo.svg";
import learnLogo from "../../resources/svg/learn-logo.svg";

const Navbar = () => {
  const navPanelItems = [
    {
      id: 1,
      label: "Dashboard",
      image: dashboardLogo,
      link: [],
    },
    {
      id: 2,
      label: "Profile",
      image: profileLogo,
      link: [
        "Mein Profil",
        "Mein Unternehmen",
        "Mein Fortschritt",
        "Postfach",
        "Benutzereinstellung",
        "Abmelden",
      ],
    },
    {
      id: 3,
      label: "Activities",
      image: activitiesLogo,
      link: ["Maßnahmen", "Quiz", "Aufgaben"],
    },
    {
      id: 4,
      label: "Data",
      image: dataLogo,
      link: ["Strom/ Gas", "Wasser", "Heizung", "Ressourcen"],
    },
    {
      id: 5,
      label: "Forum",
      image: forumLogo,
      link: ["Chat", "Telefon"],
    },
    {
      id: 6,
      label: "Learn",
      image: learnLogo,
      link: ["Fortbildungs-Seminare"],
    },
  ];

  const [navPanelItemsActive, setNavPanelsItemsActive] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const clickNavItem = (id) => {
    setNavPanelsItemsActive(id)
    setIsDropdownOpen(true)
  }

  return (
    <nav className="nav-panel">
      <img src={logo} alt="logo" className="nav-panel__logo" />

      <ul className="nav-panel__menu">
        {navPanelItems.map(({ label, image, link, id }) => {
          return (
            <li
              className="nav-panel__item"
              key={id}
            >
              <a
                href="#a"
                onClick={() => clickNavItem(id)}
                className={`nav-panel__link ${
                  navPanelItemsActive === id ? "nav-panel__link_active" : null
                }`}
              >
                <img src={image} alt={label} />
                <span>{label}</span>
              </a>
              {link.length !== 0 && navPanelItemsActive === id && isDropdownOpen ? (
                <Dropdown links={link} setIsDropdownOpen={setIsDropdownOpen} />
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="nav-panel__bottom">
        <a href="#a" className="nav-panel__bottom-link">
          Impressum
        </a>
        <a href="#a" className="nav-panel__bottom-link">
          FAQ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
