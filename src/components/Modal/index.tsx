import React from "react";

type Props = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};

const Modal = ({ children, show, onClose }: Props) => {
  if (!show) return null;
  return (
    <div>
      <div>
        <button
          className="text-red-500
                          font-bold
                          mb-2"
          onClick={onClose}
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
