import React from "react";

const FlashOn = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
);

FlashOn.displayName = "FlashOn";

FlashOn.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default FlashOn;
