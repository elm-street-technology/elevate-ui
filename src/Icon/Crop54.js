import React from "react";

const Crop54 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z" />
  </svg>
);

Crop54.displayName = "Crop54";

Crop54.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Crop54;
