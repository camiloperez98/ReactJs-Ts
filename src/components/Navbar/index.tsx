import React from "react";
import Menu from "../Menu/index";

type Props = {
  title: string;
  links: { name: string; href: string }[];
};

const Navbar = ({ title, links }: Props) => {
  return (
    <nav
      className="flex justify-content: flex-start
                px-12
                pl-24
                py-6
                drop-shadow-md 
                bg-gradient-to-t from-white to-gray-200 
                shadow shadow-gray-500/40"
    >
      <Menu links={links} />
      <div
        className="ml-20 
                  text-slate-800
                  text-3xl italic 
                  font-mono
                "
      >
        {title}
      </div>
    </nav>
  );
};

export default Navbar;
