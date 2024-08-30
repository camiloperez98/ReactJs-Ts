import React from "react";
import Menu from "../Menu/index";

type Props = {
  title: string;
  links: { name: string; href: string }[];
};

const Navbar = ({ title, links }: Props) => {
  return (
    <nav className="navbar">
      <Menu links={links} />
      <div className="navbar-brand">{title}</div>
    </nav>
  );
};

export default Navbar;
