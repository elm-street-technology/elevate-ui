import React from "react";

const Brightness1 = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 12 2 A 10 10 0 0 1 12 22 A 10 10 0 0 1 12 2" />
  </svg>
);

Brightness1.displayName = "Brightness1";

Brightness1.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Brightness1;
