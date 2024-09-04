import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
  icon: IconProp;
  onClick?: () =>void;
  elementCount?: number;
};

const Icon = ({ icon, onClick, elementCount }: Props) => {
  const [show, setShow] = useState(false);

  const showElements = () => {
    setShow(!show);
    if (onClick) onClick();
  };
  return <div onClick={showElements}>
    <FontAwesomeIcon icon={icon} size="lg"/>
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
