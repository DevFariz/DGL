import { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ links, setIsDropdownOpen }) => {
  return (
    <>
      <div className="dropdown">
        <ul className="dropdown-menu">
          {links.map((item, i) => {
            return (
              <li
                className="dropdown-item"
                key={i}
                onClick={() => setIsDropdownOpen(false)}
              >
                <a href="#a">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
