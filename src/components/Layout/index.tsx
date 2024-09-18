import React, { ReactNode } from "react";
import Nabvar from "../Navbar/index";

import AuthLayout from "./AuthLayout";

import Footer from "../Footer/index";


type Props = {
  children: ReactNode;
  menuItems: Array<{ label: string; href: string }>;
  title?: string;
};

function Layout({ children }: Props) {
  const nabvarLinks = [
    { name: "Home", href: "/" },
    { name: "Clientes", href: "/clientes" },
    { name: "Ventas", href: "/ventas" },
    { name: "Usuarios", href: "/usuarios" },
    { name: "Envios", href: "/envios" },
  ];
  return (
    <>
      <Nabvar title="E-commerce" links={nabvarLinks} />
      <div className="px-8">{children}</div>


      <Footer/>

    </>
  );
}

export default Layout;
