import React from "react";

const SkipPrevious = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
);

SkipPrevious.displayName = "SkipPrevious";

SkipPrevious.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SkipPrevious;
