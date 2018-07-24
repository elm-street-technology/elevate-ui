import React from "react";

const ExpandLess = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);

ExpandLess.displayName = "ExpandLess";

ExpandLess.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default ExpandLess;
