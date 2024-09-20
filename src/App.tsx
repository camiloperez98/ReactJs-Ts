import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index";
import ProductList from "./page/Products/index"; // Importa tu componente ProductList
import Error404 from "./page/404/Error404"; // Puedes manejar errores 404
// Otras importaciones...

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout menuItems={menuItems} title="E-commerce">
        <div
          className="w-full 
                      mx-auto 
                      pt-4 
                      pb-[372px]"
        >
          <div
            className="pl-[45px] 
                        pr-[45px]"
          >
          </div>
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="*" element={<Error404 />} />{" "}
            {/* Para manejar rutas no existentes */}
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
