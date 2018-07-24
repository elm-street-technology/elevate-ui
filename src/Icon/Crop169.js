import React from "react";

const Crop169 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
  </svg>
);

Crop169.displayName = "Crop169";

Crop169.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Crop169;
