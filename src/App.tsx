import React from "react";
import Layout from "./components/Layout/index";
// import FormField from "./components/FormField/index";
// import Form from "./components/Form/index";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Usuarios", href: "/users" },
  { label: "Productos", href: "/products" },
  { label: "Ventas", href: "/sale" },
];

// const handleSubmit = (formData: Record<string, string>) => {
//   console.log("Form Data:", formData);
// };

// const handleFormCancel = () => {
//   console.log("Form canceled");
// };

const App = () => {
  return (
    <div className="">
      <Layout menuItems={menuItems} title="E-commerce">
        <div className="w-full max-w-md mx-auto p-6">
        </div>
      </Layout>
    </div>
  );
};

export default App;

{/* <Form
handleSubmit={handleSubmit}
submitText="Guardar"
title="Nuevo Usuario"
cancelText="Cancelar"
handleCancel={handleFormCancel}
>
<FormField name="username" type="text" placeholder="Usuario" />
<FormField name="password" type="password" placeholder="Contraseña" />
<FormField name="email" type="email" placeholder="Correo Electronico" />
<FormField name="phone" type="tel" placeholder="Teléfono" />
<FormField name="address" type="text" placeholder="Dirección" />
</Form>  */}