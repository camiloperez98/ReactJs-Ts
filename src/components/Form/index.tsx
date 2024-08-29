import React, { ReactNode } from "react";
import "./Form.css"; 

type Props = {
  children: ReactNode; // Los componentes hijos que serán renderizados dentro del formulario.
  handleSubmit: (formData: Record<string, string>) => void; // Función que se ejecuta al enviar el formulario.
  submitText?: string; 
  title?: string; 
  cancelText?: string; 
  handleCancel?: () => void; 
}


function Form(props: Props) {
  const { children, handleSubmit, submitText = "Submit", title, cancelText = "Cancel", handleCancel } = props; 

  // Manejador de envío del formulario
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 

    // Extraer datos del formulario
    const form = event.target as HTMLFormElement; // Obtiene el formulario desde el evento.
    const formData = new FormData(form); // Crea un objeto FormData con los datos del formulario.
    const data: Record<string, string> = {}; // Inicializa un objeto vacío para almacenar los datos del formulario.
    formData.forEach((value, key) => {
      data[key] = value as string; // Llena el objeto data con las claves y valores de los campos del formulario.
    });

    // Llamar a la función handleSubmit con los datos del formulario
    handleSubmit(data); // Ejecuta la función handleSubmit pasando los datos del formulario.

    // Limpiar los campos del formulario
    form.reset(); // Resetea el formulario después de enviar.
  };

  return (
    <form onSubmit={onSubmit}> {/* Define el manejador onSubmit para el evento de envío del formulario. */}
      {title && <h2 className="form-title">{title}</h2>} {/* Renderiza el título si se proporciona. */}
      {children} {/* Renderiza los hijos pasados al componente Form. */}
      <div className="form-buttons">
        <button type="submit">{submitText}</button> {/* Botón para enviar el formulario con texto personalizado. */}
        {handleCancel && <button type="button" onClick={handleCancel}>{cancelText}</button>} {/* Botón de cancelar si se proporciona handleCancel. */}
      </div>
    </form>
  );
}

// Exportación del componente Form para que pueda ser importado y utilizado en otros archivos.
export default Form;
