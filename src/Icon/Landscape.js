import React from "react";

const Landscape = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
  </svg>
);

Landscape.displayName = "Landscape";

Landscape.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Landscape;
