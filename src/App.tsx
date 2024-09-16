import React from "react";
import Layout from "./components/Layout/index";
import Form from "./components/Form/index";
import { FieldValues } from "react-hook-form";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

const App = () => {
  const fields = [
    {
      name: "Nombre",
      label: "nombre",
      type: "text",
      validation: {
        required: "Este campo es obligatorio",
        minLength: {
          value: 3,
          message: "El nombre debe tener al menos 3 caracteres",
        },
      },
    },
    {
      name: "Teléfono",
      label: "telefono",
      type: "text",
      validation: {
        required: "Este campo es obligatorio",
        minLength: {
          value: 10,
          message: "El telefono debe tener al menos 10 caracteres",
        },
      },
    },
    {
      name: "Correo Electrónico",
      label: "correo",
      type: "email",
      validation: {
        required: "Este campo es obligatorio",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "El correo electrónico no es válido",
        },
      },
    },
    {
      name: "Contraseña",
      label: "Contrasena",
      type: "password",
      validation: {
        required: "Este campo es obligatorio",
        minLength: {
          value: 6,
          message: "La contraseña debe tener al menos 6 caracteres",
        },
      },
    },
  ];

  const onSubmit = (data: FieldValues) => {
    console.log("Datos enviados", data);
  };
  return (
    <div>
      <Layout menuItems={menuItems} title="E-commerce">
        <div
          className="w-full 
                      max-w-md 
                      mx-auto 
                      p-8
                      pt-16
                      pb-64"
        >
          <Form
            fields={fields}
            onSubmit={onSubmit}
            title="Nuevo Registro"
            buttonText="Guardar"
          />
        </div>
      </Layout>
    </div>
  );
};

export default App;
