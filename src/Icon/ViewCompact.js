import React from "react";

const ViewCompact = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
  </svg>
);

ViewCompact.displayName = "ViewCompact";

ViewCompact.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ViewCompact;
