import React, { ReactNode } from 'react'
import Sidebar from "../Sidebar/index";
import Footer from "../Footer/index";
import "./Layout.css";

type Props = {
    children: ReactNode;
    menuItems: Array<{label: string, href: string}>
    title?: string
}

function Layout({children, menuItems, title}: Props) {
  return (
    <div className='layout'>
        <Sidebar items={menuItems} title={title}/>
        <div className='main-content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout