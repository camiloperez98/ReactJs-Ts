import React from "react";

// Interface Props define las propiedades que el componente FormField espera recibir.
type Props = {
  name: string; // Nombre del campo del formulario.
  type: string; // Tipo del input (text, password, email, etc.).
  placeholder?: string; // Placeholder del input, opcional.
  label?: string; // Etiqueta del campo, opcional.
}

// Función FormField que acepta las Props definidas anteriormente.
export function FormField(props: Props) {
  const { name, type, placeholder, label } = props; // Extrae las props name, type, placeholder y label.
  return (
    <div className="form-group"> {/* Contenedor del campo del formulario. */}
      {label && <label htmlFor={name}>{label}</label>} {/* Renderiza la etiqueta si se proporciona. */}
      <input
        id={name} // Asigna el id del input.
        name={name} // Asigna el nombre del input.
        type={type} // Asigna el tipo del input.
        placeholder={placeholder} // Asigna el placeholder del input, si se proporciona.
        className="form-control" // Clase CSS para estilizar el input.
      />
    </div>
  );
}

// Exportación del componente FormField para que pueda ser importado y utilizado en otros archivos.
export default FormField;
