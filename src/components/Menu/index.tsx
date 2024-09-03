import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = { links: { name: string; href: string }[] };

const Menu = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      {isOpen && (
        <ul className="py-6">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-current
                        text-xl italic 
                        font-mono
                        "
            >
              <a
                href={link.href}
                className="hover:text-blue-500"
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
