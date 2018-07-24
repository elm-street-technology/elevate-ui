import React from "react";

const Crop75 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" />
  </svg>
);

Crop75.displayName = "Crop75";

Crop75.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Crop75;
