import React from "react";

const Crop32 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" />
  </svg>
);

Crop32.displayName = "Crop32";

Crop32.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Crop32;
