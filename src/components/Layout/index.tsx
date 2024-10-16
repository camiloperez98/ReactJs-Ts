import React, { ReactNode } from "react";
import Nabvar from "../Navbar/index";
import Footer from "../Footer/index";

type Props = {
  children: ReactNode;
  menuItems?: Array<{ label: string; href: string }>;
  title?: string;
};


function Layout({ children }: Props) {
  return (
    <>
      <Nabvar/>
      <div className="">{children}</div>

      <Footer />
    </>
  );
}

export default Layout;
