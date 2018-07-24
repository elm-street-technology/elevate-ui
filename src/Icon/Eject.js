import React from "react";

const Eject = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </svg>
);

Eject.displayName = "Eject";

Eject.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Eject;
