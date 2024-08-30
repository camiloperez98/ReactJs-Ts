import React, { ReactNode } from 'react'
import Nabvar from "../Navbar/index";
import Footer from "../Footer/index";
import "./Layout.css";

type Props = {
    children: ReactNode;
    menuItems: Array<{label: string, href: string}>
    title?: string
}

function Layout({children}: Props) {
  const nabvarLinks = [
    {name: 'Home', href: '/'},
    {name: 'Clientes', href: '/clientes'},
    {name: 'Ventas', href: '/ventas'},
    {name: 'Usuarios', href: '/usuarios'},
    {name: 'Envios', href: '/envios'},
  ]
  return (
    <div className='layout'>
      <Nabvar title="E-commerce" links={nabvarLinks}/>
        <div className='main-content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout