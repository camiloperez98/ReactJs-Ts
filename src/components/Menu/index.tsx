import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

type Props = { links: { name: string; href: string }[] };

const Menu = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburguer-menu">
      <button className="hamburguer-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul className="hamburguer-links">
          {links.map((link, index) => (
            <li key={index} className="hamburguer-item">
              <a
                href={link.href}
                className="hamburguer-link"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
