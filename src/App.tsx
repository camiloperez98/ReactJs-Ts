import React from 'react';
import Layout from './components/Layout/index';
import './App.css';
import FormField from "./components/FormField/index";
import Form from "./components/Form/index"

const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Usuarios', href: '/users' },
  { label: 'Productos', href: '/products' },
  { label: 'Ventas', href: '/sale' },
];

// Función que maneja el envío del formulario.
const handleSubmit = (formData: Record<string, string>) => {
  console.log("Form Data:", formData); // Muestra los datos del formulario en la consola.
  // Aquí puedes enviar los datos del formulario a tu backend o realizar otra acción.
};

const handleFormCancel = () => {
  console.log("Form canceled");
};

const App: React.FC = () => {
  return (
    <Layout menuItems={menuItems} title="E-commerce">
      <div className="content">
        <Form
      handleSubmit={handleSubmit}
      submitText="Guardar"
      title="Nuevo Usuario"
      cancelText="Cancelar"
      handleCancel={handleFormCancel}
    >
      {" "}
      {/* Define el componente Form y pasa handleSubmit como prop. */}
      <FormField name="username" type="text" placeholder="Usuario" />{" "}
      {/* Campo de formulario para el nombre de usuario. */}
      <FormField
        name="password"
        type="password"
        placeholder="Contraseña"
      />{" "}
      {/* Campo de formulario para la contraseña. */}
      <FormField
        name="email"
        type="email"
        placeholder="Correo Electronico"
      />{" "}
      {/* Campo de formulario para el email. */}
      <FormField name="phone" type="tel" placeholder="Teléfono" />{" "}
      {/* Campo de formulario para el número de teléfono. */}
      <FormField name="address" type="text" placeholder="Dirección" />{" "}
      {/* Campo de formulario para la dirección. */}
    </Form>
      </div>
    </Layout>
  );
};

export default App;
