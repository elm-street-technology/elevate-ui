import React from "react";

const LocalCafe = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z" />
  </svg>
);

LocalCafe.displayName = "LocalCafe";

LocalCafe.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LocalCafe;
