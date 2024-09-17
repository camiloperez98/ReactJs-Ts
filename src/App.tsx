import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/index";
import AuthLayout from './components/Layout/AuthLayout'
import Login from "./page/login/Login";
import ForgetPassword from "./page/login/ForgetPassword";
import Error404 from "./page/404/Error404";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>




          {/* Index  */}
          <Route path="/" element={
            <Layout menuItems={menuItems} title="E-commerce">
              <div
                className="w-full 
                        max-w-md 
                        mx-auto 
                        p-6"
              ></div>
            </Layout>} >
          </Route>

          {/* login */}
          <Route path="/login" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="forget-pass" element={<ForgetPassword />} />
          </Route>

          {/* ruta no encontrada */}
          <Route path="*" element={<Error404 />}/>

        </Routes>
      </BrowserRouter>

      {/* <div className="">
        <Layout menuItems={menuItems} title="E-commerce">
          <div
            className="w-full 
                        max-w-md 
                        mx-auto 
                        p-6"
          ></div>
        </Layout>
      </div> */}
    </>
  );
};

export default App;
