import React from "react";
import Menu from "../Menu/index";

type Props = {
  title: string;
  links: { name: string; href: string }[];
};

const Navbar = ({ title, links }: Props) => {
  return (
    <nav className="flex justify-content: flex-start">
      <Menu links={links} />
      <div className="">{title}</div>
    </nav>
  );
};

export default Navbar;
