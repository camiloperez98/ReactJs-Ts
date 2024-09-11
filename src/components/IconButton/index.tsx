import React, { ReactElement, useState } from "react";
// import {useNavigate} from 'react-router-dom';

type Props = {
  icon: ReactElement;
  onClick?: () => void;
  elementCount?: number;
  size?: string;
  children: ReactElement | ReactElement[];
};

const IconButton = ({ icon, onClick, elementCount, size, children }: Props) => {
  const [show, setShow] = useState(false);

  const toogleShow = () => {
    setShow(!show);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={toogleShow}

    >
      <div className={`${size}`}>{icon}</div>

      {elementCount !== undefined && elementCount > 0 && (
        <span
          className="absolute 
                        top-0 
                        right-0 
                        text-xs 
                        bg-red-500 
                        text-white 
                        rounded-full 
                        p-1"
        >
          {elementCount}
        </span>
      )}

      {show && (
        <div
          className="absolute 
                      top-full 
                      left-0 
                      bg-white 
                      shadow-md 
                      p-4"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default IconButton;
