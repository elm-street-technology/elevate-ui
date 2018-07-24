import React from "react";

const SkipNext = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

SkipNext.displayName = "SkipNext";

SkipNext.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SkipNext;
