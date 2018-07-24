import React from "react";

const Reorder = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
  </svg>
);

Reorder.displayName = "Reorder";

Reorder.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Reorder;
