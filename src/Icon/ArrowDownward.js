import React from "react";

const ArrowDownward = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

ArrowDownward.displayName = "ArrowDownward";

ArrowDownward.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowDownward;
