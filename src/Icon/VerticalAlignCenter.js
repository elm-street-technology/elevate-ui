import React from "react";

const VerticalAlignCenter = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z" />
  </svg>
);

VerticalAlignCenter.displayName = "VerticalAlignCenter";

VerticalAlignCenter.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default VerticalAlignCenter;
