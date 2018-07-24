import React from "react";

const PowerInput = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z" />
  </svg>
);

PowerInput.displayName = "PowerInput";

PowerInput.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PowerInput;
