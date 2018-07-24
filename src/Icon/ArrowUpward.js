import React from "react";

const ArrowUpward = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg>
);

ArrowUpward.displayName = "ArrowUpward";

ArrowUpward.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ArrowUpward;
