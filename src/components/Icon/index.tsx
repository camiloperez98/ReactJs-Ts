// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useState } from "react";

type Props = {
  icon: ReactElement;
  onClick?: () =>void;
  elementCount?: number;
  size?: string
};

const Icon = ({ icon, onClick, elementCount, size }: Props) => {
  const [show, setShow] = useState(false);

  const showElements = () => {
    setShow(!show);
    if (onClick) onClick();
  };
  return <div onClick={showElements}>
    <div className={`${size}`}>
    {icon}
    </div>
    {elementCount !== undefined && elementCount > 0 && (
      <span>
        {elementCount}
      </span>
    )}
    {show && (
      <div>

      </div>
    )}
  </div>
};

export default Icon;
