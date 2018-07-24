import React from "react";

const Warning = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

Warning.displayName = "Warning";

Warning.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Warning;
