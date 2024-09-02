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
    <div className="">
      <button className="" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul className="">
          {links.map((link, index) => (
            <li key={index} className="">
              <a
                href={link.href}
                className=""
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
