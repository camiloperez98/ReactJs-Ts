import React from "react";

interface Props {
  items: Array<{ label: string; href: string }>; // Array de objetos para los elementos del menú
  title?: string; // Título opcional para el sidebar
}

const Sidebar = ({ items, title }: Props) => {
  return (
    <div className="sidebar">
      {title && <h2 className="sidebar-title">{title}</h2>}
      <ul className="sidebar-menu">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            <a href={item.href} className="sidebar-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
