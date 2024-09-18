import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/index";
// import Form from "./components/Form/index";
// import { FieldValues } from "react-hook-form";
// import FilterButtons from "./components/FilterButtons/index";
import { fetchData } from "./apiFetch";
import Card from "./components/Card/index";
const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

type Producto = {
  id: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  };
};

const App = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await fetchData<Producto[]>(
        "https://fakestoreapi.com/products"
      );
      setProductos(data);
    };

    obtenerProductos();
  }, []);
  // const fields = [
  //   {
  //     name: "Nombre",
  //     label: "nombre",
  //     type: "text",
  //     validation: {
  //       required: "Este campo es obligatorio",
  //       minLength: {
  //         value: 3,
  //         message: "El nombre debe tener al menos 3 caracteres",
  //       },
  //     },
  //   },
  //   {
  //     name: "Teléfono",
  //     label: "telefono",
  //     type: "text",
  //     validation: {
  //       required: "Este campo es obligatorio",
  //       pattern:{
  //         value: /^[0-9]+$/,
  //         message: "Solo se permiten números",
  //       },
  //       minLength: {
  //         value: 10,
  //         message: "El telefono debe tener al menos 10 caracteres",
  //       },
  //     },
  //   },
  //   {
  //     name: "Correo Electrónico",
  //     label: "correo",
  //     type: "email",
  //     validation: {
  //       required: "Este campo es obligatorio",
  //       pattern: {
  //         value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  //         message: "El correo electrónico no es válido",
  //       },
  //     },
  //   },
  //   {
  //     name: "Contraseña",
  //     label: "Contrasena",
  //     type: "password",
  //     validation: {
  //       required: "Este campo es obligatorio",
  //       minLength: {
  //         value: 6,
  //         message: "La contraseña debe tener al menos 6 caracteres",
  //       },
  //     },
  //   },
  // ];

  // const onSubmit = (data: FieldValues) => {
  //   console.log("Datos enviados", data);
  // };
  return (
    <div>
      <Layout menuItems={menuItems} title="E-commerce">
        <div
          className="w-full 
                      mx-auto 
                      pt-4
                      pb-[455px]"
        >
          <div
            className="pl-[45px]
                pr-[45px]"
          >
           <div className="grid grid-cols-4 gap-4">
           {productos.map((producto) => (
              <Card
                key={producto.id}
                data={producto}
                onClick={(id) => console.log(id)}
              />
            ))}
           </div>
          </div>
          {/* <Form
            fields={fields}
            onSubmit={onSubmit}
            title="Nuevo Registro"
            buttonText="Guardar"
          /> */}
        </div>
      </Layout>
    </div>
  );
};

export default App;
