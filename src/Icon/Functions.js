import React from "react";

const Functions = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
  </svg>
);

Functions.displayName = "Functions";

Functions.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Functions;
