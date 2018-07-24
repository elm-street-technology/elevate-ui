import React from "react";

const ViewQuilt = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" />
  </svg>
);

ViewQuilt.displayName = "ViewQuilt";

ViewQuilt.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewQuilt;
