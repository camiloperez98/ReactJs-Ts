import React, { ReactElement, useState } from "react";

type Props = {
  icon: ReactElement;
  onClick?: () => void;
  elementCount?: number;
  size?: string;
  children: ReactElement | null;
};

const IconButton = ({ icon, onClick, elementCount, size, children }: Props) => {
  const [show, setShow] = useState(false);

  const toogleShow = () => {
    setShow(!show);
    if (onClick) onClick();
  };

  return (
    <div className="relative" onClick={toogleShow}>
      <div className={`${size} relative`}>
        {icon}
        {elementCount !== undefined && elementCount > 0 && (
          <span
            className="absolute
                            top-0
                            right-0
                            bg-red-500
                            text-white
                            rounded-full
                            text-xs
                            h-5
                            w-5
                            flex items-center
                            justify-center
                            "
          >
            {elementCount}
          </span>
        )}
      </div>
      {show && (
        <div
          className="absolute
                      top-full
                      left-0
                      mt-2
                      bg.white
                      shadow-lg
                      p-4
                      z10"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default IconButton;
