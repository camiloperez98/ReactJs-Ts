import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type Props = { links: { name: string; href: string }[] };

const Menu = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-2xl
                  hover:text-blue-500 
                  transition-colors duration-300"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      {isOpen && (
        <ul
          className="absolute 
                    top-full
                    left-0
                    mt-7
                    -ml-2
                    bg-white shadow-lg 
                    rounded-b-lg 
                    shadow shadow
                    w-48"
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="text-current
                        italic 
                        font-mono
                        px-4
                        py-1
                        hover:bg-neutral-100"
            >
              <a
                href={link.href}
                className="hover:text-blue-500
                          block p-2"
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
