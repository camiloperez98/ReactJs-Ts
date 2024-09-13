import React from "react";
import Layout from "./components/Layout/index";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

const App = () => {
  return (
    <div className="">
      <Layout menuItems={menuItems} title="E-commerce">
        <div
          className="w-full 
                      max-w-md 
                      mx-auto 
                      p-6"
        ></div>
      </Layout>
    </div>
  );
};

export default App;
