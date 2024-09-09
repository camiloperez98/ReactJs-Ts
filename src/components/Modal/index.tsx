import React from "react";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
  return (
    <div
      className="fixed inset-0 
                flex items-center 
                justify-center 
                bg-gray-800 
                bg-opacity-50"
    >
      <div
        className="bg-white 
                    p-4 rounded 
                    shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute 
                    top-2 right-2 
                    text-gray-500 
                    hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
